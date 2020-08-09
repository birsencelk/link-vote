//@flow
import { addLink, reset, deleteItem } from '../actions'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [thunk];
let enhancer = applyMiddleware(...middleware);

const store = createStore(
  reducers,
  window.INITIAL_STATE || {},
  enhancer
);


// beforeEach(() => {
//   store.dispatch(reset());
// })

it('link reducer should initiate with correct state', () => {
  // expect(store.getState()).toMatchSnapshot()
  const expected = {links:{data:[], isLoading:false, error: null}};
  expect(store.getState()).toEqual(expected)
})

it('should create new linkData object when called', () => {
  let expectedState = {links:{data:[{link: 'link', url:'url', id: 9999, votes: 0}], isLoading:false, error: null}};
  store.dispatch(addLink([{link: 'link', url:'url', id: 9999, votes: 0}]));
  expect(store.getState()).toEqual(expectedState);
})

it('should delete linkData when called', () => {
  store.dispatch(deleteItem({link: 'link', url:'url', id: 9999, votes: 0}))
  const expected = {links:{data:[], isLoading:false, error: null}};
  expect(store.getState()).toEqual(expected)
})

// it('should toggle a todos completion when called', () => {
//   let expectedState = [{title: 'add', id: 9999, complete: true}]
//   store.dispatch(actions.toggleTodo(9999))
//   expect(store.getState().todos).toEqual(expectedState)
// })