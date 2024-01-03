class formaDeBolo{
    constructor(saborMassa, saborRecheio){
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de massa de ${this.saborMassa} com recheio de ${this.saborRecheio}`)
    }
    
}
let boloFesta = new formaDeBolo("chocolate" , "nutella")
let boloPremium = new formaDeBolo("baunilha" , "coco")
boloFesta.escrever()
boloPremium.escrever()
