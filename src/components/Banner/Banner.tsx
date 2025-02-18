import styles from './Banner.module.css'
import bg from '../../assets/img/bg01.jpg'

export const Banner = () => {
    return(
        <div className={ styles.container }>
            <img src={ bg } alt="" />
        </div>
    )
}