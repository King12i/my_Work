$(document).ready(function(){
    $(".logo").hide()

    $(document).on('mouseover', '#principal', function(){
        $(".logo").show(7000);
  });  

  $("img").hide()

  $(document).on('mouseover', '#principal', function(){
      $("img").show(3000);
});  

})