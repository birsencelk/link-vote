import {
  ADD_LINK_SUCCESS,
  VOTE_SUCCESS,
  ORDER_FUNC_SUCCESS,
  DELETE_ITEM_SUCCESS,
  RESET
} from '../constants';

export const addLink = data => async (dispatch, getState) => {
  try {

    dispatch({
      type: ADD_LINK_SUCCESS,
      payload: data
    });

    console.log(data)

  } catch (err) {
    console.log(err);
  }
};

export const vote = (data,type) => async (dispatch, getState) => {
  try {

    dispatch({
      type: VOTE_SUCCESS,
      payload: {data:data,type:type}
    });

  } catch (err) {
    console.log(err);
  }
};

export const orderFunc = type => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_FUNC_SUCCESS,
      payload: {type:type}
    });

  } catch (err) {
    console.log(err);
  }
};

export const deleteItem = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_ITEM_SUCCESS,
      payload: {id:id}
    });

  } catch (err) {
    console.log(err);
  }
};

export const reset =()=> async (dispatch, getState) => {
  try {
    dispatch({
      type: RESET
    })
  }catch (err) {
    console.log(err);
  }
}