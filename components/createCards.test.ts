import { selectPair } from './createCards';

describe('тест проверки selectPair ', () => {
    test('результат выполнения - выводят количество пар карт в выбранной сложности', () => {
        expect(selectPair("2")).toEqual(6)
    });
    test('результат выполнения - выводят количество пар карт в выбранной сложности', () => {
        expect(selectPair("3")).toEqual(9)
    });
})
