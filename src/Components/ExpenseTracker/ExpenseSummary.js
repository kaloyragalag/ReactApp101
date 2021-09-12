import React from 'react'

const ExpenseSummary = (props) => {
    const amounts = props.expenses.map(expense => expense.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const positive = amounts.reduce((acc, item) => (acc += item > 0 ? item : 0), 0).toFixed(2);
    const negative = amounts.reduce((acc, item) => (acc += item < 0 ? item*-1 : 0), 0).toFixed(2);
    return (
        <div>
            <h3>Your Balance</h3>
            <p>{total}</p>
            <h3>Income</h3>
            <p>{positive}</p>
            <h3>Expense</h3>
            <p>{negative}</p>
        </div>
    )
}

export default ExpenseSummary
