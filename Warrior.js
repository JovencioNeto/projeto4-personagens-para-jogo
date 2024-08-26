const Character = require('./Character')

class Warrior extends Character {
    constructor(name, lifepoints, attackPts, defensePts, shieldPts, position) {
      super(name, lifepoints, attackPts, defensePts)
      this.shieldPts = shieldPts
      this.position = position
    }
  
    attack_warrior(target) {
        if (this.position === 'attack') {
            const damage = this.attackPts - target.defensePts
            if (damage > 0) {
                target.lifepoints -= damage
                console.log(`${this.name} (Guerreiro) atacou ${target.name} causando ${damage} de dano!`)
            } else {
                console.log(`${this.name} (Guerreiro) atacou ${target.name}, mas o ataque foi ineficaz!`)
            }
        } else {
            console.log(`${this.name} (Guerreiro) está em posição de defesa e não pode atacar.`)
        }
    }
  
    changeStance() {
        if (this.position === 'attack') {
            this.position = 'defense'
            this.defensePts += this.shieldPts
            console.log(`${this.name} (Guerreiro) mudou para posição de defesa.`)
        } else {
            this.position = 'attack'
            this.defensePts -= this.shieldPts
            console.log(`${this.name} (Guerreiro) mudou para posição de ataque.`)
        }
    }
}

module.exports = Warrior