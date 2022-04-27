import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobiles } from "../responsive";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h2`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Filter = styled.div`
  padding: 20px;
  ${mobiles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 20px",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: bold;
  ${mobiles({ fontSize: "20px" })}
`;

const Select = styled.select`
  margin-left: 20px;
  text-align: center;
  padding: 5px;
  font-size: 17.5px;
`;
const Option = styled.option`
  font-size: 15px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <Select defaultValue="Color" name="color" onChange={handleFilters}>
            <Option value="Color" disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>green</Option>
            <Option>blue</Option>
            <Option>black</Option>
            <Option>yellow</Option>
          </Select>

          <Select defaultValue="Size" name="size" onChange={handleFilters}>
            <Option value="Size" disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price(asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
