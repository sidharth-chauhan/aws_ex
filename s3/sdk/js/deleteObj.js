import { S3Client , DeleteObjectCommand} from "@aws-sdk/client-s3";


const s3Client=new S3Client({
  region: 'us-east-1'
})


async function deleteObj(){
  try{
    const data=new DeleteObjectCommand({
      Bucket: "my-new-bucket-new-live-sidharth",
      Key: "file1.txt"
    });

    const response = await s3Client.send(data);


    console.log(response);

  }catch(error){
    console.log(error);
  }
}

deleteObj()