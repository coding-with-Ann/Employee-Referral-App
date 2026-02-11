import React, { useEffect, useMemo, useState } from 'react';

interface SkillAutocompleteTagsProps {
  apiUrl: string;
  positionId?: number;
  selectedSkills: string[];
  onChange: (selectedSkills: string[]) => void;
  label?: string;
  placeholder?: string;
  error?: string;
}

const SkillAutocompleteTags: React.FC<SkillAutocompleteTagsProps> = ({
  apiUrl,
  positionId,
  selectedSkills,
  onChange,
  label = 'Skills',
  placeholder = 'Type to search skills...',
  error
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const selectedLower = useMemo(
    () => new Set(selectedSkills.map((skill) => skill.toLowerCase())),
    [selectedSkills]
  );

  const fetchSuggestions = async (rawQuery: string, signal?: AbortSignal) => {
    try {
      setLoading(true);
      const search = new URLSearchParams({ query: rawQuery });
      if (positionId) search.set('positionId', String(positionId));
      const response = await fetch(`${apiUrl}/api/skills?${search.toString()}`, { signal });
      const data = await response.json();
      const nextSuggestions = Array.isArray(data.skills)
        ? data.skills.filter((skill: string) => !selectedLower.has(skill.toLowerCase()))
        : [];
      setSuggestions(nextSuggestions);
      setShowNoResults(nextSuggestions.length === 0);
      setOpen(true);
      setHighlightedIndex(nextSuggestions.length > 0 ? 0 : -1);
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        setSuggestions([]);
        setShowNoResults(true);
        setOpen(true);
        setHighlightedIndex(-1);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const trimmed = query.trim();
    if (!inputFocused && !trimmed) {
      setSuggestions([]);
      setOpen(false);
      setHighlightedIndex(-1);
      setShowNoResults(false);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        await fetchSuggestions(trimmed, controller.signal);
      } catch {
        // handled inside fetchSuggestions
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [apiUrl, positionId, query, selectedLower, inputFocused]);

  const addSkill = (skill: string) => {
    if (selectedLower.has(skill.toLowerCase())) return;
    onChange([...selectedSkills, skill]);
    setQuery('');
    setSuggestions([]);
    setOpen(false);
    setHighlightedIndex(-1);
    setShowNoResults(false);
  };

  const removeSkill = (skill: string) => {
    onChange(selectedSkills.filter((item) => item !== skill));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || (suggestions.length === 0 && !showNoResults)) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (suggestions.length > 0) {
        setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
      }
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (suggestions.length > 0) {
        setHighlightedIndex((prev) => (prev <= 0 ? suggestions.length - 1 : prev - 1));
      }
      return;
    }

    if (event.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        event.preventDefault();
        addSkill(suggestions[highlightedIndex]);
      }
      return;
    }

    if (event.key === 'Escape') {
      setOpen(false);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div className="relative">
      <label className="field-label">{label}</label>
      <div className="mt-1 rounded-lg border border-slate-300 bg-white px-2 py-2 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-200">
        <div className="flex flex-wrap gap-2">
          {selectedSkills.map((skill) => (
            <span key={skill} className="badge inline-flex items-center">
              {skill}
              <button
                type="button"
                className="ml-2 text-brand-700 hover:text-brand-900"
                onClick={() => removeSkill(skill)}
                aria-label={`Remove ${skill}`}
              >
                ×
              </button>
            </span>
          ))}
          <input
            className="flex-1 min-w-[220px] border-0 bg-transparent px-2 py-1 text-sm text-slate-900 focus:outline-none"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              setInputFocused(true);
              if (!query.trim()) {
                void fetchSuggestions('');
              } else {
                setOpen(true);
              }
            }}
            onBlur={() => {
              setInputFocused(false);
              setTimeout(() => setOpen(false), 100);
            }}
            placeholder={placeholder}
          />
        </div>
      </div>

      {open && (
        <div className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-slate-200 bg-white shadow-lg">
          {loading && <div className="px-3 py-2 text-sm text-slate-500">Searching...</div>}
          {!loading && suggestions.map((skill, index) => (
            <button
              key={skill}
              type="button"
              className={`block w-full px-3 py-2 text-left text-sm ${
                index === highlightedIndex ? 'bg-brand-50 text-brand-900' : 'text-slate-700 hover:bg-slate-50'
              }`}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => addSkill(skill)}
            >
              {skill}
            </button>
          ))}
          {!loading && showNoResults && (
            <div className="px-3 py-2 text-sm text-slate-500">No results found</div>
          )}
        </div>
      )}

      {error && <p className="field-error">{error}</p>}
    </div>
  );
};

export default SkillAutocompleteTags;
