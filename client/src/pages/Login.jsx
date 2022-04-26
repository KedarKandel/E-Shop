import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: 
    url(https://t4.ftcdn.net/jpg/03/55/12/37/360_F_355123783_WjUgN86awgqdCdPKkfPDgZFJTN5qvtaI.jpg)
      center;
  background-size: cover;
  opacity: .6;

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
`;
const Link = styled.a`
  margin: 5px;
  cursor: pointer;
  text-decoration: underline;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username"></Input>
          <Input placeholder="Password"></Input>
          <Button>LOGIN</Button>
          <Link>DON'T REMEMBER YOUR PASSWORD ?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
