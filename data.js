/* ============================================================================
   LEXORA — Content & Data Store
   File: data.js
   Purpose: All dynamic content lives here. Edit this file to update content
            without touching the main HTML structure.
   ============================================================================ */

const LEXORA = {
  /* ------------------------------------------------------------------------
     BRAND
     ------------------------------------------------------------------------ */
  brand: {
    name: "LEXORA",
    initials: "LX",
    tagline: "Master English. Play Your Way.",
    description:
      "A premium, gamified English learning experience designed for ambitious learners who want to go from zero to fluency.",
  },

  /* ------------------------------------------------------------------------
     NAVIGATION
     ------------------------------------------------------------------------ */
  nav: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Paths", href: "#paths" },
    { label: "Games", href: "#games" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  /* ------------------------------------------------------------------------
     HERO SECTION
     ------------------------------------------------------------------------ */
  hero: {
    eyebrow: "The New Era of Language Learning",
    titleLine1: "Master English.",
    titleLine2: "Play Your Way.",
    description:
      "Turn every lesson into a game. From your first 'Hello' to confident boardroom conversations — LEXORA makes fluency feel effortless.",
    ctaPrimary: "Start Free Trial",
    ctaSecondary: "Explore Games",
    trust: "Trusted by 50,000+ learners worldwide",
    floatingCards: [
      { word: "Serendipity", meaning: "A happy accident" },
      { word: "Eloquent", meaning: "Fluent & persuasive" },
      { word: "Resilient", meaning: "Bounces back" },
      { word: "Luminous", meaning: "Glowing bright" },
    ],
  },

  /* ------------------------------------------------------------------------
     MARQUEE STRIP
     ------------------------------------------------------------------------ */
  marquee: [
    "Learn",
    "Play",
    "Master",
    "Speak",
    "Discover",
    "Practice",
    "Excel",
    "Fluency",
    "Confidence",
    "Progress",
  ],

  /* ------------------------------------------------------------------------
     STATS BAR
     ------------------------------------------------------------------------ */
  stats: [
    { value: 50000, suffix: "+", label: "Active Learners" },
    { value: 200, suffix: "+", label: "Interactive Games" },
    { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
    { value: 98, suffix: "%", label: "Success Rate" },
  ],

  /* ------------------------------------------------------------------------
     FEATURES
     ------------------------------------------------------------------------ */
  features: [
    {
      icon: "🎮",
      title: "Gamified Learning",
      description:
        "Every lesson is a game. Earn points, unlock levels, and compete on leaderboards — learning never feels like a chore.",
    },
    {
      icon: "🎯",
      title: "Personalised Paths",
      description:
        "An AI-powered adaptive system adjusts to your pace. Master what you know, focus on what you don't.",
    },
    {
      icon: "🗣️",
      title: "Real Conversations",
      description:
        "Practice with AI tutors and real learners. Build confidence through actual dialogue, not rote memorization.",
    },
    {
      icon: "🏆",
      title: "Rewards & Trophies",
      description:
        "Celebrate every milestone. Collect rare badges, climb the ranks, and showcase your progress.",
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description:
        "Detailed insights into your vocabulary, grammar, pronunciation and fluency — tracked day by day.",
    },
    {
      icon: "🌍",
      title: "Global Community",
      description:
        "Join millions of learners. Share stories, practice together, and make friends across the world.",
    },
  ],

  /* ------------------------------------------------------------------------
     LEARNING PATHS (Beginner → Pro)
     ------------------------------------------------------------------------ */
  learningPaths: [
    {
      level: "01",
      badge: "Beginner",
      title: "The Foundation",
      cefr: "A1 Level",
      description:
        "Start with the absolute basics — alphabet, pronunciation, and your first 500 words.",
      duration: "4 weeks",
      lessons: 24,
      games: 12,
      topics: [
        "Alphabet & Sounds",
        "Essential Vocabulary",
        "Simple Grammar",
        "Everyday Greetings",
      ],
      color: "#d4af37",
      progress: 100,
    },
    {
      level: "02",
      badge: "Elementary",
      title: "The Builder",
      cefr: "A2 Level",
      description:
        "Build confidence with everyday conversations, past & future tenses, and richer vocabulary.",
      duration: "6 weeks",
      lessons: 36,
      games: 18,
      topics: [
        "Conversational Patterns",
        "Tenses Mastery",
        "Travel & Shopping",
        "Common Idioms",
      ],
      color: "#e8c5a0",
      progress: 0,
    },
    {
      level: "03",
      badge: "Intermediate",
      title: "The Achiever",
      cefr: "B1 Level",
      description:
        "Express complex thoughts, understand media, and hold real discussions with ease.",
      duration: "8 weeks",
      lessons: 48,
      games: 24,
      topics: [
        "Storytelling",
        "Debate & Opinion",
        "Media Comprehension",
        "Phrasal Verbs",
      ],
      color: "#c8965f",
      progress: 0,
    },
    {
      level: "04",
      badge: "Pro Level",
      title: "The Master",
      cefr: "C1 / C2 Level",
      description:
        "Achieve near-native fluency. Master idioms, nuance, writing, and public speaking.",
      duration: "12 weeks",
      lessons: 72,
      games: 36,
      topics: [
        "Business English",
        "Creative Writing",
        "Public Speaking",
        "Cultural Nuance",
      ],
      color: "#a67c52",
      progress: 0,
    },
  ],

  /* ------------------------------------------------------------------------
     GAMES — Data for 4 Interactive Games
     ------------------------------------------------------------------------ */
  games: {
    wordMatch: {
      id: "wordMatch",
      title: "Word Match",
      subtitle: "Match each word with its correct meaning",
      icon: "🎴",
      data: [
        { word: "Serendipity", meaning: "A happy accident" },
        { word: "Ephemeral", meaning: "Lasting very briefly" },
        { word: "Eloquent", meaning: "Fluent and persuasive in speech" },
        { word: "Resilient", meaning: "Able to recover quickly" },
        { word: "Meticulous", meaning: "Extremely careful about details" },
        { word: "Pragmatic", meaning: "Practical rather than idealistic" },
        { word: "Benevolent", meaning: "Kind and generous" },
        { word: "Tenacious", meaning: "Persistent and doesn't give up" },
        { word: "Ambiguous", meaning: "Open to more than one interpretation" },
        { word: "Euphoria", meaning: "A feeling of intense happiness" },
      ],
    },

    spellingBee: {
      id: "spellingBee",
      title: "Spelling Bee",
      subtitle: "Read the clue and spell the word correctly",
      icon: "🐝",
      data: [
        { word: "LUMINOUS", hint: "Something glowing or very bright" },
        { word: "RESILIENCE", hint: "Ability to bounce back from difficulty" },
        { word: "AMBIGUOUS", hint: "Open to more than one interpretation" },
        { word: "SYNERGY", hint: "Combined effort greater than the sum of parts" },
        { word: "TRANQUIL", hint: "Peaceful and calm" },
        { word: "EUPHORIA", hint: "A feeling of intense happiness" },
        { word: "AURA", hint: "A distinctive atmosphere around a person" },
        { word: "ETHEREAL", hint: "Extremely delicate and light" },
        { word: "SERENITY", hint: "The state of being calm and peaceful" },
        { word: "ELOQUENCE", hint: "Fluent and persuasive speaking" },
      ],
    },

    grammarQuiz: {
      id: "grammarQuiz",
      title: "Grammar Quiz",
      subtitle: "Pick the grammatically correct sentence",
      icon: "📝",
      data: [
        {
          question: "Choose the correct sentence:",
          options: [
            "She go to school every day.",
            "She goes to school every day.",
            "She going to school every day.",
            "She gone to school every day.",
          ],
          correct: 1,
        },
        {
          question: "Pick the correct past tense:",
          options: [
            "I have ate breakfast.",
            "I ate breakfast.",
            "I eated breakfast.",
            "I was ate breakfast.",
          ],
          correct: 1,
        },
        {
          question: "Which is correct?",
          options: [
            "He don't know.",
            "He doesn't know.",
            "He not know.",
            "He no know.",
          ],
          correct: 1,
        },
        {
          question: "Choose the right article:",
          options: [
            "I saw a elephant.",
            "I saw an elephant.",
            "I saw elephant.",
            "I saw a elephant yesterday.",
          ],
          correct: 1,
        },
        {
          question: "Fill in the blank: 'If I ___ rich, I would travel.'",
          options: ["am", "was", "were", "be"],
          correct: 2,
        },
        {
          question: "Which sentence uses present perfect correctly?",
          options: [
            "I have seen that movie.",
            "I seen that movie.",
            "I have saw that movie.",
            "I am seen that movie.",
          ],
          correct: 0,
        },
        {
          question: "Choose the correct preposition:",
          options: [
            "She is good in math.",
            "She is good at math.",
            "She is good on math.",
            "She is good with math.",
          ],
          correct: 1,
        },
        {
          question: "Which is a compound sentence?",
          options: [
            "I ran fast.",
            "I ran fast, but I missed the bus.",
            "Running fast, I missed the bus.",
            "I ran fast because I missed the bus.",
          ],
          correct: 1,
        },
      ],
    },

    wordScramble: {
      id: "wordScramble",
      title: "Word Scramble",
      subtitle: "Unscramble the letters to form the correct word",
      icon: "🔤",
      data: [
        { scrambled: "LLENCEXEE", answer: "EXCELLENCE", hint: "The quality of being outstanding" },
        { scrambled: "REEDSAI", answer: "DESIRE", hint: "A strong feeling of wanting something" },
        { scrambled: "UNJORYE", answer: "JOURNEY", hint: "An act of traveling from one place to another" },
        { scrambled: "IITVCRYOS", answer: "VICTORY", hint: "An act of defeating an opponent" },
        { scrambled: "WIGDEN", answer: "WIND", hint: "Natural movement of air" },
        { scrambled: "SCUPETRA", answer: "CAPTURES", hint: "Takes hold of something" },
        { scrambled: "YAWLOT", answer: "LOYALTY", hint: "Faithfulness to a person or cause" },
        { scrambled: "PRISEIN", answer: "INSPIRE", hint: "Fill someone with motivation" },
      ],
    },
  },

  /* ------------------------------------------------------------------------
     HOW IT WORKS
     ------------------------------------------------------------------------ */
  howItWorks: [
    {
      step: "01",
      title: "Take a quick test",
      description: "Tell us your current level — takes just 2 minutes.",
    },
    {
      step: "02",
      title: "Get your path",
      description: "Receive a personalised roadmap built around your goals.",
    },
    {
      step: "03",
      title: "Play & learn daily",
      description: "Bite-sized lessons and games, just 10 minutes a day.",
    },
    {
      step: "04",
      title: "Watch fluency grow",
      description: "Track progress, unlock levels, and hit milestones.",
    },
  ],

  /* ------------------------------------------------------------------------
     TESTIMONIALS
     ------------------------------------------------------------------------ */
  testimonials: [
    {
      name: "Priya Sharma",
      role: "Marketing Manager, Mumbai",
      quote:
        "I never thought learning English could feel like play. In 3 months, I was confidently presenting in meetings.",
      rating: 5,
      initial: "P",
    },
    {
      name: "Marco Rossi",
      role: "Software Engineer, Milan",
      quote:
        "The games are addictive. I actually look forward to my daily practice now — it's the highlight of my morning.",
      rating: 5,
      initial: "M",
    },
    {
      name: "Aisha Khan",
      role: "Student, Dubai",
      quote:
        "From zero to C1 in 8 months. LEXORA made it feel effortless, and I made amazing friends along the way.",
      rating: 5,
      initial: "A",
    },
    {
      name: "Diego Fernandez",
      role: "Entrepreneur, Madrid",
      quote:
        "The personalised path is a game-changer. Every lesson felt crafted just for me. Worth every penny.",
      rating: 5,
      initial: "D",
    },
    {
      name: "Yuki Tanaka",
      role: "Designer, Tokyo",
      quote:
        "The premium feel of the platform makes learning feel like a treat. I open the app every morning with joy.",
      rating: 5,
      initial: "Y",
    },
  ],

  /* ------------------------------------------------------------------------
     PRICING PLANS
     ------------------------------------------------------------------------ */
  pricing: [
    {
      name: "Explorer",
      price: "$0",
      period: "forever",
      description: "Start your journey for free",
      features: [
        "Full Beginner path access",
        "5 games per day",
        "Community access",
        "Basic progress tracking",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "$19",
      period: "per month",
      description: "Most popular for serious learners",
      features: [
        "All 4 learning paths",
        "Unlimited games",
        "AI conversation partner",
        "Detailed analytics",
        "Weekly live sessions",
        "Certificate of completion",
      ],
      cta: "Go Premium",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Elite",
      price: "$49",
      period: "per month",
      description: "For those who demand the very best",
      features: [
        "Everything in Premium",
        "1-on-1 tutoring",
        "Personal coach",
        "Custom curriculum",
        "Priority support",
        "Career guidance",
      ],
      cta: "Go Elite",
      highlighted: false,
    },
  ],

  /* ------------------------------------------------------------------------
     FAQS
     ------------------------------------------------------------------------ */
  faqs: [
    {
      q: "How does the gamified system work?",
      a: "Every lesson is designed as an interactive game. You earn XP, unlock badges, and level up as you learn. The sense of play keeps motivation high and makes learning stick.",
    },
    {
      q: "Do I need prior English knowledge?",
      a: "Not at all! Our Beginner path starts from the absolute basics — the alphabet. We take you from zero to fluency step by step.",
    },
    {
      q: "How much time do I need per day?",
      a: "Just 10-15 minutes a day is enough to see real progress. Consistency matters more than duration.",
    },
    {
      q: "Can I change my learning path mid-way?",
      a: "Absolutely. You can retake the placement test any time or manually switch paths from your dashboard.",
    },
    {
      q: "Is there a certificate?",
      a: "Yes, Premium and Elite members receive a certificate upon completing each path, aligned with CEFR standards.",
    },
    {
      q: "What if I want to cancel?",
      a: "You can cancel any time from your account with a single click. No questions asked, no hidden fees.",
    },
  ],

  /* ------------------------------------------------------------------------
     CALL TO ACTION
     ------------------------------------------------------------------------ */
  cta: {
    title: "Ready to speak with confidence?",
    description:
      "Join 50,000+ learners who transformed their English through play.",
    button: "Begin Your Journey",
  },

  /* ------------------------------------------------------------------------
     FOOTER
     ------------------------------------------------------------------------ */
  footer: {
    tagline: "The premium path to English fluency.",
    columns: [
      { title: "Product", links: ["Features", "Paths", "Games", "Pricing"] },
      { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
      { title: "Resources", links: ["FAQ", "Community", "Certificates", "Support"] },
    ],
    social: ["Twitter", "Instagram", "LinkedIn", "YouTube"],
    copyright: "© 2025 LEXORA. Crafted with excellence.",
  },
};
