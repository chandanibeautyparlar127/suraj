// practice.js - Question Generator
function generateQuestions(item, type, pool) {
  const allEx = [
    ...(item.ex.s||[]), ...(item.ex.n||[]), ...(item.ex.w||[])
  ];
  const questions = [];

  if (type === 'basic') {
    allEx.forEach(ex => {
      const verb = item.name;
      const escaped = verb.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const blanked = ex.e.replace(new RegExp(`\\b${escaped}\\b`, 'i'), '_____');
      if (!blanked.includes('_____')) return;
      const wrongs = pool.filter(p => p.name !== verb).sort(()=>Math.random()-.5).slice(0,3).map(p=>p.name);
      const options = shuffle([verb, ...wrongs]);
      questions.push({ q: blanked, options, answer: verb, hint: ex.h });
    });
  } 
  else if (type === 'hard') {
    allEx.forEach(ex => {
      questions.push({ q: ex.h, answer: ex.e, prompt: 'अंग्रेजी में अनुवाद करें:' });
    });
  } 
  else if (type === 'advance') {
    allEx.forEach(ex => {
      questions.push({ q: ex.e, answer: ex.h, prompt: 'हिंदी में अनुवाद करें:' });
    });
  }
  return questions;
}

function shuffle(a){ return a.slice().sort(()=>Math.random()-.5); }
function normalize(s){ return (s||'').toLowerCase().replace(/[.,?!'";:।]/g,'').replace(/\s+/g,' ').trim(); }
function checkAnswer(user, expected){ return normalize(user) === normalize(expected); }
