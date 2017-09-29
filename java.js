var imgstring= "";
for(var i=0;i<8;i++){
  imgstring += '<img src="disappear.png" alt="pic">'
}
imgstring +="<button>Restore</button>"
$(document).ready(function(){
  $("#container").append(imgstring)

  $("img").click(function(){
    $(this).hide();
  })
  $("button").click(function(){
    $("img").show();
  })
})
