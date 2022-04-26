const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Invalid token");
      }
      req.user = user;
      //same as having req.body or req.header or likewise//
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

// verifying token and authorization to perform operations//

const authorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res
        .status(403)
        .json("You are not allowed to perform this operation!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res
        .status(403)
        .json("You are not allowed to perform this operation!");
    }
  });
};

module.exports = {
  verifyToken,
  authorization,
  verifyTokenAndAdmin,
};
