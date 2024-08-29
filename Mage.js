const Character = require('./Character')

class Mage extends Character{
  constructor(name, lifepoints, attackPts, defensePts, magicPts) {
    super(name, lifepoints, attackPts, defensePts)
    this.magicPts = magicPts
  }
  
  attack_mages(player) {
    const damage = this.attackPts + this.magicPts - player.defensePts
    if (damage > 0) {
      player.lifepoints -= damage
      console.log(`${this.name} (Mago) atacou ${player.name} causando ${damage} de dano!`)
      console.log(`A vida restante do ${player.name} é ${player.lifePoints}!`)
    } else {
      console.log(`${this.name} (Mago) atacou ${player.name}, mas o ataque foi ineficaz!`)
    }
  }

  heal_mage(player) {
    const healing = 2 * this.magicPts
    player.lifepoints += healing
    console.log(`${this.name} (Mago) curou ${player.name} em ${healing} pontos de vida!`)
    console.log(`Os ponto de vida de ${player.name} foram restaurados para ${player.lifePoints}!`)
  }
}

module.exports = Mage