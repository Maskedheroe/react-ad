import React from 'react'
import './style.scss'
import { MENU_INDEX_CONFIG } from '../../common/constant/menu'
import { MenuItem } from './MenuItem'
import { setGlobal } from '@antv/g2plot'

interface IProps {}

interface IState {}

export default class Header extends React.Component<IProps, IState> {
    state = {}
    render() {
        const userName = 'sgp'
        return (
            <div className='header-component-box'>
                <div className='left'>
                    <div className='logo'></div>
                    <div className='menu'>
                        {MENU_INDEX_CONFIG.map((menuItem, index) => {
                            return (
                                <MenuItem
                                    menuItemInfo={menuItem}
                                    isActive={menuItem.isActive}
                                    key={`index-menu-item${index}`}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='user-info'>
                    <span>{userName}</span>
                </div>
            </div>
        )
    }
}
