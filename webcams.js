import {formElement, newCity, newCountry} from './script.js';
import {lat, lon} from './geoconvert.js'

formElement.addEventListener("submit", (e) => { 
    e.preventDefault();
    // on click, submit "lat" and "lon" andfetch API
    fetch(`https://api.windy.com/api/webcams/v2/list/nearby=${lat},${lon}`,{  
            // 'region=CH.ZH' is a placeholder, will need to be replaced with user input, probaly in lat/lon format?
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