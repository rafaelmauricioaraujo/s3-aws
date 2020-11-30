/**
 * load the sdk and UUID
 */

import { SharedIniFileCredentials, config } from 'aws-sdk';
import {Buckets } from 'aws-sdk/clients/s3';
/**
 * credencial configuration
 */

const credentials = new SharedIniFileCredentials({ profile: 'node' });
config.credentials = credentials;


/**
 * Create a S3 Service Object
 */
let bucketPromise = new S3({ apiVersion: '2020-11-30' });
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