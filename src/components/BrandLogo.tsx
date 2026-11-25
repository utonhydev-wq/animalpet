import { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { PawMarkIcon } from './Icons';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_CLASSES = {
  sm: 'h-10 w-10',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
} as const;

export function BrandLogo({ size = 'md', className = '' }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#DCE7E0] bg-white shadow-xs dark:border-[#2C3E36] ${SIZE_CLASSES[size]} ${className}`}
    >
      {!failed ? (
        <img
          src={CLINIC_INFO.logoUrl}
          alt="Logo oficial Animal Pet – Dra. Virginia Montenegro"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      ) : (
        <PawMarkIcon className="h-6 w-6 text-[#156E46]" />
      )}
    </span>
  );
}
