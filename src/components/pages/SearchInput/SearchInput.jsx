import Center from '../../layouts/Center/Center'
import InputSearch from '../../layouts/InputSearch/InputSearch'
import useUseful from '../../../js/useUseful'
import styles from './SearchInput.module.css'

import { useEffect } from 'react'

export default function SearchInput() {
    const { scrollToTop } = useUseful()

    useEffect(() => {
        scrollToTop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.wrapper}>
            <Center>
                <InputSearch text='Pesquise por um filme' width='100%' />
            </Center>
        </div>
    )
}