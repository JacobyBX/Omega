function setChannel(name, icon, url){
document.getElementById('videoTitle').innerHTML = name;
document.getElementById('videoLogo').src = '/ChannelLogos/' + icon;
document.getElementById('videoStream').src = url;
var player = videojs('my_video_1');
player.play();
}