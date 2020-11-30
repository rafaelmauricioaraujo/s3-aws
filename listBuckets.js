/**
 * load the sdk and UUID
 */

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


/**
 * Call S3 to list buckets
 */

bucketPromise.listBuckets(function (err, data) {
    if (err) {
        console.log('err: ', err);
    } else {
        console.log('success: ', data.Buckets);

    }
});