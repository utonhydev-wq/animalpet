import { ArrowUpRight, Instagram, MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { trackWhatsAppHeaderClick } from '../utils/tracking';
import { WhatsAppIcon } from './Icons';

export function ContactSection() {
  const generalWhatsApp = getWhatsAppUrl('general');

  return (
    <section
      id="contato"
      className="border-t border-[#E8F0EB] bg-[#F7FAF8] py-14 transition-colors duration-200 dark:border-[#202D27] dark:bg-[#141B18] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Contact & Directions Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-w-0 flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-sm font-medium text-[#156E46] dark:text-[#6CD9A6]">
                Localização e Contato
              </p>

              <h2 className="mt-2.5 font-display text-[clamp(1.65rem,5vw,2.65rem)] font-medium leading-[1.18] tracking-tight text-[#12231B] [text-wrap:balance] dark:text-[#F2F7F4] sm:mt-3">
                Estamos esperando por você!
              </h2>

              <p className="mt-3.5 text-[0.95rem] leading-relaxed text-[#45594F] dark:text-[#B7C8BF] sm:mt-4 sm:text-base">
                Venha visitar a Animal Pet em Jaboatão dos Guararapes ou fale
                com a nossa equipe pelo WhatsApp para agendar e tirar dúvidas.
              </p>

              {/* Contact Details List */}
              <div className="mt-7 divide-y divide-[#E8F0EB] border-y border-[#E8F0EB] dark:divide-[#24332C] dark:border-[#24332C] sm:mt-8">
                <div className="flex items-start gap-3.5 py-4">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#156E46] dark:text-[#6CD9A6]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#52665C] dark:text-[#8FA59A]">
                      Endereço
                    </p>
                    <p className="mt-0.5 break-words text-sm font-semibold text-[#12231B] dark:text-[#F2F7F4]">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-4">
                  <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#156E46] dark:text-[#6CD9A6]" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#52665C] dark:text-[#8FA59A]">
                      WhatsApp comercial
                    </p>
                    <a
                      href={generalWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppHeaderClick('contact_phone')}
                      className="mt-0.5 inline-block text-sm font-semibold tabular-nums text-[#12231B] transition-colors hover:text-[#156E46] dark:text-[#F2F7F4] dark:hover:text-[#6CD9A6]"
                    >
                      {CLINIC_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-4">
                  <Instagram
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#156E46] dark:text-[#6CD9A6]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#52665C] dark:text-[#8FA59A]">
                      Instagram oficial
                    </p>
                    <a
                      href={CLINIC_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-block break-all text-sm font-semibold text-[#12231B] transition-colors hover:text-[#156E46] dark:text-[#F2F7F4] dark:hover:text-[#6CD9A6]"
                    >
                      {CLINIC_INFO.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8">
              <a
                href={generalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppHeaderClick('contact_cta')}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-md bg-[#156E46] px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-[#105837] active:scale-[0.98] dark:bg-[#1A8454] dark:hover:bg-[#1F9962]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Agende pelo WhatsApp</span>
              </a>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={CLINIC_INFO.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-[#C7D9CE] bg-white px-4 py-2.5 text-sm font-semibold text-[#12231B] transition-[border-color,color,background-color,transform] duration-150 hover:border-[#156E46] hover:text-[#156E46] active:scale-[0.98] dark:border-[#2B3D35] dark:bg-[#18211D] dark:text-[#F2F7F4] dark:hover:border-[#5FD19B] dark:hover:text-[#6CD9A6]"
                >
                  <Navigation className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Como chegar</span>
                </a>

                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-[#C7D9CE] bg-white px-4 py-2.5 text-sm font-semibold text-[#12231B] transition-[border-color,color,background-color,transform] duration-150 hover:border-[#156E46] hover:text-[#156E46] active:scale-[0.98] dark:border-[#2B3D35] dark:bg-[#18211D] dark:text-[#F2F7F4] dark:hover:border-[#5FD19B] dark:hover:text-[#6CD9A6]"
                >
                  <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Instagram</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 opacity-70"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Embedded Google Maps Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-w-0 flex-col lg:col-span-7"
          >
            <div className="flex h-full min-h-[290px] w-full flex-col overflow-hidden rounded-lg border border-[#DCE7E0] bg-[#F4F9F6] dark:border-[#26352E] dark:bg-[#18211D] sm:min-h-[390px] lg:min-h-[420px]">
              <iframe
                title="Mapa da Animal Pet – Dra. Virginia Montenegro em Santo Aleixo, 265, Jaboatão dos Guararapes – PE"
                src={CLINIC_INFO.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[260px] w-full flex-1 border-0 dark:brightness-90 dark:contrast-105 sm:min-h-[340px]"
              />
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#DCE7E0] bg-white px-4 py-3 text-xs text-[#52665C] dark:border-[#26352E] dark:bg-[#18211D] dark:text-[#9CB2A7]">
                <span className="break-words">{CLINIC_INFO.address}</span>
                <a
                  href={CLINIC_INFO.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 font-semibold text-[#156E46] hover:text-[#0F4C30] dark:text-[#6CD9A6] dark:hover:text-[#9AE6C2]"
                >
                  <span>Abrir no Google Maps</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
