'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Solar System', href: '/solar-system', icon: '🪐' },
    { name: 'Eclipses', href: '/eclipses', icon: '🌑' },
    { name: 'Seasons', href: '/seasons', icon: '🌍' },
    { name: 'Moon Phases', href: '/moon-phases', icon: '🌙' },
    { name: 'Ocean Tides', href: '/tides', icon: '🌊' },
    { name: 'ISRO & NASA', href: '/missions', icon: '🚀' },
    { name: 'Quizzes', href: '/quizzes', icon: '📝' },
    { name: 'AI Tutor', href: '/tutor', icon: '🤖' },
    { name: 'Certificates', href: '/certificates', icon: '🏆' },
    { name: 'Profile', href: '/profile', icon: '👤' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <>
      {/* Mobile menu toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-cosmic-purple/20 rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 glass-card border-r border-cosmic-blue/20 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } z-40 md:z-auto overflow-y-auto pt-20 md:pt-0`}
      >
        <div className="p-6 space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-2">🌌</h1>
            <p className="text-sm text-gray-400">Cosmic Explorer</p>
            <p className="text-xs text-gray-500 italic">प्रज्ञानं ब्रह्म</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-cosmic-blue/10 text-gray-200 hover:text-cosmic-blue transition-all duration-300"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t border-cosmic-blue/20 pt-4 space-y-2">
            <p className="text-xs text-gray-500 text-center">
              Made with ❤️ for space lovers
            </p>
            <p className="text-xs text-center text-cosmic-blue">v1.0.0</p>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
