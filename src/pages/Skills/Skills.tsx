import styles from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={ styles.container }>
            My Skills!
            <br />
            <p>Java</p>
            <p>Spring( legacy, boot )</p>
            <br />
            <p>JavaScript</p>
            <p>TypeScript, React, Zustand</p>
        </div> 
    )
}