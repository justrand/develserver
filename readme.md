# 1. What's this?
Simple nodejs based development server for mocking server API

# 2. Install

1. Clone from github using your favorite IDE or CLI
2. Install dependencies
```bash
yarn install
```
3. Run server
```bash
yarn start:dev
```
When server is running, modifying the files will cause webpack to rebuild and relaunch the server

# 3. Structure
Source code is in src folder. It's divided into loose MVC structure with controllers being in their own folders in src/controllers. Each controller is for handling routes and they're inherited from RootController (root.ts)