import { useState } from 'react';
import AddExpense from './components/add-expense/AddExpense';
import ExpenseList from './components/expenses/ExpenseList';

function App() {
    const [expenses, setExpenses] = useState([
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
    ]);

    const addExpenseHandler = (expense) => {
        setExpenses(prev => {
            expense.id = 'e' + (prev.length + 1);
            return [...prev, expense];
        })
    }

    const removeExpense = (item) => {
        setExpenses(prev => prev.filter(expense => expense.id !== item.id));
    }

    return (
        <div>
            <AddExpense onAddExpense={addExpenseHandler}/>
            <ExpenseList expenses={expenses} remove={removeExpense}/>
        </div>
    );
}

export default App;