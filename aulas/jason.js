let invoice = {
    nome: "Th",
    age: "23",
    products: {
        0: ["mouse 2xwm", 29,9],
        1: ["teclado mecânico", 129,99],
        2: ["monitor", 899,99],
        3: ['TV 100" ', 10000.99], 
    }
}

function generateInvoice(invoice){
    console.log(`o comprador é ${invoice.nome}`)
    console.log(`a idade é ${invoice.age}`)
    console.log(`===========`)
    //for in pra percorrer uma lista de objetos
    for(let index in invoice.products){
        let [productsName, productsPrice] = invoice.products[index]
        console.log(`- ${productsName}: R$ ${productsPrice}`)
    }
}
generateInvoice(invoice)