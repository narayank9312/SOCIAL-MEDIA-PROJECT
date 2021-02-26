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

## business logic

### users

1. **create users**
   this will create a new user with a random username

### posts

1 **create posts**
this will create a new post, required fieldare
-username (the author of this posts)
-title
-body

2.  **show all posts**

    list all existing posts, we should have
    following filtering support

    -filter by username
    -filter by query contained in title (search by title)

3.  **edit posts** `tbd`

4> **delete posts** `tbd`

### comments

1. **show all comments (of a user)**

2 **show all comments (under a posts)**

3 **add a comments**
