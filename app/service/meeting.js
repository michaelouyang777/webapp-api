module.exports = app => {
	class MeetingService extends app.Service{
		* page(params){
			const {data : {rows}} = yield this.ctx.curl(`${this.serverAPI}/ytApiAction.do?action=page`, {
				data: params,
				dataType: 'json'
			});
			return rows;
		}
		* todo(params){
			const {data : {rows}} = yield this.ctx.curl(`${this.serverAPI}/ytApiAction.do?action=getToDoPage`, {
				data: params,
				dataType: 'json'
			});
			return rows;
		}
		* show(params){
			const {data : {row}} = yield this.ctx.curl(`${this.serverAPI}/hyApiAction.do?action=show`, {
				data: params,
				dataType: 'json'
			});
			return row;
		}
	}
	return MeetingService;
}