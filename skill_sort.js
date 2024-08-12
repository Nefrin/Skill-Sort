class FileInputHandler{
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

/**
 * @param text the text that represents the actual item
 * @param tree array of path elements that lead to the item 
 */
class ListItem{
    constructor(text, tree){
        this.text = text;
        this.tree = tree;
    }
}

class FileParser {
    parseFile(data){
        let items = Array();
        const lines = data.split("\n");
        for(var line in lines){
            if(lines[line].trim().length > 0){
                const datum = lines[line].trim();
                items.push(new ListItem(datum, [datum]));
            }
        }
        return items;
    }
}

var fileInputHandler;

window.onload = function (e) 
{
    fileInputHandler = new FileInputHandler();
    fileInputHandler.set_file_changed_callback(function(e){
        console.log("log");
        const parser = new FileParser();
        let data = parser.parseFile(fileInputHandler.get_file_contents());
        console.log(data);
    });

}