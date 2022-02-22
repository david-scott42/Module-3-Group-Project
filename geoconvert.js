// this .js is taking user location input and converting to decimal geo coordinates


import {formElement, newCity, newState, newCountry} from './script.js';

let gpsElement = document.getElementById("gpsDiv")
let lat
let lon

// function geocoding (newCity, newCountry) {
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${newCity}%20${newCountry}%20${newState}.json?access_token=pk.eyJ1IjoiZGF2aWQtc2NvdHQ4MDgiLCJhIjoiY2t6cnNqczhjMDN0djMwcGt1M3IyYnl3ciJ9.BqI5l2gwffXQXblvdvN3UA`)
    .then(res => {
        if (res.ok){   //
            // console.log(res.json())
            return res.json()
        } else {
            console.log('API unsuccessful')
        }
    })
    .then(data => {
        // console.log(data.features[0].center)
        lat = data.features[0].center[0].toFixed(3)  //Latitude of input location
        lon = data.features[0].center[1].toFixed(3)  //Longitutde of input location
        // console.log(lat,lon)
    })
    .then(gps => {
        gpsElement.innerHTML = `<h2>Coordinates for ${newCity}:</h2>\nLatitude: ${lat}<br>Longitude: ${lon} <br> <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/${lat},${lon},10/500x300?access_token=pk.eyJ1IjoiZGF2aWQtc2NvdHQ4MDgiLCJhIjoiY2t6cnNqczhjMDN0djMwcGt1M3IyYnl3ciJ9.BqI5l2gwffXQXblvdvN3UA">` 
    })
})


export {lat, lon}