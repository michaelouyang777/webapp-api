exports.keys = "ssss";
exports.multipart = {fileExtensions: [ '.doc', 'xls' ]}
exports.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb'
};
exports.middleware = [ 'cors', 'errorHandler', 'notfoundHandler' ];
exports.cors = {
  origin: 'http://10.1.10.16:8080',
  maxAge: 1000000,
  credentials: true
};
exports.errorHandler = {
  match: '/api'
}
exports.security = {
  csrf: {
    enable: false
  },
};
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.html': 'nunjucks'
  }
}
