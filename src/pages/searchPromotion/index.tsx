import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Header from '../../component/Header'
import { Account, DataTrend, UserPortrait, WaveAnalysis } from './components'
import './style.scss'

interface IProps extends RouteComponentProps {}

const SearchPromition = (props: IProps) => {
    return (
        <div>
            <div className='search-promotion-page-box'>
                <div className='header'>
                    <Header />
                </div>
                <div className='content'>
                    <div className='account-box'>
                        <Account />
                    </div>
                    <div className='data-trend-box'>
                        <DataTrend />
                    </div>
                    <div className='wave-analysis-box'>
                        <WaveAnalysis />
                    </div>
                    <div className='user-portrait-box'>
                        <UserPortrait />
                    </div>
                </div>
                <div className='footer'></div>
            </div>
        </div>
    )
}

export default SearchPromition
