import styles from './Movie.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Center from '../../layouts/Center/Center'
import Spinner from '../../layouts/Spinner/Spinner'
import MovieBox from './MovieBox/MovieBox'
import useUseful from '../../../js/useUseful'

const api_key = import.meta.env.VITE_API_KEY
const img_url = import.meta.env.VITE_IMG

export default function Movie() {
    const { scrollToTop } = useUseful()
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR
        `)
        const data = await response.json()
        console.log(data)
        setMovie(data)
    }

    useEffect(() => {
        getMovie()
        scrollToTop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <div className={styles.movie}>
            <Center>
                {Object.keys(movie).length === 0 && <Spinner/>}
                {Object.keys(movie).length > 0 && <MovieBox 
                id={movie.id && movie.id}
                img={movie.poster_path && img_url + movie.poster_path} 
                data={movie.release_date ? movie.release_date : undefined}
                title={movie.title ? movie.title : 'indefinido'}
                average={movie.vote_average ? (movie.vote_average).toFixed(1) : 0}
                genere={movie.genres && movie.genres.length > 0 
                    ? typeof movie.genres[0] === 'string' ? movie.genres[0] : movie.genres[0].name
                    : 'indefinido'
                }
                time={movie.runtime ? movie.runtime : 0}
                plot={movie.overview ? movie.overview : 'Sem sinopse'}
                />}
            </Center>
        </div>
    )
}