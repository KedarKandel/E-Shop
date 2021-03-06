import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { useState } from "react";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations/index";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(https://t4.ftcdn.net/jpg/03/55/12/37/360_F_355123783_WjUgN86awgqdCdPKkfPDgZFJTN5qvtaI.jpg)
    center;
  background-size: cover;
  opacity: 0.6;
`;
const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 3px;
`;
const Title = styled.h1`
  margin-bottom: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 60%;
  margin: 12px 0;
  height: 40px;
  font-size: 20px;
`;
const Button = styled.button`
  width: 20%;
  padding: 15px;
  background-color: teal;
  color: white;
  font-size: 20px;
  border: none;
  margin: 15px 0;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Links = styled.a`
  margin: 5px;
  cursor: pointer;
  text-decoration: underline;
`;
const GoHome = styled.a`
margin-left: 4px;
margin-top: 2px;
`
const Error = styled.span`
color: red;
margin-left: 3px;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const { isFetching, error} = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            placeholder="Password"
            type="text"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
           
          <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Wrong credentials...</Error>}
          <Links>DON'T REMEMBER YOUR PASSWORD ?</Links>
          <Link to="/register">
            <Links>CREATE A NEW ACCOUNT</Links>
          </Link>
          <GoHome href="/">Home</GoHome>
        </Form>
      </Wrapper>
    </Container>
    </motion.div>
  );
};

export default Login;
