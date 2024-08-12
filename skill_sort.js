class FileProcessor{
    constructor(){
        this.file = new File([], "none");
        this.file_content = "";
        this.file_changed_callback = function(e) {
            console.log("file changed default");
        };

        let self = this;

        this.file_input = document.getElementById("input-file");
        this.file_input.addEventListener(
            "change", 
            function(e) {
                self.select_file(self, e);
            },
            false
        );
    }

    select_file(self, event){
        self.file = event.target.files[0];

        const fileReader = new FileReader();
        fileReader.onload = function(e){
            self.file_content = e.target.result;
            self.file_changed_callback();
        }
        fileReader.readAsText(self.file);
    }

    get_file_contents(){
        return this.file_content;
    }

    set_file_changed_callback(callback){
        this.file_changed_callback = callback;
    }

}

var fileProcessor;

window.onload = function (e) 
{
    fileProcessor = new FileProcessor();

}