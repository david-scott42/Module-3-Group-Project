// this .js is taking user location input and converting to decimal geo coordinates


import {formElement, newCity, newCountry} from './script.js';

let lat
let lon


// function geocoding (newCity, newCountry) {
    formElement.addEventListener("submit", (e) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${newCity}%20${newCountry}.json?access_token=pk.eyJ1IjoiZGF2aWQtc2NvdHQ4MDgiLCJhIjoiY2t6cnNqczhjMDN0djMwcGt1M3IyYnl3ciJ9.BqI5l2gwffXQXblvdvN3UA`)
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
        lat = data.features[0].center[0].toFixed(2)  //Latitude of input location
        lon = data.features[0].center[1].toFixed(2)  //Longitutde of input location
        console.log(lat,lon)
    })
    .then(data => {
    // on click, submit "lat" and "lon" andfetch API
        // fetch(`https://api.windy.com/api/webcams/v2/list/nearby=${lat},${lon},250`,{ 
        // tagged out because the 'nearby' cann isn't working
        fetch(`https://api.windy.com/api/webcams/v2/list/region=US.HI`, {  
        method: 'GET',
        withCredentials: true,
        headers: {
            "x-windy-key": "DBCA7SRhIWGQeSvEOUONhjJpttmWQzlq",
            "Content-Type": "application/json"  
        }
    })
        .then(res => {
            if (res.ok){
                console.log(res.json())
            } else {
                console.log('API unsuccessful')
            }
        })
        .then(data => console.log(data))
    })
    .then(
        
    )
})

export {lat, lon}