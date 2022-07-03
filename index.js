#!/usr/bin/env node
import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';
import { helloRouter } from './routes/hello.js';

// configuration
const
    __dirname = dirname(fileURLToPath(import.meta.url)) + sep,

    cfg = {
        port: process.env.port || 3000,
        dir: {
            root: __dirname,
            static: __dirname + 'static' + sep,
            views: __dirname + 'views' + sep
        }
    };

console.dir(cfg, { depth: null, color: true });

// instantiate an Express app
const app = express();

// use EJS templates
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);

// do not identify Express
app.disable('x-powered-by');

// HTTP comression
app.use(compression());

// log every request
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

// home page route
app.get('/', (req, res) => {
    // res.send(`<h3>Welcome to Express world!</h3>`);
    res.render('message', { title: 'Hello from Express'});
});

// /hello/ route
app.use('/hello', helloRouter);

// serve static assets
app.use(express.static(cfg.dir.static));

// handle 404 error
app.use((req, res) => {
    // res.status(404).send(`Requested resource doesn't exist`);
    res.status(404).render('message', { title: 'Not Found!!!'});
});

// start a server
app.listen(cfg.port, () => {
    console.log(`Express server listening at http://localhost:${cfg.port}...`);
});

// export defaults
export { app, cfg };