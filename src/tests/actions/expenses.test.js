import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  editExpense,
  removeExpense,
} from '../../actions/expenses';
import defaultExpenses from '../fixtures/defaultExpenses';

const createMockStore = configureMockStore([thunk]);

test('should create a new expense, modify an existing expense, and finally remove an existing expense', () => {
  const addAction = addExpense(defaultExpenses[2]);
  expect(addAction).toEqual({
    type: 'ADD_EXPENSE',
    expense: defaultExpenses[2],
  });
  const expenseId = addAction.expense.id;
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

test('should add a created expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Utensils',
    amount: 1299,
    note: 'needed some replacements',
    createdAt: 1500,
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add a default expense to database and store', () => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

// test('create a default expense', () => {
//   const addAction = addExpense();
//   expect(addAction).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       amount: 0,
//       createdAt: 0,
//     },
//   });
// });
