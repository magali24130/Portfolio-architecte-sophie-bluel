const token = localStorage.getItem("token");

adminPanel();
// Gestion de l'affichage des boutons admin
function adminPanel() {
  document.querySelectorAll(".admin__modifer").forEach((a) => {
    if (token === null) {
      return;
    } else {
      a.removeAttribute("aria-hidden");
      a.removeAttribute("style");
    }
  });
}
  
