import { S3Client, DeleteBucketCommand } from "@aws-sdk/client-s3";

const s3Client=new S3Client({
  region: 'ca-central-1'
})

async function deleteBucket(){
  try{
    const data =new DeleteBucketCommand({
      Bucket: "google-summer-goodyaar-2"
    })
    const response =await s3Client.send(data);
    console.log(response);


  }catch(error){
    console.log(error);
  }
}

deleteBucket()