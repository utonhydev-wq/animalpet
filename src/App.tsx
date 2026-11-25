import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { DifferentialSection } from './components/DifferentialSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PreFooterCtaSection } from './components/PreFooterCtaSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServicesSection } from './components/ServicesSection';
import { TrustSection } from './components/TrustSection';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#12231B] transition-colors duration-200 dark:bg-[#0F1412] dark:text-[#F2F7F4]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#156E46] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo principal
      </a>

      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      <main id="conteudo-principal">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialSection />
        <GallerySection />
        <TrustSection />
        <ReviewsSection />
        <ContactSection />
        <PreFooterCtaSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
