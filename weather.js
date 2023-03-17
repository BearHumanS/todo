const API_KEY = "32f768d329174ae2668cc48c3fec6c9c";

function GeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metic`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        const temp = (data.main.temp-273.15)      
        const temp2 = temp.toFixed(2);
        weather.innerText = `${data.weather[0].main} / ${temp2}`
    });
}

function GeoErr() {
    alert("Can't find you.No weather for you.");
}



navigator.geolocation.getCurrentPosition(GeoOk, GeoErr);