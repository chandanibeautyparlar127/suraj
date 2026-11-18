/* ============================================================================
   MODULE 1 — VERB
   3 cards: Verb to Be, Modals, Semi Modals
   3 verbs fully filled (is, can, used to) as template
   Remaining verbs = skeleton (meaning + usage + 2 examples)
   ============================================================================ */

const MODULE1 = {
  id: 'mod1',
  title: 'Verb',
  desc: 'Master verbs: Be verbs, Modals, Semi Modals',
  icon: '📗',
  cards: [

    /* ==================== CARD 1: VERB TO BE ==================== */
    {
      id: 'verb-to-be',
      title: 'Verb to Be',
      desc: 'is, am, are, was, were, shall be, will be, has, have, had, shall have, will have',
      type: 'verb-grid',
      verbs: [
        /* --- FULLY FILLED TEMPLATE --- */
        {
          word: 'is',
          meaning: 'है',
          usage: 'He / She / It / singular noun ke saath — Present tense me. Kisi ek insaan, cheez, ya jagah ke baare me baat karte waqt.',
          simple: [
            { en: 'She is my sister.', hi: 'वह मेरी बहन है।' },
            { en: 'He is a doctor.', hi: 'वह डॉक्टर है।' },
            { en: 'The book is new.', hi: 'किताब नई है।' }
          ],
          negative: [
            { en: 'She is not here.', hi: 'वह यहाँ नहीं है।' },
            { en: 'He is not ready.', hi: 'वह तैयार नहीं है।' },
            { en: 'It is not easy.', hi: 'यह आसान नहीं है।' }
          ],
          wh: [
            { en: 'Where is she?', hi: 'वह कहाँ है?' },
            { en: 'Who is he?', hi: 'वह कौन है?' },
            { en: 'Why is it late?', hi: 'देर क्यों है?' }
          ],
          structures: {
            simple: 'Subject + is + Object/Adj\nHe is happy.\nShe is a teacher.',
            negative: 'Subject + is + not + Object/Adj\nHe is not happy.\nShe is not a teacher.',
            wh: 'WH + is + Subject + ...?\nWhere is he?\nWhy is she sad?'
          },
          practice: {
            basic: [
              { en: 'She is my sister.', options: ['वह मेरी बहन है।', 'वह मेरा भाई है।', 'वह मेरी माँ है।', 'वह मेरा दोस्त है।'], correct: 0 },
              { en: 'He is a doctor.', options: ['वह शिक्षक है।', 'वह डॉक्टर है।', 'वह इंजीनियर है।', 'वह छात्र है।'], correct: 1 },
              { en: 'The book is new.', options: ['किताब पुरानी है।', 'किताब नई है।', 'किताब छोटी है।', 'किताब बड़ी है।'], correct: 1 },
              { en: 'She is not here.', options: ['वह यहाँ है।', 'वह वहाँ है।', 'वह यहाँ नहीं है।', 'वह कहाँ है?'], correct: 2 },
              { en: 'Where is she?', options: ['वह कौन है?', 'वह कहाँ है?', 'वह क्या है?', 'वह कब है?'], correct: 1 }
            ],
            hard: [
              { hi: 'वह मेरी बहन है।', options: ['She is my sister.', 'He is my brother.', 'She is my mother.', 'He is my friend.'], correct: 0 },
              { hi: 'वह डॉक्टर है।', options: ['He is a teacher.', 'She is a doctor.', 'He is a doctor.', 'She is a teacher.'], correct: 2 },
              { hi: 'किताब नई है।', options: ['The book is old.', 'The book is new.', 'The book is small.', 'The book is big.'], correct: 1 },
              { hi: 'वह यहाँ नहीं है।', options: ['She is here.', 'She is there.', 'She is not here.', 'She is not there.'], correct: 2 },
              { hi: 'वह कहाँ है?', options: ['Who is she?', 'Where is she?', 'What is she?', 'How is she?'], correct: 1 }
            ],
            advance: [
              { en: 'She is my sister.', hi: 'वह मेरी बहन है।' },
              { en: 'He is a doctor.', hi: 'वह डॉक्टर है।' },
              { en: 'The book is new.', hi: 'किताब नई है।' },
              { en: 'She is not here.', hi: 'वह यहाँ नहीं है।' },
              { en: 'Where is she?', hi: 'वह कहाँ है?' }
            ]
          }
        },
        /* --- SKELETON VERBS --- */
        { word: 'am', meaning: 'हूँ', usage: 'Only with "I" — Present tense.', simple: [{en:'I am happy.',hi:'मैं खुश हूँ।'},{en:'I am a student.',hi:'मैं छात्र हूँ।'}], negative: [{en:'I am not tired.',hi:'मैं थका नहीं हूँ।'}], wh: [{en:'Where am I?',hi:'मैं कहाँ हूँ?'}], structures: {}, practice: {} },
        { word: 'are', meaning: 'हैं / हो', usage: 'You / We / They / plural ke saath.', simple: [{en:'We are friends.',hi:'हम दोस्त हैं।'},{en:'You are kind.',hi:'तुम दयालु हो।'}], negative: [{en:'They are not here.',hi:'वे यहाँ नहीं हैं।'}], wh: [{en:'Where are they?',hi:'वे कहाँ हैं?'}], structures: {}, practice: {} },
        { word: 'was', meaning: 'था / थी', usage: 'Past tense — I / He / She / It ke saath.', simple: [{en:'She was happy.',hi:'वह खुश थी।'},{en:'I was tired.',hi:'मैं थका था।'}], negative: [{en:'He was not here.',hi:'वह यहाँ नहीं था।'}], wh: [{en:'Where was she?',hi:'वह कहाँ थी?'}], structures: {}, practice: {} },
        { word: 'were', meaning: 'थे / थीं', usage: 'Past tense — You / We / They ke saath.', simple: [{en:'They were friends.',hi:'वे दोस्त थे।'},{en:'We were young.',hi:'हम जवान थे।'}], negative: [{en:'We were not late.',hi:'हम देर से नहीं थे।'}], wh: [{en:'Where were they?',hi:'वे कहाँ थे?'}], structures: {}, practice: {} },
        { word: 'shall be', meaning: 'होगा (future — I/We)', usage: 'Future tense — I / We ke saath.', simple: [{en:'I shall be there.',hi:'मैं वहाँ होऊँगा।'}], negative: [{en:'I shall not be late.',hi:'मैं देर नहीं करूँगा।'}], wh: [{en:'Where shall I be?',hi:'मैं कहाँ होऊँगा?'}], structures: {}, practice: {} },
        { word: 'will be', meaning: 'होगा / होगी (future)', usage: 'Future tense — sab subjects ke saath.', simple: [{en:'She will be here.',hi:'वह यहाँ होगी।'}], negative: [{en:'He will not be late.',hi:'वह देर नहीं करेगा।'}], wh: [{en:'Where will they be?',hi:'वे कहाँ होंगे?'}], structures: {}, practice: {} },
        { word: 'has', meaning: 'है (possession — He/She/It)', usage: 'Passession dikhane ke liye — He / She / It ke saath.', simple: [{en:'She has a car.',hi:'उसके पास कार है।'}], negative: [{en:'He has not come.',hi:'वह नहीं आया है।'}], wh: [{en:'What has she done?',hi:'उसने क्या किया है?'}], structures: {}, practice: {} },
        { word: 'have', meaning: 'है / हैं (possession)', usage: 'Possession — I / You / We / They ke saath.', simple: [{en:'I have a pen.',hi:'मेरे पास कलम है।'},{en:'They have money.',hi:'उनके पास पैसा है।'}], negative: [{en:'I have not finished.',hi:'मैंने खत्म नहीं किया है।'}], wh: [{en:'What have you done?',hi:'तुमने क्या किया है?'}], structures: {}, practice: {} },
        { word: 'had', meaning: 'था (past possession)', usage: 'Past possession — sab subjects ke saath.', simple: [{en:'She had a doll.',hi:'उसके पास गुड़िया थी।'}], negative: [{en:'He had not eaten.',hi:'उसने खाया नहीं था।'}], wh: [{en:'What had she done?',hi:'उसने क्या किया था?'}], structures: {}, practice: {} },
        { word: 'shall have', meaning: 'होगा (future perfect)', usage: 'Future perfect — I / We ke saath.', simple: [{en:'I shall have finished.',hi:'मैं खत्म कर चुका होऊँगा।'}], negative: [{en:'I shall not have finished.',hi:'मैं खत्म नहीं किया होऊँगा।'}], wh: [{en:'What shall I have done?',hi:'मैंने क्या किया होगा?'}], structures: {}, practice: {} },
        { word: 'will have', meaning: 'होगा (future perfect)', usage: 'Future perfect — sab subjects ke saath.', simple: [{en:'She will have arrived.',hi:'वह पहुँच चुकी होगी।'}], negative: [{en:'He will not have arrived.',hi:'वह नहीं पहुँचा होगा।'}], wh: [{en:'Who will have done it?',hi:'कौन कर चुका होगा?'}], structures: {}, practice: {} }
      ]
    },

    /* ==================== CARD 2: MODALS ==================== */
    {
      id: 'modals',
      title: 'Modals Verb',
      desc: 'can, may, should, could, must, will, shall, would, might, ought',
      type: 'verb-grid',
      verbs: [
        /* --- FULLY FILLED TEMPLATE --- */
        {
          word: 'can',
          meaning: 'सकता है / सकती है / सकते हैं',
          usage: 'Ability (kuch kar sakna) ya permission maangne ke liye. Present ya future ke liye.',
          simple: [
            { en: 'I can swim.', hi: 'मैं तैर सकता हूँ।' },
            { en: 'She can speak English.', hi: 'वह अंग्रेजी बोल सकती है।' },
            { en: 'They can help you.', hi: 'वे तुम्हारी मदद कर सकते हैं।' }
          ],
          negative: [
            { en: "I can't swim.", hi: 'मैं तैर नहीं सकता।' },
            { en: "She can't come today.", hi: 'वह आज नहीं आ सकती।' },
            { en: "They can't do this.", hi: 'वे यह नहीं कर सकते।' }
          ],
          wh: [
            { en: 'Can you help me?', hi: 'क्या तुम मेरी मदद कर सकते हो?' },
            { en: 'What can I do?', hi: 'मैं क्या कर सकता हूँ?' },
            { en: 'Where can we go?', hi: 'हम कहाँ जा सकते हैं?' }
          ],
          structures: {
            simple: 'Subject + can + Verb (base form)\nI can swim.\nShe can speak English.',
            negative: 'Subject + cannot/can\'t + Verb\nI cannot swim.\nShe can\'t come.',
            wh: 'Can + Subject + Verb...?\nCan you help me?'
          },
          practice: {
            basic: [
              { en: 'I can swim.', options: ['मैं तैर सकता हूँ।', 'मैं तैरना जानता हूँ।', 'मैं तैर रहा हूँ।', 'मैं तैरा।'], correct: 0 },
              { en: 'She can speak English.', options: ['वह अंग्रेजी बोलती है।', 'वह अंग्रेजी बोल सकती है।', 'वह अंग्रेजी बोलेगी।', 'वह अंग्रेजी सीख रही है।'], correct: 1 },
              { en: 'They can help you.', options: ['वे तुम्हारी मदद करते हैं।', 'वे तुम्हारी मदद करेंगे।', 'वे तुम्हारी मदद कर सकते हैं।', 'वे तुम्हारी मदद कर रहे हैं।'], correct: 2 },
              { en: "I can't swim.", options: ['मैं तैर सकता हूँ।', 'मैं तैर नहीं सकता।', 'मैं तैर रहा हूँ।', 'मैंने तैरा।'], correct: 1 },
              { en: 'Can you help me?', options: ['तुम मेरी मदद करते हो।', 'क्या तुम मेरी मदद कर सकते हो?', 'तुम मेरी मदद क्यों करते हो?', 'तुमने मेरी मदद की।'], correct: 1 }
            ],
            hard: [
              { hi: 'मैं तैर सकता हूँ।', options: ['I swim.', 'I can swim.', 'I am swimming.', 'I will swim.'], correct: 1 },
              { hi: 'वह अंग्रेजी बोल सकती है।', options: ['She speaks English.', 'She is speaking English.', 'She can speak English.', 'She spoke English.'], correct: 2 },
              { hi: 'वे तुम्हारी मदद कर सकते हैं।', options: ['They help you.', 'They can help you.', 'They are helping you.', 'They helped you.'], correct: 1 },
              { hi: 'मैं तैर नहीं सकता।', options: ['I can swim.', "I can't swim.", 'I am not swimming.', 'I will not swim.'], correct: 1 },
              { hi: 'क्या तुम मेरी मदद कर सकते हो?', options: ['Do you help me?', 'Are you helping me?', 'Can you help me?', 'Will you help me?'], correct: 2 }
            ],
            advance: [
              { en: 'I can swim.', hi: 'मैं तैर सकता हूँ।' },
              { en: 'She can speak English.', hi: 'वह अंग्रेजी बोल सकती है।' },
              { en: 'They can help you.', hi: 'वे तुम्हारी मदद कर सकते हैं।' },
              { en: "I can't swim.", hi: 'मैं तैर नहीं सकता।' },
              { en: 'Can you help me?', hi: 'क्या तुम मेरी मदद कर सकते हो?' }
            ]
          }
        },
        /* --- SKELETON --- */
        { word: 'may', meaning: 'सकता है (permission/possibility)', usage: 'Permission ya possibility ke liye.', simple: [{en:'May I come in?',hi:'क्या मैं अंदर आ सकता हूँ?'}], negative: [{en:'It may not rain.',hi:'शायद बारिश न हो।'}], wh: [{en:'May I go?',hi:'क्या मैं जा सकता हूँ?'}], structures: {}, practice: {} },
        { word: 'should', meaning: 'चाहिए', usage: 'Advice ya suggestion ke liye.', simple: [{en:'You should rest.',hi:'तुम्हें आराम करना चाहिए।'}], negative: [{en:"You shouldn't smoke.",hi:'तुम्हें धूम्रपान नहीं करना चाहिए।'}], wh: [{en:'What should I do?',hi:'मुझे क्या करना चाहिए?'}], structures: {}, practice: {} },
        { word: 'could', meaning: 'सका / सकता था', usage: 'Past ability ya polite request.', simple: [{en:'I could swim at five.',hi:'मैं पाँच साल में तैर सकता था।'}], negative: [{en:"I couldn't come.",hi:'मैं नहीं आ सका।'}], wh: [{en:'Could you help me?',hi:'क्या आप मेरी मदद कर सकते हैं?'}], structures: {}, practice: {} },
        { word: 'must', meaning: 'ज़रूर चाहिए', usage: 'Strong obligation ya certainty.', simple: [{en:'You must study.',hi:'तुम्हें ज़रूर पढ़ना चाहिए।'}], negative: [{en:'You must not lie.',hi:'तुम्हें झूठ नहीं बोलना चाहिए।'}], wh: [{en:'Must I go now?',hi:'क्या मुझे अब जाना है?'}], structures: {}, practice: {} },
        { word: 'will', meaning: 'गा / गी / गे (future)', usage: 'Future tense.', simple: [{en:'I will go.',hi:'मैं जाऊँगा।'}], negative: [{en:"He won't come.",hi:'वह नहीं आएगा।'}], wh: [{en:'Will you help?',hi:'क्या तुम मदद करोगे?'}], structures: {}, practice: {} },
        { word: 'shall', meaning: 'गा / गी (I/We)', usage: 'Future — I / We ke saath.', simple: [{en:'I shall go.',hi:'मैं जाऊँगा।'}], negative: [{en:"We shan't go.",hi:'हम नहीं जाएँगे।'}], wh: [{en:'Shall I open the door?',hi:'क्या मैं दरवाज़ा खोलूँ?'}], structures: {}, practice: {} },
        { word: 'would', meaning: 'ता / ती / ते (past habit / polite)', usage: 'Polite request ya past habit.', simple: [{en:'I would like tea.',hi:'मुझे चाय चाहिए।'}], negative: [{en:"I wouldn't go.",hi:'मैं नहीं जाऊँगा।'}], wh: [{en:'Would you help me?',hi:'क्या आप मदद करेंगे?'}], structures: {}, practice: {} },
        { word: 'might', meaning: 'शायद (sakta hai)', usage: 'Weak possibility.', simple: [{en:'It might rain.',hi:'शायद बारिश हो।'}], negative: [{en:'She might not come.',hi:'शायद वह न आए।'}], wh: [{en:'Might he come?',hi:'क्या वह आ सकता है?'}], structures: {}, practice: {} },
        { word: 'ought', meaning: 'चाहिए (moral duty)', usage: 'Moral obligation ke liye — "ought to" ke saath.', simple: [{en:'You ought to help.',hi:'तुम्हें मदद करनी चाहिए।'}], negative: [{en:"You oughtn't to lie.",hi:'तुम्हें झूठ नहीं बोलना चाहिए।'}], wh: [{en:'Ought I to go?',hi:'क्या मुझे जाना चाहिए?'}], structures: {}, practice: {} }
      ]
    },

    /* ==================== CARD 3: SEMI MODALS ==================== */
    {
      id: 'semi-modals',
      title: 'Semi Modals Verb',
      desc: 'need, need to, dare, dare to, used to, ought to',
      type: 'verb-grid',
      verbs: [
        /* --- FULLY FILLED TEMPLATE --- */
        {
          word: 'used to',
          meaning: 'करता था / करती थी / करते थे',
          usage: 'Past me aadat ya routine dikhane ke liye — jo ab nahi karte.',
          simple: [
            { en: 'I used to play cricket.', hi: 'मैं क्रिकेट खेलता था।' },
            { en: 'She used to live in Delhi.', hi: 'वह दिल्ली में रहती थी।' },
            { en: 'They used to be friends.', hi: 'वे दोस्त हुआ करते थे।' }
          ],
          negative: [
            { en: "I didn't use to smoke.", hi: 'मैं सिगरेट नहीं पीता था।' },
            { en: "She didn't use to come here.", hi: 'वह यहाँ नहीं आती थी।' },
            { en: "We didn't use to fight.", hi: 'हम लड़ते नहीं थे।' }
          ],
          wh: [
            { en: 'Did you use to play?', hi: 'क्या तुम खेलते थे?' },
            { en: 'Where did she use to live?', hi: 'वह कहाँ रहती थी?' },
            { en: 'What did you use to do?', hi: 'तुम क्या करते थे?' }
          ],
          structures: {
            simple: 'Subject + used to + Verb (base)\nI used to play cricket.',
            negative: "Subject + didn't + use to + Verb\nI didn't use to smoke.",
            wh: 'Did + Subject + use to + Verb...?\nDid you use to play?'
          },
          practice: {
            basic: [
              { en: 'I used to play cricket.', options: ['मैं क्रिकेट खेलता था।', 'मैं क्रिकेट खेलता हूँ।', 'मैं क्रिकेट खेलूँगा।', 'मैं क्रिकेट खेल रहा हूँ।'], correct: 0 },
              { en: 'She used to live in Delhi.', options: ['वह दिल्ली में रहती है।', 'वह दिल्ली में रहती थी।', 'वह दिल्ली में रहेगी।', 'वह दिल्ली में रह रही है।'], correct: 1 },
              { en: 'They used to be friends.', options: ['वे दोस्त हैं।', 'वे दोस्त होंगे।', 'वे दोस्त हुआ करते थे।', 'वे दोस्त बने।'], correct: 2 },
              { en: "I didn't use to smoke.", options: ['मैं सिगरेट पीता हूँ।', 'मैं सिगरेट पीता था।', 'मैं सिगरेट नहीं पीता था।', 'मैं सिगरेट नहीं पीता।'], correct: 2 },
              { en: 'Did you use to play?', options: ['क्या तुम खेलते हो?', 'क्या तुम खेलते थे?', 'क्या तुम खेलोगे?', 'क्या तुम खेल रहे हो?'], correct: 1 }
            ],
            hard: [
              { hi: 'मैं क्रिकेट खेलता था।', options: ['I play cricket.', 'I used to play cricket.', 'I am playing cricket.', 'I will play cricket.'], correct: 1 },
              { hi: 'वह दिल्ली में रहती थी।', options: ['She lives in Delhi.', 'She used to live in Delhi.', 'She will live in Delhi.', 'She is living in Delhi.'], correct: 1 },
              { hi: 'वे दोस्त हुआ करते थे।', options: ['They are friends.', 'They were friends.', 'They used to be friends.', 'They will be friends.'], correct: 2 },
              { hi: 'मैं सिगरेट नहीं पीता था।', options: ['I do not smoke.', "I didn't use to smoke.", 'I will not smoke.', 'I am not smoking.'], correct: 1 },
              { hi: 'क्या तुम खेलते थे?', options: ['Do you play?', 'Did you use to play?', 'Will you play?', 'Are you playing?'], correct: 1 }
            ],
            advance: [
              { en: 'I used to play cricket.', hi: 'मैं क्रिकेट खेलता था।' },
              { en: 'She used to live in Delhi.', hi: 'वह दिल्ली में रहती थी।' },
              { en: 'They used to be friends.', hi: 'वे दोस्त हुआ करते थे।' },
              { en: "I didn't use to smoke.", hi: 'मैं सिगरेट नहीं पीता था।' },
              { en: 'Did you use to play?', hi: 'क्या तुम खेलते थे?' }
            ]
          }
        },
        /* --- SKELETON --- */
        { word: 'need', meaning: 'ज़रूरत है', usage: 'Zaroorat dikhane ke liye (modal form).', simple: [{en:'You need not worry.',hi:'तुम्हें चिंता की ज़रूरत नहीं।'}], negative: [{en:'He need not come.',hi:'उसे आने की ज़रूरत नहीं।'}], wh: [{en:'Need I go?',hi:'क्या मुझे जाना है?'}], structures: {}, practice: {} },
        { word: 'need to', meaning: 'करना ज़रूरी है', usage: 'Zaroorat — "need to + verb" form.', simple: [{en:'I need to study.',hi:'मुझे पढ़ना ज़रूरी है।'}], negative: [{en:"You don't need to go.",hi:'तुम्हें जाना ज़रूरी नहीं।'}], wh: [{en:'What do I need to do?',hi:'मुझे क्या करना ज़रूरी है?'}], structures: {}, practice: {} },
        { word: 'dare', meaning: 'हिम्मत करना', usage: 'Challenge ya himmat dikhane ke liye.', simple: [{en:'He dare not speak.',hi:'वह बोलने की हिम्मत नहीं करता।'}], negative: [{en:'She dare not ask.',hi:'वह पूछने की हिम्मत नहीं करती।'}], wh: [{en:'How dare you?',hi:'तुम्हारी हिम्मत कैसे हुई?'}], structures: {}, practice: {} },
        { word: 'dare to', meaning: 'हिम्मत करना (to form)', usage: '"dare to + verb" form.', simple: [{en:'He dares to fight.',hi:'वह लड़ने की हिम्मत करता है।'}], negative: [{en:"She doesn't dare to ask.",hi:'वह पूछने की हिम्मत नहीं करती।'}], wh: [{en:'Do you dare to try?',hi:'क्या तुम कोशिश करने की हिम्मत करते हो?'}], structures: {}, practice: {} },
        { word: 'ought to', meaning: 'चाहिए (moral duty)', usage: 'Moral obligation — "ought to + verb".', simple: [{en:'You ought to help.',hi:'तुम्हें मदद करनी चाहिए।'}], negative: [{en:"You oughtn't to lie.",hi:'तुम्हें झूठ नहीं बोलना चाहिए।'}], wh: [{en:'Ought I to go?',hi:'क्या मुझे जाना चाहिए?'}], structures: {}, practice: {} }
      ]
    }
  ]
};
