import { S3Client, PutObjectCommand} from "@aws-sdk/client-s3";
import fs from "fs";


const s3Client=new S3Client({
  region: 'us-east-1'
})

async function uploadObj(){
  try{

    const data=new PutObjectCommand({
      Bucket: "my-new-bucket-new-live-sidharth",
      Key: "file3.txt",
      Body: fs.createReadStream("../../../hello.txt")
    });

    const response =await s3Client.send(data);

    console.log(response);

  }catch(error){
    console.log(error);
  }
}


uploadObj();