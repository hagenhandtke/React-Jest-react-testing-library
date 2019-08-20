import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {UserHoppies} from "../UserHoppies";
import userHoppyReducer from "./reducers/userHoppyReducer";
import { IInitialState } from "./reducers/userHoppyReducer";

const rootReducer = combineReducers({reducer: userHoppyReducer});

// export type AppState = ReturnType<typeof rootReducer>; export default
// createStore(rootReducer);

export type AppState = ReturnType < typeof rootReducer >;
export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

    return store;
}

export interface Store {
  reducer: IInitialState;
}