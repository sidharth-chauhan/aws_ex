import { S3Client , DeleteObjectCommand} from "@aws-sdk/client-s3";


const s3Client=new S3Client({
  region: 'us-east-1'
})

const bucketName=process.argv[2]
const objName=process.argv[3]

async function deleteObj(){
  try{
    const data=new DeleteObjectCommand({
      Bucket: bucketName,
      Key: objName
    });

    const response = await s3Client.send(data);


    console.log(response);

  }catch(error){
    console.log(error);
  }
}

deleteObj()