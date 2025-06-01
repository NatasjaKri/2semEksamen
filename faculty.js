new Swiper('.card-wrapper', {
  loop: true,
	spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
//Responsive breakpoints	
	breakpoints:{
		0:{
			slidesPerView: 1
		},
		600:{
			slidesPerView: 2
		},
		800:{
			slidesPerView: 3
		},
	}
});
