const getUserMessage = (method)=>{
  return getMessage(method);
}
const getMessage = (method) =>{
    let message = ''
    switch (method) {
        case 'GET':
             message = "Hi,from GET message !";
            break;
        case 'POST':
                message = "Hi,from POST message !";
               break;
    
        default:
            break;
    }
    return message;
}

module.exports = {
    getUserMessage
}