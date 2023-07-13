import styles from './CardSearch.module.css'
import PropTypes from  'prop-types'
import { Link } from 'react-router-dom'
import { useImage } from 'react-image'
import useUseful from '../../../js/useUseful'

import bgnone from '../../../images/bgnone.png'

export default function CardSearch({ id, img, title, data, plot }) {
    const { brasilFormatData } = useUseful()

    const { src } = useImage({
        srcList: img,
        useSuspense: false,
    })

    return (
        <Link className={styles.wrapper} to={`/movie/${id}`}>
            <img 
            src={src ? src : bgnone}
            alt="poster" 
            />
            <div className={styles.infos}>
                <p className={styles.title}>{title}</p>
                <p className={styles.data}>{brasilFormatData(data)}</p>
                <p className={styles.plot}>{plot}</p>
            </div>
        </Link>
    )
}

CardSearch.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired
}