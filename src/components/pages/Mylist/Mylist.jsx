import styles from './Mylist.module.css'
import Center from '../../layouts/Center/Center'
import useUseful from '../../../js/useUseful'
import CardSearch from '../../layouts/CardSearch/CardSearch'
import { useEffect, useState } from 'react'
import CardMessage from '../../layouts/CardMessage/CardMessage'

const img_url = 'https://image.tmdb.org/t/p/w500/'

export default function Mylist() {
    const { scrollToTop } = useUseful()
    const [ favorites, setFavorites ] = useState([])

    useEffect(() => {
        const local = localStorage.getItem("favorites")
        if (local) setFavorites(JSON.parse(local))
        scrollToTop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div className={styles.mylist}>
            <Center>
                <h3>Favoritados</h3>
                <div className={styles.container}>
                    {favorites && favorites.length > 0 ? 
                        favorites.map(favorite => {
                            return (
                                <CardSearch
                                id={favorite.id}
                                img={img_url + favorite.img}
                                title={favorite.name}
                                data={favorite.data}
                                plot={favorite.plot}
                                key={favorite.id}
                                />
                            )
                        }) : <CardMessage text='Você ainda não possui nenhum filme favoritado' />
                    }
                </div>
            </Center>
        </div>
    ) 
}