// app.js
let stack = [{ view:'home' }];

function navigate(v){ stack.push(v); render(); }
function goBack(){ if(stack.length>1) stack.pop(); render(); }

function render(){
  const cur = stack[stack.length-1];
  const content = document.getElementById('content');
  const backBtn = document.getElementById('backBtn');
  const crumb = document.getElementById('breadcrumb');
  backBtn.style.display = stack.length > 1 ? 'inline-block' : 'none';
  content.style.display = 'grid';
  content.innerHTML = '';

  if (cur.view === 'home') {
    crumb.textContent = 'Home';
    [MODULE1, MODULE2].forEach(m => {
      content.innerHTML += cardHTML(m.icon, m.title, m.sub, `navigate({view:'module',mod:'${m.id}'})`);
    });
  }
  else if (cur.view === 'module') {
    const mod = cur.mod === 'm1' ? MODULE1 : MODULE2;
    crumb.textContent = mod.title;
    mod.groups.forEach(g => {
      content.innerHTML += cardHTML(g.icon, g.title, '', `navigate({view:'group',mod:'${cur.mod}',gid:'${g.id}'})`);
    });
  }
  else if (cur.view === 'group') {
    const mod = cur.mod === 'm1' ? MODULE1 : MODULE2;
    const grp = mod.groups.find(g=>g.id===cur.gid);
    crumb.textContent = `${mod.title} › ${grp.title}`;
    if (grp.verbs) {
      grp.verbs.forEach(v => {
        content.innerHTML += cardHTML('🔤', v.name, v.meaning, `navigate({view:'verb',mod:'${cur.mod}',gid:'${grp.id}',name:'${v.name}'})`);
      });
    } else if (grp.subs) {
      grp.subs.forEach(s => {
        content.innerHTML += cardHTML(s.icon, s.title, '', `navigate({view:'sub',mod:'${cur.mod}',gid:'${grp.id}',sid:'${s.id}'})`);
      });
    }
  }
  else if (cur.view === 'sub') {
    const mod = cur.mod==='m1'?MODULE1:MODULE2;
    const grp = mod.groups.find(g=>g.id===cur.gid);
    const sub = grp.subs.find(s=>s.id===cur.sid);
    crumb.textContent = `${grp.title} › ${sub.title}`;
    if (sub.subs) {
      sub.subs.forEach(s => {
        content.innerHTML += cardHTML(s.icon, s.title, '', `navigate({view:'detail',item:'sub',mod:'${cur.mod}',gid:'${grp.id}',sid:'${sub.id}',ssid:'${s.id}'})`);
      });
    } else {
      renderDetailView(sub);
    }
  }
  else if (cur.view === 'verb') {
    const grp = MODULE1.groups.find(g=>g.id===cur.gid);
    const verb = grp.verbs.find(v=>v.name===cur.name);
    renderVerbView(verb, grp.verbs);
  }
  else if (cur.view === 'detail') {
    const mod = cur.mod==='m1'?MODULE1:MODULE2;
    const grp = mod.groups.find(g=>g.id===cur.gid);
    const sub = grp.subs.find(s=>s.id===cur.sid);
    const target = sub.subs.find(s=>s.id===cur.ssid);
    renderDetailView(target);
  }
}

function cardHTML(icon, title, sub, onclick){
  return `<div class="card" onclick="${onclick}">
    <div class="card-icon">${icon}</div>
    <div class="card-title">${title}</div>
    ${sub?`<div class="card-sub">${sub}</div>`:''}
  </div>`;
}

function renderVerbView(verb, pool){
  const content = document.getElementById('content');
  content.style.display = 'block';
  document.getElementById('breadcrumb').textContent = `Verb: ${verb.name}`;

  let html = `<div class="detail-view">
    <h2>${verb.name} — ${verb.meaning}</h2>
    <div class="section"><div class="section-title">📖 Use / उपयोग</div><div>${verb.usage}</div></div>
    <div class="section"><div class="section-title">🧱 Structures / बनावट</div>
      <div class="structure">Simple: ${verb.structure.s}</div>
      <div class="structure">Negative: ${verb.structure.n}</div>
      <div class="structure">Wh-Question: ${verb.structure.w}</div>
    </div>
    ${renderExSection('✅ Simple Sentence', verb.ex.s)}
    ${renderExSection('❌ Negative Sentence', verb.ex.n)}
    ${renderExSection('❓ Wh-Question Sentence', verb.ex.w)}
    <div class="practice-tabs">
      <div class="ptab active" id="tab-basic" onclick="startPractice('${verb.name}','basic',this)">1. Basic (MCQ)</div>
      <div class="ptab" id="tab-hard" onclick="startPractice('${verb.name}','hard',this)">2. Hard (हिंदी→English)</div>
      <div class="ptab" id="tab-advance" onclick="startPractice('${verb.name}','advance',this)">3. Advance (English→हिंदी)</div>
    </div>
    <div id="practiceArea"></div>
  </div>`;
  content.innerHTML = html;
  startPractice(verb.name, 'basic');
}

function renderDetailView(item){
  const content = document.getElementById('content');
  content.style.display = 'block';
  document.getElementById('breadcrumb').textContent = item.title;
  let html = `<div class="detail-view">
    <h2>${item.icon||''} ${item.title}</h2>
    <div class="section"><div class="section-title">📖 Definition / परिभाषा</div><div>${item.def}</div></div>
    <div class="section"><div class="section-title">🧱 Structure / नियम</div><div class="structure">${item.rule}</div></div>
    ${renderExSection('✅ Examples - Simple', item.ex.s)}
    ${renderExSection('❌ Examples - Negative', item.ex.n)}
    ${renderExSection('❓ Examples - Wh-Question', item.ex.w)}
  </div>`;
  content.innerHTML = html;
}

function renderExSection(title, arr){
  return `<div class="section"><div class="section-title">${title}</div>
    ${arr.map(x=>`<div class="example"><span class="en">${x.e}</span><span class="hi">${x.h}</span></div>`).join('')}
  </div>`;
}

// ---- PRACTICE ----
let practiceState = { questions: [], idx: 0, correct: 0, verb: '', type: '' };

function startPractice(verbName, type, el){
  if (el) {
    document.querySelectorAll('.ptab').forEach(t=>t.classList.remove('active'));
    el.classList.add('active');
  }
  const grp = MODULE1.groups.find(g => g.verbs.find(v=>v.name===verbName));
  const verb = grp.verbs.find(v=>v.name===verbName);
  const questions = generateQuestions(verb, type, grp.verbs);
  practiceState = { questions, idx:0, correct:0, verb:verbName, type };
  renderQuestion();
}

function renderQuestion(){
  const area = document.getElementById('practiceArea');
  if (!area) return;
  const st = practiceState;
  if (st.idx >= st.questions.length) {
    area.innerHTML = `<div class="feedback correct">
      🎉 Practice Complete! Score: ${st.correct}/${st.questions.length}
    </div>
    <button class="btn" onclick="startPractice('${st.verb}','${st.type}')">🔁 Retry</button>`;
    return;
  }
  const q = st.questions[st.idx];
  let html = `<div class="progress">Question ${st.idx+1} / ${st.questions.length} • Correct: ${st.correct}</div>`;
  html += `<div class="question-box">`;

  if (st.type === 'basic') {
    html += `<div class="q">${q.q}</div>
      <div class="options" id="opts">
        ${q.options.map(o=>`<div class="option" onclick="checkMCQ(this,'${o.replace(/'/g,"\\'")}','${q.answer.replace(/'/g,"\\'")}', '${(q.hint||'').replace(/'/g,"\\'")}')">${o}</div>`).join('')}
      </div>`;
  } else {
    html += `<div class="q">${q.prompt}<br><strong>${q.q}</strong></div>
      <input type="text" id="ansInput" placeholder="अपना उत्तर लिखें..." autocomplete="off">
      <button class="btn" onclick="checkTyped('${q.answer.replace(/'/g,"\\'")}')">Submit</button>
      <div id="typedFeedback"></div>`;
  }
  html += `</div>`;
  area.innerHTML = html;

  if (st.type !== 'basic') {
    const inp = document.getElementById('ansInput');
    if (inp) inp.focus();
  }
}

function checkMCQ(el, chosen, answer, hint){
  if (chosen === answer) {
    el.classList.add('correct');
    practiceState.correct++;
  } else {
    el.classList.add('wrong');
    document.querySelectorAll('#opts .option').forEach(o=>{
      if (o.textContent === answer) o.classList.add('correct');
    });
  }
  document.querySelectorAll('#opts .option').forEach(o=>o.onclick=null);
  setTimeout(()=>{ practiceState.idx++; renderQuestion(); }, 900);
}

function checkTyped(answer){
  const inp = document.getElementById('ansInput');
  const fb = document.getElementById('typedFeedback');
  if (!inp) return;
  if (checkAnswer(inp.value, answer)) {
    fb.innerHTML = `<div class="feedback correct">✅ Correct!</div>`;
    practiceState.correct++;
  } else {
    fb.innerHTML = `<div class="feedback wrong">❌ Incorrect. Correct answer:</div>
      <div class="reveal">${answer}</div>`;
  }
  inp.disabled = true;
  setTimeout(()=>{ practiceState.idx++; renderQuestion(); }, 1800);
}

// ---- INIT ----
render();
