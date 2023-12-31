let nomeHeroi = "Seiya"
let victory = 500
let heroLevel  = ""

if (victory < 1000){
    heroLevel = "Ferro"
}else if (victory <= 2000){
    heroLevel = "Bronze"
}else if (victory <= 5000){
    heroLevel = "Prata"
}else if (victory <= 7000){
    heroLevel = "Ouro"
}else if (victory <= 8000){
    heroLevel = "Platina"
}else if (victory <= 9000){
    heroLevel = "Ascendente"
}else if (victory <= 10000){
    heroLevel = "Imortal"
}else{
    heroLevel = "Radiante"
}

console.log(`O heroi de nome ${nomeHeroi} está no nivel de ${heroLevel}`)





















