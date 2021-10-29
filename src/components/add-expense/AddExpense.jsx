import './AddExpense.css';
import ExpenseForm from './ExpenseForm';

function AddExpense(props) {
    return (
        <div className='add-expense'>
            <ExpenseForm onAddExpense={props.onAddExpense}/>
        </div>
    );
}

export default AddExpense;