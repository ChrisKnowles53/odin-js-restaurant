export default function menuCard() {
  menuItem(
    "Flies",
    "Flies slowly marinated in garlic oil and served on a bed of web noodles"
  );
  menuItem(
    "Mosquito",
    "Roasted whole Mosquitos served with an earwig and herb crust"
  );
  menuItem("Moths", "Mysterious moths twice wrapped and slow cooked");
}

function menuItem(menutitle, menuContent) {
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "menu-div");
  menuDiv.textContent = menutitle;

  const menuText = document.createElement("p");
  menuText.setAttribute("class", "menu-text");
  menuText.setAttribute("id", "menu-text");
  menuText.textContent = menuContent;

  content.appendChild(menuDiv);
  menuDiv.appendChild(menuText);
}
