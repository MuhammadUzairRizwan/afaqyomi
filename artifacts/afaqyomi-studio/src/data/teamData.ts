export type TeamMember = {
  id: string; slug: string; name: string; role: string; photo?: string;
  shortBio: string; fullBio: string; experience?: string; specialties: string[]; responsibilities: string[];
  socialLinks: { label: string; href: string }[]; projects: string[]; displayOrder: number; isActive: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    id: 'afolabi-ayodeji-quadri', slug: 'afolabi-ayodeji-quadri', name: 'AFOLABI AYODEJI QUADRI',
    role: 'Founder & Creative Director',
    photo: '/media/afaqyomi-founder.jpeg',
    shortBio: 'Founder-led creative direction across video, design and digital experiences with 5 years of experience.',
    fullBio: 'AFOLABI AYODEJI QUADRI is the founder and creative director of AFAQYOMI, bringing 5 years of experience across video, design and digital experiences.',
    experience: '5 years of experience',
    specialties: ['AI Video Creation', 'AI Video Editing', 'Creative Direction', 'Digital Design', 'Website Development', '3D/CAD Design', 'Digital Business Solutions', 'Creative Promotion'],
    responsibilities: ['Management', 'Creative direction'],
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/afolabi-ayodeji-7651a6369/' },
      { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~010147cbe2c524787f' },
    ],
    projects: ['ai-3d-explainer', 'stickman-explainer', 'youtube-thumbnail-design'], displayOrder: 1, isActive: true,
  },
  {
    id: 'salahudeen-abdulrasaq', slug: 'salahudeen-abdulrasaq', name: 'Salahudeen AbdulRasaq',
    role: 'Manager',
    photo: '/media/salahudeen_abdulrasaq.png',
    shortBio: 'Manager focused on website development and AI video editing.',
    fullBio: 'Salahudeen AbdulRasaq is a manager with expertise in website development and AI video editing, backed by 3 years of experience.',
    experience: '3 years of experience',
    specialties: ['Website Development', 'AI Video Editing'],
    responsibilities: ['Project management', 'Website development', 'AI video editing'],
    socialLinks: [],
    projects: ['website-development'], displayOrder: 2, isActive: true,
  },
];
