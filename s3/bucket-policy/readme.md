# create a bucket

- aws s3 mb s3://example-bucket-policy-001

- aws s3api put-bucket-policy --bucket example-bucket-policy-001 --policy file://policy.js

# https://docs.aws.amazon.com/cli/latest/reference/s3api/put-bucket-policy.html#examples
