export type CompanyNavItem = { href: string; label: string };
export type CompanyService = {
    title: string;
    description: string;
    features: string[];
};

export type CompanyValue = {
    title: string;
    detail: string;
};

export type CompanyTeamMember = {
    name: string;
    role: string;
    bio: string;
    initials: string;
};

export const companyName = 'AstraNusa';
export const companyTagline = 'Menghadirkan solusi digital dengan karakter lokal dan performa global.';

export const companyNav: CompanyNavItem[] = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/services', label: 'Layanan' },
    { href: '/team', label: 'Tim' },
    { href: '/contact', label: 'Kontak' },
];

export const companyServices: CompanyService[] = [
    {
        title: 'Strategi Produk Digital',
        description:
            'Rancang pengalaman produk yang jelas, terukur, dan siap pasar untuk bisnis B2B dan B2C.',
        features: ['Roadmap produk', 'Validasi konsep', 'Blueprint UX/UI'],
    },
    {
        title: 'Pengembangan Platform Khusus',
        description:
            'Bangun platform web dan sistem internal dengan arsitektur scalable dan maintenance-friendly.',
        features: ['Laravel + React', 'Integrasi API', 'Sistem otomasi & workflow'],
    },
    {
        title: 'Operasi Digital & Optimasi',
        description:
            'Mempercepat delivery melalui proses DevOps, observabilitas, dan safety engineering.',
        features: ['Deployment otomatis', 'Monitoring KPI', 'Performance tuning'],
    },
];

export const companyValues: CompanyValue[] = [
    {
        title: 'Berani Berbeda',
        detail:
            'Kami memilih solusi dengan keberanian desain dan teknis, bukan sekadar mengikuti tren.',
    },
    {
        title: 'Akurat & Terukur',
        detail:
            'Setiap keputusan produk dan teknologi dibangun berdasarkan data, fungsi, dan dampak nyata.',
    },
    {
        title: 'Lokal dengan Ambisi Global',
        detail:
            'Pendekatan kami relevan dengan konteks Indonesia, tanpa mengorbankan kualitas kelas dunia.',
    },
];

export const companyTeam: CompanyTeamMember[] = [
    {
        name: 'Nina Pranata',
        role: 'Founder & CEO',
        bio: 'Memimpin visi perusahaan dengan pengalaman produk digital dan konsultasi transformasi bisnis.',
        initials: 'NP',
    },
    {
        name: 'Rafi Alfan',
        role: 'Head of Engineering',
        bio: 'Merancang arsitektur teknologi yang modular, cepat, dan mudah dikelola untuk skala bisnis.',
        initials: 'RA',
    },
    {
        name: 'Maya Lestari',
        role: 'Product Strategist',
        bio: 'Membantu tim dan pemangku kepentingan menemukan peluang produk melalui riset dan desain.',
        initials: 'ML',
    },
    {
        name: 'Dewa Putra',
        role: 'Creative Lead',
        bio: 'Menciptakan identitas visual yang berani, modern, dan mudah diingat bagi brand klien.',
        initials: 'DP',
    },
];

export const companyAddress = {
    street: 'Jalan Terusan Menteng No. 14',
    city: 'Jakarta Pusat, Indonesia',
    email: 'halo@astranusa.co.id',
    phone: '+62 812-3456-7890',
};

export const companyAboutPoints = [
    {
        title: 'Visi',
        detail:
            'Menjadi mitra yang dipercaya untuk mempercepat digitalisasi perusahaan melalui produk yang berkarakter dan handal.',
    },
    {
        title: 'Misi',
        detail:
            'Mendesain, membangun, dan mengawal solusi digital yang efektif bagi brand dan tim operasional Indonesia.',
    },
    {
        title: 'Nilai Inti',
        detail:
            'Kolaborasi, rasa ingin tahu, dan eksekusi tanpa kompromi adalah landasan kami setiap hari.',
    },
];
