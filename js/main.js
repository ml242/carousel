$(document).ready(function(){

  var currentImg = 0;
  var $imagebox = $('#slider-image');

  var imageArray = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
  ]


  $('#main').css("background-image", "url(images/1.jpg)");
  $('#main').css("background-repeat", "no-repeat");
  $('#main').css("height", "800px");
  $('#main').css("margin-top", "1em");
  

  for (i=0; i < imageArray.length; i++){
    $imagebox.append('<li class="thumb-image">' + '<img class="thumbnail" height="100px" width="150px" ' + 'src="images/' + [i+1] + '.jpg"></li>');
    $('.thumb-image').css('display', 'inline-block')
  };

  $('.thumbnail').on('click', getMain);

  $('.left').on('click', slideleft);

  $('.right').on('click', slideright);

  function slideleft(){
    if(currentImg == 0){
      currentImg = imageArray.length-1;
    }else{
      currentImg--;
    };
    console.log(currentImg);
    $('#main').css("background-image", "url(" + "../images/"+ imageArray[currentImg] +")");
  };

  function slideright(){
    if(currentImg > imageArray.length-1){
      currentImg = 0
    }else{
      currentImg++;
    }
    // console.log(currentImg);
    $('#main').css("background-image", "url(" + "../images/"+ imageArray[currentImg] + ")");
  };


  function getMain(){
    var image = this.valueOf().src;
    // console.log(image);
    $('#main').css("background-image", "url("+image+")");
  };




});
