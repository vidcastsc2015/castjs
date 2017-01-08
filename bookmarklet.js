function removeOverlayipb336310() {
    var a = document.getElementById("ovipb336310");
    a && (a.style.opacity = 0, a.parentNode.removeChild(document.getElementById("ovipb336310")))
}
if (!document.getElementById("ovipb336310")) {
    var o = document.createElement("div");
    o.setAttribute("id", "ovipb336310");
    var textStyle = "-webkit-text-size-adjust: none; font-family: Helvetica, Arial, sans-serif; font-weight: bold; line-height: 1.0; letter-spacing: normal; font-variant: normal; font-style: normal;";
    o.setAttribute("style", "position: fixed; z-index: 2147483647; left: 0; top: 0; width: 100%; height: 100%; font-size: 25px; opacity: 0.9; -webkit-transition: opacity 0.25s linear; text-align: center; padding: 200px 0 0 0; margin: 0; background-color: #333; color: #F2F2F2; " + textStyle);
    var o1 = document.createElement("span");
    o1.setAttribute("id", "omipb336310");
    o1.setAttribute("style", textStyle);
    o1.appendChild(document.createTextNode("VidCast " + String.fromCharCode(8594)));
    o.appendChild(o1);
    o1 = document.createElement("div");
    o1.setAttribute("id", "ocipb336310");
    o1.setAttribute("style", "cursor:pointer;margin: 35px auto; width: 120px; font-size: 15px; padding: 10px; color: #ccc; background-color: black; border: 1px solid #aaa;");
    o1.setAttribute("onclick", "removeOverlayipb336310();");
    o1.appendChild(document.createTextNode("Cancel"));
    o.appendChild(o1);
    document.body.appendChild(o);
    Array.prototype.clean = function(a) {
        for (var b = 0; b < this.length; b++) this[b] == a && (this.splice(b, 1), b--);
        return this
    };
    var pattern = RegExp("https:\/\/redirector.googlevideo.com\/videoplayback)[A-Za-z0-9%?=&:/._-].*", "ig"),
        matches = [],
        matches = document.documentElement.innerHTML.match(pattern);
    if (-1 != window.location.href.indexOf("ted.com")) {
        var ted_pattern = RegExp("(http)(.){5}(download.ted.com)(.){2}(talks)(.){2}[A-Za-z0-9_?.=&]*(.mp4)[A-Za-z0-9_?.=&]*",
                "ig"),
            ted_matches = document.documentElement.innerHTML.match(ted_pattern);
        ted_matches && (matches = matches.concat(ted_matches))
    }
    if (-1 != window.location.href.indexOf("dailymotion.com")) {
        var dm_html = document.documentElement.innerHTML,
            dm_html = unescape(dm_html),
            dm_html = unescape(dm_html);
        (dm_matches = dm_html.match(pattern)) && (matches = matches.concat(dm_matches))
    }
    if (-1 != window.location.href.indexOf("khanacademy.org")) {
        var khan_pattern = RegExp("(https:\/\/redirector.googlevideo.com\/videoplayback)[A-Za-z0-9%?=&:/._-].*",
                "ig"),
            khan_matches = document.documentElement.innerHTML.match(khan_pattern);
        khan_matches && (matches = matches.concat(khan_matches))
    }
    var priority = [];
    if (matches && 0 < matches.length) {
        for (i = 0; i < matches.length; i++)
            if (-1 != matches[i].indexOf("facebook.com%5C%2F")) {
                var fb_pattern = RegExp("(http(s)?)[A-Za-z0-9%?=&:\\/._-]*[.]{1}(mp4|webm|ogg)([?]{1}[A-Za-z0-9%?=&:/.-_;-]*)?", "ig"),
                    fb_matches = [],
                    decoded_match = decodeURIComponent(matches[i]),
                    decoded_match = decoded_match.replace(/\\/g, "");
                (fb_matches = decoded_match.match(fb_pattern)) &&
                0 < fb_matches.length ? priority[0] = fb_matches[0] : priority[5] = matches[i]
            } else -1 != matches[i].indexOf("lookbackvideo") ? (fb_pattern = RegExp("(http(s)?)[A-Za-z0-9%?=&:\\/._-]*[.]{1}(mp4|webm|ogg)([?]{1}[A-Za-z0-9?=&:/.-_;-]*)?", "ig"), fb_matches = [], decoded_match = decodeURIComponent(matches[i]), decoded_match = decoded_match.replace(/\\/g, ""), (fb_matches = decoded_match.match(fb_pattern)) && 0 < fb_matches.length ? priority[0] = fb_matches[0] : priority[5] = matches[i]) : -1 != matches[i].indexOf("download.ted.com") ? priority[0] =
                matches[i].replace(/\\/g, "") : -1 != matches[i].indexOf("1080") ? priority[1] = matches[i] : -1 != matches[i].indexOf("720") ? priority[2] = matches[i] : -1 != matches[i].indexOf("480") ? priority[3] = matches[i] : priority[5] = matches[i];
        priority.clean(void 0);
        var match = priority[0]; - 1 != match.indexOf("phncdn.com") && (match = match.replace(/&amp;/g, "&"));
        window.location = "https://vidcast.dabble.me/?video_link=" + encodeURIComponent(match)
    } else document.getElementById("omipb336310").innerHTML = "No MP4, WEBM, or OGG files found on this page",
        setTimeout(function() {
            removeOverlayipb336310()
        }, 1800)
};
