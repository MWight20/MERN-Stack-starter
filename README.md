# MERN-boilerplate
A MERN boilerplate code/starting template to use for Full-Stack React JavaScript web projects

This boilerplate code is configured with: 
 - [React.js]
 - [Webpack]
 - [Babel]
 - [Express.js]
  
## Requirements

- [Node.js]

```shell
npm install
```

## Running
```
npm start
```


## About DB connection
- [MySQL]
```
How to connect a MySQL database:
- create a file named config.js inside of './config'
- config.js should export a js object that contains connection information. 
    -(example file located  './config/config.sample.js')

- in 'server/routes/api/' create a js file to make your sql database call.     -(example of db connection in 'server/routes/mysql.js')
        -> create connection variable 
        -> connection.connect() 
        -> query via api function

```