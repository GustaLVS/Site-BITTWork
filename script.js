const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        // Fecha todos com animação
        items.forEach((i) => {
            const c = i.querySelector(".accordion-content");
            i.classList.remove("open");
            c.style.maxHeight = null;
        });

        // Abre se não estava aberto
        if (!isOpen) {
            item.classList.add("open");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });

    // inicia o primeiro item aberto
    if (item.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
    }
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let found = false;

    sections.forEach((section) => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            const id = section.getAttribute("id");
            found = true;

            navItems.forEach((a) => {
                a.classList.remove("active");
                if (a.getAttribute("href") === `#${id}`) {
                    a.classList.add("active");
                }
            });
        }
    });

    if (!found) {
        navItems.forEach((a) => a.classList.remove("active"));
        const home = document.querySelector('.nav-links a[href="#inicio"]');
        if (home) home.classList.add("active");
    }
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();
