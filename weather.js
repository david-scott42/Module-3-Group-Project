import {formElement, newCity, newCountry} from './script.js';

formElement.addEventListener("submit", (e) => { 
    e.preventDefault();
        //on click, submit "newCily" and "newCountry" to API
    fetch('http://reqres.in/api/users/1', {
        newCity, newCountry
    })
    .then(res => console.log(res))
})