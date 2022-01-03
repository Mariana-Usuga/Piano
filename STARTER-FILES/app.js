$('.whiteKeys').click(function(){
  let userChosenKey = $(this).attr("id")
  playSound(userChosenKey)
})

$('.blackKeys').click(function(){
  let userChosenKey = $(this).attr("id")
  playSound(userChosenKey)
})

function playSound(name) {
  var audio = new Audio("audio/" + name + ".mp3");
  audio.play();
}