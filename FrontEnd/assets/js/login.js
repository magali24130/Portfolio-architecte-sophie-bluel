const alredyLoggedError = document.querySelector(".alredyLogged__error");
const loginEmailError = document.querySelector(".loginEmail__error");
const loginMdpError = document.querySelector(".loginMdp__error");
const logoutButton = document.getElementById("login");

const email = document.getElementById("email");
const password = document.getElementById("password");

const submit = document.getElementById("submit");

alredyLogged();

// Si l'utilisateur est déjà connecté, on supprime le token
function alredyLogged() {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");

    const p = document.createElement("p");
    p.innerHTML =
      "<br><br><br>Vous avez été déconnecté, veuillez vous reconnecter";
    alredyLoggedError.appendChild(p);
    return;
  }
}

// Au clic, on envoie les valeurs de connextion
submit?.addEventListener("click", () => {
  let user = {
    email: email.value,
    password: password.value,
  };
  login(user);
});

// Au clic sur le bouton de déconnexion
logoutButton.addEventListener("click", () => {
  // Supprimer le token du stockage local
  localStorage.removeItem("token");
  // Rediriger l'utilisateur vers la page de connexion
  window.location.href = "login.html";
});

// Vérifier si l'utilisateur est déjà connecté lors du chargement de la page
window.onload = function () {
  if (localStorage.getItem("token")) {
    // Cacher le bouton de connexion
    submit.style.display = "none";
    // Afficher le bouton de déconnexion
    logoutButton.style.display = "block";
    logoutButton.textContent = "login";
  } else {
    // Cacher le bouton de déconnexion
    logoutButton.style.display = "none";
    // Afficher le bouton de connexion
    submit.style.display = "block";
  }
};
// Fonction de connexion
function login(id) {
  console.log(id);
  loginEmailError.innerHTML = "";
  loginMdpError.innerHTML = "";
  // véeification de l'email
  if (!id.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/g)) {
    const p = document.createElement("p");
    p.innerHTML = "Veuillez saisir une addresse mail valide";
    loginEmailError.appendChild(p);
    return;
  }
  // vérifcation du mot de passe
  if (id.password.length < 5 && !id.password.match(/^[a-zA-Z0-9]+$/g)) {
    const p = document.createElement("p");
    p.innerHTML = "Veuillez saisir un mot de passe valide";
    loginMdpError.appendChild(p);
    return;
  }

  // verification de l'email et du mot de passe
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      // Si couple email/mdp incorrect
      if (result.error || result.message) {
        const p = document.createElement("p");
        p.innerHTML =
          "La combinaison de l'adresse e-mail et du mot de passe n'est pas valide";
        loginMdpError.appendChild(p);
      } else if (result.token) {
        localStorage.setItem("token", result.token);
        window.location.href = "index.html"; // Redirection vers la page principale en cas de succès
      }
    })
    // prevenir l'utilisateur en cas d'erreur

    .catch((error) => {
      console.log(error);
    });
}
