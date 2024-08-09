

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

var uiController;

window.onload = function (e) {
    uiController = new UIController;
}