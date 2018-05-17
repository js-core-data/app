# nappjs

NodeJS application stack

[![Build Status](https://travis-ci.org/nappjs/nappjs.svg?branch=master)](https://travis-ci.org/nappjs/nappjs)

# Structure

* schema - folder containing schema versions (if you have )
* plugins (optional) - connect middlewares that are included into rest api
* middlewares (optional) - similar as plugins, but for project specific logic
* seeds (optional) - seed data in folder structure

# Plugins

Plugins can also be load from local and global node_modules. Each module must
have prefix `nappjs-` to be loaded. Loading global modules is disabled by
default, but you can enable it by setting environment variable:
`LOAD_GLOBAL_PLUGINS=true`

There are public plugins you can use right away:

* `nappjs-api` - plugin exposing http interface (expressjs)
* `nappjs-graphql` - plugin exposing http interface with GraphQL interface
* `nappjs-core-data` - `js-core-data` wrapper which can be used to add ORM in your app
* `nappjs-core-data-graphql` - autogenerated GraphQL api from `js-core-data` schema

So for example if you need to create backend app with GraphQL api, simply run:

```
npm install --save nappjs nappjs-core-data-graphql
```

Then you can continue with implementation according to each plugin specifications.

# Installations

This stack aims mainly to containerized deployment, but for local development you can install cli:

`npm install --save nappjs`

# Example

You can see full feature example at [nappjs accounts](https://github.com/nappjs/accounts) service (OAuth2 compliant backend service).
