
export type Course = {
  id: string;
  emoji: string;
  title: string;
  category: string;
  price: number;
  description: string;
  gumroadLink: string;
  featured?: boolean;
};

export type Category = {
  id: string;
  emoji: string;
  label: string;
  courses: Course[];
};

const originalCourses: Course[] = [
  {
    id: 'islamic-scholar-ai',
    emoji: '☪️',
    title: 'Islamic Scholar AI',
    category: 'Faith & Spirituality',
    price: 49.99,
    description: 'Explore Islamic knowledge with an AI-guided learning experience.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/gfzkwx',
    featured: true,
  },
  {
    id: 'bible-scholar-ai',
    emoji: '✝️',
    title: 'Bible Scholar AI',
    category: 'Faith & Spirituality',
    price: 49.99,
    description: 'Study biblical topics through guided learning.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/sydvnr',
    featured: true,
  },
  {
    id: 'torah-scholar-ai',
    emoji: '✡️',
    title: 'Torah Scholar AI',
    category: 'Faith & Spirituality',
    price: 49.99,
    description: 'Explore Torah studies with an AI-guided learning experience.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/xlcipm',
  },
  {
    id: 'spanish',
    emoji: '🇪🇸',
    title: 'Spanish',
    category: 'Languages',
    price: 49.99,
    description: 'Build Spanish vocabulary, comprehension, and conversation skills.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/fzycak',
    featured: true,
  },
  {
    id: 'french',
    emoji: '🇫🇷',
    title: 'French',
    category: 'Languages',
    price: 49.99,
    description: 'Learn French with a guided, AI-supported study experience.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/cidcgg',
  },
  {
    id: 'mandarin',
    emoji: '🇨🇳',
    title: 'Mandarin',
    category: 'Languages',
    price: 49.99,
    description: 'Practice Mandarin vocabulary and language fundamentals.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/seebgl',
  },
  {
    id: 'german',
    emoji: '🇩🇪',
    title: 'German',
    category: 'Languages',
    price: 49.99,
    description: 'Develop German language skills through guided practice.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/dzuurr',
  },
  {
    id: 'italian',
    emoji: '🇮🇹',
    title: 'Italian',
    category: 'Languages',
    price: 49.99,
    description: 'Learn Italian vocabulary, grammar, and conversation.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/cxvuc',
  },
  {
    id: 'portuguese',
    emoji: '🇵🇹',
    title: 'Portuguese',
    category: 'Languages',
    price: 49.99,
    description: 'Build Portuguese skills with guided language practice.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/lmsgrg',
  },
  {
    id: 'japanese',
    emoji: '🇯🇵',
    title: 'Japanese',
    category: 'Languages',
    price: 49.99,
    description: 'Explore Japanese vocabulary, writing, and conversation.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/akfpsk',
  },
  {
    id: 'korean',
    emoji: '🇰🇷',
    title: 'Korean',
    category: 'Languages',
    price: 49.99,
    description: 'Learn Korean language fundamentals and practical phrases.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/imtdka',
  },
  {
    id: 'arabic',
    emoji: '🇸🇦',
    title: 'Arabic',
    category: 'Languages',
    price: 49.99,
    description: 'Practice Arabic vocabulary and language fundamentals.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/lrwwvs',
  },
  {
    id: 'russian',
    emoji: '🇷🇺',
    title: 'Russian',
    category: 'Languages',
    price: 49.99,
    description: 'Build Russian vocabulary, comprehension, and conversation skills.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/pbsszz',
  },
  {
    id: 'piano',
    emoji: '🎹',
    title: 'Piano',
    category: 'Music',
    price: 59.99,
    description: 'Develop piano skills through structured musical practice.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/lqgfhzl',
    featured: true,
  },
  {
    id: 'guitar',
    emoji: '🎸',
    title: 'Guitar',
    category: 'Music',
    price: 59.99,
    description: 'Learn guitar fundamentals, chords, and practice techniques.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/mexiun',
  },
  {
    id: 'music-theory',
    emoji: '🎼',
    title: 'Music Theory',
    category: 'Music',
    price: 59.99,
    description: 'Understand musical notation, harmony, rhythm, and structure.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/bhraet',
  },
  {
    id: 'python',
    emoji: '🐍',
    title: 'Python',
    category: 'Programming',
    price: 59.99,
    description: 'Learn Python programming concepts and practical coding skills.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/jeqfxe',
    featured: true,
  },
  {
    id: 'javascript',
    emoji: '💛',
    title: 'JavaScript',
    category: 'Programming',
    price: 59.99,
    description: 'Build JavaScript skills for interactive applications and websites.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/trxoo',
  },
  {
    id: 'web-development',
    emoji: '🌐',
    title: 'Web Development',
    category: 'Programming',
    price: 59.99,
    description: 'Explore the fundamentals of building websites and web applications.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/gxiyf',
  },
  {
    id: 'mobile-development',
    emoji: '📱',
    title: 'Mobile Development',
    category: 'Programming',
    price: 59.99,
    description: 'Learn the core concepts behind mobile application development.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/fidin',
  },
  {
    id: 'entrepreneurship',
    emoji: '🚀',
    title: 'Entrepreneurship',
    category: 'Business',
    price: 59.99,
    description: 'Explore business ideas, validation, planning, and growth.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/pihcm',
    featured: true,
  },
  {
    id: 'leadership-mastery',
    emoji: '🧭',
    title: 'Leadership Mastery',
    category: 'Business',
    price: 59.99,
    description: 'Develop leadership, communication, and decision-making skills.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/extkgs',
  },
  {
    id: 'data-analytics',
    emoji: '📊',
    title: 'Data Analytics',
    category: 'Business',
    price: 59.99,
    description: 'Learn how to interpret data and turn findings into insights.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/dqevad',
  },
  {
    id: 'project-management',
    emoji: '📋',
    title: 'Project Management',
    category: 'Business',
    price: 59.99,
    description: 'Explore project planning, delivery, and team coordination.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/hemree',
  },
  {
    id: 'digital-marketing',
    emoji: '📣',
    title: 'Digital Marketing',
    category: 'Business',
    price: 59.99,
    description: 'Explore digital marketing strategy, content, and campaigns.',
    gumroadLink: 'https://rayhymn.gumroad.com/l/zvhzb',
  },
];

const newGumroadLinks = [
  'rblhrl',
  'zfxsh',
  'mpcxsh',
  'ehvham',
  'clorgf',
  'wbzcuy',
  'kmfoxq',
  'zqjvcl',
  'mqjyem',
  'rcdxu',
  'jlmiwb',
  'ajlfzf',
  'nftsiu',
  'ymxuc',
  'fhwioc',
  'yfahb',
  'liuuqi',
  'rahoyq',
  'dthfli',
  'aecqj',
  'ptvnk',
  'kzrriw',
  'terrxi',
  'wchzs',
  'fdzcbo',
  'jdbnzn',
];

const newCourses: Course[] = newGumroadLinks.map((slug, index) => ({
  id: `new-product-${String(index + 1).padStart(2, '0')}`,
  emoji: '✨',
  title: `New Gumroad Product ${index + 1}`,
  category: 'Business',
  price: 59.99,
  description:
    'New Planet Leads Academy product. Confirm the product title, description, category, and price before publishing.',
  gumroadLink: `https://rayhymn.gumroad.com/l/${slug}`,
}));

export const courses: Course[] = [...originalCourses, ...newCourses];

export const categories: Category[] = [
  {
    id: 'faith-spirituality',
    emoji: '🙏',
    label: 'Faith & Spirituality',
    courses: courses.filter(
      (course) => course.category === 'Faith & Spirituality'
    ),
  },
  {
    id: 'languages',
    emoji: '🌍',
    label: 'Languages',
    courses: courses.filter((course) => course.category === 'Languages'),
  },
  {
    id: 'music',
    emoji: '🎵',
    label: 'Music',
    courses: courses.filter((course) => course.category === 'Music'),
  },
  {
    id: 'programming',
    emoji: '💻',
    label: 'Programming',
    courses: courses.filter((course) => course.category === 'Programming'),
  },
  {
    id: 'business',
    emoji: '💼',
    label: 'Business',
    courses: courses.filter((course) => course.category === 'Business'),
  },
];

export const featuredCourses: Course[] = courses.filter(
  (course) => course.featured
);
