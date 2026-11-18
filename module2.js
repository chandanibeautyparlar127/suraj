const module2 = {
  id: 'm2',
  title: 'Module 2: Grammar',
  desc: 'Sentence, Clause, and Tense structures.',
  icon: '📘',
  items: [
    {
      id: 'sentence',
      title: 'Sentence',
      desc: 'Types of sentences',
      icon: '📝',
      type: 'standard',
      definition: 'A group of words that makes complete sense is called a sentence.',
      rule: 'Starts with a capital letter and ends with a full stop, question mark, or exclamation mark.',
      examples: {
        simple: [ { en: 'I am a boy.', hi: 'मैं एक लड़का हूँ।' }, { en: 'She is a girl.', hi: 'वह एक लड़की है।' }, { en: 'They play cricket.', hi: 'वे क्रिकेट खेलते हैं।' } ],
        negative: [ { en: 'I am not a boy.', hi: 'मैं लड़का नहीं हूँ।' }, { en: 'She is not a girl.', hi: 'वह लड़की नहीं है।' }, { en: 'They do not play cricket.', hi: 'वे क्रिकेट नहीं खेलते।' } ],
        wh: [ { en: 'Who is he?', hi: 'वह कौन है?' }, { en: 'Where are they?', hi: 'वे कहाँ हैं?' }, { en: 'What do you do?', hi: 'तुम क्या करते हो?' } ]
      }
    },
    {
      id: 'clause',
      title: 'Clause',
      desc: 'Independent and Dependent clauses',
      icon: '🔗',
      type: 'standard',
      definition: 'A clause is a group of words that contains a subject and a verb.',
      rule: 'Independent clauses can stand alone. Dependent clauses cannot.',
      examples: {
        simple: [ { en: 'He is playing.', hi: 'वह खेल रहा है।' }, { en: 'I know the truth.', hi: 'मैं सच जानता हूँ।' }, { en: 'When he came...', hi: 'जब वह आया...' } ],
        negative: [ { en: 'He is not playing.', hi: 'वह नहीं खेल रहा है।' }, { en: 'I do not know the truth.', hi: 'मैं सच नहीं जानता।' }, { en: 'When he did not come...', hi: 'जब वह नहीं आया...' } ],
        wh: [ { en: 'Who is playing?', hi: 'कौन खेल रहा है?' }, { en: 'Why do you know the truth?', hi: 'तुम सच कैसे जानते हो?' }, { en: 'When did he come?', hi: 'वह कब आया?' } ]
      }
    },
    {
      id: 'tense',
      title: 'Tense',
      desc: 'Present, Past, Future',
      icon: '⏳',
      type: 'standard',
      definition: 'Tense shows the time of an action (Present, Past, or Future).',
      rule: 'Present (V1/V5), Past (V2), Future (will/shall + V1).',
      examples: {
        simple: [ { en: 'I write a letter.', hi: 'मैं पत्र लिखता हूँ।' }, { en: 'I wrote a letter.', hi: 'मैंने पत्र लिखा।' }, { en: 'I will write a letter.', hi: 'मैं पत्र लिखूँगा।' } ],
        negative: [ { en: 'I do not write a letter.', hi: 'मैं पत्र नहीं लिखता।' }, { en: 'I did not write a letter.', hi: 'मैंने पत्र नहीं लिखा।' }, { en: 'I will not write a letter.', hi: 'मैं पत्र नहीं लिखूँगा।' } ],
        wh: [ { en: 'Why do I write a letter?', hi: 'मैं पत्र क्यों लिखता हूँ?' }, { en: 'Why did I write a letter?', hi: 'मैंने पत्र क्यों लिखा?' }, { en: 'Why will I write a letter?', hi: 'मैं पत्र क्यों लिखूँगा?' } ]
      }
    }
  ]
};
