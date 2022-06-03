const userService = require('../../../service/user');
module.exports = ()=>{
    return(req,res) =>{
       res.status(200).json({
           success : true,
           message : userService.getAllUsers()
       })
    }
}