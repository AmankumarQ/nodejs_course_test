const routes = require('express').Router();


module.exports = ()=>{
    routes.use('/user');
    return routes;
}