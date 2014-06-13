$(document).ready(function(){

  $('#main').css("background-image", "url(images/1.jpg)");
  $('#main').css("background-repeat", "no-repeat");
  $('#main').css("height", "800px");
  $('#main').css("margin-top", "1em");


  imageArray = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg'
  ]
  
  function getMain(){
    var image = this.valueOf().src;
    console.log(image);
    $('#main').css("background-image", "url("+image+")");
  };

  for (i=0; i < imageArray.length; i++){
    $imagebox = $('#slider-image');
    $imagebox.append('<li class="thumb-image">' + '<img class="thumbnail" height="100px" width="150px" ' + 'src="images/' + [i+1] + '.jpg"></li>');
    $('.thumb-image').css('display', 'inline-block')
  };

  $('.thumbnail').on('click', getMain);

});