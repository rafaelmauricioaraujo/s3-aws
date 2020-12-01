/**
 * load the AWS SDK
 */

const AWS = require('aws-sdk');

/**
 * credencial configuration
 */

const credentials = new AWS.SharedIniFileCredentials({ profile: 'node' });
AWS.config.credentials = credentials;

let params = {
    Bucket: 'orla-test',
    Key: 'info.json'
};

let object = new AWS.S3({ apiVersion: '2020-11-30' });

object.getObject(params, function(err, buffer){
    if(err) {
        console.log('err: ',err, err.stack);
    }else{
        console.log(buffer.Body.toString());
    }
});
