function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const mainNav = document.getElementById("main-nav");

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener("click", () => {
            // Prüfen, ob das Menü bereits sichtbar ist
            if (mainNav.style.display === "block") {
                mainNav.style.display = "none"; // Menü ausblenden
            } else {
                mainNav.style.display = "block"; // Menü anzeigen
            }
        });
    } else {
        console.error("Hamburger menu or main navigation not found in the DOM!");
    }
}

// Diese Funktion aufrufen, sobald das DOM geladen ist
document.addEventListener("DOMContentLoaded", toggleMenu);
