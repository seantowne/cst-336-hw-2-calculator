
function enter_button_was_clicked(){
    alert("enter was clicked");
}

function handle_button_click(button){
    alert("hello");
}

$(":button").on("click", handle_button_click($(this)) );
