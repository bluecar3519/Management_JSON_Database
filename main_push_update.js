var full = require("./public/js/database_full");

var ManageDB = require("./public/js/manage_db");

var repo = full.Repo;
var manageDB  = new ManageDB(repo);

//Update 
console.log( "Updating Element Id: " + repo[1].Id_Number );

repo[1].Account_Name = "John Cusey Sandbox";
repo[1].Repository_Name = "StartupFunction";
repo[1].Branch = "version1";
repo[1].Group_Name ="Startup";
repo[1].Technology ="Content Management";
repo[1].Languages ="JavaScript";
repo[1].Start_Date ="2022-0814";
repo[1].Summary = "Protype test technology";

manageDB.pushUpdate( repo[1] );

console.log( manageDB.toString() );

