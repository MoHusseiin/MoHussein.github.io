$(function(){
    $("#booking").submit(function (event) {

        isSubmit = true;
        const username = $("#username").val();
        const street = $("#street").val();
        const states = $("#states").val();
        const zip = $("#zip").val();
        const how = $("#how").val();
        const taxi = $(":radio:checked").val();
        // const extras = $("input[type='checkbox']").val();
        const extras = $('input[name="extras"]:checked').val();

        $("#error").empty();

        if(username === 'null' || username === 'undefined'){
            addError("Username can not be null or undefined.");
            // error.append("<p>You must check one extra.</p><br/>");
            isSubmit = false;
        }

        if(street === 'null' || street === 'undefined'){
            addError("Street can not be null or undefined.");
            // error.append("<p>You must check one extra.</p><br/>");
            isSubmit = false;
        }

        if(states === '-1'){
            addError("Choose State.");
            // error.append("<p>You must check one extra.</p><br/>");
            isSubmit = false;
        }

        if(how < 1){
            addError("Yor can not book less than 1 seat.");
            // error.append("<p>You must check one extra.</p><br/>");
            isSubmit = false;
        }
        if(how >= 200){
            addError("Yor can not book more than 200 seats.");
            // error.append("<p>You must check one extra.</p><br/>");
            isSubmit = false;
        }

        if(taxi === undefined){
            addError("Yor must select taxi type.");
            // error.append("<p>You must check one extra.</p><br/>");
            isSubmit = false;
        }

        if(extras === undefined){
            addError("Yor must select taxi type.");
            // error.append("<p>You must check one extra.</p><br/>");
            isSubmit = false;
        }

        if(!isSubmit){
            event.preventDefault();
        }

    });

    function addError(errMsg) {
        $("#error").append("<p>"+errMsg+"</p><br/>");
        $("#error").css("color", "red");
    }
});