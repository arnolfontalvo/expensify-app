import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses correctly', ()=>{
  const wrapper = new shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();  
});

test('should render ExpenseList with no expenses correctly', ()=>{
  const wrapper = new shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();  
});