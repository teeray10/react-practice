import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={`${styles.card} ${props.class}`}>
            {props.children}
        </div>
    );
}

export default Card;