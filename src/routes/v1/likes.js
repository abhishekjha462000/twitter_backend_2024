import express from 'express';

const likesRoute = express();

likesRoute.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the likes page of the api v1',
    })
})

likesRoute.get('/:id', (req, res) => {
    res.json({
        message: `Welcome to the like v1 with id ${req.params.id}`,
        id: req.params.id
    });
})


export { likesRoute };