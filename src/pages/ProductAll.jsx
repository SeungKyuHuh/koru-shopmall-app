import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async() => {
    let searchQuery = query.get('q') || "";
    console.log("쿼리:", searchQuery);
    let url = `https://my-json-server.typicode.com/SeungKyuHuh/koru-shopmall-app/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();

    //console.log("data:", data);
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  }, [query])
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