import React, { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

type Position = {
  id: number;
  title: string;
};

interface PositionsListProps {
  onSelect: (id: number) => void;
}

const PositionsList: React.FC<PositionsListProps> = ({ onSelect }) => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const filteredPositions = positions.filter((position) =>
    position.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch(`${API_URL}/api/jds`);
        const data = await response.json();
        setPositions(data.positions ?? []);
      } catch {
        setError('Unable to load positions.');
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  return (
    <div className="section-card">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Open Positions</h2>
          <p className="mt-1 text-sm text-slate-600">Select a position to start a referral.</p>
        </div>
        <div className="w-full md:w-80">
          <input
            type="text"
            className="field-input"
            placeholder="Search positions..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {loading && <p className="text-sm text-slate-500">Loading positions...</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        {!loading && !error && filteredPositions.length === 0 && (
          <p className="text-sm text-slate-500">No positions found for your search.</p>
        )}
        {filteredPositions.map((position) => (
          <button
            key={position.id}
            type="button"
            onClick={() => onSelect(position.id)}
            className="flex flex-col items-start rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-left transition hover:border-brand-300 hover:bg-white"
          >
            <span className="text-base font-semibold text-slate-900">{position.title}</span>
            <span className="mt-2 text-xs text-slate-500">Click to refer</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PositionsList;
