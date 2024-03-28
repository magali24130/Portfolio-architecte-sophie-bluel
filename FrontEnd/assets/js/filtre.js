// Filtre les résultats
function filterProjects(data, id) {
  if (!data || data.length === 0 || id == "0") {
    return data;
  } else if (["1", "2", "3"].includes(id)) {
    return data.filter((project) => project.categoryId == id);
  }
}

// Appliquer les filtres lors du clic sur un bouton filtre
function applyFilters(listfilter, data, generationProjets) {
  // Vérifier si data est vide ou non défini
  if (!data || data.length === 0) {
    // Désactiver les boutons de filtre
    for (let filter of listfilter) {
      filter.classList.add("disabled");
      filter.removeEventListener("click", filterClickHandler); // Supprimer le gestionnaire d'événements click
    }
    const p = document.createElement("p");
    p.classList.add("error");
    p.innerHTML = "Aucun projet à afficher actuellement ";
    sectionProjets.appendChild(p);
    return;
  }

  // Activer les boutons de filtre
  for (let filter of listfilter) {
    filter.classList.remove("disabled");
    filter.addEventListener("click", filterClickHandler); // Ajouter le gestionnaire d'événements click
  }
}

// Gestionnaire d'événements click pour les boutons de filtre
function filterClickHandler(e) {
  const id = e.target.dataset.id;
  const filteredData = filterProjects(data, id);
  // Appeler la fonction generationProjets avec les données filtrées
  generationProjets(filteredData, id);
}

// Change la couleur du bouton en fonction du filtre
if (data.length === 0 || data === undefined) {
  const p = document.createElement("p");
  p.classList.add("error");
  p.innerHTML = "Aucun projet à afficher actuellement ";
  sectionProjets.appendChild(p);
}