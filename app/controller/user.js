module.exports = app => {
  class LoginController extends app.Controller{
    * login(){
      const ctx = this.ctx;
      const {loginName, loginPassword, isSavePwd = false} = ctx.request.body;
      const {success, msg, egdContext} = yield ctx.service.login.login(loginName, loginPassword, isSavePwd);
      //ctx.rotateCsrfSecret();
      if(success)
        ctx.body = {success, result : JSON.parse(egdContext)};
      else{
        ctx.body = {success, msg};
      }
    }
  }
  return LoginController;
}