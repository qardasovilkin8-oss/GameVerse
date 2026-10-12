const games = [
  {name:"Neon Drift",genre:"racing",label:"Yarış",emoji:"🏎️",desc:"Sürətli arcade yarışları",colors:"linear-gradient(135deg,#ff6a5f,#7d35d8)",url:"https://poki.com/"},
  {name:"Pixel Quest",genre:"action",label:"Aksiyon",emoji:"🗡️",desc:"Piksel dünyasında macəra",colors:"linear-gradient(135deg,#29c6ad,#2367bb)",url:"https://yandex.com/games/"},
  {name:"Brain Blocks",genre:"puzzle",label:"Puzzle",emoji:"🧩",desc:"Məntiqini sına",colors:"linear-gradient(135deg,#f6b94b,#e65a83)",url:"https://poki.com/"},
  {name:"Sky Jumper",genre:"arcade",label:"Arcade",emoji:"🚀",desc:"Göylərə doğru tullan",colors:"linear-gradient(135deg,#38c8ff,#6848dc)",url:"https://yandex.com/games/"},
  {name:"Goal Legends",genre:"action",label:"Aksiyon",emoji:"⚽",desc:"Futbol həyəcanı",colors:"linear-gradient(135deg,#52d681,#187c80)",url:"https://poki.com/"},
  {name:"Drift City",genre:"racing",label:"Yarış",emoji:"🚘",desc:"Şəhərdə drift et",colors:"linear-gradient(135deg,#ff7b54,#ad2b69)",url:"https://yandex.com/games/"},
  {name:"Mystic Match",genre:"puzzle",label:"Puzzle",emoji:"💎",desc:"Uyğun daşları tap",colors:"linear-gradient(135deg,#4f70e9,#b24de0)",url:"https://poki.com/"},
  {name:"Tiny Arcade",genre:"arcade",label:"Arcade",emoji:"👾",desc:"Klassik arcade əyləncəsi",colors:"linear-gradient(135deg,#fc668f,#7a52d5)",url:"https://yandex.com/games/"}
];
const grid=document.querySelector("#game-grid"), search=document.querySelector("#search"), count=document.querySelector("#count");
let active="all";
function render(){
 const q=search.value.trim().toLowerCase();
 const filtered=games.filter(g=>(active==="all"||g.genre===active)&&(`${g.name} ${g.label} ${g.desc}`).toLowerCase().includes(q));
 grid.innerHTML=filtered.map(g=>`<article class="game-card"><a href="${g.url}" target="_blank" rel="noopener noreferrer" aria-label="${g.name} oyun mənbəyini aç"><div class="cover" style="background:${g.colors}"><span>${g.emoji}</span></div><div class="card-info"><strong>${g.name}</strong><p>${g.desc}</p><div class="card-bottom"><span class="tag">${g.label}</span><span class="play">Kəşf et ↗</span></div></div></a></article>`).join("");
 count.textContent=`${filtered.length} oyun göstərilir`;
 if(!filtered.length) grid.innerHTML='<p class="muted">Uyğun oyun tapılmadı. Başqa söz yoxla.</p>';
}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");active=b.dataset.filter;render()}));
search.addEventListener("input",render);render();
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
