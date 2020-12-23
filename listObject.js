const AWS = require('aws-sdk');

// const credentials = new AWS.SharedIniFileCredentials({ profile: 'node' });
const credentials = new AWS.SharedIniFileCredentials({ profile: 'gng' });
AWS.config.credentials = credentials;

// s3 = new AWS.S3({ apiVersion: '2020-11-30' });
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

var bucketParams = {
    Bucket: 'm.geodigitus.com.br',
};

s3.listObjects(bucketParams, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});