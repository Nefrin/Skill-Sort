class FileProcessor{
    constructor(){
        this.file_change_callback = function(e) { console.log("File Change default"); };
        this.file_input = document.getElementById("input-file");
        this.file_input.addEventListener("change", this.select_file, false);
    }

    select_file(){
        console.log("File Change");
        this.file_change_callback();
    }

    get_file_contents(){

    }

}

var fileProcessor;

window.onload = function (e) 
{
    fileProcessor = new FileProcessor();


}