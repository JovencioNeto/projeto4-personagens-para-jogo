const Character = require('./Character')
const Thief = require('./Thief')
const Mage = require('./Mage')
const Warrior = require('./Warrior')

const Neymar = new Warrior('Neymar', 100, 25, 10, 20, 'attack')  // Neymar = Maior guerreiro desse país (Ironia)
const Paulo = new Mage('Paulo', 80, 20, 5, 30)  // Paulo = Magia não é coisa que gente legal, acaba com sessões de RPG
const Everson = new Thief('Reverso', 90, 22, 8) // EVERSON = Capitalista
const jimmy = new Thief('Jimmy', 99 , 87 , 30 ) // Jimmy = ladrão

Neymar.attack_warrior(Paulo) 
console.log('==============================')
Neymar.changeStance() 
console.log('==============================')
Neymar.attack_warrior(Paulo)  
console.log('==============================')
Paulo.heal_mage(Paulo)
console.log('==============================')
Everson.attack_thief(Neymar) 
console.log('==============================')
jimmy.attack_thief(Everson)