import { fullTrim, nameIsValid } from '../src/homework/homework3';

/**
 * Допишите несколько unit тестов для функции (вспоминаем тест-дизайн),
 * которая удаляет пробелы и табуляторы в начале и конце строки.
 */

test('Проверяем тримминг для пробела в начале слова', () => {
  expect(fullTrim(' Это домашка')).toEqual('Это домашка');
  expect(fullTrim('Это домашка ')).toEqual('Это домашка');
  expect(fullTrim(' Это домашка ')).toEqual('Это домашка');
  expect(fullTrim('\tЭто домашка')).toEqual('Это домашка');
  expect(fullTrim('Это домашка\t')).toEqual('Это домашка');
  expect(fullTrim('\tЭто домашка\t')).toEqual('Это домашка');
});

/**
 * Напишите параметризированный unit тест для функции, которая проверяет валидность кличек котиков.
 * Кличка счиатется валидной, если она соотвествует следующим условиям:
 * 1) Кличка содержит минимум два символа;
 * 2) Кличка не пустая;
 * 3) Кличка не содержит пробелов.

 Обратите внимание, в примере приведен обычный тест.
 Параметризированный тест - https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
 */

test('Передать валидную кличку', () => {
  expect(nameIsValid('Имя')).toEqual(true);
});
test.each`
  name | expected
 ${'/\w{2,}/'} | ${true}; 
 ${''} | ${false};
 ${'/[^s]/'} | ${true};
 `(({name, expected}) => {
  expect(nameIsValid(name)).toBe(expected);
});
