import styles from './Header.module.css'
import Center from '../Center/Center'
import InputSearch from '../InputSearch/InputSearch'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className={styles.header}>
            <Center>
                <div className={styles.container}>
                    <Link to='/'><h2>RyMovies</h2></Link>

                    <div className={styles.input}>
                        <InputSearch text='Pesquise por um filme' width='400px' />
                    </div>

                    <nav>
                        <ul>
                            <Link className={styles.mylist} to='/mylist'>
                                <li>Minha lista</li>
                            </Link>

                            <Link className={styles.searchMobile} to='/input'>
                                <li><i className="fa-solid fa-magnifying-glass"></i></li>
                            </Link>

                            <Link className={styles.goToHome}>
                                <li><i className="fa-solid fa-house"></i></li>
                            </Link>

                            <Link className={styles.myslistMobile} to='/mylist'>
                                <li><i className="fa-solid fa-heart"></i></li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </Center>
        </header>
    )
}