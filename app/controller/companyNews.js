"use strict";
// 处理和数据库的请求,返回对应的数据,先获取model某块下对应的数据,然后返回给页面

const Controller = require("egg").Controller;

class CompanyNewsController extends Controller {
  // 查询列表
  async index() {
    const { ctx } = this;
    // 获取get请求的数据,通过query的方式获取数据
    const { page = 1, pageSize = 5, type = "" } = ctx.query;
    let where;
    if (type) {
      where = {
        type,
      };
    } else {
      where = null;
    }
    // 分页查询
    const user = await ctx.model.CompanyNews.findAndCountAll({
      order: [[ 'id', 'DESC' ]],//以id倒叙
      offset: parseInt((page - 1) * pageSize),
      limit: parseInt(pageSize),
      where,
      distinct: true,
    });
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data: {
        list: user.rows,
        total: user.count,
      },
    };
  }
  // 新增
  async create() {
    const { ctx } = this;
    //     如上面例子中的 ctx.request.query.id 和 ctx.query.id 是等价的，ctx.response.body= 和 ctx.body= 是等价的。
    // 需要注意的是，获取 POST 的 body 应该使用 ctx.request.body，而不是 ctx.body。
    const { title, type, headerImg, news, date } = ctx.request.body;
    const haveData = await ctx.model.CompanyNews.findAll({ where: { title } });
    if (haveData && haveData.length) {
      ctx.status = 200;
      ctx.body = {
        code: 20000,
        message: "添加的数据已经存在,请勿重复添加!",
      };
      return;
    }
    const res = await ctx.model.CompanyNews.create({
      title,
      type,
      headerImg,
      news,
      date,
    });
    if (!res) {
      ctx.status = 20001; // 操作数据库失败
      return;
    }
    ctx.body = {
      code: 200,
      message: "新增数据成功",
    };
  }

  // 删除
  async delete() {
    const { ctx } = this;
    //     如上面例子中的 ctx.request.query.id 和 ctx.query.id 是等价的，ctx.response.body= 和 ctx.body= 是等价的。
    // 需要注意的是，获取 POST 的 body 应该使用 ctx.request.body，而不是 ctx.body。
    const { id } = ctx.request.body;
    // 通过主键来查询一条记录
    const user = await ctx.model.CompanyNews.findByPk(id);
    if (!user) {
      ctx.body = {
        status: 404,
        message: "操作数据库失败",
      };
      return;
    }
    await user.destroy();
    ctx.status = 200;
    ctx.body = {
      code: 200,
      message: "删除成功",
    };
  }

  // 修改
  async update() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const data = Object.assign({}, ctx.request.body);
    delete data.id;
    const user = await ctx.model.CompanyNews.findByPk(id);
    if (!user) {
      ctx.body = {
        status: 404,
        message: "操作数据库失败",
      };
      return;
    }
    await user.update(data);
    ctx.status = 200;
    ctx.body = {
      code: 200,
      message: "修改成功",
    };
  }

  async findOne() {
    const { ctx } = this;
    const { id } = ctx.query;
    // 查询单个
    const detail = await ctx.model.CompanyNews.findOne({
      where: {
        id,
      },
    });
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data: detail,
    };
  }
}

module.exports = CompanyNewsController;
