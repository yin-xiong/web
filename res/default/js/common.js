$(function () {

    // 顶部移入显示用户详情
    $('.user-login-show,.login-after-ext').mouseenter(function () {
        $('.user-login-show').addClass('active')
        $('.login-after-ext').css({
            'opacity':1,
            'z-index':999
        })
    }).mouseleave(function () {
        $('.user-login-show').removeClass('active')
        $('.login-after-ext').css({
            'opacity':0,
            'z-index':-999
        })
    })

    var swiper = new Swiper('.banner .swiper-container',{
        autoplay: 3000,
        speed:1000,
        effect : 'fade',
        lazyLoading : true,
        onInit: function(swiper){
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper);
        }
    });

    var swiper2 = new Swiper('.dynamic-content .swiper-container',{
        autoplay: 2000,
        direction : 'vertical',
    });

    var swiper3 = new Swiper('.hot-slider .swiper-container',{
        autoplay: 2000,
        effect : 'fade',
        fade: {crossFade: false,},
        pagination : '.swiper-pagination',
    });

    // 金牌经纪人轮播
    var swiper4 = new Swiper ('.gold-broker-slider .swiper-container', {
        speed:1000,
        loop : true,
        slidesPerView : 4,
        spaceBetween : "2%",
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    // tab移动显示
    $('.webset-trading-list-top>a').mouseenter(function () {
        var that = this;
        $(that).addClass('active').siblings().removeClass('active')
        $('.webset-trading-list-bottom>ul').eq($(that).index()).addClass('active').siblings().removeClass('active')
    });

    // 帮助中心tab切换
    $('.help-left .help-list-ev>li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');
        $('.help-right-list-ev>ul').eq($(this).index()).addClass('active').siblings().removeClass('active')
    })
    
    // 新闻动态的左右箭头切换
    $('.hot-head-tab .icon-triangle-left').bind('click',function () {
        console.log(1);

    })
    $('.hot-head-tab .icon-triangle-right').bind('click',function () {
        console.log(2);
    })
});

