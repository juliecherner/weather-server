# Weather server

## Objective: server that recieves name of a city and sends back temperature in that city

## Technologies used:

- Typescript
- Node with Express
- Redis
- Docker
- Doppler

According to requirements, application is developed for develoment environment _only_.

## Technologies and application flow:

Used:

- Typescript
- Node and Express
- Helmet for headers security
- Disabled cors (temporarily)
- Husky, Eslint, Prettier
- Redis
- Docker

POST route is created:

```
http://localhost:8080/api/current-temperature
```

_POST request body example:_

```ts
{
	"name": "Paris"
}
```

City name validation:

- only letters, spaces, dashes
- API accepts cities with typos, does autocomplete, accepts in lower case as well.

City name is searched in Redis, only in case if it is not found, request is made to external API and saved in Redis (5 min ttl).
Feature is implemented to reduce amount of external API calls with multiple server users.

### External API - Weather API for current moment <https://api.weatherapi.com/v1/current.json>

Full requets parameters list avaible in **[docs](https://www.weatherapi.com/docs/)**

In the current project as request used: personal API key (_key_) and city name (_q_).

Auto language is English, no need to configure it.

### Run project

```
docker compose up -d
```

POST request in Postman (normal case):

URL

```
POST http://localhost:8080/api/current-temperature

```

Body

```
{
	"name": "Paris"
}

```

Result

```
{
    "cityName": "Paris",
    "temperatureC": 18,
    "temperatureF": 64.4,
    "feelsLikeC": 18,
    "feelsLikeF": 64.4
}
```
