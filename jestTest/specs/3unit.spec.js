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
  expect(fullTrim('Это домашка')).toEqual('Это домашка');
  expect(fullTrim('    Это домашка')).toEqual('Это домашка');
  expect(fullTrim('Это домашка    ')).toEqual('Это домашка');
  expect(fullTrim(' Это    домашка')).toEqual('Это    домашка');
  expect(fullTrim('Классная работа ')).toEqual('Классная работа');
  expect(fullTrim('123 ')).toEqual('123');
  expect(fullTrim('!#$ ')).toEqual('!#$');
  expect(fullTrim(null)).toEqual("");
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
 ${'Васька'}       | ${true}
 ${'Ва'}           | ${true}
 ${'В'}            | ${false}
 ${''}             | ${''}
 ${'Васька Петька'}| ${false}
 ${' Васька'}      | ${false}
 ${'Васька '}      | ${false}
 ${'       '}      | ${false}
 ${123}            | ${false}
 ${'123'}          | ${true}
 ${'Vas!ka'}       | ${true}
 ${null}           | ${null}
 `('$name = $expected', ({name, expected}) => {
  expect(nameIsValid(name)).toEqual(expected);
});
