import { ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO, SITE_IMAGES, getWhatsAppUrl } from '../data/clinicData';
import { trackScheduleClick } from '../utils/tracking';
import { PawMarkIcon, WhatsAppIcon } from './Icons';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  const scheduleWhatsApp = getWhatsAppUrl('heroSchedule');

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-b from-[#F4F9F6] via-[#F9FCFA] to-white pb-12 pt-22 transition-colors duration-200 dark:from-[#121A17] dark:via-[#101614] dark:to-[#0F1412] sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-w-0 flex-col justify-center lg:col-span-6"
          >
            {/* Clean unboxed editorial highlight */}
            <div className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#156E46] dark:text-[#6CD9A6] sm:mb-5 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <PawMarkIcon className="h-3.5 w-3.5 shrink-0" />
                <span>19 anos de dedicação aos animais</span>
              </span>
              <span
                aria-hidden="true"
                className="text-[#9AB5A6] dark:text-[#4C6358]"
              >
                ·
              </span>
              <span className="text-[#52665C] dark:text-[#9CB2A7]">
                {CLINIC_INFO.cityState}
              </span>
            </div>

            <h1 className="font-display text-[clamp(1.85rem,6vw,3.45rem)] font-medium leading-[1.13] tracking-tight text-[#12231B] [text-wrap:balance] dark:text-[#F2F7F4]">
              Seu pet merece cuidado, carinho e atenção de verdade!
            </h1>

            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#45594F] dark:text-[#B7C8BF] sm:mt-6 sm:text-[1.0625rem]">
              Há 19 anos cuidando de quem faz parte da sua família. Conte com
              uma equipe dedicada à saúde e ao bem-estar do seu melhor amigo.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={scheduleWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackScheduleClick('hero_primary', 'Agendar atendimento')
                }
                className="inline-flex min-h-[50px] w-full shrink-0 items-center justify-center gap-2.5 rounded-md bg-[#156E46] px-5 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-[#105837] active:scale-[0.98] dark:bg-[#1A8454] dark:hover:bg-[#1F9962] sm:w-auto sm:whitespace-nowrap sm:px-6"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Agendar atendimento</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex min-h-[50px] w-full shrink-0 items-center justify-center gap-2 rounded-md border border-[#C7D9CE] bg-white px-5 py-3 text-sm font-semibold text-[#12231B] transition-[border-color,color,background-color,transform] duration-150 hover:border-[#156E46] hover:text-[#156E46] active:scale-[0.98] dark:border-[#2B3D35] dark:bg-[#18211D] dark:text-[#F2F7F4] dark:hover:border-[#5FD19B] dark:hover:text-[#6CD9A6] sm:w-auto sm:whitespace-nowrap sm:px-6"
              >
                <span>Conhecer nossos serviços</span>
                <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Direct Trust Callout Below Buttons */}
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#156E46] dark:text-[#6CD9A6]">
              <PawMarkIcon className="h-3.5 w-3.5 shrink-0" />
              <span>Há 19 anos cuidando do seu melhor amigo!</span>
            </p>

            {/* Quiet Institutional Trust Anchor */}
            <div className="mt-7 border-t border-[#DCE7E0] pt-5 dark:border-[#24332C] sm:mt-8 sm:pt-6">
              <p className="text-sm font-medium text-[#12231B] dark:text-[#EAF3EE]">
                Na Animal Pet, seu melhor amigo recebe cuidado há 19 anos.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#52665C] dark:text-[#8FA59A]">
                {CLINIC_INFO.fullName} · {CLINIC_INFO.address}
              </p>
            </div>
          </motion.div>

          {/* Right Editorial Media Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:col-span-6"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#DCE7E0] bg-[#EEF5F0] dark:border-[#26352E] dark:bg-[#18211D] lg:aspect-auto lg:h-full lg:min-h-[470px]">
              <ResilientImage
                src={SITE_IMAGES.heroDogCat}
                alt="Cachorro e gato juntos em momento de carinho e cuidado na natureza"
                loading="eager"
                fetchPriority="high"
                containerClassName="relative h-full w-full"
                className="h-full w-full object-cover object-center"
              />
              {/* Measured bottom gradient scrim for legible editorial caption */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0C2E1F]/85 via-[#0C2E1F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-4 sm:p-6">
                <p className="text-xs font-medium text-white/95 sm:text-sm">
                  Clínica Veterinária e Pet Shop em Santo Aleixo
                </p>
                <span className="shrink-0 text-xs font-medium tabular-nums text-white/85">
                  19 anos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
