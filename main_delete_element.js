var full = require("./public/js/database_full_delete");

var ManageDB = require("./public/js/manage_db");

var repo = full.Repo;
var manageDB  = new ManageDB(repo);
console.log( '**** BEFORE DELETE ****' );

console.log( manageDB.toString() );

var id = 6;

//DELETE 
console.log( '**** AFTER DELETE ****' );
console.log( "Updating Delete Element: " + id );


manageDB.deleteElement( id );

console.log( manageDB.toString() );

