## DEVNOTES & Edit Log
```
4/7/2019:
   > Configured stack template for mysql DB use
   > Tested DB connection -> success!

4/1/2019 -> 4/4/2019:
   > 4/1 -> Added 'request' npm package to code functionality for server api and client fetch calls

   > 4/1-4/3 -> Wrote and tested code to run API over backend
      >> Server and client both working serparately, however not communicating properly. 
      >> Client only receives index.html instead of intended JSON from server.

   > 4/4 -> Resolved issue regarding failure to communicate between server and client -- NOW WORKS!
      >> Problem lied in the webpack.config.js script: proxy was not in place for the server api
      >> Resulted in a lack of a communication bridge between Express server and React client.

3/12/2019:
   > css-loader configured: Can aquire css stylesheets correctly within index.js

3/1/2019:

   > Webpack and Babel installed and configured for app
   > React installed and configured for app

3/2/2019:
   > Express.js installed
   > Added concurrent running scripts for React & Express (client/server)
   > Routing for server's startup integrated to run and render client
   > Adjusted file structures
      >> Client and Server have separated folders 
      >> Api folder for custom routes

3/3/2019:
   > Restructured client folder to contain 'App/components/component.js' structure
   > React-Router configured and custom url routing with components is functional
      >> fixed issue with routing. All other paths but first '/' path wouldn't return GET/URL. 
      >> Adding DevServer: { historyApiFallback: true } to Webpack fixed the problem.
```