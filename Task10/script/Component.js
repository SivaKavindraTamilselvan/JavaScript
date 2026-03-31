window.createComponent = function (tag, classname = "", innertext = "") {
    let container = document.createElement(tag);
    if (classname) {
        container.className = classname;
    }
    if (innertext) {
        container.textContent = innertext;
    }
    return container;
}

window.commonComponents = function (item, div) {
    let image = document.createElement("img");
    image.src = item.image;
    div.appendChild(image);

    let heading = createComponent("p", CARD_HEADING_CLASS_NAME, item.heading);
    div.appendChild(heading);

    let cost = createComponent("p", CARD_COST_CLASS_NAME, `${COST_CONTENT} ${item.cost}`);
    div.appendChild(cost);

    let description = createComponent("p", "", item.description);
    div.appendChild(description);
    return div;
}

window.OrderComponent = function (orderitem, item, div) {
    let selectedOrderSize = createComponent("p", "", item.selected)
    div.appendChild(selectedOrderSize);

    let selectedOrderQuantity = createComponent("p", "", `Quantity : ${item.quantity}`);
    div.appendChild(selectedOrderQuantity);

    let totalCost= createComponent("p", CARD_COST_CLASS_NAME, `Total Cost : ${item.quantity*item.cost*1.18}`);
    div.appendChild(totalCost);

    let formattedDate = new Date(orderitem.date).toLocaleString();
    let date = createComponent("p", "", `Date : ${formattedDate}`);
    div.appendChild(date);

    let payment = createComponent("p", "", orderitem.payment);
    div.appendChild(payment);

    let address = createComponent("p", "", `Address : ${orderitem.address}`);
    div.appendChild(address);
    return div;
}

window.CartAddAndSizeButton = function (div, item) {

    let input = createComponent("input");
    input.placeholder = "Enter the Quantity";
    div.appendChild(input);

    let Quantity = 0;
    input.addEventListener("input", () => {
        Quantity = input.value.trim();
    })

    let sizeDiv = createComponent("div", CARD_SIZE_CLASS_NAME);

    let sizeArray = item.size;
    let sizeSelected = null;

    let selectedButton = createComponent("button");

    sizeArray.forEach((item) => {
        let sizeButton = createComponent("button", "", item);
        sizeDiv.appendChild(sizeButton);

        sizeButton.addEventListener("click", () => {
            selectedButton = sizeButton;
            selectedButton.classList.add("size");
            sizeSelected = item;
        })
    })
    div.appendChild(sizeDiv);

    let button = createComponent("button", CART_BUTTON_CLASS_NAME, ADD_TO_CARD_BUTTON_TEXT);
    div.appendChild(button);

    button.addEventListener("click", () => {
        if (!sizeSelected) {
            alert(ALERT_SIZE_NOT_SELECTED);
            return;
        }
        if (!Quantity) {
            alert("Quantity Not Selected");
            return;
        }
        else {
            selectedButton.classList.remove("size");
            addToCart(item, sizeSelected, Quantity);
            sizeSelected = null;
        }
    });

    return div;
}

window.CartComponent = function (div, item) {
    let selectedSize = createComponent("p","",`Size Selected : ${item.selected}`);
    div.appendChild(selectedSize);

    let quantity = createComponent("p","",`Quantity : ${item.quantity}`);
    div.appendChild(quantity);

    let button = createComponent("button",CART_BUTTON_CLASS_NAME,REMOVE_FROM_CART_BUTTON);

    div.appendChild(button);

    cart.appendChild(div);

    button.addEventListener("click", () => {
        removeFromCart(item);
    });
    return div;
}