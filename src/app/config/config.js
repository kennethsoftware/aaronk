const environment = process.env.NODE_ENV || 'development';
const envConfig = {
  development: {},
  production: {}
};

const defaultConfig = {
  title: 'AaronK | Full-Stack Sofware Engineer specialising in Front-End'
};

const config = Object.assign({}, defaultConfig, envConfig[environment]);

module.exports = config;
