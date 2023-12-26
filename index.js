let nomeHeroi = "Seiya"
let nivel = 50000
let nivelHeroi  = ""

if (nivel < 1000){
    nivelHeroi = "Ferro"
}else if (nivel <= 2000){
    nivelHeroi = "Bronze"
}else if (nivel <= 5000){
    nivelHeroi = "Prata"
}else if (nivel <= 7000){
    nivelHeroi = "Ouro"
}else if (nivel <= 8000){
    nivelHeroi = "Platina"
}else if (nivel <= 9000){
    nivelHeroi = "Ascendente"
}else if (nivel <= 10000){
    nivelHeroi = "Imortal"
}else{
    nivelHeroi = "Radiante"
}

console.log(`O heroi de nome ${nomeHeroi} está no nivel de ${nivelHeroi}`)





















