import styled from "styled-components";

const Container = styled.div`
  background: url(https://t4.ftcdn.net/jpg/03/55/12/37/360_F_355123783_WjUgN86awgqdCdPKkfPDgZFJTN5qvtaI.jpg)
    center;
    height: 100vh;
    width: 100vw;
    background-size: contain;
    opacity: .6;
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
padding: 15px 25px;
background-color: teal;
color: white;
border: none;
font-size: 20px;
cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="LastName" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Policy>
            By creating an account, I concent to the processing of my personal
            data in accordance with the PRIVACY POLICY
          </Policy>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
