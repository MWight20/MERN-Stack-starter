var sql = require('mysql');
var db = require('../../../config/config');

module.exports = (app) => {
    
    //Configure SQL Connection properties
    const connection = sql.createConnection({
        host: db.conn.host,
        user: db.conn.user,
        password: db.conn.password,
        database: db.conn.database,
        insecureAuth : true
    })

    //Establish and test SQL Connection
    connection.connect((function(err) {
        if (err) {
            console.error('Error connection: ' + err.stack);
            return;
        }   
        console.log('Connected to MySQL db as id ' + connection.threadId);
    }));

    //SQL Query APIs
    app.get('/dbtest', (req, res) =>
    {
        connection.query('SELECT * from database', function (error, results) {
            if (error) throw error;
            console.log(results);
            res.send(results);
        });
    });
}