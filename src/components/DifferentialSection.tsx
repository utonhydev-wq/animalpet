import { motion } from 'motion/react';
import { DIFFERENTIALS, getWhatsAppUrl } from '../data/clinicData';
import { trackScheduleClick } from '../utils/tracking';
import { PawMarkIcon, WhatsAppIcon } from './Icons';

export function DifferentialSection() {
  const generalWhatsApp = getWhatsAppUrl('general');

  return (
    <section
      aria-labelledby="diferencial-heading"
      className="bg-[#113D29] py-14 text-white transition-colors duration-200 dark:border-y dark:border-[#243B31] dark:bg-[#0D2B1E] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <div className="flex items-center gap-2.5 text-sm font-medium tracking-wide text-[#9FD6B9]">
              <PawMarkIcon className="h-3.5 w-3.5 shrink-0" />
              <span>Nosso Diferencial</span>
            </div>

            <h2
              id="diferencial-heading"
              className="mt-2.5 font-display text-[clamp(1.75rem,5.5vw,2.85rem)] font-medium leading-[1.15] tracking-tight text-white [text-wrap:balance] sm:mt-3"
            >
              Cuidando do seu pet há 19 anos!
            </h2>

            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed tracking-[0.01em] text-[#D7EAE0] sm:text-base">
              Na Animal Pet, seu melhor amigo recebe cuidado há 19 anos. Unimos
              experiência, acolhimento e serviços essenciais para acompanhar
              cada momento da vida do seu animal de estimação.
            </p>
          </div>

          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <a
              href={generalWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackScheduleClick(
                  'differential_section',
                  'Conversar pelo WhatsApp'
                )
              }
              className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2.5 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#113D29] transition-[background-color,transform] duration-150 hover:bg-[#EAF4EE] active:scale-[0.98] sm:w-auto sm:whitespace-nowrap sm:px-6"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Conversar pelo WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Four Editorial Pillars with Clean Aligned Grid Dividers */}
        <div className="mt-10 grid grid-cols-1 border-t border-white/15 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`border-b border-white/15 py-6 sm:py-7 ${
                index % 2 === 0 ? 'sm:pr-6 lg:pr-6' : 'sm:border-l sm:border-white/15 sm:pl-6'
              } ${
                index > 0 ? 'lg:border-l lg:border-white/15 lg:pl-6' : 'lg:border-l-0 lg:pl-0'
              } ${
                index === DIFFERENTIALS.length - 1
                  ? 'border-b-0 lg:pr-0'
                  : ''
              } ${index >= 2 ? 'sm:border-b-0' : ''} lg:border-b-0`}
            >
              <span className="text-xs font-medium tabular-nums tracking-wider text-[#9FD6B9]">
                {item.number}
              </span>
              <h3 className="mt-2.5 font-display text-lg font-medium leading-snug text-white sm:mt-3">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed tracking-[0.01em] text-[#CFE4D9] sm:mt-2.5">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
