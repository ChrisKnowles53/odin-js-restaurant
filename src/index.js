import "./styles.css";
import createPage from "./pageLoad";
import menuCard from "./Menu";
import { createHeader } from "./pageLoad";
import contactPage from "./contact";

createHeader();
createPage();

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", function () {
  const content = document.getElementById("content");
  content.innerHTML = "";

  menuCard();

  homeButton.classList.remove("active-button");
  contactButton.classList.remove("active-button");
  menuButton.classList.add("active-button");
});

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function () {
  const content = document.getElementById("content");
  content.innerHTML = "";
  createPage();

  menuButton.classList.remove("active-button");
  contactButton.classList.remove("active-button");
  homeButton.classList.add("active-button");
});

const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", function () {
  const content = document.getElementById("content");
  content.innerHTML = "";
  contactPage();

  menuButton.classList.remove("active-button");
  homeButton.classList.remove("active-button");
  contactButton.classList.add("active-button");
});
