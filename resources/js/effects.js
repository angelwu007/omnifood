$(document).ready(function(){
    $('.js-section-features').waypoint(direction=>{
        if(direction === 'down'){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
    },{
        offset:'60px'
    })

    $('.js-wp-1').waypoint(function(direction){
        if(direction === 'down'){
            $('.js-wp-1').addClass('animated fadeIn')
        }
    },{
        offset: '50%'
    })

    $('.js-wp-2').waypoint(function(direction){
        if(direction === 'down'){
            $('.js-wp-2').addClass('animated fadeInUp')
        }
    },{
        offset:'50%'
    })

    $('.js-wp-3').waypoint(function(direction){
        if(direction === 'down'){
            $('.js-wp-3').addClass('animated flipInY')
        }
    },{
        offset:'50%'
    })

    $('.js-wp-4').waypoint(function(direction){
        if(direction === 'down'){
            $('.js-wp-4').addClass('animated flash')
        }
    },{
        offset:'50%'
    })

    $('.mobile-nav-icon').on('click',function(){
        const icon = $('.mobile-nav-icon i')
        $('.main-nav').slideToggle(200);
        if(icon.hasClass('fa-bars')){
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
        }else{
            icon.addClass('fa-bars');
            icon.removeClass('fa-times')
        }
    })

})