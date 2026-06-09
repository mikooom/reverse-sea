const popUp = document.getElementById("wip-banner");

const currentDate = document.getElementById("currentDate")

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

