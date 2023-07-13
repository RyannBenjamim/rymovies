import styles from './Banner.module.css'
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

export default function Banner({ img, children }) {
    const banner = useRef(null)
    const gradient = 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), #141414)'
    const image = `url(${img})`

    const setBackground = () => {
        banner.current.style.backgroundImage = `${gradient}, ${image}`
        banner.current.style.backgroundRepeat = "no-repeat"
        banner.current.style.backgroundPosition = "center"
        banner.current.style.backgroundSize = "cover"
    }

    useEffect(() => {
        setBackground()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div className={styles.banner} ref={banner}>
        {children}
    </div>
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
