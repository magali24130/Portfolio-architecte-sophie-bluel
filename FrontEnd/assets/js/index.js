



window.onload = async function(){
    let data = await callWorks ()
    generationProjets (data , "0");
    adminPanel();
    deleteWork();
   


applyFilters (listfilter, data, generationProjets);
 };