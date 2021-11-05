import styles from './Button.module.css';

function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={styles.button}
            type={props.type}>
            {props.text}
        </button>
    );
}

export default Button;