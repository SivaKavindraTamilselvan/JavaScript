async function search() {
    let city = document.getElementById("city").value;
    if (city === "") {
        alert("Enter the city");
        return;
    }
    let API = API_KEY;
    let report = document.getElementById("report");
    let e = document.getElementById("error");
    report.innerHTML = "";
    e.innerHTML = "";
    try {
        let response = await fetch(`${URL}?q=${city}&appid=${API}`);
        let data = await response.json();

        let weatherDiv = document.createElement("p");
        let humidityDiv = document.createElement("p");
        let tempDiv = document.createElement("p");

        let weather = data.weather[0].description;
        let humidity = data.main.humidity;
        let temp = data.main.temp;

        weatherDiv.textContent = `Weather : ${weather}`;
        humidityDiv.textContent = `Humidity : ${humidity}`;
        tempDiv.textContent = `Temperature :${temp}`;


        report.appendChild(weatherDiv);
        report.appendChild(humidityDiv);
        report.appendChild(tempDiv);
    }
    catch (error) {
        let p = document.createElement("p");
        p.innerText = error;
        e.appendChild(p);
        console.error(error);
    }
}