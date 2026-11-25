import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { CLINIC_INFO, NAV_ITEMS, getWhatsAppUrl } from '../data/clinicData';
import { trackWhatsAppHeaderClick } from '../utils/tracking';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './Icons';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const headerWhatsApp = getWhatsAppUrl('header');

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled || mobileMenuOpen
            ? 'border-b border-[#DCE7E0] bg-white/96 shadow-xs backdrop-blur-md dark:border-[#24332C] dark:bg-[#0F1412]/96'
            : 'border-b border-transparent bg-white/90 backdrop-blur-sm dark:bg-[#0F1412]/90'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-3.5 sm:px-6 lg:h-[74px] lg:gap-8 lg:px-8">
          {/* Zone 1: Brand lockup (official logo + clean single-line wordmark) */}
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="flex min-w-0 shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:rounded-md sm:gap-3"
          >
            <BrandLogo size="sm" className="h-9 w-9 sm:h-10 sm:w-10" />
            <span className="font-display text-base font-semibold tracking-tight text-[#12231B] dark:text-[#F2F7F4] sm:text-xl">
              {CLINIC_INFO.brandName}
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-6 lg:flex lg:gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative shrink-0 whitespace-nowrap py-1 text-sm font-medium text-[#2C3F36] transition-colors duration-150 hover:text-[#156E46] after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-[#156E46] after:transition-transform after:duration-200 hover:after:scale-x-100 dark:text-[#C5D5CC] dark:hover:text-[#6CD9A6] dark:after:bg-[#6CD9A6]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Theme Toggle + Primary WhatsApp Action + Mobile Menu Button */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
              aria-pressed={isDark}
              title={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#DCE7E0] bg-white text-[#12231B] transition-[background-color,border-color,color,transform] duration-150 hover:border-[#156E46] hover:bg-[#F4F9F6] hover:text-[#156E46] active:scale-95 dark:border-[#26352E] dark:bg-[#18211D] dark:text-[#E5F0EA] dark:hover:border-[#5FD19B] dark:hover:bg-[#1E2A25] dark:hover:text-[#6CD9A6] lg:h-[42px] lg:w-[42px]"
            >
              {isDark ? (
                <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
              ) : (
                <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
              )}
            </button>

            <a
              href={headerWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppHeaderClick('header_desktop')}
              className="hidden min-h-[42px] shrink-0 items-center gap-2 whitespace-nowrap rounded-md bg-[#156E46] px-4 py-2 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-[#105837] active:scale-[0.98] dark:bg-[#1A8454] dark:hover:bg-[#1F9962] md:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Agende pelo WhatsApp</span>
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#DCE7E0] bg-white text-[#12231B] transition-colors duration-150 hover:bg-[#F4F9F6] active:scale-95 dark:border-[#26352E] dark:bg-[#18211D] dark:text-[#F2F7F4] dark:hover:bg-[#1E2A25] lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[#DCE7E0] bg-white px-4 pb-6 pt-3 shadow-lg dark:border-[#24332C] dark:bg-[#121916] lg:hidden"
          >
            <nav aria-label="Menu mobile" className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[48px] items-center justify-between border-b border-[#EEF5F0] text-base font-medium text-[#12231B] transition-colors duration-150 hover:text-[#156E46] dark:border-[#202D27] dark:text-[#F2F7F4] dark:hover:text-[#6CD9A6]"
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={headerWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppHeaderClick('header_mobile');
                  setMobileMenuOpen(false);
                }}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-md bg-[#156E46] px-5 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-[#105837] active:scale-[0.98] dark:bg-[#1A8454] dark:hover:bg-[#1F9962]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Agende pelo WhatsApp</span>
              </a>
              <p className="text-center text-xs leading-relaxed text-[#52665C] dark:text-[#8FA59A]">
                {CLINIC_INFO.address}
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[1px] lg:hidden"
        />
      )}
    </>
  );
}
