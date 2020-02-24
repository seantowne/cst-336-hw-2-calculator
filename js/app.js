
function enter_button_was_clicked(){
    alert("enter was clicked");
}

function handle_button_click(button){
    alert(button.val());
}

$("#eval").on("click", function(){
    alert($(this).val())
    console.log("hello")
    handle_button_click($(this));
})