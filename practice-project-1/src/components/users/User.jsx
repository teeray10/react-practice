import styles from './User.module.css';

function User(props) {
    return (
        <li className={styles.li}>
            {props.name + ' (' + props.age + ' years old)'}
        </li>
    );
}

export default User;