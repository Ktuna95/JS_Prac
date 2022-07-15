const target = document.querySelector('.target');
const links = document.querySelectAll('.content .item');

links.addEventListener("mouseover", function zoomIn(links) {
    links.target.style.transform = "scale(1.2)";
    links.target.style.zIndex = 1;
    links.target.style.transition = "all 0.5s";
  });

links.addEventListener("mousedown", function zoomOut(links) {
    links.target.style.transform = "scale(1)";
    links.target.style.zIndex = 0;
    links.target.style.transition = "all 0.5s";
  });  