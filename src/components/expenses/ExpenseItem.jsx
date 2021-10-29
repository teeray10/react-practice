import Card from '../wrappers/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const remove = () => {
        props.remove(props.item);
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.item.date} />
                <div className='expense-item__description'>
                    <h2>{props.item.title}</h2>
                    <div className='expense-item__price'>R{props.item.amount}</div>
                    <button onClick={remove}>X</button>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;