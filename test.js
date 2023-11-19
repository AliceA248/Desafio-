const somatorioMultiplos3ou5 = require("./index.js").somatorioMultiplos3ou5;

// Testes unitários
test('Somatório de múltiplos de 3 e 5 para 10 deve ser 23', () => {
  expect(somatorioMultiplos3ou5(10)).toBe(23);
});

test('Somatório de múltiplos de 3 e 5 para 11 deve ser 33', () => {
  expect(somatorioMultiplos3ou5(11)).toBe(33);
});

test('Somatório de múltiplos de 3 e 5 para número negativo deve retornar mensagem de erro', () => {
  expect(somatorioMultiplos3ou5(-5)).toBe('Por favor, insira um número inteiro positivo.');
});

test('Somatório de múltiplos de 3 e 5 para string deve retornar mensagem de erro', () => {
  expect(somatorioMultiplos3ou5('abc')).toBe('Por favor, insira um número inteiro positivo.');
});

test('Somatório de múltiplos de 3 e 5 para 0 deve retornar mensagem de erro', () => {
  expect(somatorioMultiplos3ou5(0)).toBe('Por favor, insira um número inteiro positivo.');
});

