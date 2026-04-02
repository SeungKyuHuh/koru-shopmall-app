import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
//import {useLocation} from 'react-router-dom'

const ProductDetail = () => {
  //const location = useLocation();
  //const item = location.state;
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = (async() => {
    let url = `https://my-json-server.typicode.com/SeungKyuHuh/koru-shopmall-app/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();    
    //console.log("data:", data);  //mock API에서...   id를 넣으면 못 가져오네...
    //let detail = data.find((item) => item.id == id);
    setProduct(data);
  })
  useEffect(() => {
    getProductDetail();
  }, [])

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product?.img} />
      </div>

      <div className="product-info">
        <div className="product-title">{product?.title}</div>
        <div className="product-price">₩ {product?.price}</div>
        <div className="btn-size">
          {product?.size?.map((size) => {
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