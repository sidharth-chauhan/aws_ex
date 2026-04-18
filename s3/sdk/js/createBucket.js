import { S3Client, CreateBucketCommand } from "@aws-sdk/client-s3";


const s3Client=new S3Client({
  region: 'us-east-1'
})
const bucketName=process.argv[2]

async function createBucket(){
  try{
    const response = await s3Client.send(
      new CreateBucketCommand({
        Bucket: bucketName
      })
    )

    console.log(response);


  }catch(error){
    console.log(error);
  }
}


createBucket();