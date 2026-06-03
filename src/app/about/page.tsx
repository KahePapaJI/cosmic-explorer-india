'use client';

export default function About() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold gradient-text">About Cosmic Explorer India</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Inspiring the next generation of astronomers and space scientists through interactive learning
        </p>
      </div>

      {/* Mission */}
      <div className="glass-card p-8 space-y-4 border-l-4 border-cosmic-blue">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="text-gray-300 text-lg">
          To make astronomy and space science education accessible, interactive, and inspiring for every student in India. We believe that understanding the universe helps us appreciate our place in it and inspires innovation.
        </p>
      </div>

      {/* Vision */}
      <div className="glass-card p-8 space-y-4 border-l-4 border-cosmic-purple">
        <h2 className="text-3xl font-bold">Our Vision</h2>
        <p className="text-gray-300 text-lg">
          प्रज्ञानं ब्रह्म (Knowledge is Brahman) - To empower students with cosmic knowledge and inspire them to explore the boundless universe of learning, contributing to India's vision of becoming a leading space science nation.
        </p>
      </div>

      {/* Features Overview */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Why Choose Cosmic Explorer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🎨', title: 'Interactive Design', desc: 'Beautiful, intuitive interface designed for learners' },
            { icon: '🤖', title: 'AI-Powered Tutoring', desc: 'Get instant answers to your astronomy questions' },
            { icon: '📊', title: 'Progress Tracking', desc: 'Monitor your learning journey with detailed analytics' },
            { icon: '🏆', title: 'Gamification', desc: 'Earn badges, XP, and certificates' },
            { icon: '🇮🇳', title: 'India-Focused', desc: 'Learn about ISRO missions and achievements' },
            { icon: '📱', title: 'Fully Responsive', desc: 'Learn on any device, anytime, anywhere' },
          ].map((feature, i) => (
            <div key={i} className="glass-card p-6 space-y-3">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-bold text-cosmic-blue">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Meet the Creator</h2>
        <div className="glass-card p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-cosmic-blue to-cosmic-purple rounded-full flex items-center justify-center text-7xl">
            👨‍💻
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">Kaha Papayi</h3>
            <p className="text-gray-300">
              Full-stack developer and space enthusiast passionate about making education accessible to everyone. Built Cosmic Explorer India to democratize astronomy learning across India.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/KahePapaJI" className="text-cosmic-blue hover:text-cosmic-purple transition-colors">
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-bold text-cosmic-blue">Frontend</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Next.js 14</li>
              <li>✓ React 18</li>
              <li>✓ TypeScript</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ Framer Motion</li>
            </ul>
          </div>
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-bold text-cosmic-purple">Backend & APIs</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Supabase (Auth + Database)</li>
              <li>✓ OpenAI GPT-4</li>
              <li>✓ NASA APIs</li>
              <li>✓ PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Inspiration */}
      <div className="glass-card p-8 border-l-4 border-cosmic-amber space-y-4">
        <h2 className="text-2xl font-bold">Inspiration & Credits</h2>
        <p className="text-gray-300 mb-4">
          Cosmic Explorer India draws inspiration from:
        </p>
        <ul className="space-y-2 text-gray-300">
          <li>🚀 NASA's educational platforms and space missions</li>
          <li>📚 Khan Academy's learning structure</li>
          <li>🎮 Duolingo's gamification approach</li>
          <li>🇮🇳 ISRO's incredible achievements in space exploration</li>
          <li>🌟 The cosmic curiosity of Indian students everywhere</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="glass-card p-12 text-center space-y-6 border-2 border-cosmic-blue/30">
        <h2 className="text-3xl font-bold">Ready to Explore the Universe?</h2>
        <p className="text-gray-400 text-lg">
          Start your cosmic journey today and unlock the wonders of space and science.
        </p>
        <a href="/" className="inline-block btn-primary">
          Begin Learning Now 🚀
        </a>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-8">
        <div>
          <p className="text-3xl font-bold text-cosmic-blue">8</p>
          <p className="text-gray-400 text-sm">Planets</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-cosmic-purple">100+</p>
          <p className="text-gray-400 text-sm">Learning Materials</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-cosmic-amber">∞</p>
          <p className="text-gray-400 text-sm">Possibilities</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-400">🌍</p>
          <p className="text-gray-400 text-sm">Earth & Beyond</p>
        </div>
      </div>
    </div>
  );
}
