var express = require('express');
var router = express.Router();

var data = {};
var watchlist = [];
parseCSV(data);

/* GET portfoloi data */
router.get('/portfolio/:id', function(req, res, next) {
  res.json(data[req.params.id]);
});

router.get('/watchlist/:id', function(req, res, next) {
  watchlist.push(req.params.id);
  res.send("added");
});

router.get('/watchlist', function(req, res, next){
  var obj = [];
  watchlist.forEach(w => {
    obj.push(data[w]);
  })
  res.json(obj);
});


/* debug dump all data */
router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;


function parseCSV(data) {
  var columns = ['portfolioId', 'Name', 'Ticker', 'NAV', 'Change', 'YTD', 'currency'];
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