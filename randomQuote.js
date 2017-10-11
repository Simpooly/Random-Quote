
  $(document).ready(function() {
    
 function getQuote(){
    $.ajax({
        dataType: 'json',
        url: 'https://talaikis.com/api/quotes/random/',
        success: function(data){
        
         //var obj = $.parseJSON(data);
         var quote = '<p>" ' + data.quote + ' "</p>';
         var author = "<p>" + data.author + "</p>";


 		$('.quote').html(quote);
        $('.author').html(author);
          //console.log(html);
        }
    });
 }
    
    $("#getmessage").on("click",function(){
      getQuote();
    });
  });