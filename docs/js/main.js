$(function() {

	// //Плавный скролл к якорю
	// $('a[href^="#"]').click(function(){
	// 	var target = $(this).attr('href');
	// 	var header = $('.header').height();
	// 	$('html, body').animate({scrollTop: $(target).offset().top - header}, 800);
	// 	return false;
	// });

	new WOW().init();

	var modalContent = new tingle.modal();
	modalContent.setContent(document.querySelector('.modal-callback').innerHTML);


	$('#more').on('click', function(){
		$('.reviews__thanks__block').slideToggle();
		$('span', this).text(function(i, text){
			return text === "Посмотреть все" ? "Скрыть" : "Посмотреть все";
		})
		$('i').toggleClass('transform');
	 });

	//Выделение последнего слова в заголовках
	$('.heading h2, .breadcrumb h2, .alternative__block--1__block h2, .alternative__block--2__block h2').html(function(index, curHTML) {
		var text = curHTML.split(/[\s-]/),
			newtext = '<span>' + text.pop() + '</span>';
		return text.join(' ').concat(' ' + newtext);
	});

	//Для Header
	var nav = $('.header');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}
	});


	$('.printer').on('click', function(){
		$('.services').print();
	});

	baguetteBox.run('.gallery');

	var swiper = new Swiper('.big-slider', {
		pagination: '.swiper-pagination',
		direction: 'vertical',
		slidesPerView: 1,
		simulateTouch: false,
		disableTouch: true,
		paginationClickable: true,
		paginationType: 'bullets',
		paginationBulletRender: function (swiper, index, className) {
			return '<span class="' + className + '"><hr>0' + (index + 1) + '</span>';
		},
	});

	var swiper1 = new Swiper('#slider-thanks', {
		slidesPerView: 4,
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			767: {
				slidesPerView: 1,
			},
			1024: {
				slidesPerView: 2,
			}
		}
	});

	var swiper2 = new Swiper('#slider-news', {
		slidesPerView: 3,
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			767: {
				slidesPerView: 1,
			},
			1024: {
				slidesPerView: 2,
			}
		}
	});

	var swiper3 = new Swiper('#slider-review-1', {
		pagination: '.swiper-pagination-count',
		slidesPerView: 3,
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			767: {
				slidesPerView: 1,
			},
			1024: {
				slidesPerView: 2,
			}
		}
	});






	var slideout = new Slideout({
			'panel': document.getElementById('panel'),
			'menu': document.getElementById('menu'),
			'padding': 256,
			'tolerance': 70,
			'side': 'right'
		});

	function close(eve) {
	  eve.preventDefault();
	  slideout.close();
	}

	slideout
	  .on('beforeopen', function() {
	    this.panel.classList.add('panel-open');
	  })
	  .on('open', function() {
	    this.panel.addEventListener('click', close);
	  })
	  .on('beforeclose', function() {
	    this.panel.classList.remove('panel-open');
	    this.panel.removeEventListener('click', close);
	  });

	document.querySelector('.menu-open').addEventListener('click', function() {
		slideout.toggle();
	});

	// slideout.on('beforeopen', function() {
	//   document.querySelector('.fixed').classList.add('fixed-open');
	// });

	// slideout.on('beforeclose', function() {
	//   document.querySelector('.fixed').classList.remove('fixed-open');
	// });


	if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
	}
});