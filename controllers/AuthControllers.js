const db = require("../models");
const config = require("../config/auth.config");

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    var response = new Array();
    var responseTemp = new Array();
    var defaultPassword = req.body.username + "" + req.body.email;
    var resUser = await db.AuthUser.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        password_default: bcrypt.hashSync(defaultPassword, 8),
        created_by: req.body.email,
        idcabang: 1,
        idclient: 1
    })
        .then(async user => {
            responseTemp = {
                status: true,
                message: "Successfully",
                statusCode: 200
            }
            return responseTemp;
        })
        .catch(err => {
            responseTemp = {
                status: false,
                message: err.message,
                statusCode: 500
            }
            return responseTemp;
        });
    response = resUser;
    res.status(resUser.statusCode).send(response);
};

exports.signin = async (req, res) => {
    var response = new Array();
    var responseTemp = new Array();

    var resUser = await db.AuthUser.findOne({
        where: {
            username: req.body.username,
        },
        include: [
            {
                model: db.HrmPegawai,
                required: true,
                where: {
                    isactive: true,
                },
            }
        ]
    })
        .then(user => {
            if (!user) {
                responseTemp = {
                    status: true,
                    message: "User Not found.",
                    statusCode: 404
                }
            } else {
                if (!user.isactive) {
                    responseTemp = {
                        status: true,
                        message: "User Not Active",
                        statusCode: 404
                    }
                } else {
                    var passwordIsValid = bcrypt.compareSync(
                        req.body.password,
                        user.password
                    );

                    if (!passwordIsValid) {
                        responseTemp = {
                            status: true,
                            message: "Invalid Password!",
                            statusCode: 401
                        }
                    } else {
                        var token = jwt.sign({ iduser: user.iduser }, config.secret, {
                            expiresIn: 86400 // 24 hours
                        });
                        responseTemp = {
                            status: true,
                            statusCode: 200,
                            message: "Successfully",
                            accessToken: token,
                            dataUser: user
                        }
                    }
                }
            }
            return responseTemp;

        })
        .catch(err => {
            responseTemp = {
                status: true,
                message: err.message,
                statusCode: 500
            }
        });

    response = {
        status: true,
        statusCode: resUser.statusCode,
        message: resUser.message,
        accessToken: resUser.statusCode == 200 ? resUser.accessToken : null,
        dataUser: resUser.dataUser,
    }
    res.status(resUser.statusCode).send(response);
};