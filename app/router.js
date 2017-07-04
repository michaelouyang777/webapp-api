module.exports = app =>{
  app.get('/', 'home.index');
  app.post('/api/v1/user/login', 'user.login');							// 登录
//app.get('/api/v1/issues/todo/:status', 'issues.todo');		// 议题
  app.resources('issues', '/api/v1/issues', 'issues');			// 议题列表
//app.get('/api/v1/meeting/todo/:status', 'meeting.todo');	// 会议
  app.resources('meeting', '/api/v1/meeting', 'meeting')		// 会议列表
  
	app.resources('attendance', '/api/v1/attendance/list', 'attendance');	// 请休假列表
	app.get('/api/v1/attendance/info/:id', 'attendance.show');						// 请休假详情
	app.post('/api/v1/attendance/add', 'attendance.add');						// 请休假新增	
	
	app.resources('outside', '/api/v1/outside/list', 'outside');		// 外出列表
	app.get('/api/v1/outside/info/:id', 'outside.show');						// 外出详情
	
	app.resources('receipt', '/api/v1/receipt/list', 'receipt');		// 报销列表
	app.get('/api/v1/receipt/info/:id', 'receipt.show');						// 报销详情
}