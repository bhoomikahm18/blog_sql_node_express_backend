
const mysql = require('mysql2');
// const bcrypt = require("bcryptjs");
const db = require('../config/db.js');

// module.exports.getAllUser = async (req, res) => {
//     const { name, email, password } = req.body;
//     db.query("SELECT * FROM USERS", (err, result) => {
//         if (err) return console.log(err);

//         res.send(result);
//     })
// };

module.exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    db.query('SELECT EMAIL FROM users WHERE EMAIL=?', [email], (err, result)=>{
        if(err){
            console.log(err);
        }
        if(result.length > 0){
            return res.json({message: 'The email is already in use'})
        }else if(password !== password){
            return res.json({message: 'Password do not match' })
        }
        db.query('INSERT INTO users SET ?', {name: name, email: email, password: password}, (err, results)=>{
            if(err){
                console.log(err);
            }else{
                return res.json({message: 'User Registered'});
            }
        })
    })
    
};

module.exports.login = (req, res) => {

    const { email, password } = req.body;
    db.query('SELECT * FROM USERS WHERE EMAIL=?', [email], (err, results) => {
        if (err) {
            console.log(err);
        }
        if (results.length === 0) return res.json({ message: 'NO User Found' })
        results.forEach(ele => {
            if (email === ele.EMAIL) {
                if (password === ele.PASSWORD) {
                    return res.json({
                        message: 'Login successfull'
                    })
                } else {
                    return res.json({ message: 'Invalid Password' })
                }
            }
        })
    })
}