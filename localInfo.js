import {formElement, newCity, newCountry} from './script.js';

formElement.addEventListener("submit", (e) => {
    fetch(`https://api.countrylayer.com/v2/all ? access_key = 00131ddbfce6bc0eff439469f7060d8f`)
    .then(res => {
        if (res.ok){   //
            console.log(res.json())
            return res.json()
        } else {
            console.log('API unsuccessful')
        }
    })
    .then(res => {
        if (res.ok){   //
            console.log(res.json())
            return res.json()
        } else {
            console.log('API unsuccessful')
        }
    })
    .then(data => {
        console.log(data)
    })
})