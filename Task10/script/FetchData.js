window.loadData = async function (category) {
    try {
        const response = await fetch(DATA_FOLDER);
        const data = await response.json();
        if (category === "women") {
            return data.women;
        }
        else if (category === "men") {
            return data.men;
        }
        else if (category === "cart") {
            return JSON.parse(localStorage.getItem("cart")) || [];
        }
        else if (category === "order") {
            return JSON.parse(localStorage.getItem("order")) || [];
        }
        else {
            return "Invalid Category";
        }
    }
    catch (error) {
        console.error(error);
    }
}