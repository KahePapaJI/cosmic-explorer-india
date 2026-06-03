'use client';

import Link from 'next/link';

export default function FeaturedContent() {
  const features = [
    {
      title: 'Interactive 3D Simulations',
      description: 'Visualize planetary motions and celestial events in real-time',
      icon: '🎮',
      color: 'from-cosmic-blue to-cosmic-purple',
    },
    {
      title: 'AI Astronomy Tutor',
      description: 'Ask anything about astronomy and get instant explanations',
      icon: '🤖',
      color: 'from-cosmic-purple to-cosmic-amber',
    },
    {
      title: 'Gamified Learning',
      description: 'Earn XP, unlock badges, and climb the leaderboard',
      icon: '🏆',
      color: 'from-cosmic-amber to-cosmic-blue',
    },
    {
      title: 'Expert Content',
      description: 'Curated lessons from astronomy experts and educators',
      icon: '📚',
      color: 'from-green-500 to-cosmic-blue',
    },
  ];

  return (
    <section className="space-y-6 pb-12">
      <div>
        <h2 className="text-3xl font-bold mb-2">Why Choose Cosmic Explorer?</h2>
        <p className="text-gray-400">Experience the best astronomy learning platform in India</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`glass-card p-8 bg-gradient-to-br ${feature.color} opacity-10 hover:opacity-20 transition-all duration-300`}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400 mb-4">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="glass-card p-12 border-2 border-cosmic-blue/30 text-center space-y-6 mt-12">
        <h3 className="text-2xl font-bold">Ready to Explore the Universe?</h3>
        <p className="text-gray-400 max-w-xl mx-auto">
          Join thousands of students and teachers using Cosmic Explorer India to discover the wonders of space and science.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/solar-system" className="btn-primary">
            Start Learning Now
          </Link>
          <Link href="/about" className="btn-secondary">
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
