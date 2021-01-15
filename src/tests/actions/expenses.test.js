import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  startEditExpense,
  editExpense,
  startRemoveExpense,
  removeExpense,
  startSetExpenses,
  setExpenses,
} from '../../actions/expenses';
import defaultExpenses from '../fixtures/defaultExpenses';

const createMockStore = configureMockStore([thunk]);

beforeEach(() => {
  const expensesData = {};
  expensesData.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref('expenses')
    .set(expensesData)
    .then(() => done());
});

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

test('should edit an expense from database', (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;
  const updates = { amount: 45000 };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      });
      return database.ref(`expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
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

test('should successfully set expenses with given data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({ type: 'SET_EXPENSES', expenses });
});

test('should successfully fetch expenses from database', () => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});

test('should successfully remove expense from db', () => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(actions[0]).toEqual({ type: 'REMOVE_EXPENSE', id });
  return database
    .ref(`expenses/${id}`)
    .once('value')
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});
