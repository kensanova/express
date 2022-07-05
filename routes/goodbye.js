import { Router } from "express";
import { goodbye } from '../lib/sayGoodbye.js';
import { capitalize } from '../lib/string.js';

export const goodbyeRouter = Router();

// say goodbye in Elglish
goodbyeRouter.get('/:name', (req, res) => {
    res.render(
        'message',
        {title: `${goodbye.en}, ${capitalize(req.params.name)}!`, currentUrl: '/goodbye' + req.url}
    );
});

// say goodbye in other languages
goodbyeRouter.get('/:lang/:name', (req, res) => {
    res.render(
        'message',
        { title: `${goodbye[req.params.lang] || goodbye.en}, ${capitalize(req.params.name)}!`, currentUrl: '/goodbye' + req.url}
    );
});