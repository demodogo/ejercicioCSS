$(".signInBtn").click(showUp);

function showUp() {
     $(".cuadrado-signin").css( { transition: "transform 1s", transform:  "translateX(-100%)" } );
     $(".signInBtn").css({transition: "transform 1s", transform: "translateX(-200%)"})
     $(".cuadrado-signup").css({transition: "transform 1s", transform: "translateX(200%)"})

 }

