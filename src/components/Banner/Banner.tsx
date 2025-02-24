import styles from './Banner.module.css'
import { useEffect, useState } from 'react'

export const Banner = () => {

    const fullCode: string = `<ddiv>
　<p>성장하는 개발자 노시온입니다.</p>
　<p>Web Developer C-ON</p>
　<img src='Github' />
　<img src='Blog' />
</div>`;
    

    const [ displayedCode, setDisplayedCode ] = useState<string>("");
    const [ displayedForm, setDisplayedForm ] = useState(false);

    const handleHref = (target :string) => {
        if(target === "github") location.href = 'https://github.com/Ci5N0222';
        else location.href = 'https://c-on-dev.tistory.com/';
    }

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
        }, 2250);

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
                        <div onClick={ () => handleHref('github') }><p>Github</p></div>
                        <div onClick={ () => handleHref('blog') }><p>Blog</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}