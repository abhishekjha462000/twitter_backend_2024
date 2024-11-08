import express from 'express';
import { getCommentsv1, getCommentByIdv1 } from '../../controllers/commentsController.js';

const commentsRoute = express();

commentsRoute.get('/', getCommentsv1);

commentsRoute.get('/:id', getCommentByIdv1);


export { commentsRoute };