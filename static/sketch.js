
Webcam.set({
  width: 300, 
  height: 300,
  image_format: "jpeg",
  jpeg_quality: 90
});

Webcam.attach('#webcam');
function takeScreenshot()
{
  $.notify("Picture submitted to be altered", "success")
  Webcam.snap(function(data_uri){
    $('#results').html('<img src='+data_uri+'>');
    $.post("/upload", {"data_uri": data_uri, "num_colors": $('#num_colors').val()}, function(data)
      {
          $.notify("Your face has arrived", "success");
          let imgPath = data["path"];
          $("#output_pics").append("<img src='" + imgPath + "'>");
          window.scrollTo(0, document.body.scrollHeight);
      });
  })
}
