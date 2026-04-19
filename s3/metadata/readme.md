## create a bucket

- aws s3 mb s3://metadata-sid-bucket-001

# https://docs.aws.amazon.com/cli/latest/reference/s3api/put-object.html

# create a new file

- echo "Hello metadata" > hello.txt

## upload file

- aws s3api put-object --bucket metadata-sid-bucket-001 --key hello.txt --body hello.txt --metadata Planet=Earth

# get metadata through head object

- aws s3api head-object --bucket metadata-sid-bucket-001 --key hello.txt
