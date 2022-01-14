import React from 'react'
import './style.scss'
import { MenuItemInfoType } from './types'

interface IProps {
    isActive?: boolean
    onClick?: (url: string) => void
    menuItemInfo: MenuItemInfoType
}

export const MenuItem = ({ menuItemInfo, isActive, onClick }: IProps) => {
    const handleMenuClick = (url: string) => {
        if (onClick) {
            onClick(url)
        }
    }
    return (
        <div className='index-menuItem-component-box'>
            <div className='menu-item-title' onClick={() => handleMenuClick(menuItemInfo.url)}>
                {menuItemInfo.name}
                {menuItemInfo.menuChildren.length > 0 && <span className='arrow-icon'></span>}
            </div>
            <div className='bottom-line'></div>
            {isActive && <div className='bottom-line-active'></div>}
            {menuItemInfo.menuChildren.length > 0 && (
                <div className='menu-children-box'>
                    {menuItemInfo.menuChildren.map((menuChild, index) => {
                        return (
                            <div className='menu-child' key={`menu-child${index.toString()}`}>
                                <span onClick={() => handleMenuClick(menuChild.url)}>
                                    {menuChild.label}
                                </span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
