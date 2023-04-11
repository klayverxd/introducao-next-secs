import React from 'react'

import styles from '@/components/Button/Button.module.css'

interface ButtonInterface {
    name: string,
    type: any,
    onClick: any,
}

const Button = ({name, type, onClick}: ButtonInterface) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>{name}</button>
  )
}

export default Button