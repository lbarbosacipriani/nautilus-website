

import Amplify from 'aws-amplify';
Amplify.configure(
    Auth: {
        identityPoolId: 'sa-east-1:3d3fa7d9-e94c-44a8-a936-edb259d3c90d', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'sa-east-1', // REQUIRED - Amazon Cognito Region
        userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        bucket: 'bucket-cadastro-contato-clientes-nautilus', //REQUIRED -  Amazon S3 bucket
        region: 'sa-east-1', //OPTIONAL -  Amazon service region
    }
);



function createAlbum() {
    Storage.put('test.txt', 'Hello')
    .then (result => console.log(result))
    .catch(err => console.log(err));
  }