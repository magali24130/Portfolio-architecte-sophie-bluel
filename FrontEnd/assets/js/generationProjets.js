const sectionProjets = document.querySelector(".gallery");

// Reset la section projets
function resetSectionProjets() {
    sectionProjets.innerHTML = "";
  }

  // Génère les projets
async function generationProjets(data, id) {
    try {
      const response = await fetch("http://localhost:5678/api/works");
      data = await response.json();
    } catch {
      const p = document.createElement("p");
      p.classList.add("error");
      p.innerHTML =
        "Une erreur est survenue lors de la récupération des projets<br><br>Une tentative de reconnexion automatique auras lieu dans une minute<br><br><br><br>Si le problème persiste, veuillez contacter l'administrateur du site";
      sectionProjets.appendChild(p);
      await new Promise((resolve) => setTimeout(resolve, 60000));
      window.location.href = "index.html";
    }
  }
    export { resetSectionProjets, generationProjets };