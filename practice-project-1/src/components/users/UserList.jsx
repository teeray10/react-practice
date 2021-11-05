import Card from '../UI/Card';
import User from './User';
import styles from './UserList.module.css';

function UserList(props) {
    const userList = props.users.map(user => <User key={Math.random()} name={user.username} age={user.age} />);

    return (
        <Card className={styles['user-list']}>
            <ul>
                {props.users.length > 0 && userList}
                {props.users.length === 0 && 'No users found.'}
            </ul>
        </Card>
    );
}

export default UserList;