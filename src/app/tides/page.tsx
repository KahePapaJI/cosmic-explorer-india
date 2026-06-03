'use client';

export default function OceanTides() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">Ocean Tides</h1>
        <p className="text-gray-400 text-lg">
          Understand how the Moon controls Earth's oceans
        </p>
      </div>

      {/* Tides Visualization */}
      <div className="glass-card p-8 space-y-8">
        <h2 className="text-2xl font-bold">How the Moon Causes Tides</h2>

        {/* Diagram */}
        <div className="space-y-6">
          {/* Moon and Earth interaction */}
          <div className="flex justify-center items-center gap-12 py-8">
            <div className="text-6xl">🌙</div>
            <div className="text-4xl text-gray-400">←→</div>
            <div className="text-7xl">🌍</div>
            <div className="text-4xl text-gray-400">←→</div>
            <div className="text-5xl text-yellow-400">☀️</div>
          </div>

          {/* Gravity force visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center space-y-4">
              <p className="text-4xl">🌊</p>
              <h3 className="font-bold">Side Facing Moon</h3>
              <p className="text-sm text-gray-400">Strongest gravitational pull causes HIGH TIDE</p>
              <div className="h-24 bg-gradient-to-t from-blue-500/30 to-transparent rounded flex items-end justify-center">
                <div className="w-full h-4/5 bg-blue-500/50 rounded-t"></div>
              </div>
            </div>
            <div className="glass-card p-6 text-center space-y-4">
              <p className="text-4xl">🌊</p>
              <h3 className="font-bold">Center (Earth)</h3>
              <p className="text-sm text-gray-400">Balanced gravity LOW TIDE here</p>
              <div className="h-24 bg-gradient-to-t from-blue-500/20 to-transparent rounded flex items-end justify-center">
                <div className="w-full h-2/5 bg-blue-500/30 rounded-t"></div>
              </div>
            </div>
            <div className="glass-card p-6 text-center space-y-4">
              <p className="text-4xl">🌊</p>
              <h3 className="font-bold">Opposite Side</h3>
              <p className="text-sm text-gray-400">Moon's pull weaker, water bulges out HIGH TIDE</p>
              <div className="h-24 bg-gradient-to-t from-blue-500/30 to-transparent rounded flex items-end justify-center">
                <div className="w-full h-4/5 bg-blue-500/50 rounded-t"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Tides */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Types of Tides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 border-l-4 border-cosmic-blue space-y-4">
            <h3 className="text-xl font-bold text-cosmic-blue">Spring Tides</h3>
            <p className="text-gray-300 mb-4">
              Occur during full moon and new moon when the Sun, Earth, and Moon are aligned.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-400">🌑 Alignment Pattern</p>
              <div className="flex justify-around py-4 px-4 bg-space-darker/50 rounded">
                <span>☀️</span>
                <span>🌍</span>
                <span>🌙</span>
              </div>
              <p className="text-sm text-gray-400">Maximum difference between high and low tide</p>
            </div>
          </div>

          <div className="glass-card p-6 border-l-4 border-cosmic-purple space-y-4">
            <h3 className="text-xl font-bold text-cosmic-purple">Neap Tides</h3>
            <p className="text-gray-300 mb-4">
              Occur during quarter moons when the Sun and Moon are at right angles.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-400">🌓 Perpendicular Pattern</p>
              <div className="flex justify-around py-4 px-4 bg-space-darker/50 rounded">
                <span>☀️</span>
                <span>↓</span>
                <span>🌍←🌓</span>
              </div>
              <p className="text-sm text-gray-400">Minimum difference between high and low tide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tidal Cycle */}
      <div className="glass-card p-8 space-y-6">
        <h2 className="text-2xl font-bold">Daily Tidal Cycle</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { time: '6:00 AM', tide: 'High Tide', level: '100%', icon: '🌊🌊' },
              { time: '12:00 PM', tide: 'Low Tide', level: '30%', icon: '🏖️' },
              { time: '6:00 PM', tide: 'High Tide', level: '100%', icon: '🌊🌊' },
              { time: '12:00 AM', tide: 'Low Tide', level: '30%', icon: '🏖️' },
            ].map((t, i) => (
              <div key={i} className="glass-card p-4 text-center space-y-3">
                <p className="font-semibold">{t.time}</p>
                <p className="text-2xl">{t.icon}</p>
                <p className="text-sm font-bold text-cosmic-blue">{t.tide}</p>
                <div className="w-full h-1 bg-space-darker/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple"
                    style={{ width: t.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 text-center">
            Most locations experience 2 high tides and 2 low tides every 24 hours 50 minutes
          </p>
        </div>
      </div>

      {/* Key Facts */}
      <div className="glass-card p-8 border-l-4 border-cosmic-amber space-y-4">
        <h2 className="text-2xl font-bold">Key Facts About Tides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-cosmic-amber">•</span>
              <span>Moon's gravity pulls on Earth's water</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cosmic-amber">•</span>
              <span>Tides occur on both near and far sides</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cosmic-amber">•</span>
              <span>Sun also causes tides (smaller effect)</span>
            </li>
          </ul>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-cosmic-amber">•</span>
              <span>Tidal range varies by location</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cosmic-amber">•</span>
              <span>Can reach 15+ meters in some bays</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cosmic-amber">•</span>
              <span>Tides slow Earth's rotation over time</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
