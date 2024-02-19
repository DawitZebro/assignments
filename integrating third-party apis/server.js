var inputvalue = document.querySelector('#cityinput');
var submitBtn = document.querySelector('#submitBtn'); // Changed to submitBtn
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

var apiKey = "a664efae4744b89bb7d54fd116e39516";

function convertToCelsius(val) {
    return (val - 273.15).toFixed(2); // Corrected the conversion formula
}

submitBtn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descripVal = data['weather'][0]['description'];
            var tempVal = data['main']['temp'];
            var wndspeedVal = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            descrip.innerHTML = `Sky Conditions: <span>${descripVal}</span>`; // Changed to descrip.innerHTML
            temp.innerHTML = `Temperature: <span>${convertToCelsius(tempVal)} °C</span>`; // Corrected the conversion and added units
            wind.innerHTML = `Wind Speed: <span>${wndspeedVal} km/h</span>`;
        })
        .catch(err => alert('You entered a wrong city name'))
});
