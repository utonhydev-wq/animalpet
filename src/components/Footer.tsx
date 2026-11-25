import { Instagram, MapPin } from 'lucide-react';
import { CLINIC_INFO, NAV_ITEMS, getWhatsAppUrl } from '../data/clinicData';
import { trackWhatsAppHeaderClick } from '../utils/tracking';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const generalWhatsApp = getWhatsAppUrl('general');

  return (
    <footer className="border-t border-[#DCE7E0] bg-[#F4F9F6] text-[#12231B] transition-colors duration-200 dark:border-[#24332C] dark:bg-[#121916] dark:text-[#F2F7F4]">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="min-w-0 md:col-span-5">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3.5 focus-visible:rounded-md"
            >
              <BrandLogo size="lg" />
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold leading-tight text-[#12231B] dark:text-[#F2F7F4]">
                  {CLINIC_INFO.brandName}
                </p>
                <p className="mt-0.5 text-sm text-[#45594F] dark:text-[#B7C8BF]">
                  {CLINIC_INFO.vetName}
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#45594F] dark:text-[#A8BBB0]">
              Na Animal Pet, seu melhor amigo recebe cuidado há 19 anos. Clínica
              veterinária e pet shop em Jaboatão dos Guararapes – PE.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="min-w-0 md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wide text-[#52665C] dark:text-[#8FA59A]">
              Navegação
            </h3>
            <ul className="mt-3.5 space-y-2 sm:mt-4 sm:space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[36px] items-center text-sm font-medium text-[#2C3F36] transition-colors duration-150 hover:text-[#156E46] dark:text-[#C5D5CC] dark:hover:text-[#6CD9A6]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="min-w-0 md:col-span-4">
            <h3 className="text-xs font-semibold tracking-wide text-[#52665C] dark:text-[#8FA59A]">
              Contato
            </h3>
            <ul className="mt-3.5 space-y-3 text-sm text-[#2C3F36] dark:text-[#C5D5CC] sm:mt-4">
              <li>
                <a
                  href={CLINIC_INFO.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-[#156E46] dark:hover:text-[#6CD9A6]"
                >
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#156E46] dark:text-[#6CD9A6]"
                    aria-hidden="true"
                  />
                  <span className="break-words">{CLINIC_INFO.address}</span>
                </a>
              </li>

              <li>
                <a
                  href={generalWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppHeaderClick('footer_phone')}
                  className="inline-flex min-h-[36px] items-center gap-2.5 font-medium tabular-nums transition-colors hover:text-[#156E46] dark:hover:text-[#6CD9A6]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#156E46] dark:text-[#6CD9A6]" />
                  <span>{CLINIC_INFO.whatsappDisplay}</span>
                </a>
              </li>

              <li>
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center gap-2.5 break-all font-medium transition-colors hover:text-[#156E46] dark:hover:text-[#6CD9A6]"
                >
                  <Instagram
                    className="h-4 w-4 shrink-0 text-[#156E46] dark:text-[#6CD9A6]"
                    aria-hidden="true"
                  />
                  <span>{CLINIC_INFO.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-2.5 border-t border-[#DCE7E0] pt-6 text-xs text-[#52665C] dark:border-[#24332C] dark:text-[#8FA59A] sm:mt-12 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {CLINIC_INFO.fullName}. Todos os direitos
            reservados.
          </p>
          <p>{CLINIC_INFO.cityState}</p>
        </div>
      </div>
    </footer>
  );
}
