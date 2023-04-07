FROM node:16-alpine

RUN npm install -g postgraphile@4.12.8 @graphile-contrib/pg-simplify-inflector@6.1.0

COPY .postgraphilerc.js .

EXPOSE 80

ENTRYPOINT ["postgraphile",  "--retry-on-init-fail", "--no-setof-functions-contain-nulls", "--no-ignore-rbac", "--legacy-relations", "omit"]