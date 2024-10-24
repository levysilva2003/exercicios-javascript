// CAMPO PARA ESCREVERS
const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');  // getElementById = buscar pelo ID
const texto = document.getElementById('texto');

// TITULO
numeroTitulo.innerHTML = numero;
texto.innerHTML = '';

// texto.innerHTML += `<p>Seu número +2 é ${numero + 2}.</p>`;

// RAIZ QUADRADA
texto.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}.</p>`;
150
// INTEIRO ou false
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;

// NaN
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;

// ARREDONDANDO PRA BAIXO = floor
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;

// ARREDONDANDO PRA CIMA = ceil
texto.innerHTML += `<p>Arredondando para baixo: ${Math.ceil(numero)}.</p>`;

// COM DUAS CASAS DECIMAIS
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;