'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  
  //开启跨域
  cors: {
	  enable: true,
	  package: 'egg-cors'
	},

  // 开启egg-mysql插件
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },


};
