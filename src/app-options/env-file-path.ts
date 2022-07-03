let envFilePath = null;

switch (process.env.NODE_ENV) {
  case 'prod':
    envFilePath = '.env.prod';
  case 'stage':
    envFilePath = '.env.stage';
  case 'dev':
  default:
    envFilePath = '.env.dev';
}

export default envFilePath;