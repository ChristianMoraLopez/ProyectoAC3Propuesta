import React from 'react'
import { SVGIconProps } from './svg.types'


const CSymbol = ({ size = '24px', ...otherProps }: SVGIconProps) => (
  <svg width={size} height={size} viewBox="0 0 15 15" fill="none" {...otherProps} >
    <path d="M10 5.5L9.93198 5.43198C9.33524 4.83524 8.52589 4.5 7.68198 4.5H7.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5H7.68198C8.52589 10.5 9.33524 10.1648 9.93198 9.56802L10 9.5M1.5 10.5V4.5L7.5 1L13.5 4.5V10.5L7.5 14L1.5 10.5Z" stroke="#000000"/>
  </svg>
)



export default CSymbol
