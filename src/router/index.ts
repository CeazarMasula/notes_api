import express from 'express';

import notesRouter from './notes';

const router = express.Router();

export default (): express.Router => {
    notesRouter(router);

    return router;
}