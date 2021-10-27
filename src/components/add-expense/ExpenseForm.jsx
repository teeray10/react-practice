import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const updateTitle = ({target}) => {
        setTitle(target.value);
    }

    const updateAmount = ({target}) => {
        setAmount(target.value);
    }

    const updateDate = ({target}) => {
        setDate(target.value);
    }

    const submitExpense = (event) => {
        event.preventDefault();

        const expense = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.onAddExpense(expense);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitExpense}>
            <div className='add-expense__controls'>
                <div className='add-expense__control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={updateTitle}></input>
                </div>
                <div className='add-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={amount} onChange={updateAmount}></input>
                </div>
                <div className='add-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={updateDate}></input>
                </div>
            </div>
            <div className="add-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;