const { Fcal } = require('fcal');
const fcal = new Fcal();
alert(fcal.evaluate("1+1"));
function enter_button_was_clicked(){
    alert("enter was clicked");
}

function handle_button_click(button){
    alert(button.val());
}

$(":button").each(function(index, value){
    $(this).on("click", function(){
        handle_button_click($(this));
    });
})

