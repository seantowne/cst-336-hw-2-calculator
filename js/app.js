
function enter_button_was_clicked(){
    alert("enter was clicked");
}

function handle_button_click(){
    alert(this.val());
}

$("#=").on("click", handle_button_click())