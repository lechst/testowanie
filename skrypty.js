$(document).ready(function(){
    
    $(".article .thebody").hide();
    $("#container .article ul")
    .prepend("<li class='readbody'><a href='' title='Read the article'>Read Body</a></li>");
     
    $(".actions li.readbody a").click(function(event){
        $(this).parents("ul").prev(".thebody").toggle();
       
        // Stop the link click from doing its normal thing
        event.preventDefault();
    });
    
    function animate() {$("#animate1").animate({
        marginLeft: "+=5px"
    }, function(){
        animate();
    }); }
    
    $("#clickhere").click(function() {animate();});
    $("#animate1").hover(function() {$(this).stop()});
    
});
