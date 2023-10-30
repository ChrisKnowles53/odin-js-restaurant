import hangingSpiderman from "../images/hanging-spiderman.png";
import backgroundImage from "../images/background-web.jpeg";

export default function createPage() {
  const html = document.querySelector("html");
  html.style.backgroundImage = `url(${backgroundImage}`;

  const div = document.getElementById("content");

  function createElementWithText(elemType, textContent) {
    const element = document.createElement(elemType);
    element.textContent = textContent;
    return element;
  }

  const titleElement = createElementWithText("h1", "The Spiders Web");
  const descriptionElement = createElementWithText(
    "p",
    "What delights do you think we eat here? 🪰flies🪰"
  );

  const menuButton = createElementWithText("button", "Menu");
  menuButton.setAttribute("id", "menu-button");
  menuButton.setAttribute("class", "menu-button");

  const contentButton = createElementWithText("button", "Content");
  contentButton.setAttribute("id", "content-button");
  contentButton.setAttribute("class", "content-button");

  const spidermanImage = document.createElement("img");
  spidermanImage.setAttribute("src", hangingSpiderman);
  spidermanImage.setAttribute("alt", "spiderweb image");

  div.appendChild(menuButton);
  div.appendChild(contentButton);
  div.appendChild(titleElement);
  div.appendChild(descriptionElement);
  div.appendChild(spidermanImage);
}
