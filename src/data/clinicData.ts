import heroDogCat from '../assets/images/hero-dog-cat.jpg';
import vetCareMain from '../assets/images/vet-cat2.jpg';
import vetExamDog from '../assets/images/vet-dog.jpg';
import groomingTrim from '../assets/images/grooming-1.jpg';
import groomingBath from '../assets/images/grooming-2.jpg';
import happyPuppies from '../assets/images/happy-dogs.jpg';
import catPortrait from '../assets/images/cat-portrait.jpg';
import petProductsBowl from '../assets/images/pet-toys.jpg';
import dogOutdoorCare from '../assets/images/pet-products.jpg';

export const CLINIC_INFO = {
  brandName: 'Animal Pet',
  fullName: 'Animal Pet – Dra. Virginia Montenegro',
  vetName: 'Dra. Virginia Montenegro',
  experienceYears: 19,
  address: 'Santo Aleixo, 265 – Jaboatão dos Guararapes – PE',
  streetAddress: 'Santo Aleixo, 265',
  cityState: 'Jaboatão dos Guararapes – PE',
  whatsappDisplay: '(81) 98840-5049',
  whatsappNumber: '5581988405049',
  instagramHandle: '@animalpet_dravirginia',
  instagramUrl: 'https://www.instagram.com/animalpet_dravirginia/',
  logoUrl: 'https://i.postimg.cc/d12xWNdR/logo-animalpet.jpg',
  googleReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJs5bj4SEdqwcRNp2OcJvWupQ',
  googleMapsShareUrl: 'https://share.google/ozCEj5Hdc4VoUyXj5',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Santo+Aleixo,+265,+Jaboatao+dos+Guararapes,+PE&t=&z=16&ie=UTF8&iwloc=&output=embed',
} as const;

export const WHATSAPP_MESSAGES = {
  general:
    'Olá! Conheci a Animal Pet pelo site e gostaria de mais informações sobre os serviços.',
  header:
    'Olá! Conheci a Animal Pet pelo site e gostaria de saber mais sobre os atendimentos. Poderiam me ajudar?',
  heroSchedule:
    'Olá! Gostaria de conhecer os serviços da Animal Pet e verificar a disponibilidade para atendimento.',
  consultation:
    'Olá! Gostaria de agendar uma consulta veterinária para meu pet. Poderiam me informar os horários disponíveis?',
  exams:
    'Olá! Gostaria de informações sobre os exames realizados na Animal Pet. Como faço para agendar?',
  pharmacy:
    'Olá! Gostaria de consultar a disponibilidade de um produto na farmácia veterinária.',
  grooming:
    'Olá! Gostaria de agendar um banho e tosa para meu pet. Poderiam me informar os valores e horários disponíveis?',
  petShop:
    'Olá! Gostaria de conhecer os produtos disponíveis no Pet Shop. Poderiam me enviar mais informações?',
  petTaxi:
    'Olá! Tenho interesse no serviço de Pet Táxi. Gostaria de saber como funciona, quais regiões são atendidas e os valores.',
  trust:
    'Olá! Conheci a Animal Pet pelo site e gostaria de tirar algumas dúvidas sobre os serviços.',
  preFooterCta:
    'Olá! Vim pelo site da Animal Pet e gostaria de informações sobre os atendimentos.',
  floating: 'Olá! Acessei o site da Animal Pet e gostaria de atendimento.',
} as const;

export type WhatsAppMessageType = keyof typeof WHATSAPP_MESSAGES;

export function getWhatsAppUrl(type: WhatsAppMessageType = 'general'): string {
  const message = WHATSAPP_MESSAGES[type];
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export type ServiceIconKey =
  | 'stethoscope'
  | 'microscope'
  | 'pill'
  | 'sparkles'
  | 'shoppingBag'
  | 'car';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ServiceIconKey;
  whatsappType: WhatsAppMessageType;
  buttonLabel: string;
  categoryLabel: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'consultas-veterinarias',
    number: '01',
    title: 'Consultas Veterinárias',
    description:
      'Atendimento voltado à saúde e ao acompanhamento do seu pet.',
    icon: 'stethoscope',
    whatsappType: 'consultation',
    buttonLabel: 'Agendar consulta',
    categoryLabel: 'Clínica',
  },
  {
    id: 'exames',
    number: '02',
    title: 'Exames',
    description:
      'Serviços de exames para auxiliar no cuidado e acompanhamento da saúde animal.',
    icon: 'microscope',
    whatsappType: 'exams',
    buttonLabel: 'Consultar exames',
    categoryLabel: 'Diagnóstico',
  },
  {
    id: 'farmacia-veterinaria',
    number: '03',
    title: 'Farmácia Veterinária',
    description:
      'Produtos para atender às necessidades do seu animal de estimação.',
    icon: 'pill',
    whatsappType: 'pharmacy',
    buttonLabel: 'Consultar produtos',
    categoryLabel: 'Saúde',
  },
  {
    id: 'banho-e-tosa',
    number: '04',
    title: 'Banho e Tosa',
    description: 'Higiene, cuidado e beleza para o seu melhor amigo.',
    icon: 'sparkles',
    whatsappType: 'grooming',
    buttonLabel: 'Agendar banho e tosa',
    categoryLabel: 'Estética & Higiene',
  },
  {
    id: 'pet-shop',
    number: '05',
    title: 'Pet Shop',
    description: 'Produtos e acessórios para o dia a dia do seu pet.',
    icon: 'shoppingBag',
    whatsappType: 'petShop',
    buttonLabel: 'Conhecer produtos',
    categoryLabel: 'Dia a dia',
  },
  {
    id: 'taxi-dog',
    number: '06',
    title: 'Táxi Dog',
    description:
      'Mais praticidade no deslocamento do seu animal de estimação.',
    icon: 'car',
    whatsappType: 'petTaxi',
    buttonLabel: 'Consultar Pet Táxi',
    categoryLabel: 'Comodidade',
  },
];

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    number: '01',
    title: '19 anos de experiência',
    description:
      'Uma trajetória contínua de confiança junto às famílias de Jaboatão dos Guararapes e seus pets.',
  },
  {
    number: '02',
    title: 'Atendimento dedicado',
    description:
      'Escuta atenta, acolhimento e cuidado individualizado para cães e gatos em cada visita.',
  },
  {
    number: '03',
    title: 'Diversidade de serviços',
    description:
      'Consultas, exames, farmácia veterinária, banho e tosa, pet shop e táxi dog reunidos em um só lugar.',
  },
  {
    number: '04',
    title: 'Compromisso com o bem-estar animal',
    description:
      'Atenção genuína ao conforto, à saúde e à tranquilidade do seu melhor amigo em todas as etapas.',
  },
];

export interface TrustPillar {
  id: string;
  title: string;
  description: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: 'experiencia',
    title: '19 anos de experiência',
    description:
      'História construída com responsabilidade e confiança cuidando de gerações de cães e gatos.',
  },
  {
    id: 'diversidade-servicos',
    title: 'Diversidade de serviços',
    description:
      'Saúde, exames, farmácia, higiene, produtos e transporte reunidos para facilitar sua rotina.',
  },
  {
    id: 'cuidado-dedicacao',
    title: 'Cuidado e dedicação aos animais',
    description:
      'Respeito, paciência e atenção real ao bem-estar do seu pet em cada etapa do atendimento.',
  },
  {
    id: 'atendimento-humanizado',
    title: 'Atendimento próximo e humanizado',
    description:
      'Orientação clara e acolhedora para você se sentir seguro em todas as decisões pelo seu amigo.',
  },
];

export interface PreAttendanceOption {
  id: string;
  label: string;
  whatsappType: WhatsAppMessageType;
}

export const PRE_ATTENDANCE_OPTIONS: PreAttendanceOption[] = [
  {
    id: 'consulta',
    label: 'Quero agendar uma consulta.',
    whatsappType: 'consultation',
  },
  {
    id: 'banho-e-tosa',
    label: 'Preciso de banho e tosa.',
    whatsappType: 'grooming',
  },
  {
    id: 'exames',
    label: 'Quero saber sobre exames.',
    whatsappType: 'exams',
  },
  {
    id: 'pet-taxi',
    label: 'Tenho interesse no Pet Táxi.',
    whatsappType: 'petTaxi',
  },
  {
    id: 'pet-shop',
    label: 'Quero conhecer o Pet Shop.',
    whatsappType: 'petShop',
  },
  {
    id: 'outra-duvida',
    label: 'Tenho outra dúvida.',
    whatsappType: 'general',
  },
];

export type GalleryCategory =
  | 'Todos'
  | 'Cães e Gatos'
  | 'Atendimento'
  | 'Banho e Tosa'
  | 'Produtos Pet';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, 'Todos'>;
  featured?: boolean;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Todos',
  'Cães e Gatos',
  'Atendimento',
  'Banho e Tosa',
  'Produtos Pet',
];

export const SITE_IMAGES = {
  heroDogCat,
  vetCareMain,
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'caes-e-gatos-carinho',
    src: heroDogCat,
    alt: 'Cachorro e gato descansando juntos em momento de carinho e tranquilidade',
    caption: 'Carinho e convivência saudável para cães e gatos',
    category: 'Cães e Gatos',
    featured: true,
  },
  {
    id: 'atendimento-veterinario-consulta',
    src: vetExamDog,
    alt: 'Atendimento veterinário com exame clínico cuidadoso em cão',
    caption: 'Acompanhamento clínico atencioso e cuidadoso',
    category: 'Atendimento',
  },
  {
    id: 'banho-e-tosa-cuidado',
    src: groomingTrim,
    alt: 'Cão recebendo cuidados de tosa e escovação com delicadeza',
    caption: 'Cuidado estético e escovação com tranquilidade',
    category: 'Banho e Tosa',
  },
  {
    id: 'filhotes-bem-estar',
    src: happyPuppies,
    alt: 'Dois filhotes de cachorro saudáveis e alegres sobre a grama',
    caption: 'Acompanhamento desde os primeiros meses de vida',
    category: 'Cães e Gatos',
  },
  {
    id: 'banho-quente-higiene',
    src: groomingBath,
    alt: 'Cachorro tomando banho morno com cuidados de higiene',
    caption: 'Banho relaxante e higiene completa para o seu pet',
    category: 'Banho e Tosa',
  },
  {
    id: 'atendimento-acolhedor',
    src: vetCareMain,
    alt: 'Cão tranquilo na mesa de atendimento durante consulta veterinária',
    caption: 'Ambiente acolhedor durante cada consulta',
    category: 'Atendimento',
  },
  {
    id: 'produtos-pet-alimentacao',
    src: petProductsBowl,
    alt: 'Tigela com petiscos e alimentos selecionados para cães',
    caption: 'Produtos selecionados para o dia a dia do seu pet',
    category: 'Produtos Pet',
  },
  {
    id: 'gato-saudavel',
    src: catPortrait,
    alt: 'Gato filhote com expressão tranquila e olhar saudável',
    caption: 'Atenção especial dedicada também aos felinos',
    category: 'Cães e Gatos',
  },
  {
    id: 'cuidados-passeio-acessorios',
    src: dogOutdoorCare,
    alt: 'Cachorro alegre segurando guia vermelha em área verde',
    caption: 'Acessórios e cuidados que acompanham a rotina do seu amigo',
    category: 'Produtos Pet',
  },
];
