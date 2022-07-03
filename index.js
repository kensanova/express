#!/usr/bin/env node
// Express application
import express from 'express';

// configuration
const
    cfg = {
        port: process.env.port || 3000,
    };

// instantiate an Express app
const app = express();

// home page route
app.get('/', (req, res) => {
    res.send(`<h3>Welcome to Express world!</h3>`);
});

// start a server
app.listen(cfg.port, (req, res) => {
    console.log(`Express server listening at http://localhost:${cfg.port}...`);
});