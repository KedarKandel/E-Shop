import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations/index";

const Success = () => {

  const location = useLocation()
  console.log(location)
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "skyBlue",
        height: "100vh",
        width: "100vw",
        position: "relative"
      }}
    >
      <a href= "/" style={{position:"absolute", top:"10px", left:"10px"}}>Home</a>
      <div
        style={{
          display: "flex",
          height: "80px",
          width: "100px",
          backgroundColor: "purple",
          color: "white",
          textAlign:"center",
          alignItems:"center",
          justifyContent:"center",
        }}
      >
        Payment is successful
      </div>
    </div>
    </motion.div>
  );
};

export default Success;
