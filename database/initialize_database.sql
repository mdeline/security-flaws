/* Roles */

-- Connecting to the databse
create role db_connect with
    nologin
    nosuperuser
    inherit
    nocreatedb
    nocreaterole
    noreplication
;

-- Read privileges
create role db_reader with
    nologin
    nosuperuser
    inherit
    nocreatedb
    nocreaterole
    noreplication
;

-- Write privileges
create role db_writer with
    nologin
    nosuperuser
    inherit
    nocreatedb
    nocreaterole
    noreplication
;

-- Readers and writers can automatically connect
grant db_connect to db_reader, db_writer;

/* Users */

-- Database manager
create role db_manager with
    login
    nosuperuser
    inherit
    nocreatedb
    nocreaterole
    noreplication
;

-- Application user
create role db_appuser with
    login
    nosuperuser
    inherit
    nocreatedb
    nocreaterole
    noreplication
;

-- Passwords
alter user db_manager password 'manager';
alter user db_appuser password 'appuser';

-- Database manager & application user can read and write the databse
grant db_reader, db_writer to db_manager, db_appuser;

/* Create database */
create database securityflawsprod
    with owner = db_manager
    encoding = 'UTF8'
    lc_collate = 'en_US.UTF-8'
    lc_ctype = 'en_US.UTF-8'
    tablespace = pg_default
    connection limit = -1;

grant connect on database securityflawsprod to db_connect;
grant all on database securityflawsprod to db_manager;

/* Schema */
create schema if not exists securityflaws authorization db_manager;

-- Privileges
grant all on schema securityflaws to db_manager;
alter default privileges in schema securityflaws grant all on sequences to db_manager;
alter default privileges in schema securityflaws grant select, insert, delete, update, truncate on tables to db_manager;
grant usage on schema securityflaws to db_reader, db_writer;
grant select on all sequences in schema securityflaws to db_reader;
grant usage, select on all sequences in schema securityflaws to db_writer;

alter default privileges in schema securityflaws grant select on tables to db_reader, db_writer;
alter default privileges in schema securityflaws grant select on sequences to db_writer;
alter default privileges in schema securityflaws grant usage, select on sequences to db_writer;
alter default privileges in schema securityflaws grant insert, delete, update on tables to db_writer;

/* Create Tables */

create table securityflaws.subscriber
(
    id serial not null,
    name varchar(50) not null,
    email varchar(50) not null,
    constraint user_pk primary key (id)
);

/* Populate subscriber */
insert into securityflaws.subscriber(name, email) values('Naomi Nagata', 'chief.engineer@tycho.com');
insert into securityflaws.subscriber(name, email) values('Amos Burton', 'amos@rocinante.spac');
insert into securityflaws.subscriber(name, email) values('Roberta Draper', 'bobbie@mars.com');