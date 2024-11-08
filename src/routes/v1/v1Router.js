import express from 'express';
import { commentsRoute } from './comments.js';
import { likesRoute } from './likes.js';

const v1Route = express();

v1Route.use('/comments', commentsRoute);
v1Route.use('/likes', likesRoute);


export { v1Route };