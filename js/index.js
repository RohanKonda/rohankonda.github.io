
console.log($("#img1").height(),  $("#img1").width());

$(window).ready(function(){

  if($("#img1").css("display") != 'none'){


  $("#Header").css("height",$("#img1").height()+"px");



  }else{
    $("#Header").css("height",$("#img2").height()+"px");


  }

});



$(window). resize(function(){

  if($("#img1").css("display") != 'none'){

$("#Header").css("height",$("#img1").height()+"px");

}else{
$("#Header").css("height",$("#img2").height()+"px");

}

})




var navimo = document.querySelector('.navimo')

$("#toogle-icon").click(function(){
  navimo.classList.toggle("unactive")
});
