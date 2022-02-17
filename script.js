console.log(`Hello`);
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
    console.log(newCity, newCountry)
})


fetch('https://api.windy.com/api/webcams/v2/api/webcams/v2/list/region=CH.ZH',{  //  returning invalid request ?? 
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

export {formElement, newCity, newCountry}