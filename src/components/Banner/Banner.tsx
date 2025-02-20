import styles from './Banner.module.css'
import profile01 from '../../assets/img/profile01.jpg'
import profile02 from '../../assets/img/profile02.jpg'
import { useEffect, useState } from 'react'

export const Banner = () => {

    const fullCode: string = `<ddiv>
　<p>성장하는 개발자 노시온입니다.</p>
　<p>Web Developer C-ON</p>
　<img src='github' />
　<img src='tistory' />
</div>`;
    

    const [ displayedCode, setDisplayedCode ] = useState<string>("");
    const [ displayedForm, setDisplayedForm ] = useState(false);

    useEffect(() => {
        let index: number = 0;
        const intervalCode = setInterval(() => {
            if (index < fullCode.length) {
                setDisplayedCode((prev) => prev + (fullCode[index] || ""));
                index++;
            } else {
                clearInterval(intervalCode); // 반복이 끝나면 타이핑 멈춤
            }
        }, 20);

        const intervalForm = setInterval(() => {
            setDisplayedForm(true)
        }, 2400);

        return () => {
            clearInterval(intervalCode);
            clearInterval(intervalForm);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.codeWindow}>
                <div className={styles.btn}>
                    <p /><p /><p />
                </div>
                <div className={styles.codeForm}>
                    <pre className={styles.typing}>{displayedCode}</pre>
                </div>
            </div>
            <div className={styles.intro}>
                <div className={`${styles.sub} ${displayedForm ? styles.show : ""}`}>
                    <div className={styles.ment}>
                        <p>성장하는 개발자 노시온입니다.</p>
                        <p>Web Developer C-ON</p>
                    </div>
                    <div className={ styles.imgBox }>
                        <img src={profile01} />
                        <img src={profile02} />
                    </div>
                </div>
            </div>
        </div>
    )
}