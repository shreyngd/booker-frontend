import styles from './index.module.scss'
import image from '../../logo.svg'


const Header = () => {

    return (
        <header className={styles.header}>
            <hgroup>
                <h1>Slot Marker</h1>
            </hgroup>
            <figure className={styles.nameContainer}>
                <img src={image} alt="" />
                <figcaption className={styles.name}>Sn</figcaption>
            </figure>
        </header>
    )

}

export default Header;