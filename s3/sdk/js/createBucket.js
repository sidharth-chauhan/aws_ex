import { S3Client, CreateBucketCommand } from "@aws-sdk/client-s3";


const s3Client=new S3Client({
  region: 'us-east-1'
})

async function createBucket(){
  try{
    const response = await s3Client.send(
      new CreateBucketCommand({
        Bucket: "my-new-bucket-new-live-sidharth"
      })
    )

    console.log(response);


  }catch(error){
    console.log(error);
  }
}


createBucket();