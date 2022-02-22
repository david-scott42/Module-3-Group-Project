console.log(document,window)


// const inputHTML = `<form id="location">
//             <input type="text" class="form-control" placeholder="City" aria-label="City" name="City">
//             <input type="text" class="form-control" placeholder="Country" aria-label="Country" name="Country">
//             <input class="btn btn-primary" type="submit" value="Get Info">
//             </form>`;


// inputDIV.innerHTML += inputHTML;

let formElement = document.getElementById("location");

let newCity = '';
let newState = '';
let newCountry = '';

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    newCity = e.target.elements[0].value
    newState = e.target.elements[1].value
    newCountry = e.target.elements[2].value
    // console.log(newCity, newState, newCountry)
})




export {formElement, newCity, newState, newCountry}