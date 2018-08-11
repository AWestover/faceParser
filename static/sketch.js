
let dim = Math.min(window.innerWidth*0.5, window.innerHeight*0.5);

Webcam.set({
  width: dim,
  height: dim,
  image_format: "jpeg",
  jpeg_quality: 90
});

Webcam.attach('#webcam');
function takeScreenshot()
{
  $.notify("Picture submitted to be altered", "success");
  Webcam.snap(function(data_uri){
    $('#results').html('<img src='+data_uri+'>');
    $('body').prepend('<div class="loader"></div>');
    $.post("/upload", {"data_uri": data_uri, "num_colors": $('#num_colors').val()}, function(data)
      {
          let loaders = $('.loader');
          for (let i = 0; i < loaders.length; i++)
          {
            loaders[0].remove();
          }
          $.notify("Your face has arrived", "success");
          $("#output_pics").append("<img width='90%' src='" + data.path + "'>");
          window.scrollTo(0, document.body.scrollHeight);
      });
  });
}
