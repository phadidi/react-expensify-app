import selectExpenses from '../../selectors/expenses';
import defaultExpenses from '../fixtures/defaultExpenses';

test("should filter expenses by text value 'repair'", () => {
  const filters = {
    text: 'repair',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(defaultExpenses, filters);
  expect(result).toEqual([defaultExpenses[2], defaultExpenses[3]]);
});

test('should filter expenses by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: moment(1),
    endDate: undefined,
  };
  const result = selectExpenses(defaultExpenses, filters);
  expect(result).toEqual([defaultExpenses[1], defaultExpenses[3]]);
});

test('should filter expenses by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: moment(1),
  };
  const result = selectExpenses(defaultExpenses, filters);
  expect(result).toEqual([defaultExpenses[1], defaultExpenses[2]]);
});

test('should sort expenses by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(defaultExpenses, filters);
  expect(result).toEqual([
    defaultExpenses[1],
    defaultExpenses[2],
    defaultExpenses[3],
  ]);
});

test('should sort expenses by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(defaultExpenses, filters);
  expect(result).toEqual([
    defaultExpenses[2],
    defaultExpenses[1],
    defaultExpenses[3],
  ]);
});
