
  $(document).ready(function() {
    
    var quote = "";
    var author = "";
 function getQuote(){
    $.ajax({
        dataType: 'json',
        url: 'https://talaikis.com/api/quotes/random/',
        success: function(data){
        
         //var obj = $.parseJSON(data);
         quote = '" ' + data.quote + ' "';
         author =  data.author ;


        $('.quote').html(quote);
        $('.author').html(author);
          //console.log(html);
        }
    });
 }
    
    $("#getmessage").on("click",function(){
      getQuote();
      $('#getmessage').html("Press me Again!");
    });
    

    $("#tweet").on("click", function(){
       
    //var qString = $(".quote").html(quote);
		window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + "  ~" + author));
		//console.log(tweet);
    });

});