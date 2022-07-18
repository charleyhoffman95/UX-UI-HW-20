console.log("your index.js file is loaded correctly");

$(".dropdown").on("click", function(){
    $('.menuItems').slideToggle();
});

$(".backToTop").on("click",function(){
    $(".btt").scrollTop();
  });

