import React from 'react'
import PRODUCTSERVICE_CONFIG from '../../../../common/constant/productService'
import './style.scss'
const ProductCard = () => {
    const handleServiceItemClick = (url: string) => {
        window.location.href = 'url'
    }
    return (
        <div className='product-service-component-box'>
            <div className='title'>营销服务</div>
            {PRODUCTSERVICE_CONFIG.map((productItem, index) => {
                return (
                    <div
                        className='product-service-item'
                        key={`index-menuItem${index}`}
                        onClick={() => handleServiceItemClick(productItem.link)}
                    >
                        <img src={productItem.marketToolImgUrl} alt='' />
                        <div className='name'>{productItem.marketToolTitle}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCard
