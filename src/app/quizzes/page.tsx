'use client';

import { QUIZ_CATEGORIES } from '@/lib/constants';
import Link from 'next/link';

export default function Quizzes() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">Astronomy Quizzes</h1>
        <p className="text-gray-400 text-lg">
          Test your knowledge and earn XP points, badges, and certificates
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-6 text-center">
          <p className="text-3xl font-bold text-cosmic-blue">250</p>
          <p className="text-gray-400 text-sm mt-2">Total XP</p>
        </div>
        <div className="glass-card p-6 text-center">
          <p className="text-3xl font-bold text-cosmic-purple">5</p>
          <p className="text-gray-400 text-sm mt-2">Level</p>
        </div>
        <div className="glass-card p-6 text-center">
          <p className="text-3xl font-bold text-cosmic-amber">3</p>
          <p className="text-gray-400 text-sm mt-2">Badges Earned</p>
        </div>
        <div className="glass-card p-6 text-center">
          <p className="text-3xl font-bold text-green-400">12</p>
          <p className="text-gray-400 text-sm mt-2">Quizzes Done</p>
        </div>
      </div>

      {/* Quiz Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Quiz Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUIZ_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/quizzes/${category.id}`}
              className={`glass-card p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer bg-gradient-to-br ${category.color} opacity-10 hover:opacity-20`}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white group-hover:text-cosmic-blue transition-colors mb-2">
                {category.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">Start this quiz to earn XP and badges</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-cosmic-blue/20 px-3 py-1 rounded-full text-cosmic-blue">
                  5 Questions
                </span>
                <span className="text-cosmic-amber text-sm font-semibold">+50 XP →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Quiz */}
      <div className="glass-card p-8 border-2 border-cosmic-purple/30 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Daily Challenge Quiz</h2>
          <span className="px-4 py-2 bg-cosmic-purple/20 text-cosmic-purple rounded-full text-sm font-semibold">
            +75 XP Bonus
          </span>
        </div>
        <p className="text-gray-400">Complete today's featured quiz to earn bonus XP and special achievements!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-4">
          <div>
            <p className="text-2xl font-bold text-cosmic-blue">10</p>
            <p className="text-xs text-gray-400">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cosmic-purple">Hard</p>
            <p className="text-xs text-gray-400">Difficulty</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-cosmic-amber">5 min</p>
            <p className="text-xs text-gray-400">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-400">23</p>
            <p className="text-xs text-gray-400">Attempts</p>
          </div>
        </div>
        <Link href="/quizzes/daily" className="btn-primary w-full">
          Start Daily Challenge
        </Link>
      </div>

      {/* Recent Results */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Your Recent Results</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="glass-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🪐</div>
                <div>
                  <p className="font-semibold">Solar System Quiz #{i}</p>
                  <p className="text-xs text-gray-400">Completed 2 days ago</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-cosmic-blue">8/10</p>
                <p className="text-xs text-gray-400">+40 XP</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
