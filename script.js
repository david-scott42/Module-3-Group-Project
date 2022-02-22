console.log(document,window)

let formElement = document.getElementById("location");

let newCity = '';
let newCountry = '';

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    newCity = e.target.elements[0].value
    newCountry = e.target.elements[1].value
    // geocoding(newCity, newCountry);  // trying to call this function remotely, but no...
    console.log(newCity, newCountry)
})

export {formElement, newCity, newCountry}