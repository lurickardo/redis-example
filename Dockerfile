FROM alpine:latest

RUN apk add --no-cache redis

RUN echo "requirepass guest" > /etc/redis.conf

EXPOSE 6379

CMD ["redis-server", "/etc/redis.conf"]

# Util commands
# docker build -t server-redis .
# docker run --name container-redis -d -p 6379:6379 server-redis
# docker start container-redis
