import { Link } from 'react-router-dom'
import styles from './ErrorMessage.module.css'

export default function ErrorMessage() {
    return (
        <div className={styles.error}>
            <h1 className={styles.alert404}>404</h1>
            <h2 className={styles.description}>Oups! La page que vous demandez n'existe pas</h2>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    );
}