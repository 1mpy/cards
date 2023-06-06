const restart = require('./createCards');

describe('тест рестарта', () => {
    test('результат выполнения - наличие класса game__menu', () => {
        expect(restart()).toContain("game__menu");
    });
})
