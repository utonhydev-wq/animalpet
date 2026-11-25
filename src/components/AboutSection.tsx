import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO, SITE_IMAGES, getWhatsAppUrl } from '../data/clinicData';
import { trackWhatsAppHeaderClick } from '../utils/tracking';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  const generalWhatsApp = getWhatsAppUrl('general');

  return (
    <section
      id="sobre"
      className="border-t border-[#E8F0EB] bg-white py-14 transition-colors duration-200 dark:border-[#202D27] dark:bg-[#0F1412] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Photography Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-6"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#DCE7E0] bg-[#EEF5F0] dark:border-[#26352E] dark:bg-[#18211D] lg:aspect-auto lg:h-full lg:min-h-[380px]">
              <ResilientImage
                src={SITE_IMAGES.vetCareMain}
                alt="Atendimento veterinário acolhedor e cuidadoso com cão sobre a mesa de consulta"
                containerClassName="relative h-full w-full"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Editorial Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:col-span-6"
          >
            <p className="text-sm font-medium text-[#156E46] dark:text-[#6CD9A6]">
              Sobre Nós
            </p>

            <h2 className="mt-2.5 font-display text-[clamp(1.65rem,5vw,2.65rem)] font-medium leading-[1.18] tracking-tight text-[#12231B] [text-wrap:balance] dark:text-[#F2F7F4] sm:mt-3">
              Uma história de amor e cuidado pelos animais.
            </h2>

            <p className="mt-5 text-[0.95rem] leading-relaxed text-[#45594F] dark:text-[#B7C8BF] sm:mt-6 sm:text-base">
              A Animal Pet, sob responsabilidade da Dra. Virginia Montenegro,
              oferece atendimento dedicado aos animais há 19 anos. Nosso
              compromisso é proporcionar cuidado, atenção e bem-estar aos pets,
              oferecendo serviços que acompanham diferentes necessidades do seu
              melhor amigo.
            </p>

            {/* Clean factual anchor list separated by hairlines */}
            <dl className="mt-7 grid grid-cols-1 gap-4 border-y border-[#DCE7E0] py-5 dark:border-[#24332C] sm:mt-8 sm:grid-cols-2 sm:gap-5 sm:py-6">
              <div>
                <dt className="text-xs font-medium text-[#52665C] dark:text-[#8FA59A]">
                  Responsável
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#12231B] dark:text-[#F2F7F4]">
                  {CLINIC_INFO.vetName}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[#52665C] dark:text-[#8FA59A]">
                  História em Jaboatão
                </dt>
                <dd className="mt-1 text-sm font-semibold tabular-nums text-[#12231B] dark:text-[#F2F7F4]">
                  19 anos de atendimento dedicado
                </dd>
              </div>
            </dl>

            <div className="mt-6 sm:mt-7">
              <a
                href={generalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppHeaderClick('about_section')}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#156E46] transition-colors duration-150 hover:text-[#0F4C30] dark:text-[#6CD9A6] dark:hover:text-[#9AE6C2]"
              >
                <span>Falar com a equipe pelo WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
