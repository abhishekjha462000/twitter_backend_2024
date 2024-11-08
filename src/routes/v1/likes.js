import express from 'express';
import { getLikesv1, getLikesByIdv1 } from '../../controllers/likesController.js';

const likesRoute = express();

likesRoute.get('/', getLikesv1);

likesRoute.get('/:id', getLikesByIdv1);


export { likesRoute };