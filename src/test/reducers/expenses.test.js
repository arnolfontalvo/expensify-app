/*jslint node: true */
/*jshint -W079 */
'use strict';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const new_expense = {
    id: '4',
    description: 'New expense',
    note: '',
    amount: 1245,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: new_expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, new_expense]);
});

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit expense', () => {
  const note =  'new note value';
  const amount = 10;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { note, amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('new note value');
  expect(state[1].amount).toBe(10);
});