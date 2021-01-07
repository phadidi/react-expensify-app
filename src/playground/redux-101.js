import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({ count }) => ({
  type: 'SET',
  count,
});

const add = ({ a, b }, c) => {
  return a + b + c;
};

console.log(add({ a: 1, b: 12 }, 20));

let result;
const addResult = (a, b) => {
  result = a + b;
};

const countManager = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

const store = createStore(countManager);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 10,
});

store.dispatch(incrementCount());

unsubscribe();

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10,
});

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch({
  type: 'RESET',
});

store.dispatch(setCount({ count: 200 }));

store.dispatch({
  type: 'SET',
  count: 101,
});

console.log(store.getState());

addResult(1, 2);
console.log(result);
