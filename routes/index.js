
/*
 * GET home page.
 */

var fs = require('fs');

var json = {};

fs.readFile( __dirname + '/ra.json', function (err, data) {
    if (err) {
        throw err;
    }
    json = JSON.parse(data);
});

exports.index = function(req, res){
  console.log('sending response ra.json :\n' + JSON.stringify(json));
  res.json(json);
};