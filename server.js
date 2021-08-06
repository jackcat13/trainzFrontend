//Install express server
const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

// Proxy endpoints for /api calls
app.use('/api', createProxyMiddleware({
    target: "https://trainz-backend.herokuapp.com/",
    changeOrigin: true,
    pathRewrite: {
        [`^/api`]: '',
    },
 }));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/trainz'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/trainz/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);