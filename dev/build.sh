#!/usr/bin/env bash

context=$(cd $(dirname $0)/..; pwd)
imgName=ewaight/isi-web
imgFullName=${imgName}:latest

docker build ${context} -t ${imgFullName}
docker push ${imgFullName}
