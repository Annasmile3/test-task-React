import { createStore, applyMiddleware } from 'redux';
import nextConnectRedux from 'next-connect-redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";

export const store = (initialState) => createStore(rootReducer, initialState, applyMiddleware(thunk));

export const nextConnect = nextConnectRedux(store);
