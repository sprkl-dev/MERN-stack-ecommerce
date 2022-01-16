#!/bin/sh

docker ps -f "name=mongo-example" | grep -c "mongo-example" || {
  docker rm mongo-example ; docker run -dp 27017:27017 --name mongo-example mongo
}
