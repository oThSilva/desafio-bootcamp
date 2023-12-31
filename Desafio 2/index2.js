function victoryDefeat(victory, defeat) {
    const balance = victory - defeat
    let heroLevel = ""

    if (balance <= 10) {
        heroLevel = "Ferro"
    } else if (balance <= 20) {
        heroLevel = "Bronze"
    } else if (balance <= 50) {
        heroLevel = "Prata"
    } else if (balance <= 80) {
        heroLevel = "Ouro"
    } else if (balance <= 90) {
        heroLevel = "Diamante"
    } else if (balance <= 100) {
        heroLevel = "Lendário"
    } else {
        heroLevel = "Imortal"
    }
    
    console.log(`O herói tem saldo de ${balance} vitórias e está no nível de ${heroLevel}.`)
    
    return balance
}

const balance = victoryDefeat(106, 5);
