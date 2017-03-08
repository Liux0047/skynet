var express = require('express');
var router = express.Router();

var data = {};
var watchlist = [];
var mostRecent = 229407;
parseCSV(data);

/* GET portfoloi data */
router.get('/portfolio/:id', function(req, res, next) {
  mostRecent = req.params.id;
  res.json(data[req.params.id]);
});

router.post('/portfolio', function(req, res, next){
  res.json(data[req.body.fund]);
})

router.get('/watchlist/add', function(req, res, next) {
  watchlist.push(mostRecent);
  res.send("added " + mostRecent);
});

router.get('/watchlist/add/:id', function(req, res, next) {
  watchlist.push(req.params.id);
  res.send("added " + req.params.id);
});

router.get('/watchlist', function(req, res, next){
  var obj = {};
  watchlist.forEach(w => {
    obj[w] = data[w];
  })
  res.json(obj);
});


/* debug dump all data */
router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;


function parseCSV(data) {
  var columns = ['portfolioId','Ticker','Name','NAV','ChangePercent','ChangePercentYTD','Ccy','1Y','Incept'];
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