(() => {
  "use strict";
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const { categories, tools } = window.DAILY_MAGIC_REGISTRY;
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
  $(".tv-filter").forEach(btn=>btn.addEventListener("click",()=>{filter=btn.dataset.filter;category="all";$(".tv-filter").forEach(b=>b.classList.toggle("active",b===btn));render()}));
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