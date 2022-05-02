import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  background: url(https://t4.ftcdn.net/jpg/03/55/12/37/360_F_355123783_WjUgN86awgqdCdPKkfPDgZFJTN5qvtaI.jpg)
    center;
  height: 100vh;
  width: 100vw;
  background-size: contain;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
 
`;
const Title = styled.h1`
  margin-bottom: 15px;
`;
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  min-width: 40%;
  padding: 10px;
  margin: 10px 5px;
  font-size: 18px;
`;
const Policy = styled.p`
  font-size: 13px;
  margin-bottom: 5px;
  padding: 10px;
  font-weight: 500;
`;
const Button = styled.button`
  margin-left: 10px;
  margin-bottom: 3px;
  padding: 15px 25px;
  background-color: teal;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Span = styled.span`
  color: ${(props) => (props.prop === "failure" ? "red" : "green")};
  margin-top: 5px;
`;


const Register = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      await publicRequest.post("/auth/register", newUser);
      setFailure(false);
      setSuccess(true);
      navigate("/login")
    } catch (err) {
      setFailure(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="LastName" />
          <Input placeholder="Username" type="text" ref={usernameRef} />
          <Input placeholder="Email" type="text" ref={emailRef} />
          <Input placeholder="Password" type="password" ref={passwordRef} />

          <Policy>
            By creating an account, I concent to the processing of my personal
            data in accordance with the PRIVACY POLICY
          </Policy>
          <Button onClick={handleRegister}>CREATE</Button>
        
        </Form>
        {success && <Span prop="success">Successfull. You can login now!</Span>}
        {failure && <Span prop="failure"> Something went wrong!</Span>}
        <Link to ="/" style={{marginLeft:"10px"}}>Home</Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
