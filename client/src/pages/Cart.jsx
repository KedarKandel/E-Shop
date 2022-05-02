import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods";

const KEY =
  "pk_test_51KsQrJFHfUoI2gtlNH3skfJNdpwOKzWeXBcaBQIwhralOW78abZpakYHIoumHaH0McfoVbYkDcRcqPYuPqreoJSL007FELOHsT";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  padding: 15px 10px;
  border-radius: 3px;
  font-size: 20px;
  margin-top: 15px;
`;
const CenterText = styled.span`
  text-decoration: underline;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "20px"};
`;

const SummaryItemText = styled.span`
  font-size: 18px;
`;

const SummaryItemPrice = styled.span`
  font-size: 18px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px 5px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const bag = useSelector((state) => state.cart.quantity);
  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, navigate]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <Link to="/">
            <TopButton type="shop" color="teal">
              CONTINUE SHOPPING
            </TopButton>
          </Link>
          <CenterText>Shopping Bag({bag})</CenterText>
          <TopButton type="checkout" color="black">
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((p) => (
              <Product key={p._id}>
                <ProductDetail>
                  <Image src={p.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {p.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {p._id}
                    </ProductId>
                    <ProductColor color={p.color} />
                    <ProductSize>
                      <b>Size:</b> {p.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>{p.quantity}</ProductAmount>
                    <RemoveIcon  />
                  </ProductAmountContainer>
                  <ProductPrice>€ {p.price * p.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>€ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping </SummaryItemText>
              <SummaryItemPrice> €5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount </SummaryItemText>
              <SummaryItemPrice>€-5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>€ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Kk & Shop"
              image="https://thumbs.dreamstime.com/b/letter-kk-logotype-design-company-name-colored-blue-swoosh-vector-logo-business-identity-203869123.jpg"
              billingAddress
              shippingAddress
              description={`Your total is € ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
