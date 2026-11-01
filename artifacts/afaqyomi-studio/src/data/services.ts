import {
  Aperture, AudioLines, Box, Clapperboard, Code2, Megaphone, Palette,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  provides: string[];
  forWho: string;
};

export const services: Service[] = [
  {
    id: 'ai-video-creation', number: '01', title: 'AI Video Creation',
    short: 'Stories, scenes and visual worlds built for the screen.',
    description: 'We turn a clear idea into an expressive moving image — from AI characters and scenes to product promotion, music visuals and brand campaigns.',
    icon: Clapperboard, forWho: 'Artists, creators, brands and businesses with a story to tell.',
    provides: ['AI-generated videos', 'AI storytelling', 'AI characters', 'AI scenes', 'Promotional videos', 'YouTube and short-form videos', 'Music visuals', 'Brand campaigns', 'Product promotion'],
  },
  {
    id: 'ai-video-editing', number: '02', title: 'AI Video Editing',
    short: 'A sharper cut, a stronger rhythm, a clearer message.',
    description: 'AI-assisted editing with human taste — structured around your message, audience and platform.',
    icon: Aperture, forWho: 'Creators, musicians, entrepreneurs and teams with footage to shape.',
    provides: ['AI-assisted editing', 'YouTube editing', 'Short-form editing', 'Music video editing', 'Promotional editing', 'Captions and subtitles', 'Motion graphics', 'Transitions', 'Audio synchronization', 'Visual enhancement'],
  },
  {
    id: 'music-mixing-mastering', number: '03', title: 'Music Mixing & Mastering',
    short: 'Make the track land with balance, weight and intention.',
    description: 'From detailed mixing to final mastering, AFAQYOMI helps transform recorded tracks into balanced, polished and release-ready audio.',
    icon: AudioLines, forWho: 'Artists, producers and independent musicians.',
    provides: ['MIXING — Vocal processing', 'MIXING — Instrument balancing', 'MIXING — EQ and compression', 'MIXING — Automation and effects', 'MIXING — Stereo imaging', 'MASTERING — Tonal balancing', 'MASTERING — Dynamic control', 'MASTERING — Loudness optimization', 'MASTERING — Stereo refinement', 'MASTERING — Final quality control', 'MASTERING — Streaming-ready delivery'],
  },
  {
    id: 'cover-art-banner-design', number: '04', title: 'Cover Art & Banner Design',
    short: 'A visual signature for the thing people should remember.',
    description: 'Distinctive, platform-ready visuals for releases, channels, campaigns and personal brands.',
    icon: Palette, forWho: 'Artists, creators, businesses and public-facing projects.',
    provides: ['Album covers', 'Single covers', 'EP artwork', 'YouTube thumbnails', 'YouTube banners', 'Social media banners', 'Artist branding', 'Business banners', 'Promotional graphics'],
  },
  {
    id: 'web-digital-solutions', number: '05', title: 'Website Development & Digital Solutions',
    short: 'Websites that make your next step obvious.',
    description: 'Professional websites designed around your brand, audience and business goals — from focused landing pages to custom digital experiences.',
    icon: Code2, forWho: 'Artists, entrepreneurs, service businesses and personal brands.',
    provides: ['LANDING PAGES — Product launches, personal brands, artists, campaigns, services and promotions', 'BUSINESS WEBSITES — Small businesses, creative brands, professionals, agencies, organizations and service businesses', 'CUSTOM WEBSITES — Advanced digital experiences, custom workflows, interactive platforms, e-commerce, booking systems, integrations and database-backed websites'],
  },
  {
    id: '3d-cad-product-design', number: '06', title: '3D & CAD Product Design',
    short: 'From a sketch of an object to something you can see and make.',
    description: 'Product concepts, CAD models and 3D visualizations prepared with the next physical step in mind.',
    icon: Box, forWho: 'Product makers, jewelry designers and founders developing an object.',
    provides: ['CAD modeling', 'Jewelry design', 'Ring design', 'Product modeling', '3D visualization', 'STL modeling', '3D printable models', 'Manufacturing-ready models', 'Product concepts', 'Prototype visualization'],
  },
  {
    id: 'creative-promotion', number: '07', title: 'Creative Studio & Promotion',
    short: 'Campaign energy for the moment your work meets the world.',
    description: 'A focused creative partner for building the visuals and content around a release, product or launch.',
    icon: Megaphone, forWho: 'Artists, product teams, businesses and campaign owners.',
    provides: ['Brand promotion', 'Social media content', 'Promotional campaigns', 'Product promotion', 'Artist promotion', 'Video advertisements', 'Digital marketing creatives', 'Campaign visuals', 'Social media graphics', 'Promotional videos'],
  },
];
