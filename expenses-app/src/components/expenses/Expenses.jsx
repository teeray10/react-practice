import { useState } from 'react';
import Card from '../wrappers/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    let filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

    const yearChangeHandler = ({target}) => {
        console.log(target.value);
        setSelectedYear(target.value);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter yearChange={yearChangeHandler} selectedYear={selectedYear}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;