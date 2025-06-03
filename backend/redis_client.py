import redis

r = redis.Redis(host="db-redis", port=6379, decode_responses=True)

#print(r.ping())
