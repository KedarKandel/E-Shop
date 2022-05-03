import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations/index";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const Home = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
      <Container>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Home;
