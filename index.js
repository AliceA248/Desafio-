function somatorioMultiplos3e5(numero) {
  
    if (typeof numero !== 'number' || !Number.isInteger(numero) || numero <= 0) {
      return 'Por favor, insira um número inteiro positivo.';
    }
  
    let somatorio = 0;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    return somatorio;
  }
  
  
  console.log(somatorioMultiplos3e5(10)); 
  console.log(somatorioMultiplos3e5(11)); 
  console.log(somatorioMultiplos3e5(-5)); 
  console.log(somatorioMultiplos3e5('abc')); 
  console.log(somatorioMultiplos3e5(0)); 
  
  module.exports = { somatorioMultiplos3e5 };
