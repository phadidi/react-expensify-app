import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup the default filter state', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment.startOf('month'),
    endDate: moment.endOf('month'),
  });
});

test('should setup sortByAmount reducer', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup a sortByDate reducer over an existing sortByAmount reducer', () => {
  const amountState = {
    text: '',
    sortBy: 'amount',
    startDate: 'undefined',
    endDate: 'undefined',
  };
  const state = filtersReducer(amountState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should setup a text filter state', () => {
  const text = 'the';
  const action = { type: 'SET_TEXT_FILTER', text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should setup a startDate filter state', () => {
  const startDate = moment();
  const action = { type: 'SET_START_DATE', startDate };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should setup an endDate filter state', () => {
  const endDate = moment();
  const action = { type: 'SET_END_DATE', endDate };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
