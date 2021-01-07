import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should create a new expense, modify an existing expense, and finally remove an existing expense', () => {
  const expenseData = {
    id: '1',
    description: 'writing utensils',
    amount: 12,
    createdAt: 2016,
  };
  const addAction = addExpense({ expenseData });
  expect(addAction).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData },
  });
  const expenseId = action.expense.id;
  const editAction = editExpense(expenseId, {
    note: 'expense paid, prepare to discard',
  });
  expect(editAction).toEqual({
    type: 'EDIT_EXPENSE',
    id: expenseId,
    updates: { note: 'expense paid, prepare to discard' },
  });
  const removeAction = removeExpense({ id: expenseId });
  expect(removeAction).toEqual({
    type: 'REMOVE_EXPENSE',
    expense: {
      id: expenseId,
    },
  });
});

test('create a default expense', () => {
  const addAction = addExpense();
  expect(addAction).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
