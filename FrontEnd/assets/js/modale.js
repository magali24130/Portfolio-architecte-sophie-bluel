// Génère les projets dans la modale admin
async function modaleProjets() {
  const response = await fetch("http://localhost:5678/api/works");
  dataAdmin = await response.json();
  resetmodaleSectionProjets();
  for (let i = 0; i < dataAdmin.length; i++) {
    const div = document.createElement("div");
    div.classList.add("gallery__item-modale");
    modaleSectionProjets.appendChild(div);

    const img = document.createElement("img");
    img.src = dataAdmin[i].imageUrl;
    img.alt = dataAdmin[i].title;
    div.appendChild(img);

    const p = document.createElement("p");
    div.appendChild(p);
    p.classList.add(dataAdmin[i].id, "js-delete-work");

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash-can");
    p.appendChild(icon);

    const a = document.createElement("a");
    a.innerHTML = "Éditer";
    div.appendChild(a);
  }
  deleteWork();
}
//  Ferme la modale
const closeModale = function (e) {
  e.preventDefault();
  if (modale === null) return;

  modale.setAttribute("aria-hidden", "true");
  modale.removeAttribute("aria-modal");

  modale
    .querySelector(".js-modale-close")
    .removeEventListener("click", closeModale);

  // Fermeture de la modale apres 400ms
  window.setTimeout(function () {
    modale.style.display = "none";
    modale = null;
    resetmodaleSectionProjets();
  }, 300);
};

// Retour modale admin
const backToModale = function (e) {
  e.preventDefault();
  modaleProjet.style.display = "none";
  modaleProjet = null;
  modaleProjets(dataAdmin);
};

// Définit la "border" du click pour fermer la modale
const stopPropagation = function (e) {
  e.stopPropagation();
  };
  
  // Ferme la modale avec la touche echap
  window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    closeModale(e);
    closeModaleProjet(e);
  }
  });

// Ouverture modale projet
let modaleProjet = null;
const openModaleProjet = function (e) {
  e.preventDefault();
  modaleProjet = document.querySelector(e.target.getAttribute("href"));

  modaleProjet.style.display = null;
  modaleProjet.removeAttribute("aria-hidden");
  modaleProjet.setAttribute("aria-modal", "true");

  // Apl fermeture modale
  modaleProjet.addEventListener("click", closeModaleProjet);
  modaleProjet
    .querySelector(".js-modale-close")
    .addEventListener("click", closeModaleProjet);
  modaleProjet
    .querySelector(".js-modale-stop")
    .addEventListener("click", stopPropagation);

  modaleProjet
    .querySelector(".js-modale-return")
    .addEventListener("click", backToModale);
};

// Fermeture  modale projet
const closeModaleProjet = function (e) {
  if (modaleProjet === null) return;

  modaleProjet.setAttribute("aria-hidden", "true");
  modaleProjet.removeAttribute("aria-modal");

  modaleProjet
    .querySelector(".js-modale-close")
    .removeEventListener("click", closeModaleProjet);
  modaleProjet
    .querySelector(".js-modale-stop")
    .removeEventListener("click", stopPropagation);

  modaleProjet.style.display = "none";
  modaleProjet = null;

  closeModale(e);
};

const openModale = function (e) {
  e.preventDefault();
  modale = document.querySelector(e.target.getAttribute("href"));

  modaleProjets(); // Génère les projets dans la modale admin
  // attendre la fin de la génération des projets
  setTimeout(() => {
    modale.style.display = null;
    modale.removeAttribute("aria-hidden");
    modale.setAttribute("aria-modal", "true");
  }, 25);
  // Ajout EventListener sur les boutons pour ouvrir la modale projet
  document.querySelectorAll(".js-modale-projet").forEach((a) => {
    a.addEventListener("click", openModaleProjet);
  });

  // Apl fermeture modale
  modale.addEventListener("click", closeModale);
  modale
    .querySelector(".js-modale-close")
    .addEventListener("click", closeModale);
  modale
    .querySelector(".js-modale-stop")
    .addEventListener("click", stopPropagation);
};

 
// Selectionne les éléments qui ouvrent la modale
document.querySelectorAll(".js-modale").forEach((a) => {
  a.addEventListener("click", openModale);
  });

