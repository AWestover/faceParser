
let dim = Math.min(window.innerWidth*0.5, window.innerHeight*0.5);
let img_ct = 0;

if (window.location.href.indexOf('https') == -1 && window.location.href.indexOf('localhost') == -1)
{
    console.log("redirect to https so that I can use webcam");
    window.location.href = window.location.href.replace('http', 'https');
}

Webcam.set({
  width: dim,
  height: dim,
  image_format: "jpeg",
  jpeg_quality: 90
});

function handleNewImage(img_src) {
  let loaders = $('.loader');
  for (let i = 0; i < loaders.length; i++) {
    loaders[0].remove();
  }
  img_ct += 1;
  let newImgHTML = "<div id='img_"+img_ct+"'>";
  newImgHTML += "<img width='90%' src='" + img_src + "'>";
  newImgHTML += "<br>";
  newImgHTML += "<button onclick='$(\"#img_"+img_ct+"\").remove();'>Delete image</button>";
  newImgHTML += "<a href='"+img_src+"' download='weird-face.png'>";
  newImgHTML += "<button class='btn'>Download image</button></a>";
  newImgHTML += "<button onclick=copyImgUrl('"+img_ct+"') data-clipboard-text='test' class='btn'>Copy img url (warning: it is really long)</button>";
  newImgHTML += "</div>";
  $.notify("Your picture has arrived", "success");
  $("#output_pics").append(newImgHTML);
  window.scrollTo(0, document.body.scrollHeight);
}

function copyImgUrl(img_ct) {
  $.notify('image url copied for image '+ img_ct, 'success');
  let tmp = $('#img_'+img_ct + " img")[0].src;
  $('#main-container').append("<textarea id='textarea'"+img_ct+">"+tmp+"</textarea>");

  $('#textarea').select();
  document.execCommand('copy');
}

Webcam.attach('#webcam');
function takeScreenshot()
{
  $.notify("Picture submitted to be altered", "success");
  Webcam.snap(function(data_uri){
    $('#results').html('<img src='+data_uri+'>');
    $('body').prepend('<div class="loader"></div>');
    $.post("/upload", {"data_uri": data_uri, "num_colors": $('#num_colors').val()}, function(data) {
          handleNewImage(data.path);   
      });
  });
}

$.post('/checkForUpdate', function(data) {
  console.log(data);
  if (data && data.path) {
    handleNewImage(data.path);
  }
});

