// ═══════════════════════════════════════════════════════════
// module2.js — Module 2: Grammar Foundation
// HTML-compatible (title/hi/use/s/rules) + rich (definition/structure/examples/practice)
// Sources: Sentence, Clause, Tense (tumhare diye hue poore data se)
// Spoken English: AI chat → HTML ke initChat/sendSpoken se poore data se answer
// ═══════════════════════════════════════════════════════════

window.MODULE2 = {

  // ═══════════════════════════════════════════════════════════
  // SENTENCES
  // ═══════════════════════════════════════════════════════════
  sentences: [
    {
      id: 'assertive',
      title: 'Assertive Sentence',
      hi: 'Statement — साधारण वाक्य',
      use: 'जब आप किसी को जानकारी देना चाहते हो, तथ्य बताना चाहते हो, अपनी राय देना चाहते हो, या किसी चीज़ का वर्णन करना चाहते हो — तब Assertive sentence use होता है।',
      definition: 'वह sentence जो किसी बात को बताता है या statement देता है। इसमें कोई सवाल नहीं, कोई आदेश नहीं — सिर्फ एक सीधी बात बताई जाती है। Assertive sentence सच (true) या झूठ (false) — दोनों हो सकता है। इसे Declarative Sentence भी कहते हैं।',
      rule: 'Subject + Verb + Object + Full Stop (.)',
      ruleExplain: 'Subject = जो काम करता है (I, She, Ram) | Verb = क्रिया (eat, go, is) | Object = जिस पर काम होता है (rice, school) | अंत में Full Stop (.) लगाया जाता है।',
      rules: 'Rule: Subject + Verb + Object + Full Stop (.)\n\nSimple: Subject + Verb + Object + .\nNegative: Subject + do/does + not + V1 + Object + .\nInterrogative: WH + Helping Verb + Subject + V1 + ?\nWH-Question: WH + do/does/did + Subject + V1 + ?',
      structure: [
        { type: 'Simple (सामान्य)',       formula: 'Subject + Verb + Object + .',               example: 'I eat rice.', exampleExplain: 'I = Subject, eat = Verb, rice = Object' },
        { type: 'Negative (नकारात्मक)',   formula: 'Subject + do/does + not + V1 + Object + .',  example: 'I do not eat meat.', exampleExplain: 'do not = नकारात्मक शब्द' },
        { type: 'Interrogative (प्रश्न)', formula: 'WH + Helping Verb + Subject + V1 + ?',       example: 'What do you eat?', exampleExplain: 'What = WH-word, do = Helping Verb' },
        { type: 'WH-Question',            formula: 'WH + do/does/did + Subject + V1 + ?',        example: 'Where does she live?', exampleExplain: 'Where = WH-word, does = Helping Verb' }
      ],
      s: { simple: 'I am a student.', neg: 'I am not a teacher.', wh: 'What is your name?' },
      examples: {
        simple: [
          { en: 'I am a student.', hi: 'मैं एक छात्र हूँ।', note: 'I = Subject, am = Verb, a student = Object' },
          { en: 'She lives in Delhi.', hi: 'वह दिल्ली में रहती है।', note: 'She + lives + in Delhi' },
          { en: 'The sun rises in the east.', hi: 'सूरज पूर्व में उगता है।', note: 'Universal truth' }
        ],
        negative: [
          { en: 'I am not a teacher.', hi: 'मैं शिक्षक नहीं हूँ।', note: 'am not = नकारात्मक रूप' },
          { en: 'She does not live in Mumbai.', hi: 'वह मुंबई में नहीं रहती।', note: 'does not = नकारात्मक' },
          { en: 'Ram does not eat a banana.', hi: 'राम केला नहीं खाता।', note: 'does not = नकारात्मक' }
        ],
        wh: [
          { en: 'What is your name?', hi: 'तुम्हारा नाम क्या है?', note: 'What = WH-word' },
          { en: 'Where does she live?', hi: 'वह कहाँ रहती है?', note: 'Where = WH-word' },
          { en: 'When does the sun rise?', hi: 'सूरज कब उगता है?', note: 'When = WH-word' }
        ]
      },
      practice: {
        basic: [
          { type:'mcq', q:'Which is an assertive sentence?', options:['What is your name?','I am a doctor.','Close the door.','What a beautiful day!'], answer:'I am a doctor.' },
          { type:'mcq', q:'Which is an assertive sentence?', options:['She is my sister.','Are you happy?','Please sit down.','How nice!'], answer:'She is my sister.' },
          { type:'mcq', q:'Which is an assertive sentence?', options:['Come here.','Where do you live?','He plays cricket.','Wow!'], answer:'He plays cricket.' },
          { type:'mcq', q:'Assertive sentence ends with?', options:['?','!','.',','], answer:'.' },
          { type:'mcq', q:'Which is assertive?', options:['Do not go.','He is a teacher.','Are you a teacher?','What a teacher!'], answer:'He is a teacher.' },
          { type:'mcq', q:'Which is assertive?', options:['Run fast!','How fast he runs!','He runs fast.','Does he run fast?'], answer:'He runs fast.' },
          { type:'mcq', q:'Structure of assertive?', options:['S+V+O+?','S+V+O+!','S+V+O+.','V+S+O+?'], answer:'S+V+O+.' }
        ],
        hard: [
          { hindi:'मैं एक छात्र हूँ।', english:'I am a student.', words:['am','I','student','a','is','are','we','he'] },
          { hindi:'वह दिल्ली में रहती है।', english:'She lives in Delhi.', words:['lives','She','Delhi','in','live','living','they','at'] },
          { hindi:'सूरज पूर्व में उगता है।', english:'The sun rises in the east.', words:['rises','The','sun','east','in','the','rise','west'] },
          { hindi:'राम सेब खाता है।', english:'Ram eats an apple.', words:['eats','Ram','apple','an','eat','a','she','banana'] },
          { hindi:'मैं शिक्षक नहीं हूँ।', english:'I am not a teacher.', words:['am','I','not','teacher','a','is','are','doctor'] },
          { hindi:'वह मुंबई में नहीं रहती।', english:'She does not live in Mumbai.', words:['does','She','not','live','Mumbai','in','do','Delhi'] },
          { hindi:'वे क्रिकेट खेलते हैं।', english:'They play cricket.', words:['play','They','cricket','plays','We','football','He','is'] }
        ],
        advance: [
          { english:'I am a student.', hindi:'मैं एक छात्र हूँ।', words:['मैं','एक','छात्र','हूँ','वह','है','हम','लड़का'] },
          { english:'She lives in Delhi.', hindi:'वह दिल्ली में रहती है।', words:['वह','दिल्ली','में','रहती','है','रहता','मैं','को'] },
          { english:'The sun rises in the east.', hindi:'सूरज पूर्व में उगता है।', words:['सूरज','पूर्व','में','उगता','है','पश्चिम','चाँद','और'] },
          { english:'Ram eats an apple.', hindi:'राम सेब खाता है।', words:['राम','सेब','खाता','है','केला','खाती','वह','और'] },
          { english:'I am not a teacher.', hindi:'मैं शिक्षक नहीं हूँ।', words:['मैं','शिक्षक','नहीं','हूँ','है','वह','छात्र','अच्छा'] },
          { english:'They play cricket.', hindi:'वे क्रिकेट खेलते हैं।', words:['वे','क्रिकेट','खेलते','हैं','हम','फुटबॉल','खेलता','और'] },
          { english:'Water is cold.', hindi:'पानी ठंडा है।', words:['पानी','ठंडा','है','गर्म','वह','और','चाय','भी'] }
        ]
      }
    },

    {
      id: 'interrogative',
      title: 'Interrogative Sentence',
      hi: 'Question — सवाल पूछने वाला वाक्य',
      use: 'जब आप किसी से कुछ पूछना चाहते हो, जानकारी चाहते हो, confirm करना चाहते हो, या किसी की राय जानना चाहते हो — तब Interrogative sentence use होता है।',
      definition: 'वह sentence जो कुछ पूछता है या जानकारी माँगता है। इसमें speaker कुछ जानना चाहता है — यह एक question है। इसका अंत हमेशा प्रश्नवाचक चिह्न (?) से होता है। 2 तरीके: Yes/No questions और WH-questions।',
      rule: 'Helping Verb + Subject + Main Verb + Object + ? (Question Mark)',
      ruleExplain: 'Helping Verb = is/am/are/do/does/did/will/can आदि | Subject = कर्ता | Main Verb = मुख्य क्रिया | अंत में ? लगाया जाता है।',
      rules: 'Rule: Helping Verb + Subject + Main Verb + Object + ?\n\nYes/No: Helping Verb + Subject + Main Verb + Object + ?\nWH-Question: WH + Helping Verb + Subject + Main Verb + ?\nNegative Question: Helping Verb + not + Subject + Main Verb + ?\nWH+Negative: WH + Helping Verb + not + Subject + ?',
      structure: [
        { type:'Yes/No Question',   formula:'Helping Verb + Subject + Main Verb + Object + ?', example:'Are you happy?', exampleExplain:'Are = Helping Verb, you = Subject' },
        { type:'WH-Question',       formula:'WH + Helping Verb + Subject + Main Verb + ?',     example:'Where do you live?', exampleExplain:'Where = WH-word, do = Helping' },
        { type:'Negative Question', formula:'Helping Verb + not + Subject + Main Verb + ?',    example:'Are you not happy?', exampleExplain:'not = नकारात्मक' },
        { type:'WH + Negative',     formula:'WH + Helping Verb + not + Subject + ?',           example:'Why are you not coming?', exampleExplain:'Why + are + not' }
      ],
      s: { simple:'What is your name?', neg:'Are you not happy?', wh:'Why are you late?' },
      examples: {
        simple: [
          { en:'What is your name?', hi:'तुम्हारा नाम क्या है?', note:'What = WH-word' },
          { en:'Where do you live?', hi:'तुम कहाँ रहते हो?', note:'Where = WH-word' },
          { en:'Are you happy?', hi:'क्या तुम खुश हो?', note:'Yes/No question' }
        ],
        negative: [
          { en:'Are you not happy?', hi:'क्या तुम खुश नहीं हो?', note:'not के साथ' },
          { en:'Does she not sing?', hi:'क्या वह नहीं गाती?', note:'does not' },
          { en:'Will he not come?', hi:'क्या वह नहीं आएगा?', note:'will not' }
        ],
        wh: [
          { en:'Why are you late?', hi:'तुम देर से क्यों आए?', note:'Why = कारण' },
          { en:'How do you do this?', hi:'तुम यह कैसे करते हो?', note:'How = तरीका' },
          { en:'When will you come?', hi:'तुम कब आओगे?', note:'When = समय' }
        ]
      },
      practice: {
        basic: [
          { type:'mcq', q:'Which is interrogative?', options:['I am fine.','How are you?','Sit down.','Wow!'], answer:'How are you?' },
          { type:'mcq', q:'Which is interrogative?', options:['Where is my pen?','This is my pen.','Give me pen.','Nice pen!'], answer:'Where is my pen?' },
          { type:'mcq', q:'Which is interrogative?', options:['I love tea.','Do you love tea?','Love tea!','Tea is good.'], answer:'Do you love tea?' },
          { type:'mcq', q:'Interrogative ends with?', options:['.','!','?',','], answer:'?' },
          { type:'mcq', q:'Structure of interrogative?', options:['S+V+O.','HV+S+MV+?','V+S+O.','S+HV+V?'], answer:'HV+S+MV+?' },
          { type:'mcq', q:'Which is interrogative?', options:['Water is cold.','Is water cold?','Drink water!','How cold!'], answer:'Is water cold?' },
          { type:'mcq', q:'Which is interrogative?', options:['Will you come?','I will come.','Come here!','How nice!'], answer:'Will you come?' }
        ],
        hard: [
          { hindi:'तुम्हारा नाम क्या है?', english:'What is your name?', words:['is','What','name','your','are','who','my','how'] },
          { hindi:'तुम कहाँ रहते हो?', english:'Where do you live?', words:['do','Where','you','live','does','are','I','when'] },
          { hindi:'क्या तुम खुश हो?', english:'Are you happy?', words:['Are','you','happy','Is','am','sad','we','I'] },
          { hindi:'क्या तुम तैर सकते हो?', english:'Can you swim?', words:['Can','you','swim','Could','I','run','we','are'] },
          { hindi:'वह कहाँ रहती है?', english:'Where does she live?', words:['does','Where','she','live','do','he','lives','when'] },
          { hindi:'तुम कब आओगे?', english:'When will you come?', words:['will','When','you','come','shall','go','I','where'] },
          { hindi:'यह क्या है?', english:'What is this?', words:['is','What','this','are','that','who','it','when'] }
        ],
        advance: [
          { english:'What is your name?', hindi:'तुम्हारा नाम क्या है?', words:['तुम्हारा','नाम','क्या','है','कौन','मेरा','और','वह'] },
          { english:'Where do you live?', hindi:'तुम कहाँ रहते हो?', words:['तुम','कहाँ','रहते','हो','मैं','कब','और','वह'] },
          { english:'Are you happy?', hindi:'क्या तुम खुश हो?', words:['क्या','तुम','खुश','हो','वह','उदास','हम','और'] },
          { english:'Can you swim?', hindi:'क्या तुम तैर सकते हो?', words:['क्या','तुम','तैर','सकते','हो','मैं','दौड़','और'] },
          { english:'Where does she live?', hindi:'वह कहाँ रहती है?', words:['वह','कहाँ','रहती','है','रहता','मैं','और','को'] },
          { english:'When will you come?', hindi:'तुम कब आओगे?', words:['तुम','कब','आओगे','जाओगे','मैं','और','वह','होगे'] },
          { english:'What is this?', hindi:'यह क्या है?', words:['यह','क्या','है','वह','और','कौन','हम','था'] }
        ]
      }
    },

    {
      id: 'imperative',
      title: 'Imperative Sentence',
      hi: 'Command / Request / Advice',
      use: 'जब आप किसी को आदेश देना चाहते हो (Close the door), निवेदन करना चाहते हो (Please help me), सलाह देना चाहते हो (Always speak truth), या मना करना चाहते हो (Do not smoke) — तब Imperative use होता है।',
      definition: 'वह sentence जो आदेश (command), निवेदन (request), सलाह (advice), या मना (prohibition) करता है। इसमें subject (You) छिपा होता है — लिखा नहीं जाता, लेकिन समझा जाता है।',
      rule: 'Verb (base form) + Object + . — Subject (You) hidden रहता है',
      ruleExplain: 'Sentence की शुरुआत सीधे Verb से होती है। Subject (You) लिखा नहीं जाता। जैसे: "Close the door" = (You) close the door.',
      rules: 'Rule: Verb (base form) + Object + .\n\nCommand: Verb + Object + .\nRequest: Please + Verb + Object + .\nAdvice: Always / Never + Verb + Object + .\nProhibition: Do not + Verb + Object + .',
      structure: [
        { type:'Command (आदेश)',   formula:'Verb + Object + .',                   example:'Close the door.', exampleExplain:'Close = Verb, (You) hidden' },
        { type:'Request (निवेदन)',  formula:'Please + Verb + Object + .',         example:'Please help me.', exampleExplain:'Please = विनम्रता' },
        { type:'Advice (सलाह)',     formula:'Always / Never + Verb + Object + .', example:'Always speak the truth.', exampleExplain:'Always = हमेशा' },
        { type:'Prohibition (मना)', formula:'Do not + Verb + Object + .',         example:'Do not smoke here.', exampleExplain:'Do not = मना करना' }
      ],
      s: { simple:'Close the door.', neg:'Do not smoke here.', wh:'Please tell me what to do.' },
      examples: {
        simple: [
          { en:'Close the door.', hi:'दरवाज़ा बंद करो।', note:'Close = Verb, (You) hidden' },
          { en:'Please help me.', hi:'कृपया मेरी मदद करो।', note:'Please = विनम्रता' },
          { en:'Always speak the truth.', hi:'हमेशा सच बोलो।', note:'Always = हमेशा' }
        ],
        negative: [
          { en:'Do not close the door.', hi:'दरवाज़ा बंद मत करो।', note:'Do not = मना' },
          { en:'Do not smoke here.', hi:'यहाँ धूम्रपान न करें।', note:'Do not = मना' },
          { en:'Never tell a lie.', hi:'कभी झूठ मत बोलो।', note:'Never = कभी नहीं' }
        ],
        wh: [
          { en:'Please tell me what to do.', hi:'कृपया बताओ क्या करना है।', note:'Please + tell + what' },
          { en:'Tell me where to go.', hi:'बताओ कहाँ जाना है।', note:'Tell + where' },
          { en:'Show me how to do it.', hi:'दिखाओ यह कैसे करना है।', note:'Show + how' }
        ]
      },
      practice: {
        basic: [
          { type:'mcq', q:'Which is imperative?', options:['I am here.','Come here.','Are you here?','Wow, here!'], answer:'Come here.' },
          { type:'mcq', q:'Which is imperative?', options:['She sings.','Please sing a song.','Does she sing?','What a song!'], answer:'Please sing a song.' },
          { type:'mcq', q:'Which is imperative?', options:['Sit down.','He sits.','Is he sitting?','How he sits!'], answer:'Sit down.' },
          { type:'mcq', q:'Imperative ka subject?', options:['I','You (hidden)','He','No subject'], answer:'You (hidden)' },
          { type:'mcq', q:'Structure of imperative?', options:['S+V+O.','V+O+.','HV+S+V?','S+HV+V!'], answer:'V+O+.' },
          { type:'mcq', q:'Which is imperative?', options:['Do not go.','I do not go.','Did you go?','How nice!'], answer:'Do not go.' },
          { type:'mcq', q:'Which is imperative?', options:['Open the window.','The window is open.','Is the window open?','What a window!'], answer:'Open the window.' }
        ],
        hard: [
          { hindi:'दरवाज़ा बंद करो।', english:'Close the door.', words:['Close','the','door','open','a','window','shut','this'] },
          { hindi:'कृपया मेरी मदद करो।', english:'Please help me.', words:['Please','help','me','him','you','us','kindly','want'] },
          { hindi:'हमेशा सच बोलो।', english:'Always speak the truth.', words:['Always','speak','the','truth','never','lie','tell','a'] },
          { hindi:'यहाँ धूम्रपान न करें।', english:'Do not smoke here.', words:['Do','not','smoke','here','there','does','smoking','please'] },
          { hindi:'सीधे बैठो।', english:'Sit straight.', words:['Sit','straight','down','stand','up','you','is'] },
          { hindi:'मेहनत करो।', english:'Work hard.', words:['Work','hard','study','smart','you','do','is'] },
          { hindi:'मुझे पानी दो।', english:'Give me water.', words:['Give','me','water','bring','tea','you','is'] }
        ],
        advance: [
          { english:'Close the door.', hindi:'दरवाज़ा बंद करो।', words:['दरवाज़ा','बंद','करो','खोलो','और','वह','इसे','था'] },
          { english:'Please help me.', hindi:'कृपया मेरी मदद करो।', words:['कृपया','मेरी','मदद','करो','उसकी','और','वह','था'] },
          { english:'Always speak the truth.', hindi:'हमेशा सच बोलो।', words:['हमेशा','सच','बोलो','कभी','झूठ','और','वह','था'] },
          { english:'Do not smoke here.', hindi:'यहाँ धूम्रपान न करें।', words:['यहाँ','धूम्रपान','न','करें','वहाँ','और','था','इसे'] },
          { english:'Sit down.', hindi:'बैठ जाओ।', words:['बैठ','जाओ','खड़े','हो','वह','और','था','इसे'] },
          { english:'Work hard.', hindi:'मेहनत करो।', words:['मेहनत','करो','आलस','और','वह','था','इसे','ना'] },
          { english:'Give me water.', hindi:'मुझे पानी दो।', words:['मुझे','पानी','दो','चाय','और','वह','था','इसे'] }
        ]
      }
    },

    {
      id: 'exclamatory',
      title: 'Exclamatory Sentence',
      hi: 'Strong Feeling — अचानक भावना',
      use: 'जब आप अचानक खुश हों (Wow!), दुखी हों (Alas!), आश्चर्य में हों (What a surprise!), या गुस्से में हों — तब Exclamatory sentence use होता है।',
      definition: 'वह sentence जो अचानक हुई तीव्र भावना (खुशी, दुख, आश्चर्य, क्रोध, विस्मय) को प्रकट करता है। इसमें भावना ज़्यादा होती है, सूचना कम। अंत हमेशा Exclamation Mark (!) से होता है।',
      rule: 'What / How / Alas / Wow + ... + ! (Exclamation Mark)',
      ruleExplain: 'What = आश्चर्य या भावना जताने के लिए | How = गुण बताने के लिए | Alas = दुख जताने के लिए | अंत में ! लगाया जाता है।',
      rules: 'Rule: What / How / Alas / Wow + ... + !\n\nWhat + Noun: What + a/an + Adjective + Noun + !\nHow + Adjective: How + Adjective + Subject + Verb + !\nAlas (दुख): Alas! + Subject + Verb + ... + !\nWow (खुशी): Wow! + Subject + Verb + ... + !',
      structure: [
        { type:'What + Noun Phrase', formula:'What + a/an + Adjective + Noun + !', example:'What a beautiful day!', exampleExplain:'What + a + beautiful + day' },
        { type:'How + Adjective',    formula:'How + Adjective + Subject + Verb + !', example:'How nice she is!', exampleExplain:'How + nice + she + is' },
        { type:'Alas (दुख)',          formula:'Alas! + Subject + Verb + ... + !',     example:'Alas! I lost my wallet.', exampleExplain:'Alas = दुख का भाव' },
        { type:'Wow (खुशी)',          formula:'Wow! + Subject + Verb + ... + !',      example:'Wow! That is amazing!', exampleExplain:'Wow = खुशी का भाव' }
      ],
      s: { simple:'What a beautiful day!', neg:'What a pity! He did not come.', wh:'How beautiful the sunset is!' },
      examples: {
        simple: [
          { en:'What a beautiful day!', hi:'क्या सुंदर दिन है!', note:'What + a + beautiful + day' },
          { en:'How nice she is!', hi:'वह कितनी अच्छी है!', note:'How + nice + she + is' },
          { en:'Wow! That is amazing!', hi:'वाह! यह अद्भुत है!', note:'Wow = खुशी' }
        ],
        negative: [
          { en:'What a pity! He did not come.', hi:'क्या अफसोस! वह नहीं आया।', note:'What a pity = दुख' },
          { en:'Alas! She cannot walk.', hi:'हाय! वह चल नहीं सकती।', note:'Alas = दुख' },
          { en:'How sad! He is not happy.', hi:'कितना दुखद! वह खुश नहीं है।', note:'How sad = दुख' }
        ],
        wh: [
          { en:'How beautiful the sunset is!', hi:'सूर्यास्त कितना सुंदर है!', note:'How + beautiful' },
          { en:'What a wonderful performance!', hi:'क्या शानदार प्रदर्शन!', note:'What + a + wonderful' },
          { en:'How fast he runs!', hi:'वह कितनी तेज़ दौड़ता है!', note:'How + fast' }
        ]
      },
      practice: {
        basic: [
          { type:'mcq', q:'Which is exclamatory?', options:['I am happy.','Am I happy?','Be happy.','What a happy day!'], answer:'What a happy day!' },
          { type:'mcq', q:'Which is exclamatory?', options:['How beautiful!','She is beautiful.','Is she beautiful?','Be beautiful.'], answer:'How beautiful!' },
          { type:'mcq', q:'Which is exclamatory?', options:['I am tired.','Alas! I am tired.','Am I tired?','Do not be tired.'], answer:'Alas! I am tired.' },
          { type:'mcq', q:'Exclamatory ends with?', options:['.','?','!',','], answer:'!' },
          { type:'mcq', q:'Structure of exclamatory?', options:['S+V+O.','S+V+O?','What/How + ...!','V+O.'], answer:'What/How + ...!' },
          { type:'mcq', q:'Which is exclamatory?', options:['What a surprise!','I am surprised.','Are you surprised?','Surprise me.'], answer:'What a surprise!' },
          { type:'mcq', q:'Which is exclamatory?', options:['Alas! He failed.','He failed.','Did he fail?','Do not fail.'], answer:'Alas! He failed.' }
        ],
        hard: [
          { hindi:'क्या सुंदर दिन है!', english:'What a beautiful day!', words:['What','a','beautiful','day','How','nice','is','the'] },
          { hindi:'वह कितनी अच्छी है!', english:'How nice she is!', words:['How','nice','she','is','What','a','girl','good'] },
          { hindi:'वाह! यह अद्भुत है!', english:'Wow! That is amazing!', words:['Wow','That','is','amazing','Alas','It','was','good'] },
          { hindi:'हाय! मेरा बटुआ खो गया।', english:'Alas! I lost my wallet.', words:['Alas','I','lost','my','wallet','Wow','found','money'] },
          { hindi:'क्या शानदार विचार!', english:'What a brilliant idea!', words:['What','a','brilliant','idea','How','good','is','this'] },
          { hindi:'वह कितनी तेज़ दौड़ता है!', english:'How fast he runs!', words:['How','fast','he','runs','What','slow','she','walks'] },
          { hindi:'क्या अफसोस!', english:'What a pity!', words:['What','a','pity','How','sad','is','this'] }
        ],
        advance: [
          { english:'What a beautiful day!', hindi:'क्या सुंदर दिन है!', words:['क्या','सुंदर','दिन','है','रात','और','वह','था'] },
          { english:'How nice she is!', hindi:'वह कितनी अच्छी है!', words:['वह','कितनी','अच्छी','है','बुरी','और','था','यह'] },
          { english:'Wow! That is amazing!', hindi:'वाह! यह अद्भुत है!', words:['वाह','यह','अद्भुत','है','हाय','और','था','वह'] },
          { english:'Alas! I lost my wallet.', hindi:'हाय! मेरा बटुआ खो गया।', words:['हाय','मेरा','बटुआ','खो','गया','वाह','और','था'] },
          { english:'What a brilliant idea!', hindi:'क्या शानदार विचार!', words:['क्या','शानदार','विचार','है','बुरा','और','था','यह'] },
          { english:'How fast he runs!', hindi:'वह कितनी तेज़ दौड़ता है!', words:['वह','कितनी','तेज़','दौड़ता','है','धीमा','और','था'] },
          { english:'What a pity!', hindi:'क्या अफसोस!', words:['क्या','अफसोस','है','खुशी','और','था','यह'] }
        ]
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // CLAUSES  (5 entries — Independent, Dependent + 3 sub-types)
  // ═══════════════════════════════════════════════════════════
  clauses: [
    {
      id: 'independent',
      title: 'Independent Clause',
      hi: 'वह clause जो अपने आप में पूरा sentence बन सके',
      use: 'Independent clause अकेले sentence बन सकता है — इसलिए इसे Simple Sentence भी कहा जाता है। Compound और Complex sentences में भी independent clause होता है।',
      definition: 'वह clause जो अपने आप में पूर्ण वाक्य बन सके — इसका अपना subject और verb हो, और अर्थ पूरा हो। इसे Main Clause भी कहते हैं।',
      rule: 'Subject + Verb + Object — complete meaning के साथ',
      ruleExplain: 'Subject = कर्ता | Verb = क्रिया | Object = कर्म — तीनों मिलकर पूरा अर्थ देते हैं।',
      rules: 'Rule: Subject + Verb + Object\n\nSimple: Subject + Verb + Object\nWith Adjective: Subject + Verb + Adjective\nWith Adverb: Subject + Verb + Adverb\nComplete Complex: Independent + Conjunction + Dependent',
      structure: [
        { type:'Simple',           formula:'Subject + Verb + Object',              example:'I love India.', exampleExplain:'I + love + India' },
        { type:'With Adjective',   formula:'Subject + Verb + Adjective',           example:'She is beautiful.', exampleExplain:'She + is + beautiful' },
        { type:'With Adverb',      formula:'Subject + Verb + Adverb',              example:'He runs fast.', exampleExplain:'He + runs + fast' },
        { type:'Complete Complex', formula:'Independent + Conjunction + Dependent', example:'I went home because I was tired.', exampleExplain:'"I went home" = independent' }
      ],
      s: { simple:'I love India.', neg:'I do not love junk food.', wh:'I know what you want.' },
      examples: {
        simple: [
          { en:'I love India.', hi:'मुझे भारत से प्यार है।', note:'I + love + India' },
          { en:'She sings well.', hi:'वह अच्छा गाती है।', note:'She + sings + well' },
          { en:'The sun rises in the east.', hi:'सूरज पूर्व में उगता है।', note:'The sun + rises' }
        ],
        negative: [
          { en:'I do not love junk food.', hi:'मुझे जंक फूड पसंद नहीं।', note:'do not = नकारात्मक' },
          { en:'She does not sing badly.', hi:'वह बुरा नहीं गाती।', note:'does not = नकारात्मक' },
          { en:'Ram does not eat meat.', hi:'राम मांस नहीं खाता।', note:'does not' }
        ],
        wh: [
          { en:'I know what you want.', hi:'मैं जानता हूँ तुम क्या चाहते हो।', note:'"I know" = independent' },
          { en:'Tell me where he lives.', hi:'बताओ वह कहाँ रहता है।', note:'"Tell me" = independent' },
          { en:'Ask him what he needs.', hi:'उससे पूछो उसे क्या चाहिए।', note:'"Ask him" = independent' }
        ]
      },
      practice: {
        basic: [
          { type:'mcq', q:'Which is an independent clause?', options:['Because I was tired','I went to bed','When he came','If it rains'], answer:'I went to bed' },
          { type:'mcq', q:'Which is an independent clause?', options:['Although she tried','She failed','Since morning','While walking'], answer:'She failed' },
          { type:'mcq', q:'Which is an independent clause?', options:['I love tea','Because I love tea','When I love tea','If I love tea'], answer:'I love tea' },
          { type:'mcq', q:'Independent clause ka doosra naam?', options:['Sub clause','Main clause','Dependent clause','Phrase'], answer:'Main clause' },
          { type:'mcq', q:'Which is independent?', options:['If you study','You will pass','When you study','Because you study'], answer:'You will pass' },
          { type:'mcq', q:'Which is independent?', options:['He came late','Though he came late','If he came late','When he came late'], answer:'He came late' },
          { type:'mcq', q:'Which is independent?', options:['It is raining','If it is raining','When it is raining','Because it is raining'], answer:'It is raining' }
        ],
        hard: [
          { hindi:'मुझे भारत से प्यार है।', english:'I love India.', words:['love','I','India','hate','like','we','you','and'] },
          { hindi:'वह अच्छा गाती है।', english:'She sings well.', words:['sings','She','well','sing','He','is','and','badly'] },
          { hindi:'सूरज पूर्व में उगता है।', english:'The sun rises in the east.', words:['rises','The','sun','east','in','the','set','west'] },
          { hindi:'मैं घर गया।', english:'I went home.', words:['went','I','home','go','she','school','is','and'] },
          { hindi:'वह सुंदर है।', english:'She is beautiful.', words:['is','She','beautiful','are','He','ugly','and','was'] },
          { hindi:'वह तेज़ दौड़ता है।', english:'He runs fast.', words:['runs','He','fast','run','She','slow','is','and'] },
          { hindi:'मैं खुश हूँ।', english:'I am happy.', words:['am','I','happy','is','She','sad','and','are'] }
        ],
        advance: [
          { english:'I love India.', hindi:'मुझे भारत से प्यार है।', words:['मुझे','भारत','से','प्यार','है','नफरत','और','था'] },
          { english:'She sings well.', hindi:'वह अच्छा गाती है।', words:['वह','अच्छा','गाती','है','बुरा','और','था','यह'] },
          { english:'The sun rises in the east.', hindi:'सूरज पूर्व में उगता है।', words:['सूरज','पूर्व','में','उगता','है','पश्चिम','और','था'] },
          { english:'I went home.', hindi:'मैं घर गया।', words:['मैं','घर','गया','स्कूल','और','था','यह','वह'] },
          { english:'She is beautiful.', hindi:'वह सुंदर है।', words:['वह','सुंदर','है','बदसूरत','और','था','यह','मैं'] },
          { english:'He runs fast.', hindi:'वह तेज़ दौड़ता है।', words:['वह','तेज़','दौड़ता','है','धीमा','और','था','यह'] },
          { english:'I am happy.', hindi:'मैं खुश हूँ।', words:['मैं','खुश','हूँ','उदास','और','था','यह','वह'] }
        ]
      }
    },

    {
      id: 'dependent',
      title: 'Dependent Clause',
      hi: 'वह clause जो अकेले पूरा sentence नहीं बन सकता',
      use: 'जब आप दो ideas को जोड़ना चाहते हो, किसी कारण (because), समय (when), शर्त (if), या विरोध (although) को व्यक्त करना चाहते हो — तब dependent clause use होता है।',
      definition: 'वह clause जो अकेले पूरा अर्थ नहीं देता — इसके लिए एक independent clause की ज़रूरत होती है। इसे Subordinate Clause भी कहते हैं।',
      rule: 'Subordinating Conjunction (because, if, when, although...) + Subject + Verb',
      ruleExplain: 'Subordinating Conjunction = because, if, when, although, since, until | Subject + Verb | अकेले बोलने पर अधूरा लगता है।',
      rules: 'Rule: Subordinating Conjunction + Subject + Verb\n\nCause: Because + Subject + Verb\nTime: When + Subject + Verb\nCondition: If + Subject + Verb\nContrast: Although + Subject + Verb',
      structure: [
        { type:'Cause (कारण)',     formula:'Because + Subject + Verb',  example:'Because I was tired...', exampleExplain:'Because = कारण' },
        { type:'Time (समय)',        formula:'When + Subject + Verb',     example:'When he came...', exampleExplain:'When = समय' },
        { type:'Condition (शर्त)', formula:'If + Subject + Verb',        example:'If it rains...', exampleExplain:'If = शर्त' },
        { type:'Contrast (विरोध)', formula:'Although + Subject + Verb',  example:'Although she tried...', exampleExplain:'Although = विरोध' }
      ],
      s: { simple:'Because I was tired...', neg:'Because I was not ready...', wh:'What I said was true.' },
      examples: {
        simple: [
          { en:'Because I was tired...', hi:'क्योंकि मैं थका था...', note:'Because = कारण' },
          { en:'When he came...', hi:'जब वह आया...', note:'When = समय' },
          { en:'If it rains...', hi:'अगर बारिश हो...', note:'If = शर्त' }
        ],
        negative: [
          { en:'Because I was not ready...', hi:'क्योंकि मैं तैयार नहीं था...', note:'not = नकारात्मक' },
          { en:'If you do not study...', hi:'अगर तुम पढ़ोगे नहीं...', note:'do not = नकारात्मक' },
          { en:'Although he is not rich...', hi:'हालांकि वह अमीर नहीं है...', note:'is not' }
        ],
        wh: [
          { en:'What I said was true.', hi:'जो मैंने कहा सच था।', note:'"What I said" = dependent' },
          { en:'Wherever you go, I will follow.', hi:'जहाँ भी तुम जाओगे, मैं आऊँगा।', note:'Wherever' },
          { en:'Whatever you do, do well.', hi:'जो भी करो, अच्छा करो।', note:'Whatever' }
        ]
      },
      practice: {
        basic: [
          { type:'mcq', q:'Which is a dependent clause?', options:['I am fine','Because I am fine','She sings','He runs'], answer:'Because I am fine' },
          { type:'mcq', q:'Which is a dependent clause?', options:['When I was young','I was young','She was there','We played'], answer:'When I was young' },
          { type:'mcq', q:'Which is a dependent clause?', options:['If you study','You study','Study hard','I study'], answer:'If you study' },
          { type:'mcq', q:'Dependent clause ka doosra naam?', options:['Main clause','Subordinate clause','Phrase','Sentence'], answer:'Subordinate clause' },
          { type:'mcq', q:'Which is dependent?', options:['I love you','Because I love you','You love me','We love'], answer:'Because I love you' },
          { type:'mcq', q:'Which is dependent?', options:['If I had money','I have money','Money is useful','Give me money'], answer:'If I had money' },
          { type:'mcq', q:'Which is dependent?', options:['Until you come','You come here','Come here','Welcome here'], answer:'Until you come' }
        ],
        hard: [
          { hindi:'क्योंकि मैं थका था...', english:'Because I was tired...', words:['Because','I','was','tired','When','am','happy','and'] },
          { hindi:'जब वह आया...', english:'When he came...', words:['When','he','came','Because','she','goes','and','was'] },
          { hindi:'अगर बारिश हो...', english:'If it rains...', words:['If','it','rains','When','she','comes','and','was'] },
          { hindi:'हालांकि उसने कोशिश की...', english:'Although she tried...', words:['Although','she','tried','Because','he','went','and','was'] },
          { hindi:'जब वह नहीं आएगी...', english:'When she does not come...', words:['When','she','does','not','come','Because','he','goes'] },
          { hindi:'अगर तुम पढ़ोगे नहीं...', english:'If you do not study...', words:['If','you','do','not','study','When','she','goes'] },
          { hindi:'हालांकि वह अमीर नहीं है...', english:'Although he is not rich...', words:['Although','he','is','not','rich','Because','she','was'] }
        ],
        advance: [
          { english:'Because I was tired...', hindi:'क्योंकि मैं थका था...', words:['क्योंकि','मैं','थका','था','जब','वह','और','है'] },
          { english:'When he came...', hindi:'जब वह आया...', words:['जब','वह','आया','क्योंकि','मैं','और','था','यह'] },
          { english:'If it rains...', hindi:'अगर बारिश हो...', words:['अगर','बारिश','हो','जब','वह','और','था','यह'] },
          { english:'Although she tried...', hindi:'हालांकि उसने कोशिश की...', words:['हालांकि','उसने','कोशिश','की','क्योंकि','और','था','यह'] },
          { english:'When she does not come...', hindi:'जब वह नहीं आएगी...', words:['जब','वह','नहीं','आएगी','क्योंकि','और','था','यह'] },
          { english:'If you do not study...', hindi:'अगर तुम पढ़ोगे नहीं...', words:['अगर','तुम','पढ़ोगे','नहीं','जब','और','था','यह'] },
          { english:'Although he is not rich...', hindi:'हालांकि वह अमीर नहीं है...', words:['हालांकि','वह','अमीर','नहीं','है','क्योंकि','और','था'] }
        ]
      }
    },

    {
      id: 'noun-clause',
      title: 'Noun Clause',
      hi: 'संज्ञा उपवाक्य (Dependent का प्रकार)',
      use: 'जब dependent clause वाक्य में संज्ञा का काम करता है — subject या object की तरह। जैसे: "What he said is true" में "What he said" noun clause है।',
      definition: 'Dependent clause जो वाक्य में noun की तरह काम करता है।',
      rule: 'Acts as a noun (subject/object)',
      ruleExplain: 'Starts with: that, what, whether, if, who, etc. | Example: I know what he wants. | Example: What he said is true.',
      rules: 'Rule: Acts as a noun (subject/object)\n\nStarts with: that, what, whether, if, who, etc.\nExample: I know what he wants.\nExample: What he said is true.',
      structure: [
        { type:'As Subject', formula:'Noun Clause + Verb + ...', example:'What he said is true.', exampleExplain:'"What he said" = subject' },
        { type:'As Object',  formula:'Subject + Verb + Noun Clause', example:'I know what he wants.', exampleExplain:'"what he wants" = object' }
      ],
      s: { simple:'What he said is true.', neg:'What he said is not false.', wh:'What did he say?' },
      examples: {
        simple: [
          { en:'What he said is true.', hi:'जो उसने कहा वह सच है।', note:'"What he said" = subject' },
          { en:'I know what he wants.', hi:'मैं जानता हूँ उसे क्या चाहिए।', note:'"what he wants" = object' },
          { en:'Tell me what you need.', hi:'मुझे बताओ तुम्हें क्या चाहिए।', note:'"what you need" = object' }
        ],
        negative: [
          { en:'What he said is not false.', hi:'जो उसने कहा वह झूठ नहीं है।', note:'is not' },
          { en:'I do not know what he wants.', hi:'मुझे नहीं पता उसे क्या चाहिए।', note:'do not know' },
          { en:'Tell me what you do not need.', hi:'मुझे बताओ तुम्हें क्या नहीं चाहिए।', note:'do not' }
        ],
        wh: [
          { en:'What did he say?', hi:'उसने क्या कहा?', note:'What = WH-word' },
          { en:'Who is your teacher?', hi:'तुम्हारे शिक्षक कौन हैं?', note:'Who = WH-word' },
          { en:'Where does he live?', hi:'वह कहाँ रहता है?', note:'Where = WH-word' }
        ]
      },
      practice: {
        basic: [
          { type:'mcq', q:'Which sentence has a noun clause?', options:['He is a doctor.','I know what he wants.','Sit down.','What a day!'], answer:'I know what he wants.' },
          { type:'mcq', q:'Which sentence has a noun clause?', options:['What he said is true.','He said truth.','Tell truth.','Truth is good.'], answer:'What he said is true.' },
          { type:'mcq', q:'Which sentence has a noun clause?', options:['I will go.','Tell me what you need.','Go now.','What a need!'], answer:'Tell me what you need.' },
          { type:'mcq', q:'Noun clause ka role?', options:['Adjective','Noun','Adverb','Verb'], answer:'Noun' },
          { type:'mcq', q:'Which sentence has a noun clause?', options:['He runs fast.','I know where he lives.','Run fast.','How fast!'], answer:'I know where he lives.' },
          { type:'mcq', q:'Which sentence has a noun clause?', options:['She sings well.','I think that she sings well.','Sing well.','How well!'], answer:'I think that she sings well.' },
          { type:'mcq', q:'Which sentence has a noun clause?', options:['Water is cold.','I feel that water is cold.','Drink water.','How cold!'], answer:'I feel that water is cold.' }
        ],
        hard: [
          { hindi:'जो उसने कहा वह सच है।', english:'What he said is true.', words:['What','he','said','is','true','that','was','and'] },
          { hindi:'मैं जानता हूँ उसे क्या चाहिए।', english:'I know what he wants.', words:['I','know','what','he','wants','that','she','and'] },
          { hindi:'मुझे बताओ तुम्हें क्या चाहिए।', english:'Tell me what you need.', words:['Tell','me','what','you','need','that','she','and'] },
          { hindi:'जो उसने कहा वह झूठ नहीं है।', english:'What he said is not false.', words:['What','he','said','is','not','false','true','and'] },
          { hindi:'मुझे नहीं पता उसे क्या चाहिए।', english:'I do not know what he wants.', words:['I','do','not','know','what','he','wants','that'] },
          { hindi:'उसने क्या कहा?', english:'What did he say?', words:['What','did','he','say','do','does','and','is'] },
          { hindi:'वह कहाँ रहता है?', english:'Where does he live?', words:['Where','does','he','live','do','is','and','I'] }
        ],
        advance: [
          { english:'What he said is true.', hindi:'जो उसने कहा वह सच है।', words:['जो','उसने','कहा','वह','सच','है','और','था'] },
          { english:'I know what he wants.', hindi:'मैं जानता हूँ उसे क्या चाहिए।', words:['मैं','जानता','हूँ','उसे','क्या','चाहिए','और','था'] },
          { english:'Tell me what you need.', hindi:'मुझे बताओ तुम्हें क्या चाहिए।', words:['मुझे','बताओ','तुम्हें','क्या','चाहिए','और','था','यह'] },
          { english:'What he said is not false.', hindi:'जो उसने कहा वह झूठ नहीं है।', words:['जो','उसने','कहा','वह','झूठ','नहीं','है','और'] },
          { english:'I do not know what he wants.', hindi:'मुझे नहीं पता उसे क्या चाहिए।', words:['मुझे','नहीं','पता','उसे','क्या','चाहिए','और','था'] },
          { english:'What did he say?', hindi:'उसने क्या कहा?', words:['उसने','क्या','कहा','और','था','यह','वह','मैं'] },
          { english:'Where does he live?', hindi:'वह कहाँ रहता है?', words:['वह','कहाँ','रहता','है','और','था','यह','मैं'] }
        ]
      }
    },

    {
      id: 'adjective-clause',
      title: 'Adjective Clause',
      hi: 'विशेषण उपवाक्य (Dependent का प्रकार)',
      use: 'जब dependent clause किसी संज्ञा की विशेषता बताता है। जैसे: "The man who came is my uncle" में "who came" adjective clause है।',
      definition: 'Dependent clause जो किसी noun की विशेषता बताता है।',
      rule: 'Acts as an adjective',
      ruleExplain: 'Starts with: who, which, that, whose, whom | Modifies a noun in the main clause.',
      rules: 'Rule: Acts as an adjective\n\nStarts with: who, which, that, whose, whom\nModifies a noun in the main clause.\nExample: The book that I bought is new.',
      structure: [
        { type:'Who (व्यक्ति)',   formula:'Noun + who + Verb + ...',    example:'The man who came is my uncle.', exampleExplain:'"who came" modifies "man"' },
        { type:'Which (वस्तु)',    formula:'Noun + which + Verb + ...',  example:'The book which I bought is new.', exampleExplain:'"which I bought" modifies "book"' },
        { type:'That (व्यक्ति/वस्तु)', formula:'Noun + that + Verb + ...', example:'The car that he drives is red.', exampleExplain:'"that he drives" modifies "car"' }
      ],
      s: { simple:'The man who came is my uncle.', neg:'The man who came is not my uncle.', wh:'Who is the man who came?' },
      examples: {
        simple: [
          { en:'The man who came is my uncle.', hi:'जो आदमी आया वह मेरा चाचा है।', note:'"who came" modifies "man"' },
          { en:'The book that I bought is new.', hi:'जो किताब मैंने खरीदी वह नई है।', note:'"that I bought" modifies "book"' },
          { en:'The girl whose father is a doctor is my friend.', hi:'जिसका पिता डॉक्टर है वह लड़की मेरी दोस्त है।', note:'"whose father is a doctor" modifies "girl"' }
        ],
        negative: [
          { en:'The man who came is not my uncle.', hi:'जो आदमी आया वह मेरा चाचा नहीं है।', note:'is not' },
          { en:'The book that I bought is not new.', hi:'जो किताब मैंने खरीदी वह नई नहीं है।', note:'is not' },
          { en:'The car that he drives is not red.', hi:'जो कार वह चलाता है वह लाल नहीं है।', note:'is not' }
        ],
        wh: [
          { en:'Who is the man who came?', hi:'जो आदमी आया वह कौन है?', note:'Who = WH-word' },
          { en:'Which book did you buy?', hi:'तुमने कौन सी किताब खरीदी?', note:'Which = WH-word' },
          { en:'Whose car is this?', hi:'यह किसकी कार है?', note:'Whose = WH-word' }
        ]
      },
      practice: {
        basic: [
          { type:'mcq', q:'Which sentence has an adjective clause?', options:['The man came.','The man who came is my uncle.','Come here.','Who is he?'], answer:'The man who came is my uncle.' },
          { type:'mcq', q:'Which sentence has an adjective clause?', options:['The book is new.','The book that I bought is new.','Buy a book.','What a book!'], answer:'The book that I bought is new.' },
          { type:'mcq', q:'Adjective clause kis par modify karta hai?', options:['Verb','Noun','Adverb','Pronoun'], answer:'Noun' },
          { type:'mcq', q:'Which sentence has an adjective clause?', options:['She sings.','The girl who sings is my sister.','Sing a song.','How well she sings!'], answer:'The girl who sings is my sister.' },
          { type:'mcq', q:'Adjective clause kaunsa word se shuru hota hai?', options:['because','who','when','if'], answer:'who' },
          { type:'mcq', q:'Which sentence has an adjective clause?', options:['The car is red.','The car which he drives is red.','Drive carefully.','What a car!'], answer:'The car which he drives is red.' },
          { type:'mcq', q:'Which sentence has an adjective clause?', options:['The place is nice.','The place where we went is nice.','Go there.','How nice!'], answer:'The place where we went is nice.' }
        ],
        hard: [
          { hindi:'जो आदमी आया वह मेरा चाचा है।', english:'The man who came is my uncle.', words:['who','came','The','man','is','my','uncle','that'] },
          { hindi:'जो किताब मैंने खरीदी वह नई है।', english:'The book that I bought is new.', words:['that','I','bought','The','book','is','new','which'] },
          { hindi:'जो आदमी आया वह मेरा चाचा नहीं है।', english:'The man who came is not my uncle.', words:['who','came','The','man','is','not','my','uncle'] },
          { hindi:'जो किताब मैंने खरीदी वह नई नहीं है।', english:'The book that I bought is not new.', words:['that','I','bought','The','book','is','not','new'] },
          { hindi:'जो आदमी आया वह कौन है?', english:'Who is the man who came?', words:['Who','is','the','man','who','came','that','was'] },
          { hindi:'तुमने कौन सी किताब खरीदी?', english:'Which book did you buy?', words:['Which','book','did','you','buy','that','and','is'] },
          { hindi:'यह किसकी कार है?', english:'Whose car is this?', words:['Whose','car','is','this','that','and','was','I'] }
        ],
        advance: [
          { english:'The man who came is my uncle.', hindi:'जो आदमी आया वह मेरा चाचा है।', words:['जो','आदमी','आया','वह','मेरा','चाचा','है','और'] },
          { english:'The book that I bought is new.', hindi:'जो किताब मैंने खरीदी वह नई है।', words:['जो','किताब','मैंने','खरीदी','वह','नई','है','और'] },
          { english:'The girl who sings is my sister.', hindi:'जो लड़की गाती है वह मेरी बहन है।', words:['जो','लड़की','गाती','है','वह','मेरी','बहन','और'] },
          { english:'The man who came is not my uncle.', hindi:'जो आदमी आया वह मेरा चाचा नहीं है।', words:['जो','आदमी','आया','वह','मेरा','चाचा','नहीं','है'] },
          { english:'Who is the man who came?', hindi:'जो आदमी आया वह कौन है?', words:['जो','आदमी','आया','वह','कौन','है','और','था'] },
          { english:'Which book did you buy?', hindi:'तुमने कौन सी किताब खरीदी?', words:['तुमने','कौन','सी','किताब','खरीदी','और','था','यह'] },
          { english:'Whose car is this?', hindi:'यह किसकी कार है?', words:['यह','किसकी','कार','है','और','था','वह','मैं'] }
        ]
      }
    },

    {
      id: 'adverbial-clause',
      title: 'Adverbial Clause',
      hi: 'क्रिया-विशेषण उपवाक्य (Dependent का प्रकार)',
      use: 'जब dependent clause समय, स्थान, कारण, या शर्त बताता है। जैसे: "I will call you when I arrive" में "when I arrive" adverbial clause है।',
      definition: 'Dependent clause जो समय, स्थान, कारण, या शर्त बताता है।',
      rule: 'Acts as an adverb',
      ruleExplain: 'Starts with: when, where, because, if, although, etc. | Modifies the main verb.',
      rules: 'Rule: Acts as an adverb\n\nStarts with: when, where, because, if, although, etc.\nModifies the main verb.\nExample: She left because she was tired.',
      structure: [
        { type:'Time (समय)',    formula:'When + Subject + Verb, ...', example:'I will call you when I arrive.', exampleExplain:'"when I arrive" = time' },
        { type:'Cause (कारण)',  formula:'Because + Subject + Verb, ...', example:'She left because she was tired.', exampleExplain:'"because she was tired" = cause' },
        { type:'Condition (शर्त)', formula:'If + Subject + Verb, ...', example:'If it rains, we will stay home.', exampleExplain:'"If it rains" = condition' }
      ],
      s: { simple:'I will call you when I arrive.', neg:'I will not call you when I arrive.', wh:'When will you call me?' },
      examples: {
        simple: [
          { en:'I will call you when I arrive.', hi:'मैं तुम्हें फोन करूँगा जब मैं पहुँचूँगा।', note:'"when I arrive" = time' },
          { en:'She left because she was tired.', hi:'वह चली गई क्योंकि वह थकी थी।', note:'"because she was tired" = cause' },
          { en:'If it rains, we will stay home.', hi:'अगर बारिश होगी, हम घर रहेंगे।', note:'"If it rains" = condition' }
        ],
        negative: [
          { en:'I will not call you when I arrive.', hi:'मैं तुम्हें फोन नहीं करूँगा जब मैं पहुँचूँगा।', note:'will not' },
          { en:'She did not leave because she was tired.', hi:'वह नहीं गई क्योंकि वह थकी थी।', note:'did not' },
          { en:'If it does not rain, we will go out.', hi:'अगर बारिश नहीं होगी, हम बाहर जाएँगे।', note:'does not' }
        ],
        wh: [
          { en:'When will you call me?', hi:'तुम मुझे कब फोन करोगे?', note:'When = WH-word' },
          { en:'Why did she leave?', hi:'वह क्यों गई?', note:'Why = WH-word' },
          { en:'Where will we stay?', hi:'हम कहाँ रहेंगे?', note:'Where = WH-word' }
        ]
      },
      practice: {
        basic: [
          { type:'mcq', q:'Which sentence has an adverbial clause?', options:['I will call.','I will call you when I arrive.','Call me.','When?'], answer:'I will call you when I arrive.' },
          { type:'mcq', q:'Which sentence has an adverbial clause?', options:['She left.','She left because she was tired.','Leave now.','Why left?'], answer:'She left because she was tired.' },
          { type:'mcq', q:'Adverbial clause kis par modify karta hai?', options:['Noun','Main verb','Adjective','Pronoun'], answer:'Main verb' },
          { type:'mcq', q:'Which sentence has an adverbial clause?', options:['It rains.','If it rains, we will stay home.','Rain is good.','What a rain!'], answer:'If it rains, we will stay home.' },
          { type:'mcq', q:'Adverbial clause kaunsa word se shuru hota hai?', options:['who','which','when','whose'], answer:'when' },
          { type:'mcq', q:'Which sentence has an adverbial clause?', options:['I was sleeping.','While I was sleeping, the phone rang.','Sleep well.','How sleepy!'], answer:'While I was sleeping, the phone rang.' },
          { type:'mcq', q:'Which sentence has an adverbial clause?', options:['He went home.','He went home after he finished work.','Go home.','Home is nice.'], answer:'He went home after he finished work.' }
        ],
        hard: [
          { hindi:'मैं तुम्हें फोन करूँगा जब मैं पहुँचूँगा।', english:'I will call you when I arrive.', words:['when','I','arrive','will','call','you','and','that'] },
          { hindi:'वह चली गई क्योंकि वह थकी थी।', english:'She left because she was tired.', words:['because','she','was','tired','She','left','and','that'] },
          { hindi:'अगर बारिश होगी, हम घर रहेंगे।', english:'If it rains, we will stay home.', words:['If','it','rains','we','will','stay','home','and'] },
          { hindi:'मैं तुम्हें फोन नहीं करूँगा जब मैं पहुँचूँगा।', english:'I will not call you when I arrive.', words:['will','not','call','you','when','I','arrive','and'] },
          { hindi:'वह नहीं गई क्योंकि वह थकी थी।', english:'She did not leave because she was tired.', words:['did','not','leave','because','she','was','tired','and'] },
          { hindi:'तुम मुझे कब फोन करोगे?', english:'When will you call me?', words:['When','will','you','call','me','and','that','is'] },
          { hindi:'वह क्यों गई?', english:'Why did she leave?', words:['Why','did','she','leave','and','that','is','was'] }
        ],
        advance: [
          { english:'I will call you when I arrive.', hindi:'मैं तुम्हें फोन करूँगा जब मैं पहुँचूँगा।', words:['मैं','तुम्हें','फोन','करूँगा','जब','मैं','पहुँचूँगा','और'] },
          { english:'She left because she was tired.', hindi:'वह चली गई क्योंकि वह थकी थी।', words:['वह','चली','गई','क्योंकि','वह','थकी','थी','और'] },
          { english:'If it rains, we will stay home.', hindi:'अगर बारिश होगी, हम घर रहेंगे।', words:['अगर','बारिश','होगी','हम','घर','रहेंगे','और','था'] },
          { english:'While I was sleeping, the phone rang.', hindi:'जब मैं सो रहा था, फोन बजा।', words:['जब','मैं','सो','रहा','था','फोन','बजा','और'] },
          { english:'I will not call you when I arrive.', hindi:'मैं तुम्हें फोन नहीं करूँगा जब मैं पहुँचूँगा।', words:['मैं','तुम्हें','फोन','नहीं','करूँगा','जब','मैं','पहुँचूँगा'] },
          { english:'When will you call me?', hindi:'तुम मुझे कब फोन करोगे?', words:['तुम','मुझे','कब','फोन','करोगे','और','था','यह'] },
          { english:'Why did she leave?', hindi:'वह क्यों गई?', words:['वह','क्यों','गई','और','था','यह','मैं','है'] }
        ]
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // TENSE GROUPS (3 groups × 4 types)
  // ═══════════════════════════════════════════════════════════
  tenseGroups: {
    present: {
      title: 'Present Tense',
      types: [
        {
          id:'p-simple', title:'Present Simple / Indefinite', hi:'आदत, सच या नियमित काम',
          use:'Daily routine, habits, universal truths, fixed schedules, feelings — जब काम रोज़ होता है, आदत है, या सच्चाई हो।',
          definition:'Present Simple Tense वह tense है जो बताता है कि कोई काम हमेशा होता है, रोज़ होता है, या एक सच्चाई है।',
          rule:'Subject + V1 (या V5) + Object',
          ruleExplain:'V1 = base form (eat, go) | V5 = +s/es (eats, goes) — He/She/It के साथ | I/We/You/They → V1',
          rules:'Rule: Subject + V1 (या V5) + Object\n\nSimple: Subject + V1/V5 + Object\nNegative: Subject + do/does + not + V1 + Object\nInterrogative: Do/Does + Subject + V1 + Object?\nWH: WH + do/does + Subject + V1 + ?',
          structure:[
            { type:'Simple', formula:'Subject + V1/V5 + Object', example:'I eat rice.', exampleExplain:'I + eat (V1)' },
            { type:'Negative', formula:'Subject + do/does + not + V1 + Object', example:'I do not eat meat.', exampleExplain:'do not + eat' },
            { type:'Interrogative', formula:'Do/Does + Subject + V1 + Object?', example:'Do you eat rice?', exampleExplain:'Do + you + eat' },
            { type:'WH-Question', formula:'WH + do/does + Subject + V1 + ?', example:'What do you eat?', exampleExplain:'What + do + you + eat' }
          ],
          s:{ simple:'I eat rice every day.', neg:'I do not eat meat.', wh:'What do you eat?' },
          examples:{
            simple:[
              { en:'I eat rice every day.', hi:'मैं रोज़ चावल खाता हूँ।', note:'I + eat (V1)' },
              { en:'She goes to school.', hi:'वह स्कूल जाती है।', note:'She + goes (V5)' },
              { en:'The sun rises in the east.', hi:'सूरज पूर्व में उगता है।', note:'Universal truth' }
            ],
            negative:[
              { en:'I do not eat meat.', hi:'मैं मांस नहीं खाता।', note:'do not + eat' },
              { en:'She does not go to office.', hi:'वह ऑफिस नहीं जाती।', note:'does not + go' },
              { en:'They do not play cricket.', hi:'वे क्रिकेट नहीं खेलते।', note:'do not + play' }
            ],
            wh:[
              { en:'What do you eat?', hi:'तुम क्या खाते हो?', note:'What + do + you + eat' },
              { en:'Where does she go?', hi:'वह कहाँ जाती है?', note:'Where + does + she + go' },
              { en:'When does the sun rise?', hi:'सूरज कब उगता है?', note:'When + does + sun + rise' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ rice every day.', options:['eat','eats','eating','ate'], answer:'eat' },
              { type:'mcq', q:'She ___ to school.', options:['go','goes','going','went'], answer:'goes' },
              { type:'mcq', q:'He ___ not like tea.', options:['do','does','is','are'], answer:'does' },
              { type:'mcq', q:'___ you play cricket?', options:['Do','Does','Is','Are'], answer:'Do' },
              { type:'mcq', q:'The sun ___ in the east.', options:['rise','rises','rising','rose'], answer:'rises' },
              { type:'mcq', q:'They ___ cricket on Sundays.', options:['play','plays','playing','played'], answer:'play' },
              { type:'mcq', q:'Where ___ you live?', options:['do','does','is','are'], answer:'do' }
            ],
            hard:[
              { hindi:'मैं रोज़ चावल खाता हूँ।', english:'I eat rice every day.', words:['eat','I','rice','every','day','eats','we','and'] },
              { hindi:'वह स्कूल जाती है।', english:'She goes to school.', words:['goes','She','to','school','go','He','and','is'] },
              { hindi:'सूरज पूर्व में उगता है।', english:'The sun rises in the east.', words:['rises','The','sun','east','in','the','rise','and'] },
              { hindi:'मैं मांस नहीं खाता।', english:'I do not eat meat.', words:['do','I','not','eat','meat','does','and','is'] },
              { hindi:'वह ऑफिस नहीं जाती।', english:'She does not go to office.', words:['does','She','not','go','office','to','do','and'] },
              { hindi:'तुम क्या खाते हो?', english:'What do you eat?', words:['What','do','you','eat','does','I','and','is'] },
              { hindi:'वह कहाँ जाती है?', english:'Where does she go?', words:['Where','does','she','go','do','I','and','is'] }
            ],
            advance:[
              { english:'I eat rice every day.', hindi:'मैं रोज़ चावल खाता हूँ।', words:['मैं','रोज़','चावल','खाता','हूँ','खाती','और','था'] },
              { english:'She goes to school.', hindi:'वह स्कूल जाती है।', words:['वह','स्कूल','जाती','है','जाता','और','था','यह'] },
              { english:'The sun rises in the east.', hindi:'सूरज पूर्व में उगता है।', words:['सूरज','पूर्व','में','उगता','है','पश्चिम','और','था'] },
              { english:'I do not eat meat.', hindi:'मैं मांस नहीं खाता।', words:['मैं','मांस','नहीं','खाता','हूँ','और','था','यह'] },
              { english:'What do you eat?', hindi:'तुम क्या खाते हो?', words:['तुम','क्या','खाते','हो','मैं','और','था','यह'] },
              { english:'Where does she go?', hindi:'वह कहाँ जाती है?', words:['वह','कहाँ','जाती','है','मैं','और','था','यह'] }
            ]
          }
        },
        {
          id:'p-continuous', title:'Present Continuous', hi:'अभी हो रहा है',
          use:'जो काम अभी चल रहा है, temporary, future plan, बदलती situation — Time words: now, at this moment, look!, listen!.',
          definition:'Present Continuous Tense वह tense है जो बताता है कि कोई काम अभी, इसी वक्त हो रहा है।',
          rule:'Subject + is/am/are + V-ing + Object',
          ruleExplain:'is/am/are = Helping Verb (I → am, He/She/It → is, We/You/They → are) | V-ing = Verb + ing',
          rules:'Rule: Subject + is/am/are + V-ing + Object\n\nSimple: Subject + is/am/are + V-ing + Object\nNegative: Subject + is/am/are + not + V-ing + Object\nInterrogative: Is/Am/Are + Subject + V-ing + Object?\nWH: WH + is/am/are + Subject + V-ing + ?',
          structure:[
            { type:'Simple', formula:'Subject + is/am/are + V-ing + Object', example:'I am eating rice.', exampleExplain:'I + am + eating' },
            { type:'Negative', formula:'Subject + is/am/are + not + V-ing + Object', example:'I am not eating rice.', exampleExplain:'am not + eating' },
            { type:'Interrogative', formula:'Is/Am/Are + Subject + V-ing + Object?', example:'Are you eating rice?', exampleExplain:'Are + you + eating' },
            { type:'WH-Question', formula:'WH + is/am/are + Subject + V-ing + ?', example:'What are you eating?', exampleExplain:'What + are + you + eating' }
          ],
          s:{ simple:'I am eating rice now.', neg:'I am not eating rice.', wh:'What are you eating?' },
          examples:{
            simple:[
              { en:'I am eating rice now.', hi:'मैं अभी चावल खा रहा हूँ।', note:'I + am + eating' },
              { en:'She is reading a book.', hi:'वह किताब पढ़ रही है।', note:'She + is + reading' },
              { en:'They are playing football.', hi:'वे फुटबॉल खेल रहे हैं।', note:'They + are + playing' }
            ],
            negative:[
              { en:'I am not eating rice.', hi:'मैं चावल नहीं खा रहा।', note:'am not' },
              { en:'She is not reading a book.', hi:'वह किताब नहीं पढ़ रही।', note:'is not' },
              { en:'They are not playing football.', hi:'वे फुटबॉल नहीं खेल रहे।', note:'are not' }
            ],
            wh:[
              { en:'What are you eating?', hi:'तुम क्या खा रहे हो?', note:'What + are + you' },
              { en:'Where is she going?', hi:'वह कहाँ जा रही है?', note:'Where + is + she' },
              { en:'Why are they playing?', hi:'वे क्यों खेल रहे हैं?', note:'Why + are + they' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ eating rice now.', options:['am','is','are','was'], answer:'am' },
              { type:'mcq', q:'She ___ reading a book.', options:['am','is','are','were'], answer:'is' },
              { type:'mcq', q:'They ___ playing football.', options:['am','is','are','was'], answer:'are' },
              { type:'mcq', q:'It ___ raining outside.', options:['am','is','are','were'], answer:'is' },
              { type:'mcq', q:'What ___ you doing?', options:['am','is','are','was'], answer:'are' },
              { type:'mcq', q:'We ___ going to market.', options:['am','is','are','was'], answer:'are' },
              { type:'mcq', q:'The children ___ playing.', options:['am','is','are','was'], answer:'are' }
            ],
            hard:[
              { hindi:'मैं अभी चावल खा रहा हूँ।', english:'I am eating rice now.', words:['am','I','eating','rice','now','is','eat','and'] },
              { hindi:'वह किताब पढ़ रही है।', english:'She is reading a book.', words:['is','She','reading','book','a','am','read','and'] },
              { hindi:'वे फुटबॉल खेल रहे हैं।', english:'They are playing football.', words:['are','They','playing','football','is','play','and','am'] },
              { hindi:'मैं चावल नहीं खा रहा।', english:'I am not eating rice.', words:['am','I','not','eating','rice','is','are','and'] },
              { hindi:'वह किताब नहीं पढ़ रही।', english:'She is not reading a book.', words:['is','She','not','reading','book','a','am','and'] },
              { hindi:'तुम क्या खा रहे हो?', english:'What are you eating?', words:['What','are','you','eating','is','am','and','I'] },
              { hindi:'वह कहाँ जा रही है?', english:'Where is she going?', words:['Where','is','she','going','am','are','and','I'] }
            ],
            advance:[
              { english:'I am eating rice now.', hindi:'मैं अभी चावल खा रहा हूँ।', words:['मैं','अभी','चावल','खा','रहा','हूँ','और','था'] },
              { english:'She is reading a book.', hindi:'वह किताब पढ़ रही है।', words:['वह','किताब','पढ़','रही','है','और','था','यह'] },
              { english:'They are playing football.', hindi:'वे फुटबॉल खेल रहे हैं।', words:['वे','फुटबॉल','खेल','रहे','हैं','और','था','यह'] },
              { english:'I am not eating rice.', hindi:'मैं चावल नहीं खा रहा।', words:['मैं','चावल','नहीं','खा','रहा','हूँ','और','था'] },
              { english:'What are you eating?', hindi:'तुम क्या खा रहे हो?', words:['तुम','क्या','खा','रहे','हो','और','था','यह'] },
              { english:'Where is she going?', hindi:'वह कहाँ जा रही है?', words:['वह','कहाँ','जा','रही','है','और','था','यह'] }
            ]
          }
        },
        {
          id:'p-perfect', title:'Present Perfect', hi:'काम पूरा हो चुका है (अभी-अभी)',
          use:'जो काम अभी-अभी पूरा हुआ, जीवन के अनुभव, जो अभी तक नहीं हुआ, जो past में शुरू होकर अभी तक चल रहा है — Time words: just, already, yet, ever, never, since, for.',
          definition:'Present Perfect Tense वह tense है जो बताता है कि कोई काम अभी-अभी पूरा हुआ है, या उसका असर अभी भी मौजूद है।',
          rule:'Subject + has/have + V3 + Object',
          ruleExplain:'has/have = Helping Verb (I/We/You/They → have, He/She/It → has) | V3 = third form (eat → eaten)',
          rules:'Rule: Subject + has/have + V3 + Object\n\nSimple: Subject + has/have + V3 + Object\nNegative: Subject + has/have + not + V3 + Object\nInterrogative: Has/Have + Subject + V3 + Object?\nWH: WH + has/have + Subject + V3 + ?',
          structure:[
            { type:'Simple', formula:'Subject + has/have + V3 + Object', example:'I have eaten rice.', exampleExplain:'I + have + eaten' },
            { type:'Negative', formula:'Subject + has/have + not + V3 + Object', example:'I have not eaten rice.', exampleExplain:'have not + eaten' },
            { type:'Interrogative', formula:'Has/Have + Subject + V3 + Object?', example:'Have you eaten rice?', exampleExplain:'Have + you + eaten' },
            { type:'WH-Question', formula:'WH + has/have + Subject + V3 + ?', example:'What have you eaten?', exampleExplain:'What + have + you + eaten' }
          ],
          s:{ simple:'I have eaten my lunch.', neg:'I have not eaten my lunch.', wh:'What have you eaten?' },
          examples:{
            simple:[
              { en:'I have eaten my lunch.', hi:'मैंने दोपहर का खाना खा लिया।', note:'have + eaten' },
              { en:'She has finished her work.', hi:'उसने अपना काम पूरा कर लिया।', note:'has + finished' },
              { en:'They have gone to Delhi.', hi:'वे दिल्ली गए हैं।', note:'have + gone' }
            ],
            negative:[
              { en:'I have not eaten my lunch.', hi:'मैंने खाना नहीं खाया।', note:'have not' },
              { en:'She has not finished her work.', hi:'उसने काम पूरा नहीं किया।', note:'has not' },
              { en:'They have not gone to Delhi.', hi:'वे दिल्ली नहीं गए।', note:'have not' }
            ],
            wh:[
              { en:'What have you eaten?', hi:'तुमने क्या खाया?', note:'What + have + you' },
              { en:'Where has she gone?', hi:'वह कहाँ गई है?', note:'Where + has + she' },
              { en:'Why have they left?', hi:'वे क्यों गए हैं?', note:'Why + have + they' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ eaten my lunch.', options:['has','have','had','having'], answer:'have' },
              { type:'mcq', q:'She ___ finished her work.', options:['has','have','had','having'], answer:'has' },
              { type:'mcq', q:'They ___ gone to Delhi.', options:['has','have','had','having'], answer:'have' },
              { type:'mcq', q:'I have never ___ a lion.', options:['see','saw','seen','seeing'], answer:'seen' },
              { type:'mcq', q:'___ you finished your work?', options:['Has','Have','Had','Having'], answer:'Have' },
              { type:'mcq', q:'He ___ just arrived.', options:['has','have','had','having'], answer:'has' },
              { type:'mcq', q:'Where ___ you been?', options:['has','have','had','having'], answer:'have' }
            ],
            hard:[
              { hindi:'मैंने दोपहर का खाना खा लिया।', english:'I have eaten my lunch.', words:['have','I','eaten','my','lunch','has','eat','and'] },
              { hindi:'उसने अपना काम पूरा कर लिया।', english:'She has finished her work.', words:['has','She','finished','her','work','have','finish','and'] },
              { hindi:'वे दिल्ली गए हैं।', english:'They have gone to Delhi.', words:['have','They','gone','to','Delhi','has','go','and'] },
              { hindi:'मैंने खाना नहीं खाया।', english:'I have not eaten my lunch.', words:['have','I','not','eaten','my','lunch','has','and'] },
              { hindi:'उसने काम पूरा नहीं किया।', english:'She has not finished her work.', words:['has','She','not','finished','her','work','have','and'] },
              { hindi:'तुमने क्या खाया?', english:'What have you eaten?', words:['What','have','you','eaten','has','and','I','is'] },
              { hindi:'वह कहाँ गई है?', english:'Where has she gone?', words:['Where','has','she','gone','have','and','I','is'] }
            ],
            advance:[
              { english:'I have eaten my lunch.', hindi:'मैंने दोपहर का खाना खा लिया।', words:['मैंने','दोपहर','का','खाना','खा','लिया','और','था'] },
              { english:'She has finished her work.', hindi:'उसने अपना काम पूरा कर लिया।', words:['उसने','अपना','काम','पूरा','कर','लिया','और','था'] },
              { english:'They have gone to Delhi.', hindi:'वे दिल्ली गए हैं।', words:['वे','दिल्ली','गए','हैं','और','था','यह','मैं'] },
              { english:'I have not eaten my lunch.', hindi:'मैंने खाना नहीं खाया।', words:['मैंने','खाना','नहीं','खाया','और','था','यह','वह'] },
              { english:'What have you eaten?', hindi:'तुमने क्या खाया?', words:['तुमने','क्या','खाया','और','था','यह','वह','मैं'] },
              { english:'Where has she gone?', hindi:'वह कहाँ गई है?', words:['वह','कहाँ','गई','है','और','था','यह','मैं'] }
            ]
          }
        },
        {
          id:'p-perfect-continuous', title:'Present Perfect Continuous', hi:'काम पहले से चल रहा है और अभी भी चल रहा है',
          use:'जो काम past में शुरू होकर अभी भी जारी है, जिसकी अवधि बतानी हो — Time words: since, for, how long.',
          definition:'Present Perfect Continuous Tense वह tense है जो बताता है कि कोई काम past में शुरू हुआ, और अभी भी चल रहा है।',
          rule:'Subject + has/have been + V-ing + since/for + time',
          ruleExplain:'has/have been = Helping Verb | V-ing = Verb + ing | since = point of time | for = period of time',
          rules:'Rule: Subject + has/have been + V-ing + since/for\n\nSimple: Subject + has/have been + V-ing + since/for\nNegative: Subject + has/have not been + V-ing\nInterrogative: Has/Have + Subject + been + V-ing?\nWH: WH + has/have + Subject + been + V-ing?',
          structure:[
            { type:'Simple', formula:'Subject + has/have been + V-ing + since/for', example:'I have been eating for 2 hours.', exampleExplain:'have been + eating + for 2 hours' },
            { type:'Negative', formula:'Subject + has/have not been + V-ing', example:'I have not been eating.', exampleExplain:'have not been + eating' },
            { type:'Interrogative', formula:'Has/Have + Subject + been + V-ing?', example:'Have you been eating?', exampleExplain:'Have + you + been + eating' },
            { type:'WH-Question', formula:'WH + has/have + Subject + been + V-ing?', example:'How long have you been eating?', exampleExplain:'How long + have + you + been + eating' }
          ],
          s:{ simple:'I have been studying for 2 hours.', neg:'I have not been studying.', wh:'How long have you been studying?' },
          examples:{
            simple:[
              { en:'I have been studying for 2 hours.', hi:'मैं 2 घंटे से पढ़ रहा हूँ।', note:'have been + studying' },
              { en:'She has been working since morning.', hi:'वह सुबह से काम कर रही है।', note:'has been + working' },
              { en:'It has been raining since last night.', hi:'कल रात से बारिश हो रही है।', note:'has been + raining' }
            ],
            negative:[
              { en:'I have not been studying.', hi:'मैं पढ़ नहीं रहा।', note:'have not been' },
              { en:'She has not been working.', hi:'वह काम नहीं कर रही।', note:'has not been' },
              { en:'They have not been playing.', hi:'वे नहीं खेल रहे।', note:'have not been' }
            ],
            wh:[
              { en:'How long have you been studying?', hi:'तुम कब से पढ़ रहे हो?', note:'How long + have' },
              { en:'Why has she been crying?', hi:'वह क्यों रो रही है?', note:'Why + has' },
              { en:'What have you been doing?', hi:'तुम क्या कर रहे हो?', note:'What + have' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ studying for 2 hours.', options:['has been','have been','had been','am'], answer:'have been' },
              { type:'mcq', q:'She ___ working since morning.', options:['has been','have been','had been','is'], answer:'has been' },
              { type:'mcq', q:'It ___ raining since last night.', options:['has been','have been','had been','was'], answer:'has been' },
              { type:'mcq', q:'They have been ___ since 4 pm.', options:['play','plays','playing','played'], answer:'playing' },
              { type:'mcq', q:'How long ___ you been studying?', options:['has','have','had','having'], answer:'have' },
              { type:'mcq', q:'She has been ___ for 3 hours.', options:['work','works','working','worked'], answer:'working' },
              { type:'mcq', q:'What ___ you been doing?', options:['has','have','had','having'], answer:'have' }
            ],
            hard:[
              { hindi:'मैं 2 घंटे से पढ़ रहा हूँ।', english:'I have been studying for 2 hours.', words:['have','I','been','studying','for','2','hours','has'] },
              { hindi:'वह सुबह से काम कर रही है।', english:'She has been working since morning.', words:['has','She','been','working','since','morning','have','and'] },
              { hindi:'कल रात से बारिश हो रही है।', english:'It has been raining since last night.', words:['has','It','been','raining','since','last','night','have'] },
              { hindi:'मैं पढ़ नहीं रहा।', english:'I have not been studying.', words:['have','I','not','been','studying','has','and','is'] },
              { hindi:'वह काम नहीं कर रही।', english:'She has not been working.', words:['has','She','not','been','working','have','and','is'] },
              { hindi:'तुम कब से पढ़ रहे हो?', english:'How long have you been studying?', words:['How','long','have','you','been','studying','has','and'] },
              { hindi:'तुम क्या कर रहे हो?', english:'What have you been doing?', words:['What','have','you','been','doing','has','and','is'] }
            ],
            advance:[
              { english:'I have been studying for 2 hours.', hindi:'मैं 2 घंटे से पढ़ रहा हूँ।', words:['मैं','2','घंटे','से','पढ़','रहा','हूँ','और'] },
              { english:'She has been working since morning.', hindi:'वह सुबह से काम कर रही है।', words:['वह','सुबह','से','काम','कर','रही','है','और'] },
              { english:'It has been raining since last night.', hindi:'कल रात से बारिश हो रही है।', words:['कल','रात','से','बारिश','हो','रही','है','और'] },
              { english:'I have not been studying.', hindi:'मैं पढ़ नहीं रहा।', words:['मैं','पढ़','नहीं','रहा','हूँ','और','था','यह'] },
              { english:'How long have you been studying?', hindi:'तुम कब से पढ़ रहे हो?', words:['तुम','कब','से','पढ़','रहे','हो','और','था'] },
              { english:'What have you been doing?', hindi:'तुम क्या कर रहे हो?', words:['तुम','क्या','कर','रहे','हो','और','था','यह'] }
            ]
          }
        }
      ]
    },

    past: {
      title: 'Past Tense',
      types: [
        {
          id:'pa-simple', title:'Past Simple / Indefinite', hi:'पहले हो चुका काम',
          use:'जो काम past में किसी खास समय पर हुआ और पूरा हो गया, past की आदत — Time words: yesterday, last week, last night, in 2010, ago.',
          definition:'Past Simple Tense वह tense है जो बताता है कि कोई काम past में किसी खास समय पर हुआ और पूरा हो गया।',
          rule:'Subject + V2 + Object',
          ruleExplain:'V2 = second form (eat → ate, go → went, play → played)',
          rules:'Rule: Subject + V2 + Object\n\nSimple: Subject + V2 + Object\nNegative: Subject + did not + V1 + Object\nInterrogative: Did + Subject + V1 + Object?\nWH: WH + did + Subject + V1 + ?',
          structure:[
            { type:'Simple', formula:'Subject + V2 + Object', example:'I ate rice.', exampleExplain:'I + ate (V2)' },
            { type:'Negative', formula:'Subject + did not + V1 + Object', example:'I did not eat rice.', exampleExplain:'did not + eat' },
            { type:'Interrogative', formula:'Did + Subject + V1 + Object?', example:'Did you eat rice?', exampleExplain:'Did + you + eat' },
            { type:'WH-Question', formula:'WH + did + Subject + V1 + ?', example:'What did you eat?', exampleExplain:'What + did + you + eat' }
          ],
          s:{ simple:'I ate rice yesterday.', neg:'I did not eat rice.', wh:'What did you eat?' },
          examples:{
            simple:[
              { en:'I ate rice yesterday.', hi:'मैंने कल चावल खाया।', note:'I + ate (V2)' },
              { en:'She went to school.', hi:'वह स्कूल गई।', note:'She + went (V2)' },
              { en:'They played football.', hi:'उन्होंने फुटबॉल खेला।', note:'They + played' }
            ],
            negative:[
              { en:'I did not eat rice.', hi:'मैंने चावल नहीं खाया।', note:'did not + eat' },
              { en:'She did not go to school.', hi:'वह स्कूल नहीं गई।', note:'did not + go' },
              { en:'They did not play football.', hi:'उन्होंने फुटबॉल नहीं खेला।', note:'did not + play' }
            ],
            wh:[
              { en:'What did you eat?', hi:'तुमने क्या खाया?', note:'What + did + you' },
              { en:'Where did she go?', hi:'वह कहाँ गई?', note:'Where + did + she' },
              { en:'When did they play?', hi:'वे कब खेले?', note:'When + did + they' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ rice yesterday.', options:['eat','eats','ate','eaten'], answer:'ate' },
              { type:'mcq', q:'She ___ to school yesterday.', options:['go','goes','went','gone'], answer:'went' },
              { type:'mcq', q:'They ___ football last Sunday.', options:['play','plays','played','playing'], answer:'played' },
              { type:'mcq', q:'I did not ___ rice.', options:['eat','ate','eaten','eating'], answer:'eat' },
              { type:'mcq', q:'___ you go to school?', options:['Do','Does','Did','Are'], answer:'Did' },
              { type:'mcq', q:'She ___ a letter yesterday.', options:['write','writes','wrote','written'], answer:'wrote' },
              { type:'mcq', q:'Where ___ you go?', options:['do','does','did','are'], answer:'did' }
            ],
            hard:[
              { hindi:'मैंने कल चावल खाया।', english:'I ate rice yesterday.', words:['ate','I','rice','yesterday','eat','today','and','is'] },
              { hindi:'वह स्कूल गई।', english:'She went to school.', words:['went','She','to','school','go','He','and','is'] },
              { hindi:'उन्होंने फुटबॉल खेला।', english:'They played football.', words:['played','They','football','play','We','and','is','cricket'] },
              { hindi:'मैंने चावल नहीं खाया।', english:'I did not eat rice.', words:['did','I','not','eat','rice','do','and','is'] },
              { hindi:'वह स्कूल नहीं गई।', english:'She did not go to school.', words:['did','She','not','go','school','to','do','and'] },
              { hindi:'तुमने क्या खाया?', english:'What did you eat?', words:['What','did','you','eat','do','does','and','is'] },
              { hindi:'वह कहाँ गई?', english:'Where did she go?', words:['Where','did','she','go','do','does','and','is'] }
            ],
            advance:[
              { english:'I ate rice yesterday.', hindi:'मैंने कल चावल खाया।', words:['मैंने','कल','चावल','खाया','और','था','यह','वह'] },
              { english:'She went to school.', hindi:'वह स्कूल गई।', words:['वह','स्कूल','गई','और','था','यह','मैं','है'] },
              { english:'They played football.', hindi:'उन्होंने फुटबॉल खेला।', words:['उन्होंने','फुटबॉल','खेला','और','था','यह','वह','मैं'] },
              { english:'I did not eat rice.', hindi:'मैंने चावल नहीं खाया।', words:['मैंने','चावल','नहीं','खाया','और','था','यह','वह'] },
              { english:'What did you eat?', hindi:'तुमने क्या खाया?', words:['तुमने','क्या','खाया','और','था','यह','वह','मैं'] },
              { english:'Where did she go?', hindi:'वह कहाँ गई?', words:['वह','कहाँ','गई','और','था','यह','मैं','है'] }
            ]
          }
        },
        {
          id:'pa-continuous', title:'Past Continuous', hi:'पहले चल रहा था',
          use:'जो काम past में किसी खास समय चल रहा था, जब दो काम एक साथ past में चल रहे थे — Time words: at 5 pm yesterday, while, when, all day.',
          definition:'Past Continuous Tense वह tense है जो बताता है कि कोई काम past में किसी खास समय पर चल रहा था (जारी था)।',
          rule:'Subject + was/were + V-ing + Object',
          ruleExplain:'was/were = Helping Verb (I/He/She/It → was, We/You/They → were) | V-ing = Verb + ing',
          rules:'Rule: Subject + was/were + V-ing + Object\n\nSimple: Subject + was/were + V-ing + Object\nNegative: Subject + was/were + not + V-ing + Object\nInterrogative: Was/Were + Subject + V-ing + Object?\nWH: WH + was/were + Subject + V-ing + ?',
          structure:[
            { type:'Simple', formula:'Subject + was/were + V-ing + Object', example:'I was eating rice.', exampleExplain:'I + was + eating' },
            { type:'Negative', formula:'Subject + was/were + not + V-ing + Object', example:'I was not eating rice.', exampleExplain:'was not + eating' },
            { type:'Interrogative', formula:'Was/Were + Subject + V-ing + Object?', example:'Were you eating rice?', exampleExplain:'Were + you + eating' },
            { type:'WH-Question', formula:'WH + was/were + Subject + V-ing + ?', example:'What were you eating?', exampleExplain:'What + were + you + eating' }
          ],
          s:{ simple:'I was eating rice at 8 pm.', neg:'I was not eating rice.', wh:'What were you eating?' },
          examples:{
            simple:[
              { en:'I was eating rice at 8 pm.', hi:'मैं 8 बजे चावल खा रहा था।', note:'I + was + eating' },
              { en:'She was reading a book.', hi:'वह किताब पढ़ रही थी।', note:'She + was + reading' },
              { en:'They were playing football.', hi:'वे फुटबॉल खेल रहे थे।', note:'They + were + playing' }
            ],
            negative:[
              { en:'I was not eating rice.', hi:'मैं चावल नहीं खा रहा था।', note:'was not' },
              { en:'She was not reading a book.', hi:'वह किताब नहीं पढ़ रही थी।', note:'was not' },
              { en:'They were not playing football.', hi:'वे फुटबॉल नहीं खेल रहे थे।', note:'were not' }
            ],
            wh:[
              { en:'What were you eating?', hi:'तुम क्या खा रहे थे?', note:'What + were + you' },
              { en:'Where was she going?', hi:'वह कहाँ जा रही थी?', note:'Where + was + she' },
              { en:'Why were they playing?', hi:'वे क्यों खेल रहे थे?', note:'Why + were + they' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ eating rice at 8 pm.', options:['was','were','am','is'], answer:'was' },
              { type:'mcq', q:'She ___ reading a book.', options:['was','were','am','are'], answer:'was' },
              { type:'mcq', q:'They ___ playing football.', options:['was','were','am','is'], answer:'were' },
              { type:'mcq', q:'It ___ raining heavily.', options:['was','were','am','are'], answer:'was' },
              { type:'mcq', q:'What ___ you doing?', options:['was','were','am','is'], answer:'were' },
              { type:'mcq', q:'We ___ going to market.', options:['was','were','am','is'], answer:'were' },
              { type:'mcq', q:'The children ___ playing.', options:['was','were','am','is'], answer:'were' }
            ],
            hard:[
              { hindi:'मैं 8 बजे चावल खा रहा था।', english:'I was eating rice at 8 pm.', words:['was','I','eating','rice','at','8','pm','were'] },
              { hindi:'वह किताब पढ़ रही थी।', english:'She was reading a book.', words:['was','She','reading','book','a','were','read','and'] },
              { hindi:'वे फुटबॉल खेल रहे थे।', english:'They were playing football.', words:['were','They','playing','football','was','play','and','am'] },
              { hindi:'मैं चावल नहीं खा रहा था।', english:'I was not eating rice.', words:['was','I','not','eating','rice','were','am','and'] },
              { hindi:'वह किताब नहीं पढ़ रही थी।', english:'She was not reading a book.', words:['was','She','not','reading','book','a','were','and'] },
              { hindi:'तुम क्या खा रहे थे?', english:'What were you eating?', words:['What','were','you','eating','was','am','and','I'] },
              { hindi:'वह कहाँ जा रही थी?', english:'Where was she going?', words:['Where','was','she','going','were','am','and','I'] }
            ],
            advance:[
              { english:'I was eating rice at 8 pm.', hindi:'मैं 8 बजे चावल खा रहा था।', words:['मैं','8','बजे','चावल','खा','रहा','था','और'] },
              { english:'She was reading a book.', hindi:'वह किताब पढ़ रही थी।', words:['वह','किताब','पढ़','रही','थी','और','था','यह'] },
              { english:'They were playing football.', hindi:'वे फुटबॉल खेल रहे थे।', words:['वे','फुटबॉल','खेल','रहे','थे','और','था','यह'] },
              { english:'I was not eating rice.', hindi:'मैं चावल नहीं खा रहा था।', words:['मैं','चावल','नहीं','खा','रहा','था','और','यह'] },
              { english:'What were you eating?', hindi:'तुम क्या खा रहे थे?', words:['तुम','क्या','खा','रहे','थे','और','था','यह'] },
              { english:'Where was she going?', hindi:'वह कहाँ जा रही थी?', words:['वह','कहाँ','जा','रही','थी','और','था','यह'] }
            ]
          }
        },
        {
          id:'pa-perfect', title:'Past Perfect', hi:'पहले ही पूरा हो चुका था',
          use:'जब दो काम past में हुए — एक पहले, एक बाद में — Time words: before, after, already, when, by the time.',
          definition:'Past Perfect Tense वह tense है जो बताता है कि past में कोई काम किसी दूसरे past काम से पहले पूरा हो चुका था।',
          rule:'Subject + had + V3 + Object',
          ruleExplain:'had = Helping Verb (सभी subjects) | V3 = third form',
          rules:'Rule: Subject + had + V3 + Object\n\nSimple: Subject + had + V3 + Object\nNegative: Subject + had + not + V3 + Object\nInterrogative: Had + Subject + V3 + Object?\nWH: WH + had + Subject + V3 + ?',
          structure:[
            { type:'Simple', formula:'Subject + had + V3 + Object', example:'I had eaten rice.', exampleExplain:'I + had + eaten' },
            { type:'Negative', formula:'Subject + had + not + V3 + Object', example:'I had not eaten rice.', exampleExplain:'had not + eaten' },
            { type:'Interrogative', formula:'Had + Subject + V3 + Object?', example:'Had you eaten rice?', exampleExplain:'Had + you + eaten' },
            { type:'WH-Question', formula:'WH + had + Subject + V3 + ?', example:'What had you eaten?', exampleExplain:'What + had + you + eaten' }
          ],
          s:{ simple:'I had eaten before he came.', neg:'I had not eaten before he came.', wh:'What had you eaten?' },
          examples:{
            simple:[
              { en:'I had eaten before he came.', hi:'वह आने से पहले मैं खा चुका था।', note:'had + eaten' },
              { en:'She had finished her work.', hi:'वह अपना काम पूरा कर चुकी थी।', note:'had + finished' },
              { en:'They had gone to Delhi.', hi:'वे दिल्ली जा चुके थे।', note:'had + gone' }
            ],
            negative:[
              { en:'I had not eaten before he came.', hi:'वह आने से पहले मैंने खाया नहीं था।', note:'had not' },
              { en:'She had not finished her work.', hi:'उसने काम पूरा नहीं किया था।', note:'had not' },
              { en:'They had not gone to Delhi.', hi:'वे दिल्ली नहीं गए थे।', note:'had not' }
            ],
            wh:[
              { en:'What had you eaten?', hi:'तुमने क्या खाया था?', note:'What + had + you' },
              { en:'Where had she gone?', hi:'वह कहाँ गई थी?', note:'Where + had + she' },
              { en:'Why had they left?', hi:'वे क्यों गए थे?', note:'Why + had + they' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ eaten before he came.', options:['has','have','had','having'], answer:'had' },
              { type:'mcq', q:'She ___ finished her work.', options:['has','have','had','having'], answer:'had' },
              { type:'mcq', q:'They ___ gone to Delhi.', options:['has','have','had','having'], answer:'had' },
              { type:'mcq', q:'I had never ___ a lion.', options:['see','saw','seen','seeing'], answer:'seen' },
              { type:'mcq', q:'___ you finished your work?', options:['Has','Have','Had','Having'], answer:'Had' },
              { type:'mcq', q:'He ___ just arrived.', options:['has','have','had','having'], answer:'had' },
              { type:'mcq', q:'Where ___ you been?', options:['has','have','had','having'], answer:'had' }
            ],
            hard:[
              { hindi:'वह आने से पहले मैं खा चुका था।', english:'I had eaten before he came.', words:['had','I','eaten','before','he','came','has','and'] },
              { hindi:'वह अपना काम पूरा कर चुकी थी।', english:'She had finished her work.', words:['had','She','finished','her','work','has','have','and'] },
              { hindi:'वे दिल्ली जा चुके थे।', english:'They had gone to Delhi.', words:['had','They','gone','to','Delhi','has','go','and'] },
              { hindi:'मैंने खाया नहीं था।', english:'I had not eaten.', words:['had','I','not','eaten','has','and','is','have'] },
              { hindi:'उसने काम पूरा नहीं किया था।', english:'She had not finished her work.', words:['had','She','not','finished','her','work','has','and'] },
              { hindi:'तुमने क्या खाया था?', english:'What had you eaten?', words:['What','had','you','eaten','has','and','I','is'] },
              { hindi:'वह कहाँ गई थी?', english:'Where had she gone?', words:['Where','had','she','gone','has','and','I','is'] }
            ],
            advance:[
              { english:'I had eaten before he came.', hindi:'वह आने से पहले मैं खा चुका था।', words:['वह','आने','से','पहले','मैं','खा','चुका','था'] },
              { english:'She had finished her work.', hindi:'वह अपना काम पूरा कर चुकी थी।', words:['वह','अपना','काम','पूरा','कर','चुकी','थी','और'] },
              { english:'They had gone to Delhi.', hindi:'वे दिल्ली जा चुके थे।', words:['वे','दिल्ली','जा','चुके','थे','और','था','यह'] },
              { english:'I had not eaten.', hindi:'मैंने खाया नहीं था।', words:['मैंने','खाया','नहीं','था','और','यह','वह','मैं'] },
              { english:'What had you eaten?', hindi:'तुमने क्या खाया था?', words:['तुमने','क्या','खाया','था','और','यह','वह','मैं'] },
              { english:'Where had she gone?', hindi:'वह कहाँ गई थी?', words:['वह','कहाँ','गई','थी','और','था','यह','मैं'] }
            ]
          }
        },
        {
          id:'pa-perfect-continuous', title:'Past Perfect Continuous', hi:'पहले से चल रहा था और past में भी जारी था',
          use:'जब काम past में एक अवधि से चल रहा था और किसी दूसरे past काम से पहले जारी था — Time words: for, since, all day, before.',
          definition:'Past Perfect Continuous Tense वह tense है जो बताता है कि कोई काम past में पहले शुरू हुआ और किसी खास past समय तक चल रहा था।',
          rule:'Subject + had been + V-ing + since/for + time',
          ruleExplain:'had been = Helping Verb (सभी subjects) | V-ing = Verb + ing | since/for',
          rules:'Rule: Subject + had been + V-ing + since/for\n\nSimple: Subject + had been + V-ing + since/for\nNegative: Subject + had not been + V-ing\nInterrogative: Had + Subject + been + V-ing?\nWH: WH + had + Subject + been + V-ing?',
          structure:[
            { type:'Simple', formula:'Subject + had been + V-ing + since/for', example:'I had been eating for 2 hours.', exampleExplain:'had been + eating' },
            { type:'Negative', formula:'Subject + had not been + V-ing', example:'I had not been eating.', exampleExplain:'had not been + eating' },
            { type:'Interrogative', formula:'Had + Subject + been + V-ing?', example:'Had you been eating?', exampleExplain:'Had + you + been + eating' },
            { type:'WH-Question', formula:'WH + had + Subject + been + V-ing?', example:'How long had you been eating?', exampleExplain:'How long + had + you + been + eating' }
          ],
          s:{ simple:'I had been studying for 2 hours.', neg:'I had not been studying.', wh:'How long had you been studying?' },
          examples:{
            simple:[
              { en:'I had been studying for 2 hours.', hi:'मैं 2 घंटे से पढ़ रहा था।', note:'had been + studying' },
              { en:'She had been working since morning.', hi:'वह सुबह से काम कर रही थी।', note:'had been + working' },
              { en:'It had been raining since last night.', hi:'कल रात से बारिश हो रही थी।', note:'had been + raining' }
            ],
            negative:[
              { en:'I had not been studying.', hi:'मैं पढ़ नहीं रहा था।', note:'had not been' },
              { en:'She had not been working.', hi:'वह काम नहीं कर रही थी।', note:'had not been' },
              { en:'They had not been playing.', hi:'वे नहीं खेल रहे थे।', note:'had not been' }
            ],
            wh:[
              { en:'How long had you been studying?', hi:'तुम कब से पढ़ रहे थे?', note:'How long + had' },
              { en:'Why had she been crying?', hi:'वह क्यों रो रही थी?', note:'Why + had' },
              { en:'What had you been doing?', hi:'तुम क्या कर रहे थे?', note:'What + had' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ studying for 2 hours.', options:['has been','have been','had been','am'], answer:'had been' },
              { type:'mcq', q:'She ___ working since morning.', options:['has been','have been','had been','is'], answer:'had been' },
              { type:'mcq', q:'It ___ raining since last night.', options:['has been','have been','had been','was'], answer:'had been' },
              { type:'mcq', q:'They had been ___ since 4 pm.', options:['play','plays','playing','played'], answer:'playing' },
              { type:'mcq', q:'How long ___ you been studying?', options:['has','have','had','having'], answer:'had' },
              { type:'mcq', q:'She had been ___ for 3 hours.', options:['work','works','working','worked'], answer:'working' },
              { type:'mcq', q:'What ___ you been doing?', options:['has','have','had','having'], answer:'had' }
            ],
            hard:[
              { hindi:'मैं 2 घंटे से पढ़ रहा था।', english:'I had been studying for 2 hours.', words:['had','I','been','studying','for','2','hours','has'] },
              { hindi:'वह सुबह से काम कर रही थी।', english:'She had been working since morning.', words:['had','She','been','working','since','morning','have','and'] },
              { hindi:'कल रात से बारिश हो रही थी।', english:'It had been raining since last night.', words:['had','It','been','raining','since','last','night','have'] },
              { hindi:'मैं पढ़ नहीं रहा था।', english:'I had not been studying.', words:['had','I','not','been','studying','has','and','is'] },
              { hindi:'वह काम नहीं कर रही थी।', english:'She had not been working.', words:['had','She','not','been','working','have','and','is'] },
              { hindi:'तुम कब से पढ़ रहे थे?', english:'How long had you been studying?', words:['How','long','had','you','been','studying','has','and'] },
              { hindi:'तुम क्या कर रहे थे?', english:'What had you been doing?', words:['What','had','you','been','doing','has','and','is'] }
            ],
            advance:[
              { english:'I had been studying for 2 hours.', hindi:'मैं 2 घंटे से पढ़ रहा था।', words:['मैं','2','घंटे','से','पढ़','रहा','था','और'] },
              { english:'She had been working since morning.', hindi:'वह सुबह से काम कर रही थी।', words:['वह','सुबह','से','काम','कर','रही','थी','और'] },
              { english:'It had been raining since last night.', hindi:'कल रात से बारिश हो रही थी।', words:['कल','रात','से','बारिश','हो','रही','थी','और'] },
              { english:'I had not been studying.', hindi:'मैं पढ़ नहीं रहा था।', words:['मैं','पढ़','नहीं','रहा','था','और','यह','वह'] },
              { english:'How long had you been studying?', hindi:'तुम कब से पढ़ रहे थे?', words:['तुम','कब','से','पढ़','रहे','थे','और','था'] },
              { english:'What had you been doing?', hindi:'तुम क्या कर रहे थे?', words:['तुम','क्या','कर','रहे','थे','और','था','यह'] }
            ]
          }
        }
      ]
    },

    future: {
      title: 'Future Tense',
      types: [
        {
          id:'f-simple', title:'Future Simple / Indefinite', hi:'आगे होने वाला काम',
          use:'जो काम future में होने वाला है, promise, prediction — Time words: tomorrow, next week, soon, in future, later.',
          definition:'Future Simple Tense वह tense है जो बताता है कि कोई काम future में होगा।',
          rule:'Subject + will + V1 + Object',
          ruleExplain:'will = Helping Verb (सभी subjects) | V1 = base form',
          rules:'Rule: Subject + will + V1 + Object\n\nSimple: Subject + will + V1 + Object\nNegative: Subject + will + not + V1 + Object\nInterrogative: Will + Subject + V1 + Object?\nWH: WH + will + Subject + V1 + ?',
          structure:[
            { type:'Simple', formula:'Subject + will + V1 + Object', example:'I will eat rice.', exampleExplain:'I + will + eat' },
            { type:'Negative', formula:'Subject + will + not + V1 + Object', example:'I will not eat rice.', exampleExplain:'will not + eat' },
            { type:'Interrogative', formula:'Will + Subject + V1 + Object?', example:'Will you eat rice?', exampleExplain:'Will + you + eat' },
            { type:'WH-Question', formula:'WH + will + Subject + V1 + ?', example:'What will you eat?', exampleExplain:'What + will + you + eat' }
          ],
          s:{ simple:'I will eat rice tomorrow.', neg:'I will not eat rice.', wh:'What will you eat?' },
          examples:{
            simple:[
              { en:'I will eat rice tomorrow.', hi:'मैं कल चावल खाऊँगा।', note:'I + will + eat' },
              { en:'She will go to school.', hi:'वह स्कूल जाएगी।', note:'She + will + go' },
              { en:'They will play football.', hi:'वे फुटबॉल खेलेंगे।', note:'They + will + play' }
            ],
            negative:[
              { en:'I will not eat rice.', hi:'मैं चावल नहीं खाऊँगा।', note:'will not' },
              { en:'She will not go to school.', hi:'वह स्कूल नहीं जाएगी।', note:'will not' },
              { en:'They will not play football.', hi:'वे फुटबॉल नहीं खेलेंगे।', note:'will not' }
            ],
            wh:[
              { en:'What will you eat?', hi:'तुम क्या खाओगे?', note:'What + will + you' },
              { en:'Where will she go?', hi:'वह कहाँ जाएगी?', note:'Where + will + she' },
              { en:'When will they play?', hi:'वे कब खेलेंगे?', note:'When + will + they' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ rice tomorrow.', options:['eat','eats','will eat','ate'], answer:'will eat' },
              { type:'mcq', q:'She ___ to school tomorrow.', options:['go','goes','will go','went'], answer:'will go' },
              { type:'mcq', q:'They ___ football next Sunday.', options:['play','plays','will play','played'], answer:'will play' },
              { type:'mcq', q:'I will not ___ rice.', options:['eat','ate','eaten','eating'], answer:'eat' },
              { type:'mcq', q:'___ you go to school?', options:['Do','Does','Will','Did'], answer:'Will' },
              { type:'mcq', q:'She ___ a letter tomorrow.', options:['write','writes','will write','wrote'], answer:'will write' },
              { type:'mcq', q:'Where ___ you go?', options:['do','does','will','did'], answer:'will' }
            ],
            hard:[
              { hindi:'मैं कल चावल खाऊँगा।', english:'I will eat rice tomorrow.', words:['will','I','eat','rice','tomorrow','ate','and','is'] },
              { hindi:'वह स्कूल जाएगी।', english:'She will go to school.', words:['will','She','go','to','school','went','and','is'] },
              { hindi:'वे फुटबॉल खेलेंगे।', english:'They will play football.', words:['will','They','play','football','played','and','is','cricket'] },
              { hindi:'मैं चावल नहीं खाऊँगा।', english:'I will not eat rice.', words:['will','I','not','eat','rice','do','and','is'] },
              { hindi:'वह स्कूल नहीं जाएगी।', english:'She will not go to school.', words:['will','She','not','go','school','to','do','and'] },
              { hindi:'तुम क्या खाओगे?', english:'What will you eat?', words:['What','will','you','eat','do','does','and','is'] },
              { hindi:'वह कहाँ जाएगी?', english:'Where will she go?', words:['Where','will','she','go','do','does','and','is'] }
            ],
            advance:[
              { english:'I will eat rice tomorrow.', hindi:'मैं कल चावल खाऊँगा।', words:['मैं','कल','चावल','खाऊँगा','और','था','यह','वह'] },
              { english:'She will go to school.', hindi:'वह स्कूल जाएगी।', words:['वह','स्कूल','जाएगी','और','था','यह','मैं','है'] },
              { english:'They will play football.', hindi:'वे फुटबॉल खेलेंगे।', words:['वे','फुटबॉल','खेलेंगे','और','था','यह','वह','मैं'] },
              { english:'I will not eat rice.', hindi:'मैं चावल नहीं खाऊँगा।', words:['मैं','चावल','नहीं','खाऊँगा','और','था','यह','वह'] },
              { english:'What will you eat?', hindi:'तुम क्या खाओगे?', words:['तुम','क्या','खाओगे','और','था','यह','वह','मैं'] },
              { english:'Where will she go?', hindi:'वह कहाँ जाएगी?', words:['वह','कहाँ','जाएगी','और','था','यह','मैं','है'] }
            ]
          }
        },
        {
          id:'f-continuous', title:'Future Continuous', hi:'भविष्य में चल रहा होगा',
          use:'जो काम future में किसी खास समय चल रहा होगा, future की plan — Time words: at 5 pm tomorrow, this time tomorrow.',
          definition:'Future Continuous Tense वह tense है जो बताता है कि कोई काम future में किसी खास समय पर चल रहा होगा (जारी होगा)।',
          rule:'Subject + will be + V-ing + Object',
          ruleExplain:'will be = Helping Verb | V-ing = Verb + ing',
          rules:'Rule: Subject + will be + V-ing + Object\n\nSimple: Subject + will be + V-ing + Object\nNegative: Subject + will not be + V-ing + Object\nInterrogative: Will + Subject + be + V-ing + Object?\nWH: WH + will + Subject + be + V-ing + ?',
          structure:[
            { type:'Simple', formula:'Subject + will be + V-ing + Object', example:'I will be eating rice.', exampleExplain:'I + will be + eating' },
            { type:'Negative', formula:'Subject + will not be + V-ing + Object', example:'I will not be eating rice.', exampleExplain:'will not be + eating' },
            { type:'Interrogative', formula:'Will + Subject + be + V-ing + Object?', example:'Will you be eating rice?', exampleExplain:'Will + you + be + eating' },
            { type:'WH-Question', formula:'WH + will + Subject + be + V-ing + ?', example:'What will you be eating?', exampleExplain:'What + will + you + be + eating' }
          ],
          s:{ simple:'I will be eating rice at 8 pm.', neg:'I will not be eating rice.', wh:'What will you be eating?' },
          examples:{
            simple:[
              { en:'I will be eating rice at 8 pm.', hi:'मैं 8 बजे चावल खा रहा होऊँगा।', note:'will be + eating' },
              { en:'She will be reading a book.', hi:'वह किताब पढ़ रही होगी।', note:'will be + reading' },
              { en:'They will be playing football.', hi:'वे फुटबॉल खेल रहे होंगे।', note:'will be + playing' }
            ],
            negative:[
              { en:'I will not be eating rice.', hi:'मैं चावल नहीं खा रहा होऊँगा।', note:'will not be' },
              { en:'She will not be reading a book.', hi:'वह किताब नहीं पढ़ रही होगी।', note:'will not be' },
              { en:'They will not be playing football.', hi:'वे फुटबॉल नहीं खेल रहे होंगे।', note:'will not be' }
            ],
            wh:[
              { en:'What will you be eating?', hi:'तुम क्या खा रहे होओगे?', note:'What + will + you' },
              { en:'Where will she be going?', hi:'वह कहाँ जा रही होगी?', note:'Where + will + she' },
              { en:'When will you be coming?', hi:'तुम कब आ रहे होओगे?', note:'When + will + you' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ eating rice at 8 pm.', options:['will','will be','am','was'], answer:'will be' },
              { type:'mcq', q:'She ___ reading a book.', options:['will','will be','am','is'], answer:'will be' },
              { type:'mcq', q:'They ___ playing football.', options:['will','will be','am','is'], answer:'will be' },
              { type:'mcq', q:'It ___ raining heavily.', options:['will','will be','am','are'], answer:'will be' },
              { type:'mcq', q:'What ___ you doing?', options:['will','will be','am','is'], answer:'will be' },
              { type:'mcq', q:'We ___ going to market.', options:['will','will be','am','is'], answer:'will be' },
              { type:'mcq', q:'The children ___ playing.', options:['will','will be','am','is'], answer:'will be' }
            ],
            hard:[
              { hindi:'मैं 8 बजे चावल खा रहा होऊँगा।', english:'I will be eating rice at 8 pm.', words:['will','I','be','eating','rice','at','8','pm'] },
              { hindi:'वह किताब पढ़ रही होगी।', english:'She will be reading a book.', words:['will','She','be','reading','book','a','and','is'] },
              { hindi:'वे फुटबॉल खेल रहे होंगे।', english:'They will be playing football.', words:['will','They','be','playing','football','and','is','am'] },
              { hindi:'मैं चावल नहीं खा रहा होऊँगा।', english:'I will not be eating rice.', words:['will','I','not','be','eating','rice','and','is'] },
              { hindi:'वह किताब नहीं पढ़ रही होगी।', english:'She will not be reading a book.', words:['will','She','not','be','reading','book','a','and'] },
              { hindi:'तुम क्या खा रहे होओगे?', english:'What will you be eating?', words:['What','will','you','be','eating','and','is','I'] },
              { hindi:'वह कहाँ जा रही होगी?', english:'Where will she be going?', words:['Where','will','she','be','going','and','is','I'] }
            ],
            advance:[
              { english:'I will be eating rice at 8 pm.', hindi:'मैं 8 बजे चावल खा रहा होऊँगा।', words:['मैं','8','बजे','चावल','खा','रहा','होऊँगा','और'] },
              { english:'She will be reading a book.', hindi:'वह किताब पढ़ रही होगी।', words:['वह','किताब','पढ़','रही','होगी','और','था','यह'] },
              { english:'They will be playing football.', hindi:'वे फुटबॉल खेल रहे होंगे।', words:['वे','फुटबॉल','खेल','रहे','होंगे','और','था','यह'] },
              { english:'I will not be eating rice.', hindi:'मैं चावल नहीं खा रहा होऊँगा।', words:['मैं','चावल','नहीं','खा','रहा','होऊँगा','और','यह'] },
              { english:'What will you be eating?', hindi:'तुम क्या खा रहे होओगे?', words:['तुम','क्या','खा','रहे','होओगे','और','था','यह'] },
              { english:'Where will she be going?', hindi:'वह कहाँ जा रही होगी?', words:['वह','कहाँ','जा','रही','होगी','और','था','यह'] }
            ]
          }
        },
        {
          id:'f-perfect', title:'Future Perfect', hi:'भविष्य में किसी समय तक पूरा हो चुका होगा',
          use:'जो काम future में किसी खास समय तक पूरा हो चुका होगा — Time words: by tomorrow, by 5 pm, by next week.',
          definition:'Future Perfect Tense वह tense है जो बताता है कि कोई काम future में किसी खास समय तक पूरा हो चुका होगा।',
          rule:'Subject + will have + V3 + Object',
          ruleExplain:'will have = Helping Verb | V3 = third form',
          rules:'Rule: Subject + will have + V3 + Object\n\nSimple: Subject + will have + V3 + Object\nNegative: Subject + will not have + V3 + Object\nInterrogative: Will + Subject + have + V3 + Object?\nWH: WH + will + Subject + have + V3 + ?',
          structure:[
            { type:'Simple', formula:'Subject + will have + V3 + Object', example:'I will have eaten rice.', exampleExplain:'will have + eaten' },
            { type:'Negative', formula:'Subject + will not have + V3 + Object', example:'I will not have eaten rice.', exampleExplain:'will not have + eaten' },
            { type:'Interrogative', formula:'Will + Subject + have + V3 + Object?', example:'Will you have eaten rice?', exampleExplain:'Will + you + have + eaten' },
            { type:'WH-Question', formula:'WH + will + Subject + have + V3 + ?', example:'What will you have eaten?', exampleExplain:'What + will + you + have + eaten' }
          ],
          s:{ simple:'I will have eaten by 8 pm.', neg:'I will not have eaten by 8 pm.', wh:'What will you have eaten?' },
          examples:{
            simple:[
              { en:'I will have eaten by 8 pm.', hi:'8 बजे तक मैं खा चुका होऊँगा।', note:'will have + eaten' },
              { en:'She will have finished her work.', hi:'वह अपना काम पूरा कर चुकी होगी।', note:'will have + finished' },
              { en:'They will have gone to Delhi.', hi:'वे दिल्ली जा चुके होंगे।', note:'will have + gone' }
            ],
            negative:[
              { en:'I will not have eaten by 8 pm.', hi:'8 बजे तक मैं खा चुका नहीं होऊँगा।', note:'will not have' },
              { en:'She will not have finished her work.', hi:'उसने काम पूरा नहीं किया होगा।', note:'will not have' },
              { en:'They will not have gone to Delhi.', hi:'वे दिल्ली नहीं गए होंगे।', note:'will not have' }
            ],
            wh:[
              { en:'What will you have eaten?', hi:'तुमने क्या खाया होगा?', note:'What + will + you' },
              { en:'Where will she have gone?', hi:'वह कहाँ गई होगी?', note:'Where + will + she' },
              { en:'When will the train have left?', hi:'ट्रेन कब गई होगी?', note:'When + will + train' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ eaten by 8 pm.', options:['will','will have','have','had'], answer:'will have' },
              { type:'mcq', q:'She ___ finished her work.', options:['will','will have','have','has'], answer:'will have' },
              { type:'mcq', q:'They ___ gone to Delhi.', options:['will','will have','have','has'], answer:'will have' },
              { type:'mcq', q:'I will have never ___ a lion.', options:['see','saw','seen','seeing'], answer:'seen' },
              { type:'mcq', q:'___ you have finished your work?', options:['Will','Have','Had','Having'], answer:'Will' },
              { type:'mcq', q:'He will have just ___.', options:['arrive','arrived','arriving','arrives'], answer:'arrived' },
              { type:'mcq', q:'What ___ you have done?', options:['will','have','had','having'], answer:'will' }
            ],
            hard:[
              { hindi:'8 बजे तक मैं खा चुका होऊँगा।', english:'I will have eaten by 8 pm.', words:['will','I','have','eaten','by','8','pm','had'] },
              { hindi:'वह अपना काम पूरा कर चुकी होगी।', english:'She will have finished her work.', words:['will','She','have','finished','her','work','had','and'] },
              { hindi:'वे दिल्ली जा चुके होंगे।', english:'They will have gone to Delhi.', words:['will','They','have','gone','to','Delhi','had','and'] },
              { hindi:'मैंने खाया नहीं होगा।', english:'I will not have eaten.', words:['will','I','not','have','eaten','has','and','is'] },
              { hindi:'उसने काम पूरा नहीं किया होगा।', english:'She will not have finished her work.', words:['will','She','not','have','finished','her','work','and'] },
              { hindi:'तुमने क्या खाया होगा?', english:'What will you have eaten?', words:['What','will','you','have','eaten','has','and','I'] },
              { hindi:'वह कहाँ गई होगी?', english:'Where will she have gone?', words:['Where','will','she','have','gone','has','and','I'] }
            ],
            advance:[
              { english:'I will have eaten by 8 pm.', hindi:'8 बजे तक मैं खा चुका होऊँगा।', words:['8','बजे','तक','मैं','खा','चुका','होऊँगा','और'] },
              { english:'She will have finished her work.', hindi:'वह अपना काम पूरा कर चुकी होगी।', words:['वह','अपना','काम','पूरा','कर','चुकी','होगी','और'] },
              { english:'They will have gone to Delhi.', hindi:'वे दिल्ली जा चुके होंगे।', words:['वे','दिल्ली','जा','चुके','होंगे','और','था','यह'] },
              { english:'I will not have eaten.', hindi:'मैंने खाया नहीं होगा।', words:['मैंने','खाया','नहीं','होगा','और','यह','वह','मैं'] },
              { english:'What will you have eaten?', hindi:'तुमने क्या खाया होगा?', words:['तुमने','क्या','खाया','होगा','और','यह','वह','मैं'] },
              { english:'Where will she have gone?', hindi:'वह कहाँ गई होगी?', words:['वह','कहाँ','गई','होगी','और','था','यह','मैं'] }
            ]
          }
        },
        {
          id:'f-perfect-continuous', title:'Future Perfect Continuous', hi:'भविष्य में किसी समय तक चलता रहा होगा',
          use:'जो काम future में किसी खास समय तक लगातार चलता रहेगा — Time words: for, since, by next month.',
          definition:'Future Perfect Continuous Tense वह tense है जो बताता है कि कोई काम future में किसी खास समय तक लगातार चलता रहेगा।',
          rule:'Subject + will have been + V-ing + since/for + time',
          ruleExplain:'will have been = Helping Verb | V-ing = Verb + ing | since/for',
          rules:'Rule: Subject + will have been + V-ing + since/for\n\nSimple: Subject + will have been + V-ing + since/for\nNegative: Subject + will not have been + V-ing\nInterrogative: Will + Subject + have been + V-ing?\nWH: WH + will + Subject + have been + V-ing?',
          structure:[
            { type:'Simple', formula:'Subject + will have been + V-ing + since/for', example:'I will have been eating for 2 hours.', exampleExplain:'will have been + eating' },
            { type:'Negative', formula:'Subject + will not have been + V-ing', example:'I will not have been eating.', exampleExplain:'will not have been + eating' },
            { type:'Interrogative', formula:'Will + Subject + have been + V-ing?', example:'Will you have been eating?', exampleExplain:'Will + you + have been + eating' },
            { type:'WH-Question', formula:'WH + will + Subject + have been + V-ing?', example:'How long will you have been eating?', exampleExplain:'How long + will + you + have been + eating' }
          ],
          s:{ simple:'By 8 pm, I will have been studying for 2 hours.', neg:'I will not have been studying.', wh:'How long will you have been studying?' },
          examples:{
            simple:[
              { en:'By 8 pm, I will have been studying for 2 hours.', hi:'8 बजे तक मैं 2 घंटे से पढ़ रहा होऊँगा।', note:'will have been + studying' },
              { en:'She will have been working since morning.', hi:'वह सुबह से काम कर रही होगी।', note:'will have been + working' },
              { en:'They will have been playing since 4 pm.', hi:'वे 4 बजे से खेल रहे होंगे।', note:'will have been + playing' }
            ],
            negative:[
              { en:'I will not have been studying.', hi:'मैं पढ़ नहीं रहा होऊँगा।', note:'will not have been' },
              { en:'She will not have been working.', hi:'वह काम नहीं कर रही होगी।', note:'will not have been' },
              { en:'They will not have been playing.', hi:'वे नहीं खेल रहे होंगे।', note:'will not have been' }
            ],
            wh:[
              { en:'How long will you have been studying?', hi:'तुम कब से पढ़ रहे होओगे?', note:'How long + will' },
              { en:'Why will she have been crying?', hi:'वह क्यों रो रही होगी?', note:'Why + will' },
              { en:'What will you have been doing?', hi:'तुम क्या कर रहे होओगे?', note:'What + will' }
            ]
          },
          practice:{
            basic:[
              { type:'mcq', q:'I ___ studying for 2 hours by 8 pm.', options:['will','will have','will have been','have been'], answer:'will have been' },
              { type:'mcq', q:'She ___ working since morning by then.', options:['will','will have','will have been','has been'], answer:'will have been' },
              { type:'mcq', q:'It ___ raining since last night.', options:['will','will have','will have been','has been'], answer:'will have been' },
              { type:'mcq', q:'They will have been ___ since 4 pm.', options:['play','plays','playing','played'], answer:'playing' },
              { type:'mcq', q:'How long ___ you have been studying?', options:['will','have','had','has'], answer:'will' },
              { type:'mcq', q:'She will have been ___ for 3 hours.', options:['work','works','working','worked'], answer:'working' },
              { type:'mcq', q:'What ___ you have been doing?', options:['will','have','had','has'], answer:'will' }
            ],
            hard:[
              { hindi:'8 बजे तक मैं 2 घंटे से पढ़ रहा होऊँगा।', english:'By 8 pm, I will have been studying for 2 hours.', words:['will','I','have','been','studying','for','2','hours'] },
              { hindi:'वह सुबह से काम कर रही होगी।', english:'She will have been working since morning.', words:['will','She','have','been','working','since','morning','and'] },
              { hindi:'कल रात से बारिश हो रही होगी।', english:'It will have been raining since last night.', words:['will','It','have','been','raining','since','last','night'] },
              { hindi:'मैं पढ़ नहीं रहा होऊँगा।', english:'I will not have been studying.', words:['will','I','not','have','been','studying','has','and'] },
              { hindi:'वह काम नहीं कर रही होगी।', english:'She will not have been working.', words:['will','She','not','have','been','working','has','and'] },
              { hindi:'तुम कब से पढ़ रहे होओगे?', english:'How long will you have been studying?', words:['How','long','will','you','have','been','studying','has'] },
              { hindi:'तुम क्या कर रहे होओगे?', english:'What will you have been doing?', words:['What','will','you','have','been','doing','has','and'] }
            ],
            advance:[
              { english:'By 8 pm, I will have been studying for 2 hours.', hindi:'8 बजे तक मैं 2 घंटे से पढ़ रहा होऊँगा।', words:['8','बजे','तक','मैं','2','घंटे','से','पढ़'] },
              { english:'She will have been working since morning.', hindi:'वह सुबह से काम कर रही होगी।', words:['वह','सुबह','से','काम','कर','रही','होगी','और'] },
              { english:'It will have been raining since last night.', hindi:'कल रात से बारिश हो रही होगी।', words:['कल','रात','से','बारिश','हो','रही','होगी','और'] },
              { english:'I will not have been studying.', hindi:'मैं पढ़ नहीं रहा होऊँगा।', words:['मैं','पढ़','नहीं','रहा','होऊँगा','और','यह','वह'] },
              { english:'How long will you have been studying?', hindi:'तुम कब से पढ़ रहे होओगे?', words:['तुम','कब','से','पढ़','रहे','होओगे','और','था'] },
              { english:'What will you have been doing?', hindi:'तुम क्या कर रहे होओगे?', words:['तुम','क्या','कर','रहे','होओगे','और','था','यह'] }
            ]
          }
        }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════
  // SPOKEN PHRASES (chat ke liye quick chips)
  // AI chat poore data se answer dega — HTML ke sendSpoken() me.
  // ═══════════════════════════════════════════════════════════
  spokenPhrases: [
    { en:'What is assertive sentence?', hi:'Assertive sentence क्या है?' },
    { en:'Tell me about present tense', hi:'Present tense के बारे में बताओ' },
    { en:'What is past perfect tense?', hi:'Past perfect tense क्या है?' },
    { en:'What is noun clause?', hi:'Noun clause क्या है?' },
    { en:'What is modal verb?', hi:'Modal verb क्या है?' },
    { en:'Good morning', hi:'सुप्रभात' },
    { en:'Hello, how are you?', hi:'नमस्ते, आप कैसे हैं?' },
    { en:'Thank you', hi:'धन्यवाद' },
    { en:'What is your name?', hi:'आपका नाम क्या है?' },
    { en:'Can you speak English?', hi:'क्या आप अंग्रेज़ी बोल सकते हैं?' }
  ]
};
