let menu_button = document.getElementById("menu-button");
let menu = document.getElementById("menu");

let open = (event) => {
    if(menu.classList.contains("opened")) {
        menu.classList.remove("opened");
        menu_button.classList.remove("fixed");
    } else {
        menu.classList.add("opened");
        menu_button.classList.add("fixed");
    }
}

menu_button.onclick = open;