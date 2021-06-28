function setChannel(name, icon, url){
document.getElementById('videoTitle').innerHTML = name;
document.getElementById('videoLogo').src = '/ChannelLogos/' + icon;
document.getElementById('videoStream').src = url;
var video = document.getElementById('my_video_1');
video.src({
    src: url
  });
}