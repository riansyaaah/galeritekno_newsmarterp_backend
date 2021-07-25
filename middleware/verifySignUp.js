const db = require("../models");

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    db.AuthUser.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                status: false,
                message: "Failed! Username is already in use!"
            });
            return;
        }

        // Email
        db.AuthUser.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    status: false,
                    message: "Failed! Email is already in use!"
                });
                return;
            }

            next();
        });
    });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;