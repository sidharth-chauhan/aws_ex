# aws_ex

AWS_CLI
-commands :- https://docs.aws.amazon.com/cli/latest/



#to see the list of file and there storage and all 
-ls -ls
---------------------------------------------------------------------------------
aws cli install
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
-curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install


-aws sts get-caller-identity 


Aws env:- https://docs.aws.amazon.com/cli/v1/userguide/cli-configure-envvars.html

-export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
-export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
-export AWS_DEFAULT_REGION=us-west-2

-aws s3 ls

autorpomot for aws cli 
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html#envvars-list-aws_cli_auto_prompt

-export AWS_CLI_AUTO_PROMPT=on-partial
-aws 
-aws version
--------------------------------------------------------------------------------

s3  - is high level and we can do work on s3api as well but might not have all the feat as s3 
for env check 
-env | grep AWS_
-env | grep AWS_CLI

remove add backet 
-aws s3
-aws s3 ls
-aws s3 rm s3://prescription-images-dev --recursive   // delete inside first 
-aws s3 rb s3://prescription-images-dev     //remove bucket


#s3 api :- https://docs.aws.amazon.com/cli/latest/reference/
-aws s3api
-aws s3api create-bucket --bucket prescription-images-dev-main or also --region </val>
-aws s3api list-buckets
#if want list in yaml 
-aws s3api list-buckets --output yaml



#upload folder  -> sync 
-aws s3 sync images s3://prescription-images-dev-main     // copy image folder to s3 bucket 

#download -> get-object
-aws s3api get-object --bucket prescription-images-dev-main --key image.txt hello.txt 
//download image.txt form s3 bucket and put in hello.txt -> confirm with "ls -ls" 




