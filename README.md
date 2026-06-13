# shortosaur

## Overview

Shortosaur is a simple URL shortening app.

Down to the tech! It is comprised of;

- A mini vanilla JS webapp on `/app`,
- an express js server as an API,
- and it uses MongoDB!

## Dependencies

- NodeJS/NPM
- Docker (Optional)

## Quick Start

### MongoDB

Shortosaur needs a mongodb instance with a user and database setup.

Something simple like this will do;

```js
// Use database.
use shortosaur;

// Create shortosaur user.
db.createUser({ user: "shortosaur", pwd: passwordPrompt(), roles: ["readWrite"] });
```

### Docker

Build this repo using `docker build -t shortosaur .`

or

Pull from Docker Hub `docker pull danrelvas/shortosaur:latest`.

Then run the image like so;

```sh
docker run --name shortosaur \
  -p 3000:3000 \
  -e APP_ORIGIN='http://<hostname>:3000' \
  -e MONGO_URI='mongodb://<user>:<password>@<hostname>:27017/shortosaur?directConnection=true' \
  -d shortosaur;
```

`APP_ORIGIN` will inform which hostname the app is running on, you can leave this a localhost and reverse proxy it or directly bind to 80 for example. Ensure you update `-p 80:3000` too if you do.

`MONGO_URI` informs shortosaur where to find the mongodb instance it should use and should be a standard MongoDB URI.

### Local Dev or a server

1. Do an `npm i`.

2. `cp .env.example .env` and fill this in, you can ignore or delete the docker config.

3. Run `npm run dev` for a nodemon process to do local dev or setup a process watcher for `npm run start` on a server

### Docker Compose

Where you might want to run the entire stack locally in docker, I have a docker compose yml with the MongoDB image included;

1. Clone the repo.

2. Do an `npm i`.

3. Do a `cp .env.example .env`, the DockerFile will copy this in as `.env`.

4. Fill in the `.env`, making sure that the docker config and app config match.

5. Do run docker compose as you usually do, something like so `docker compose up --build -d`.
