var full = require("./public/js/database_full");

var ManageDB = require("./public/js/manage_db");

var repo = full.Repo;
var manageDB  = new ManageDB(repo);


manageDB.writeElement("database_write.txt");
