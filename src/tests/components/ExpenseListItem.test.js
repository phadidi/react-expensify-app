import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import defaultExpenses from '../fixtures/defaultExpenses';

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...defaultExpenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
