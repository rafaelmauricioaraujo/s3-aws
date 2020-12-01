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
    Key: 'Insomnia.json'
};

let object = new AWS.S3({ apiVersion: '2020-11-30' });

object.getObject(params, function(err, data){
    if(err) {
        console.log(err, err.stack);
    }else{
        console.log(JSON.stringify(data));
    }
});
