import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', ()=>{
  const wrapper = new shallow(<Header />);
  expect(wrapper).toMatchSnapshot();  
});