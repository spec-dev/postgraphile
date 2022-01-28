FROM node:14-alpine

# Install PostGraphile and PostGraphile connection filter plugin
RUN npm install -g postgraphile@4.12.8
RUN npm install -g @graphile-contrib/pg-simplify-inflector@6.1.0

COPY .postgraphilerc.js .

EXPOSE 80

ENTRYPOINT ["postgraphile", "--subscriptions", "--retry-on-init-fail", "--no-setof-functions-contain-nulls", "--no-ignore-rbac", "--legacy-relations", "omit"]