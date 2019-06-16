# 1. What's this?
Simple nodejs based development server for mocking server API

# 2. Install
At one point I have to install a proper way to get the server going but for now it's started manually

1. Clone from github using your favorite IDE or CLI
2. Install dependencies
```bash
yarn install
```
3. Compile code
```bash
yarn run tsc
```

4. Run server
```bash
node build/app
```

# 3. Structure
* src - folder for the source code
    * entities - typeOrm entities for use with SqlLite
    * interfaces - interfaces
    * middlewares - all the middleware functions that can be used
    * routes - route files.
    * controllers - controller classes for handling requests
    * migration - migration scripts for typeOrm
* database.sqllite - database
* ormconfig.json - ormType config
* tsconfig.js - config file for typescript