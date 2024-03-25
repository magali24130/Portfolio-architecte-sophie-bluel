// Sélection des éléments du DOM
const listfilter = document.querySelectorAll(".filter");
const btnAll = document.querySelector(".btn1");
const btnId1 = document.querySelector(".btn2");
const btnId2 = document.querySelector(".btn3");
const btnId3 = document.querySelector(".btn4");


// Initialisation des variables
let data = 1;
let id;

// Appel de la fonction de génération des projets avec un filtre par défaut au chargement de la page
generationProjets(data, 1);

