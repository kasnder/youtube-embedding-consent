/* Cookie functionality by https://www.w3schools.com/js/js_cookies.asp */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function unblockVideos() {
  document.querySelectorAll('.video_wrapper .video_trigger').forEach(function(_trigger) {
    _trigger.style.display = 'none';

    // seek video_layer element
    for (var i = 0; i < _trigger.parentNode.childNodes.length; i++) {
        var video_layer = _trigger.parentNode.childNodes[i];
        if (video_layer.className == "video_layer") {
            video_layer.style.display = 'block';

            // seek iframe element
            for (var j = 0; j < video_layer.childNodes.length; j++) {
                var iframe = video_layer.childNodes[j];
                if (iframe.tagName.toLowerCase() == 'iframe') {
                    var videoId = _trigger.getAttribute('data-source');
                    iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?controls=1&showinfo=0&autoplay=0&mute=1';
                }
            }
        }
    }
  });
}
document.addEventListener("DOMContentLoaded", function (event) {
    if (getCookie("youtube-consent") == 1) {
        unblockVideos();
    } else {
        document.querySelectorAll('.video_wrapper .video_trigger .video-btn').forEach(function(node) {
            node.addEventListener("click", function(event){
                setCookie('youtube-consent', 1, 365);
                unblockVideos();
            });          
        });
    }
});