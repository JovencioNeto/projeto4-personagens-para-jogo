const Character = require('./Character')

class Thief extends Character{
  constructor(name, lifepoints, attackPts, defensePts) {
    super(name, lifepoints, attackPts, defensePts)
  }

  attack_thief(target) {
    const damage = 2 * (this.attackPts - target.defensePts)
    if (damage > 0) {
      target.lifepoints -= damage
      console.log(`${this.name} (Ladrão) atacou ${target.name} causando ${damage} de dano!`)
    } else {
      console.log(`${this.name} (Ladrão) atacou ${target.name}, mas o ataque foi ineficaz!`)
    }
  }
}

module.exports = Thief