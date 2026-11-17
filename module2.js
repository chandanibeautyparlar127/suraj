const module2Data = {
  id: "mod2",
  title: "Module 2",
  desc: "Grammar Foundation & Spoken",
  icon: "🔥",
  cards: [
    {
      id: "m2c1",
      title: "1. Sentence & Types",
      subtitle: "Simple, Negative, WH Question",
      type: "teach",
      content: [
        {
          title: "Sentence Structure (SVO)",
          text: "English sentence me Subject + Verb + Object ka order hota hai. Har sentence ke 3 types hote hain:",
        }
      ],
      structure: [
        { type: "SIMPLE", formula: "Subject + Verb + Object", ex: "I play cricket.", hint: "सकारात्मक वाक्य" },
        { type: "NEGATIVE", formula: "Subject + do/does + not + Verb", ex: "I do not play cricket.", hint: "नकारात्मक वाक्य" },
        { type: "WH-QUESTION", formula: "WH word + do/does + Subject + Verb", ex: "Why do you play cricket?", hint: "प्रश्नवाचक वाक्य" }
      ],
      practice: [
        { type: "mcq", q: "Which is a Simple sentence?", options: ["I went home.", "I did not go home.", "Why did you go home?", "Do you go home?"], ans: 0 }
      ]
    },
    {
      id: "m2c2",
      title: "2. Past Simple Tense",
      subtitle: "पहले हो चुका काम",
      type: "teach",
      content: [
        {
          title: "Definition",
          text: "Past Simple Tense वह tense है जो बताता है कि कोई काम past में किसी खास समय पर हुआ और पूरा हो गया। जैसे: 'I ate rice yesterday' — कल मैंने चावल खाया (अब खत्म)।"
        },
        {
          title: "Banane Ka Niyam",
          formula: "Subject + V2 (Past form) + Object",
          text: "<strong>RULE EXPLAIN:</strong> V2 = Verb का second form (eat → ate, go → went, play → played) | Regular verbs में -ed (play → played) | Irregular बदल जाते हैं।"
        }
      ],
      structure: [
        { type: "SIMPLE", formula: "Subject + V2 + Object", ex: "I ate rice.", hint: "I + ate (V2)" },
        { type: "NEGATIVE", formula: "Subject + did not + V1 + Object", ex: "I did not eat rice.", hint: "did not + eat (V1)" },
        { type: "INTERROGATIVE", formula: "Did + Subject + V1 + Object?", ex: "Did you eat rice?", hint: "Did + you + eat" },
        { type: "WH-QUESTION", formula: "WH + did + Subject + V1 + ?", ex: "What did you eat?", hint: "What + did + you + eat" }
      ],
      examples: [
        { en: "I ate rice yesterday.", hi: "मैंने कल चावल खाया।" },
        { en: "She went to school.", hi: "वह स्कूल गई।" },
        { en: "They played football.", hi: "उन्होंने फुटबॉल खेला।" }
      ],
      practice: [
        { type: "mcq", q: "She ___ to school yesterday.", options: ["go", "goes", "went", "gone"], ans: 2 },
        { type: "arrange", q: "Arrange the words:", words: ["what", "did", "you", "eat", "?"], ans: "what did you eat ?" }
      ]
    },
    {
      id: "m2c4",
      title: "3. Spoken Tutorial",
      subtitle: "Daily use English sentences",
      type: "spoken",
      spokenList: [
        { category: "Introduction (Apna Parichay)", sentences: [
            { en: "My name is Suraj.", hi: "मेरा नाम सूरज है।" },
            { en: "I am from India.", hi: "मैं भारत से हूँ।" }
        ]},
        { category: "Talking to Someone (Baat Karna)", sentences: [
            { en: "How are you doing?", hi: "आप कैसे हैं?" },
            { en: "Can you help me please?", hi: "क्या आप मेरी मदद कर सकते हैं?" }
        ]},
        { category: "Giving a Speech (Bhashan Dena)", sentences: [
            { en: "Good morning everyone.", hi: "सभी को सुप्रभात।" },
            { en: "Thank you for listening.", hi: "सुनने के लिए धन्यवाद।" }
        ]}
      ]
    }
  ]
};
