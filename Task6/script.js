const addList = () => {
    let content = document.getElementById("input");
    let text = content.value.trim();
    if (text === "") {
        alert("Enter Any Task");
        return;
    }
    let li = document.createElement("li");
    li.draggable = true;
    li.textContent = text;
    addDragEvents(li);

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark As Completed";
    completeBtn.classList.add("completed-btn");
    li.appendChild(completeBtn);

    completeBtn.addEventListener("click", () => completeTask(li));

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete Task";
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => deleteList(li));

    document.getElementById("list").appendChild(li);
    content.value = "";
}

const deleteList = (li) => {
    let p = document.getElementById("popup");

    p.innerHTML = "";
    p.textContent = "Are You Sure";

    p.classList.add("show");

    let yes = document.createElement("button");
    yes.textContent = "Yes";

    let no = document.createElement("button");
    no.textContent = "No";

    p.appendChild(yes);
    p.appendChild(no);

    yes.addEventListener("click", () => {
        remove(li);
        p.classList.remove("show");

        p.innerHTML = "";
    });
    no.addEventListener("click", () => {
        p.classList.remove("show");

        p.innerHTML = "";
    });
}

const remove = (li) => {
    li.remove();
}
const completeTask = (li) => {
    let btn = li.querySelector(".completed-btn");
    if (li.parentElement.id === "list") {
        btn.textContent = "Mark as Not Completed";
        document.getElementById("completed-list").appendChild(li);
    }
    else {
        btn.textContent = "Mark as Completed";
        document.getElementById("list").appendChild(li);
    }
}

let b=null;
const addDragEvents = (item) => {

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
            } else {
                c.insertBefore(b, item);
            }
        }
    });
};
