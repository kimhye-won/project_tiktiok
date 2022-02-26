$(function(){      
    
    let delta, num=$(window).width();

    
    $(window).on('mousewheel DOMMouseScroll',function(e){
        delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        
        if(delta<0){
            //up
   
            if(-($('.page_02').width() - $('.page_01').width() )< num) {

                num-=100;
            }    
                
        }else{
                //down
                if($(window).width() > num) {
                    
                    num+=100;

                }
        }    

        let pageOffset = $('.page_02').offset().left;

        
        if(pageOffset<-200){
            $('.spot_02Img').css({ transform: 'translateY(30%)'});

            
        } else {
            $('.spot_02Img').css({ transform: 'translateY(100%)'});

        }
        
        if(pageOffset<-1000){
            $('.spot_03Img').css({ transform: 'translateY(0%)'});

            
        } else {
            $('.spot_03Img').css({ transform: 'translateY(-100%)'});
        }    


        $('.first').on('click',function(){
            $('.page_02').css({transform:'translateX(5500px)'});
            num=0;
        });

        $('.page_02').css({transform:'translateX('+num+'px)'});
        

        
    });
    
    
});


