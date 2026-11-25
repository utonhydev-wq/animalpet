import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { TRUST_PILLARS, getWhatsAppUrl } from '../data/clinicData';
import { trackScheduleClick } from '../utils/tracking';
import { PawMarkIcon, WhatsAppIcon } from './Icons';

export function TrustSection() {
  const trustWhatsApp = getWhatsAppUrl('trust');

  return (
    <section
      id="confianca"
      aria-labelledby="confianca-heading"
      className="border-t border-[#E8F0EB] bg-[#F7FAF8] py-14 transition-colors duration-200 dark:border-[#202D27] dark:bg-[#141B18] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Headline & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-0 lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#156E46] dark:text-[#6CD9A6]">
              <PawMarkIcon className="h-3.5 w-3.5 shrink-0" />
              <span>Confiança e Cuidado</span>
            </div>

            <h2
              id="confianca-heading"
              className="mt-2.5 font-display text-[clamp(1.7rem,5vw,2.65rem)] font-medium leading-[1.16] tracking-tight text-[#12231B] [text-wrap:balance] dark:text-[#F2F7F4] sm:mt-3"
            >
              Seu pet está em boas mãos!
            </h2>

            <p className="mt-4 text-[0.95rem] leading-relaxed text-[#45594F] dark:text-[#B7C8BF] sm:text-base">
              Quando o assunto é a saúde e o bem-estar do seu melhor amigo,
              experiência e proximidade fazem toda a diferença. Tire suas
              dúvidas com quem acompanha pets há 19 anos.
            </p>

            <div className="mt-7">
              <a
                href={trustWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackScheduleClick(
                    'trust_section',
                    'Converse com nossa equipe'
                  )
                }
                className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2.5 rounded-md bg-[#156E46] px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-[#105837] active:scale-[0.98] dark:bg-[#1A8454] dark:hover:bg-[#1F9962] sm:w-auto sm:whitespace-nowrap"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Converse com nossa equipe</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Four Trust Pillars Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
            {TRUST_PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.38,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex min-w-0 flex-col rounded-lg border border-[#DCE7E0] bg-white p-5 transition-colors duration-200 dark:border-[#26352E] dark:bg-[#18211D] sm:p-6"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#EEF6F1] text-[#156E46] dark:bg-[#1F2D27] dark:text-[#6CD9A6]">
                  <Check className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug text-[#12231B] dark:text-[#F2F7F4]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#45594F] dark:text-[#B7C8BF]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
