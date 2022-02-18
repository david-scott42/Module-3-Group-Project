import {geocoding} from './files.js'


console.log(document,window)

// const inputHTML = `<form id="location">
//             <input type="text" class="form-control" placeholder="City" aria-label="City" name="City">
//             <input type="text" class="form-control" placeholder="Country" aria-label="Country" name="Country">
//             <input class="btn btn-primary" type="submit" value="Get Info">
//             </form>`;


// inputDIV.innerHTML += inputHTML;

let formElement = document.getElementById("location");

let newCity = '';
let newCountry = '';

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    newCity = e.target.elements[0].value
    newCountry = e.target.elements[1].value
    geocoding(newCity, newCountry)
    // console.log(newCity, newCountry)
})




export {formElement, newCity, newCountry}