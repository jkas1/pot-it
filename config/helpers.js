const Mysqli = require("mysqli");

// Pass in json
let conn = new Mysqli({
  host: "us-cdbr-east-03.cleardb.com", // IP/domain name
  post: 3306, //port, default 3306
  user: "bf8c3bed3edb43", //user name
  passwd: "628c87a4", //password
  db: "heroku_e9fab6427cee7e7", // You can specify the database or not [optional]
});

let db = conn.emit(false, "");

module.exports = {
  database: db,
};
