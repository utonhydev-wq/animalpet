import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ListChecks, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  CLINIC_INFO,
  PRE_ATTENDANCE_OPTIONS,
  getWhatsAppUrl,
} from '../data/clinicData';
import {
  trackFloatingWhatsAppClick,
  trackPreAttendanceOption,
  trackPreAttendanceToggle,
} from '../utils/tracking';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './Icons';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const floatingWhatsApp = getWhatsAppUrl('floating');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        trackPreAttendanceToggle(false);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        trackPreAttendanceToggle(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [isOpen]);

  const handleTogglePreAttendance = () => {
    setIsOpen((prev) => {
      const next = !prev;
      trackPreAttendanceToggle(next);
      return next;
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6"
    >
      {/* Optional, Non-Invasive Pre-Attendance Routing Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            id="pre-atendimento-janela"
            aria-label="Pré-atendimento rápido pelo WhatsApp"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[min(340px,calc(100vw-2rem))] overflow-hidden rounded-lg border border-[#DCE7E0] bg-white shadow-xl shadow-[#0C2E1F]/15 dark:border-[#2A3B33] dark:bg-[#161F1B] dark:shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 bg-[#156E46] px-4 py-3 text-white dark:bg-[#135939]">
              <div className="flex min-w-0 items-center gap-2.5">
                <BrandLogo
                  size="sm"
                  className="h-8 w-8 border-white/25"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold leading-tight">
                    {CLINIC_INFO.brandName}
                  </p>
                  <p className="truncate text-[11px] text-[#D7F0E2]">
                    Atalho para o WhatsApp
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Fechar opções de atendimento"
                onClick={() => {
                  setIsOpen(false);
                  trackPreAttendanceToggle(false);
                }}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-white/85 transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Greeting & Options */}
            <div className="max-h-[min(62vh,390px)] overflow-y-auto p-3.5 sm:p-4">
              <p className="text-sm font-semibold leading-snug text-[#12231B] dark:text-[#F2F7F4]">
                Olá! 🐾 Como podemos ajudar você e seu pet hoje?
              </p>
              <p className="mt-1 text-xs text-[#52665C] dark:text-[#9CB2A7]">
                Escolha uma opção para iniciar a conversa direta no WhatsApp:
              </p>

              <ul className="mt-3 flex flex-col gap-2">
                {PRE_ATTENDANCE_OPTIONS.map((option) => (
                  <li key={option.id}>
                    <a
                      href={getWhatsAppUrl(option.whatsappType)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackPreAttendanceOption(option.id, option.label);
                        setIsOpen(false);
                      }}
                      className="group flex min-h-[42px] w-full items-center justify-between gap-2 rounded-md border border-[#DCE7E0] bg-[#F8FBF9] px-3 py-2 text-left text-xs font-medium text-[#12231B] transition-[background-color,border-color,color,transform] duration-150 hover:border-[#156E46] hover:bg-[#156E46] hover:text-white active:scale-[0.98] dark:border-[#26352E] dark:bg-[#1B2621] dark:text-[#EAF3EE] dark:hover:border-[#1A8454] dark:hover:bg-[#1A8454] dark:hover:text-white sm:text-[13px]"
                    >
                      <span className="leading-snug">{option.label}</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 shrink-0 opacity-65 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Discreet Floating Action Controls */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleTogglePreAttendance}
          aria-expanded={isOpen}
          aria-controls="pre-atendimento-janela"
          aria-label={
            isOpen
              ? 'Fechar atalho de assuntos de atendimento'
              : 'Escolher assunto para atendimento no WhatsApp'
          }
          title="Escolher assunto"
          className={`inline-flex h-11 items-center justify-center gap-2 rounded-full border px-3 text-xs font-semibold shadow-md transition-[background-color,border-color,color,transform] duration-150 active:scale-95 sm:h-12 sm:px-4 ${
            isOpen
              ? 'border-[#156E46] bg-[#156E46] text-white dark:border-[#1A8454] dark:bg-[#1A8454]'
              : 'border-[#C7D9CE] bg-white/95 text-[#12231B] backdrop-blur-xs hover:border-[#156E46] hover:text-[#156E46] dark:border-[#2B3D35] dark:bg-[#18211D]/95 dark:text-[#F2F7F4] dark:hover:border-[#5FD19B] dark:hover:text-[#6CD9A6]'
          }`}
        >
          {isOpen ? (
            <X className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : (
            <ListChecks className="h-4 w-4 shrink-0" aria-hidden="true" />
          )}
          <span className="hidden whitespace-nowrap sm:inline">
            Escolher assunto
          </span>
        </button>

        <motion.a
          href={floatingWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackFloatingWhatsAppClick()}
          aria-label="Falar com a Animal Pet pelo WhatsApp"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex h-12 w-12 items-center justify-center gap-2.5 rounded-full bg-[#156E46] text-white shadow-lg shadow-[#0C2E1F]/25 ring-1 ring-white/25 transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-[#105837] active:scale-95 dark:bg-[#1A8454] dark:shadow-black/45 dark:ring-[#5FD19B]/35 dark:hover:bg-[#1F9962] sm:h-12 sm:w-auto sm:px-5"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          <span className="hidden whitespace-nowrap text-sm font-semibold sm:inline">
            WhatsApp
          </span>
        </motion.a>
      </div>
    </div>
  );
}
