# create a bucket

- aws s3 mb s3://sidharth-test-file-0098

#create a file

echo "Hello sidharth" > hello.txt

aws s3 cp hello.txt s3://sidharth-test-file-0098
