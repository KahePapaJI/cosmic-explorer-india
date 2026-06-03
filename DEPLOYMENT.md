# Cosmic Explorer India - Deployment Guide

## Quick Start

### 1. Prerequisites
- Node.js 18+
- Git
- GitHub account
- Supabase account
- OpenAI API key
- NASA API key

### 2. Environment Setup

Copy `.env.example` to `.env.local` and fill in:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
OPENAI_API_KEY=your_key
NEXT_PUBLIC_NASA_API_KEY=your_key
```

### 3. Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`

### 4. Deploy to Vercel

**Option A: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option B: GitHub Integration**
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import GitHub repository
4. Add environment variables
5. Deploy!

## Getting API Keys

### Supabase
1. Visit https://supabase.com
2. Create new project
3. Go to Settings → API
4. Copy URL and anon key

### OpenAI
1. Visit https://platform.openai.com
2. Create API key
3. Copy the key to `.env.local`

### NASA
1. Visit https://api.nasa.gov
2. Generate API key
3. Copy to `.env.local`

## Database Setup (Supabase)

Create these tables in Supabase:

```sql
-- Profiles
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT,
  avatar_url TEXT,
  xp_points INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  bio TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quizzes
CREATE TABLE quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty TEXT DEFAULT 'medium',
  total_questions INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz Results
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  quiz_id UUID REFERENCES quizzes(id),
  score INTEGER,
  total_questions INTEGER,
  percentage INTEGER,
  xp_earned INTEGER,
  completed_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
```

## Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

### Missing Environment Variables
- Check `.env.local` has all required keys
- Restart dev server after changes

### API Errors
- Verify API keys are correct
- Check API quotas/limits
- Review API documentation

## Production Checklist

- [ ] All environment variables set on Vercel
- [ ] Database tables created in Supabase
- [ ] RLS policies configured
- [ ] API keys have sufficient quotas
- [ ] Error handling tested
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] Analytics configured (optional)

## Performance Tips

1. **Image Optimization**: Next.js auto-optimizes images
2. **Code Splitting**: Dynamic imports for heavy components
3. **Caching**: Set appropriate cache headers
4. **Database**: Index frequently queried columns
5. **API**: Implement rate limiting

## Support

For issues or questions:
- Check README.md
- Review error messages carefully
- Check API documentation
- Open GitHub issue

---

Happy exploring! 🚀
