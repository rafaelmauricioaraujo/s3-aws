const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials({ profile: 'node' });
AWS.config.credentials = credentials;

s3 = new AWS.S3({ apiVersion: '2020-11-30' });

var bucketParams = {
    Bucket: 'orla-test',
};

s3.listObjects(bucketParams, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});