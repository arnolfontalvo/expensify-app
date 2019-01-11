/*jslint node: true */
/*jshint -W079 */
'use strict';

import moment from 'moment';
import filtersReducer from '../../reducers/filters';
test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY', sortBy: 'amount' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY', sortBy: 'date' }
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SET_TEXT_FILTER', text: 'search' }
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: 'search',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  });
});

test('should set starDate filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const date = moment(0)
  const action = { type: 'SET_START_DATE', startDate: date }
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    startDate: date,
    endDate: undefined,
    sortBy: 'amount'
  });
});

test('should set endDate filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const date = moment(0)
  const action = { type: 'SET_END_DATE', endDate: date }
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    text: '',
    startDate: undefined,
    endDate: date,
    sortBy: 'amount'
  });
});

