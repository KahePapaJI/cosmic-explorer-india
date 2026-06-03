# Cosmic Explorer India 🌌

**India's Most Advanced Astronomy + Earth Science Education Platform**

> प्रज्ञानं ब्रह्म - Knowledge is Brahman

## 🚀 Overview

Cosmic Explorer India is a production-ready, fully responsive educational web application that teaches astronomy, earth science, and space exploration through interactive simulations, AI tutoring, and gamified learning.

### ✨ Key Features

- **🪐 Solar System Explorer**: Learn about all 8 planets with detailed information
- **🌑 Interactive Simulators**: 
  - Eclipse Simulator (Solar & Lunar)
  - Seasons Simulator
  - Moon Phases Tracker
  - Ocean Tides Visualizer
- **🤖 AI Astronomy Tutor**: Chat with an AI powered by OpenAI for instant explanations
- **📝 Quiz System**: Multiple categories with XP, badges, and leaderboards
- **📜 Certificates**: Generate and download achievement certificates
- **🇮🇳 ISRO & 🇺🇸 NASA Missions**: Explore Indian and American space missions
- **👨‍🏫 Teacher Dashboard**: Track student progress and manage content
- **🎮 Gamification**: Earn XP, unlock badges, climb leaderboards

## 🎨 Design

- **Theme**: Dark space NASA-inspired UI
- **Colors**: 
  - Background: `#020617`, `#0F172A`, `#111827`
  - Accent: `#38BDF8` (Cosmic Blue), `#8B5CF6` (Cosmic Purple), `#F59E0B` (Cosmic Amber)
- **Style**: Glassmorphism, smooth animations, fully responsive
- **Mobile-First**: Optimized for all screen sizes

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **AI**: OpenAI GPT-4 API
- **External APIs**: NASA API
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📋 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/KahePapaJI/cosmic-explorer-india.git
cd cosmic-explorer-india
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_NASA_API_KEY=your_nasa_api_key
```

### Get Your API Keys

- **Supabase**: https://supabase.com
- **OpenAI**: https://platform.openai.com
- **NASA**: https://api.nasa.gov

4. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📁 Project Structure

```
cosmic-explorer-india/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Home page
│   │   ├── solar-system/      # Solar System Explorer
│   │   ├── eclipses/          # Eclipse Simulator
│   │   ├── quizzes/           # Quiz System
│   │   ├── tutor/             # AI Tutor
│   │   ├── missions/          # ISRO & NASA
│   │   ├── certificates/      # Certificates
│   │   ├── profile/           # User Profile
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── home/              # Home components
│   ├── lib/
│   │   ├── constants.ts       # App constants
│   │   ├── supabase.ts        # Supabase client
│   │   ├── openai.ts          # OpenAI integration
│   │   └── nasa.ts            # NASA API
│   └── hooks/
│       └── useAuth.ts         # Auth hook
├── public/                     # Static assets
├── tailwind.config.ts         # Tailwind config
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

## 🗄️ Database Schema

### Supabase Tables

```sql
-- Users (handled by Supabase Auth)

-- Profiles
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  name TEXT,
  avatar_url TEXT,
  xp_points INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  bio TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quizzes
CREATE TABLE quizzes (
  id UUID PRIMARY KEY,
  title TEXT,
  category TEXT,
  difficulty TEXT,
  total_questions INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz Results
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  quiz_id UUID REFERENCES quizzes,
  score INTEGER,
  total_questions INTEGER,
  percentage INTEGER,
  xp_earned INTEGER,
  completed_at TIMESTAMP DEFAULT NOW()
);

-- Badges
CREATE TABLE badges (
  id UUID PRIMARY KEY,
  name TEXT,
  description TEXT,
  icon TEXT,
  requirement INTEGER
);

-- AI Chat History
CREATE TABLE ai_chat_history (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  role TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🚀 Deployment

### Deploy to Vercel

```bash
# Push to GitHub, then connect to Vercel
git push origin main
```

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables
4. Deploy!

## 📚 Usage

### Access Different Sections

- **Home**: `/`
- **Solar System**: `/solar-system`
- **Eclipses**: `/eclipses`
- **Quizzes**: `/quizzes`
- **AI Tutor**: `/tutor`
- **Missions**: `/missions`
- **Certificates**: `/certificates`
- **Profile**: `/profile`

### Using the AI Tutor

Click on a suggested question or type your own astronomy question. The AI will provide detailed, educational responses.

### Taking Quizzes

1. Navigate to Quizzes section
2. Choose a category
3. Answer all questions
4. Get instant results and XP

### Generating Certificates

1. Complete a quiz successfully
2. Go to Certificates section
3. Download your certificate as PDF

## 🎯 Features Roadmap

- [ ] Video lessons
- [ ] Live classes integration
- [ ] Discussion forums
- [ ] Mobile app (React Native)
- [ ] Planetarium VR mode
- [ ] Multi-language support (Hindi, Tamil, etc.)
- [ ] Social features (follow users, competitions)
- [ ] Advanced analytics dashboard
- [ ] Payment integration for premium content

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**KahePapaJI**
- GitHub: [@KahePapaJI](https://github.com/KahePapaJI)

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🙏 Acknowledgments

- NASA for space data and inspiration
- ISRO for India's space missions
- Khan Academy for educational structure
- Duolingo for gamification inspiration

---

**Made with ❤️ for space lovers and learners everywhere**

🌟 If you find this helpful, please give it a star! ⭐
