function sayMyName(name) {
  return'My name is ' + name;
}

function maiorIdade(idade) {
  if (idade >= 18) {
    console.log(sayMyName('EDSON') + ' é Maior de idade');
  } else
    console.log(sayMyName('EDSON') + ' é Menor de idade');
}

maiorIdade(15);