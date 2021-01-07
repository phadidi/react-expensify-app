import moment from 'moment';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../../actions/filters';

test('should generate setStartDate object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should generate setEndDate object', () => {
  const action = setEndDate(moment(10));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    endDate: moment(10),
  });
});

test("should generate text filter of value 'text'", () => {
  const action = setTextFilter('text');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'text',
  });
});

test("should generate default text filter of value ''", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test("should generate passed-in text filter of value ''", () => {
  const action = setTextFilter('');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should generate sortByDate object', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sortByAmount object', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});
