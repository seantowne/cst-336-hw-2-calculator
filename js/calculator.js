
$.ajax({
   method: "GET",
   url: "https://cst-336-hw-2-calculator.herokuapp.com/expression",
   dataType: "text",
   data: "1+1",
   success: function(result, status){
       console.log(result);
   }
});



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

