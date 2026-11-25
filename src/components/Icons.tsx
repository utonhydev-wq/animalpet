import type { SVGProps } from 'react';

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      <path d="M9.5 9.2c.2-.4.5-.5.8-.4l1.1.5c.3.1.4.4.3.7l-.4.9c.5.9 1.2 1.6 2.1 2.1l.9-.4c.3-.1.6 0 .7.3l.5 1.1c.1.3 0 .6-.4.8-.6.4-1.5.5-2.3.2-1.8-.6-3.3-2.1-3.9-3.9-.3-.8-.2-1.7.2-2.3Z" />
    </svg>
  );
}

export function PawMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <circle cx="7" cy="9.5" r="2.1" />
      <circle cx="11.2" cy="6.8" r="2.1" />
      <circle cx="15.8" cy="7.6" r="2.1" />
      <circle cx="18.6" cy="11.4" r="1.9" />
      <path d="M12.2 11.4c-2.6 0-4.9 1.8-5.3 4.3-.3 1.7 1 3.1 2.7 3.1 1.1 0 1.8-.5 2.6-.5s1.5.5 2.6.5c1.7 0 3-1.4 2.7-3.1-.4-2.5-2.7-4.3-5.3-4.3Z" />
    </svg>
  );
}
