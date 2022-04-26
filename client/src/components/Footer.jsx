import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { mobiles, tablets } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #008e89;
  ${mobiles({flexDirection:"column",  padding:"20px", alignItems:"center", justifyContent:"center"})}
  ${tablets({padding:"10px"})}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  ${tablets({padding:"0 13px"})}
`;
const Logo = styled.h1`
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
  text-decoration: underline;
  ${mobiles({fontSize:"20px"})}
`;
const Desc = styled.p`
  font-size: 15px;
  color: white;
  letter-spacing: 1px;
  margin-bottom: 10px;
  ${mobiles({fontSize:"12px", lineHeight:"none"})}
  ${tablets({letterSpacing:"0px"})}
`;
const SocialDiv = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 10px;
  ${mobiles({marginTop:"5px"})}
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  margin-right: 20px;
  cursor: pointer;

`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobiles({height:"50px"})}
  ${tablets({padding:"10px"})}
`;

const Title = styled.h3`
  font-size: 30px;
  color: white;
  margin-bottom: 10px;
  text-decoration: underline;
  ${mobiles({fontSize:"20px"})}
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  color: white;
  list-style: none;

`;
const ListItem = styled.li`
  font-size: 20px;
  color: #d5d5f3;
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  ${mobiles({fontSize:"13px"})}
  ${tablets({fontSize:"17px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ContactItem = styled.div`
padding: 15px 0;
margin-bottom: 5px;
color: white;
display: flex;
align-items: center;
${mobiles({margin:"0px", fontSize:"13px"})}
`

    

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Kk & shop.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          eveniet cum explicabo, reprehenderit ut minus odit. Nemo facere
          accusantium, architecto animi eaque mollitia, officiis adipisci, illo
          placeat sed incidunt cumque numquam ipsam repellendus eveniet eos. Non
          quod accusantium, perferendis dicta alias, laboriosam iste vel
          molestias aspernatur totam quo magnam eaque! Obcaecati, asperiores.
          Officia hic, numquam eos saepe, nemo blanditiis explicabo praesentium
          velit voluptatibus iste, ad commodi quis nulla veritatis facilis!
        </Desc>
        <SocialDiv>
          <SocialIcon color="blue">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="crimson">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="purple">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="red">
            <YouTubeIcon />
          </SocialIcon>
        </SocialDiv>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        
          <ListItem><Link to ="/" style = {{textDecoration:"none"}}>Home </Link></ListItem>
         
          <ListItem>Cart</ListItem>
          <ListItem>Man</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Track order</ListItem>
          <ListItem>Customer Service</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms conditions</ListItem>
          <ListItem>Our Values</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
         <HomeIcon style={{marginRight:"5px", fontSize: "30px"}}/> porslahdentie 00C, 0000, HELSINKI, FINLAND
        </ContactItem>
        <ContactItem>
           <PhoneIcon style={{marginRight:"5px", fontSize: "30px"}}/> +358 00 000 0000
        </ContactItem>
        <ContactItem>
          <MailIcon style={{marginRight:"5px", fontSize: "30px"}}/>  kk&shop07@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
