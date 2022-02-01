let container1 = document.createElement('div')
container1.className = 'container'
let heading = document.createElement('h1')
heading.innerHTML = '<b>Makeup Products<b> <br> <i>Search your favourite products<i> !'
let product_type = document.createElement('input')
let search = document.createElement('button')
search.innerHTML = 'SEARCH HERE'

container1.appendChild(heading)
container1.appendChild(product_type)
container1.appendChild(search)
document.body.appendChild(container1)
let itemproduct = document.createElement('div')
itemproduct.className = 'itemproduct'

// creating a function to get value from backend
 
async function getProducts() {
    let type = product_type.value
    // reset
    itemproduct.innerHTML = ''
    product_type.value = ''

   //   fetching the product from api

    let response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`)
    let data = await response.json()

    console.log(data)
    appendData(data)
}

//creating a function to print from backend to front end

function appendData(data) {
    data.forEach(item => {
        let smallbox = document.createElement('div')
        smallbox.className = 'small-container'
        let images = document.createElement('img')
        let names = document.createElement('h2')
        let brands = document.createElement('h3')
        let prices = document.createElement('h3')
        let product_link = document.createElement('a')
        let description = document.createElement('p')
        images.src = item.image_link
        names.innerHTML = item.name
        brands.innerHTML = `Brand : ${item.brand}`
        prices.innerHTML = `Price : $${item.price}`

        // link for product

        product_link.href = item.product_link
        product_link.innerHTML = 'Check the Product'
        description.innerHTML = item.description
        smallbox.appendChild(images)
        smallbox.appendChild(names)
        smallbox.appendChild(brands)
        smallbox.appendChild(prices)
        smallbox.appendChild(product_link)
        smallbox.appendChild(description)
        itemproduct.appendChild(smallbox)
    });
    document.body.appendChild(itemproduct)
}
search.addEventListener('click', getProducts)