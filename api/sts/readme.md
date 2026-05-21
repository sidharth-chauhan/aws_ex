# https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-formats.html

# https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html#aws-resource-iam-role--examples

# create a user with no permissions

we need to create a new user with no permission and generate out acess keys
- https://docs.aws.amazon.com/cli/latest/reference/iam/create-user.html
- https://docs.aws.amazon.com/cli/latest/reference/iam/create-access-key.html#examples

aws iam create-user --user-name new-sts-01
aws iam create-access-key --user-name new-sts-01 --output table

aws configure

# check who you are 
- aws sts get-caller-identity
 
# check permission (- aws s3 ls )
> An error occurred (AccessDenied) when calling the ListBuckets operation

# attach user policy 
- https://docs.aws.amazon.com/cli/latest/reference/iam/put-user-policy.html#examples

aws iam put-user-policy \
    --user-name new-sts-01 \
    --policy-name stsPolicy \
    --policy-document file://policy.json



