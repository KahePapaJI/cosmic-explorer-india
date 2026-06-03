import HeroSection from "@/components/home/HeroSection";
import QuickModules from "@/components/home/QuickModules";
import DailyLearning from "@/components/home/DailyLearning";
import FeaturedContent from "@/components/home/FeaturedContent";

export default function Home() {
  return (
    <div className="space-y-12 p-4 md:p-8 max-w-7xl mx-auto">
      <HeroSection />
      <QuickModules />
      <DailyLearning />
      <FeaturedContent />
    </div>
  );
}
