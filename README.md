# Consent for embedded YouTube videos

EU data protection legislation and similar regimes set high requirements for sharing data with third-parties.
Asking for user consent is usually the most straightforward way to establish a legal basis for such data sharing.

This project allows to embed YouTube videos into your website, but only after user consent has been established.
Consent is saved in a cookie.

## Usage

First, integrate `yt-consent.css` and `yt-consent.js` into your web page.

```html
<link rel="stylesheet" type="text/css" href="yt-consent.css">
<script type="text/javascript" src="yt-consent.js"></script>
```

Then, embed videos with the following code.

```html
<div class="video_wrapper" style="background-image: url('{{ url_to_video_thumbnail }}');">
    <div class="video_trigger" data-source="{{ youtube_video_id }}">
        <p class="text-center">Playing this video requires sharing information with YouTube.<br><a target="_blank" href="https://tosdr.org/#youtube">More information</a></p>
        <input type="button" class="video-btn" value="Agree" />
    </div>
    <div class="video_layer"><iframe src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
</div>
```

Replace `{{ ... }}` to include the wished YouTube video id (e.g. `2Q_ZzBGPdqE`), and optionally a URL to a thumbnail of the YouTube video.

If you do not want to provide thumbnails for every video,
you can point to a dummy thumbnail in the CSS file.

## Legal Notes

**Compliance with law has not been checked by lawyers. Use at own risk.**

You may want to clarify in your privacy policy that this code sets the cookie `youtube-consent`.

## Credits
This project is based on <https://www.codepalm.de/post/youtube-2-klick-loesung/>.

The code to set cookies is taken from <https://www.w3schools.com/js/js_cookies.asp>.
