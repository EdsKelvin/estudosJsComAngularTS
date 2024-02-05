
const numero = 0;
const NumeroDivisivel = (numero % 5) === 0;

if (numero === 0) {
  console.log('numero invalido');
} else if (NumeroDivisivel) {
  console.log('SIM');
} else {
  console.log('NAO');
}



