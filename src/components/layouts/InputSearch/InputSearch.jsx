import styles from './InputSearch.module.css'
import PropTypes from 'prop-types'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InputSearch({ text, width }) {
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const buttonClick = () => navigate(`/search/${name}`)

    const keydownEvent = (e) => {
        if (e.key === 'Enter') {
            return navigate(`/search/${name}`)
        }
    }

    return (
        <div style={{width: `${width}`}} className={styles.search}>
            <input 
            type="text" 
            placeholder={text}
            value={name}
            onChange={(e) => setName(e.target.value)} 
            onKeyDown={(e) => keydownEvent(e)}
            />
            <button onClick={buttonClick}>
                <i className="fa-solid fa-magnifying-glass">
            </i></button>
        </div>
    )
}

InputSearch.propTypes = {
    text: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
}