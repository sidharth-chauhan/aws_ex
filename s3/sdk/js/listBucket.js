import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";


const s3Clinet=new S3Client({
  region: 'us-east-1'
});

// list of bucket 
async function listBucket(){
  try{
    const response= await s3Clinet.send(
      new ListBucketsCommand({})
    );
    //console.log(response);
    //console.log("repsonse",response.Buckets);
    for (let bucket of response.Buckets){
      console.log(bucket.Name);
    }



  }catch(error){
    console.log(error);
  }
}


listBucket();