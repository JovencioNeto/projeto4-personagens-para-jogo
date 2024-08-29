const Character = require('./Character')

class Warrior extends Character {
    constructor(name, lifepoints, attackPts, defensePts, shieldPts, position) {
        super(name, lifepoints, attackPts, defensePts)
        this.shieldPts = shieldPts
        this.position = position
    }
  
    attack_warrior(player) {
        if (this.position === 'attack') {
            const damage = this.attackPts - player.defensePts
            if (damage > 0) {
                player.lifePoints -= damage
                console.log(`${this.name} (Guerreiro) atacou ${player.name} causando ${damage} de dano!`)
                console.log(`A vida restante do ${player.name} é ${player.lifePoints}!`)
            } else {
                console.log(`${this.name} (Guerreiro) atacou ${player.name}, mas o ataque foi ineficaz!`)
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