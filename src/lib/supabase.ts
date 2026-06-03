import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './constants';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Types
export type User = {
  id: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  created_at: string;
};

export type Profile = {
  id: string;
  user_id: string;
  name: string;
  avatar_url: string;
  xp_points: number;
  level: number;
  bio: string;
  created_at: string;
};

export type Quiz = {
  id: string;
  title: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: QuizQuestion[];
  total_questions: number;
  created_at: string;
};

export type QuizQuestion = {
  id: string;
  quiz_id: string;
  question_text: string;
  question_type: 'mcq' | 'image' | 'truefalse';
  options: string[];
  correct_answer: string;
  explanation: string;
};

export type QuizResult = {
  id: string;
  user_id: string;
  quiz_id: string;
  score: number;
  total_questions: number;
  percentage: number;
  xp_earned: number;
  completed_at: string;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
};

export type Certificate = {
  id: string;
  user_id: string;
  quiz_id: string;
  issued_date: string;
  certificate_url: string;
};

export type ChatMessage = {
  id: string;
  user_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
};
