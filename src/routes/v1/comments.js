import express from 'express';

const commentsRoute = express();

commentsRoute.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the comments page of the v1 api'
    });
});

commentsRoute.get('/:id', (req, res) => {
    res.json({
        message: `Welcome to the comment page of the v1 api with id = ${req.params.id}`,
        id: req.params.id
    });
});


export { commentsRoute };