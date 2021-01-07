import selectExpensesTotal from '../../selectors/expenses-total';
import defaultExpenses from '../fixtures/defaultExpenses';

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = selectExpensesTotal([defaultExpenses[0]]);
  expect(res).toBe(50000);
});

test('should correctly add up multiple', () => {
  const res = selectExpensesTotal([defaultExpenses]);
  expect(res).toBe(97075);
});
