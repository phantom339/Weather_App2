resource "aws_s3_bucket" "example" {
  bucket = "my-tf-weather-bucket"

  tags = {
    Name        = "Weather@bucket"
    Environment = "Dev"
  }
}