import styles from './Card.module.css'
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Card({img, id}) {
    const card = useRef(null)

    const setBackground = () => {
        card.current.style.backgroundImage = `url(${img})`
        card.current.style.backgroundRepeat = "no-repeat"
        card.current.style.backgroundPosition = "center"
        card.current.style.backgroundSize = "cover"
    }

    useEffect(() => {
        setBackground()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Link to={`/movie/${id}`}>
            <div className={styles.card} ref={card}></div>
        </Link>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}