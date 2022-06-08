let discounts = document.querySelectorAll(".discount");

let open_html = (event) => {
    switch(Array.prototype.indexOf.call(discounts, event.target)) {
        case 0:
            window.open('screens/discount1.html');
            break;
        case 1:
            window.open('screens/discount2.html');
            break;
        case 2:
            window.open('screens/discount3.html');
            break;
    }
}

discounts.forEach(el => {
    el.onclick = open_html;
});