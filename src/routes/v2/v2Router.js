import express from 'express';
import { commentsRoute } from './comments.js';
import { likesRoute } from './likes.js';

const v2Route = express();

v2Route.use('/comments', commentsRoute);
v2Route.use('/likes', likesRoute);


export { v2Route };