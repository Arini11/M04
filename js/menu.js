function menuMobilGran() {
  var menu = document.getElementById("menu-mobil");
  var cap = document.getElementById("cap");
  
  if (menu.style.display === "block") {
    cap.style.backgroundColor = "#282828";
    cap.style.position = "relative";
    cap.style.width= "auto";
    menu.style.display = "none";
    menu.style.top = "0px";
    menu.style.position = "static";
  } else {
    cap.style.backgroundColor = "grey";
    cap.style.position = "fixed";
    cap.style.width= "100%";
    menu.style.display = "block";
    menu.style.position = "fixed";
    menu.style.top = "89px";
  }
}