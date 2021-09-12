import { useState, useEffect } from 'react';
import AddExpense from './AddExpense';
import ExpenseHistory from './ExpenseHistory';
import ExpenseSummary from './ExpenseSummary';

const AppExpenseTracker = (props) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const getExpensesFromServer = async() => {
          const expensesFromServer = await fetchExpensesFromServer();
          setExpenses(expensesFromServer);
        }
    
        getExpensesFromServer();
      },[]);
      
    const fetchExpensesFromServer = async() => {
        const result = await fetch('http://localhost:5000/expenses');
        const data = await result.json();
    
        return data;
      }      

  const addExpense = async(expense) => {
    const result = await fetch('http://localhost:5000/expenses/', 
    {
      method: 'POST'
      , headers:{
        'Content-type': 'application/json'
      }
      , body: JSON.stringify(expense)
    });
    const data = await result.json();

    setExpenses([...expenses, data]);    
  }

    return (
        <div>
            <ExpenseSummary expenses={expenses}/>
            {expenses.length > 0 ? <ExpenseHistory expenses={expenses} /> : 'No Expenses!'}
            <AddExpense addExpense={addExpense}/>
        </div>
    )
}

export default AppExpenseTracker
