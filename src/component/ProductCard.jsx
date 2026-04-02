import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {

  const navigate = useNavigate();
  const showDetail = () => {
    //navigate(`/product/${item.id}`, {state: item});
    navigate(`/product/${item.id}`);
  }  

  return (
    <div className="product-card" onClick={showDetail}>
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