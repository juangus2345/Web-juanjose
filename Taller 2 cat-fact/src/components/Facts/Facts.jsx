import React from 'react'
import styles from './Facts.module.css'

export function Facts ({ text, img, error, isFirstTime }) {
  if (error) {
    return <p>{error}</p>
  }

  if (isFirstTime.current) {
    return (
      <p className={styles.firstTime}>
        Click the button
      </p>
    )
  }

  return (
    <div className={styles.card}>
      <img className={styles.cat_img} src={img} alt='Cat' />
      <p className={styles.cat_fact}>{text}</p>
    </div>
  )
}
