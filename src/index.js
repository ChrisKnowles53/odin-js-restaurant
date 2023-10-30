import "./styles.css";
import createPage from "./pageLoad";
import menuCard from "./Menu";
import { createHeader } from "./pageLoad";
import contactPage from "./contact";

createHeader();
createPage();

const content = document.getElementById("content");
const menuButton = document.getElementById("menu-button");
const homeButton = document.getElementById("home-button");
const contactButton = document.getElementById("contact-button");

function clearContent() {
  content.innerHTML = "";
}

function setActiveButton(button) {
  menuButton.classList.remove("active-button");
  homeButton.classList.remove("active-button");
  contactButton.classList.remove("active-button");

  button.classList.add("active-button");
}

function displayMenu() {
  clearContent();
  menuCard();
  setActiveButton(menuButton);
}

function displayHome() {
  clearContent();
  createPage();
  setActiveButton(homeButton);
}

function displayContact() {
  clearContent();
  contactPage();
  setActiveButton(contactButton);
}

menuButton.addEventListener("click", displayMenu);
homeButton.addEventListener("click", displayHome);
contactButton.addEventListener("click", displayContact);
