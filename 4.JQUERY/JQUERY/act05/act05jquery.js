jQuery(document).ready(function($){
    //Part 1 code
        $( ".toggle1" ).click(function(e) {
            e.preventDefault();
                $( ".box1" ).slideToggle();
         });
         
        $( ".toggle2" ).click(function(e) {
            e.preventDefault();
                $( ".box2" ).slideToggle();
        });
        
        $( ".toggle3" ).click(function(e) {
            e.preventDefault();
                $( ".box3" ).slideToggle();
        });

   
    //Part 2 code
    $("#animatebox1").click(function(e){
        $(".div1").animate({width: "300px"})
                 .animate({height: "300px"})
                 .animate({left : '+=200'})
                 .animate({borderWidth: 15})
                 .animate({borderWidth: 15,  opacity: 0.6});
        $("#animatebox1").attr("disabled", true);
    }); 


    //Part 3 code
    var width = $('.div2').width();
    var height = $('.div2').height();
        $("#animatebox2").click(function(e){
            $('.div2').animate({
                height: '+=36', 
                width: '+=36', 
                right: '-=30',
                top: '+=15'
            });
        });
});

