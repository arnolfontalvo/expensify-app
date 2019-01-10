/*jslint node: true */
/*jshint -W079 */
'use strict';

const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return hello and name and !', () => {
  expect(generateGreeting('Arnol')).toBe('hello Arnol!');
});

test('should return hello Anonymous! when no name', () => {
  expect(generateGreeting()).toBe('hello Anonymous!');
});