
function enter_button_was_clicked(){
    alert("enter was clicked");
}

function handle_button_click(button){
    alert(button.val());
}

$(":button").each(function(index, value){
    $(this).on("click", handle_button_click($(this)));
})

