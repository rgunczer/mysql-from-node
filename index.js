const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'password',
    database: 'tcshr'
});

console.log('connecting...');
connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM `users`', (error, results, fields) => {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
    console.log(error);
    console.log(results);
    console.log(fields);
});

connection.end(err => {
    console.log('The connection is terminated now');
});
