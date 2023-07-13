import Center from '../../layouts/Center/Center'
import CardSearch from '../../layouts/CardSearch/CardSearch'
import Spinner from '../../layouts/Spinner/Spinner'
import CardMessage from '../../layouts/CardMessage/CardMessage'
import styles from './Search.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useUseful from '../../../js/useUseful'

const api_search = import.meta.env.VITE_SEARCH
const api_key = import.meta.env.VITE_API_KEY
const img_url = import.meta.env.VITE_IMG

export default function Search() {
    const { scrollToTop } = useUseful()
    const [movies, setMovies] = useState([])
    const { name } = useParams()

    const getMovies = async () => {
        const response = await fetch(`${api_search}?api_key=${api_key}&query=${name}&language=pt-BR`)
        const data = await response.json()
       
        if (data.results.length > 0) {
            setMovies(data.results)
        } else {
            setMovies(data)
        }
    }

    useEffect(() => {
        getMovies()
        scrollToTop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

    return (
        <div className={styles.search}>
            <Center>
                <div className={styles.container}>
                    {movies.total_results === 0 && <CardMessage text={`Nenhum filme chamado ${name} foi encontrado`} />}
                    {movies.length === 0 && <Spinner />}
                    {movies.length > 0 && movies.map(movie => {
                        return (
                            <CardSearch 
                            id={movie.id && movie.id}
                            key={movie.id && movie.id} 
                            img={movie.poster_path && img_url + movie.poster_path} 
                            title={movie.title ? movie.title : 'indefinido'}
                            data={movie.release_date ? movie.release_date : undefined}
                            plot={movie.overview ? movie.overview : 'Sem sinopse'}
                            />
                        )
                    })}
                </div>
            </Center>
        </div>
    )
}