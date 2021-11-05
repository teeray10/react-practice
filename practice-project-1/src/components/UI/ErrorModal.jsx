import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

function ErrorModal(props) {
    return (
        <div>
            <div className={styles.backdrop} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.error.title}</h2>
                </header>
                <section className={styles.content}>
                    <p>{props.error.message}</p>
                </section>
                <footer className={styles.footer}>
                    <Button type="button" onClick={props.onReset} text="Okay" />
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;