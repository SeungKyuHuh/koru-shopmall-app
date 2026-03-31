import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async() => {
    let url = 'http://localhost:5000/products';
    let res = await fetch(url);
    let data = await res.json();

    setProductList(data);
    console.log(data)
  }

  useEffect(()=>{
    getProducts();
  }, [])
  return (
    <div>
      <Container>
        <Row>
        {productList.map((menu) => (
          <Col lg={3}>
            <ProductCard item={menu}/>
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll