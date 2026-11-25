import { useState } from 'react';
import { PawMarkIcon } from './Icons';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden bg-[#EEF5F0] dark:bg-[#18211D]',
  loading = 'lazy',
  fetchPriority = 'auto',
  fallbackLabel,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={containerClassName}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#EEF5F0] via-[#E4EFE8] to-[#D8E7DE] p-6 text-center text-[#145336] dark:from-[#16201B] dark:via-[#1B2822] dark:to-[#131C18] dark:text-[#6CD9A6]"
        >
          <PawMarkIcon className="h-9 w-9 opacity-60" />
          <span className="max-w-[22ch] text-xs font-medium text-[#2C3F36] dark:text-[#B7C8BF]">
            {fallbackLabel ?? alt}
          </span>
        </div>
      )}
    </div>
  );
}
