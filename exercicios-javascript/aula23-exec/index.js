/* 23. Exercício com variáveis */

let varA = 'A';  // B
let varB = 'B';  // C
let varC = 'C';  // A

//  MANEIRA 1
// const varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;

//  MANEIRA 2
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);