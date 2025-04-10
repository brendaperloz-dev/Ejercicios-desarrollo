const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Cuando se seleccione el icono de menu
menuBtn.addEventListener("click", (e) =>{
    // se abre el menu desplegable
    navLinks.classList.toggle("open");
    // se le "indica" a la variable isOpen que el menu se abrió;
    const isOpen = navLinks.classList.contains("open");
    //si el menú se abrió el icono cambia a una X, cuando se cierra aparece nuevamente el icono de menú
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");
});

// Cuando se selecciona un elemento del menú desplegable
navLinks.addEventListener("click", (e) =>{
    //se cierra el menú
    navLinks.classList.remove("open");
    //y el icono del menú vuelve a estar disponible para seleccionarse nuevamente
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
