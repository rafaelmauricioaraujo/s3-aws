/**
 * load the sdk and UUID
 */

const AWS = require('aws-sdk');
const uuid = require('uuid');

/**
 * credencial configuration
 */

const credentials = new AWS.SharedIniFileCredentials({ profile: 'node' });
AWS.config.credentials = credentials;

/**
 * Create a unique bucket name
 */

let bucketName = 'node-sdk-sample-' + uuid.v4();

/**
 * Create a name for a uploaded object key
 */

let keyName = 'hello-world.txt';

/**
 * Create a promise on S3 service object
 */

let bucketPromise = new AWS.S3({ apiVersion: '2020-11-30' })
    .createBucket({ Bucket: bucketName })
    .promise();

/**
 * Handle a promise fulfilled/rejected states
 */

let readBuckect = new AWS.S3({ apiVersion: '2020-11-30'}).getObject({})

bucketPromise.then(
    function (data) {
        //Create parans for putObject call
        let objectParams = { Bucket: bucketName, Key: keyName, Body: 'Hello World' };

        //Create a object upload promise
        let uploadPromise = new AWS.S3({ apiVersion: '2020-11-30', }).putObject(objectParams).promise();

        uploadPromise.then(
            function (data) {
                console.log('Successfully uploaded data to ' + bucketName + '/' + keyName);
            });

    }).catch(
        function (err) {
            console.log(err, err.stack);
        });
