// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack(){
        super.attack()
        return this.strength
    }
    receiveDamage(damage){
        super.receiveDamage(damage);
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else return `${this.name} has died in act of combat`
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier {
    attack(){
        super.attack()
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else return `A Saxon has died in combat`
    }
}

// War

class War {
    constructor() {
    vikingArmy = [];
    saxonArmy = [] 
    }       
    
    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        const currentSaxon = this.saxonArmy[Math.floor(Math.random * this.saxonArmy.length)];
        const currentViking = this.vikingArmy[Math.floor(Math.random * this.vikingArmy.length)];
        const result = currentSaxon.receiveDamage(currentViking.strength);
        this.saxonArmy = saxonArmy.filter((sax) => sax.health > 0);
        return result;
    }
    saxonAttack() {
        const currentSaxon = this.saxonArmy[Math.floor(Math.random * this.saxonArmy.length)];
        const currentViking = this.vikingArmy[Math.floor(Math.random * this.vikingArmy.length)];
        const result = currentViking.receiveDamage(currentSaxon.strength);
        this.vikingArmy = vikingArmy.filter((vik) => vik.health > 0);
        return result;
    }
    // showStatus()
}
