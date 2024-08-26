const Character = require('./Character')

class Mage extends Character{
    constructor(name, lifepoints, attackPts, defensePts, magicPts) {
        super(name, lifepoints, attackPts, defensePts)
        this.magicPts = magicPts
    }
    
    attack_mages(target) {
        const damage = this.attackPts + this.magicPts - target.defensePts
        if (damage > 0) {
          target.lifepoints -= damage
          console.log(`${this.name} (Mago) atacou ${target.name} causando ${damage} de dano!`)
        } else {
          console.log(`${this.name} (Mago) atacou ${target.name}, mas o ataque foi ineficaz!`)
        }
    }

    heal_mage(target) {
      const healing = 2 * this.magicPts
      target.lifepoints += healing
      console.log(`${this.name} (Mago) curou ${target.name} em ${healing} pontos de vida!`)
    }
}

module.exports = Mage