const btnAjouterProjet = document.querySelector(".js-add-work");
btnAjouterProjet.addEventListener("click", addWork);

// Ajouter un projet
async function addWork(event) {
  event.preventDefault();

  const title = document.querySelector(".js-title").value;
  const categoryId = document.querySelector(".js-categoryId").value;
  const image = document.querySelector(".js-image").files[0];

  if (title === "" || categoryId === "" || image === undefined) {
    alert("Merci de remplir tous les champs");
    return;
  } else if (categoryId !== "1" && categoryId !== "2" && categoryId !== "3") {
    alert("Merci de choisir une catégorie valide");
    return;
  } else {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", categoryId);
      formData.append("image", image);

      const response = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.status === 201) {
        alert("Projet ajouté avec succès :)");
        modaleProjets(dataAdmin);
        backToModale(event);
        generationProjets(data, null);
      } else if (response.status === 400) {
        alert("Merci de remplir tous les champs");
      } else if (response.status === 500) {
        alert("Erreur serveur");
      } else if (response.status === 401) {
        alert("Vous n'êtes pas autorisé à ajouter un projet");
        window.location.href = "login.html";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

