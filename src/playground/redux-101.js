/*jslint node: true */
/*jshint -W079 */
'use strict';

import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());