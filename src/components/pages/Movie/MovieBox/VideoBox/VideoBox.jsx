import PropType from 'prop-types'
import styles from './VideoBox.module.css'
import Divider from '../../../../layouts/Divider/Divider'
import { useEffect, useState } from 'react'

const api_key = import.meta.env.VITE_API_KEY

export default function VideoBox({ id }) {
    const [videos, setVideos] = useState([])

    const getVideos = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}
        `)
        const data = await response.json()
        setVideos(data.results)
    }

    const filterMovie = (videos) => {
        const onlyTrailers = videos.filter((video) => video.type === 'Trailer')
        if (onlyTrailers.length > 0) {
            const url = `https://www.youtube.com/embed/${onlyTrailers[0].key}`
            return url
        }
        return null
    }

    useEffect(() => {
        getVideos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
            {filterMovie(videos) !== null ?
                <div>
                    <Divider />

                    <div className={styles.video}>
                        <iframe
                        width="560"
                        height="315"
                        src={videos.length > 0 ? filterMovie(videos) : null}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        ></iframe>
                    </div>

                    <Divider />
                </div> : <Divider />
            }
        </>
    )
}

VideoBox.propTypes = {
    id: PropType.number.isRequired,
}
