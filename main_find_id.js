console.log("PROGRAM STARTED");

var begin = require("./public/js/database_begin");
var middle = require("./public/js/database_middle");
var end = require("./public/js/database_end");

var full = require("./public/js/database_full");
var empty = require("./public/js/database_empty");

var ManageDB = require("./public/js/manage_db");

var repo = begin.Repo;
var manageDB  = new ManageDB(repo);

//console.log(JSON.stringify(manageDB.getData()));

console.log( "Begin: " + manageDB.findId() + " Found Whole: "  + manageDB.getFoundWhole());


var repo = middle.Repo;
var manageDB  = new ManageDB(repo);

//console.log(JSON.stringify(manageDB.getData()));

console.log( "Middle: " + manageDB.findId() + " Found Whole: "  + manageDB.getFoundWhole());


var repo = end.Repo;
var manageDB  = new ManageDB(repo);

//console.log(JSON.stringify(manageDB.getData()));

console.log( "End: " + manageDB.findId() + " Found Whole:"  + manageDB.getFoundWhole());


var repo = full.Repo;
var manageDB  = new ManageDB(repo);

//console.log(JSON.stringify(manageDB.getData()));

console.log( "Full: " + manageDB.findId() + " Found Whole: "  + manageDB.getFoundWhole());

var repo = empty.Repo;
var manageDB  = new ManageDB(repo);

//console.log(JSON.stringify(manageDB.getData()));

console.log( "Empty: " + manageDB.findId() + " Found Whole: "  + manageDB.getFoundWhole());


console.log("PROGRAM ENDED");