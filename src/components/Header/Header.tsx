import styles from './Header.module.css'

export const Header = () => {
  return (
    <header>
      <div className={ styles.container }>
        <div className={ styles.logo }>
          header Logo
        </div>
        <div className={ styles.menu }>
          <button>Introduce</button>
          <button>Introduce</button>
          <button>Introduce</button>
          <button>Introduce</button>
        </div>
      </div>
    </header>
  )
}