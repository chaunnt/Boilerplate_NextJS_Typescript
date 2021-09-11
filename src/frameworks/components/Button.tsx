import React from 'react'
import styles from '@/styles/components/button.module.scss'

type sizeType = 'sm' | 'md' | 'lg';

interface ButtonProps {
  size?: sizeType;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Button = (props: ButtonProps) => {
  const style: React.CSSProperties = {...props.style}
  const {size, className = ''} = props

  return (
    <button
      onClick={props.onClick}
      {...props}
      style={style}
      className={`button ${className} ${size ? size : ''} ${styles['click-me']}`}
    >
      {props.children}
    </button>
  )
}
