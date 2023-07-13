import styles from './MovieInfo.module.css'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import useUseful from '../../../../../js/useUseful'
import PropType from 'prop-types'

export default function MovieInfo({ title, average, data, genere, time, plot, id, img }) {
    const { brasilFormatData } = useUseful()

    return (
        <div className={styles.infos}>
            <h1>{title}</h1>

            <span>
                <div className={styles.average}>
                    <i className="fa-solid fa-star"></i> {average}
                </div>
                <p>{brasilFormatData(data)}</p>
                <i className="fa-solid fa-circle icons"></i>
                <p>{genere}</p>
                <i className="fa-solid fa-circle icons"></i>
                <p>{time}m</p>
            </span>
      
            <h3>Sinopse</h3>
            <p className={styles.plot}>{plot}</p>
            <FavoriteButton id={id} img={img} name={title} data={data} plot={plot} />
        </div>
  )
}

MovieInfo.propTypes = {
    img: PropType.string,
    title: PropType.string,
    data: PropType.string,
    genere: PropType.string,
    plot: PropType.string,
    time: PropType.number,
    average: PropType.number,
    id: PropType.number,
}
