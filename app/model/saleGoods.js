"use strict";

module.exports = (app) => {
  const { STRING, INTEGER ,DECIMAL} = app.Sequelize;

  const SaleGoods = app.model.define(
    "sale_goods",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      companyName: STRING(50),
      goodsName: STRING(50),
      goodsNum: STRING(50),
      goodsPrice: DECIMAL(19, 4),
      goodsUnit: STRING(50),
      goodsTotal: DECIMAL(19, 4),
      goodsTotal: DECIMAL(19, 4),
      saleDate: STRING(50),
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
  return SaleGoods;
};
