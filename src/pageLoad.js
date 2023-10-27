export default function createPage() {
  const div = document.getElementById("content");

  function createElementWithText(elemType, textContent) {
    const element = document.createElement(elemType);
    element.textContent = textContent;
    return element;
  }

  const titleElement = createElementWithText("h1", "The Spiders Web");
  const descriptionElement = createElementWithText("p", "Blah Blah Blah");
  //   backgroundImage = document.createElement("img");
  //   backgroundImage.setAttribute("src", "../images/background-web.jpeg");
  //   backgroundImage.setAttribute("alt", "spiderweb image");

  div.appendChild(titleElement);
  div.appendChild(descriptionElement);
  //   div.appendChild(backgroundImage);
}
