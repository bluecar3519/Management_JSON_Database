console.log("PROGRAM STARTED");

var begin = require("./public/js/database_begin");
var middle = require("./public/js/database_middle");
var end = require("./public/js/database_end");

var full = require("./public/js/database_full");
var empty = require("./public/js/database_empty");

var ManageDB = require("./public/js/manage_db");

var repo = middle.Repo;
var manageDB  = new ManageDB(repo);

//console.log(JSON.stringify(manageDB.getData()));

console.log( "Middle: " + manageDB.findId() + " Found Whole: "  + manageDB.getFoundWhole());

var element = {};

element.Id_Number = manageDB.findId();
element.Account_Name = "Account" ;
element.Repository_Name = "Repository_Name";
element.Branch = "Branch";
element.Group_Name = "Group_Name"; 
element.Technology = "Technology" ;
element.Languages = "Languages" ;
element.Start_Date = "Start_Date";
element.Summary = "Summary" ;

manageDB.pushNew(element);

//console.log(JSON.stringify(manageDB.getData()));

console.log( manageDB.toString() );


console.log("PROGRAM ENDED");