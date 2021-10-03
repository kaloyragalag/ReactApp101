import { Container, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react'

const ExpenseSummary = (props) => {
    const amounts = props.expenses.map(expense => expense.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const positive = amounts.reduce((acc, item) => (acc += item > 0 ? item : 0), 0).toFixed(2);
    const negative = amounts.reduce((acc, item) => (acc += item < 0 ? item*-1 : 0), 0).toFixed(2);
    return (
        <div>
            <Typography variant="h5">Summary</Typography>
            <Container>
                <Paper variant="outlined">
                    <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography variant="h6" align="center">Total</Typography>
                        <Typography variant="body2" align="center">${total}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Divider orientation="vertical"/>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" align="center">Income</Typography>
                        <Typography variant="body2" align="center">${positive}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Divider orientation="vertical"/>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" align="center">Expense</Typography>
                        <Typography variant="body2" align="center">${negative}</Typography>
                    </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default ExpenseSummary
