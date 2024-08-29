const Character = require('./Character')

class Thief extends Character{
  constructor(name, lifepoints, attackPts, defensePts) {
    super(name, lifepoints, attackPts, defensePts)
  }

  attack_thief(player) {
    const damage = 2 * (this.attackPts - player.defensePts)
    if (damage > 0) {
      player.lifepoints -= damage
      console.log(`${this.name} (Ladrão) atacou ${player.name} causando ${damage} de dano!`)
      console.log(`A vida restante do ${player.name} é ${player.lifePoints}!`)
    } else {
      console.log(`${this.name} (Ladrão) atacou ${player.name}, mas o ataque foi ineficaz!`)
    }
  }
}

module.exports = Thief