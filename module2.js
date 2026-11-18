// ═══════════════════════════════════════════════════════════
// module2.js — HTML-compatible shape
// Keys expected by index.html: sentences, clauses, tenseGroups, spokenPhrases
// Data source: tumhari nayi detailed file (Sentence, Clause, Tense)
// ═══════════════════════════════════════════════════════════

window.MODULE2 = {

  /* ============================================================
     SENTENCES  →  M2.sentences[]
     HTML uses: title, hi, use, s:{simple,neg,wh}, rules
     ============================================================ */
  sentences: [
    {
      id: 'assertive',
      title: 'Assertive Sentence',
      hi: 'Statement — साधारण वाक्य',
      use: 'जब आप किसी को जानकारी देना चाहते हो, तथ्य बताना चाहते हो, अपनी राय देना चाहते हो, या किसी चीज़ का वर्णन करना चाहते हो — तब Assertive sentence use होता है।',
      s: {
        simple: 'I am a student.',
        neg: 'I am not a teacher.',
        wh: 'What is your name?'
      },
      rules: 'Rule: Subject + Verb + Object + Full Stop (.)\n\nSimple: Subject + Verb + Object + .\nNegative: Subject + do/does + not + V1 + Object + .\nInterrogative: WH + Helping Verb + Subject + V1 + ?\n\nDefinition: वह sentence जो किसी बात को बताता है या statement देता है। इसे Declarative Sentence भी कहते हैं।'
    },
    {
      id: 'interrogative',
      title: 'Interrogative Sentence',
      hi: 'Question — सवाल पूछने वाला वाक्य',
      use: 'जब आप किसी से कुछ पूछना चाहते हो, जानकारी चाहते हो, confirm करना चाहते हो, या किसी की राय जानना चाहते हो — तब Interrogative sentence use होता है।',
      s: {
        simple: 'What is your name?',
        neg: 'Are you not happy?',
        wh: 'Why are you late?'
      },
      rules: 'Rule: Helping Verb + Subject + Main Verb + Object + ? (Question Mark)\n\nYes/No: Helping Verb + Subject + Main Verb + Object + ?\nWH-Question: WH + Helping Verb + Subject + Main Verb + ?\nNegative Question: Helping Verb + not + Subject + Main Verb + ?\n\nDefinition: वह sentence जो कुछ पूछता है या जानकारी माँगता है। 2 तरीके: Yes/No questions और WH-questions।'
    },
    {
      id: 'imperative',
      title: 'Imperative Sentence',
      hi: 'Command / Request / Advice',
      use: 'जब आप किसी को आदेश देना चाहते हो (Close the door), निवेदन करना चाहते हो (Please help me), सलाह देना चाहते हो (Always speak truth), या मना करना चाहते हो (Do not smoke) — तब Imperative use होता है।',
      s: {
        simple: 'Close the door.',
        neg: 'Do not smoke here.',
        wh: 'Please tell me what to do.'
      },
      rules: 'Rule: Verb (base form) + Object + . — Subject (You) hidden रहता है\n\nCommand: Verb + Object + .\nRequest: Please + Verb + Object + .\nAdvice: Always / Never + Verb + Object + .\nProhibition: Do not + Verb + Object + .\n\nDefinition: वह sentence जो आदेश, निवेदन, सलाह, या मना करता है। Subject हमेशा "You" होता है, भले ही दिखे नहीं।'
    },
    {
      id: 'exclamatory',
      title: 'Exclamatory Sentence',
      hi: 'Strong Feeling — अचानक भावना',
      use: 'जब आप अचानक खुश हों (Wow!), दुखी हों (Alas!), आश्चर्य में हों (What a surprise!), या गुस्से में हों — तब Exclamatory sentence use होता है। भावनाओं को तीव्रता से व्यक्त करने के लिए।',
      s: {
        simple: 'What a beautiful day!',
        neg: 'What a pity! He did not come.',
        wh: 'How beautiful the sunset is!'
      },
      rules: 'Rule: What / How / Alas / Wow + ... + ! (Exclamation Mark)\n\nWhat + Noun: What + a/an + Adjective + Noun + !\nHow + Adjective: How + Adjective + Subject + Verb + !\nAlas: Alas! + Subject + Verb + ... + !\nWow: Wow! + Subject + Verb + ... + !\n\nDefinition: वह sentence जो अचानक हुई तीव्र भावना (खुशी, दुख, आश्चर्य, क्रोध) को प्रकट करता है।'
    }
  ],

  /* ============================================================
     CLAUSES  →  M2.clauses[]
     HTML uses: title, hi, use, s:{simple,neg,wh}, rules
     Tumhare naye data me clause ke 2 hi the (Independent, Dependent).
     HTML me pehle 5 the. Toh main Dependent ke andar ke 3 (Noun, Adjective, Adverbial)
     bhi alag entries bana raha hoon — taaki HTML ke 5 cards bane rahein.
     ============================================================ */
  clauses: [
    {
      id: 'independent',
      title: 'Independent Clause',
      hi: 'वह clause जो अपने आप में पूरा sentence बन सके',
      use: 'Independent clause अकेले sentence बन सकता है — इसलिए इसे Simple Sentence भी कहा जाता है। Compound और Complex sentences में भी independent clause होता है।',
      s: {
        simple: 'I love India.',
        neg: 'I do not love junk food.',
        wh: 'I know what you want.'
      },
      rules: 'Rule: Subject + Verb + Object — complete meaning के साथ\n\nSimple: Subject + Verb + Object\nWith Adjective: Subject + Verb + Adjective\nWith Adverb: Subject + Verb + Adverb\nComplete Complex: Independent + Conjunction + Dependent\n\nDefinition: वह clause जो अपने आप में पूर्ण वाक्य बन सके — इसका अपना subject और verb हो, और अर्थ पूरा हो। इसे Main Clause भी कहते हैं।'
    },
    {
      id: 'dependent',
      title: 'Dependent Clause',
      hi: 'वह clause जो अकेले पूरा sentence नहीं बन सकता',
      use: 'जब आप दो ideas को जोड़ना चाहते हो, किसी कारण (because), समय (when), शर्त (if), या विरोध (although) को व्यक्त करना चाहते हो — तब dependent clause use होता है।',
      s: {
        simple: 'Because I was tired...',
        neg: 'Because I was not ready...',
        wh: 'What I said was true.'
      },
      rules: 'Rule: Subordinating Conjunction (because, if, when, although...) + Subject + Verb\n\nCause: Because + Subject + Verb\nTime: When + Subject + Verb\nCondition: If + Subject + Verb\nContrast: Although + Subject + Verb\n\nDefinition: वह clause जो अकेले पूरा अर्थ नहीं देता — इसके लिए एक independent clause की ज़रूरत होती है। इसे Subordinate Clause भी कहते हैं।'
    },
    {
      id: 'noun-clause',
      title: 'Noun Clause',
      hi: 'संज्ञा उपवाक्य (Dependent का प्रकार)',
      use: 'जब dependent clause वाक्य में संज्ञा का काम करता है — subject या object की तरह। जैसे: "What he said is true" में "What he said" noun clause है।',
      s: {
        simple: 'What he said is true.',
        neg: 'What he said is not false.',
        wh: 'What did he say?'
      },
      rules: 'Rule: Acts as a noun (subject/object)\n\nStarts with: that, what, whether, if, who, etc.\nExample: I know what he wants.\nExample: What he said is true.\n\nDefinition: Dependent clause जो वाक्य में noun की तरह काम करता है।'
    },
    {
      id: 'adjective-clause',
      title: 'Adjective Clause',
      hi: 'विशेषण उपवाक्य (Dependent का प्रकार)',
      use: 'जब dependent clause किसी संज्ञा की विशेषता बताता है। जैसे: "The man who came is my uncle" में "who came" adjective clause है।',
      s: {
        simple: 'The man who came is my uncle.',
        neg: 'The man who came is not my uncle.',
        wh: 'Who is the man who came?'
      },
      rules: 'Rule: Acts as an adjective\n\nStarts with: who, which, that, whose, whom\nModifies a noun in the main clause.\nExample: The book that I bought is new.\n\nDefinition: Dependent clause जो किसी noun की विशेषता बताता है।'
    },
    {
      id: 'adverbial-clause',
      title: 'Adverbial Clause',
      hi: 'क्रिया-विशेषण उपवाक्य (Dependent का प्रकार)',
      use: 'जब dependent clause समय, स्थान, कारण, या शर्त बताता है। जैसे: "I will call you when I arrive" में "when I arrive" adverbial clause है।',
      s: {
        simple: 'I will call you when I arrive.',
        neg: 'I will not call you when I arrive.',
        wh: 'When will you call me?'
      },
      rules: 'Rule: Acts as an adverb\n\nStarts with: when, where, because, if, although, etc.\nModifies the main verb.\nExample: She left because she was tired.\n\nDefinition: Dependent clause जो समय, स्थान, कारण, या शर्त बताता है।'
    }
  ],

  /* ============================================================
     TENSE GROUPS  →  M2.tenseGroups{}
     HTML uses: tenseGroups[group].title, tenseGroups[group].types[]
     Har type me: title, hi, use, s:{simple,neg,wh}, rules
     ============================================================ */
  tenseGroups: {
    present: {
      title: 'Present Tense',
      types: [
        {
          id: 'p-simple',
          title: 'Present Simple / Indefinite',
          hi: 'आदत, सच या नियमित काम',
          use: 'Daily routine, habits, universal truths, fixed schedules, feelings — जब काम रोज़ होता है, आदत है, या सच्चाई हो। Time words: every day, always, usually, often, never, sometimes.',
          s: {
            simple: 'I eat rice every day.',
            neg: 'I do not eat meat.',
            wh: 'What do you eat?'
          },
          rules: 'Rule: Subject + V1 (या V5) + Object\n\nSimple: Subject + V1/V5 + Object\nNegative: Subject + do/does + not + V1 + Object\nInterrogative: Do/Does + Subject + V1 + Object?\nWH-Question: WH + do/does + Subject + V1 + ?\n\nV1 = base form (eat) | V5 = +s/es (eats) — He/She/It के साथ.\nDefinition: कोई काम हमेशा/रोज़ होता है, या सच्चाई है।'
        },
        {
          id: 'p-continuous',
          title: 'Present Continuous',
          hi: 'अभी हो रहा है',
          use: 'जो काम अभी चल रहा है (I am reading), temporary (She is staying with us), future plan (I am meeting him tomorrow), बदलती situation (The weather is getting cold) — इनमें Present Continuous use होता है। Time words: now, at this moment, currently, look!, listen!.',
          s: {
            simple: 'I am eating rice now.',
            neg: 'I am not eating rice.',
            wh: 'What are you eating?'
          },
          rules: 'Rule: Subject + is/am/are + V-ing + Object\n\nSimple: Subject + is/am/are + V-ing + Object\nNegative: Subject + is/am/are + not + V-ing + Object\nInterrogative: Is/Am/Are + Subject + V-ing + Object?\nWH-Question: WH + is/am/are + Subject + V-ing + ?\n\nis/am/are = Helping Verb (I → am, He/She/It → is, We/You/They → are)\nDefinition: कोई काम अभी, इसी वक्त हो रहा है।'
        },
        {
          id: 'p-perfect',
          title: 'Present Perfect',
          hi: 'काम पूरा हो चुका है (अभी-अभी)',
          use: 'जो काम अभी-अभी पूरा हुआ (I have just finished), जीवन के अनुभव (I have visited London), जो अभी तक नहीं हुआ (I have not seen him yet), जो past में शुरू होकर अभी तक चल रहा है (I have lived here for 5 years) — इनमें Present Perfect use होता है।',
          s: {
            simple: 'I have eaten my lunch.',
            neg: 'I have not eaten my lunch.',
            wh: 'What have you eaten?'
          },
          rules: 'Rule: Subject + has/have + V3 + Object\n\nSimple: Subject + has/have + V3 + Object\nNegative: Subject + has/have + not + V3 + Object\nInterrogative: Has/Have + Subject + V3 + Object?\nWH-Question: WH + has/have + Subject + V3 + ?\n\nhas/have = Helping Verb (I/We/You/They → have, He/She/It → has)\nV3 = third form (eat → eaten, go → gone)\nDefinition: काम अभी-अभी पूरा हुआ, या उसका असर अभी भी है।'
        },
        {
          id: 'p-perfect-continuous',
          title: 'Present Perfect Continuous',
          hi: 'काम पहले से चल रहा है और अभी भी चल रहा है',
          use: 'जो काम past में शुरू होकर अभी भी जारी है (I have been waiting for you), जिसकी अवधि बतानी हो (She has been working since morning) — इनमें Present Perfect Continuous use होता है। Time words: since, for, how long.',
          s: {
            simple: 'I have been studying for 2 hours.',
            neg: 'I have not been studying.',
            wh: 'How long have you been studying?'
          },
          rules: 'Rule: Subject + has/have been + V-ing + since/for + time\n\nSimple: Subject + has/have been + V-ing + since/for\nNegative: Subject + has/have not been + V-ing\nInterrogative: Has/Have + Subject + been + V-ing?\nWH-Question: WH + has/have + Subject + been + V-ing?\n\nsince = point of time (since morning) | for = period (for 2 hours)\nDefinition: काम past में शुरू हुआ, और अभी भी चल रहा है।'
        }
      ]
    },

    past: {
      title: 'Past Tense',
      types: [
        {
          id: 'pa-simple',
          title: 'Past Simple / Indefinite',
          hi: 'पहले हो चुका काम',
          use: 'जो काम past में किसी खास समय पर हुआ और पूरा हो गया (I visited Delhi last year), past की आदत (She always came late) — इनमें Past Simple use होता है। Time words: yesterday, last week, last night, in 2010, ago.',
          s: {
            simple: 'I ate rice yesterday.',
            neg: 'I did not eat rice.',
            wh: 'What did you eat?'
          },
          rules: 'Rule: Subject + V2 + Object\n\nSimple: Subject + V2 + Object\nNegative: Subject + did not + V1 + Object\nInterrogative: Did + Subject + V1 + Object?\nWH-Question: WH + did + Subject + V1 + ?\n\nV2 = second form (eat → ate, go → went, play → played)\nDefinition: काम past में किसी खास समय पर हुआ और पूरा हो गया।'
        },
        {
          id: 'pa-continuous',
          title: 'Past Continuous',
          hi: 'पहले चल रहा था',
          use: 'जो काम past में किसी खास समय चल रहा था (I was reading at 9 pm), जब दो काम एक साथ past में चल रहे थे (I was studying while she was cooking) — इनमें Past Continuous use होता है। Time words: at 5 pm yesterday, while, when, all day.',
          s: {
            simple: 'I was eating rice at 8 pm.',
            neg: 'I was not eating rice.',
            wh: 'What were you eating?'
          },
          rules: 'Rule: Subject + was/were + V-ing + Object\n\nSimple: Subject + was/were + V-ing + Object\nNegative: Subject + was/were + not + V-ing + Object\nInterrogative: Was/Were + Subject + V-ing + Object?\nWH-Question: WH + was/were + Subject + V-ing + ?\n\nwas/were = Helping Verb (I/He/She/It → was, We/You/They → were)\nDefinition: काम past में किसी खास समय चल रहा था (जारी था)।'
        },
        {
          id: 'pa-perfect',
          title: 'Past Perfect',
          hi: 'पहले ही पूरा हो चुका था',
          use: 'जब दो काम past में हुए — एक पहले, एक बाद में (She had left before I arrived) — इसमें Past Perfect use होता है। Time words: before, after, already, when, by the time.',
          s: {
            simple: 'I had eaten before he came.',
            neg: 'I had not eaten before he came.',
            wh: 'What had you eaten?'
          },
          rules: 'Rule: Subject + had + V3 + Object\n\nSimple: Subject + had + V3 + Object\nNegative: Subject + had + not + V3 + Object\nInterrogative: Had + Subject + V3 + Object?\nWH-Question: WH + had + Subject + V3 + ?\n\nhad = Helping Verb (सभी subjects के साथ)\nDefinition: past में कोई काम किसी दूसरे past काम से पहले पूरा हो चुका था।'
        },
        {
          id: 'pa-perfect-continuous',
          title: 'Past Perfect Continuous',
          hi: 'पहले से चल रहा था और past में भी जारी था',
          use: 'जब काम past में एक अवधि से चल रहा था और किसी दूसरे past काम से पहले जारी था (She had been waiting for 1 hour when I arrived) — इसमें Past Perfect Continuous use होता है। Time words: for, since, all day, before.',
          s: {
            simple: 'I had been studying for 2 hours.',
            neg: 'I had not been studying.',
            wh: 'How long had you been studying?'
          },
          rules: 'Rule: Subject + had been + V-ing + since/for + time\n\nSimple: Subject + had been + V-ing + since/for\nNegative: Subject + had not been + V-ing\nInterrogative: Had + Subject + been + V-ing?\nWH-Question: WH + had + Subject + been + V-ing?\n\nhad been = Helping Verb (सभी subjects के साथ)\nDefinition: काम past में पहले शुरू हुआ और किसी खास past समय तक चल रहा था।'
        }
      ]
    },

    future: {
      title: 'Future Tense',
      types: [
        {
          id: 'f-simple',
          title: 'Future Simple / Indefinite',
          hi: 'आगे होने वाला काम',
          use: 'जो काम future में होने वाला है (I will go tomorrow), promise (I will help you), prediction (It will rain) — इनमें Future Simple use होता है। Time words: tomorrow, next week, soon, in future, later.',
          s: {
            simple: 'I will eat rice tomorrow.',
            neg: 'I will not eat rice.',
            wh: 'What will you eat?'
          },
          rules: 'Rule: Subject + will + V1 + Object\n\nSimple: Subject + will + V1 + Object\nNegative: Subject + will + not + V1 + Object\nInterrogative: Will + Subject + V1 + Object?\nWH-Question: WH + will + Subject + V1 + ?\n\nwill = Helping Verb (सभी subjects के साथ)\nDefinition: कोई काम future में होगा।'
        },
        {
          id: 'f-continuous',
          title: 'Future Continuous',
          hi: 'भविष्य में चल रहा होगा',
          use: 'जो काम future में किसी खास समय चल रहा होगा (I will be studying at 9 pm), future की plan (I will be meeting him tomorrow) — इनमें Future Continuous use होता है। Time words: at 5 pm tomorrow, this time tomorrow.',
          s: {
            simple: 'I will be eating rice at 8 pm.',
            neg: 'I will not be eating rice.',
            wh: 'What will you be eating?'
          },
          rules: 'Rule: Subject + will be + V-ing + Object\n\nSimple: Subject + will be + V-ing + Object\nNegative: Subject + will not be + V-ing + Object\nInterrogative: Will + Subject + be + V-ing + Object?\nWH-Question: WH + will + Subject + be + V-ing + ?\n\nwill be = Helping Verb\nDefinition: काम future में किसी खास समय चल रहा होगा (जारी होगा)।'
        },
        {
          id: 'f-perfect',
          title: 'Future Perfect',
          hi: 'भविष्य में किसी समय तक पूरा हो चुका होगा',
          use: 'जो काम future में किसी खास समय तक पूरा हो चुका होगा (She will have finished by 5 pm) — इसमें Future Perfect use होता है। Time words: by tomorrow, by 5 pm, by next week.',
          s: {
            simple: 'I will have eaten by 8 pm.',
            neg: 'I will not have eaten by 8 pm.',
            wh: 'What will you have eaten?'
          },
          rules: 'Rule: Subject + will have + V3 + Object\n\nSimple: Subject + will have + V3 + Object\nNegative: Subject + will not have + V3 + Object\nInterrogative: Will + Subject + have + V3 + Object?\nWH-Question: WH + will + Subject + have + V3 + ?\n\nwill have = Helping Verb\nDefinition: काम future में किसी खास समय तक पूरा हो चुका होगा।'
        },
        {
          id: 'f-perfect-continuous',
          title: 'Future Perfect Continuous',
          hi: 'भविष्य में किसी समय तक चलता रहा होगा',
          use: 'जो काम future में किसी खास समय तक लगातार चलता रहेगा (She will have been studying for 2 hours by 8 pm) — इसमें Future Perfect Continuous use होता है। Time words: for, since, by next month.',
          s: {
            simple: 'By 8 pm, I will have been studying for 2 hours.',
            neg: 'I will not have been studying.',
            wh: 'How long will you have been studying?'
          },
          rules: 'Rule: Subject + will have been + V-ing + since/for + time\n\nSimple: Subject + will have been + V-ing + since/for\nNegative: Subject + will not have been + V-ing\nInterrogative: Will + Subject + have been + V-ing?\nWH-Question: WH + will + Subject + have been + V-ing?\n\nwill have been = Helping Verb\nDefinition: काम future में किसी खास समय तक लगातार चलता रहेगा।'
        }
      ]
    }
  },

  /* ============================================================
     SPOKEN PHRASES  →  M2.spokenPhrases[]
     HTML uses: en, hi
     (Tumhare naye data me spoken nahi tha — HTML ke chat ke liye ye rakh raha hoon)
     ============================================================ */
  spokenPhrases: [
    { en: 'Good morning', hi: 'सुप्रभात (सुबह की शुभकामना)' },
    { en: 'Hello, how are you?', hi: 'नमस्ते, आप कैसे हैं?' },
    { en: 'I am fine, thank you.', hi: 'मैं ठीक हूँ, धन्यवाद।' },
    { en: 'What is your name?', hi: 'आपका नाम क्या है?' },
    { en: 'My name is Rohan.', hi: 'मेरा नाम रोहन है।' },
    { en: 'Nice to meet you.', hi: 'आपसे मिलकर अच्छा लगा।' },
    { en: 'Where are you from?', hi: 'आप कहाँ से हैं?' },
    { en: 'I am from India.', hi: 'मैं भारत से हूँ।' },
    { en: 'How old are you?', hi: 'आपकी उम्र क्या है?' },
    { en: 'I am 20 years old.', hi: 'मैं 20 साल का हूँ।' },
    { en: 'Thank you very much.', hi: 'बहुत धन्यवाद।' },
    { en: 'You are welcome.', hi: 'आपका स्वागत है।' },
    { en: 'Please help me.', hi: 'कृपया मेरी मदद करें।' },
    { en: 'I am sorry.', hi: 'मुझे खेद है।' },
    { en: 'Excuse me.', hi: 'क्षमा करें।' },
    { en: 'See you later.', hi: 'बाद में मिलते हैं।' },
    { en: 'Have a nice day.', hi: 'आपका दिन अच्छा हो।' },
    { en: 'Good night.', hi: 'शुभ रात्रि।' },
    { en: 'How much does it cost?', hi: 'इसकी कीमत क्या है?' },
    { en: 'Can you speak English?', hi: 'क्या आप अंग्रेज़ी बोल सकते हैं?' }
  ]
};
