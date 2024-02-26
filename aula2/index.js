const products = []

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

class ProductManager {
    constructor(id, code, title, description, price, thumbnial, stock) {
        this.id = id,
            this.code = code,
            this.title = title,
            this.description = description,
            this.price = price,
            this.thumbnial = thumbnial,
            this.stock = stock
    }

    addProduct(title, description, price, thumbnial, code, stock) {

        if (!title, !description, !price, !thumbnial, !code, !stock) {
            return console.log('Todos os campos são obrigatórios')
        }


        return products.some(product => {
            product.code === code
        }) ? console.log('Código já existente no sistema') : products.push(new ProductManager(uuidv4(), code, title, description, price, thumbnial, stock))

    }

    getProductById(id) {

        products.find((product) => {
            product.id === id ? product : console.log('Não encontrado')
        })
    }

    showProduct() {
        console.log(products)
    }
}

const productManager = new ProductManager();
productManager.addProduct('Caderno', 'Caderno de 10 matérias', 3.20, 'url', 1, 10)
productManager.showProduct()
productManager.getProductById("ffb565d5-2471-4a03-b9df-b7b91db32e77")   