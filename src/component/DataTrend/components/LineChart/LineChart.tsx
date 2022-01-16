import React from 'react'
import { Line } from '@ant-design/charts'

interface IProps {
  chartData: any[]
}

const LineChart = ({chartData}: IProps) => {
    
    const config = {
        // autoFit: true,
        height: 250,
        data: chartData,
        xField: 'year',
        yField: 'value',
        label: {},
        point: {
            size: 2,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2
            }
        },
        tooltip: { showMarkers: false },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red'
                }
            }
        },
        interactions: [{ type: 'marker-active' }]
    }

    return (
        <div>
            <Line {...config}/>
        </div>
    )
}

export default LineChart
