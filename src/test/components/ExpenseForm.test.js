import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', ()=>{
  const wrapper = new shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();  
});

test('should render ExpenseForm with expense correctly', ()=>{  
  const wrapper = new shallow(<ExpenseForm expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();  
});