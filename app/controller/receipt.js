module.exports = app => {
	class ReceiptController extends app.Controller {
		* index() {
			console.log(this);
			const ctx = this.ctx;
			// 连接service
//			const page = yield ctx.service.receipt.page(this.page);
			const page =  [{
			    "id": 6856420,
			    "title": "报销出差费",
			    "state": "待审批",
			    "name": "陆建平",
			    "money": 200,
			    "department": "项目部",
			    "content": "",
			    "createDate": "2017-08-18 20:01:04",
			    "startDate": "2017-08-19 09:01:04",
			    "endDate": "2017-08-19 17:01:04",
			    "creater": "陈夏龙"
			  }, {
			    "id": 6856422,
			    "title": "报销差旅费",
			    "state": "待审批",
			    "name": "董海兵",
			    "money": 150,
			    "department": "项目部",
			    "content": "",
			    "createDate": "2017-08-18 20:01:04",
			    "startDate": "2017-08-19 09:01:04",
			    "endDate": "2017-08-19 17:01:04",
			    "creater": "张小龙"
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
		* show() {
			const ctx = this.ctx;
			const params = Object.assign(this.page, {
				id: ctx.params.id
			});
//			const vo = yield ctx.service.receipt.show(params);
			const vo =  {
			    "id": 6856420,
			    "title": "报销出差费",
			    "state": "待审批",
			    "name": "陆建平",
			    "createDate": "2017-08-18 20:01:04",
			    "startDate": "2017-08-19 09:01:04",
			    "endDate": "2017-08-19 17:01:04",
			    "money": 100,
			    "department": "项目部",
			    "content": "2017-06-20，出差到广州增城国际地震局，中途花费100元路费",
			    "creater": "陈夏龙",
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
	return ReceiptController;
}