function mostrar(e) {
    if (e.classList.contains("fa-camera-retro")) { 
        e.classList.remove("fa-camera-retro");
        e.classList.add("fa-briefcase");


    } else { 
        e.classList.remove("fa-briefcase"); 
        e.classList.add("fa-camera-retro"); 
    }

}