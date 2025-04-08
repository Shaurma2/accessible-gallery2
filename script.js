function highlight(event) {
  event.target.closest('figure').style.border = "3px solid blue";
}

function removeHighlight(event) {
  event.target.closest('figure').style.border = "";
}

function setupGallery() {
  console.log("Галерея загружена");
  const figures = document.querySelectorAll("figure");

  for (let i = 0; i < figures.length; i++) {
    let fig = figures[i];
    fig.setAttribute("tabindex", "0");

    fig.addEventListener("mouseover", highlight);
    fig.addEventListener("mouseleave", removeHighlight);
    fig.addEventListener("focus", highlight);
    fig.addEventListener("blur", removeHighlight);
  }
}
