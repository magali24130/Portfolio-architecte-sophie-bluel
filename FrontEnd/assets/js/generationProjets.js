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
      afficherprojets (data,"0");
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
   function afficherprojets(data, id){

// Génère les projets
if (id === null || ["0", "1", "2", "3"].includes(id)) {
  for (let i = 0; i < data.length; i++) {
    const figure = document.createElement("figure");
    sectionProjets.appendChild(figure);
    figure.classList.add(`js-projet-${data[i].id}`); // Ajoute l'id du projet pour le lien vers la modale lors de la supression
    const img = document.createElement("img");
    img.src = data[i].imageUrl;
    img.alt = data[i].title;
    figure.appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = data[i].title;
    figure.appendChild(figcaption);
  }
}


   }