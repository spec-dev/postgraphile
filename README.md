# Instant GraphQL API

Create an instant GraphQL API from your Spec-enabled Postgres database.

## Running Locally

1. Set the following environment variables:
```bash
export DATABASE_URL=postgres://username:password@localhost:5432/database
export HOST=localhost
export PORT=5555
```

2. Install Postgraphile and plugins:
```bash
$ bin/install
```

3. Start Postgraphile locally:
```bash
$ bin/run
```

## License

MIT