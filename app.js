const tools=[
{id:'age',name:'Age Calculator',icon:'🎂',cat:'calculator',desc:'Find your exact age in years, months and days.'},
{id:'percentage',name:'Percentage Calculator',icon:'%',cat:'calculator',desc:'Calculate percentages quickly and accurately.'},
{id:'discount',name:'Discount Calculator',icon:'🏷️',cat:'calculator',desc:'Find sale prices and savings in seconds.'},
{id:'profit',name:'Profit & Loss',icon:'📈',cat:'calculator',desc:'Calculate profit, loss and percentage.'},
{id:'bmi',name:'BMI Calculator',icon:'⚖️',cat:'calculator',desc:'Check BMI and understand your healthy range.'},
{id:'cgpa',name:'GPA / CGPA Calculator',icon:'🎓',cat:'calculator',desc:'Calculate GPA and cumulative CGPA.'},
{id:'date',name:'Date Calculator',icon:'📅',cat:'calculator',desc:'Calculate date differences and add days.'},
{id:'emi',name:'EMI Calculator',icon:'💳',cat:'calculator',desc:'Estimate monthly loan EMI and total interest.'},
{id:'loan',name:'Loan Calculator',icon:'🏦',cat:'calculator',desc:'Estimate simple-interest loan repayment.'},
{id:'salary',name:'Salary Calculator',icon:'💰',cat:'calculator',desc:'Calculate net monthly and annual salary.'},
{id:'tax',name:'Tax Calculator',icon:'🧾',cat:'calculator',desc:'Estimate tax from a percentage rate.'},
{id:'area',name:'Area Calculator',icon:'📐',cat:'calculator',desc:'Calculate rectangle, triangle and circle area.'},
{id:'average',name:'Average Calculator',icon:'📊',cat:'calculator',desc:'Find the average, sum and count of numbers.'},
{id:'unit',name:'Unit Converter',icon:'⇄',cat:'converter',desc:'Convert length, weight and temperature.'},
{id:'currency',name:'Currency Converter',icon:'💱',cat:'converter',desc:'Convert currencies with the latest available rate.'},
{id:'timezone',name:'Time Zone Converter',icon:'🌍',cat:'utility',desc:'Convert a date and time between major time zones.'},
{id:'days-until',name:'Days Until',icon:'⏳',cat:'utility',desc:'See how many days remain until a date.'},
{id:'number-to-words',name:'Number to Words',icon:'🔢',cat:'utility',desc:'Turn whole numbers into English words.'},
{id:'random',name:'Random Number',icon:'🎲',cat:'utility',desc:'Generate random numbers within any range.'},
{id:'random-picker',name:'Random Name Picker',icon:'🎯',cat:'utility',desc:'Pick a random name or item from a list.'},
{id:'timer',name:'Countdown Timer',icon:'⏱️',cat:'utility',desc:'Set a simple countdown for any task.'},
{id:'password',name:'Password Generator',icon:'🔐',cat:'utility',desc:'Generate strong random passwords locally.'},
{id:'password-strength',name:'Password Strength',icon:'🛡️',cat:'utility',desc:'Check password strength locally in your browser.'},
{id:'qr',name:'QR Code Generator',icon:'▦',cat:'utility',desc:'Create a QR code from text or a link.'},
{id:'word',name:'Word Counter',icon:'📝',cat:'text',desc:'Count words, characters and reading time.'},
{id:'case',name:'Case Converter',icon:'Aa',cat:'text',desc:'Convert text between upper, lower and title case.'},
{id:'json-formatter',name:'JSON Formatter',icon:'{ }',cat:'text',desc:'Format and minify JSON in your browser.'},
{id:'url-encoder',name:'URL Encoder / Decoder',icon:'🔗',cat:'text',desc:'Encode or decode URL text instantly.'},
{id:'duplicate-lines',name:'Duplicate Line Remover',icon:'🧹',cat:'text',desc:'Remove repeated lines and optionally sort them.'}
];
const grid=document.getElementById('toolGrid'),search=document.getElementById('search'),count=document.getElementById('resultCount'),empty=document.getElementById('empty');let category='all';
function render(){const q=search.value.toLowerCase().trim();const list=tools.filter(t=>(category==='all'||t.cat===category)&&(!q||(t.name+' '+t.desc+' '+t.cat).toLowerCase().includes(q)));grid.innerHTML=list.map(t=>'<a class="tool-card" href="tools/'+t.id+'.html"><div class="tool-icon">'+t.icon+'</div><h3>'+t.name+'</h3><p>'+t.desc+'</p><span class="tool-tag">'+t.cat+'</span></a>').join('');count.textContent=list.length+' tool'+(list.length!==1?'s':'');empty.hidden=list.length>0}
render();search.addEventListener('input',render);document.querySelectorAll('.category').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.category').forEach(x=>x.classList.remove('active'));b.classList.add('active');category=b.dataset.category;render()}));document.querySelectorAll('[data-search]').forEach(b=>b.addEventListener('click',()=>{search.value=b.dataset.search;document.getElementById('tools').scrollIntoView({behavior:'smooth'});render()}));
const themeBtn=document.getElementById('themeBtn');if(localStorage.theme==='dark')document.body.classList.add('dark');themeBtn.onclick=()=>{document.body.classList.toggle('dark');localStorage.theme=document.body.classList.contains('dark')?'dark':'light'};
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));