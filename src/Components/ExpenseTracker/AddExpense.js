import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, {useState} from 'react'


const AddExpense = (props) => {    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    
    const submitExpense = (e) => {
        e.preventDefault();

        if(!text){
            props.onSetMessageSeverity('Please Add Transaction', 'error');
            return;
        }

        if(!amount){
            props.onSetMessageSeverity('Please Add Amount', 'error');
            return;
        }

        if(isNaN(amount)){
            props.onSetMessageSeverity('Amount is not valid', 'error');
            return;
        }

        props.addExpense({text, amount: +amount});
        props.onSetMessageSeverity('Successfully Added Transaction', 'success');

        setText('');
        setAmount(0);
    }

    return (
        <form onSubmit={submitExpense}>
            <Typography variant="h5">Add New Transaction</Typography>
            <Container>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <TextField fullWidth label="Transaction" variant="outlined" value={text} onChange={(e)=>setText(e.target.value)} />
                </Grid>
                <Grid item>
                    <TextField fullWidth label="Amount" variant="outlined" value={amount} onChange={(e)=>setAmount(e.target.value)} />
                </Grid>
                <Grid item>
                    <Button fullWidth type="submit" variant="contained">Add Transaction</Button>
                </Grid>
            </Grid>
            </Container>
        </form>
    )
}

export default AddExpense
