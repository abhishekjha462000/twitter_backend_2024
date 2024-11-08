import express from 'express';
import { getLikesv2, getLikesByIdv2 } from '../../controllers/likesController.js';

const likesRoute = express();

likesRoute.get('/', getLikesv2);

likesRoute.get('/:id', getLikesByIdv2);


export { likesRoute };