import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/img/Logo01.png'

export const Header = () => {

  const [ scrolled, setScolled ] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);

  return (
    <header className={ scrolled ? styles.scrolled : "" }>
      <div className={ styles.container }>
        <div className={ styles.logo }>
          <img src={ logo } alt="" />
        </div>
        <div className={ styles.menu }>
          <button>About Me</button>
          <button>Skills</button>
          <button>Experience</button>
          <button>Project</button>
        </div>
      </div>
    </header>
  )
}