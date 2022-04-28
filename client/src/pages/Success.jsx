import { useLocation } from "react-router-dom";

const Success = () => {

  const location = useLocation()
  console.log(location)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "skyBlue",
        height: "100vh",
        width: "100vw",
      }}
    >
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
  );
};

export default Success;
