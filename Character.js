class Character{
    constructor(name,lifePoints,attackPts,defensePts){
        this.name = name
        this.lifePoints = lifePoints
        this.attackPts = attackPts
        this.defensePts = defensePts
    }
    attack_base(target) {
        const damage = this.attackPts - target.defensePts
        if (damage > 0) {
          target.lifepoints -= damage
          console.log(`${this.name} atacou ${target.name} causando ${damage} de dano!`)
        } else {
          console.log(`${this.name} atacou ${target.name}, mas o ataque foi ineficaz!`)
        }
    }
}

module.exports = Character