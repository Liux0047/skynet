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
  // console.log('data: %o', req.body.result);
  console.log('Action: (in result)' + req.body.result.action);
  if (req.body.result.action === 'performance'){
    var perfData = data[req.body.result.parameters.fund];
    var answer = 'The NAV for ' + perfData.Name + ' is ' + perfData.Ccy + ' ' + perfData.NAV + ', with ' + perfData.ChangePercent + '% change from yesterday.';
    res.json({
      'speech': answer,
      'source': 'Allen API',
      'displayText': answer
    });
  } else {
    res.json({});
  }   
})

router.post('/test', function(req, res, next){
  res.json({
    'speech': '1',
    'displayText': 'test',
    'source': 'hello'
  });
})


router.get('/watchlist/add', function(req, res, next) {
  watchlist.push(mostRecent);
  res.send('added ' + mostRecent);
});

router.get('/watchlist/add/:id', function(req, res, next) {
  watchlist.push(req.params.id);
  res.send('added ' + req.params.id);
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