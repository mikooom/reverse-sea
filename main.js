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
  
  const shortenDay = new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(new Date())
  
  currentDate




if(sessionStorage.getItem("banner_hide")) {
  popUp.style.visibility = "hidden";
}

function hidePopUp() {
  sessionStorage.setItem("banner_hide", "true");
  popUp.style.visibility = "hidden";
}

async function loadList() {
  
  const [crewRes] = await Promise.all([
    fetch("../data/arcanist/arcanist.json")
  ])
  const crew = await crewRes.json();
  character = crew;
  console.log(character)
  
  displayList(character);
}

const resolve = (char) => ({
  .char,
  
})


const displayList = (chars) => {
  charList.innerHTML = chars
  .sort((a, b) => a.Rarity - b.Rarity)
  .map((char) => {
    return `<li>
    
    <div class="info-box">
      <img src="${char.icon}" alt="${char.name}">
    <div class="rarity-overlay">
          <img src="${char.Rarity}" alt="Rarity">
        </div>
    </div>
    
    </li>`
  }).join("")
}

loadList();