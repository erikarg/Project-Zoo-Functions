const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se o argumento count retorna o número 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se o argumento names retorna um array que contém o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Testa se o argumento averageAge retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se o argumento passado contempla uma funcionalidade', () => {
    expect(handlerElephants('')).toEqual(null);
  });
  it('Testa se o retorno de um parametro diferente de uma string é: Parametro inválido, é necessário uma string', () => {
    expect(handlerElephants(15)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se o retorno do parametro undefined é undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Testa se o argumento location retorna a localização dos elefantes', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Testa se o argumento popularity retorna o número 5', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Testa se o argumento availability retorna um array com os dias de visita aos elefantes', () => {
    const availability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(availability);
  });
});
