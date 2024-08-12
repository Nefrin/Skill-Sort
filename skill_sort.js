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

class UIController
{
    
    constructor()
    {
        this.left_callback = function (e) { console.log("left default"); };
        this.right_callback = function (e) { console.log("right default"); };

        this.left_button = document.getElementById("left_option");
        this.left_button_text = document.getElementById("left_option_text");
        this.left_button.addEventListener("click", this.left_callback);

        this.right_button = document.getElementById("right_option");
        this.right_button_text = document.getElementById("right_option_text");
        this.right_button.addEventListener("click", this.right_callback);
    }

    set_left_callback(callback){
        this.left_callback = callback;
    }

    set_right_callback(callback){
        this.right_callback = callback;
    }

    set_left_text(text){
        this.left_button_text.textContent = text;
    }

    set_right_text(text){
        this.right_button_text.textContent = text;
    }

}