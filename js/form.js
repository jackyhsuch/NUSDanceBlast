
var nameError = false;
var emailError = false;
var submitted = false;

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
        
$("#submitBtn").click(function () {
    if($('#submitBtn').hasClass('btn btn-success')) {
            
    } else {
    
        if($('#inputName').val().length==0){
            $('#name-emptyError').show();
            nameError = true;
        } else {
            $('#name-emptyError').hide();
            nameError = false;
        }

        if($('#inputEmail').val().length==0){
            $('#email-emptyError').show();
            emailError = true;
        } else if(!IsEmail($('#inputEmail').val())) {
            $('#email-emptyError').hide();
            $('#email-wrongError').show();
            emailError = true;
        } else {
            $('#email-emptyError').hide();
            $('#email-wrongError').hide();
            emailError = false;
        }

        if($(this).hasClass('btn btn-primary') && !emailError && !nameError) {
            $(this).removeClass(".btn btn-primary").addClass("btn btn-success");
            $(this).find("span").fadeOut(500, function(){$(this).text("submitted!").fadeIn(500)});

            $('.form-control').val('');

            emailError = false;
            nameError = false;
            submitted = true;
        }
    }
                
});
            
            
$(".form-group").focusin(function() {
   if(submitted) {
       $('#submitBtn').removeClass(".btn btn-success").addClass("btn btn-primary");
       $('#submitBtn').find("span").fadeOut(500, function(){$(this).text("submit!").fadeIn(500)});
               
       submitted = false;
  }
});
               

               
   