import styles from './Carousel.module.css'
import PropType from 'prop-types'
import Card from '../Card/Card'
import { useRef } from 'react'

import bgnone from '../../../images/bgnone.png'

export default function Carousel({ array, text }) {
    const carousel = useRef(null)
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= (carousel.current.offsetWidth - 200)
    }
    
    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += (carousel.current.offsetWidth - 200)
    }

    return (
        <div className={styles.container}>
            {array.length > 0 ?
                <>
                    <h3 className={styles.title}>{text}</h3>
                    <div ref={carousel} className={styles.carousel}>
                        {array && array.map((movie) => {
                            return <Card img={movie.poster_path ? imgUrl + movie.poster_path : bgnone} key={movie.id} id={movie.id} />
                        })}
                    </div>

                    <div className={styles.buttons}>
                        <button onClick={handleLeftClick} className={styles.buttonLeftClick}>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button onClick={handleRightClick} className={styles.buttonRightClick}>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </> : null
            }
        </div>
    )
}

Carousel.propTypes = {
    array: PropType.node.isRequired,
    text: PropType.string.isRequired
}