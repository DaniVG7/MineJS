function highLightSection(evento){
    //Buscamos la seccion que contiene el click. || La funcion closest te coge el pariente (padre) mas cercano de donde clickamos.
    let section = evento.target.closest("section")
    if (section){
        section.classList.add("highlight")
    }
    //cargamos todas las secciones del documento 
    let allSections = document.querySelectorAll("section")
    //Cogemos cada seccion y si no es nuestra seccion clickada, eliminamos la clase highlight.
    for (let oneSection of allSections){
        if(oneSection !== section){
            oneSection.classList.remove("highlight")
            // oneSection.classList.toggle("highlight", oneSection === section) Con esto no hace falta el IF ya que si es falso borrara todas las clases.
            // El toggle es una funcion que te añade una clase (primer parametro) y el segundo parametro es un condicional, si da true, añade el primer parametro sino no.
        }
    }
}
function setUpHighLighting(){
    let main = document.querySelector("main");
    main.addEventListener("click", highLightSection)
}
window.addEventListener("load", setUpHighLighting);