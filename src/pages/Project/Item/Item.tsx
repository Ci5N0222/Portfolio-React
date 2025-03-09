import styles from './Item.module.css'

export const Item = (props : { item : any }) => {

    return (
        <div className={ styles.item }>
            <div className={ styles.thumbnail }>
                사진
            </div>
            <div className={ styles.projectInfo }>
                <div className={ styles.company}>
                    회사
                </div>
                <div className={ styles.description}>
                    제목
                </div>
            </div>
        </div>
    );
}