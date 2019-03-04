## DEVNOTES & Edit Log

```
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