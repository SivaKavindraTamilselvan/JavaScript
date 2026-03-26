window.loadOrder = function () {
    let order = document.getElementById("order");
    let orderItems = JSON.parse(localStorage.getItem("order")) || [];
    order.innerHTML = "";
    orderItems.forEach((item) => {
        let div = document.createElement("div");
        div.className = "div";

        let image = document.createElement("img");
        image.src = item.item.image;
        div.appendChild(image);

        let id = document.createElement("p");
        id.textContent = `ID : ${item.orderId}`;
        div.appendChild(id);

        let heading = document.createElement("p");
        heading.textContent = item.item.heading;
        heading.className = "heading";
        div.appendChild(heading);

        let description = document.createElement("p");
        description.textContent = item.item.description;
        div.appendChild(description);

        let cost = document.createElement("p");
        cost.textContent = item.item.cost;
        cost.className = "cost";
        div.appendChild(cost);

        let selectedSize = document.createElement("p");
        selectedSize.textContent = `Size Selected : ${item.item.selected}`;
        div.appendChild(selectedSize);

        let date = document.createElement("p");
        date.textContent = item.date;
        let formattedDate = new Date(item.date).toLocaleString();
        date.textContent = `Date: ${formattedDate}`;
        div.appendChild(date);

        let payment = document.createElement("p");
        payment.textContent = `Date ${item.payment}`;
        div.appendChild(payment);

        let address = document.createElement("p");
        address.textContent = `Address : ${item.address}`;
        div.appendChild(address);
        
        order.appendChild(div);
    })
}