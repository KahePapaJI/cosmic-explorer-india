'use client';

import { useState } from 'react';

export default function Seasons() {
  const [selectedHemisphere, setSelectedHemisphere] = useState<'northern' | 'southern'>('northern');
  const [selectedMonth, setSelectedMonth] = useState(3);

  const seasons = {
    northern: [
      { month: 'Dec', season: 'Winter', icon: '❄️', tilt: 'Away' },
      { month: 'Jan', season: 'Winter', icon: '❄️', tilt: 'Away' },
      { month: 'Feb', season: 'Winter', icon: '❄️', tilt: 'Away' },
      { month: 'Mar', season: 'Spring', icon: '🌸', tilt: 'Tilted' },
      { month: 'Apr', season: 'Spring', icon: '🌸', tilt: 'Tilted' },
      { month: 'May', season: 'Spring', icon: '🌸', tilt: 'Tilted' },
      { month: 'Jun', season: 'Summer', icon: '☀️', tilt: 'Towards' },
      { month: 'Jul', season: 'Summer', icon: '☀️', tilt: 'Towards' },
      { month: 'Aug', season: 'Summer', icon: '☀️', tilt: 'Towards' },
      { month: 'Sep', season: 'Autumn', icon: '🍂', tilt: 'Tilted' },
      { month: 'Oct', season: 'Autumn', icon: '🍂', tilt: 'Tilted' },
      { month: 'Nov', season: 'Autumn', icon: '🍂', tilt: 'Tilted' },
    ],
    southern: [
      { month: 'Dec', season: 'Summer', icon: '☀️', tilt: 'Towards' },
      { month: 'Jan', season: 'Summer', icon: '☀️', tilt: 'Towards' },
      { month: 'Feb', season: 'Summer', icon: '☀️', tilt: 'Towards' },
      { month: 'Mar', season: 'Autumn', icon: '🍂', tilt: 'Tilted' },
      { month: 'Apr', season: 'Autumn', icon: '🍂', tilt: 'Tilted' },
      { month: 'May', season: 'Autumn', icon: '🍂', tilt: 'Tilted' },
      { month: 'Jun', season: 'Winter', icon: '❄️', tilt: 'Away' },
      { month: 'Jul', season: 'Winter', icon: '❄️', tilt: 'Away' },
      { month: 'Aug', season: 'Winter', icon: '❄️', tilt: 'Away' },
      { month: 'Sep', season: 'Spring', icon: '🌸', tilt: 'Tilted' },
      { month: 'Oct', season: 'Spring', icon: '🌸', tilt: 'Tilted' },
      { month: 'Nov', season: 'Spring', icon: '🌸', tilt: 'Tilted' },
    ],
  };

  const currentSeasons = seasons[selectedHemisphere];
  const currentMonth = currentSeasons[selectedMonth];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">Seasons Simulator</h1>
        <p className="text-gray-400 text-lg">
          Understand how Earth's tilt and orbit create seasons
        </p>
      </div>

      {/* Controls */}
      <div className="glass-card p-6 space-y-4">
        <h2 className="text-xl font-bold">Select Hemisphere</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedHemisphere('northern')}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
              selectedHemisphere === 'northern'
                ? 'bg-cosmic-blue text-white'
                : 'bg-space-darker/50 border border-cosmic-blue/20 text-gray-300 hover:border-cosmic-blue/50'
            }`}
          >
            🌍 Northern Hemisphere
          </button>
          <button
            onClick={() => setSelectedHemisphere('southern')}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
              selectedHemisphere === 'southern'
                ? 'bg-cosmic-purple text-white'
                : 'bg-space-darker/50 border border-cosmic-blue/20 text-gray-300 hover:border-cosmic-blue/50'
            }`}
          >
            🌎 Southern Hemisphere
          </button>
        </div>
      </div>

      {/* Visualization */}
      <div className="glass-card p-8 space-y-8">
        <h2 className="text-2xl font-bold">Earth's Orbit & Tilt</h2>

        {/* Earth orbit diagram */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 border-2 border-cosmic-blue/30 rounded-full flex items-center justify-center">
            {/* Sun at center */}
            <div className="absolute text-5xl">☀️</div>

            {/* Earth orbiting */}
            <div
              className="absolute w-12 h-12 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 transition-all duration-300"
              style={{
                transform: `rotate(${selectedMonth * 30}deg) translateX(120px)`,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-blue-600/50"></div>
            </div>

            {/* Axis of rotation indicator */}
            <div className="absolute text-sm text-gray-400 top-4">Axis: 23.5°</div>
          </div>
        </div>

        {/* Month selector */}
        <div className="space-y-3">
          <p className="text-sm text-gray-400">Select Month</p>
          <div className="grid grid-cols-12 gap-2">
            {currentSeasons.map((month, i) => (
              <button
                key={i}
                onClick={() => setSelectedMonth(i)}
                className={`p-2 rounded text-xs font-semibold transition-all ${
                  selectedMonth === i
                    ? 'bg-cosmic-blue text-white ring-2 ring-cosmic-blue/50'
                    : 'bg-space-darker/50 text-gray-400 hover:bg-space-darker'
                }`}
              >
                {month.month}
              </button>
            ))}
          </div>
        </div>

        {/* Current season info */}
        <div className="p-6 bg-gradient-to-r from-cosmic-blue/10 to-cosmic-purple/10 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{currentMonth.season}</p>
              <p className="text-gray-400">in {selectedHemisphere === 'northern' ? 'Northern' : 'Southern'} Hemisphere</p>
            </div>
            <div className="text-6xl">{currentMonth.icon}</div>
          </div>
          <p className="text-sm text-gray-300">
            Earth's axis is tilted <strong>{currentMonth.tilt}</strong> the Sun
          </p>
        </div>
      </div>

      {/* Detailed Explanation */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">How Seasons Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-bold text-cosmic-blue">🌍 Earth's Axial Tilt</h3>
            <p className="text-gray-300">
              Earth's axis is tilted 23.5° relative to its orbital plane. This tilt is the PRIMARY reason for seasons, not the distance from the Sun.
            </p>
          </div>
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-bold text-cosmic-purple">☀️ Sunlight Distribution</h3>
            <p className="text-gray-300">
              When a hemisphere is tilted toward the Sun, it receives more direct sunlight and has longer days = SUMMER. When tilted away = WINTER.
            </p>
          </div>
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-bold text-cosmic-amber">📅 Equinoxes</h3>
            <p className="text-gray-300">
              Spring and Autumn Equinoxes occur when Earth's axis is perpendicular to the Sun, giving 12 hours of day and night everywhere.
            </p>
          </div>
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-bold text-green-400">❄️ Solstices</h3>
            <p className="text-gray-300">
              Summer and Winter Solstices are when Earth's tilt is at maximum angle to the Sun, creating longest and shortest days.
            </p>
          </div>
        </div>
      </div>

      {/* Season Details Table */}
      <div className="glass-card p-6 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Seasonal Characteristics</h2>
        <table className="w-full text-sm">
          <thead className="border-b border-cosmic-blue/20">
            <tr>
              <th className="text-left p-3">Season</th>
              <th className="text-left p-3">Icon</th>
              <th className="text-left p-3">Northern HEM</th>
              <th className="text-left p-3">Southern HEM</th>
              <th className="text-left p-3">Characteristics</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-cosmic-blue/10 hover:bg-cosmic-blue/5">
              <td className="p-3 font-semibold">Spring/Autumn</td>
              <td className="p-3">🌸/🍂</td>
              <td className="p-3">Mar-May</td>
              <td className="p-3">Sep-Nov</td>
              <td className="p-3">Mild, equal day/night</td>
            </tr>
            <tr className="border-b border-cosmic-blue/10 hover:bg-cosmic-blue/5">
              <td className="p-3 font-semibold">Summer</td>
              <td className="p-3">☀️</td>
              <td className="p-3">Jun-Aug</td>
              <td className="p-3">Dec-Feb</td>
              <td className="p-3">Hot, longest days</td>
            </tr>
            <tr className="hover:bg-cosmic-blue/5">
              <td className="p-3 font-semibold">Winter</td>
              <td className="p-3">❄️</td>
              <td className="p-3">Dec-Feb</td>
              <td className="p-3">Jun-Aug</td>
              <td className="p-3">Cold, shortest days</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
