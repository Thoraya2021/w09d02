import { createStore, combineReducers } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import  Signin from './login'
import tasks from './task'

//first step to work in redux

const reducers = combineReducers({ Signin });
const reducers = combineReducers({ tasks });

const store= ()=> {
    return createStore(reducers, composeWithDevTools());
}

export default store();