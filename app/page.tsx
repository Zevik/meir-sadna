import Hero from './components/Hero';
import Description from './components/Description';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="gradient-bg">
      <Hero />
      <Description />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
