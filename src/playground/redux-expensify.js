import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  tyoe: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

const sortByAmount = (sortBy = 'amount') => ({
  type: 'SORT_BY_AMOUNT',
  sortBy,
});

const sortByDate = (sortBy = 'date') => ({
  type: 'SORT_BY_DATE',
  sortBy,
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate,
});

const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate,
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const demoState = {
  expenses: [
    {
      id: 'b6n5g4e32',
      description: 'Retro Console Tune-Up',
      note: 'Getting clean discs was a pain',
      amount: 599,
      createdAt: 1,
    },
  ],
  filters: {
    text: 'retro',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  },
};

const user = { name: 'Parsa', age: 26 };
console.log({ location: 'SoCal', ...user, age: 26.5 });

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expenses.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

store.dispatch(addExpense({ description: 'PS5', amount: 500 }));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseToRemove = store.dispatch(
  addExpense({ description: 'Supps', amount: 100 })
);
store.dispatch(removeExpense({ id: expenseToRemove.expense.id }));

const expenseToEdit = store.dispatch(
  addExpense({ description: 'Mobile Keyboard (wired)', amount: 25 })
);
store.dispatch(editExpense(expenseToEdit.expense.id, { amount: 30 }));

store.dispatch(setTextFilter('mobile'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(150));
