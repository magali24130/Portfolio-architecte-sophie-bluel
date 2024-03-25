import {generationProjets, resetmodaleSectionProjets} from'./generationProjets.js';
import { resetmodaleSectionProjets, openModale, closeModale } from './modale.js';
import { adminPanel } from './admin.js';
import {deleteWork, deleteProjets, resfreshPage} from'./delete.js';
import {btnAjouterProjet, addWork} from'./ajout.js';
import {filterProjects, applyFilters} from'./filtre.js';



window.onload = function(){
    generationProjets (data, 1);
    adminPanel();
    deleteWork();
    btnAjouterProjet.addEventListener("click, addWork");


applyFilters (listfilter, data, generationProjets);
 };