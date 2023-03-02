const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mockData = require('./users.json');
module.exports = {
    login: (req, res, next) => {
        let result = mockData.find((user) => user.email == req.body.email);
        if (!result) {
            return res.status(401).send({
                msg: 'Email or password is incorrect!'
            });
        } else {
            bcrypt.compare(req.body.password, result['password_hash'],(error, success) => {
                if (error) {
                    return res.status(401).send({
                        msg: 'Email or password is incorrect!'
                    });
                    throw bErr;
                }
                if (success) {
                    const token = jwt.sign({email:result.email},'the-super-strong-secrect');
                    return res.status(200).send({
                        msg: 'Logged in!',
                        token,
                        user: {
                            name: result.name,
                            email: result.email
                        }
                    });  
                }
                return res.status(401).send({
                    msg: 'Username or password is incorrect!'
                });
            })            
        }
    }
}