// Calculator.js
// Sean Towne
function evaluate_expression(){
    $.ajax({
        method: "GET",
        url: "https://cst-336-hw-2-calculator.herokuapp.com/evaluate/",
        dataType: "text",
        data: {"expression":$("#expression").val()},
        success: function(result, status){
            console.log(result);
            if ( !result || result.length == 0){
                $("#expression").val("error");
                return;
            }
            r = result.split('"')[1];
            $("#expression").val(r);
        },
        error: function(status, error){
            $("#expression").val("error");
        }
    });
}

function append_expression(value){
    $("#expression").val($("#expression").val()+value);
}

function handle_button_click(butt){
    var button = butt[0];
    if ( button.id == "eval"){
        evaluate_expression();
        return;
    }
    if ( button.id == "clear" ){
        $("#expression").val("");
        return;
    }
    append_expression(button.value);
}

$(":button").each(function(index, value){
    $(this).on("click", function(){
        handle_button_click($(this));
    });
});

$('#expression').keypress(function(event){
    if(event.keyCode == '13'){
        evaluate_expression();
    }
});