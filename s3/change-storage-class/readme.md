# create a bucket

- aws s3 mb s3://sidharth-test-file-0098

# create a file

echo "Hello sidharth" > hello.txt
aws s3 cp hello.txt s3://sidharth-test-file-0098 --storage-class STANDARD_IA

STANDARD_IA, STANDARD AND ALL ...

# cleanup

aws s3 rm s3://sidharth-test-file-0098/hello.txt
aws s3 rb s3://sidharth-test-file-0098
