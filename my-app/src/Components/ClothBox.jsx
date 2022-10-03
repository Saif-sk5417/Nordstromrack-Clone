
// 1. Import

import { Box } from '@chakra-ui/react'

import styles from "./ClothBox.css"
import { StarIcon } from '@chakra-ui/icons'
// 2. Use the `as` prop
export default function ClothBox({name,price,text}) {
  return (
    <div>
      <div className='ClothBox'>
         <p>{name}</p>
         <p>{price}</p>
         <p>{text}</p>
         <StarIcon color="#00819D" />
         <StarIcon color="#00819D" />
         <StarIcon color="#00819D" />
         <StarIcon color="#00819D" />
         <StarIcon color="#00819D" />
      </div>
    </div>
   
  )
}