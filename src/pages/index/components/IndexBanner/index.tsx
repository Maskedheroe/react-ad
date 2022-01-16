import React from 'react'
import { Carousel } from 'antd'
import './style.scss'

const IndexBanner = () => {
    return (
        <div className='index-banner'>
            <Carousel autoplay>
                <div className='banner-item'>
                    <img className='img' src='src/assets/imgs/index-banner1.png' alt='' />
                </div>
                <div className='banner-item'>
                    <img className='img' src='src/assets/imgs/index-banner2.png' alt='' />
                </div>
            </Carousel>
        </div>
    )
}

export default IndexBanner
