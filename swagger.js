const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Sports API'
    },
    host: 'webserviceswinter24.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const routes = ['./routers/index.js']; /* NOTE: If you are using the express Router, you must pass in the 'routes' only the root file where the route starts, such as index.js, app.js, routes.js, etc ... */

// Generate swagger.json
swaggerAutogen(outputFile, routes, doc);