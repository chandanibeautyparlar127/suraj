/* ==============================================
   MODULE 1 DATA (As per Notebook)
   ============================================== */
const module1Data = {
  id: "mod1",
  title: "Module 1",
  desc: "Verb Tobe, Modals, Semi Modals, V1-V2-V3",
  icon: "📗",
  cards: [
    {
      id: "m1c1",
      title: "1. Verb Tobe",
      subtitle: "is, am, are, was, were, has, have...",
      type: "interactive", // Notebook logic
      interactiveData: [
        { 
          word: "was", meaning: "था, थी", tense: "Past (He/She/It/I)", 
          simple: { en: "I was tired.", hi: "मैं थका हुआ था।" },
          negative: { en: "I was not tired.", hi: "मैं थका हुआ नहीं था।" },
          wh: { en: "Where was my pen?", hi: "मेरा पेन कहाँ था?" }
        },
        { 
          word: "is", meaning: "है", tense: "Present (He/She/It)", 
          simple: { en: "He is a doctor.", hi: "वह एक डॉक्टर है।" },
          negative: { en: "He is not a doctor.", hi: "वह डॉक्टर नहीं है।" },
          wh: { en: "Where is my pen?", hi: "मेरा पेन कहाँ है?" }
        },
        { 
          word: "am", meaning: "हूँ", tense: "Present (I)", 
          simple: { en: "I am a student.", hi: "मैं एक छात्र हूँ।" },
          negative: { en: "I am not a student.", hi: "मैं छात्र नहीं हूँ।" },
          wh: { en: "Who am I?", hi: "मैं कौन हूँ?" }
        },
        { 
          word: "are", meaning: "हैं/हो", tense: "Present (We/You/They)", 
          simple: { en: "They are players.", hi: "वे खिलाड़ी हैं।" },
          negative: { en: "They are not players.", hi: "वे खिलाड़ी नहीं हैं।" },
          wh: { en: "Where are they?", hi: "वे कहाँ हैं?" }
        },
        { 
          word: "were", meaning: "थे/थीं", tense: "Past (We/You/They)", 
          simple: { en: "They were happy.", hi: "वे खुश थे।" },
          negative: { en: "They were not happy.", hi: "वे खुश नहीं थे।" },
          wh: { en: "Why were they happy?", hi: "वे खुश क्यों थे?" }
        },
        { 
          word: "will be", meaning: "होगा/होगी", tense: "Future", 
          simple: { en: "He will be a doctor.", hi: "वह डॉक्टर होगा।" },
          negative: { en: "He will not be a doctor.", hi: "वह डॉक्टर नहीं होगा।" },
          wh: { en: "When will he be a doctor?", hi: "वह कब डॉक्टर होगा?" }
        },
        { 
          word: "has", meaning: "पास है", tense: "Present (He/She/It)", 
          simple: { en: "He has a car.", hi: "उसके पास कार है।" },
          negative: { en: "He has no car.", hi: "उसके पास कार नहीं है।" },
          wh: { en: "What does he have?", hi: "उसके पास क्या है?" }
        },
        { 
          word: "have", meaning: "पास है", tense: "Present (I/We/You/They)", 
          simple: { en: "I have a pen.", hi: "मेरे पास पेन है।" },
          negative: { en: "I do not have a pen.", hi: "मेरे पास पेन नहीं है।" },
          wh: { en: "What do you have?", hi: "तुम्हारे पास क्या है?" }
        },
        { 
          word: "had", meaning: "पास था", tense: "Past (All)", 
          simple: { en: "She had a book.", hi: "उसके पास किताब थी।" },
          negative: { en: "She did not have a book.", hi: "उसके पास किताब नहीं थी।" },
          wh: { en: "What did she have?", hi: "उसके पास क्या था?" }
        }
      ],
      practice: [
        { type: "mcq", q: "She ___ a doctor. (Present)", options: ["am", "is", "are", "was"], ans: 1 },
        { type: "mcq", q: "I ___ tired yesterday. (Past)", options: ["am", "is", "are", "was"], ans: 3 }
      ]
    },
    {
      id: "m1c2",
      title: "2. Modals Verb",
      subtitle: "Can, may, Should, Could, Must...",
      type: "teach",
      content: [
        {
          title: "What are Modals?",
          text: "Modals helping verbs hote hain jo kisi action ki ability, possibility, permission, ya necessity batate hain.",
          formula: "Can, May, Should, Could, Must, Will, Shall, Would, Might"
        }
      ],
      practice: [
        { type: "mcq", q: "___ you help me? (Request)", options: ["Can", "Must", "Should", "Ought to"], ans: 0 },
        { type: "mcq", q: "You ___ see a doctor. (Advice)", options: ["can", "should", "may", "might"], ans: 1 }
      ]
    },
    {
      id: "m1c3",
      title: "3. Semi Modals Verb",
      subtitle: "Need to, Dare to, Used to, Ought to",
      type: "teach",
      content: [
        {
          title: "Semi Modals",
          text: "Ye modals ki tarah behave karte hain lekin inke sath 'to' lagta hai aksar.",
          formula: "Need, Need to, Dare, Dare to, Used to, Ought to"
        }
      ],
      practice: [
        { type: "mcq", q: "I ___ play guitar when I was a child.", options: ["use to", "used to", "am used to", "needed to"], ans: 1 }
      ]
    },
    {
      id: "m1c4",
      title: "4. Verb Forms (A-Z)",
      subtitle: "V1, V2, V3 side by side",
      type: "verbs",
      verbList: [
        // --- A ---
        { v1: "abandon", v2: "abandoned", v3: "abandoned", hi: "छोड़ देना" },
        { v1: "abate", v2: "abated", v3: "abated", hi: "कम करना" },
        { v1: "accept", v2: "accepted", v3: "accepted", hi: "स्वीकार करना" },
        { v1: "achieve", v2: "achieved", v3: "achieved", hi: "हासिल करना" },
        { v1: "add", v2: "added", v3: "added", hi: "जोड़ना" },
        { v1: "admire", v2: "admired", v3: "admired", hi: "प्रशंसा करना" },
        { v1: "agree", v2: "agreed", v3: "agreed", hi: "सहमत होना" },
        { v1: "allow", v2: "allowed", v3: "allowed", hi: "अनुमति देना" },
        { v1: "answer", v2: "answered", v3: "answered", hi: "जवाब देना" },
        { v1: "appear", v2: "appeared", v3: "appeared", hi: "प्रकट होना" },
        { v1: "apply", v2: "applied", v3: "applied", hi: "आवेदन करना" },
        { v1: "argue", v2: "argued", v3: "argued", hi: "बहस करना" },
        { v1: "arrive", v2: "arrived", v3: "arrived", hi: "पहुँचना" },
        { v1: "ask", v2: "asked", v3: "asked", hi: "पूछना" },
        { v1: "avoid", v2: "avoided", v3: "avoided", hi: "बचना" },
        // --- B ---
        { v1: "bake", v2: "baked", v3: "baked", hi: "सेंकना" },
        { v1: "be", v2: "was/were", v3: "been", hi: "होना" },
        { v1: "bear", v2: "bore", v3: "borne", hi: "सहन करना" },
        { v1: "beat", v2: "beat", v3: "beaten", hi: "पीटना" },
        { v1: "become", v2: "became", v3: "become", hi: "बनना" },
        { v1: "begin", v2: "began", v3: "begun", hi: "शुरू करना" },
        { v1: "believe", v2: "believed", v3: "believed", hi: "विश्वास करना" },
        { v1: "bend", v2: "bent", v3: "bent", hi: "मोड़ना" },
        { v1: "bite", v2: "bit", v3: "bitten", hi: "काटना" },
        { v1: "blow", v2: "blew", v3: "blown", hi: "फूंक मारना" },
        { v1: "break", v2: "broke", v3: "broken", hi: "तोड़ना" },
        { v1: "bring", v2: "brought", v3: "brought", hi: "लाना" },
        { v1: "build", v2: "built", v3: "built", hi: "बनाना" },
        { v1: "burn", v2: "burnt", v3: "burnt", hi: "जलाना" },
        { v1: "buy", v2: "bought", v3: "bought", hi: "खरीदना" },
        // --- C ---
        { v1: "call", v2: "called", v3: "called", hi: "बुलाना" },
        { v1: "carry", v2: "carried", v3: "carried", hi: "ले जाना" },
        { v1: "catch", v2: "caught", v3: "caught", hi: "पकड़ना" },
        { v1: "change", v2: "changed", v3: "changed", hi: "बदलना" },
        { v1: "choose", v2: "chose", v3: "chosen", hi: "चुनना" },
        { v1: "come", v2: "came", v3: "come", hi: "आना" },
        { v1: "cut", v2: "cut", v3: "cut", hi: "काटना" },
        // --- D ---
        { v1: "dance", v2: "danced", v3: "danced", hi: "नाचना" },
        { v1: "decide", v2: "decided", v3: "decided", hi: "फैसला करना" },
        { v1: "do", v2: "did", v3: "done", hi: "करना" },
        { v1: "draw", v2: "drew", v3: "drawn", hi: "चित्र बनाना" },
        { v1: "drink", v2: "drank", v3: "drunk", hi: "पीना" },
        { v1: "drive", v2: "drove", v3: "driven", hi: "गाड़ी चलाना" },
        // --- E ---
        { v1: "eat", v2: "ate", v3: "eaten", hi: "खाना" },
        { v1: "enjoy", v2: "enjoyed", v3: "enjoyed", hi: "आनंद लेना" },
        { v1: "explain", v2: "explained", v3: "explained", hi: "समझाना" },
        // --- F ---
        { v1: "fall", v2: "fell", v3: "fallen", hi: "गिरना" },
        { v1: "feel", v2: "felt", v3: "felt", hi: "महसूस करना" },
        { v1: "fight", v2: "fought", v3: "fought", hi: "लड़ना" },
        { v1: "find", v2: "found", v3: "found", hi: "ढूंढना" },
        { v1: "fly", v2: "flew", v3: "flown", hi: "उड़ना" },
        { v1: "forget", v2: "forgot", v3: "forgotten", hi: "भूलना" },
        // --- G ---
        { v1: "get", v2: "got", v3: "got", hi: "प्राप्त करना" },
        { v1: "give", v2: "gave", v3: "given", hi: "देना" },
        { v1: "go", v2: "went", v3: "gone", hi: "जाना" },
        { v1: "grow", v2: "grew", v3: "grown", hi: "बढ़ना" },
        // --- H ---
        { v1: "have", v2: "had", v3: "had", hi: "पास होना" },
        { v1: "hear", v2: "heard", v3: "heard", hi: "सुनना" },
        { v1: "help", v2: "helped", v3: "helped", hi: "मदद करना" },
        { v1: "hide", v2: "hid", v3: "hidden", hi: "छिपाना" },
        { v1: "hit", v2: "hit", v3: "hit", hi: "मारना" },
        { v1: "hold", v2: "held", v3: "held", hi: "पकड़ना" },
        { v1: "hurt", v2: "hurt", v3: "hurt", hi: "चोट पहुँचाना" },
        // --- I ---
        { v1: "imagine", v2: "imagined", v3: "imagined", hi: "कल्पना करना" },
        { v1: "improve", v2: "improved", v3: "improved", hi: "सुधारना" },
        // --- J ---
        { v1: "jump", v2: "jumped", v3: "jumped", hi: "कूदना" },
        // --- K ---
        { v1: "keep", v2: "kept", v3: "kept", hi: "रखना" },
        { v1: "kill", v2: "killed", v3: "killed", hi: "मारना" },
        { v1: "know", v2: "knew", v3: "known", hi: "जानना" },
        // --- L ---
        { v1: "learn", v2: "learnt", v3: "learnt", hi: "सीखना" },
        { v1: "leave", v2: "left", v3: "left", hi: "छोड़ना" },
        { v1: "listen", v2: "listened", v3: "listened", hi: "सुनना" },
        { v1: "live", v2: "lived", v3: "lived", hi: "रहना" },
        { v1: "look", v2: "looked", v3: "looked", hi: "देखना" },
        { v1: "lose", v2: "lost", v3: "lost", hi: "खोना" },
        { v1: "love", v2: "loved", v3: "loved", hi: "प्यार करना" },
        // --- M ---
        { v1: "make", v2: "made", v3: "made", hi: "बनाना" },
        { v1: "meet", v2: "met", v3: "met", hi: "मिलना" },
        // --- N ---
        { v1: "need", v2: "needed", v3: "needed", hi: "जरूरत होना" },
        // --- O ---
        { v1: "open", v2: "opened", v3: "opened", hi: "खोलना" },
        // --- P ---
        { v1: "pay", v2: "paid", v3: "paid", hi: "भुगतान करना" },
        { v1: "play", v2: "played", v3: "played", hi: "खेलना" },
        { v1: "put", v2: "put", v3: "put", hi: "रखना" },
        // --- R ---
        { v1: "read", v2: "read", v3: "read", hi: "पढ़ना" },
        { v1: "run", v2: "ran", v3: "run", hi: "दौड़ना" },
        // --- S ---
        { v1: "say", v2: "said", v3: "said", hi: "कहना" },
        { v1: "see", v2: "saw", v3: "seen", hi: "देखना" },
        { v1: "sell", v2: "sold", v3: "sold", hi: "बेचना" },
        { v1: "send", v2: "sent", v3: "sent", hi: "भेजना" },
        { v1: "sing", v2: "sang", v3: "sung", hi: "गाना" },
        { v1: "sit", v2: "sat", v3: "sat", hi: "बैठना" },
        { v1: "sleep", v2: "slept", v3: "slept", hi: "सोना" },
        { v1: "speak", v2: "spoke", v3: "spoken", hi: "बोलना" },
        { v1: "study", v2: "studied", v3: "studied", hi: "पढ़ाई करना" },
        { v1: "swim", v2: "swam", v3: "swum", hi: "तैरना" },
        // --- T ---
        { v1: "take", v2: "took", v3: "taken", hi: "लेना" },
        { v1: "talk", v2: "talked", v3: "talked", hi: "बात करना" },
        { v1: "teach", v2: "taught", v3: "taught", hi: "पढ़ाना" },
        { v1: "tell", v2: "told", v3: "told", hi: "बताना" },
        { v1: "think", v2: "thought", v3: "thought", hi: "सोचना" },
        { v1: "throw", v2: "threw", v3: "thrown", hi: "फेंकना" },
        // --- U ---
        { v1: "understand", v2: "understood", v3: "understood", hi: "समझना" },
        { v1: "use", v2: "used", v3: "used", hi: "उपयोग करना" },
        // --- W ---
        { v1: "wait", v2: "waited", v3: "waited", hi: "इंतजार करना" },
        { v1: "walk", v2: "walked", v3: "walked", hi: "चलना" },
        { v1: "want", v2: "wanted", v3: "wanted", hi: "चाहना" },
        { v1: "wash", v2: "washed", v3: "washed", hi: "धोना" },
        { v1: "watch", v2: "watched", v3: "watched", hi: "देखना" },
        { v1: "win", v2: "won", v3: "won", hi: "जीतना" },
        { v1: "work", v2: "worked", v3: "worked", hi: "काम करना" },
        { v1: "write", v2: "wrote", v3: "written", hi: "लिखना" }
        // Aap chaho toh yahan khud aur verbs add kar sakte ho
      ]
    }
  ]
};
