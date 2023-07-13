import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.title}>rymovies</p>
            <a href="https://ryancostaportfolio.netlify.app/" target='blank'>
                <p className={styles.credit}>© 2023 - Ryan Costa Benjamim</p>
            </a>
        </footer>
    )
}