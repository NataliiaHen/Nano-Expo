const swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  clickable: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'progressbar',
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const blockParent = document.querySelector('.services');
  const blocks = document.querySelectorAll('.services__card');
  let delay = 400;

  function handleScroll() {
    const blockParentTop = blockParent.getBoundingClientRect().top;
    const screenWidth = window.innerWidth;
    const isAnimated =
      blockParentTop < window.innerHeight - 100 && screenWidth >= 1020;

    blocks.forEach((block, index) => {
      if (isAnimated) {
        setTimeout(
          () => {
            const translateYValue = block.classList.contains(
              'services__card--left'
            )
              ? -170
              : -80;
            block.style.transform = `translateY(${translateYValue}px)`;
            block.style.opacity = '1';
          },
          delay * (index + 1)
        );
      } else if (screenWidth < 1020) {
        block.style.transform = `translateY(0)`;
        block.style.opacity = '1';
      }
    });
  }

  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
