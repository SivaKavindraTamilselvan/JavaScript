const addList = () => {
    let content = document.getElementById("input");
    let text = content.value.trim();
    if (text === "") {
        alert("Enter Any Task");
        return;
    }
    let li = document.createElement("li");
    li.textContent = text;

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