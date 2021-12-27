 $(".signInBtn").click(showUp);

function showUp() {
     $(".cuadrado-signin").css( { transition: "transform 1s", transform:  "translateX(0%)" } );
     $(".inac-signin").css({transition: "transform 1s", transform: "translateX(-100%)"});
     $(".cuadrado-signup").css({transition: "transform 1s", transform: "translateX(100%)"});
     $(".inac-signup").css({transition: "transform 1s", transform: "translateX(0%)"});
 }

 $(".signUpBtn").click(showIn);

 function showIn() {
      $(".cuadrado-signup").css( { transition: "transform 1s", transform:  "translateX(0%)" } );
      $(".inac-signup").css({transition: "transform 1s", transform: "translateX(100%)"});
      $(".cuadrado-signin").css({transition: "transform 1s", transform: "translateX(-100%)"});
      $(".inac-signin").css({transition: "transform 1s", transform: "translateX(0%)"});
  }
 
