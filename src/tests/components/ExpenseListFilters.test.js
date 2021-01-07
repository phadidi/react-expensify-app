import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import defaultExpenses from '../fixtures/defaultExpenses';
import {
  defaultFiltersNormal,
  defaultFiltersAlternate,
} from '../fixtures/defaultFilters';
import { setStartDate, setEndDate } from '../../actions/filters';

let setTextFilter,
  sortByDate,
  sortByAmount,
  sortStartDate,
  sortEndDate,
  history,
  wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  sortStartDate = jest.fn();
  sortEndDate = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <ExpenseListFilters
      filters={defaultFiltersNormal}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      sortStartDate={sortStartDate}
      sortEndDate={sortEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly using defaultFiltersNormal', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly using defaultFiltersAlternate', () => {
  wrapper.setProps({ filters: defaultFiltersAlternate });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'repair';
  wrapper.find('input').simulate('change', { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({ filters: defaultFiltersAlternate });
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.setProps({ filters: defaultFiltersNormal });
  wrapper.find('select').simulate('change', { target: { value } });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
