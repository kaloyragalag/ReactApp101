import { List, Divider, ListItem, Typography, ListItemText, Container, IconButton, ListItemButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const ExpenseHistory = (props) => {
    return (
        <>
            <Typography variant="h5">History</Typography>
            <Container>
                <List>
                {props.expenses.map((expense) => (//key is needed
                    <div key={expense.id}>
                    <Divider light />
                    <ListItem secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => props.onDelete(expense.id)}>
                      <DeleteIcon/>
                    </IconButton>
                    }
                    disablePadding> 
                        <ListItemButton>
                        <ListItemText primary={expense.text} secondary={`$ ${expense.amount.toFixed(2)}`} />
                        </ListItemButton>
                    </ListItem>
                    </div>
                ))}
                </List>
            </Container>
        </>
    )
}

export default ExpenseHistory
