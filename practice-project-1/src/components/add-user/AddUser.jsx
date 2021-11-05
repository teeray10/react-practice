import Card from '../UI/Card';
import styles from './AddUser.module.css';
import AddUserForm from './AddUserForm';

function AddUser(props) {
    return (
        <Card class={styles['add-user']}>
            <AddUserForm />
        </Card>
    );
}

export default AddUser;