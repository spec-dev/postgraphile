# Spec Postgraphile Server

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
$ bin/start
```