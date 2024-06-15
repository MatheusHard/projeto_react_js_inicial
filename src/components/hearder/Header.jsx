import styles from './Header.module.css'
import imagemLogo from '../../assets/image-ignite.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={imagemLogo} alt='Logotipo'/>
        </header>
    );
}