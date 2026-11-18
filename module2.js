/* ============================================================
   MODULE 2 DATA — Sentences, Clauses, Tenses, Spoken Phrases
   To add more: push into arrays below.
   ============================================================ */
window.MODULE2 = {

  /* ---------- SENTENCES ---------- */
  sentences: [
    {id:'assertive',title:'Assertive Sentence',hi:'साधारण कथन वाक्य',use:'किसी बात को सीधे बताने के लिए (statement)',s:{simple:'He is a doctor.',neg:'He is not a doctor.',wh:'What is his profession?'},rules:'Structure: Subject + verb + object.\nEnds with a full stop (.).\nCan be positive or negative.'},
    {id:'interrogative',title:'Interrogative Sentence',hi:'प्रश्नवाचक वाक्य',use:'सवाल पूछने के लिए',s:{simple:'Is he a doctor?',neg:'Is he not a doctor?',wh:'What is his profession?'},rules:'Structure: Helping verb + subject + main verb + object?\nEnds with a question mark (?).\nStarts with helping verb or wh-word.'},
    {id:'imperative',title:'Imperative Sentence',hi:'आदेशात्मक वाक्य',use:'आदेश, निवेदन या सलाह देने के लिए',s:{simple:'Please open the door.',neg:'Do not open the door.',wh:'Why should I open the door?'},rules:'Structure: Verb + object (subject "you" hidden).\nNegative: Do not + verb + object.\nUsed for orders, requests, advice.'},
    {id:'exclamatory',title:'Exclamatory Sentence',hi:'विस्मयादिबोधक वाक्य',use:'आश्चर्य, खुशी या दुख व्यक्त करने के लिए',s:{simple:'What a beautiful day!',neg:'What an awful day!',wh:'How beautiful the day is!'},rules:'Structure: What + a/an + adjective + noun!\nOr: How + adjective + subject + verb!\nEnds with an exclamation mark (!).'}
  ],

  /* ---------- CLAUSES ---------- */
  clauses: [
    {id:'independent',title:'Independent Clause',hi:'स्वतंत्र उपवाक्य',use:'अपने आप में पूरा वाक्य बन सके',s:{simple:'She went to school.',neg:'She did not go to school.',wh:'Why did she go to school?'},rules:'Has a subject and a verb.\nExpresses a complete thought.\nCan stand alone as a sentence.'},
    {id:'dependent',title:'Dependent Clause',hi:'आश्रित उपवाक्य',use:'अकेले पूरा अर्थ नहीं देता, मुख्य वाक्य पर निर्भर',s:{simple:'When she arrived, we ate.',neg:'When she did not arrive, we waited.',wh:'When did she arrive?'},rules:'Has a subject and a verb.\nDoes not express a complete thought.\nNeeds an independent clause.\nTypes: noun, adjective, adverbial.'},
    {id:'noun',title:'Noun Clause',hi:'संज्ञा उपवाक्य',use:'वाक्य में संज्ञा का काम करता है',s:{simple:'What he said is true.',neg:'What he said is not false.',wh:'What did he say?'},rules:'Acts as a noun (subject/object).\nStarts with that, what, whether, if, who, etc.\nExample: I know what he wants.'},
    {id:'adjective',title:'Adjective Clause',hi:'विशेषण उपवाक्य',use:'किसी संज्ञा की विशेषता बताता है',s:{simple:'The man who came is my uncle.',neg:'The man who came is not my uncle.',wh:'Who is the man who came?'},rules:'Acts as an adjective.\nStarts with who, which, that, whose, whom.\nModifies a noun in the main clause.'},
    {id:'adverbial',title:'Adverbial Clause',hi:'क्रिया-विशेषण उपवाक्य',use:'समय, स्थान, कारण, शर्त बताता है',s:{simple:'I will call you when I arrive.',neg:'I will not call you when I arrive.',wh:'When will you call me?'},rules:'Acts as an adverb.\nStarts with when, where, because, if, although, etc.\nModifies the main verb.'}
  ],

  /* ---------- TENSES ---------- */
  tenseGroups: {
    present:{title:'Present Tense',types:[
      {id:'p-indef',title:'Present Indefinite Tense',hi:'सामान्य वर्तमान काल',use:'आदत, सामान्य सत्य, नियमित क्रिया',s:{simple:'He plays cricket.',neg:'He does not play cricket.',wh:'What does he play?'},rules:'Structure: Subject + V1 (+s/es) + object.\nNegative: do/does not + V1.\nQuestion: Do/Does + subject + V1?'},
      {id:'p-perf',title:'Present Perfect Tense',hi:'पूर्ण वर्तमान काल',use:'अभी-अभी पूरा हुआ काम, अनुभव',s:{simple:'He has finished the work.',neg:'He has not finished the work.',wh:'What has he finished?'},rules:'Structure: Subject + has/have + V3.\nNegative: has/have not + V3.\nQuestion: Has/Have + subject + V3?'},
      {id:'p-cont',title:'Present Continuous Tense',hi:'अपूर्ण वर्तमान काल',use:'अभी चल रहा काम',s:{simple:'He is playing cricket.',neg:'He is not playing cricket.',wh:'What is he playing?'},rules:'Structure: Subject + is/am/are + V1-ing.\nNegative: is/am/are not + V1-ing.\nQuestion: Is/Am/Are + subject + V1-ing?'},
      {id:'p-perf-cont',title:'Present Perfect Continuous Tense',hi:'पूर्ण अपूर्ण वर्तमान काल',use:'पिछले समय से अब तक चल रहा काम',s:{simple:'He has been playing since morning.',neg:'He has not been playing since morning.',wh:'Since when has he been playing?'},rules:'Structure: Subject + has/have been + V1-ing + since/for.\nNegative: has/have not been + V1-ing.\nQuestion: Since when/How long + has/have + subject + been + V1-ing?'}
    ]},
    past:{title:'Past Tense',types:[
      {id:'pa-indef',title:'Past Indefinite Tense',hi:'सामान्य भूतकाल',use:'बीते समय में पूरा हुआ काम',s:{simple:'He played cricket.',neg:'He did not play cricket.',wh:'What did he play?'},rules:'Structure: Subject + V2 + object.\nNegative: did not + V1.\nQuestion: Did + subject + V1?'},
      {id:'pa-perf',title:'Past Perfect Tense',hi:'पूर्ण भूतकाल',use:'एक काम दूसरे से पहले पूरा हुआ',s:{simple:'He had finished the work before I came.',neg:'He had not finished the work before I came.',wh:'What had he finished?'},rules:'Structure: Subject + had + V3.\nNegative: had not + V3.\nQuestion: Had + subject + V3?'},
      {id:'pa-cont',title:'Past Continuous Tense',hi:'अपूर्ण भूतकाल',use:'बीते समय में चल रहा काम',s:{simple:'He was playing cricket.',neg:'He was not playing cricket.',wh:'What was he playing?'},rules:'Structure: Subject + was/were + V1-ing.\nNegative: was/were not + V1-ing.\nQuestion: Was/Were + subject + V1-ing?'},
      {id:'pa-perf-cont',title:'Past Perfect Continuous Tense',hi:'पूर्ण अपूर्ण भूतकाल',use:'बीते समय से पहले चल रहा काम',s:{simple:'He had been playing since morning.',neg:'He had not been playing since morning.',wh:'Since when had he been playing?'},rules:'Structure: Subject + had been + V1-ing.\nNegative: had not been + V1-ing.\nQuestion: Since when + had + subject + been + V1-ing?'}
    ]},
    future:{title:'Future Tense',types:[
      {id:'f-indef',title:'Future Indefinite Tense',hi:'सामान्य भविष्य काल',use:'भविष्य में होने वाला काम',s:{simple:'He will play cricket.',neg:'He will not play cricket.',wh:'What will he play?'},rules:'Structure: Subject + will + V1.\nNegative: will not + V1.\nQuestion: Will + subject + V1?'},
      {id:'f-perf',title:'Future Perfect Tense',hi:'पूर्ण भविष्य काल',use:'भविष्य में किसी समय तक पूरा हो चुका काम',s:{simple:'He will have finished the work by 5 PM.',neg:'He will not have finished the work by 5 PM.',wh:'When will he have finished the work?'},rules:'Structure: Subject + will have + V3.\nNegative: will not have + V3.\nQuestion: When + will + subject + have + V3?'},
      {id:'f-cont',title:'Future Continuous Tense',hi:'अपूर्ण भविष्य काल',use:'भविष्य में चल रहा काम',s:{simple:'He will be playing cricket.',neg:'He will not be playing cricket.',wh:'What will he be playing?'},rules:'Structure: Subject + will be + V1-ing.\nNegative: will not be + V1-ing.\nQuestion: What + will + subject + be + V1-ing?'},
      {id:'f-perf-cont',title:'Future Perfect Continuous Tense',hi:'पूर्ण अपूर्ण भविष्य काल',use:'भविष्य में किसी समय तक चलता रहने वाला काम',s:{simple:'He will have been playing since morning.',neg:'He will not have been playing since morning.',wh:'Since when will he have been playing?'},rules:'Structure: Subject + will have been + V1-ing.\nNegative: will not have been + V1-ing.\nQuestion: Since when + will + subject + have been + V1-ing?'}
    ]}
  },

  /* ---------- SPOKEN PHRASES ---------- */
  spokenPhrases: [
    {en:'Good morning',hi:'सुप्रभात (सुबह की शुभकामना)'},
    {en:'Hello, how are you?',hi:'नमस्ते, आप कैसे हैं?'},
    {en:'I am fine, thank you.',hi:'मैं ठीक हूँ, धन्यवाद।'},
    {en:'What is your name?',hi:'आपका नाम क्या है?'},
    {en:'My name is Rohan.',hi:'मेरा नाम रोहन है।'},
    {en:'Nice to meet you.',hi:'आपसे मिलकर अच्छा लगा।'},
    {en:'Where are you from?',hi:'आप कहाँ से हैं?'},
    {en:'I am from India.',hi:'मैं भारत से हूँ।'},
    {en:'How old are you?',hi:'आपकी उम्र क्या है?'},
    {en:'I am 20 years old.',hi:'मैं 20 साल का हूँ।'},
    {en:'Thank you very much.',hi:'बहुत धन्यवाद।'},
    {en:'You are welcome.',hi:'आपका स्वागत है।'},
    {en:'Please help me.',hi:'कृपया मेरी मदद करें।'},
    {en:'I am sorry.',hi:'मुझे खेद है।'},
    {en:'Excuse me.',hi:'क्षमा करें।'},
    {en:'See you later.',hi:'बाद में मिलते हैं।'},
    {en:'Have a nice day.',hi:'आपका दिन अच्छा हो।'},
    {en:'Good night.',hi:'शुभ रात्रि।'},
    {en:'How much does it cost?',hi:'इसकी कीमत क्या है?'},
    {en:'Can you speak English?',hi:'क्या आप अंग्रेज़ी बोल सकते हैं?'}
  ]
};
