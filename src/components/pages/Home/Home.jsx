import styles from './Home.module.css'
import Center from '../../layouts/Center/Center'
import imageBg from '../../../images/rymovies.png'
import Carousel from '../../layouts/Carousel/Carousel'
import Banner from '../../layouts/Banner/Banner'
import Spinner from '../../layouts/Spinner/Spinner'
import { useState, useEffect } from 'react'

const api_key = import.meta.env.VITE_API_KEY

export default function Home() {
    const [isLoading, setIsLoading] = useState(false)
    const [popularMovies, setPopularMovies] = useState([])
    const [bestMovies, setBestMovies] = useState([])
    const [animations, setAnimations] = useState([])

    const getPopularMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        const data = await response.json()
        setPopularMovies(data.results)
    }
    
    const getBestMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
        const data = await response.json()
        setBestMovies(data.results)
    }
    
    const getAnimations = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=16&sort_by=popularity.desc
        `)
        const data = await response.json()
        setAnimations(data.results)
    }

    useEffect(() => {
        getPopularMovies()
        getBestMovies()
        getAnimations()
        setIsLoading(true)
    }, [])

    return (
        <div className={styles.home}>
            {isLoading ?
                <>
                    <Banner img={imageBg}>
                        <h2>Rymovies</h2>
                        <p>Descubra informações exclusivas e assista aos trailers dos filmes mais aguardados!</p>
                    </Banner>
                    <Center>
                        <Carousel array={bestMovies} text='Filmes aclamados pela crítica' />
                        <Carousel array={popularMovies} text='Filmes do momento' />
                        <Carousel array={animations} text='Animações do momento' />
                    </Center>
                </> : <Spinner />
            }
        </div>
    )
}