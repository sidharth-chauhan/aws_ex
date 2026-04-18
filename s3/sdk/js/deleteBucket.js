import { S3Client, DeleteBucketCommand } from "@aws-sdk/client-s3";

const s3Client=new S3Client({
  region: 'ca-central-1'
})
const bucketName=process.argv[2]

async function deleteBucket(){
  try{
    const data =new DeleteBucketCommand({
      Bucket: bucketName
    })
    const response =await s3Client.send(data);
    console.log(response);


  }catch(error){
    console.log(error);
  }
}

deleteBucket()