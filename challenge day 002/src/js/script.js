window.addEventListener("load", function(event) {
    console.log("hola mundo");

    let menu_Icon = document.querySelector(".menu-icon")
    menu_Icon.addEventListener("click", function() {
        this.classList.toggle("close")
        
    })

  });