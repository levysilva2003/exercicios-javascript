/* Aula A012 10 - Exercícios - Const e Let */

/*
*   Breno Levy Silva tem 21 anos, pesa 80kg
*   tem 1.7 de altura e seu ICM é de _____
*   Breno Levy Carneiro da Silva nasceu em 2003
*
*   A fórmula para calcular o Índice de Massa Corporal (IMC) é:
*   IMC = peso (kg) / altura (m) x altura (m).
*/

// CÓDIGO
const nome = 'Breno Levy';
const sobrenome = 'Carneiro da Silva';
const idade = 21;
const peso = 80;
const alturaEmM = 1.70;
let indiceMassaCorporal;
let anoNascimento;

// CÁLCULO DO Indice Massa Corporal (IMC)
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

//  CÁLCULO ANO NASCIMENTO (MELHOR FORMA)
//anoNascimento = new Date().getFullYear() - idade;

//  CÁLCULO ANO NASCIMENTO (INICIANTE)
anoNascimento = 2024 - idade;

// RESULTADO
// Template Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);