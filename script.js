$(document).ready(function () 
{
  $(".carousel").slick(
    {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: 
    [
      {
        breakpoint: 1024,
        settings: 
        {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
      {
        breakpoint: 480,
        settings: 
        {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
