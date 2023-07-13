import PropType from 'prop-types'
import styles from './MovieBox.module.css'
import Carousel from '../../../layouts/Carousel/Carousel'
import Spinner from '../../../layouts/Spinner/Spinner'
import { useEffect, useState } from 'react'
import { useImage } from 'react-image'

const api_key = '3c2ca92601b8b49b80b35c9921771be0'

import bgnone from '../../../../images/bgnone.png'
import VideoBox from './VideoBox/VideoBox'
import MovieInfo from './MovieInfo/MovieInfo'

export default function MovieBox({ id, img, title, average, data, genere, time, plot }) {
    const [similar, setSimilar] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getSimilar = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}
        `)
        const data = await response.json()
        console.log(data)
        setSimilar(data.results)
    }

    const { src } = useImage({
        srcList: img,
        useSuspense: false,
        onError: () => {
          setIsLoading(false);
        },
        onLoad: () => {
          setIsLoading(false);
        },
    })

    useEffect(() => {
        getSimilar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.container}>
            {isLoading ? 
                <>
                    <div className={styles.movieBox}>
                        <img src={src ? src : bgnone} alt="poster" />
                        <MovieInfo
                        key={id}
                        title={title}
                        data={data}
                        img={img}
                        average={average}
                        plot={plot}
                        time={time}
                        id={id}
                        genere={genere}
                        />
                    </div>

                    <VideoBox id={id} /> 
            
                    <Carousel 
                    array={similar.length === 0 ? false : similar} 
                    text='Mais filmes para você' />
                </> : <Spinner />
            }
        </div>
    )
}

MovieBox.propTypes = {
    img: PropType.string,
    title: PropType.string,
    data: PropType.string,
    genere: PropType.string,
    plot: PropType.string,
    time: PropType.number,
    average: PropType.number,
    id: PropType.number,
}