const module1 = {
  id: 'm1',
  title: 'Module 1: Verbs',
  desc: 'Learn all types of verbs with examples and practice.',
  icon: '📗',
  items: [
    {
      id: 'v-to-be',
      title: 'Verb To Be',
      desc: 'is, am, are, was, were, shall be, etc.',
      icon: '🌱',
      type: 'verb',
      verbs: [
        {
          word: 'is',
          meaning: 'है (hai) - Used with He, She, It',
          usage: 'Use "is" with singular subjects like He, She, It, or singular nouns.',
          structure: 'Simple: He/She/It + is + ...\nNegative: He/She/It + is + not + ...\nWH: WH + is + Subject + ...',
          examples: {
            simple: [
              { en: 'She is my sister.', hi: 'वह मेरी बहन है।' },
              { en: 'He is a doctor.', hi: 'वह डॉक्टर है।' },
              { en: 'It is cold today.', hi: 'आज ठंड है।' }
            ],
            negative: [
              { en: 'She is not here.', hi: 'वह यहाँ नहीं है।' },
              { en: 'He is not tired.', hi: 'वह थका नहीं है।' },
              { en: 'It is not ready.', hi: 'यह तैयार नहीं है।' }
            ],
            wh: [
              { en: 'Where is she?', hi: 'वह कहाँ है?' },
              { en: 'Who is he?', hi: 'वह कौन है?' },
              { en: 'Why is it late?', hi: 'देर क्यों है?' }
            ]
          }
        },
        {
          word: 'am',
          meaning: 'हूँ (hūn) - Used with I',
          usage: 'Use "am" only with the subject "I" in present tense.',
          structure: 'Simple: I + am + ...\nNegative: I + am + not + ...\nWH: WH + am + I + ...',
          examples: {
            simple: [
              { en: 'I am happy.', hi: 'मैं खुश हूँ।' },
              { en: 'I am a student.', hi: 'मैं एक छात्र हूँ।' },
              { en: 'I am ready.', hi: 'मैं तैयार हूँ।' }
            ],
            negative: [
              { en: 'I am not busy.', hi: 'मैं व्यस्त नहीं हूँ।' },
              { en: 'I am not angry.', hi: 'मैं गुस्से में नहीं हूँ।' },
              { en: 'I am not late.', hi: 'मैं देर से नहीं हूँ।' }
            ],
            wh: [
              { en: 'Why am I here?', hi: 'मैं यहाँ क्यों हूँ?' },
              { en: 'Where am I?', hi: 'मैं कहाँ हूँ?' },
              { en: 'Who am I?', hi: 'मैं कौन हूँ?' }
            ]
          }
        },
        {
          word: 'are',
          meaning: 'हैं (hain) - Used with You, We, They',
          usage: 'Use "are" with plural subjects like We, They, You.',
          structure: 'Simple: We/They/You + are + ...\nNegative: We/They/You + are + not + ...',
          examples: {
            simple: [
              { en: 'We are friends.', hi: 'हम दोस्त हैं।' },
              { en: 'They are students.', hi: 'वे छात्र हैं।' },
              { en: 'You are kind.', hi: 'तुम दयालु हो।' }
            ],
            negative: [
              { en: 'We are not late.', hi: 'हम देर से नहीं हैं।' },
              { en: 'They are not here.', hi: 'वे यहाँ नहीं हैं।' },
              { en: 'You are not wrong.', hi: 'तुम गलत नहीं हो।' }
            ],
            wh: [
              { en: 'Where are they?', hi: 'वे कहाँ हैं?' },
              { en: 'Who are you?', hi: 'तुम कौन हो?' },
              { en: 'What are we doing?', hi: 'हम क्या कर रहे हैं?' }
            ]
          }
        },
        {
          word: 'was',
          meaning: 'था / थी (tha / thi) - Past singular',
          usage: 'Past tense of "is/am". Used with I, He, She, It.',
          structure: 'Simple: I/He/She/It + was + ...\nNegative: I/He/She/It + was + not + ...',
          examples: {
            simple: [
              { en: 'She was happy.', hi: 'वह खुश थी।' },
              { en: 'I was tired.', hi: 'मैं थका हुआ था।' },
              { en: 'It was cold.', hi: 'ठंड थी।' }
            ],
            negative: [
              { en: 'He was not here.', hi: 'वह यहाँ नहीं था।' },
              { en: 'It was not easy.', hi: 'यह आसान नहीं था।' },
              { en: 'I was not ready.', hi: 'मैं तैयार नहीं था।' }
            ],
            wh: [
              { en: 'Where was she?', hi: 'वह कहाँ थी?' },
              { en: 'Why was it late?', hi: 'देर क्यों थी?' },
              { en: 'Who was that?', hi: 'वह कौन था?' }
            ]
          }
        },
        {
          word: 'were',
          meaning: 'थे / थीं (the / thin) - Past plural',
          usage: 'Past tense of "are". Used with We, They, You.',
          structure: 'Simple: We/They/You + were + ...\nNegative: We/They/You + were + not + ...',
          examples: {
            simple: [
              { en: 'They were friends.', hi: 'वे दोस्त थे।' },
              { en: 'We were young.', hi: 'हम जवान थे।' },
              { en: 'You were right.', hi: 'तुम सही थे।' }
            ],
            negative: [
              { en: 'They were not late.', hi: 'वे देर से नहीं थे।' },
              { en: 'We were not ready.', hi: 'हम तैयार नहीं थे।' },
              { en: 'You were not wrong.', hi: 'तुम गलत नहीं थे।' }
            ],
            wh: [
              { en: 'Where were they?', hi: 'वे कहाँ थे?' },
              { en: 'Why were you angry?', hi: 'तुम गुस्से में क्यों थे?' },
              { en: 'Who were they?', hi: 'वे कौन थे?' }
            ]
          }
        },
        {
          word: 'shall be',
          meaning: 'होगा (hoga) - Future',
          usage: 'Future tense. Used with I, We usually.',
          structure: 'Simple: I/We + shall be + ...\nNegative: I/We + shall not be + ...',
          examples: {
            simple: [ { en: 'I shall be there.', hi: 'मैं वहाँ रहूँगा।' }, { en: 'We shall be late.', hi: 'हम देर से होंगे।' }, { en: 'I shall be happy.', hi: 'मैं खुश रहूँगा।' } ],
            negative: [ { en: 'I shall not be late.', hi: 'मैं देर नहीं करूँगा।' }, { en: 'We shall not be there.', hi: 'हम वहाँ नहीं होंगे।' }, { en: 'I shall not be angry.', hi: 'मैं गुस्सा नहीं होऊँगा।' } ],
            wh: [ { en: 'Where shall I be?', hi: 'मैं कहाँ रहूँगा?' }, { en: 'Why shall we be late?', hi: 'हम देर क्यों होंगे?' }, { en: 'How shall I be ready?', hi: 'मैं कैसे तैयार होऊँगा?' } ]
          }
        },
        {
          word: 'will be',
          meaning: 'होगा (hoga) - Future',
          usage: 'Future tense. Used with He, She, It, You, They.',
          structure: 'Simple: Subject + will be + ...\nNegative: Subject + will not be + ...',
          examples: {
            simple: [ { en: 'He will be here.', hi: 'वह यहाँ होगा।' }, { en: 'They will be happy.', hi: 'वे खुश होंगे।' }, { en: 'She will be a doctor.', hi: 'वह डॉक्टर बनेगी।' } ],
            negative: [ { en: 'He will not be here.', hi: 'वह यहाँ नहीं होगा।' }, { en: 'They will not be late.', hi: 'वे देर से नहीं होंगे।' }, { en: 'She will not be angry.', hi: 'वह गुस्सा नहीं होगी।' } ],
            wh: [ { en: 'Where will he be?', hi: 'वह कहाँ होगा?' }, { en: 'Why will they be late?', hi: 'वे देर क्यों होंगे?' }, { en: 'When will she be ready?', hi: 'वह कब तैयार होगी?' } ]
          }
        },
        {
          word: 'has',
          meaning: 'पास है (paas hai) - Present singular',
          usage: 'Shows possession. Used with He, She, It.',
          structure: 'Simple: He/She/It + has + ...\nNegative: He/She/It + does not have + ...',
          examples: {
            simple: [ { en: 'He has a car.', hi: 'उसके पास एक कार है।' }, { en: 'She has a pen.', hi: 'उसके पास एक कलम है।' }, { en: 'It has a tail.', hi: 'इसकी एक पूंछ है।' } ],
            negative: [ { en: 'He does not have a car.', hi: 'उसके पास कार नहीं है।' }, { en: 'She does not have a pen.', hi: 'उसके पास कलम नहीं है।' }, { en: 'It does not have a tail.', hi: 'इसकी पूंछ नहीं है।' } ],
            wh: [ { en: 'What does he have?', hi: 'उसके पास क्या है?' }, { en: 'Why does she have a pen?', hi: 'उसके पास कलम क्यों है?' }, { en: 'Who has a car?', hi: 'किसके पास कार है?' } ]
          }
        },
        {
          word: 'have',
          meaning: 'पास है (paas hai) - Present plural',
          usage: 'Shows possession. Used with I, You, We, They.',
          structure: 'Simple: I/You/We/They + have + ...\nNegative: I/You/We/They + do not have + ...',
          examples: {
            simple: [ { en: 'I have a book.', hi: 'मेरे पास एक किताब है।' }, { en: 'They have a house.', hi: 'उनके पास एक घर है।' }, { en: 'We have time.', hi: 'हमारे पास समय है।' } ],
            negative: [ { en: 'I do not have a book.', hi: 'मेरे पास किताब नहीं है।' }, { en: 'They do not have a house.', hi: 'उनके पास घर नहीं है।' }, { en: 'We do not have time.', hi: 'हमारे पास समय नहीं है।' } ],
            wh: [ { en: 'What do I have?', hi: 'मेरे पास क्या है?' }, { en: 'Why do they have a house?', hi: 'उनके पास घर क्यों है?' }, { en: 'Who has time?', hi: 'किसके पास समय है?' } ]
          }
        },
        {
          word: 'had',
          meaning: 'पास था (paas tha) - Past',
          usage: 'Past possession. Used with all subjects.',
          structure: 'Simple: Subject + had + ...\nNegative: Subject + did not have + ...',
          examples: {
            simple: [ { en: 'I had a car.', hi: 'मेरे पास कार थी।' }, { en: 'She had a book.', hi: 'उसके पास किताब थी।' }, { en: 'They had money.', hi: 'उनके पास पैसे थे।' } ],
            negative: [ { en: 'I did not have a car.', hi: 'मेरे पास कार नहीं थी।' }, { en: 'She did not have a book.', hi: 'उसके पास किताब नहीं थी।' }, { en: 'They did not have money.', hi: 'उनके पास पैसे नहीं थे।' } ],
            wh: [ { en: 'What did I have?', hi: 'मेरे पास क्या था?' }, { en: 'Why did she have a book?', hi: 'उसके पास किताब क्यों थी?' }, { en: 'Who had money?', hi: 'किसके पास पैसे थे?' } ]
          }
        },
        {
          word: 'shall have',
          meaning: 'पास होगा (paas hoga) - Future',
          usage: 'Future possession with I, We.',
          structure: 'Simple: I/We + shall have + ...\nNegative: I/We + shall not have + ...',
          examples: {
            simple: [ { en: 'I shall have a car.', hi: 'मेरे पास कार होगी।' }, { en: 'We shall have time.', hi: 'हमारे पास समय होगा।' }, { en: 'I shall have a book.', hi: 'मेरे पास किताब होगी।' } ],
            negative: [ { en: 'I shall not have a car.', hi: 'मेरे पास कार नहीं होगी।' }, { en: 'We shall not have time.', hi: 'हमारे पास समय नहीं होगा।' }, { en: 'I shall not have a book.', hi: 'मेरे पास किताब नहीं होगी।' } ],
            wh: [ { en: 'What shall I have?', hi: 'मेरे पास क्या होगा?' }, { en: 'Why shall we have time?', hi: 'हमारे पास समय क्यों होगा?' }, { en: 'Who shall have a car?', hi: 'किसके पास कार होगी?' } ]
          }
        },
        {
          word: 'will have',
          meaning: 'पास होगा (paas hoga) - Future',
          usage: 'Future possession with He, She, It, You, They.',
          structure: 'Simple: Subject + will have + ...\nNegative: Subject + will not have + ...',
          examples: {
            simple: [ { en: 'He will have a car.', hi: 'उसके पास कार होगी।' }, { en: 'They will have time.', hi: 'उनके पास समय होगा।' }, { en: 'She will have a book.', hi: 'उसके पास किताब होगी।' } ],
            negative: [ { en: 'He will not have a car.', hi: 'उसके पास कार नहीं होगी।' }, { en: 'They will not have time.', hi: 'उनके पास समय नहीं होगा।' }, { en: 'She will not have a book.', hi: 'उसके पास किताब नहीं होगी।' } ],
            wh: [ { en: 'What will he have?', hi: 'उसके पास क्या होगा?' }, { en: 'Why will they have time?', hi: 'उनके पास समय क्यों होगा?' }, { en: 'Who will have a car?', hi: 'किसके पास कार होगी?' } ]
          }
        }
      ]
    },
    {
      id: 'modals',
      title: 'Modals Verbs',
      desc: 'can, may, should, could, etc.',
      icon: '🛠️',
      type: 'verb',
      verbs: [
        {
          word: 'can',
          meaning: 'सकता है (sakta hai) - Ability',
          usage: 'Shows ability or permission in present.',
          structure: 'Simple: Subject + can + V1\nNegative: Subject + cannot + V1',
          examples: {
            simple: [ { en: 'I can swim.', hi: 'मैं तैर सकता हूँ।' }, { en: 'She can speak English.', hi: 'वह अंग्रेजी बोल सकती है।' }, { en: 'They can run fast.', hi: 'वे तेज दौड़ सकते हैं।' } ],
            negative: [ { en: 'I cannot swim.', hi: 'मैं तैर नहीं सकता।' }, { en: 'She cannot speak English.', hi: 'वह अंग्रेजी नहीं बोल सकती।' }, { en: 'They cannot run fast.', hi: 'वे तेज नहीं दौड़ सकते।' } ],
            wh: [ { en: 'Can you help me?', hi: 'क्या तुम मेरी मदद कर सकते हो?' }, { en: 'What can I do?', hi: 'मैं क्या कर सकता हूँ?' }, { en: 'Where can we go?', hi: 'हम कहाँ जा सकते हैं?' } ]
          }
        },
        {
          word: 'may',
          meaning: 'सकता है (sakta hai) - Permission/Possibility',
          usage: 'Shows possibility or formal permission.',
          structure: 'Simple: Subject + may + V1\nNegative: Subject + may not + V1',
          examples: {
            simple: [ { en: 'It may rain today.', hi: 'आज बारिश हो सकती है।' }, { en: 'May I come in?', hi: 'क्या मैं अंदर आ सकता हूँ?' }, { en: 'He may be late.', hi: 'वह देर से हो सकता है।' } ],
            negative: [ { en: 'It may not rain.', hi: 'बारिश नहीं हो सकती।' }, { en: 'He may not come.', hi: 'वह नहीं आ सकता।' }, { en: 'You may not go.', hi: 'तुम नहीं जा सकते।' } ],
            wh: [ { en: 'May I help you?', hi: 'क्या मैं आपकी मदद कर सकता हूँ?' }, { en: 'When may he arrive?', hi: 'वह कब आ सकता है?' }, { en: 'Where may they be?', hi: 'वे कहाँ हो सकते हैं?' } ]
          }
        },
        {
          word: 'should',
          meaning: 'चाहिए (chahiye) - Advice',
          usage: 'Shows advice, suggestion, or duty.',
          structure: 'Simple: Subject + should + V1\nNegative: Subject + should not + V1',
          examples: {
            simple: [ { en: 'You should study.', hi: 'तुम्हें पढ़ाई करनी चाहिए।' }, { en: 'We should help others.', hi: 'हमें दूसरों की मदद करनी चाहिए।' }, { en: 'He should rest.', hi: 'उसे आराम करना चाहिए।' } ],
            negative: [ { en: 'You should not smoke.', hi: 'तुम्हें धूम्रपान नहीं करना चाहिए।' }, { en: 'We should not lie.', hi: 'हमें झूठ नहीं बोलना चाहिए।' }, { en: 'He should not go.', hi: 'उसे नहीं जाना चाहिए।' } ],
            wh: [ { en: 'What should I do?', hi: 'मुझे क्या करना चाहिए?' }, { en: 'Why should we help?', hi: 'हमें मदद क्यों करनी चाहिए?' }, { en: 'Where should he go?', hi: 'उसे कहाँ जाना चाहिए?' } ]
          }
        },
        // --- YAHAN AAP BAJO MODALS (could, must, will, shall, would, might, ought) ADD KAR SAKTE HAIN (Same format) ---
      ]
    },
    {
      id: 'semi-modals',
      title: 'Semi Modals Verb',
      desc: 'need, dare, used to, etc.',
      icon: '📝',
      type: 'verb',
      verbs: [
        {
          word: 'need',
          meaning: 'ज़रूरत है (zaroorat hai)',
          usage: 'Shows necessity.',
          structure: 'Simple: Subject + need + ...\nNegative: Subject + need not + ...',
          examples: {
            simple: [ { en: 'I need help.', hi: 'मुझे मदद की ज़रूरत है।' }, { en: 'We need water.', hi: 'हमें पानी की ज़रूरत है।' }, { en: 'She needs a pen.', hi: 'उसे कलम की ज़रूरत है।' } ],
            negative: [ { en: 'I do not need help.', hi: 'मुझे मदद की ज़रूरत नहीं है।' }, { en: 'We do not need water.', hi: 'हमें पानी की ज़रूरत नहीं है।' }, { en: 'She does not need a pen.', hi: 'उसे कलम की ज़रूरत नहीं है।' } ],
            wh: [ { en: 'What do you need?', hi: 'तुम्हें क्या ज़रूरत है?' }, { en: 'Why do we need water?', hi: 'हमें पानी की ज़रूरत क्यों है?' }, { en: 'Who needs a pen?', hi: 'किसे कलम की ज़रूरत है?' } ]
          }
        },
        {
          word: 'dare',
          meaning: 'हिम्मत करना (himmat karna)',
          usage: 'Shows courage to do something.',
          structure: 'Simple: Subject + dare + ...\nNegative: Subject + dare not + ...',
          examples: {
            simple: [ { en: 'He dare not speak.', hi: 'उसकी बोलने की हिम्मत नहीं है।' }, { en: 'I dare to jump.', hi: 'मेरी कूदने की हिम्मत है।' }, { en: 'She dares to fight.', hi: 'उसकी लड़ने की हिम्मत है।' } ],
            negative: [ { en: 'I do not dare to go.', hi: 'मेरी जाने की हिम्मत नहीं है।' }, { en: 'He does not dare to ask.', hi: 'उसकी पूछने की हिम्मत नहीं है।' }, { en: 'They do not dare to fight.', hi: 'उनकी लड़ने की हिम्मत नहीं है।' } ],
            wh: [ { en: 'How dare you?', hi: 'तुम्हारी हिम्मत कैसे हुई?' }, { en: 'Why do you dare?', hi: 'तुम हिम्मत क्यों करते हो?' }, { en: 'Who dares to go?', hi: 'किसकी जाने की हिम्मत है?' } ]
          }
        },
        // --- YAHAN BAJO SEMI MODALS (need to, dare to, used to, ought to) ADD KAR SAKTE HAIN ---
      ]
    }
  ]
};
