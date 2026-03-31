let selectedAddress = null;
let selectedElement = null
let selectedPayement = null;
let s = null;
window.load = function () {
    let address = document.getElementById("address");
    address.innerHTML = "";
    const list = JSON.parse(localStorage.getItem("addressList")) || [];
    list.forEach((item) => {
        let p = createComponent("p","addressLits",item);
        p.addEventListener("click", () => {
            selectedAddress = item;
            if (selectedElement) {
                selectedElement.classList.remove("activeAddress");
            }
            p.classList.add("activeAddress");
            selectedElement = p;

        })
        address.appendChild(p);
    })

    let paymentContainer = document.getElementById("payment");
    const payment = ["Cash On Delivery", "Gpay", "PhonePe", "PayTm", "Credit/Debit Card"];
    payment.forEach((item) => {
        let p = createComponent("p","addressLits",item);
        p.addEventListener("click", () => {
            selectedPayement = item;
            if (s) {
                s.classList.remove("activeAddress");
            }
            p.classList.add("activeAddress");
            s = p;
        })
        paymentContainer.appendChild(p);
    })

}
const displayAddress = () => {
    document.getElementById("popup").style.display = "block";
};

const closePopUp = () => {
    document.getElementById("popup").style.display = "none";
};

const addAddress = () => {
    let a = document.getElementById("newAddress");
    let value = a.value;
    let l = JSON.parse(localStorage.getItem("addressList")) || [];
    l.push(value);
    localStorage.setItem("addressList", JSON.stringify(l));
    closePopUp();
    load();
};

async function placeOrder() {
    if (!selectedAddress) {
        alert("Enter The address");
    }
    if (!selectedPayement) {
        alert("Enter the Payement");
    }
    let cartItems = await loadData("cart");
    let order = await loadData("order");
    cartItems.forEach((item) => {
        let newOrder = {
            item: item,
            address: selectedAddress,
            payment: selectedPayement,
            orderId: Date.now() + Math.random(),
            date:Date.now()
        };
        order.push(newOrder);
    });
    localStorage.setItem("order", JSON.stringify(order));
    localStorage.removeItem("cart");
    alert(ALERT_ORDER_PLACED);
    window.location.hash = "#order";
}