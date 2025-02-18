import { Banner } from '../../components/Banner/Banner'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main>
      <Banner />
      {/* 
        1. 자기소개
        2. Skills
        3. Project
      
      */}
      <div className={styles.container}></div>
    </main>
  )
}