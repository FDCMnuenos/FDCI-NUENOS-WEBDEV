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
        $("#reset1").attr("disabled", false);
    }); 

    $("#reset1").click(function(e){
        $(".div1").animate({
                width: "150px",
                height: "150px",
                left : '0',
                borderWidth: 4,
                opacity: 100});
        $("#animatebox1").attr("disabled", false);
    }); 


    //Part 3 code
    //Add Height and Width of Box
    $("#animatebox2").click(function(e){
        $('#animatebox3').attr("disabled", false);
        $('#rest2').attr("disabled", false);
        $('.div2').animate({
            height: '+=36', 
            width: '+=36', 
            right: '-=30',
            top: '+=15'
            });
    });
        
    //Decrese Height and Width of Box
    $("#animatebox3").click(function(e){
    //One Step back - Validation to avoid box being smaller than the original size
        $('#animatebox3').attr("disabled", true);
        $('.div2').animate({
            height: '-=36', 
            width: '-=36', 
            right: '+=30',
            top: '-=15'
        });
    });

    $("#rest2").click(function(e){
        $('#animatebox3').attr("disabled", true);
        $('#rest2').attr("disabled", true);
        $('.div2').animate({
            height: '150', 
            width: '150', 
            right: '0',
            top: '0'
            });
        
        });
});

