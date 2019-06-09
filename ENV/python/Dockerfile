FROM python:alpine

WORKDIR /usr/src/app/python

#COPY file app.py to WORKDIR
COPY ./app.py ./

RUN pip install flask pytz

RUN apk upgrade --update \
    && apk add bash tzdata curl wget ca-certificates \
    && ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
    && echo "Asia/Bangkok" > /etc/timezone \
    && rm -rf /var/cache/apk/*