"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var x = prompt("Insira o valor para x");
var y = Number(x);
console.log("Sucessores = ".concat(y + 1, ",").concat(y + 2));
console.log("Antecessores = ".concat(y - 1, ", ").concat(y - 2));
