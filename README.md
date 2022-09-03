# Management_JSON_Database

# File Structure 
* **Manage DB** - Is the class that does CRUD operations on the JSON.  
* **Main** - The JavaScripts starting with **main** are using the write the **manage_db.js** class.
* **Database** - The JavaScripts starting with **database** are using store the JSON.

# Variables
* **data** - using store the JSON
* **found_whole** - The **Id_Number** are stored in ascending order. If there is space in front or in middle of the array this variable set to true. 
* **result_string** - Stores JSON in a string.
* **result_array** - Stores JSON in a array.

# Methods 
* **findId()** - Finds the **Id_Number** where the New JSON should be stored in the array. 
* **pushNew(new_element)** - You need to set the **Id_Number** before using this method. Uses the **findId()** to get the **Id_Number** 
* **convert(element, convert_type)** - Helper Method. **element** is line of the JSON to be added. **convert_type** is "STRING" or "ARRAY" 
* **to(convert_type)** - Helper Method. **convert_type** is "STRING" or "ARRAY" 
* **toString()** - Convert to string. 
* **toArray()** - Convert to array. 
* **pushUpdate(updated_element)** - Updates the JSON in the array.
* **deleteElement(id)** - Deletes the JSON in the array.
* **writeElement(file_path)** - **file_path** is the location of the database include the file name. This saves the database any changes. 
