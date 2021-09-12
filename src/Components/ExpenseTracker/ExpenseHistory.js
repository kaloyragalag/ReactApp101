import React from 'react'

const ExpenseHistory = (props) => {
    return (
        <>
            <h1>History</h1>
            {props.expenses.map((expense) => (//key is needed
                <div key={expense.id}> 
                    <h3 >{expense.text} </h3>
                    <p>{expense.amount}</p>
                </div>
            ))}
        </>
    )
}

export default ExpenseHistory
