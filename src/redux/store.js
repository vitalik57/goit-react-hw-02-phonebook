import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ClientsReducer from "./clientsReducer";
import filterReducer from "./filterReduser";

const rootReducer = combineReducers({ items: ClientsReducer, filter: filterReducer });

const store = createStore(rootReducer, composeWithDevTools());
export default store;
