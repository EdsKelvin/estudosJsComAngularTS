
/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const valorEtanol = 3.95;
const valorGasolina = 5.74;
let tipoCombustivel = 'Gasolina';

const gastoPorKm = 15;
const distanciaEmKm = 120;

const media = distanciaEmKm / gastoPorKm;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = media * valorEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = media * valorGasolina;
  console.log(valorGasto.toFixed(2));
}



