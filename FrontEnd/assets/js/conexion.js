// Variable à afficher pour le mode éditeur
const modeEdition = document.querySelector(".admin__rod");
console.log(modeEdition);
const editBtn = document.querySelectorAll(".modifier");
const logout = document.getElementById("login");
const filters = document.querySelectorAll("#category");

// Si nous avons récupéré le token
if (localStorage.getItem("token")) {
  modeEdition.style.display = "flex";

  for (let i = 0; i < filters.length; i++) {
    filters[i].style.display = "none";
  }

  for (let i = 0; i < editBtn.length; i++) {
    editBtn[i].style.display = "flex";
  }

  // Changer login en logout
  logout.textContent = "logout";
  logout.setAttribute("href", "#");

  // Lorque l'on clic sur logout cela déconnecte l'utilisateur
  logout.addEventListener("click", (event) => {
    event.preventDefault();

    localStorage.removeItem("token");
    window.location.reload();
  });
}
