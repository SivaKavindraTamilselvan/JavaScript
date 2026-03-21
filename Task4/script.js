async function search() {
    let city = document.getElementById("city").value;
    let API = "bbd7fc74b3573518f8876157e7d0ec5e";
    let report = document.getElementById("report");

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`);
        let data = await response.json();

        let weatherDiv = document.createElement("p");
        let humidityDiv = document.createElement("p");
        let tempDiv = document.createElement("p");

        let weather = data.weather[0].description;
        let humidity = data.main.humidity;
        let temp = data.main.temp;

        weatherDiv.textContent = `Weather : ${weather}`;
        humidityDiv.textContent = `Humidity : ${humidity}`;
        tempDiv.textContent=`Temperature :${temp}`;

        report.appendChild(weatherDiv);
        report.appendChild(humidityDiv);
        report.appendChild(tempDiv);
    }
    catch (error) {
        console.error(error);
    }


}