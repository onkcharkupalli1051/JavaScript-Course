const introducer = (NAME, ROLL) => {
  const person = {
    name: NAME,
    roll: ROLL,
    assets: 10000,
    liabilities: 5000,
    netWorth: function() {
      return this.assets - this.liabilities
    }
  }

  const intro = `Hi, my name is ${person.name} and networth is ${person.netWorth()}`

  return intro
}

console.log(introducer('Onkar', 5))
