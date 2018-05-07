import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

// const unsubscribe = store.subscribe(() => {
//     const state = store.getState()
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

store.dispatch(
    addExpense({ 
        description: 'Water bill',
        amount: 34567,
        createdAt: 1001000000000
    })
)

store.dispatch(
    addExpense({ 
        description: 'Gas bill',
        amount: 55000,
        createdAt: 1002000000000
    })
)

store.dispatch(
    addExpense({ 
        description: 'Rent',
        amount: 109500,
        createdAt: 1000000000000
    })
)

// store.dispatch(setTextFilter('water'))


// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

//////////////////////////

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const appRoot = document.querySelector('#app')
ReactDOM.render(jsx, appRoot)
