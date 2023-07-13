import styles from './Center.module.css'
import PropTypes from 'prop-types';

export default function Center({children}) {
    return <div className={styles.center}>{children}</div>
}

Center.propTypes = {
    children: PropTypes.node.isRequired
}