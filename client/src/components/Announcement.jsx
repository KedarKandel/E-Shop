import styled from "styled-components"
import { mobiles } from "../responsive";

const Container = styled.div`
height: 30px;
font-size: 14px;
font-weight: 500;
background-color: #008e89;
display: flex;
justify-content: center;
align-items: center;
color: white;
${mobiles({padding:"12px 15px"})}
`



const Announcement = () => {
  return (
    <Container>Super deals awaits you! Free shipping on Orders over €100 and more.</Container>
  )
}

export default Announcement