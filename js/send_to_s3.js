var albumBucketName = "bucket-cadastro-contato-clientes-nautilus";
var bucketRegion = "sa-east-1";
var IdentityPoolId = "sa-east-1:3d3fa7d9-e94c-44a8-a936-edb259d3c90d";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  }),
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName },
});


function createAlbum() {

    var albumKey = encodeURIComponent("mensagem");
    s3.headObject({ Key: albumKey }, function (err, data) {
      if (!err) {
        return alert("Album already exists.");
      }
      if (err.code !== "NotFound") {
        return alert("There was an error creating your album: " + err.message);
      }
      s3.putObject({ Key: albumKey }, function (err, data) {
        if (err) {
          return alert("There was an error creating your album: " + err.message);
        }
        alert("Successfully created album.");
        viewAlbum(albumName);
      });
    });
  }