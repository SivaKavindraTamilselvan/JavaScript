let a = document.getElementById("display");
async function calculateResult() {
    try {
        a.innerText = eval(a.innerText);
    }
    catch(error){
        a.innerText = "Error";
    }
}
const buttonClick = (content) => {
    if (a.innerText === "0") {
        a.innerText = content;
    }
    else {
        a.innerText = a.innerText + content;
    }
}

const clearDisplay = () => {
    a.innerText = "0";
}
