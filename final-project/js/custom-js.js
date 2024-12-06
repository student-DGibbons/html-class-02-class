$(document).ready(function(){
    $(function(){
        $("#head").load("../includes/meta.html");
        $("header").load("../includes/header.html");
        $("#footer").load("../includes/footer.html");
    });

    //Accordian
    $('#accordian li h3').click(function(){
        var $parent = $(this).parent();
        if($parent.hasClass('active')) return;
        $('#accordian ul .row').not().slideUp();
        $(this).next().slideDown(function(){
            $parent.addClass('active').siblings().removeClass('active');
        });
    });


    
});

