'use strict';

const restify = require('restify');
global.config = require('./config/app');

const server = restify.createServer(
    {
        name : "Github Deploy",
        version : "1.0.0"
    }
);

server.get('/', restify.plugins.serveStatic(
    {
        directory : __dirname,
        default : "/index.html"
    }
))

server.listen(config.port, function(){
    console.log("%s listen host %s", server.name, server.url);
})