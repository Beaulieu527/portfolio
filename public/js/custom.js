/* Add here all your JS customizations */
//button
 $('#button').on('click',function sayHello(){
   var comment= $("#message").val();
     if(comment===""){
        $('#message').css("border", "2px solid red");
     } else{
    var email= $('#email').val();
    var name = $('#name').val();
    var text = "Hi we have received your message: " + comment;
     $("#visible-comment").html(text);
     $('#name').hide();
     $('#email').hide();
     return true;
     }
});