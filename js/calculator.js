// Calculator.js
// Sean Towne
function evaluate_expression(){
    $.ajax({
        method: "GET",
        url: "https://cst-336-hw-2-calculator.herokuapp.com/evaluate/",
        dataType: "text",
        data: {"expression":$("#expression").val()},
        success: function(result, status){
            $("#expression").val(result);
        }
    });
}

function append_expression(value){
    $("#expression").val($("#expression").val()+value);
}

function handle_button_click(button){
    console.log(button[0].id);
    if ( button.id == "one" ){
        append_expression("1");
    }
}

$(":button").each(function(index, value){
    $(this).on("click", function(){
        handle_button_click($(this));
    });
})

