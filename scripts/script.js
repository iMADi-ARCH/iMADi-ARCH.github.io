

let menu_items = document.getElementsByClassName("menu-item");
for (i = 0; i < menu_items.length; i++) {
    // console.log(item);
    if (menu_items[i].getAttribute("href") == window.location.href.split('/').pop()) {
        menu_items[i].style.width = "7em";
        menu_items[i].style.background = "#264653";
    }
}

console.log();
