/* 
 * Student Info: Name=Ruchit Chokshi, ID=14452cr
 * Subject: CourseNoCS557_HW_4_Fall_2015
 * Author: Ruchit
 * Filename: Mydatabase.js
 * Date and Time: Nov 30, 2015 10:18:16 PM
 * Project Name: HW_4
 */

var mysql = require('C:\\nodejs\\node_modules\\mysql');
var util = require('util');

module.exports = {
    connection: null,
    // Create a database connection
    connectDB: function () {
        var connectionConfig = {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'contactdb'
        };
        connection = mysql.createConnection(connectionConfig);
        util.log('connection::connecting...');
        connection.connect(function (err) {
            util.log('connection::connected');
        });
    },
    // Get users
    getUsers: function (res, callback) {
        connection.query('SELECT * FROM User', function (err, rows, fields) {
            if (err)
                throw err;

            var users = [];
            rows.forEach(function (row) {
                var user = {LastName: row.LastName, FirstName: row.FirstName};
                users.push(user);
            });

            util.log('getUsers: ' + users);
            callback(res, users);
        });
    },
    // Add user
    insertUser: function (firstname, lastname, emailaddress) {
        var user = {FirstName: firstname, LastName: lastname, EmailAddress: emailaddress};
        connection.query('INSERT INTO User SET ?', user, function (err, results) {
            if (err)
                throw err;

            util.log('insertUser: ' + results);
        });
    },
    updateUser: function (firstname, lastname, emailaddress, userid) {
        var user = {FirstName: firstname, LastName: lastname, EmailAddress: emailaddress};
        connection.query('UPDATE User SET ? WHERE UserID = ?', [user, userid], function (err, results) {
            if (err)
                throw err;

            util.log('updateUser: ' + results);
        });
    },
    deleteUser: function (userid) {
        connection.query('DELETE FROM User WHERE UserID = ?', userid, function (err, results) {
            if (err)
                throw err;

            util.log('deleteUser: ' + results);
        });
    },

    // Get users
    getUser: function (res, emailAddress, callback) {
        connection.query("SELECT * FROM User WHERE EmailAddress = ?", emailAddress, function (err, rows, fields) {
            if (err)
                throw err;

            var users = [];
            rows.forEach(function (row) {
                var user = {UserID: row.UserID, LastName: row.LastName, FirstName: row.FirstName, EmailAddress: row.emailAddress};
                users.push(user);
                //return true;
            });

            util.log('getUser: ' + users);
            callback(res, users);
        });
    }

};

