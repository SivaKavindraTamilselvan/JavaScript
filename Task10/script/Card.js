window.loadCardDetails = async function (category) {
    let data = await loadData(category);
    let input = document.getElementById("filter");
    cardsContent(category, data);
    input.addEventListener("input", () => {
        let content = input.value.trim();

        let filterdData = data.filter(item =>
            item.category.toLowerCase().includes(content)
        )
        cardsContent(category, filterdData);

    });
}

function cardsContent(category, data) {
    let card = null;
    if (category === "men") {
        card = document.getElementById("men-cards");
    }
    else if (category === "women") {
        card = document.getElementById("women-cards");
    }
    else if (category === "order") {
        card = document.getElementById("order");

    }
    else {
        card = document.getElementById("cart");
    }
    card.innerHTML = "";
    data.forEach((item) => {

        let orderitem = item;
        category === "order" ? item = item.item : item = item;

        let div = createComponent("div", CARD_CLASS_NAME);

        div = commonComponents(item, div);

        category === "order" ? div = OrderComponent(orderitem, item, div) : "";

        category === "women" || category === "men" ? div = CartAddAndSizeButton(div, item) : "";

        category === "cart" ? div = CartComponent(div, item) : "";

        card.appendChild(div);
    })
}