var express = require('express');
var router = express.Router();

var data = {};
parseCSV(data);

/* GET portfoloi data */
router.get('/portfolio/:id', function(req, res, next) {
  res.json(data[req.params.id]);
});


/* debug dump all data */
router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;


function parseCSV(data) {
  var columns = ['portfolioId', 'Name', 'NAV', 'Change', 'YTD'];
  ['hk-one', 'sg-one', 'au-one', 'global-products'].forEach(f => {
    require('csv-to-array')({
      file: 'data/' + f + '.csv',
      columns: columns
    }, function (err, array) {
      if (!err ) {
        array.forEach( p => {
          data[p['portfolioId']] = p;
        });
      }
    });
  });
}