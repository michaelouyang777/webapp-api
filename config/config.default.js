exports.keys = "ssss";
exports.middleware = [ 'cors' ];
exports.cors = {
  origin: 'http://10.1.10.16:8080',
  maxAge: 1000000,
  credentials: true
};
exports.api = {
  egrand_api: 'http://10.1.10.205:8083'
}
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.html': 'nunjucks'
  }
}