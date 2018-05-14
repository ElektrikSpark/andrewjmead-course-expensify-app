import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'


const ExpenseList = (props) => (
    <div>
        {props.expenses.length > 0 ? <h1> Expense List </h1> : <h2> No Expenses </h2>}
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
