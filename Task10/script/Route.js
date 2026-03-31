let content = document.getElementById("content");

async function Route() {
    let routes = location.hash || "#";
    let page = null;

    if (routes === "#") {
        page = "html/home.html";
    }
    else if (routes === "#women") {
        page = "html/women.html";
    }
    else if (routes === "#men") {
        page = "html/men.html";
    }
    else if (routes === "#order") {
        page = "html/order.html";
    }
    else if (routes === "#cart") {
        page = "html/cart.html";
    }
    else if (routes === "#checkout") {
        page = "html/checkout.html";
    }
    else {
        content.innerHTML = "No Page Found";
        return;
    }
    try {
        const response = await fetch(page);
        const data = await response.text();
        content.innerHTML = data;
        if (routes === "#women") {
            loadCardDetails("women");
        }
        if (routes === "#cart") {
            loadCardDetails("cart");
            CartSummary();
        }
        if (routes === "#men") {
            loadCardDetails("men");
        }
        if (routes === "#checkout") {
            load();
        }
        if (routes === "#order") {
            loadCardDetails("order");
        }
    }
    catch (error) {
        console.error(error);
    }
}

window.onhashchange = Route;
Route();

