import React from 'react'
import CardItem from './CardItem'
import './style.scss'
import { CardItemType } from './types'

interface IProps {
    cardData: CardItemType[]
    onChange?: (selectedId: string) => void
}

const CardTabs = ({ cardData, onChange }: IProps) => {
    const handleChange = (selectedId: string) => {
        onChange && onChange(selectedId)
    }
    return (
        <div className='cardtabs-component-box'>
            {cardData.map((cardItem: CardItemType, index: number) => {
                return (
                    <CardItem
                        {...cardItem}
                        onClick={(selectedId: string) => {
                            handleChange(selectedId)
                        }}
                        key={`carditem${index.toString()}`}
                    />
                )
            })}
        </div>
    )
}

export default CardTabs
