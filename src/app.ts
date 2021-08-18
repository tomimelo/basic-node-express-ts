import config from 'config';
import Server from './api/server';
import logger from './lib/logger';
import { IConfig } from './models/config.interface';
import dbConnector from './db/connector';

const log = logger.child({ name: 'app.ts' });
const environment: string = config.get('env');
log.info(`Starting app with environment: ${environment}`);

(async () => {
    try {
        const port: any = process.env.PORT || config.get<IConfig['api']>('api').port;

        log.info('Connecting database...');
        await dbConnector.createConnection();
        log.info('✓ Database connected');
        log.info('Starting server...');
        const server = new Server(port);
        server.start();
    } catch (e) {
        log.error(e);
        process.exit(1);
    }
})();