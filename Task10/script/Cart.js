window.loadCart = function () {
    let cart = document.getElementById("cart");
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cart.innerHTML = "";
    cartItems.forEach((item) => {
        let div = document.createElement("div");
        div.className = "div";

        let image = document.createElement("img");
        image.src = item.image;
        div.appendChild(image);

        let heading = document.createElement("p");
        heading.textContent = item.heading;
        heading.className = "heading";
        div.appendChild(heading);

        let description = document.createElement("p");
        description.textContent = item.description;
        div.appendChild(description);

        let cost = document.createElement("p");
        cost.textContent = item.cost;
        cost.className = "cost";
        div.appendChild(cost);

        let selectedSize = document.createElement("p");
        selectedSize.textContent = `Size Selected : ${item.selected}`;
        div.appendChild(selectedSize);

        let button = document.createElement("button");
        button.textContent = "Remove from Cart";
        button.className = "cart-button";

        div.appendChild(button);

        cart.appendChild(div);

        button.addEventListener("click", () => {
            removeFromCart(item);
        });
    })

    let cartSummary = document.getElementById("cart-summary");
    let cartCost = 0;

    cartSummary.innerHTML = "";
    cartItems.forEach((item) => {
        let summaryDiv = document.createElement("div");
        let title = document.createElement("p");
        title.textContent = item.heading;
        let c = document.createElement("p");
        c.textContent = item.cost;
        cartCost = cartCost + item.cost;

        summaryDiv.className = "summary-div";
        summaryDiv.appendChild(title);
        summaryDiv.appendChild(c);

        cartSummary.appendChild(summaryDiv);
    })
    let total = document.createElement("p");
    total.textContent = `${cartCost}`;
    total.className = "total-cost";

    let checkout = document.createElement("button");
    checkout.textContent = "Proceed to checkout";

    checkout.className = "checkout-button";
    cartSummary.appendChild(total);
    cartSummary.appendChild(checkout);

    if (cartCost == 0) {
        checkout.disabled = true;
    }
    else {
        checkout.addEventListener("click", () => {
            window.location.hash = "#checkout";
        });
    }
}

const removeFromCart = (itemToDelete) => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems = cartItems.filter(item => item.heading !== itemToDelete.heading);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Item removed from Cart");
    loadCart();
}