let a = document.querySelectorAll(".draggable");
let b = null;

a.forEach(item => {
    item.addEventListener("dragstart", () => {
        b = item;
        item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        b = null;
    });
    item.addEventListener("dragover", (e) => {
        e.preventDefault();
        item.classList.add("over");
    });
    item.addEventListener("dragleave", () => {
        item.classList.remove("over");
    });
    item.addEventListener("drop", () => {
        item.classList.remove("over");
        if (item !== b) {
            let c = item.parentNode;
            let d = [...c.children];
            let e = d.indexOf(b);
            let f = d.indexOf(item);
            if (e < f) {
                c.insertBefore(b, item.nextSibling);
            }
            else {
                c.insertBefore(b, item);
            }
        }
    })
})