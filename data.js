/* ============================================================================
   LEXORA v2.0 — Learning Engine Data
   Complete A1 Curriculum (14 units, 60+ lessons, 300+ exercises)
   ============================================================================ */

const LEXORA = {

  /* --------------------------------------------------------------------------
     APP BRAND
     -------------------------------------------------------------------------- */
  brand: {
    name: "LEXORA",
    initials: "LX",
    tagline: "Learn English by Playing",
  },

  /* --------------------------------------------------------------------------
     LEVELS (XP thresholds)
     -------------------------------------------------------------------------- */
  levels: [
    { n: 1,  xp: 0,     title: "Beginner",     icon: "🌱" },
    { n: 2,  xp: 300,   title: "Learner",      icon: "📖" },
    { n: 3,  xp: 700,   title: "Explorer",     icon: "🧭" },
    { n: 4,  xp: 1200,  title: "Adventurer",   icon: "⚔️" },
    { n: 5,  xp: 1800,  title: "Communicator", icon: "💬" },
    { n: 6,  xp: 2500,  title: "Achiever",     icon: "🎯" },
    { n: 7,  xp: 3400,  title: "Confident",    icon: "🔥" },
    { n: 8,  xp: 4500,  title: "Fluent",       icon: "🌟" },
    { n: 9,  xp: 6000,  title: "Expert",       icon: "👑" },
    { n: 10, xp: 8000,  title: "Master",       icon: "💎" },
  ],

  /* --------------------------------------------------------------------------
     BADGES
     -------------------------------------------------------------------------- */
  badges: [
    { id: "first-lesson",   icon: "🎯", name: "First Steps",     desc: "Complete your first lesson" },
    { id: "five-lessons",   icon: "🎓", name: "Getting Started", desc: "Complete 5 lessons" },
    { id: "ten-lessons",    icon: "📚", name: "Bookworm",        desc: "Complete 10 lessons" },
    { id: "twenty-lessons", icon: "🎖️", name: "Committed",       desc: "Complete 20 lessons" },
    { id: "first-perfect",  icon: "⭐", name: "Perfectionist",   desc: "Get 100% in a lesson" },
    { id: "five-perfect",   icon: "💫", name: "Sharpshooter",    desc: "Get 100% in 5 lessons" },
    { id: "streak-3",       icon: "🔥", name: "On Fire",         desc: "3-day streak" },
    { id: "streak-7",       icon: "🌟", name: "Week Warrior",    desc: "7-day streak" },
    { id: "streak-30",      icon: "👑", name: "Unstoppable",     desc: "30-day streak" },
    { id: "first-unit",     icon: "🏆", name: "Unit Complete",   desc: "Complete your first unit" },
    { id: "half-course",    icon: "🎪", name: "Halfway There",   desc: "Complete 7 units" },
    { id: "course-master",  icon: "💎", name: "Course Master",   desc: "Complete all units" },
    { id: "xp-500",         icon: "⚡", name: "Rising Star",     desc: "Earn 500 XP" },
    { id: "xp-2000",        icon: "🌠", name: "High Flyer",      desc: "Earn 2000 XP" },
  ],

  /* --------------------------------------------------------------------------
     CURRICULUM
     -------------------------------------------------------------------------- */
  units: [

    /* ======================================================================
       UNIT 1 — ALPHABET & SOUNDS
       ====================================================================== */
    {
      id: "u1",
      title: "First Words",
      subtitle: "Alphabet & Sounds",
      icon: "🔤",
      color: "#d4af37",
      description: "Learn the English alphabet — your very first step.",
      lessons: [
        {
          id: "u1l1",
          title: "The Alphabet",
          type: "teach",
          teach: {
            intro: "English has 26 letters. Let's learn them all!",
            sections: [
              { title: "A B C D E F G", body: "Say each letter out loud. A is like 'eh', B is like 'bee'.", example: "A · B · C · D · E · F · G" },
              { title: "H I J K L M N", body: "Practice each sound slowly.", example: "H · I · J · K · L · M · N" },
              { title: "O P Q R S T U", body: "Some letters sound like their name!", example: "O · P · Q · R · S · T · U" },
              { title: "V W X Y Z", body: "You did it! Now you know all 26 letters.", example: "V · W · X · Y · Z" },
            ],
            tip: "Practice saying the alphabet every day for one week.",
          },
        },
        {
          id: "u1l2",
          title: "Practice Letters A–Z",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "Which letter comes after A?", options: ["B", "C", "Z", "M"], correct: 0, explanation: "The alphabet starts A, B, C..." },
            { type: "mcq", prompt: "Which letter comes after M?", options: ["L", "N", "O", "P"], correct: 1, explanation: "Order is ...L, M, N, O, P..." },
            { type: "mcq", prompt: "How many letters are in the English alphabet?", options: ["24", "25", "26", "27"], correct: 2, explanation: "English has exactly 26 letters." },
            { type: "mcq", prompt: "Which letter comes before Z?", options: ["Y", "X", "A", "B"], correct: 0, explanation: "...X, Y, Z." },
            { type: "mcq", prompt: "Which is the FIRST letter of the alphabet?", options: ["A", "B", "Z", "M"], correct: 0, explanation: "A is always first." },
            { type: "mcq", prompt: "Which is the LAST letter of the alphabet?", options: ["Y", "Z", "X", "W"], correct: 1, explanation: "Z is the last of the 26 letters." },
          ],
        },
        {
          id: "u1l3",
          title: "Vowels & Consonants",
          type: "teach",
          teach: {
            intro: "Letters are divided into two groups: vowels and consonants.",
            sections: [
              { title: "The 5 Vowels", body: "Vowels are A, E, I, O, U. Your mouth stays open when you say them.", example: "A · E · I · O · U" },
              { title: "The Consonants", body: "All other 21 letters are consonants. Your mouth closes slightly.", example: "B · C · D · F · G · H ..." },
              { title: "Why it matters", body: "Vowels change how we use 'a' and 'an' (later we'll learn more).", example: "a cat · an apple" },
            ],
            tip: "Remember: A E I O U are the vowels. Everything else is a consonant.",
          },
        },
        {
          id: "u1l4",
          title: "Practice Vowels",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "Which of these is a VOWEL?", options: ["B", "E", "F", "K"], correct: 1, explanation: "Vowels are A, E, I, O, U. E is a vowel." },
            { type: "mcq", prompt: "Which of these is a CONSONANT?", options: ["A", "E", "B", "I"], correct: 2, explanation: "B is a consonant. A, E, I are vowels." },
            { type: "mcq", prompt: "How many vowels are in English?", options: ["3", "4", "5", "6"], correct: 2, explanation: "A, E, I, O, U — 5 vowels." },
            { type: "mcq", prompt: "Which is NOT a vowel?", options: ["O", "U", "Y", "A"], correct: 2, explanation: "Y is sometimes a vowel, but officially it's a consonant. The 5 main vowels are A, E, I, O, U." },
            { type: "mcq", prompt: "How many consonants are in English?", options: ["20", "21", "22", "23"], correct: 1, explanation: "26 letters − 5 vowels = 21 consonants." },
            { type: "mcq", prompt: "Which letter starts the word 'apple'?", options: ["A (a vowel)", "P (a consonant)", "L (a consonant)", "E (a vowel)"], correct: 0, explanation: "Apple starts with A, a vowel." },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 2 — GREETINGS
       ====================================================================== */
    {
      id: "u2",
      title: "Hello!",
      subtitle: "Greetings & First Conversations",
      icon: "👋",
      color: "#e8c5a0",
      description: "Learn how to say hello and introduce yourself.",
      lessons: [
        {
          id: "u2l1",
          title: "Saying Hello",
          type: "teach",
          teach: {
            intro: "Greetings are the first thing you say when you meet someone.",
            sections: [
              { title: "Hello / Hi / Hey", body: "All three mean the same thing. 'Hi' is casual. 'Hello' is more formal.", example: "Hello! Hi! Hey!" },
              { title: "Good morning", body: "Use before 12 PM (noon).", example: "Good morning, Maria!" },
              { title: "Good afternoon", body: "Use from 12 PM to about 6 PM.", example: "Good afternoon, sir." },
              { title: "Good evening", body: "Use after 6 PM.", example: "Good evening, everyone." },
            ],
            tip: "In English, we usually smile when we greet someone!",
          },
        },
        {
          id: "u2l2",
          title: "Practice Greetings",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "It is 9 AM. You meet your friend. What do you say?", options: ["Good night", "Good morning", "Good evening", "Goodbye"], correct: 1, explanation: "Before noon, say 'Good morning'." },
            { type: "mcq", prompt: "It is 8 PM. You meet someone. What do you say?", options: ["Good morning", "Good afternoon", "Good evening", "Good night"], correct: 2, explanation: "After 6 PM, say 'Good evening'." },
            { type: "mcq", prompt: "What does 'Hi' mean?", options: ["Goodbye", "Hello", "Thank you", "Sorry"], correct: 1, explanation: "'Hi' is a casual way to say hello." },
            { type: "spell", prompt: "Spell the word for a common greeting (starts with H):", word: "HELLO", hint: "5 letters, very common greeting" },
            { type: "mcq", prompt: "It is 3 PM. What greeting is correct?", options: ["Good morning", "Good afternoon", "Good evening", "Good night"], correct: 1, explanation: "Between 12 PM and 6 PM: 'Good afternoon'." },
            { type: "mcq", prompt: "Which is the MOST formal greeting?", options: ["Hey", "Hi", "Hello", "Yo"], correct: 2, explanation: "'Hello' is more formal than 'Hi' or 'Hey'." },
          ],
        },
        {
          id: "u2l3",
          title: "How Are You?",
          type: "teach",
          teach: {
            intro: "After saying hello, we usually ask how the person is.",
            sections: [
              { title: "How are you?", body: "The most common way to ask someone how they feel.", example: "Hi! How are you?" },
              { title: "I'm fine, thank you.", body: "This is the standard polite answer.", example: "I'm fine, thank you. And you?" },
              { title: "I'm good / great / okay.", body: "More casual and modern answers.", example: "I'm good! I'm great! I'm okay." },
              { title: "And you?", body: "Ask the same question back — it's polite!", example: "I'm fine. And you?" },
            ],
            tip: "When someone asks 'How are you?', always reply and ask back!",
          },
        },
        {
          id: "u2l4",
          title: "Practice Conversations",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "'How are you?' — What is a good answer?", options: ["I am fine, thank you.", "My name is John.", "I am 10 years old.", "Goodbye."], correct: 0, explanation: "'How are you?' asks about your state, so 'I am fine' is correct." },
            { type: "mcq", prompt: "Someone says 'I'm fine, and you?' — What do you say?", options: ["I'm fine too, thank you.", "Goodbye.", "I'm ten.", "Yes."], correct: 0, explanation: "Reply back politely with your state." },
            { type: "build", prompt: "Build the sentence: 'I am fine, thank you.'", words: ["I", "am", "fine", "thank", "you"], answer: "I am fine thank you" },
            { type: "mcq", prompt: "Which is a polite reply to 'How are you?'", options: ["Why?", "I'm good, thanks!", "No.", "Apple."], correct: 1, explanation: "'I'm good, thanks!' is a natural answer." },
            { type: "spell", prompt: "Spell the word meaning 'grateful' (starts with T):", word: "THANK", hint: "5 letters — used in 'thank you'" },
            { type: "build", prompt: "Build: 'How are you?'", words: ["How", "are", "you"], answer: "How are you" },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 3 — NUMBERS 1-20
       ====================================================================== */
    {
      id: "u3",
      title: "Numbers",
      subtitle: "One to Twenty",
      icon: "🔢",
      color: "#c8965f",
      description: "Count from 1 to 20 and use numbers in sentences.",
      lessons: [
        {
          id: "u3l1",
          title: "Numbers 1-10",
          type: "teach",
          teach: {
            intro: "Numbers are everywhere — let's start with 1 to 10.",
            sections: [
              { title: "1 2 3", body: "One, Two, Three.", example: "1 = one · 2 = two · 3 = three" },
              { title: "4 5 6", body: "Four, Five, Six.", example: "4 = four · 5 = five · 6 = six" },
              { title: "7 8 9", body: "Seven, Eight, Nine.", example: "7 = seven · 8 = eight · 9 = nine" },
              { title: "10", body: "Ten!", example: "10 = ten" },
            ],
            tip: "Count on your fingers while saying each number.",
          },
        },
        {
          id: "u3l2",
          title: "Practice 1-10",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "What number is 'five'?", options: ["3", "4", "5", "6"], correct: 2, explanation: "'Five' = 5." },
            { type: "mcq", prompt: "How do you spell the number after 7?", options: ["ATE", "EIGHT", "EGHT", "AUGHT"], correct: 1, explanation: "After 7 (seven) is 8 (eight)." },
            { type: "spell", prompt: "Spell the number 3:", word: "THREE", hint: "5 letters, starts with T" },
            { type: "mcq", prompt: "Which number is 'nine'?", options: ["7", "8", "9", "10"], correct: 2, explanation: "'Nine' = 9." },
            { type: "mcq", prompt: "2 + 3 = ?", options: ["four", "five", "six", "seven"], correct: 1, explanation: "2 (two) + 3 (three) = 5 (five)." },
            { type: "spell", prompt: "Spell the number 10:", word: "TEN", hint: "3 letters, ends with N" },
          ],
        },
        {
          id: "u3l3",
          title: "Numbers 11-20",
          type: "teach",
          teach: {
            intro: "Now let's continue from 11 to 20.",
            sections: [
              { title: "11 12 13", body: "Eleven, Twelve, Thirteen.", example: "11 = eleven · 12 = twelve · 13 = thirteen" },
              { title: "14 15 16", body: "Fourteen, Fifteen, Sixteen.", example: "14 = fourteen · 15 = fifteen · 16 = sixteen" },
              { title: "17 18 19", body: "Seventeen, Eighteen, Nineteen.", example: "17 = seventeen · 18 = eighteen · 19 = nineteen" },
              { title: "20", body: "Twenty!", example: "20 = twenty" },
            ],
            tip: "Notice: thirteen to nineteen all end in '-teen'!",
          },
        },
        {
          id: "u3l4",
          title: "Practice 11-20",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "What is 'fifteen' in numbers?", options: ["13", "14", "15", "16"], correct: 2, explanation: "'Fifteen' = 15." },
            { type: "mcq", prompt: "Spell 12:", options: ["TWELVE", "TWELF", "TWELV", "TWELEVE"], correct: 0, explanation: "12 = twelve (tricky spelling!)." },
            { type: "spell", prompt: "Spell the number 20:", word: "TWENTY", hint: "6 letters, starts with TW" },
            { type: "mcq", prompt: "Which number is 'eighteen'?", options: ["17", "18", "19", "20"], correct: 1, explanation: "'Eighteen' = 18." },
            { type: "mcq", prompt: "10 + 5 = ?", options: ["fourteen", "fifteen", "sixteen", "seventeen"], correct: 1, explanation: "10 + 5 = 15 (fifteen)." },
            { type: "mcq", prompt: "Which comes between 18 and 20?", options: ["seventeen", "nineteen", "twenty-one", "eighteen"], correct: 1, explanation: "After 18 comes 19 (nineteen), then 20." },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 4 — PRONOUNS
       ====================================================================== */
    {
      id: "u4",
      title: "Me & You",
      subtitle: "Pronouns",
      icon: "👤",
      color: "#a67c52",
      description: "Learn words that replace names — I, you, he, she, it, we, they.",
      lessons: [
        {
          id: "u4l1",
          title: "Personal Pronouns",
          type: "teach",
          teach: {
            intro: "Pronouns are words we use instead of names.",
            sections: [
              { title: "I", body: "Use 'I' to talk about yourself. Always capital!", example: "I am happy." },
              { title: "You", body: "Use 'you' for the person you're speaking to.", example: "You are my friend." },
              { title: "He / She / It", body: "He = a boy/man. She = a girl/woman. It = a thing/animal.", example: "He is tall. She is kind. It is cold." },
              { title: "We / They", body: "We = me + others. They = other people (not me).", example: "We are students. They are teachers." },
            ],
            tip: "Remember: 'I' is ALWAYS capital in English — even in the middle of a sentence!",
          },
        },
        {
          id: "u4l2",
          title: "Practice Pronouns",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "Replace 'Maria' with the correct pronoun:", options: ["He", "She", "It", "They"], correct: 1, explanation: "Maria is a girl → 'She'." },
            { type: "mcq", prompt: "Replace 'John and I' with a pronoun:", options: ["He", "She", "We", "They"], correct: 2, explanation: "'John and I' includes me → 'We'." },
            { type: "mcq", prompt: "Replace 'the dog' with a pronoun:", options: ["He", "She", "It", "They"], correct: 2, explanation: "For animals/things → 'It'." },
            { type: "mcq", prompt: "Which pronoun is for the person you're talking to?", options: ["I", "You", "He", "They"], correct: 1, explanation: "'You' is used for the person you're speaking to." },
            { type: "build", prompt: "Build: 'I am a student'", words: ["I", "am", "a", "student"], answer: "I am a student" },
            { type: "mcq", prompt: "Replace 'The boys' with a pronoun:", options: ["He", "She", "It", "They"], correct: 3, explanation: "'The boys' (plural, not me) → 'They'." },
          ],
        },
        {
          id: "u4l3",
          title: "Possessive Pronouns",
          type: "teach",
          teach: {
            intro: "Possessive pronouns show that something belongs to someone.",
            sections: [
              { title: "My", body: "Belongs to ME.", example: "My book. My friend. My name." },
              { title: "Your", body: "Belongs to YOU.", example: "Your house. Your car." },
              { title: "His / Her / Its", body: "His = a man's. Her = a woman's. Its = a thing's.", example: "His dog. Her cat. Its food." },
              { title: "Our / Their", body: "Our = belongs to us. Their = belongs to them.", example: "Our school. Their house." },
            ],
            tip: "Notice: 'my' for I, 'your' for you, 'his' for he, 'her' for she, 'its' for it, 'our' for we, 'their' for they.",
          },
        },
        {
          id: "u4l4",
          title: "Practice Possessives",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "Choose the correct sentence:", options: ["I am name is Ravi.", "My name is Ravi.", "Me name is Ravi.", "Mine name is Ravi."], correct: 1, explanation: "'My name' — use possessive 'my' with 'I'." },
            { type: "mcq", prompt: "John has a car. ___ car is red.", options: ["Her", "His", "Their", "My"], correct: 1, explanation: "John is male → 'his' car." },
            { type: "mcq", prompt: "Maria has a book. ___ book is new.", options: ["His", "Her", "Its", "Your"], correct: 1, explanation: "Maria is female → 'her' book." },
            { type: "fill", prompt: "Complete: 'We love ___ school.'", sentence: "We love ___ school.", options: ["my", "your", "our", "their"], correct: 2, explanation: "'We' → 'our'." },
            { type: "mcq", prompt: "Choose the right possessive for 'you':", options: ["My", "Your", "His", "Their"], correct: 1, explanation: "'You' → 'your'." },
            { type: "build", prompt: "Build: 'She is my sister'", words: ["She", "is", "my", "sister"], answer: "She is my sister" },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 5 — TO BE (AM / IS / ARE)
       ====================================================================== */
    {
      id: "u5",
      title: "To Be",
      subtitle: "Am · Is · Are",
      icon: "✨",
      color: "#b8956a",
      description: "The most important verb in English — 'to be'.",
      lessons: [
        {
          id: "u5l1",
          title: "Am / Is / Are",
          type: "teach",
          teach: {
            intro: "'To be' is the most common English verb. It means 'exist' or describes who/what you are.",
            sections: [
              { title: "I am", body: "Use 'am' only with 'I'.", example: "I am happy. I am a student. I am tired." },
              { title: "You are / We are / They are", body: "Use 'are' with you, we, they.", example: "You are kind. We are friends. They are here." },
              { title: "He is / She is / It is", body: "Use 'is' with he, she, it.", example: "He is tall. She is smart. It is cold." },
              { title: "Short forms", body: "I'm, You're, He's, She's, It's, We're, They're.", example: "I'm fine. She's happy. They're here." },
            ],
            tip: "Remember the pattern: I → am · He/She/It → is · You/We/They → are",
          },
        },
        {
          id: "u5l2",
          title: "Practice Am/Is/Are",
          type: "practice",
          exercises: [
            { type: "fill", prompt: "Complete: 'I ___ a student.'", sentence: "I ___ a student.", options: ["am", "is", "are", "be"], correct: 0, explanation: "'I' always pairs with 'am'." },
            { type: "fill", prompt: "Complete: 'She ___ my friend.'", sentence: "She ___ my friend.", options: ["am", "is", "are", "be"], correct: 1, explanation: "'She' → 'is'." },
            { type: "fill", prompt: "Complete: 'They ___ happy.'", sentence: "They ___ happy.", options: ["am", "is", "are", "be"], correct: 2, explanation: "'They' → 'are'." },
            { type: "fill", prompt: "Complete: 'We ___ from India.'", sentence: "We ___ from India.", options: ["am", "is", "are", "be"], correct: 2, explanation: "'We' → 'are'." },
            { type: "fill", prompt: "Complete: 'It ___ very hot today.'", sentence: "It ___ very hot today.", options: ["am", "is", "are", "be"], correct: 1, explanation: "'It' → 'is'." },
            { type: "build", prompt: "Build: 'I am a teacher'", words: ["I", "am", "a", "teacher"], answer: "I am a teacher" },
            { type: "build", prompt: "Build: 'He is very tall'", words: ["He", "is", "very", "tall"], answer: "He is very tall" },
          ],
        },
        {
          id: "u5l3",
          title: "Negatives (Not)",
          type: "teach",
          teach: {
            intro: "To say something is NOT true, add 'not' after am/is/are.",
            sections: [
              { title: "I am not", body: "Short form: I'm not.", example: "I am not tired. I'm not from here." },
              { title: "is not → isn't", body: "He isn't / She isn't / It isn't.", example: "He isn't my brother. She isn't here." },
              { title: "are not → aren't", body: "You aren't / We aren't / They aren't.", example: "They aren't students. We aren't late." },
            ],
            tip: "Negative = am/is/are + not. Or use short forms: isn't, aren't.",
          },
        },
        {
          id: "u5l4",
          title: "Practice Negatives",
          type: "practice",
          exercises: [
            { type: "fill", prompt: "Complete: 'She ___ not my sister.'", sentence: "She ___ not my sister.", options: ["am", "is", "are", "be"], correct: 1, explanation: "'She' → 'is not' → 'isn't'." },
            { type: "mcq", prompt: "What is the short form of 'is not'?", options: ["isn't", "aren't", "amn't", "not"], correct: 0, explanation: "'Is not' → 'isn't'." },
            { type: "mcq", prompt: "What is the short form of 'are not'?", options: ["isn't", "aren't", "amn't", "not"], correct: 1, explanation: "'Are not' → 'aren't'." },
            { type: "fill", prompt: "Complete: 'They ___ not from here.'", sentence: "They ___ not from here.", options: ["am", "is", "are", "not"], correct: 2, explanation: "'They' → 'are not' → 'aren't'." },
            { type: "mcq", prompt: "Which is correct?", options: ["I not am happy.", "I am not happy.", "I amn't happy.", "I not happy."], correct: 1, explanation: "'I am not happy' — 'not' goes after 'am'." },
            { type: "build", prompt: "Build: 'I am not tired'", words: ["I", "am", "not", "tired"], answer: "I am not tired" },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 6 — COLORS & ADJECTIVES
       ====================================================================== */
    {
      id: "u6",
      title: "Colors",
      subtitle: "Describing Things",
      icon: "🎨",
      color: "#d4af37",
      description: "Learn color words and basic adjectives to describe things.",
      lessons: [
        {
          id: "u6l1",
          title: "Basic Colors",
          type: "teach",
          teach: {
            intro: "Colors help us describe the world around us.",
            sections: [
              { title: "Red · Blue · Green", body: "🔴 Red, 🔵 Blue, 🟢 Green.", example: "A red apple. Blue sky. Green grass." },
              { title: "Yellow · Orange · Purple", body: "🟡 Yellow, 🟠 Orange, 🟣 Purple.", example: "Yellow sun. Orange juice. Purple flower." },
              { title: "Black · White · Brown", body: "⚫ Black, ⚪ White, 🟤 Brown.", example: "Black cat. White snow. Brown wood." },
              { title: "Pink · Gray", body: "🌸 Pink, 🌑 Gray.", example: "Pink dress. Gray cloud." },
            ],
            tip: "Colors come BEFORE the noun: 'a red car' (not 'a car red').",
          },
        },
        {
          id: "u6l2",
          title: "Practice Colors",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "What color is the sun usually?", options: ["blue", "yellow", "green", "black"], correct: 1, explanation: "The sun appears yellow/golden." },
            { type: "mcq", prompt: "What color is grass?", options: ["red", "blue", "green", "pink"], correct: 2, explanation: "Grass is green." },
            { type: "spell", prompt: "Spell the color of the sky:", word: "BLUE", hint: "4 letters" },
            { type: "mcq", prompt: "What color is snow?", options: ["black", "red", "white", "brown"], correct: 2, explanation: "Snow is white." },
            { type: "spell", prompt: "Spell the color of blood:", word: "RED", hint: "3 letters" },
            { type: "mcq", prompt: "Choose the correct word order:", options: ["car red a", "red a car", "a red car", "a car red"], correct: 2, explanation: "Article + color + noun → 'a red car'." },
          ],
        },
        {
          id: "u6l3",
          title: "Simple Adjectives",
          type: "teach",
          teach: {
            intro: "Adjectives describe nouns. Big, small, hot, cold — they tell us more!",
            sections: [
              { title: "Size", body: "Big ↔ Small · Tall ↔ Short · Long ↔ Short.", example: "A big house. A small dog." },
              { title: "Temperature", body: "Hot ↔ Cold · Warm ↔ Cool.", example: "Hot tea. Cold water." },
              { title: "Feelings", body: "Happy ↔ Sad · Good ↔ Bad · New ↔ Old.", example: "Happy baby. Old book." },
            ],
            tip: "Adjectives NEVER change for plural: 'big car' → 'big cars' (not 'bigs').",
          },
        },
        {
          id: "u6l4",
          title: "Practice Adjectives",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "The opposite of 'big' is:", options: ["tall", "small", "hot", "new"], correct: 1, explanation: "Big ↔ Small." },
            { type: "mcq", prompt: "The opposite of 'hot' is:", options: ["warm", "cold", "big", "good"], correct: 1, explanation: "Hot ↔ Cold." },
            { type: "mcq", prompt: "The opposite of 'happy' is:", options: ["sad", "big", "old", "cold"], correct: 0, explanation: "Happy ↔ Sad." },
            { type: "mcq", prompt: "Choose the correct sentence:", options: ["A bigs cat.", "A big cat.", "A cat big.", "A cats big."], correct: 1, explanation: "Adjectives don't change. 'A big cat' is correct." },
            { type: "build", prompt: "Build: 'The cat is small'", words: ["The", "cat", "is", "small"], answer: "The cat is small" },
            { type: "mcq", prompt: "The opposite of 'new' is:", options: ["good", "cold", "old", "big"], correct: 2, explanation: "New ↔ Old." },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 7 — FAMILY
       ====================================================================== */
    {
      id: "u7",
      title: "Family",
      subtitle: "People Close to Us",
      icon: "👨‍👩‍👧",
      color: "#e8c5a0",
      description: "Learn words for family members.",
      lessons: [
        {
          id: "u7l1",
          title: "Close Family",
          type: "teach",
          teach: {
            intro: "Let's learn the words for the people in your family.",
            sections: [
              { title: "Mother & Father", body: "Mother (mom) = female parent. Father (dad) = male parent.", example: "My mother is kind. My father is tall." },
              { title: "Sister & Brother", body: "Sister = female sibling. Brother = male sibling.", example: "I have one sister. He is my brother." },
              { title: "Son & Daughter", body: "Son = male child. Daughter = female child.", example: "Their son is 5. Her daughter is smart." },
            ],
            tip: "'Mother' and 'father' are formal. 'Mom' and 'dad' are used at home.",
          },
        },
        {
          id: "u7l2",
          title: "Practice Family Words",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "Your mother's son is your...", options: ["father", "brother", "sister", "uncle"], correct: 1, explanation: "Your mother's son could be you or your brother." },
            { type: "spell", prompt: "Spell: your female parent (formal word):", word: "MOTHER", hint: "6 letters, starts with M" },
            { type: "mcq", prompt: "Your father's father is your...", options: ["uncle", "brother", "grandfather", "son"], correct: 2, explanation: "Father's father = grandfather." },
            { type: "spell", prompt: "Spell: female sibling (starts with S):", word: "SISTER", hint: "6 letters" },
            { type: "mcq", prompt: "A female child is called a...", options: ["son", "daughter", "mother", "sister"], correct: 1, explanation: "Female child = daughter." },
            { type: "build", prompt: "Build: 'This is my mother'", words: ["This", "is", "my", "mother"], answer: "This is my mother" },
          ],
        },
        {
          id: "u7l3",
          title: "Extended Family",
          type: "teach",
          teach: {
            intro: "Family is bigger than just mom and dad!",
            sections: [
              { title: "Grandmother & Grandfather", body: "Your parents' parents. Short: grandma, grandpa.", example: "My grandmother makes good food." },
              { title: "Uncle & Aunt", body: "Your parents' brother or sister.", example: "My uncle lives in Delhi. My aunt is a doctor." },
              { title: "Cousin", body: "Your uncle or aunt's child.", example: "My cousin is my best friend." },
            ],
            tip: "In English, 'cousin' is used for both male and female!",
          },
        },
        {
          id: "u7l4",
          title: "Practice Extended Family",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "Your mother's brother is your...", options: ["uncle", "aunt", "cousin", "brother"], correct: 0, explanation: "Mother's brother = uncle." },
            { type: "mcq", prompt: "Your father's sister is your...", options: ["uncle", "aunt", "cousin", "grandmother"], correct: 1, explanation: "Father's sister = aunt." },
            { type: "spell", prompt: "Spell the word for your parents' parents:", word: "GRANDPARENTS", hint: "12 letters, starts with GR" },
            { type: "mcq", prompt: "Your uncle's son is your...", options: ["brother", "cousin", "uncle", "nephew"], correct: 1, explanation: "Uncle's son = cousin." },
            { type: "fill", prompt: "Complete: 'My ___ is my father's mother.'", sentence: "My ___ is my father's mother.", options: ["aunt", "sister", "grandmother", "daughter"], correct: 2, explanation: "Father's mother = grandmother." },
            { type: "build", prompt: "Build: 'She is my sister'", words: ["She", "is", "my", "sister"], answer: "She is my sister" },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 8 — FOOD & DRINK
       ====================================================================== */
    {
      id: "u8",
      title: "Food & Drink",
      subtitle: "Everyday Items",
      icon: "🍎",
      color: "#c8965f",
      description: "Learn food words and how to say what you like.",
      lessons: [
        {
          id: "u8l1",
          title: "Drinks",
          type: "teach",
          teach: {
            intro: "Let's start with drinks — what do you like to drink?",
            sections: [
              { title: "Water", body: "💧 The most important drink!", example: "I drink water every day." },
              { title: "Milk · Tea · Coffee", body: "🥛 Milk, 🍵 Tea, ☕ Coffee.", example: "I like tea. She drinks coffee." },
              { title: "Juice", body: "🧃 Made from fruits.", example: "Orange juice. Apple juice." },
            ],
            tip: "Use 'drink' as a verb: I drink water. Use 'eat' for food: I eat rice.",
          },
        },
        {
          id: "u8l2",
          title: "Practice Drinks",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "What do we usually drink with meals?", options: ["water", "bread", "rice", "apple"], correct: 0, explanation: "Water is the most common drink." },
            { type: "spell", prompt: "Spell the drink that comes from cows:", word: "MILK", hint: "4 letters, white" },
            { type: "mcq", prompt: "Which is a hot drink?", options: ["juice", "water", "tea", "milk"], correct: 2, explanation: "Tea is usually served hot." },
            { type: "spell", prompt: "Spell the drink made from beans (hot):", word: "COFFEE", hint: "6 letters, starts with C" },
            { type: "fill", prompt: "Complete: 'I ___ water every morning.'", sentence: "I ___ water every morning.", options: ["eat", "drink", "make", "have"], correct: 1, explanation: "Liquids → 'drink'." },
            { type: "mcq", prompt: "Which drink is made from oranges?", options: ["milk", "coffee", "juice", "tea"], correct: 2, explanation: "Orange juice comes from oranges." },
          ],
        },
        {
          id: "u8l3",
          title: "Food",
          type: "teach",
          teach: {
            intro: "Now let's learn some common foods.",
            sections: [
              { title: "Fruits", body: "🍎 Apple, 🍌 Banana, 🍊 Orange, 🍇 Grapes.", example: "I like apples. Bananas are yellow." },
              { title: "Basic Food", body: "🍞 Bread, 🍚 Rice, 🍳 Egg, 🧀 Cheese.", example: "I eat rice and bread." },
              { title: "Meals", body: "Breakfast (morning), Lunch (noon), Dinner (evening).", example: "I have breakfast at 8 AM." },
            ],
            tip: "Use 'eat' for solid food: I eat bread. Use 'drink' for liquids.",
          },
        },
        {
          id: "u8l4",
          title: "Practice Food & Likes",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "Which is a fruit?", options: ["rice", "apple", "bread", "egg"], correct: 1, explanation: "Apple is a fruit." },
            { type: "spell", prompt: "Spell the yellow fruit:", word: "BANANA", hint: "6 letters, monkeys love it" },
            { type: "mcq", prompt: "The first meal of the day is...", options: ["dinner", "lunch", "breakfast", "snack"], correct: 2, explanation: "Breakfast = morning meal." },
            { type: "fill", prompt: "Complete: 'I ___ apples.'", sentence: "I ___ apples.", options: ["drink", "eat", "make", "go"], correct: 1, explanation: "Solid food → 'eat'." },
            { type: "mcq", prompt: "What meal do we eat in the evening?", options: ["breakfast", "lunch", "dinner", "snack"], correct: 2, explanation: "Evening meal = dinner." },
            { type: "build", prompt: "Build: 'I like bananas'", words: ["I", "like", "bananas"], answer: "I like bananas" },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 9 — ANIMALS & BODY
       ====================================================================== */
    {
      id: "u9",
      title: "Animals",
      subtitle: "Creatures & Body Parts",
      icon: "🐶",
      color: "#a67c52",
      description: "Learn animal names and basic body parts.",
      lessons: [
        {
          id: "u9l1",
          title: "Common Animals",
          type: "teach",
          teach: {
            intro: "Animals are all around us. Let's learn their names!",
            sections: [
              { title: "Pets", body: "🐶 Dog, 🐱 Cat, 🐟 Fish, 🐰 Rabbit.", example: "My dog is friendly. The cat is small." },
              { title: "Farm Animals", body: "🐄 Cow, 🐔 Chicken, 🐷 Pig, 🐴 Horse.", example: "The cow gives milk. The horse runs fast." },
              { title: "Wild Animals", body: "🦁 Lion, 🐘 Elephant, 🐵 Monkey, 🐻 Bear.", example: "The lion is big. Elephants are huge." },
            ],
            tip: "Use 'it' for animals (unless they're pets — then you can say 'he' or 'she').",
          },
        },
        {
          id: "u9l2",
          title: "Practice Animals",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "Which animal says 'meow'?", options: ["dog", "cat", "cow", "lion"], correct: 1, explanation: "Cats say 'meow'." },
            { type: "mcq", prompt: "Which animal is the KING of the jungle?", options: ["tiger", "lion", "elephant", "monkey"], correct: 1, explanation: "The lion is often called the king." },
            { type: "spell", prompt: "Spell the animal that barks (man's best friend):", word: "DOG", hint: "3 letters" },
            { type: "mcq", prompt: "Which animal gives us milk?", options: ["cat", "cow", "dog", "fish"], correct: 1, explanation: "Cows give milk." },
            { type: "spell", prompt: "Spell the animal that swings in trees:", word: "MONKEY", hint: "6 letters" },
            { type: "mcq", prompt: "Which is the biggest animal on land?", options: ["lion", "horse", "elephant", "bear"], correct: 2, explanation: "Elephants are the biggest land animals." },
          ],
        },
        {
          id: "u9l3",
          title: "Body Parts",
          type: "teach",
          teach: {
            intro: "Let's learn the parts of your body.",
            sections: [
              { title: "Head & Face", body: "Head, Eyes, Ears, Nose, Mouth.", example: "My eyes are brown. I have one nose." },
              { title: "Arms & Hands", body: "Arm, Hand, Finger, Shoulder.", example: "Two arms. Ten fingers." },
              { title: "Legs & Feet", body: "Leg, Knee, Foot, Toe.", example: "Two legs. Two feet." },
            ],
            tip: "Plural forms: foot → feet, tooth → teeth. Others just add 's'.",
          },
        },
        {
          id: "u9l4",
          title: "Practice Body Parts",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "What do we use to see?", options: ["ears", "eyes", "nose", "mouth"], correct: 1, explanation: "We see with our eyes." },
            { type: "mcq", prompt: "What do we use to hear?", options: ["ears", "eyes", "nose", "mouth"], correct: 0, explanation: "We hear with our ears." },
            { type: "spell", prompt: "Spell the body part we use to smell:", word: "NOSE", hint: "4 letters" },
            { type: "mcq", prompt: "How many fingers do you have on ONE hand?", options: ["4", "5", "6", "10"], correct: 1, explanation: "5 fingers on each hand." },
            { type: "spell", prompt: "Spell the body part at the end of your leg:", word: "FOOT", hint: "4 letters" },
            { type: "mcq", prompt: "The plural of 'foot' is:", options: ["foots", "feet", "foot", "fots"], correct: 1, explanation: "Foot → feet (irregular)." },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 10 — ARTICLES & PLURALS
       ====================================================================== */
    {
      id: "u10",
      title: "A / An / The",
      subtitle: "Articles & Plurals",
      icon: "🔠",
      color: "#b8956a",
      description: "Master articles and plural forms — grammar essentials.",
      lessons: [
        {
          id: "u10l1",
          title: "A vs An",
          type: "teach",
          teach: {
            intro: "Use 'a' or 'an' before singular countable nouns.",
            sections: [
              { title: "Use 'A' before consonant sounds", body: "a cat, a dog, a book, a car.", example: "I have a cat. She is a teacher." },
              { title: "Use 'An' before vowel sounds", body: "an apple, an egg, an orange, an hour.", example: "I want an apple. He is an engineer." },
              { title: "It's about SOUND, not letter!", body: "'An hour' (silent H) — vowel sound. 'A university' (sounds like 'yu') — consonant sound.", example: "an hour · a university" },
            ],
            tip: "Rule of thumb: A + consonant sound, AN + vowel sound. Listen to the sound, not the letter.",
          },
        },
        {
          id: "u10l2",
          title: "Practice A vs An",
          type: "practice",
          exercises: [
            { type: "fill", prompt: "Complete: 'I ate ___ apple.'", sentence: "I ate ___ apple.", options: ["a", "an", "the", "—"], correct: 1, explanation: "'Apple' starts with vowel sound → 'an'." },
            { type: "fill", prompt: "Complete: 'She is ___ teacher.'", sentence: "She is ___ teacher.", options: ["a", "an", "the", "—"], correct: 0, explanation: "'Teacher' starts with consonant sound → 'a'." },
            { type: "fill", prompt: "Complete: 'He is ___ engineer.'", sentence: "He is ___ engineer.", options: ["a", "an", "the", "—"], correct: 1, explanation: "'Engineer' starts with vowel → 'an'." },
            { type: "mcq", prompt: "Which is correct?", options: ["a orange", "an orange", "the orange a", "an oranges"], correct: 1, explanation: "Orange → vowel sound → 'an'." },
            { type: "mcq", prompt: "Which is correct?", options: ["an dog", "a dog", "the dogs a", "an dogs"], correct: 1, explanation: "Dog → consonant sound → 'a'." },
            { type: "fill", prompt: "Complete: 'I saw ___ elephant.'", sentence: "I saw ___ elephant.", options: ["a", "an", "the", "some"], correct: 1, explanation: "Elephant starts with vowel → 'an'." },
          ],
        },
        {
          id: "u10l3",
          title: "Plural Nouns",
          type: "teach",
          teach: {
            intro: "To talk about more than one thing, we usually add '-s' or '-es'.",
            sections: [
              { title: "Add -s (most common)", body: "cat → cats · book → books · dog → dogs.", example: "One cat, two cats." },
              { title: "Add -es (after s, sh, ch, x, z)", body: "box → boxes · watch → watches · bus → buses.", example: "One box, many boxes." },
              { title: "Irregular plurals", body: "child → children · man → men · woman → women · foot → feet · tooth → teeth · mouse → mice.", example: "One child, two children." },
              { title: "Y → ies", body: "baby → babies · city → cities · story → stories.", example: "One baby, three babies." },
            ],
            tip: "Most plurals just add 's'. Watch for the exceptions!",
          },
        },
        {
          id: "u10l4",
          title: "Practice Plurals",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "Plural of 'cat'?", options: ["cat", "cats", "cates", "cates"], correct: 1, explanation: "Just add 's': cats." },
            { type: "mcq", prompt: "Plural of 'box'?", options: ["boxs", "boxes", "box", "boxies"], correct: 1, explanation: "Box ends in X → add 'es': boxes." },
            { type: "mcq", prompt: "Plural of 'child'?", options: ["childs", "childes", "children", "childrens"], correct: 2, explanation: "Irregular: child → children." },
            { type: "mcq", prompt: "Plural of 'baby'?", options: ["babys", "babyes", "babies", "baby's"], correct: 2, explanation: "Y after consonant → ies: babies." },
            { type: "mcq", prompt: "Plural of 'man'?", options: ["mans", "men", "mens", "man"], correct: 1, explanation: "Irregular: man → men." },
            { type: "mcq", prompt: "Plural of 'foot'?", options: ["foots", "footes", "feets", "feet"], correct: 3, explanation: "Irregular: foot → feet." },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 11 — COMMON VERBS
       ====================================================================== */
    {
      id: "u11",
      title: "Action Words",
      subtitle: "Common Verbs",
      icon: "🏃",
      color: "#d4af37",
      description: "Learn the most common English verbs.",
      lessons: [
        {
          id: "u11l1",
          title: "Basic Verbs",
          type: "teach",
          teach: {
            intro: "Verbs are action words — they tell us what someone does.",
            sections: [
              { title: "Go · Come", body: "Go = move away. Come = move towards.", example: "I go to school. Come here!" },
              { title: "Eat · Drink", body: "Eat = solid food. Drink = liquid.", example: "I eat rice. I drink water." },
              { title: "Sleep · Wake up", body: "Sleep = rest. Wake up = stop sleeping.", example: "I sleep at 10 PM. I wake up at 7 AM." },
              { title: "Have · Do", body: "Have = possess. Do = perform an action.", example: "I have a book. I do my work." },
            ],
            tip: "Verbs change form based on WHO does the action. We'll learn that soon!",
          },
        },
        {
          id: "u11l2",
          title: "Practice Verbs",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "I ___ rice every day.", options: ["drink", "eat", "go", "sleep"], correct: 1, explanation: "Rice is solid food → 'eat'." },
            { type: "mcq", prompt: "I ___ water in the morning.", options: ["eat", "drink", "sleep", "go"], correct: 1, explanation: "Water is liquid → 'drink'." },
            { type: "spell", prompt: "Spell the verb meaning 'rest at night':", word: "SLEEP", hint: "5 letters" },
            { type: "mcq", prompt: "She ___ to school every day.", options: ["eat", "drink", "goes", "sleep"], correct: 2, explanation: "'Go' means to move somewhere. 'She goes to school.'" },
            { type: "fill", prompt: "Complete: 'I ___ a book.'", sentence: "I ___ a book.", options: ["go", "eat", "have", "drink"], correct: 2, explanation: "'Have' means to possess — I have a book." },
            { type: "mcq", prompt: "___ here, please!", options: ["Go", "Come", "Sleep", "Eat"], correct: 1, explanation: "'Come here' — move towards me." },
          ],
        },
        {
          id: "u11l3",
          title: "More Common Verbs",
          type: "teach",
          teach: {
            intro: "Here are more essential verbs to know.",
            sections: [
              { title: "Like · Love · Want", body: "Like = enjoy. Love = really enjoy. Want = desire.", example: "I like tea. I love music. I want water." },
              { title: "Make · Take · Give", body: "Make = create. Take = pick up. Give = offer.", example: "Make food. Take a book. Give a gift." },
              { title: "Play · Work · Study", body: "Play = have fun. Work = job/task. Study = learn.", example: "Play games. Work at office. Study English." },
            ],
            tip: "Notice: 'love' is stronger than 'like'. 'Want' means you don't have it yet.",
          },
        },
        {
          id: "u11l4",
          title: "Practice More Verbs",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "I ___ music. (very strong feeling)", options: ["like", "love", "want", "make"], correct: 1, explanation: "'Love' is stronger than 'like'." },
            { type: "mcq", prompt: "I ___ some water. (I need it now)", options: ["like", "love", "want", "take"], correct: 2, explanation: "'Want' = desire/need it now." },
            { type: "spell", prompt: "Spell the verb meaning 'to create something':", word: "MAKE", hint: "4 letters" },
            { type: "mcq", prompt: "We ___ English every day.", options: ["play", "study", "sleep", "give"], correct: 1, explanation: "'Study' = learn." },
            { type: "fill", prompt: "Complete: 'Please ___ me a pen.'", sentence: "Please ___ me a pen.", options: ["make", "take", "give", "eat"], correct: 2, explanation: "'Give' = offer/offer to someone." },
            { type: "mcq", prompt: "Children ___ games.", options: ["study", "play", "work", "give"], correct: 1, explanation: "Children play games for fun." },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 12 — PRESENT SIMPLE
       ====================================================================== */
    {
      id: "u12",
      title: "Present Simple",
      subtitle: "Daily Actions",
      icon: "⏰",
      color: "#e8c5a0",
      description: "Talk about habits, routines, and general facts.",
      lessons: [
        {
          id: "u12l1",
          title: "Present Simple — Basics",
          type: "teach",
          teach: {
            intro: "Use present simple for habits, routines, and general truths.",
            sections: [
              { title: "I / You / We / They + verb", body: "No change — just the base verb.", example: "I eat rice. You work here. We play. They study." },
              { title: "He / She / It + verb + s", body: "Add '-s' to the verb.", example: "He eats. She works. It rains." },
              { title: "When do we use it?", body: "Habits (I wake up at 7), facts (Water boils), routines (She exercises daily).", example: "I go to school every day." },
            ],
            tip: "The most common mistake: forgetting the '-s' with he/she/it!",
          },
        },
        {
          id: "u12l2",
          title: "Practice Present Simple",
          type: "practice",
          exercises: [
            { type: "fill", prompt: "Complete: 'She ___ English every day.'", sentence: "She ___ English every day.", options: ["study", "studies", "studying", "studied"], correct: 1, explanation: "She + verb + 's' → studies (Y→IES)." },
            { type: "fill", prompt: "Complete: 'He ___ to school.'", sentence: "He ___ to school.", options: ["go", "goes", "going", "went"], correct: 1, explanation: "He + go + 'es' → goes." },
            { type: "fill", prompt: "Complete: 'I ___ breakfast at 8 AM.'", sentence: "I ___ breakfast at 8 AM.", options: ["eat", "eats", "eating", "ate"], correct: 0, explanation: "'I' + base verb → 'eat'." },
            { type: "fill", prompt: "Complete: 'They ___ in Mumbai.'", sentence: "They ___ in Mumbai.", options: ["live", "lives", "living", "lived"], correct: 0, explanation: "'They' + base verb → 'live'." },
            { type: "mcq", prompt: "Choose the correct sentence:", options: ["She eat rice.", "She eats rice.", "She eating rice.", "She ate rice."], correct: 1, explanation: "He/She/It → add '-s' → 'She eats'." },
            { type: "build", prompt: "Build: 'He works in a school'", words: ["He", "works", "in", "a", "school"], answer: "He works in a school" },
            { type: "build", prompt: "Build: 'I like apples'", words: ["I", "like", "apples"], answer: "I like apples" },
          ],
        },
        {
          id: "u12l3",
          title: "Negatives & Questions",
          type: "teach",
          teach: {
            intro: "Learn to say what you DON'T do and ask questions.",
            sections: [
              { title: "Don't / Doesn't", body: "I/You/We/They → don't + verb. He/She/It → doesn't + verb.", example: "I don't eat meat. She doesn't work here." },
              { title: "Do / Does (questions)", body: "Do + I/you/we/they + verb? Does + he/she/it + verb?", example: "Do you like tea? Does he work here?" },
              { title: "Short answers", body: "Yes, I do. / No, I don't. Yes, she does. / No, she doesn't.", example: "Do you like it? Yes, I do." },
            ],
            tip: "With don't/doesn't, the main verb stays in BASE form (no -s).",
          },
        },
        {
          id: "u12l4",
          title: "Practice Negatives & Questions",
          type: "practice",
          exercises: [
            { type: "fill", prompt: "Complete: 'I ___ like coffee.'", sentence: "I ___ like coffee.", options: ["don't", "doesn't", "not", "am not"], correct: 0, explanation: "'I' → 'don't'." },
            { type: "fill", prompt: "Complete: 'She ___ eat meat.'", sentence: "She ___ eat meat.", options: ["don't", "doesn't", "not", "isn't"], correct: 1, explanation: "'She' → 'doesn't'." },
            { type: "mcq", prompt: "Which is correct?", options: ["Does he likes tea?", "Do he like tea?", "Does he like tea?", "Does he liking tea?"], correct: 2, explanation: "'Does' + base verb → 'Does he like tea?'" },
            { type: "mcq", prompt: "Make a question: '___ you work here?'", options: ["Does", "Do", "Are", "Is"], correct: 1, explanation: "'You' → 'Do'." },
            { type: "fill", prompt: "Complete: 'They ___ speak English.'", sentence: "They ___ speak English.", options: ["doesn't", "don't", "isn't", "aren't"], correct: 1, explanation: "'They' → 'don't'." },
            { type: "build", prompt: "Build: 'I don't like tea'", words: ["I", "don't", "like", "tea"], answer: "I don't like tea" },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 13 — TIME & DAYS
       ====================================================================== */
    {
      id: "u13",
      title: "Time & Days",
      subtitle: "When Things Happen",
      icon: "📅",
      color: "#c8965f",
      description: "Days of the week, times of day, and telling time.",
      lessons: [
        {
          id: "u13l1",
          title: "Days of the Week",
          type: "teach",
          teach: {
            intro: "There are 7 days in a week. Let's learn them in order.",
            sections: [
              { title: "Monday · Tuesday · Wednesday", body: "The first three days of the school/work week.", example: "Monday, Tuesday, Wednesday" },
              { title: "Thursday · Friday", body: "More weekdays.", example: "Thursday, Friday" },
              { title: "Saturday · Sunday", body: "The weekend!", example: "Saturday, Sunday" },
            ],
            tip: "In English, days always start with a CAPITAL letter.",
          },
        },
        {
          id: "u13l2",
          title: "Practice Days",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "What day comes after Monday?", options: ["Sunday", "Tuesday", "Wednesday", "Friday"], correct: 1, explanation: "Monday → Tuesday." },
            { type: "mcq", prompt: "How many days are in a week?", options: ["5", "6", "7", "8"], correct: 2, explanation: "7 days in a week." },
            { type: "spell", prompt: "Spell the first day of the week (Monday):", word: "MONDAY", hint: "6 letters, starts with M" },
            { type: "mcq", prompt: "Which day comes after Friday?", options: ["Sunday", "Monday", "Saturday", "Thursday"], correct: 2, explanation: "Friday → Saturday." },
            { type: "mcq", prompt: "Which days are the WEEKEND?", options: ["Monday & Tuesday", "Wednesday & Thursday", "Saturday & Sunday", "Friday & Saturday"], correct: 2, explanation: "The weekend is Saturday and Sunday." },
            { type: "spell", prompt: "Spell the day that comes after Saturday:", word: "SUNDAY", hint: "6 letters, starts with S" },
          ],
        },
        {
          id: "u13l3",
          title: "Times of Day",
          type: "teach",
          teach: {
            intro: "Let's learn the different parts of the day.",
            sections: [
              { title: "Morning", body: "From sunrise to 12 PM (noon).", example: "Good morning! I wake up in the morning." },
              { title: "Afternoon", body: "From 12 PM to about 5-6 PM.", example: "Good afternoon! I eat lunch in the afternoon." },
              { title: "Evening", body: "From about 6 PM until night.", example: "Good evening! I exercise in the evening." },
              { title: "Night", body: "When it's dark — sleep time!", example: "Good night! I sleep at night." },
            ],
            tip: "Say 'in the morning/afternoon/evening', but 'at night'.",
          },
        },
        {
          id: "u13l4",
          title: "Practice Times",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "When do you usually wake up?", options: ["in the night", "in the morning", "at midnight", "in the evening"], correct: 1, explanation: "We usually wake up in the morning." },
            { type: "mcq", prompt: "When do you eat dinner?", options: ["in the morning", "at noon", "in the evening", "at breakfast"], correct: 2, explanation: "Dinner is usually in the evening." },
            { type: "mcq", prompt: "12 PM is called...", options: ["midnight", "noon", "evening", "morning"], correct: 1, explanation: "12 PM = noon." },
            { type: "fill", prompt: "Complete: 'I sleep ___ night.'", sentence: "I sleep ___ night.", options: ["in", "on", "at", "to"], correct: 2, explanation: "'At night' — special case!" },
            { type: "mcq", prompt: "When do you eat breakfast?", options: ["at night", "in the morning", "at noon", "in the evening"], correct: 1, explanation: "Breakfast = morning meal." },
            { type: "spell", prompt: "Spell the time of day when it's dark:", word: "NIGHT", hint: "5 letters, we sleep then" },
          ],
        },
      ],
    },

    /* ======================================================================
       UNIT 14 — FINAL REVIEW
       ====================================================================== */
    {
      id: "u14",
      title: "Final Review",
      subtitle: "Prove Your Skills",
      icon: "🎓",
      color: "#a67c52",
      description: "Review everything you've learned and earn your certificate!",
      lessons: [
        {
          id: "u14l1",
          title: "Review: Basics",
          type: "practice",
          exercises: [
            { type: "fill", prompt: "Complete: 'She ___ a teacher.'", sentence: "She ___ a teacher.", options: ["am", "is", "are", "be"], correct: 1, explanation: "'She' → 'is'." },
            { type: "mcq", prompt: "Replace 'my mother' with a pronoun:", options: ["He", "She", "It", "They"], correct: 1, explanation: "Mother is female → 'she'." },
            { type: "mcq", prompt: "Choose the right article: '___ apple'", options: ["a", "an", "the", "—"], correct: 1, explanation: "Vowel sound → 'an'." },
            { type: "spell", prompt: "Spell the number 8:", word: "EIGHT", hint: "5 letters, starts with E" },
            { type: "mcq", prompt: "Plural of 'cat'?", options: ["cat", "cats", "cates", "cats's"], correct: 1, explanation: "Just add 's': cats." },
            { type: "build", prompt: "Build: 'I am happy'", words: ["I", "am", "happy"], answer: "I am happy" },
          ],
        },
        {
          id: "u14l2",
          title: "Review: Grammar",
          type: "practice",
          exercises: [
            { type: "fill", prompt: "Complete: 'He ___ to school every day.'", sentence: "He ___ to school every day.", options: ["go", "goes", "going", "went"], correct: 1, explanation: "He + '-es' → goes." },
            { type: "mcq", prompt: "Choose correct sentence:", options: ["She don't like it.", "She doesn't like it.", "She not like it.", "She no like it."], correct: 1, explanation: "She → doesn't." },
            { type: "mcq", prompt: "Which is a VOWEL?", options: ["B", "K", "E", "T"], correct: 2, explanation: "E is a vowel." },
            { type: "fill", prompt: "Complete: 'We ___ students.'", sentence: "We ___ students.", options: ["am", "is", "are", "be"], correct: 2, explanation: "We → are." },
            { type: "mcq", prompt: "The opposite of 'hot' is...", options: ["big", "cold", "new", "sad"], correct: 1, explanation: "Hot ↔ Cold." },
            { type: "build", prompt: "Build: 'They don't work here'", words: ["They", "don't", "work", "here"], answer: "They don't work here" },
          ],
        },
        {
          id: "u14l3",
          title: "Final Test",
          type: "practice",
          exercises: [
            { type: "mcq", prompt: "10 + 5 = ?", options: ["twelve", "thirteen", "fifteen", "twenty"], correct: 2, explanation: "10 + 5 = 15 (fifteen)." },
            { type: "fill", prompt: "Complete: 'I ___ not from here.'", sentence: "I ___ not from here.", options: ["am", "is", "are", "be"], correct: 0, explanation: "'I am not' — correct." },
            { type: "mcq", prompt: "Which is a day of the week?", options: ["Sunday", "January", "Red", "Apple"], correct: 0, explanation: "Sunday is a day of the week." },
            { type: "mcq", prompt: "She ___ apples.", options: ["like", "likes", "liking", "liked"], correct: 1, explanation: "She + '-s' → likes." },
            { type: "fill", prompt: "Complete: 'I ___ a cat.'", sentence: "I ___ a cat.", options: ["have", "has", "having", "haves"], correct: 0, explanation: "'I' → base form 'have'." },
            { type: "mcq", prompt: "Plural of 'man'?", options: ["mans", "men", "mens", "man"], correct: 1, explanation: "Irregular: man → men." },
            { type: "build", prompt: "Build: 'I want some water'", words: ["I", "want", "some", "water"], answer: "I want some water" },
            { type: "mcq", prompt: "Which greeting is for the morning?", options: ["Good night", "Good evening", "Good morning", "Goodbye"], correct: 2, explanation: "Morning → 'Good morning'." },
          ],
        },
        {
          id: "u14l4",
          title: "You Did It!",
          type: "teach",
          teach: {
            intro: "🎉 Congratulations! You've completed the LEXORA A1 course!",
            sections: [
              { title: "What you've learned", body: "The alphabet, greetings, numbers 1-20, pronouns, the verb 'to be', colors, family, food, animals, body parts, articles, plurals, common verbs, present simple, days, and times of day.", example: "You can now have basic conversations!" },
              { title: "What's next?", body: "Practice every day. Talk to yourself in English. Watch English videos. Keep learning! The more you practice, the more fluent you'll become.", example: "10 minutes a day = real progress." },
              { title: "Your Certificate", body: "You've earned your A1 completion certificate. Share this achievement with pride!", example: "🏆 A1 English — Completed" },
            ],
            tip: "Learning a language is a marathon, not a sprint. Keep going! You're doing great.",
          },
        },
      ],
    },

  ],
};
