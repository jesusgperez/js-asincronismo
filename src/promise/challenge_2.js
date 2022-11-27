import fetch from "node-fetch"
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi) {
    return fetch(urlApi)
}

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products)
// })
// .catch(error => console.log(error))

fetch(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log()
    return fetch(`${API}/products/${products[0].id}`)
})
