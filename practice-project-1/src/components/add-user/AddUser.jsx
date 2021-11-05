import { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import AddUserForm from './AddUserForm';

function AddUser(props) {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameChangeHandler = ({ target }) => {
        setUsername(target.value);
    }

    const ageChangeHandler = ({ target }) => {
        setAge(target.value);
    }
    const submitHandler = () => {
        const user = {
            username,
            age
        }
        props.addUser(user);
    }

    return (
        <Card class={styles['add-user']}>
            <AddUserForm
                onSubmit={submitHandler}
                onUsernameChange={usernameChangeHandler}
                onAgeChange={ageChangeHandler} />
        </Card>
    );
}

export default AddUser;