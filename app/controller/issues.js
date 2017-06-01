module.exports = app => {
  class IssuesController extends app.Controller{
    * index(){
      const ctx = this.ctx;
      const page = yield ctx.service.issues.page(this.page);
      ctx.body = {success: true, result: page};
    }
    * todo(){
      const ctx = this.ctx;
      const params = Object.assign(this.page, {
        type: ctx.params.status
      });
      const page = yield ctx.service.issues.todo(params);
      ctx.body = {success: true, result: page};
    }
    * new (){
      this.ctx.body = "/new";
    }
    * create (){
      this.ctx.body = "/create";
    }
    * show (){
      const ctx = this.ctx;
      const params = Object.assign(this.page, {
        id: ctx.params.id
      });
      const vo = yield ctx.service.issues.show(params);
      ctx.body = {success: true, result: vo};
    }
    * edit (){
      const ctx = this.ctx;
      ctx.body = ctx.params.id;
    }
    * update (){
      this.ctx.body = "/update";
    }
    * destroy (){
      this.ctx.body = "/destroy";
    }
  }
  return IssuesController;
}