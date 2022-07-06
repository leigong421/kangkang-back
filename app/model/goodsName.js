"use strict";

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const GoodsName = app.model.define(
    "goods_name",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: STRING(50),
      unit: STRING(50),
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
  return GoodsName;
};
