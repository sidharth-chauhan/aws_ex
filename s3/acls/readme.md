# create a new bucket

- aws s3api create-bucket --bucket acl-test-example-001 --region us-east-1

# acl -> we can do stuff from different aws accounts

## turn off block public acess for acls

# https://docs.aws.amazon.com/cli/latest/reference/s3api/put-public-access-block.html

aws s3api put-public-access-block \
 --bucket acl-test-example-001 \
 --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=true,RestrictPublicBuckets=true"

# get public access block info

aws s3api get-public-access-block \
 --bucket acl-test-example-001

# change bucket ownership

aws s3api put-bucket-ownership-controls \
 --bucket acl-test-example-001 \
 --ownership-controls="Rules=[{ObjectOwnership=BucketOwnerPreferred}]"

- now change the acls from console or cli use json .

# https://docs.aws.amazon.com/cli/latest/reference/s3api/put-bucket-acl.html

# command to run to acess form other file

- aws s3 ls s3://acl-test-example-001
  if no error then good to go (create,delete,...)
