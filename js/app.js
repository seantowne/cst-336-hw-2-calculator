
function enter_button_was_clicked(){
    alert("enter was clicked");
}

function handle_button_click(button){
    alert(button.val());
}
alert("wtf");
$("#=").on("click", function(){
    alert($(this).val())
    handle_button_click($(this));
})