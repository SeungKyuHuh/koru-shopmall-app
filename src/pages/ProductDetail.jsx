import React from 'react'
import {useLocation} from 'react-router-dom'

const ProductDetail = () => {

  const location = useLocation();
  const item = location.state;

  console.log("item:", item);


  return (
    <div className="product-container">
      <div className="product-image">
        <img src={item.img} />
      </div>

      <div className="product-info">
        <div className="product-title">{item.title}</div>
        <div className="product-price">₩ {item.price}</div>
        <div className="btn-size">
          {item.size.map((size) => {
            return <button className="product-size-btn">{size}</button>;
          })}
        </div>

        <p className="product-size-guide">사이즈 가이드</p>
        <button className="product-add-btn">추가</button>
      </div>

    </div>
  )
}

export default ProductDetail