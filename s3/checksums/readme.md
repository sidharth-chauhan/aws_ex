## Create a new s3 bucket

aws s3 mb s3://checksums-mybucket-ohhhsid-00011

## create a file that will we do checksum on

echo "hello sid" > myfile.txt

## get a checksum of a file for md5

md5 myfile.txt

# MD5 (myfile.txt) = 58fde6192538449293b47f2976f0d03d

## upload our s3 file to s3

- aws s3cp myfile.txt s3://checksums-mybucket-ohhhsid-00011

- aws s3api head-object --bucket checksums-mybucket-ohhhsid-00011 --key myfile.txt
  (for etag since upload does not retrun etag- head of the object only so head-object not get-object )

## lets upload a file with a differnt kind of checksum (crc32,crc32c,sha1,sha256)

- brew install crc32
- crc32 myfile.txt

aws s3api put-object \
 --bucket checksums-mybucket-ohhhsid-00011 \
 --key myfilecrc32.txt \
 --body myfile.txt \
 --checksum-algorithm CRC32 \
 --checksum-crc32 G7dRlw==
