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
  for (let filter of listfilter) {
    filter.addEventListener("click", (e) => {
      // Tous les projets
      const id = e.target.dataset.id;
      const filteredData = filterProjects(data, id);
      // Vérifier si les données sont définies avant de générer les projets
      if (filteredData !== undefined) {
        generationProjets(filteredData, id);
      } else {
        // Si les données ne sont pas définies, vous pouvez afficher un message d'erreur ou effectuer une autre action
        console.log("Aucun projet à afficher actuellement");
      }
      // Supprimer la classe "active" de tous les filtres
      for (let filter of listfilter) {
        filter.classList.remove("active");
      }
      // Ajouter la classe "active" au filtre sélectionné
      e.target.classList.add("active");
    });
  }
}