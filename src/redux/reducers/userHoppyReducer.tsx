import {
  CURRENT_USER,
  DELETE_USER,
  ADD_ALL_DATA
} from "../actions/actionTypes";
import { UserHoppies, Users, Hoppy } from "../../UserHoppies";

export interface IInitialState {
  users: Users;
  currentUser: UserHoppies;
}

const initialState = {
  users: new Users(),
  currentUser: new UserHoppies()
};


export default function(state: any = initialState, action: any) {
  switch (action.type) {
    case CURRENT_USER: {
      const { currentUser } = action.payload;
      return {
        ...state,
        currentUser: currentUser
      };
    }
    case DELETE_USER: {
    }
    case ADD_ALL_DATA: {
      const { users } = action.payload;
      return {
        ...state,
        users: users
      };
    }
    default:
      return state;
  }
}
