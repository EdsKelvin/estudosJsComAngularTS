(function () {//Main
  const altura = 1.70;
  const pesoKilos = 96;

  const IMC = calcularIMC(pesoKilos, altura);
  console.log(clasificarIMC(IMC));
})();

function calcularIMC(pesoKilos, altura) {
  return  pesoKilos / Math.pow(altura, 2);
}

function clasificarIMC(IMC) {
  if (IMC < 18.5) {
   return('Abaixo do peso');
  } else if (IMC >= 18.5 && IMC < 25) {
   return('normal');
  } else if (IMC >= 25 && IMC < 30) {
   return('ACIMA DO PESO');
  } else if (IMC >= 30 && IMC < 40) {
   return('obeso');
  } else {
   return('obesidade Grave');
  }
}




