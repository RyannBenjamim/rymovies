import PropTypes from 'prop-types';
import styles from './FavoriteButton.module.css'
import { useState } from 'react'

export default function FavoriteButton({ id, img, name, data, plot }) {
    const [favorites, setFavorites] = useState(() => {
        const local = localStorage.getItem("favorites")
        if (!local) return []
        const state = JSON.parse(local)
        return state
    })

    const [buttonClick, setButtonClick] = useState(() => {
        let state = false

        favorites.forEach(item => {
            if (item.id === id) {
                state = true
            }
        })
        return state
    })

    const clickButton = () => {
        if (buttonClick) {
            removeFavorite()
        } else {
            addFavorite()
        }
        setButtonClick(!buttonClick)
    }

    const addFavorite = () => {
        const movie = { id, img, name, data, plot }
        setFavorites((state) => {
            const arr = [movie, ...state]
            localStorage.setItem("favorites", JSON.stringify(arr))
            return arr
        })
    }

    const removeFavorite = () => {
        setFavorites((state) => {
            const newArr = state.filter(item => item.id !== id)
            localStorage.setItem("favorites", JSON.stringify(newArr))
            return newArr
        })
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={clickButton}>
                {buttonClick ? 
                <p><i className="fa-solid fa-heart"></i> Favoritado</p>
                : <p><i className="fa-regular fa-heart"></i> Adicionar</p>}
            </button>
        </div>
    )
}

FavoriteButton.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.string,
    plot: PropTypes.string,
}