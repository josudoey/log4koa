var log4js = require('./log4js');
module.exports = function (log) {
  if (!log) {
    var logger = log4js.getLogger();
    log = logger.info.bind(logger);
  }
  return function* (next) {
    var t = Date.now();
    var self = this;
    this.res.on('finish', function () {
      var dt = Date.now() - t;
      var msg = self.request.ip + ' - ' + self.method + ' ' + self.originalUrl + ' ' + self.response.status + ' time:' + dt;
      log(msg);
    });
    yield next;
  };
};

