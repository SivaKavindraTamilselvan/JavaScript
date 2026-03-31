window.addToCart = async function (itemToAdd, size, Quantity) {
    let cartItems = await loadData("cart");
    let checkExists = cartItems.find(item => item.heading === itemToAdd.heading);
    if (!checkExists) {
        let finalItem = {
            ...itemToAdd,
            selected: size,
            quantity: Quantity
        }
        cartItems.push(finalItem);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        alert(ALERT_ADDED_TO_CART);
    }
    else {
        alert(ALERT_EXISTING_ITEM);
    }
}

const removeFromCart = (itemToDelete) => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems = cartItems.filter(item => item.heading !== itemToDelete.heading);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert(ALERT_ITEM_REMOVED);
    loadCardDetails("cart");
    CartSummary("cart");
}

window.CartSummary = async function () {
    let cartSummary = document.getElementById("cart-summary");
    let cartCost = 0;

    let cartItems = await loadData("cart");
    cartSummary.innerHTML = "";
    cartItems.forEach((item) => {

        let summaryDiv = createComponent("div",SUMMARY_DIV_CLASS_NAME);
        let title = createComponent("p","",item.heading);

        let q = createComponent("p","",item.quantity);

        let c = createComponent("p","",item.quantity*item.cost);

        cartCost = cartCost + item.cost*item.quantity;

        summaryDiv.appendChild(title);
        summaryDiv.appendChild(q);
        summaryDiv.appendChild(c);

        cartSummary.appendChild(summaryDiv);
    })
    let total = createComponent("p",TOTAT_COST_CLASS_NAME,cartCost);

    let gst = createComponent("p","","Gst - 18%");

    let checkout = createComponent("button",CHECKOUT_BTN_CLASS_NAME,CHECKOUT_BTN_CONTENT);

    cartSummary.appendChild(total);
    cartSummary.appendChild(gst);

    let Gsttotal = createComponent("p",TOTAT_COST_CLASS_NAME,cartCost*GST);

    cartSummary.appendChild(Gsttotal);
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
