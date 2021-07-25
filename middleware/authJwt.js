const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(403).send({
            status: false,
            statusCode: 403,
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                status: false,
                statusCode: 401,
                message: "Unauthorized!"
            });
        }
        req.userIdByToken = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken: verifyToken
};
module.exports = authJwt;