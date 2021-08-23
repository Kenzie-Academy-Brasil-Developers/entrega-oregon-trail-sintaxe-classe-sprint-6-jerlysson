class Traveler {
    constructor(name,food,isHealthy){
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt(){
        this.food+= 2;
    }
    eat(){
        if(this.food <1){
            this.isHealthy = false
        }else{
            this.food-= 1;
        }
    }
}
class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passageiros = [];
    }
    getAvailableSeatCount(){
        this.vagas = this.capacity - this.passageiros.length;
        return this.vagas
    }
    join(passageiro){
        if(this.getAvailableSeatCount() > 0){
            this.passageiros.push(passageiro)
        }else{
            console.log("carroça cheia!")
        }
    }
    shouldQuarantine(){
        for(let i=0;i<this.passageiros.length;i++){
            let objAtual = this.passageiros[i];
            if(!objAtual.isHealthy && this.passageiros.length!==0){
                console.log("tem um doente")
                return true
            }
        }
    }
    totalFood(){
        let total = 0
        for(let i =0;i<this.passageiros.length;i++){
            let objAtual = this.passageiros[i].food;
            total+=objAtual;
        }
        return total;
    }
}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
