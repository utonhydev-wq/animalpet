import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { trackScheduleClick } from '../utils/tracking';
import { PawMarkIcon, WhatsAppIcon } from './Icons';

export function PreFooterCtaSection() {
  const preFooterWhatsApp = getWhatsAppUrl('preFooterCta');

  return (
    <section
      aria-labelledby="prefooter-cta-heading"
      className="bg-[#156E46] py-16 text-white transition-colors duration-200 dark:border-t dark:border-[#244736] dark:bg-[#114D32] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#CBEBD9] sm:text-sm">
            <PawMarkIcon className="h-3.5 w-3.5 shrink-0" />
            <span>{CLINIC_INFO.fullName}</span>
          </div>

          <h2
            id="prefooter-cta-heading"
            className="mt-3 font-display text-[clamp(1.75rem,5.5vw,2.9rem)] font-medium leading-[1.15] tracking-tight text-white [text-wrap:balance]"
          >
            Vamos cuidar de quem faz parte da sua família?
          </h2>

          <p className="mt-4 max-w-xl text-[0.975rem] leading-relaxed text-[#E4F4EB] sm:text-lg">
            Entre em contato com a Animal Pet e encontre o cuidado que seu
            melhor amigo merece.
          </p>

          <div className="mt-8 w-full sm:w-auto">
            <a
              href={preFooterWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackScheduleClick(
                  'pre_footer_cta',
                  'Falar com a Animal Pet pelo WhatsApp'
                )
              }
              className="inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-md bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#113D29] shadow-md shadow-[#0A291B]/20 transition-[background-color,transform] duration-150 hover:bg-[#EAF4EE] active:scale-[0.98] sm:w-auto sm:whitespace-nowrap sm:px-8 sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#156E46]" />
              <span>Falar com a Animal Pet pelo WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-4 text-xs text-[#CBEBD9] sm:text-sm">
            Atendimento direto pelo WhatsApp {CLINIC_INFO.whatsappDisplay} ·{' '}
            {CLINIC_INFO.cityState}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
