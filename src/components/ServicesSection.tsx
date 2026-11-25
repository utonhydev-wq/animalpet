import {
  ArrowUpRight,
  Car,
  Microscope,
  Pill,
  ShoppingBag,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { ComponentType, SVGProps } from 'react';
import {
  SERVICES,
  getWhatsAppUrl,
  type ServiceIconKey,
} from '../data/clinicData';
import { trackServiceClick } from '../utils/tracking';
import { WhatsAppIcon } from './Icons';

const SERVICE_ICONS: Record<
  ServiceIconKey,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  stethoscope: Stethoscope,
  microscope: Microscope,
  pill: Pill,
  sparkles: Sparkles,
  shoppingBag: ShoppingBag,
  car: Car,
};

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="border-t border-[#E8F0EB] bg-[#F7FAF8] py-14 transition-colors duration-200 dark:border-[#202D27] dark:bg-[#141B18] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#156E46] dark:text-[#6CD9A6]">
              Nossos Serviços
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(1.65rem,5vw,2.65rem)] font-medium leading-[1.18] tracking-tight text-[#12231B] [text-wrap:balance] dark:text-[#F2F7F4] sm:mt-3">
              Cuidado completo para a saúde e o bem-estar do seu pet.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#52665C] dark:text-[#9CB2A7]">
            Escolha o serviço que o seu melhor amigo precisa e fale diretamente
            com a nossa equipe pelo WhatsApp.
          </p>
        </div>

        {/* Architectural Services Grid */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];
            const whatsappHref = getWhatsAppUrl(service.whatsappType);

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex min-w-0 flex-col justify-between rounded-lg border border-[#DCE7E0] bg-white p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#156E46]/45 dark:border-[#26352E] dark:bg-[#18211D] dark:hover:border-[#5FD19B]/55 sm:p-7"
              >
                <div>
                  {/* Quiet Editorial Meta Row (Zero Pills) */}
                  <div className="flex items-center justify-between gap-3 border-b border-[#EEF5F0] pb-4 dark:border-[#24332C]">
                    <div className="flex min-w-0 items-center gap-2 text-xs font-medium text-[#52665C] dark:text-[#9CB2A7]">
                      <span className="shrink-0 tabular-nums text-[#156E46] dark:text-[#6CD9A6]">
                        {service.number}
                      </span>
                      <span aria-hidden="true">/</span>
                      <span className="truncate">{service.categoryLabel}</span>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#F2F8F4] text-[#156E46] transition-colors duration-150 group-hover:bg-[#156E46] group-hover:text-white dark:bg-[#1F2D27] dark:text-[#6CD9A6] dark:group-hover:bg-[#1A8454] dark:group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-[#12231B] dark:text-[#F2F7F4]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#45594F] dark:text-[#B7C8BF] sm:mt-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-2 sm:mt-7">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackServiceClick(
                        service.id,
                        service.title,
                        service.buttonLabel
                      )
                    }
                    aria-label={`${service.buttonLabel} – ${service.title} pelo WhatsApp`}
                    className="inline-flex min-h-[48px] w-full items-center justify-between gap-2 rounded-md border border-[#156E46]/25 bg-[#F4F9F6] px-4 py-3 text-sm font-semibold text-[#156E46] transition-[background-color,border-color,color,transform] duration-150 hover:border-[#156E46] hover:bg-[#156E46] hover:text-white active:scale-[0.98] dark:border-[#5FD19B]/30 dark:bg-[#1C2A24] dark:text-[#7CE0B1] dark:hover:border-[#1A8454] dark:hover:bg-[#1A8454] dark:hover:text-white"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <WhatsAppIcon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{service.buttonLabel}</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 opacity-80 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
