(() => {
"use strict";
const path = location.pathname;
const isHome = /\/everyday-tools\/?$/.test(path) || /\/index\.html$/.test(path) && !/\/tools\//.test(path);
document.documentElement.classList.add("dm-app-mode");
const icon = isHome ? "icon.svg" : "../icon.svg";
const home = isHome ? "./" : "../";
const current = isHome ? "home" : "tools";
const bar = document.createElement("header");
bar.className = "dm-appbar";
bar.innerHTML = '<a href="'+home+'" aria-label="Daily Magic home"><img src="'+icon+'" alt=""><span class="dm-appname">Daily <span>Magic</span></span></a>' + (isHome ? '<span style="margin-left:auto;color:#9ca5bd;font-size:11px">YOUR TOOLKIT</span>' : '<a class="dm-back" href="'+home+'">← All tools</a>');
document.body.prepend(bar);
const nav = document.createElement("nav");
nav.className = "dm-bottom-nav";
nav.setAttribute("aria-label","App navigation");
const navItems = [
  {id:"home",href:home,icon:"⌂",label:"Home"},
  {id:"tools",href:home+"#tools",icon:"▦",label:"All tools"},
  {id:"favorites",href:home+"#tools?filter=favorites",icon:"☆",label:"Favorites"},
  {id:"install",href:"#",icon:"↓",label:"Install"}
];
nav.innerHTML = navItems.map(n=>'<a href="'+n.href+'" data-nav="'+n.id+'" '+(n.id===current?'aria-current="page"':'')+'><span class="dm-nav-icon">'+n.icon+'</span><span>'+n.label+'</span></a>').join("");
document.body.append(nav);
let installPrompt = null;
window.addEventListener("beforeinstallprompt", e => {e.preventDefault();installPrompt=e;const item=nav.querySelector('[data-nav="install"]');if(item)item.style.color="#d0c6ff"});
nav.addEventListener("click", async e => {
  const item=e.target.closest('[data-nav="install"]'); if(!item)return;
  e.preventDefault();
  if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;return}
  const standalone=window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone===true;
  let message;
  if(standalone) message="Daily Magic is already running as an app.";
  else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) message='To install: tap Share, then “Add to Home Screen”.';
  else message='To install: open the browser menu (⋮) and choose “Install app” or “Add to Home screen”.';
  const toast=document.createElement("div");toast.className="dm-tool-error";toast.textContent=message;document.body.append(toast);setTimeout(()=>toast.remove(),5000);
});
document.addEventListener("error", e => {
 if(e.target && e.target.tagName==="SCRIPT"){const toast=document.createElement("div");toast.className="dm-tool-error";toast.textContent="A tool script failed to load. Check your connection and reload Daily Magic.";document.body.append(toast)}
},true);
if(!isHome){
 const main=document.querySelector("main");
 if(main)main.style.scrollMarginTop="76px";
}
})();