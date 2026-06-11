import { afflatusType, rarityValue } from "./data/map/mapping.js";

const popUp = document.getElementById("wip-banner");

const currentDate = document.getElementById("currentDate");

const charList = document.getElementById("char-list");

let character = [];


/*

setInterval(() => {
  document.getElementById("newDate").textContent = new Date().toLocaleTimeString()
}, 1000)

*/
  
  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  const day = new Date().getDay();
  const year = new Date().getFullYear();
  
  const shortenDay = new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(new Date());

if(sessionStorage.getItem("banner_hide")) {
  popUp.style.visibility = "hidden";
}

function hidePopUp() {
  sessionStorage.setItem("banner_hide", "true");
  popUp.style.visibility = "hidden";
}

async function loadList() {
  console.log("charList element:", charList);
  
  const [crewRes] = await Promise.all([
    fetch("../data/arcanist/arcanist.json")
  ])
  console.log("fetch status:", crewRes.status)
  const crew = await crewRes.json();
  character = crew;
  console.log(character)
  
  displayList(character);
}

const resolve = (char) => ({
  ...char,
  afflatus: afflatusType[char.afflatus] ?? char.afflatus,
  Rarity: rarityValue[char.Rarity] ?? char.Rarity
})

const displayList = (chars) => {
  
  charList.innerHTML = chars
  .sort((a, b) => a.Rarity - b.Rarity)
  .map((char) => {
    
    const c = resolve(char);
    
    return `<li>
  <div class="info-box">
    <img src="${c.garments?.insight1}" alt="${c.title}">
    <div class="name-overlay">
      <span class="title">${c.title}</span>
    </div>
    <div class="afflatus-overlay">
      <img src="${c.afflatus}" alt="${char.afflatus}">
    </div>
    <div class="rarity-overlay">
      <img src="${c.Rarity}" alt="Rarity">
    </div>
  </div>
</li>`
  }).join("");
};

document.addEventListener("DOMContentLoaded", () => {
  loadList();
});