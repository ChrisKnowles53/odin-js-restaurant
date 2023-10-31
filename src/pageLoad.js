// Option1 - original code
// import hangingSpiderman from "../images/hanging-spiderman.png";
// import backgroundImage from "../images/background-web.jpeg";

// function createElementWithText(elemType, textContent) {
//   const element = document.createElement(elemType);
//   element.textContent = textContent;
//   return element;
// }

// export default function createPage() {
//   const html = document.querySelector("html");
//   html.style.backgroundImage = `url(${backgroundImage}`;

//   const div = document.getElementById("content");

//   const titleElement = createElementWithText("h1", "The Spiders Web");
//   const descriptionElement = createElementWithText(
//     "p",
//     "What delights do you think we eat here? 🪰flies🪰"
//   );
//   descriptionElement.setAttribute("class", "page-load-paragraph");

//   const spidermanImage = document.createElement("img");
//   spidermanImage.setAttribute("src", hangingSpiderman);
//   spidermanImage.setAttribute("alt", "spiderweb image");

//   div.appendChild(titleElement);
//   div.appendChild(descriptionElement);
//   div.appendChild(spidermanImage);
// }

// function createHeader() {
//   const div = document.getElementById("content");
//   const body = document.querySelector("body");
//   const header = createElementWithText("header");
//   header.setAttribute("id", "header");
//   header.setAttribute("class", "header");

//   const menuButton = createElementWithText("button", "Menu");
//   menuButton.setAttribute("id", "menu-button");
//   menuButton.setAttribute("class", "menu-button");

//   const contentButton = createElementWithText("button", "Contact");
//   contentButton.setAttribute("id", "contact-button");
//   contentButton.setAttribute("class", "contact-button");

//   const homeButton = createElementWithText("button", "Home");
//   homeButton.setAttribute("id", "home-button");
//   homeButton.setAttribute("class", "home-button");

//   header.appendChild(homeButton);
//   header.appendChild(menuButton);
//   header.appendChild(contentButton);
//   body.insertBefore(header, div);

//   homeButton.classList.add("active-button");
// }

// export { createHeader };

// Option2 - cleaner code attempt
import hangingSpiderman from "../images/hanging-spiderman.png";
import backgroundImage from "../images/background-web.jpeg";

function createMyElement(elementType, textContent, id, classname) {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  if (id) element.setAttribute("id", id);
  if (classname) element.setAttribute("class", classname);
  return element;
}

export default function createPage() {
  const html = document.querySelector("html");
  html.style.backgroundImage = `url(${backgroundImage}`;

  const div = document.getElementById("content");

  const titleElement = createMyElement("h1", "The Spiders Web");
  const descriptionElement = createMyElement(
    "p",
    "What delights do you think we eat here? 🪰flies🪰",
    "description",
    "page-load-paragraph"
  );

  const spidermanImage = document.createElement("img");
  spidermanImage.setAttribute("src", hangingSpiderman);
  spidermanImage.setAttribute("alt", "spiderweb image");

  div.appendChild(titleElement);
  div.appendChild(descriptionElement);
  div.appendChild(spidermanImage);
}

function createHeader() {
  const div = document.getElementById("content");
  const body = document.querySelector("body");
  const header = createMyElement("header", "", "header", "header");

  const menuButton = createMyElement(
    "button",
    "Menu",
    "menu-button",
    "menu-button"
  );
  const contentButton = createMyElement(
    "button",
    "Contact",
    "contact-button",
    "contact-button"
  );
  const homeButton = createMyElement(
    "button",
    "Home",
    "home-button",
    "home-button"
  );

  header.appendChild(homeButton);
  header.appendChild(menuButton);
  header.appendChild(contentButton);
  body.insertBefore(header, div);

  homeButton.classList.add("active-button");
}

export { createHeader };
