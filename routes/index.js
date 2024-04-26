const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')
 
//This line of code says if I have a HTTP get request at '/' url than run the anonymous function
routes.get('/',lesson1Controller.mvikoRoute);

routes.get('/hannah', lesson1Controller.hannahRoute);

module.exports = routes;