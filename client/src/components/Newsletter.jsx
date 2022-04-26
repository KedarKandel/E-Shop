import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import {laptops, mobiles, tablets} from "../responsive"

const Container = styled.div`
  background-color: #fcf5f5;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobiles({height:"30vh"})}
  ${tablets({height:"40vh"})}
  ${laptops({height:"40vh"})} 
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 50px;
  ${mobiles({fontSize:"40px", marginBottom:"15px"})}
`;
const Desc = styled.p`
  font-size: 25px;
  margin-bottom: 30px;
  ${mobiles({fontSize:"18px", width:"60%"})}
`;
const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 2px solid gray;
  ${mobiles({width:"90%"})}
`;
const Input = styled.input`
outline: none;
flex: 8;
padding-left: 15px;
border: none;
`;
const Button = styled.button`
flex: 1;
background-color: teal;
border: none;
color: white;
cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Desc>Get updates on our new arrivals and many more.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
