import { useState, useEffect } from 'react';
import { Container, Typography, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import type { Expense } from './components/ExpenseList';
import axios from 'axios';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

function App() {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('/api/expenses');
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Personal Expense Tracker
                    </Typography>
                    <ExpenseForm onExpenseAdded={fetchExpenses} />
                    <ExpenseList expenses={expenses} onExpenseDeleted={fetchExpenses} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
