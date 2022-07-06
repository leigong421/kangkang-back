"use strict";
// 用于汇总所有的接口请求,以及匹配到对应controller下对应的文件

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  // router.get("/api/companyNews/list", controller.companyNews.index);
  // router.get("/api/companyNews/detail", controller.companyNews.findOne);
  // router.post("/api/companyNews/addNews", controller.companyNews.create);
  // router.post("/api/companyNews/updateNews", controller.companyNews.update);
  // router.post("/api/companyNews/deleteNews", controller.companyNews.delete);

  // router.get("/api/moduleOne/findConfig", controller.checked.index);
  // router.post("/api/moduleOne/updateConfig", controller.checked.update);

  router.get("/api/goods/getList", controller.goodsName.index);
  router.get("/api/companys/getList", controller.companys.index);
  router.get("/api/saleGoods/getList", controller.saleGoods.index);
  router.post("/api/saleGoods/add", controller.saleGoods.create);

  // router.post("/api/moduleThree/addUsers", controller.emperors.create);

  // router.post("/api/moduleThree/deleteUsers", controller.emperors.delete);
  
  // router.post("/api/moduleThree/updateUsers", controller.emperors.update);
  // router.get("/api/moduleThree/detail", controller.emperors.findOne);

  // router.get("/api/moduleFour/findEmperorsInfo", controller.emperorsInfo.index);
  // router.get("/api/moduleFive/findEngineerings", controller.engineerings.index);
};
