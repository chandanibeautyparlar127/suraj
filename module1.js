var MODULE1_BEVERBS = {
  id: 'beverbs',
  title: 'Be Verbs',
  icon: '🔗',
  desc: 'is, am, are, was, were, shall be, will be, has, have',
  type: 'beverbs',
  verbs: [
    {
      word: 'is', hi: 'है', usage: 'He/She/It के साथ (Present)',
      examples: {
        simple: [
          { en: 'This is a pen.', hi: 'यह एक कलम है।', words: ['This', 'is', 'a', 'pen'] },
          { en: 'That is a cat.', hi: 'वह एक बिल्ली है।', words: ['That', 'is', 'a', 'cat'] },
          { en: 'He is a boy.', hi: 'वह एक लड़का है।', words: ['He', 'is', 'a', 'boy'] },
          { en: 'She is a girl.', hi: 'वह एक लड़की है।', words: ['She', 'is', 'a', 'girl'] },
          { en: 'It is a dog.', hi: 'यह एक कुत्ता है।', words: ['It', 'is', 'a', 'dog'] },
          { en: 'This is an apple.', hi: 'यह एक सेब है।', words: ['This', 'is', 'an', 'apple'] },
          { en: 'That is a bird.', hi: 'वह एक पक्षी है।', words: ['That', 'is', 'a', 'bird'] },
          { en: 'He is my brother.', hi: 'वह मेरा भाई है।', words: ['He', 'is', 'my', 'brother'] },
          { en: 'She is my mother.', hi: 'वह मेरी माँ है।', words: ['She', 'is', 'my', 'mother'] },
          { en: 'It is a book.', hi: 'यह एक किताब है।', words: ['It', 'is', 'a', 'book'] }
        ],
        negative: [
          { en: 'He is not a player.', hi: 'वह खिलाड़ी नहीं है।', words: ['He', 'is', 'not', 'a', 'player'] },
          { en: 'She is not a nurse.', hi: 'वह नर्स नहीं है।', words: ['She', 'is', 'not', 'a', 'nurse'] },
          { en: 'It is not a dog.', hi: 'यह कुत्ता नहीं है।', words: ['It', 'is', 'not', 'a', 'dog'] },
          { en: 'He is not sad.', hi: 'वह उदास नहीं है।', words: ['He', 'is', 'not', 'sad'] },
          { en: 'She is not angry.', hi: 'वह गुस्सा नहीं है।', words: ['She', 'is', 'not', 'angry'] }
        ],
        wh: [
          { en: 'What is your name?', hi: 'तुम्हारा नाम क्या है?', words: ['What', 'is', 'your', 'name'] },
          { en: 'Where is my pen?', hi: 'मेरी कलम कहाँ है?', words: ['Where', 'is', 'my', 'pen'] },
          { en: 'Who is that boy?', hi: 'वह लड़का कौन है?', words: ['Who', 'is', 'that', 'boy'] },
          { en: 'Why is he late?', hi: 'वह लेट क्यों है?', words: ['Why', 'is', 'he', 'late'] },
          { en: 'How is your health?', hi: 'तुम्हारी तबीयत कैसी है?', words: ['How', 'is', 'your', 'health'] }
        ]
      }
    },
    {
      word: 'am', hi: 'हूँ', usage: 'I के साथ (Present)',
      examples: {
        simple: [
          { en: 'I am a doctor.', hi: 'मैं डॉक्टर हूँ।', words: ['I', 'am', 'a', 'doctor'] },
          { en: 'I am a writer.', hi: 'मैं लेखक हूँ।', words: ['I', 'am', 'a', 'writer'] },
          { en: 'I am a singer.', hi: 'मैं गायक हूँ।', words: ['I', 'am', 'a', 'singer'] },
          { en: 'I am a player.', hi: 'मैं खिलाड़ी हूँ।', words: ['I', 'am', 'a', 'player'] },
          { en: 'I am sad.', hi: 'मैं उदास हूँ।', words: ['I', 'am', 'sad'] }
        ],
        negative: [
          { en: 'I am not a doctor.', hi: 'मैं डॉक्टर नहीं हूँ।', words: ['I', 'am', 'not', 'a', 'doctor'] },
          { en: 'I am not a writer.', hi: 'मैं लेखक नहीं हूँ।', words: ['I', 'am', 'not', 'a', 'writer'] },
          { en: 'I am not a singer.', hi: 'मैं गायक नहीं हूँ।', words: ['I', 'am', 'not', 'a', 'singer'] },
          { en: 'I am not a player.', hi: 'मैं खिलाड़ी नहीं हूँ।', words: ['I', 'am', 'not', 'a', 'player'] },
          { en: 'I am not sad.', hi: 'मैं उदास नहीं हूँ।', words: ['I', 'am', 'not', 'sad'] }
        ],
        wh: [
          { en: 'Who am I?', hi: 'मैं कौन हूँ?', words: ['Who', 'am', 'I'] },
          { en: 'Why am I happy?', hi: 'मैं क्यों खुश हूँ?', words: ['Why', 'am', 'I', 'happy'] },
          { en: 'Where am I from?', hi: 'मैं कहाँ से हूँ?', words: ['Where', 'am', 'I', 'from'] },
          { en: 'How old am I?', hi: 'मैं कितने साल का हूँ?', words: ['How', 'old', 'am', 'I'] },
          { en: 'Why am I hungry?', hi: 'मैं क्यों भूखा हूँ?', words: ['Why', 'am', 'I', 'hungry'] }
        ]
      }
    },
    {
      word: 'are', hi: 'हैं/हो', usage: 'We/You/They के साथ (Present)',
      examples: {
        simple: [
          { en: 'We are ready.', hi: 'हम तैयार हैं।', words: ['We', 'are', 'ready'] },
          { en: 'You are late.', hi: 'तुम लेट हो।', words: ['You', 'are', 'late'] },
          { en: 'They are sad.', hi: 'वे उदास हैं।', words: ['They', 'are', 'sad'] },
          { en: 'We are busy.', hi: 'हम व्यस्त हैं।', words: ['We', 'are', 'busy'] },
          { en: 'You are tired.', hi: 'तुम थके हुए हो।', words: ['You', 'are', 'tired'] }
        ],
        negative: [
          { en: 'We are not ready.', hi: 'हम तैयार नहीं हैं।', words: ['We', 'are', 'not', 'ready'] },
          { en: 'You are not late.', hi: 'तुम लेट नहीं हो।', words: ['You', 'are', 'not', 'late'] },
          { en: 'They are not sad.', hi: 'वे उदास नहीं हैं।', words: ['They', 'are', 'not', 'sad'] },
          { en: 'We are not busy.', hi: 'हम व्यस्त नहीं हैं।', words: ['We', 'are', 'not', 'busy'] },
          { en: 'You are not tired.', hi: 'तुम थके हुए नहीं हो।', words: ['You', 'are', 'not', 'tired'] }
        ],
        wh: [
          { en: 'Where are they?', hi: 'वे कहाँ हैं?', words: ['Where', 'are', 'they'] },
          { en: 'Why are you sad?', hi: 'तुम क्यों उदास हो?', words: ['Why', 'are', 'you', 'sad'] },
          { en: 'How are they?', hi: 'वे कैसे हैं?', words: ['How', 'are', 'they'] },
          { en: 'What are you doing?', hi: 'तुम क्या कर रहे हो?', words: ['What', 'are', 'you', 'doing'] },
          { en: 'Where are you from?', hi: 'तुम कहाँ से हो?', words: ['Where', 'are', 'you', 'from'] }
        ]
      }
    },
    {
      word: 'was', hi: 'था/थी', usage: 'He/She/It/I के साथ (Past)',
      examples: {
        simple: [
          { en: 'He was a teacher.', hi: 'वह शिक्षक था।', words: ['He', 'was', 'a', 'teacher'] },
          { en: 'She was happy.', hi: 'वह खुश थी।', words: ['She', 'was', 'happy'] },
          { en: 'It was cold.', hi: 'यह ठंडा था।', words: ['It', 'was', 'cold'] },
          { en: 'I was busy.', hi: 'मैं व्यस्त था।', words: ['I', 'was', 'busy'] },
          { en: 'The book was new.', hi: 'किताब नई थी।', words: ['The', 'book', 'was', 'new'] }
        ],
        negative: [
          { en: 'He was not a teacher.', hi: 'वह शिक्षक नहीं था।', words: ['He', 'was', 'not', 'a', 'teacher'] },
          { en: 'She was not happy.', hi: 'वह खुश नहीं थी।', words: ['She', 'was', 'not', 'happy'] },
          { en: 'It was not cold.', hi: 'यह ठंडा नहीं था।', words: ['It', 'was', 'not', 'cold'] },
          { en: 'I was not busy.', hi: 'मैं व्यस्त नहीं था।', words: ['I', 'was', 'not', 'busy'] },
          { en: 'The book was not new.', hi: 'किताब नई नहीं थी।', words: ['The', 'book', 'was', 'not', 'new'] }
        ],
        wh: [
          { en: 'Where was he?', hi: 'वह कहाँ था?', words: ['Where', 'was', 'he'] },
          { en: 'Why was she sad?', hi: 'वह उदास क्यों थी?', words: ['Why', 'was', 'she', 'sad'] },
          { en: 'What was that?', hi: 'वह क्या था?', words: ['What', 'was', 'that'] },
          { en: 'Who was your teacher?', hi: 'तुम्हारे शिक्षक कौन थे?', words: ['Who', 'was', 'your', 'teacher'] },
          { en: 'When was the match?', hi: 'मैच कब था?', words: ['When', 'was', 'the', 'match'] }
        ]
      }
    },
    {
      word: 'were', hi: 'थे/थीं', usage: 'We/You/They के साथ (Past)',
      examples: {
        simple: [
          { en: 'They were happy.', hi: 'वे खुश थे।', words: ['They', 'were', 'happy'] },
          { en: 'We were late.', hi: 'हम लेट थे।', words: ['We', 'were', 'late'] },
          { en: 'You were right.', hi: 'तुम सही थे।', words: ['You', 'were', 'right'] },
          { en: 'The boys were tired.', hi: 'लड़के थके हुए थे।', words: ['The', 'boys', 'were', 'tired'] },
          { en: 'The girls were ready.', hi: 'लड़कियां तैयार थीं।', words: ['The', 'girls', 'were', 'ready'] }
        ],
        negative: [
          { en: 'They were not happy.', hi: 'वे खुश नहीं थे।', words: ['They', 'were', 'not', 'happy'] },
          { en: 'We were not late.', hi: 'हम लेट नहीं थे।', words: ['We', 'were', 'not', 'late'] },
          { en: 'You were not right.', hi: 'तुम सही नहीं थे।', words: ['You', 'were', 'not', 'right'] },
          { en: 'The boys were not tired.', hi: 'लड़के थके हुए नहीं थे।', words: ['The', 'boys', 'were', 'not', 'tired'] },
          { en: 'The girls were not ready.', hi: 'लड़कियां तैयार नहीं थीं।', words: ['The', 'girls', 'were', 'not', 'ready'] }
        ],
        wh: [
          { en: 'Where were you?', hi: 'तुम कहाँ थे?', words: ['Where', 'were', 'you'] },
          { en: 'Why were they sad?', hi: 'वे उदास क्यों थे?', words: ['Why', 'were', 'they', 'sad'] },
          { en: 'How were the exams?', hi: 'परीक्षा कैसी थी?', words: ['How', 'were', 'the', 'exams'] },
          { en: 'Who were those people?', hi: 'वे लोग कौन थे?', words: ['Who', 'were', 'those', 'people'] },
          { en: 'When were you born?', hi: 'तुम कब पैदा हुए थे?', words: ['When', 'were', 'you', 'born'] }
        ]
      }
    }
  ]
};

// Modals ka data (Aap isme apne hisaab se aur add kar sakte hain)
var MODULE1_MODALS = {
  id: 'modals',
  title: 'Modals Verbs',
  icon: '⚡',
  desc: 'can, may, should, could, must...',
  type: 'teach',
  content: [
    {
      title: "What are Modals?",
      text: "Modals helping verbs hote hain jo kisi action ki ability, possibility, permission, ya necessity batate hain.",
      formula: "Can, May, Should, Could, Must, Will, Shall, Would, Might"
    }
  ]
};
