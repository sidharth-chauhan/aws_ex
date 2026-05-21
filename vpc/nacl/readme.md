# get vpc id (name of the vpc project-vpc)

aws ec2 describe-vpcs \
--filters "Name=tag:Name,Values=project-vpc" \
--query 'Vpcs[0].VpcId' \
--output text

## create nacl

aws ec2 create-network-acl --vpc-id vpc-00453b05e3f34686a

# add entry

aws ec2 create-network-acl-entry \
 --network-acl-id acl-07d9e421a4a3aa82f \
 --ingress \
 --rule-number 90 \
 --protocol -1 \
 --port-range From=0,To=65535 \
 --rule-action deny \
 --cidr-block 49.43.116.105/32

# get the ami id for amazon linux 2 (ec2)

aws ssm get-parameters \
--names /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 \
--query 'Parameters[0].Value' \
--output text
