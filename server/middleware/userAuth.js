import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized",
    });
  }
  try {
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRETE);
    if (tokenDecoded.id) {
      req.body.userId = tokenDecoded.id;
    } else {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      from: "UserAuth MiddleWare",
      message: error.message,
    });
  }
};

export default userAuth;
