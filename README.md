## Social media sample project

## database setup

```shell
$ mysql -u root
```

```mysql
create database cbsocialmediadb;

create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';

grant all privileges on cbsocialmediadb.* to cbsocialuser;

flush privileges;
```

## project structure

```shell
D:\SOCIAL-MEDIA-PROJECT\SRC
├───controllers               # function to connect routes to db operation
├───db                        # db connection and model definitions
├───public                    # html/css/js files for static part of site
└───routes                    # express middleware (route wose)

```
