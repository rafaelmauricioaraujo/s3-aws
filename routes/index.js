var express = require('express');
var router = express.Router();

const AWS = require('aws-sdk');

/**
 * credencial configuration
 */

const credentials = new AWS.SharedIniFileCredentials({ profile: 'node' });
AWS.config.credentials = credentials;


/**
 * Create a S3 Service Object
 */
let bucketPromise = new AWS.S3({ apiVersion: '2020-11-30' });


/* GET home page. */
router.get('/', function(req, res, next) {
  bucketPromise.listBuckets(function (err, data) {
    if (err) {
        console.log('err: ', err);
    } else {
        console.log('success: ', data.Buckets[0].Name);
        res.render('index', { title: 'Node AWS S3', buckets: data.Buckets });
    }
  });
});

module.exports = router;
