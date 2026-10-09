(() => {
  "use strict";
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const categories = [
    {id:"calculator",icon:"∑",color:"#9b8cff",en:"Calculators & Math",bn:"ক্যালকুলেটর ও গণিত",descEn:"Fast everyday calculations",descBn:"দৈনন্দিন হিসাব সহজে"},
    {id:"converter",icon:"⇄",color:"#62d7e8",en:"Converters",bn:"কনভার্টার",descEn:"Convert units and currencies",descBn:"একক ও মুদ্রা রূপান্তর"},
    {id:"text",icon:"Aa",color:"#ff9d75",en:"Text & Writing",bn:"টেক্সট ও লেখালেখি",descEn:"Format, count and clean text",descBn:"টেক্সট গুছান ও গণনা করুন"},
    {id:"image",icon:"▧",color:"#ed8ac2",en:"Image & Design",bn:"ছবি ও ডিজাইন",descEn:"Image tools are on the roadmap",descBn:"ছবির টুলস আসছে"},
    {id:"pdf",icon:"▤",color:"#ff777e",en:"PDF & Documents",bn:"PDF ও ডকুমেন্ট",descEn:"Document utilities are coming",descBn:"ডকুমেন্ট টুলস আসছে"},
    {id:"developer",icon:"⌘",color:"#79b8ff",en:"Developer Tools",bn:"ডেভেলপার টুলস",descEn:"Handy web-development helpers",descBn:"ওয়েব ডেভেলপমেন্ট সহায়ক টুলস"},
    {id:"datetime",icon:"◷",color:"#77d6a5",en:"Date & Time",bn:"তারিখ ও সময়",descEn:"Dates, timers and time zones",descBn:"তারিখ, টাইমার ও টাইম জোন"},
    {id:"money",icon:"৳",color:"#f6c85f",en:"Money & Finance",bn:"টাকা ও ফাইন্যান্স",descEn:"Plan and calculate money",descBn:"অর্থের হিসাব ও পরিকল্পনা"},
    {id:"education",icon:"⌑",color:"#9bb7ff",en:"Education & Study",bn:"শিক্ষা ও পড়াশোনা",descEn:"Useful student helpers",descBn:"শিক্ষার্থীদের প্রয়োজনীয় টুলস"},
    {id:"fun",icon:"✧",color:"#d9a0ff",en:"Fun & Random",bn:"মজার ও র‍্যান্ডম",descEn:"Pick, generate and explore",descBn:"বেছে নিন, তৈরি করুন, মজা করুন"}
  ];
  const tools = [
    {id:"age",icon:"🎂",cat:"calculator",en:"Age Calculator",bn:"বয়স ক্যালকুলেটর",descEn:"Find your age in years, months and days.",descBn:"বছর, মাস ও দিনে সঠিক বয়স জানুন.",keys:"birth date birthday"},
    {id:"percentage",icon:"％",cat:"calculator",en:"Percentage Calculator",bn:"শতকরা ক্যালকুলেটর",descEn:"Calculate percentages quickly.",descBn:"সহজে শতকরা হিসাব করুন.",keys:"percent math"},
    {id:"discount",icon:"🏷️",cat:"money",en:"Discount Calculator",bn:"ছাড়ের হিসাব",descEn:"Calculate sale price and savings.",descBn:"ছাড়ের পর দাম ও সাশ্রয় হিসাব করুন.",keys:"sale price"},
    {id:"profit",icon:"📈",cat:"money",en:"Profit & Loss",bn:"লাভ-ক্ষতি",descEn:"Calculate profit, loss and percentage.",descBn:"লাভ, ক্ষতি ও শতকরা হিসাব করুন.",keys:"business"},
    {id:"bmi",icon:"⚖️",cat:"calculator",en:"BMI Calculator",bn:"BMI ক্যালকুলেটর",descEn:"Calculate body mass index.",descBn:"বডি মাস ইনডেক্স হিসাব করুন.",keys:"health weight height"},
    {id:"cgpa",icon:"🎓",cat:"education",en:"GPA / CGPA Calculator",bn:"GPA / CGPA ক্যালকুলেটর",descEn:"Calculate grade point averages.",descBn:"গ্রেড পয়েন্টের গড় হিসাব করুন.",keys:"student marks result"},
    {id:"date",icon:"📅",cat:"datetime",en:"Date Calculator",bn:"তারিখ ক্যালকুলেটর",descEn:"Find date differences and add days.",descBn:"তারিখের ব্যবধান ও দিন যোগ করুন.",keys:"calendar"},
    {id:"emi",icon:"💳",cat:"money",en:"EMI Calculator",bn:"EMI ক্যালকুলেটর",descEn:"Estimate monthly loan payments.",descBn:"মাসিক ঋণের কিস্তি অনুমান করুন.",keys:"loan installment"},
    {id:"loan",icon:"🏦",cat:"money",en:"Loan Calculator",bn:"ঋণ ক্যালকুলেটর",descEn:"Estimate loan repayment and interest.",descBn:"ঋণ পরিশোধ ও সুদ হিসাব করুন.",keys:"interest"},
    {id:"salary",icon:"💰",cat:"money",en:"Salary Calculator",bn:"বেতন ক্যালকুলেটর",descEn:"Calculate monthly and annual salary.",descBn:"মাসিক ও বার্ষিক বেতন হিসাব করুন.",keys:"income"},
    {id:"tax",icon:"🧾",cat:"money",en:"Tax Calculator",bn:"কর ক্যালকুলেটর",descEn:"Estimate tax from a rate.",descBn:"হার অনুযায়ী করের হিসাব করুন.",keys:"income tax"},
    {id:"area",icon:"📐",cat:"calculator",en:"Area Calculator",bn:"ক্ষেত্রফল ক্যালকুলেটর",descEn:"Calculate common shapes and areas.",descBn:"বিভিন্ন আকৃতির ক্ষেত্রফল হিসাব করুন.",keys:"geometry"},
    {id:"average",icon:"📊",cat:"calculator",en:"Average Calculator",bn:"গড় ক্যালকুলেটর",descEn:"Find average, sum and count.",descBn:"গড়, যোগফল ও সংখ্যা বের করুন.",keys:"mean math"},
    {id:"unit",icon:"⇄",cat:"converter",en:"Unit Converter",bn:"একক রূপান্তর",descEn:"Convert length, weight and temperature.",descBn:"দৈর্ঘ্য, ওজন ও তাপমাত্রা রূপান্তর করুন.",keys:"cm feet kg lb"},
    {id:"currency",icon:"💱",cat:"converter",en:"Currency Converter",bn:"মুদ্রা রূপান্তর",descEn:"Convert currencies using available rates.",descBn:"উপলভ্য বিনিময় হার দিয়ে মুদ্রা বদলান.",keys:"money exchange taka dollar"},
    {id:"timezone",icon:"🌍",cat:"datetime",en:"Time Zone Converter",bn:"টাইম জোন কনভার্টার",descEn:"Compare times across time zones.",descBn:"বিভিন্ন টাইম জোনের সময় মিলিয়ে নিন.",keys:"world clock"},
    {id:"days-until",icon:"⏳",cat:"datetime",en:"Days Until",bn:"আর কত দিন বাকি",descEn:"Count down to an important date.",descBn:"গুরুত্বপূর্ণ তারিখ পর্যন্ত দিন গুনুন.",keys:"countdown event"},
    {id:"number-to-words",icon:"🔢",cat:"text",en:"Number to Words",bn:"সংখ্যা থেকে কথায়",descEn:"Turn numbers into English words.",descBn:"সংখ্যাকে ইংরেজি কথায় রূপান্তর করুন.",keys:"writing"},
    {id:"random",icon:"🎲",cat:"fun",en:"Random Number",bn:"র‍্যান্ডম সংখ্যা",descEn:"Generate a number within any range.",descBn:"নির্দিষ্ট সীমার মধ্যে সংখ্যা তৈরি করুন.",keys:"generator"},
    {id:"random-picker",icon:"🎯",cat:"fun",en:"Random Name Picker",bn:"র‍্যান্ডম নাম বাছাই",descEn:"Pick a name or item at random.",descBn:"এলোমেলোভাবে নাম বা আইটেম বেছে নিন.",keys:"lucky draw"},
    {id:"timer",icon:"⏱️",cat:"datetime",en:"Countdown Timer",bn:"কাউন্টডাউন টাইমার",descEn:"Set a simple task timer.",descBn:"কাজের জন্য টাইমার সেট করুন.",keys:"stopwatch"},
    {id:"password",icon:"🔐",cat:"fun",en:"Password Generator",bn:"পাসওয়ার্ড জেনারেটর",descEn:"Generate strong passwords locally.",descBn:"ব্রাউজারেই শক্তিশালী পাসওয়ার্ড তৈরি করুন.",keys:"security"},
    {id:"password-strength",icon:"🛡️",cat:"fun",en:"Password Strength",bn:"পাসওয়ার্ডের শক্তি",descEn:"Check password strength in your browser.",descBn:"ব্রাউজারে পাসওয়ার্ডের শক্তি যাচাই করুন.",keys:"security"},
    {id:"qr",icon:"▦",cat:"fun",en:"QR Code Generator",bn:"QR কোড জেনারেটর",descEn:"Create a QR code from text or a link.",descBn:"টেক্সট বা লিংক থেকে QR কোড তৈরি করুন.",keys:"scan"},
    {id:"word",icon:"📝",cat:"text",en:"Word Counter",bn:"শব্দ গণনা",descEn:"Count words, characters and reading time.",descBn:"শব্দ, অক্ষর ও পড়ার সময় গণনা করুন.",keys:"character count"},
    {id:"case",icon:"Aa",cat:"text",en:"Case Converter",bn:"লেখার ধরন বদলান",descEn:"Convert text case in one click.",descBn:"এক ক্লিকে বড়-ছোট হাতের লেখা বদলান.",keys:"uppercase lowercase"},
    {id:"json-formatter",icon:"{ }",cat:"developer",en:"JSON Formatter",bn:"JSON ফরম্যাটার",descEn:"Format and minify JSON data.",descBn:"JSON ডেটা গুছিয়ে নিন বা ছোট করুন.",keys:"code developer"},
    {id:"url-encoder",icon:"🔗",cat:"developer",en:"URL Encoder / Decoder",bn:"URL এনকোডার / ডিকোডার",descEn:"Encode or decode URL text.",descBn:"URL টেক্সট এনকোড বা ডিকোড করুন.",keys:"web developer"},
    {id:"duplicate-lines",icon:"🧹",cat:"text",en:"Duplicate Line Remover",bn:"ডুপ্লিকেট লাইন সরান",descEn:"Remove repeated lines and sort text.",descBn:"একই লাইন বাদ দিন ও টেক্সট সাজান.",keys:"clean text"}
  ];
  let lang = localStorage.getItem("toolverse-language") || "en";
  let category = "all";
  let filter = "all";
  let query = "";
  let favorites = safeRead("toolverse-favorites", []);
  let recent = safeRead("toolverse-recent", []);
  const grid = $("#toolGrid"), search = $("#search"), count = $("#resultCount"), empty = $("#empty");
  function safeRead(key, fallback){try{const value=JSON.parse(localStorage.getItem(key));return Array.isArray(value)?value:fallback}catch{return fallback}}
  function text(en,bn){return lang==="bn"?bn:en}
  function esc(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
  function categoryCount(id){return tools.filter(t=>t.cat===id).length}
  function renderCategories(){
    $("#categoryGrid").innerHTML = categories.map(c=>'<button type="button" class="tv-category '+(category===c.id?'active':'')+'" data-category="'+c.id+'" style="--cat-color:'+c.color+';--cat-glow:'+c.color+'" aria-pressed="'+(category===c.id)+'"><span class="tv-category-icon">'+c.icon+'</span><span class="tv-category-name">'+text(c.en,c.bn)+'</span><span class="tv-category-count">'+(categoryCount(c.id)?categoryCount(c.id)+" "+text("tools","টি টুল"):(lang==="bn"?"শিগগিরই আসছে":"Coming soon"))+'</span></button>').join("");
  }
  function renderTools(){
    const q=query.toLocaleLowerCase();
    let list=tools.filter(t=>(category==="all"||t.cat===category)&&(!q||[t.en,t.bn,t.descEn,t.descBn,t.keys,t.cat].join(" ").toLocaleLowerCase().includes(q)));
    if(filter==="favorites") list=list.filter(t=>favorites.includes(t.id));
    if(filter==="recent") list=list.filter(t=>recent.includes(t.id)).sort((a,b)=>recent.indexOf(a.id)-recent.indexOf(b.id));
    grid.innerHTML=list.map(t=>'<div class="tv-tool-card"><button type="button" class="tv-fav '+(favorites.includes(t.id)?"active":"")+'" data-favorite="'+t.id+'" aria-label="'+esc(text("Add to favorites","পছন্দের তালিকায় যোগ করুন"))+'" aria-pressed="'+favorites.includes(t.id)+'">'+(favorites.includes(t.id)?"★":"☆")+'</button><a href="tools/'+t.id+'.html" class="tv-tool-link" data-open-tool="'+t.id+'"><div class="tool-icon">'+t.icon+'</div><h3>'+text(t.en,t.bn)+'</h3><p>'+text(t.descEn,t.descBn)+'</p><span class="tool-tag">'+esc(text(categories.find(c=>c.id===t.cat)?.en||t.cat,categories.find(c=>c.id===t.cat)?.bn||t.cat))+'</span></a></div>').join("");
    count.textContent=list.length+" "+text(list.length===1?"tool":"tools","টি টুল");
    empty.hidden=list.length>0;
    grid.hidden=list.length===0;
    if(!list.length&&filter==="favorites"){$("h3",empty).textContent=text("No favorites yet","এখনও কোনো পছন্দের টুল নেই");$("p",empty).textContent=text("Tap the star on any tool to save it here.","যেকোনো টুলের তারকা চিহ্নে চাপ দিয়ে এখানে রাখুন।")}
    else if(!list.length&&filter==="recent"){$("h3",empty).textContent=text("No recently used tools","সম্প্রতি ব্যবহৃত টুল নেই");$("p",empty).textContent=text("Open a tool and it will appear here.","কোনো টুল খুললে সেটি এখানে দেখা যাবে।")}
    else{$("h3",empty).textContent=text("No tools found","কোনো টুল পাওয়া যায়নি");$("p",empty).textContent=text("Try another search or choose a different category.","অন্য শব্দ দিয়ে খুঁজুন অথবা অন্য ক্যাটাগরি বেছে নিন।")}
    $("#toolStat").textContent=tools.length;
    $("#toolHeading").textContent=category==="all"?text("Explore all tools","সব টুলস দেখুন"):text(categories.find(c=>c.id===category)?.en||"Tools",categories.find(c=>c.id===category)?.bn||"টুলস");
  }
  function render(){renderCategories();renderTools()}
  function applyLanguage(){
    document.documentElement.lang=lang==="bn"?"bn":"en";
    $$("[data-en]").forEach(el=>{el.textContent=lang==="bn"?el.dataset.bn:el.dataset.en});
    $$("[data-en-html]").forEach(el=>{el.innerHTML=lang==="bn"?(el.dataset.bnHtml||el.dataset.bn):el.dataset.enHtml});
    if(search)search.placeholder=lang==="bn"?search.dataset.placeholderBn:search.dataset.placeholderEn;
    $("#languageBtn").textContent=lang==="bn"?"English":"বাংলা";
    $("#languageBtn").setAttribute("aria-label",lang==="bn"?"Switch to English":"বাংলায় পরিবর্তন করুন");
    render();
  }
  $$(".tv-category").forEach(()=>{}); // Stable initial setup; category buttons are delegated below.
  $("#categoryGrid").addEventListener("click",e=>{const btn=e.target.closest("[data-category]");if(!btn)return;category=btn.dataset.category;filter="all";$$(".tv-filter").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));render();$("#tools").scrollIntoView({behavior:"smooth",block:"start"})});
  $$(".tv-filter").forEach(btn=>btn.addEventListener("click",()=>{filter=btn.dataset.filter;$$(".tv-filter").forEach(b=>b.classList.toggle("active",b===btn));renderTools()}));
  search.addEventListener("input",()=>{query=search.value;filter="all";$$(".tv-filter").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));renderTools()});
  $$("[data-search]").forEach(btn=>btn.addEventListener("click",()=>{search.value=btn.dataset.search;query=search.value;filter="all";$$(".tv-filter").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));renderTools();$("#tools").scrollIntoView({behavior:"smooth"})}));
  grid.addEventListener("click",e=>{
    const fav=e.target.closest("[data-favorite]");
    if(fav){e.preventDefault();e.stopPropagation();const id=fav.dataset.favorite;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("toolverse-favorites",JSON.stringify(favorites));renderTools();return}
    const link=e.target.closest("[data-open-tool]");
    if(link){const id=link.dataset.openTool;recent=[id,...recent.filter(x=>x!==id)].slice(0,12);localStorage.setItem("toolverse-recent",JSON.stringify(recent))}
  });
  $("#resetFilters").addEventListener("click",()=>{category="all";filter="all";query="";search.value="";$$(".tv-filter").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));render()});
  $("#languageBtn").addEventListener("click",()=>{lang=lang==="en"?"bn":"en";localStorage.setItem("toolverse-language",lang);applyLanguage()});
  const themeBtn=$("#themeBtn");
  function applyTheme(theme){document.body.classList.toggle("dark",theme==="dark");themeBtn.textContent=theme==="dark"?"☼":"☾";themeBtn.setAttribute("aria-label",theme==="dark"?"Switch to light theme":"Switch to dark theme");document.querySelector('meta[name="theme-color"]').content=theme==="dark"?"#090b12":"#f5f6fb"}
  applyTheme(localStorage.getItem("toolverse-theme")||"dark");
  themeBtn.addEventListener("click",()=>{const next=document.body.classList.contains("dark")?"light":"dark";localStorage.setItem("toolverse-theme",next);applyTheme(next)});
  document.addEventListener("keydown",e=>{if(e.key==="/"&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();search.focus()}if(e.key==="Escape"&&document.activeElement===search){search.value="";query="";renderTools();search.blur()}});
  applyLanguage();
  if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
})();