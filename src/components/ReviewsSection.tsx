import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data/clinicData';

export function ReviewsSection() {
  return (
    <section
      aria-labelledby="avaliacoes-heading"
      className="border-t border-[#E8F0EB] bg-white py-14 transition-colors duration-200 dark:border-[#202D27] dark:bg-[#0F1412] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-lg border border-[#DCE7E0] bg-white p-5 transition-colors duration-200 dark:border-[#26352E] dark:bg-[#18211D] sm:p-10 lg:p-14"
        >
          <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7 xl:col-span-8">
              <p className="text-sm font-medium text-[#156E46] dark:text-[#6CD9A6]">
                Avaliações
              </p>

              <h2
                id="avaliacoes-heading"
                className="mt-2.5 font-display text-[clamp(1.6rem,5vw,2.45rem)] font-medium leading-[1.18] tracking-tight text-[#12231B] [text-wrap:balance] dark:text-[#F2F7F4] sm:mt-3"
              >
                A opinião de quem confia na Animal Pet
              </h2>

              <p className="mt-3.5 max-w-2xl text-[0.95rem] leading-relaxed text-[#45594F] dark:text-[#B7C8BF] sm:mt-4 sm:text-base">
                O cuidado com o seu pet é construído junto com cada família que
                confia em nosso trabalho. Se você já trouxe seu melhor amigo à
                Animal Pet, compartilhe sua experiência no Google — seu relato
                ajuda outros tutores em Jaboatão dos Guararapes.
              </p>
            </div>

            <div className="flex flex-col items-stretch sm:items-start lg:col-span-5 lg:items-end xl:col-span-4">
              <a
                href={CLINIC_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[#156E46] px-4 py-3 text-center text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-[#105837] active:scale-[0.98] dark:bg-[#1A8454] dark:hover:bg-[#1F9962] sm:w-auto sm:whitespace-nowrap sm:px-6"
              >
                <Star className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Avalie nosso atendimento no Google</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <p className="mt-2.5 text-center text-xs text-[#52665C] dark:text-[#8FA59A] sm:text-left lg:text-right">
                Avaliação direta no perfil oficial do Google
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
