"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const CompanyNews = app.model.define(
    "company_news",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: STRING(100),
      headerImg: STRING(1024),
      news: TEXT,
      date: STRING(32),
      type: INTEGER,
    },
    {
      freezeTableName: true, //强制生成表明不加s
      timestamps: true,
      createdAt: true, //数据创建时间  模型希望你有该字段
      updatedAt: true, //数据更新时间
    }
  );

  return CompanyNews;
};
