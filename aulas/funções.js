// //FUNÇÃO COM PARÂMETRO
// ///////////////////////////////////////////////////////
// pedido("Th", "maçã")
// function pedido (nome, pedido){
//     console.log(`O cliente ${nome} pediu ${pedido}`)
// }
///////////////////////////////////////////////////////

//FUNCÇÃO COM RETORNO
// let result = sum(1, 13)
// console.log(`O resultado dessa função é ${result}`)
// function sum (num1, num2){
//     let soma = num1 + num2
//     return soma
// }

let userName = getFirstName("Th cabral de oliveira ")
console.log(`Seja bem vindo ${userName}`)
function getFirstName(name){
    let firstName = name.split(" ")[1]
    return firstName
}