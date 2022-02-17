import {formElement, newCity, newCountry} from './script.js';


formElement.addEventListener("submit", (e) => { 
    e.preventDefault();
        //on click, submit "newCity" and "newCountry" to API
        fetch('https://api.windy.com/api/webcams/v2/api/webcams/v2/list/region=CH.ZH',{  // 'region=CH.ZH' is a placeholder, will need to be replaced with user input, probaly in lat/lon format?
            //  returning invalid request ?? 
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