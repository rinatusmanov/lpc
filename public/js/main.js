
$(document).ready(function(){

  
    $('.menu-item__link').on('click', function(e)  {
    $(this).parent().siblings().find('.menu-item__link--selected').removeClass('menu-item__link--selected');
    $(this).addClass('menu-item__link--selected');
    let pos = $('.selected-triangle--inserted').offset();
    let elem = '<div class="selected-triangle--inserted"></div>';

    $(document).find('.selected-triangle--inserted').remove();
      
    $('.menu-item__link--selected').append(elem);
    e.preventDefault();

  }); 
	$('.tab-link').on('click', function(e)  {
	  	$(this).parent().siblings().find('.tab-link--active').removeClass('tab-link--active');
	    $(this).addClass('tab-link--active');
		let currentAttrValue = $(this).attr('href');
		$(currentAttrValue).show().siblings().hide();
		$(this).parent().siblings().find('.horizontal-tabs-active').removeClass('horizontal-tabs-active');
		$(this).addClass('horizontal-tabs-active');
		e.preventDefault();
	});  
	$('.tab-link-red').on('click', function(e)  {
	  	$(this).parent().siblings().find('.tab-link-red--active-red').removeClass('tab-link-red--active-red');
	    $(this).addClass('tab-link-red--active-red');
		let currentAttrValue = $(this).attr('href');
		$(currentAttrValue).show().siblings().hide();
		$(this).parent().siblings().find('.horizontal-tabs-active-red').removeClass('horizontal-tabs-active');
		$(this).addClass('horizontal-tabs-active');
		e.preventDefault();
	});
	    let setDropdown = function(selector) {
    	if ($(selector).is(':visible')) {
    		$(selector).slideUp(300);
    	} else {
    		$(selector).slideDown(300);
    	}
    };
    	let setdown = function(selector) {
    	$(selector).slideDown(300);
    };
        let setUp = function(selector) {
    	$(selector).slideUp(300);
    };
       	let del = function(selector) {
    	$(selector).remove();
    };
    
      $('.view_table').on('click', function(){
        $('#my_first_popup').slideToggle();
    }); 

       $('.view_table2').on('click', function(){
        $('#my_first_popup2').slideToggle();
    }); 
     
      $('.view_table3').on('click', function(){
        $('#my_first_popup3').slideToggle();
    }); 



        $('.filter-button').on('click', function(){
      setDropdown('#drop-add2');
    }); 
        $('.input-manufacture-button').on('click', function(){
      setDropdown('#details');
    });
        $('.manufacture-block-show1').on('click', function(){
      setDropdown('.manufacture-block-hide1');
    });
        $('.manufacture-block-show2').on('click', function(){
      setDropdown('.manufacture-block-hide2');
    });
        $('.manufacture-block-show3').on('click', function(){
      setDropdown('.manufacture-block-hide3');
    });
        $('.manufacture-block-show4').on('click', function(){
      setDropdown('.manufacture-block-hide4');
    });
        $('.plus-order').on('click', function(){
      setDropdown('#drop-add-orderInTable');
    }); 
       $('.delete_row_nafig').on('click', function(){ 
        
    });
       $('.plus').on('click', function(){
      setDropdown('#drop-add-ware');
    }); 

});

