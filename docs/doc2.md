---
id: doc2
title: Configuration
sidebar_label: Repository
---

This tutorial is about configuration options in octopus. The default options are enough
to get started, but you can configure options so that they suit to your needs and architecture.

All the configuration options of octopus are kept in `application.properties` file in `OCTOPUS_HOME`
Remember to restart octopus after changing the options.


## Repository

Octopus uses a [hibernate](http://hibernate.org/) supported relational database for repository. The default database is embedded into the distribution package. It uses embedded [H2 database](http://www.h2database.com/html/main.html) to store repository information.
when you start octopus you can see `db` folder is automatically created under `OCTOPUS_HOME` this is where the default repository files are kept.

## Changing repository

You can use any relational database that is supported by [hibernate](http://hibernate.org/). Following databases are currently supported;
- DB2
- DB2 AS/400
- DB2 OS390
- FrontBase
- Firebird
- HypersonicSQL
- H2 Database
- Informix
- Ingres
- Interbase
- MySQL5
- MySQL5 with InnoDB
- MySQL with MyISAM
- Mckoi SQL
- Microsoft SQL Server 2000
- Microsoft SQL Server 2005
- Microsoft SQL Server 2008
- Oracle
- Oracle 9i
- Oracle 10g
- Oracle 11g
- PostgreSQL
- Progress
- Pointbase
- SAP DB
- Sybase
- Sybase

To use a different db for repository you need to;

- Edit the `octopus.datasource.url` property in `application.properties` file.
  example;
  ```
  octopus.datasource.url = jdbc:postgresql://host:port/database
  ```
- Set `octopus.jpa.properties.hibernate.dialect` property to the related dialect;
  for example the dialect for [PostgreSQL](https://www.postgresql.org/) is `org.hibernate.dialect.PostgreSQLDialect`
  you can find the dialect list for various databases below.
  example;
  ```
    octopus.jpa.properties.hibernate.dialect = org.hibernate.dialect.H2Dialect
  ```
- Change username and password parameters for new connection;
  example;
  ```
    octopus.datasource.username = my_username
    octopus.datasource.password = my_password
  ```
- Put related JDBC driver under `$OCTOPUS_HOME/libs/` directory
- Restart the application

That is it, now your repository resides in the new db you provided.


### Hibernate dialects

- H2
  ```
  org.hibernate.dialect.H2Dialect
  ```
- PostgreSQL
  ```
  org.hibernate.dialect.PostgreSQLDialect
  ```
- MySQL
  ```
  org.hibernate.dialect.MySQLDialect
  ```
- MySQL with InnoDB
  ```
  org.hibernate.dialect.MySQLInnoDBDialect
  ```
- MySQL with MyISAM
  ```
  org.hibernate.dialect.MySQLMyISAMDialect
  ```
- DB2
  ```
  org.hibernate.dialect.DB2Dialect
  ```
- DB2 AS/400
  ```
  org.hibernate.dialect.DB2400Dialect
  ```
- DB2 OS390
  ```
  org.hibernate.dialect.DB2390Dialect
  ```
- Microsoft SQL Server
  ```
  org.hibernate.dialect.SQLServerDialect
  ```
- Sybase
  ```
  org.hibernate.dialect.SybaseDialect
  ```
- Sybase Anywhere
  ```
  org.hibernate.dialect.SybaseAnywhereDialect
  ```
- Progress
  ```
  org.hibernate.dialect.ProgressDialect
  ```
- SAP DB
  ```
  org.hibernate.dialect.SAPDBDialect
  ```
- Informix
  ```
  org.hibernate.dialect.InformixDialect
  ```
- HypersonicSQL
  ```
  org.hibernate.dialect.HSQLDialect
  ```
- Ingres
  ```
  org.hibernate.dialect.IngresDialect
  ```
- Mckoi SQL
  ```
  org.hibernate.dialect.MckoiDialect
  ```
- Interbase
  ```
  org.hibernate.dialect.InterbaseDialect
  ```
- Pointbase
  ```
  org.hibernate.dialect.PointbaseDialect
  ```
- FrontBase
  ```
  org.hibernate.dialect.FrontbaseDialect
  ```
- Firebird
  ```
  org.hibernate.dialect.FirebirdDialect
  ```
- Oracle (any version)
  ```
  org.hibernate.dialect.OracleDialect
  ```
- Oracle9i
  ```
  org.hibernate.dialect.Oracle9iDialect
  ```
- Oracle10g
  ```
  org.hibernate.dialect.Oracle10gDialect
  ```
