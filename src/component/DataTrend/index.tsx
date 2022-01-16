import React from 'react'
import CardTabs from './components/CardTabs/CardTabs'
import LineChart from './components/LineChart/LineChart'
import { useState } from 'react'

const DataTrend = () => {
    const [chartData, setChartData] = useState([
        {
            year: '2011',
            value: 3
        },
        {
            year: '2012',
            value: 4
        },
        {
            year: '2013',
            value: 3.5
        },
        {
            year: '2014',
            value: 5
        },
        {
            year: '2015',
            value: 4.9
        },
        {
            year: '2016',
            value: 6
        },
        {
            year: '2017',
            value: 7
        },
        {
            year: '2018',
            value: 9
        },
        {
            year: '2019',
            value: 13
        }
    ])
    const [cardData, setCardData] = useState([
        {
            id: '1',
            name: '消费（元）',
            value: 2000,
            persent: '',
            icon: './src/assets/imgs/card-icon1',
            isSelected: true
        },
        {
            id: '2',
            name: '展现（次）',
            value: 5988,
            persent: 88.9,
            icon: './src/assets/imgs/card-icon2',
            isSelected: false
        },
        {
            id: '3',
            name: '点击（次）',
            value: 199,
            persent: 12.6,
            icon: './src/assets/imgs/card-icon3',
            isSelected: false
        }
    ])
    const handleCardTabsChange = (selectedId: string) => {
        const newCardData = cardData.map((cardItem) => {
            return {
                ...cardItem,
                isSelected: cardItem.id === selectedId
            }
        })
        const newChartData = chartData.map((chartItem) => {
            return {
                ...chartItem,
                value: chartItem.value += 2
            }
        })
        setChartData(newChartData)
        setCardData(newCardData)
    }
    return (
        <div className='data-trend-component-box'>
            <div className='card-tabs-box'>
                <CardTabs
                    cardData={cardData}
                    onChange={(selectedId: string) => handleCardTabsChange(selectedId)}
                />
            </div>
            <div className='line-chart-box'>
                <LineChart chartData={chartData} />
            </div>
        </div>
    )
}

export default DataTrend
