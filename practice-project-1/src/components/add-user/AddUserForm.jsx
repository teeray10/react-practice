import Button from '../UI/Button';
import styles from './AddUserForm.module.css';

function AddUserForm(props) {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmit();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.input}>
                <label>Username</label>
                <input type="text" onChange={props.onUsernameChange} />
            </div>
            <div className={styles.input}>
                <label>Age</label>
                <input type="number" onChange={props.onAgeChange} />
            </div>
            <Button type="submit" text="Add User" />
        </form>
    );
}

export default AddUserForm;