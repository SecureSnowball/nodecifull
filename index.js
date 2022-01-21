require('dotenv').config();
const server = require('./src/server');
const logger = require('./src/services/logger.service');

const port = parseInt(process.env.PORT, 10) || 3000;

server.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
