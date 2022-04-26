import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue transparent;
`;

const Title = styled.h1`
  color: white;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: #b3d147;
  cursor: pointer;
  font-weight: 500;
  color: white;
  border-radius: 5px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
