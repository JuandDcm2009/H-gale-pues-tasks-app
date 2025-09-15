fetch("../html/import/header.html").then(res => res.text()).then(data => {
    document.querySelector("header").innerHTML = data;
    const menuButton = document.querySelector(".menu-button");
    const menuNav = document.querySelector(".menu-nav");
    const iconB = document.querySelector(".menu-button-icon");
    menuNav.classList.remove("open");
    let opened = false;

    menuButton.addEventListener("click", () => {
        if (opened) {
            menuNav.classList.remove("open");
            opened = false;
            iconB.src = "../src/icons/menu-icon.svg";
        } else {
            menuNav.classList.add("open");
            void menuNav.offsetHeight;
            iconB.src = "../src/icons/close.svg";
            opened = true;

        }
    });

}).catch(err => console.log("error al cargar el header", err));


