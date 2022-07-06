"use strict";

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Companys = app.model.define(
    "companys",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: STRING(50),
      adress: STRING(50),
      phone: INTEGER,
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  // 1个朝代-对应多个皇帝 1:n
  // Emperors.associate = function() {
  //   app.model.Emperors.hasMany(app.model.EmperorInfo, {
  //     as: 'emperorInfo',
  //     foreignKey: 'dynasty_id', targetKey: 'id',
  //   });
  // };
  return Companys;
};
