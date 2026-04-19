terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.41.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "default" {
  bucket = "my-tf-demo-bucket-sidharth-001"
}

resource "aws_s3_object" "object" {
  bucket = aws_s3_bucket.default.bucket
  key    = "file1.txt"
  source = "../../hello.txt"


  etag = filemd5("../../hello.txt")
}

# without etag terraform will not know if the file has changed or not and will not update the object in s3 bucket. with etag terraform will compare the etag value with the current etag value of the object in s3 bucket and if they are different then it will update the object in s3 bucket.
