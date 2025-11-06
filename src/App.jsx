import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import Features from './components/Features';
import CompareFaqCtaFooter from './components/CompareFaqCtaFooter';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0a0a0a] text-white">
      <Hero />
      <DashboardPreview />
      <Features />
      <CompareFaqCtaFooter />
    </div>
  );
}

export default App;
