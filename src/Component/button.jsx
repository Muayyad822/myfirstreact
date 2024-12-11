import React from 'react'
import './index.scss'

export default function Button({click,bg,content}) {
    return (
       <button onClick={click} style={{backgroundColor:bg}} >{content}</button>
    ) 
}