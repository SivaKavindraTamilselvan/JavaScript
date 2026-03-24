let chat = document.getElementById("chatbox");
const botQuestion = [
    {
        question: "How can I order the food?",
        answer: "Go to Food Menu → Select items → Customize → Add to cart → Choose address → Make payment → Confirm order."
    },
    {
        question: "Missing food product",
        answer: "Upload the image of the missing item and mention the product name. Refund will be processed."
    },
    {
        question: "How to cancel my order?",
        answer: "Go to Orders → Select your order → Click Cancel (only before preparation starts)."
    },
    {
        question: "How to track my order?",
        answer: "Go to Orders section and click on 'Track Order' to see live status."
    },
    {
        question: "What payment methods are available?",
        answer: "You can pay using UPI, Credit/Debit Card, Net Banking, or Cash on Delivery."
    },
    {
        question: "How long does delivery take?",
        answer: "Delivery usually takes 30–45 minutes depending on your location."
    },
    {
        question: "How to apply coupon?",
        answer: "Go to cart → Enter coupon code → Click apply before payment."
    },
    {
        question: "Refund status",
        answer: "Refunds are processed within 3–5 business days to your original payment method."
    },
    {
        question: "Contact customer support",
        answer: "You can reach support via Help section or call 000000000."
    }
];
const addMessage = (senderName, Message) => {
    let p = document.createElement("p");
    if(senderName==="You"){
        p.style.textAlign="left";
        p.style.backgroundColor = "white";
        p.style.color="black";
        p.style.padding="10px";
    }
    else{
        p.style.textAlign="right";
    }
    if (typeof (Message) === "object") {
        chat.appendChild(Message);
    }
    else {
        p.textContent = senderName + " : " + Message;
        chat.appendChild(p);
    }
}
const sendMessage = () => {
    let input = document.getElementById("input");
    let content = input.value.trim();
    addMessage("You", content);
    input.value = "";
    setTimeout(() => {
        let reply = chatReply(content);
        addMessage("Swiggy", reply);
    }, 3000);
}

let image = document.getElementById("image");
let c = document.getElementById("input");
let d=document.getElementById("submit");


const chatReply = (content) => {
    content = content.toLowerCase();
    if (content === "hello") {
        return "Hi!";
    }
    if (content === "how are you") {
        return "I am fine!";
    }
    if (content === "doubt") {
        let list = document.createElement("ul");
        botQuestion.forEach((item) => {
            let newList = document.createElement("li");
            newList.textContent = item.question;

            newList.addEventListener("click", () => {
                if (newList.textContent === "Missing food product") {
                    image.classList.add("show");
                    c.classList.add("show");
                    d.classList.add("show");
                }
                addMessage("You",item.question);
                addMessage("Swiggy", item.answer);
            });
            list.className="list";
            list.appendChild(newList);
        });
        return list;
    }
    else{
        return "Enter doubt to check the details";
    }
}
const checkImage = () => {
    let img = document.getElementById("img");
    if (img.files.length > 0) {
        addMessage("Swiggy", "Image checking. Once checked refund will be provided to your bank account within 3 days");
        image.classList.remove("show");
        c.classList.remove("show");
        d.classList.remove("show");
    }
    else {
        addMessage("Swiggy", "Enter Image first");
    }
}
