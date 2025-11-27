import Validator from '../task'

test('Положительный кейс проверка метода validateUsername', () => {
    const primer = 'Max_159-jhvvrus';
    const res = new Validator();
    expect(res.validateUsername(primer)).toBeTruthy();
});

test('Проверка метода validateUsername - "Допустимы только латинские буквы"', () => {
    const primer = 'maxЙ_112jhvvrus';
    const res = new Validator();
    expect(res.validateUsername(primer)).toBeFalsy();
});

test('Проверка метода validateUsername - "Имя не должно содержать подряд более трёх цифр"', () => {
    const primer = 'max_1234rus';
    const res = new Validator();
    expect(res.validateUsername(primer)).toBeFalsy();
});

test('Проверка метода validateUsername - "Начинаться цифрами"', () => {
    const primer = '3max_12rus';
    const res = new Validator();
    expect(res.validateUsername(primer)).toBeFalsy();
});

test('Проверка метода validateUsername - "Заканчиваться цифрами"', () => {
    const primer = 'max_12rus5';
    const res = new Validator();
    expect(res.validateUsername(primer)).toBeFalsy();
});

test('Проверка метода validateUsername - "Начинаться символами подчёркивания или тире"', () => {
    const primer = '_max_12rus';
    const res = new Validator();
    expect(res.validateUsername(primer)).toBeFalsy();
});

test('Проверка метода validateUsername - "Заканчиваться символами подчёркивания или тире"', () => {
    const primer = 'max_12rus-';
    const res = new Validator();
    expect(res.validateUsername(primer)).toBeFalsy();
});
