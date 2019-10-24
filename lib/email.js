'use strict';

const assert = require('assert');
const nodemailer = require('nodemailer');

function createEmailClient(config, app) {
  assert(
    config.host && config.secure && config.port && config.auth,
    `[egg-email]
      'host: ${config.host}',
      'port: ${config.port}',
      'secure: ${config.secure}',
      'auth: ${config.auth}'
      are require on config
    `
  );

  // 创建实例
  const client = nodemailer.createTransport(config);

  // 做启动应用前的检查
  app.beforeStart(async () => {
    app.coreLogger.info('[egg-email] init instance success.');
    app.coreLogger.info('[egg-email] connecting %s@%s:%s/%', config.host, config.port, config.auth);
  });
  return client;
}

module.exports = app => {
  app.addSingleton('email', createEmailClient);
};
