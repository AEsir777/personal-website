import AWS from "aws-sdk";
import * as dotenv from "dotenv";
dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN
});

var params = {
    key : fileName,
    body : doc,
    bucket : 'bucketName',
    contentType : 'application/pdf'
}

await s3.putObject({
    Body: JSON.stringify({key:"value"}),
    Bucket: "cyclic-awful-smock-wasp-us-east-2",
    Key: "Resume.pdf",
    ContentType: 'application/pdf'
}).promise()

let my_file = s3.getObject({
    Bucket: "cyclic-awful-smock-wasp-us-east-2",
    Key: "Resume.pdf",
}).promise()