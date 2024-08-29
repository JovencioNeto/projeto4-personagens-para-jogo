class Character{
  constructor(name,lifePoints,attackPts,defensePts){
    this.name = name
    this.lifePoints = lifePoints
    this.attackPts = attackPts
    this.defensePts = defensePts
  }
  attack_base(player) {
    const damage = this.attackPts - player.defensePts
    if (damage > 0) {
      player.lifepoints -= damage
      console.log(`${this.name} atacou ${player.name} causando ${damage} de dano!`)
      console.log(`A vida restante do ${player.name} é ${player.lifePoints}!`)
    } else {
      console.log(`${this.name} atacou ${player.name}, mas o ataque foi ineficaz!`)
    }
  }
}

module.exports = Character