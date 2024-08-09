$(function(){

    $('a').click(function(e){
        e.preventDefault()
    })
    $(".menu>li, .sub_bg").hover(function(){
        $(".sub , .sub_bg").stop().slideDown();
    },function(){
        $(".sub , .sub_bg").stop().slideUp();
    }) // PC hover

    $(".m_menu>li").click(function(){
        $(".m_sub").stop().slideUp();
        $(this).find(".m_sub").stop().slideDown();
    })

    $(".menu-toggle-btn").click(function(){
        $(this).toggleClass("on");
        $(".m_nav").toggleClass("on");
    })

    $(".slide2").slick({
        dots: false, // 좌우 arrow 네비게이션 안보이게 하기 (보이고 싶을 때는 true로 변경)
        arrows: false,
        autoplay : true,
    })

    $(".m_best_photo").slick({
        arrows: false,
            dots: false,
        responsive: [
                            {
                                breakpoint:500,
                                settings:{
                                    dots: false, // 좌우 arrow 네비게이션 안보이게 하기 (보이고 싶을 때는 true로 변경)
                                    arrows: false,
                                    autoplay : true,
                                }
                            }
                        ]

    })
    // 모바일

    $(".slide").slick({
        dots: false, // 좌우 arrow 네비게이션 안보이게 하기 (보이고 싶을 때는 true로 변경)
        arrows: false,
        autoplay : true,
    })

    // $(" .best_photo ul").slick({
    //     arrows: false,
    //     dots: false,
    //     autoplay : true,
    //     responsive: [
    //                 {
    //                     breakpoint:500,
    //                     settings:{
    //                         dots: false, // 좌우 arrow 네비게이션 안보이게 하기 (보이고 싶을 때는 true로 변경)
    //                         arrows: false,
    //                         autoplay : true,
    //                     }
    //                 }
    //             ]
        
    // })


    $('.best_photo ul').eq(0).siblings().hide();

    $('.best_list li a').click(function(){
        $('.best_list li a').removeClass("on")
        $(this).addClass("on")
        
        n = $(this).parent().index();
        console.log(n)
        $('.best_photo ul').hide();
        $('.best_photo ul').eq(n).css({display:"flex"});
    })

})