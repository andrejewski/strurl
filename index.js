
var router = require('express-ware/application');
var config = {
  root: __dirname,
  name: 'BigText',
  port: 3000
};

var app = router(config);

app.get('/', function(req, res, next) {
  res.locals.text = 'String URL: Type anything and send it as a link to anyone.';
  res.render('app/view');
});

app.get('/*', function(req, res, next) {
  res.locals.text = decodeURIComponent(req.url.slice(1));
  res.render('app/view');
});

app.close().start();

