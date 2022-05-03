import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { laptops, mobiles, tablets } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations/index";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobiles({ flexDirection: "column", padding: "15px" })}
`;

const ImageDiv = styled.div`
  flex: 1;
  ${tablets({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })}
  ${laptops({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

const Image = styled.img`
  width: 70%;
  margin-left: 60px;
  ${tablets({ marginLeft: "15px" })}
  ${laptops({ marginLeft: "15px" })}
`;

const InfoDiv = styled.div`
  padding: 60px 0;
  flex: 1;
  ${mobiles({ padding: "30px", textAlign: "center" })}
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 30px;
  ${mobiles({ fontSize: "20px" })}
  ${tablets({ fontSize: "25px" })}
`;

const Desc = styled.p`
  font-size: 20px;
  /* letter-spacing: 1.5px; */
  margin-bottom: 20px;
  font-weight: 300;
  ${mobiles({ fontSize: "15px" })}
  ${tablets({ fontSize: "15px" })}
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  padding: 50px 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.div`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  background-color: ${(props) => props.color};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 2px 5px;
  font-size: 20px;
`;
const Option = styled.option``;

const AddCartDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobiles({
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "40px",
  })}
  ${tablets({ display: "flex", flexDirection: "column" })}
`;
const AmountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;
const Amount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  width: 30px;
  height: 30px;
  border-radius: 40%;
  border: 2px solid teal;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  padding: 15px;
  color: teal;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.7s ease;
  border: 3px solid teal;

  ${mobiles({ padding: "10px", marginTop: "5px" })}
  ${tablets({ padding: "10px", marginTop: "10px" })}
&:hover {
    background-color: teal;
    color: white;
    border: 3px solid teal;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (option) => {
    if (option === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  //add products to cart

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageDiv>
          <Image src={product.img} />
        </ImageDiv>
        <InfoDiv>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price> € {product.price}</Price>
          <FilterDiv>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <Select
                defaultValue="Size"
                onChange={(e) => setSize(e.target.value)}
              >
                <Option value="Size" disabled></Option>
                {product.size?.map((s) => (
                  <Option key={s}>{s}</Option>
                ))}
              </Select>
            </Filter>
          </FilterDiv>
          <AddCartDiv>
            <AmountDiv>
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </AmountDiv>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddCartDiv>
        </InfoDiv>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
    </motion.div>
  );
};

export default Product;
