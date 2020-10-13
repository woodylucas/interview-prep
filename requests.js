// XMLHttpRequest
/*
const firstRequest = new XMLHttpRequest(); 
firstRequest.addEventListener('load', function () {
    console.log('IT WORKED'); 
    const data = JSON.parse(this.responseText);
    console.log(data.results)
    // for (const planet of data.results) {
    //     console.log(planet.name);
    // }
    // console.log(data)
;})

firstRequest.addEventListener('error', () => {
    console.log('IT WORKED'); 
})
firstRequest.open('GET', "https://swapi.dev/api/planets/"); 
firstRequest.send(); 
console.log('Request Sent')
*/ 

// FETCH Request *No support in IE*

const starWarsURL = "https://swapi.dev/api/planets/"

const fetchRequest = (url) => {
    return fetch(url)
        .then(resp => {
            if (!resp.ok) 
                throw new Error(`Status Code Error ${resp.status}`);
            resp.json().then(data => {
                for (const planet of data.results) {
                    console.log(planet.name)
                }
            });
        })
        .catch((err) => {
            console.log('SOMETHING WENT WRONG WITH FETCH')
            console.log(err);
        })
}

console.log(fetchRequest(starWarsURL)); 


// axios 