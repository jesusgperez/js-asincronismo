import fetch from "node-fetch"
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    const response = fetch(urlApi)
    const data = response.json()
    return data
}
// Does not work this way
const anotherFunc = (urlApi) => {
    try {
        const products = fetchData(`${urlApi}/products`)
        const product = fetchData(`${urlApi}/products/${products[0].id}`)
        const category = fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products[0])
        console.log(product.title)
        console.log(category.name)
    } catch (error){
        console.error(error)
    }
}

anotherFunc(API)