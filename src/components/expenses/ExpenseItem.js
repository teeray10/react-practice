import Card from '../wrappers/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.item.date} />
            <div className='expense-item__description'>
                <h2>{props.item.title}</h2>
                <div className='expense-item__price'>R{props.item.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;