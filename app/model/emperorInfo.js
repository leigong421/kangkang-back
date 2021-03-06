// 'use strict';

// module.exports = app => {
//   const {
//     STRING,
//     BIGINT,
//   } = app.Sequelize;


//   const EmperorInfo = app.model.define('emperor_info', {
//     id: {
//       type: BIGINT,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     dynastyId: {
//       type: BIGINT,
//       allowNull: false,
//     },
//     name: {
//       type: STRING,
//       allowNull: false,
//     },
//     posthumousTitle: {
//       type: STRING,
//       allowNull: false,
//     },
//     startTime: {
//       type: STRING,
//       allowNull: false,
//     },
//     endTime: {
//       type: STRING,
//       allowNull: false,
//     },
//     address: {
//       type: STRING,
//       allowNull: false,
//     },

//   }, {
//     freezeTableName: true,
//     timestamps: false,
//   });

//   EmperorInfo.associate = function() {
//     // 我们在 app/model/ 目录下编写 user(首字母小写) 这个 Model,
//     // 就可以在 Controller 和 Service 中通过 app.model.User(首字母大写) 或者 ctx.model.User 访问到了

//     // 多个皇帝-对应一个朝代   n-1
//     app.model.EmperorInfo.belongsTo(app.model.Emperors, {
//       as: 'emperors', // 指定别名
//       foreignKey: 'dynasty_id', targetKey: 'id',
//     });

//     // 一个皇帝-对应多个工程,一个工程-对应多个皇帝维护
//     app.model.EmperorInfo.belongsToMany(app.model.Engineerings, {
//       through: app.model.EmperorHasEngineering,
//       foreignKey: 'emperorId',
//     });
//   };

//   return EmperorInfo;
// };
