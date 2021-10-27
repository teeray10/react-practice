import { useState } from 'react';
import Card from '../wrappers/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    let listOfExpenses = [];

    props.expenses.forEach((expense, index) => {
        listOfExpenses.push(<ExpenseItem key={index} item={expense} remove={props.remove}/>);
    });

    const yearChangeHandler = ({target}) => {
        console.log(target.value);
        setSelectedYear(target.value);
    }

    return (
        <Card className='expenses'>
            <h2>Selected year: {selectedYear}</h2>
            <ExpensesFilter yearChange={yearChangeHandler} selectedYear={selectedYear}/>
            {listOfExpenses}
        </Card>
    );
}

export default ExpenseList;