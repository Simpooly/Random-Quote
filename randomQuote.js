
  $(document).ready(function() {
    
 function getQuote(){
    $.ajax({
        dataType: 'json',
        url: 'https://talaikis.com/api/quotes/random/',
        success: function(data){
         // $('.quote').html("data.quote");
         //$('.author').html("data.author");
          console.log(data);
        }
    });
 }
    
    $("#getmessage").on("click",function(){
      getQuote();
    });
  });