// var connection = require("./connection.js");

// function objToSql(ob) {
//     var arr = [];
//     for (var key in ob) {
//         if (ob.hasOwnProperty(key)) {
//             arr.push(key + '=' + ob[key]);
//         }
//     }
//     return arr.toString();
// }

// var orm = {
//     selectAll: function (tableInput, cb) {
//         var queryString = 'SELECT * FROM ' + tableInput + ';';
//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         })
//     },

//     updateOne: function (tableInput, objColVals, condition, cb) {
//         var queryString = 'UPDATE ' + tableInput;

//         queryString = queryString + ' SET ';
//         queryString = queryString + objToSql(objColVals);
//         queryString = queryString + ' WHERE ';
//         queryString = queryString + condition;
//         // console.log(condition);

//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },
    
//     insertOne: function (tableInput, burger_name, cb) {
//         var queryString = "INSERT INTO " + tableInput + " (burger_name) VALUES ('" + burger_name + "')";
//         console.log(queryString);
//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },
// };

// module.exports = orm;