import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className="product-card">
        <div className="img-container">
            <img src={item?.img} />
        </div>
        <div>{item?.choice === true? "Concious Choice":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new === true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard