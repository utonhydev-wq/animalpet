import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { motion } from 'motion/react';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
} from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

export function GallerySection() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>('Todos');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'Todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
    setSelectedIndex(null);
  };

  const activePhoto =
    selectedIndex !== null ? filteredItems[selectedIndex] ?? null : null;

  return (
    <section
      id="galeria"
      className="border-t border-[#E8F0EB] bg-white py-14 transition-colors duration-200 dark:border-[#202D27] dark:bg-[#0F1412] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end lg:gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#156E46] dark:text-[#6CD9A6]">
              Galeria
            </p>
            <h2 className="mt-2.5 font-display text-[clamp(1.65rem,5vw,2.65rem)] font-medium leading-[1.18] tracking-tight text-[#12231B] [text-wrap:balance] dark:text-[#F2F7F4] sm:mt-3">
              Carinho, cuidado e bem-estar em cada detalhe.
            </h2>
          </div>

          {/* Interactive Category Filter Control */}
          <div
            role="tablist"
            aria-label="Filtrar galeria por categoria"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[#DCE7E0] bg-[#F7FAF8] p-1 dark:border-[#26352E] dark:bg-[#161E1B]"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(category)}
                  className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 sm:px-3.5 sm:text-sm ${
                    isSelected
                      ? 'bg-[#156E46] text-white shadow-xs dark:bg-[#1A8454]'
                      : 'text-[#45594F] hover:text-[#12231B] dark:text-[#A8BBB0] dark:hover:text-[#F2F7F4]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Curated Photography Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {filteredItems.map((item, idx) => {
            const isHeroSpan = activeCategory === 'Todos' && idx === 0;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(idx * 0.04, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative w-full overflow-hidden rounded-lg border border-[#DCE7E0] bg-[#EEF5F0] text-left focus-visible:ring-2 focus-visible:ring-[#156E46] dark:border-[#26352E] dark:bg-[#18211D] dark:focus-visible:ring-[#5FD19B] ${
                  isHeroSpan
                    ? 'aspect-[4/3] sm:col-span-2 lg:col-span-2 lg:aspect-[16/9]'
                    : 'aspect-[4/3]'
                }`}
              >
                <ResilientImage
                  src={item.src}
                  alt={item.alt}
                  fallbackLabel={item.caption}
                  containerClassName="relative h-full w-full"
                  className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle bottom scrim on hover / mobile */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0C2E1F]/85 via-[#0C2E1F]/40 to-transparent opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-[#BEE5CE]">
                      {item.category}
                    </p>
                    <p className="mt-0.5 text-sm font-medium leading-snug text-white">
                      {item.caption}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur-xs transition-colors duration-150 group-hover:bg-white group-hover:text-[#113D29]"
                  >
                    <Expand className="h-4 w-4" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activePhoto && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#091F15]/90 p-3 backdrop-blur-xs sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-white/15 bg-[#10291D] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 sm:px-5 sm:py-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#BEE5CE]">
                <span>{activePhoto.category}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums text-white/75">
                  {selectedIndex + 1} / {filteredItems.length}
                </span>
              </div>
              <button
                type="button"
                aria-label="Fechar imagem"
                onClick={() => setSelectedIndex(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex max-h-[68vh] items-center justify-center bg-[#091A12]">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-full object-contain"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Imagem anterior"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex - 1 + filteredItems.length) %
                          filteredItems.length
                      )
                    }
                    className="absolute left-2.5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-black/50 text-white transition-colors hover:bg-black/75 sm:left-3"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Próxima imagem"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex + 1) % filteredItems.length
                      )
                    }
                    className="absolute right-2.5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-black/50 text-white transition-colors hover:bg-black/75 sm:right-3"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-4 py-3.5 sm:px-5">
              <p className="text-sm font-medium text-white">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
