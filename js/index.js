console.log("your index.js file is loaded correctly");

$(".dropdown").on("click", function(){
    $('.menuItems').slideToggle();
});

$("#MWR").on("click",function(){
    $("#research").scrollIntoView();
  });

