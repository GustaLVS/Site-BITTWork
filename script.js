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
