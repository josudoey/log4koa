# log4koa

## Installation

```bash
$ npm install log4koa
```

## Example

```js
var log4koa = require('log4koa');
var log4js = require('log4js');
var Log = log4js.getLogger();
var koa = require('koa');
var app = koa();
app.use(log4koa());

app.listen(3000);
Log.info('listening on port 3000');

// Output:
// [2017-02-06 21:01:41.343] [INFO] repl - listening on port 3000
// [2017-02-06 21:02:17.744] [INFO] log4koa - ::1 - GET / 404 time:2
```
