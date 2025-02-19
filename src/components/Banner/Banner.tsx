import styles from './Banner.module.css'
import profile from '../../assets/img/profile01.jpg'

export const Banner = () => {

    const code = [
        "<div>",
        "　<p>성장하는 개발자 노시온입니다.</p>",
        "　<p>Web Developer C-ON</p>",
        "　<img src='c-on_image' alt='c-on_image' />",
        "</div>"
    ]

    return(
        <div className={ styles.container }>
            <div className={ styles.title }>
                Wellcome C-ON's Page!! 
            </div>
            <div className={ styles.intro }>
                <div className={ styles.sub }>
                    <div className={ styles.ment }>
                        <p>성장하는 개발자 노시온입니다.</p>
                        <p>Web Developer C-ON</p>
                    </div>
                    <img src={ profile } alt="" />
                </div>
            </div>
            <div className={ styles.codeWindow }>
                <div className={ styles.btn }>
                    <p /><p /><p />
                </div>
                <div className={ styles.codeForm }>
                    { code.map(item => <p>{item}</p>) }
                </div>
            </div>
            
           
        </div>
    )
}