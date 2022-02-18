// this .js is taking user location input and converting to decimal geo coordinates


import {newCity, newCountry} from './script.js';

let lat= ""
let lon= ""


function geocoding (newCity, newCountry) {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${newCity}%20${newCountry}.json?access_token=pk.eyJ1IjoiZGF2aWQtc2NvdHQ4MDgiLCJhIjoiY2t6cnNqczhjMDN0djMwcGt1M3IyYnl3ciJ9.BqI5l2gwffXQXblvdvN3UA`)
    .then(res => {
        if (res.ok){   //
            console.log(res.json())
            return res.json()
        } else {
            console.log('API unsuccessful')
        }
    })
    .then(data => {
        // console.log(data.features[0].center)
        lat = data.features[0].center[0]  //Latitude of input location
        lon = data.features[0].center[1]  //Longitutde of input location
        console.log(lat,lon)
    })    
}

export {lat, lon}