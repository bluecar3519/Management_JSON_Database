class ManageDB{

    constructor(data) {
        this.data = data;
        this.found_whole = false; 

        this.result_string = '';
        this.result_array =  new Array();
    }

    setData(val){this.data = val;}
    getData() {return this.data;}

    setFoundWhole(val){this.found_whole= val;}
    getFoundWhole() {return this.found_whole;}

    setResultString(val){this.result_string = val;}
    getResultString() {return this.result_string;}

    setResultArray(val){this.result_array = val;}
    getResultArray() {return this.result_array;}


    findId(){

        var index = 1;

        for(var m=0; m <this.data.length; m++ ){

            var element = this.data[m];

            if(m != element.Id_Number){
                index = m;
                this.found_whole = true;
            }
        }

        if(this.found_whole){
            return index;
        }else if (this.data.length >= 0){
            return this.data.length;
        }else{
            return -1;
        }
        
    }

    pushNew(new_element){

        var new_data = new Array();
        var done = false;

        if(this.data.length == 0){//EMPTY
            new_data.push(new_element);
        }

        for(var m=0; m <this.data.length; m++ ){

            var element = this.data[m];

            if(!done && (new_element.Id_Number == element.Id_Number -1) ){ // NEW ELEMENT PUSH BEFORE  
                new_data.push(new_element);
                new_data.push(element);
                done = true;

            }else if (!done && (new_element.Id_Number  -1 == element.Id_Number) ){//NEW ELEMENT PUSH AFTER
                new_data.push(element);
                new_data.push(new_element);
                done = true;
            }else{//NOT PUSH NEW ELEMENT
                new_data.push(element);
            }

        }

        this.data = new_data;
        
    }

    convert(element, convert_type){

        if( convert_type == "STRING" ){
            this.result_string = this.result_string + element + '\n';
        }

        if(convert_type == "ARRAY" ){
            this.result_array.push(element);
        }

    }

    to(convert_type){

        this.convert('[', convert_type);

        for(var m=0; m <this.data.length; m++ ){

            var element = this.data[m];

            this.convert('{' , convert_type );

            this.convert( '\t Id_Number:' + '"' + element.Id_Number + '",' , convert_type  );
            this.convert( '\t Account_Name:' + '"' + element.Account_Name + '",' , convert_type );
            this.convert( '\t Repository_Name:' + '"' + element.Repository_Name  + '",'  , convert_type );
            this.convert( '\t Branch:' + '"' + element.Branch  + '",'  , convert_type );
            this.convert( '\t Group_Name:' + '"' + element.Group_Name  + '",'  , convert_type );
            this.convert( '\t Technology:' + '"' + element.Technology  + '",' , convert_type );
            this.convert( '\t Languages:' + '"' + element.Languages  + '",' , convert_type );
            this.convert( '\t Start_Date:' + '"' + element.Start_Date  + '",' , convert_type );
            this.convert( '\t Summary :' + '"' + element.Summary  + '",', convert_type);

            if(m <this.data.length -1){
                this.convert( '},' , convert_type );
            }else{
                this.convert( '}' , convert_type );
            }
        }

        this.convert( '];' , convert_type );

    }

    toString(){

        this.result_string = '';

        this.to("STRING");
        return this.result_string;

    }

    toArray(){

        this.result_array = new Array();

        this.to("ARRAY");
        return this.result_array;

    }

    pushUpdate(updated_element){

        for(var m=0; m <this.data.length; m++ ){

            var element = this.data[m];

            if(element.Id_Number == updated_element.Id_Number){
                this.data[m] = updated_element;
            }
        }

    }

    deleteElement(id){

        for(var m=0; m <this.data.length; m++ ){

            var element = this.data[m];

            if(element.Id_Number == id){
                this.data.splice(m,1);
            }
        }

    }

    writeElement(file_path){

        // Import the filesystem module
        const fs = require('fs');
  
        var file_context = '';

        file_context = file_context + 'var Repo = '+ this.toString() ;

        file_context = file_context + '\n';

        file_context = file_context + 'if( typeof module === undefined ){ \n';
        file_context = file_context + '\t var module = { \n';
        file_context = file_context + '\t  \t exports:{ \n';
        file_context = file_context + '\t \t \t Repo:null \n';
        file_context = file_context + '\t \t } \n'
        file_context = file_context + '\t }; \n'
        file_context = file_context + '}; \n'

        file_context = file_context + '\n';
        
        file_context = file_context + 'module.exports.Repo = Repo; \n' ;
  
        fs.writeFileSync(file_path, file_context);
        console.log("File written successfully\n");

    }


}


if( typeof module === undefined ){
    var module = {
        exports:null
    };
};


module.exports = ManageDB;