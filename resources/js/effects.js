$(document).ready(function(){
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
            $('.js-wp-3').addClass('animated fadeInUp')
        }
    },{
        offset:'50%'
    })

})