new Swiper('.swiper', {
  loop: true,
	spaceBetween: 20,

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
			slidesPerView: 3
		},
		800:{
			slidesPerView: 4
		},
		1100:{
			slidesPerView: 5
		},
	}
});
