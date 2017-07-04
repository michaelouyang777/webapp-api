module.exports = app => {
	class AttendanceController extends app.Controller {
		* index() {
			console.log(this);
			const ctx = this.ctx;
			// 连接service
//			const page = yield ctx.service.attendance.page(this.page);
			const page = [{
				    "id": 6856420,
				    "title": "待请假",
				    "state": "待审批",
				    "name": "陆建平",
				    "createDate": "2017-08-18 20:01:04",
				    "startDate": "2017-08-19 09:01:04",
				    "endDate": "2017-08-19 17:01:04",
				    "days": 2,
				    "content": "私事",
				    "type": "年假",
				    "agreed": "陈召炎",
				    "creater": "陈召炎"
				  }, {
				    "id": 6856430,
				    "title": "待休假",
				    "state": "待审批",
				    "name": "关东海",
				    "createDate": "2017-08-18 20:01:04",
				    "startDate": "2017-08-19 09:01:04",
				    "endDate": "2017-08-19 17:01:04",
				    "days": 3,
				    "content": "结婚",
				    "type": "年假",
				    "agreed": "陈召炎",
				    "creater": "陈召炎"
				  }]
			ctx.body = {
				success: true,
				result: page
			};
		}
		* new() {
			this.ctx.body = "/new";
		}
		* create() {
			this.ctx.body = "/create";
		}
		* add() {
			const ctx = this.ctx;
			const {
				name,		// 姓名
				type,		// 类别		
				days,		// 天数		
				startDate,	// 开始时间
				endDate,	// 结束时间
				content,	// 说明
				ouName,		// 部门
				fileName,	// 文件名
				fileBase64	// 文件的base64
			} = ctx.request.body;
//			const {
//				success,
//				msg,
//				egdContext
//			} = yield ctx.service.login.login(loginName, loginPassword, isSavePwd);
//			if(success)
				ctx.body = {
					success: true,
					result: {server:"attendance-api", data: ctx.request.body} // {"state": "success"}
				};
//			else {
//				ctx.body = {
//					success,
//					msg
//				};
//			}
		}
		* show() {
			const ctx = this.ctx;
			const params = Object.assign(this.page, {
				id: ctx.params.id
			});
//			const vo = yield ctx.service.attendance.show(params);
			const vo = {
			    "id": 6856420,
			    "title": "待请假",
			    "state": "待审批",
			    "name": "陆建平",
			    "createDate": "2017-08-18 20:01:04",
			    "startDate": "2017-08-19 09:01:04",
			    "endDate": "2017-08-19 17:01:04",
			    "days": 2,
			    "content": "因家里的母鸡生了蛋，要回去孵化鸡蛋",
			    "type": "年假",
			    "agreed": "陈召炎",
			    "creater": "陈召炎",
			    "file": [{
			      "fileName": "图片1.png"
			    }]
			  }
			ctx.body = {
				success: true,
				result: vo
			};
		}
		* edit() {
			const ctx = this.ctx;
			ctx.body = ctx.params.id;
		}
		* update() {
			this.ctx.body = "/update";
		}
		* destroy() {
			this.ctx.body = "/destroy";
		}
	}
	return AttendanceController;
}