import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export interface Expense {
    id: number;
    description: string;
    amount: number;
    date: string;
}

interface ExpenseListProps {
    expenses: Expense[];
    onExpenseDeleted: () => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onExpenseDeleted }) => {

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`/api/expenses/${id}`);
            onExpenseDeleted();
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    };

    if (expenses.length === 0) {
        return (
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="body1" align="center">
                    No expenses yet. Add some!
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper elevation={3}>
            <List>
                {expenses.map((expense) => (
                    <ListItem key={expense.id} divider>
                        <ListItemText
                            primary={expense.description}
                            secondary={`${expense.date} - $${expense.amount.toFixed(2)}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(expense.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default ExpenseList;
