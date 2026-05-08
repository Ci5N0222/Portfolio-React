import { Banner } from '../../components/Banner/Banner'
import { AboutMe } from '../AboutMe/AboutMe'
import { Career } from '../Career/Career'
import { Project } from '../Project/Project'
import { Skills } from '../Skills/Skills'
import styles from './Main.module.css'

export const Main = (props:{list : any[]}) => {

  return (
    <main>
      <Banner />
      <div ref={ props.list[0] }><AboutMe /></div>
      <div ref={ props.list[1] }><Career /></div>
      <div ref={ props.list[2] }><Skills /></div>
      <div ref={ props.list[3] }><Project /></div>
      <div className={styles.container}></div>
    </main>
  )
}