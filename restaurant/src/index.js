import contentHome from "./home.js";
import contentMenu from "./menu.js";
import contentContact from "./contact.js";
import "./style.css";

const populateNav = () => {
  // Create and populate navigation bar
  const navBar = document.createElement("nav");
  navBar.id = "main-nav";
  const navList = document.createElement("ul");
  const navItems = ["home", "menu", "contact"];
  navItems.forEach((item) => {
	const listItem = document.createElement("li");
	listItem.id = `nav-${ item }`;
	listItem.innerText = item;
	navList.append(listItem);
    document.addEventListener("click", pageNav);
  });
  navBar.append(navList);
  document.body.prepend(navBar);
}

function setFavicon(favImg) {
  const headTitle = document.querySelector('head');
  const setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel','shortcut icon');
  setFavicon.setAttribute('href', favImg);
  headTitle.appendChild(setFavicon);
}

const populateLogo = () => {
  const mainLogo = document.createElement("div");
  mainLogo.innerHTML = '<img src="./images/mchughs_logo_tagline.png" id="main-logo" />'
  mainLogo.id = "div-logo";
  document.body.prepend(mainLogo);
}

function clearPage() {
  const mainDiv = document.getElementById("content");
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.lastChild);
  }
}

function pageNav(navBtn) {
  const linkTarget = navBtn.target.id;
  switch (linkTarget) {
    case "nav-home":
      clearPage();
      contentHome();
      break;
    case "nav-menu":
      clearPage();
      contentMenu();
      break;
    case "nav-contact":
      clearPage();
      contentContact();
      break;
  }
}

window.onload = () => {
  setFavicon('./images/mchughs_logo_red.png');
  populateNav();
  populateLogo();
  contentHome();
}

