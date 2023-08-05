import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    // Get the token from the request header
    const token = req.headers.authorization.split(" ")[1];

    // Check if the token is Google's
    const isCustomAuth = token.length < 500;

    // Declare the decoded data
    let decodedData;

    // If the token is Google's, decode it and get the user's id and email
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'test');

      // Get the user's id
      req.userId = decodedData?.id;
    } else {
      // If the token is not Google's, decode it and get the user's id
      decodedData = jwt.decode(token);

      // Get the user's id
      req.userId = decodedData?.sub;
    }

    // Continue
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
