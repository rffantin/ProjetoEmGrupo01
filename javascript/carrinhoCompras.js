let produtos = []

function adicionaCompra1 (){
    var priceItem1 = 79.90;
    produtos.push(priceItem1)
    alert('Arranjo Girassol adicionado ao carrinho!')
}

function adicionaCompra2 (){
    var priceItem2 = 49.90;
    produtos.push(priceItem2)
    alert('Rosas Brancas adicionado ao carrinho!')
}

function adicionaCompra3 (){
    var priceItem3 = 109.90;
    produtos.push(priceItem3)
    alert('Rosas Azuis adicionado ao carrinho!')
}

function adicionaCompra4 (){
    var priceItem4 = 29.90;
    produtos.push(priceItem4)
    alert('Margaridas adicionado ao carrinho!')
}

function adicionaCompra5 (){
    var priceItem5 = 99.90;
    produtos.push(priceItem5)
    alert('Buquê Rosas Pink adicionado ao carrinho!')
}

function adicionaCompra6 (){
    var priceItem6 = 139.90;
    produtos.push(priceItem6)
    alert('Arranjo Astromélias adicionado ao carrinho!')
}

function paginaCompras(){
    var somaTotal = 0
    for(var i = 0; i < produtos.length; i++){
        somaTotal += produtos[i]
    }
    
    alert(`A soma dos produtos é igual a: R$ ${somaTotal}`)

}

