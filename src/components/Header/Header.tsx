import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import logo02 from '../../assets/img/logo02.png'
import { ScrollGuide } from '../ScrollGuide/ScrollGuide';
import { TopButton } from '../TopButton/TopButton';

export const Header = (props:{ list :any[], scrollToSection : any}) => {

  const [ scrolled, setScolled ] = useState<boolean>(false);
  const [ scrollGuide, setScrollGuide] = useState<boolean>(true);
  const [ topButton, setTopButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScolled(window.scrollY > 50);
      setTopButton(window.scrollY > 50);
      setScrollGuide(window.scrollY < 50);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);

  return (
    <header className={ scrolled ? styles.scrolled : "" }>
      <div className={ styles.container }>
        <div className={ styles.logo } onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>
          <img src={ logo02 } alt="" />
        </div>
        <div className={ styles.menu }>
          <button onClick={ () => props.scrollToSection(props.list[0]) }>About Me</button>
          <button onClick={ () => props.scrollToSection(props.list[1]) }>Career</button>
          <button onClick={ () => props.scrollToSection(props.list[2]) }>Skills</button>
          <button onClick={ () => props.scrollToSection(props.list[3]) }>Project</button>
        </div>
      </div>
      { scrollGuide && <ScrollGuide /> }
      { topButton && <TopButton /> }
    </header>
  )
}