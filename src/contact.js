export default function contactPage() {
  contactItem("Phone", "Tap Tap Tap on the line");
  contactItem("Adress", "Corner 2, Bedroom 1, House 3, England");
  contactItem(
    "Media",
    "Twitter @Webtastic, email: TheSpidersWeb@hummingbird.co.uk"
  );
}

function contactItem(contacttitle, contactContent) {
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("class", "contact-div");
  contactDiv.textContent = contacttitle;

  const contactText = document.createElement("p");
  contactText.setAttribute("class", "contact-text");
  contactText.setAttribute("id", "contact-text");
  contactText.textContent = contactContent;

  content.appendChild(contactDiv);
  contactDiv.appendChild(contactText);
}
