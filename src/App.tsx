import { useState } from 'react';
import ReferralForm from './pages/ReferralForm';
import PositionsList from './components/PositionsList';

const App = () => {
  const [selectedPositionId, setSelectedPositionId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <h1 className="text-2xl font-bold text-slate-900">Employee Referral Application</h1>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 space-y-8">
        {!selectedPositionId && (
          <PositionsList onSelect={setSelectedPositionId} />
        )}

        {selectedPositionId && (
          <ReferralForm
            initialPositionId={selectedPositionId}
            onBack={() => setSelectedPositionId(null)}
          />
        )}
      </main>
    </div>
  );
};

export default App;
