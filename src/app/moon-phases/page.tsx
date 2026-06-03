'use client';

import { useState } from 'react';

export default function MoonPhases() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const phases = [
    { name: 'New Moon', icon: '🌑', description: 'Moon is between Earth and Sun, not visible' },
    { name: 'Waxing Crescent', icon: '🌒', description: 'Small lit portion visible on the right' },
    { name: 'First Quarter', icon: '🌓', description: 'Half of moon\'s right side is illuminated' },
    { name: 'Waxing Gibbous', icon: '🌔', description: 'More than half but not fully lit' },
    { name: 'Full Moon', icon: '🌕', description: 'Entire face of moon is illuminated' },
    { name: 'Waning Gibbous', icon: '🌖', description: 'Begins to decrease from full' },
    { name: 'Last Quarter', icon: '🌗', description: 'Half of moon\'s left side is illuminated' },
    { name: 'Waning Crescent', icon: '🌘', description: 'Small lit portion visible on the left' },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">Moon Phases</h1>
        <p className="text-gray-400 text-lg">
          Understand the lunar cycle and track the Moon's phases throughout the month
        </p>
      </div>

      {/* Interactive Moon Phase Wheel */}
      <div className="glass-card p-8 space-y-8">
        <h2 className="text-2xl font-bold">29.5-Day Lunar Cycle</h2>

        {/* Moon visualization */}
        <div className="flex flex-col items-center gap-8">
          <div className="text-9xl animate-float">{phases[selectedPhase].icon}</div>
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-cosmic-blue">{phases[selectedPhase].name}</h3>
            <p className="text-gray-400">{phases[selectedPhase].description}</p>
            <p className="text-sm text-cosmic-amber">Day {(selectedPhase + 1) * 4} of 29.5</p>
          </div>
        </div>

        {/* Phase selector - circular arrangement */}
        <div className="flex flex-wrap justify-center gap-4">
          {phases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setSelectedPhase(index)}
              className={`p-4 rounded-lg transition-all duration-300 ${
                selectedPhase === index
                  ? 'bg-cosmic-blue/30 ring-2 ring-cosmic-blue'
                  : 'hover:bg-cosmic-blue/10'
              }`}
              title={phase.name}
            >
              <div className="text-4xl">{phase.icon}</div>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="h-2 bg-space-darker/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue transition-all duration-300"
              style={{ width: `${(selectedPhase / (phases.length - 1)) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>Day 1</span>
            <span>Day 14.75</span>
            <span>Day 29.5</span>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Understanding Moon Phases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-bold text-cosmic-blue">What Causes Moon Phases?</h3>
            <p className="text-gray-300">
              Moon phases are caused by the changing angle between the Sun, Earth, and Moon. As the Moon orbits Earth, different portions of its sunlit side face us. The Moon takes about 29.5 days to complete one full cycle of phases.
            </p>
          </div>
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-bold text-cosmic-purple">Key Facts</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Same side of Moon always faces Earth</li>
              <li>✓ Moon doesn't emit its own light</li>
              <li>✓ Tides are influenced by Moon phases</li>
              <li>✓ Moon is about 1/4 size of Earth</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Detailed Phase Information */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">All Moon Phases Explained</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase, index) => (
            <div key={index} className="glass-card p-4 cursor-pointer hover:shadow-lg hover:shadow-cosmic-blue/30 transition-all" onClick={() => setSelectedPhase(index)}>
              <div className="text-5xl mb-3">{phase.icon}</div>
              <p className="font-semibold text-white mb-2">{phase.name}</p>
              <p className="text-xs text-gray-400">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
