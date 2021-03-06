$(document).ready(function(){
 	$('.caroselAra.owl-carousel').owlCarousel({
 		items:8,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	        },
	        481:{
	            items:2
	        },
	        600:{
	            items:3,
	        },
	        1000:{
	            items:8,
	            loop:true,
	        }
	    }
	});
	$('.smallImage.owl-carousel').owlCarousel({
		items:3,
 		loop:true,
	    margin:5,
	    nav:true,
	    responsive:{
	        0:{
	            items:3
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:3,
	        }
	    }
	});
	
	// slicknav js
	$(function(){
        $('#menu').slicknav();
    });

	// elevateZoom js
	$("#zoom_01").elevateZoom({
		gallery:'thmb-image',
		zoomType: "inner",
			cursor: "crosshair"
	}); 
 });


