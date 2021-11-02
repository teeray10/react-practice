import { useState } from 'react';
import './AddExpense.css';
import ExpenseForm from './ExpenseForm';

function AddExpense(props) {
    const [showForm, setShowForm] = useState(false);

    const toggleFormHandler = () => {
        setShowForm(prevState => !prevState);
    }

    return (
        <div className='add-expense'>
            {!showForm && <button type='button' onClick={toggleFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onAddExpense={props.onAddExpense} toggleForm={toggleFormHandler}/>}
        </div>
    );
}

export default AddExpense;