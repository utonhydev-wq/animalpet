export type ConversionEventName =
  | 'whatsapp_header_click'
  | 'whatsapp_schedule_click'
  | 'whatsapp_service_click'
  | 'whatsapp_floating_click'
  | 'pre_attendance_option_select'
  | 'pre_attendance_toggle';

export interface ConversionEventParams {
  location?: string;
  service_id?: string;
  service_name?: string;
  cta_label?: string;
  option_id?: string;
  option_label?: string;
  state?: 'open' | 'close';
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (
      command: 'event',
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Dispatches structured conversion events for future Google Analytics 4 (gtag)
 * and Google Tag Manager (dataLayer) integration without injecting fake IDs.
 */
export function trackConversionEvent(
  eventName: ConversionEventName,
  params: ConversionEventParams = {}
): void {
  if (typeof window === 'undefined') return;

  const payload: Record<string, unknown> = {
    event_category: 'whatsapp_conversion',
    ...params,
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }
}

export function trackWhatsAppHeaderClick(location: string): void {
  trackConversionEvent('whatsapp_header_click', { location });
}

export function trackScheduleClick(location: string, ctaLabel: string): void {
  trackConversionEvent('whatsapp_schedule_click', {
    location,
    cta_label: ctaLabel,
  });
}

export function trackServiceClick(
  serviceId: string,
  serviceName: string,
  ctaLabel: string
): void {
  trackConversionEvent('whatsapp_service_click', {
    service_id: serviceId,
    service_name: serviceName,
    cta_label: ctaLabel,
  });
}

export function trackFloatingWhatsAppClick(): void {
  trackConversionEvent('whatsapp_floating_click', {
    location: 'floating_button',
  });
}

export function trackPreAttendanceOption(
  optionId: string,
  optionLabel: string
): void {
  trackConversionEvent('pre_attendance_option_select', {
    location: 'pre_attendance_widget',
    option_id: optionId,
    option_label: optionLabel,
  });
}

export function trackPreAttendanceToggle(isOpen: boolean): void {
  trackConversionEvent('pre_attendance_toggle', {
    location: 'pre_attendance_widget',
    state: isOpen ? 'open' : 'close',
  });
}
