import React from 'react';
import styles from '../../styles/Home.module.scss';
import IconTray from '../../components/IconTray';
import DownloadButton from '../../components/DownloadButton';
// import ScrollIcon from '../../components/ScrollIcon';

function HomeContainer() {
  
    return (
        <div className={`static-layout ${styles['home-bg-image']}`}>
            {/* <div className='home-overlay-image' onMouseOver={createHoverEffect}> */}
            <div className={styles['home-overlay-image']} >
                <div className={styles['home-content']}>
                    <h3 className={styles['home-content-heading']}>Hi<br />I&apos;m <span className='text-red-600'>Saneen Nazar</span></h3>
                    <p className={styles['home-content-text']}>Front-End UI Developer</p>
                    {/* <DownloadButton /> */}
                    <div className='text-center flex flex-col items-center'>
                        <IconTray />
                        {/* <ScrollIcon /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContainer;