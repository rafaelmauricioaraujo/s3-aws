var express = require('express');
var router = express.Router();

const AWS = require('aws-sdk');

/**
 * credencial configuration
 */

const credentials = new AWS.SharedIniFileCredentials({ profile: 'gng' });
AWS.config.credentials = credentials;


/**
 * Create a S3 Service Object
 */
// let bucketPromise = new AWS.S3({ apiVersion: '2006-03-01' });
let bucketPromise = new AWS.S3()


/* GET home page. */
// router.get('/', function(req, res, next) {
//   bucketPromise.listBuckets(function (err, data) {
//     if (err) {
//         console.log('err: ', err);
//     } else {
//         console.log('success: ', data.Buckets[0].Name);
//         res.render('index', { title: 'GNG Buckets', buckets: data.Buckets });
//     }
//   });
// });

const params = {
  Bucket: 'm.geodigitus.com.br',
  MaxKeys: 10
}

router.get('/', function (req, res, next) {
  bucketPromise.listObjectsV2(params, (err, data) => {
    if (err) {
      console.log('err: ', err, err.stack);
      res.render('index', { title: 'GNG Object', buckets: err.stack });
    } else {
      console.log('sucess: ', data);
      res.render('index', { title: 'GNG Object', buckets: data });
    }
  });
});

module.exports = router;
