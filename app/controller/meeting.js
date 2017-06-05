module.exports = app => {
	class MeetingController extends app.Controller{
		* index(){
			const ctx = this.ctx;
			const page = yield ctx.service.meeting.page(this.page);
			ctx.body = {success: true, result: page};
		}
		* todo(){
			const ctx = this.ctx;
			const params = Object.assign(this.page, {
			  type: ctx.params.status,
				pageNo: ctx.query.pageNo
			});
			const page = yield ctx.service.meeting.todo(params);
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
			const vo = yield ctx.service.meeting.show(params);
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
	return MeetingController;
}