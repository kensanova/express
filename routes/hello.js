import { Router } from "express";
import { hello } from '../lib/sayHello.js';
import { capitalize } from '../lib/string.js';

export const helloRouter = Router();

// say hello in Elglish
helloRouter.get('/:name', (req, res) => {
    res.render(
        'message',
        {title: `${hello.en}, ${capitalize(req.params.name)}!`, currentUrl: '/hello' + req.url}
    );
});

// say hello in other languages
helloRouter.get('/:lang/:name', (req, res) => {
    res.render(
        'message',
        { title: `${hello[req.params.lang] || hello.en}, ${capitalize(req.params.name)}!`, currentUrl: '/hello' + req.url}
    );
});