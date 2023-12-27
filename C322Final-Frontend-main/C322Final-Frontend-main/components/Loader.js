import Image from 'next/image';
import React from 'react';
import spinner from '/public/images/loading_spinner.gif';
import styles from '/styles/Loader.module.css'

const Loader = () => {
    return (
        <>
            <Image className={styles.picture} src={spinner} alt='loading..' />
        </>
    );
};

export default Loader;