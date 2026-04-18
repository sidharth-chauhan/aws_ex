import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "ap-south-1"
});

async function main() {
  const data = await client.send(new ListBucketsCommand({}));
  console.log(data);
}

main();