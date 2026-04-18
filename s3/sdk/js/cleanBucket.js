import { S3Client, ListObjectsV2Command,DeleteObjectCommand } from "@aws-sdk/client-s3";


const s3Client=new S3Client({
  region: 'us-east-1'
})

const bucketName=process.argv[2]
async function cleanBucket(){
  try{
    const listobj=new ListObjectsV2Command({
      Bucket: bucketName
    });
    const responselist=await s3Client.send(listobj);
    for (let obj of responselist.Contents){
      const delobj=new DeleteObjectCommand({
        Bucket: "my-new-bucket-new-live-sidharth",
        Key: obj.Key
      });
      const responsedel=await s3Client.send(delobj);
      console.log(responsedel);
    }
  }catch(error){
    console.log(error);
  }
}

cleanBucket();