import { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';
import AddUserForm from './AddUserForm';

function AddUser(props) {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = ({ target }) => {
        setUsername(target.value);
    }

    const ageChangeHandler = ({ target }) => {
        setAge(target.value);
    }

    const submitHandler = () => {
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age.'
            })
            return;
        }

        if (+age < 0) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age.'
            })
            return;
        }
        props.addUser({ username, age });
    }

    const resetErrorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal error={error} onReset={resetErrorHandler} />}
            <Card className={styles['add-user']}>
                <AddUserForm
                    onSubmit={submitHandler}
                    onUsernameChange={usernameChangeHandler}
                    onAgeChange={ageChangeHandler} />
            </Card>
        </div>
    );
}

export default AddUser;