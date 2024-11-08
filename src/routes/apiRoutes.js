import express from 'express';
import { v1Route } from './v1/v1Router.js';
import { v2Route } from './v2/v2Router.js';

const apiRoutes = express();

apiRoutes.use('/v1', v1Route);
apiRoutes.use('/v2', v2Route);

export { apiRoutes };