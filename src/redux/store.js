import { createStore, combineReducers } from 'redux'
import results from './reducers/results'
import suggestions from './reducers/suggestions'
import currentItem from './reducers/currentItem'

const reducers = combineReducers({
    results,
    suggestions,
    currentItem
})

const store = createStore(reducers,[],window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store