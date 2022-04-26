import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
import axios from "axios"

const Container = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  width: 100%;
  text-align: center;
`;
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = axios.get("https://localhost:500/api/products");
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [cat]);

  return (
    <Container>
      <Title>Products</Title>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
