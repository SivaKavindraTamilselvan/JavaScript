let a = document.getElementById("display");

const buttonClick = (content) => {
    if (a.innerText === "0") {
        a.innerText = content;
    }
    else {
        a.innerText = a.innerText + content;
    }
}

const calculateResult = () => {
    a.innerText = eval(a.innerText);
}

const clearDisplay = () => {
    a.innerText = "0";
}
