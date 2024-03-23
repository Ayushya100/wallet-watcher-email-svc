'use strict';

import { logger } from 'lib-common-service';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
});

const log = logger('service-connection');

const port = process.env.PORT || 5200;
app.listen(port, () => {
    log.info(`Server is running on PORT: ${port}`);
});
