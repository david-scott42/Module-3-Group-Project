// import {formElement, newCity} from './script.js';

// formElement.addEventListener("submit", (e) => { 
//     e.preventDefault();
//     //     //on click, submit "newCily" and "newCountry" to API
//     fetch('http://reqres.in/api/users/1', {
//         newCity
//     })
//     .then(res => console.log(res))
// })

let weather = {
    apiKey: "edb8e8f237bd04242980477250c51925",
    
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
            .then((response) => {
                if (!response.ok) {
                    alert("City Not Found....Try again!");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        const { humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp.toFixed() + " °F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed.toFixed() + " mph";
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/?" + name + "')";
    },
    search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
    },  
    };
    
    document.querySelector(".search").addEventListener("click", function () { 
    weather.search();
    });
    
    document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });
    
    weather.fetchWeather("Orlando");