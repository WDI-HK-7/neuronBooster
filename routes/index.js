var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'neuronBooster',
      appJS: [
        {src: 'javascripts/application.js'}
      ],
      bowerScriptsJS: [
        {src: '/bower_components/codemirror/lib/codemirror.js'},
        {src: '/bower_components/codemirror/mode/javascript/javascript.js'}
      ],
      bowerScriptsCSS: [
        {href: '/bower_components/codemirror/lib/codemirror.css'},
        {href: '/bower_components/codemirror/theme/solarized.css'}
      ],
    });
});

module.exports = router;
