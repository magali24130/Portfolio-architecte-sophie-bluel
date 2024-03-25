// Event listener sur les boutons supprimer par apport a leur id
function deleteWork() {
    let btnDelete = document.querySelectorAll(".js-delete-work");
    for (let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener("click", deleteProjets);
    }
  }
  
  // Supprimer le projet
  async function deleteProjets() {
    console.log("DEBUG DEBUT DE FUNCTION SUPRESSION");
    console.log(this.classList[0]);
    console.log(token);
  
    await fetch(`http://localhost:5678/api/works/${this.classList[0]}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response);
        // Token bon
        if (response.status === 204) {
          console.log("DEBUG SUPPRESION DU PROJET " + this.classList[0]);
          refreshPage(this.classList[0]);
        }
 // Token incorrect
 else if (response.status === 401) {
    alert(
      "Vous n'êtes pas autorisé à supprimer ce projet, merci de vous connecter avec un compte administrateur valide"
    );
    window.location.href = "login.html";
  }
})
.catch((error) => {
  console.log(error);
});
}

// Rafraichit les projets sans recharger la page
async function refreshPage(i) {
modaleProjets(); // Re lance une génération des projets dans la modale admin
}


