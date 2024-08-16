import promptSync = require('prompt-sync');

var prompt = promptSync();

var x : string = prompt("Insira o valor para x")
var y = Number(x)
console.log(`Sucessores = ${y+1},${y+2}`)
console.log(`Antecessores = ${y-1}, ${y-2}`)