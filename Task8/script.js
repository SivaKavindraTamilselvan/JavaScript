const content = document.getElementById("content");
async function Route() {
    let route = location.hash || "#";
    let page = "";
    if (route === "#" || route === "#animals" || route === "#birds") {
        page = "home.html";
    }
    else if (route === "#aquatic") {
        page = "aquatic.html";
    }
    else if (route === "#terrestrial") {
        page = "terrestrial.html";
    }
    else if (route === "#fact") {
        page = "fact.html";
    }
    else {
        content.innerHTML = "No pages Found";
        return;
    }
    try {
        let response = await fetch(page);
        let data = await response.text();
        content.innerHTML = data;
        if (route === "#animals" || route === "#birds") {
            setTimeout(() => {
                const section = document.querySelector(route);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 50);
        }
    }
    catch (error) {
        console.error(error);
    }
}

window.onhashchange = Route;
Route();