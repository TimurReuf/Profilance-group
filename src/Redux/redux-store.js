import {combineReducers, compose, createStore,applyMiddleware} from "redux";
import loginReducer from "./login-reducer";
import newsReducer from "./news-reducer";
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'


let reducers = combineReducers({
        mainPage: loginReducer,
        newsPage: newsReducer,
        form: formReducer
        }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));
window.__store__ = store

export default store