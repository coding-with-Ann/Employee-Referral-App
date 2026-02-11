import React, { useState } from 'react';

interface TagInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  value: string[];
  onChange: (next: string[]) => void;
  error?: string;
  helperText?: string;
}

const TagInput: React.FC<TagInputProps> = ({
  label,
  placeholder,
  required,
  value,
  onChange,
  error,
  helperText
}) => {
  const [input, setInput] = useState('');

  const addTag = (raw: string) => {
    const tag = raw.trim();
    if (!tag) return;
    if (value.some((item) => item.toLowerCase() === tag.toLowerCase())) return;
    onChange([...value, tag]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      addTag(input);
      setInput('');
    }
  };

  return (
    <div>
      <label className="field-label">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="mt-1 rounded-lg border border-slate-300 bg-white px-2 py-2 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-200">
        <div className="flex flex-wrap gap-2">
          {value.map((tag) => (
            <span key={tag} className="badge">
              {tag}
              <button
                type="button"
                className="ml-2 text-brand-700 hover:text-brand-900"
                onClick={() => onChange(value.filter((item) => item !== tag))}
              >
                x
              </button>
            </span>
          ))}
          <input
            className="flex-1 min-w-[160px] border-0 bg-transparent px-2 py-1 text-sm text-slate-900 focus:outline-none"
            placeholder={placeholder}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      {helperText && <p className="mt-1 text-xs text-slate-500">{helperText}</p>}
      {error && <p className="field-error">{error}</p>}
    </div>
  );
};

export default TagInput;
