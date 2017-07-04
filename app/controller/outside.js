module.exports = app => {
	class OutsideController extends app.Controller {
		* index() {
			console.log(this);
			const ctx = this.ctx;
			// 连接service
//			const page = yield ctx.service.outside.page(this.page);
			const page =  [{
			    "id": 6856420,
			    "name": "外出公干",
			    "things": "出差办事",
			    "client": "广州城管局",
			    "state": "外出",
			    "creater": "陈召炎",
			    "createDate": "2017-08-18 20:01:04",
			    "startDate": "2017-08-19 09:01:04",
			    "endDate": "2017-08-19 17:01:04"
			  }, {
			    "id": 6856421,
			    "name": "外出到银行",
			    "things": "银行办事",
			    "client": "工商银行",
			    "state": "外出",
			    "creater": "陈炎",
			    "createDate": "2017-08-18 20:01:04",
			    "startDate": "2017-08-19 09:01:04",
			    "endDate": "2017-08-19 17:01:04"
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
				title,		// 项目
				creater,	// 派遣人
				client,		// 访问客户
				startDate,	// 起始时间
				endDate,	// 结束时间
				content	// 外出事项
			} = ctx.request.body;
//			const {
//				success,
//				msg,
//				egdContext
//			} = yield ctx.service.login.login(loginName, loginPassword, isSavePwd);
//			if(success)
				ctx.body = {
					success: true,
					result: {server:"outside-api", data: ctx.request.body} // {"state": "success"}
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
//			const vo = yield ctx.service.outside.show(params);
			const vo = {
			    "id": 6856420,
			    "title": "外出公干",
			    "content": "1、办公室应配备的办公设施包括办公家具（桌椅，档案柜，文件架等），以及办公设备（电话机、传真机、电脑和打印机、复印机、碎纸机等），以及其他配套的用于办公的物品（空调等）。2、办公设施是一个较大的概念，包括普通的办公设施和特殊的办公设施。在普通办公设施的基础上，因为工种的不同，还可能使用到一些特殊办公设施，比如宣传人员，办公设施可能还要包括视频编辑机、照相机、摄像机、录像带存储架等。",
			    "client": "广州城管局",
			    "state": "外出",
			    "creater": "陈召炎",
			    "createDate": "2017-08-18 20:01:04",
			    "startDate": "2017-08-19 09:01:04",
			    "endDate": "2017-08-19 17:01:04",
			    "file": [{
			      "fileName": "重要文件.doc"
			    }, {
			      "fileName": "重要文件.xml"
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
	return OutsideController;
}