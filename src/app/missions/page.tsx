'use client';

import { ISRO_MISSIONS } from '@/lib/nasa';

export default function Missions() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">ISRO & NASA Missions</h1>
        <p className="text-gray-400 text-lg">
          Explore India's and America's most incredible space missions
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-cosmic-blue/20">
        <button className="px-6 py-3 border-b-2 border-cosmic-blue text-cosmic-blue font-semibold">
          🇮🇳 ISRO Missions
        </button>
        <button className="px-6 py-3 border-b-2 border-transparent text-gray-400 hover:text-cosmic-blue font-semibold transition-colors">
          🇺🇸 NASA Missions
        </button>
      </div>

      {/* ISRO Missions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">India's Space Agency (ISRO)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ISRO_MISSIONS.map((mission) => (
            <div key={mission.id} className="glass-card overflow-hidden hover:shadow-lg hover:shadow-cosmic-blue/30 transition-all duration-300">
              {/* Image */}
              <div className="w-full h-40 bg-gradient-to-br from-cosmic-blue/20 to-cosmic-purple/20 flex items-center justify-center text-5xl">
                🛸
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-cosmic-blue">{mission.name}</h3>
                    <p className="text-sm text-gray-400">{mission.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    mission.status === 'Success'
                      ? 'bg-green-500/20 text-green-400'
                      : mission.status === 'Active'
                      ? 'bg-cosmic-blue/20 text-cosmic-blue'
                      : 'bg-cosmic-amber/20 text-cosmic-amber'
                  }`}>
                    {mission.status}
                  </span>
                </div>

                <p className="text-gray-300 text-sm">{mission.details}</p>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-cosmic-blue/20">
                  <span>Year: {mission.year}</span>
                  <button className="text-cosmic-blue hover:text-cosmic-purple transition-colors font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="glass-card p-8 space-y-6">
        <h2 className="text-2xl font-bold">Mission Timeline</h2>
        <div className="space-y-4">
          {[
            { year: 2014, title: 'Mangalyaan', description: 'First interplanetary mission', icon: '🔴' },
            { year: 2019, title: 'Chandrayaan-2', description: 'Second lunar mission', icon: '🌙' },
            { year: 2023, title: 'Chandrayaan-3', description: 'Successful lunar landing', icon: '✅' },
            { year: 2023, title: 'Aditya-L1', description: 'Solar observation mission', icon: '☀️' },
            { year: 2024, title: 'Gaganyaan', description: 'Crewed spaceflight program', icon: '👨‍🚀' },
          ].map((event, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="text-2xl">{event.icon}</div>
                {i < 4 && <div className="w-1 h-12 bg-cosmic-blue/30 mt-4"></div>}
              </div>
              <div className="pb-4">
                <p className="text-xs text-cosmic-blue font-semibold">{event.year}</p>
                <p className="font-bold text-white">{event.title}</p>
                <p className="text-sm text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Achievements */}
      <div className="glass-card p-8 border-l-4 border-cosmic-amber space-y-4">
        <h2 className="text-2xl font-bold">India's Space Achievement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-cosmic-blue font-semibold">🏆 Firsts</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ First attempt Mars landing in first try (Mangalyaan 2014)</li>
              <li>✓ Cheapest Mars mission in the world</li>
              <li>✓ Landed on Moon's South Pole (Chandrayaan-3)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-cosmic-purple font-semibold">🚀 Future Plans</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Gaganyaan - Crewed missions to space</li>
              <li>✓ Venus missions</li>
              <li>✓ Space station plans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
