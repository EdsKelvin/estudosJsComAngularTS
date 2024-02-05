

function aplicarDisconto(valor, desconto) {
  return (valor - (valor * (desconto/100)));
  
}

function aplicarJuros(valor, juros) {
  return (valor + (valor * (juros/100)));
}

const precoEtiqueta = 100;
const pagamento = 4;// 2- dinheiro 

if (pagamento === 1) {
  console.log(aplicarDisconto(precoEtiqueta, 10));
} else if (pagamento === 2) {
  console.log(aplicarDisconto(precoEtiqueta, 15));
} else if (pagamento === 3) {
  console.log(precoEtiqueta );
} else {
  console.log(aplicarJuros(precoEtiqueta, 10));
}

