const responsiveCarousel = {
  desktop: {
    breakpoint: { max: 30000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 676 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 676, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export { responsiveCarousel };
