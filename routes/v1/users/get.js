const userService = require('../../../service/user');
module.exports = ()=>{
    return(req,res) =>{
       const userId = req.params.id;
       
       let message = '';
       if(userService.getUser(userId)){
           message : userService.getUser(userId)[0].name
       }else{
            message : 'No user found !'
       }

       res.status(200).json({
           success : true,
           message : message 
       })
    }
}