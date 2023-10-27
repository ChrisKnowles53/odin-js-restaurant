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

  const titleElement = createElementWithText(
    "h1",
    "The Spiders Web Restaurant"
  );
  const descriptionElement = createElementWithText(
    "p",
    "What delights do you think we eat here? 🪰flies🪰"
  );

  const spidermanImage = document.createElement("img");
  spidermanImage.setAttribute("src", hangingSpiderman);
  spidermanImage.setAttribute("alt", "spiderweb image");

  div.appendChild(titleElement);
  div.appendChild(descriptionElement);
  div.appendChild(spidermanImage);
}
