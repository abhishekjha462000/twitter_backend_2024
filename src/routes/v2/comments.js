import express from 'express';
import { getCommentByIdv2, getCommentsv2 } from '../../controllers/commentsController.js';

const commentsRoute = express();

commentsRoute.get('/', getCommentsv2);

commentsRoute.get('/:id', getCommentByIdv2);


export { commentsRoute };