grant usage on schema public to read;
grant select on all tables in schema public to read;
grant select on all sequences in schema public to read;
grant execute on all functions in schema public to read;
alter default privileges in schema public grant select on tables to read;
alter default privileges in schema public grant select on sequences to read;
alter default privileges in schema public grant execute on functions to read;