import styles from './TopButton.module.css'

export const TopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 부드러운 스크롤 효과
  };

  return (
    <div className={styles.container} onClick={() => scrollToTop()}>
      <p>▲</p>
      <p>TOP</p>
    </div>
  )
}