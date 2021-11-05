import Button from '../UI/Button';
import styles from './AddUserForm.module.css';

function AddUserForm(props) {
    return (
        <form>
            <div className={styles.input}>
                <label>Username</label>
                <input type="text" />
            </div>
            <div className={styles.input}>
                <label>Age</label>
                <input type="number" />
            </div>
            <Button type="submit" text="Add User" />
        </form>
    );
}

export default AddUserForm;