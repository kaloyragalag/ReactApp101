import { Alert as MuiAlert, Grid, Snackbar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddExpense from './AddExpense';
import ExpenseHistory from './ExpenseHistory';
import ExpenseSummary from './ExpenseSummary';

const AppExpenseTracker = (props) => {
    const [expenses, setExpenses] = useState([]);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('error');
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        const getExpensesFromServer = async() => {
          const expensesFromServer = await fetchExpensesFromServer();
          setExpenses(expensesFromServer);
        }
    
        getExpensesFromServer();
      },[]);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      
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

    const deleteExpense = async(id) => {
      await fetch(`http://localhost:5000/expenses/${id}`, {method: 'DELETE'});
      setExpenses(expenses.filter((expense) => expense.id !== id));
      setMessageSeverity('Successfully Deleted Transaction','success');
    }
      
    const setMessageSeverity = (message, severity) => {        
        setAlertMessage(message);   
        setSeverity(severity);
        setOpen(true);
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item alignItems="center">
              <ExpenseSummary expenses={expenses}/>
            </Grid>
            <Grid item>
              <AddExpense addExpense={addExpense} onSetMessageSeverity={setMessageSeverity} />
            </Grid>
            <Grid item>
              {expenses.length > 0 ? <ExpenseHistory onDelete={deleteExpense} expenses={expenses} /> : <Typography variant="h5">No Expense History!</Typography>}
            </Grid>
            <Snackbar autoHideDuration={6000} open={open} onClose={handleClose} anchorOrigin={{vertical: 'top',horizontal: 'right'}}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>{alertMessage}</Alert>
            </Snackbar>
        </Grid>
    )
}

export default AppExpenseTracker
