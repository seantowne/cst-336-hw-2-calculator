
function enter_button_was_clicked(){
    alert("enter was clicked");
}

function handle_button_click(button){
    alert(button.val());
}



for ( var b in $(":button") ){
    b.on("click", function(){ handle_button_click(b); });
}