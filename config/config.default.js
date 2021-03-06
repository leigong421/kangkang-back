/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1612748277729_9799";

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: "mysql",

    host: "127.0.0.1",

    port: 3306,

    database: "kangkang",

    username: "root",

    password: "123456",
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  //解决跨域
  config.cors = {
    origin: '*',
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
