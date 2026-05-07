import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';

interface ExpenseFormProps {
    onExpenseAdded: () => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onExpenseAdded }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/expenses', {
                description,
                amount: parseFloat(amount),
                date
            });
            setDescription('');
            setAmount('');
            setDate('');
            onExpenseAdded();
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
                Add New Expense
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <TextField
                    label="Amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <TextField
                    label="Date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    slotProps={{ inputLabel: { shrink: true } }}
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Expense
                </Button>
            </Box>
        </Paper>
    );
};

export default ExpenseForm;
