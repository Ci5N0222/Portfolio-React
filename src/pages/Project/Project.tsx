import { useEffect, useState } from 'react'
import styles from './Project.module.css'
import { Item } from './Item/Item';

export const Project = () => {
    const [ list, setList ] = useState<number[]>([]);

    useEffect(() => {
        setList( [ 1, 2, 3 ] );
    }, []);

    return (
        <div className={ styles.container }>
            <div className={ styles.title }>
                Project!
            </div>
            <div className={ styles.board }>
                <div className={ styles.menu}>
                    <button>Work</button>
                    <button>Education</button>
                    <button>Study</button>
                </div>
                <div className={ styles.contents }>
                    {
                        list.map(item => {
                            return ( <Item key={item} /> );
                        })
                    }
                </div>
            </div>
        </div> 
    )
}