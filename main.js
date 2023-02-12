webcam.set({
    width:350,
    height:300,
    img_format :'png',
    png_quality : 90
});

camera = document.getElementById("camera");
webcam.attach('#camera')

function take_snapshot()
{
 webcam.snap(function(data_uri) {
   document.getElementById("result").innerHTML = '<img id="capture image" scr="'+data_uri+'"/>';
 });
}

console.log('m15 version:',m15.version);

classifier = m15.imageclassifier('https://teachablemachine.withgoogle.com/models/L7radoCZp/model.json',modelLoaded);