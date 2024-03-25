// Filtre les résultats
function filterProjects (data, id){
if (id == "0") {
    return data;
} else if (["1", "2", "3"].includes(id)) {
  return data.filter((project) => project.categoryId == id);
}}


// Change la couleur du bouton en fonction du filtre

if (data.length === 0 || data === undefined) {
  const p = document.createElement("p");
  p.classList.add("error");
  p.innerHTML = "Aucun projet à afficher actuellement ";
  sectionProjets.appendChild(p);
}

// appliquer les filtres lors du clic sur un bouton filtre
function applyFilters (listfilter, data, generationProjets){
for (let filter of listfilter) {
    filter.addEventListener("click", (e) => {
      // Tous les projets
      const id = e.target.dataset.id;
      const filteredData = filterProjects (data, id);
      generationProjets(filtereddata, id);
      for (let filter of listfilter) {
        filter.classList.remove("active");
      }
      e.target.classList.add("active");
    });
  }
}

