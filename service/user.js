const allUsers = [{
    id : 1,
    name : 'Ramesh'
 },
 {
     id : 2,
     name : 'Suresh'
 }
]

const getAllUsers = () =>{
    return allUsers;
}
const getUser = (id) =>{
   const user = allUsers.filter(eachUser => eachUser.id == id);
   return user;
}

module.exports = {
    getAllUsers,
    getUser
}