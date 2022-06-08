let travel_buttons = document.querySelectorAll(".travel");

let disc_travel = () => {
    document.getElementById("discounts").scrollIntoView({block: 'start', behavior: 'smooth'});
    if(menu.classList.contains("opened")) {
        menu.classList.remove("opened");
        menu_button.classList.remove("fixed");
    }
    return false;
}

let search_travel = () => {
    document.getElementById("search").scrollIntoView({block: 'start', behavior: 'smooth'});
    if(menu.classList.contains("opened")) {
        menu.classList.remove("opened");
        menu_button.classList.remove("fixed");
    }
    return false;
}

let guide_travel = () => {
    document.getElementById("steps").scrollIntoView({block: 'start', behavior: 'smooth'});
    if(menu.classList.contains("opened")) {
        menu.classList.remove("opened");
        menu_button.classList.remove("fixed");
    }
    return false;
}

travel_buttons.forEach(el => {
    switch(el.id) {
        case "discount-travel":
            el.onclick = disc_travel;
            break;
        case "search-travel":
            el.onclick = search_travel;
            break;
        case "booking-travel":
            el.onclick = search_travel;
            break;
        case "guide-travel":
            el.onclick = guide_travel;  
            break;  
    }
});