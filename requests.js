// XMLHttpRequest

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