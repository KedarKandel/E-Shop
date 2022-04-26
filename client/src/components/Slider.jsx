import styled from "styled-components";
import { useState } from "react";
import { slideItems } from "../Data";
import ArrowBack from "@mui/icons-material/ArrowBackIosNew";
import ArrowForward from "@mui/icons-material/ArrowForwardIos";
import { Desktops, laptops, mobiles, tablets } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobiles({ display: "none" })}
  ${tablets({ padding: "0px 15px", width: "95vw" })}
`;

const Arrow = styled.div`
  width: 45px;
  height: 45px;
  background-color: #746f7c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "20px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 10;
  ${tablets({ height: "35px", width: "35px" })}
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
  ${tablets({ padding: "0px 10px 0px 0px", height: "90%" })}
  ${laptops({ padding: "0px 25px 0px 0px" })}
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
  ${Desktops({ width: "95vw", height: "95vw" })}
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
  opacity: 0.8;
  margin-top: 15px;
  margin-left: 60px;
  ${tablets({ marginLeft: "0px", width: "90%", height: "70%" })}
  ${laptops({ marginLeft: "15px" })} 
  ${Desktops({ marginLeft: "15px" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${tablets({ padding: "0px 25px 0px 0px" })}
`;

const Title = styled.h1`
  font-size: 70px;
  ${tablets({ fontSize: "40px", marginTop: "-5px" })}
  ${laptops({ fontSize: "50px" })}
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
  ${tablets({ marginTop: "-3px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBack />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((i) => (
          <Slide bg={i.bg} key={i.id}>
            <ImageContainer>
              <Image src={i.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{i.title}</Title>
              <Desc>{i.desc}</Desc>
              <Link to="/products/:id" style={{ textDecoration: "none" }}>
                <Button>SHOW NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForward />
      </Arrow>
    </Container>
  );
};

export default Slider;
