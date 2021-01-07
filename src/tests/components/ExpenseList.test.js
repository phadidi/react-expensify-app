import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import defaultExpenses from '../fixtures/defaultExpenses';

test('should render ExpenseList with defaultExpenses', () => {
  const wrapper = shallow(<ExpenseList expenses={defaultExpenses} />);
  expect(wrapper).toMatchSnapshot();
});
