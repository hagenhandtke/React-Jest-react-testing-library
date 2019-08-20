import { CURRENT_USER, DELETE_USER, ADD_ALL_DATA } from "./actionTypes";

export const firstRequestData = users => ({
  type: ADD_ALL_DATA,
  payload: {
    users: users
  }
});

export const currentUser = currentUser => ({
  type: CURRENT_USER,
  payload: {
    currentUser: currentUser
  }
});
