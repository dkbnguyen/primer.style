import React from 'react'
import {Box} from '@primer/components'
import styled from 'react-emotion'
import Circle from './svg/circle.svg'
import Hexagon from './svg/hexagon.svg'
import Square from './svg/square.svg'
import Diamond from './svg/diamond.svg'

const Shape = styled(({className, shape}) => {
  const shapes = {
    'hexagon': Hexagon,
    'circle': Circle,
    'square': Square,
    'diamond': Diamond
  }
  const Tag = shapes[shape]
  return (
    <Tag className={className}/>
  )
})`
  position: relative;
  z-index: 2;
`

const Image = styled('img')`
  transition: transform 0.6s ease;
  filter: grayscale(100%);
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`
const A = styled(Box)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  -webkit-clip-path: url("#clip-${props => props.shape}");
  clip-path: url("#clip-${props => props.shape}");
  &:after {
    content: '';
    transition: opacity 0.6s ease;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at top, #79b8ff, transparent),
      radial-gradient(ellipse at bottom, #f66a0a, transparent),
      linear-gradient(to right, #ffdf5d 50%, transparent 50%),
      linear-gradient(to left, #2188ff 50%, transparent);
    mix-blend-mode: multiply;
    opacity: 0;
    z-index: 3;
  }
  &:hover:after {
    opacity: 1;
  }
  &:hover img {
    transform: scale(1.1);
  }
`

const AvatarShape = props => (
  <A className={props.className} shape={props.shape}>
    <Image src={props.src} />
    <Shape shape={props.shape} />
  </A>
)

export default AvatarShape
