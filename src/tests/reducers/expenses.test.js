import expensesReducer from '../../reducers/expenses';
import defaultExpenses from '../fixtures/defaultExpenses';

test('should setup the default expenses state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should setup removeExpense action', () => {
  const action = { type: 'REMOVE_EXPENSE', id: defaultExpenses[1].id };
  const state = expensesReducer(defaultExpenses, action);
  expect(state).toEqual([defaultExpenses[0], defaultExpenses[2]]);
});

test('should setup removeExpense action for an expense that does not exist, then fail to modify the defaultExpenses array', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-1' };
  const state = expensesReducer(defaultExpenses, action);
  expect(state).toEqual(defaultExpenses);
});

test('should setup addExpense action', () => {
  const expenseData = {
    id: '2001',
    description: 'GCN HDMI Adapter',
    note: 'comes with optical audio',
    amount: 130,
    createdAt: 2016,
  };
  const action = { type: 'ADD_EXPENSE', expense: expenseData };
  const state = expensesReducer(defaultExpenses, action);
  expect(state).toEqual([...defaultExpenses, expenseData]);
});

test('should setup editExpense action', () => {
  const note = 'Made sure there was a disc drive';
  const action = {
    type: 'EDIT_EXPENSE',
    id: defaultExpenses[0].id,
    updates: { note },
  };
  const state = expensesReducer(defaultExpenses, action);
  expect(state[0].note).toEqual(note);
});

test('should setup editExpense action for an expense that does not exist, then fail to modify the defaultExpenses array', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2002',
    updates: { note: 'GCN HDMI needs extra outlet' },
  };
  const state = expensesReducer(defaultExpenses, action);
  expect(state).toEqual(defaultExpenses);
});
