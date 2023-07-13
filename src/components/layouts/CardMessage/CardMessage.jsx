import styles from './CardMessage.module.css'
import PropTypes from 'prop-types'

export default function CardMessage({ text }) {
    return <div className={styles.wrapper}><p>{text}</p></div>
}

CardMessage.propTypes = {
    text: PropTypes.string.isRequired
}