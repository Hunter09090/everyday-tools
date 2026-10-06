const tools=[
{id:'age',name:'Age Calculator',icon:'🎂',cat:'calculator',desc:'Find your exact age in years, months and days.'},
{id:'percentage',name:'Percentage Calculator',icon:'%',cat:'calculator',desc:'Calculate percentages quickly and accurately.'},
{id:'discount',name:'Discount Calculator',icon:'🏷️',cat:'calculator',desc:'Find sale prices and savings in seconds.'},
{id:'profit',name:'Profit & Loss',icon:'📈',cat:'calculator',desc:'Calculate profit, loss and percentage.'},
{id:'bmi',name:'BMI Calculator',icon:'⚖️',cat:'calculator',desc:'Check BMI and understand your healthy range.'},
{id:'cgpa',name:'GPA / CGPA Calculator',icon:'🎓',cat:'calculator',desc:'Calculate GPA and cumulative CGPA.'},
{id:'date',name:'Date Calculator',icon:'📅',cat:'calculator',desc:'Calculate dates, durations and day differences.'},
{id:'unit',name:'Unit Converter',icon:'⇄',cat:'converter',desc:'Convert length, weight, temperature and more.'},
{id:'currency',name:'Currency Converter',icon:'💱',cat:'converter',desc:'Convert currencies with a clean interface.'},
{id:'word',name:'Word Counter',icon:'📝',cat:'text',desc:'Count words, characters and reading time.'},
{id:'case',name:'Case Converter',icon:'Aa',cat:'text',desc:'Convert text between upper, lower and title case.'},
{id:'qr',name:'QR Code Generator',icon:'▦',cat:'utility',desc:'Create a QR code from any text or link.'},
{id:'password',name:'Password Generator',icon:'🔐',cat:'utility',desc:'Generate strong random passwords instantly.'},
{id:'random',name:'Random Number',icon:'🎲',cat:'utility',desc:'Generate random numbers within any range.'},
{id:'timer',name:'Countdown Timer',icon:'⏱️',cat:'utility',desc:'Set a simple countdown for any task.'}
];
const grid=document.getElementById('toolGrid'),search=document.getElementById('search'),count=document.getElementById('resultCount'),empty=document.getElementById('empty');let category='all';
function render(){const q=search.value.toLowerCase().trim();const list=tools.filter(t=>(category==='all'||t.cat===category)&&(!q||(t.name+' '+t.desc+' '+t.cat).toLowerCase().includes(q)));grid.innerHTML=list.map(t=>`<a class="tool-card" href="tools/${t.id}.html"><div class="tool-icon">${t.icon}</div><h3>${t.name}</h3><p>${t.desc}</p><span class="tool-tag">${t.cat}</span></a>`).join('');count.textContent=`${list.length} tool${list.length!==1?'s':''}`;empty.hidden=list.length>0}
render();search.addEventListener('input',render);document.querySelectorAll('.category').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.category').forEach(x=>x.classList.remove('active'));b.classList.add('active');category=b.dataset.category;render()}));document.querySelectorAll('[data-search]').forEach(b=>b.addEventListener('click',()=>{search.value=b.dataset.search;document.getElementById('tools').scrollIntoView({behavior:'smooth'});render()}));
const themeBtn=document.getElementById('themeBtn');if(localStorage.theme==='dark')document.body.classList.add('dark');themeBtn.onclick=()=>{document.body.classList.toggle('dark');localStorage.theme=document.body.classList.contains('dark')?'dark':'light'};
