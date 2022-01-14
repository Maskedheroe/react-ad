import React from 'react'
import CardTabs from './components/CardTabs/CardTabs'
import LineChart from './components/LineChart/LineChart'
import { useState } from 'react'

const DataTrend = () => {
    const [cardData, setCardData] = useState([
        {
            id: '1',
            name: '消费（元）',
            value: 2000,
            persent: '',
            icon: 'assets/imgs/card-icon1',
            isSelected: true
        },
        {
            id: '2',
            name: '展现（次）',
            value: 5988,
            persent: 88.9,
            icon: 'assets/imgs/card-icon2',
            isSelected: false
        },
        {
            id: '3',
            name: '点击（次）',
            value: 199,
            persent: 12.6,
            icon: 'assets/imgs/card-icon3',
            isSelected: false
        }
    ])
    return (
        <div className='data-trend-component-box'>
            <div className='card-tabs-box'>
                <CardTabs cardData={cardData}/>
            </div>
            <div className='line-chart-box'>
                <LineChart />
            </div>
        </div>
    )
}

export default DataTrend
