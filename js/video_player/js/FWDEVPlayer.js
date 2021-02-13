if (function(t) {
        var a = function() {};
        a.dumy = document.createElement("div"), a.trim = function(e) {
            return e.replace(/\s/gi, "")
        }, a.storArrayBasedOnObjectValue = function(e, t) {
            e.sort(function(s) {
                var i = 1;
                "-" === s[0] && (i = -1, s = s.substr(1));
                return function(e, t) {
                    var o = e[s] < t[s] ? -1 : e[s] > t[s] ? 1 : 0;
                    return o * i
                }
            }(t))
        }, a.trimAndFormatUrl = function(e) {
            return e = (e = e.toLocaleLowerCase()).replace(/ /g, "-")
        }, a.splitAndTrim = function(e, t) {
            for (var o = e.split(","), s = o.length, i = 0; i < s; i++) t && (o[i] = a.trim(o[i]));
            return o
        }, a.checkTime = function(e) {
            return !!/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/.test(e)
        }, a.formatTime = function(e, t) {
            var o = Math.floor(e / 3600),
                s = e % 3600,
                i = Math.floor(s / 60),
                n = s % 60,
                l = Math.ceil(n);
            return i = 10 <= i ? i : "0" + i, l = 10 <= l ? l : "0" + l, isNaN(l) ? "00:00" : o || t ? "0" + o + ":" + i + ":" + l : i + ":" + l
        }, a.formatTimeWithMiliseconds = function(e) {
            var t = 60 * parseInt(e.split(":")[0]) * 60 + 60 * parseInt(e.split(":")[1]) + parseInt(e.split(":")[2]) + parseInt(e.split(",")[1]) / 1e3;
            return t = Math.round(100 * t) / 100
        }, a.isLocal = -1 != location.protocol.indexOf("file:"), a.xmlToJson = function(e) {
            var t = {};
            if (1 == e.nodeType) {
                if (0 < e.attributes.length) {
                    t["@attributes"] = {};
                    for (var o = 0; o < e.attributes.length; o++) {
                        var s = e.attributes.item(o);
                        t["@attributes"][s.nodeName] = s.nodeValue
                    }
                }
            } else 3 == e.nodeType ? t = e.nodeValue.trim() : 4 == e.nodeType && (t = e.nodeValue);
            if (e.hasChildNodes())
                for (var i = 0; i < e.childNodes.length; i++) {
                    var n = e.childNodes.item(i),
                        l = n.nodeName;
                    if (void 0 === t[l]) t[l] = a.xmlToJson(n);
                    else {
                        if (void 0 === t[l].length) {
                            var r = t[l];
                            t[l] = [], t[l].push(r)
                        }
                        "object" == typeof t[l] && t[l].push(a.xmlToJson(n))
                    }
                }
            return t
        }, a.MD5 = function(e) {
            function a(e, t) {
                return e << t | e >>> 32 - t
            }

            function d(e, t) {
                var o, s, i, n, l;
                return i = 2147483648 & e, n = 2147483648 & t, l = (1073741823 & e) + (1073741823 & t), (o = 1073741824 & e) & (s = 1073741824 & t) ? 2147483648 ^ l ^ i ^ n : o | s ? 1073741824 & l ? 3221225472 ^ l ^ i ^ n : 1073741824 ^ l ^ i ^ n : l ^ i ^ n
            }

            function t(e, t, o, s, i, n, l) {
                var r;
                return d(a(e = d(e, d(d((r = t) & o | ~r & s, i), l)), n), t)
            }

            function o(e, t, o, s, i, n, l) {
                var r;
                return d(a(e = d(e, d(d(t & (r = s) | o & ~r, i), l)), n), t)
            }

            function s(e, t, o, s, i, n, l) {
                return d(a(e = d(e, d(d(t ^ o ^ s, i), l)), n), t)
            }

            function i(e, t, o, s, i, n, l) {
                return d(a(e = d(e, d(d(o ^ (t | ~s), i), l)), n), t)
            }

            function n(e) {
                var t, o = "",
                    s = "";
                for (t = 0; t <= 3; t++) o += (s = "0" + (e >>> 8 * t & 255).toString(16)).substr(s.length - 2, 2);
                return o
            }
            var l, r, u, h, _, c, f, p, b, m = Array();
            for (m = function(e) {
                    for (var t, o = e.length, s = o + 8, i = 16 * ((s - s % 64) / 64 + 1), n = Array(i - 1), l = 0, r = 0; r < o;) l = r % 4 * 8, n[t = (r - r % 4) / 4] = n[t] | e.charCodeAt(r) << l, r++;
                    return l = r % 4 * 8, n[t = (r - r % 4) / 4] = n[t] | 128 << l, n[i - 2] = o << 3, n[i - 1] = o >>> 29, n
                }(e = function(e) {
                    e = e.replace(/\r\n/g, "\n");
                    for (var t = "", o = 0; o < e.length; o++) {
                        var s = e.charCodeAt(o);
                        s < 128 ? t += String.fromCharCode(s) : (127 < s && s < 2048 ? t += String.fromCharCode(s >> 6 | 192) : (t += String.fromCharCode(s >> 12 | 224), t += String.fromCharCode(s >> 6 & 63 | 128)), t += String.fromCharCode(63 & s | 128))
                    }
                    return t
                }(e)), c = 1732584193, f = 4023233417, p = 2562383102, b = 271733878, l = 0; l < m.length; l += 16) f = i(f = i(f = i(f = i(f = s(f = s(f = s(f = s(f = o(f = o(f = o(f = o(f = t(f = t(f = t(f = t(u = f, p = t(h = p, b = t(_ = b, c = t(r = c, f, p, b, m[l + 0], 7, 3614090360), f, p, m[l + 1], 12, 3905402710), c, f, m[l + 2], 17, 606105819), b, c, m[l + 3], 22, 3250441966), p = t(p, b = t(b, c = t(c, f, p, b, m[l + 4], 7, 4118548399), f, p, m[l + 5], 12, 1200080426), c, f, m[l + 6], 17, 2821735955), b, c, m[l + 7], 22, 4249261313), p = t(p, b = t(b, c = t(c, f, p, b, m[l + 8], 7, 1770035416), f, p, m[l + 9], 12, 2336552879), c, f, m[l + 10], 17, 4294925233), b, c, m[l + 11], 22, 2304563134), p = t(p, b = t(b, c = t(c, f, p, b, m[l + 12], 7, 1804603682), f, p, m[l + 13], 12, 4254626195), c, f, m[l + 14], 17, 2792965006), b, c, m[l + 15], 22, 1236535329), p = o(p, b = o(b, c = o(c, f, p, b, m[l + 1], 5, 4129170786), f, p, m[l + 6], 9, 3225465664), c, f, m[l + 11], 14, 643717713), b, c, m[l + 0], 20, 3921069994), p = o(p, b = o(b, c = o(c, f, p, b, m[l + 5], 5, 3593408605), f, p, m[l + 10], 9, 38016083), c, f, m[l + 15], 14, 3634488961), b, c, m[l + 4], 20, 3889429448), p = o(p, b = o(b, c = o(c, f, p, b, m[l + 9], 5, 568446438), f, p, m[l + 14], 9, 3275163606), c, f, m[l + 3], 14, 4107603335), b, c, m[l + 8], 20, 1163531501), p = o(p, b = o(b, c = o(c, f, p, b, m[l + 13], 5, 2850285829), f, p, m[l + 2], 9, 4243563512), c, f, m[l + 7], 14, 1735328473), b, c, m[l + 12], 20, 2368359562), p = s(p, b = s(b, c = s(c, f, p, b, m[l + 5], 4, 4294588738), f, p, m[l + 8], 11, 2272392833), c, f, m[l + 11], 16, 1839030562), b, c, m[l + 14], 23, 4259657740), p = s(p, b = s(b, c = s(c, f, p, b, m[l + 1], 4, 2763975236), f, p, m[l + 4], 11, 1272893353), c, f, m[l + 7], 16, 4139469664), b, c, m[l + 10], 23, 3200236656), p = s(p, b = s(b, c = s(c, f, p, b, m[l + 13], 4, 681279174), f, p, m[l + 0], 11, 3936430074), c, f, m[l + 3], 16, 3572445317), b, c, m[l + 6], 23, 76029189), p = s(p, b = s(b, c = s(c, f, p, b, m[l + 9], 4, 3654602809), f, p, m[l + 12], 11, 3873151461), c, f, m[l + 15], 16, 530742520), b, c, m[l + 2], 23, 3299628645), p = i(p, b = i(b, c = i(c, f, p, b, m[l + 0], 6, 4096336452), f, p, m[l + 7], 10, 1126891415), c, f, m[l + 14], 15, 2878612391), b, c, m[l + 5], 21, 4237533241), p = i(p, b = i(b, c = i(c, f, p, b, m[l + 12], 6, 1700485571), f, p, m[l + 3], 10, 2399980690), c, f, m[l + 10], 15, 4293915773), b, c, m[l + 1], 21, 2240044497), p = i(p, b = i(b, c = i(c, f, p, b, m[l + 8], 6, 1873313359), f, p, m[l + 15], 10, 4264355552), c, f, m[l + 6], 15, 2734768916), b, c, m[l + 13], 21, 1309151649), p = i(p, b = i(b, c = i(c, f, p, b, m[l + 4], 6, 4149444226), f, p, m[l + 11], 10, 3174756917), c, f, m[l + 2], 15, 718787259), b, c, m[l + 9], 21, 3951481745), c = d(c, r), f = d(f, u), p = d(p, h), b = d(b, _);
            return (n(c) + n(f) + n(p) + n(b)).toLowerCase()
        }, a.getSecondsFromString = function(e) {
            var t = 0,
                o = 0,
                s = 0;
            if (e) return "0" == (t = (e = e.split(":"))[0])[0] && "0" != t[1] && (t = parseInt(t[1])), "00" == t && (t = 0), "0" == (o = e[1])[0] && "0" != o[1] && (o = parseInt(o[1])), "00" == o && (o = 0), secs = parseInt(e[2].replace(/,.*/gi, "")), "0" == secs[0] && "0" != secs[1] && (secs = parseInt(secs[1])), "00" == secs && (secs = 0), 0 != t && (s += 60 * t * 60), 0 != o && (s += 60 * o), s += secs
        }, a.indexOfArray = function(e, t) {
            for (var o = e.length, s = 0; s < o; s++)
                if (e[s] === t) return s;
            return -1
        }, a.randomizeArray = function(e) {
            for (var t = [], o = e.concat(), s = o.length, i = 0; i < s; i++) {
                var n = Math.floor(Math.random() * o.length);
                t.push(o[n]), o.splice(n, 1)
            }
            return t
        }, a.parent = function(e, t) {
            for (void 0 === t && (t = 1); t-- && e;) e = e.parentNode;
            return e && 1 === e.nodeType ? e : null
        }, a.sibling = function(e, t) {
            for (; e && 0 !== t;)
                if (0 < t) {
                    if (e.nextElementSibling) e = e.nextElementSibling;
                    else
                        for (e = e.nextSibling; e && 1 !== e.nodeType; e = e.nextSibling);
                    t--
                } else {
                    if (e.previousElementSibling) e = e.previousElementSibling;
                    else
                        for (e = e.previousSibling; e && 1 !== e.nodeType; e = e.previousSibling);
                    t++
                } return e
        }, a.getChildAt = function(e, t) {
            var o = a.getChildren(e);
            return t < 0 && (t += o.length), t < 0 ? null : o[t]
        }, a.getChildById = function(e) {
            return document.getElementById(e) || void 0
        }, a.getChildren = function(e, t) {
            for (var o = [], s = e.firstChild; null != s; s = s.nextSibling) t ? o.push(s) : 1 === s.nodeType && o.push(s);
            return o
        }, a.getChildrenFromAttribute = function(e, t, o) {
            for (var s = [], i = e.firstChild; null != i; i = i.nextSibling) o && a.hasAttribute(i, t) ? s.push(i) : 1 === i.nodeType && a.hasAttribute(i, t) && s.push(i);
            return 0 == s.length ? void 0 : s
        }, a.getChildFromNodeListFromAttribute = function(e, t, o) {
            for (var s = e.firstChild; null != s; s = s.nextSibling) {
                if (o && a.hasAttribute(s, t)) return s;
                if (1 === s.nodeType && a.hasAttribute(s, t)) return s
            }
        }, a.getAttributeValue = function(e, t) {
            if (a.hasAttribute(e, t)) return e.getAttribute(t)
        }, a.hasAttribute = function(e, t) {
            return e.hasAttribute ? e.hasAttribute(t) : !!e.attributes[t]
        }, a.insertNodeAt = function(e, t, o) {
            var s = a.children(e);
            if (o < 0 || o > s.length) throw new Error("invalid index!");
            e.insertBefore(t, s[o])
        }, a.hasCanvas = function() {
            return Boolean(document.createElement("canvas"))
        }, a.getCanvasWithModifiedColor = function(e, t, o) {
            if (e) {
                var s, i, n = document.createElement("canvas"),
                    l = n.getContext("2d"),
                    r = null,
                    a = parseInt(t.replace(/^#/, ""), 16),
                    d = a >>> 16 & 255,
                    u = a >>> 8 & 255,
                    h = 255 & a;
                n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", n.style.margin = "0px", n.style.padding = "0px", n.style.maxWidth = "none", n.style.maxHeight = "none", n.style.border = "none", n.style.lineHeight = "1", n.style.backgroundColor = "transparent", n.style.backfaceVisibility = "hidden", n.style.webkitBackfaceVisibility = "hidden", n.style.MozBackfaceVisibility = "hidden", n.style.MozImageRendering = "optimizeSpeed", n.style.WebkitImageRendering = "optimizeSpeed", n.width = e.width, n.height = e.height, l.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, e.width, e.height), i = l.getImageData(0, 0, e.width, e.height), r = l.getImageData(0, 0, e.width, e.height);
                for (var _ = 0, c = i.data.length; _ < c; _ += 4) 0 < r.data[_ + 3] && (r.data[_] = i.data[_] / 255 * d, r.data[_ + 1] = i.data[_ + 1] / 255 * u, r.data[_ + 2] = i.data[_ + 2] / 255 * h);
                return l.globalAlpha = .5, l.putImageData(r, 0, 0), l.drawImage(n, 0, 0), o && ((s = new Image).src = n.toDataURL()), {
                    canvas: n,
                    image: s
                }
            }
        }, a.changeCanvasHEXColor = function(e, t, o, s) {
            if (e) {
                var i, n = (t = t).getContext("2d"),
                    l = null,
                    r = parseInt(o.replace(/^#/, ""), 16),
                    a = r >>> 16 & 255,
                    d = r >>> 8 & 255,
                    u = 255 & r;
                t.width = e.width, t.height = e.height, n.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, e.width, e.height), i = n.getImageData(0, 0, e.width, e.height), l = n.getImageData(0, 0, e.width, e.height);
                for (var h = 0, _ = i.data.length; h < _; h += 4) 0 < l.data[h + 3] && (l.data[h] = i.data[h] / 255 * a, l.data[h + 1] = i.data[h + 1] / 255 * d, l.data[h + 2] = i.data[h + 2] / 255 * u);
                if (n.globalAlpha = .5, n.putImageData(l, 0, 0), n.drawImage(t, 0, 0), s) {
                    var c = new Image;
                    return c.src = t.toDataURL(), c
                }
            }
        }, a.hitTest = function(e, t, o) {
            if (!e) throw Error("Hit test target is null!");
            var s = e.getBoundingClientRect();
            return t >= s.left && t <= s.left + (s.right - s.left) && o >= s.top && o <= s.top + (s.bottom - s.top)
        }, a.getScrollOffsets = function() {
            return null != t.pageXOffset ? {
                x: t.pageXOffset,
                y: t.pageYOffset
            } : "CSS1Compat" == document.compatMode ? {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop
            } : void 0
        }, a.getViewportSize = function() {
            return a.hasPointerEvent && 1 < navigator.msMaxTouchPoints ? {
                w: document.documentElement.clientWidth || t.innerWidth,
                h: document.documentElement.clientHeight || t.innerHeight
            } : a.isMobile ? {
                w: t.innerWidth,
                h: t.innerHeight
            } : {
                w: document.documentElement.clientWidth || t.innerWidth,
                h: document.documentElement.clientHeight || t.innerHeight
            }
        }, a.getViewportMouseCoordinates = function(e) {
            var t = a.getScrollOffsets();
            return e.touches ? {
                screenX: null == e.touches[0] ? e.touches.pageX - t.x : e.touches[0].pageX - t.x,
                screenY: null == e.touches[0] ? e.touches.pageY - t.y : e.touches[0].pageY - t.y
            } : {
                screenX: null == e.clientX ? e.pageX - t.x : e.clientX,
                screenY: null == e.clientY ? e.pageY - t.y : e.clientY
            }
        }, a.hexToRgb = function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, o, s) {
                return t + t + o + o + s + s
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return "rgb(" + (t = t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null).r + "," + t.g + "," + t.b + ")"
        }, a.hasPointerEvent = Boolean(t.navigator.msPointerEnabled) || Boolean(t.navigator.pointerEnabled), a.isMobile = function() {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "kfsowi"];
            for (i in e)
                if (-1 != navigator.userAgent.toLowerCase().indexOf(e[i])) return !0;
            return !1
        }(), a.isAndroid = -1 != navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()), a.hasWEBGL = function() {
            try {
                var e = document.createElement("canvas");
                return !!t.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
            } catch (e) {
                return !1
            }
        }(), a.isLocal = "file:" == document.location.protocol, a.isChrome = -1 != navigator.userAgent.toLowerCase().indexOf("chrome"), a.isSafari = -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome"), a.isOpera = -1 != navigator.userAgent.toLowerCase().indexOf("opr"), a.isFirefox = -1 != navigator.userAgent.toLowerCase().indexOf("firefox"), a.isIEWebKit = Boolean(document.documentElement.msRequestFullscreen), a.isIE = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("edge")) || Boolean(document.documentElement.msRequestFullscreen), a.isIEAndLessThen9 = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 7")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 8")), a.isIE7 = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 7")), a.isApple = Boolean(-1 != navigator.appVersion.toLowerCase().indexOf("mac")), a.isIphone = navigator.userAgent.match(/(iPhone|iPod)/g), a.hasFullScreen = a.dumy.requestFullScreen || a.dumy.mozRequestFullScreen || a.dumy.webkitRequestFullScreen || a.dumy.msieRequestFullScreen, a.volumeCanBeSet = function() {
            var e = document.createElement("audio");
            if (e) return (e.volume = 0) == e.volume
        }(), a.getVideoFormat = function() {
            var e, t = document.createElement("video");
            if (t.canPlayType) return "probably" == t.canPlayType("video/mp4") || "maybe" == t.canPlayType("video/mp4") ? e = ".mp4" : "probably" == t.canPlayType("video/ogg") || "maybe" == t.canPlayType("video/ogg") ? e = ".ogg" : "probably" != t.canPlayType("video/webm") && "maybe" != t.canPlayType("video/webm") || (e = ".webm"), t = null, e
        }(), a.onReady = function(e) {
            document.addEventListener ? t.addEventListener("DOMContentLoaded", function() {
                a.checkIfHasTransofrms(), a.hasFullScreen = a.checkIfHasFullscreen(), setTimeout(e, 100)
            }) : document.onreadystatechange = function() {
                a.checkIfHasTransofrms(), a.hasFullScreen = a.checkIfHasFullscreen(), "complete" == document.readyState && setTimeout(e, 100)
            }
        }, a.checkIfHasTransofrms = function() {
            document.documentElement.appendChild(a.dumy), a.hasTransform3d = function() {
                for (var e, t, o = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; e = o.shift();)
                    if (void 0 !== a.dumy.style[e] && (a.dumy.style.position = "absolute", t = a.dumy.getBoundingClientRect().left, a.dumy.style[e] = "translate3d(500px, 0px, 0px)", 100 < (t = Math.abs(a.dumy.getBoundingClientRect().left - t)) && t < 900)) {
                        try {
                            document.documentElement.removeChild(a.dumy)
                        } catch (e) {}
                        return !0
                    } try {
                    document.documentElement.removeChild(a.dumy)
                } catch (e) {}
                return !1
            }(), a.hasTransform2d = function() {
                for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; e = t.shift();)
                    if (void 0 !== a.dumy.style[e]) return !0;
                try {
                    document.documentElement.removeChild(a.dumy)
                } catch (e) {}
                return !1
            }(), a.isReadyMethodCalled_bl = !0
        }, a.checkIfHasFullscreen = function() {
            return Boolean(document.documentElement.requestFullScreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.msRequestFullscreen)
        }, a.disableElementSelection = function(e) {
            try {
                e.style.userSelect = "none"
            } catch (e) {}
            try {
                e.style.MozUserSelect = "none"
            } catch (e) {}
            try {
                e.style.webkitUserSelect = "none"
            } catch (e) {}
            try {
                e.style.khtmlUserSelect = "none"
            } catch (e) {}
            try {
                e.style.oUserSelect = "none"
            } catch (e) {}
            try {
                e.style.msUserSelect = "none"
            } catch (e) {}
            try {
                e.msUserSelect = "none"
            } catch (e) {}
            e.onselectstart = function() {
                return !1
            }
        }, a.getUrlArgs = function(e) {
            for (var t = {}, o = e.substr(e.indexOf("?") + 1) || location.search.substring(1), s = (o = o.replace(/(\?*)(\/*)/g, "")).split("&"), i = 0; i < s.length; i++) {
                var n = s[i].indexOf("="),
                    l = s[i].substring(0, n),
                    r = s[i].substring(n + 1);
                r = decodeURIComponent(r), t[l] = r
            }
            return t
        }, a.getHashUrlArgs = function(e) {
            for (var t = {}, o = e.substr(e.indexOf("#") + 1) || location.search.substring(1), s = (o = o.replace(/(\?*)(\/*)/g, "")).split("&"), i = 0; i < s.length; i++) {
                var n = s[i].indexOf("="),
                    l = s[i].substring(0, n),
                    r = s[i].substring(n + 1);
                r = decodeURIComponent(r), t[l] = r
            }
            return t
        }, a.validateEmail = function(e) {
            return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)
        }, a.isReadyMethodCalled_bl = !1, t.FWDEVPUtils = a
    }(window), !window.FWDAnimation) {
    var _fwd_gsScope = "undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window;
    (_fwd_gsScope._fwd_gsQueue || (_fwd_gsScope._fwd_gsQueue = [])).push(function() {
            "use strict";
            var E, S, P, w, m, o, g, T, y, v, c, f, b, e, t, a, s;
            _fwd_gsScope.FWDFWD_gsDefine("FWDAnimation", ["core.FWDAnim", "core.FWDSimpleTimeline", "FWDTweenLite"], function(s, u, b) {
                var m = function(e) {
                        var t, o = [],
                            s = e.length;
                        for (t = 0; t !== s; o.push(e[t++]));
                        return o
                    },
                    g = function(e, t, o) {
                        var s, i, n = e.cycle;
                        for (s in n) i = n[s], e[s] = "function" == typeof i ? i(o, t[o]) : i[o % i.length];
                        delete e.cycle
                    },
                    y = function(e, t, o) {
                        b.call(this, e, t, o), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = y.prototype.render
                    },
                    v = 1e-10,
                    S = b._internals,
                    P = S.isSelector,
                    E = S.isArray,
                    e = y.prototype = b.to({}, .1, {}),
                    w = [];
                y.version = "1.19.0", e.constructor = y, e.kill()._gc = !1, y.killTweensOf = y.killDelayedCallsTo = b.killTweensOf, y.getTweensOf = b.getTweensOf, y.lagSmoothing = b.lagSmoothing, y.ticker = b.ticker, y.render = b.render, e.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), b.prototype.invalidate.call(this)
                }, e.updateTo = function(e, t) {
                    var o, s = this.ratio,
                        i = this.vars.immediateRender || e.immediateRender;
                    for (o in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[o] = e[o];
                    if (this._initted || i)
                        if (t) this._initted = !1, i && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && b._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                        var n = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                    } else if (this._initted = !1, this._init(), 0 < this._time || i)
                        for (var l, r = 1 / (1 - s), a = this._firstPT; a;) l = a.s + a.c, a.c *= r, a.s = l - a.c, a = a._next;
                    return this
                }, e.render = function(e, t, o) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, i, n, l, r, a, d, u, h = this._dirty ? this.totalDuration() : this._totalDuration,
                        _ = this._time,
                        c = this._totalTime,
                        f = this._cycle,
                        p = this._duration,
                        b = this._rawPrevTime;
                    if (h - 1e-7 <= e ? (this._totalTime = h, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = p, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, i = "onComplete", o = o || this._timeline.autoRemoveChildren), 0 === p && (this._initted || !this.vars.lazy || o) && (this._startTime === this._timeline._duration && (e = 0), (b < 0 || e <= 0 && -1e-7 <= e || b === v && "isPause" !== this.data) && b !== e && (o = !0, v < b && (i = "onReverseComplete")), this._rawPrevTime = u = !t || e || b === e ? e : v)) : e < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== c || 0 === p && 0 < b) && (i = "onReverseComplete", s = this._reversed), e < 0 && (this._active = !1, 0 === p && (this._initted || !this.vars.lazy || o) && (0 <= b && (o = !0), this._rawPrevTime = u = !t || e || b === e ? e : v)), this._initted || (o = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = p + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && c <= e && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = p - this._time), this._time > p ? this._time = p : this._time < 0 && (this._time = 0)), this._easeType ? (r = this._time / p, (1 === (a = this._easeType) || 3 === a && .5 <= r) && (r = 1 - r), 3 === a && (r *= 2), 1 === (d = this._easePower) ? r *= r : 2 === d ? r *= r * r : 3 === d ? r *= r * r * r : 4 === d && (r *= r * r * r * r), 1 === a ? this.ratio = 1 - r : 2 === a ? this.ratio = r : this._time / p < .5 ? this.ratio = r / 2 : this.ratio = 1 - r / 2) : this.ratio = this._ease.getRatio(this._time / p)), _ !== this._time || o || f !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!o && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = _, this._totalTime = c, this._rawPrevTime = b, this._cycle = f, S.lazyTweens.push(this), void(this._lazy = [e, t]);
                            this._time && !s ? this.ratio = this._ease.getRatio(this._time / p) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== _ && 0 <= e && (this._active = !0), 0 === c && (2 === this._initted && 0 < e && this._init(), this._startAt && (0 <= e ? this._startAt.render(e, t, o) : i || (i = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== p || t || this._callback("onStart"))), n = this._firstPT; n;) {
                            if (n.f) n.t[n.p](n.c * this.ratio + n.s);
                            else {
                                var m = n.c * this.ratio + n.s;
                                "x" == n.p ? n.t.setX(m) : "y" == n.p ? n.t.setY(m) : "z" == n.p ? n.t.setZ(m) : "angleX" == n.p ? n.t.setAngleX(m) : "angleY" == n.p ? n.t.setAngleY(m) : "angleZ" == n.p ? n.t.setAngleZ(m) : "w" == n.p ? n.t.setWidth(m) : "h" == n.p ? n.t.setHeight(m) : "alpha" == n.p ? n.t.setAlpha(m) : "scale" == n.p ? n.t.setScale2(m) : n.t[n.p] = m
                            }
                            n = n._next
                        }
                        this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, o), t || (this._totalTime !== c || i) && this._callback("onUpdate")), this._cycle !== f && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), i && (this._gc && !o || (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, o), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this._callback(i), 0 === p && this._rawPrevTime === v && u !== v && (this._rawPrevTime = 0)))
                    } else c !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
                }, y.to = function(e, t, o) {
                    return new y(e, t, o)
                }, y.from = function(e, t, o) {
                    return o.runBackwards = !0, o.immediateRender = 0 != o.immediateRender, new y(e, t, o)
                }, y.fromTo = function(e, t, o, s) {
                    return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, new y(e, t, s)
                }, y.staggerTo = y.allTo = function(e, t, o, s, i, n, l) {
                    s = s || 0;
                    var r, a, d, u, h = 0,
                        _ = [],
                        c = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), i.apply(l || o.callbackScope || this, n || w)
                        },
                        f = o.cycle,
                        p = o.startAt && o.startAt.cycle;
                    for (E(e) || ("string" == typeof e && (e = b.selector(e) || e), P(e) && (e = m(e))), e = e || [], s < 0 && ((e = m(e)).reverse(), s *= -1), r = e.length - 1, d = 0; d <= r; d++) {
                        for (u in a = {}, o) a[u] = o[u];
                        if (f && (g(a, e, d), null != a.duration && (t = a.duration, delete a.duration)), p) {
                            for (u in p = a.startAt = {}, o.startAt) p[u] = o.startAt[u];
                            g(a.startAt, e, d)
                        }
                        a.delay = h + (a.delay || 0), d === r && i && (a.onComplete = c), _[d] = new y(e[d], t, a), h += s
                    }
                    return _
                }, y.staggerFrom = y.allFrom = function(e, t, o, s, i, n, l) {
                    return o.runBackwards = !0, o.immediateRender = 0 != o.immediateRender, y.staggerTo(e, t, o, s, i, n, l)
                }, y.staggerFromTo = y.allFromTo = function(e, t, o, s, i, n, l, r) {
                    return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, y.staggerTo(e, t, s, i, n, l, r)
                }, y.delayedCall = function(e, t, o, s, i) {
                    return new y(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: o,
                        callbackScope: s,
                        onReverseComplete: t,
                        onReverseCompleteParams: o,
                        immediateRender: !1,
                        useFrames: i,
                        overwrite: 0
                    })
                }, y.set = function(e, t) {
                    return new y(e, 0, t)
                }, y.isTweening = function(e) {
                    return 0 < b.getTweensOf(e, !0).length
                };
                var n = function(e, t) {
                        for (var o = [], s = 0, i = e._first; i;) i instanceof b ? o[s++] = i : (t && (o[s++] = i), s = (o = o.concat(n(i, t))).length), i = i._next;
                        return o
                    },
                    h = y.getAllTweens = function(e) {
                        return n(s._rootTimeline, e).concat(n(s._rootFramesTimeline, e))
                    };
                y.killAll = function(e, t, o, s) {
                    null == t && (t = !0), null == o && (o = !0);
                    var i, n, l, r = h(0 != s),
                        a = r.length,
                        d = t && o && s;
                    for (l = 0; l < a; l++) n = r[l], (d || n instanceof u || (i = n.target === n.vars.onComplete) && o || t && !i) && (e ? n.totalTime(n._reversed ? 0 : n.totalDuration()) : n._enabled(!1, !1))
                }, y.killChildTweensOf = function(e, t) {
                    if (null != e) {
                        var o, s, i, n, l, r = S.tweenLookup;
                        if ("string" == typeof e && (e = b.selector(e) || e), P(e) && (e = m(e)), E(e))
                            for (n = e.length; - 1 < --n;) y.killChildTweensOf(e[n], t);
                        else {
                            for (i in o = [], r)
                                for (s = r[i].target.parentNode; s;) s === e && (o = o.concat(r[i].tweens)), s = s.parentNode;
                            for (l = o.length, n = 0; n < l; n++) t && o[n].totalTime(o[n].totalDuration()), o[n]._enabled(!1, !1)
                        }
                    }
                };
                var i = function(e, t, o, s) {
                    t = !1 !== t, o = !1 !== o;
                    for (var i, n, l = h(s = !1 !== s), r = t && o && s, a = l.length; - 1 < --a;) n = l[a], (r || n instanceof u || (i = n.target === n.vars.onComplete) && o || t && !i) && n.paused(e)
                };
                return y.pauseAll = function(e, t, o) {
                    i(!0, e, t, o)
                }, y.resumeAll = function(e, t, o) {
                    i(!1, e, t, o)
                }, y.globalTimeScale = function(e) {
                    var t = s._rootTimeline,
                        o = b.ticker.time;
                    return arguments.length ? (e = e || v, t._startTime = o - (o - t._startTime) * t._timeScale / e, t = s._rootFramesTimeline, o = b.ticker.frame, t._startTime = o - (o - t._startTime) * t._timeScale / e, t._timeScale = s._rootTimeline._timeScale = e, e) : t._timeScale
                }, e.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, e.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, e.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, e.duration = function(e) {
                    return arguments.length ? s.prototype.duration.call(this, e) : this._duration
                }, e.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, e.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, e.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, e.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, y
            }, !0), _fwd_gsScope.FWDFWD_gsDefine("FWDTimelineLite", ["core.FWDAnim", "core.FWDSimpleTimeline", "FWDTweenLite"], function(u, h, _) {
                var c = function(e) {
                        h.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var t, o, s = this.vars;
                        for (o in s) t = s[o], b(t) && -1 !== t.join("").indexOf("{self}") && (s[o] = this._swapSelfInParams(t));
                        b(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    p = 1e-10,
                    e = _._internals,
                    t = c._internals = {},
                    f = e.isSelector,
                    b = e.isArray,
                    m = e.lazyTweens,
                    g = e.lazyRender,
                    l = _fwd_gsScope.FWDFWD_gsDefine.globals,
                    y = function(e) {
                        var t, o = {};
                        for (t in e) o[t] = e[t];
                        return o
                    },
                    v = function(e, t, o) {
                        var s, i, n = e.cycle;
                        for (s in n) i = n[s], e[s] = "function" == typeof i ? i.call(t[o], o) : i[o % i.length];
                        delete e.cycle
                    },
                    n = t.pauseCallback = function() {},
                    S = function(e) {
                        var t, o = [],
                            s = e.length;
                        for (t = 0; t !== s; o.push(e[t++]));
                        return o
                    },
                    o = c.prototype = new h;
                return c.version = "1.19.0", o.constructor = c, o.kill()._gc = o._forcingPlayhead = o._hasPause = !1, o.to = function(e, t, o, s) {
                    var i = o.repeat && l.FWDAnimation || _;
                    return t ? this.add(new i(e, t, o), s) : this.set(e, o, s)
                }, o.from = function(e, t, o, s) {
                    return this.add((o.repeat && l.FWDAnimation || _).from(e, t, o), s)
                }, o.fromTo = function(e, t, o, s, i) {
                    var n = s.repeat && l.FWDAnimation || _;
                    return t ? this.add(n.fromTo(e, t, o, s), i) : this.set(e, s, i)
                }, o.staggerTo = function(e, t, o, s, i, n, l, r) {
                    var a, d, u = new c({
                            onComplete: n,
                            onCompleteParams: l,
                            callbackScope: r,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        h = o.cycle;
                    for ("string" == typeof e && (e = _.selector(e) || e), f(e = e || []) && (e = S(e)), (s = s || 0) < 0 && ((e = S(e)).reverse(), s *= -1), d = 0; d < e.length; d++)(a = y(o)).startAt && (a.startAt = y(a.startAt), a.startAt.cycle && v(a.startAt, e, d)), h && (v(a, e, d), null != a.duration && (t = a.duration, delete a.duration)), u.to(e[d], t, a, d * s);
                    return this.add(u, i)
                }, o.staggerFrom = function(e, t, o, s, i, n, l, r) {
                    return o.immediateRender = 0 != o.immediateRender, o.runBackwards = !0, this.staggerTo(e, t, o, s, i, n, l, r)
                }, o.staggerFromTo = function(e, t, o, s, i, n, l, r, a) {
                    return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, this.staggerTo(e, t, s, i, n, l, r, a)
                }, o.call = function(e, t, o, s) {
                    return this.add(_.delayedCall(0, e, t, o), s)
                }, o.set = function(e, t, o) {
                    return o = this._parseTimeOrLabel(o, 0, !0), null == t.immediateRender && (t.immediateRender = o === this._time && !this._paused), this.add(new _(e, 0, t), o)
                }, c.exportRoot = function(e, t) {
                    null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                    var o, s, i = new c(e),
                        n = i._timeline;
                    for (null == t && (t = !0), n._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = n._time, o = n._first; o;) s = o._next, t && o instanceof _ && o.target === o.vars.onComplete || i.add(o, o._startTime - o._delay), o = s;
                    return n.add(i, 0), i
                }, o.add = function(e, t, o, s) {
                    var i, n, l, r, a, d;
                    if ("number" != typeof t && (t = this._parseTimeOrLabel(t, 0, !0, e)), !(e instanceof u)) {
                        if (e instanceof Array || e && e.push && b(e)) {
                            for (o = o || "normal", s = s || 0, i = t, n = e.length, l = 0; l < n; l++) b(r = e[l]) && (r = new c({
                                tweens: r
                            })), this.add(r, i), "string" != typeof r && "function" != typeof r && ("sequence" === o ? i = r._startTime + r.totalDuration() / r._timeScale : "start" === o && (r._startTime -= r.delay())), i += s;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, t);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = _.delayedCall(0, e)
                    }
                    if (h.prototype.add.call(this, e, t), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (d = (a = this).rawTime() > e._startTime; a._timeline;) d && a._timeline.smoothChildTiming ? a.totalTime(a._totalTime, !0) : a._gc && a._enabled(!0, !1), a = a._timeline;
                    return this
                }, o.remove = function(e) {
                    if (e instanceof u) {
                        this._remove(e, !1);
                        var t = e._timeline = e.vars.useFrames ? u._rootFramesTimeline : u._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && b(e)) {
                        for (var o = e.length; - 1 < --o;) this.remove(e[o]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, o._remove = function(e, t) {
                    h.prototype._remove.call(this, e, t);
                    var o = this._last;
                    return o ? this._time > o._startTime + o._totalDuration / o._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, o.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, o.insert = o.insertMultiple = function(e, t, o, s) {
                    return this.add(e, t || 0, o, s)
                }, o.appendMultiple = function(e, t, o, s) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), o, s)
                }, o.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, o.addPause = function(e, t, o, s) {
                    var i = _.delayedCall(0, n, o, s || this);
                    return i.vars.onComplete = i.vars.onReverseComplete = t, i.data = "isPause", this._hasPause = !0, this.add(i, e)
                }, o.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, o.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, o._parseTimeOrLabel = function(e, t, o, s) {
                    var i;
                    if (s instanceof u && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && b(s)))
                        for (i = s.length; - 1 < --i;) s[i] instanceof u && s[i].timeline === this && this.remove(s[i]);
                    if ("string" == typeof t) return this._parseTimeOrLabel(t, o && "number" == typeof e && null == this._labels[t] ? e - this.duration() : 0, o);
                    if (t = t || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (-1 === (i = e.indexOf("="))) return null == this._labels[e] ? o ? this._labels[e] = this.duration() + t : t : this._labels[e] + t;
                        t = parseInt(e.charAt(i - 1) + "1", 10) * Number(e.substr(i + 1)), e = 1 < i ? this._parseTimeOrLabel(e.substr(0, i - 1), 0, o) : this.duration()
                    }
                    return Number(e) + t
                }, o.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
                }, o.stop = function() {
                    return this.paused(!0)
                }, o.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, o.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, o.render = function(e, t, o) {
                    this._gc && this._enabled(!0, !1);
                    var s, i, n, l, r, a, d, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        h = this._time,
                        _ = this._startTime,
                        c = this._timeScale,
                        f = this._paused;
                    if (u - 1e-7 <= e) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (i = !0, l = "onComplete", r = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || this._rawPrevTime < 0 || this._rawPrevTime === p) && this._rawPrevTime !== e && this._first && (r = !0, this._rawPrevTime > p && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : p, e = u + 1e-4;
                    else if (e < 1e-7)
                        if (this._totalTime = this._time = 0, (0 !== h || 0 === this._duration && this._rawPrevTime !== p && (0 < this._rawPrevTime || e < 0 && 0 <= this._rawPrevTime)) && (l = "onReverseComplete", i = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (r = i = !0, l = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (r = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : p, 0 === e && i)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (i = !1), s = s._next;
                            e = 0, this._initted || (r = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !t) {
                            if (h <= e)
                                for (s = this._first; s && s._startTime <= e && !a;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (a = s), s = s._next;
                            else
                                for (s = this._last; s && s._startTime >= e && !a;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (a = s), s = s._prev;
                            a && (this._time = e = a._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = e
                    }
                    if (this._time !== h && this._first || o || r || a) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== h && 0 < e && (this._active = !0), 0 === h && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), h <= (d = this._time))
                            for (s = this._first; s && (n = s._next, d === this._time && (!this._paused || f));)(s._active || s._startTime <= d && !s._paused && !s._gc) && (a === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, o) : s.render((e - s._startTime) * s._timeScale, t, o)), s = n;
                        else
                            for (s = this._last; s && (n = s._prev, d === this._time && (!this._paused || f));) {
                                if (s._active || s._startTime <= h && !s._paused && !s._gc) {
                                    if (a === s) {
                                        for (a = s._prev; a && a.endTime() > this._time;) a.render(a._reversed ? a.totalDuration() - (e - a._startTime) * a._timeScale : (e - a._startTime) * a._timeScale, t, o), a = a._prev;
                                        a = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, o) : s.render((e - s._startTime) * s._timeScale, t, o)
                                }
                                s = n
                            }
                        this._onUpdate && (t || (m.length && g(), this._callback("onUpdate"))), l && (this._gc || _ !== this._startTime && c === this._timeScale || (0 === this._time || u >= this.totalDuration()) && (i && (m.length && g(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this._callback(l)))
                    }
                }, o._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof c && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, o.getChildren = function(e, t, o, s) {
                    s = s || -9999999999;
                    for (var i = [], n = this._first, l = 0; n;) n._startTime < s || (n instanceof _ ? !1 !== t && (i[l++] = n) : (!1 !== o && (i[l++] = n), !1 !== e && (l = (i = i.concat(n.getChildren(!0, t, o))).length))), n = n._next;
                    return i
                }, o.getTweensOf = function(e, t) {
                    var o, s, i = this._gc,
                        n = [],
                        l = 0;
                    for (i && this._enabled(!0, !0), s = (o = _.getTweensOf(e)).length; - 1 < --s;)(o[s].timeline === this || t && this._contains(o[s])) && (n[l++] = o[s]);
                    return i && this._enabled(!1, !0), n
                }, o.recent = function() {
                    return this._recent
                }, o._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, o.shiftChildren = function(e, t, o) {
                    o = o || 0;
                    for (var s, i = this._first, n = this._labels; i;) i._startTime >= o && (i._startTime += e), i = i._next;
                    if (t)
                        for (s in n) n[s] >= o && (n[s] += e);
                    return this._uncache(!0)
                }, o._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var o = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), s = o.length, i = !1; - 1 < --s;) o[s]._kill(e, t) && (i = !0);
                    return i
                }, o.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        o = t.length;
                    for (this._time = this._totalTime = 0; - 1 < --o;) t[o]._enabled(!1, !1);
                    return !1 !== e && (this._labels = {}), this._uncache(!0)
                }, o.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return u.prototype.invalidate.call(this)
                }, o._enabled = function(e, t) {
                    if (e === this._gc)
                        for (var o = this._first; o;) o._enabled(e, !0), o = o._next;
                    return h.prototype._enabled.call(this, e, t)
                }, o.totalTime = function(e, t, o) {
                    this._forcingPlayhead = !0;
                    var s = u.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, s
                }, o.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, o.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, o, s = 0, i = this._last, n = 999999999999; i;) t = i._prev, i._dirty && i.totalDuration(), i._startTime > n && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : n = i._startTime, i._startTime < 0 && !i._paused && (s -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), n = 0), s < (o = i._startTime + i._totalDuration / i._timeScale) && (s = o), i = t;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
                }, o.paused = function(e) {
                    if (!e)
                        for (var t = this._first, o = this._time; t;) t._startTime === o && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
                    return u.prototype.paused.apply(this, arguments)
                }, o.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === u._rootFramesTimeline
                }, o.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, c
            }, !0), _fwd_gsScope.FWDFWD_gsDefine("TimelineMax", ["FWDTimelineLite", "FWDTweenLite", "easing.Ease"], function(t, r, e) {
                var o = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    D = 1e-10,
                    s = r._internals,
                    W = s.lazyTweens,
                    B = s.lazyRender,
                    a = _fwd_gsScope.FWDFWD_gsDefine.globals,
                    d = new e(null, null, 1, 0),
                    i = o.prototype = new t;
                return i.constructor = o, i.kill()._gc = !1, o.version = "1.19.0", i.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, i.addCallback = function(e, t, o, s) {
                    return this.add(r.delayedCall(0, e, o, s), t)
                }, i.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var o = this.getTweensOf(e, !1), s = o.length, i = this._parseTimeOrLabel(t); - 1 < --s;) o[s]._startTime === i && o[s]._enabled(!1, !1);
                    return this
                }, i.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, i.tweenTo = function(e, t) {
                    t = t || {};
                    var o, s, i, n = {
                            ease: d,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        l = t.repeat && a.FWDAnimation || r;
                    for (s in t) n[s] = t[s];
                    return n.time = this._parseTimeOrLabel(e), o = Math.abs(Number(n.time) - this._time) / this._timeScale || .001, i = new l(this, o, n), n.onStart = function() {
                        i.target.paused(!0), i.vars.time !== i.target.time() && o === i.duration() && i.duration(Math.abs(i.vars.time - i.target.time()) / i.target._timeScale), t.onStart && i._callback("onStart")
                    }, i
                }, i.tweenFromTo = function(e, t, o) {
                    o = o || {}, e = this._parseTimeOrLabel(e), o.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        callbackScope: this
                    }, o.immediateRender = !1 !== o.immediateRender;
                    var s = this.tweenTo(t, o);
                    return s.duration(Math.abs(s.vars.time - e) / this._timeScale || .001)
                }, i.render = function(e, t, o) {
                    this._gc && this._enabled(!0, !1);
                    var s, i, n, l, r, a, d, u, h = this._dirty ? this.totalDuration() : this._totalDuration,
                        _ = this._duration,
                        c = this._time,
                        f = this._totalTime,
                        p = this._startTime,
                        b = this._timeScale,
                        m = this._rawPrevTime,
                        g = this._paused,
                        y = this._cycle;
                    if (h - 1e-7 <= e) this._locked || (this._totalTime = h, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (i = !0, l = "onComplete", r = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || m < 0 || m === D) && m !== e && this._first && (r = !0, D < m && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : D, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : e = (this._time = _) + 1e-4;
                    else if (e < 1e-7)
                        if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== c || 0 === _ && m !== D && (0 < m || e < 0 && 0 <= m) && !this._locked) && (l = "onReverseComplete", i = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (r = i = !0, l = "onReverseComplete") : 0 <= m && this._first && (r = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = _ || !t || e || this._rawPrevTime === e ? e : D, 0 === e && i)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (i = !1), s = s._next;
                            e = 0, this._initted || (r = !0)
                        }
                    else if (0 === _ && m < 0 && (r = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (a = _ + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && f <= e && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? e = (this._time = _) + 1e-4 : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                        if (c <= (e = this._time))
                            for (s = this._first; s && s._startTime <= e && !d;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (d = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= e && !d;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (d = s), s = s._prev;
                        d && (this._time = e = d._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== y && !this._locked) {
                        var v = this._yoyo && 0 != (1 & y),
                            S = v === (this._yoyo && 0 != (1 & this._cycle)),
                            P = this._totalTime,
                            E = this._cycle,
                            w = this._rawPrevTime,
                            T = this._time;
                        if (this._totalTime = y * _, this._cycle < y ? v = !v : this._totalTime += _, this._time = c, this._rawPrevTime = 0 === _ ? m - 1e-4 : m, this._cycle = y, this._locked = !0, c = v ? 0 : _, this.render(c, t, 0 === _), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), c !== this._time) return;
                        if (S && (c = v ? _ + 1e-4 : -1e-4, this.render(c, !0, !1)), this._locked = !1, this._paused && !g) return;
                        this._time = T, this._totalTime = P, this._cycle = E, this._rawPrevTime = w
                    }
                    if (this._time !== c && this._first || o || r || d) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < e && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), c <= (u = this._time))
                            for (s = this._first; s && (n = s._next, u === this._time && (!this._paused || g));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (d === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, o) : s.render((e - s._startTime) * s._timeScale, t, o)), s = n;
                        else
                            for (s = this._last; s && (n = s._prev, u === this._time && (!this._paused || g));) {
                                if (s._active || s._startTime <= c && !s._paused && !s._gc) {
                                    if (d === s) {
                                        for (d = s._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (e - d._startTime) * d._timeScale : (e - d._startTime) * d._timeScale, t, o), d = d._prev;
                                        d = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, o) : s.render((e - s._startTime) * s._timeScale, t, o)
                                }
                                s = n
                            }
                        this._onUpdate && (t || (W.length && B(), this._callback("onUpdate"))), l && (this._locked || this._gc || p !== this._startTime && b === this._timeScale || (0 === this._time || h >= this.totalDuration()) && (i && (W.length && B(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this._callback(l)))
                    } else f !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
                }, i.getActive = function(e, t, o) {
                    null == e && (e = !0), null == t && (t = !0), null == o && (o = !1);
                    var s, i, n = [],
                        l = this.getChildren(e, t, o),
                        r = 0,
                        a = l.length;
                    for (s = 0; s < a; s++)(i = l[s]).isActive() && (n[r++] = i);
                    return n
                }, i.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, o = this.getLabelsArray(),
                        s = o.length;
                    for (t = 0; t < s; t++)
                        if (o[t].time > e) return o[t].name;
                    return null
                }, i.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), o = t.length; - 1 < --o;)
                        if (t[o].time < e) return t[o].name;
                    return null
                }, i.getLabelsArray = function() {
                    var e, t = [],
                        o = 0;
                    for (e in this._labels) t[o++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, i.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, i.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, i.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, i.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, i.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, i.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, i.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, i.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, o
            }, !0), E = 180 / Math.PI, S = [], P = [], w = [], m = {}, o = _fwd_gsScope.FWDFWD_gsDefine.globals, g = function(e, t, o, s) {
                o === s && (o = s - (s - t) / 1e6), e === t && (t = e + (o - e) / 1e6), this.a = e, this.b = t, this.c = o, this.d = s, this.da = s - e, this.ca = o - e, this.ba = t - e
            }, T = function(e, t, o, s) {
                var i = {
                        a: e
                    },
                    n = {},
                    l = {},
                    r = {
                        c: s
                    },
                    a = (e + t) / 2,
                    d = (t + o) / 2,
                    u = (o + s) / 2,
                    h = (a + d) / 2,
                    _ = (d + u) / 2,
                    c = (_ - h) / 8;
                return i.b = a + (e - a) / 4, n.b = h + c, i.c = n.a = (i.b + n.b) / 2, n.c = l.a = (h + _) / 2, l.b = _ - c, r.b = u + (s - u) / 4, l.c = r.a = (l.b + r.b) / 2, [i, n, l, r]
            }, y = function(e, t, o, s, i) {
                var n, l, r, a, d, u, h, _, c, f, p, b, m, g = e.length - 1,
                    y = 0,
                    v = e[0].a;
                for (n = 0; n < g; n++) l = (d = e[y]).a, r = d.d, a = e[y + 1].d, i ? (p = S[n], m = ((b = P[n]) + p) * t * .25 / (s ? .5 : w[n] || .5), _ = r - ((u = r - (r - l) * (s ? .5 * t : 0 !== p ? m / p : 0)) + (((h = r + (a - r) * (s ? .5 * t : 0 !== b ? m / b : 0)) - u) * (3 * p / (p + b) + .5) / 4 || 0))) : _ = r - ((u = r - (r - l) * t * .5) + (h = r + (a - r) * t * .5)) / 2, u += _, h += _, d.c = c = u, d.b = 0 !== n ? v : v = d.a + .6 * (d.c - d.a), d.da = r - l, d.ca = c - l, d.ba = v - l, o ? (f = T(l, v, c, r), e.splice(y, 1, f[0], f[1], f[2], f[3]), y += 4) : y++, v = h;
                (d = e[y]).b = v, d.c = v + .4 * (d.d - v), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = v - d.a, o && (f = T(d.a, v, d.c, d.d), e.splice(y, 1, f[0], f[1], f[2], f[3]))
            }, v = function(e, t, o, s) {
                var i, n, l, r, a, d, u = [];
                if (s)
                    for (n = (e = [s].concat(e)).length; - 1 < --n;) "string" == typeof(d = e[n][t]) && "=" === d.charAt(1) && (e[n][t] = s[t] + Number(d.charAt(0) + d.substr(2)));
                if ((i = e.length - 2) < 0) return u[0] = new g(e[0][t], 0, 0, e[i < -1 ? 0 : 1][t]), u;
                for (n = 0; n < i; n++) l = e[n][t], r = e[n + 1][t], u[n] = new g(l, 0, 0, r), o && (a = e[n + 2][t], S[n] = (S[n] || 0) + (r - l) * (r - l), P[n] = (P[n] || 0) + (a - r) * (a - r));
                return u[n] = new g(e[n][t], 0, 0, e[n + 1][t]), u
            }, c = function(e, t, o, s, i, n) {
                var l, r, a, d, u, h, _, c, f = {},
                    p = [],
                    b = n || e[0];
                for (r in i = "string" == typeof i ? "," + i + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) p.push(r);
                if (1 < e.length) {
                    for (c = e[e.length - 1], _ = !0, l = p.length; - 1 < --l;)
                        if (r = p[l], .05 < Math.abs(b[r] - c[r])) {
                            _ = !1;
                            break
                        } _ && (e = e.concat(), n && e.unshift(n), e.push(e[1]), n = e[e.length - 3])
                }
                for (S.length = P.length = w.length = 0, l = p.length; - 1 < --l;) r = p[l], m[r] = -1 !== i.indexOf("," + r + ","), f[r] = v(e, r, m[r], n);
                for (l = S.length; - 1 < --l;) S[l] = Math.sqrt(S[l]), P[l] = Math.sqrt(P[l]);
                if (!s) {
                    for (l = p.length; - 1 < --l;)
                        if (m[r])
                            for (h = (a = f[p[l]]).length - 1, d = 0; d < h; d++) u = a[d + 1].da / P[d] + a[d].da / S[d] || 0, w[d] = (w[d] || 0) + u * u;
                    for (l = w.length; - 1 < --l;) w[l] = Math.sqrt(w[l])
                }
                for (l = p.length, d = o ? 4 : 1; - 1 < --l;) a = f[r = p[l]], y(a, t, o, s, m[r]), _ && (a.splice(0, d), a.splice(a.length - d, d));
                return f
            }, f = function(e, t, o) {
                for (var s, i, n, l, r, a, d, u, h, _, c, f = 1 / o, p = e.length; - 1 < --p;)
                    for (n = (_ = e[p]).a, l = _.d - n, r = _.c - n, a = _.b - n, s = i = 0, u = 1; u <= o; u++) s = i - (i = ((d = f * u) * d * l + 3 * (h = 1 - d) * (d * r + h * a)) * d), t[c = p * o + u - 1] = (t[c] || 0) + s * s
            }, b = _fwd_gsScope.FWDFWD_gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.7",
                API: 2,
                fwd_global: !0,
                init: function(e, t, o) {
                    this._target = e, t instanceof Array && (t = {
                        values: t
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                    var s, i, n, l, r, a = t.values || [],
                        d = {},
                        u = a[0],
                        h = t.autoRotate || o.vars.orientToBezier;
                    for (s in this._autoRotate = h ? h instanceof Array ? h : [
                            ["x", "y", "rotation", !0 === h ? 0 : Number(h) || 0]
                        ] : null, u) this._props.push(s);
                    for (n = this._props.length; - 1 < --n;) s = this._props[n], this._overwriteProps.push(s), i = this._func[s] = "function" == typeof e[s], d[s] = i ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), r || d[s] !== a[0][s] && (r = d);
                    if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? c(a, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, r) : function(e, t, o) {
                            var s, i, n, l, r, a, d, u, h, _, c, f = {},
                                p = "cubic" === (t = t || "soft") ? 3 : 2,
                                b = "soft" === t,
                                m = [];
                            if (b && o && (e = [o].concat(e)), null == e || e.length < p + 1) throw "invalid Bezier data";
                            for (h in e[0]) m.push(h);
                            for (a = m.length; - 1 < --a;) {
                                for (f[h = m[a]] = r = [], _ = 0, u = e.length, d = 0; d < u; d++) s = null == o ? e[d][h] : "string" == typeof(c = e[d][h]) && "=" === c.charAt(1) ? o[h] + Number(c.charAt(0) + c.substr(2)) : Number(c), b && 1 < d && d < u - 1 && (r[_++] = (s + r[_ - 2]) / 2), r[_++] = s;
                                for (u = _ - p + 1, d = _ = 0; d < u; d += p) s = r[d], i = r[d + 1], n = r[d + 2], l = 2 === p ? 0 : r[d + 3], r[_++] = c = 3 === p ? new g(s, i, n, l) : new g(s, (2 * i + s) / 3, (2 * i + n) / 3, n);
                                r.length = _
                            }
                            return f
                        }(a, t.type, d), this._segCount = this._beziers[s].length, this._timeRes) {
                        var _ = function(e, t) {
                            var o, s, i, n, l = [],
                                r = [],
                                a = 0,
                                d = 0,
                                u = (t = t >> 0 || 6) - 1,
                                h = [],
                                _ = [];
                            for (o in e) f(e[o], l, t);
                            for (i = l.length, s = 0; s < i; s++) a += Math.sqrt(l[s]), _[n = s % t] = a, n === u && (d += a, h[n = s / t >> 0] = _, r[n] = d, a = 0, _ = []);
                            return {
                                length: d,
                                lengths: r,
                                segments: h
                            }
                        }(this._beziers, this._timeRes);
                        this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (h = this._autoRotate)
                        for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), n = h.length; - 1 < --n;) {
                            for (l = 0; l < 3; l++) s = h[n][l], this._func[s] = "function" == typeof e[s] && e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                            s = h[n][2], this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                        }
                    return this._startRatio = o.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                    var t, o, s, i, n, l, r, a, d, u, h = this._segCount,
                        _ = this._func,
                        c = this._target,
                        f = e !== this._startRatio;
                    if (this._timeRes) {
                        if (d = this._lengths, u = this._curSeg, e *= this._length, s = this._li, e > this._l2 && s < h - 1) {
                            for (a = h - 1; s < a && (this._l2 = d[++s]) <= e;);
                            this._l1 = d[s - 1], this._li = s, this._curSeg = u = this._segments[s], this._s2 = u[this._s1 = this._si = 0]
                        } else if (e < this._l1 && 0 < s) {
                            for (; 0 < s && (this._l1 = d[--s]) >= e;);
                            0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = d[s], this._li = s, this._curSeg = u = this._segments[s], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                        }
                        if (t = s, e -= this._l1, s = this._si, e > this._s2 && s < u.length - 1) {
                            for (a = u.length - 1; s < a && (this._s2 = u[++s]) <= e;);
                            this._s1 = u[s - 1], this._si = s
                        } else if (e < this._s1 && 0 < s) {
                            for (; 0 < s && (this._s1 = u[--s]) >= e;);
                            0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = u[s], this._si = s
                        }
                        l = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else l = (e - (t = e < 0 ? 0 : 1 <= e ? h - 1 : h * e >> 0) * (1 / h)) * h;
                    for (o = 1 - l, s = this._props.length; - 1 < --s;) i = this._props[s], r = (l * l * (n = this._beziers[i][t]).da + 3 * o * (l * n.ca + o * n.ba)) * l + n.a, this._mod[i] && (r = this._mod[i](r, c)), _[i] ? c[i](r) : "x" == i ? c.setX(r) : "y" == i ? c.setY(r) : "z" == i ? c.setZ(r) : "angleX" == i ? c.setAngleX(r) : "angleY" == i ? c.setAngleY(r) : "angleZ" == i ? c.setAngleZ(r) : "w" == i ? c.setWidth(r) : "h" == i ? c.setHeight(r) : "alpha" == i ? c.setAlpha(r) : "scale" == i ? c.setScale2(r) : c[i] = r;
                    if (this._autoRotate) {
                        var p, b, m, g, y, v, S, P = this._autoRotate;
                        for (s = P.length; - 1 < --s;) i = P[s][2], v = P[s][3] || 0, S = !0 === P[s][4] ? 1 : E, n = this._beziers[P[s][0]], p = this._beziers[P[s][1]], n && p && (n = n[t], p = p[t], b = n.a + (n.b - n.a) * l, b += ((g = n.b + (n.c - n.b) * l) - b) * l, g += (n.c + (n.d - n.c) * l - g) * l, m = p.a + (p.b - p.a) * l, m += ((y = p.b + (p.c - p.b) * l) - m) * l, y += (p.c + (p.d - p.c) * l - y) * l, r = f ? Math.atan2(y - m, g - b) * S + v : this._initialRotations[s], this._mod[i] && (r = this._mod[i](r, c)), _[i] ? c[i](r) : c[i] = r)
                    }
                }
            }), e = b.prototype, b.bezierThrough = c, b.cubicToQuadratic = T, b._autoCSS = !0, b.quadraticToCubic = function(e, t, o) {
                return new g(e, (2 * t + e) / 3, (2 * t + o) / 3, o)
            }, b._cssRegister = function() {
                var e = o.CSSPlugin;
                if (e) {
                    var t = e._internals,
                        c = t._parseToProxy,
                        f = t._setPluginRatio,
                        p = t.CSSPropTween;
                    t._registerComplexSpecialProp("bezier", {
                        parser: function(e, t, o, s, i, n) {
                            t instanceof Array && (t = {
                                values: t
                            }), n = new b;
                            var l, r, a, d = t.values,
                                u = d.length - 1,
                                h = [],
                                _ = {};
                            if (u < 0) return i;
                            for (l = 0; l <= u; l++) a = c(e, d[l], s, i, n, u !== l), h[l] = a.end;
                            for (r in t) _[r] = t[r];
                            return _.values = h, (i = new p(e, "bezier", 0, 0, a.pt, 2)).data = a, i.plugin = n, i.setRatio = f, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (l = !0 === _.autoRotate ? 0 : Number(_.autoRotate), _.autoRotate = null != a.end.left ? [
                                ["left", "top", "rotation", l, !1]
                            ] : null != a.end.x && [
                                ["x", "y", "rotation", l, !1]
                            ]), _.autoRotate && (s._transform || s._enableTransforms(!1), a.autoRotate = s._target._gsTransform, a.proxy.rotation = a.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), n._onInitTween(a.proxy, _, s._tween), i
                        }
                    })
                }
            }, e._mod = function(e) {
                for (var t, o = this._overwriteProps, s = o.length; - 1 < --s;)(t = e[o[s]]) && "function" == typeof t && (this._mod[o[s]] = t)
            }, e._kill = function(e) {
                var t, o, s = this._props;
                for (t in this._beziers)
                    if (t in e)
                        for (delete this._beziers[t], delete this._func[t], o = s.length; - 1 < --o;) s[o] === t && s.splice(o, 1);
                if (s = this._autoRotate)
                    for (o = s.length; - 1 < --o;) e[s[o][2]] && s.splice(o, 1);
                return this._super._kill.call(this, e)
            }, _fwd_gsScope.FWDFWD_gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "FWDTweenLite"], function(n, R) {
                var f, w, T, p, U = function() {
                        n.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = U.prototype.setRatio
                    },
                    d = _fwd_gsScope.FWDFWD_gsDefine.globals,
                    b = {},
                    e = U.prototype = new n("css");
                (e.constructor = U).version = "1.19.0", U.API = 2, U.defaultTransformPerspective = 0, U.defaultSkewType = "compensated", U.defaultSmoothOrigin = !0, e = "px", U.suffixMap = {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e,
                    width: e,
                    height: e,
                    fontSize: e,
                    padding: e,
                    margin: e,
                    perspective: e,
                    lineHeight: ""
                };
                var W, m, g, I, y, D, B, C, t, o, F = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    k = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    u = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    V = /(?:\d|\-|\+|=|#|\.)*/g,
                    H = /opacity *= *([^)]*)/i,
                    S = /opacity:([^;]*)/i,
                    l = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    r = /([A-Z])/g,
                    a = /-([a-z])/gi,
                    E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    h = function(e, t) {
                        return t.toUpperCase()
                    },
                    c = /(?:Left|Right|Width)/i,
                    _ = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    L = /,(?=[^\)]*(?:\(|$))/gi,
                    A = /[\s,\(]/i,
                    M = Math.PI / 180,
                    N = 180 / Math.PI,
                    x = {},
                    X = document,
                    s = function(e) {
                        return X.createElementNS ? X.createElementNS("http://www.w3.org/1999/xhtml", e) : X.createElement(e)
                    },
                    Y = s("div"),
                    j = s("img"),
                    i = U._internals = {
                        _specialProps: b
                    },
                    z = navigator.userAgent,
                    Q = (t = z.indexOf("Android"), o = s("a"), g = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === t || 3 < Number(z.substr(t + 8, 1))), y = g && Number(z.substr(z.indexOf("Version/") + 8, 1)) < 6, I = -1 !== z.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(z)) && (D = parseFloat(RegExp.$1)), !!o && (o.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(o.style.opacity))),
                    G = function(e) {
                        return H.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(e) {
                        window.console && console.log(e)
                    },
                    K = "",
                    J = "",
                    Z = function(e, t) {
                        var o, s, i = (t = t || Y).style;
                        if (void 0 !== i[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), o = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; - 1 < --s && void 0 === i[o[s] + e];);
                        return 0 <= s ? (K = "-" + (J = 3 === s ? "ms" : o[s]).toLowerCase() + "-", J + e) : null
                    },
                    $ = X.defaultView ? X.defaultView.getComputedStyle : function() {},
                    ee = U.getStyle = function(e, t, o, s, i) {
                        var n;
                        return Q || "opacity" !== t ? (!s && e.style[t] ? n = e.style[t] : (o = o || $(e)) ? n = o[t] || o.getPropertyValue(t) || o.getPropertyValue(t.replace(r, "-$1").toLowerCase()) : e.currentStyle && (n = e.currentStyle[t]), null == i || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : i) : G(e)
                    },
                    te = i.convertToPixels = function(e, t, o, s, i) {
                        if ("px" === s || !s) return o;
                        if ("auto" === s || !o) return 0;
                        var n, l, r, a = c.test(t),
                            d = e,
                            u = Y.style,
                            h = o < 0,
                            _ = 1 === o;
                        if (h && (o = -o), _ && (o *= 100), "%" === s && -1 !== t.indexOf("border")) n = o / 100 * (a ? e.clientWidth : e.clientHeight);
                        else {
                            if (u.cssText = "border:0 solid red;position:" + ee(e, "position") + ";line-height:0;", "%" !== s && d.appendChild && "v" !== s.charAt(0) && "rem" !== s) u[a ? "borderLeftWidth" : "borderTopWidth"] = o + s;
                            else {
                                if (l = (d = e.parentNode || X.body)._gsCache, r = R.ticker.frame, l && a && l.time === r) return l.width * o / 100;
                                u[a ? "width" : "height"] = o + s
                            }
                            d.appendChild(Y), n = parseFloat(Y[a ? "offsetWidth" : "offsetHeight"]), d.removeChild(Y), a && "%" === s && !1 !== U.cacheWidths && ((l = d._gsCache = d._gsCache || {}).time = r, l.width = n / o * 100), 0 !== n || i || (n = te(e, t, o, s, !0))
                        }
                        return _ && (n /= 100), h ? -n : n
                    },
                    oe = i.calculateOffset = function(e, t, o) {
                        if ("absolute" !== ee(e, "position", o)) return 0;
                        var s = "left" === t ? "Left" : "Top",
                            i = ee(e, "margin" + s, o);
                        return e["offset" + s] - (te(e, t, parseFloat(i), i.replace(V, "")) || 0)
                    },
                    se = function(e, t) {
                        var o, s, i, n = {};
                        if (t = t || $(e, null))
                            if (o = t.length)
                                for (; - 1 < --o;) - 1 !== (i = t[o]).indexOf("-transform") && Oe !== i || (n[i.replace(a, h)] = t.getPropertyValue(i));
                            else
                                for (o in t) - 1 !== o.indexOf("Transform") && He !== o || (n[o] = t[o]);
                        else if (t = e.currentStyle || e.style)
                            for (o in t) "string" == typeof o && void 0 === n[o] && (n[o.replace(a, h)] = t[o]);
                        return Q || (n.opacity = G(e)), s = ze(e, t, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Ae && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                    },
                    ie = function(e, t, o, s, i) {
                        var n, l, r, a = {},
                            d = e.style;
                        for (l in o) "cssText" !== l && "length" !== l && isNaN(l) && (t[l] !== (n = o[l]) || i && i[l]) && -1 === l.indexOf("Origin") && ("number" != typeof n && "string" != typeof n || (a[l] = "auto" !== n || "left" !== l && "top" !== l ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof t[l] || "" === t[l].replace(u, "") ? n : 0 : oe(e, l), void 0 !== d[l] && (r = new ye(d, l, d[l], r))));
                        if (s)
                            for (l in s) "className" !== l && (a[l] = s[l]);
                        return {
                            difs: a,
                            firstMPT: r
                        }
                    },
                    ne = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    le = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    re = function(e, t, o) {
                        if ("svg" === (e.nodeName + "").toLowerCase()) return (o || $(e))[t] || 0;
                        if (e.getBBox && Xe(e)) return e.getBBox()[t] || 0;
                        var s = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            i = ne[t],
                            n = i.length;
                        for (o = o || $(e, null); - 1 < --n;) s -= parseFloat(ee(e, "padding" + i[n], o, !0)) || 0, s -= parseFloat(ee(e, "border" + i[n] + "Width", o, !0)) || 0;
                        return s
                    },
                    ae = function(e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        null != e && "" !== e || (e = "0 0");
                        var o, s = e.split(" "),
                            i = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : s[0],
                            n = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : s[1];
                        if (3 < s.length && !t) {
                            for (s = e.split(", ").join(",").split(","), e = [], o = 0; o < s.length; o++) e.push(ae(s[o]));
                            return e.join(",")
                        }
                        return null == n ? n = "center" === i ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e = i + " " + n + (2 < s.length ? " " + s[2] : ""), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== n.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === n.charAt(1), t.ox = parseFloat(i.replace(u, "")), t.oy = parseFloat(n.replace(u, "")), t.v = e), t || e
                    },
                    de = function(e, t) {
                        return "function" == typeof e && (e = e(C, B)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                    },
                    ue = function(e, t) {
                        return "function" == typeof e && (e = e(C, B)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                    },
                    he = function(e, t, o, s) {
                        var i, n, l, r, a;
                        return "function" == typeof e && (e = e(C, B)), null == e ? r = t : "number" == typeof e ? r = e : (i = 360, n = e.split("_"), l = ((a = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === e.indexOf("rad") ? 1 : N) - (a ? 0 : t), n.length && (s && (s[o] = t + l), -1 !== e.indexOf("short") && (l %= i) !== l % 180 && (l = l < 0 ? l + i : l - i), -1 !== e.indexOf("_cw") && l < 0 ? l = (l + 3599999999640) % i - (l / i | 0) * i : -1 !== e.indexOf("ccw") && 0 < l && (l = (l - 3599999999640) % i - (l / i | 0) * i)), r = t + l), r < 1e-6 && -1e-6 < r && (r = 0), r
                    },
                    _e = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ce = function(e, t, o) {
                        return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (o - t) * e * 6 : e < .5 ? o : 3 * e < 2 ? t + (o - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                    },
                    fe = U.parseColor = function(e, t) {
                        var o, s, i, n, l, r, a, d, u, h, _;
                        if (e)
                            if ("number" == typeof e) o = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), _e[e]) o = _e[e];
                                else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (s = e.charAt(1)) + s + (i = e.charAt(2)) + i + (n = e.charAt(3)) + n), o = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (o = _ = e.match(F), t) {
                                        if (-1 !== e.indexOf("=")) return e.match(k)
                                    } else l = Number(o[0]) % 360 / 360, r = Number(o[1]) / 100, s = 2 * (a = Number(o[2]) / 100) - (i = a <= .5 ? a * (r + 1) : a + r - a * r), 3 < o.length && (o[3] = Number(e[3])), o[0] = ce(l + 1 / 3, s, i), o[1] = ce(l, s, i), o[2] = ce(l - 1 / 3, s, i);
                                else o = e.match(F) || _e.transparent;
                                o[0] = Number(o[0]), o[1] = Number(o[1]), o[2] = Number(o[2]), 3 < o.length && (o[3] = Number(o[3]))
                            }
                        else o = _e.black;
                        return t && !_ && (s = o[0] / 255, i = o[1] / 255, n = o[2] / 255, a = ((d = Math.max(s, i, n)) + (u = Math.min(s, i, n))) / 2, d === u ? l = r = 0 : (h = d - u, r = .5 < a ? h / (2 - d - u) : h / (d + u), l = d === s ? (i - n) / h + (i < n ? 6 : 0) : d === i ? (n - s) / h + 2 : (s - i) / h + 4, l *= 60), o[0] = l + .5 | 0, o[1] = 100 * r + .5 | 0, o[2] = 100 * a + .5 | 0), o
                    },
                    pe = function(e, t) {
                        var o, s, i, n = e.match(be) || [],
                            l = 0,
                            r = n.length ? "" : e;
                        for (o = 0; o < n.length; o++) s = n[o], l += (i = e.substr(l, e.indexOf(s, l) - l)).length + s.length, 3 === (s = fe(s, t)).length && s.push(1), r += i + (t ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                        return r + e.substr(l)
                    },
                    be = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (e in _e) be += "|" + e + "\\b";
                be = new RegExp(be + ")", "gi"), U.colorStringFilter = function(e) {
                    var t, o = e[0] + e[1];
                    be.test(o) && (t = -1 !== o.indexOf("hsl(") || -1 !== o.indexOf("hsla("), e[0] = pe(e[0], t), e[1] = pe(e[1], t)), be.lastIndex = 0
                }, R.defaultStringFilter || (R.defaultStringFilter = U.colorStringFilter);
                var me = function(e, t, n, l) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var r, a = t ? (e.match(be) || [""])[0] : "",
                            d = e.split(a).join("").match(v) || [],
                            u = e.substr(0, e.indexOf(d[0])),
                            h = ")" === e.charAt(e.length - 1) ? ")" : "",
                            _ = -1 !== e.indexOf(" ") ? " " : ",",
                            c = d.length,
                            f = 0 < c ? d[0].replace(F, "") : "";
                        return c ? r = t ? function(e) {
                            var t, o, s, i;
                            if ("number" == typeof e) e += f;
                            else if (l && L.test(e)) {
                                for (i = e.replace(L, "|").split("|"), s = 0; s < i.length; s++) i[s] = r(i[s]);
                                return i.join(",")
                            }
                            if (t = (e.match(be) || [a])[0], s = (o = e.split(t).join("").match(v) || []).length, c > s--)
                                for (; ++s < c;) o[s] = n ? o[(s - 1) / 2 | 0] : d[s];
                            return u + o.join(_) + _ + t + h + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function(e) {
                            var t, o, s;
                            if ("number" == typeof e) e += f;
                            else if (l && L.test(e)) {
                                for (o = e.replace(L, "|").split("|"), s = 0; s < o.length; s++) o[s] = r(o[s]);
                                return o.join(",")
                            }
                            if (s = (t = e.match(v) || []).length, c > s--)
                                for (; ++s < c;) t[s] = n ? t[(s - 1) / 2 | 0] : d[s];
                            return u + t.join(_) + h
                        } : function(e) {
                            return e
                        }
                    },
                    ge = function(d) {
                        return d = d.split(","),
                            function(e, t, o, s, i, n, l) {
                                var r, a = (t + "").split(" ");
                                for (l = {}, r = 0; r < 4; r++) l[d[r]] = a[r] = a[r] || a[(r - 1) / 2 >> 0];
                                return s.parse(e, l, i, n)
                            }
                    },
                    ye = (i._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, o, s, i, n, l = this.data, r = l.proxy, a = l.firstMPT; a;) t = r[a.v], a.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), a.t[a.p] = t, a = a._next;
                        if (l.autoRotate && (l.autoRotate.rotation = l.mod ? l.mod(r.rotation, this.t) : r.rotation), 1 === e || 0 === e)
                            for (a = l.firstMPT, n = 1 === e ? "e" : "b"; a;) {
                                if ((o = a.t).type) {
                                    if (1 === o.type) {
                                        for (i = o.xs0 + o.s + o.xs1, s = 1; s < o.l; s++) i += o["xn" + s] + o["xs" + (s + 1)];
                                        o[n] = i
                                    }
                                } else o[n] = o.s + o.xs0;
                                a = a._next
                            }
                    }, function(e, t, o, s, i) {
                        this.t = e, this.p = t, this.v = o, this.r = i, s && ((s._prev = this)._next = s)
                    }),
                    ve = (i._parseToProxy = function(e, t, o, s, i, n) {
                        var l, r, a, d, u, h = s,
                            _ = {},
                            c = {},
                            f = o._transform,
                            p = x;
                        for (o._transform = null, x = t, s = u = o.parse(e, t, s, i), x = p, n && (o._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); s && s !== h;) {
                            if (s.type <= 1 && (c[r = s.p] = s.s + s.c, _[r] = s.s, n || (d = new ye(s, "s", r, d, s.r), s.c = 0), 1 === s.type))
                                for (l = s.l; 0 < --l;) a = "xn" + l, c[r = s.p + "_" + a] = s.data[a], _[r] = s[a], n || (d = new ye(s, a, r, d, s.rxp[a]));
                            s = s._next
                        }
                        return {
                            proxy: _,
                            end: c,
                            firstMPT: d,
                            pt: u
                        }
                    }, i.CSSPropTween = function(e, t, o, s, i, n, l, r, a, d, u) {
                        this.t = e, this.p = t, this.s = o, this.c = s, this.n = l || t, e instanceof ve || p.push(this.n), this.r = r, this.type = n || 0, a && (this.pr = a, f = !0), this.b = void 0 === d ? o : d, this.e = void 0 === u ? o + s : u, i && ((this._next = i)._prev = this)
                    }),
                    Se = function(e, t, o, s, i, n) {
                        var l = new ve(e, t, o, s - o, i, -1, n);
                        return l.b = o, l.e = l.xs0 = s, l
                    },
                    Pe = U.parseComplex = function(e, t, o, s, i, n, l, r, a, d) {
                        o = o || n || "", "function" == typeof s && (s = s(C, B)), l = new ve(e, t, 0, 0, l, d ? 2 : 1, null, !1, r, o, s), s += "", i && be.test(s + o) && (s = [o, s], U.colorStringFilter(s), o = s[0], s = s[1]);
                        var u, h, _, c, f, p, b, m, g, y, v, S, P, E = o.split(", ").join(",").split(" "),
                            w = s.split(", ").join(",").split(" "),
                            T = E.length,
                            D = !1 !== W;
                        for (-1 === s.indexOf(",") && -1 === o.indexOf(",") || (E = E.join(" ").replace(L, ", ").split(" "), w = w.join(" ").replace(L, ", ").split(" "), T = E.length), T !== w.length && (T = (E = (n || "").split(" ")).length), l.plugin = a, l.setRatio = d, u = be.lastIndex = 0; u < T; u++)
                            if (c = E[u], f = w[u], (m = parseFloat(c)) || 0 === m) l.appendXtra("", m, de(f, m), f.replace(k, ""), D && -1 !== f.indexOf("px"), !0);
                            else if (i && be.test(c)) S = ")" + ((S = f.indexOf(")") + 1) ? f.substr(S) : ""), P = -1 !== f.indexOf("hsl") && Q, c = fe(c, P), f = fe(f, P), (g = 6 < c.length + f.length) && !Q && 0 === f[3] ? (l["xs" + l.l] += l.l ? " transparent" : "transparent", l.e = l.e.split(w[u]).join("transparent")) : (Q || (g = !1), P ? l.appendXtra(g ? "hsla(" : "hsl(", c[0], de(f[0], c[0]), ",", !1, !0).appendXtra("", c[1], de(f[1], c[1]), "%,", !1).appendXtra("", c[2], de(f[2], c[2]), g ? "%," : "%" + S, !1) : l.appendXtra(g ? "rgba(" : "rgb(", c[0], f[0] - c[0], ",", !0, !0).appendXtra("", c[1], f[1] - c[1], ",", !0).appendXtra("", c[2], f[2] - c[2], g ? "," : S, !0), g && (c = c.length < 4 ? 1 : c[3], l.appendXtra("", c, (f.length < 4 ? 1 : f[3]) - c, S, !1))), be.lastIndex = 0;
                        else if (p = c.match(F)) {
                            if (!(b = f.match(k)) || b.length !== p.length) return l;
                            for (h = _ = 0; h < p.length; h++) v = p[h], y = c.indexOf(v, _), l.appendXtra(c.substr(_, y - _), Number(v), de(b[h], v), "", D && "px" === c.substr(y + v.length, 2), 0 === h), _ = y + v.length;
                            l["xs" + l.l] += c.substr(_)
                        } else l["xs" + l.l] += l.l || l["xs" + l.l] ? " " + f : f;
                        if (-1 !== s.indexOf("=") && l.data) {
                            for (S = l.xs0 + l.data.s, u = 1; u < l.l; u++) S += l["xs" + u] + l.data["xn" + u];
                            l.e = S + l["xs" + u]
                        }
                        return l.l || (l.type = -1, l.xs0 = l.e), l.xfirst || l
                    },
                    Ee = 9;
                for ((e = ve.prototype).l = e.pr = 0; 0 < --Ee;) e["xn" + Ee] = 0, e["xs" + Ee] = "";
                e.xs0 = "", e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function(e, t, o, s, i, n) {
                    var l = this,
                        r = l.l;
                    return l["xs" + r] += n && (r || l["xs" + r]) ? " " + e : e || "", o || 0 === r || l.plugin ? (l.l++, l.type = l.setRatio ? 2 : 1, l["xs" + l.l] = s || "", 0 < r ? (l.data["xn" + r] = t + o, l.rxp["xn" + r] = i, l["xn" + r] = t, l.plugin || (l.xfirst = new ve(l, "xn" + r, t, o, l.xfirst || l, 0, l.n, i, l.pr), l.xfirst.xs0 = 0)) : (l.data = {
                        s: t + o
                    }, l.rxp = {}, l.s = t, l.c = o, l.r = i), l) : (l["xs" + r] += t + (s || ""), l)
                };
                var we = function(e, t) {
                        t = t || {}, this.p = t.prefix && Z(e) || e, b[e] = b[this.p] = this, this.format = t.formatter || me(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    Te = i._registerComplexSpecialProp = function(e, t, o) {
                        "object" != typeof t && (t = {
                            parser: o
                        });
                        var s, i = e.split(","),
                            n = t.defaultValue;
                        for (o = o || [n], s = 0; s < i.length; s++) t.prefix = 0 === s && t.prefix, t.defaultValue = o[s] || n, new we(i[s], t)
                    },
                    De = i._registerPluginProp = function(e) {
                        if (!b[e]) {
                            var a = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            Te(e, {
                                parser: function(e, t, o, s, i, n, l) {
                                    var r = d.com.greensock.plugins[a];
                                    return r ? (r._cssRegister(), b[o].parse(e, t, o, s, i, n, l)) : (q("Error: " + a + " js file not loaded."), i)
                                }
                            })
                        }
                    };
                (e = we.prototype).parseComplex = function(e, t, o, s, i, n) {
                    var l, r, a, d, u, h, _ = this.keyword;
                    if (this.multi && (L.test(o) || L.test(t) ? (r = t.replace(L, "|").split("|"), a = o.replace(L, "|").split("|")) : _ && (r = [t], a = [o])), a) {
                        for (d = a.length > r.length ? a.length : r.length, l = 0; l < d; l++) t = r[l] = r[l] || this.dflt, o = a[l] = a[l] || this.dflt, _ && (u = t.indexOf(_)) !== (h = o.indexOf(_)) && (-1 === h ? r[l] = r[l].split(_).join("") : -1 === u && (r[l] += " " + _));
                        t = r.join(", "), o = a.join(", ")
                    }
                    return Pe(e, this.p, t, o, this.clrs, this.dflt, s, this.pr, i, n)
                }, e.parse = function(e, t, o, s, i, n, l) {
                    return this.parseComplex(e.style, this.format(ee(e, this.p, T, !1, this.dflt)), this.format(t), i, n)
                }, U.registerSpecialProp = function(e, a, d) {
                    Te(e, {
                        parser: function(e, t, o, s, i, n, l) {
                            var r = new ve(e, o, 0, 0, i, 2, o, !1, d);
                            return r.plugin = n, r.setRatio = a(e, t, s._tween, o), r
                        },
                        priority: d
                    })
                }, U.useSVGTransformAttr = g || I;
                var We, Be, Ce, Fe, ke, Ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    He = Z("transform"),
                    Oe = K + "transform",
                    Le = Z("transformOrigin"),
                    Ae = null !== Z("perspective"),
                    xe = i.Transform = function() {
                        this.perspective = parseFloat(U.defaultTransformPerspective) || 0, this.force3D = !(!1 === U.defaultForce3D || !Ae) && (U.defaultForce3D || "auto")
                    },
                    Ie = window.SVGElement,
                    Me = function(e, t, o) {
                        var s, i = X.createElementNS("http://www.w3.org/2000/svg", e),
                            n = /([a-z])([A-Z])/g;
                        for (s in o) i.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), o[s]);
                        return t.appendChild(i), i
                    },
                    Re = X.documentElement,
                    Ue = (ke = D || /Android/i.test(z) && !window.chrome, X.createElementNS && !ke && (Be = Me("svg", Re), Fe = (Ce = Me("rect", Be, {
                        width: 100,
                        height: 50,
                        x: 100
                    })).getBoundingClientRect().width, Ce.style[Le] = "50% 50%", Ce.style[He] = "scaleX(0.5)", ke = Fe === Ce.getBoundingClientRect().width && !(I && Ae), Re.removeChild(Be)), ke),
                    Ne = function(e, t, o, s, i, n) {
                        var l, r, a, d, u, h, _, c, f, p, b, m, g, y, v = e._gsTransform,
                            S = je(e, !0);
                        v && (g = v.xOrigin, y = v.yOrigin), (!s || (l = s.split(" ")).length < 2) && (_ = e.getBBox(), l = [(-1 !== (t = ae(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * _.width : parseFloat(t[0])) + _.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * _.height : parseFloat(t[1])) + _.y]), o.xOrigin = d = parseFloat(l[0]), o.yOrigin = u = parseFloat(l[1]), s && S !== Ye && (h = S[0], _ = S[1], c = S[2], f = S[3], p = S[4], r = d * (f / (m = h * f - _ * c)) + u * (-c / m) + (c * (b = S[5]) - f * p) / m, a = d * (-_ / m) + u * (h / m) - (h * b - _ * p) / m, d = o.xOrigin = l[0] = r, u = o.yOrigin = l[1] = a), v && (n && (o.xOffset = v.xOffset, o.yOffset = v.yOffset, v = o), i || !1 !== i && !1 !== U.defaultSmoothOrigin ? (r = d - g, a = u - y, v.xOffset += r * S[0] + a * S[2] - r, v.yOffset += r * S[1] + a * S[3] - a) : v.xOffset = v.yOffset = 0), n || e.setAttribute("data-svg-origin", l.join(" "))
                    },
                    Xe = function(e) {
                        return !!(Ie && e.getBBox && e.getCTM && function(e) {
                            try {
                                return e.getBBox()
                            } catch (e) {}
                        }(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                    },
                    Ye = [1, 0, 0, 1, 0, 0],
                    je = function(e, t) {
                        var o, s, i, n, l, r, a = e._gsTransform || new xe,
                            d = e.style;
                        if (He ? s = ee(e, Oe, null, !0) : e.currentStyle && (s = (s = e.currentStyle.filter.match(_)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), (o = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s) && He && ((r = "none" === $(e).display) || !e.parentNode) && (r && (n = d.display, d.display = "block"), e.parentNode || (l = 1, Re.appendChild(e)), o = !(s = ee(e, Oe, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? d.display = n : r && Ke(d, "display"), l && Re.removeChild(e)), (a.svg || e.getBBox && Xe(e)) && (o && -1 !== (d[He] + "").indexOf("matrix") && (s = d[He], o = 0), i = e.getAttribute("transform"), o && i && (-1 !== i.indexOf("matrix") ? (s = i, o = 0) : -1 !== i.indexOf("translate") && (s = "matrix(1,0,0,1," + i.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", o = 0))), o) return Ye;
                        for (i = (s || "").match(F) || [], Ee = i.length; - 1 < --Ee;) n = Number(i[Ee]), i[Ee] = (l = n - (n |= 0)) ? (1e5 * l + (l < 0 ? -.5 : .5) | 0) / 1e5 + n : n;
                        return t && 6 < i.length ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i
                    },
                    ze = i.getTransform = function(e, t, o, s) {
                        if (e._gsTransform && o && !s) return e._gsTransform;
                        var i, n, l, r, a, d, u = o && e._gsTransform || new xe,
                            h = u.scaleX < 0,
                            _ = Ae && (parseFloat(ee(e, Le, t, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                            c = parseFloat(U.defaultTransformPerspective) || 0;
                        if (u.svg = !(!e.getBBox || !Xe(e)), u.svg && (Ne(e, ee(e, Le, t, !1, "50% 50%") + "", u, e.getAttribute("data-svg-origin")), We = U.useSVGTransformAttr || Ue), (i = je(e)) !== Ye) {
                            if (16 === i.length) {
                                var f, p, b, m, g, y = i[0],
                                    v = i[1],
                                    S = i[2],
                                    P = i[3],
                                    E = i[4],
                                    w = i[5],
                                    T = i[6],
                                    D = i[7],
                                    W = i[8],
                                    B = i[9],
                                    C = i[10],
                                    F = i[12],
                                    k = i[13],
                                    V = i[14],
                                    H = i[11],
                                    O = Math.atan2(T, C);
                                u.zOrigin && (F = W * (V = -u.zOrigin) - i[12], k = B * V - i[13], V = C * V + u.zOrigin - i[14]), u.rotationX = O * N, O && (f = E * (m = Math.cos(-O)) + W * (g = Math.sin(-O)), p = w * m + B * g, b = T * m + C * g, W = E * -g + W * m, B = w * -g + B * m, C = T * -g + C * m, H = D * -g + H * m, E = f, w = p, T = b), O = Math.atan2(-S, C), u.rotationY = O * N, O && (p = v * (m = Math.cos(-O)) - B * (g = Math.sin(-O)), b = S * m - C * g, B = v * g + B * m, C = S * g + C * m, H = P * g + H * m, y = f = y * m - W * g, v = p, S = b), O = Math.atan2(v, y), u.rotation = O * N, O && (y = y * (m = Math.cos(-O)) + E * (g = Math.sin(-O)), p = v * m + w * g, w = v * -g + w * m, T = S * -g + T * m, v = p), u.rotationX && 359.9 < Math.abs(u.rotationX) + Math.abs(u.rotation) && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), u.scaleX = (1e5 * Math.sqrt(y * y + v * v) + .5 | 0) / 1e5, u.scaleY = (1e5 * Math.sqrt(w * w + B * B) + .5 | 0) / 1e5, u.scaleZ = (1e5 * Math.sqrt(T * T + C * C) + .5 | 0) / 1e5, u.rotationX || u.rotationY ? u.skewX = 0 : (u.skewX = E || w ? Math.atan2(E, w) * N + u.rotation : u.skewX || 0, 90 < Math.abs(u.skewX) && Math.abs(u.skewX) < 270 && (h ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180))), u.perspective = H ? 1 / (H < 0 ? -H : H) : 0, u.x = F, u.y = k, u.z = V, u.svg && (u.x -= u.xOrigin - (u.xOrigin * y - u.yOrigin * E), u.y -= u.yOrigin - (u.yOrigin * v - u.xOrigin * w))
                            } else if (!Ae || s || !i.length || u.x !== i[4] || u.y !== i[5] || !u.rotationX && !u.rotationY) {
                                var L = 6 <= i.length,
                                    A = L ? i[0] : 1,
                                    x = i[1] || 0,
                                    I = i[2] || 0,
                                    M = L ? i[3] : 1;
                                u.x = i[4] || 0, u.y = i[5] || 0, l = Math.sqrt(A * A + x * x), r = Math.sqrt(M * M + I * I), a = A || x ? Math.atan2(x, A) * N : u.rotation || 0, d = I || M ? Math.atan2(I, M) * N + a : u.skewX || 0, 90 < Math.abs(d) && Math.abs(d) < 270 && (h ? (l *= -1, d += a <= 0 ? 180 : -180, a += a <= 0 ? 180 : -180) : (r *= -1, d += d <= 0 ? 180 : -180)), u.scaleX = l, u.scaleY = r, u.rotation = a, u.skewX = d, Ae && (u.rotationX = u.rotationY = u.z = 0, u.perspective = c, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * A + u.yOrigin * I), u.y -= u.yOrigin - (u.xOrigin * x + u.yOrigin * M))
                            }
                            for (n in u.zOrigin = _, u) u[n] < 2e-5 && -2e-5 < u[n] && (u[n] = 0)
                        }
                        return o && (e._gsTransform = u).svg && (We && e.style[He] ? R.delayedCall(.001, function() {
                            Ke(e.style, He)
                        }) : !We && e.getAttribute("transform") && R.delayedCall(.001, function() {
                            e.removeAttribute("transform")
                        })), u
                    },
                    Qe = function(e) {
                        var t, o, s = this.data,
                            i = -s.rotation * M,
                            n = i + s.skewX * M,
                            l = 1e5,
                            r = (Math.cos(i) * s.scaleX * l | 0) / l,
                            a = (Math.sin(i) * s.scaleX * l | 0) / l,
                            d = (Math.sin(n) * -s.scaleY * l | 0) / l,
                            u = (Math.cos(n) * s.scaleY * l | 0) / l,
                            h = this.t.style,
                            _ = this.t.currentStyle;
                        if (_) {
                            o = a, a = -d, d = -o, t = _.filter, h.filter = "";
                            var c, f, p = this.t.offsetWidth,
                                b = this.t.offsetHeight,
                                m = "absolute" !== _.position,
                                g = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + a + ", M21=" + d + ", M22=" + u,
                                y = s.x + p * s.xPercent / 100,
                                v = s.y + b * s.yPercent / 100;
                            if (null != s.ox && (y += (c = (s.oxp ? p * s.ox * .01 : s.ox) - p / 2) - (c * r + (f = (s.oyp ? b * s.oy * .01 : s.oy) - b / 2) * a), v += f - (c * d + f * u)), g += m ? ", Dx=" + ((c = p / 2) - (c * r + (f = b / 2) * a) + y) + ", Dy=" + (f - (c * d + f * u) + v) + ")" : ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = t.replace(O, g) : h.filter = g + " " + t, 0 !== e && 1 !== e || 1 === r && 0 === a && 0 === d && 1 === u && (m && -1 === g.indexOf("Dx=0, Dy=0") || H.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && h.removeAttribute("filter")), !m) {
                                var S, P, E, w = D < 8 ? 1 : -1;
                                for (c = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((p - ((r < 0 ? -r : r) * p + (a < 0 ? -a : a) * b)) / 2 + y), s.ieOffsetY = Math.round((b - ((u < 0 ? -u : u) * b + (d < 0 ? -d : d) * p)) / 2 + v), Ee = 0; Ee < 4; Ee++) E = (o = -1 !== (S = _[P = le[Ee]]).indexOf("px") ? parseFloat(S) : te(this.t, P, parseFloat(S), S.replace(V, "")) || 0) !== s[P] ? Ee < 2 ? -s.ieOffsetX : -s.ieOffsetY : Ee < 2 ? c - s.ieOffsetX : f - s.ieOffsetY, h[P] = (s[P] = Math.round(o - E * (0 === Ee || 2 === Ee ? 1 : w))) + "px"
                            }
                        }
                    },
                    Ge = i.set3DTransformRatio = i.setTransformRatio = function(e) {
                        var t, o, s, i, n, l, r, a, d, u, h, _, c, f, p, b, m, g, y, v, S, P, E, w = this.data,
                            T = this.t.style,
                            D = w.rotation,
                            W = w.rotationX,
                            B = w.rotationY,
                            C = w.scaleX,
                            F = w.scaleY,
                            k = w.scaleZ,
                            V = w.x,
                            H = w.y,
                            O = w.z,
                            L = w.svg,
                            A = w.perspective,
                            x = w.force3D;
                        if (!((1 !== e && 0 !== e || "auto" !== x || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && x || O || A || B || W || 1 !== k) || We && L || !Ae) D || w.skewX || L ? (D *= M, P = w.skewX * M, E = 1e5, t = Math.cos(D) * C, i = Math.sin(D) * C, o = Math.sin(D - P) * -F, n = Math.cos(D - P) * F, P && "simple" === w.skewType && (m = Math.tan(P - w.skewY * M), o *= m = Math.sqrt(1 + m * m), n *= m, w.skewY && (m = Math.tan(w.skewY * M), t *= m = Math.sqrt(1 + m * m), i *= m)), L && (V += w.xOrigin - (w.xOrigin * t + w.yOrigin * o) + w.xOffset, H += w.yOrigin - (w.xOrigin * i + w.yOrigin * n) + w.yOffset, We && (w.xPercent || w.yPercent) && (f = this.t.getBBox(), V += .01 * w.xPercent * f.width, H += .01 * w.yPercent * f.height), V < (f = 1e-6) && -f < V && (V = 0), H < f && -f < H && (H = 0)), y = (t * E | 0) / E + "," + (i * E | 0) / E + "," + (o * E | 0) / E + "," + (n * E | 0) / E + "," + V + "," + H + ")", L && We ? this.t.setAttribute("transform", "matrix(" + y) : T[He] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + y) : T[He] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + F + "," + V + "," + H + ")";
                        else {
                            if (I && (C < (f = 1e-4) && -f < C && (C = k = 2e-5), F < f && -f < F && (F = k = 2e-5), !A || w.z || w.rotationX || w.rotationY || (A = 0)), D || w.skewX) D *= M, p = t = Math.cos(D), b = i = Math.sin(D), w.skewX && (D -= w.skewX * M, p = Math.cos(D), b = Math.sin(D), "simple" === w.skewType && (m = Math.tan((w.skewX - w.skewY) * M), p *= m = Math.sqrt(1 + m * m), b *= m, w.skewY && (m = Math.tan(w.skewY * M), t *= m = Math.sqrt(1 + m * m), i *= m))), o = -b, n = p;
                            else {
                                if (!(B || W || 1 !== k || A || L)) return void(T[He] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + V + "px," + H + "px," + O + "px)" + (1 !== C || 1 !== F ? " scale(" + C + "," + F + ")" : ""));
                                t = n = 1, o = i = 0
                            }
                            d = 1, s = l = r = a = u = h = 0, _ = A ? -1 / A : 0, c = w.zOrigin, f = 1e-6, v = ",", S = "0", (D = B * M) && (p = Math.cos(D), u = _ * (r = -(b = Math.sin(D))), s = t * b, l = i * b, _ *= d = p, t *= p, i *= p), (D = W * M) && (m = o * (p = Math.cos(D)) + s * (b = Math.sin(D)), g = n * p + l * b, a = d * b, h = _ * b, s = o * -b + s * p, l = n * -b + l * p, d *= p, _ *= p, o = m, n = g), 1 !== k && (s *= k, l *= k, d *= k, _ *= k), 1 !== F && (o *= F, n *= F, a *= F, h *= F), 1 !== C && (t *= C, i *= C, r *= C, u *= C), (c || L) && (c && (V += s * -c, H += l * -c, O += d * -c + c), L && (V += w.xOrigin - (w.xOrigin * t + w.yOrigin * o) + w.xOffset, H += w.yOrigin - (w.xOrigin * i + w.yOrigin * n) + w.yOffset), V < f && -f < V && (V = S), H < f && -f < H && (H = S), O < f && -f < O && (O = 0)), y = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", y += (t < f && -f < t ? S : t) + v + (i < f && -f < i ? S : i) + v + (r < f && -f < r ? S : r), y += v + (u < f && -f < u ? S : u) + v + (o < f && -f < o ? S : o) + v + (n < f && -f < n ? S : n), W || B || 1 !== k ? (y += v + (a < f && -f < a ? S : a) + v + (h < f && -f < h ? S : h) + v + (s < f && -f < s ? S : s), y += v + (l < f && -f < l ? S : l) + v + (d < f && -f < d ? S : d) + v + (_ < f && -f < _ ? S : _) + v) : y += ",0,0,0,0,1,0,", y += V + v + H + v + O + v + (A ? 1 + -O / A : 1) + ")", T[He] = y
                        }
                    };
                (e = xe.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(e, t, o, s, i, n, l) {
                        if (s._lastParsedTransform === l) return i;
                        var r;
                        "function" == typeof(s._lastParsedTransform = l)[o] && (r = l[o], l[o] = t);
                        var a, d, u, h, _, c, f, p, b, m = e._gsTransform,
                            g = e.style,
                            y = Ve.length,
                            v = l,
                            S = {},
                            P = "transformOrigin",
                            E = ze(e, T, !0, v.parseTransform),
                            w = v.transform && ("function" == typeof v.transform ? v.transform(C, B) : v.transform);
                        if (s._transform = E, w && "string" == typeof w && He)(d = Y.style)[He] = w, d.display = "block", d.position = "absolute", X.body.appendChild(Y), a = ze(Y, null, !1), E.svg && (c = E.xOrigin, f = E.yOrigin, a.x -= E.xOffset, a.y -= E.yOffset, (v.transformOrigin || v.svgOrigin) && (w = {}, Ne(e, ae(v.transformOrigin), w, v.svgOrigin, v.smoothOrigin, !0), c = w.xOrigin, f = w.yOrigin, a.x -= w.xOffset - E.xOffset, a.y -= w.yOffset - E.yOffset), (c || f) && (p = je(Y, !0), a.x -= c - (c * p[0] + f * p[2]), a.y -= f - (c * p[1] + f * p[3]))), X.body.removeChild(Y), a.perspective || (a.perspective = E.perspective), null != v.xPercent && (a.xPercent = ue(v.xPercent, E.xPercent)), null != v.yPercent && (a.yPercent = ue(v.yPercent, E.yPercent));
                        else if ("object" == typeof v) {
                            if (a = {
                                    scaleX: ue(null != v.scaleX ? v.scaleX : v.scale, E.scaleX),
                                    scaleY: ue(null != v.scaleY ? v.scaleY : v.scale, E.scaleY),
                                    scaleZ: ue(v.scaleZ, E.scaleZ),
                                    x: ue(v.x, E.x),
                                    y: ue(v.y, E.y),
                                    z: ue(v.z, E.z),
                                    xPercent: ue(v.xPercent, E.xPercent),
                                    yPercent: ue(v.yPercent, E.yPercent),
                                    perspective: ue(v.transformPerspective, E.perspective)
                                }, null != (_ = v.directionalRotation))
                                if ("object" == typeof _)
                                    for (d in _) v[d] = _[d];
                                else v.rotation = _;
                            "string" == typeof v.x && -1 !== v.x.indexOf("%") && (a.x = 0, a.xPercent = ue(v.x, E.xPercent)), "string" == typeof v.y && -1 !== v.y.indexOf("%") && (a.y = 0, a.yPercent = ue(v.y, E.yPercent)), a.rotation = he("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : E.rotation - E.skewY, E.rotation - E.skewY, "rotation", S), Ae && (a.rotationX = he("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", S), a.rotationY = he("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", S)), a.skewX = he(v.skewX, E.skewX - E.skewY), (a.skewY = he(v.skewY, E.skewY)) && (a.skewX += a.skewY, a.rotation += a.skewY)
                        }
                        for (Ae && null != v.force3D && (E.force3D = v.force3D, h = !0), E.skewType = v.skewType || E.skewType || U.defaultSkewType, (u = E.force3D || E.z || E.rotationX || E.rotationY || a.z || a.rotationX || a.rotationY || a.perspective) || null == v.scale || (a.scaleZ = 1); - 1 < --y;)(1e-6 < (w = a[b = Ve[y]] - E[b]) || w < -1e-6 || null != v[b] || null != x[b]) && (h = !0, i = new ve(E, b, E[b], w, i), b in S && (i.e = S[b]), i.xs0 = 0, i.plugin = n, s._overwriteProps.push(i.n));
                        return w = v.transformOrigin, E.svg && (w || v.svgOrigin) && (c = E.xOffset, f = E.yOffset, Ne(e, ae(w), a, v.svgOrigin, v.smoothOrigin), i = Se(E, "xOrigin", (m ? E : a).xOrigin, a.xOrigin, i, P), i = Se(E, "yOrigin", (m ? E : a).yOrigin, a.yOrigin, i, P), c === E.xOffset && f === E.yOffset || (i = Se(E, "xOffset", m ? c : E.xOffset, E.xOffset, i, P), i = Se(E, "yOffset", m ? f : E.yOffset, E.yOffset, i, P)), w = We ? null : "0px 0px"), (w || Ae && u && E.zOrigin) && (He ? (h = !0, b = Le, w = (w || ee(e, b, T, !1, "50% 50%")) + "", (i = new ve(g, b, 0, 0, i, -1, P)).b = g[b], i.plugin = n, Ae ? (d = E.zOrigin, w = w.split(" "), E.zOrigin = (2 < w.length && (0 === d || "0px" !== w[2]) ? parseFloat(w[2]) : d) || 0, i.xs0 = i.e = w[0] + " " + (w[1] || "50%") + " 0px", (i = new ve(E, "zOrigin", 0, 0, i, -1, i.n)).b = d, i.xs0 = i.e = E.zOrigin) : i.xs0 = i.e = w) : ae(w + "", E)), h && (s._transformType = E.svg && We || !u && 3 !== this._transformType ? 2 : 3), r && (l[o] = r), i
                    },
                    prefix: !0
                }), Te("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Te("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, o, s, i, n) {
                        t = this.format(t);
                        var l, r, a, d, u, h, _, c, f, p, b, m, g, y, v, S, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            E = e.style;
                        for (f = parseFloat(e.offsetWidth), p = parseFloat(e.offsetHeight), l = t.split(" "), r = 0; r < P.length; r++) this.p.indexOf("border") && (P[r] = Z(P[r])), -1 !== (u = d = ee(e, P[r], T, !1, "0px")).indexOf(" ") && (u = (d = u.split(" "))[0], d = d[1]), h = a = l[r], _ = parseFloat(u), m = u.substr((_ + "").length), (g = "=" === h.charAt(1)) ? (c = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), c *= parseFloat(h), b = h.substr((c + "").length - (c < 0 ? 1 : 0)) || "") : (c = parseFloat(h), b = h.substr((c + "").length)), "" === b && (b = w[o] || m), b !== m && (y = te(e, "borderLeft", _, m), v = te(e, "borderTop", _, m), "%" === b ? (u = y / f * 100 + "%", d = v / p * 100 + "%") : "em" === b ? (u = y / (S = te(e, "borderLeft", 1, "em")) + "em", d = v / S + "em") : (u = y + "px", d = v + "px"), g && (h = parseFloat(u) + c + b, a = parseFloat(d) + c + b)), i = Pe(E, P[r], u + " " + d, h + " " + a, !1, "0px", i);
                        return i
                    },
                    prefix: !0,
                    formatter: me("0px 0px 0px 0px", !1, !0)
                }), Te("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, o, s, i, n) {
                        return Pe(e.style, o, this.format(ee(e, o, T, !1, "0px 0px")), this.format(t), !1, "0px", i)
                    },
                    prefix: !0,
                    formatter: me("0px 0px", !1, !0)
                }), Te("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, o, s, i, n) {
                        var l, r, a, d, u, h, _ = "background-position",
                            c = T || $(e, null),
                            f = this.format((c ? D ? c.getPropertyValue(_ + "-x") + " " + c.getPropertyValue(_ + "-y") : c.getPropertyValue(_) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            p = this.format(t);
                        if (-1 !== f.indexOf("%") != (-1 !== p.indexOf("%")) && p.split(",").length < 2 && (h = ee(e, "backgroundImage").replace(E, "")) && "none" !== h) {
                            for (l = f.split(" "), r = p.split(" "), j.setAttribute("src", h), a = 2; - 1 < --a;)(d = -1 !== (f = l[a]).indexOf("%")) !== (-1 !== r[a].indexOf("%")) && (u = 0 === a ? e.offsetWidth - j.width : e.offsetHeight - j.height, l[a] = d ? parseFloat(f) / 100 * u + "px" : parseFloat(f) / u * 100 + "%");
                            f = l.join(" ")
                        }
                        return this.parseComplex(e.style, f, p, i, n)
                    },
                    formatter: ae
                }), Te("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(e) {
                        return ae(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
                    }
                }), Te("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Te("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Te("transformStyle", {
                    prefix: !0
                }), Te("backfaceVisibility", {
                    prefix: !0
                }), Te("userSelect", {
                    prefix: !0
                }), Te("margin", {
                    parser: ge("marginTop,marginRight,marginBottom,marginLeft")
                }), Te("padding", {
                    parser: ge("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Te("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, o, s, i, n) {
                        var l, r, a;
                        return D < 9 ? (r = e.currentStyle, a = D < 8 ? " " : ",", l = "rect(" + r.clipTop + a + r.clipRight + a + r.clipBottom + a + r.clipLeft + ")", t = this.format(t).split(",").join(a)) : (l = this.format(ee(e, this.p, T, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, l, t, i, n)
                    }
                }), Te("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Te("autoRound,strictUnits", {
                    parser: function(e, t, o, s, i) {
                        return i
                    }
                }), Te("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, o, s, i, n) {
                        var l = ee(e, "borderTopWidth", T, !1, "0px"),
                            r = this.format(t).split(" "),
                            a = r[0].replace(V, "");
                        return "px" !== a && (l = parseFloat(l) / te(e, "borderTopWidth", 1, a) + a), this.parseComplex(e.style, this.format(l + " " + ee(e, "borderTopStyle", T, !1, "solid") + " " + ee(e, "borderTopColor", T, !1, "#000")), r.join(" "), i, n)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(be) || ["#000"])[0]
                    }
                }), Te("borderWidth", {
                    parser: ge("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Te("float,cssFloat,styleFloat", {
                    parser: function(e, t, o, s, i, n) {
                        var l = e.style,
                            r = "cssFloat" in l ? "cssFloat" : "styleFloat";
                        return new ve(l, r, 0, 0, i, -1, o, !1, 0, l[r], t)
                    }
                });
                var qe = function(e) {
                    var t, o = this.t,
                        s = o.filter || ee(this.data, "filter") || "",
                        i = this.s + this.c * e | 0;
                    100 === i && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (o.removeAttribute("filter"), t = !ee(this.data, "filter")) : (o.filter = s.replace(l, ""), t = !0)), t || (this.xn1 && (o.filter = s = s || "alpha(opacity=" + i + ")"), -1 === s.indexOf("pacity") ? 0 === i && this.xn1 || (o.filter = s + " alpha(opacity=" + i + ")") : o.filter = s.replace(H, "opacity=" + i))
                };
                Te("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, o, s, i, n) {
                        var l = parseFloat(ee(e, "opacity", T, !1, "1")),
                            r = e.style,
                            a = "autoAlpha" === o;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + l), a && 1 === l && "hidden" === ee(e, "visibility", T) && 0 !== t && (l = 0), Q ? i = new ve(r, "opacity", l, t - l, i) : ((i = new ve(r, "opacity", 100 * l, 100 * (t - l), i)).xn1 = a ? 1 : 0, r.zoom = 1, i.type = 2, i.b = "alpha(opacity=" + i.s + ")", i.e = "alpha(opacity=" + (i.s + i.c) + ")", i.data = e, i.plugin = n, i.setRatio = qe), a && ((i = new ve(r, "visibility", 0, 0, i, -1, null, !1, 0, 0 !== l ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(i.n), s._overwriteProps.push(o)), i
                    }
                });
                var Ke = function(e, t) {
                        t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(t.replace(r, "-$1").toLowerCase())) : e.removeAttribute(t))
                    },
                    Je = function(e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, o = this.t.style; t;) t.v ? o[t.p] = t.v : Ke(o, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Te("className", {
                    parser: function(e, t, o, s, i, n, l) {
                        var r, a, d, u, h, _ = e.getAttribute("class") || "",
                            c = e.style.cssText;
                        if ((i = s._classNamePT = new ve(e, o, 0, 0, i, 2)).setRatio = Je, i.pr = -11, f = !0, i.b = _, a = se(e, T), d = e._gsClassPT) {
                            for (u = {}, h = d.data; h;) u[h.p] = 1, h = h._next;
                            d.setRatio(1)
                        }
                        return (e._gsClassPT = i).e = "=" !== t.charAt(1) ? t : _.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", i.e), r = ie(e, a, se(e), l, u), e.setAttribute("class", _), i.data = r.firstMPT, e.style.cssText = c, i = i.xfirst = s.parse(e, r.difs, i, n)
                    }
                });
                var Ze = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, o, s, i, n, l = this.t.style,
                            r = b.transform.parse;
                        if ("all" === this.e) i = !(l.cssText = "");
                        else
                            for (s = (t = this.e.split(" ").join("").split(",")).length; - 1 < --s;) o = t[s], b[o] && (b[o].parse === r ? i = !0 : o = "transformOrigin" === o ? Le : b[o].p), Ke(l, o);
                        i && (Ke(l, He), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Te("clearProps", {
                        parser: function(e, t, o, s, i) {
                            return (i = new ve(e, o, 0, 0, i, 2)).setRatio = Ze, i.e = t, i.pr = -10, i.data = s._tween, f = !0, i
                        }
                    }), e = "bezier,throwProps,physicsProps,physics2D".split(","), Ee = e.length; Ee--;) De(e[Ee]);
                (e = U.prototype)._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function(e, t, o, s) {
                    if (!e.nodeType) return !1;
                    this._target = B = e, this._tween = o, this._vars = t, C = s, W = t.autoRound, f = !1, w = t.suffixMap || U.suffixMap, T = $(e, ""), p = this._overwriteProps;
                    var i, n, l, r, a, d, u, h, _, c = e.style;
                    if (m && "" === c.zIndex && ("auto" !== (i = ee(e, "zIndex", T)) && "" !== i || this._addLazySet(c, "zIndex", 0)), "string" == typeof t && (r = c.cssText, i = se(e, T), c.cssText = r + ";" + t, i = ie(e, i, se(e)).difs, !Q && S.test(t) && (i.opacity = parseFloat(RegExp.$1)), t = i, c.cssText = r), t.className ? this._firstPT = n = b.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = n = this.parse(e, t, null), this._transformType) {
                        for (_ = 3 === this._transformType, He ? g && (m = !0, "" === c.zIndex && ("auto" !== (u = ee(e, "zIndex", T)) && "" !== u || this._addLazySet(c, "zIndex", 0)), y && this._addLazySet(c, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (_ ? "visible" : "hidden"))) : c.zoom = 1, l = n; l && l._next;) l = l._next;
                        h = new ve(e, "transform", 0, 0, null, 2), this._linkCSSP(h, null, l), h.setRatio = He ? Ge : Qe, h.data = this._transform || ze(e, T, !0), h.tween = o, h.pr = -1, p.pop()
                    }
                    if (f) {
                        for (; n;) {
                            for (d = n._next, l = r; l && l.pr > n.pr;) l = l._next;
                            (n._prev = l ? l._prev : a) ? n._prev._next = n: r = n, (n._next = l) ? l._prev = n : a = n, n = d
                        }
                        this._firstPT = r
                    }
                    return !0
                }, e.parse = function(e, t, o, s) {
                    var i, n, l, r, a, d, u, h, _, c, f = e.style;
                    for (i in t) "function" == typeof(d = t[i]) && (d = d(C, B)), (n = b[i]) ? o = n.parse(e, d, i, this, o, s, t) : (a = ee(e, i, T) + "", _ = "string" == typeof d, "color" === i || "fill" === i || "stroke" === i || -1 !== i.indexOf("Color") || _ && P.test(d) ? (_ || (d = (3 < (d = fe(d)).length ? "rgba(" : "rgb(") + d.join(",") + ")"), o = Pe(f, i, a, d, !0, "transparent", o, 0, s)) : _ && A.test(d) ? o = Pe(f, i, a, d, !0, null, o, 0, s) : (u = (l = parseFloat(a)) || 0 === l ? a.substr((l + "").length) : "", "" !== a && "auto" !== a || ("width" === i || "height" === i ? (l = re(e, i, T), u = "px") : "left" === i || "top" === i ? (l = oe(e, i, T), u = "px") : (l = "opacity" !== i ? 0 : 1, u = "")), (c = _ && "=" === d.charAt(1)) ? (r = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), r *= parseFloat(d), h = d.replace(V, "")) : (r = parseFloat(d), h = _ ? d.replace(V, "") : ""), "" === h && (h = i in w ? w[i] : u), d = r || 0 === r ? (c ? r + l : r) + h : t[i], u !== h && "" !== h && (r || 0 === r) && l && (l = te(e, i, l, u), "%" === h ? (l /= te(e, i, 100, "%") / 100, !0 !== t.strictUnits && (a = l + "%")) : "em" === h || "rem" === h || "vw" === h || "vh" === h ? l /= te(e, i, 1, h) : "px" !== h && (r = te(e, i, r, h), h = "px"), c && (r || 0 === r) && (d = r + l + h)), c && (r += l), !l && 0 !== l || !r && 0 !== r ? void 0 !== f[i] && (d || d + "" != "NaN" && null != d) ? (o = new ve(f, i, r || l || 0, 0, o, -1, i, !1, 0, a, d)).xs0 = "none" !== d || "display" !== i && -1 === i.indexOf("Style") ? d : a : q("invalid " + i + " tween value: " + t[i]) : (o = new ve(f, i, l, r - l, o, 0, i, !1 !== W && ("px" === h || "zIndex" === i), 0, a, d)).xs0 = h)), s && o && !o.plugin && (o.plugin = s);
                    return o
                }, e.setRatio = function(e) {
                    var t, o, s, i = this._firstPT;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; i;) {
                                if (t = i.c * e + i.s, i.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), i.type)
                                    if (1 === i.type)
                                        if (2 === (s = i.l)) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
                                        else if (3 === s) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                                else if (4 === s) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
                                else if (5 === s) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
                                else {
                                    for (o = i.xs0 + t + i.xs1, s = 1; s < i.l; s++) o += i["xn" + s] + i["xs" + (s + 1)];
                                    i.t[i.p] = o
                                } else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e);
                                else i.t[i.p] = t + i.xs0;
                                i = i._next
                            } else
                                for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next;
                        else
                            for (; i;) {
                                if (2 !== i.type)
                                    if (i.r && -1 !== i.type)
                                        if (t = Math.round(i.s + i.c), i.type) {
                                            if (1 === i.type) {
                                                for (s = i.l, o = i.xs0 + t + i.xs1, s = 1; s < i.l; s++) o += i["xn" + s] + i["xs" + (s + 1)];
                                                i.t[i.p] = o
                                            }
                                        } else i.t[i.p] = t + i.xs0;
                                else i.t[i.p] = i.e;
                                else i.setRatio(e);
                                i = i._next
                            }
                }, e._enableTransforms = function(e) {
                    this._transform = this._transform || ze(this._target, T, !0), this._transformType = this._transform.svg && We || !e && 3 !== this._transformType ? 2 : 3
                };
                var $e = function(e) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                e._addLazySet = function(e, t, o) {
                    var s = this._firstPT = new ve(e, t, 0, 0, this._firstPT, 2);
                    s.e = o, s.setRatio = $e, s.data = this
                }, e._linkCSSP = function(e, t, o, s) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, s = !0), o ? o._next = e : s || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = o), e
                }, e._mod = function(e) {
                    for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
                }, e._kill = function(e) {
                    var t, o, s, i = e;
                    if (e.autoAlpha || e.alpha) {
                        for (o in i = {}, e) i[o] = e[o];
                        i.opacity = 1, i.autoAlpha && (i.visibility = 1)
                    }
                    for (e.className && (t = this._classNamePT) && ((s = t.xfirst) && s._prev ? this._linkCSSP(s._prev, t._next, s._prev._prev) : s === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, s._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== o && t.plugin._kill && (t.plugin._kill(e), o = t.plugin), t = t._next;
                    return n.prototype._kill.call(this, i)
                };
                var et = function(e, t, o) {
                    var s, i, n, l;
                    if (e.slice)
                        for (i = e.length; - 1 < --i;) et(e[i], t, o);
                    else
                        for (i = (s = e.childNodes).length; - 1 < --i;) l = (n = s[i]).type, n.style && (t.push(se(n)), o && o.push(n)), 1 !== l && 9 !== l && 11 !== l || !n.childNodes.length || et(n, t, o)
                };
                return U.cascadeTo = function(e, t, o) {
                    var s, i, n, l, r = R.to(e, t, o),
                        a = [r],
                        d = [],
                        u = [],
                        h = [],
                        _ = R._internals.reservedProps;
                    for (e = r._targets || r.target, et(e, d, h), r.render(t, !0, !0), et(e, u), r.render(0, !0, !0), r._enabled(!0), s = h.length; - 1 < --s;)
                        if ((i = ie(h[s], d[s], u[s])).firstMPT) {
                            for (n in i = i.difs, o) _[n] && (i[n] = o[n]);
                            for (n in l = {}, i) l[n] = d[s][n];
                            a.push(R.fromTo(h[s], t, l, i))
                        } return a
                }, n.activate([U]), U
            }, !0), t = _fwd_gsScope.FWDFWD_gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function(e, t, o) {
                    return this._tween = o, !0
                }
            }), a = function(e) {
                for (; e;) e.f || e.blob || (e.m = Math.round), e = e._next
            }, (s = t.prototype)._onInitAllProps = function() {
                for (var e, t, o, s = this._tween, i = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), n = i.length, l = {}, r = s._propLookup.roundProps; - 1 < --n;) l[i[n]] = Math.round;
                for (n = i.length; - 1 < --n;)
                    for (e = i[n], t = s._firstPT; t;) o = t._next, t.pg ? t.t._mod(l) : t.n === e && (2 === t.f && t.t ? a(t.t._firstPT) : (this._add(t.t, e, t.s, t.c), o && (o._prev = t._prev), t._prev ? t._prev._next = o : s._firstPT === t && (s._firstPT = o), t._next = t._prev = null, s._propLookup[e] = r)), t = o;
                return !1
            }, s._add = function(e, t, o, s) {
                this._addTween(e, t, o, o + s, t, Math.round), this._overwriteProps.push(t)
            }, _fwd_gsScope.FWDFWD_gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.0",
                init: function(e, t, o, s) {
                    var i, n;
                    if ("function" != typeof e.setAttribute) return !1;
                    for (i in t) "function" == typeof(n = t[i]) && (n = n(s, e)), this._addTween(e, "setAttribute", e.getAttribute(i) + "", n + "", i, !1, i), this._overwriteProps.push(i);
                    return !0
                }
            }), _fwd_gsScope.FWDFWD_gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.0",
                API: 2,
                init: function(e, t, o, s) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var i, n, l, r, a, d, u = !0 === t.useRadians ? 2 * Math.PI : 360;
                    for (i in t) "useRadians" !== i && ("function" == typeof(r = t[i]) && (r = r(s, e)), n = (d = (r + "").split("_"))[0], l = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), a = (r = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? l + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - l, d.length && (-1 !== (n = d.join("_")).indexOf("short") && (a %= u) !== a % (u / 2) && (a = a < 0 ? a + u : a - u), -1 !== n.indexOf("_cw") && a < 0 ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== n.indexOf("ccw") && 0 < a && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (1e-6 < a || a < -1e-6) && (this._addTween(e, i, l, l + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _fwd_gsScope.FWDFWD_gsDefine("easing.Back", ["easing.Ease"], function(b) {
                var t, o, e, s = _fwd_gsScope.FWDGreenSockGlobals || _fwd_gsScope,
                    i = s.com.greensock,
                    n = 2 * Math.PI,
                    l = Math.PI / 2,
                    r = i._class,
                    a = function(e, t) {
                        var o = r("easing." + e, function() {}, !0),
                            s = o.prototype = new b;
                        return s.constructor = o, s.getRatio = t, o
                    },
                    d = b.register || function() {},
                    u = function(e, t, o, s, i) {
                        var n = r("easing." + e, {
                            easeOut: new t,
                            easeIn: new o,
                            easeInOut: new s
                        }, !0);
                        return d(n, e), n
                    },
                    m = function(e, t, o) {
                        this.t = e, this.v = t, o && (((this.next = o).prev = this).c = o.v - t, this.gap = o.t - e)
                    },
                    h = function(e, t) {
                        var o = r("easing." + e, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            s = o.prototype = new b;
                        return s.constructor = o, s.getRatio = t, s.config = function(e) {
                            return new o(e)
                        }, o
                    },
                    _ = u("Back", h("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), h("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), h("BackInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    c = r("easing.SlowMo", function(e, t, o) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === o
                    }, !0),
                    f = c.prototype = new b;
                return f.constructor = c, f.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, c.ease = new c(.7, .7), f.config = c.config = function(e, t, o) {
                    return new c(e, t, o)
                }, (f = (t = r("easing.SteppedEase", function(e) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                }, !0)).prototype = new b).constructor = t, f.getRatio = function(e) {
                    return e < 0 ? e = 0 : 1 <= e && (e = .999999999), (this._p2 * e >> 0) * this._p1
                }, f.config = t.config = function(e) {
                    return new t(e)
                }, (f = (o = r("easing.RoughEase", function(e) {
                    for (var t, o, s, i, n, l, r = (e = e || {}).taper || "none", a = [], d = 0, u = 0 | (e.points || 20), h = u, _ = !1 !== e.randomize, c = !0 === e.clamp, f = e.template instanceof b ? e.template : null, p = "number" == typeof e.strength ? .4 * e.strength : .4; - 1 < --h;) t = _ ? Math.random() : 1 / u * h, o = f ? f.getRatio(t) : t, s = "none" === r ? p : "out" === r ? (i = 1 - t) * i * p : "in" === r ? t * t * p : t < .5 ? (i = 2 * t) * i * .5 * p : (i = 2 * (1 - t)) * i * .5 * p, _ ? o += Math.random() * s - .5 * s : h % 2 ? o += .5 * s : o -= .5 * s, c && (1 < o ? o = 1 : o < 0 && (o = 0)), a[d++] = {
                        x: t,
                        y: o
                    };
                    for (a.sort(function(e, t) {
                            return e.x - t.x
                        }), l = new m(1, 1, null), h = u; - 1 < --h;) n = a[h], l = new m(n.x, n.y, l);
                    this._prev = new m(0, 0, 0 !== l.t ? l : l.next)
                }, !0)).prototype = new b).constructor = o, f.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return (this._prev = t).v + (e - t.t) / t.gap * t.c
                }, f.config = function(e) {
                    return new o(e)
                }, o.ease = new o, u("Bounce", a("BounceOut", function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), a("BounceIn", function(e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), a("BounceInOut", function(e) {
                    var t = e < .5;
                    return (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? e *= 7.5625 * e : e = e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), u("Circ", a("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), a("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), a("CircInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), u("Elastic", (e = function(e, t, o) {
                    var s = r("easing." + e, function(e, t) {
                            this._p1 = 1 <= e ? e : 1, this._p2 = (t || o) / (e < 1 ? e : 1), this._p3 = this._p2 / n * (Math.asin(1 / this._p1) || 0), this._p2 = n / this._p2
                        }, !0),
                        i = s.prototype = new b;
                    return i.constructor = s, i.getRatio = t, i.config = function(e, t) {
                        return new s(e, t)
                    }, s
                })("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                }, .3), e("ElasticIn", function(e) {
                    return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
                }, .3), e("ElasticInOut", function(e) {
                    return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                }, .45)), u("Expo", a("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), a("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), a("ExpoInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), u("Sine", a("SineOut", function(e) {
                    return Math.sin(e * l)
                }), a("SineIn", function(e) {
                    return 1 - Math.cos(e * l)
                }), a("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), r("easing.EaseLookup", {
                    find: function(e) {
                        return b.map[e]
                    }
                }, !0), d(s.SlowMo, "SlowMo", "ease,"), d(o, "RoughEase", "ease,"), d(t, "SteppedEase", "ease,"), _
            }, !0)
        }), _fwd_gsScope.FWDFWD_gsDefine && _fwd_gsScope._fwd_gsQueue.pop()(),
        function(c, f) {
            "use strict";
            var p = {},
                b = c.FWDGreenSockGlobals = c.FWDGreenSockGlobals || c;
            if (!b.FWDTweenLite) {
                var e, t, o, m, g, s, i, y = function(e) {
                        var t, o = e.split("."),
                            s = b;
                        for (t = 0; t < o.length; t++) s[o[t]] = s = s[o[t]] || {};
                        return s
                    },
                    h = y("com.greensock"),
                    v = 1e-10,
                    a = function(e) {
                        var t, o = [],
                            s = e.length;
                        for (t = 0; t !== s; o.push(e[t++]));
                        return o
                    },
                    S = function() {},
                    P = (s = Object.prototype.toString, i = s.call([]), function(e) {
                        return null != e && (e instanceof Array || "object" == typeof e && !!e.push && s.call(e) === i)
                    }),
                    E = {},
                    w = function(a, d, u, h) {
                        this.sc = E[a] ? E[a].sc : [], (E[a] = this).gsClass = null, this.func = u;
                        var _ = [];
                        this.check = function(e) {
                            for (var t, o, s, i, n, l = d.length, r = l; - 1 < --l;)(t = E[d[l]] || new w(d[l], [])).gsClass ? (_[l] = t.gsClass, r--) : e && t.sc.push(this);
                            if (0 === r && u) {
                                if (s = (o = ("com.greensock." + a).split(".")).pop(), i = y(o.join("."))[s] = this.gsClass = u.apply(u, _), h)
                                    if (b[s] = p[s] = i, !(n = "undefined" != typeof fwd_module && fwd_module.exports) && "function" == typeof define && define.amd) define((c.FWDGreenSockAMDPath ? c.FWDGreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function() {
                                        return i
                                    });
                                    else if (n)
                                    if (a === f)
                                        for (l in fwd_module.exports = p[f] = i, p) i[l] = p[l];
                                    else p[f] && (p[f][s] = i);
                                for (l = 0; l < this.sc.length; l++) this.sc[l].check()
                            }
                        }, this.check(!0)
                    },
                    n = c.FWDFWD_gsDefine = function(e, t, o, s) {
                        return new w(e, t, o, s)
                    },
                    _ = h._class = function(e, t, o) {
                        return t = t || function() {}, n(e, [], function() {
                            return t
                        }, o), t
                    };
                n.globals = b;
                var l = [0, 0, 1, 1],
                    T = _("easing.Ease", function(e, t, o, s) {
                        this._func = e, this._type = o || 0, this._power = s || 0, this._params = t ? l.concat(t) : l
                    }, !0),
                    D = T.map = {},
                    r = T.register = function(e, t, o, s) {
                        for (var i, n, l, r, a = t.split(","), d = a.length, u = (o || "easeIn,easeOut,easeInOut").split(","); - 1 < --d;)
                            for (n = a[d], i = s ? _("easing." + n, null, !0) : h.easing[n] || {}, l = u.length; - 1 < --l;) r = u[l], D[n + "." + r] = D[r + n] = i[r] = e.getRatio ? e : e[r] || new e
                    };
                for ((o = T.prototype)._calcEnd = !1, o.getRatio = function(e) {
                        if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                        var t = this._type,
                            o = this._power,
                            s = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                        return 1 === o ? s *= s : 2 === o ? s *= s * s : 3 === o ? s *= s * s * s : 4 === o && (s *= s * s * s * s), 1 === t ? 1 - s : 2 === t ? s : e < .5 ? s / 2 : 1 - s / 2
                    }, t = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --t;) o = e[t] + ",Power" + t, r(new T(null, null, 1, t), o, "easeOut", !0), r(new T(null, null, 2, t), o, "easeIn" + (0 === t ? ",easeNone" : "")), r(new T(null, null, 3, t), o, "easeInOut");
                D.linear = h.easing.Linear.easeIn, D.swing = h.easing.Quad.easeInOut;
                var W = _("events.EventDispatcher", function(e) {
                    this._listeners = {}, this._eventTarget = e || this
                });
                (o = W.prototype).addEventListener = function(e, t, o, s, i) {
                    i = i || 0;
                    var n, l, r = this._listeners[e],
                        a = 0;
                    for (this !== m || g || m.wake(), null == r && (this._listeners[e] = r = []), l = r.length; - 1 < --l;)(n = r[l]).c === t && n.s === o ? r.splice(l, 1) : 0 === a && n.pr < i && (a = l + 1);
                    r.splice(a, 0, {
                        c: t,
                        s: o,
                        up: s,
                        pr: i
                    })
                }, o.removeEventListener = function(e, t) {
                    var o, s = this._listeners[e];
                    if (s)
                        for (o = s.length; - 1 < --o;)
                            if (s[o].c === t) return void s.splice(o, 1)
                }, o.dispatchEvent = function(e) {
                    var t, o, s, i = this._listeners[e];
                    if (i)
                        for (1 < (t = i.length) && (i = i.slice(0)), o = this._eventTarget; - 1 < --t;)(s = i[t]) && (s.up ? s.c.call(s.s || o, {
                            type: e,
                            target: o
                        }) : s.c.call(s.s || o))
                };
                var B = c.requestAnimationFrame,
                    C = c.cancelAnimationFrame,
                    F = Date.now || function() {
                        return (new Date).getTime()
                    },
                    k = F();
                for (t = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --t && !B;) B = c[e[t] + "RequestAnimationFrame"], C = c[e[t] + "CancelAnimationFrame"] || c[e[t] + "CancelRequestAnimationFrame"];
                _("Ticker", function(e, t) {
                    var i, n, l, r, a, d = this,
                        u = F(),
                        o = !(!1 === t || !B) && "auto",
                        h = 500,
                        _ = 33,
                        c = function(e) {
                            var t, o, s = F() - k;
                            h < s && (u += s - _), k += s, d.time = (k - u) / 1e3, t = d.time - a, (!i || 0 < t || !0 === e) && (d.frame++, a += t + (r <= t ? .004 : r - t), o = !0), !0 !== e && (l = n(c)), o && d.dispatchEvent("tick")
                        };
                    W.call(d), d.time = d.frame = 0, d.tick = function() {
                        c(!0)
                    }, d.lagSmoothing = function(e, t) {
                        h = e || 1e10, _ = Math.min(t, h, 0)
                    }, d.sleep = function() {
                        null != l && (o && C ? C(l) : clearTimeout(l), n = S, l = null, d === m && (g = !1))
                    }, d.wake = function(e) {
                        null !== l ? d.sleep() : e ? u += -k + (k = F()) : 10 < d.frame && (k = F() - h + 5), n = 0 === i ? S : o && B ? B : function(e) {
                            return setTimeout(e, 1e3 * (a - d.time) + 1 | 0)
                        }, d === m && (g = !0), c(2)
                    }, d.fps = function(e) {
                        if (!arguments.length) return i;
                        r = 1 / ((i = e) || 60), a = this.time + r, d.wake()
                    }, d.useRAF = function(e) {
                        if (!arguments.length) return o;
                        d.sleep(), o = e, d.fps(i)
                    }, d.fps(e), setTimeout(function() {
                        "auto" === o && d.frame < 5 && "hidden" !== document.visibilityState && d.useRAF(!1)
                    }, 1500)
                }), (o = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
                var d = _("core.FWDAnim", function(e, t) {
                    if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, G) {
                        g || m.wake();
                        var o = this.vars.useFrames ? Q : G;
                        o.add(this, o._time), this.vars.paused && this.paused(!0)
                    }
                });
                m = d.ticker = new h.Ticker, (o = d.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
                var u = function() {
                    g && 2e3 < F() - k && m.wake(), setTimeout(u, 2e3)
                };
                u(), o.play = function(e, t) {
                    return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                }, o.pause = function(e, t) {
                    return null != e && this.seek(e, t), this.paused(!0)
                }, o.resume = function(e, t) {
                    return null != e && this.seek(e, t), this.paused(!1)
                }, o.seek = function(e, t) {
                    return this.totalTime(Number(e), !1 !== t)
                }, o.restart = function(e, t) {
                    return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
                }, o.reverse = function(e, t) {
                    return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                }, o.render = function(e, t, o) {}, o.invalidate = function() {
                    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                }, o.isActive = function() {
                    var e, t = this._timeline,
                        o = this._startTime;
                    return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= o && e < o + this.totalDuration() / this._timeScale
                }, o._enabled = function(e, t) {
                    return g || m.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                }, o._kill = function(e, t) {
                    return this._enabled(!1, !1)
                }, o.kill = function(e, t) {
                    return this._kill(e, t), this
                }, o._uncache = function(e) {
                    for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                    return this
                }, o._swapSelfInParams = function(e) {
                    for (var t = e.length, o = e.concat(); - 1 < --t;) "{self}" === e[t] && (o[t] = this);
                    return o
                }, o._callback = function(e) {
                    var t = this.vars,
                        o = t[e],
                        s = t[e + "Params"],
                        i = t[e + "Scope"] || t.callbackScope || this;
                    switch (s ? s.length : 0) {
                        case 0:
                            o.call(i);
                            break;
                        case 1:
                            o.call(i, s[0]);
                            break;
                        case 2:
                            o.call(i, s[0], s[1]);
                            break;
                        default:
                            o.apply(i, s)
                    }
                }, o.eventCallback = function(e, t, o, s) {
                    if ("on" === (e || "").substr(0, 2)) {
                        var i = this.vars;
                        if (1 === arguments.length) return i[e];
                        null == t ? delete i[e] : (i[e] = t, i[e + "Params"] = P(o) && -1 !== o.join("").indexOf("{self}") ? this._swapSelfInParams(o) : o, i[e + "Scope"] = s), "onUpdate" === e && (this._onUpdate = t)
                    }
                    return this
                }, o.delay = function(e) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
                }, o.duration = function(e) {
                    return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, o.totalDuration = function(e) {
                    return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
                }, o.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                }, o.totalTime = function(e, t, o) {
                    if (g || m.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (e < 0 && !o && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var s = this._totalDuration,
                                i = this._timeline;
                            if (s < e && !o && (e = s), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? s - e : e) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
                                for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                        }
                        this._gc && this._enabled(!0, !1), this._totalTime === e && 0 !== this._duration || (L.length && K(), this.render(e, t, !1), L.length && K())
                    }
                    return this
                }, o.progress = o.totalProgress = function(e, t) {
                    var o = this.duration();
                    return arguments.length ? this.totalTime(o * e, t) : o ? this._time / o : this.ratio
                }, o.startTime = function(e) {
                    return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
                }, o.endTime = function(e) {
                    return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
                }, o.timeScale = function(e) {
                    if (!arguments.length) return this._timeScale;
                    if (e = e || v, this._timeline && this._timeline.smoothChildTiming) {
                        var t = this._pauseTime,
                            o = t || 0 === t ? t : this._timeline.totalTime();
                        this._startTime = o - (o - this._startTime) * this._timeScale / e
                    }
                    return this._timeScale = e, this._uncache(!1)
                }, o.reversed = function(e) {
                    return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                }, o.paused = function(e) {
                    if (!arguments.length) return this._paused;
                    var t, o, s = this._timeline;
                    return e != this._paused && s && (g || e || m.wake(), o = (t = s.rawTime()) - this._pauseTime, !e && s.smoothChildTiming && (this._startTime += o, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== o && this._initted && this.duration() && (t = s.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
                };
                var V = _("core.FWDSimpleTimeline", function(e) {
                    d.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                (o = V.prototype = new d).constructor = V, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(e, t, o, s) {
                    var i, n;
                    if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                        for (n = e._startTime; i && i._startTime > n;) i = i._prev;
                    return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
                }, o._remove = function(e, t) {
                    return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                }, o.render = function(e, t, o) {
                    var s, i = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = e; i;) s = i._next, (i._active || e >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, o) : i.render((e - i._startTime) * i._timeScale, t, o)), i = s
                }, o.rawTime = function() {
                    return g || m.wake(), this._totalTime
                };
                var H = _("FWDTweenLite", function(e, t, o) {
                        if (d.call(this, t, o), this.render = H.prototype.render, null == e) throw "Cannot tween a null target.";
                        this.target = e = "string" != typeof e ? e : H.selector(e) || e;
                        var s, i, n, l = e.jquery || e.length && e !== c && e[0] && (e[0] === c || e[0].nodeType && e[0].style && !e.nodeType),
                            r = this.vars.overwrite;
                        if (this._overwrite = r = null == r ? z[H.defaultOverwrite] : "number" == typeof r ? r >> 0 : z[r], (l || e instanceof Array || e.push && P(e)) && "number" != typeof e[0])
                            for (this._targets = n = a(e), this._propLookup = [], this._siblings = [], s = 0; s < n.length; s++)(i = n[s]) ? "string" != typeof i ? i.length && i !== c && i[0] && (i[0] === c || i[0].nodeType && i[0].style && !i.nodeType) ? (n.splice(s--, 1), this._targets = n = n.concat(a(i))) : (this._siblings[s] = J(i, this, !1), 1 === r && 1 < this._siblings[s].length && $(i, this, null, 1, this._siblings[s])) : "string" == typeof(i = n[s--] = H.selector(i)) && n.splice(s + 1, 1) : n.splice(s--, 1);
                        else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === r && 1 < this._siblings.length && $(e, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -v, this.render(Math.min(0, -this._delay)))
                    }, !0),
                    O = function(e) {
                        return e && e.length && e !== c && e[0] && (e[0] === c || e[0].nodeType && e[0].style && !e.nodeType)
                    };
                (o = H.prototype = new d).constructor = H, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, H.version = "1.19.0", H.defaultEase = o._ease = new T(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = m, H.autoSleep = 120, H.lagSmoothing = function(e, t) {
                    m.lagSmoothing(e, t)
                }, H.selector = c.$ || c.jQuery || function(e) {
                    var t = c.$ || c.jQuery;
                    return t ? (H.selector = t)(e) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                };
                var L = [],
                    A = {},
                    x = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    I = function(e) {
                        for (var t, o = this._firstPT; o;) t = o.blob ? e ? this.join("") : this.start : o.c * e + o.s, o.m ? t = o.m(t, this._target || o.t) : t < 1e-6 && -1e-6 < t && (t = 0), o.f ? o.fp ? o.t[o.p](o.fp, t) : o.t[o.p](t) : o.t[o.p] = t, o = o._next
                    },
                    M = function(e, t, o, s) {
                        var i, n, l, r, a, d, u, h = [e, t],
                            _ = 0,
                            c = "",
                            f = 0;
                        for (h.start = e, o && (o(h), e = h[0], t = h[1]), h.length = 0, i = e.match(x) || [], n = t.match(x) || [], s && (s._next = null, s.blob = 1, h._firstPT = h._applyPT = s), a = n.length, r = 0; r < a; r++) u = n[r], c += (d = t.substr(_, t.indexOf(u, _) - _)) || !r ? d : ",", _ += d.length, f ? f = (f + 1) % 5 : "rgba(" === d.substr(-5) && (f = 1), u === i[r] || i.length <= r ? c += u : (c && (h.push(c), c = ""), l = parseFloat(i[r]), h.push(l), h._firstPT = {
                            _next: h._firstPT,
                            t: h,
                            p: h.length - 1,
                            s: l,
                            c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - l) || 0,
                            f: 0,
                            m: f && f < 4 ? Math.round : 0
                        }), _ += u.length;
                        return (c += t.substr(_)) && h.push(c), h.setRatio = I, h
                    },
                    R = function(e, t, o, s, i, n, l, r, a) {
                        "function" == typeof s && (s = s(a || 0, e));
                        var d, u = "get" === o ? e[t] : o,
                            h = typeof e[t],
                            _ = "string" == typeof s && "=" === s.charAt(1),
                            c = {
                                t: e,
                                p: t,
                                s: u,
                                f: "function" === h,
                                pg: 0,
                                n: i || t,
                                m: n ? "function" == typeof n ? n : Math.round : 0,
                                pr: 0,
                                c: _ ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
                            };
                        if ("number" !== h && ("function" === h && "get" === o && (d = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), c.s = u = l ? e[d](l) : e[d]()), "string" == typeof u && (l || isNaN(u)) ? (c.fp = l, c = {
                                t: M(u, s, r || H.defaultStringFilter, c),
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: i || t,
                                pr: 0,
                                m: 0
                            }) : _ || (c.s = parseFloat(u), c.c = parseFloat(s) - c.s || 0)), c.c) return (c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c
                    },
                    U = H._internals = {
                        isArray: P,
                        isSelector: O,
                        lazyTweens: L,
                        blobDif: M
                    },
                    N = H._plugins = {},
                    X = U.tweenLookup = {},
                    Y = 0,
                    j = U.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1,
                        id: 1
                    },
                    z = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        true: 1,
                        false: 0
                    },
                    Q = d._rootFramesTimeline = new V,
                    G = d._rootTimeline = new V,
                    q = 30,
                    K = U.lazyRender = function() {
                        var e, t = L.length;
                        for (A = {}; - 1 < --t;)(e = L[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                        L.length = 0
                    };
                G._startTime = m.time, Q._startTime = m.frame, G._active = Q._active = !0, setTimeout(K, 1), d._updateRoot = H.render = function() {
                    var e, t, o;
                    if (L.length && K(), G.render((m.time - G._startTime) * G._timeScale, !1, !1), Q.render((m.frame - Q._startTime) * Q._timeScale, !1, !1), L.length && K(), m.frame >= q) {
                        for (o in q = m.frame + (parseInt(H.autoSleep, 10) || 120), X) {
                            for (e = (t = X[o].tweens).length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                            0 === t.length && delete X[o]
                        }
                        if ((!(o = G._first) || o._paused) && H.autoSleep && !Q._first && 1 === m._listeners.tick.length) {
                            for (; o && o._paused;) o = o._next;
                            o || m.sleep()
                        }
                    }
                }, m.addEventListener("tick", d._updateRoot);
                var J = function(e, t, o) {
                        var s, i, n = e._gsTweenID;
                        if (X[n || (e._gsTweenID = n = "t" + Y++)] || (X[n] = {
                                target: e,
                                tweens: []
                            }), t && ((s = X[n].tweens)[i = s.length] = t, o))
                            for (; - 1 < --i;) s[i] === t && s.splice(i, 1);
                        return X[n].tweens
                    },
                    Z = function(e, t, o, s) {
                        var i, n, l = e.vars.onOverwrite;
                        return l && (i = l(e, t, o, s)), (l = H.onOverwrite) && (n = l(e, t, o, s)), !1 !== i && !1 !== n
                    },
                    $ = function(e, t, o, s, i) {
                        var n, l, r, a;
                        if (1 === s || 4 <= s) {
                            for (a = i.length, n = 0; n < a; n++)
                                if ((r = i[n]) !== t) r._gc || r._kill(null, e, t) && (l = !0);
                                else if (5 === s) break;
                            return l
                        }
                        var d, u = t._startTime + v,
                            h = [],
                            _ = 0,
                            c = 0 === t._duration;
                        for (n = i.length; - 1 < --n;)(r = i[n]) === t || r._gc || r._paused || (r._timeline !== t._timeline ? (d = d || ee(t, 0, c), 0 === ee(r, d, c) && (h[_++] = r)) : r._startTime <= u && r._startTime + r.totalDuration() / r._timeScale > u && ((c || !r._initted) && u - r._startTime <= 2e-10 || (h[_++] = r)));
                        for (n = _; - 1 < --n;)
                            if (r = h[n], 2 === s && r._kill(o, e, t) && (l = !0), 2 !== s || !r._firstPT && r._initted) {
                                if (2 !== s && !Z(r, t)) continue;
                                r._enabled(!1, !1) && (l = !0)
                            } return l
                    },
                    ee = function(e, t, o) {
                        for (var s = e._timeline, i = s._timeScale, n = e._startTime; s._timeline;) {
                            if (n += s._startTime, i *= s._timeScale, s._paused) return -100;
                            s = s._timeline
                        }
                        return t < (n /= i) ? n - t : o && n === t || !e._initted && n - t < 2 * v ? v : (n += e.totalDuration() / e._timeScale / i) > t + v ? 0 : n - t - v
                    };
                o._init = function() {
                    var e, t, o, s, i, n, l = this.vars,
                        r = this._overwrittenProps,
                        a = this._duration,
                        d = !!l.immediateRender,
                        u = l.ease;
                    if (l.startAt) {
                        for (s in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), i = {}, l.startAt) i[s] = l.startAt[s];
                        if (i.overwrite = !1, i.immediateRender = !0, i.lazy = d && !1 !== l.lazy, i.startAt = i.delay = null, this._startAt = H.to(this.target, 0, i), d)
                            if (0 < this._time) this._startAt = null;
                            else if (0 !== a) return
                    } else if (l.runBackwards && 0 !== a)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                        else {
                            for (s in 0 !== this._time && (d = !1), o = {}, l) j[s] && "autoCSS" !== s || (o[s] = l[s]);
                            if (o.overwrite = 0, o.data = "isFromStart", o.lazy = d && !1 !== l.lazy, o.immediateRender = d, this._startAt = H.to(this.target, 0, o), d) {
                                if (0 === this._time) return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        } if (this._ease = u = u ? u instanceof T ? u : "function" == typeof u ? new T(u, l.easeParams) : D[u] || H.defaultEase : H.defaultEase, l.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, l.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (n = this._targets.length, e = 0; e < n; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], r ? r[e] : null, e) && (t = !0);
                    else t = this._initProps(this.target, this._propLookup, this._siblings, r, 0);
                    if (t && H._onPluginEvent("_onInitAllProps", this), r && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), l.runBackwards)
                        for (o = this._firstPT; o;) o.s += o.c, o.c = -o.c, o = o._next;
                    this._onUpdate = l.onUpdate, this._initted = !0
                }, o._initProps = function(e, t, o, s, i) {
                    var n, l, r, a, d, u;
                    if (null == e) return !1;
                    for (n in A[e._gsTweenID] && K(), this.vars.css || e.style && e !== c && e.nodeType && N.css && !1 !== this.vars.autoCSS && function(e, t) {
                            var o, s = {};
                            for (o in e) j[o] || o in t && "transform" !== o && "x" !== o && "y" !== o && "width" !== o && "height" !== o && "className" !== o && "border" !== o || !(!N[o] || N[o] && N[o]._autoCSS) || (s[o] = e[o], delete e[o]);
                            e.css = s
                        }(this.vars, e), this.vars)
                        if (u = this.vars[n], j[n]) u && (u instanceof Array || u.push && P(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[n] = u = this._swapSelfInParams(u, this));
                        else if (N[n] && (a = new N[n])._onInitTween(e, this.vars[n], this, i)) {
                        for (this._firstPT = d = {
                                _next: this._firstPT,
                                t: a,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: n,
                                pg: 1,
                                pr: a._priority,
                                m: 0
                            }, l = a._overwriteProps.length; - 1 < --l;) t[a._overwriteProps[l]] = this._firstPT;
                        (a._priority || a._onInitAllProps) && (r = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d)
                    } else t[n] = R.call(this, e, n, "get", u, n, 0, null, this.vars.stringFilter, i);
                    return s && this._kill(s, e) ? this._initProps(e, t, o, s, i) : 1 < this._overwrite && this._firstPT && 1 < o.length && $(e, this, t, this._overwrite, o) ? (this._kill(t, e), this._initProps(e, t, o, s, i)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (A[e._gsTweenID] = !0), r)
                }, o.render = function(e, t, o) {
                    var s, i, n, l, r = this._time,
                        a = this._duration,
                        d = this._rawPrevTime;
                    if (a - 1e-7 <= e) this._totalTime = this._time = a, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, i = "onComplete", o = o || this._timeline.autoRemoveChildren), 0 === a && (this._initted || !this.vars.lazy || o) && (this._startTime === this._timeline._duration && (e = 0), (d < 0 || e <= 0 && -1e-7 <= e || d === v && "isPause" !== this.data) && d !== e && (o = !0, v < d && (i = "onReverseComplete")), this._rawPrevTime = l = !t || e || d === e ? e : v);
                    else if (e < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === a && 0 < d) && (i = "onReverseComplete", s = this._reversed), e < 0 && (this._active = !1, 0 === a && (this._initted || !this.vars.lazy || o) && (0 <= d && (d !== v || "isPause" !== this.data) && (o = !0), this._rawPrevTime = l = !t || e || d === e ? e : v)), this._initted || (o = !0);
                    else if (this._totalTime = this._time = e, this._easeType) {
                        var u = e / a,
                            h = this._easeType,
                            _ = this._easePower;
                        (1 === h || 3 === h && .5 <= u) && (u = 1 - u), 3 === h && (u *= 2), 1 === _ ? u *= u : 2 === _ ? u *= u * u : 3 === _ ? u *= u * u * u : 4 === _ && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : e / a < .5 ? u / 2 : 1 - u / 2
                    } else this.ratio = this._ease.getRatio(e / a);
                    if (this._time !== r || o) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!o && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = r, this._rawPrevTime = d, L.push(this), void(this._lazy = [e, t]);
                            this._time && !s ? this.ratio = this._ease.getRatio(this._time / a) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== r && 0 <= e && (this._active = !0), 0 === r && (this._startAt && (0 <= e ? this._startAt.render(e, t, o) : i || (i = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== a || t || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                        this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, t, o), t || (this._time !== r || s || o) && this._callback("onUpdate")), i && (this._gc && !o || (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, o), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this._callback(i), 0 === a && this._rawPrevTime === v && l !== v && (this._rawPrevTime = 0)))
                    }
                }, o._kill = function(e, t, o) {
                    if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    t = "string" != typeof t ? t || this._targets || this.target : H.selector(t) || t;
                    var s, i, n, l, r, a, d, u, h, _ = o && this._time && o._startTime === this._startTime && this._timeline === o._timeline;
                    if ((P(t) || O(t)) && "number" != typeof t[0])
                        for (s = t.length; - 1 < --s;) this._kill(e, t[s], o) && (a = !0);
                    else {
                        if (this._targets) {
                            for (s = this._targets.length; - 1 < --s;)
                                if (t === this._targets[s]) {
                                    r = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[s] = e ? this._overwrittenProps[s] || {} : "all";
                                    break
                                }
                        } else {
                            if (t !== this.target) return !1;
                            r = this._propLookup, i = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                        }
                        if (r) {
                            if (d = e || r, u = e !== i && "all" !== i && e !== r && ("object" != typeof e || !e._tempKill), o && (H.onOverwrite || this.vars.onOverwrite)) {
                                for (n in d) r[n] && (h || (h = []), h.push(n));
                                if ((h || !e) && !Z(this, o, t, h)) return !1
                            }
                            for (n in d)(l = r[n]) && (_ && (l.f ? l.t[l.p](l.s) : l.t[l.p] = l.s, a = !0), l.pg && l.t._kill(d) && (a = !0), l.pg && 0 !== l.t._overwriteProps.length || (l._prev ? l._prev._next = l._next : l === this._firstPT && (this._firstPT = l._next), l._next && (l._next._prev = l._prev), l._next = l._prev = null), delete r[n]), u && (i[n] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return a
                }, o.invalidate = function() {
                    return this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], d.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -v, this.render(Math.min(0, -this._delay))), this
                }, o._enabled = function(e, t) {
                    if (g || m.wake(), e && this._gc) {
                        var o, s = this._targets;
                        if (s)
                            for (o = s.length; - 1 < --o;) this._siblings[o] = J(s[o], this, !0);
                        else this._siblings = J(this.target, this, !0)
                    }
                    return d.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && H._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
                }, H.to = function(e, t, o) {
                    return new H(e, t, o)
                }, H.from = function(e, t, o) {
                    return o.runBackwards = !0, o.immediateRender = 0 != o.immediateRender, new H(e, t, o)
                }, H.fromTo = function(e, t, o, s) {
                    return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, new H(e, t, s)
                }, H.delayedCall = function(e, t, o, s, i) {
                    return new H(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: o,
                        callbackScope: s,
                        onReverseComplete: t,
                        onReverseCompleteParams: o,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: i,
                        overwrite: 0
                    })
                }, H.set = function(e, t) {
                    return new H(e, 0, t)
                }, H.getTweensOf = function(e, t) {
                    if (null == e) return [];
                    var o, s, i, n;
                    if (e = "string" != typeof e ? e : H.selector(e) || e, (P(e) || O(e)) && "number" != typeof e[0]) {
                        for (o = e.length, s = []; - 1 < --o;) s = s.concat(H.getTweensOf(e[o], t));
                        for (o = s.length; - 1 < --o;)
                            for (n = s[o], i = o; - 1 < --i;) n === s[i] && s.splice(o, 1)
                    } else
                        for (o = (s = J(e).concat()).length; - 1 < --o;)(s[o]._gc || t && !s[o].isActive()) && s.splice(o, 1);
                    return s
                }, H.killTweensOf = H.killDelayedCallsTo = function(e, t, o) {
                    "object" == typeof t && (o = t, t = !1);
                    for (var s = H.getTweensOf(e, t), i = s.length; - 1 < --i;) s[i]._kill(o, e)
                };
                var te = _("plugins.TweenPlugin", function(e, t) {
                    this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = te.prototype
                }, !0);
                if (o = te.prototype, te.version = "1.19.0", te.API = 2, o._firstPT = null, o._addTween = R, o.setRatio = I, o._kill = function(e) {
                        var t, o = this._overwriteProps,
                            s = this._firstPT;
                        if (null != e[this._propName]) this._overwriteProps = [];
                        else
                            for (t = o.length; - 1 < --t;) null != e[o[t]] && o.splice(t, 1);
                        for (; s;) null != e[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                        return !1
                    }, o._mod = o._roundProps = function(e) {
                        for (var t, o = this._firstPT; o;)(t = e[this._propName] || null != o.n && e[o.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === o.f ? o.t._applyPT.m = t : o.m = t), o = o._next
                    }, H._onPluginEvent = function(e, t) {
                        var o, s, i, n, l, r = t._firstPT;
                        if ("_onInitAllProps" === e) {
                            for (; r;) {
                                for (l = r._next, s = i; s && s.pr > r.pr;) s = s._next;
                                (r._prev = s ? s._prev : n) ? r._prev._next = r: i = r, (r._next = s) ? s._prev = r : n = r, r = l
                            }
                            r = t._firstPT = i
                        }
                        for (; r;) r.pg && "function" == typeof r.t[e] && r.t[e]() && (o = !0), r = r._next;
                        return o
                    }, te.activate = function(e) {
                        for (var t = e.length; - 1 < --t;) e[t].API === te.API && (N[(new e[t])._propName] = e[t]);
                        return !0
                    }, n.plugin = function(e) {
                        if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                        var t, o = e.propName,
                            s = e.priority || 0,
                            i = e.overwriteProps,
                            n = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_mod",
                                mod: "_mod",
                                initAll: "_onInitAllProps"
                            },
                            l = _("plugins." + o.charAt(0).toUpperCase() + o.substr(1) + "Plugin", function() {
                                te.call(this, o, s), this._overwriteProps = i || []
                            }, !0 === e.fwd_global),
                            r = l.prototype = new te(o);
                        for (t in (r.constructor = l).API = e.API, n) "function" == typeof e[t] && (r[n[t]] = e[t]);
                        return l.version = e.version, te.activate([l]), l
                    }, e = c._fwd_gsQueue) {
                    for (t = 0; t < e.length; t++) e[t]();
                    for (o in E) E[o].func || c.console.log("GSAP encountered missing dependency: " + o)
                }
                g = !1
            }
        }("undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window, "FWDAnimation")
}! function(e) {
    var t = function() {
        var i = this;
        t.prototype;
        this.main_do = null, this.init = function() {
            this.setupScreen(), e.onerror = this.showError, this.screen.style.zIndex = 1e25, setTimeout(this.addConsoleToDom, 100), setInterval(this.position, 100)
        }, this.position = function() {
            var e = FWDEVPUtils.getScrollOffsets();
            i.setX(e.x), i.setY(e.y)
        }, this.addConsoleToDom = function() {
            -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.getElementsByTagName("body")[0].appendChild(i.screen) : document.documentElement.appendChild(i.screen)
        }, this.setupScreen = function() {
            this.main_do = new FWDEVPDisplayObject("div", "absolute"), this.main_do.setOverflow("auto"), this.main_do.setWidth(300), this.main_do.setHeight(200), this.setWidth(300), this.setHeight(200), this.main_do.setBkColor("#FFFFFF"), this.addChild(this.main_do)
        }, this.showError = function(e, t, o) {
            var s = i.main_do.getInnerHTML() + "<br>JavaScript error: " + e + " on line " + o + " for " + t;
            i.main_do.setInnerHTML(s), i.main_do.screen.scrollTop = i.main_do.screen.scrollHeight
        }, this.log = function(e) {
            var t = i.main_do.getInnerHTML() + "<br>" + e;
            i.main_do.setInnerHTML(t), i.main_do.getScreen().scrollTop = 1e4
        }, this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDEVPDisplayObject("div", "absolute")
    }, t.prototype = null, e.FWDConsole = t
}(window),
function(e) {
    var c = function(e, t, o, s, i, n, l, r, a, d, u, h) {
        var _ = this;
        c.prototype;
        this.main_do = null, this.icon_do = null, this.iconS_do = null, this.bk_do = null, this.text_do = null, this.border_do = null, this.thumbHolder_do = null, this.icon_img = e, _.useHEXColorsForSkin_bl = d, _.normalButtonsColor_str = u, _.selectedButtonsColor_str = h, this.borderNColor_str = i, this.borderSColor_str = n, this.adsBackgroundPath_str = l, this.position_str = s, this.textNormalColor_str = r, this.textSelectedColor_str = a, this.text_str = o, this.iconOverPath_str = t, this.totalWidth = 215, this.totalHeight = 64, this.fontSize = 12, this.hasThumbanil_bl = !1, this.isShowed_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, _.init = function() {
            _.setOverflow("visible"), _.setupMainContainers(), _.hide(!1, !0)
        }, _.setupMainContainers = function() {
            this.main_do = new FWDEVPDisplayObject("div"), this.main_do.hasTransform3d_bl = !1, this.main_do.hasTransform2d_bl = !1, this.main_do.setBackfaceVisibility(), this.bk_do = new FWDEVPDisplayObject("div"), this.bk_do.getStyle().background = "url('" + this.adsBackgroundPath_str + "')", this.text_do = new FWDEVPDisplayObject("div"), this.text_do.hasTransform3d_bl = !1, this.text_do.hasTransform2d_bl = !1, this.text_do.setBackfaceVisibility(), this.text_do.setOverflow("visible"), this.text_do.getStyle().display = "inline", this.text_do.getStyle().fontFamily = "Arial", this.text_do.getStyle().fontSize = "22px", this.text_do.getStyle().whiteSpace = "nowrap", this.text_do.getStyle().color = this.textNormalColor_str, this.text_do.getStyle().fontSmoothing = "antialiased", this.text_do.getStyle().webkitFontSmoothing = "antialiased", this.text_do.getStyle().textRendering = "optimizeLegibility", this.thumbHolder_do = new FWDEVPDisplayObject("div"), this.thumbHolder_do.setWidth(this.totalHeight - 8), this.thumbHolder_do.setHeight(this.totalHeight - 8), this.thumbHolder_do.setX(this.totalWidth - this.thumbHolder_do.w - 4), this.thumbHolder_do.setY(4), this.border_do = new FWDEVPDisplayObject("div"), this.border_do.getStyle().border = "1px solid " + this.borderNColor_str, this.border_do.setButtonMode(!0), this.main_do.setWidth(this.totalWidth), this.main_do.setHeight(this.totalHeight), this.bk_do.setWidth(this.totalWidth), this.bk_do.setHeight(this.totalHeight), "left" == this.position_str ? (this.border_do.setX(-1), this.border_do.setWidth(this.totalWidth - 1)) : this.border_do.setWidth(this.totalWidth), this.border_do.setHeight(this.totalHeight - 2), this.setWidth(this.totalWidth), this.setHeight(this.totalHeight), this.useHEXColorsForSkin_bl ? (this.icon_do = new FWDEVPDisplayObject("div"), this.icon_do.setWidth(_.icon_img.width), this.icon_do.setHeight(_.icon_img.height), this.icon_do_canvas = FWDEVPUtils.getCanvasWithModifiedColor(this.icon_img, this.normalButtonsColor_str).canvas, this.icon_do.screen.appendChild(_.icon_do_canvas)) : (this.icon_do = new FWDEVPDisplayObject("img"), this.icon_do.setScreen(this.icon_img), this.icon_do.setWidth(this.icon_img.width), this.icon_do.setHeight(this.icon_img.height)), this.iconS_img = new Image, this.iconS_img.src = this.iconOverPath_str, this.useHEXColorsForSkin_bl ? (this.iconS_do = new FWDEVPDisplayObject("div"), this.iconS_do.setWidth(this.icon_do.w), this.iconS_do.setHeight(this.icon_do.h), this.iconS_img.onload = function() {
                _.iconS_do_canvas = FWDEVPUtils.getCanvasWithModifiedColor(_.iconS_img, _.selectedButtonsColor_str).canvas, _.iconS_do.screen.appendChild(_.iconS_do_canvas)
            }) : (this.iconS_do = new FWDEVPDisplayObject("img"), this.iconS_do.setScreen(this.iconS_img), this.iconS_do.setWidth(this.icon_do.w), this.iconS_do.setHeight(this.icon_do.h)), this.iconS_do.setAlpha(0), this.main_do.addChild(this.bk_do), this.main_do.addChild(this.text_do), this.main_do.addChild(this.thumbHolder_do), this.main_do.addChild(this.icon_do), this.main_do.addChild(this.iconS_do), this.main_do.addChild(this.border_do), FWDEVPUtils.isIEAndLessThen9 && (this.dumy_do = new FWDEVPDisplayObject("div"), this.dumy_do.setBkColor("#00FF00"), this.dumy_do.setAlpha(1e-4), this.dumy_do.setWidth(this.totalWidth), this.dumy_do.setHeight(this.totalHeight), this.dumy_do.setButtonMode(!0), this.main_do.addChild(this.dumy_do)), this.addChild(this.main_do), this.updateText(_.text_str), _.hasPointerEvent_bl ? (_.screen.addEventListener("pointerup", _.onMouseUp), _.screen.addEventListener("pointerover", _.onMouseOver), _.screen.addEventListener("pointerout", _.onMouseOut)) : _.screen.addEventListener && (_.isMobile_bl || (_.screen.addEventListener("mouseover", _.onMouseOver), _.screen.addEventListener("mouseout", _.onMouseOut), _.screen.addEventListener("mouseup", _.onMouseUp)), _.screen.addEventListener("touchend", _.onMouseUp))
        }, _.onMouseOver = function(e) {
            e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || _.setSelectedState()
        }, _.onMouseOut = function(e) {
            e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || _.setNormalState()
        }, _.onMouseUp = function(e) {
            e.preventDefault && e.preventDefault(), 2 != e.button && _.isShowed_bl && _.dispatchEvent(c.MOUSE_UP)
        }, this.updateText = function(e) {
            var t;
            this.text_do.setInnerHTML(e), setTimeout(function() {
                t = _.text_do.getWidth() + 8 + _.iconS_do.w, _.text_do.setX(parseInt(_.totalWidth - t) / 2), _.text_do.setY(parseInt((_.totalHeight - _.text_do.getHeight()) / 2) + 2), _.icon_do.setX(_.text_do.x + t - _.iconS_do.w), _.icon_do.setY(parseInt((_.totalHeight - _.iconS_do.h) / 2) + 2), _.iconS_do.setX(_.text_do.x + t - _.iconS_do.w), _.iconS_do.setY(parseInt((_.totalHeight - _.iconS_do.h) / 2) + 2)
            }, 50)
        }, this.setNormalState = function() {
            FWDAnimation.to(_.iconS_do, .5, {
                alpha: 0,
                ease: Expo.easeOut
            }), FWDAnimation.to(_.text_do.screen, .5, {
                css: {
                    color: _.textNormalColor_str
                },
                ease: Expo.easeOut
            }), FWDAnimation.to(_.border_do.screen, .5, {
                css: {
                    borderColor: _.borderNColor_str
                },
                ease: Expo.easeOut
            })
        }, this.setSelectedState = function() {
            FWDAnimation.to(_.iconS_do, .5, {
                alpha: 1,
                ease: Expo.easeOut
            }), FWDAnimation.to(_.text_do.screen, .5, {
                css: {
                    color: _.textSelectedColor_str
                },
                ease: Expo.easeOut
            }), FWDAnimation.to(_.border_do.screen, .5, {
                css: {
                    borderColor: _.borderSColor_str
                },
                ease: Expo.easeOut
            })
        }, this.show = function(e) {
            this.isShowed_bl || (this.isShowed_bl = !0, this.setVisible(!0), FWDAnimation.killTweensOf(this.main_do), e && !_.isMobile_bl ? "left" == this.position_str ? FWDAnimation.to(this.main_do, .8, {
                x: 0,
                delay: .8,
                ease: Expo.easeInOut
            }) : FWDAnimation.to(this.main_do, .8, {
                x: 1 - this.totalWidth,
                delay: .8,
                ease: Expo.easeInOut
            }) : "left" == this.position_str ? this.main_do.setX(0) : this.main_do.setX(-this.totalWidth))
        }, this.hide = function(e, t) {
            (this.isShowed_bl || t) && (this.isShowed_bl = !1, this.hasThumbanil_bl = !1, FWDAnimation.killTweensOf(this.main_do), e && !_.isMobile_bl ? "left" == this.position_str ? FWDAnimation.to(this.main_do, .8, {
                x: -this.totalWidth,
                ease: Expo.easeInOut,
                onComplete: this.hideCompleteHandler
            }) : FWDAnimation.to(this.main_do, .8, {
                x: 0,
                ease: Expo.easeInOut,
                onComplete: this.hideCompleteHandler
            }) : ("left" == this.position_str ? this.main_do.setX(-this.totalWidth) : this.main_do.setX(0), this.hideCompleteHandler()))
        }, this.hideCompleteHandler = function() {
            _.smallImage_img && (_.smallImage_img.onload = null, _.smallImage_img.src = "", FWDAnimation.killTweensOf(_.icon_do)), 1 != _.main_do.alpha && _.main_do.setAlpha(1), _.thumbHolder_do.setVisible(!1), _.setVisible(!1)
        }, this.hideWithOpacity = function() {
            FWDEVPUtils.isIEAndLessThen9 || FWDAnimation.to(this.main_do, .8, {
                alpha: .5
            })
        }, this.showWithOpacity = function() {
            FWDEVPUtils.isIEAndLessThen9 || FWDAnimation.to(this.main_do, .8, {
                alpha: 1
            })
        }, _.updateHEXColors = function(e, t) {
            FWDEVPUtils.changeCanvasHEXColor(_.icon_img, _.icon_do_canvas, e), FWDEVPUtils.changeCanvasHEXColor(_.iconS_img, _.iconS_do_canvas, t), this.text_do.getStyle().color = e, this.borderNColor_str = e, this.borderSColor_str = t, this.border_do.getStyle().border = "1px solid " + this.borderNColor_str
        }, _.init()
    };
    c.setPrototype = function() {
        c.prototype = null, c.prototype = new FWDEVPTransformDisplayObject("div")
    }, c.CLICK = "onClick", c.MOUSE_OVER = "onMouseOver", c.SHOW_TOOLTIP = "showTooltip", c.MOUSE_OUT = "onMouseOut", c.MOUSE_UP = "onMouseDown", c.prototype = null, e.FWDEVPAdsButton = c
}(window),
function(e) {
    var l = function(e, t, o, s, i) {
        var n = this;
        l.prototype;
        this.main_do = null, this.bk_do = null, this.text_do = null, this.border_do = null, this.thumbHolder_do = null, this.borderNColor_str = t, this.borderSColor_str = o, this.adsBackgroundPath_str = s, this.position_str = e, this.timeColor_str = i, this.totalWidth = 215, this.totalHeight = 64, this.fontSize = 12, this.hasThumbanil_bl = !1, this.isShowed_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, n.init = function() {
            n.setOverflow("visible"), n.setupMainContainers(), n.hide(!1, !0)
        }, n.setupMainContainers = function() {
            this.main_do = new FWDEVPDisplayObject("div"), this.main_do.hasTransform3d_bl = !1, this.main_do.hasTransform2d_bl = !1, this.main_do.setBackfaceVisibility(), this.bk_do = new FWDEVPDisplayObject("div"), this.bk_do.getStyle().background = "url('" + this.adsBackgroundPath_str + "')", this.text_do = new FWDEVPDisplayObject("div"), this.text_do.hasTransform3d_bl = !1, this.text_do.hasTransform2d_bl = !1, this.text_do.setBackfaceVisibility(), this.text_do.getStyle().fontFamily = "Arial", this.text_do.getStyle().fontSize = "12px", this.text_do.getStyle().lineHeight = "18px", this.text_do.getStyle().textAlign = "center", this.text_do.getStyle().color = this.timeColor_str, this.text_do.getStyle().fontSmoothing = "antialiased", this.text_do.getStyle().webkitFontSmoothing = "antialiased", this.text_do.getStyle().textRendering = "optimizeLegibility", this.text_do.setInnerHTML("..."), this.thumbHolder_do = new FWDEVPDisplayObject("div"), this.thumbHolder_do.setWidth(this.totalHeight - 8), this.thumbHolder_do.setHeight(this.totalHeight - 8), this.thumbHolder_do.setX(this.totalWidth - this.thumbHolder_do.w - 4), this.thumbHolder_do.setY(4), this.border_do = new FWDEVPDisplayObject("div"), this.border_do.getStyle().border = "1px solid " + this.borderNColor_str, this.main_do.setWidth(this.totalWidth), this.main_do.setHeight(this.totalHeight), this.bk_do.setWidth(this.totalWidth), this.bk_do.setHeight(this.totalHeight), "left" == this.position_str ? (this.border_do.setX(-1), this.border_do.setWidth(this.totalWidth - 1)) : this.border_do.setWidth(this.totalWidth), this.border_do.setHeight(this.totalHeight - 2), this.setWidth(this.totalWidth), this.setHeight(this.totalHeight), this.main_do.addChild(this.bk_do), this.main_do.addChild(this.text_do), this.main_do.addChild(this.thumbHolder_do), this.main_do.addChild(this.border_do), this.addChild(this.main_do)
        }, this.loadThumbnail = function(e) {
            this.hasThumbanil_bl = !0, this.thumbnail_do || (this.thumbnail_do = new FWDEVPDisplayObject("img"), this.smallImage_img = new Image), this.thumbHolder_do.setVisible(!0), this.smallImage_img.onload = this.onSmallImageLoad, this.smallImage_img.src = e
        }, this.onSmallImageLoad = function() {
            n.smallImageOriginalW = n.smallImage_img.width, n.smallImageOriginalH = n.smallImage_img.height, n.thumbnail_do.setScreen(n.smallImage_img), n.thumbHolder_do.addChild(n.thumbnail_do);
            var e = n.thumbHolder_do.w / n.smallImageOriginalW,
                t = n.thumbHolder_do.h / n.smallImageOriginalH,
                o = 0;
            t <= e ? o = e : e <= t && (o = t), n.thumbnail_do.setWidth(Math.round(n.smallImageOriginalW * o)), n.thumbnail_do.setHeight(Math.round(n.smallImageOriginalH * o)), n.thumbnail_do.setX(Math.round((n.thumbHolder_do.w - n.thumbnail_do.w) / 2)), n.thumbnail_do.setY(Math.round((n.thumbHolder_do.h - n.thumbnail_do.h) / 2)), n.thumbnail_do.setAlpha(0), FWDAnimation.to(n.thumbnail_do, .8, {
                alpha: 1
            })
        }, this.updateText = function(e) {
            this.text_do.setInnerHTML(e), this.hasThumbanil_bl ? (this.text_do.setX(16), this.text_do.setWidth(this.totalWidth - this.totalHeight - 26)) : (this.text_do.setX(8), this.text_do.setWidth(this.totalWidth - 16)), this.text_do.setY(parseInt((n.totalHeight - n.text_do.getHeight()) / 2))
        }, this.show = function(e) {
            this.isShowed_bl || (this.isShowed_bl = !0, this.setVisible(!0), FWDAnimation.killTweensOf(this.main_do), e && !n.isMobile_bl ? "left" == this.position_str ? FWDAnimation.to(this.main_do, .8, {
                x: 0,
                delay: .2,
                ease: Expo.easeInOut
            }) : FWDAnimation.to(this.main_do, .8, {
                x: 1 - this.totalWidth,
                delay: .2,
                ease: Expo.easeInOut
            }) : "left" == this.position_str ? this.main_do.setX(0) : this.main_do.setX(-this.totalWidth))
        }, this.hide = function(e, t) {
            (this.isShowed_bl || t) && (this.isShowed_bl = !1, this.hasThumbanil_bl = !1, FWDAnimation.killTweensOf(this.main_do), e && !n.isMobile_bl ? "left" == this.position_str ? FWDAnimation.to(this.main_do, .8, {
                x: -this.totalWidth,
                ease: Expo.easeInOut,
                onComplete: this.hideCompleteHandler
            }) : FWDAnimation.to(this.main_do, .8, {
                x: 0,
                ease: Expo.easeInOut,
                onComplete: this.hideCompleteHandler
            }) : ("left" == this.position_str ? this.main_do.setX(-this.totalWidth) : this.main_do.setX(0), this.hideCompleteHandler()))
        }, this.hideCompleteHandler = function() {
            n.smallImage_img && (n.smallImage_img.onload = null, n.smallImage_img.src = "", FWDAnimation.killTweensOf(n.thumbnail_do)), 1 != n.main_do.alpha && n.main_do.setAlpha(1), n.thumbHolder_do.setVisible(!1), n.setVisible(!1)
        }, this.hideWithOpacity = function() {
            FWDEVPUtils.isIEAndLessThen9 || FWDAnimation.to(this.main_do, .8, {
                alpha: .5
            })
        }, this.showWithOpacity = function() {
            FWDEVPUtils.isIEAndLessThen9 || FWDAnimation.to(this.main_do, .8, {
                alpha: 1
            })
        }, n.init()
    };
    l.setPrototype = function() {
        l.prototype = null, l.prototype = new FWDEVPTransformDisplayObject("div")
    }, l.CLICK = "onClick", l.MOUSE_OVER = "onMouseOver", l.SHOW_TOOLTIP = "showTooltip", l.MOUSE_OUT = "onMouseOut", l.MOUSE_UP = "onMouseDown", l.prototype = null, e.FWDEVPAdsStart = l
}(window),
function(window) {
    var FWDEVPAnnotation = function(props_obj) {
        var self = this,
            prototype = FWDEVPAnnotation.prototype;
        this.id = props_obj.id, this.startTime = props_obj.start, this.endTime = props_obj.end, this.htmlContent_str = props_obj.content, this.left = props_obj.left, this.top = props_obj.top, this.showCloseButton_bl = props_obj.showCloseButton_bl, this.clickSource = props_obj.clickSource, this.clickSourceTarget = props_obj.clickSourceTarget, this.closeButtonNpath = props_obj.closeButtonNpath, this.closeButtonSPath = props_obj.closeButtonSPath, this.normalStateClass = props_obj.normalStateClass, this.selectedStateClass = props_obj.selectedStateClass, this.showAnnotationsPositionTool_bl = props_obj.showAnnotationsPositionTool_bl, this.parent = props_obj.parent, this.curX = this.left, this.curY = this.top, this.handPath_str = props_obj.handPath_str, this.grabPath_str = props_obj.grabPath_str, this.dummy_do = null, this.isShowed_bl = !1, this.isClosed_bl = !1, self.init = function() {
            self.setOverflow("visible"), self.setAlpha(0), self.setVisible(!1), FWDEVPUtils.hasTransform2d && (this.getStyle().transformOrigin = "0% 0%"), this.screen.innerHTML = this.htmlContent_str, this.screen.className = this.normalStateClass, this.setBackfaceVisibility(), this.getStyle().fontSmoothing = "antialiased", this.getStyle().webkitFontSmoothing = "antialiased", this.getStyle().textRendering = "optimizeLegibility", this.dummy_do = new FWDEVPDisplayObject("div"), this.dummy_do.getStyle().width = "100%", this.dummy_do.getStyle().height = "100%", this.addChild(this.dummy_do), setTimeout(function() {
                self.w = self.getWidth(), self.h = self.getHeight()
            }, 100), self.showCloseButton_bl && !self.showAnnotationsPositionTool_bl && (FWDEVPSimpleSizeButton.setPrototype(), self.closeButton_do = new FWDEVPSimpleSizeButton(self.closeButtonNpath, self.closeButtonSPath, 21, 21), self.closeButton_do.setScale2(0), self.closeButton_do.addListener(FWDEVPSimpleSizeButton.CLICK, self.closeClickButtonCloseHandler), self.closeButton_do.getStyle().position = "absolute", self.addChild(self.closeButton_do)), self.showAnnotationsPositionTool_bl && (self.info_do = new FWDEVPDisplayObject("div"), self.info_do.getStyle().backgroundColor = "#FFFFFF", self.info_do.getStyle().boxShadow = "2px 2px 2px #888888;", this.info_do.getStyle().fontSmoothing = "antialiased", this.info_do.getStyle().webkitFontSmoothing = "antialiased", this.info_do.getStyle().textRendering = "optimizeLegibility", this.addChild(this.info_do), setTimeout(function() {
                self.info_do.screen.innerHTML = "<div style='padding:4px; maring:4px; color:#000000'> data-left=" + Math.round(self.curX * self.parent.scaleInverse) + "</div><div style='padding:4px; margin:4px; color:#000000;'> data-top=" + Math.round(self.curY * self.parent.scaleInverse) + "</div>", self.setX(Math.round(self.curX * self.parent.scale)), self.setY(Math.round(self.curY * self.parent.scale))
            }, 100), self.isMobile_bl ? self.hasPointerEvent_bl ? self.screen.addEventListener("pointerdown", self.selfOnDownHandler) : self.screen.addEventListener("touchdown", self.selfOnDownHandler) : window.addEventListener && self.screen.addEventListener("mousedown", self.selfOnDownHandler), self.getStyle().cursor = "url(" + self.handPath_str + "), default"), self.clickSource && !self.showAnnotationsPositionTool_bl && (self.dummy_do.setButtonMode(!0), self.dummy_do.screen.addEventListener("click", this.onClickHandler), self.dummy_do.screen.addEventListener("mouseover", this.onMouseOverHandler), self.dummy_do.screen.addEventListener("mouseout", this.onMouseOutHandler))
        }, this.selfOnDownHandler = function(e) {
            e.preventDefault && e.preventDefault(), self.getStyle().cursor = "url(" + self.grabPath_str + "), default", self.parent.addChild(self);
            var t = FWDEVPUtils.getViewportMouseCoordinates(e);
            self.startX = t.screenX - self.parent.getGlobalX(), self.startY = t.screenY - self.parent.getGlobalY(), self.curX = self.x, self.curY = self.y, self.isMobile_bl ? self.hasPointerEvent_bl ? (window.addEventListener("pointermove", self.selfMoveHandler), window.addEventListener("pointerup", self.selfEndHandler)) : (window.addEventListener("touchmove", self.selfMoveHandler), window.addEventListener("touchend", self.selfEndHandler)) : window.addEventListener && (window.addEventListener("mousemove", self.selfMoveHandler), window.addEventListener("mouseup", self.selfEndHandler))
        }, this.selfMoveHandler = function(e) {
            e.preventDefault && e.preventDefault();
            var t = FWDEVPUtils.getViewportMouseCoordinates(e);
            self.localX = t.screenX - self.parent.getGlobalX(), self.localY = t.screenY - self.parent.getGlobalY(), self.curX = self.x, self.curY = self.y, self.curX += self.localX - self.startX, self.curY += self.localY - self.startY, self.setX(self.curX), self.setY(self.curY), self.startX = t.screenX - self.parent.getGlobalX(), self.startY = t.screenY - self.parent.getGlobalY(), self.info_do.screen.innerHTML = "<div style='padding:4px; maring:4px; color:#000000'> data-left=" + Math.round(self.curX * self.parent.scaleInverse) + "</div><div style='padding:4px; margin:4px; color:#000000;'> data-top=" + Math.round(self.curY * self.parent.scaleInverse) + "</div>"
        }, this.selfEndHandler = function(e) {
            self.getStyle().cursor = "url(" + self.handPath_str + "), default", self.isMobile_bl ? self.hasPointerEvent_bl ? (window.removeEventListener("pointermove", self.selfMoveHandler), window.removeEventListener("pointerup", self.selfEndHandler)) : (window.removeEventListener("touchmove", self.selfMoveHandler), window.removeEventListener("touchend", self.selfEndHandler)) : window.removeEventListener && (window.removeEventListener("mousemove", self.selfMoveHandler), window.removeEventListener("mouseup", self.selfEndHandler))
        }, this.onMouseOverHandler = function(e) {
            self.setSelectedAtate()
        }, this.onMouseOutHandler = function(e) {
            self.setNormalState()
        }, this.onClickHandler = function() {
            -1 != self.clickSource.indexOf("http") ? window.open(self.clickSource, self.target) : eval(self.clickSource)
        }, this.closeClickButtonCloseHandler = function() {
            self.hide(), self.isClosed_bl = !0
        }, this.show = function() {
            this.isShowed_bl || this.isClosed_bl || (self.isShowed_bl = !0, self.setVisible(!0), FWDAnimation.killTweensOf(self), FWDAnimation.to(self, .8, {
                alpha: 1,
                ease: Quint.easeOut
            }), self.closeButton_do && FWDAnimation.to(self.closeButton_do, .8, {
                scale: 1,
                delay: .2,
                ease: Elastic.easeOut
            }))
        }, this.hide = function() {
            this.isShowed_bl && (FWDAnimation.killTweensOf(self), self.isShowed_bl = !1, self.setVisible(!1), self.setAlpha(0), self.closeButton_do && (FWDAnimation.killTweensOf(self.closeButton_do), self.closeButton_do.setScale2(0)))
        }, this.setNormalState = function() {
            self.selectedStateClass && FWDAnimation.to(self.screen, .8, {
                className: self.normalStateClass,
                ease: Quint.easeOut
            })
        }, this.setSelectedAtate = function() {
            self.selectedStateClass && FWDAnimation.to(self.screen, .8, {
                className: self.selectedStateClass,
                ease: Quint.easeOut
            })
        }, self.init()
    };
    FWDEVPAnnotation.setPrototype = function() {
        FWDEVPAnnotation.prototype = null, FWDEVPUtils.hasTransform2d ? FWDEVPAnnotation.prototype = new FWDEVPTransformDisplayObject("div") : FWDEVPAnnotation.prototype = new FWDEVPDisplayObject("div", "absolute")
    }, FWDEVPAnnotation.prototype = null, window.FWDEVPAnnotation = FWDEVPAnnotation
}(window),
function(e) {
    var t = function(i, o) {
        var n = this;
        t.prototype;
        this.source_ar = o.annotations_ar, this.ann_ar = [], this.totalAnnotations = n.source_ar.length, this.showAnnotationsPositionTool_bl = o.showAnnotationsPositionTool_bl, n.init = function() {
            n.setOverflow("visible"), n.setupAnnotations()
        }, n.setupAnnotations = function() {
            for (var e = 0; e < n.totalAnnotations; e++) {
                FWDEVPAnnotation.setPrototype();
                var t = new FWDEVPAnnotation({
                    id: e,
                    start: this.source_ar[e].start,
                    end: this.source_ar[e].end,
                    left: this.source_ar[e].left,
                    top: this.source_ar[e].top,
                    clickSource: this.source_ar[e].clickSource,
                    clickSourceTarget: this.source_ar[e].clickSourceTarget,
                    content: this.source_ar[e].content,
                    showCloseButton_bl: this.source_ar[e].showCloseButton_bl,
                    closeButtonNpath: o.annotationAddCloseNPath_str,
                    closeButtonSPath: o.annotationAddCloseSPath_str,
                    normalStateClass: this.source_ar[e].normalStateClass,
                    selectedStateClass: this.source_ar[e].selectedStateClass,
                    showAnnotationsPositionTool_bl: n.showAnnotationsPositionTool_bl,
                    parent: n,
                    handPath_str: o.handPath_str,
                    grabPath_str: o.grabPath_str
                });
                this.ann_ar[e] = t, this.addChild(t)
            }
        }, this.update = function(e) {
            if (0 != n.totalAnnotations && 0 != e)
                for (var t, o = 0; o < n.totalAnnotations; o++) t = n.ann_ar[o], e < 0 ? t.hide() : e >= t.startTime && e <= t.endTime ? (t.show(), n.position()) : t.hide()
        }, this.position = function(e) {
            var t = i.stageWidth / i.maxWidth;
            if (n.setX(Math.round((i.stageWidth - t * i.maxWidth) / 2)), n.setY(Math.round((i.tempVidStageHeight - t * i.maxHeight) / 2)), n.scale = i.stageWidth / i.maxWidth, n.scaleY = n.scale, n.scaleX = n.scale, n.scaleInverse = i.maxWidth / i.stageWidth, !n.showAnnotationsPositionTool_bl)
                for (var o = 0; o < n.totalAnnotations; o++) {
                    var s = this.ann_ar[o];
                    s.setScale2(n.scale), s.finalX = Math.floor(s.left * n.scaleX), s.finalY = Math.floor(s.top * n.scaleY), s.closeButton_do && (s.closeButton_do.setWidth(s.closeButton_do.buttonWidth * n.scaleInverse), s.closeButton_do.setHeight(s.closeButton_do.buttonHeight * n.scaleInverse), s.closeButton_do.n_do.setWidth(s.closeButton_do.buttonWidth * n.scaleInverse), s.closeButton_do.n_do.setHeight(s.closeButton_do.buttonHeight * n.scaleInverse), s.closeButton_do.s_do.setWidth(s.closeButton_do.buttonWidth * n.scaleInverse), s.closeButton_do.s_do.setHeight(s.closeButton_do.buttonHeight * n.scaleInverse), s.closeButton_do.setX(Math.floor(s.getWidth() - s.closeButton_do.w / 2)), s.closeButton_do.setY(Math.floor(-s.closeButton_do.h / 2))), s.prevFinalX != s.finalX && (e ? FWDAnimation.to(s, .8, {
                        x: s.finalX,
                        ease: Expo.easeInOut
                    }) : s.setX(s.finalX)), s.prevFinalY != s.finalY && (e ? FWDAnimation.to(s, .8, {
                        y: s.finalY,
                        ease: Expo.easeInOut
                    }) : s.setY(s.finalY)), s.prevFinalX = s.finalX, s.prevFinalY = s.finalY
                }
        }, n.init()
    };
    t.setPrototype = function() {
        t.prototype = null, t.prototype = new FWDEVPDisplayObject("div", "absolute")
    }, t.prototype = null, e.FWDEVPAnnotations = t
}(window),
function(o) {
    var i = function(e, t) {
        var l = this;
        i.prototype;
        this.audio_el = null, this.sourcePath_str = null, this.lastPercentPlayed = 0, this.volume = t, this.curDuration = 0, this.countNormalMp3Errors = 0, this.countShoutCastErrors = 0, this.maxShoutCastCountErrors = 5, this.maxNormalCountErrors = 1, this.testShoutCastId_to, this.audioVisualizerLinesColor_str = FWDEVPUtils.hexToRgb(e.data.audioVisualizerLinesColor_str), this.audioVisualizerCircleColor_str = FWDEVPUtils.hexToRgb(e.data.audioVisualizerCircleColor_str), this.preload_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !0, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.hasPlayedOnce_bl = !1, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isShoutcast_bl = !1, this.isNormalMp3_bl = !1, this.init = function() {
            l.setupAudio(), FWDEVPUtils.isLocal || l.setupSpectrum()
        }, this.resizeAndPosition = function(e, t) {
            e && (l.stageWidth = e, l.stageHeight = t), l.setWidth(l.stageWidth), l.setHeight(l.stageHeight), l.resizeSpectrumCanvas()
        }, this.setupAudio = function() {
            null == l.audio_el && (l.audio_el = document.createElement("audio"), l.screen.appendChild(l.audio_el), l.audio_el.controls = !1, l.audio_el.preload = "auto", l.audio_el.volume = l.volume, l.setPlaybackRate(e.data.defaultPlaybackRate_ar[e.data.startAtPlaybackIndex])), l.audio_el.addEventListener("error", l.errorHandler), l.audio_el.addEventListener("canplay", l.safeToBeControlled), l.audio_el.addEventListener("canplaythrough", l.safeToBeControlled), l.audio_el.addEventListener("progress", l.updateProgress), l.audio_el.addEventListener("timeupdate", l.updateAudio), l.audio_el.addEventListener("pause", l.pauseHandler), l.audio_el.addEventListener("play", l.playHandler), l.audio_el.addEventListener("ended", l.endedHandler)
        }, this.destroyAudio = function() {
            l.audio_el && (l.audio_el.removeEventListener("error", l.errorHandler), l.audio_el.removeEventListener("canplay", l.safeToBeControlled), l.audio_el.removeEventListener("canplaythrough", l.safeToBeControlled), l.audio_el.removeEventListener("progress", l.updateProgress), l.audio_el.removeEventListener("timeupdate", l.updateAudio), l.audio_el.removeEventListener("pause", l.pauseHandler), l.audio_el.removeEventListener("play", l.playHandler), l.audio_el.removeEventListener("ended", l.endedHandler), l.audio_el.removeEventListener("waiting", l.startToBuffer), l.audio_el.removeEventListener("playing", l.stopToBuffer), l.audio_el.src = "", l.audio_el.load())
        }, this.startToBuffer = function(e) {
            l.dispatchEvent(FWDEVPVideoScreen.START_TO_BUFFER)
        }, this.stopToBuffer = function() {
            l.dispatchEvent(FWDEVPVideoScreen.STOP_TO_BUFFER)
        }, this.togglePlayPause = function() {
            null != l && l.isSafeToBeControlled_bl && (l.isPlaying_bl ? l.pause() : l.play())
        }, this.errorHandler = function(e) {
            if (null != l.sourcePath_str && null != l.sourcePath_str) {
                if (l.isNormalMp3_bl && l.countNormalMp3Errors <= l.maxNormalCountErrors) return l.stop(), l.testShoutCastId_to = setTimeout(l.play, 200), void l.countNormalMp3Errors++;
                if (l.isShoutcast_bl && l.countShoutCastErrors <= l.maxShoutCastCountErrors && 0 == l.audio_el.networkState) return l.testShoutCastId_to = setTimeout(l.play, 200), void l.countShoutCastErrors++;
                var t;
                l.hasError_bl = !0, l.stop(), t = 0 == l.audio_el.networkState ? "error 'self.audio_el.networkState = 1'" : 1 == l.audio_el.networkState ? "error 'self.audio_el.networkState = 1'" : 2 == l.audio_el.networkState ? "'self.audio_el.networkState = 2'" : 3 == l.audio_el.networkState ? "source not found <font color='#FF0000'>" + l.sourcePath_str + "</font>" : e, o.console && o.console.log(l.audio_el.networkState), l.dispatchEvent(i.ERROR, {
                    text: t
                })
            }
        }, this.setSource = function(e) {
            l.sourcePath_str = e, clearTimeout(l.testShoutCastId_to), -1 != l.sourcePath_str.indexOf(";") ? (l.isShoutcast_bl = !0, l.countShoutCastErrors = 0) : l.isShoutcast_bl = !1, -1 == l.sourcePath_str.indexOf(";") ? (l.isNormalMp3_bl = !0, l.countNormalMp3Errors = 0) : l.isNormalMp3_bl = !1, l.lastPercentPlayed = 0, l.audio_el && l.stop(!0)
        }, this.play = function(e) {
            if (l.isStopped_bl) l.isPlaying_bl = !1, l.hasError_bl = !1, l.allowScrubing_bl = !1, l.isStopped_bl = !1, l.setupAudio(), l.audio_el.src = l.sourcePath_str, l.play(), l.setVisible(!0);
            else if (!l.audio_el.ended || e) try {
                l.isPlaying_bl = !0, l.hasPlayedOnce_bl = !0, l.audio_el.play(), FWDEVPUtils.isIE && l.dispatchEvent(i.PLAY)
            } catch (e) {}
        }, this.resume = function() {
            l.isStopped_bl || l.play()
        }, this.pause = function() {
            null != l && null != l.audio_el && (l.audio_el.ended || (l.audio_el.pause(), l.isPlaying_bl = !1, FWDEVPUtils.isIE && l.dispatchEvent(i.PAUSE)))
        }, this.pauseHandler = function() {
            l.allowScrubing_bl || (l.stopSpectrum(), l.dispatchEvent(i.PAUSE))
        }, this.playHandler = function() {
            l.allowScrubing_bl || (l.isStartEventDispatched_bl || (l.dispatchEvent(i.START), l.isStartEventDispatched_bl = !0), l.startSpectrum(), l.dispatchEvent(i.PLAY))
        }, this.endedHandler = function() {
            l.dispatchEvent(i.PLAY_COMPLETE)
        }, this.stop = function(e) {
            (null != l && null != l.audio_el && !l.isStopped_bl || e) && (l.isPlaying_bl = !1, l.isStopped_bl = !0, l.hasPlayedOnce_bl = !0, l.isSafeToBeControlled_bl = !1, l.isStartEventDispatched_bl = !1, l.setVisible(!1), clearTimeout(l.testShoutCastId_to), l.stopToUpdateSubtitles(), l.stopSpectrum(), l.audio_el.pause(), l.destroyAudio(), l.dispatchEvent(i.STOP), l.dispatchEvent(i.LOAD_PROGRESS, {
                percent: 0
            }), l.dispatchEvent(i.UPDATE_TIME, {
                curTime: "00:00",
                totalTime: "00:00"
            }))
        }, this.safeToBeControlled = function() {
            l.isSafeToBeControlled_bl || (l.hasHours_bl = 0 < Math.floor(l.audio_el.duration / 3600), l.isPlaying_bl = !0, l.isSafeToBeControlled_bl = !0, l.startToUpdateSubtitles(), l.dispatchEvent(i.SAFE_TO_SCRUBB), l.dispatchEvent(i.SAFE_TO_UPDATE_VOLUME))
        }, this.updateProgress = function() {
            var e = 0;
            0 < l.audio_el.buffered.length && (e = l.audio_el.buffered.end(l.audio_el.buffered.length - 1).toFixed(1) / l.audio_el.duration.toFixed(1), !isNaN(e) && e || (e = 0)), 1 == e && l.audio_el.removeEventListener("progress", l.updateProgress), l.dispatchEvent(i.LOAD_PROGRESS, {
                percent: e
            })
        }, this.updateAudio = function() {
            var e;
            l.allowScrubing_bl || (e = l.audio_el.currentTime / l.audio_el.duration, l.dispatchEvent(i.UPDATE, {
                percent: e
            }));
            var t = l.formatTime(l.audio_el.duration),
                o = l.formatTime(l.audio_el.currentTime);
            isNaN(l.audio_el.duration) ? l.dispatchEvent(i.UPDATE_TIME, {
                curTime: "00:00",
                totalTime: "00:00",
                seconds: Math.round(l.audio_el.currentTime)
            }) : l.dispatchEvent(i.UPDATE_TIME, {
                curTime: o,
                totalTime: t,
                seconds: Math.round(l.audio_el.currentTime)
            }), l.lastPercentPlayed = e, l.curDuration = o
        }, this.startToScrub = function() {
            l.allowScrubing_bl = !0
        }, this.stopToScrub = function() {
            l.allowScrubing_bl = !1
        }, this.scrubbAtTime = function(e) {
            l.audio_el.currentTime = e;
            var t = FWDEVPVideoScreen.formatTime(l.audio_el.duration),
                o = FWDEVPVideoScreen.formatTime(l.audio_el.currentTime);
            l.dispatchEvent(FWDEVPVideoScreen.UPDATE_TIME, {
                curTime: o,
                totalTime: t
            })
        }, this.scrub = function(e, t) {
            if (null != l.audio_el && l.audio_el.duration) {
                t && l.startToScrub();
                try {
                    l.audio_el.currentTime = l.audio_el.duration * e;
                    var o = l.formatTime(l.audio_el.duration),
                        s = l.formatTime(l.audio_el.currentTime);
                    l.dispatchEvent(i.UPDATE_TIME, {
                        curTime: s,
                        totalTime: o
                    })
                } catch (t) {}
            }
        }, this.replay = function() {
            l.scrub(0), l.play()
        }, this.setVolume = function(e) {
            e && (l.volume = e), l.audio_el && (l.audio_el.volume = l.volume)
        }, this.formatTime = function(e) {
            var t = Math.floor(e / 3600),
                o = e % 3600,
                s = Math.floor(o / 60),
                i = o % 60,
                n = Math.ceil(i);
            return s = 10 <= s ? s : "0" + s, n = 10 <= n ? n : "0" + n, isNaN(n) ? "00:00" : l.hasHours_bl ? t + ":" + s + ":" + n : s + ":" + n
        }, this.setPlaybackRate = function(e) {
            l.audio_el && (.25 == e && (e = "0.5"), l.audio_el.defaultPlaybackRate = e, l.audio_el.playbackRate = e)
        }, this.stopToUpdateSubtitles = function() {
            clearInterval(l.startToUpdateSubtitleId_int)
        }, this.startToUpdateSubtitles = function() {
            clearInterval(l.startToUpdateSubtitleId_int), l.startToUpdateSubtitleId_int = setInterval(l.updateSubtitleHandler, 10)
        }, this.updateSubtitleHandler = function() {
            l.dispatchEvent(i.UPDATE_SUBTITLE, {
                curTime: l.audio_el.currentTime
            })
        }, this.setupSpectrum = function() {
            var e = o.AudioContext || o.webkitAudioContext;
            !this.canvas_do && e && (3 < i.countAudioContext || (i.countAudioContext++, this.canvas_do = new FWDEVPDisplayObject("canvas"), this.addChild(this.canvas_do), this.canvas = this.canvas_do.screen, this.ctx = this.canvas.getContext("2d"), this.resizeSpectrumCanvas(), e && (this.context = new e, this.analyser = this.context.createAnalyser(), this.source = this.context.createMediaElementSource(this.audio_el), this.source.connect(this.analyser), this.analyser.connect(this.context.destination), this.fbc_array = new Uint8Array(this.analyser.frequencyBinCount), this.renderSpectrum())))
        }, this.resizeSpectrumCanvas = function() {
            l.canvas_do && (l.canvas_do.setWidth(l.stageWidth), l.canvas_do.setHeight(l.stageHeight), l.canvas.width = l.stageWidth, l.canvas.height = l.stageHeight)
        }, l.bars = 200, FWDEVPUtils.isMobile && (l.bars = 100), l.react_x = 0, l.react_y = 0, l.radius = 0, l.deltarad = 0, l.shockwave = 0, l.rot = 0, l.intensity = 0, l.isSeeking = 0, l.center_x, l.center_y, this.renderSpectrum = function() {
            if (l.canvas_do) {
                l.resizeSpectrumCanvas();
                var e = l.ctx.createLinearGradient(0, 0, 0, l.canvas.height);
                e.addColorStop(0, "rgba(0, 0, 0, 1)"), e.addColorStop(1, "rgba(0, 0, 0, 1)"), l.ctx.fillStyle = e, l.ctx.fillRect(0, 0, l.canvas.width, l.canvas.height), l.ctx.fillStyle = "rgba(255, 255, 255, " + (125e-7 * l.intensity - .4) + ")", l.ctx.fillRect(0, 0, l.canvas.width, l.canvas.height), l.rot = l.rot + 1e-7 * l.intensity, l.react_x = 0, l.react_y = 0, l.intensity = 0, l.analyser.getByteFrequencyData(l.fbc_array);
                for (var t = 0; t < l.bars; t++) {
                    rads = 2 * Math.PI / l.bars, bar_x = l.center_x, bar_y = l.center_y;
                    var o = l.stageHeight / 3;
                    isNaN(o) && (o = 10), bar_height = Math.round(l.fbc_array[t] / 256 * o), bar_width = Math.round(.02 * bar_height), bar_x_term = l.center_x + Math.cos(rads * t + l.rot) * (l.radius + bar_height), bar_y_term = l.center_y + Math.sin(rads * t + l.rot) * (l.radius + bar_height), l.ctx.save();
                    var s = l.audioVisualizerLinesColor_str;
                    l.ctx.strokeStyle = s, l.ctx.lineWidth = bar_width, l.ctx.beginPath(), l.ctx.moveTo(bar_x, bar_y), l.ctx.lineTo(bar_x_term, bar_y_term), l.ctx.stroke(), l.react_x += Math.cos(rads * t + l.rot) * (l.radius + bar_height), l.react_y += Math.sin(rads * t + l.rot) * (l.radius + bar_height), l.intensity += bar_height
                }
                l.center_x = l.canvas.width / 2 - .007 * l.react_x, l.center_y = l.canvas.height / 2 - .007 * l.react_y, radius_old = l.radius, l.radius = 25 + .002 * l.intensity, l.deltarad = l.radius - radius_old, l.ctx.fillStyle = l.audioVisualizerCircleColor_str, l.ctx.beginPath(), l.ctx.arc(l.center_x, l.center_y, l.radius + 2, 0, 2 * Math.PI, !1), l.ctx.fill(), l.shockwave += 60, l.ctx.lineWidth = 15, l.ctx.strokeStyle = l.audioVisualizerCircleColor_str, l.ctx.beginPath(), l.ctx.arc(l.center_x, l.center_y, l.shockwave + l.radius, 0, 2 * Math.PI, !1), l.ctx.stroke(), 15 < l.deltarad && (l.shockwave = 0, l.ctx.fillStyle = "rgba(255, 255, 255, 0.7)", l.ctx.fillRect(0, 0, l.canvas.width, l.canvas.height), l.rot = l.rot + .4), l.startSpectrum()
            }
        }, this.startSpectrum = function() {
            l.canvas_do && (l.stopSpectrum(), l.spectrumAnimationFrameId = o.requestAnimationFrame(l.renderSpectrum))
        }, this.stopSpectrum = function() {
            l.canvas_do && cancelAnimationFrame(l.spectrumAnimationFrameId)
        }, this.init()
    };
    i.setPrototype = function() {
        i.prototype = new FWDEVPDisplayObject("div")
    }, i.UPDATE_SUBTITLE = "updateSubtitle", i.countAudioContext = 0, i.ERROR = "error", i.UPDATE = "update", i.UPDATE = "update", i.UPDATE_TIME = "updateTime", i.SAFE_TO_SCRUBB = "safeToControll", i.SAFE_TO_UPDATE_VOLUME = "safeToUpdateVolume", i.LOAD_PROGRESS = "loadProgress", i.START = "start", i.PLAY = "play", i.PAUSE = "pause", i.STOP = "stop", i.PLAY_COMPLETE = "playComplete", o.FWDEVPAudioScreen = i
}(window),
function() {
    var c = function(e, t, o, s, i, n, l, r, a, d, u, h) {
        var _ = this;
        c.prototype;
        this.iconCSSString = a, this.icon2CSSString = d, this.normalCalssName = u, this.selectedCalssName = h, this.n1Img = e, this.s1Path_str = t, this.n2Img = o, this.s2Path_str = s, this.firstButton_do, this.n1_do, this.s1_do, this.secondButton_do, this.n2_do, this.s2_do, this.n1Img && (this.buttonWidth = _.n1Img.width, this.buttonHeight = _.n1Img.height), this.useHEXColorsForSkin_bl = n, this.normalButtonsColor_str = l, this.selectedButtonsColor_str = r, this.isSelectedState_bl = !1, this.currentState = 1, this.isDisabled_bl = !1, this.isMaximized_bl = !1, this.disptachMainEvent_bl = i, this.isDisabled_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !_.isMobile_bl || _.hasPointerEvent_bl, this.useFontAwesome_bl = Boolean(this.iconCSSString), _.init = function() {
            _.hasTransform2d_bl = !1, _.setButtonMode(!0), _.setWidth(_.buttonWidth), _.setHeight(_.buttonHeight), _.setupMainContainers(), _.secondButton_do.setVisible(!1), _.setNormalState()
        }, _.setupMainContainers = function() {
            _.useFontAwesome_bl ? (_.firstButton_do = new FWDEVPDisplayObject("div"), _.n1_do = new FWDEVPDisplayObject("div"), _.n1_do.setBac, _.n1_do.setInnerHTML(_.iconCSSString), _.firstButton_do.addChild(_.n1_do), _.secondButton_do = new FWDEVPDisplayObject("div"), _.n2_do = new FWDEVPDisplayObject("div"), _.n2_do.setInnerHTML(_.icon2CSSString), _.secondButton_do.addChild(_.n2_do), _.setFinalSize()) : (_.firstButton_do = new FWDEVPDisplayObject("div"), _.firstButton_do.setWidth(_.buttonWidth), _.firstButton_do.setHeight(_.buttonHeight), _.useHEXColorsForSkin_bl ? (_.n1_do = new FWDEVPDisplayObject("div"), _.n1_do.setWidth(_.buttonWidth), _.n1_do.setHeight(_.buttonHeight), _.n1_sdo_canvas = FWDEVPUtils.getCanvasWithModifiedColor(_.n1Img, _.normalButtonsColor_str).canvas, _.n1_do.screen.appendChild(_.n1_sdo_canvas)) : (_.n1_do = new FWDEVPDisplayObject("img"), _.n1_do.setScreen(_.n1Img)), _.firstButton_do.addChild(_.n1_do), _.allowToCreateSecondButton_bl && (_.s1_img = new Image, _.s1_img.src = _.s1Path_str, _.useHEXColorsForSkin_bl ? (_.s1_do = new FWDEVPTransformDisplayObject("div"), _.s1_do.setWidth(_.buttonWidth), _.s1_do.setHeight(_.buttonHeight), _.s1_img.onload = function() {
                _.s1_do_canvas = FWDEVPUtils.getCanvasWithModifiedColor(_.s1_img, _.selectedButtonsColor_str).canvas, _.s1_do.screen.appendChild(_.s1_do_canvas)
            }) : (_.s1_do = new FWDEVPDisplayObject("img"), _.s1_do.setScreen(_.s1_img), _.s1_do.setWidth(_.buttonWidth), _.s1_do.setHeight(_.buttonHeight)), _.s1_do.setAlpha(0), _.firstButton_do.addChild(_.s1_do)), _.secondButton_do = new FWDEVPDisplayObject("div"), _.secondButton_do.setWidth(_.buttonWidth), _.secondButton_do.setHeight(_.buttonHeight), _.useHEXColorsForSkin_bl ? (_.n2_do = new FWDEVPDisplayObject("div"), _.n2_do.setWidth(_.buttonWidth), _.n2_do.setHeight(_.buttonHeight), _.n2_sdo_canvas = FWDEVPUtils.getCanvasWithModifiedColor(_.n2Img, _.normalButtonsColor_str).canvas, _.n2_do.screen.appendChild(_.n2_sdo_canvas)) : (_.n2_do = new FWDEVPDisplayObject("img"), _.n2_do.setScreen(_.n2Img)), _.secondButton_do.addChild(_.n2_do), _.allowToCreateSecondButton_bl && (_.s2_img = new Image, _.s2_img.src = _.s2Path_str, _.useHEXColorsForSkin_bl ? (_.s2_do = new FWDEVPTransformDisplayObject("div"), _.s2_do.setWidth(_.buttonWidth), _.s2_do.setHeight(_.buttonHeight), _.s2_img.onload = function() {
                _.s2_do_canvas = FWDEVPUtils.getCanvasWithModifiedColor(_.s2_img, _.selectedButtonsColor_str).canvas, _.s2_do.screen.appendChild(_.s2_do_canvas)
            }) : (_.s2_do = new FWDEVPDisplayObject("img"), _.s2_do.setScreen(_.s2_img), _.s2_do.setWidth(_.buttonWidth), _.s2_do.setHeight(_.buttonHeight)), _.s2_do.setAlpha(0), _.secondButton_do.addChild(_.s2_do))), _.addChild(_.secondButton_do), _.addChild(_.firstButton_do), _.hasPointerEvent_bl ? (_.screen.addEventListener("pointerup", _.onMouseUp), _.screen.addEventListener("pointerover", _.onMouseOver), _.screen.addEventListener("pointerout", _.onMouseOut)) : _.screen.addEventListener && (_.isMobile_bl || (_.screen.addEventListener("mouseover", _.onMouseOver), _.screen.addEventListener("mouseout", _.onMouseOut), _.screen.addEventListener("mouseup", _.onMouseUp)), _.screen.addEventListener("toustart", _.onDown), _.screen.addEventListener("touchend", _.onMouseUp))
        }, _.onMouseOver = function(e, t) {
            _.isDisabled_bl || _.isSelectedState_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || (_.dispatchEvent(c.MOUSE_OVER, {
                e: e
            }), _.dispatchEvent(c.SHOW_TOOLTIP, {
                e: e
            }), _.setSelectedState(!0))
        }, _.onMouseOut = function(e) {
            !_.isDisabled_bl && _.isSelectedState_bl && (e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || (_.setNormalState(!0), _.dispatchEvent(c.MOUSE_OUT)))
        }, _.onDown = function(e) {
            e.preventDefault && e.preventDefault()
        }, _.onMouseUp = function(e) {
            _.isDisabled_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), _.isMobile_bl || _.onMouseOver(e, !1), _.disptachMainEvent_bl && _.dispatchEvent(c.MOUSE_UP, {
                e: e
            }))
        }, _.checkCount = 0, this.setFinalSize = function() {
            if (clearInterval(_.checkId_int), _.lastWidth = _.n1_do.screen.firstChild.offsetWidth, !(5 < _.checkCount) && (_.checkCount++, _.checkId_int = setInterval(function() {
                    _.setFinalSize()
                }, 100), _.prevWidth != _.lastWidth && 0 != _.lastWidth)) {
                var e = Math.max(_.n1_do.screen.firstChild.offsetWidth, _.n2_do.screen.firstChild.offsetWidth),
                    t = Math.max(_.n1_do.screen.offsetHeight, _.n2_do.screen.firstChild.offsetHeight);
                _.buttonWidth = e, _.buttonHeight = t, _.setWidth(e), _.setHeight(t), _.firstButton_do.setWidth(_.w), _.firstButton_do.setHeight(_.h), _.secondButton_do.setWidth(_.w), _.secondButton_do.setHeight(_.h), _.n1_do.setX(Math.round((e - _.n1_do.getWidth()) / 2)), _.n1_do.setY(Math.round((t - _.n1_do.getHeight()) / 2)), _.n2_do.setX(Math.round((e - _.n2_do.getWidth()) / 2)), _.n2_do.setY(Math.round((t - _.n2_do.getHeight()) / 2)), _.prevWidth = _.lastWidth
            }
        }, _.toggleButton = function() {
            1 == _.currentState ? (_.firstButton_do.setVisible(!1), _.secondButton_do.setVisible(!0), _.currentState = 0, _.dispatchEvent(c.FIRST_BUTTON_CLICK)) : (_.firstButton_do.setVisible(!0), _.secondButton_do.setVisible(!1), _.currentState = 1, _.dispatchEvent(c.SECOND_BUTTON_CLICK))
        }, _.setButtonState = function(e) {
            1 == e ? (_.firstButton_do.setVisible(!0), _.secondButton_do.setVisible(!1), _.currentState = 1) : (_.firstButton_do.setVisible(!1), _.secondButton_do.setVisible(!0), _.currentState = 0)
        }, this.setNormalState = function(e) {
            (!_.isMobile_bl || _.hasPointerEvent_bl || _.useFontAwesome_bl) && (_.isSelectedState_bl = !1, FWDAnimation.killTweensOf(_.s1_do), FWDAnimation.killTweensOf(_.s2_do), _.useFontAwesome_bl ? (FWDAnimation.killTweensOf(_.n1_do.screen), FWDAnimation.killTweensOf(_.n2_do.screen), e ? (FWDAnimation.to(_.n1_do.screen, .8, {
                className: _.normalCalssName,
                ease: Expo.easeOut
            }), FWDAnimation.to(_.n2_do.screen, .8, {
                className: _.normalCalssName,
                ease: Expo.easeOut
            })) : (_.n1_do.screen.className = _.normalCalssName, _.n2_do.screen.className = _.normalCalssName)) : (FWDAnimation.to(_.s1_do, .5, {
                alpha: 0,
                ease: Expo.easeOut
            }), FWDAnimation.to(_.s2_do, .5, {
                alpha: 0,
                ease: Expo.easeOut
            })))
        }, this.setSelectedState = function(e) {
            _.isSelectedState_bl = !0, FWDAnimation.killTweensOf(_.s1_do), FWDAnimation.killTweensOf(_.s2_do), _.useFontAwesome_bl ? (FWDAnimation.killTweensOf(_.n1_do.screen), FWDAnimation.killTweensOf(_.n2_do.screen), e ? (FWDAnimation.to(_.n1_do.screen, .8, {
                className: _.selectedCalssName,
                ease: Expo.easeOut
            }), FWDAnimation.to(_.n2_do.screen, .8, {
                className: _.selectedCalssName,
                ease: Expo.easeOut
            })) : (_.n1_do.screen.className = _.selectedCalssName, _.n2_do.screen.className = _.selectedCalssName)) : (FWDAnimation.to(_.s1_do, .5, {
                alpha: 1,
                delay: .1,
                ease: Expo.easeOut
            }), FWDAnimation.to(_.s2_do, .5, {
                alpha: 1,
                delay: .1,
                ease: Expo.easeOut
            }))
        }, this.disable = function() {
            _.isDisabled_bl || (_.isDisabled_bl = !0, _.setButtonMode(!1), FWDAnimation.killTweensOf(_), FWDAnimation.to(_, .6, {
                alpha: .4
            }), _.setNormalState())
        }, this.enable = function() {
            _.isDisabled_bl && (_.isDisabled_bl = !1, _.setButtonMode(!0), FWDAnimation.killTweensOf(_), FWDAnimation.to(_, .6, {
                alpha: 1
            }))
        }, this.updateHEXColors = function(e, t) {
            FWDEVPUtils.changeCanvasHEXColor(_.n1Img, _.n1_sdo_canvas, e), FWDEVPUtils.changeCanvasHEXColor(_.s1_img, _.s1_do_canvas, t), FWDEVPUtils.changeCanvasHEXColor(_.n2Img, _.n2_sdo_canvas, e), FWDEVPUtils.changeCanvasHEXColor(_.s2_img, _.s2_do_canvas, t)
        }, _.init()
    };
    c.setPrototype = function() {
        c.prototype = new FWDEVPDisplayObject("div")
    }, c.FIRST_BUTTON_CLICK = "onFirstClick", c.SECOND_BUTTON_CLICK = "secondButtonOnClick", c.MOUSE_OVER = "onMouseOver", c.MOUSE_OUT = "onMouseOut", c.MOUSE_UP = "onMouseUp", c.CLICK = "onClick", c.SHOW_TOOLTIP = "showTooltip", c.prototype = null, window.FWDEVPComplexButton = c
}(window),
function() {
    var e = function(e, t) {
        var l = this;
        this.parent = e, this.url = "http://www.webdesign-flash.ro", this.menu_do = null, this.normalMenu_do = null, this.selectedMenu_do = null, this.over_do = null, this.isDisabled_bl = !1, this.showMenu_bl = t, this.init = function() {
            l.updateParent(l.parent)
        }, this.updateParent = function(e) {
            l.parent && (l.parent.screen.addEventListener ? l.parent.screen.removeEventListener("contextmenu", this.contextMenuHandler) : l.parent.screen.detachEvent("oncontextmenu", this.contextMenuHandler)), l.parent = e, l.parent.screen.addEventListener ? l.parent.screen.addEventListener("contextmenu", this.contextMenuHandler) : l.parent.screen.attachEvent("oncontextmenu", this.contextMenuHandler)
        }, this.contextMenuHandler = function(e) {
            if (!l.isDisabled_bl) {
                if ("disabled" == t) return !!e.preventDefault && void e.preventDefault();
                if ("default" != t && -1 != l.url.indexOf("sh.r")) {
                    if (l.setupMenus(), l.parent.addChild(l.menu_do), l.menu_do.setVisible(!0), l.positionButtons(e), window.addEventListener ? window.addEventListener("mousedown", l.contextMenuWindowOnMouseDownHandler) : document.documentElement.attachEvent("onclick", l.contextMenuWindowOnMouseDownHandler), !e.preventDefault) return !1;
                    e.preventDefault()
                }
            }
        }, this.contextMenuWindowOnMouseDownHandler = function(e) {
            var t = FWDEVPUtils.getViewportMouseCoordinates(e),
                o = t.screenX,
                s = t.screenY;
            FWDEVPUtils.hitTest(l.menu_do.screen, o, s) || (window.removeEventListener ? window.removeEventListener("mousedown", l.contextMenuWindowOnMouseDownHandler) : document.documentElement.detachEvent("onclick", l.contextMenuWindowOnMouseDownHandler), l.menu_do.setX(-500))
        }, this.setupMenus = function() {
            this.menu_do || (this.menu_do = new FWDEVPDisplayObject("div"), l.menu_do.setX(-500), this.menu_do.getStyle().width = "100%", this.normalMenu_do = new FWDEVPDisplayObject("div"), this.normalMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.normalMenu_do.getStyle().padding = "4px", this.normalMenu_do.getStyle().fontSize = "12px", this.normalMenu_do.getStyle().color = "#000000", this.normalMenu_do.setInnerHTML("&#0169; made by FWD"), this.normalMenu_do.setBkColor("#FFFFFF"), this.selectedMenu_do = new FWDEVPDisplayObject("div"), this.selectedMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.selectedMenu_do.getStyle().padding = "4px", this.selectedMenu_do.getStyle().fontSize = "12px", this.selectedMenu_do.getStyle().color = "#FFFFFF", this.selectedMenu_do.setInnerHTML("&#0169; made by FWD"), this.selectedMenu_do.setBkColor("#000000"), this.selectedMenu_do.setAlpha(0), this.over_do = new FWDEVPDisplayObject("div"), this.over_do.setBkColor("#FF0000"), this.over_do.setAlpha(0), this.menu_do.addChild(this.normalMenu_do), this.menu_do.addChild(this.selectedMenu_do), this.menu_do.addChild(this.over_do), this.parent.addChild(this.menu_do), this.over_do.setWidth(this.selectedMenu_do.getWidth()), this.menu_do.setWidth(this.selectedMenu_do.getWidth()), this.over_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setVisible(!1), this.menu_do.setButtonMode(!0), this.menu_do.screen.onmouseover = this.mouseOverHandler, this.menu_do.screen.onmouseout = this.mouseOutHandler, this.menu_do.screen.onclick = this.onClickHandler)
        }, this.mouseOverHandler = function() {
            -1 == l.url.indexOf("w.we") && (l.menu_do.visible = !1), FWDAnimation.to(l.normalMenu_do, .8, {
                alpha: 0,
                ease: Expo.easeOut
            }), FWDAnimation.to(l.selectedMenu_do, .8, {
                alpha: 1,
                ease: Expo.easeOut
            })
        }, this.mouseOutHandler = function() {
            FWDAnimation.to(l.normalMenu_do, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }), FWDAnimation.to(l.selectedMenu_do, .8, {
                alpha: 0,
                ease: Expo.easeOut
            })
        }, this.onClickHandler = function() {
            window.open(l.url, "_blank")
        }, this.positionButtons = function(e) {
            var t = FWDEVPUtils.getViewportMouseCoordinates(e),
                o = t.screenX - l.parent.getGlobalX(),
                s = t.screenY - l.parent.getGlobalY(),
                i = o + 2,
                n = s + 2;
            i > l.parent.getWidth() - l.menu_do.getWidth() - 2 && (i = o - l.menu_do.getWidth() - 2), n > l.parent.getHeight() - l.menu_do.getHeight() - 2 && (n = s - l.menu_do.getHeight() - 2), l.menu_do.setX(i), l.menu_do.setY(n)
        }, this.disable = function() {
            l.isDisabled_bl = !0
        }, this.enable = function() {
            l.isDisabled_bl = !1
        }, this.init()
    };
    e.prototype = null, window.FWDEVPContextMenu = e
}(window),
function() {
    var l = function(s, n) {
        var a = this;
        l.prototype;
        this.bkLeft_img = s.bkLeft_img, this.bkRight_img = s.bkRight_img, this.playN_img = s.playN_img, this.playS_img = s.playS_img, this.pauseN_img = s.pauseN_img, this.pauseS_img = s.pauseS_img, this.mainScrubberBkLeft_img = s.mainScrubberBkLeft_img, this.mainScrubberBkRight_img = s.mainScrubberBkRight_img, this.mainScrubberDragLeft_img = s.mainScrubberDragLeft_img, this.mainScrubberDragLeftSource = s.mainScrubberDragLeft_img.src, this.mainScrubberLine_img = s.mainScrubberLine_img, this.volumeScrubberBkLeft_img = s.volumeScrubberBkLeft_img, this.volumeScrubberBkRight_img = s.volumeScrubberBkRight_img, this.volumeScrubberDragLeft_img = s.volumeScrubberDragLeft_img, this.volumeScrubberLine_img = s.volumeScrubberLine_img, this.volumeN_img = s.volumeN_img, this.volumeS_img = s.volumeS_img, this.volumeD_img = s.volumeD_img, this.progressLeft_img = s.progressLeft_img, this.ytbQualityN_img = s.ytbQualityN_img, this.ytbQualityS_img = s.ytbQualityS_img, this.ytbQualityD_img = s.ytbQualityD_img, this.shareN_img = s.shareN_img, this.subtitleN_img = s.subtitleNPath_img, this.facebookS_img = s.facebookS_img, this.fullScreenN_img = s.fullScreenN_img, this.fullScreenS_img = s.fullScreenS_img, this.normalScreenN_img = s.normalScreenN_img, this.normalScreenS_img = s.normalScreenS_img, this.embedN_img = s.embedN_img, this.showSubtitileByDefault_bl = s.showSubtitileByDefault_bl, this.buttons_ar = [], this.ytbQuality_ar = null, this.ytbButtons_ar = null, this.pointer_do, this.ytbDisabledButton_do = null, this.disable_do = null, this.mainHolder_do = null, this.ytbButtonsHolder_do = null, this.playPauseButton_do = null, this.mainScrubber_do = null, this.mainScrubberBkLeft_do = null, this.mainScrubberBkMiddle_do = null, this.mainScrubberBkRight_do = null, this.mainScrubberDrag_do = null, this.mainScrubberDragLeft_do = null, this.mainScrubberDragMiddle_do = null, this.mainScrubberBarLine_do = null, this.mainProgress_do = null, this.progressLeft_do = null, this.progressMiddle_do = null, this.time_do = null, this.volumeButton_do = null, this.volumeScrubber_do = null, this.volumeScrubberBkLeft_do = null, this.volumeScrubberBkMiddle_do = null, this.volumeScrubberBkRight_do = null, this.volumeScrubberDrag_do = null, this.volumeScrubberDragLeft_do = null, this.volumeScrubberDragMiddle_do = null, this.volumeScrubberBarLine_do = null, this.ytbQualityButton_do = null, this.shareButton_do = null, this.fullScreenButton_do = null, this.ytbQualityArrow_do = null, this.bk_do = null, this.isMainScrubberOnTop_bl = !0, this.bkMiddlePath_str = s.bkMiddlePath_str, this.mainScrubberBkMiddlePath_str = s.mainScrubberBkMiddlePath_str, this.volumeScrubberBkMiddlePath_str = s.volumeScrubberBkMiddlePath_str, this.mainScrubberDragMiddlePath_str = s.mainScrubberDragMiddlePath_str, this.mainScrubberDragMiddleAddPath_str = s.mainScrubberDragMiddleAddPath_str, this.volumeScrubberDragMiddlePath_str = s.volumeScrubberDragMiddlePath_str, this.timeColor_str = s.timeColor_str, this.progressMiddlePath_str = s.progressMiddlePath_str, this.youtubeQualityButtonNormalColor_str = s.youtubeQualityButtonNormalColor_str, this.youtubeQualityButtonSelectedColor_str = s.youtubeQualityButtonSelectedColor_str, this.youtubeQualityArrowPath_str = s.youtubeQualityArrowPath_str, this.controllerBkPath_str = s.controllerBkPath_str, this.ytbQualityButtonPointerPath_str = s.ytbQualityButtonPointerPath_str, this.subtitleSPath_str = s.subtitleSPath_str, this.mainScrubberOffestTop = s.mainScrubberOffestTop, this.totalYtbButtons = 0, this.stageWidth = 0, this.stageHeight = s.controllerHeight, this.scrubbersBkLeftAndRightWidth = this.mainScrubberBkLeft_img.width, this.mainScrubberWidth = 0, this.mainScrubberMinWidth = 100, this.volumeScrubberWidth = s.volumeScrubberWidth, this.scrubbersHeight = this.mainScrubberBkLeft_img.height, this.mainScrubberDragLeftWidth = a.mainScrubberDragLeft_img.width, this.scrubbersOffsetWidth = s.scrubbersOffsetWidth, this.volumeScrubberOffsetRightWidth = s.volumeScrubberOffsetRightWidth, this.volume = s.volume, this.lastVolume = a.volume, this.startSpaceBetweenButtons = s.startSpaceBetweenButtons, this.spaceBetweenButtons = s.spaceBetweenButtons, this.percentPlayed = 0, this.percentLoaded = 0, this.lastTimeLength = 0, this.prevYtbQualityButtonsLength = 0, this.pointerWidth = 8, this.pointerHeight = 5, this.timeOffsetLeftWidth = s.timeOffsetLeftWidth, this.timeOffsetRightWidth = s.timeOffsetRightWidth, a.useHEXColorsForSkin_bl = s.useHEXColorsForSkin_bl, a.normalButtonsColor_str = s.normalButtonsColor_str, a.selectedButtonsColor_str = s.selectedButtonsColor_str, this.showFullScreenButton_bl = s.showFullScreenButton_bl, this.showYoutubeQualityButton_bl = s.showYoutubeQualityButton_bl, this.showSubtitleButton_bl = s.showSubtitleButton_bl, this.showShareButton_bl = s.showShareButton_bl, this.showVolumeScrubber_bl = s.showVolumeScrubber_bl, this.allowToChangeVolume_bl = !0, this.showTime_bl = s.showTime_bl, this.showVolumeButton_bl = s.showVolumeButton_bl, this.showRewindButton_bl = s.showRewindButton_bl, this.showControllerWhenVideoIsStopped_bl = s.showControllerWhenVideoIsStopped_bl, this.showDownloadVideoButton_bl = s.showDownloadVideoButton_bl, this.showEmbedButton_bl = s.showEmbedButton_bl, this.showPlaybackRateButton_bl = s.showPlaybackRateButton_bl, this.isMainScrubberScrubbing_bl = !1, this.isMainScrubberDisabled_bl = !1, this.isVolumeScrubberDisabled_bl = !1, this.isMainScrubberLineVisible_bl = !1, this.isVolumeScrubberLineVisible_bl = !1, this.useFontAwesomeIcons_bl = s.useFontAwesomeIcons_bl, this.hasYtbButton_bl = !1, this.isMute_bl = !1, this.isShowed_bl = !0, this.areYtbQualityButtonsShowed_bl = !0, this.repeatBackground_bl = s.repeatBackground_bl, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, a.init = function() {
            if (a.setOverflow("visible"), a.mainHolder_do = new FWDEVPDisplayObject("div"), a.repeatBackground_bl) a.mainHolder_do.getStyle().background = "url('" + a.controllerBkPath_str + "')";
            else {
                a.bk_do = new FWDEVPDisplayObject("img");
                var e = new Image;
                e.src = a.controllerBkPath_str, a.bk_do.setScreen(e), a.bk_do.setBkColor("#000000"), a.mainHolder_do.addChild(a.bk_do)
            }
            a.mainHolder_do.getStyle().backgroundColor = "#000000", a.mainHolder_do.setOverflow("visible"), a.addChild(a.mainHolder_do), a.showYoutubeQualityButton_bl && (a.ytbQuality_ar = ["hd2160", "hd2160", "hd1440", "highres", "hd1080", "hd720", "large", "medium", "small", "tiny"], a.ytbButtons_ar = [], a.totalYtbButtons = a.ytbQuality_ar.length, a.setupYtbButtons()), a.setupPlayPauseButton(), a.showRewindButton_bl && a.setupRewindButton(), a.setupMainScrubber(), a.showTime_bl && a.setupTime(), a.showVolumeButton_bl && a.setupVolumeButton(), a.showVolumeScrubber_bl && a.setupVolumeScrubber(), a.showPlaybackRateButton_bl && a.setupPlaybackRateButton(), a.showYoutubeQualityButton_bl && a.setupYoutubeQualityButton(), a.showSubtitleButton_bl && a.setupSubtitleButton(), a.showShareButton_bl && a.setupShareButton(), a.showEmbedButton_bl && a.setupEmbedButton(), a.showDownloadVideoButton_bl && a.setupDownloadButton(), a.showFullScreenButton_bl && a.setupFullscreenButton(), a.isMobile_bl || a.setupDisable(), a.hide(!1, !0), a.showControllerWhenVideoIsStopped_bl && a.show(!0)
        }, a.resizeAndPosition = function() {
            a.stageWidth = n.stageWidth, a.positionButtons(), a.setY(n.stageHeight - a.stageHeight), a.hideQualityButtons(!1), a.ytbButtonsHolder_do && (FWDAnimation.killTweensOf(a.ytbButtonsHolder_do), a.ytbButtonsHolder_do.setY(n.stageHeight)), a.subtitlesButtonsHolder_do && (FWDAnimation.killTweensOf(a.subtitlesButtonsHolder_do), a.subtitlesButtonsHolder_do.setY(n.stageHeight)), a.playbackRatesButtonsHolder_do && (FWDAnimation.killTweensOf(a.playbackRatesButtonsHolder_do), a.playbackRatesButtonsHolder_do.setY(n.stageHeight)), a.positionAdsLines()
        }, a.positionButtons = function() {
            if (a.stageWidth) {
                var e, t, o = a.showTime_bl,
                    s = a.volumeScrubber_do;
                a.mainHolder_do.setWidth(a.stageWidth), a.mainHolder_do.setHeight(a.stageHeight), a.setWidth(a.stageWidth), a.setHeight(a.stageHeight);
                for (var i = [], n = 0; n < a.buttons_ar.length; n++) i[n] = a.buttons_ar[n];
                a.mainScrubberWidth = a.stageWidth - 2 * a.startSpaceBetweenButtons;
                for (n = 0; n < i.length; n++)(e = i[n]) != a.mainScrubber_do && (a.mainScrubberWidth -= e.w + a.spaceBetweenButtons);
                var l = 3;
                for (a.hasYtbButton_bl && (l = 4); a.mainScrubberWidth < a.mainScrubberMinWidth && i.length > l;) {
                    a.mainScrubberWidth = a.stageWidth - 2 * a.startSpaceBetweenButtons, a.volumeScrubber_do && -1 != FWDEVPUtils.indexOfArray(i, a.volumeScrubber_do) ? (i.splice(FWDEVPUtils.indexOfArray(i, a.volumeScrubber_do), 1), a.volumeScrubber_do.setX(-1e3)) : a.time_do && -1 != FWDEVPUtils.indexOfArray(i, a.time_do) ? (i.splice(FWDEVPUtils.indexOfArray(i, a.time_do), 1), a.time_do.setX(-1e3), o = !1) : a.volumeButton_do && -1 != FWDEVPUtils.indexOfArray(i, a.volumeButton_do) ? (i.splice(FWDEVPUtils.indexOfArray(i, a.volumeButton_do), 1), a.volumeButton_do.setX(-1e3)) : a.volumeScrubber_do && -1 != FWDEVPUtils.indexOfArray(i, a.volumeScrubber_do) ? (i.splice(FWDEVPUtils.indexOfArray(i, a.volumeScrubber_do), 1), a.volumeScrubber_do.setX(-1e3), s = !1) : a.subtitleButton_do && -1 != FWDEVPUtils.indexOfArray(i, a.subtitleButton_do) ? (i.splice(FWDEVPUtils.indexOfArray(i, a.subtitleButton_do), 1), a.subtitleButton_do.setX(-1e3)) : a.shareButton_do && -1 != FWDEVPUtils.indexOfArray(i, a.shareButton_do) ? (i.splice(FWDEVPUtils.indexOfArray(i, a.shareButton_do), 1), a.shareButton_do.setX(-1e3)) : a.embedButton_do && -1 != FWDEVPUtils.indexOfArray(i, a.embedButton_do) && (i.splice(FWDEVPUtils.indexOfArray(i, a.embedButton_do), 1), a.embedButton_do.setX(-1e3));
                    for (n = 0; n < i.length; n++)(e = i[n]) != a.mainScrubber_do && (a.mainScrubberWidth -= e.w + a.spaceBetweenButtons)
                }
                o && (a.mainScrubberWidth -= 2 * a.timeOffsetLeftWidth), s && (a.mainScrubberWidth -= a.volumeScrubberOffsetRightWidth);
                for (n = 0; n < i.length; n++)
                    if (e = i[n], 0 == n) e.setX(a.startSpaceBetweenButtons), e.setY(parseInt((a.stageHeight - e.h) / 2));
                    else if (e == a.mainScrubber_do) t = i[n - 1], FWDAnimation.killTweensOf(a.mainScrubber_do), a.mainScrubber_do.setX(t.x + t.w + a.spaceBetweenButtons), a.mainScrubber_do.setY(parseInt((a.stageHeight - a.scrubbersHeight) / 2)), a.mainScrubber_do.setWidth(a.mainScrubberWidth), a.mainScrubberBkMiddle_do.setWidth(a.mainScrubberWidth - 2 * a.scrubbersBkLeftAndRightWidth), a.mainScrubberBkRight_do.setX(a.mainScrubberWidth - a.scrubbersBkLeftAndRightWidth), a.mainScrubberDragMiddle_do.setWidth(a.mainScrubberWidth - a.scrubbersBkLeftAndRightWidth - a.scrubbersOffsetWidth);
                else if (e == a.time_do) {
                    t = i[n - 1], e.setX(t.x + t.w + a.spaceBetweenButtons + a.timeOffsetLeftWidth);
                    var r = 0;
                    a.isLive && (r = 2), e.setY(parseInt((a.stageHeight - e.h) / 2) + r)
                } else e == a.volumeButton_do && o ? (t = i[n - 1], e.setX(t.x + t.w + a.spaceBetweenButtons + a.timeOffsetRightWidth)) : (t = i[n - 1], s && t == a.volumeScrubber_do ? e.setX(t.x + t.w + a.spaceBetweenButtons + a.volumeScrubberOffsetRightWidth) : e.setX(t.x + t.w + a.spaceBetweenButtons)), e.setY(parseInt((a.stageHeight - e.h) / 2));
                a.disable_do && (a.disable_do.setWidth(a.stageWidth), a.disable_do.setHeight(a.stageHeight)), a.bk_do && (a.bk_do.setWidth(a.stageWidth), a.bk_do.setHeight(a.stageHeight)), a.isShowed_bl ? a.isMainScrubberOnTop_bl = !1 : (a.isMainScrubberOnTop_bl = !0, a.positionScrollBarOnTopOfTheController()), a.progressMiddle_do && a.progressMiddle_do.setWidth(a.mainScrubberWidth - a.scrubbersBkLeftAndRightWidth - a.scrubbersOffsetWidth), a.updateMainScrubber(a.percentPlayed), a.updatePreloaderBar(a.percentLoaded)
            }
        }, this.positionScrollBarOnTopOfTheController = function() {
            a.mainScrubberWidth = a.stageWidth, a.updatePreloaderBar(a.percentLoaded), a.mainScrubber_do.setWidth(a.mainScrubberWidth), a.mainScrubberBkMiddle_do.setWidth(a.mainScrubberWidth - 2 * a.scrubbersBkLeftAndRightWidth), a.mainScrubberBkRight_do.setX(a.mainScrubberWidth - a.scrubbersBkLeftAndRightWidth), a.mainScrubberDragMiddle_do.setWidth(a.mainScrubberWidth - a.scrubbersBkLeftAndRightWidth - a.scrubbersOffsetWidth), FWDAnimation.killTweensOf(a.mainScrubber_do), a.mainScrubber_do.setX(0), a.isMainScrubberOnTop_bl || a.isShowed_bl ? a.mainScrubber_do.setY(-a.mainScrubberOffestTop) : a.mainScrubber_do.y == -a.mainScrubberOffestTop || a.isLive || (a.mainScrubber_do.setY(a.mainScrubber_do.h), FWDAnimation.to(a.mainScrubber_do, .8, {
                y: -a.mainScrubberOffestTop,
                ease: Expo.easeOut
            })), a.isMainScrubberOnTop_bl = !0
        }, this.setupDisable = function() {
            a.disable_do = new FWDEVPDisplayObject("div"), FWDEVPUtils.isIE && (a.disable_do.setBkColor("#FFFFFF"), a.disable_do.setAlpha(0))
        }, this.playbackRatesSource_ar = s.defaultPlaybackRate_ar, this.playbackRateButtons_ar = [], this.totalPlaybackRateButtons = 6, this.arePlaybackRateButtonsShowed_bl = !0, this.showPlaybackRateButton_bl || (this.arePlaybackRateButtonsShowed_bl = !1), this.setupPlaybackRateButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), a.playbackRateButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fas fa-clock'></i>", void 0, "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), a.playbackRateButton_do = new FWDEVPSimpleButton(s.playbackRateNPath_img, s.playbackRateSPath_str, void 0, !0, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.buttons_ar.push(a.playbackRateButton_do), a.playbackRateButton_do.setY(parseInt((a.stageHeight - a.playbackRateButton_do.h) / 2)), a.playbackRateButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, a.playbackRateButtonMouseUpHandler), a.mainHolder_do.addChild(a.playbackRateButton_do), a.disablePlaybackRateButton(), a.setupPlaybackRateButtons()
        }, this.playbackRateButtonMouseUpHandler = function() {
            a.arePlaybackRateButtonsShowed_bl ? a.hidePlaybackRateButtons(!0) : a.showPlaybackRateButtons(!0)
        }, this.disablePlaybackRateButton = function() {
            a.playbackRateButton_do && a.playbackRateButton_do.disable()
        }, this.enablePlaybackRateButton = function() {
            a.playbackRateButton_do && a.playbackRateButton_do.enable()
        }, this.removePlaybackRateButton = function() {
            a.playbackRateButton_do && -1 != FWDEVPUtils.indexOfArray(a.buttons_ar, a.playbackRateButton_do) && (a.buttons_ar.splice(FWDEVPUtils.indexOfArray(a.buttons_ar, a.playbackRateButton_do), 1), a.playbackRateButton_do.setX(-300), a.positionButtons())
        }, this.addPlaybackRateButton = function() {
            a.playbackRateButton_do && -1 == FWDEVPUtils.indexOfArray(a.buttons_ar, a.playbackRateButton_do) && (a.ytbQualityButton_do && -1 != FWDEVPUtils.indexOfArray(a.buttons_ar, a.ytbQualityButton_do) ? a.buttons_ar.splice(FWDEVPUtils.indexOfArray(a.buttons_ar, a.ytbQualityButton_do), 0, a.playbackRateButton_do) : a.subtitleButton_do && -1 != FWDEVPUtils.indexOfArray(a.buttons_ar, a.subtitleButton_do) ? a.buttons_ar.splice(FWDEVPUtils.indexOfArray(a.buttons_ar, a.subtitleButton_do), 0, a.playbackRateButton_do) : a.shareButton_do && -1 != FWDEVPUtils.indexOfArray(a.buttons_ar, a.shareButton_do) ? a.buttons_ar.splice(FWDEVPUtils.indexOfArray(a.buttons_ar, a.shareButton_do), 0, a.playbackRateButton_do) : a.fullScreenButton_do && -1 != FWDEVPUtils.indexOfArray(a.buttons_ar, a.fullScreenButton_do) ? a.buttons_ar.splice(FWDEVPUtils.indexOfArray(a.buttons_ar, a.fullScreenButton_do), 0, a.playbackRateButton_do) : a.buttons_ar.splice(a.buttons_ar.length, 0, a.playbackRateButton_do), a.positionButtons())
        }, this.updatePlaybackRateButtons = function(e, t) {
            a.playbackRateButton_do && (a.positionAndResizePlaybackRateButtons(e), setTimeout(function() {
                a.disablePlaybackRateButtons(t)
            }, 65), a.prevplaybackRateIndex = t)
        }, this.setupPlaybackRateButtons = function() {
            var e, t;
            (a.playbackRatesButtonsHolder_do = new FWDEVPDisplayObject("div"), a.playbackRatesButtonsHolder_do.setOverflow("visible"), a.repeatBackground_bl) ? a.playbackRatesButtonsHolder_do.getStyle().background = "url('" + a.controllerBkPath_str + "')": (a.playbackRatesButtonsBackground_do = new FWDEVPDisplayObject("img"), (e = new Image).src = a.controllerBkPath_str, a.playbackRatesButtonsBackground_do.setScreen(e), a.playbackRatesButtonsHolder_do.addChild(a.playbackRatesButtonsBackground_do));
            a.playbackRatesButtonsHolder_do.setX(300), a.playbackRatesButtonsHolder_do.setY(-300), n.main_do.addChild(a.playbackRatesButtonsHolder_do, 0), (e = new Image).src = a.ytbQualityButtonPointerPath_str, a.playbackRatesPonter_do = new FWDEVPDisplayObject("img"), a.playbackRatesPonter_do.setScreen(e), a.playbackRatesPonter_do.setWidth(a.pointerWidth), a.playbackRatesPonter_do.setHeight(a.pointerHeight), a.playbackRatesButtonsHolder_do.addChild(a.playbackRatesPonter_do), (e = new Image).src = a.youtubeQualityArrowPath_str, a.playbackRateQualityArrow_do = new FWDEVPDisplayObject("img"), a.playbackRateQualityArrow_do.setScreen(e), a.playbackRateQualityArrow_do.setX(7), a.playbackRateQualityArrow_do.setWidth(5), a.playbackRateQualityArrow_do.setHeight(7), a.playbackRatesButtonsHolder_do.addChild(a.playbackRateQualityArrow_do);
            for (var o = 0; o < a.totalPlaybackRateButtons; o++) FWDEVPYTBQButton.setPrototype(), (t = new FWDEVPYTBQButton("no source", a.youtubeQualityButtonNormalColor_str, a.youtubeQualityButtonSelectedColor_str, void 0, o)).addListener(FWDEVPYTBQButton.MOUSE_OVER, a.plbkQualityOver), t.addListener(FWDEVPYTBQButton.MOUSE_OUT, a.plbkQualityOut), t.addListener(FWDEVPYTBQButton.CLICK, a.plbkQualityClick), a.playbackRateButtons_ar[o] = t, a.playbackRatesButtonsHolder_do.addChild(t);
            a.positionAndResizePlaybackRateButtons(a.playbackRatesSource_ar), a.hidePlaybackRateButtons(!1)
        }, this.plbkQualityOver = function(e) {
            a.setPlaybackRateArrowPosition(e.target)
        }, this.plbkQualityOut = function(e) {
            a.setPlaybackRateArrowPosition(void 0)
        }, this.plbkQualityClick = function(e) {
            a.startAtPlaybackRate = e.id, a.disablePlaybackRateButtons(a.startAtPlaybackRate), a.hidePlaybackRateButtons(!0), a.dispatchEvent(l.CHANGE_PLAYBACK_RATES, {
                rate: a.playbackRatesSource_ar[e.id]
            })
        }, this.positionAndResizePlaybackRateButtons = function(e) {
            if (e) {
                var t = e.length;
                if (a.prevplaybackRatesQualityButtonsLength != t) {
                    var o;
                    this.prevplaybackRatesQualityButtonsLength = t;
                    for (var s = 5, i = 0, n = 0, l = 0; l < t; l++) o = a.playbackRateButtons_ar[l], 1 == e[l] ? o.updateText("normal") : o.updateText(e[l]), o.setFinalSize();
                    setTimeout(function() {
                        for (var e = 0; e < t; e++) o = a.playbackRateButtons_ar[e], e < t ? (0 != o.x && o.setX(0), o.w > i && (i = o.w), o.setY(s), s += o.h) : -3e3 != o.x && o.setX(-3e3);
                        for (e = 0; e < t; e++)(o = a.playbackRateButtons_ar[e]).dumy_do.w < i && (o.setWidth(i), o.dumy_do.setWidth(i));
                        n = s + 5, a.playbackRatesPonter_do.setX(parseInt((i - a.playbackRatesPonter_do.w) / 2)), a.playbackRatesPonter_do.setY(n), a.playbackRatesButtonsBackground_do && (a.playbackRatesButtonsBackground_do.setWidth(i), a.playbackRatesButtonsBackground_do.setHeight(n)), a.playbackRatesButtonsHolder_do.setWidth(i), a.playbackRatesButtonsHolder_do.setHeight(n)
                    }, 60)
                }
            }
        }, this.disablePlaybackRateButtons = function(e) {
            for (var t = 0; t < a.totalPlaybackRateButtons; t++) btn = a.playbackRateButtons_ar[t], t == e ? (FWDAnimation.killTweensOf(a.playbackRateQualityArrow_do), a.playbackRateQualityArrow_do.setY(btn.y + parseInt((btn.h - a.playbackRateQualityArrow_do.h) / 2) - 1), btn.disable(), a.playbackRateDisabledButton_do = btn) : btn.enable()
        }, this.setPlaybackRateArrowPosition = function(e) {
            var t = 0;
            t = e ? e.y + parseInt((e.h - a.playbackRateQualityArrow_do.h) / 2 - 1) : a.playbackRateDisabledButton_do.y + parseInt((a.playbackRateDisabledButton_do.h - a.playbackRateQualityArrow_do.h) / 2 - 1), FWDAnimation.killTweensOf(a.playbackRateQualityArrow_do), FWDAnimation.to(a.playbackRateQualityArrow_do, .6, {
                y: t,
                delay: .1,
                ease: Expo.easeInOut
            })
        }, this.showPlaybackRateButtons = function(e) {
            if (!a.arePlaybackRateButtonsShowed_bl) {
                a.hideQualityButtons(), a.arePlaybackRateButtonsShowed_bl = !0;
                var t = parseInt(a.playbackRateButton_do.x + parseInt(a.playbackRateButton_do.w - a.playbackRatesButtonsHolder_do.w) / 2),
                    o = parseInt(n.stageHeight - a.stageHeight - a.playbackRatesButtonsHolder_do.h - 6);
                a.hasPointerEvent_bl ? window.addEventListener("pointerdown", a.hideplaybackRatesButtonsHandler) : (a.isMobile_bl || window.addEventListener("mousedown", a.hideplaybackRatesButtonsHandler), window.addEventListener("touchstart", a.hideplaybackRatesButtonsHandler)), a.playbackRatesButtonsHolder_do.setX(t), e ? FWDAnimation.to(a.playbackRatesButtonsHolder_do, .6, {
                    y: o,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(a.playbackRatesButtonsHolder_do), a.playbackRatesButtonsHolder_do.setY(o))
            }
        }, this.hidePlaybackRateButtons = function(e) {
            a.arePlaybackRateButtonsShowed_bl && a.showPlaybackRateButton_bl && (a.arePlaybackRateButtonsShowed_bl = !1, e ? FWDAnimation.to(a.playbackRatesButtonsHolder_do, .6, {
                y: n.stageHeight,
                ease: Expo.easeInOut
            }) : (FWDAnimation.killTweensOf(a.playbackRatesButtonsHolder_do), a.playbackRatesButtonsHolder_do.setY(n.stageHeight)), a.hasPointerEvent_bl ? window.removeEventListener("pointerdown", a.hideplaybackRatesButtonsHandler) : (a.isMobile_bl || window.removeEventListener("mousedown", a.hideplaybackRatesButtonsHandler), window.removeEventListener("touchstart", a.hideplaybackRatesButtonsHandler)))
        }, this.hideplaybackRatesButtonsHandler = function(e) {
            var t = FWDEVPUtils.getViewportMouseCoordinates(e);
            FWDEVPUtils.hitTest(a.playbackRateButton_do.screen, t.screenX, t.screenY) || FWDEVPUtils.hitTest(a.playbackRatesButtonsHolder_do.screen, t.screenX, t.screenY) || a.hidePlaybackRateButtons(!0)
        }, this.setupAdsLines = function(e) {
            if (!this.createdAdsOnce_bl) {
                if (this.linesHolder_do || (this.linesHolder_do = new FWDEVPDisplayObject("div"), this.linesHolder_do.setOverflow("visible"), this.mainScrubber_do.addChild(this.linesHolder_do)), this.createdAdsOnce_bl = !0, this.lines_ar = e, this.lines_ar) {
                    var t;
                    this.line_ar = [];
                    for (var o = 0; o < this.lines_ar.length; o++)(t = new FWDEVPDisplayObject("div")).getStyle().background = "url('" + s.adLinePat_str + "') repeat-x", t.timeStart = e[o].timeStart, t.setWidth(2), t.setHeight(a.mainScrubberDragLeft_img.height), t.isUsed_bl = !1, t.isShowed_bl = !1, t.setAlpha(0), this.line_ar[o] = t, this.linesHolder_do.addChild(t)
                }
                a.totalDuration = 0
            }
        }, this.hideAdsLines = function() {
            if (a.linesHolder_do && a.linesHolder_do.setX(-5e3), this.line_ar)
                for (var e = 0; e < this.line_ar.length; e++) this.line_ar[e].setAlpha(0), this.line_ar[e].isShowed_bl = !1
        }, this.positionAdsLines = function(e) {
            if (a.linesHolder_do && (e && (a.totalDuration = e), n.isAdd_bl ? this.linesHolder_do.setX(-5e3) : this.linesHolder_do.setX(0), this.line_ar))
                for (var t, o = 0; o < this.line_ar.length; o++) {
                    t = this.line_ar[o];
                    var s = Math.round(t.timeStart / a.totalDuration * a.mainScrubberWidth) - 1;
                    s == 1 / 0 && (s = 0), isNaN(s) && (s = 0), s < 0 && (s = 0), t.setX(s), t.isUsed_bl || 0 == a.totalDuration || t.isShowed_bl || (FWDAnimation.to(t, 1, {
                        alpha: 1,
                        ease: Expo.easeOut
                    }), t.isShowed_bl = !0)
                }
        }, a.setIsLive = function(e) {
            (a.isLive = e) ? a.mainScrubber_do.contains(a.live_do) || (a.mainScrubber_do.setAlpha(.2), a.mainHolder_do.addChild(a.live_do), setTimeout(function() {
                a.live_do.setX(4), a.live_do.setY(-a.live_do.getHeight() - 4)
            }, 100), a.disableMainScrubber()): a.mainHolder_do.contains(a.live_do) && (a.mainHolder_do.removeChild(a.live_do), a.mainScrubber_do.setAlpha(1), a.enableMainScrubber())
        }, this.setupMainScrubber = function() {
            a.mainScrubber_do = new FWDEVPDisplayObject("div"), a.mainScrubber_do.setHeight(a.scrubbersHeight), a.mainScrubberBkLeft_do = new FWDEVPDisplayObject("img"), a.mainScrubberBkLeft_do.setScreen(a.mainScrubberBkLeft_img), a.mainScrubberBkRight_do = new FWDEVPDisplayObject("img"), a.mainScrubberBkRight_do.setScreen(a.mainScrubberBkRight_img);
            var e = new Image;
            e.src = a.mainScrubberBkMiddlePath_str, a.mainScrubberBkMiddle_do = new FWDEVPDisplayObject("div"), a.mainScrubberBkMiddle_do.getStyle().background = "url('" + a.mainScrubberBkMiddlePath_str + "') repeat-x", a.mainScrubberBkMiddle_do.setHeight(a.scrubbersHeight), a.mainScrubberBkMiddle_do.setX(a.scrubbersBkLeftAndRightWidth), a.mainProgress_do = new FWDEVPDisplayObject("div"), a.mainProgress_do.setHeight(a.scrubbersHeight), a.progressLeft_do = new FWDEVPDisplayObject("img"), a.progressLeft_do.setScreen(a.progress), (e = new Image).src = a.progressMiddlePath_str, a.progressMiddle_do = new FWDEVPDisplayObject("div"), a.progressMiddle_do.getStyle().background = "url('" + a.progressMiddlePath_str + "') repeat-x", a.progressMiddle_do.setHeight(a.scrubbersHeight), a.progressMiddle_do.setX(a.mainScrubberDragLeftWidth), a.mainScrubberDrag_do = new FWDEVPDisplayObject("div"), a.mainScrubberDrag_do.setHeight(a.scrubbersHeight), a.useHEXColorsForSkin_bl ? (a.mainScrubberDragLeft_do = new FWDEVPDisplayObject("div"), a.mainScrubberDragLeft_do.setWidth(a.mainScrubberDragLeft_img.width + 20), a.mainScrubberDragLeft_do.setHeight(a.mainScrubberDragLeft_img.height + 20), a.mainScrubberDragLeft_canvas = FWDEVPUtils.getCanvasWithModifiedColor(a.mainScrubberDragLeft_img, a.normalButtonsColor_str).canvas, a.mainScrubberDragLeft_do.screen.appendChild(a.mainScrubberDragLeft_canvas)) : (a.mainScrubberDragLeft_do = new FWDEVPDisplayObject("img"), a.mainScrubberDragLeft_do.setScreen(a.mainScrubberDragLeft_img)), a.mainScrubberMiddleImage = new Image, a.mainScrubberMiddleImage.src = a.mainScrubberDragMiddlePath_str, a.volumeScrubberDragMiddle_do = new FWDEVPDisplayObject("div"), a.useHEXColorsForSkin_bl ? (a.mainScrubberDragMiddle_do = new FWDEVPDisplayObject("div"), a.mainScrubberMiddleImage.onload = function() {
                var e = FWDEVPUtils.getCanvasWithModifiedColor(a.mainScrubberMiddleImage, a.normalButtonsColor_str, !0);
                a.mainSCrubberMiddleCanvas = e.canvas, a.mainSCrubberDragMiddleImageBackground = e.image, a.mainScrubberDragMiddle_do.getStyle().background = "url('" + a.mainSCrubberDragMiddleImageBackground.src + "') repeat-x", setTimeout(function() {
                    a.volumeScrubberDragMiddle_do.getStyle().background = "url('" + a.mainSCrubberDragMiddleImageBackground.src + "') repeat-x"
                }, 50)
            }) : (a.mainScrubberDragMiddle_do = new FWDEVPDisplayObject("div"), a.mainScrubberDragMiddle_do.getStyle().background = "url('" + a.mainScrubberDragMiddlePath_str + "') repeat-x"), a.mainScrubberDragMiddle_do.setHeight(a.scrubbersHeight), a.mainScrubberDragMiddle_do.setX(a.mainScrubberDragLeftWidth), a.mainScrubberBarLine_do = new FWDEVPDisplayObject("img"), a.mainScrubberBarLine_do.setScreen(a.mainScrubberLine_img), a.mainScrubberBarLine_do.setAlpha(0), a.mainScrubberBarLine_do.hasTransform3d_bl = !1, a.mainScrubberBarLine_do.hasTransform2d_bl = !1, a.buttons_ar.push(a.mainScrubber_do), a.live_do = new FWDEVPDisplayObject("div"), a.live_do.hasTransform3d_bl = !1, a.live_do.hasTransform2d_bl = !1, a.live_do.setBackfaceVisibility(), a.live_do.getStyle().fontFamily = "Arial", a.live_do.getStyle().fontSize = "12px", a.live_do.getStyle().whiteSpace = "nowrap", a.live_do.getStyle().textAlign = "center", a.live_do.getStyle().padding = "4px", a.live_do.getStyle().paddingLeft = "6px", a.live_do.getStyle().paddingRIght = "6px", a.live_do.getStyle().color = "#FFFFFF", a.live_do.getStyle().fontSmoothing = "antialiased", a.live_do.getStyle().webkitFontSmoothing = "antialiased", a.live_do.getStyle().textRendering = "optimizeLegibility", a.live_do.getStyle().backgroundColor = "rgba(255,0,0,0.8)", a.live_do.setInnerHTML("&#x25C9; LIVE"), a.mainScrubber_do.addChild(a.mainScrubberBkLeft_do), a.mainScrubber_do.addChild(a.mainScrubberBkMiddle_do), a.mainScrubber_do.addChild(a.mainScrubberBkRight_do), a.mainScrubber_do.addChild(a.mainScrubberBarLine_do), a.mainScrubberDrag_do.addChild(a.mainScrubberDragLeft_do), a.mainScrubberDrag_do.addChild(a.mainScrubberDragMiddle_do), a.mainProgress_do.addChild(a.progressLeft_do), a.mainProgress_do.addChild(a.progressMiddle_do), a.mainScrubber_do.addChild(a.mainProgress_do), a.mainScrubber_do.addChild(a.mainScrubberDrag_do), a.mainScrubber_do.addChild(a.mainScrubberBarLine_do), a.mainHolder_do.addChild(a.mainScrubber_do), a.disableVideoScrubber_bl || (a.hasPointerEvent_bl ? (a.mainScrubber_do.screen.addEventListener("pointerover", a.mainScrubberOnOverHandler), a.mainScrubber_do.screen.addEventListener("pointerout", a.mainScrubberOnOutHandler), a.mainScrubber_do.screen.addEventListener("pointerdown", a.mainScrubberOnDownHandler)) : a.screen.addEventListener && (a.isMobile_bl || (a.mainScrubber_do.screen.addEventListener("mouseover", a.mainScrubberOnOverHandler), a.mainScrubber_do.screen.addEventListener("mouseout", a.mainScrubberOnOutHandler), a.mainScrubber_do.screen.addEventListener("mousedown", a.mainScrubberOnDownHandler)), a.mainScrubber_do.screen.addEventListener("touchstart", a.mainScrubberOnDownHandler))), a.disableMainScrubber(), a.updateMainScrubber(0)
        }, this.mainScrubberOnOverHandler = function(e) {
            a.isMainScrubberDisabled_bl
        }, this.mainScrubberOnOutHandler = function(e) {
            a.isMainScrubberDisabled_bl
        }, this.mainScrubberOnDownHandler = function(e) {
            if (!a.isMainScrubberDisabled_bl && 2 != e.button) {
                e.preventDefault && e.preventDefault(), a.isMainScrubberScrubbing_bl = !0;
                var t = FWDEVPUtils.getViewportMouseCoordinates(e).screenX - a.mainScrubber_do.getGlobalX();
                t < 0 ? t = 0 : t > a.mainScrubberWidth - a.scrubbersOffsetWidth && (t = a.mainScrubberWidth - a.scrubbersOffsetWidth);
                var o = t / a.mainScrubberWidth;
                a.disable_do && a.addChild(a.disable_do), a.updateMainScrubber(o), a.dispatchEvent(l.START_TO_SCRUB), a.dispatchEvent(l.SCRUB, {
                    percent: o
                }), a.hasPointerEvent_bl ? (window.addEventListener("pointermove", a.mainScrubberMoveHandler), window.addEventListener("pointerup", a.mainScrubberEndHandler)) : (window.addEventListener("mousemove", a.mainScrubberMoveHandler), window.addEventListener("mouseup", a.mainScrubberEndHandler), window.addEventListener("touchmove", a.mainScrubberMoveHandler), window.addEventListener("touchend", a.mainScrubberEndHandler))
            }
        }, this.mainScrubberMoveHandler = function(e) {
            e.preventDefault && e.preventDefault();
            var t = FWDEVPUtils.getViewportMouseCoordinates(e).screenX - a.mainScrubber_do.getGlobalX();
            t < 0 ? t = 0 : t > a.mainScrubberWidth - a.scrubbersOffsetWidth && (t = a.mainScrubberWidth - a.scrubbersOffsetWidth);
            var o = t / a.mainScrubberWidth;
            a.updateMainScrubber(o), a.dispatchEvent(l.SCRUB, {
                percent: o
            })
        }, this.mainScrubberEndHandler = function(e) {
            a.disable_do && a.contains(a.disable_do) && a.removeChild(a.disable_do), a.dispatchEvent(l.STOP_TO_SCRUB), a.hasPointerEvent_bl ? (window.removeEventListener("pointermove", a.mainScrubberMoveHandler), window.removeEventListener("pointerup", a.mainScrubberEndHandler)) : (window.removeEventListener("mousemove", a.mainScrubberMoveHandler), window.removeEventListener("mouseup", a.mainScrubberEndHandler), window.removeEventListener("touchmove", a.mainScrubberMoveHandler), window.removeEventListener("touchend", a.mainScrubberEndHandler))
        }, this.disableMainScrubber = function() {
            a.mainScrubber_do && (a.isMainScrubberDisabled_bl = !0, a.mainScrubber_do.setButtonMode(!1), a.mainScrubberEndHandler(), a.updateMainScrubber(0), a.updatePreloaderBar(0))
        }, this.enableMainScrubber = function() {
            a.mainScrubber_do && !a.isLive && (a.isMainScrubberDisabled_bl = !1, a.mainScrubber_do.setButtonMode(!0))
        }, this.updateMainScrubber = function(e) {
            if (a.mainScrubber_do) {
                a.isLive && (e = 0);
                var t = parseInt(e * a.mainScrubberWidth);
                isNaN(t) || (a.percentPlayed = e, !FWDEVPlayer.hasHTML5Video && t >= a.mainProgress_do.w && (t = a.mainProgress_do.w), t < 1 && a.isMainScrubberLineVisible_bl ? (a.isMainScrubberLineVisible_bl = !1, FWDAnimation.to(a.mainScrubberBarLine_do, .5, {
                    alpha: 0
                })) : 1 < t && !a.isMainScrubberLineVisible_bl && (a.isMainScrubberLineVisible_bl = !0, FWDAnimation.to(a.mainScrubberBarLine_do, .5, {
                    alpha: 1
                })), a.mainScrubberDrag_do.setWidth(t), t > a.mainScrubberWidth - a.scrubbersOffsetWidth && (t = a.mainScrubberWidth - a.scrubbersOffsetWidth), FWDAnimation.to(a.mainScrubberBarLine_do, .8, {
                    x: t + 1,
                    ease: Expo.easeOut
                }))
            }
        }, this.updatePreloaderBar = function(e) {
            if (a.mainProgress_do) {
                a.isLive && (e = 0), a.percentLoaded = e;
                var t = parseInt(Math.max(0, a.percentLoaded * a.mainScrubberWidth));
                .98 <= a.percentLoaded ? a.mainProgress_do.setY(-30) : 0 != a.mainProgress_do.y && 1 != a.percentLoaded && a.mainProgress_do.setY(0), t > a.mainScrubberWidth - a.scrubbersOffsetWidth && (t = Math.max(0, a.mainScrubberWidth - a.scrubbersOffsetWidth)), t < 0 && (t = 0), a.mainProgress_do.setWidth(t)
            }
        }, this.setupPlayPauseButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPComplexButton.setPrototype(), a.playPauseButton_do = new FWDEVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fa fa-play'></i>", "<i class='fa fa-pause'></i>", "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPComplexButton.setPrototype(), a.playPauseButton_do = new FWDEVPComplexButton(a.playN_img, s.playSPath_str, a.pauseN_img, s.pauseSPath_str, !0, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.buttons_ar.push(a.playPauseButton_do), a.playPauseButton_do.setY(parseInt((a.stageHeight - a.playPauseButton_do.buttonHeight) / 2)), a.playPauseButton_do.addListener(FWDEVPComplexButton.MOUSE_UP, a.playButtonMouseUpHandler), a.mainHolder_do.addChild(a.playPauseButton_do)
        }, this.showPlayButton = function() {
            a.playPauseButton_do && a.playPauseButton_do.setButtonState(1)
        }, this.showPauseButton = function() {
            a.playPauseButton_do && a.playPauseButton_do.setButtonState(0)
        }, this.playButtonMouseUpHandler = function() {
            0 == a.playPauseButton_do.currentState ? a.dispatchEvent(l.PAUSE) : a.dispatchEvent(l.PLAY)
        }, this.setupEmbedButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), a.embedButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fa fa-link'></i>", void 0, "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), a.embedButton_do = new FWDEVPSimpleButton(a.embedN_img, s.embedPathS_str, void 0, !0, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.embedButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, a.embedButtonOnMouseUpHandler), a.embedButton_do.setY(parseInt((a.stageHeight - a.embedButton_do.h) / 2)), a.buttons_ar.push(a.embedButton_do), a.mainHolder_do.addChild(a.embedButton_do)
        }, this.embedButtonOnMouseUpHandler = function() {
            a.dispatchEvent(l.SHOW_EMBED_WINDOW)
        }, this.setupYtbButtons = function() {
            var e, t;
            (a.ytbButtonsHolder_do = new FWDEVPDisplayObject("div"), a.ytbButtonsHolder_do.setOverflow("visible"), a.repeatBackground_bl) ? a.ytbButtonsHolder_do.getStyle().background = "url('" + a.controllerBkPath_str + "')": (a.ytbButtonBackground_do = new FWDEVPDisplayObject("img"), (e = new Image).src = a.controllerBkPath_str, a.ytbButtonBackground_do.setScreen(e), a.ytbButtonsHolder_do.addChild(a.ytbButtonBackground_do));
            a.ytbButtonsHolder_do.setX(300), a.ytbButtonsHolder_do.setY(-300), n.main_do.addChild(a.ytbButtonsHolder_do, 0), (e = new Image).src = a.ytbQualityButtonPointerPath_str, a.pointer_do = new FWDEVPDisplayObject("img"), a.pointer_do.setScreen(e), a.pointer_do.setWidth(a.pointerWidth), a.pointer_do.setHeight(a.pointerHeight), a.ytbButtonsHolder_do.addChild(a.pointer_do), (e = new Image).src = a.youtubeQualityArrowPath_str, a.ytbQualityArrow_do = new FWDEVPDisplayObject("img"), a.ytbQualityArrow_do.setScreen(e), a.ytbQualityArrow_do.setX(7), a.ytbQualityArrow_do.setWidth(5), a.ytbQualityArrow_do.setHeight(7);
            for (var o = 0; o < a.totalYtbButtons; o++) FWDEVPYTBQButton.setPrototype(), (t = new FWDEVPYTBQButton(a.ytbQuality_ar[o], a.youtubeQualityButtonNormalColor_str, a.youtubeQualityButtonSelectedColor_str, s.hdPath_str, o)).addListener(FWDEVPYTBQButton.MOUSE_OVER, a.ytbQualityOver), t.addListener(FWDEVPYTBQButton.MOUSE_OUT, a.ytbQualityOut), t.addListener(FWDEVPYTBQButton.CLICK, a.ytbQualityClick), a.ytbButtons_ar[o] = t, a.ytbButtonsHolder_do.addChild(t);
            a.ytbButtonsHolder_do.addChild(a.ytbQualityArrow_do), a.hideQualityButtons(!1)
        }, this.ytbQualityOver = function(e) {
            a.setYtbQualityArrowPosition(e.target)
        }, this.ytbQualityOut = function(e) {
            a.setYtbQualityArrowPosition(void 0)
        }, this.ytbQualityClick = function(e) {
            a.hideQualityButtons(!0), a.dispatchEvent(l.CHANGE_YOUTUBE_QUALITY, {
                quality: e.target.label_str,
                id: e.id
            })
        }, this.positionAndResizeYtbQualityButtons = function(e) {
            if (e) {
                var t = e.length;
                if (a.prevYtbQualityButtonsLength != t) {
                    var o;
                    this.prevYtbQualityButtonsLength = t;
                    for (var s = 5, i = 0, n = 0, l = 0; l < t; l++)(o = a.ytbButtons_ar[l]).updateText(e[l]), o.setFinalSize();
                    setTimeout(function() {
                        for (var e = 0; e < a.totalYtbButtons; e++) o = a.ytbButtons_ar[e], e < t ? (0 != o.x && o.setX(0), o.w > i && (i = o.w), o.setY(s), s += o.h) : -3e3 != o.x && o.setX(-3e3);
                        for (e = 0; e < a.totalYtbButtons; e++)(o = a.ytbButtons_ar[e]).dumy_do.w < i && (o.setWidth(i), o.dumy_do.setWidth(i));
                        n = s + 5, a.pointer_do.setX(parseInt((i - a.pointer_do.w) / 2)), a.pointer_do.setY(n), a.ytbButtonBackground_do && (a.ytbButtonBackground_do.setWidth(i), a.ytbButtonBackground_do.setHeight(n)), a.ytbButtonsHolder_do.setWidth(i), a.ytbButtonsHolder_do.setHeight(n)
                    }, 60)
                }
            }
        }, this.disableQualityButtons = function(e) {
            "highres" == e || "hd1080" == e || "hd720" == e || "hd1440" == e || "hd2160" == e ? a.ytbQualityButton_do.showDisabledState() : a.ytbQualityButton_do.hideDisabledState();
            for (var t = 0; t < a.totalYtbButtons; t++) btn = a.ytbButtons_ar[t], btn.label_str == e ? (FWDAnimation.killTweensOf(a.ytbQualityArrow_do), 0 != btn.y && (a.ytbQualityArrow_do.setY(btn.y + Math.round((btn.h - a.ytbQualityArrow_do.h) / 2)), a.ytbDisabledButton_do = btn), btn.disable()) : btn.enable()
        }, this.setYtbQualityArrowPosition = function(e) {
            var t = 0;
            t = e ? e.y + Math.round((e.h - a.ytbQualityArrow_do.h) / 2) : a.ytbDisabledButton_do.y + Math.round((a.ytbDisabledButton_do.h - a.ytbQualityArrow_do.h) / 2), FWDAnimation.killTweensOf(a.ytbQualityArrow_do), FWDAnimation.to(a.ytbQualityArrow_do, .6, {
                y: t,
                delay: .1,
                ease: Expo.easeInOut
            })
        }, this.showQualityButtons = function(e) {
            if (!a.areYtbQualityButtonsShowed_bl && a.showYoutubeQualityButton_bl) {
                a.hideSubtitleButtons(), a.areYtbQualityButtonsShowed_bl = !0;
                var t = parseInt(a.ytbQualityButton_do.x + parseInt(a.ytbQualityButton_do.w - a.ytbButtonsHolder_do.w) / 2),
                    o = parseInt(n.stageHeight - a.stageHeight - a.ytbButtonsHolder_do.h - 6);
                window.hasPointerEvent_bl ? window.addEventListener("pointerdown", a.hideQualityButtonsHandler) : (a.isMobile_bl || window.addEventListener("mousedown", a.hideQualityButtonsHandler), window.addEventListener("touchstart", a.hideQualityButtonsHandler)), a.ytbButtonsHolder_do.setX(t), e ? FWDAnimation.to(a.ytbButtonsHolder_do, .6, {
                    y: o,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(a.ytbButtonsHolder_do), a.ytbButtonsHolder_do.setY(o))
            }
        }, this.hideQualityButtons = function(e) {
            a.areYtbQualityButtonsShowed_bl && a.showYoutubeQualityButton_bl && (a.areYtbQualityButtonsShowed_bl = !1, e ? FWDAnimation.to(a.ytbButtonsHolder_do, .6, {
                y: n.stageHeight,
                ease: Expo.easeInOut
            }) : (FWDAnimation.killTweensOf(a.ytbButtonsHolder_do), a.ytbButtonsHolder_do.setY(n.stageHeight)), window.hasPointerEvent_bl ? window.removeEventListener("pointerdown", a.hideQualityButtonsHandler) : (a.isMobile_bl || window.removeEventListener("mousedown", a.hideQualityButtonsHandler), window.removeEventListener("touchstart", a.hideQualityButtonsHandler)))
        }, this.setupYoutubeQualityButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), a.ytbQualityButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fa fa-cog'></i>", !0, "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), a.ytbQualityButton_do = new FWDEVPSimpleButton(a.ytbQualityN_img, s.ytbQualitySPath_str, s.ytbQualityDPath_str, !0, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.ytbQualityButton_do.setX(-300), a.ytbQualityButton_do.setY(parseInt((a.stageHeight - a.ytbQualityButton_do.h) / 2)), a.ytbQualityButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, a.ytbQualityMouseUpHandler), a.mainHolder_do.addChild(a.ytbQualityButton_do)
        }, this.ytbQualityMouseUpHandler = function() {
            a.areYtbQualityButtonsShowed_bl ? a.hideQualityButtons(!0) : a.showQualityButtons(!0)
        }, this.hideQualityButtonsHandler = function(e) {
            var t = FWDEVPUtils.getViewportMouseCoordinates(e);
            FWDEVPUtils.hitTest(a.ytbQualityButton_do.screen, t.screenX, t.screenY) || FWDEVPUtils.hitTest(a.ytbButtonsHolder_do.screen, t.screenX, t.screenY) || a.hideQualityButtons(!0)
        }, this.addYtbQualityButton = function() {
            !a.hasYtbButton_bl && a.showYoutubeQualityButton_bl && (a.hasYtbButton_bl = !0, a.shareButton_do && -1 != FWDEVPUtils.indexOfArray(a.buttons_ar, a.shareButton_do) ? a.buttons_ar.splice(FWDEVPUtils.indexOfArray(a.buttons_ar, a.shareButton_do), 0, a.ytbQualityButton_do) : a.fullScreenButton_do && -1 != FWDEVPUtils.indexOfArray(a.buttons_ar, a.fullScreenButton_do) ? a.buttons_ar.splice(FWDEVPUtils.indexOfArray(a.buttons_ar, a.fullScreenButton_do), 0, a.ytbQualityButton_do) : a.buttons_ar.splice(a.buttons_ar.length, 0, a.ytbQualityButton_do), a.ytbQualityButton_do.disable(), a.ytbQualityButton_do.rotation = 0, a.ytbQualityButton_do.setRotation(a.ytbQualityButton_do.rotation), a.ytbQualityButton_do.hideDisabledState(), a.hideQualityButtons(!1), a.positionButtons())
        }, this.removeYtbQualityButton = function() {
            a.hasYtbButton_bl && a.showYoutubeQualityButton_bl && (a.hasYtbButton_bl = !1, a.buttons_ar.splice(FWDEVPUtils.indexOfArray(a.buttons_ar, a.ytbQualityButton_do), 1), a.ytbQualityButton_do.setX(-300), a.ytbQualityButton_do.hideDisabledState(), a.hideQualityButtons(!1), a.positionButtons())
        }, this.updateQuality = function(e, t) {
            a.hasYtbButton_bl && a.showYoutubeQualityButton_bl && !n.isAdd_bl && (a.positionAndResizeYtbQualityButtons(e), setTimeout(function() {
                a.disableQualityButtons(t)

                setTimeout(function(){
                    window.dispatchEvent(new Event('resize'));
                    $('#myDivMainHolder .custom-loader').remove();
                    $('#myDiv div:first-child div').first().addClass('w-100');
                }, 100);
            }, 65))
        }, this.showSubtitleButton_bl, this.subtitlesSource_ar = s.subtitles_ar, this.subtitleButtons_ar = [], this.totalSubttleButtons = 10, this.setupSubtitleButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPComplexButton.setPrototype(), a.subtitleButton_do = new FWDEVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fa fa-closed-captioning'></i>", "<i class='far fa-closed-captioning'></i>", "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPComplexButton.setPrototype(), a.subtitleButton_do = new FWDEVPComplexButton(s.showSubtitleNPath_img, s.showSubtitleSPath_str, s.hideSubtitleNPath_img, s.hideSubtitleSPath_str, !0, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.subtitleButton_do.setX(-1e4), a.buttons_ar.push(a.subtitleButton_do), a.subtitleButton_do.setY(parseInt((a.stageHeight - a.subtitleButton_do.h) / 2)), a.subtitleButton_do.addListener(FWDEVPComplexButton.MOUSE_UP, a.subtitleButtonMouseUpHandler), a.mainHolder_do.addChild(a.subtitleButton_do), a.setupSubtitleButtons(), -1 != location.protocol.indexOf("file:") && a.disableSubtitleButton(), n.subtitle_do.showSubtitileByDefault_bl && a.subtitleButton_do.setButtonState(0)
        }, this.subtitleButtonMouseUpHandler = function() {
            a.areSubtitleButtonsShowed_bl ? a.hideSubtitleButtons(!0) : a.showSubtitleButtons(!0)
        }, this.disableSubtitleButton = function() {
            a.subtitleButton_do && a.subtitleButton_do.disable()
        }, this.enableSubtitleButton = function() {
            a.subtitleButton_do && a.subtitleButton_do.enable()
        }, this.updateSubtitleButtons = function(e, t) {
            a.subtitleButton_do && (a.subtitleButton_do.enable(), a.positionAndResizeSubtitleButtons(e), setTimeout(function() {
                t = a.subtitlesSource_ar.length - 1 - t, a.disableSubtitleButtons(t)
            }, 65), a.prevSubtitleIndex = t)
        }, this.setupSubtitleButtons = function() {
            var e, t;
            (a.subtitlesButtonsHolder_do = new FWDEVPDisplayObject("div"), a.subtitlesButtonsHolder_do.setOverflow("visible"), a.repeatBackground_bl) ? a.subtitlesButtonsHolder_do.getStyle().background = "url('" + a.controllerBkPath_str + "')": (a.subtitlesButtonsBackground_do = new FWDEVPDisplayObject("img"), (e = new Image).src = a.controllerBkPath_str, a.subtitlesButtonsBackground_do.setScreen(e), a.subtitlesButtonsHolder_do.addChild(a.subtitlesButtonsBackground_do));
            a.subtitlesButtonsHolder_do.setX(300), a.subtitlesButtonsHolder_do.setY(-300), n.main_do.addChild(a.subtitlesButtonsHolder_do, 0), (e = new Image).src = a.ytbQualityButtonPointerPath_str, a.subtitlesPonter_do = new FWDEVPDisplayObject("img"), a.subtitlesPonter_do.setScreen(e), a.subtitlesPonter_do.setWidth(a.pointerWidth), a.subtitlesPonter_do.setHeight(a.pointerHeight), a.subtitlesButtonsHolder_do.addChild(a.subtitlesPonter_do), (e = new Image).src = a.youtubeQualityArrowPath_str, a.subtitleQualityArrow_do = new FWDEVPDisplayObject("img"), a.subtitleQualityArrow_do.setScreen(e), a.subtitleQualityArrow_do.setX(7), a.subtitleQualityArrow_do.setWidth(5), a.subtitleQualityArrow_do.setHeight(7), a.subtitlesButtonsHolder_do.addChild(a.subtitleQualityArrow_do);
            for (var o = 0; o < a.totalSubttleButtons; o++) FWDEVPYTBQButton.setPrototype(), (t = new FWDEVPYTBQButton("no source", a.youtubeQualityButtonNormalColor_str, a.youtubeQualityButtonSelectedColor_str, s.hdPath_str, o)).addListener(FWDEVPYTBQButton.MOUSE_OVER, a.sbtQualityOver), t.addListener(FWDEVPYTBQButton.MOUSE_OUT, a.sbtQualityOut), t.addListener(FWDEVPYTBQButton.CLICK, a.sbtQualityClick), a.subtitleButtons_ar[o] = t, a.subtitlesButtonsHolder_do.addChild(t);
            a.hideSubtitleButtons(!1)
        }, this.sbtQualityOver = function(e) {
            a.setSubtitleArrowPosition(e.target)
        }, this.sbtQualityOut = function(e) {
            a.setSubtitleArrowPosition(void 0)
        }, this.sbtQualityClick = function(e) {
            a.startAtSubtitle = e.id, a.disableSubtitleButtons(a.startAtSubtitle), a.hideSubtitleButtons(!0), a.dispatchEvent(l.CHANGE_SUBTITLE, {
                id: a.subtitlesSource_ar.length - 1 - e.id
            })
        }, this.positionAndResizeSubtitleButtons = function(e) {
            if (e) {
                var t = e.length;
                if (a.prevSubtitlesQualityButtonsLength != t) {
                    var o;
                    this.prevSubtitlesQualityButtonsLength = t;
                    for (var s = 5, i = 0, n = 0, l = 0; l < t; l++)(o = a.subtitleButtons_ar[l]).updateText(e[l].label), o.setFinalSize();
                    setTimeout(function() {
                        for (var e = 0; e < a.totalSubttleButtons; e++) o = a.subtitleButtons_ar[e], e < t ? (0 != o.x && o.setX(0), o.w > i && (i = o.w), o.setY(s), s += o.h) : -3e3 != o.x && o.setX(-3e3);
                        for (e = 0; e < a.totalSubttleButtons; e++)(o = a.subtitleButtons_ar[e]).dumy_do.w < i && (o.setWidth(i), o.dumy_do.setWidth(i));
                        n = s + 5, a.subtitlesPonter_do.setX(parseInt((i - a.subtitlesPonter_do.w) / 2)), a.subtitlesPonter_do.setY(n), a.subtitlesButtonsBackground_do && (a.subtitlesButtonsBackground_do.setWidth(i), a.subtitlesButtonsBackground_do.setHeight(n)), a.subtitlesButtonsHolder_do.setWidth(i), a.subtitlesButtonsHolder_do.setHeight(n)
                    }, 60)
                }
            }
        }, this.disableSubtitleButtons = function(e) {
            for (var t = 0; t < a.totalSubttleButtons; t++) btn = a.subtitleButtons_ar[t], t == e ? (FWDAnimation.killTweensOf(a.subtitleQualityArrow_do), a.subtitleQualityArrow_do.setY(btn.y + parseInt((btn.h - a.subtitleQualityArrow_do.h) / 2) + 1), btn.disable(), a.subtitleDisabledButton_do = btn) : btn.enable();
            a.subtitlesSource_ar.length - 1 - e == 0 ? a.subtitleButton_do.setButtonState(0) : a.subtitleButton_do.setButtonState(1)
        }, this.setSubtitleArrowPosition = function(e) {
            var t = 0;
            t = e ? e.y + parseInt((e.h - a.subtitleQualityArrow_do.h) / 2) : a.subtitleDisabledButton_do.y + parseInt((a.subtitleDisabledButton_do.h - a.subtitleQualityArrow_do.h) / 2), FWDAnimation.killTweensOf(a.subtitleQualityArrow_do), FWDAnimation.to(a.subtitleQualityArrow_do, .6, {
                y: t,
                delay: .1,
                ease: Expo.easeInOut
            })
        }, this.showSubtitleButtons = function(e) {
            if (!a.areSubtitleButtonsShowed_bl) {
                a.hideQualityButtons(), a.areSubtitleButtonsShowed_bl = !0;
                var t = parseInt(a.subtitleButton_do.x + parseInt(a.subtitleButton_do.w - a.subtitlesButtonsHolder_do.w) / 2),
                    o = parseInt(n.stageHeight - a.stageHeight - a.subtitlesButtonsHolder_do.h - 6);
                a.hasPointerEvent_bl ? window.addEventListener("pointerdown", a.hideSubtitlesButtonsHandler) : (a.isMobile_bl || window.addEventListener("mousedown", a.hideSubtitlesButtonsHandler), window.addEventListener("touchstart", a.hideSubtitlesButtonsHandler)), a.subtitlesButtonsHolder_do.setX(t), e ? FWDAnimation.to(a.subtitlesButtonsHolder_do, .6, {
                    y: o,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(a.subtitlesButtonsHolder_do), a.subtitlesButtonsHolder_do.setY(o))
            }
        }, this.hideSubtitleButtons = function(e) {
            a.areSubtitleButtonsShowed_bl && a.showSubtitleButton_bl && (a.areSubtitleButtonsShowed_bl = !1, e ? FWDAnimation.to(a.subtitlesButtonsHolder_do, .6, {
                y: n.stageHeight,
                ease: Expo.easeInOut
            }) : (FWDAnimation.killTweensOf(a.subtitlesButtonsHolder_do), a.subtitlesButtonsHolder_do.setY(n.stageHeight)), a.hasPointerEvent_bl ? window.removeEventListener("pointerdown", a.hideSubtitlesButtonsHandler) : (a.isMobile_bl || window.removeEventListener("mousedown", a.hideSubtitlesButtonsHandler), window.removeEventListener("touchstart", a.hideSubtitlesButtonsHandler)))
        }, this.hideSubtitlesButtonsHandler = function(e) {
            var t = FWDEVPUtils.getViewportMouseCoordinates(e);
            FWDEVPUtils.hitTest(a.subtitleButton_do.screen, t.screenX, t.screenY) || FWDEVPUtils.hitTest(a.subtitlesButtonsHolder_do.screen, t.screenX, t.screenY) || a.hideSubtitleButtons(!0)
        }, this.setupRewindButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), a.rewindButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fa fa-step-backward'></i>", void 0, "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), a.rewindButton_do = new FWDEVPSimpleButton(s.rewindN_img, s.rewindSPath_str, void 0, !0, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.buttons_ar.push(a.rewindButton_do), a.rewindButton_do.setY(parseInt((a.stageHeight - a.rewindButton_do.h) / 2)), a.rewindButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, a.rewindButtonMouseUpHandler), a.mainHolder_do.addChild(a.rewindButton_do)
        }, this.rewindButtonMouseUpHandler = function() {
            a.dispatchEvent(l.REWIND)
        }, this.setupShareButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), a.shareButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fa fa-share-alt'></i>", void 0, "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), a.shareButton_do = new FWDEVPSimpleButton(a.shareN_img, s.shareSPath_str, void 0, !0, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.buttons_ar.push(a.shareButton_do), a.shareButton_do.setY(parseInt((a.stageHeight - a.shareButton_do.h) / 2)), a.shareButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, a.facebookButtonMouseUpHandler), a.mainHolder_do.addChild(a.shareButton_do)
        }, this.facebookButtonMouseUpHandler = function() {
            a.dispatchEvent(l.SHARE)
        }, this.setupDownloadButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), a.downloadButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fa fa-download'></i>", void 0, "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), a.downloadButton_do = new FWDEVPSimpleButton(s.downloadN_img, s.downloadSPath_str, void 0, !0, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.downloadButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, a.downloadButtonOnMouseUpHandler), a.buttons_ar.push(a.downloadButton_do), a.mainHolder_do.addChild(a.downloadButton_do)
        }, this.downloadButtonShowToolTipHandler = function(e) {}, this.downloadButtonOnMouseUpHandler = function() {
            a.dispatchEvent(l.DOWNLOAD_VIDEO)
        }, this.setupFullscreenButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPComplexButton.setPrototype(), a.fullScreenButton_do = new FWDEVPComplexButton(void 0, void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fa fa-expand'></i>", "<i class='fa fa-compress'></i>", "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPComplexButton.setPrototype(), a.fullScreenButton_do = new FWDEVPComplexButton(a.fullScreenN_img, s.fullScreenSPath_str, a.normalScreenN_img, s.normalScreenSPath_str, !0, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.buttons_ar.push(a.fullScreenButton_do), a.fullScreenButton_do.setY(parseInt((a.stageHeight - a.fullScreenButton_do.buttonHeight) / 2)), a.fullScreenButton_do.addListener(FWDEVPComplexButton.MOUSE_UP, a.fullScreenButtonMouseUpHandler), a.mainHolder_do.addChild(a.fullScreenButton_do)
        }, this.showFullScreenButton = function() {
            a.fullScreenButton_do && a.fullScreenButton_do.setButtonState(1)
        }, this.showNormalScreenButton = function() {
            a.fullScreenButton_do && a.fullScreenButton_do.setButtonState(0)
        }, this.setNormalStateToFullScreenButton = function() {
            a.fullScreenButton_do && (a.fullScreenButton_do.setNormalState(!0), a.hideQualityButtons(!1))
        }, this.fullScreenButtonMouseUpHandler = function() {

            if(1 == a.fullScreenButton_do.currentState){
              $('data.ng-scope').css('display','block');
            }

            1 == a.fullScreenButton_do.currentState ? a.dispatchEvent(l.FULL_SCREEN) : a.dispatchEvent(l.NORMAL_SCREEN)
        }, this.setupTime = function() {
            a.time_do = new FWDEVPDisplayObject("div"), a.time_do.hasTransform3d_bl = !1, a.time_do.hasTransform2d_bl = !1, a.time_do.setBackfaceVisibility(), a.time_do.getStyle().fontFamily = "Arial", a.time_do.getStyle().fontSize = "12px", a.time_do.getStyle().whiteSpace = "nowrap", a.time_do.getStyle().textAlign = "center", a.time_do.getStyle().color = a.timeColor_str, a.time_do.getStyle().fontSmoothing = "antialiased", a.time_do.getStyle().webkitFontSmoothing = "antialiased", a.time_do.getStyle().textRendering = "optimizeLegibility", a.mainHolder_do.addChild(a.time_do), a.updateTime("00:00/00:00"), a.buttons_ar.push(a.time_do)
        }, this.updateTime = function(e) {
            a.time_do && (a.isLive && (e = e.substr(0, e.indexOf("/"))), a.time_do.setInnerHTML(e), a.lastTimeLength != e.length && (a.time_do.w = a.time_do.getWidth(), a.positionButtons(), setTimeout(function() {
                a.time_do.w = a.time_do.getWidth(), a.time_do.h = a.time_do.getHeight(), a.positionButtons()
            }, 50), a.lastTimeLength = e.length))
        }, this.setupVolumeButton = function() {
            a.useFontAwesomeIcons_bl ? (FWDEVPVolumeButton.setPrototype(), a.volumeButton_do = new FWDEVPVolumeButton(void 0, void 0, void 0, void 0, void 0, void 0, "<i class='fas fa-volume-down'></i>", "<i class='fas fa-volume-off'></i>", "EVPMainButtonsNormalState", "EVPMainButtonsSelectedState")) : (FWDEVPVolumeButton.setPrototype(), a.volumeButton_do = new FWDEVPVolumeButton(a.volumeN_img, s.volumeSPath_str, s.volumeDPath_str, a.useHEXColorsForSkin_bl, a.normalButtonsColor_str, a.selectedButtonsColor_str)), a.volumeButton_do.addListener(FWDEVPVolumeButton.MOUSE_UP, a.volumeOnMouseUpHandler), a.volumeButton_do.setX(-1e4), a.volumeButton_do.setY(parseInt((a.stageHeight - a.volumeButton_do.h) / 2)), a.buttons_ar.push(a.volumeButton_do), a.mainHolder_do.addChild(a.volumeButton_do), a.allowToChangeVolume_bl || a.volumeButton_do.disable()
        }, this.volumeOnMouseUpHandler = function() {
            var e = a.lastVolume;
            a.isMute_bl ? (e = a.lastVolume, a.isMute_bl = !1) : (e = 0, a.isMute_bl = !0), a.updateVolume(e)
        }, this.setupVolumeScrubber = function() {
            a.volumeScrubber_do = new FWDEVPDisplayObject("div"), a.volumeScrubber_do.setHeight(a.scrubbersHeight), a.volumeScrubberBkLeft_do = new FWDEVPDisplayObject("img"), a.volumeScrubberBkLeft_do.setScreen(a.volumeScrubberBkLeft_img), a.volumeScrubberBkRight_do = new FWDEVPDisplayObject("img"), a.volumeScrubberBkRight_do.setScreen(a.volumeScrubberBkRight_img), (new Image).src = a.volumeScrubberBkMiddlePath_str, i, a.volumeScrubberBkMiddle_do = new FWDEVPDisplayObject("div"), a.volumeScrubberBkMiddle_do.getStyle().background = "url('" + a.volumeScrubberBkMiddlePath_str + "') repeat-x", a.volumeScrubberBkMiddle_do.setHeight(a.scrubbersHeight), a.volumeScrubberBkMiddle_do.setX(a.scrubbersBkLeftAndRightWidth), a.volumeScrubberDrag_do = new FWDEVPDisplayObject("div"), a.volumeScrubberDrag_do.setHeight(a.scrubbersHeight), a.useHEXColorsForSkin_bl ? (a.volumeScrubberDragLeft_do = new FWDEVPDisplayObject("div"), a.volumeScrubberDragLeft_do.setWidth(a.volumeScrubberDragLeft_img.width), a.volumeScrubberDragLeft_do.setHeight(a.volumeScrubberDragLeft_img.height), a.volumeScrubberDragLeft_canvas = FWDEVPUtils.getCanvasWithModifiedColor(a.volumeScrubberDragLeft_img, a.normalButtonsColor_str).canvas, a.volumeScrubberDragLeft_do.screen.appendChild(a.volumeScrubberDragLeft_canvas)) : (a.volumeScrubberDragLeft_do = new FWDEVPDisplayObject("img"), a.volumeScrubberDragLeft_do.setScreen(a.volumeScrubberDragLeft_img)), a.useHEXColorsForSkin_bl || (a.volumeScrubberDragMiddle_do = new FWDEVPDisplayObject("div"), a.volumeScrubberDragMiddle_do.getStyle().background = "url('" + a.volumeScrubberDragMiddlePath_str + "') repeat-x"), a.volumeScrubberDragMiddle_do.setHeight(a.scrubbersHeight), a.volumeScrubberDragMiddle_do.setX(a.mainScrubberDragLeftWidth), a.volumeScrubberBarLine_do = new FWDEVPDisplayObject("img"), a.volumeScrubberBarLine_do.setScreen(a.volumeScrubberLine_img), a.volumeScrubberBarLine_do.setAlpha(0), a.volumeScrubberBarLine_do.hasTransform3d_bl = !1, a.volumeScrubberBarLine_do.hasTransform2d_bl = !1, a.volumeScrubber_do.setWidth(a.volumeScrubberWidth), a.volumeScrubberBkMiddle_do.setWidth(a.volumeScrubberWidth - 2 * a.scrubbersBkLeftAndRightWidth), a.volumeScrubberBkRight_do.setX(a.volumeScrubberWidth - a.scrubbersBkLeftAndRightWidth), a.volumeScrubberDragMiddle_do.setWidth(a.volumeScrubberWidth - a.scrubbersBkLeftAndRightWidth - a.scrubbersOffsetWidth), a.volumeScrubber_do.addChild(a.volumeScrubberBkLeft_do), a.volumeScrubber_do.addChild(a.volumeScrubberBkMiddle_do), a.volumeScrubber_do.addChild(a.volumeScrubberBkRight_do), a.volumeScrubber_do.addChild(a.volumeScrubberBarLine_do), a.volumeScrubberDrag_do.addChild(a.volumeScrubberDragLeft_do), a.volumeScrubberDrag_do.addChild(a.volumeScrubberDragMiddle_do), a.volumeScrubber_do.addChild(a.volumeScrubberDrag_do), a.volumeScrubber_do.addChild(a.volumeScrubberBarLine_do), a.buttons_ar.push(a.volumeScrubber_do), a.mainHolder_do.addChild(a.volumeScrubber_do), a.disableVideoScrubber_bl || (a.hasPointerEvent_bl ? (a.volumeScrubber_do.screen.addEventListener("pointerover", a.volumeScrubberOnOverHandler), a.volumeScrubber_do.screen.addEventListener("pointerout", a.volumeScrubberOnOutHandler), a.volumeScrubber_do.screen.addEventListener("pointerdown", a.volumeScrubberOnDownHandler)) : a.screen.addEventListener && (a.isMobile_bl || (a.volumeScrubber_do.screen.addEventListener("mouseover", a.volumeScrubberOnOverHandler), a.volumeScrubber_do.screen.addEventListener("mouseout", a.volumeScrubberOnOutHandler), a.volumeScrubber_do.screen.addEventListener("mousedown", a.volumeScrubberOnDownHandler)), a.volumeScrubber_do.screen.addEventListener("touchstart", a.volumeScrubberOnDownHandler))), a.enableVolumeScrubber(), a.updateVolumeScrubber(a.volume)
        }, this.volumeScrubberOnOverHandler = function(e) {
            a.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnOutHandler = function(e) {
            a.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnDownHandler = function(e) {
            if (!a.isVolumeScrubberDisabled_bl && 2 != e.button) {
                e.preventDefault && e.preventDefault();
                var t = FWDEVPUtils.getViewportMouseCoordinates(e).screenX - a.volumeScrubber_do.getGlobalX();
                t < 0 ? t = 0 : t > a.volumeScrubberWidth - a.scrubbersOffsetWidth && (t = a.volumeScrubberWidth - a.scrubbersOffsetWidth);
                var o = t / a.volumeScrubberWidth;
                a.disable_do && a.addChild(a.disable_do), a.lastVolume = o, a.updateVolume(o), a.hasPointerEvent_bl ? (window.addEventListener("pointermove", a.volumeScrubberMoveHandler), window.addEventListener("pointerup", a.volumeScrubberEndHandler)) : (window.addEventListener("mousemove", a.volumeScrubberMoveHandler), window.addEventListener("mouseup", a.volumeScrubberEndHandler), window.addEventListener("touchmove", a.volumeScrubberMoveHandler), window.addEventListener("touchend", a.volumeScrubberEndHandler))
            }
        }, this.volumeScrubberMoveHandler = function(e) {
            if (!a.isVolumeScrubberDisabled_bl) {
                e.preventDefault && e.preventDefault();
                var t = FWDEVPUtils.getViewportMouseCoordinates(e).screenX - a.volumeScrubber_do.getGlobalX();
                t < 0 ? t = 0 : t > a.volumeScrubberWidth - a.scrubbersOffsetWidth && (t = a.volumeScrubberWidth - a.scrubbersOffsetWidth);
                var o = t / a.volumeScrubberWidth;
                a.lastVolume = o, a.updateVolume(o)
            }
        }, this.volumeScrubberEndHandler = function() {
            a.disable_do && a.contains(a.disable_do) && a.removeChild(a.disable_do), a.hasPointerEvent_bl ? (window.removeEventListener("pointermove", a.volumeScrubberMoveHandler), window.removeEventListener("pointerup", a.volumeScrubberEndHandler)) : (window.removeEventListener("mousemove", a.volumeScrubberMoveHandler), window.removeEventListener("mouseup", a.volumeScrubberEndHandler), window.removeEventListener("touchmove", a.volumeScrubberMoveHandler), window.removeEventListener("touchend", a.volumeScrubberEndHandler))
        }, this.disableVolumeScrubber = function() {
            a.isVolumeScrubberDisabled_bl = !0, a.volumeScrubber_do.setButtonMode(!1), a.volumeScrubberEndHandler()
        }, this.enableVolumeScrubber = function() {
            a.isVolumeScrubberDisabled_bl = !1, a.volumeScrubber_do.setButtonMode(!0)
        }, this.updateVolumeScrubber = function(e) {
            var t = parseInt(e * a.volumeScrubberWidth);
            a.volumeScrubberDrag_do.setWidth(t), t < 1 && a.isVolumeScrubberLineVisible_bl ? (a.isVolumeScrubberLineVisible_bl = !1, FWDAnimation.to(a.volumeScrubberBarLine_do, .5, {
                alpha: 0
            })) : 1 < t && !a.isVolumeScrubberLineVisible_bl && (a.isVolumeScrubberLineVisible_bl = !0, FWDAnimation.to(a.volumeScrubberBarLine_do, .5, {
                alpha: 1
            })), t > a.volumeScrubberWidth - a.scrubbersOffsetWidth && (t = a.volumeScrubberWidth - a.scrubbersOffsetWidth), FWDAnimation.to(a.volumeScrubberBarLine_do, .8, {
                x: t + 1,
                ease: Expo.easeOut
            })
        }, this.updateVolume = function(e, t) {
            a.showVolumeScrubber_bl && (a.volume = e, a.volume <= 1e-6 ? (a.isMute_bl = !0, a.volume = 0) : 1 <= a.voume ? (a.isMute_bl = !1, a.volume = 1) : a.isMute_bl = !1, 0 == a.volume ? a.volumeButton_do && a.volumeButton_do.setDisabledState() : a.volumeButton_do && a.volumeButton_do.setEnabledState(), a.volumeScrubberBarLine_do && a.updateVolumeScrubber(a.volume), t || a.dispatchEvent(l.CHANGE_VOLUME, {
                percent: a.volume
            }))
        }, this.show = function(e) {
            a.isShowed_bl || (a.isShowed_bl = !0, e ? FWDAnimation.to(a.mainHolder_do, .8, {
                y: 0,
                ease: Expo.easeInOut
            }) : (FWDAnimation.killTweensOf(a.mainHolder_do), a.mainHolder_do.setY(0)), setTimeout(a.positionButtons, 200))
        }, this.hide = function(e, t) {
            if (a.isShowed_bl || t) {
                a.isShowed_bl = !1;
                var o = 0;
                t && (o = a.mainScrubberOffestTop), e ? FWDAnimation.to(a.mainHolder_do, .8, {
                    y: a.stageHeight + o,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(a.mainHolder_do), a.mainHolder_do.setY(a.stageHeight + o)), a.hideQualityButtons(!0), a.hidePlaybackRateButtons(!0), a.hideSubtitleButtons(!0)
            }
        }, this.updateHexColorForScrubber = function(e) {
            e ? (a.mainScrubberDragMiddle_do.getStyle().background = "url('" + a.mainScrubberDragMiddleAddPath_str + "') repeat-x", a.mainScrubberDragLeft_do.screen.src = s.mainScrubberDragLeftAddPath_str) : (a.mainScrubberDragMiddle_do.getStyle().background = "url('" + a.mainScrubberDragMiddlePath_str + "') repeat-x", a.mainScrubberDragLeft_do.screen.src = a.mainScrubberDragLeftSource)
        }, a.updateHEXColors = function(e, t) {
            a.normalColor_str = e, a.selectedColor_str = t, FWDEVPUtils.changeCanvasHEXColor(a.mainScrubberDragLeft_img, a.mainScrubberDragLeft_canvas, e);
            try {
                FWDEVPUtils.changeCanvasHEXColor(a.volumeScrubberDragLeft_img, a.volumeScrubberDragLeft_canvas, e)
            } catch (e) {}
            var o = FWDEVPUtils.changeCanvasHEXColor(a.mainScrubberMiddleImage, a.mainSCrubberMiddleCanvas, e, !0);
            a.mainScrubberDragMiddle_do.getStyle().background = "url('" + o.src + "') repeat-x";
            try {
                a.volumeScrubberDragMiddle_do && (a.volumeScrubberDragMiddle_do.getStyle().background = "url('" + o.src + "') repeat-x")
            } catch (e) {}
            if (a.playPauseButton_do.updateHEXColors(e, t), a.playbackRateButton_do && a.playbackRateButton_do.updateHEXColors(e, t), a.rewindButton_do && a.rewindButton_do.updateHEXColors(e, t), a.subtitleButton_do && a.subtitleButton_do.updateHEXColors(e, t), a.volumeButton_do && a.volumeButton_do.updateHEXColors(e, t), a.ytbQualityButton_do && a.ytbQualityButton_do.updateHEXColors(e, t), a.shareButton_do && a.shareButton_do.updateHEXColors(e, t), a.embedButton_do && a.embedButton_do.updateHEXColors(e, t), a.fullScreenButton_do && a.fullScreenButton_do.updateHEXColors(e, t), a.time_do && (a.time_do.getStyle().color = e), a.ytbButtons_ar)
                for (var s = 0; s < a.totalYtbButtons; s++) {
                    (i = a.ytbButtons_ar[s]) && (i.normalColor_str = e, i.selectedColor_str = t, i.isSelected_bl ? i.setSelectedState() : i.setNormalState())
                }
            if (a.playbackRateButtons_ar)
                for (s = 0; s < a.playbackRateButtons_ar.length; s++) {
                    (i = a.playbackRateButtons_ar[s]) && (i.normalColor_str = e, i.selectedColor_str = t, i.isSelected_bl ? i.setSelectedState() : i.setNormalState())
                }
            if (a.subtitleButtons_ar)
                for (s = 0; s < a.totalSubttleButtons; s++) {
                    var i;
                    (i = a.subtitleButtons_ar[s]) && (i.normalColor_str = e, i.selectedColor_str = t, i.isSelected_bl ? i.setSelectedState() : i.setNormalState())
                }
        }, this.init()
    };
    l.setPrototype = function() {
        l.prototype = new FWDEVPDisplayObject("div")
    }, l.REWIND = "rewind", l.DOWNLOAD_VIDEO = "downloadVideo", l.SHOW_SUBTITLE = "showSubtitle", l.HIDE_SUBTITLE = "hideSubtitle", l.SHARE = "share", l.FULL_SCREEN = "fullScreen", l.NORMAL_SCREEN = "normalScreen", l.PLAY = "play", l.PAUSE = "pause", l.START_TO_SCRUB = "startToScrub", l.SCRUB = "scrub", l.STOP_TO_SCRUB = "stopToScrub", l.CHANGE_VOLUME = "changeVolume", l.CHANGE_YOUTUBE_QUALITY = "changeYoutubeQuality", l.SHOW_EMBED_WINDOW = "showEmbedWindow", l.CHANGE_SUBTITLE = "changeSubtitle", l.CHANGE_PLAYBACK_RATES = "changePlaybackRates", l.prototype = null, window.FWDEVPController = l
}(window),
function(p) {
    var b = function(e, t, d) {
        var f = this;
        b.prototype;
        this.skipIconPath_img = null, this.mainPreloader_img = null, this.bkLeft_img = null, this.bkMiddle_img = null, this.bkRight_img = null, this.playN_img = null, this.pauseN_img = null, this.mainScrubberBkLeft_img = null, this.mainScrubberBkRight_img = null, this.mainScrubberDragLeft_img = null, this.mainScrubberLine_img = null, this.volumeScrubberBkLeft_img = null, this.volumeScrubberBkRight_img = null, this.volumeScrubberDragLeft_img = null, this.volumeScrubberLine_img = null, this.volumeN_img = null, this.progressLeft_img = null, this.largePlayN_img = null, this.fullScreenN_img = null, this.ytbQualityN_img = null, this.ytbQualityD_img = null, this.shareN_img = null, this.normalScreenN_img = null, this.embedN_img = null, this.embedColoseN_img = null, this.props_obj = e, this.skinPaths_ar = [], this.images_ar = [], this.skinPath_str = null, this.flashPath_str = null, this.flashCopyToCBPath_str = null, this.mainFolderPath_str = null, this.bkMiddlePath_str = null, this.hdPath_str = null, this.youtubeQualityArrowPath_str = null, this.mainScrubberBkMiddlePath_str = null, this.volumeScrubberBkMiddlePath_str = null, this.mainScrubberDragMiddlePath_str = null, this.volumeScrubberDragMiddlePath_str = null, this.timeColor_str = null, this.progressMiddlePath_str = null, this.facebookAppId_str = null, this.ytbQualityButtonPointerPath_str = null, this.youtubeQualityButtonNormalColor_str = null, this.youtubeQualityButtonSelectedColor_str = null, this.controllerBkPath_str = null, this.logoPosition_str = null, this.logoPath_str = null, this.shareAndEmbedTextColor_str = null, this.inputBackgroundColor_str = null, this.borderColor_str = null, this.inputColor_str = null, this.secondaryLabelsColor_str = null, this.mainLabelsColor_str = null, this.embedPathS_str = null, this.embedWindowClosePathS_str = null, this.embedWindowInputBackgroundPath_str = null, this.embedCopyButtonNPath_str = null, this.embedCopyButtonSPath_str = null, this.sendButtonNPath_str = null, this.sendButtonSPath_str = null, this.embedWindowBackground_str = null, this.controllerHeight = 0, this.countLoadedSkinImages = 0, this.volume = 1, this.controllerHideDelay = 0, this.startSpaceBetweenButtons = 0, this.spaceBetweenButtons = 0, this.scrubbersOffsetWidth = 0, this.volumeScrubberOffsetRightWidth = 0, this.timeOffsetLeftWidth = 0, this.timeOffsetTop = 0, this.logoMargins = 0, this.embedWindowCloseButtonMargins = 0, this.loadImageId_to, this.dispatchLoadSkinCompleteWithDelayId_to, this.showEmbedButton_bl, this.showShareButton_bl, this.allowToChangeVolume_bl = !0, this.showContextMenu_bl = !1, this.autoPlay_bl = !1, this.showPoster_bl = !1, this.loop_bl = !1, this.showVolumeScrubber_bl = !1, this.showVolumeButton_bl = !1, this.showControllerWhenVideoIsStopped_bl = !1, this.showLogo_bl = !1, this.hideLogoWithController_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, f.init = function() {
            f.parseProperties()
        }, f.parseProperties = function() {
            if (f.useHEXColorsForSkin_bl = f.props_obj.useHEXColorsForSkin, f.useHEXColorsForSkin_bl = "yes" == f.useHEXColorsForSkin_bl, -1 != location.protocol.indexOf("file:") && (f.useHEXColorsForSkin_bl = !1), f.mainFolderPath_str = f.props_obj.mainFolderPath, f.mainFolderPath_str)
                if (f.mainFolderPath_str.lastIndexOf("/") + 1 != f.mainFolderPath_str.length && (f.mainFolderPath_str += "/"), f.skinPath_str = f.props_obj.skinPath, f.skinPath_str) {
                    f.skinPath_str.lastIndexOf("/") + 1 != f.skinPath_str.length && (f.skinPath_str += "/"), f.skinPath_str = f.mainFolderPath_str + f.skinPath_str, f.flashPath_str = f.mainFolderPath_str + "flashlsChromeless.swf", f.flashCopyToCBPath_str = f.mainFolderPath_str + "cb.swf", f.sendToAFriendPath_str = f.mainFolderPath_str + "sendMailToAFriend.php", f.videoDownloaderPath_str = f.mainFolderPath_str + "downloader.php", f.mailPath_str = f.mainFolderPath_str + "sendMail.php", f.hlsPath_str = f.mainFolderPath_str + "hls.js", f.threeJsPath_str = f.mainFolderPath_str + "three.js", f.threeJsControlsPath_str = f.mainFolderPath_str + "threeControled.js", f.timeColor_str = f.props_obj.timeColor || "#FF0000", f.privateVideoPassword_str = f.props_obj.privateVideoPassword, f.adsVideoSourcePath_str = f.props_obj.adsVideoSourcePath, f.adsPageToOpenURL_str = f.props_obj.adsPageToOpenURL, f.adsPageToOpenTarget_str = f.props_obj.adsPageToOpenTarget || "_blank", f.adsThumbnailPath_str = f.props_obj.adsThumbnailPath, f.youtubeQualityButtonNormalColor_str = f.props_obj.youtubeQualityButtonNormalColor || "#FF0000", f.youtubeQualityButtonSelectedColor_str = f.props_obj.youtubeQualityButtonSelectedColor || "#FF0000", f.posterBackgroundColor_str = f.props_obj.posterBackgroundColor || "transparent", f.logoPosition_str = f.props_obj.logoPosition || "topleft", f.logoPosition_str = String(f.logoPosition_str).toLowerCase(), test = "topleft" == f.logoPosition_str || "topright" == f.logoPosition_str || "bottomleft" == f.logoPosition_str || "bottomright" == f.logoPosition_str, test || (f.logoPosition_str = "topleft"), f.adsButtonsPosition_str = f.props_obj.adsButtonsPosition || "left", f.adsButtonsPosition_str = String(f.adsButtonsPosition_str).toLowerCase(), test = "left" == f.adsButtonsPosition_str || "right" == f.adsButtonsPosition_str, test || (f.adsButtonsPosition_str = "left"), f.rightClickContextMenu_str = f.props_obj.rightClickContextMenu || "developer", test = "developer" == f.rightClickContextMenu_str || "disabled" == f.rightClickContextMenu_str || "default" == f.rightClickContextMenu_str, test || (f.rightClickContextMenu_str = "developer"), f.logoLink_str = f.props_obj.logoLink || "none", f.skipToVideoButtonText_str = f.props_obj.skipToVideoButtonText || "not defined", f.skipToVideoText_str = f.props_obj.skipToVideoText, f.shareAndEmbedTextColor_str = f.props_obj.shareAndEmbedTextColor || "#FF0000", f.inputBackgroundColor_str = f.props_obj.inputBackgroundColor || "#FF0000", f.borderColor_str = f.props_obj.borderColor || "#FF0000", f.inputColor_str = f.props_obj.inputColor || "#FF0000", f.secondaryLabelsColor_str = f.props_obj.secondaryLabelsColor || "#FF0000", f.mainLabelsColor_str = f.props_obj.mainLabelsColor || "#FF0000", f.adsTextNormalColor = f.props_obj.adsTextNormalColor || "#FF0000", f.adsTextSelectedColor = f.props_obj.adsTextSelectedColor || "#FF0000", f.adsBorderNormalColor_str = f.props_obj.adsBorderNormalColor || "#FF0000", f.adsBorderSelectedColor_str = f.props_obj.adsBorderSelectedColor || "#FF0000", f.normalButtonsColor_str = f.props_obj.normalHEXButtonsColor || "#FFFFFF", f.selectedButtonsColor_str = f.props_obj.selectedHEXButtonsColor || "#999999", f.volume = f.props_obj.volume, null == f.volume && (f.volume = 1), isNaN(f.volume) && (volume = 1), 1 < f.volume ? f.volume = 1 : f.volume <= 0 && (f.volume = 0), f.audioVisualizerLinesColor_str = f.props_obj.audioVisualizerLinesColor || "#0099FF", f.audioVisualizerCircleColor_str = f.props_obj.audioVisualizerCircleColor || "#00FF00", f.controllerHeight = f.props_obj.controllerHeight || 50, f.startSpaceBetweenButtons = f.props_obj.startSpaceBetweenButtons || 0, f.controllerHideDelay = f.props_obj.controllerHideDelay || 2, f.controllerHideDelay *= 1e3, f.spaceBetweenButtons = f.props_obj.spaceBetweenButtons || 0, f.scrubbersOffsetWidth = f.props_obj.scrubbersOffsetWidth || 0, f.volumeScrubberOffsetRightWidth = f.props_obj.volumeScrubberOffsetRightWidth || 0, f.timeOffsetLeftWidth = f.props_obj.timeOffsetLeftWidth || 0, f.timeOffsetRightWidth = f.props_obj.timeOffsetRightWidth || 0, f.timeOffsetTop = f.props_obj.timeOffsetTop || 0, f.embedWindowCloseButtonMargins = f.props_obj.embedWindowCloseButtonMargins || 0, f.logoMargins = f.props_obj.logoMargins || 0, f.mainScrubberOffestTop = f.props_obj.mainScrubberOffestTop || 0, f.volumeScrubberWidth = f.props_obj.volumeScrubberWidth || 10, 200 < f.volumeScrubberWidth && (f.volumeScrubberWidth = 200), f.timeToHoldAds = 4, f.greenScreenTolerance = f.props_obj.greenScreenTolerance || 200, f.isMobile_bl && (f.allowToChangeVolume_bl = !1), f.showContextMenu_bl = f.props_obj.showContextMenu, f.showContextMenu_bl = "no" != f.showContextMenu_bl, f.showDefaultControllerForVimeo_bl = f.props_obj.showDefaultControllerForVimeo, f.showDefaultControllerForVimeo_bl = "yes" == f.showDefaultControllerForVimeo_bl, f.addKeyboardSupport_bl = f.props_obj.addKeyboardSupport, f.addKeyboardSupport_bl = "no" != f.addKeyboardSupport_bl, f.autoPlay_bl = f.props_obj.autoPlay, f.autoPlay_bl = "yes" == f.autoPlay_bl, f.scrubAtTimeAtFirstPlay = f.props_obj.scrubAtTimeAtFirstPlay || "00:00:00", f.scrubAtTimeAtFirstPlay = FWDEVPUtils.getSecondsFromString(f.scrubAtTimeAtFirstPlay), f.loop_bl = f.props_obj.loop, f.loop_bl = "yes" == f.loop_bl, f.showSkipButton_bl = !0, f.showLogo_bl = f.props_obj.showLogo, f.showLogo_bl = "yes" == f.showLogo_bl, f.showRewindButton_bl = f.props_obj.showRewindButton, f.showRewindButton_bl = "yes" == f.showRewindButton_bl, f.openDownloadLinkOnMobile_bl = f.props_obj.openDownloadLinkOnMobile, f.openDownloadLinkOnMobile_bl = "yes" == f.openDownloadLinkOnMobile_bl, f.playVideoOnlyWhenLoggedIn_bl = f.props_obj.playVideoOnlyWhenLoggedIn, f.playVideoOnlyWhenLoggedIn_bl = "yes" == f.playVideoOnlyWhenLoggedIn_bl, f.isLoggedIn_bl = f.props_obj.isLoggedIn, f.isLoggedIn_bl = "yes" == f.isLoggedIn_bl, f.useFontAwesomeIcons_bl = f.props_obj.useFontAwesomeIcons, f.useFontAwesomeIcons_bl = "yes" == f.useFontAwesomeIcons_bl, f.loggedInMessage_str = f.props_obj.loggedInMessage || "Only loggedin users can view this video", f.hideLogoWithController_bl = f.props_obj.hideLogoWithController, f.hideLogoWithController_bl = "yes" == f.hideLogoWithController_bl, f.showDefaultControllerForVimeo_bl = f.props_obj.showDefaultControllerForVimeo, f.showDefaultControllerForVimeo_bl = "yes" == f.showDefaultControllerForVimeo_bl, f.aopwSource = f.props_obj.aopwSource, f.aopwBorderSize = f.props_obj.aopwBorderSize || 0, f.aopwTitle = f.props_obj.aopwTitle || "Advertisement", f.aopwTitleColor_str = f.props_obj.aopwTitleColor || "#FFFFFF", f.openerAlignment_str = f.props_obj.openerAlignment, f.openerEqulizerOffsetTop = f.props_obj.openerEqulizerOffsetTop || 0, f.openerEqulizerOffsetLeft = f.props_obj.openerEqulizerOffsetLeft || 0, f.showOpener_bl = f.props_obj.showOpener, f.showOpener_bl = "yes" == f.showOpener_bl, f.showOpenerPlayPauseButton_bl = f.props_obj.showOpenerPlayPauseButton, f.showOpenerPlayPauseButton_bl = "yes" == f.showOpenerPlayPauseButton_bl, f.animate_bl = f.props_obj.animatePlayer, f.animate_bl = "yes" == f.animate_bl, f.aopwWidth = f.props_obj.aopwWidth || 200, f.aopwHeight = f.props_obj.aopwHeight || 200, f.aopwSource && 5 < String(f.aopwSource.length) ? f.showAopwWindow_bl = !0 : f.showAopwWindow_bl = !1, f.fillEntireScreenWithPoster_bl = f.props_obj.fillEntireScreenWithPoster, f.fillEntireScreenWithPoster_bl = "yes" == f.fillEntireScreenWithPoster_bl, f.startAtTime = f.props_obj.startAtTime, "00:00:00" != f.startAtTime && FWDEVPUtils.checkTime(f.startAtTime) || (f.startAtTime = void 0), f.stopAtTime = f.props_obj.stopAtTime, "00:00:00" != f.stopAtTime && FWDEVPUtils.checkTime(f.stopAtTime) || (f.stopAtTime = void 0), f.showPoster_bl = f.props_obj.showPoster, f.showPoster_bl = "yes" == f.showPoster_bl, f.showVolumeScrubber_bl = f.props_obj.showVolumeScrubber, f.showVolumeScrubber_bl = "no" != f.showVolumeScrubber_bl, f.showVolumeButton_bl = f.props_obj.showVolumeButton, f.showVolumeButton_bl = "no" != f.showVolumeButton_bl, f.showControllerWhenVideoIsStopped_bl = f.props_obj.showControllerWhenVideoIsStopped, f.showControllerWhenVideoIsStopped_bl = "yes" == f.showControllerWhenVideoIsStopped_bl, f.showTime_bl = f.props_obj.showTime, f.showTime_bl = "no" != f.showTime_bl, f.showAnnotationsPositionTool_bl = f.props_obj.showAnnotationsPositionTool, f.showAnnotationsPositionTool_bl = "yes" == f.showAnnotationsPositionTool_bl, f.showDownloadVideoButton_bl = f.props_obj.showDownloadButton, f.showDownloadVideoButton_bl = "yes" == f.showDownloadVideoButton_bl, f.showFullScreenButton_bl = f.props_obj.showFullScreenButton, f.showFullScreenButton_bl = "no" != f.showFullScreenButton_bl, f.executeCuepointsOnlyOnce_bl = f.props_obj.executeCuepointsOnlyOnce, f.executeCuepointsOnlyOnce_bl = "yes" == f.executeCuepointsOnlyOnce_bl, f.showAnnotationsPositionTool_bl && (f.showFullScreenButton_bl = !1), f.repeatBackground_bl = f.props_obj.repeatBackground, f.repeatBackground_bl = "no" != f.repeatBackground_bl, f.showShareButton_bl = f.props_obj.showShareButton, f.showShareButton_bl = "no" != f.showShareButton_bl, f.showEmbedButton_bl = f.props_obj.showEmbedButton, f.showEmbedButton_bl = "no" != f.showEmbedButton_bl, f.showController_bl = f.props_obj.showController, f.showController_bl = "no" != f.showController_bl, f.fillEntireVideoScreen_bl = f.props_obj.fillEntireVideoScreen, f.fillEntireVideoScreen_bl = "yes" == f.fillEntireVideoScreen_bl, f.showSubtitileByDefault_bl = f.props_obj.showSubtitleByDefault, f.showSubtitileByDefault_bl = "no" != f.showSubtitileByDefault_bl, f.showPopupAdsCloseButton_bl = f.props_obj.showPopupAdsCloseButton, f.showPopupAdsCloseButton_bl = "no" != f.showPopupAdsCloseButton_bl, f.showSubtitleButton_bl = f.props_obj.showSubtitleButton, f.showSubtitleButton_bl = "no" != f.showSubtitleButton_bl, f.useChromeless_bl = f.props_obj.useChromeless, f.useChromeless_bl = "yes" == f.useChromeless_bl, f.hasAds_bl = f.adsVideoSourcePath_str, f.hasAds_bl = "none" != f.hasAds_bl, f.adsVideoSourcePath_str || (f.hasAds_bl = !1), f.openNewPageAtTheEndOfTheAds_bl = f.props_obj.openNewPageAtTheEndOfTheAds, f.openNewPageAtTheEndOfTheAds_bl = "yes" == f.openNewPageAtTheEndOfTheAds_bl, f.vastXML = f.props_obj.vastSource, f.vastLinearStartTime = f.props_obj.vastLinearStartTime || "00:00:00", f.vastNonLinearStartTime = f.props_obj.vastNonLinearStartTime || "00:00:00", f.vastClickTroughTarget = f.props_obj.vastClickTroughTarget || "_blank", f.redirectURL = f.props_obj.redirectURL, null != f.redirectURL && f.redirectURL.length < 4 && (f.redirectURL = void 0), f.redirectTarget = f.props_obj.redirectTarget || "_self", "_self" != f.redirectTarget && "_blank" != f.redirectTarget && "_parent" != f.redirectTarget && (f.redirectTarget = "_blank"), f.showYoutubeQualityButton_bl = f.props_obj.showQualityButton, f.showYoutubeQualityButton_bl = "no" != f.showYoutubeQualityButton_bl, f.showPlaybackRateButton_bl = f.props_obj.showPlaybackRateButton, f.showPlaybackRateButton_bl = "yes" == f.showPlaybackRateButton_bl, f.defaultPlaybackRate_str = f.props_obj.defaultPlaybackRate, f.defaultPlaybackRate_ar = ["0.25", "0.5", "1", "1.25", "1.5", "2"], f.startAtPlaybackIndex = 3, f.defaultPlaybackRate_ar.reverse();
                    for (var e = !1, t = 0; t < f.defaultPlaybackRate_ar.length; t++) f.defaultPlaybackRate_ar[t] == f.defaultPlaybackRate_str && (e = !0, f.startAtPlaybackIndex = t);
                    e || (f.defaultPlaybackRate_str = 1), f.logoPath_str = f.skinPath_str + "logo.png", f.handPath_str = f.skinPath_str + "hand.cur", f.grabPath_str = f.skinPath_str + "grab.cur", f.props_obj.logoPath && (f.logoPath_str = f.props_obj.logoPath), f.popupAddCloseNPath_str = f.skinPath_str + "close-button-normal.png", f.popupAddCloseSPath_str = f.skinPath_str + "close-button-selected.png", f.annotationAddCloseNPath_str = f.skinPath_str + "annotation-close-button-normal.png", f.annotationAddCloseSPath_str = f.skinPath_str + "annotation-close-button-selected.png", f.adLinePat_str = f.skinPath_str + "ad-line.png", f.playSPath_str = f.skinPath_str + "play-over.png";
                    f.skinPath_str;
                    if (f.pauseSPath_str = f.skinPath_str + "pause-over.png", f.bkMiddlePath_str = f.skinPath_str + "controller-middle.png", f.hdPath_str = f.skinPath_str + "hd.png", f.youtubeQualityArrowPath_str = f.skinPath_str + "youtube-quality-arrow.png", f.ytbQualityButtonPointerPath_str = f.skinPath_str + "youtube-quality-pointer.png", f.controllerBkPath_str = f.skinPath_str + "controller-background.png", f.skipIconSPath_str = f.skinPath_str + "skip-icon-over.png", f.adsBackgroundPath_str = f.skinPath_str + "ads-background.png", f.showSubtitleSPath_str = f.skinPath_str + "show-subtitle-icon-over.png", f.hideSubtitleSPath_str = f.skinPath_str + "hide-subtitle-icon-over.png", f.mainScrubberBkMiddlePath_str = f.skinPath_str + "scrubber-middle-background.png", f.mainScrubberDragMiddlePath_str = f.skinPath_str + "scrubber-middle-drag.png", f.mainScrubberDragLeftAddPath_str = f.skinPath_str + "scrubber-left-drag-add.png", f.mainScrubberDragMiddleAddPath_str = f.skinPath_str + "scrubber-middle-drag-add.png", f.volumeScrubberBkMiddlePath_str = f.skinPath_str + "scrubber-middle-background.png", f.volumeScrubberDragMiddlePath_str = f.skinPath_str + "scrubber-middle-drag.png", f.volumeSPath_str = f.skinPath_str + "volume-over.png", f.volumeDPath_str = f.skinPath_str + "volume-disabled.png", f.largePlayS_str = f.skinPath_str + "large-play-over.png", f.fullScreenSPath_str = f.skinPath_str + "full-screen-over.png", f.ytbQualitySPath_str = f.skinPath_str + "youtube-quality-over.png", f.ytbQualityDPath_str = f.skinPath_str + "youtube-quality-hd.png", f.shareSPath_str = f.skinPath_str + "share-over.png", f.normalScreenSPath_str = f.skinPath_str + "normal-screen-over.png", f.progressMiddlePath_str = f.skinPath_str + "progress-middle.png", f.embedPathS_str = f.skinPath_str + "embed-over.png", f.embedWindowClosePathS_str = f.skinPath_str + "embed-close-button-over.png", f.shareWindowClosePathS_str = f.skinPath_str + "embed-close-button-over.png", f.embedWindowInputBackgroundPath_str = f.skinPath_str + "embed-window-input-background.png", f.embedCopyButtonNPath_str = f.skinPath_str + "embed-copy-button.png", f.embedCopyButtonSPath_str = f.skinPath_str + "embed-copy-button-over.png", f.sendButtonNPath_str = f.skinPath_str + "send-button.png", f.sendButtonSPath_str = f.skinPath_str + "send-button-over.png", f.embedWindowBackground_str = f.skinPath_str + "embed-window-background.png", f.playbackRateSPath_str = f.skinPath_str + "playback-rate-selected.png", f.passButtonNPath_str = f.skinPath_str + "pass-button.png", f.passButtonSPath_str = f.skinPath_str + "pass-button-over.png", f.useFontAwesomeIcons_bl) {
                        var o = document.createElement("link");
                        o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("href", "https://use.fontawesome.com/releases/v5.3.1/css/all.css"), document.getElementsByTagName("head")[0].appendChild(o)
                    }
                    if (f.mainPreloader_img = new Image, f.mainPreloader_img.onerror = f.onSkinLoadErrorHandler, f.mainPreloader_img.onload = f.onPreloaderLoadHandler, f.mainPreloader_img.src = f.skinPath_str + "preloader.jpg", f.annotiationsListId_str = f.props_obj.annotiationsListId, f.annotations_el = FWDEVPUtils.getChildById(f.annotiationsListId_str), f.hasAnnotiations_bl = Boolean(f.annotations_el), f.hasAnnotiations_bl) {
                        var s, i = FWDEVPUtils.getChildren(f.annotations_el);
                        f.annotations_ar = [];
                        var n = i.length;
                        for (t = 0; t < n; t++) {
                            var l = {};
                            s = i[t], l.start = FWDEVPSubtitle.getDuration(FWDEVPUtils.getAttributeValue(s, "data-start-time")), l.end = FWDEVPSubtitle.getDuration(FWDEVPUtils.getAttributeValue(s, "data-end-time")), l.left = parseInt(FWDEVPUtils.getAttributeValue(s, "data-left"), 10), l.top = parseInt(FWDEVPUtils.getAttributeValue(s, "data-top"), 10), l.showCloseButton_bl = "yes" == FWDEVPUtils.getAttributeValue(s, "data-show-close-button"), l.clickSource = FWDEVPUtils.getAttributeValue(s, "data-click-source"), l.clickSourceTarget = FWDEVPUtils.getAttributeValue(s, "data-click-source-target"), l.normalStateClass = FWDEVPUtils.getAttributeValue(s, "data-normal-state-class"), l.selectedStateClass = FWDEVPUtils.getAttributeValue(s, "data-selected-state-class"), l.content = s.innerHTML, f.annotations_ar[t] = l
                        }
                        try {
                            f.annotations_el.parentNode.removeChild(f.annotations_el)
                        } catch (e) {}
                    }
                    if (f.startAtVideoSource = f.props_obj.startAtVideoSource || 0, f.videoSource_ar = f.props_obj.videoSource, f.videoSource_ar) {
                        f.videosSource_ar = [], f.videoLabels_ar = [];
                        for (t = 0; t < f.videoSource_ar.length; t++) {
                            (l = {}).source = f.videoSource_ar[t].source, l.videoType = f.videoSource_ar[t].videoType || "normal", l.label = f.videoSource_ar[t].label, f.videoSource_ar[t].videoType = l.videoType, l.isLive = f.videoSource_ar[t].isLive || "no", l.isLive = "yes" == l.isLive, f.videoLabels_ar[t] = f.videoSource_ar[t].label, l.isPrivate = f.videoSource_ar[t].isPrivate || "no", l.isPrivate = "yes" == l.isPrivate, f.videosSource_ar[t] = l
                        }
                        f.videoLabels_ar.reverse(), f.startAtVideoSource > f.videoLabels_ar.length - 1 && (f.startAtVideoSource = f.videoLabels_ar.length - 1)
                    }
                    if (!f.videosSource_ar || f.videoLabels_ar && 0 == f.videoSource_ar.length) setTimeout(function() {
                        null != f && (errorMessage_str = "Please specify at least a video source!", f.dispatchEvent(b.LOAD_ERROR, {
                            text: errorMessage_str
                        }))
                    }, 100);
                    else {
                        if (-1 == f.videoSource_ar[f.startAtVideoSource].source.indexOf(".mp4") && (f.showDownloadVideoButton_bl = !1), f.startAtSubtitle = f.props_obj.startAtSubtitle || 0, f.subtitlesSource_ar = f.props_obj.subtitlesSource, f.subtitlesOffLabel_str = f.props_obj.subtitlesOffLabel || "Subtitle off", f.subtitlesSource_ar) {
                            f.subtitles_ar = [];
                            for (t = 0; t < f.subtitlesSource_ar.length; t++) {
                                (l = {}).source = f.subtitlesSource_ar[t].subtitlePath, -1 != l.source.indexOf("encrypt:") && (l.source = atob(l.source.substr(8))), l.label = f.subtitlesSource_ar[t].subtileLabel, f.subtitles_ar[t] = l
                            }
                            f.subtitles_ar.splice(0, 0, {
                                source: "none",
                                label: f.subtitlesOffLabel_str
                            }), f.subtitles_ar.reverse()
                        }
                        if (f.subtitlesSource_ar || (f.showSubtitleButton_bl = !1), f.subtitlesSource_ar && 1 == f.subtitlesSource_ar.length && (f.showSubtitleButton_bl = !1), f.popupAds_ar = f.props_obj.popupCommercialAdsSource, f.popupAds_ar)
                            for (t = 0; t < f.popupAds_ar.length; t++) f.popupAds_ar[t].timeStart = FWDEVPUtils.getSecondsFromString(f.popupAds_ar[t].timeStart), f.popupAds_ar[t].timeEnd = FWDEVPUtils.getSecondsFromString(f.popupAds_ar[t].timeEnd), f.popupAds_ar[t].google_ad_width = f.popupAds_ar[t].google_ad_width || 600, f.popupAds_ar[t].google_ad_height = f.popupAds_ar[t].google_ad_height || 200;
                        if (f.ads_ar = f.props_obj.adsSource, f.adsSource_ar = [], f.ads_ar)
                            for (t = 0; t < f.ads_ar.length; t++) {
                                var r = {};
                                r.timeStart = FWDEVPUtils.getSecondsFromString(f.ads_ar[t].timeStart), r.addDuration = FWDEVPUtils.getSecondsFromString(f.ads_ar[t].addDuration) || 10, r.thumbnailSource = f.ads_ar[t].thumbnailSource, r.timeToHoldAds = f.ads_ar[t].timeToHoldAds || 0, r.source = f.ads_ar[t].source, r.link = f.ads_ar[t].link, r.target = f.ads_ar[t].target, f.adsSource_ar[t] = r
                            }
                        if (f.cuePoints_ar = f.props_obj.cuepoints, f.cuePointsSource_ar = [], f.cuePoints_ar)
                            for (t = 0; t < f.cuePoints_ar.length; t++) {
                                var a = {};
                                a.timeStart = FWDEVPUtils.getSecondsFromString(f.cuePoints_ar[t].timeStart), a.javascriptCall = f.cuePoints_ar[t].javascriptCall, a.isPlayed_bl = !1, f.cuePointsSource_ar[t] = a
                            }
                        f.useChromeless_bl || (f.skinPaths_ar = [{
                            img: f.largePlayN_img = new Image,
                            src: (f.props_obj.instanceName.indexOf('MainPlayer') > -1 ) ? f.skinPath_str + "large-play.png" : f.skinPath_str + "scrubber-line.png"
                            // src: f.skinPath_str + "large-play.png"
                        }, {
                            img: f.skipIconPath_img = new Image,
                            src: f.skinPath_str + "skip-icon.png"
                        }], f.showController_bl && f.skinPaths_ar.push({
                            img: f.mainScrubberBkLeft_img = new Image,
                            src: f.skinPath_str + "scrubber-left-background.png"
                        }, {
                            img: f.mainScrubberBkRight_img = new Image,
                            src: f.skinPath_str + "scrubber-right-background.png"
                        }, {
                            img: f.mainScrubberDragLeft_img = new Image,
                            src: f.skinPath_str + "scrubber-left-drag.png"
                        }, {
                            img: f.mainScrubberLine_img = new Image,
                            src: f.skinPath_str + "scrubber-line.png"
                        }, {
                            img: f.volumeScrubberBkLeft_img = new Image,
                            src: f.skinPath_str + "scrubber-left-background.png"
                        }, {
                            img: f.volumeScrubberBkRight_img = new Image,
                            src: f.skinPath_str + "scrubber-right-background.png"
                        }, {
                            img: f.volumeScrubberDragLeft_img = new Image,
                            src: f.skinPath_str + "scrubber-left-drag.png"
                        }, {
                            img: f.volumeScrubberLine_img = new Image,
                            src: f.skinPath_str + "scrubber-line.png"
                        }, {
                            img: f.progressLeft_img = new Image,
                            src: f.skinPath_str + "progress-left.png"
                        }), f.showOpener_bl && d.displayType == FWDEVPlayer.STICKY && (f.skinPaths_ar.push({
                            img: f.openerPauseN_img = new Image,
                            src: f.skinPath_str + "open-pause-button-normal.png"
                        }, {
                            img: f.openerPlayN_img = new Image,
                            src: f.skinPath_str + "open-play-button-normal.png"
                        }, {
                            img: f.animationPath_img = new Image,
                            src: f.skinPath_str + "equalizer.png"
                        }, {
                            img: f.closeN_img = new Image,
                            src: f.skinPath_str + "opener-close.png"
                        }, {
                            img: f.openTopN_img = new Image,
                            src: f.skinPath_str + "open-button-normal-top.png"
                        }, {
                            img: f.openBottomN_img = new Image,
                            src: f.skinPath_str + "open-button-normal-bottom.png"
                        }), f.openerPauseS_str = f.skinPath_str + "open-pause-button-selected.png", f.openerPlayS_str = f.skinPath_str + "open-play-button-selected.png", f.openerAnimationPath_str = f.skinPath_str + "equalizer.png", f.openTopSPath_str = f.skinPath_str + "open-button-selected-top.png", f.openBottomSPath_str = f.skinPath_str + "open-button-selected-bottom.png", f.openTopSPath_str = f.skinPath_str + "open-button-selected-top.png", f.openBottomSPath_str = f.skinPath_str + "open-button-selected-bottom.png", f.closeSPath_str = f.skinPath_str + "opener-close-over.png"), f.showRewindButton_bl && (f.skinPaths_ar.push({
                            img: f.rewindN_img = new Image,
                            src: f.skinPath_str + "rewind.png"
                        }), f.rewindSPath_str = f.skinPath_str + "rewind-over.png"), f.showShareButton_bl && (f.shareSPath_str = f.skinPath_str + "share-over.png", f.facebookSPath_str = f.skinPath_str + "facebook-over.png", f.googleSPath_str = f.skinPath_str + "google-plus-over.png", f.twitterSPath_str = f.skinPath_str + "twitter-over.png", f.likedInSPath_str = f.skinPath_str + "likedin-over.png", f.bufferSPath_str = f.skinPath_str + "buffer-over.png", f.diggSPath_str = f.skinPath_str + "digg-over.png", f.redditSPath_str = f.skinPath_str + "reddit-over.png", f.thumbrlSPath_str = f.skinPath_str + "thumbrl-over.png")), f.useFontAwesomeIcons_bl || (f.skinPaths_ar.push({
                            img: f.playN_img = new Image,
                            src: f.skinPath_str + "play.png"
                        }, {
                            img: f.pauseN_img = new Image,
                            src: f.skinPath_str + "pause.png"
                        }, {
                            img: f.volumeN_img = new Image,
                            src: f.skinPath_str + "volume.png"
                        }, {
                            img: f.downloadN_img = new Image,
                            src: f.skinPath_str + "download-button.png"
                        }, {
                            img: f.fullScreenN_img = new Image,
                            src: f.skinPath_str + "full-screen.png"
                        }, {
                            img: f.ytbQualityN_img = new Image,
                            src: f.skinPath_str + "youtube-quality.png"
                        }, {
                            img: f.normalScreenN_img = new Image,
                            src: f.skinPath_str + "normal-screen.png"
                        }, {
                            img: f.embedN_img = new Image,
                            src: f.skinPath_str + "embed.png"
                        }, {
                            img: f.embedColoseN_img = new Image,
                            src: f.skinPath_str + "embed-close-button.png"
                        }, {
                            img: f.passColoseN_img = new Image,
                            src: f.skinPath_str + "embed-close-button.png"
                        }, {
                            img: f.showSubtitleNPath_img = new Image,
                            src: f.skinPath_str + "show-subtitle-icon.png"
                        }, {
                            img: f.hideSubtitleNPath_img = new Image,
                            src: f.skinPath_str + "hide-subtitle-icon.png"
                        }, {
                            img: f.playbackRateNPath_img = new Image,
                            src: f.skinPath_str + "playback-rate-normal.png"
                        }), f.showShareButton_bl && f.skinPaths_ar.push({
                            img: f.shareN_img = new Image,
                            src: f.skinPath_str + "share.png"
                        }, {
                            img: f.shareClooseN_img = new Image,
                            src: f.skinPath_str + "embed-close-button.png"
                        }, {
                            img: f.facebookN_img = new Image,
                            src: f.skinPath_str + "facebook.png"
                        }, {
                            img: f.googleN_img = new Image,
                            src: f.skinPath_str + "google-plus.png"
                        }, {
                            img: f.twitterN_img = new Image,
                            src: f.skinPath_str + "twitter.png"
                        }, {
                            img: f.likedInkN_img = new Image,
                            src: f.skinPath_str + "likedin.png"
                        }, {
                            img: f.bufferkN_img = new Image,
                            src: f.skinPath_str + "buffer.png"
                        }, {
                            img: f.diggN_img = new Image,
                            src: f.skinPath_str + "digg.png"
                        }, {
                            img: f.redditN_img = new Image,
                            src: f.skinPath_str + "reddit.png"
                        }, {
                            img: f.thumbrlN_img = new Image,
                            src: f.skinPath_str + "thumbrl.png"
                        })), f.downloadSPath_str = f.skinPath_str + "download-button-over.png", f.showHelpScreen_bl && f.skinPaths_ar.push({
                            img: f.helpScreen_img = new Image,
                            src: f.skinPath_str + f.helpScreenPath_str
                        }, {
                            img: f.pauseN_img = new Image,
                            src: f.skinPath_str + "ok-button.png"
                        }), f.showAopwWindow_bl && (f.skinPaths_ar.push({
                            img: f.popwColseN_img = new Image,
                            src: f.skinPath_str + "popw-close-button.png"
                        }), f.popwColseSPath_str = f.skinPath_str + "popw-close-button-over.png", f.popwWindowBackgroundPath_str = f.skinPath_str + "popw-window-background.png", f.popwBarBackgroundPath_str = f.skinPath_str + "popw-bar-background.png"), f.totalGraphics = f.skinPaths_ar.length
                    }
                } else setTimeout(function() {
                    null != f && (errorMessage_str = "The <font color='#FF0000'>skinPath</font> property is not defined in the constructor function!", f.dispatchEvent(b.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50);
            else setTimeout(function() {
                null != f && (errorMessage_str = "The <font color='#FF0000'>mainFolderPath</font> property is not defined in the constructor function!", f.dispatchEvent(b.LOAD_ERROR, {
                    text: errorMessage_str
                }))
            }, 50)
        }, this.onPreloaderLoadHandler = function() {
            setTimeout(function() {
                f.dispatchEvent(b.PRELOADER_LOAD_DONE), f.useChromeless_bl ? setTimeout(function() {
                    f.dispatchEvent(b.SKIN_LOAD_COMPLETE)
                }, 50) : f.loadSkin()
            }, 50)
        }, f.loadSkin = function() {
            for (var e, t, o = 0; o < f.totalGraphics; o++) e = f.skinPaths_ar[o].img, t = f.skinPaths_ar[o].src, e.onload = f.onSkinLoadHandler, e.onerror = f.onSkinLoadErrorHandler, e.src = t
        }, this.onSkinLoadHandler = function(e) {
            f.countLoadedSkinImages++, f.countLoadedSkinImages == f.totalGraphics && setTimeout(function() {
                f.dispatchEvent(b.SKIN_LOAD_COMPLETE)
            }, 50)
        }, f.onSkinLoadErrorHandler = function(e) {
            FWDEVPUtils.isIEAndLessThen9 ? message = "Graphics image not found!" : message = "The skin graphics with label <font color='#FF0000'>" + e.target.src + "</font> can't be loaded, check path!", p.console && console.log(e);
            var t = {
                text: message
            };
            setTimeout(function() {
                f.dispatchEvent(b.LOAD_ERROR, t)
            }, 50)
        }, f.onSkinLoadHandlersss = function(e) {
            f.countLoadedSkinImages++, f.countLoadedSkinImages < f.totalGraphics ? FWDEVPUtils.isIEAndLessThen9 ? f.loadImageId_to = setTimeout(f.loadSkin, 16) : f.loadSkin() : setTimeout(function() {
                f.dispatchEvent(b.SKIN_LOAD_COMPLETE)
            }, 50)
        }, this.downloadVideo = function(e, t) {
            var o = e,
                s = location.origin,
                i = location.pathname;
            if (-1 != i.indexOf(".") && (i = i.substr(0, i.lastIndexOf("/") + 1)), -1 == e.indexOf("http:") || -1 == e.indexOf("https:") || (e = s + i + e), "file:" == document.location.protocol) return f.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function() {
                f.dispatchEvent(b.LOAD_ERROR, {
                    text: "Downloading video files local is not allowed or possible! To function properly please test online."
                }), f.isPlaylistDispatchingError_bl = !1
            }, 50));
            if (!e) return f.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function() {
                f.dispatchEvent(b.LOAD_ERROR, {
                    text: "Not allowed to download this video!"
                }), f.isPlaylistDispatchingError_bl = !1
            }, 50));
            if (-1 == String(e.indexOf(".mp4"))) return f.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function() {
                f.dispatchEvent(b.LOAD_ERROR, {
                    text: "Only mp4 video files hosted on your server can be downloaded."
                }), f.isPlaylistDispatchingError_bl = !1
            }, 50));
            40 < (t = t.replace(/[^A-Z0-9\-\_\.]+/gi, "_")).length && (t = t.substr(0, 40) + "..."), e = encodeURIComponent(e);
            var n = f.videoDownloaderPath_str;
            if (f.dlIframe || (f.dlIframe = document.createElement("IFRAME"), f.dlIframe.style.display = "none", document.documentElement.appendChild(f.dlIframe)), f.isMobile_bl) {
                if (f.openDownloadLinkOnMobile_bl) return void p.open(o, "_blank");
                var l = f.getValidEmail();
                if (!l) return;
                if (null != f.emailXHR) {
                    try {
                        f.emailXHR.abort()
                    } catch (e) {}
                    f.emailXHR.onreadystatechange = null, f.emailXHR.onerror = null, f.emailXHR = null
                }
                return f.emailXHR = new XMLHttpRequest, f.emailXHR.onreadystatechange = function(e) {
                    4 == f.emailXHR.readyState && (200 == f.emailXHR.status ? "sent" == f.emailXHR.responseText ? alert("Email sent.") : alert("Error sending email, this is a server side error, the php file can't send the email!") : alert("Error sending email: " + f.emailXHR.status + ": " + f.emailXHR.statusText))
                }, f.emailXHR.onerror = function(e) {
                    try {
                        p.console && console.log(e), p.console && console.log(e.message)
                    } catch (e) {}
                    alert("Error sending email: " + e.message)
                }, f.emailXHR.open("get", f.mailPath_str + "?mail=" + l + "&name=" + t + "&path=" + e, !0), void f.emailXHR.send()
            }
            f.dlIframe.src = n + "?path=" + e + "&name=" + t
        }, this.getValidEmail = function() {
            for (var e = prompt("Please enter your email address where the video download link will be sent:"), t = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; !t.test(e) || "" == e;) {
                if (null === e) return;
                e = prompt("Please enter a valid email address:")
            }
            return e
        }, this.loadVast = function(e) {
            var _, c = [];
            f.vastXHR = new XMLHttpRequest, f.vastXHR.onreadystatechange = function(e) {
                if (4 == f.vastXHR.readyState)
                    if (200 == f.vastXHR.status) {
                        var t = FWDEVPUtils.xmlToJson(f.vastXHR.responseXML).VAST;
                        if (!t.Ad) return void f.dispatchEvent(b.LOAD_ERROR, {
                            text: "No <font color='#FF0000'> &lt;ad&gt; </font> tag was found in the VAST xml file."
                        });
                        t.Ad.length || (t.Ad = [t.Ad]);
                        for (var o = 0; o < t.Ad.length; o++) {
                            if ((_ = {}).id = t.Ad[o]["@attributes"].id, _.sequence = t.Ad[o]["@attributes"].sequence, _.startTime = t.Ad[o]["@attributes"].startTime, _.sequence || (_.sequence = o), !t.Ad[o].InLine) return void f.dispatchEvent(b.LOAD_ERROR, {
                                text: "No <font color='#FF0000'> &lt;InLine&gt; </font>tag was found in the VAST xml file."
                            });
                            if (_.InLine = {}, _.InLine.Impression = void 0, t.Ad[o].InLine.Impression && (t.Ad[o].InLine.Impression["#cdata-section"] ? _.InLine.Impression = t.Ad[o].InLine.Impression["#cdata-section"] : _.InLine.Impression = t.Ad[o].InLine.Impression["#text"]), t.Ad[o].InLine.Creatives.Creative.length || (t.Ad[o].InLine.Creatives.Creative = [t.Ad[o].InLine.Creatives.Creative]), t.Ad[o].InLine.Creatives.Creative.length)
                                for (var s = 0; s < t.Ad[o].InLine.Creatives.Creative.length; s++)
                                    if (t.Ad[o].InLine.Creatives.Creative[s].Linear) {
                                        t.Ad[o].InLine.Creatives.Creative[s].Linear.MediaFiles.MediaFile.length || (t.Ad[o].InLine.Creatives.Creative[s].Linear.MediaFiles.MediaFile = [t.Ad[o].InLine.Creatives.Creative[s].Linear.MediaFiles.MediaFile]), _.InLine.Linear = {};
                                        for (var i = [], n = 0; n < t.Ad[o].InLine.Creatives.Creative[s].Linear.MediaFiles.MediaFile.length; n++) i.push(t.Ad[o].InLine.Creatives.Creative[s].Linear.MediaFiles.MediaFile[n]);
                                        var l = 0;
                                        e: for (var r = 0; r < i.length; r++)
                                            if (p.innerWidth >= i[r]["@attributes"].width) {
                                                l = r;
                                                break e
                                            }
                                        if (i[l]["#cdata-section"] ? _.InLine.Linear.videoSource = i[l]["#cdata-section"] : _.InLine.Linear.videoSource = i[l]["#text"], t.Ad[o].InLine.Creatives.Creative[s].Linear.Duration && (t.Ad[o].InLine.Creatives.Creative[s].Linear.Duration["#cdata-section"] ? _.InLine.Linear.Duration = t.Ad[o].InLine.Creatives.Creative[s].Linear.Duration["#cdata-section"] : t.Ad[o].InLine.Creatives.Creative[s].Linear.Duration["#text"] && (_.InLine.Linear.Duration = t.Ad[o].InLine.Creatives.Creative[s].Linear.Duration["#text"])), _.InLine.Linear.skipoffset = void 0, t.Ad[o].InLine.Creatives.Creative[s].Linear["@attributes"] && t.Ad[o].InLine.Creatives.Creative[s].Linear["@attributes"].skipoffset && (_.InLine.Linear.skipoffset = t.Ad[o].InLine.Creatives.Creative[s].Linear["@attributes"].skipoffset), _.InLine.Linear.skipoffset && (_.InLine.Linear.skipoffset = _.InLine.Linear.skipoffset.substr(0, 8), _.InLine.Linear.Duration && -1 != _.InLine.Linear.skipoffset.indexOf("%"))) {
                                            var a = Math.round(FWDEVPUtils.getSecondsFromString(_.InLine.Linear.Duration) * (_.InLine.Linear.skipoffset.substr(0, _.InLine.Linear.skipoffset.length - 1) / 100));
                                            _.InLine.Linear.skipoffset = FWDEVPUtils.formatTime(a, !0)
                                        }
                                        if (_.InLine.Linear.skipoffset && (_.InLine.Linear.skipoffset = FWDEVPUtils.getSecondsFromString(_.InLine.Linear.skipoffset), _.InLine.Linear.Duration && FWDEVPUtils.getSecondsFromString(_.InLine.Linear.Duration) <= _.InLine.Linear.skipoffset && (_.InLine.Linear.skipoffset = void 0)), _.InLine.Linear.TrackingEvents = void 0, t.Ad[o].InLine.Creatives.Creative[s].Linear.TrackingEvents.Tracking) {
                                            _.InLine.Linear.TrackingEvents = [];
                                            for (var d = 0; d < t.Ad[o].InLine.Creatives.Creative[s].Linear.TrackingEvents.Tracking.length; d++) _.InLine.Linear.TrackingEvents.push({
                                                event: t.Ad[o].InLine.Creatives.Creative[s].Linear.TrackingEvents.Tracking[d]["@attributes"].event
                                            }), t.Ad[o].InLine.Creatives.Creative[s].Linear.TrackingEvents.Tracking[d]["#cdata-section"] ? _.InLine.Linear.TrackingEvents[d].URI = t.Ad[o].InLine.Creatives.Creative[s].Linear.TrackingEvents.Tracking[d]["#cdata-section"] : _.InLine.Linear.TrackingEvents[d].URI = t.Ad[o].InLine.Creatives.Creative[s].Linear.TrackingEvents.Tracking[d]["#text"]
                                        }
                                        t.Ad[o].InLine.Creatives.Creative[s].Linear.VideoClicks && (t.Ad[o].InLine.Creatives.Creative[s].Linear.VideoClicks.ClickThrough && ((_.InLine.Linear.ClickThrough = t.Ad[o].InLine.Creatives.Creative[s].Linear.VideoClicks.ClickThrough["#cdata-section"]) ? _.InLine.Linear.ClickThrough = t.Ad[o].InLine.Creatives.Creative[s].Linear.VideoClicks.ClickThrough["#cdata-section"] : _.InLine.Linear.ClickThrough = t.Ad[o].InLine.Creatives.Creative[s].Linear.VideoClicks.ClickThrough["#text"]), t.Ad[o].InLine.Creatives.Creative[s].Linear.VideoClicks.ClickTracking && (t.Ad[o].InLine.Creatives.Creative[s].Linear.VideoClicks.ClickTracking["#cdata-section"] ? _.InLine.Linear.ClickTracking = t.Ad[o].InLine.Creatives.Creative[s].Linear.VideoClicks.ClickTracking["#cdata-section"] : _.InLine.Linear.ClickTracking = t.Ad[o].InLine.Creatives.Creative[s].Linear.VideoClicks.ClickTracking["#text"]))
                                    } c.push(_)
                        }
                        FWDEVPUtils.storArrayBasedOnObjectValue(c, "sequence");
                        var u = [];
                        for (o = 0; o < c.length; o++) {
                            var h = {};
                            h.source = c[o].InLine.Linear.videoSource, h.timeStart = FWDEVPUtils.getSecondsFromString(f.vastLinearStartTime), c[o].startTime && (h.timeStart = FWDEVPUtils.getSecondsFromString(c[o].startTime)), c[o].InLine.Linear.skipoffset && (h.timeToHoldAds = c[o].InLine.Linear.skipoffset), h.link = c[o].InLine.Linear.ClickThrough, c[o].InLine.Linear.ClickTracking && (h.ClickTracking = c[o].InLine.Linear.ClickTracking), h.target = f.vastClickTroughTarget, c[o].InLine.Impression && (h.Impression = c[o].InLine.Impression), c[o].InLine.Linear.TrackingEvents && (h.TrackingEvents = c[o].InLine.Linear.TrackingEvents), u.push(h)
                        }
                        f.adsSource_ar = u, f.isVastXMLParsed_bl = !0, f.dispatchEvent(b.VAST_LOADED, {
                            ads: u
                        })
                    } else f.dispatchEvent(b.LOAD_ERROR, {
                        text: "vast XML file can't be loaded " + f.vastXHR.statusText
                    })
            }, f.vastXHR.onerror = function(e) {
                try {
                    p.console && console.log(e), p.console && console.log(e.message)
                } catch (e) {}
            }, -1 == e.indexOf("http") && -1 == e.indexOf("https") || (e = "https://cors-anywhere.herokuapp.com/" + e), f.vastXHR.open("get", e, !0), f.vastXHR.send()
        }, f.showPropertyError = function(e) {
            f.dispatchEvent(b.LOAD_ERROR, {
                text: "The property called <font color='#FF0000'>" + e + "</font> is not defined."
            })
        }, f.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDEVPEventDispatcher
    }, b.prototype = null, b.VAST_LOADED = "vastLoaded", b.PRELOADER_LOAD_DONE = "onPreloaderLoadDone", b.LOAD_DONE = "onLoadDone", b.LOAD_ERROR = "onLoadError", b.IMAGE_LOADED = "onImageLoaded", b.SKIN_LOAD_COMPLETE = "onSkinLoadComplete", b.SKIN_PROGRESS = "onSkinProgress", b.IMAGES_PROGRESS = "onImagesPogress", p.FWDEVPData = b
}(window), window.FWDEVPDisplayObject = function(e, t, o, s) {
        var i = this;
        if (i.listeners = {
                events_ar: []
            }, "div" != e && "img" != e && "canvas" != e && "input" != e && "iframe" != e) throw Error("Type is not valid! " + e);
        i.type = e, this.children_ar = [], this.style, this.screen, this.transform, this.position = t || "absolute", this.overflow = o || "hidden", this.display = s || "inline-block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDEVPUtils.hasTransform3d, this.hasTransform2d_bl = FWDEVPUtils.hasTransform2d, (FWDEVPUtils.isFirefox || FWDEVPUtils.isIE) && (i.hasTransform3d_bl = !1), (FWDEVPUtils.isFirefox || FWDEVPUtils.isIE) && (i.hasTransform2d_bl = !1), this.hasBeenSetSelectable_bl = !1, i.init = function() {
            i.setScreen()
        }, i.getTransform = function() {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; e = t.shift();)
                if (void 0 !== i.screen.style[e]) return e;
            return !1
        }, i.getOpacityType = function() {
            return void 0 !== i.screen.style.opacity ? "opacity" : "filter"
        }, i.setScreen = function(e) {
            "img" == i.type && e ? i.screen = e : i.screen = document.createElement(i.type), i.setMainProperties()
        }, i.setMainProperties = function() {
            i.transform = i.getTransform(), i.setPosition(i.position), i.setOverflow(i.overflow), i.opacityType = i.getOpacityType(), "opacity" == i.opacityType && (i.isHtml5_bl = !0), "filter" == i.opacityType && (i.screen.style.filter = "inherit"), i.screen.style.left = "0px", i.screen.style.top = "0px", i.screen.style.margin = "0px", i.screen.style.padding = "0px", i.screen.style.maxWidth = "none", i.screen.style.maxHeight = "none", i.screen.style.border = "none", i.screen.style.lineHeight = "1", i.screen.style.backgroundColor = "transparent", i.screen.style.backfaceVisibility = "hidden", i.screen.style.webkitBackfaceVisibility = "hidden", i.screen.style.MozBackfaceVisibility = "hidden", i.screen.style.MozImageRendering = "optimizeSpeed", i.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == e && (i.setWidth(i.screen.width), i.setHeight(i.screen.height))
        }, i.setBackfaceVisibility = function() {
            i.screen.style.backfaceVisibility = "visible", i.screen.style.webkitBackfaceVisibility = "visible", i.screen.style.MozBackfaceVisibility = "visible"
        }, i.setSelectable = function(e) {
            e ? (FWDEVPUtils.isFirefox || FWDEVPUtils.isIE ? (i.screen.style.userSelect = "element", i.screen.style.MozUserSelect = "element", i.screen.style.msUserSelect = "element") : FWDEVPUtils.isSafari ? (i.screen.style.userSelect = "text", i.screen.style.webkitUserSelect = "text") : (i.screen.style.userSelect = "auto", i.screen.style.webkitUserSelect = "auto"), i.screen.style.khtmlUserSelect = "auto", i.screen.style.oUserSelect = "auto", FWDEVPUtils.isIEAndLessThen9 ? (i.screen.ondragstart = null, i.screen.onselectstart = null, i.screen.ontouchstart = null) : (i.screen.ondragstart = void 0, i.screen.onselectstart = void 0, i.screen.ontouchstart = void 0), i.screen.style.webkitTouchCallout = "default", i.hasBeenSetSelectable_bl = !1) : (i.screen.style.userSelect = "none", i.screen.style.MozUserSelect = "none", i.screen.style.webkitUserSelect = "none", i.screen.style.khtmlUserSelect = "none", i.screen.style.oUserSelect = "none", i.screen.style.msUserSelect = "none", i.screen.msUserSelect = "none", i.screen.ondragstart = function(e) {
                return !1
            }, i.screen.onselectstart = function() {
                return !1
            }, i.screen.ontouchstart = function() {
                return !1
            }, i.screen.style.webkitTouchCallout = "none", i.hasBeenSetSelectable_bl = !0)
        }, i.getScreen = function() {
            return i.screen
        }, i.setVisible = function(e) {
            i.visible = e, 1 == i.visible ? i.screen.style.visibility = "visible" : i.screen.style.visibility = "hidden"
        }, i.getVisible = function() {
            return i.visible
        }, i.setResizableSizeAfterParent = function() {
            i.screen.style.width = "100%", i.screen.style.height = "100%"
        }, i.getStyle = function() {
            return i.screen.style
        }, i.setOverflow = function(e) {
            i.overflow = e, i.screen.style.overflow = i.overflow
        }, i.setPosition = function(e) {
            i.position = e, i.screen.style.position = i.position
        }, i.setDisplay = function(e) {
            i.display = e, i.screen.style.display = i.display
        }, i.setButtonMode = function(e) {
            i.buttonMode = e, 1 == i.buttonMode ? i.screen.style.cursor = "pointer" : i.screen.style.cursor = "default"
        }, i.setBkColor = function(e) {
            i.screen.style.backgroundColor = e
        }, i.setInnerHTML = function(e) {
            i.innerHTML = e, i.screen.innerHTML = i.innerHTML
        }, i.getInnerHTML = function() {
            return i.innerHTML
        }, i.getRect = function() {
            return i.screen.getBoundingClientRect()
        }, i.setAlpha = function(e) {
            i.alpha = e, "opacity" == i.opacityType ? i.screen.style.opacity = i.alpha : "filter" == i.opacityType && (i.screen.style.filter = "alpha(opacity=" + 100 * i.alpha + ")", i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * i.alpha) + ")")
        }, i.getAlpha = function() {
            return i.alpha
        }, i.getRect = function() {
            return i.screen.getBoundingClientRect()
        }, i.getGlobalX = function() {
            return i.getRect().left
        }, i.getGlobalY = function() {
            return i.getRect().top
        }, i.setX = function(e) {
            i.x = e, i.hasTransform3d_bl ? i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)" : i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)" : i.screen.style.left = i.x + "px"
        }, i.getX = function() {
            return i.x
        }, i.setY = function(e) {
            i.y = e, i.hasTransform3d_bl ? i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)" : i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)" : i.screen.style.top = i.y + "px"
        }, i.getY = function() {
            return i.y
        }, i.setWidth = function(e) {
            i.w = e, "img" == i.type && (i.screen.width = i.w), i.screen.style.width = i.w + "px"
        }, i.getWidth = function() {
            return "div" == i.type || "input" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : "img" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : 0 != i.screen.width ? i.screen.width : i._w : "canvas" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : void 0
        }, i.setHeight = function(e) {
            i.h = e, "img" == i.type && (i.screen.height = i.h), i.screen.style.height = i.h + "px"
        }, i.getHeight = function() {
            return "div" == i.type || "input" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : "img" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : 0 != i.screen.height ? i.screen.height : i.h : "canvas" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : void 0
        }, i.addChild = function(e) {
            i.contains(e) && i.children_ar.splice(FWDEVPUtils.indexOfArray(i.children_ar, e), 1), i.children_ar.push(e), i.screen.appendChild(e.screen)
        }, i.removeChild = function(e) {
            if (!i.contains(e)) throw Error("##removeChild()## Child dose't exist, it can't be removed!");
            i.children_ar.splice(FWDEVPUtils.indexOfArray(i.children_ar, e), 1), i.screen.removeChild(e.screen)
        }, i.contains = function(e) {
            return -1 != FWDEVPUtils.indexOfArray(i.children_ar, e)
        }, i.addChildAt = function(e, t) {
            if (0 == i.getNumChildren()) i.children_ar.push(e), i.screen.appendChild(e.screen);
            else if (1 == t) i.screen.insertBefore(e.screen, i.children_ar[0].screen), i.screen.insertBefore(i.children_ar[0].screen, e.screen), i.contains(e) ? i.children_ar.splice(FWDEVPUtils.indexOfArray(i.children_ar, e), 1, e) : i.children_ar.splice(FWDEVPUtils.indexOfArray(i.children_ar, e), 0, e);
            else {
                if (t < 0 || t > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                i.screen.insertBefore(e.screen, i.children_ar[t].screen), i.contains(e) ? i.children_ar.splice(FWDEVPUtils.indexOfArray(i.children_ar, e), 1, e) : i.children_ar.splice(FWDEVPUtils.indexOfArray(i.children_ar, e), 0, e)
            }
        }, i.getChildAt = function(e) {
            if (e < 0 || e > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == i.getNumChildren()) throw Errror("##getChildAt## Child dose not exist!");
            return i.children_ar[e]
        }, i.getChildIndex = function(e) {
            return i.contains(e) ? FWDEVPUtils.indexOfArray(i.children_ar, e) : 0
        }, i.removeChildAtZero = function() {
            i.screen.removeChild(i.children_ar[0].screen), i.children_ar.shift()
        }, i.getNumChildren = function() {
            return i.children_ar.length
        }, i.addListener = function(e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
        }, i.dispatchEvent = function(e, t) {
            if (null != this.listeners) {
                if (null == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                    if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                        if (t)
                            for (var i in t) this.listeners.events_ar[o][i] = t[i];
                        this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
                    }
            }
        }, i.removeListener = function(e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                    this.listeners.events_ar.splice(o, 1);
                    break
                }
        }, i.disposeImage = function() {
            "img" == i.type && (i.screen.src = null)
        }, i.destroy = function() {
            i.hasBeenSetSelectable_bl && (i.screen.ondragstart = null, i.screen.onselectstart = null, i.screen.ontouchstart = null), i.screen.removeAttribute("style"), i.listeners = [], i.listeners = null, i.children_ar = [], i.children_ar = null, i.style = null, i.screen = null, i.transform = null, i.position = null, i.overflow = null, i.display = null, i.visible = null, i.buttonMode = null, i.x = null, i.y = null, i.w = null, i.h = null, i.rect = null, i.alpha = null, i.innerHTML = null, i.opacityType = null, i.isHtml5_bl = null, i.hasTransform3d_bl = null, i.hasTransform2d_bl = null, i = null
        }, i.init()
    },
    function(o) {
        var s = function(e, l) {
            var a = this;
            s.prototype;

            function t() {
                var e, t;
                o.top != o && FWDEVPUtils.isIE || (document.body.createTextRange ? ((e = document.body.createTextRange()).moveToElementText(this), e.select()) : o.getSelection && document.createRange && (t = o.getSelection(), (e = document.createRange()).selectNodeContents(this), t.removeAllRanges(), t.addRange(e)))
            }
            this.xhr = null, this.embedColoseN_img = e.embedColoseN_img, this.bk_do = null, this.mainHolder_do = null, this.embedAndLinkMainLabel_do = null, this.linkAndEmbedHolderBk_do = null, this.linkText_do = null, this.linkLabel_do = null, this.embedText_do = null, this.embedLabel_do = null, this.linkAndEmbedHolder_do = null, this.copyLinkButton_do = null, this.copyEmbedButton_do = null, this.infoText_do = null, this.sendMainHolder_do = null, this.sendMainHolderBk_do = null, this.sendMainLabel_do = null, this.yourEmailLabel_do = null, this.yourEmailInput_do = null, this.friendEmailLabel_do = null, this.friendEmailInput_do = null, this.closeButton_do = null, this.videoLink_str = null, this.embedWindowBackground_str = e.embedWindowBackground_str, this.embedWindowInputBackgroundPath_str = e.embedWindowInputBackgroundPath_str, this.secondaryLabelsColor_str = e.secondaryLabelsColor_str, this.inputColor_str = e.inputColor_str, this.mainLabelsColor_str = e.mainLabelsColor_str, this.sendButtonNPath_str = e.sendButtonNPath_str, this.sendButtonSPath_str = e.sendButtonSPath_str, this.inputBackgroundColor_str = e.inputBackgroundColor_str, this.borderColor_str = e.borderColor_str, this.sendToAFriendPath_str = e.sendToAFriendPath_str, this.maxTextWidth = 0, this.totalWidth = 0, this.stageWidth = 0, this.stageHeight = 0, this.buttonWidth = 44, this.buttonHeight = 19, this.embedWindowCloseButtonMargins = e.embedWindowCloseButtonMargins, this.finalEmbedPath_str = null, this.finalEmbedCode_str = null, this.linkToVideo_str = null, this.shareAndEmbedTextColor_str = e.shareAndEmbedTextColor_str, this.isSending_bl = !1, this.isShowed_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, a.useFontAwesomeIcons_bl = e.useFontAwesomeIcons_bl, this.init = function() {
                a.closeButton_do || (a.setBackfaceVisibility(), a.mainHolder_do = new FWDEVPDisplayObject("div"), a.mainHolder_do.hasTransform3d_bl = !1, a.mainHolder_do.hasTransform2d_bl = !1, a.mainHolder_do.setBackfaceVisibility(), a.bk_do = new FWDEVPDisplayObject("div"), a.bk_do.getStyle().width = "100%", a.bk_do.getStyle().height = "100%", a.bk_do.setAlpha(.9), a.bk_do.getStyle().background = "url('" + a.embedWindowBackground_str + "')", a.linkAndEmbedHolder_do = new FWDEVPDisplayObject("div"), a.linkAndEmbedHolderBk_do = new FWDEVPDisplayObject("div"), a.linkAndEmbedHolderBk_do.getStyle().background = "url('" + a.embedWindowBackground_str + "')", a.linkAndEmbedHolderBk_do.getStyle().borderStyle = "solid", a.linkAndEmbedHolderBk_do.getStyle().borderWidth = "1px", a.linkAndEmbedHolderBk_do.getStyle().borderColor = a.borderColor_str, a.embedAndLinkMainLabel_do = new FWDEVPDisplayObject("div"), a.embedAndLinkMainLabel_do.setBackfaceVisibility(), a.embedAndLinkMainLabel_do.getStyle().fontFamily = "Arial", a.embedAndLinkMainLabel_do.getStyle().fontSize = "12px", a.embedAndLinkMainLabel_do.getStyle().color = a.mainLabelsColor_str, a.embedAndLinkMainLabel_do.getStyle().whiteSpace = "nowrap", a.embedAndLinkMainLabel_do.getStyle().fontSmoothing = "antialiased", a.embedAndLinkMainLabel_do.getStyle().webkitFontSmoothing = "antialiased", a.embedAndLinkMainLabel_do.getStyle().textRendering = "optimizeLegibility", a.embedAndLinkMainLabel_do.getStyle().padding = "0px", a.embedAndLinkMainLabel_do.setInnerHTML("SHARE & EMBED"), a.linkLabel_do = new FWDEVPDisplayObject("div"), a.linkLabel_do.setBackfaceVisibility(), a.linkLabel_do.getStyle().fontFamily = "Arial", a.linkLabel_do.getStyle().fontSize = "12px", a.linkLabel_do.getStyle().color = a.secondaryLabelsColor_str, a.linkLabel_do.getStyle().whiteSpace = "nowrap", a.linkLabel_do.getStyle().fontSmoothing = "antialiased", a.linkLabel_do.getStyle().webkitFontSmoothing = "antialiased", a.linkLabel_do.getStyle().textRendering = "optimizeLegibility", a.linkLabel_do.getStyle().padding = "0px", a.linkLabel_do.setInnerHTML("Link to this video:"), a.linkText_do = new FWDEVPDisplayObject("div"), a.linkText_do.setBackfaceVisibility(), a.linkText_do.getStyle().fontFamily = "Arial", a.linkText_do.getStyle().fontSize = "12px", a.linkText_do.getStyle().color = a.shareAndEmbedTextColor_str, FWDEVPUtils.isIEAndLessThen9 || (a.linkText_do.getStyle().wordBreak = "break-all"), a.linkText_do.getStyle().fontSmoothing = "antialiased", a.linkText_do.getStyle().webkitFontSmoothing = "antialiased", a.linkText_do.getStyle().textRendering = "optimizeLegibility", a.linkText_do.getStyle().padding = "6px", a.linkText_do.getStyle().paddingTop = "4px", a.linkText_do.getStyle().paddingBottom = "4px", a.linkText_do.getStyle().backgroundColor = a.inputBackgroundColor_str, a.linkText_do.screen.onclick = t, a.embedLabel_do = new FWDEVPDisplayObject("div"), a.embedLabel_do.setBackfaceVisibility(), a.embedLabel_do.getStyle().fontFamily = "Arial", a.embedLabel_do.getStyle().fontSize = "12px", a.embedLabel_do.getStyle().color = a.secondaryLabelsColor_str, a.embedLabel_do.getStyle().whiteSpace = "nowrap", a.embedLabel_do.getStyle().fontSmoothing = "antialiased", a.embedLabel_do.getStyle().webkitFontSmoothing = "antialiased", a.embedLabel_do.getStyle().textRendering = "optimizeLegibility", a.embedLabel_do.getStyle().padding = "0px", a.embedLabel_do.setInnerHTML("Embed this video:"), a.embedText_do = new FWDEVPDisplayObject("div"), a.embedText_do.setBackfaceVisibility(), FWDEVPUtils.isIEAndLessThen9 || (a.embedText_do.getStyle().wordBreak = "break-all"), a.embedText_do.getStyle().fontFamily = "Arial", a.embedText_do.getStyle().fontSize = "12px", a.embedText_do.getStyle().lineHeight = "16px", a.embedText_do.getStyle().color = a.shareAndEmbedTextColor_str, a.embedText_do.getStyle().fontSmoothing = "antialiased", a.embedText_do.getStyle().webkitFontSmoothing = "antialiased", a.embedText_do.getStyle().textRendering = "optimizeLegibility", a.embedText_do.getStyle().backgroundColor = a.inputBackgroundColor_str, a.embedText_do.getStyle().padding = "6px", a.embedText_do.getStyle().paddingTop = "4px", a.embedText_do.getStyle().paddingBottom = "4px", a.embedText_do.screen.onclick = t, FWDEVPFlashButton.setPrototype(), a.copyLinkButton_do = new FWDEVPFlashButton(e.embedCopyButtonNPath_str, e.embedCopyButtonSPath_str, e.flashCopyToCBPath_str, l.instanceName_str + "copyLink", l.instanceName_str + ".copyLinkButtonOnMouseOver", l.instanceName_str + ".copyLinkButtonOnMouseOut", l.instanceName_str + ".copyLinkButtonOnMouseClick", l.instanceName_str + ".getLinkCopyPath", a.buttonWidth, a.buttonHeight, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str), a.copyLinkButton_do.addListener(FWDEVPFlashButton.CLICK, a.showFlashButtonInstallError), FWDEVPFlashButton.setPrototype(), a.copyEmbedButton_do = new FWDEVPFlashButton(e.embedCopyButtonNPath_str, e.embedCopyButtonSPath_str, e.flashCopyToCBPath_str, l.instanceName_str + "embedCode", l.instanceName_str + ".embedkButtonOnMouseOver", l.instanceName_str + ".embedButtonOnMouseOut", l.instanceName_str + ".embedButtonOnMouseClick", l.instanceName_str + ".getEmbedCopyPath", a.buttonWidth, a.buttonHeight, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str), a.copyEmbedButton_do.addListener(FWDEVPFlashButton.CLICK, a.showFlashButtonInstallError), a.sendMainHolder_do = new FWDEVPDisplayObject("div"), a.sendMainHolderBk_do = new FWDEVPDisplayObject("div"), a.sendMainHolderBk_do.getStyle().background = "url('" + a.embedWindowBackground_str + "')", a.sendMainHolderBk_do.getStyle().borderStyle = "solid", a.sendMainHolderBk_do.getStyle().borderWidth = "1px", a.sendMainHolderBk_do.getStyle().borderColor = a.borderColor_str, a.sendMainLabel_do = new FWDEVPDisplayObject("div"), a.sendMainLabel_do.setBackfaceVisibility(), a.sendMainLabel_do.getStyle().fontFamily = "Arial", a.sendMainLabel_do.getStyle().fontSize = "12px", a.sendMainLabel_do.getStyle().color = a.mainLabelsColor_str, a.sendMainLabel_do.getStyle().whiteSpace = "nowrap", a.sendMainLabel_do.getStyle().fontSmoothing = "antialiased", a.sendMainLabel_do.getStyle().webkitFontSmoothing = "antialiased", a.sendMainLabel_do.getStyle().textRendering = "optimizeLegibility", a.sendMainLabel_do.getStyle().padding = "0px", a.sendMainLabel_do.setInnerHTML("SEND TO A FRIEND"), a.yourEmailLabel_do = new FWDEVPDisplayObject("div"), a.yourEmailLabel_do.setBackfaceVisibility(), a.yourEmailLabel_do.getStyle().fontFamily = "Arial", a.yourEmailLabel_do.getStyle().fontSize = "12px", a.yourEmailLabel_do.getStyle().color = a.secondaryLabelsColor_str, a.yourEmailLabel_do.getStyle().whiteSpace = "nowrap", a.yourEmailLabel_do.getStyle().fontSmoothing = "antialiased", a.yourEmailLabel_do.getStyle().webkitFontSmoothing = "antialiased", a.yourEmailLabel_do.getStyle().textRendering = "optimizeLegibility", a.yourEmailLabel_do.getStyle().padding = "0px", a.yourEmailLabel_do.setInnerHTML("Your email:"), a.yourEmailInput_do = new FWDEVPDisplayObject("input"), a.yourEmailInput_do.setBackfaceVisibility(), a.yourEmailInput_do.getStyle().fontFamily = "Arial", a.yourEmailInput_do.getStyle().fontSize = "12px", a.yourEmailInput_do.getStyle().backgroundColor = a.inputBackgroundColor_str, a.yourEmailInput_do.getStyle().color = a.inputColor_str, a.yourEmailInput_do.getStyle().outline = 0, a.yourEmailInput_do.getStyle().whiteSpace = "nowrap", a.yourEmailInput_do.getStyle().fontSmoothing = "antialiased", a.yourEmailInput_do.getStyle().webkitFontSmoothing = "antialiased", a.yourEmailInput_do.getStyle().textRendering = "optimizeLegibility", a.yourEmailInput_do.getStyle().padding = "6px", a.yourEmailInput_do.getStyle().paddingTop = "4px", a.yourEmailInput_do.getStyle().paddingBottom = "4px", a.friendEmailLabel_do = new FWDEVPDisplayObject("div"), a.friendEmailLabel_do.setBackfaceVisibility(), a.friendEmailLabel_do.getStyle().fontFamily = "Arial", a.friendEmailLabel_do.getStyle().fontSize = "12px", a.friendEmailLabel_do.getStyle().color = a.secondaryLabelsColor_str, a.friendEmailLabel_do.getStyle().whiteSpace = "nowrap", a.friendEmailLabel_do.getStyle().fontSmoothing = "antialiased", a.friendEmailLabel_do.getStyle().webkitFontSmoothing = "antialiased", a.friendEmailLabel_do.getStyle().textRendering = "optimizeLegibility", a.friendEmailLabel_do.getStyle().padding = "0px", a.friendEmailLabel_do.setInnerHTML("Your friend's email:"), a.friendEmailInput_do = new FWDEVPDisplayObject("input"), a.friendEmailInput_do.setBackfaceVisibility(), a.friendEmailInput_do.getStyle().fontFamily = "Arial", a.friendEmailInput_do.getStyle().fontSize = "12px", a.friendEmailInput_do.getStyle().backgroundColor = a.inputBackgroundColor_str, a.friendEmailInput_do.getStyle().color = a.inputColor_str, a.friendEmailInput_do.getStyle().outline = 0, a.friendEmailInput_do.getStyle().whiteSpace = "nowrap", a.friendEmailInput_do.getStyle().fontSmoothing = "antialiased", a.friendEmailInput_do.getStyle().webkitFontSmoothing = "antialiased", a.friendEmailInput_do.getStyle().textRendering = "optimizeLegibility", a.friendEmailInput_do.getStyle().padding = "6px", a.friendEmailInput_do.getStyle().paddingTop = "4px", a.friendEmailInput_do.getStyle().paddingBottom = "4px", FWDEVPSimpleSizeButton.setPrototype(), a.sendButton_do = new FWDEVPSimpleSizeButton(a.sendButtonNPath_str, a.sendButtonSPath_str, a.buttonWidth, a.buttonHeight, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str), a.sendButton_do.addListener(FWDEVPSimpleSizeButton.CLICK, a.sendClickHandler), a.infoText_do = new FWDEVPDisplayObject("div"), a.infoText_do.setBackfaceVisibility(), a.infoText_do.getStyle().fontFamily = "Arial", a.infoText_do.getStyle().fontSize = "12px", a.infoText_do.getStyle().color = a.secondaryLabelsColor_str, a.infoText_do.getStyle().whiteSpace = "nowrap", a.infoText_do.getStyle().fontSmoothing = "antialiased", a.infoText_do.getStyle().webkitFontSmoothing = "antialiased", a.infoText_do.getStyle().textRendering = "optimizeLegibility", a.infoText_do.getStyle().padding = "0px", a.infoText_do.getStyle().paddingTop = "4px", a.infoText_do.getStyle().textAlign = "center", a.infoText_do.getStyle().color = a.mainLabelsColor_str, a.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), a.closeButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fas fa-times'></i>", void 0, "EVPCloseButtonNormalState", "EVPCloseButtonSelectedState")) : (FWDEVPSimpleButton.setPrototype(), a.closeButton_do = new FWDEVPSimpleButton(e.shareClooseN_img, e.embedWindowClosePathS_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), a.closeButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, a.closeButtonOnMouseUpHandler), a.addChild(a.mainHolder_do), a.mainHolder_do.addChild(a.bk_do), a.linkAndEmbedHolder_do.addChild(a.linkAndEmbedHolderBk_do), a.linkAndEmbedHolder_do.addChild(a.embedAndLinkMainLabel_do), a.linkAndEmbedHolder_do.addChild(a.linkLabel_do), a.linkAndEmbedHolder_do.addChild(a.linkText_do), a.linkAndEmbedHolder_do.addChild(a.embedLabel_do), a.linkAndEmbedHolder_do.addChild(a.embedText_do), a.linkAndEmbedHolder_do.addChild(a.copyLinkButton_do), a.linkAndEmbedHolder_do.addChild(a.copyEmbedButton_do), a.sendMainHolder_do.addChild(a.sendMainHolderBk_do), a.sendMainHolder_do.addChild(a.sendMainLabel_do), a.sendMainHolder_do.addChild(a.yourEmailLabel_do), a.sendMainHolder_do.addChild(a.yourEmailInput_do), a.sendMainHolder_do.addChild(a.friendEmailLabel_do), a.sendMainHolder_do.addChild(a.friendEmailInput_do), a.sendMainHolder_do.addChild(a.sendButton_do), a.mainHolder_do.addChild(a.linkAndEmbedHolder_do), a.mainHolder_do.addChild(a.sendMainHolder_do), a.mainHolder_do.addChild(a.closeButton_do))
            }, this.closeButtonOnMouseUpHandler = function() {
                a.isShowed_bl && a.hide()
            }, this.showFlashButtonInstallError = function() {
                a.dispatchEvent(s.ERROR, {
                    error: "Please install Adobe Flash Player in order to use this feature! To copy text in the clipboard currently flash is the only safe option. <a href='http://www.adobe.com/go/getflashplayer' target='_blank'>Click here to install</a>. <br><br>The video link or embed code can be copyed by selecting the text, right click and copy."
                })
            }, this.positionAndResize = function() {
                a.stageWidth = l.stageWidth, a.stageHeight = l.stageHeight, a.maxTextWidth = Math.min(a.stageWidth - 150, 500), a.totalWidth = a.maxTextWidth + a.buttonWidth + 40, a.isMobile_bl ? (a.linkText_do.setWidth(a.maxTextWidth + 52), a.embedText_do.setWidth(a.maxTextWidth + 52)) : (a.linkText_do.setWidth(a.maxTextWidth), a.embedText_do.setWidth(a.maxTextWidth)), a.positionFinal(), a.closeButton_do.setX(a.stageWidth - a.closeButton_do.w - a.embedWindowCloseButtonMargins), a.closeButton_do.setY(a.embedWindowCloseButtonMargins), a.setWidth(a.stageWidth), a.setHeight(a.stageHeight), a.mainHolder_do.setWidth(a.stageWidth), a.mainHolder_do.setHeight(a.stageHeight)
            }, this.positionFinal = function() {
                var e, t, o, s, i, n, l, r = !1;
                a.stageHeight < 360 || a.stageWidth < 350 ? (a.linkText_do.getStyle().whiteSpace = "nowrap", a.embedText_do.getStyle().whiteSpace = "nowrap") : (a.linkText_do.getStyle().whiteSpace = "normal", a.embedText_do.getStyle().whiteSpace = "normal"), a.linkLabel_do.screen.offsetHeight < 6 && (r = !0), t = r ? Math.round(100 * a.embedAndLinkMainLabel_do.screen.getBoundingClientRect().height) : a.embedAndLinkMainLabel_do.getHeight(), a.embedAndLinkMainLabel_do.setX(16), a.linkLabel_do.setX(16), a.linkLabel_do.setY(t + 14), r ? (o = Math.round(100 * a.linkLabel_do.screen.getBoundingClientRect().height), s = Math.round(100 * a.linkText_do.screen.getBoundingClientRect().height)) : (o = a.linkLabel_do.getHeight(), s = a.linkText_do.getHeight()), a.linkText_do.setX(10), a.linkText_do.setY(a.linkLabel_do.y + o + 5), a.isMobile_bl ? a.copyLinkButton_do.setX(-100) : a.copyLinkButton_do.setX(a.maxTextWidth + 30), a.copyLinkButton_do.setY(a.linkText_do.y + s - a.buttonHeight), a.embedLabel_do.setX(16), a.embedLabel_do.setY(a.copyLinkButton_do.y + a.copyLinkButton_do.h + 14), i = r ? Math.round(100 * a.embedText_do.screen.getBoundingClientRect().height) : a.embedText_do.getHeight(), a.embedText_do.setX(10), a.embedText_do.setY(a.embedLabel_do.y + o + 5), a.isMobile_bl ? a.copyEmbedButton_do.setX(-100) : a.copyEmbedButton_do.setX(a.maxTextWidth + 30), a.copyEmbedButton_do.setY(a.embedText_do.y + i - a.buttonHeight), a.linkAndEmbedHolderBk_do.setY(a.linkLabel_do.y - 9), a.linkAndEmbedHolderBk_do.setWidth(a.totalWidth - 2), a.linkAndEmbedHolderBk_do.setHeight(a.embedText_do.y + i - 9), a.linkAndEmbedHolder_do.setWidth(a.totalWidth), a.linkAndEmbedHolder_do.setHeight(a.embedText_do.y + i + 14), r ? (n = Math.round(100 * a.sendMainLabel_do.screen.getBoundingClientRect().height), l = Math.round(100 * a.yourEmailInput_do.screen.getBoundingClientRect().height)) : (n = a.sendMainLabel_do.getHeight(), l = a.yourEmailInput_do.getHeight()), a.sendMainLabel_do.setX(16), a.yourEmailLabel_do.setX(16), a.yourEmailLabel_do.setY(n + 14), 400 < a.stageWidth ? (a.yourEmailInput_do.setX(10), a.yourEmailInput_do.setWidth(parseInt(a.totalWidth - 52 - a.buttonWidth) / 2), a.yourEmailInput_do.setY(a.yourEmailLabel_do.y + o + 5), a.friendEmailLabel_do.setX(a.yourEmailInput_do.x + a.yourEmailInput_do.w + 26), a.friendEmailLabel_do.setY(a.yourEmailLabel_do.y), a.friendEmailInput_do.setX(a.yourEmailInput_do.x + a.yourEmailInput_do.w + 20), a.friendEmailInput_do.setWidth(parseInt((a.maxTextWidth - 30) / 2)), a.friendEmailInput_do.setY(a.yourEmailLabel_do.y + o + 5), a.sendButton_do.setX(a.friendEmailInput_do.x + a.yourEmailInput_do.w + 10), a.sendButton_do.setY(a.friendEmailInput_do.y + l - a.buttonHeight)) : (a.yourEmailInput_do.setX(10), a.yourEmailInput_do.setWidth(a.totalWidth - 32), a.yourEmailInput_do.setY(a.yourEmailLabel_do.y + o + 5), a.friendEmailLabel_do.setX(16), a.friendEmailLabel_do.setY(a.yourEmailInput_do.y + l + 14), a.friendEmailInput_do.setX(10), a.friendEmailInput_do.setY(a.friendEmailLabel_do.y + o + 5), a.friendEmailInput_do.setWidth(a.totalWidth - 32), a.sendButton_do.setX(a.totalWidth - a.buttonWidth - 10), a.sendButton_do.setY(a.friendEmailInput_do.y + l + 10)), a.sendMainHolderBk_do.setY(a.yourEmailLabel_do.y - 9), a.sendMainHolderBk_do.setWidth(a.totalWidth - 2), a.sendMainHolderBk_do.setHeight(a.sendButton_do.y + a.sendButton_do.h - 9), a.sendMainHolder_do.setWidth(a.totalWidth), a.sendMainHolder_do.setHeight(a.sendButton_do.y + a.sendButton_do.h + 14), e = r ? Math.round(100 * a.linkAndEmbedHolder_do.screen.getBoundingClientRect().height + 100 * a.sendMainHolder_do.screen.getBoundingClientRect().height) : a.linkAndEmbedHolder_do.getHeight() + a.sendMainHolder_do.getHeight(), a.linkAndEmbedHolder_do.setX(parseInt((a.stageWidth - a.totalWidth) / 2)), a.linkAndEmbedHolder_do.setY(parseInt((a.stageHeight - e) / 2) - 8), a.sendMainHolder_do.setX(parseInt((a.stageWidth - a.totalWidth) / 2)), r ? a.sendMainHolder_do.setY(Math.round(a.linkAndEmbedHolder_do.y + 100 * a.linkAndEmbedHolder_do.screen.getBoundingClientRect().height + 20)) : a.sendMainHolder_do.setY(a.linkAndEmbedHolder_do.y + a.linkAndEmbedHolder_do.getHeight() + 20)
            }, this.sendClickHandler = function() {
                var e = !1;
                if (!a.getValidEmail(a.yourEmailInput_do.screen.value)) {
                    if (FWDAnimation.isTweening(a.yourEmailInput_do.screen)) return;
                    FWDAnimation.to(a.yourEmailInput_do.screen, .1, {
                        css: {
                            backgroundColor: "#FF0000"
                        },
                        yoyo: !0,
                        repeat: 3
                    }), e = !0
                }
                if (!a.getValidEmail(a.friendEmailInput_do.screen.value)) {
                    if (FWDAnimation.isTweening(a.friendEmailInput_do.screen)) return;
                    FWDAnimation.to(a.friendEmailInput_do.screen, .1, {
                        css: {
                            backgroundColor: "#FF0000"
                        },
                        yoyo: !0,
                        repeat: 3
                    }), e = !0
                }
                e || a.sendEmail()
            }, this.updateHEXColors = function(e, t) {
                a.copyEmbedButton_do.updateHEXColors(e, t), a.copyLinkButton_do.updateHEXColors(e, t), a.sendButton_do.updateHEXColors(e, t), a.closeButton_do.updateHEXColors(e, t)
            }, this.sendEmail = function() {
                if (!a.isSending_bl) {
                    a.isSending_bl = !0, a.xhr = new XMLHttpRequest, a.xhr.onreadystatechange = a.onChange, a.xhr.onerror = a.ajaxOnErrorHandler;
                    try {
                        a.xhr.open("get", a.sendToAFriendPath_str + "?friendMail=" + a.friendEmailInput_do.screen.value + "&yourMail=" + a.yourEmailInput_do.screen.value + "&link=" + encodeURIComponent(a.linkToVideo_str), !0), a.xhr.send()
                    } catch (e) {
                        a.showInfo("ERROR", !0), console && console.log(e), e.message && console.log(e.message)
                    }
                    a.resetInputs()
                }
            }, this.ajaxOnErrorHandler = function(e) {
                a.showInfo("ERROR", !0);
                try {
                    o.console && console.log(e), o.console && console.log(e.message)
                } catch (e) {}
                a.isSending_bl = !1
            }, this.onChange = function(e) {
                4 == a.xhr.readyState && 200 == a.xhr.status && ("sent" == a.xhr.responseText ? a.showInfo("SENT") : (a.showInfo("ERROR", !0), o.console && console.log("Error The server can't send the email!")), a.isSending_bl = !1)
            }, this.resetInputs = function() {
                a.yourEmailInput_do.screen.value = "", a.friendEmailInput_do.screen.value = ""
            }, this.getValidEmail = function(e) {
                return !(!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e) || "" == e)
            }, this.setEmbedData = function() {
                var e = location.href,
                    t = location.protocol + "//" + location.host,
                    o = location.pathname,
                    s = location.hash,
                    i = location.search,
                    n = t + o;
                i = i.replace(/&?EVPInstanceName=.+/g, ""), s = s.replace(/&?EVPInstanceName=.+/g, ""), e = e.replace(/&?EVPInstanceName=.+/g, ""), "?" == i && (i = null), i ? s ? (a.finalEmbedPath_str = n + i + s + "&EVPInstanceName=" + l.instanceName_str, a.linkToVideo_str = n + i + s) : (a.finalEmbedPath_str = n + i + "&EVPInstanceName=" + l.instanceName_str, a.linkToVideo_str = n + i) : s ? (a.finalEmbedPath_str = n + s + "?EVPInstanceName=" + l.instanceName_str, a.linkToVideo_str = n + s) : (a.finalEmbedPath_str = n + "?EVPInstanceName=" + l.instanceName_str, a.linkToVideo_str = n), a.finalEmbedPath_str = encodeURI(a.finalEmbedPath_str), a.linkToVideo_str = encodeURI(a.linkToVideo_str), a.finalEmbedCode_str = "<iframe src='" + a.finalEmbedPath_str + "' width='" + l.stageWidth + "' height='" + l.stageHeight + "' frameborder='0' scrolling='no' allowfullscreen></iframe>", FWDEVPUtils.isIE ? (a.linkText_do.screen.innerText = a.linkToVideo_str, a.embedText_do.screen.innerText = a.finalEmbedCode_str) : (a.linkText_do.screen.textContent = a.linkToVideo_str, a.embedText_do.screen.textContent = a.finalEmbedCode_str)
            }, this.showInfo = function(e, t) {
                a.infoText_do.setInnerHTML(e), a.sendMainHolder_do.addChild(a.infoText_do), a.infoText_do.setWidth(a.buttonWidth), a.infoText_do.setHeight(a.buttonHeight - 4), a.infoText_do.setX(a.sendButton_do.x), a.infoText_do.setY(a.sendButton_do.y - 23), a.infoText_do.setAlpha(0), a.infoText_do.getStyle().color = t ? "#FF0000" : a.mainLabelsColor_str, FWDAnimation.killTweensOf(a.infoText_do), FWDAnimation.to(a.infoText_do, .16, {
                    alpha: 1,
                    yoyo: !0,
                    repeat: 7
                })
            }, this.show = function(e) {
                a.isShowed_bl || (a.isShowed_bl = !0, l.main_do.addChild(a), a.init(), a.resetInputs(), a.setEmbedData(), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && l.main_do.setSelectable(!0), a.useFontAwesomeIcons_bl ? a.checkButtonsId_to = setInterval(function() {
                    0 != a.closeButton_do.w && (a.positionAndResize(), clearInterval(a.checkButtonsId_to), clearTimeout(a.hideCompleteId_to), clearTimeout(a.showCompleteId_to), a.mainHolder_do.setY(-a.stageHeight), a.showCompleteId_to = setTimeout(a.showCompleteHandler, 900), setTimeout(function() {
                        FWDAnimation.to(a.mainHolder_do, .8, {
                            y: 0,
                            delay: .1,
                            ease: Expo.easeInOut
                        })
                    }, 100))
                }, 50) : (a.positionAndResize(), clearTimeout(a.hideCompleteId_to), clearTimeout(a.showCompleteId_to), a.mainHolder_do.setY(-a.stageHeight), a.showCompleteId_to = setTimeout(a.showCompleteHandler, 900), setTimeout(function() {
                    FWDAnimation.to(a.mainHolder_do, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                }, 100)))
            }, this.showCompleteHandler = function() {}, this.hide = function() {
                a.isShowed_bl && (a.isShowed_bl = !1, l.customContextMenu_do && l.customContextMenu_do.enable(), a.positionAndResize(), clearTimeout(a.hideCompleteId_to), clearTimeout(a.showCompleteId_to), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && l.main_do.setSelectable(!1), a.hideCompleteId_to = setTimeout(a.hideCompleteHandler, 800), FWDAnimation.killTweensOf(a.mainHolder_do), FWDAnimation.to(a.mainHolder_do, .8, {
                    y: -a.stageHeight,
                    ease: Expo.easeInOut
                }))
            }, this.hideCompleteHandler = function() {
                l.main_do.removeChild(a), a.dispatchEvent(s.HIDE_COMPLETE)
            }
        };
        s.setPrototype = function() {
            s.prototype = new FWDEVPDisplayObject("div")
        }, s.ERROR = "error", s.HIDE_COMPLETE = "hideComplete", s.prototype = null, o.FWDEVPEmbedWindow = s
    }(window), window, window.FWDEVPEventDispatcher = function() {
        this.listeners = {
            events_ar: []
        }, this.addListener = function(e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
        }, this.dispatchEvent = function(e, t) {
            if (null != this.listeners) {
                if (null == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                    if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                        if (t)
                            for (var i in t) this.listeners.events_ar[o][i] = t[i];
                        this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
                    }
            }
        }, this.removeListener = function(e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                    this.listeners.events_ar.splice(o, 1);
                    break
                }
        }, this.destroy = function() {
            this.listeners = null, this.addListener = null, this.dispatchEvent = null, this.removeListener = null
        }
    },
    function(i) {
        var t = function(e) {
            var s = this;
            t.prototype;
            this.appId = parseInt(e);
            s.init = function() {
                s.checkFBRoot(), i.fbAsyncInit || s.connect()
            }, this.checkFBRoot = function() {
                var e = Boolean(document.getElementById("fb-root"));
                e || ((e = document.createElement("div")).id = "fb-root", document.getElementsByTagName("body")[0].appendChild(e))
            }, this.connect = function() {
                var e, t, o;
                s.hasStartedToConnect_bl || (s.hasStartedToConnect_bl = !0, i.fbAsyncInit = function() {
                    FB.init({
                        appId: s.appId,
                        status: !0,
                        cookie: !0,
                        xfbml: !0,
                        oauth: !0
                    }), FB.Event.subscribe("auth.authResponseChange", function(e) {
                        "connected" === e.status || FB.login()
                    })
                }, e = document, o = "facebook-jssdk", e.getElementById(o) || ((t = e.createElement("script")).id = o, t.async = !0, t.src = "//connect.facebook.net/en_US/all.js", e.getElementsByTagName("body")[0].appendChild(t)))
            }, this.share = function(e, t, o) {
                FB.ui({
                    method: "feed",
                    link: e,
                    caption: t,
                    picture: o
                }, function(e) {})
            }, s.init()
        };
        t.setPrototype = function() {
            t.prototype = new FWDEVPEventDispatcher
        }, t.prototype = null, i.FWDEVPFacebookShare = t
    }(window),
    function(e) {
        var f = function(e, t, o, s, i, n, l, r, a, d, u, h, _) {
            var c = this;
            f.prototype;
            this.useHEXColorsForSkin_bl = u, this.normalButtonsColor_str = h, this.selectedButtonsColor_str = _, this.nImg_img = null, this.sImg_img = null, this.n_do, this.s_do, this.nImgPath_str = e, this.sImgPath_str = t, this.flashPath_str = o, this.flashButtonName_str = s, this.overPath_str = i, this.outPath_str = n, this.clickPath_str = l, this.copyPath_str = r, this.linkFlashObject = null, this.buttonWidth = a, this.buttonHeight = d, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.isDisabled_bl = !1, this.init = function() {
                c.setWidth(c.buttonWidth), c.setHeight(c.buttonHeight), c.isMobile_bl || (c.setupMainContainers(), c.setupFalshButton(), c.setButtonMode(!0))
            }, this.setupMainContainers = function() {
                c.nImg = new Image, c.nImg.src = c.nImgPath_str, c.useHEXColorsForSkin_bl ? (c.n_do = new FWDEVPTransformDisplayObject("div"), c.n_do.setWidth(c.buttonWidth), c.n_do.setHeight(c.buttonHeight), c.nImg.onload = function() {
                    c.n_do_canvas = FWDEVPUtils.getCanvasWithModifiedColor(c.nImg, c.normalButtonsColor_str).canvas, c.n_do.screen.appendChild(c.n_do_canvas)
                }) : (c.n_do = new FWDEVPDisplayObject("img"), c.n_do.setScreen(c.nImg), c.n_do.setWidth(c.buttonWidth), c.n_do.setHeight(c.buttonHeight)), c.addChild(c.n_do), c.sImg = new Image, c.sImg.src = c.sImgPath_str, c.useHEXColorsForSkin_bl ? (c.s_do = new FWDEVPTransformDisplayObject("div"), c.s_do.setWidth(c.buttonWidth), c.s_do.setHeight(c.buttonHeight), c.sImg.onload = function() {
                    c.s_do_canvas = FWDEVPUtils.getCanvasWithModifiedColor(c.sImg, c.selectedButtonsColor_str).canvas, c.s_do.screen.appendChild(c.s_do_canvas)
                }) : (c.s_do = new FWDEVPDisplayObject("img"), c.s_do.setScreen(c.sImg), c.s_do.setWidth(c.buttonWidth), c.s_do.setHeight(c.buttonHeight)), c.s_do.setAlpha(0), c.addChild(c.s_do), c.screen.addEventListener ? (c.screen.addEventListener("mouseover", c.onMouseOver), c.screen.addEventListener("mouseout", c.onMouseOut), c.screen.addEventListener("mouseup", c.onMouseUp)) : c.screen.attachEvent && (c.screen.attachEvent("onmouseover", c.onMouseOver), c.screen.attachEvent("onmouseout", c.onMouseOut), c.screen.attachEvent("onmouseup", c.onMouseUp))
            }, this.onMouseOver = function(e) {
                if (!e.pointerType || "mouse" == e.pointerType) {
                    if (c.isDisabled_bl || c.isSelectedFinal_bl) return;
                    c.setSelectedState()
                }
            }, this.onMouseOut = function(e) {
                e.pointerType && "mouse" != e.pointerType || c.setNormalState()
            }, this.onMouseUp = function(e) {
                FWDEVPFlashTest.hasFlashPlayerVersion("9.0.18") || (e.preventDefault && e.preventDefault(), c.isDisabled_bl || 2 == e.button || c.dispatchEvent(f.CLICK))
            }, this.setupFalshButton = function() {
                if (FWDEVPFlashTest.hasFlashPlayerVersion("9.0.18")) {
                    var e = '<object id="' + c.flashButtonName_str + '"classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + c.flashPath_str + '"/><param name="wmode" value="transparent"/><param name="scale" value="noscale"/><param name=FlashVars value="clickPath_str=' + c.clickPath_str + "&overPath_str=" + c.overPath_str + "&outPath_str=" + c.outPath_str + "&copyPath_str=" + c.copyPath_str + '"/><object type="application/x-shockwave-flash" data="' + c.flashPath_str + '" width="100%" height="100%"><param name="movie" value="' + c.flashPath_str + '"/><param name="wmode" value="transparent"/><param name="scale" value="noscale"/><param name=FlashVars value="clickPath_str=' + c.clickPath_str + "&overPath_str=" + c.overPath_str + "&outPath_str=" + c.outPath_str + "&copyPath_str=" + c.copyPath_str + '"/></object></object>',
                        t = new FWDEVPDisplayObject("div");
                    t.setBackfaceVisibility(), t.setResizableSizeAfterParent(), t.screen.innerHTML = e, c.addChild(t), c.linkFlashObject = t.screen.firstChild, FWDEVPUtils.isIE || (c.linkFlashObject = c.linkFlashObject.getElementsByTagName("object")[0])
                }
            }, this.setNormalState = function() {
                FWDAnimation.killTweensOf(c.s_do), FWDAnimation.to(c.s_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.setSelectedState = function() {
                FWDAnimation.killTweensOf(c.s_do), FWDAnimation.to(c.s_do, .5, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, c.updateHEXColors = function(e, t) {
                FWDEVPUtils.changeCanvasHEXColor(c.nImg, c.n_do_canvas, e), FWDEVPUtils.changeCanvasHEXColor(c.sImg, c.s_do_canvas, t)
            }, c.init()
        };
        f.setPrototype = function() {
            f.prototype = null, f.prototype = new FWDEVPDisplayObject("div")
        }, f.CLICK = "onClick", f.MOUSE_OVER = "onMouseOver", f.SHOW_TOOLTIP = "showTooltip", f.MOUSE_OUT = "onMouseOut", f.MOUSE_UP = "onMouseDown", f.prototype = null, e.FWDEVPFlashButton = f
    }(window);
var FWDEVPFlashTest = function() {
    var u = "undefined",
        h = "object",
        _ = "Shockwave Flash",
        c = "application/x-shockwave-flash",
        f = window,
        p = document,
        b = navigator,
        s = function() {
            var e = typeof p.getElementById != u && typeof p.getElementsByTagName != u && typeof p.createElement != u,
                t = b.userAgent.toLowerCase(),
                o = b.platform.toLowerCase(),
                s = /win/.test(o || t),
                i = /mac/.test(o || t),
                n = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                l = !1,
                r = [0, 0, 0],
                a = null;
            if (typeof b.plugins != u && typeof b.plugins[_] == h) !(a = b.plugins[_].description) || typeof b.mimeTypes != u && b.mimeTypes[c] && !b.mimeTypes[c].enabledPlugin || (l = !!0, a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), r[0] = parseInt(a.replace(/^(.*)\..*$/, "$1"), 10), r[1] = parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10), r[2] = /[a-zA-Z]/.test(a) ? parseInt(a.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof f.ActiveXObject != u) try {
                var d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                d && (a = d.GetVariable("$version")) && (l = !0, a = a.split(" ")[1].split(","), r = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)])
            } catch (e) {}
            return {
                w3: e,
                pv: r,
                wk: n,
                ie: l,
                win: s,
                mac: i
            }
        }();

    function e(e) {
        var t = s.pv,
            o = e.split(".");
        return o[0] = parseInt(o[0], 10), o[1] = parseInt(o[1], 10) || 0, o[2] = parseInt(o[2], 10) || 0, t[0] > o[0] || t[0] == o[0] && t[1] > o[1] || t[0] == o[0] && t[1] == o[1] && t[2] >= o[2]
    }
    return {
        hasFlashPlayerVersion: e
    }
}();
! function(n) {
    var l = function(e, t, o) {
        var s = this,
            i = l.prototype;
        this.screenToTest = e, this.screenToTest2 = t, this.hideDelay = o, this.globalX = 0, this.globalY = 0, this.currentTime, this.checkIntervalId_int, this.hideCompleteId_to, this.hasInitialTestEvents_bl = !1, this.addSecondTestEvents_bl = !1, this.dispatchOnceShow_bl = !0, this.dispatchOnceHide_bl = !1, this.isStopped_bl = !0, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, s.init = function() {}, s.start = function() {
            s.currentTime = (new Date).getTime(), clearInterval(s.checkIntervalId_int), s.checkIntervalId_int = setInterval(s.update, 100), s.addMouseOrTouchCheck(), s.isStopped_bl = !1
        }, s.stop = function() {
            clearInterval(s.checkIntervalId_int), s.isStopped_bl = !0, s.removeMouseOrTouchCheck(), s.removeMouseOrTouchCheck2()
        }, s.addMouseOrTouchCheck = function() {
            s.hasInitialTestEvents_bl || (s.hasInitialTestEvents_bl = !0, s.isMobile_bl ? s.hasPointerEvent_bl ? (s.screenToTest.screen.addEventListener("pointerdown", s.onMouseOrTouchUpdate), s.screenToTest.screen.addEventListener("MSPointerMove", s.onMouseOrTouchUpdate)) : s.screenToTest.screen.addEventListener("touchstart", s.onMouseOrTouchUpdate) : n.addEventListener ? n.addEventListener("mousemove", s.onMouseOrTouchUpdate) : document.attachEvent && document.attachEvent("onmousemove", s.onMouseOrTouchUpdate))
        }, s.removeMouseOrTouchCheck = function() {
            s.hasInitialTestEvents_bl && (s.hasInitialTestEvents_bl = !1, s.isMobile_bl ? s.hasPointerEvent_bl ? (s.screenToTest.screen.removeEventListener("pointerdown", s.onMouseOrTouchUpdate), s.screenToTest.screen.removeEventListener("MSPointerMove", s.onMouseOrTouchUpdate)) : s.screenToTest.screen.removeEventListener("touchstart", s.onMouseOrTouchUpdate) : n.removeEventListener ? n.removeEventListener("mousemove", s.onMouseOrTouchUpdate) : document.detachEvent && document.detachEvent("onmousemove", s.onMouseOrTouchUpdate))
        }, s.addMouseOrTouchCheck2 = function() {
            s.addSecondTestEvents_bl || (s.addSecondTestEvents_bl = !0, s.screenToTest.screen.addEventListener ? s.screenToTest.screen.addEventListener("mousemove", s.secondTestMoveDummy) : s.screenToTest.screen.attachEvent && s.screenToTest.screen.attachEvent("onmousemove", s.secondTestMoveDummy))
        }, s.removeMouseOrTouchCheck2 = function() {
            s.addSecondTestEvents_bl && (s.addSecondTestEvents_bl = !1, s.screenToTest.screen.removeEventListener ? s.screenToTest.screen.removeEventListener("mousemove", s.secondTestMoveDummy) : s.screenToTest.screen.detachEvent && s.screenToTest.screen.detachEvent("onmousemove", s.secondTestMoveDummy))
        }, this.secondTestMoveDummy = function() {
            s.removeMouseOrTouchCheck2(), s.addMouseOrTouchCheck()
        }, s.onMouseOrTouchUpdate = function(e) {
            var t = FWDEVPUtils.getViewportMouseCoordinates(e);
            s.globalX != t.screenX && s.globalY != t.screenY && (s.currentTime = (new Date).getTime()), s.globalX = t.screenX, s.globalY = t.screenY, s.isMobile_bl || FWDEVPUtils.hitTest(s.screenToTest.screen, s.globalX, s.globalY) || (s.removeMouseOrTouchCheck(), s.addMouseOrTouchCheck2())
        }, s.update = function(e) {
            (new Date).getTime() > s.currentTime + s.hideDelay ? s.dispatchOnceShow_bl && (s.dispatchOnceHide_bl = !0, s.dispatchOnceShow_bl = !1, s.dispatchEvent(l.HIDE), clearTimeout(s.hideCompleteId_to), s.hideCompleteId_to = setTimeout(function() {
                s.dispatchEvent(l.HIDE_COMPLETE)
            }, 1e3)) : s.dispatchOnceHide_bl && (clearTimeout(s.hideCompleteId_to), s.dispatchOnceHide_bl = !1, s.dispatchOnceShow_bl = !0, s.dispatchEvent(l.SHOW))
        }, s.reset = function() {
            clearTimeout(s.hideCompleteId_to), s.currentTime = (new Date).getTime(), s.dispatchEvent(l.SHOW)
        }, s.destroy = function() {
            s.removeMouseOrTouchCheck(), clearInterval(s.checkIntervalId_int), s.screenToTest = null, e = null, s.init = null, s.start = null, s.stop = null, s.addMouseOrTouchCheck = null, s.removeMouseOrTouchCheck = null, s.onMouseOrTouchUpdate = null, s.update = null, s.reset = null, s.destroy = null, i.destroy(), s = i = null, l.prototype = null
        }, s.init()
    };
    l.HIDE = "hide", l.SHOW = "show", l.HIDE_COMPLETE = "hideComplete", l.setPrototype = function() {
        l.prototype = new FWDEVPEventDispatcher
    }, n.FWDEVPHider = l
}(window),
function(e) {
    var o = function(i, e, t) {
        var n = this;
        o.prototype;
        this.bk_do = null, this.textHolder_do = null, this.warningIconPath_str = e, this.showErrorInfo_bl = t, this.show_to = null, this.isShowed_bl = !1, this.isShowedOnce_bl = !1, this.allowToRemove_bl = !0, this.init = function() {
            n.setResizableSizeAfterParent(), n.bk_do = new FWDEVPDisplayObject("div"), n.bk_do.setAlpha(.2), n.bk_do.setBkColor("#000000"), n.addChild(n.bk_do), n.textHolder_do = new FWDEVPDisplayObject("div"), FWDEVPUtils.isIEAndLessThen9 || (n.textHolder_do.getStyle().font = "Arial"), n.textHolder_do.getStyle().wordWrap = "break-word", n.textHolder_do.getStyle().padding = "10px", n.textHolder_do.getStyle().paddingLeft = "42px", n.textHolder_do.getStyle().lineHeight = "18px", n.textHolder_do.getStyle().color = "#000000", n.textHolder_do.setBkColor("#EEEEEE");
            var e = new Image;
            e.src = this.warningIconPath_str, this.img_do = new FWDEVPDisplayObject("img"), this.img_do.setScreen(e), this.img_do.setWidth(28), this.img_do.setHeight(28), n.addChild(n.textHolder_do), n.addChild(n.img_do)
        }, this.showText = function(e) {
            n.isShowedOnce_bl || (n.hasPointerEvent_bl ? n.screen.addEventListener("pointerdown", n.closeWindow) : (n.screen.addEventListener("mousedown", n.closeWindow), n.screen.addEventListener("touchstart", n.closeWindow)), n.isShowedOnce_bl = !0), n.setVisible(!1), n.textHolder_do.getStyle().paddingBottom = "10px", n.textHolder_do.setInnerHTML(e), clearTimeout(n.show_to), n.show_to = setTimeout(n.show, 60), setTimeout(function() {
                n.positionAndResize()
            }, 10)
        }, this.show = function() {
            var e = Math.min(640, i.stageWidth - 120);
            n.isShowed_bl = !0, n.textHolder_do.setWidth(e), setTimeout(function() {
                n.showErrorInfo_bl && n.setVisible(!0), n.positionAndResize()
            }, 100)
        }, this.positionAndResize = function() {
            var e = n.textHolder_do.getWidth(),
                t = n.textHolder_do.getHeight(),
                o = parseInt((i.stageWidth - e) / 2),
                s = parseInt((i.stageHeight - t) / 2);
            n.bk_do.setWidth(i.stageWidth), n.bk_do.setHeight(i.stageHeight), n.textHolder_do.setX(o), n.textHolder_do.setY(s), n.img_do.setX(o + 6), n.img_do.setY(s + parseInt((n.textHolder_do.getHeight() - n.img_do.h) / 2))
        }, this.closeWindow = function() {
            if (n.allowToRemove_bl) {
                n.isShowed_bl = !1, clearTimeout(n.show_to);
                try {
                    i.main_do.removeChild(n)
                } catch (e) {}
            }
        }, this.init()
    };
    o.setPrototype = function() {
        o.prototype = new FWDEVPDisplayObject("div", "relative")
    }, o.prototype = null, e.FWDEVPInfo = o
}(window),
function(window) {
    var FWDEVPlayer = function(props) {
            var self = this,
                recoverDecodingErrorDate, recoverSwapAudioCodecDate;

            function handleMediaError() {
                if (autoRecoverError) {
                    var e = performance.now();
                    !recoverDecodingErrorDate || 3e3 < e - recoverDecodingErrorDate ? (recoverDecodingErrorDate = performance.now(), self.HLSError_str = "try to recover media Error ...", self.hlsJS.recoverMediaError()) : !recoverSwapAudioCodecDate || 3e3 < e - recoverSwapAudioCodecDate ? (recoverSwapAudioCodecDate = performance.now(), self.HLSError_str = "try to swap Audio Codec and recover media Error ...", self.hlsJS.swapAudioCodec(), self.hlsJS.recoverMediaError()) : self.HLSError_str = "cannot recover, last media error recovery failed ..."
                }
                self.HLSError_str && (console && console.log(self.HLSError_str), self.info_do.allowToRemove_bl = !1, self.main_do.addChild(self.info_do), self.info_do.showText(self.HLSError_str), self.resizeHandler())
            }
            this.props = props, this.isInstantiate_bl = !1, this.displayType = props.displayType || FWDEVPlayer.RESPONSIVE, self.displayType.toLowerCase() != FWDEVPlayer.RESPONSIVE && self.displayType.toLowerCase() != FWDEVPlayer.FULL_SCREEN && self.displayType.toLowerCase() != FWDEVPlayer.AFTER_PARENT && self.displayType.toLowerCase() != FWDEVPlayer.STICKY && self.displayType.toLowerCase() != FWDEVPlayer.LIGHTBOX && (self.displayType = FWDEVPlayer.RESPONSIVE), props.displayType.toLowerCase() == FWDEVPlayer.BACKGROUND_VIDEO && (self.displayType = FWDEVPlayer.BACKGROUND_VIDEO), self.displayType = self.displayType.toLowerCase(), "pause" != FWDEVPlayer.videoStartBehaviour && "stop" != FWDEVPlayer.videoStartBehaviour && "default" != FWDEVPlayer.videoStartBehaviour && (FWDEVPlayer.videoStartBehaviour = "pause"), this.maxWidth = props.maxWidth || 640, this.maxHeight = props.maxHeight || 380, self.showPreloader_bl = props.showPreloader, self.showPreloader_bl = "no" != self.showPreloader_bl, this.disableDoubleClickFullscreen_bl = props.disableDoubleClickFullscreen || "no", this.disableDoubleClickFullscreen_bl = "yes" == this.disableDoubleClickFullscreen_bl, self.mainFolderPath_str = props.mainFolderPath, self.mainFolderPath_str.lastIndexOf("/") + 1 != self.mainFolderPath_str.length && (self.mainFolderPath_str += "/"), this.skinPath_str = props.skinPath, self.skinPath_str.lastIndexOf("/") + 1 != self.skinPath_str.length && (self.skinPath_str += "/"), this.warningIconPath_str = self.mainFolderPath_str + this.skinPath_str + "warningIcon.png", this.fillEntireVideoScreen_bl = !1, this.isShowedFirstTime_bl = !0, FWDEVPlayer.instaces_ar.push(this), self.init = function() {
                if (!self.isInstantiate_bl)
                    if (self.getTimeStamp(), FWDTweenLite.ticker.useRAF(!1), this.props_obj = props, this.instanceName_str = this.props_obj.instanceName, this.mustHaveHolderDiv_bl = !1, this.instanceName_str)
                        if (window[this.instanceName_str]) console.log("FWDEVPlayer instance name " + this.instanceName_str + " is already defined and contains a different instance reference, set a different instance name.");
                        else if ((window[this.instanceName_str] = this).props_obj)
                    if (this.props_obj.parentId)
                        if (self.displayType != FWDEVPlayer.RESPONSIVE && self.displayType != FWDEVPlayer.AFTER_PARENT || (self.mustHaveHolderDiv_bl = !0), !self.mustHaveHolderDiv_bl || FWDEVPUtils.getChildById(self.props_obj.parentId)) {
                            var e, t, o, s, i, n = FWDEVPUtils.getUrlArgs(window.location.search).EVPInstanceName;
                            self.instanceName_str == n && (FWDEVPlayer.isEmbedded_bl = !0, self.isEmbedded_bl = !0), this.position_str = self.props_obj.verticalPosition, this.position_str || (this.position_str = FWDEVPlayer.POSITION_TOP), "bottom" == this.position_str ? this.position_str = FWDEVPlayer.POSITION_BOTTOM : this.position_str = FWDEVPlayer.POSITION_TOP, this.horizontalPosition_str = self.props_obj.horizontalPosition, this.horizontalPosition_str || (this.horizontalPosition_str = FWDEVPlayer.CENTER), "center" == this.horizontalPosition_str ? this.horizontalPosition_str = FWDEVPlayer.CENTER : "left" == this.horizontalPosition_str ? this.horizontalPosition_str = FWDEVPlayer.LEFT : "right" == this.horizontalPosition_str ? this.horizontalPosition_str = FWDEVPlayer.RIGHT : this.horizontalPosition_str = FWDEVPlayer.CENTER, self.isShowed_bl = self.props.showPlayerByDefault, self.isShowed_bl = "no" != self.isShowed_bl, self.preloaderColors = self.props_obj.preloaderColors || ["#666666", "#FFFFFF"], this.offsetX = parseInt(props.offsetX) || 0, this.offsetY = parseInt(props.offsetY) || 0, self.isEmbedded_bl && (self.displayType = FWDEVPlayer.FULL_SCREEN), this.body = document.getElementsByTagName("body")[0], this.stageContainer = null, self.displayType == FWDEVPlayer.STICKY ? (this.stageContainer = document.createElement("div"), this.stageContainer.style.position = "fixed", this.stageContainer.style.width = "100%", this.stageContainer.style.zIndex = "999999", this.stageContainer.style.height = "0px", document.documentElement.appendChild(this.stageContainer), this.stageContainer.style.overflow = "visible") : self.displayType == FWDEVPlayer.FULL_SCREEN || self.displayType == FWDEVPlayer.BACKGROUND_VIDEO || self.displayType == FWDEVPlayer.LIGHTBOX ? FWDEVPUtils.isIEAndLessThen9 ? self.stageContainer = self.body : self.stageContainer = document.documentElement : this.stageContainer = FWDEVPUtils.getChildById(self.props_obj.parentId), this.listeners = {
                                events_ar: []
                            }, this.customContextMenu_do = null, this.info_do = null, this.main_do = null, this.ytb_do = null, this.preloader_do = null, this.controller_do = null, this.videoScreen_do = null, this.flash_do = null, this.flashObject = null, this.videoPoster_do = null, this.largePlayButton_do = null, this.hider = null, this.embedWindow_do = null, this.facebookShare = null, this.lightBox_do = null, this.lightBoxBackgroundOpacity = self.props_obj.lightBoxBackgroundOpacity || 1, this.lightBoxBackgroundColor_str = self.props_obj.lightBoxBackgroundColor || "transparent", this.lightBoxWidth = self.props_obj.maxWidth || 500, this.lightBoxHeight = self.props_obj.maxHeight || 400, this.finalLightBoxWidth, this.finalLightBoxHeight, this.backgroundColor_str = self.props_obj.backgroundColor || "transparent", this.videoBackgroundColor_str = "#000000", this.flashObjectMarkup_str = null, this.lastX = 0, this.lastY = 0, this.stageWidth = 0, this.stageHeight = 0, this.firstTapX, this.firstTapY, this.curTime, this.totalTime, this.videoSourcePath_str, this.prevVideoSourcePath_str, this.posterPath_str = self.props_obj.posterPath, this.videoType_str, this.videoStartBehaviour_str, this.prevVideoSource_str, this.prevPosterSource_str, this.finalVideoPath_str, this.resizeHandlerId_to, this.resizeHandler2Id_to, this.hidePreloaderId_to, this.orientationChangeId_to, this.disableClickId_to, this.clickDelayId_to, this.secondTapId_to, this.autoScale_bl = self.props_obj.autoScale, this.autoScale_bl = "yes" == self.autoScale_bl, self.showErrorInfo_bl = self.props_obj.showErrorInfo, self.showErrorInfo_bl = "no" != self.showErrorInfo_bl, this.isVideoPlayingWhenOpenWindows_bl = !1, this.isSpaceDown_bl = !1, this.isPlaying_bl = !1, this.firstTapPlaying_bl = !1, this.stickOnCurrentInstanceKey_bl = !1, this.isFullScreen_bl = !1, this.isFlashScreenReady_bl = !1, this.orintationChangeComplete_bl = !0, this.disableClick_bl = !1, self.mainBackgroundImagePath_str = self.props_obj.mainBackgroundImagePath, self.mainBackgroundImagePath_str && self.mainBackgroundImagePath_str.length < 3 && (self.mainBackgroundImagePath_str = void 0), this.isAPIReady_bl = !1, this.isInstantiate_bl = !0, this.isAdd_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, self.initializeOnlyWhenVisible_bl = self.props_obj.initializeOnlyWhenVisible, self.initializeOnlyWhenVisible_bl = "yes" == self.initializeOnlyWhenVisible_bl, self.googleAnalyticsTrackingCode = self.props_obj.googleAnalyticsTrackingCode, !window.ga && self.googleAnalyticsTrackingCode ? (e = window, t = document, o = "ga", e.GoogleAnalyticsObject = o, e.ga = e.ga || function() {
                                (e.ga.q = e.ga.q || []).push(arguments)
                            }, e.ga.l = 1 * new Date, s = t.createElement("script"), i = t.getElementsByTagName("script")[0], s.async = 1, s.src = "https://www.google-analytics.com/analytics.js", i.parentNode.insertBefore(s, i), ga("create", self.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview")) : window.ga && self.googleAnalyticsTrackingCode && (ga("create", self.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview")), self.displayType == FWDEVPlayer.LIGHTBOX ? self.setupLightBox() : self.displayType == FWDEVPlayer.STICKY ? (self.setupPlayer(), this.startResizeHandler()) : self.initializeOnlyWhenVisible_bl ? (this.startResizeHandler(), window.addEventListener("scroll", self.onInitlalizeScrollHandler), setTimeout(self.onInitlalizeScrollHandler, 500)) : (self.setupPlayer(), this.startResizeHandler())
                        } else alert("FWDEVPlayer holder div is not found, please make sure that the div exsists and the id is correct! " + self.props_obj.parentId);
                else alert("Property parentId is not defined in the FWDEVPlayer constructor, self property represents the div id into which the megazoom is added as a child!");
                else alert("FWDEVPlayer constructor properties object is not defined!");
                else alert("FWDEVPlayer instance name is requires please make sure that the instanceName parameter exsists and it's value is uinique.")
            }, self.setupLightBox = function() {
                FWDEVPLightBox.setPrototype(), self.lightBox_do = new FWDEVPLightBox(self, self.lightBoxBackgroundColor_str, self.backgroundColor_str, self.lightBoxBackgroundOpacity, self.lightBoxWidth, self.lightBoxHeight), self.lightBox_do.addListener(FWDEVPLightBox.SHOW, self.lightBoxShowHandler), self.lightBox_do.addListener(FWDEVPLightBox.CLOSE, self.lightBoxCloseHandler), self.lightBox_do.addListener(FWDEVPLightBox.HIDE_COMPLETE, self.lightBoxHideCompleteHandler), self.lighboxAnimDoneId_to = setTimeout(self.setupPlayer, 1200)
            }, self.lightBoxShowHandler = function() {}, self.lightBoxCloseHandler = function() {
                self.stop(), self.stopResizeHandler()
            }, self.lightBoxHideCompleteHandler = function() {
                self.dispatchEvent(FWDEVPlayer.HIDE_LIGHTBOX_COMPLETE)
            }, self.onInitlalizeScrollHandler = function() {
                var e = FWDEVPUtils.getScrollOffsets();
                self.pageXOffset = e.x, self.pageYOffset = e.y, self.main_do.getRect().top >= -self.stageHeight && self.main_do.getRect().top < self.ws.h && (window.removeEventListener("scroll", self.onInitlalizeScrollHandler), self.setupPlayer())
            }, this.setupPlayer = function() {
                self.main_do || (self.setupMainDo(), self.setupInfo(), self.setupData())
            }, self.setupMainDo = function() {
                self.main_do = new FWDEVPDisplayObject("div", "relative"), self.hasPointerEvent_bl && (self.main_do.getStyle().touchAction = "none"), self.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", self.main_do.getStyle().webkitFocusRingColor = "rgba(0, 0, 0, 0)", self.main_do.getStyle().width = "100%", self.main_do.getStyle().height = "100%", self.main_do.setBackfaceVisibility(), self.main_do.setBkColor(self.backgroundColor_str), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && self.main_do.setSelectable(!1), self.displayType == FWDEVPlayer.STICKY ? (self.background_do = new FWDEVPDisplayObject("div"), self.background_do.getStyle().width = "100%", self.mainBackgroundImagePath_str && (self.mainBackground_do = new FWDEVPDisplayObject("div"), self.stageContainer.appendChild(self.mainBackground_do.screen)), self.stageContainer.appendChild(self.background_do.screen), self.stageContainer.appendChild(self.main_do.screen)) : self.displayType == FWDEVPlayer.FULL_SCREEN ? (self.stageContainer.style.overflow = "hidden", self.main_do.getStyle().position = "absolute", document.documentElement.appendChild(self.main_do.screen), self.stageContainer.style.zIndex = 9999999999998, self.main_do.getStyle().zIndex = 9999999999998) : self.displayType == FWDEVPlayer.BACKGROUND_VIDEO ? (document.documentElement.appendChild(self.main_do.screen), self.main_do.getStyle().zIndex = -9999999999998, self.main_do.getStyle().position = "fixed", document.documentElement.insertBefore(self.main_do.screen, document.documentElement.firstChild)) : self.displayType == FWDEVPlayer.LIGHTBOX ? (self.main_do.getStyle().position = "absolute", self.stageContainer.appendChild(self.main_do.screen), self.main_do.setX(-1e4), self.main_do.setY(-1e4), self.main_do.setWidth(0), self.main_do.setHeight(0)) : (self.stageContainer.style.overflow = "hidden", self.stageContainer.appendChild(self.main_do.screen)), self.isEmbedded_bl && (self.main_do.getStyle().zIndex = 9999999999998)
            }, self.setupInfo = function() {
                FWDEVPInfo.setPrototype(), self.info_do = new FWDEVPInfo(self, self.warningIconPath_str, self.showErrorInfo_bl)
            }, self.startResizeHandler = function() {
                window.addEventListener("resize", self.onResizeHandler), self.displayType == FWDEVPlayer.STICKY && (FWDEVPUtils.isAndroid && window.addEventListener("orientationchange", self.orientationChange), window.addEventListener("scroll", self.onScrollHandler)), self.displayType == FWDEVPlayer.LIGHTBOX && window.addEventListener("scroll", self.onScrollHandler), self.onResizeHandler(!0), self.resizeHandlerId_to = setTimeout(function() {
                    self.resizeHandler(!0)
                }, 500)
            }, self.onScrollHandler = function(e) {
                if (self.displayType == FWDEVPlayer.STICKY && self.onResizeHandler(), !self.lightbox_do || self.lightbox_do.isShowed_bl) {
                    self.scrollHandler();
                    var t = FWDEVPUtils.getScrollOffsets();
                    self.scrollOffsets = t
                }
            }, self.scrollHandler = function() {
                var e = FWDEVPUtils.getScrollOffsets();
                self.pageXOffset = e.x, self.pageYOffset = e.y, self.displayType == FWDEVPlayer.LIGHTBOX ? (self.lightBox_do.setX(e.x), self.lightBox_do.setY(e.y)) : (self.isFullScreen_bl || self.displayType == FWDEVPlayer.FULL_SCREEN) && (self.main_do.setX(e.x), self.main_do.setY(e.y))
            }, self.stopResizeHandler = function() {
                window.removeEventListener ? (window.removeEventListener("resize", self.onResizeHandler), window.removeEventListener("scroll", self.onScrollHandler)) : window.detachEvent && window.detachEvent("onresize", self.onResizeHandler), clearTimeout(self.resizeHandlerId_to)
            }, self.onResizeHandler = function(e) {
                self.resizeHandler(), clearTimeout(self.resizeHandler2Id_to), self.resizeHandler2Id_to = setTimeout(function() {
                    self.resizeHandler()
                }, 300)
            }, this.orientationChange = function() {
                self.orintationChangeComplete_bl = !1, clearTimeout(self.resizeHandlerId_to), clearTimeout(self.resizeHandler2Id_to), clearTimeout(self.orientationChangeId_to), self.orientationChangeId_to = setTimeout(function() {
                    self.orintationChangeComplete_bl = !0, self.resizeHandler(!0)
                }, 1e3), self.stageContainer.style.left = "-5000px", self.preloader_do && self.preloader_do.setX(-5e3)
            }, self.resizeHandler = function(e) {
                var t = FWDEVPUtils.getViewportSize(),
                    o = FWDEVPUtils.getScrollOffsets();
                if (self.ws = t, self.displayType != FWDEVPlayer.STICKY || self.isFullScreen_bl)
                    if (self.displayType != FWDEVPlayer.LIGHTBOX || self.isFullScreen_bl) self.isFullScreen_bl || self.displayType == FWDEVPlayer.FULL_SCREEN || self.displayType == FWDEVPlayer.BACKGROUND_VIDEO ? (self.main_do.setX(0), self.main_do.setY(0), self.stageWidth = t.w, self.stageHeight = t.h) : self.displayType == FWDEVPlayer.AFTER_PARENT ? (self.stageWidth = self.stageContainer.offsetWidth, self.stageHeight = self.stageContainer.offsetHeight) : (self.stageContainer.style.width = "100%", self.stageContainer.offsetWidth > self.maxWidth && (self.stageContainer.style.width = self.maxWidth + "px"), self.stageWidth = self.stageContainer.offsetWidth, self.autoScale_bl ? self.stageHeight = parseInt(self.maxHeight * (self.stageWidth / self.maxWidth)) : self.stageHeight = self.maxHeight, self.stageContainer.style.height = self.stageHeight + "px");
                    else {
                        if (!self.lightBox_do.isShowed_bl || !self.main_do) return;
                        self.lightBoxWidth > t.w ? (self.finalLightBoxWidth = t.w, self.finalLightBoxHeight = parseInt(self.lightBoxHeight * (t.w / self.lightBoxWidth))) : (self.finalLightBoxWidth = self.lightBoxWidth, self.finalLightBoxHeight = self.lightBoxHeight), self.lightBox_do.setWidth(t.w), self.lightBox_do.setHeight(t.h), self.lightBox_do.setX(o.x), self.lightBox_do.setY(o.y), self.lightBox_do.mainLightBox_do.setX(parseInt((t.w - self.finalLightBoxWidth) / 2)), self.lightBox_do.mainLightBox_do.setY(parseInt((t.h - self.finalLightBoxHeight) / 2)), self.lightBox_do.closeButton_do && self.lightBox_do.isShowed_bl && (self.lightBox_do.closeButton_do.setX(t.w - self.lightBox_do.closeButton_do.w - 4), self.lightBox_do.closeButton_do.setY(4)), self.main_do.setX(0), self.main_do.setY(0), self.lightBox_do.mainLightBox_do.setWidth(self.finalLightBoxWidth), self.lightBox_do.mainLightBox_do.setHeight(self.finalLightBoxHeight), self.stageWidth = self.finalLightBoxWidth, self.stageHeight = self.finalLightBoxHeight
                    }
                else self.main_do.getStyle().width = "100%", self.main_do.getWidth() > self.maxWidth && self.main_do.setWidth(self.maxWidth), self.stageWidth = self.main_do.getWidth(), self.autoScale_bl ? self.stageHeight = parseInt(self.maxHeight * (self.stageWidth / self.maxWidth)) : self.stageHeight = self.maxHeight;
                if (self.tempVidStageWidth = self.stageWidth, self.tempVidStageHeight = self.stageHeight, self.main_do.setWidth(self.stageWidth), self.main_do.setHeight(self.stageHeight), self.fillEntireVideoScreen_bl && self.videoType_str == FWDEVPlayer.VIDEO) {
                    if (self.videoScreen_do && self.videoScreen_do.video_el && 0 != self.videoScreen_do.video_el.videoWidth) {
                        var s = self.videoScreen_do.video_el.videoWidth,
                            i = self.videoScreen_do.video_el.videoHeight,
                            n = self.tempVidStageWidth / s,
                            l = self.tempVidStageHeight / i;
                        totalScale = 0, l <= n ? totalScale = n : n <= l && (totalScale = l), finalW = parseInt(s * totalScale), finalH = parseInt(i * totalScale), finalX = parseInt((self.stageWidth - finalW) / 2), finalY = parseInt((self.stageHeight - finalH) / 2), self.videoScreen_do.setWidth(finalW), self.videoScreen_do.setHeight(finalH), self.videoScreen_do.setX(finalX), self.videoScreen_do.setY(finalY)
                    }
                } else self.audioScreen_do && self.videoType_str == FWDEVPlayer.MP3 ? (self.audioScreen_do.resizeAndPosition(self.stageWidth, self.stageHeight), self.audioScreen_do.setX(0), self.audioScreen_do.setY(0)) : !self.videoScreen_do || self.videoType_str != FWDEVPlayer.VIDEO && self.videoType_str != FWDEVPlayer.HLS_JS || (self.videoScreen_do.resizeAndPosition(self.stageWidth, self.stageHeight), self.videoScreen_do.setX(0), self.videoScreen_do.setY(0));
                self.popw_do && self.popw_do.isShowed_bl && self.popw_do.positionAndResize(), self.ytb_do && self.videoType_str == FWDEVPlayer.YOUTUBE && (self.ytb_do.setWidth(self.stageWidth), self.ytb_do.setHeight(self.stageHeight)), self.vimeo_do && self.videoType_str == FWDEVPlayer.VIMEO && (self.vimeo_do.setWidth(self.stageWidth), self.vimeo_do.setHeight(self.stageHeight)), self.positionAdsImage(), self.logo_do && self.logo_do.positionAndResize(), self.controller_do && self.controller_do.resizeAndPosition(), self.ytb_do && self.ytb_do.ytb && self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do.resizeAndPosition(), self.preloader_do && self.positionPreloader(), self.resizeDumyHandler(), self.largePlayButton_do && self.positionLargePlayButton(), self.videoPoster_do && self.videoPoster_do.allowToShow_bl && self.videoPoster_do.positionAndResize(), self.embedWindow_do && self.embedWindow_do.isShowed_bl && self.embedWindow_do.positionAndResize(), self.passWindow_do && self.passWindow_do.isShowed_bl && self.passWindow_do.positionAndResize(), self.shareWindow_do && self.shareWindow_do.isShowed_bl && self.shareWindow_do.positionAndResize(), self.adsStart_do && self.positionAds(), self.subtitle_do && self.subtitle_do.position(), self.popupAds_do && self.popupAds_do.position(), self.annotations_do && self.annotations_do.position(), self.mainBackground_do && (self.mainBackground_do.setWidth(self.ws.w), self.mainBackground_do.setHeight(self.stageHeight)), self.displayType == FWDEVPlayer.STICKY && self.setStageContainerFinalHeightAndPosition(e)
            }, this.resizeDumyHandler = function() {
                self.dumyClick_do && (self.is360 && self.videoType_str == FWDEVPlayer.YOUTUBE ? self.dumyClick_do.setWidth(0) : (self.dumyClick_do.setWidth(self.stageWidth), self.isMobile_bl, self.dumyClick_do.setHeight(self.stageHeight)))
            }, this.setStageContainerFinalHeightAndPosition = function(e) {
                self.allowToResizeAndPosition_bl = !0, clearTimeout(self.showPlaylistWithDelayId_to), self.horizontalPosition_str == FWDEVPlayer.LEFT ? (self.main_do.setX(self.offsetX), self.opener_do && ("right" == self.data.openerAlignment_str ? self.opener_do.setX(Math.round(self.stageWidth - self.opener_do.w + self.offsetX)) : self.opener_do.setX(self.offsetX))) : self.horizontalPosition_str == FWDEVPlayer.CENTER ? (self.main_do.setX(Math.round((self.ws.w - self.stageWidth) / 2)), self.opener_do && ("right" == self.data.openerAlignment_str ? self.opener_do.setX(parseInt((self.ws.w - self.stageWidth) / 2) + self.stageWidth - self.opener_do.w) : self.opener_do.setX(self.main_do.x))) : self.horizontalPosition_str == FWDEVPlayer.RIGHT && (self.main_do.setX(Math.round(self.ws.w - self.stageWidth - self.offsetX)), self.opener_do && ("right" == self.data.openerAlignment_str ? self.opener_do.setX(Math.round(self.ws.w - self.opener_do.w - self.offsetX)) : self.opener_do.setX(Math.round(self.ws.w - self.stageWidth - self.offsetX)))), e ? (self.opener_do && FWDAnimation.killTweensOf(self.opener_do), self.position_str == FWDEVPlayer.POSITION_TOP ? (self.isShowed_bl && !self.isShowedFirstTime_bl ? FWDAnimation.to(self.stageContainer, .8, {
                    css: {
                        top: self.offsetY
                    },
                    ease: Expo.easeInOut
                }) : FWDAnimation.to(self.stageContainer, .8, {
                    css: {
                        top: -self.stageHeight
                    },
                    ease: Expo.easeInOut
                }), self.isShowedFirstTime_bl ? self.opener_do && FWDAnimation.to(self.opener_do, .8, {
                    y: self.stageHeight - self.opener_do.h,
                    ease: Expo.easeInOut
                }) : self.opener_do && FWDAnimation.to(self.opener_do, .8, {
                    y: self.stageHeight,
                    ease: Expo.easeInOut
                })) : (self.isShowed_bl && !self.isShowedFirstTime_bl ? FWDAnimation.to(self.stageContainer, .8, {
                    css: {
                        top: self.ws.h - self.stageHeight - self.offsetY
                    },
                    ease: Expo.easeInOut
                }) : FWDAnimation.to(self.stageContainer, .8, {
                    css: {
                        top: self.ws.h
                    },
                    ease: Expo.easeInOut,
                    onComplete: self.moveWheyLeft
                }), self.isShowedFirstTime_bl ? self.opener_do && FWDAnimation.to(self.opener_do, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }) : self.opener_do && FWDAnimation.to(self.opener_do, .8, {
                    y: -self.opener_do.h,
                    ease: Expo.easeInOut
                }))) : self.position_str == FWDEVPlayer.POSITION_TOP ? (self.isShowed_bl && !self.isShowedFirstTime_bl ? self.stageContainer.style.top = self.offsetY + "px" : self.stageContainer.style.top = -self.stageHeight + "px", self.isShowedFirstTime_bl ? self.opener_do && self.opener_do.setY(self.stageHeight - self.opener_do.h) : self.opener_do && self.opener_do.setY(self.stageHeight)) : (self.isShowed_bl && !self.isShowedFirstTime_bl ? self.stageContainer.style.top = self.ws.h - self.stageHeight - self.offsetY + "px" : self.stageContainer.style.top = self.ws.h + "px", self.isShowedFirstTime_bl ? self.opener_do && self.opener_do.setY(0) : self.opener_do && self.opener_do.setY(-self.opener_do.h))
            }, this.setupClickScreen = function() {
                self.dumyClick_do = new FWDEVPDisplayObject("div"), self.displayType != FWDEVPlayer.BACKGROUND_VIDEO && (self.hasPointerEvent_bl ? (self.dumyClick_do.screen.addEventListener("pointerdown", self.playPauseDownHandler), self.dumyClick_do.screen.addEventListener("pointerup", self.playPauseClickHandler), self.dumyClick_do.screen.addEventListener("pointermove", self.playPauseMoveHandler)) : self.isMobile_bl ? self.dumyClick_do.screen.addEventListener("click", self.playPauseClickHandler) : (self.dumyClick_do.screen.addEventListener("mousedown", self.playPauseDownHandler), self.dumyClick_do.screen.addEventListener("mouseup", self.playPauseClickHandler), self.dumyClick_do.screen.addEventListener("mousemove", self.playPauseMoveHandler))), self.hideClickScreen(), self.main_do.addChild(self.dumyClick_do)
            }, this.playPauseDownHandler = function(e) {
                self.isClickHandlerMoved_bl = !1;
                var t = FWDEVPUtils.getViewportMouseCoordinates(e);
                self.firstDommyTapX = t.screenX, self.firstDommyTapY = t.screenY, self.is360 && (self.dumyClick_do.getStyle().cursor = "url(" + self.data.grabPath_str + "), default")
            }, this.playPauseMoveHandler = function(e) {
                var t, o, s = FWDEVPUtils.getViewportMouseCoordinates(e);
                e.touches && 1 != e.touches.length || (t = Math.abs(s.screenX - self.firstDommyTapX), o = Math.abs(s.screenY - self.firstDommyTapY), self.isMobile_bl && (10 < t || 10 < o) ? self.isClickHandlerMoved_bl = !0 : !self.isMobile_bl && (2 < t || 2 < o) && (self.isClickHandlerMoved_bl = !0))
            }, this.playPauseClickHandler = function(e) {
                2 != e.button && (self.is360 && (self.dumyClick_do.getStyle().cursor = "url(" + self.data.handPath_str + "), default"), self.isClickHandlerMoved_bl || (self.isAdd_bl ? self.data.adsPageToOpenURL_str && "none" != self.data.adsPageToOpenURL_str && (self.ClickTracking && self.executeVastEvent(self.ClickTracking), window.open(self.data.adsPageToOpenURL_str, self.data.adsPageToOpenTarget_str), self.pause()) : self.disableClick_bl || (self.firstTapPlaying_bl = self.isPlaying_bl, (FWDEVPlayer.keyboardCurInstance = self).controller_do && 0 != self.controller_do.mainHolder_do.y && self.isMobile_bl || (self.isMobile_bl || (FWDEVPlayer.videoStartBehaviour == FWDEVPlayer.PAUSE_ALL_VIDEOS ? FWDEVPlayer.pauseAllVideos(self) : FWDEVPlayer.videoStartBehaviour == FWDEVPlayer.STOP_ALL_VIDEOS && FWDEVPlayer.stopAllVideos(self)), self.videoType_str == FWDEVPlayer.IMAGE || self.videoType_str == FWDEVPlayer.IFRAME ? self.togglePlayPause() : self.videoType_str == FWDEVPlayer.YOUTUBE ? self.ytb_do.togglePlayPause() : self.videoType_str == FWDEVPlayer.MP3 ? self.audioScreen_do.togglePlayPause() : FWDEVPlayer.hasHTML5Video ? self.videoScreen_do && self.videoScreen_do.togglePlayPause() : self.isFlashScreenReady_bl))))
            }, this.showClickScreen = function() {
                self.dumyClick_do.setVisible(!0), self.isAdd_bl && self.data.adsPageToOpenURL_str && "none" != self.data.adsPageToOpenURL_str ? self.dumyClick_do.setButtonMode(!0) : self.is360 ? self.dumyClick_do.getStyle().cursor = "url(" + self.data.handPath_str + "), default" : self.dumyClick_do.setButtonMode(!1)
            }, this.hideClickScreen = function() {
                self.dumyClick_do.setVisible(!1)
            }, this.disableClick = function() {
                self.disableClick_bl = !0, clearTimeout(self.disableClickId_to), self.disableClickId_to = setTimeout(function() {
                    self.disableClick_bl = !1
                }, 500)
            }, this.addDoubleClickSupport = function() {
                self.hasPointerEvent_bl ? self.dumyClick_do.screen.addEventListener("pointerdown", self.onFirstDown) : (self.isMobile_bl || (self.dumyClick_do.screen.addEventListener("mousedown", self.onFirstDown), FWDEVPUtils.isIEWebKit && self.dumyClick_do.screen.addEventListener("dblclick", self.onSecondDown)), self.dumyClick_do.screen.addEventListener("touchstart", self.onFirstDown))
            }, this.onFirstDown = function(e) {
                if (2 != e.button) {
                    self.isFullscreen_bl && e.preventDefault && e.preventDefault();
                    var t = FWDEVPUtils.getViewportMouseCoordinates(e);
                    self.firstTapX = t.screenX, self.firstTapY = t.screenY, self.firstTapPlaying_bl = self.isPlaying_bl, FWDEVPUtils.isIEWebKit || (self.hasPointerEvent_bl ? (self.dumyClick_do.screen.removeEventListener("pointerdown", self.onFirstDown), self.dumyClick_do.screen.addEventListener("pointerdown", self.onSecondDown)) : (self.isMobile_bl || (self.dumyClick_do.screen.addEventListener("mousedown", self.onSecondDown), self.dumyClick_do.screen.removeEventListener("mousedown", self.onFirstDown)), self.dumyClick_do.screen.addEventListener("touchstart", self.onSecondDown), self.dumyClick_do.screen.removeEventListener("touchstart", self.onFirstDown)), clearTimeout(self.secondTapId_to), self.secondTapId_to = setTimeout(self.doubleTapExpired, 500))
                }
            }, this.doubleTapExpired = function() {
                clearTimeout(self.secondTapId_to), self.hasPointerEvent_bl ? (self.dumyClick_do.screen.removeEventListener("pointerdown", self.onSecondDown), self.dumyClick_do.screen.addEventListener("pointerdown", self.onFirstDown)) : (self.dumyClick_do.screen.removeEventListener("touchstart", self.onSecondDown), self.dumyClick_do.screen.addEventListener("touchstart", self.onFirstDown), self.isMobile_bl || (self.dumyClick_do.screen.removeEventListener("mousedown", self.onSecondDown), self.dumyClick_do.screen.addEventListener("mousedown", self.onFirstDown)))
            }, this.onSecondDown = function(e) {
                e.preventDefault && e.preventDefault();
                var t, o, s = FWDEVPUtils.getViewportMouseCoordinates(e);
                FWDEVPUtils.isIEWebKit && (self.firstTapPlaying_bl = self.isPlaying_bl), e.touches && 1 != e.touches.length || (t = Math.abs(s.screenX - self.firstTapX), o = Math.abs(s.screenY - self.firstTapY), 10 < t || 10 < o || (self.switchFullScreenOnDoubleClick(e), FWDEVPUtils.isIEWebKit || (self.firstTapPlaying_bl ? self.play() : self.pause())))
            }, this.switchFullScreenOnDoubleClick = function(e) {
                self.disableClick(), self.isFullScreen_bl ? self.goNormalScreen() : self.goFullScreen()
            }, this.setupVimeoAPI = function() {
                if (!self.vimeo_do)
                    if ("undefined" != typeof Vimeo && Vimeo.Player) self.setupVimeoPlayer();
                    else if (FWDEVPlayer.isVimeoAPILoadedOnce_bl) self.keepCheckingVimeoAPI_int = setInterval(function() {
                    "undefined" != typeof Vimeo && Vimeo && Vimeo.Player && (-1 == self.videoSourcePath_str.indexOf("vimeo.") && clearInterval(self.keepCheckingVimeoAPI_int), clearInterval(self.keepCheckingVimeoAPI_int), self.setupVimeoPlayer())
                }, 50);
                else {
                    var e = document.createElement("script");
                    e.src = "https://player.vimeo.com/api/player.js";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t), e.onload = function() {
                        self.keepCheckingVimeoAPI_int = setInterval(function() {
                            "undefined" != typeof Vimeo && Vimeo && Vimeo.Player && (clearInterval(self.keepCheckingVimeoAPI_int), self.setupVimeoPlayer())
                        }, 50)
                    }, e.onerror = function() {
                        setTimeout(function() {
                            self.main_do.addChild(self.info_do), self.info_do.showText("Error loading Vimeo API"), self.preloader_do.hide()
                        }, 500)
                    }, self.largePlayButton_do && self.largePlayButton_do.hide(), FWDEVPlayer.isVimeoAPILoadedOnce_bl = !0
                }
            }, self.isVimeoReady_bl = !1, this.setupVimeoPlayer = function() {
                self.vimeo_do || (FWDEVPVimeoScreen.setPrototype(), self.vimeo_do = new FWDEVPVimeoScreen(self, self.data.volume), self.vimeo_do.addListener(FWDEVPVimeoScreen.READY, self.vimeoReadyHandler), self.vimeo_do.addListener(FWDEVPVimeoScreen.STOP, self.videoScreenStopHandler), self.vimeo_do.addListener(FWDEVPVimeoScreen.SAFE_TO_SCRUBB, self.videoScreenSafeToScrubbHandler), self.vimeo_do.addListener(FWDEVPVimeoScreen.PLAY, self.videoScreenPlayHandler), self.vimeo_do.addListener(FWDEVPVimeoScreen.PAUSE, self.videoScreenPauseHandler), self.vimeo_do.addListener(FWDEVPVimeoScreen.UPDATE, self.videoScreenUpdateHandler), self.vimeo_do.addListener(FWDEVPVimeoScreen.UPDATE_TIME, self.videoScreenUpdateTimeHandler), self.vimeo_do.addListener(FWDEVPVimeoScreen.LOAD_PROGRESS, self.videoScreenLoadProgressHandler), self.vimeo_do.addListener(FWDEVPVimeoScreen.PLAY_COMPLETE, self.videoScreenPlayCompleteHandler), self.vimeo_do.addListener(FWDEVPVimeoScreen.UPDATE_SUBTITLE, self.videoScreenUpdateSubtitleHandler))
            }, this.vimeoReadyHandler = function(e) {
                self.isVimeoReady_bl = !0, clearInterval(self.hidePreloaderId_to), self.vimeo_do.iFrame_do && (self.vimeo_do.iFrame_do.screen.style.left = "0px"), self.setSource(self.videoSourcePath_str), self.preloader_do && self.preloader_do.hide(!0)
            }, this.setupYoutubeAPI = function() {
                if (!self.ytb_do && !self.isYoutubeAPiCreated_bl)
                    if (self.isYoutubeAPiCreated_bl = !0, "undefined" != typeof YT && YT.Player) self.setupYoutubePlayer();
                    else if (FWDEVPlayer.isYoutubeAPILoadedOnce_bl) self.keepCheckingYoutubeAPI_int = setInterval(function() {
                    "undefined" != typeof YT && YT && YT.Player && (-1 == self.videoSourcePath_str.indexOf("youtube.") && clearInterval(self.keepCheckingYoutubeAPI_int), clearInterval(self.keepCheckingYoutubeAPI_int), self.setupYoutubePlayer())
                }, 50);
                else {
                    var e = document.createElement("script");
                    // e.src = "https://www.youtube.com/iframe_api";
                    e.src = window.location.origin + "/" + self.mainFolderPath_str + "youtube_iframe.js";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t), e.onload = function() {
                        self.checkIfYoutubePlayerIsReadyId_int = setInterval(function() {
                            YT && YT.Player && (clearInterval(self.checkIfYoutubePlayerIsReadyId_int), self.setupYoutubePlayer())
                        }, 50)
                    }, e.onerror = function() {
                        setTimeout(function() {
                            self.main_do.addChild(self.info_do), self.info_do.allowToRemove_bl = !1, self.info_do.showText("Error loading Youtube API"), self.preloader_do.hide()
                        }, 500)
                    }, FWDEVPlayer.isYoutubeAPILoadedOnce_bl = !0
                }
            }, this.setupYoutubePlayer = function() {
                FWDEVPYoutubeScreen.setPrototype(), self.ytb_do = new FWDEVPYoutubeScreen(self, self.data.volume), self.ytb_do.addListener(FWDEVPYoutubeScreen.READY, self.youtubeReadyHandler), self.ytb_do.addListener(FWDEVPVideoScreen.ERROR, self.videoScreenErrorHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.SAFE_TO_SCRUBB, self.videoScreenSafeToScrubbHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.STOP, self.videoScreenStopHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.PLAY, self.videoScreenPlayHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.PAUSE, self.videoScreenPauseHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.UPDATE, self.videoScreenUpdateHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.UPDATE_TIME, self.videoScreenUpdateTimeHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.LOAD_PROGRESS, self.videoScreenLoadProgressHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.PLAY_COMPLETE, self.videoScreenPlayCompleteHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.CUED, self.youtubeScreenCuedHandler), self.ytb_do.addListener(FWDEVPYoutubeScreen.QUALITY_CHANGE, self.youtubeScreenQualityChangeHandler), self.ytb_do.addListener(FWDEVPVideoScreen.UPDATE_SUBTITLE, self.videoScreenUpdateSubtitleHandler), self.isMobile_bl || self.ytb_do.showDisable(), clearTimeout(self.ytb_do)
            }, this.youtubeReadyHandler = function(e) {
                if (self.isYoutubeReady_bl = !0, self.videoType_str == FWDEVPlayer.YOUTUBE) {
                    if (self.ytb_do.hasBeenCreatedOnce_bl) {
                        if (-1 != self.videoSourcePath_str.indexOf(".")) return;
                        return self.isMobile_bl ? (self.setPosterSource(void 0), self.videoPoster_do.hide()) : (self.setPosterSource(self.posterPath_str), self.videoPoster_do.show()), void(-1 == self.videoSourcePath_str.indexOf(".") && self.setSource(self.videoSourcePath_str, !0, self.data.videosSource_ar[self.data.startAtVideoSource].videoType))
                    }
                    self.isMobile_bl && setTimeout(function() {
                        try {
                            self.ytb_do.ytb.a.style.left = "0px"
                        } catch (e) {}
                    }, 500), self.setSource(self.videoSourcePath_str, !0, self.data.videosSource_ar[self.data.startAtVideoSource].videoType), self.preloader_do && self.preloader_do.hide(!0)
                }
            }, this.youtubeScreenCuedHandler = function() {
                self.main_do && self.main_do.contains(self.info_do) && self.main_do.removeChild(self.info_do)
            }, this.youtubeScreenQualityChangeHandler = function(e) {
                self.videoType_str == FWDEVPlayer.VIDEO && (self.curDurration = self.videoScreen_do.curDuration), self.controller_do && self.controller_do.updateQuality(e.levels, e.qualityLevel)
            }, self.setupContextMenu = function() {
                self.customContextMenu_do = new FWDEVPContextMenu(self.main_do, self.data.rightClickContextMenu_str)
            }, this.setupOpener = function() {
                self.data.showOpener_bl && self.displayType == FWDEVPlayer.STICKY && (FWDEVPOpener.setPrototype(), self.opener_do = new FWDEVPOpener(self, self.data, self.position_str, self.isShowed_bl), self.opener_do.getStyle().zIndex = "99999999994", self.opener_do.setX(-1e3), self.isShowed_bl ? self.opener_do.showCloseButton() : self.opener_do.showOpenButton(), self.opener_do.addListener(FWDEVPOpener.SHOW, self.openerShowHandler), self.opener_do.addListener(FWDEVPOpener.HIDE, self.openerHideHandler), self.opener_do.addListener(FWDEVPOpener.PLAY, self.controllerOnPlayHandler), self.opener_do.addListener(FWDEVPOpener.PAUSE, self.controllerOnPauseHandler), self.stageContainer.appendChild(self.opener_do.screen))
            }, this.openerShowHandler = function() {
                self.showPlayer()
            }, this.openerHideHandler = function() {
                self.hidePlayer()
            }, self.setupData = function() {
                FWDEVPData.setPrototype(), self.data = new FWDEVPData(self.props_obj, self.rootElement_el, self), self.mainBackground_do && (self.mainBackground_do.getStyle().background = "url('" + self.mainBackgroundImagePath_str + "')"), self.data.addListener(FWDEVPData.VAST_LOADED, self.vastLoaded), self.data.addListener(FWDEVPData.PRELOADER_LOAD_DONE, self.onPreloaderLoadDone), self.data.addListener(FWDEVPData.LOAD_ERROR, self.dataLoadError), self.data.addListener(FWDEVPData.SKIN_PROGRESS, self.dataSkinProgressHandler), self.data.addListener(FWDEVPData.SKIN_LOAD_COMPLETE, self.dataSkinLoadComplete)
            }, self.vastLoaded = function() {
                self.updateAds(0)
            }, self.onPreloaderLoadDone = function() {
                self.setupPreloader(), self.isMobile_bl || self.setupContextMenu(), self.displayType == FWDEVPlayer.BACKGROUND_VIDEO ? (self.data.useChromeless_bl = !0, self.isMobile_bl || (self.data.autoPlay_bl = !0), self.data.loop_bl = !0, self.data.fillEntireVideoScreen_bl = self.fillEntireVideoScreen_bl = !0) : self.fillEntireVideoScreen_bl = self.data.fillEntireVideoScreen_bl, self.resizeHandler()
            }, self.dataLoadError = function(e, t) {
                self.main_do.addChild(self.info_do), self.info_do.showText(e.text), self.preloader_do && self.preloader_do.hide(!1), self.resizeHandler()
            }, self.dataSkinProgressHandler = function(e) {}, self.dataSkinLoadComplete = function() {
                window.removeEventListener("scroll", self.onScrollHandler), self.volume = self.data.volume, self.displayType != FWDEVPlayer.FULL_SCREEN || FWDEVPUtils.hasFullScreen || (self.data.showFullScreenButton_bl = !1), clearInterval(self.hidePreloaderId_to), self.hidePreloaderId_to = setTimeout(function() {
                    self.preloader_do && self.preloader_do.hide(!0)
                }, 500), self.setupNormalVideoPlayer(), self.animate_bl = self.data.animate_bl, self.setupOpener(), self.data.useFontAwesomeIcons_bl ? self.checkFinalButtonSizezId_int = setInterval(function() {
                    self.controller_do ? 0 != self.controller_do.playPauseButton_do.w && setTimeout(function() {
                        self.isShowedFirstTime_bl = !1, self.resizeHandler(self.animate_bl), clearInterval(self.checkFinalButtonSizezId_int)
                    }, 100) : self.controller_do && clearInterval(self.checkFinalButtonSizezId_int)
                }, 50) : setTimeout(function() {
                    self.isShowedFirstTime_bl = !1, self.resizeHandler(self.animate_bl)
                }, 50)
            }, this.setupNormalVideoPlayer = function() {
                self.normalVideoPlayersCreated_bl || (self.normalVideoPlayersCreated_bl = !0, self.isAPIReady_bl = !0, self.setupVideoScreen(), self.setupAudioScreen(), self.setupVideoPoster(), self.showPreloader_bl && self.main_do.addChild(self.preloader_do), self.setupSubtitle(), self.setupClickScreen(), self.setupPopupAds(), self.disableDoubleClickFullscreen_bl || self.addDoubleClickSupport(), !self.data.useChromeless_bl && self.data.showController_bl && self.setupController(), !self.data.useChromeless_bl && self.data.showLogo_bl && self.setupLogo(), self.setupHider(), !self.data.useChromeless_bl && self.data.showController_bl && self.data.showEmbedButton_bl && self.setupEmbedWindow(), !self.data.useChromeless_bl && self.data.showController_bl && self.setupPasswordWindow(), !self.data.useChromeless_bl && self.data.showController_bl && self.data.showShareButton_bl && self.setupShareWindow(), self.data.showAopwWindow_bl && self.setupAopw(), !self.data.useChromeless_bl && self.data.showController_bl && self.setupAdsStart(), self.data.hasAnnotiations_bl && self.setupAnnotations(), self.data.useChromeless_bl || self.setupLargePlayPauseButton(), self.dispatchEvent(FWDEVPlayer.READY), self.updateAds(0), self.displayType == FWDEVPlayer.BACKGROUND_VIDEO && self.isMobile_bl && (self.hasPointerEvent_bl ? window.addEventListener("pointerdown", self.playVideoBackgroundOnMobileOnInteraction) : window.addEventListener("touchstart", self.playVideoBackgroundOnMobileOnInteraction)), self.data.addKeyboardSupport_bl && self.addKeyboardSupport(), self.resizeHandler())
            }, this.setupAopw = function() {
                FWDEVPOPWindow.setPrototype(), self.popw_do = new FWDEVPOPWindow(self.data, self)
            }, this.playVideoBackgroundOnMobileOnInteraction = function() {
                self.hasPointerEvent_bl ? window.removeEventListener("pointerdown", self.playVideoBackgroundOnMobileOnInteraction) : window.removeEventListener("touchstart", self.playVideoBackgroundOnMobileOnInteraction), self.play()
            }, this.setupPopupAds = function() {
                FWDEVPPopupAds.setPrototype(), self.popupAds_do = new FWDEVPPopupAds(self, self.data), self.main_do.addChild(self.popupAds_do)
            }, this.setupPreloader = function() {
                FWDEVPPreloader.setPrototype(), self.preloader_do = new FWDEVPPreloader(self.preloaderColors), self.preloader_do.show(!0), self.showPreloader_bl && (self.displayType == FWDEVPlayer.STICKY ? document.documentElement.appendChild(self.preloader_do.screen) : self.main_do.addChild(self.preloader_do))
            }, this.positionPreloader = function() {
                self.displayType == FWDEVPlayer.STICKY ? self.main_do.contains(self.preloader_do) ? (self.preloader_do.setX(Math.round((self.stageWidth - self.preloader_do.w) / 2)), self.preloader_do.setY(Math.round((self.stageHeight - self.preloader_do.h) / 2))) : (self.preloader_do.setX(Math.round((self.ws.w - self.preloader_do.w) / 2)), self.position_str == FWDEVPlayer.POSITION_BOTTOM ? self.preloader_do.setY(Math.round(self.ws.h - self.preloader_do.h - 10) + FWDEVPUtils.getScrollOffsets().y) : self.preloader_do.setY(10)) : (self.preloader_do.setX(parseInt((self.stageWidth - self.preloader_do.w) / 2)), self.preloader_do.setY(parseInt((self.stageHeight - self.preloader_do.h) / 2)))
            }, this.setupVideoPoster = function() {
                FWDEVPPoster.setPrototype(), self.videoPoster_do = new FWDEVPPoster(self, self.data.posterBackgroundColor_str, self.data.show, self.data.fillEntireScreenWithPoster_bl), self.main_do.addChild(self.videoPoster_do)
            }, this.setupLargePlayPauseButton = function() {
                self.data.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), self.largePlayButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fab fa-youtube'></i>", void 0, "EVPLargePlayButtonNormalState", "EVPLargePlayButtonSelectedState")) : (FWDEVPSimpleButton.setPrototype(), self.largePlayButton_do = new FWDEVPSimpleButton(self.data.largePlayN_img, self.data.largePlayS_str, void 0, !0, self.data.useHEXColorsForSkin_bl, self.data.normalButtonsColor_str, self.data.selectedButtonsColor_str)), self.largePlayButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, self.largePlayButtonUpHandler), self.largePlayButton_do.setOverflow("visible"), self.largePlayButton_do.hide(!1), self.main_do.addChild(self.largePlayButton_do)
            }, this.largePlayButtonUpHandler = function() {
                self.disableClick(), self.largePlayButton_do.hide(), self.play()
            }, this.positionLargePlayButton = function() {
                self.largePlayButton_do.setX(parseInt((self.stageWidth - self.largePlayButton_do.w) / 2)), self.largePlayButton_do.setY(parseInt((self.stageHeight - self.largePlayButton_do.h) / 2))
            }, this.setupLogo = function() {
                FWDEVPLogo.setPrototype(), self.logo_do = new FWDEVPLogo(self, self.data.logoPath_str, self.data.logoPosition_str, self.data.logoMargins), self.main_do.addChild(self.logo_do)
            }, this.setupSubtitle = function() {
                FWDEVPSubtitle.setPrototype(), self.subtitle_do = new FWDEVPSubtitle(self, self.data), self.subtitle_do.addListener(FWDEVPSubtitle.LOAD_COMPLETE, self.subtitleLoadComplete)
            }, this.subtitleLoadComplete = function() {
                self.controller_do && self.controller_do.enableSubtitleButton()
            }, this.loadSubtitle = function(e) {
                e && (self.subtitle_do.loadSubtitle(e), self.main_do.addChildAt(self.subtitle_do, self.main_do.getChildIndex(self.dumyClick_do) - 1))
            }, this.setupController = function() {
                FWDEVPController.setPrototype(), self.controller_do = new FWDEVPController(self.data, self), self.controller_do.addListener(FWDEVPController.REWIND, self.rewind), self.controller_do.addListener(FWDEVPController.CHANGE_PLAYBACK_RATES, self.changePlaybackRateHandler), self.controller_do.addListener(FWDEVPController.CHANGE_SUBTITLE, self.changeSubtitileHandler), self.controller_do.addListener(FWDEVPController.PLAY, self.controllerOnPlayHandler), self.controller_do.addListener(FWDEVPController.PAUSE, self.controllerOnPauseHandler), self.controller_do.addListener(FWDEVPController.START_TO_SCRUB, self.controllerStartToScrubbHandler), self.controller_do.addListener(FWDEVPController.SCRUB, self.controllerScrubbHandler), self.controller_do.addListener(FWDEVPController.STOP_TO_SCRUB, self.controllerStopToScrubbHandler), self.controller_do.addListener(FWDEVPController.CHANGE_VOLUME, self.controllerChangeVolumeHandler), self.controller_do.addListener(FWDEVPController.DOWNLOAD_VIDEO, self.controllerDownloadVideoHandler), self.controller_do.addListener(FWDEVPController.SHARE, self.controllerShareHandler), self.controller_do.addListener(FWDEVPController.CHANGE_YOUTUBE_QUALITY, self.controllerChangeYoutubeQualityHandler), self.controller_do.addListener(FWDEVPController.FULL_SCREEN, self.controllerFullScreenHandler), self.controller_do.addListener(FWDEVPController.NORMAL_SCREEN, self.controllerNormalScreenHandler), self.controller_do.addListener(FWDEVPController.SHOW_EMBED_WINDOW, self.showEmbedWindowHandler), self.controller_do.addListener(FWDEVPController.SHOW_SUBTITLE, self.showSubtitleHandler), self.controller_do.addListener(FWDEVPController.HIDE_SUBTITLE, self.hideSubtitleHandler), self.main_do.addChild(self.controller_do)
            }, this.rewind = function() {
                var e = self.getCurrentTime();
                5 == e.length && (e = "00:" + e), 7 == e.length && (e = "0" + e), e = FWDEVPUtils.getSecondsFromString(e), e -= 10, 5 == (e = FWDEVPUtils.formatTime(e)).length && (e = "00:" + e), 7 == e.length && (e = "0" + e), self.scrubbAtTime(e)
            }, this.changePlaybackRateHandler = function(e) {
                self.setPlaybackRate(e.rate)
            }, this.changeSubtitileHandler = function(e) {
                self.data.startAtSubtitle = e.id, self.controller_do.updateSubtitleButtons(self.data.subtitles_ar, self.data.startAtSubtitle), self.data.subtitlePath_str = self.data.subtitles_ar[self.data.subtitles_ar.length - 1 - self.data.startAtSubtitle].source, self.isAdd_bl || self.loadSubtitle(self.data.subtitlePath_str)
            }, this.controllerDownloadVideoHandler = function() {
                self.downloadVideo()
            }, this.showSubtitleHandler = function() {
                self.subtitle_do.isShowed_bl = !0, self.subtitle_do.show()
            }, this.hideSubtitleHandler = function() {
                self.subtitle_do.isShowed_bl = !1, self.subtitle_do.hide()
            }, this.controllerOnPlayHandler = function(e) {
                self.play()
            }, this.controllerOnPauseHandler = function(e) {
                self.pause()
            }, this.controllerStartToScrubbHandler = function(e) {
                self.startToScrub()
            }, this.controllerScrubbHandler = function(e) {
                self.scrub(e.percent)
            }, this.controllerStopToScrubbHandler = function(e) {
                self.stopToScrub()
            }, this.controllerChangeVolumeHandler = function(e) {
                self.setVolume(e.percent)
            }, this.controllerShareHandler = function(e) {
                self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do ? self.isVideoPlayingWhenOpenWindows_bl = self.ytb_do.isPlaying_bl : self.videoType_str == FWDEVPlayer.VIMEO && self.vimeo_do ? self.isVideoPlayingWhenOpenWindows_bl = self.vimeo_do.isPlaying_bl : FWDEVPlayer.hasHTML5Video && self.videoScreen_do && (self.isVideoPlayingWhenOpenWindows_bl = self.videoScreen_do.isPlaying_bl), self.pause(), self.shareWindow_do.show(), self.controller_do && (self.controller_do.shareButton_do.setSelectedState(), self.controller_do.shareButton_do.isDisabled_bl = !0)
            }, this.controllerChangeYoutubeQualityHandler = function(e) {
                self.videoType_str == FWDEVPlayer.YOUTUBE ? self.ytb_do.setQuality(e.quality) : (self.data.startAtVideoSource = self.data.videosSource_ar.length - 1 - e.id, self.setSource(self.data.videosSource_ar[self.data.startAtVideoSource].source, !1, self.data.videosSource_ar[self.data.startAtVideoSource].videoType), self.isQualityChanging_bl = !0, self.play())
            }, this.controllerFullScreenHandler = function() {
                self.goFullScreen()
            }, this.controllerNormalScreenHandler = function() {
                self.goNormalScreen()
            }, this.showEmbedWindowHandler = function() {
                if (-1 != location.protocol.indexOf("file:")) return self.main_do.addChild(self.info_do), void self.info_do.showText("Embedding video files local is not allowed or possible! To function properly please test online.");
                self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do ? self.isVideoPlayingWhenOpenWindows_bl = self.ytb_do.isPlaying_bl : self.videoType_str == FWDEVPlayer.VIMEO && self.vimeo_do ? self.isVideoPlayingWhenOpenWindows_bl = self.vimeo_do.isPlaying_bl : FWDEVPlayer.hasHTML5Video && self.videoScreen_do && (self.isVideoPlayingWhenOpenWindows_bl = self.videoScreen_do.isPlaying_bl), self.pause(), self.customContextMenu_do && self.customContextMenu_do.disable(), self.embedWindow_do.show(), self.controller_do && (self.controller_do.embedButton_do.setSelectedState(), self.controller_do.embedButton_do.isDisabled_bl = !0)
            }, this.setupAudioScreen = function() {
                FWDEVPAudioScreen.setPrototype(), self.audioScreen_do = new FWDEVPAudioScreen(self, self.data.volume), self.audioScreen_do.addListener(FWDEVPAudioScreen.ERROR, self.videoScreenErrorHandler), self.audioScreen_do.addListener(FWDEVPAudioScreen.SAFE_TO_SCRUBB, self.videoScreenSafeToScrubbHandler), self.audioScreen_do.addListener(FWDEVPAudioScreen.STOP, self.videoScreenStopHandler), self.audioScreen_do.addListener(FWDEVPAudioScreen.PLAY, self.videoScreenPlayHandler), self.audioScreen_do.addListener(FWDEVPAudioScreen.PAUSE, self.videoScreenPauseHandler), self.audioScreen_do.addListener(FWDEVPAudioScreen.UPDATE, self.videoScreenUpdateHandler), self.audioScreen_do.addListener(FWDEVPAudioScreen.UPDATE_TIME, self.videoScreenUpdateTimeHandler), self.audioScreen_do.addListener(FWDEVPAudioScreen.LOAD_PROGRESS, self.videoScreenLoadProgressHandler), self.audioScreen_do.addListener(FWDEVPVideoScreen.START_TO_BUFFER, self.videoScreenStartToBuferHandler), self.audioScreen_do.addListener(FWDEVPVideoScreen.STOP_TO_BUFFER, self.videoScreenStopToBuferHandler), self.audioScreen_do.addListener(FWDEVPAudioScreen.PLAY_COMPLETE, self.videoScreenPlayCompleteHandler), self.audioScreen_do.addListener(FWDEVPAudioScreen.UPDATE_SUBTITLE, self.videoScreenUpdateSubtitleHandler), self.main_do.addChild(self.audioScreen_do)
            }, this.setupVideoScreen = function() {
                FWDEVPVideoScreen.setPrototype(), self.videoScreen_do = new FWDEVPVideoScreen(self, self.backgroundColor_str, self.data.volume), self.videoScreen_do.addListener(FWDEVPVideoScreen.ERROR, self.videoScreenErrorHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.SAFE_TO_SCRUBB, self.videoScreenSafeToScrubbHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.STOP, self.videoScreenStopHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.START, self.videoScreenStartHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.PLAY, self.videoScreenPlayHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.PAUSE, self.videoScreenPauseHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.UPDATE, self.videoScreenUpdateHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.UPDATE_TIME, self.videoScreenUpdateTimeHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.UPDATE_SUBTITLE, self.videoScreenUpdateSubtitleHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.LOAD_PROGRESS, self.videoScreenLoadProgressHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.START_TO_BUFFER, self.videoScreenStartToBuferHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.STOP_TO_BUFFER, self.videoScreenStopToBuferHandler), self.videoScreen_do.addListener(FWDEVPVideoScreen.PLAY_COMPLETE, self.videoScreenPlayCompleteHandler), self.main_do.addChild(self.videoScreen_do)
            }, this.videoScreenStartHandler = function() {
                self.callVastEvent("start"), self.executeVastEvent(self.Impression)
            }, this.videoScreenErrorHandler = function(e) {
                var t;
                self.isPlaying_bl = !1, FWDEVPlayer.hasHTML5Video || self.videoType_str == FWDEVPlayer.YOUTUBE ? (t = e.text, window.console && console.log(e.text), self.main_do && self.main_do.addChild(self.info_do), self.info_do && self.info_do.showText(t), self.controller_do && (self.controller_do.disableMainScrubber(), self.data.showControllerWhenVideoIsStopped_bl || self.controller_do.hide(!self.isMobile_bl, !0), self.hideClickScreen(), self.hider.stop())) : (t = e, self.main_do && self.main_do.addChild(self.info_do), self.info_do && self.info_do.showText(t)), self.logo_do && self.logo_do.hide(!1), self.preloader_do.hide(!1), self.showCursor(), self.dispatchEvent(FWDEVPlayer.ERROR, {
                    error: t
                })
            }, this.videoScreenSafeToScrubbHandler = function() {
                self.hasHlsPlayedOnce_bl && self.videoType_str == FWDEVPlayer.HLS_JS || (self.controller_do && (self.isAdd_bl ? (self.controller_do.disableMainScrubber(), self.data.showSkipButton_bl && (0 != self.data.timeToHoldAds && self.adsStart_do.show(!0), self.data.adsThumbnailPath_str && "none" != self.data.adsThumbnailPath_str && self.adsStart_do.loadThumbnail(self.data.adsThumbnailPath_str)), self.positionAds()) : self.controller_do.enableMainScrubber(), self.isAdd_bl || self.loadSubtitle(self.data.subtitlePath_str), self.controller_do.show(!0), !self.isAdd_bl && self.controller_do.ytbQualityButton_do && self.controller_do.ytbQualityButton_do.enable(), !self.isAdd_bl && self.controller_do.playbackRateButton_do && self.controller_do.enablePlaybackRateButton(), !self.isAdd_bl && self.controller_do && (self.controller_do.downloadButton_do && self.controller_do.downloadButton_do.enable(), self.controller_do.rewindButton_do && self.controller_do.rewindButton_do.enable()), self.hider.start()), self.videoType_str != FWDEVPlayer.VIMEO && self.showClickScreen(), self.fillEntireVideoScreen_bl && self.resizeHandler(), setTimeout(function() {
                    self.totalDuration && self.controller_do && self.controller_do.positionAdsLines(self.totalDuration)
                }, 500), "00:00:00" != self.getTimeStamp() && self.scrubbAtTime(self.getTimeStamp()), self.dispatchEvent(FWDEVPlayer.SAFE_TO_SCRUB))
            }, this.videoScreenStopHandler = function(e) {
                self.main_do && self.main_do.contains(self.info_do) && self.main_do.removeChild(self.info_do), self.videoPoster_do.allowToShow_bl = !0, self.isPlaying_bl = !1, self.controller_do && (self.controller_do.disableMainScrubber(), self.controller_do.showPlayButton(), self.controller_do.updateMainScrubber(0), self.data.showControllerWhenVideoIsStopped_bl ? self.controller_do.show(!self.isMobile_bl) : self.controller_do.hide(!self.isMobile_bl, !0), self.hider.stop()), self.ytb_do && self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do.stopVideo(), self.logo_do && self.logo_do.hide(!0), self.hideClickScreen(), self.isMobile_bl && self.videoType_str == FWDEVPlayer.YOUTUBE && (self.videoPoster_do.hide(), self.largePlayButton_do && self.largePlayButton_do.hide()), self.hider.reset(), self.showCursor(), self.dispatchEvent(FWDEVPlayer.STOP)
            }, this.videoScreenPlayHandler = function() {
                (FWDEVPlayer.keyboardCurInstance = self).videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do && self.ytb_do.isStopped_bl || (self.callVastEvent("resume"), self.isPlaying_bl = !0, self.isMobile_bl ? FWDEVPlayer.videoStartBehaviour == FWDEVPlayer.STOP_ALL_VIDEOS && FWDEVPlayer.stopAllVideos(self) : FWDEVPlayer.videoStartBehaviour == FWDEVPlayer.PAUSE_ALL_VIDEOS && FWDEVPlayer.pauseAllVideos(self), self.logo_do && self.videoType_str != FWDEVPlayer.VIMEO && self.logo_do.show(!0), self.controller_do && (self.controller_do.showPauseButton(), self.controller_do.show(!0)), self.popw_do && self.popw_do.hide(), self.largePlayButton_do && self.largePlayButton_do.hide(), self.hider.start(), self.showCursor(), self.isAdd_bl && (self.isQualityChanging_bl = !1), self.playAtTime_bl && !self.isAdd_bl && self.scrubbAtTime(self.data.scrubAtTimeAtFirstPlay), self.playAtTime_bl = !1, self.hasHlsPlayedOnce_bl = !0, self.isAdd_bl && !self.hasStartedToPlay_bl && self.scrubbAtTime(0), self.isQualityChanging_bl && !self.isAdd_bl && (self.scrubbAtTime(self.curDurration), self.curDurration = 0, self.isQualityChanging_bl = !1), self.wasAdd_bl && !self.isAdd_bl && (self.scrubbAtTime(self.scrubAfterAddDuration), self.wasAdd_bl = !1), self.hasStartedToPlay_bl || !self.data.startAtTime || self.isAdd_bl || self.scrubbAtTime(self.data.startAtTime), self.opener_do && self.opener_do.showPauseButton(), self.hasStartedToPlay_bl = !0, self.dispatchEvent(FWDEVPlayer.PLAY))
            }, this.videoScreenPauseHandler = function() {
                if (self.videoType_str != FWDEVPlayer.YOUTUBE || !self.ytb_do || !self.ytb_do.isStopped_bl) {
                    if (self.isPlaying_bl = !1, self.callVastEvent("pause"), self.controller_do && self.controller_do.showPlayButton(), self.largePlayButton_do && self.videoType_str != FWDEVPlayer.VIMEO && !self.data.showAnnotationsPositionTool_bl && self.largePlayButton_do.show(), self.controller_do && self.controller_do.show(!0), self.logo_do && self.videoType_str != FWDEVPlayer.VIMEO && self.logo_do.show(!0), self.hider.stop(), self.hider.reset(), self.showCursor(), self.videoType_str != FWDEVPlayer.VIMEO && self.showClickScreen(), self.popw_do) {
                        var e = self.shareWindow_do && self.shareWindow_do.isShowed_bl,
                            t = self.embedWindow_do && self.embedWindow_do.isShowed_bl;
                        e || t || self.popw_do.show()
                    }
                    self.opener_do && self.opener_do.showPlayButton(), self.dispatchEvent(FWDEVPlayer.PAUSE)
                }
            }, this.videoScreenUpdateHandler = function(e) {
                var t;
                t = FWDEVPlayer.hasHTML5Video || self.videoType_str == FWDEVPlayer.YOUTUBE && self.videoType_str != FWDEVPlayer.IMAGE && self.videoType_str != FWDEVPlayer.IFRAME ? e.percent : e, self.controller_do && self.controller_do.updateMainScrubber(t), self.dispatchEvent(FWDEVPlayer.UPDATE, {
                    percent: t
                })
            }, this.videoScreenUpdateSubtitleHandler = function(e) {
                self.subtitle_do.updateSubtitle(e.curTime)
            }, this.videoScreenUpdateTimeHandler = function(e, e2, e3, stopHandler) {
                var time, seconds;
                if (self.prevSeconds != e.seconds && (self.totalTimePlayed += 1), self.prevSeconds = e.seconds, self.totalPercentPlayed = self.totalTimePlayed / e.totalTimeInSeconds, self.isAdd_bl && (.25 <= self.totalPercentPlayed && self.callFirstQuartile ? (self.callVastEvent("firstQuartile"), self.callFirstQuartile = !1) : .5 <= self.totalPercentPlayed && self.callMidpoint ? (self.callVastEvent("midpoint"), self.callMidpoint = !1) : .75 <= self.totalPercentPlayed && self.callThirdQuartile && (self.callVastEvent("thirdQuartile"), self.callThirdQuartile = !1)), FWDEVPlayer.hasHTML5Video || self.videoType_str == FWDEVPlayer.YOUTUBE || self.videoType_str == FWDEVPlayer.HLS_JS || self.videoType_str == FWDEVPlayer.VIMEO ? (self.curTime = e.curTime, self.totalTime = e.totalTime, time = self.curTime + "/" + self.totalTime, seconds = e.seconds) : (self.curTime = e, self.totalTime = e2, time = self.curTime + "/" + self.totalTime, seconds = e3, null != e && null != e2 || (time = "00:00/00:00")), self.controller_do && self.controller_do.updateTime(time), !stopHandler) {
                    if (self.isAdd_bl || (5 < self.totalTime.length ? self.totalDuration = FWDEVPUtils.getSecondsFromString(self.totalTime) : self.totalDuration = FWDEVPUtils.getSecondsFromString("00:" + self.totalTime)), self.isAdd_bl && self.data.showSkipButton_bl && (self.data.timeToHoldAds > seconds ? (self.adsStart_do.updateText(self.data.skipToVideoText_str + Math.abs(self.data.timeToHoldAds - seconds)), self.adsSkip_do.hide(!1), self.videoType_str != FWDEVPlayer.IMAGE && self.videoType_str != FWDEVPlayer.IFRAME || self.adsStart_do.show(!0)) : (self.adsStart_do.hide(!0), 0 != self.data.timeToHoldAds && self.adsSkip_do.show(!0))), self.currentSecconds = e.seconds, !self.isAdd_bl && self.popupAds_do && self.popupAds_do.update(parseInt(e.seconds)), !self.isAdd_bl && self.annotations_do && self.annotations_do.update(e.seconds), 0 == seconds || self.isAdd_bl || (self.curDurration = seconds), self.data.cuePointsSource_ar)
                        for (var i = 0; i < self.data.cuePointsSource_ar.length; i++) {
                            var cuePoint = self.data.cuePointsSource_ar[i];
                            cuePoint.timeStart == e.seconds && (self.data.executeCuepointsOnlyOnce_bl && cuePoint.isPlayed_bl || eval(cuePoint.javascriptCall), cuePoint.isPlayed_bl = !0)
                        }
                    self.isAdd_bl || self.updateAds(seconds), self.isPlaying_bl && FWDEVPUtils.getSecondsFromString(self.data.stopAtTime) <= e.seconds && self.stop(), self.dispatchEvent(FWDEVPlayer.UPDATE_TIME, {
                        currentTime: self.curTime,
                        totalTime: self.totalTime
                    })
                }
            }, this.videoScreenLoadProgressHandler = function(e) {
                FWDEVPlayer.hasHTML5Video || self.videoType_str == FWDEVPlayer.YOUTUBE ? self.controller_do && self.controller_do.updatePreloaderBar(e.percent) : self.videoType_str == FWDEVPlayer.VIDEO && self.controller_do && self.controller_do.updatePreloaderBar(e)
            }, this.videoScreenStartToBuferHandler = function() {
                self.showPreloader_bl && self.preloader_do.show()
            }, this.videoScreenStopToBuferHandler = function() {
                self.preloader_do.hide(!0)
            }, this.videoScreenPlayCompleteHandler = function(e, t) {
                self.adDone_bl = !0, self.callVastEvent("complete"), !self.isAdd_bl && self.data.redirectURL && ("_self" == self.data.redirectTarget ? location.replace(self.data.redirectURL) : window.open(self.data.redirectURL, self.data.redirectTarget));
                var o = self.isAdd_bl;
                self.isAdd_bl && (self.data.openNewPageAtTheEndOfTheAds_bl && "none" != self.data.adsPageToOpenURL_str && !t && ("_self" == self.data.adsPageToOpenTarget_str ? location.href = self.data.adsPageToOpenURL_str : window.open(self.data.adsPageToOpenURL_str, self.data.adsPageToOpenTarget_str)), self.isAdd_bl = !1, self.setSource(self.data.videosSource_ar[self.data.startAtVideoSource].source, !0), self.wasAdd_bl = !0, t && self.videoType_str == FWDEVPlayer.VIDEO ? self.play() : self.isMobile_bl || self.play()), o || (self.data.loop_bl ? (self.scrub(0), self.play()) : self.stop(), self.dispatchEvent(FWDEVPlayer.PLAY_COMPLETE)), self.hider && self.hider.reset()
            }, this.setupAnnotations = function() {
                FWDEVPAnnotations.setPrototype(), self.annotations_do = new FWDEVPAnnotations(self, self.data), self.main_do.addChild(self.annotations_do)
            }, this.setupAdsStart = function() {
                FWDEVPAdsStart.setPrototype(), self.adsStart_do = new FWDEVPAdsStart(self.data.adsButtonsPosition_str, self.data.adsBorderNormalColor_str, "", self.data.adsBackgroundPath_str, self.data.adsTextNormalColor), FWDEVPAdsButton.setPrototype(), self.adsSkip_do = new FWDEVPAdsButton(self.data.skipIconPath_img, self.data.skipIconSPath_str, self.data.skipToVideoButtonText_str, self.data.adsButtonsPosition_str, self.data.adsBorderNormalColor_str, self.data.adsBorderSelectedColor_str, self.data.adsBackgroundPath_str, self.data.adsTextNormalColor, self.data.adsTextSelectedColor, self.data.useHEXColorsForSkin_bl, self.data.normalButtonsColor_str, self.data.selectedButtonsColor_str), self.adsSkip_do.addListener(FWDEVPAdsButton.MOUSE_UP, self.skipAdsMouseUpHandler), self.main_do.addChild(self.adsSkip_do), self.main_do.addChild(self.adsStart_do)
            }, this.skipAdsMouseUpHandler = function(e) {
                console.log('SKIP'); // SAM
                // e.preventDefault && e.preventDefault(), self.callVastEvent("skip"), self.videoScreenPlayCompleteHandler(e, !0)
            }, this.skipMe = function(e){
                self.callVastEvent("skip"), self.videoScreenPlayCompleteHandler(e, !0)
            }, this.positionAds = function(e) {
                var t, o;
                self.data.showSkipButton_bl && (t = "left" == self.data.adsButtonsPosition_str ? 0 : self.stageWidth, o = self.controller_do && self.controller_do.isShowed_bl ? self.stageHeight - self.adsStart_do.h - self.data.controllerHeight - 30 : self.stageHeight - self.adsStart_do.h - self.data.controllerHeight, FWDAnimation.killTweensOf(this.adsStart_do), e ? FWDAnimation.to(this.adsStart_do, .8, {
                    y: o,
                    ease: Expo.easeInOut
                }) : this.adsStart_do.setY(o), self.adsStart_do.setX(t), t = "left" == self.data.adsButtonsPosition_str ? 0 : self.stageWidth, o = self.controller_do && self.controller_do.isShowed_bl ? self.stageHeight - self.adsSkip_do.h - self.data.controllerHeight - 30 : self.stageHeight - self.adsSkip_do.h - self.data.controllerHeight, FWDAnimation.killTweensOf(this.adsSkip_do), e ? FWDAnimation.to(this.adsSkip_do, .8, {
                    y: o,
                    ease: Expo.easeInOut
                }) : this.adsSkip_do.setY(o), self.adsSkip_do.setX(t))
            }, this.setupShareWindow = function() {
                FWDEVPShareWindow.setPrototype(), self.shareWindow_do = new FWDEVPShareWindow(self.data, self), self.shareWindow_do.addListener(FWDEVPShareWindow.HIDE_COMPLETE, self.shareWindowHideCompleteHandler)
            }, this.shareWindowHideCompleteHandler = function() {
                self.isVideoPlayingWhenOpenWindows_bl && self.resume(), self.controller_do && (self.controller_do.shareButton_do.isDisabled_bl = !1, self.controller_do.shareButton_do.setNormalState(!0))
            }, this.setupPasswordWindow = function() {
                FWDEVPPassword.setPrototype(), self.passWindow_do = new FWDEVPPassword(self.data, self), self.passWindow_do.addListener(FWDEVPPassword.CORRECT, self.passordCorrect)
            }, this.passordCorrect = function() {
                self.passWindow_do.hide(), self.hasPassedPassowrd_bl = !0, self.play()
            }, this.setupEmbedWindow = function() {
                FWDEVPEmbedWindow.setPrototype(), self.embedWindow_do = new FWDEVPEmbedWindow(self.data, self), self.embedWindow_do.addListener(FWDEVPEmbedWindow.ERROR, self.embedWindowErrorHandler), self.embedWindow_do.addListener(FWDEVPEmbedWindow.HIDE_COMPLETE, self.embedWindowHideCompleteHandler)
            }, this.embedWindowErrorHandler = function(e) {
                self.main_do.addChild(self.info_do), self.info_do.showText(e.error)
            }, this.embedWindowHideCompleteHandler = function() {
                self.isVideoPlayingWhenOpenWindows_bl && self.resume(), self.controller_do && (self.controller_do.embedButton_do.isDisabled_bl = !1, self.controller_do.embedButton_do.setNormalState(!0))
            }, this.copyLinkButtonOnMouseOver = function() {
                self.embedWindow_do.isShowed_bl && self.embedWindow_do.copyLinkButton_do.setSelectedState()
            }, this.copyLinkButtonOnMouseOut = function() {
                self.embedWindow_do.isShowed_bl && self.embedWindow_do.copyLinkButton_do.setNormalState()
            }, this.getLinkCopyPath = function() {
                if (self.embedWindow_do.isShowed_bl) return self.embedWindow_do.linkToVideo_str
            }, this.embedkButtonOnMouseOver = function() {
                self.embedWindow_do.isShowed_bl && self.embedWindow_do.copyEmbedButton_do.setSelectedState()
            }, this.embedButtonOnMouseOut = function() {
                self.embedWindow_do.isShowed_bl && self.embedWindow_do.copyEmbedButton_do.setNormalState()
            }, this.getEmbedCopyPath = function() {
                return self.embedWindow_do.finalEmbedCode_str
            }, this.setupFlashScreen = function() {
                if (!self.flash_do) return -1 != location.protocol.indexOf("file:") && (FWDEVPUtils.isOpera || FWDEVPUtils.isIEAndLessThen9) ? (self.main_do.addChild(self.info_do), void(self.info_do.textHolder_do.screen.innerHTML = "This browser can't play video local, please test online or use a browser like Firefox of Chrome.")) : void(FWDEVPFlashTest.hasFlashPlayerVersion("9.0.18") && (self.flash_do = new FWDEVPDisplayObject("div"), self.flash_do.setBackfaceVisibility(), self.flash_do.setResizableSizeAfterParent(), self.main_do.addChild(self.flash_do), window[self.instanceName_str + "HLSFlashReady"] = function(e, t) {
                    if ("error" == e && (self.main_do.addChild(self.info_do), self.info_do.showText(t[2] + " - " + t[1])), "manifest" == e && (self.setVolume(self.data.volume), self.data.autoPlay_bl && self.flashObject.playerPlay(-1)), "state" == e && (self.hlsState = t[0], "PLAYING" == t[0] ? (self.isVideoPlayingWhenOpenWindows_bl = !0, self.isHLSVideoPlayng_bl = !0, self.videoScreenSafeToScrubbHandler(), self.videoScreenPlayHandler()) : "PAUSED" == t[0] && (self.videoScreenPauseHandler(), self.isHLSVideoPlayng_bl = !1)), "position" == e && self.isPlaying_bl) {
                        self.HLSDuration = Math.round(t[0].duration);
                        var o = FWDEVPVideoScreen.formatTime(Math.round(t[0].duration)),
                            s = {
                                curTime: FWDEVPVideoScreen.formatTime(Math.round(t[0].position)),
                                totalTime: o,
                                seconds: Math.round(t[0].position)
                            };
                        self.hlsPosition = t[0].position, self.videoScreenUpdateTimeHandler(s), self.videoScreenUpdateHandler({
                            percent: Math.round(t[0].position) / Math.round(t[0].duration)
                        })
                    }
                    "complete" == e && self.videoScreenPlayCompleteHandler()
                }, self.flashObjectMarkup_str = '<object id="' + self.instanceName_str + '"classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + self.data.flashPath_str + '"/><param name="allowScriptAccess" value="sameDomain"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="callback=' + self.instanceName_str + "HLSFlashReady&instanceName=" + self.instanceName_str + "&volume=" + self.data.volume + "&bkColor_str=" + self.videoBackgroundColor_str + '"/><object type="application/x-shockwave-flash" data="' + self.data.flashPath_str + '" width="100%" height="100%"><param name="movie" value="' + self.data.flashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="callback=' + self.instanceName_str + "HLSFlashReady&instanceName=" + self.instanceName_str + "&volume=" + self.data.volume + "&bkColor_str=" + self.videoBackgroundColor_str + '"/></object></object>', self.flash_do.screen.innerHTML = self.flashObjectMarkup_str, self.registerHLSEvents_int = setInterval(function() {
                    self.flashObject.playerLoad && (self.isHLSFlashReady_bl = !0, clearInterval(self.registerHLSEvents_int))
                }, 50), self.flashObject = self.flash_do.screen.firstChild, FWDEVPUtils.isIE || (self.flashObject = self.flashObject.getElementsByTagName("object")[0])))
            }, this.flashScreenFail = function() {
                self.main_do.addChild(self.info_do), self.info_do.showText("External interface error!"), self.resizeHandler()
            }, this.setInputs = function() {
                for (var e = document.querySelectorAll("input"), t = 0; t < e.length; t++) self.hasPointerEvent_bl ? e[t].addEventListener("pointerdown", self.inputFocusInHandler) : e[t].addEventListener && (e[t].addEventListener("mousedown", self.inputFocusInHandler), e[t].addEventListener("touchstart", self.inputFocusInHandler))
            }, this.inputFocusInHandler = function(e) {
                self.curInput = e.target, setTimeout(function() {
                    self.hasPointerEvent_bl ? window.addEventListener("pointerdown", self.inputFocusOutHandler) : window.addEventListener && (window.addEventListener("mousedown", self.inputFocusOutHandler), window.addEventListener("touchstart", self.inputFocusOutHandler)), FWDEVPlayer.isSearchedFocused_bl = !0
                }, 50)
            }, this.inputFocusOutHandler = function(e) {
                var t = FWDEVPUtils.getViewportMouseCoordinates(e);
                if (!FWDEVPUtils.hitTest(self.curInput, t.screenX, t.screenY)) return self.hasPointerEvent_bl ? window.removeEventListener("pointerdown", self.inputFocusOutHandler) : window.removeEventListener && (window.removeEventListener("mousedown", self.inputFocusOutHandler), window.removeEventListener("touchstart", self.inputFocusOutHandler)), void(FWDEVPlayer.isSearchedFocused_bl = !1)
            }, this.addKeyboardSupport = function() {
                self.setInputs(), document.addEventListener("keydown", this.onKeyDownHandler), document.addEventListener("keyup", this.onKeyUpHandler)
            }, this.onKeyDownHandler = function(e) {
                if (!self.isSpaceDown_bl && self.hasStartedToPlay_bl && !FWDEVPlayer.isSearchedFocused_bl) {
                    if (self.isSpaceDown_bl = !0, e.preventDefault && e.preventDefault(), 32 == e.keyCode) {
                        if (self != FWDEVPlayer.keyboardCurInstance && ("pause" == FWDEVPlayer.videoStartBehaviour || "none" == FWDEVPlayer.videoStartBehaviour)) return;
                        if (self.stickOnCurrentInstanceKey_bl = !0, self.videoType_str == FWDEVPlayer.IMAGE || self.videoType_str == FWDEVPlayer.IFRAME) self.isImageAdsPlaying_bl ? self.stopUpdateImageInterval() : self.startUpdateImageInterval();
                        else if (self.videoType_str == FWDEVPlayer.YOUTUBE) {
                            if (!self.ytb_do.isSafeToBeControlled_bl) return;
                            self.ytb_do.togglePlayPause()
                        } else if (self.videoType_str == FWDEVPlayer.VIMEO) {
                            if (!self.vimeo_do.isSafeToBeControlled_bl) return;
                            self.vimeo_do.togglePlayPause()
                        } else if (self.videoType_str == FWDEVPlayer.MP3) {
                            if (!self.audioScreen_do.isSafeToBeControlled_bl) return;
                            self.audioScreen_do.togglePlayPause()
                        } else if (FWDEVPlayer.hasHTML5Video) {
                            if (!self.videoScreen_do.isSafeToBeControlled_bl) return;
                            self.videoScreen_do && self.videoScreen_do.togglePlayPause()
                        } else self.isFlashScreenReady_bl && self.flashObject.togglePlayPause();
                        return e.preventDefault && e.preventDefault(), !1
                    }
                    if (70 == e.keyCode) self.isFullScreen_bl ? self.goNormalScreen() : self.goFullScreen();
                    else if (77 == e.keyCode) 0 != self.volume && (self.lastVolume = self.volume), 0 != self.volume ? self.volume = 0 : self.volume = self.lastVolume, self.setVolume(self.volume);
                    else if (38 == e.keyCode) self.volume += .1, 1 < self.volume && (self.volume = 1), self.setVolume(self.volume);
                    else if (40 == e.keyCode) self.volume -= .1, self.volume < 0 && (self.volume = 0), self.setVolume(self.volume);
                    else if (77 == e.keyCode) self.volume < 0 && (self.volume = 0), self.setVolume(self.volume);
                    else if (39 != e.keyCode || self.isAdd_bl) {
                        if (37 == e.keyCode && !self.isAdd_bl) {
                            5 == (t = self.getCurrentTime()).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), t = FWDEVPUtils.getSecondsFromString(t), t -= 5, 5 == (t = FWDEVPUtils.formatTime(t)).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), self.scrubbAtTime(t)
                        }
                    } else {
                        var t;
                        5 == (t = self.getCurrentTime()).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), t = FWDEVPUtils.getSecondsFromString(t), t += 5, 5 == (t = FWDEVPUtils.formatTime(t)).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), self.scrubbAtTime(t)
                    }
                }
            }, this.onKeyUpHandler = function(e) {
                self.isSpaceDown_bl = !1
            }, this.setupHider = function() {
                FWDEVPHider.setPrototype(), self.hider = new FWDEVPHider(self.main_do, self.controller_do, self.data.controllerHideDelay), self.hider.addListener(FWDEVPHider.SHOW, self.hiderShowHandler), self.hider.addListener(FWDEVPHider.HIDE, self.hiderHideHandler), self.hider.addListener(FWDEVPHider.HIDE_COMPLETE, self.hiderHideCompleteHandler)
            }, this.hiderShowHandler = function() {
                self.controller_do && self.isPlaying_bl && self.controller_do.show(!0), self.logo_do && self.data.hideLogoWithController_bl && self.isPlaying_bl && self.videoType_str != FWDEVPlayer.VIMEO && self.logo_do.show(!0), self.showCursor(), self.isAdd_bl && self.data.showSkipButton_bl && (self.positionAds(!0), self.adsStart_do.showWithOpacity(), self.adsSkip_do.showWithOpacity()), self.subtitle_do.position(!0), self.popupAds_do && self.popupAds_do.position(!0)
            }, this.hiderHideHandler = function() {
                self.controller_do && self.data.showYoutubeQualityButton_bl && FWDEVPUtils.hitTest(self.controller_do.ytbButtonsHolder_do.screen, self.hider.globalX, self.hider.globalY) ? self.hider.reset() : self.controller_do && self.data.showSubtitleButton_bl && FWDEVPUtils.hitTest(self.controller_do.subtitlesButtonsHolder_do.screen, self.hider.globalX, self.hider.globalY) ? self.hider.reset() : self.controller_do && self.data.showPlaybackRateButton_bl && FWDEVPUtils.hitTest(self.controller_do.playbackRatesButtonsHolder_do.screen, self.hider.globalX, self.hider.globalY) ? self.hider.reset() : self.controller_do && FWDEVPUtils.hitTest(self.controller_do.screen, self.hider.globalX, self.hider.globalY) ? self.hider.reset() : (self.controller_do && self.controller_do.hide(!0), self.isAdd_bl && self.data.showSkipButton_bl && (self.positionAds(!0), self.adsStart_do.hideWithOpacity(), self.adsSkip_do.hideWithOpacity()), self.logo_do && self.data.hideLogoWithController_bl && self.logo_do.hide(!0), self.isFullScreen_bl && self.hideCursor(), self.subtitle_do.position(!0), self.popupAds_do && self.popupAds_do.position(!0))
            }, this.hiderHideCompleteHandler = function() {
                self.controller_do && self.controller_do.positionScrollBarOnTopOfTheController()
            }, this.showPlayer = function() {
                self.isAPIReady_bl && (self.isShowed_bl = !0, self.opener_do.showCloseButton(), self.setStageContainerFinalHeightAndPosition(self.animate_bl))
            }, this.hidePlayer = function() {
                self.isAPIReady_bl && (self.isShowed_bl = !1, self.opener_do.showOpenButton(), self.setStageContainerFinalHeightAndPosition(self.animate_bl))
            }, this.play = function() {
                if (self.isAPIReady_bl) {
                    if (self.videoType_str == FWDEVPlayer.YOUTUBE && !self.isYoutubeReady_bl) return self.showPreloader_bl && self.preloader_do.show(), void(self.largePlayButton_do && self.largePlayButton_do.show());
                    if (self.videoType_str == FWDEVPlayer.VIMEO && !self.isVimeoReady_bl) return self.showPreloader_bl && self.preloader_do.show(), void(self.largePlayButton_do && self.largePlayButton_do.show());
                    if (self.videoType_str == FWDEVPlayer.HLS_JS && 0 <= location.protocol.indexOf("file:")) return self.main_do.addChild(self.info_do), void self.info_do.showText("HLS m3u8 videos can't be played local on this browser, please test it online!.");
                    if (self.data.playVideoOnlyWhenLoggedIn_bl && !self.data.isLoggedIn_bl) return self.main_do.addChild(self.info_do), self.info_do.showText(self.data.loggedInMessage_str), void(self.largePlayButton_do && self.largePlayButton_do.show());
                    if (!self.isAdd_bl && self.data.videosSource_ar[self.data.startAtVideoSource].isPrivate && !self.hasPassedPassowrd_bl && self.passWindow_do) return self.largePlayButton_do && self.largePlayButton_do.show(), void self.passWindow_do.show();
                    if (self.hasPassedPassowrd_bl = !0, !self.isMobile_bl || self.videoType_str != FWDEVPlayer.YOUTUBE || !self.ytb_do || self.ytb_do.isSafeToBeControlled_bl) {
                        if (self.isMobile_bl ? FWDEVPlayer.stopAllVideos(self) : FWDEVPlayer.videoStartBehaviour == FWDEVPlayer.PAUSE_ALL_VIDEOS ? FWDEVPlayer.pauseAllVideos(self) : FWDEVPlayer.videoStartBehaviour == FWDEVPlayer.STOP_ALL_VIDEOS && FWDEVPlayer.stopAllVideos(self), self.videoType_str == FWDEVPlayer.IMAGE || self.videoType_str == FWDEVPlayer.IFRAME) self.startUpdateImageInterval();
                        else if (self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do) self.ytb_do.play();
                        else if (self.videoType_str == FWDEVPlayer.VIMEO && self.vimeo_do) self.vimeo_do.isStopped_bl && self.data.autoPlay_bl ? self.startVimeoVideoWithDelay = setTimeout(self.vimeo_do.play, 1e3) : self.vimeo_do.play();
                        else if (self.videoType_str == FWDEVPlayer.MP3) self.audioScreen_do && self.audioScreen_do.play();
                        else if (FWDEVPlayer.hasHTML5Video)
                            if (self.videoType_str != FWDEVPlayer.HLS_JS || self.isHLSManifestReady_bl) self.videoScreen_do && self.videoScreen_do.play();
                            else {
                                self.videoScreen_do.initVideo(), self.setupHLS();
                                var e = self.videoSourcePath_str; - 1 != e.indexOf("encrypt:") && (e = atob(e.substr(8))), self.hlsJS.loadSource(e), self.hlsJS.attachMedia(self.videoScreen_do.video_el), self.hlsJS.on(Hls.Events.MANIFEST_PARSED, function(e) {
                                    self.isHLSManifestReady_bl = !0, self.play()
                                })
                            }
                        else self.isFlashScreenReady_bl && self.flashObject.playVideo();
                        (FWDEVPlayer.keyboardCurInstance = self).videoPoster_do.allowToShow_bl = !1, self.largePlayButton_do && self.largePlayButton_do.hide(), self.videoPoster_do.hide()
                    }
                }
            }, this.pause = function() {
                self.isAPIReady_bl && (self.videoType_str == FWDEVPlayer.IMAGE || self.videoType_str == FWDEVPlayer.IFRAME ? self.stopUpdateImageInterval() : self.videoType_str == FWDEVPlayer.YOUTUBE ? self.ytb_do.pause() : self.videoType_str == FWDEVPlayer.VIMEO && self.vimeo_do ? self.vimeo_do.pause() : self.videoType_str == FWDEVPlayer.MP3 ? self.audioScreen_do && self.audioScreen_do.pause() : FWDEVPlayer.hasHTML5Video ? self.videoScreen_do && self.videoScreen_do.pause() : self.isFlashScreenReady_bl && self.flashObject.pauseVideo())
            }, this.resume = function() {
                self.isAPIReady_bl && (self.videoType_str == FWDEVPlayer.IMAGE || self.videoType_str == FWDEVPlayer.IFRAME ? self.startUpdateImageInterval() : self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do ? self.ytb_do.resume() : self.videoType_str == FWDEVPlayer.VIMEO && self.vimeo_do ? self.vimeo_do.resume() : self.videoType_str == FWDEVPlayer.MP3 ? self.audioScreen_do && self.audioScreen_do.resume() : FWDEVPlayer.hasHTML5Video && self.videoScreen_do && self.videoScreen_do.resume())
            }, self.hasHlsPlayedOnce_bl = !1, this.stop = function(e) {
                if (self.isAPIReady_bl) {
                    if (window.ga && Math.round(100 * self.totalPercentPlayed)) {
                        var t = "videoPath:" + self.videoSource_str + ", percentPlayed:" + Math.round(100 * self.totalPercentPlayed) + ", stoppedAtTime:" + self.getCurrentTime() + ", fullScreen:" + self.isFullScreen_bl;
                        ga("send", {
                            hitType: "event",
                            eventCategory: "videos",
                            eventAction: "played",
                            eventLabel: t,
                            nonInteraction: !0
                        })
                    }
                    self.hasPassedPassowrd_bl = !1, self.isHLSManifestReady_bl = !1, self.playYoutubeIfLoadedLate_bl = !1, self.isPlaying_bl = !1, self.totalTimePlayed = 0, self.hider.reset(), self.destroyHLS(), clearTimeout(self.startVimeoVideoWithDelay), clearTimeout(self.load360ScriptsId_to), self.popw_do && self.popw_do.hide(), self.controller_do && self.controller_do.ytbQualityButton_do && (self.controller_do.ytbQualityButton_do.disable(), self.controller_do.hideQualityButtons(!1), self.controller_do.updateMainScrubber(0), self.controller_do.updatePreloaderBar(0)), self.controller_do && self.controller_do.subtitleButton_do && self.controller_do.subtitleButton_do.disable(), self.controller_do && self.controller_do.downloadButton_do && self.controller_do.downloadButton_do.disable(), self.controller_do && self.controller_do.rewindButton_do && self.controller_do.rewindButton_do.disable(), self.controller_do && self.controller_do.disablePlaybackRateButton(), self.isAdd_bl ? self.setPlaybackRate(1) : self.setPlaybackRate(self.data.defaultPlaybackRate_ar[self.data.startAtPlaybackIndex]), self.controller_do && self.data.showPlaybackRateButton_bl && self.controller_do.updatePlaybackRateButtons(self.data.updatePlaybackRateButtons, self.data.startAtPlaybackIndex), self.videoType_str == FWDEVPlayer.IMAGE || self.videoType_str == FWDEVPlayer.IFRAME ? self.stopUpdateImageInterval() : self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do ? self.ytb_do.stop() : self.videoType_str == FWDEVPlayer.VIMEO ? self.vimeo_do && self.vimeo_do.stop() : self.videoType_str == FWDEVPlayer.MP3 ? self.audioScreen_do && self.audioScreen_do.stop() : FWDEVPlayer.hasHTML5Video ? self.videoScreen_do.stop() : self.isFlashScreenReady_bl && self.flashObject.stopVideo(), self.isMobile_bl ? e && -1 != e.indexOf(".") ? (self.data.showControllerWhenVideoIsStopped_bl && self.controller_do && self.controller_do.show(!0), self.videoPoster_do && self.videoPoster_do.show(), self.largePlayButton_do && !self.data.showAnnotationsPositionTool_bl && self.largePlayButton_do.show()) : e || self.videoType_str != FWDEVPlayer.VIDEO ? self.useYoutube_bl && (self.ytb_do.ytb || self.ytb_do.setupVideo()) : (self.videoPoster_do.show(), self.largePlayButton_do && self.largePlayButton_do.show()) : (self.data.showControllerWhenVideoIsStopped_bl && self.controller_do_do && self.controller_do.show(!0), self.videoPoster_do.show(), self.largePlayButton_do && self.largePlayButton_do.show()), self.subtitle_do.hide(), self.hasHlsPlayedOnce_bl = !1, self.isSafeToScrub_bl = !1, self.hlsState = void 0, self.popupAds_do && self.popupAds_do.hideAllPopupButtons(!1), self.adsStart_do && self.adsStart_do.hide(!0), self.adsSkip_do && self.adsSkip_do.hide(!0), self.controller_do && self.controller_do.hideAdsLines(), self.annotations_do && self.annotations_do.update(1e5), self.hasStartedToPlay_bl = !1
                }
            }, this.startToScrub = function() {
                self.isAPIReady_bl && (self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do && self.ytb_do.isSafeToBeControlled_bl ? self.ytb_do.startToScrub() : self.videoType_str == FWDEVPlayer.VIMEO && self.vimeo_do ? self.vimeo_do.startToScrub() : self.videoType_str == FWDEVPlayer.MP3 ? self.audioScreen_do && self.audioScreen_do.startToScrub() : FWDEVPlayer.hasHTML5Video ? self.videoScreen_do && self.videoScreen_do.startToScrub() : self.isFlashScreenReady_bl && self.flashObject.startToScrub())
            }, this.stopToScrub = function() {
                self.isAPIReady_bl && (self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do && self.ytb_do.isSafeToBeControlled_bl ? self.ytb_do.stopToScrub() : self.videoType_str == FWDEVPlayer.VIMEO && self.vimeo_do ? self.vimeo_do.stopToScrub() : self.videoType_str == FWDEVPlayer.MP3 ? self.audioScreen_do && self.audioScreen_do.stopToScrub() : FWDEVPlayer.hasHTML5Video ? self.videoScreen_do && self.videoScreen_do.stopToScrub() : self.isFlashScreenReady_bl && self.flashObject.stopToScrub())
            }, this.scrub = function(e, t) {
                self.isAPIReady_bl && (isNaN(e) || (e < 0 ? e = 0 : 1 < e && (e = 1), self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do && self.ytb_do.isSafeToBeControlled_bl ? self.ytb_do.scrub(e) : self.videoType_str == FWDEVPlayer.VIMEO && self.vimeo_do ? self.vimeo_do.scrub(e) : self.videoType_str == FWDEVPlayer.MP3 ? self.audioScreen_do && self.audioScreen_do.scrub(e) : FWDEVPlayer.hasHTML5Video ? self.videoScreen_do && self.videoScreen_do.scrub(e) : self.isFlashScreenReady_bl && self.flashObject.scrub(e), self.dispatchEvent(FWDEVPlayer.SCRUB, {
                    percent: e
                })))
            }, this.scrubbAtTime = function(e) {
                self.isAPIReady_bl && e && (-1 != String(e).indexOf(":") && (e = FWDEVPUtils.getSecondsFromString(e)), self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do ? self.ytb_do.scrubbAtTime(e) : self.videoType_str == FWDEVPlayer.VIMEO && self.vimeo_do ? self.vimeo_do.scrubbAtTime(e) : self.videoType_str == FWDEVPlayer.MP3 ? self.audioScreen_do && self.audioScreen_do.scrubbAtTime(e) : FWDEVPlayer.hasHTML5Video && self.videoScreen_do && self.videoScreen_do.scrubbAtTime(e))
            }, this.share = function() {
                self.isAPIReady_bl && self.shareWindow_do.show()
            }, this.setVolume = function(e) {
                self.isAPIReady_bl && !self.isMobile_bl && (self.controller_do && self.controller_do.updateVolume(e, !0), self.volume = e, self.ytb_do && self.ytb_do.setVolume(e), self.vimeo_do && self.vimeo_do.setVolume(e), self.audioScreen_do && self.audioScreen_do.setVolume(e), FWDEVPlayer.hasHTML5Video && self.videoScreen_do && self.videoScreen_do.setVolume(e), self.dispatchEvent(FWDEVPlayer.VOLUME_SET, {
                    volume: e
                }))
            }, this.setPosterSource = function(e) {
                if (self.isAPIReady_bl && e) {
                    var t = e.split(","); - 1 != (e = self.isMobile_bl && null != t[1] ? t[1] : t[0]).indexOf("encrypt:") && (e = atob(e.substr(8))), self.posterPath_str = e, -1 == self.videoSourcePath_str.indexOf(".") && self.useYoutube_bl && self.isMobile_bl ? self.videoPoster_do.setPoster("youtubemobile") : (self.videoPoster_do.setPoster(self.posterPath_str), self.prevPosterSource_str != e && self.dispatchEvent(FWDEVPlayer.UPDATE_POSTER_SOURCE)), self.prevPosterSource_str = e
                }
            }, this.updateAds = function(e) {
                if (self.videoType_str != FWDEVPlayer.YOUTUBE || self.ytb_do)
                    if (!self.data.vastXML || self.data.isVastXMLParsed_bl) {
                        if (!self.isAdd_bl) {
                            if (self.TrackingEvents = void 0, self.Impression = void 0, self.ClickTracking = void 0, self.callFirstQuartile = !0, self.callMidpoint = !0, self.callThirdQuartile = !0, !this.isAdd_bl) {
                                this.controller_do && (self.controller_do.setupAdsLines(self.data.adsSource_ar), self.totalDuration && self.controller_do.positionAdsLines(self.totalDuration));
                                for (var t = 0; t < self.data.adsSource_ar.length; t++)
                                    if (e >= self.data.adsSource_ar[t].timeStart && e <= self.data.adsSource_ar[t].timeStart + 1 && !self.data.adsSource_ar[t].played_bl && e != self.prevDuration) {
                                        self.isAdd_bl = !0, 0 != self.data.adsSource_ar[t].timeStart && (self.wasAdd_bl = !0), self.addSource_str = self.data.adsSource_ar[t].source, self.data.adsSource_ar[t].played_bl = !0, self.data.adsThumbnailPath_str = self.data.adsSource_ar[t].thumbnailSource, self.data.timeToHoldAds = self.data.adsSource_ar[t].timeToHoldAds, self.data.timeToHoldAds ? self.data.showSkipButton_bl = !0 : self.data.showSkipButton_bl = !1, self.data.adsPageToOpenURL_str = self.data.adsSource_ar[t].link, self.data.adsPageToOpenTarget_str = self.data.adsSource_ar[t].target, self.scrubAfterAddDuration = self.data.adsSource_ar[t].timeStart, self.TrackingEvents = self.data.adsSource_ar[t].TrackingEvents, self.Impression = self.data.adsSource_ar[t].Impression, self.ClickTracking = self.data.adsSource_ar[t].ClickTracking, self.curImageTotalTime = self.data.adsSource_ar[t].addDuration, self.isStopped_bl || (self.lastCurTime = self.curTime), self.lastCurTime || (self.lastCurTime = self.getCurrentTime()), self.setSource(self.addSource_str), self.videoType_str == FWDEVPlayer.IMAGE || self.videoType_str == FWDEVPlayer.IFRAME || self.isMobile_bl || (self.allowToPlay = !1, "00" == self.lastCurTime.substr(self.lastCurTime.length - 2) ? (self.autoPlay_bl || self.adDone_bl) && (-1 != self.addSource_str.indexOf("youtube.") && self.ytb_do && self.ytb_do.hasBeenCreatedOnce_bl && (self.allowToPlay = !0), -1 == self.addSource_str.indexOf("youtube.") && (self.allowToPlay = !0)) : (-1 != self.addSource_str.indexOf("youtube.") && self.ytb_do && self.ytb_do.hasBeenCreatedOnce_bl && (self.allowToPlay = !0), -1 == self.addSource_str.indexOf("youtube.") && (self.allowToPlay = !0)), self.allowToPlay && self.play()), self.adDone_bl = !1, this.controller_do && this.controller_do.line_ar && (this.controller_do.line_ar[t].setVisible(!1), this.controller_do.line_ar[t].isUsed_bl = !0);
                                        break
                                    }
                            }
                            self.isLive = self.data.videosSource_ar[self.data.startAtVideoSource].isLive, this.isAdd_bl || self.setSourceExternal_bl || self.setSource(self.data.videosSource_ar[self.data.startAtVideoSource].source, !1, self.data.videosSource_ar[self.data.startAtVideoSource].videoType), this.controller_do && this.controller_do.positionAdsLines(self.curDuration), self.prevDuration = e
                        }
                    } else self.data.loadVast(self.data.vastXML)
            }, this.updateImageScreen = function(e) {
                if (self.videoType_str == FWDEVPlayer.IFRAME) return self.iFrame_do || (self.iFrame_do = new FWDEVPDisplayObject("iframe"), self.iFrame_do.hasTransform3d_bl = !1, self.iFrame_do.hasTransform2d_bl = !1, self.iFrame_do.setBackfaceVisibility()), self.main_do.addChildAt(self.iFrame_do, self.main_do.getChildIndex(self.dumyClick_do) + 1), self.showClickScreen(), self.iFrame_do.screen.src = e, self.positionAdsImage(), void self.startToUpdateAdsButton();
                this.imageSceeenHolder_do || (this.imageSceeenHolder_do = new FWDEVPDisplayObject("div"), this.imageSceeenHolder_do.setX(0), this.imageSceeenHolder_do.setY(0), this.imageSceeenHolder_do.setBkColor("#000000")), self.main_do.addChildAt(self.imageSceeenHolder_do, self.main_do.getChildIndex(self.dumyClick_do) - 1), self.showClickScreen(), self.imageSceeenHolder_do.contains(self.imageScreen_do) && self.imageSceeenHolder_do.removeChild(this.imageScreen_do), this.imageScreen_do = null, self.imageScreen_do = new FWDEVPDisplayObject("img"), self.imageAdd_img = new Image, self.imageAdd_img.src = e, self.showPreloader_bl && self.preloader_do.show(), self.largePlayButton_do && self.largePlayButton_do.hide(), self.imageAdd_img.onload = function() {
                    self.imageScreen_do.setScreen(self.imageAdd_img), self.imageScreen_do.setAlpha(0), FWDAnimation.to(self.imageScreen_do, 1, {
                        alpha: 1
                    }), self.imageAddOriginalWidth = self.imageAdd_img.width, self.imageAddOriginalHeight = self.imageAdd_img.height, self.preloader_do.hide(), self.imageSceeenHolder_do.addChild(self.imageScreen_do), self.positionAdsImage(), self.startToUpdateAdsButton()
                }, self.imageAdd_img.onerror = function() {
                    self.main_do.addChild(self.info_do), self.info_do.showText("Advertisment image with path " + e + " can't be found"), self.preloader_do.hide()
                }
            }, this.positionAdsImage = function() {
                if (self.videoType_str == FWDEVPlayer.IFRAME && self.iFrame_do && (self.iFrame_do.setWidth(self.stageWidth), self.iFrame_do.setHeight(self.stageHeight)), self.imageScreen_do && self.videoType_str == FWDEVPlayer.IMAGE) {
                    var e = self.stageWidth / self.imageAddOriginalWidth,
                        t = self.stageHeight / self.imageAddOriginalHeight;
                    totalScale = 0, t <= e ? totalScale = e : e <= t && (totalScale = t), finalW = parseInt(self.imageAddOriginalWidth * totalScale), finalH = parseInt(self.imageAddOriginalHeight * totalScale), finalX = parseInt((self.stageWidth - finalW) / 2), finalY = parseInt((self.stageHeight - finalH) / 2), self.imageScreen_do.setWidth(finalW), self.imageScreen_do.setHeight(finalH), self.imageScreen_do.setX(finalX), self.imageScreen_do.setY(finalY), self.imageSceeenHolder_do.setWidth(self.stageWidth), self.imageSceeenHolder_do.setHeight(self.stageHeight)
                }
            }, this.startToUpdateAdsButton = function() {
                self.curImageTime = 0, self.updateAdsButton(), self.stopUpdateImageInterval(), self.startUpdateImageInterval(), self.setPlayAndPauseButtonState()
            }, this.stopUpdateImageInterval = function() {
                self.isImageAdsPlaying_bl = !1, clearInterval(self.startUpdateAdsId_int), self.setPlayAndPauseButtonState(), self.largePlayButton_do && self.largePlayButton_do.show(), self.isPlaying_bl = !1, self.hider.stop()
            }, this.startUpdateImageInterval = function() {
                self.isImageAdsPlaying_bl = !0, self.startUpdateAdsId_int = setInterval(self.updateAdsButton, 1e3), self.setPlayAndPauseButtonState(), self.largePlayButton_do && self.largePlayButton_do.hide(), self.isPlaying_bl = !0, self.hider.start()
            }, this.updateAdsButton = function() {
                self.videoScreenUpdateTimeHandler({
                    curTime: FWDEVPUtils.formatTime(self.curImageTime),
                    totalTime: FWDEVPUtils.formatTime(self.curImageTotalTime),
                    seconds: self.curImageTime
                }), self.videoScreenUpdateHandler({
                    percent: self.curImageTime / self.curImageTotalTime
                }), self.curImageTime == self.curImageTotalTime && self.videoScreenPlayCompleteHandler(), self.curImageTime += 1
            }, this.setPlayAndPauseButtonState = function() {
                this.isImageAdsPlaying_bl ? self.controller_do && self.controller_do.showPauseButton() : self.controller_do && self.controller_do.showPlayButton()
            }, this.isThreeJsLoaded_bl = !1, this.isThreeJsOrbitLoaded_bl = !1, this.load360ScriptsId_to, isHLSJsLoaded_bl = !1, this.destroyHLS = function() {
                self.hlsJS && (self.hlsJS.destroy(), self.hlsJS = null)
            }, this.setupHLS = function() {
                self.hlsJS || (self.isHLSJsLoaded_bl = !0, self.hlsJS = new Hls, self.hlsJS.on(Hls.Events.ERROR, function(e, t) {
                    switch (self.HLSError_str, t.details) {
                        case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
                            try {
                                self.HLSError_str = 'cannot load <a href="' + t.context.url + '">' + url + "</a><br>HTTP response code:" + t.response.code + " <br>" + t.response.text, 0 === t.response.code && (self.HLSError_str += 'this might be a CORS issue, consider installing <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">Allow-Control-Allow-Origin</a> Chrome Extension')
                            } catch (e) {
                                self.HLSError_str = "cannot load " + self.videoSourcePath_str
                            }
                            break;
                        case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
                            self.HLSError_str = "timeout while loading manifest";
                            break;
                        case Hls.ErrorDetails.MANIFEST_PARSING_ERROR:
                            self.HLSError_str = "error while parsing manifest:" + t.reason;
                            break;
                        case Hls.ErrorDetails.LEVEL_LOAD_ERROR:
                            self.HLSError_str = "error while loading level playlist";
                            break;
                        case Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                            self.HLSError_str = "timeout while loading level playlist";
                            break;
                        case Hls.ErrorDetails.LEVEL_SWITCH_ERROR:
                            self.HLSError_str = "error while trying to switch to level " + t.level;
                            break;
                        case Hls.ErrorDetails.FRAG_LOAD_ERROR:
                            self.HLSError_str = "error while loading fragment " + t.frag.url;
                            break;
                        case Hls.ErrorDetails.FRAG_LOAD_TIMEOUT:
                            self.HLSError_str = "timeout while loading fragment " + t.frag.url;
                            break;
                        case Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                            self.HLSError_str = "Frag Loop Loading Error";
                            break;
                        case Hls.ErrorDetails.FRAG_DECRYPT_ERROR:
                            self.HLSError_str = "Decrypting Error:" + t.reason;
                            break;
                        case Hls.ErrorDetails.FRAG_PARSING_ERROR:
                            self.HLSError_str = "Parsing Error:" + t.reason;
                            break;
                        case Hls.ErrorDetails.KEY_LOAD_ERROR:
                            self.HLSError_str = "error while loading key " + t.frag.decryptdata.uri;
                            break;
                        case Hls.ErrorDetails.KEY_LOAD_TIMEOUT:
                            self.HLSError_str = "timeout while loading key " + t.frag.decryptdata.uri;
                            break;
                        case Hls.ErrorDetails.BUFFER_APPEND_ERROR:
                            self.HLSError_str = "Buffer Append Error";
                            break;
                        case Hls.ErrorDetails.BUFFER_ADD_CODEC_ERROR:
                            self.HLSError_str = "Buffer Add Codec Error for " + t.mimeType + ":" + t.err.message;
                            break;
                        case Hls.ErrorDetails.BUFFER_APPENDING_ERROR:
                            self.HLSError_str = "Buffer Appending Error"
                    }
                    self.HLSError_str && (console && console.log(self.HLSError_str), self.info_do.allowToRemove_bl = !1, self.main_do.addChild(self.info_do), self.info_do.showText(self.HLSError_str), self.resizeHandler())
                }))
            }, this.setSource = function(e, t, o) {
                if (self.isAPIReady_bl && (e = e.replace(/&amp;/g, "&"), self.videoSource_str = e, self.videoSourcePath_str = e, self.finalVideoPath_str = e, self.currentSecconds = 0, clearInterval(self.tryHLS_int), clearTimeout(self.load360ScriptsId_to), -1 != e.indexOf("encrypt:") && (e = atob(e.substr(8))), e != self.prevVideoSource_str || t)) {
                    if (self.videoSource_str = e, self.videoSourcePath_str = e, self.finalVideoPath_str = e, self.main_do.contains(self.info_do) && self.main_do.removeChild(self.info_do), self.stop(), self.controller_do && self.controller_do.setIsLive(self.isLive), -1 != self.videoSourcePath_str.indexOf("vimeo.com") ? (self.videoType_str = FWDEVPlayer.VIMEO, self.controller_do && !self.data.showDefaultControllerForVimeo_bl && self.controller_do.setX(-5e3)) : -1 != self.videoSourcePath_str.indexOf("youtube.") ? (self.videoType_str = FWDEVPlayer.YOUTUBE, self.controller_do && self.controller_do.setX(0)) : -1 != self.videoSourcePath_str.indexOf(".jpg") || -1 != self.videoSourcePath_str.indexOf(".jpeg") || -1 != self.videoSourcePath_str.indexOf(".png") ? (self.videoType_str = FWDEVPlayer.IMAGE, self.controller_do && self.controller_do.setX(0)) : -1 != self.videoSourcePath_str.toLowerCase().indexOf(".mp3") ? (self.videoType_str = FWDEVPlayer.MP3, self.controller_do && self.controller_do.setX(0)) : -1 != self.videoSourcePath_str.toLowerCase().indexOf("http") && -1 == self.videoSourcePath_str.indexOf(".m3u8") && -1 == self.videoSourcePath_str.toLowerCase().indexOf(".mp4") && -1 == self.videoSourcePath_str.toLowerCase().indexOf("google.com") && -1 == self.videoSourcePath_str.toLowerCase().indexOf("lh3.") ? (self.videoType_str = FWDEVPlayer.IFRAME, self.controller_do && self.controller_do.setX(0)) : (self.controller_do && self.controller_do.setX(0), self.isMobile_bl || FWDEVPlayer.hasHTMLHLS || -1 == self.videoSourcePath_str.indexOf(".m3u8") ? self.videoType_str = FWDEVPlayer.VIDEO : self.videoType_str = FWDEVPlayer.HLS_JS), -1 != self.videoSource_str.indexOf("youtube.") && !self.isYoutubeReady_bl) return setTimeout(function() {
                        self.showPreloader_bl && (self.main_do.addChild(self.preloader_do), self.preloader_do.show(!0), self.largePlayButton_do && self.largePlayButton_do.hide(), -1 != location.protocol.indexOf("file:") && FWDEVPUtils.isIE && self.main_do.addChild(self.info_do))
                    }, 50), -1 != location.protocol.indexOf("file:") && FWDEVPUtils.isIE ? (self.info_do.allowToRemove_bl = !1, self.main_do.addChild(self.info_do), self.info_do.showText("This browser dosen't allow the Youtube API to run local, please test it online or in another browser like Firefox or Chrome."), void self.resizeHandler()) : void self.setupYoutubeAPI();
                    if (-1 != e.indexOf("vimeo.") && !self.vimeo_do && self.videoType_str == FWDEVPlayer.VIMEO) return -1 != location.protocol.indexOf("file:") ? (self.main_do.addChild(self.info_do), self.info_do.showText("This browser dosen't allow playing Vimeo videos local, please test online."), void self.resizeHandler()) : (self.showPreloader_bl && (self.main_do.addChild(self.preloader_do), self.preloader_do.show(!0)), self.largePlayButton_do && self.largePlayButton_do.hide(), void self.setupVimeoAPI());
                    if (self.isGR = !1, self.is360 = !1, o && ("360degreevideo" == o.toLowerCase() ? (self.isGR = !1, self.is360 = !0) : "greenscreenvideo" == o.toLowerCase() && (self.isGR = !0, self.is360 = !1)), self.isGR || self.is360 ? (self.main_do.setBkColor("transparent"), self.videoScreen_do.setBkColor("transparent")) : (self.main_do.setBkColor(self.backgroundColor_str), self.videoScreen_do.setBkColor(self.backgroundColor_str)), !(self.isMobile_bl || FWDEVPlayer.hasHTMLHLS || -1 == self.videoSourcePath_str.indexOf(".m3u8") || self.isHLSJsLoaded_bl || FWDEVPlayer.isHLSJsLoaded_bl)) return -1 != location.protocol.indexOf("file:") ? (self.info_do.allowToRemove_bl = !1, self.main_do.addChild(self.info_do), self.info_do.showText("This browser dosen't allow playing HLS / live streaming videos local, please test online."), void self.resizeHandler()) : ((s = document.createElement("script")).src = self.data.hlsPath_str, s.onerror = function() {
                        self.main_do.addChild(self.info_do), self.info_do.showText("Error loading HLS library <font color='#FF0000'>" + self.data.hlsPath_str + "</font>."), self.preloader_do.hide()
                    }, s.onload = function() {
                        self.isHLSJsLoaded_bl = !0, FWDEVPlayer.isHLSJsLoaded_bl = !0, self.setupHLS(), self.setSource(self.videoSourcePath_str, !1, self.data.videosSource_ar[self.data.startAtVideoSource].videoType)
                    }, void document.head.appendChild(s));
                    if (self.is360 && !self.isThreeJsOrbigLoaded_bl) {
                        if (FWDEVPUtils.isLocal) return self.main_do.addChild(self.info_do), self.info_do.showText("This browser dosen't allow playing 360 videos local, please test online."), void self.preloader_do.hide();
                        if (!FWDEVPUtils.hasWEBGL) return self.main_do.addChild(self.info_do), self.info_do.showText("Playing 360 videos in this browser is not possible because it dosen't support WEBGL."), void self.preloader_do.hide();
                        var s;
                        if (!self.isThreeJsLoaded_bl && !FWDEVPlayer.hasThreeJsLoaded_bl) return (s = document.createElement("script")).src = self.data.threeJsPath_str, s.onerror = function() {
                            self.main_do.addChild(self.info_do), self.info_do.showText("Error loading 360 degree library <font color='#FF0000'>" + self.data.threeJsPath_str + "</font>."), self.preloader_do.hide()
                        }, s.onload = function() {
                            self.isThreeJsOrbigLoaded_bl = !0;
                            var e = document.createElement("script");
                            e.src = self.data.threeJsControlsPath_str, e.onerror = function() {
                                self.main_do.addChild(self.info_do), self.info_do.showText("Error loading three.js from <font color='#FF0000'>" + self.data.threeJsControlsPath_str + "</font>."), self.preloader_do.hide()
                            }, e.onload = function() {
                                FWDEVPlayer.hasThreeJsLoaded_bl = !0, self.isThreeJsOrbitLoaded_bl = !0, self.isThreeJsOrbigLoaded_bl && self.isThreeJsOrbitLoaded_bl && self.setSource(self.data.videosSource_ar[self.data.startAtVideoSource].source, !1, self.data.videosSource_ar[self.data.startAtVideoSource].videoType), clearTimeout(self.load360ScriptsId_to), self.preloader_do.hide()
                            }, document.head.appendChild(e)
                        }, document.head.appendChild(s), void(this.load360ScriptsId_to = setTimeout(function() {
                            self.showPreloader_bl && self.preloader_do.show()
                        }, 1e3))
                    }
                    if (self.is360 ? self.dumyClick_do.getStyle().cursor = "url(" + self.data.handPath_str + "), default" : self.dumyClick_do.getStyle().cursor = "auto", !(self.prevVideoSource_str = e)) return self.main_do.addChild(self.info_do), void self.info_do.showText("Video source is not defined!");
                    if (-1 != e.indexOf("youtube.")) {
                        e = e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]
                    }
                    if (self.popupAds_do && self.data.popupAds_ar && self.popupAds_do.resetPopups(self.data.popupAds_ar), self.stop(e), self.controller_do && self.data.subtitles_ar && 1 < self.data.subtitles_ar.length && (self.controller_do.updateSubtitleButtons(self.data.subtitles_ar, self.data.startAtSubtitle), self.data.subtitlePath_str = self.data.subtitles_ar[self.data.subtitles_ar.length - 1 - self.data.startAtSubtitle].source), self.controller_do && !self.isQualityChanging_bl && self.controller_do.disableSubtitleButton(), self.controller_do && self.controller_do.rewindButton_do && self.controller_do.rewindButton_do.disable(), "00:00:00" != self.data.scrubAtTimeAtFirstPlay && (self.playAtTime_bl = !0), self.controller_do && self.controller_do.downloadButton_do && self.controller_do.downloadButton_do.disable(), self.controller_do && self.controller_do.updateHexColorForScrubber(self.isAdd_bl), self.resizeHandler(), self.getVideoSource() && self.dispatchEvent(FWDEVPlayer.UPDATE_VIDEO_SOURCE), self.videoType_str == FWDEVPlayer.IMAGE || self.videoType_str == FWDEVPlayer.IFRAME) return self.updateImageScreen(self.videoSourcePath_str), void(self.videoPoster_do && self.videoPoster_do.setX(-5e3));
                    if (self.main_do.contains(self.imageSceeenHolder_do) && self.main_do.removeChild(self.imageSceeenHolder_do), self.main_do.contains(self.iFrame_do) && self.main_do.removeChild(self.iFrame_do), self.videoPoster_do && self.videoPoster_do.setX(0), self.isAdd_bl ? self.setPlaybackRate(1) : self.setPlaybackRate(self.data.defaultPlaybackRate_ar[self.data.startAtPlaybackIndex]), self.controller_do && (self.videoType_str == FWDEVPlayer.VIMEO || self.videoType_str == FWDEVPlayer.HLS_JS || self.videoType_str == FWDEVPlayer.IMAGE || self.videoType_str == FWDEVPlayer.IFRAME ? self.controller_do.removePlaybackRateButton() : self.controller_do.addPlaybackRateButton()), self.controller_do && self.data.showPlaybackRateButton_bl && self.controller_do.updatePlaybackRateButtons(self.data.updatePlaybackRateButtons, self.data.startAtPlaybackIndex), self.videoType_str == FWDEVPlayer.VIMEO) return self.videoScreen_do && self.videoScreen_do.setX(-5e3), self.audioScreen_do && self.audioScreen_do.setX(-5e3), self.audioScreen_do.setVisible(!1), self.ytb_do && self.ytb_do.ytb && self.ytb_do.showDisable(), self.flash_do ? (self.flash_do.setWidth(1), self.flash_do.setHeight(1)) : self.videoScreen_do.setVisible(!1), self.vimeo_do.setSource(e), self.isMobile_bl ? (self.videoPoster_do.hide(), self.largePlayButton_do && self.largePlayButton_do.hide()) : (self.setPosterSource(self.posterPath_str), self.videoPoster_do.show(), self.largePlayButton_do && !self.data.showAnnotationsPositionTool_bl && self.largePlayButton_do.show(), self.data.autoPlay_bl && self.play()), self.getVideoSource() && self.dispatchEvent(FWDEVPlayer.UPDATE_VIDEO_SOURCE), this.resizeHandler(), self.vimeo_do.iFrame_do && (self.vimeo_do.iFrame_do.screen.style.left = "0px"), void self.vimeo_do.setX(0);
                    if (self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do && self.ytb_do.ytb && self.ytb_do.ytb.cueVideoById) return self.ytb_do && self.ytb_do.ytb && self.ytb_do.hideDisable(), self.ytb_do.setX(0), self.flash_do ? (self.flash_do.setWidth(1), self.flash_do.setHeight(1)) : self.videoScreen_do.setVisible(!1), self.vimeo_do && self.vimeo_do.setX(-5e3), self.videoScreen_do && self.videoScreen_do.setX(-5e3), self.audioScreen_do && self.audioScreen_do.setX(-5e3), self.audioScreen_do.setVisible(!1), self.ytb_do.setSource(e), self.isMobile_bl ? (self.videoPoster_do.hide(), self.largePlayButton_d && self.largePlayButton_do.hide()) : (self.setPosterSource(self.posterPath_str), self.videoPoster_do.show(), self.largePlayButton_do && !self.data.showAnnotationsPositionTool_bl && self.largePlayButton_do.show(), self.data.autoPlay_bl && self.play(), !self.isMobile_bl && self.wasAdd_bl && self.play()), self.controller_do && (self.controller_do.updatePreloaderBar(0), self.controller_do.addYtbQualityButton()), void(self.getVideoSource() && self.dispatchEvent(FWDEVPlayer.UPDATE_VIDEO_SOURCE));
                    if (self.wasAdd_bl = !1, -1 == e.indexOf("google.")) {
                        var i = e.split(",");
                        e = self.isMobile_bl && null != i[1] ? i[1] : i[0]
                    }
                    if (self.finalVideoPath_str = e, self.videoType_str == FWDEVPlayer.MP3) return self.setPosterSource(self.posterPath_str), self.ytb_do && self.ytb_do.ytb && self.ytb_do.showDisable(), self.vimeo_do && self.vimeo_do.setX(-5e3), self.ytb_do && self.ytb_do.setX(-5e3), self.flash_do ? (self.flash_do.setWidth(1), self.flash_do.setHeight(1)) : self.videoScreen_do.setVisible(!1), self.videoPoster_do.show(), self.largePlayButton_do && !self.data.showAnnotationsPositionTool_bl && self.largePlayButton_do.show(), self.audioScreen_do.setX(0), self.audioScreen_do.setVisible(!0), self.showPreloader_bl && self.preloader_do.hide(!0), self.audioScreen_do.setSource(e), self.data.autoPlay_bl && self.play(), void(self.controller_do && self.data.videosSource_ar && 1 < self.data.videosSource_ar.length ? (self.controller_do.updatePreloaderBar(0), self.controller_do.addYtbQualityButton(), self.controller_do.updateQuality(self.data.videoLabels_ar, self.data.videoLabels_ar[self.data.videoLabels_ar.length - 1 - self.data.startAtVideoSource])) : self.controller_do && self.controller_do.removeYtbQualityButton());
                    (FWDEVPlayer.hasHTML5Video && self.videoType_str == FWDEVPlayer.VIDEO || self.videoType_str == FWDEVPlayer.HLS_JS) && (self.setPosterSource(self.posterPath_str), self.ytb_do && self.ytb_do.ytb && self.ytb_do.showDisable(), self.vimeo_do && self.vimeo_do.setX(-5e3), self.ytb_do && self.ytb_do.setX(-5e3), self.audioScreen_do && self.audioScreen_do.setX(-5e3), self.audioScreen_do.setVisible(!1), self.videoPoster_do.show(), self.largePlayButton_do && !self.data.showAnnotationsPositionTool_bl && self.largePlayButton_do.show(), self.videoScreen_do.setX(0), self.videoScreen_do.setVisible(!0), self.showPreloader_bl && self.preloader_do.hide(!0), self.videoType_str == FWDEVPlayer.HLS_JS ? (self.videoScreen_do.setSource(e), self.videoScreen_do.initVideo(), self.setupHLS(), self.hlsJS.loadSource(self.videoSourcePath_str), self.hlsJS.attachMedia(self.videoScreen_do.video_el), self.hlsJS.on(Hls.Events.MANIFEST_PARSED, function(e) {
                        self.isHLSManifestReady_bl = !0, self.data.autoPlay_bl && self.play()
                    })) : (self.videoScreen_do.setSource(e), self.data.autoPlay_bl && self.play(), self.flash_do && (self.flash_do.setWidth(1), self.flash_do.setHeight(1))), self.controller_do && self.data.videosSource_ar && 1 < self.data.videosSource_ar.length ? (self.controller_do.updatePreloaderBar(0), self.controller_do.addYtbQualityButton(), self.controller_do.updateQuality(self.data.videoLabels_ar, self.data.videoLabels_ar[self.data.videoLabels_ar.length - 1 - self.data.startAtVideoSource])) : self.controller_do && self.controller_do.removeYtbQualityButton()), self.prevVideoSourcePath_str = self.videoSourcePath_str
                }
            }, this.goFullScreen = function() {
                if (self.isAPIReady_bl && self.displayType != FWDEVPlayer.BACKGROUND_VIDEO) {
                    document.addEventListener && (document.addEventListener("fullscreenchange", self.onFullScreenChange), document.addEventListener("mozfullscreenchange", self.onFullScreenChange), document.addEventListener("webkitfullscreenchange", self.onFullScreenChange), document.addEventListener("MSFullscreenChange", self.onFullScreenChange)), document.documentElement.requestFullScreen ? self.main_do.screen.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? self.main_do.screen.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen ? self.main_do.screen.webkitRequestFullScreen() : document.documentElement.msRequestFullscreen && self.main_do.screen.msRequestFullscreen(), self.callVastEvent("playerExpand"), self.disableClick(), self.main_do.getStyle().position = "fixed", document.documentElement.style.overflow = "hidden", self.main_do.getStyle().zIndex = 9999999999998, self.isFullScreen_bl = !0, self.controller_do && (self.controller_do.showNormalScreenButton(), self.controller_do.setNormalStateToFullScreenButton());
                    var e = FWDEVPUtils.getScrollOffsets();
                    self.lastX = e.x, self.lastY = e.y, window.scrollTo(0, 0), self.isMobile_bl && window.addEventListener("touchmove", self.disableFullScreenOnMobileHandler), self.dispatchEvent(FWDEVPlayer.GO_FULLSCREEN), self.resizeHandler()
                }
            }, this.disableFullScreenOnMobileHandler = function(e) {
                e.preventDefault && e.preventDefault()
            }, this.goNormalScreen = function() {
                self.isAPIReady_bl && self.displayType != FWDEVPlayer.BACKGROUND_VIDEO && (document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), self.addMainDoToTheOriginalParent(), self.isFullScreen_bl = !1, self.resizeHandler())
            }, this.addMainDoToTheOriginalParent = function() {
                self.isFullScreen_bl && (document.removeEventListener && (document.removeEventListener("fullscreenchange", self.onFullScreenChange), document.removeEventListener("mozfullscreenchange", self.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", self.onFullScreenChange), document.removeEventListener("MSFullscreenChange", self.onFullScreenChange)), self.callVastEvent("playerCollapse"), self.controller_do && self.controller_do.setNormalStateToFullScreenButton(), self.displayType == FWDEVPlayer.RESPONSIVE || self.displayType == FWDEVPlayer.AFTER_PARENT || self.displayType == FWDEVPlayer.LIGHTBOX || self.displayType == FWDEVPlayer.STICKY ? (document.documentElement.style.overflow = "visible", self.main_do.getStyle().position = "relative", self.main_do.getStyle().zIndex = 0) : (self.main_do.getStyle().position = "absolute", self.main_do.getStyle().zIndex = 9999999999998), self.showCursor(), self.controller_do && self.controller_do.showFullScreenButton(), window.scrollTo(self.lastX, self.lastY), FWDEVPUtils.isIE || setTimeout(function() {
                    window.scrollTo(self.lastX, self.lastY)
                }, 150), self.isMobile_bl && window.removeEventListener("touchmove", self.disableFullScreenOnMobileHandler), self.dispatchEvent(FWDEVPlayer.GO_NORMALSCREEN))
            }, this.onFullScreenChange = function(e) {
                document.fullScreen || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen || (self.controller_do && self.controller_do.showNormalScreenButton(), self.addMainDoToTheOriginalParent(), self.isFullScreen_bl = !1)
            }, this.downloadVideo = function() {
                if (self.isAPIReady_bl) {
                    var e, t = self.data.videosSource_ar[self.data.startAtVideoSource].source;
                    if (e = -1 != t.indexOf("/") ? t.substr(t.lastIndexOf("/") + 1) : t, self.data.downloadVideo(t, e), window.ga) ga("send", {
                        hitType: "event",
                        eventCategory: "videos",
                        eventAction: "downloaded",
                        eventLabel: "videoPath:" + t + ", videoName:" + e,
                        nonInteraction: !0
                    })
                }
            }, this.setVideoSource = function(e, t, o) {
                self.isAPIReady_bl && (self.isAdd_bl = !1, null == o && (o = !1), self.data.videosSource_ar[self.data.startAtVideoSource].isLive = o, self.data.videosSource_ar[self.data.startAtVideoSource].source = e, self.data.videosSource_ar[self.data.startAtVideoSource].videoType = t, self.setSource(e, !1, t))
            }, this.getVideoSource = function() {
                if (self.isAPIReady_bl) return self.finalVideoPath_str
            }, this.updateVolume = function() {
                self.isAPIReady_bl && self.setVolume()
            }, this.getPosterSource = function() {
                if (self.isAPIReady_bl) return self.posterPath_str
            }, this.getCurrentTime = function() {
                return self.curTime ? self.curTime : "00:00"
            }, this.getTotalTime = function() {
                return self.totalTime ? self.totalTime : "00:00"
            }, this.setPlaybackRate = function(e) {
                self.isAPIReady_bl && (self.videoType_str == FWDEVPlayer.VIDEO && self.videoScreen_do ? self.videoScreen_do.setPlaybackRate(e) : self.videoType_str == FWDEVPlayer.MP3 && self.audioScreen_do ? self.audioScreen_do.setPlaybackRate(e) : self.videoType_str == FWDEVPlayer.YOUTUBE && self.ytb_do && self.ytb_do.ytb && self.ytb_do.setPlaybackRate(e))
            }, this.fillEntireVideoScreen = function(e) {
                self.isAPIReady_bl && (this.fillEntireVideoScreen_bl = e, this.resizeHandler())
            }, this.showLightbox = function() {
                self.lightBox_do && self.lightBox_do.show()
            }, this.updateHEXColors = function(e, t) {
                self.isAPIReady_bl && (self.controller_do.updateHEXColors(e, t), self.largePlayButton_do && self.largePlayButton_do.updateHEXColors(e, t), self.shareWindow_do && self.shareWindow_do.updateHEXColors(e, t), self.embedWindow_do && self.embedWindow_do.updateHEXColors(e, t), self.adsSkip_do && self.adsSkip_do.updateHEXColors(e, t), self.opener_do && self.opener_do.updateHEXColors(e, t))
            }, this.hideCursor = function() {
                document.documentElement.style.cursor = "none", document.getElementsByTagName("body")[0].style.cursor = "none", self.isAdd_bl || (self.dumyClick_do.getStyle().cursor = "none")
            }, this.showCursor = function() {
                document.documentElement.style.cursor = "auto", document.getElementsByTagName("body")[0].style.cursor = "auto", self.isAdd_bl ? self.dumyClick_do.setButtonMode(!0) : self.is360 ? self.dumyClick_do.getStyle().cursor = "url(" + self.data.handPath_str + "), default" : self.dumyClick_do.getStyle().cursor = "auto"
            }, this.callVastEvent = function(e) {
                if (self.TrackingEvents) {
                    for (var t, o = 0; o < self.TrackingEvents.length; o++) e == self.TrackingEvents[o].event && (t = self.TrackingEvents[o].URI);
                    t && self.executeVastEvent(t)
                }
            }, this.executeVastEvent = function(e) {
                if (e) {
                    var t = new XMLHttpRequest;
                    t.onreadystatechange = function(e) {}, t.onerror = function(e) {
                        try {
                            window.console && console.log(e), window.console && console.log(e.message)
                        } catch (e) {}
                    }, t.open("get", e, !0), t.send()
                }
            }, this.getTimeStamp = function() {
                var e = window.location.href; - 1 != (e = e.substr(e.indexOf("t=") + 2)).indexOf("s&") && (e = e.substr(0, e.indexOf("s&") + 1));
                var t = /\d+h/g,
                    o = e.match(t);
                try {
                    o = e.match(t)[0]
                } catch (e) {}
                o && (1 == (o = o.substr(0, o.length - 1)).length && parseInt(o) < 10 && (o = "0" + o), 59 < parseInt(o) && (o = 59)), o = o || "00";
                t = /\d+m/g;
                var s = e.match(t);
                try {
                    s = e.match(t)[0]
                } catch (e) {}
                s && (1 == (s = s.substr(0, s.length - 1)).length && parseInt(s) < 10 && (s = "0" + s), 59 < parseInt(s) && (s = 59)), s = s || "00";
                t = /\d+s/g;
                var i = e.match(t);
                try {
                    i = e.match(t)[0]
                } catch (e) {}
                return i && (1 == (i = i.substr(0, i.length - 1)).length && parseInt(i) < 10 && (i = "0" + i), 59 < parseInt(i) && (i = 59)), o + ":" + s + ":" + (i = i || "00")
            }, this.addListener = function(e, t) {
                if (null == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                if ("function" != typeof t) throw Error("listener must be of type Function.");
                var o = {};
                o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
            }, this.dispatchEvent = function(e, t) {
                if (null != this.listeners) {
                    if (null == e) throw Error("type is required.");
                    if ("object" == typeof e) throw Error("type must be of type String.");
                    for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                        if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                            if (t)
                                for (var i in t) this.listeners.events_ar[o][i] = t[i];
                            this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
                        }
                }
            }, this.removeListener = function(e, t) {
                if (null == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                if ("function" != typeof t) throw Error("listener must be of type Function." + e);
                for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                    if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                        this.listeners.events_ar.splice(o, 1);
                        break
                    }
            }, self.cleanMainEvents = function() {
                window.removeEventListener ? window.removeEventListener("resize", self.onResizeHandler) : window.detachEvent && window.detachEvent("onresize", self.onResizeHandler), clearTimeout(self.resizeHandlerId_to), clearTimeout(self.resizeHandler2Id_to), clearTimeout(self.hidePreloaderId_to), clearTimeout(self.orientationChangeId_to)
            };
            var args = FWDEVPUtils.getUrlArgs(window.location.search),
                embedTest = args.EVPInstanceName,
                tt = FWDEVPlayer.instaces_ar.length,
                video;
            if (embedTest)
                for (var i = 0; i < tt; i++)
                    if (video = FWDEVPlayer.instaces_ar[i], video.props.instanceName == embedTest) {
                        var ws = FWDEVPUtils.getViewportSize(),
                            dumy_do = new FWDEVPDisplayObject("div");
                        dumy_do.setBkColor(video.props.backgroundColor), dumy_do.setWidth(ws.w), dumy_do.setHeight(ws.h), document.documentElement.style.overflow = "hidden", document.getElementsByTagName("body")[0].style.overflow = "hidden", FWDEVPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].appendChild(dumy_do.screen) : document.documentElement.appendChild(dumy_do.screen);
                        break
                    } self.init()
        },
        l0, m0, n0, o0;
    FWDEVPlayer.setPrototype = function() {
        FWDEVPlayer.prototype = new FWDEVPEventDispatcher
    }, FWDEVPlayer.stopAllVideos = function(e) {
        for (var t, o = FWDEVPlayer.instaces_ar.length, s = 0; s < o; s++)(t = FWDEVPlayer.instaces_ar[s]) != e && t.stop()
    }, FWDEVPlayer.pauseAllVideos = function(e) {
        for (var t, o = FWDEVPlayer.instaces_ar.length, s = 0; s < o; s++)(t = FWDEVPlayer.instaces_ar[s]) != e && t.pause()
    }, FWDEVPlayer.hasHTML5VideoTestIsDone = !1, FWDEVPlayer.hasHTML5VideoTestIsDone || (FWDEVPlayer.hasHTML5Video = (l0 = document.createElement("video"), m0 = !1, l0.canPlayType && (m0 = Boolean("probably" == l0.canPlayType("video/mp4") || "maybe" == l0.canPlayType("video/mp4")), FWDEVPlayer.canPlayMp4 = Boolean("probably" == l0.canPlayType("video/mp4") || "maybe" == l0.canPlayType("video/mp4")), FWDEVPlayer.canPlayOgg = Boolean("probably" == l0.canPlayType("video/ogg") || "maybe" == l0.canPlayType("video/ogg")), FWDEVPlayer.canPlayWebm = Boolean("probably" == l0.canPlayType("video/webm") || "maybe" == l0.canPlayType("video/webm"))), !!self.isMobile_bl || (FWDEVPlayer.hasHTML5VideoTestIsDone = !0, m0))), FWDEVPlayer.hasHTMLHLS = (n0 = document.createElement("video"), o0 = !1, n0.canPlayType && (o0 = Boolean("probably" === n0.canPlayType("application/vnd.apple.mpegurl") || "maybe" === n0.canPlayType("application/vnd.apple.mpegurl"))), o0), FWDEVPlayer.instaces_ar = [], FWDEVPlayer.curInstance = null, FWDEVPlayer.keyboardCurInstance = null, FWDEVPlayer.areInstancesCreated_bl = null, FWDEVPlayer.isYoutubeAPICreated_bl = !1, FWDEVPlayer.isEmbedded_bl = !1, FWDEVPlayer.CENTER = "center", FWDEVPlayer.LEFT = "left", FWDEVPlayer.RIGHT = "right", FWDEVPlayer.PAUSE_ALL_VIDEOS = "pause", FWDEVPlayer.STOP_ALL_VIDEOS = "stop", FWDEVPlayer.DO_NOTHING = "none", FWDEVPlayer.VIMEO = "vimeo", FWDEVPlayer.YOUTUBE = "youtube", FWDEVPlayer.VIDEO = "video", FWDEVPlayer.MP3 = "mp3", FWDEVPlayer.STICKY = "sticky", FWDEVPlayer.POSITION_TOP = "top", FWDEVPlayer.POSITION_BOTTOM = "bottom", FWDEVPlayer.SAFE_TO_SCRUB = "safeToScrub", FWDEVPlayer.IFRAME = "iframe", FWDEVPlayer.SCRUB = "scrub", FWDEVPlayer.BACKGROUND_VIDEO = "backgroundvideo", FWDEVPlayer.READY = "ready", FWDEVPlayer.STOP = "stop", FWDEVPlayer.PLAY = "play", FWDEVPlayer.PAUSE = "pause", FWDEVPlayer.UPDATE = "update", FWDEVPlayer.UPDATE_TIME = "updateTime", FWDEVPlayer.UPDATE_VIDEO_SOURCE = "updateVideoSource", FWDEVPlayer.UPDATE_POSTER_SOURCE = "udpatePosterSource", FWDEVPlayer.ERROR = "error", FWDEVPlayer.PLAY_COMPLETE = "playComplete", FWDEVPlayer.VOLUME_SET = "volumeSet", FWDEVPlayer.GO_FULLSCREEN = "goFullScreen", FWDEVPlayer.GO_NORMALSCREEN = "goNormalScreen", FWDEVPlayer.IMAGE = "image", FWDEVPlayer.HIDE_LIGHTBOX_COMPLETE = "lightboxHideComplete", FWDEVPlayer.HLS_JS = "HLS_JS", FWDEVPlayer.LIGHTBOX = "lightbox", FWDEVPlayer.RESPONSIVE = "responsive", FWDEVPlayer.FULL_SCREEN = "fullscreen", FWDEVPlayer.AFTER_PARENT = "afterparent", window.FWDEVPlayer = FWDEVPlayer
}(window),
function(e) {
    var r = function(o, e, t, s, i, n) {
        var l = this;
        r.prototype;
        this.mainLightBox_do = null, this.lightBoxBackground_sdo = null, this.lightBoxGridHolder_do = null, this.closeButton_do = null, this.mainBackgroundColor_str = e, this.holderBackgroundColor_str = t, this.lightBoxBackgroundOpacity = s, this.lightBoxWidth = i, this.lightBoxHeight = n, this.setupButtonWithDelayId_to, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.closeButtonIsTweening_bl = !0, this.init = function() {
            l.getStyle().zIndex = 9999999, l.setupMainContainers()
        }, this.setupMainContainers = function() {
            l.isMobile_bl && l.hasPointerEvent_bl && (l.getStyle().msTouchAction = "none"), l.lightBoxBackground_sdo = new FWDEVPDisplayObject("div"), l.lightBoxBackground_sdo.setResizableSizeAfterParent(), l.lightBoxBackground_sdo.setBkColor(l.mainBackgroundColor_str), l.addChild(l.lightBoxBackground_sdo), l.mainLightBox_do = new FWDEVPDisplayObject("div"), l.mainLightBox_do.setBkColor(l.holderBackgroundColor_str), l.mainLightBox_do.setWidth(1), l.mainLightBox_do.setHeight(1), l.addChild(l.mainLightBox_do), document.documentElement.appendChild(l.screen), l.setX(-1e4), l.setY(-1e4), l.setWidth(0), l.setHeight(0)
        }, this.show = function() {
            if (!l.isShowed_bl) {
                l.isShowed_bl = !0, l.closeButton_do ? (l.hideCloseButton(!1), l.showCloseButton(!0), l.closeButton_do.setX(-200)) : l.loadClsoeButtonImage();
                var e = FWDEVPUtils.getViewportSize(),
                    t = FWDEVPUtils.getScrollOffsets();
                l.setWidth(e.w), l.setHeight(e.h), l.setX(t.x), l.setY(t.y), l.lightBoxBackground_sdo.setAlpha(0), FWDAnimation.to(l.lightBoxBackground_sdo, .8, {
                    alpha: l.lightBoxBackgroundOpacity
                }), l.setX(t.x), l.setY(t.y), l.mainLightBox_do.setX(parseInt(e.w / 2)), l.mainLightBox_do.setY(parseInt(e.h / 2)), l.lightBoxWidth > e.w ? (l.finalLightBoxWidth = e.w, l.finalLightBoxHeight = parseInt(l.lightBoxHeight * (e.w / l.lightBoxWidth))) : (l.finalLightBoxWidth = l.lightBoxWidth, l.finalLightBoxHeight = l.lightBoxHeight), FWDAnimation.to(l.mainLightBox_do, .8, {
                    w: l.finalLightBoxWidth,
                    h: l.finalLightBoxHeight,
                    x: parseInt((e.w - l.finalLightBoxWidth) / 2),
                    y: parseInt((e.h - l.finalLightBoxHeight) / 2),
                    delay: .4,
                    onComplete: l.showComplete,
                    ease: Expo.easeInOut
                }), o.stageContainer = l.mainLightBox_do.screen, o.main_do && (o.main_do.setX(-5e3), o.stageContainer.contains(o.main_do.screen) || o.stageContainer.appendChild(o.main_do.screen)), l.dispatchEvent(r.SHOW)
            }
        }, this.showComplete = function() {
            l.closeButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, l.closeButtonOnStartHandler), l.addKeyboardSupport(), o.startResizeHandler()
        }, this.addKeyboardSupport = function() {
            document.addEventListener("keydown", this.onKeyDownHandler)
        }, this.onKeyDownHandler = function(e) {
            27 == e.keyCode && l.closeButtonOnStartHandler()
        }, this.loadClsoeButtonImage = function() {
            l.closeN_img = new Image, l.closeN_img.onload = l.setupCloseButton, l.closeN_img.src = o.mainFolderPath_str + o.skinPath_str + "embed-close-button.png", l.closeSPath_str = o.mainFolderPath_str + o.skinPath_str + "embed-close-button-over.png"
        }, this.setupCloseButton = function(e) {
            var t = FWDEVPUtils.getViewportSize();
            FWDEVPSimpleButton.setPrototype(), l.closeButton_do = new FWDEVPSimpleButton(l.closeN_img, l.closeSPath_str, void 0, !0), l.hideCloseButton(!1), l.showCloseButton(!0), l.closeButton_do.setX(t.w - l.closeButton_do.w - 4), l.closeButton_do.setY(4), l.addChild(l.closeButton_do)
        }, this.showCloseButtonComplete = function() {
            l.closeButtonIsTweening_bl = !1
        }, this.hideCloseButton = function(e) {
            FWDAnimation.killTweensOf(l.closeButton_do), e ? FWDAnimation.to(l.closeButton_do, .9, {
                alpha: 0
            }) : l.closeButton_do.setAlpha(0)
        }, this.showCloseButton = function(e) {
            FWDAnimation.killTweensOf(l.closeButton_do), e ? FWDAnimation.to(l.closeButton_do, .9, {
                alpha: 1,
                delay: .8
            }) : l.closeButton_do.setAlpha(1)
        }, this.mouseDummyHandler = function(e) {
            if (!e.preventDefault) return !1;
            e.preventDefault()
        }, this.closeButtonOnStartHandler = function(e) {
            if (l.isShowed_bl) {
                l.isShowed_bl = !1;
                var t = FWDEVPUtils.getViewportSize();
                l.closeButton_do.removeListener(FWDEVPSimpleButton.MOUSE_UP, l.closeButtonOnStartHandler), FWDAnimation.to(l.closeButton_do, .9, {
                    alpha: 0
                }), FWDAnimation.to(l.mainLightBox_do, .8, {
                    w: 0,
                    h: 0,
                    x: parseInt(t.w / 2),
                    y: parseInt(t.h / 2),
                    delay: .4,
                    ease: Expo.easeInOut
                }), FWDAnimation.to(l.lightBoxBackground_sdo, .8, {
                    alpha: 0,
                    delay: .8
                }), FWDAnimation.to(o.main_do, .8, {
                    x: -o.main_do.w / 2,
                    y: -o.main_do.h / 2,
                    ease: Expo.easeInOut,
                    delay: .4
                }), l.lighboxAnimDoneId_to = setTimeout(l.lighboxHideAnimationDone, 1600), l.dispatchEvent(r.CLOSE)
            }
        }, this.lighboxHideAnimationDone = function() {
            l.setX(-1e4), l.setY(-1e4), l.setWidth(0), l.setHeight(0), l.dispatchEvent(r.HIDE_COMPLETE)
        }, this.init()
    };
    r.setPrototype = function() {
        r.prototype = new FWDEVPDisplayObject("div")
    }, r.CLOSE = "ligtBoxClose", r.SHOW = "show", r.HIDE_COMPLETE = "hideComplete", r.prototype = null, e.FWDEVPLightBox = r
}(window),
function(n) {
    var l = function(e, t, o, s) {
        var i = this;
        l.prototype;
        this.img_img = null, this.logoImage_do = null, this.position_str = o, this.source_str = t, this.logoLink_str = e.data.logoLink_str, this.margins = s, this.isShowed_bl = !0, this.allowToShow_bl = !0, this.init = function() {
            "none" == i.logoLink_str ? i.getStyle().pointerEvents = "none" : (i.setButtonMode(!0), i.screen.onclick = function() {
                n.open(i.logoLink_str, "_blank")
            }), i.logoImage_do = new FWDEVPDisplayObject("img"), i.img_img = new Image, i.img_img.onerror = null, i.img_img.onload = i.loadDone, i.img_img.src = i.source_str + "?" + (new Date).getTime(), i.hide()
        }, this.loadDone = function() {
            i.setWidth(i.img_img.width), i.setHeight(i.img_img.height), i.logoImage_do.setScreen(i.img_img), i.addChild(i.logoImage_do), i.logoImage_do.setWidth(i.img_img.width), i.logoImage_do.setHeight(i.img_img.height), i.positionAndResize()
        }, this.positionAndResize = function() {
            "topleft" == i.position_str ? (i.finalX = i.margins, i.finalY = i.margins) : "topright" == i.position_str ? (i.finalX = e.stageWidth - i.w - i.margins, i.finalY = i.margins) : "bottomright" == i.position_str ? (i.finalX = e.stageWidth - i.w - i.margins, i.finalY = e.stageHeight - i.h - i.margins) : "bottomleft" == i.position_str && (i.finalX = i.margins, i.finalY = e.stageHeight - i.h - i.margins), i.setX(i.finalX), i.setY(i.finalY)
        }, this.show = function(e) {
            i.isShowed_bl || (i.isShowed_bl = !0, i.setVisible(!0), FWDAnimation.killTweensOf(i), e ? FWDAnimation.to(i, .8, {
                alpha: 1,
                ease: Expo.easeInOut
            }) : i.setAlpha(1))
        }, this.hide = function(e, t) {
            (i.isShowed_bl || t) && (i.isShowed_bl = !1, FWDAnimation.killTweensOf(i), e ? FWDAnimation.to(i, .8, {
                alpha: 0,
                ease: Expo.easeInOut,
                onComplete: function() {
                    i.setVisible(!1)
                }
            }) : (i.setAlpha(0), i.setVisible(!1)))
        }, this.init()
    };
    l.setPrototype = function() {
        l.prototype = new FWDEVPDisplayObject("div")
    }, l.prototype = null, n.FWDEVPLogo = l
}(window),
function() {
    var n = function(e, t, o, s) {
        var i = this;
        this.animation_img = t.openerAnimation_img, o == FWDEVPlayer.POSITION_TOP ? (this.openN_img = t.openTopN_img, this.openSPath_str = t.openTopSPath_str) : (this.openN_img = t.openBottomN_img, this.openSPath_str = t.openBottomSPath_str), this.openerPauseN_img = t.openerPauseN_img, this.openerPlayN_img = t.openerPlayN_img, this.closeN_img = t.closeN_img, i.useHEXColorsForSkin_bl = t.useHEXColorsForSkin_bl, i.normalButtonsColor_str = t.normalButtonsColor_str, i.selectedButtonsColor_str = t.selectedButtonsColor_str, this.openerPauseS_str = t.openerPauseS_str, this.openerPlaySPath_str = t.openerPlayS_str, this.closeSPath_str = t.closeSPath_str, this.animationPath_img = t.animationPath_img, this.totalWidth = i.openN_img.width, this.totalHeight = i.openN_img.height, this.mainHolder_do = null, this.dumy_do = null, this.openN_do = null, this.openS_do = null, this.closeN_do = null, this.closeS_do = null, this.animation_do = null, this.playPauseButton_do = null, this.position_str = o, this.alignment_str = t.openerAlignment_str, this.openerEqulizerOffsetLeft = t.openerEqulizerOffsetLeft, this.openerEqulizerOffsetTop = t.openerEqulizerOffsetTop, this.showFirstTime_bl = !0, this.playerIsShowed_bl = s, this.showOpenerPlayPauseButton_bl = t.showOpenerPlayPauseButton_bl, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.init = function() {
            -1 != t.skinPath_str.indexOf("hex_white") ? i.selectedButtonsColor_str = "#FFFFFF" : i.selectedButtonsColor_str = t.selectedButtonsColor_str, i.hasTransform3d_bl = !1, i.hasTransform2d_bl = !1, i.setBackfaceVisibility(), i.getStyle().msTouchAction = "none", i.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", i.setupStuff(), i.showOpenerPlayPauseButton_bl && i.setupPlayPauseButton(), i.playerIsShowed_bl && i.showCloseButton(), i.showOpenerPlayPauseButton_bl ? i.setWidth(i.totalWidth + i.openerPauseN_img.width + 1) : i.setWidth(i.totalWidth), i.setHeight(i.totalHeight)
        }, this.setupStuff = function(e) {
            i.mainHolder_do = new FWDEVPDisplayObject("div"), i.mainHolder_do.hasTransform3d_bl = !1, i.mainHolder_do.hasTransform2d_bl = !1, i.mainHolder_do.setBackfaceVisibility(), i.showOpenerPlayPauseButton_bl ? i.mainHolder_do.setWidth(i.totalWidth + i.openerPauseN_img.width + 1) : i.mainHolder_do.setWidth(i.totalWidth), i.mainHolder_do.setHeight(i.totalHeight), i.useHEXColorsForSkin_bl ? (i.openN_do = new FWDEVPDisplayObject("div"), i.openN_canvas = FWDEVPUtils.getCanvasWithModifiedColor(i.openN_img, i.normalButtonsColor_str).canvas, i.openN_do.screen.appendChild(i.openN_canvas)) : (i.openN_do = new FWDEVPDisplayObject("img"), i.openN_do.setScreen(i.openN_img)), i.openN_do.setWidth(i.openN_img.width), i.openN_do.setHeight(i.openN_img.height), i.openS_img = new Image, i.openS_img.src = i.openSPath_str, i.useHEXColorsForSkin_bl ? (i.openS_do = new FWDEVPDisplayObject("div"), i.openS_img.onload = function() {
                i.openS_canvas = FWDEVPUtils.getCanvasWithModifiedColor(i.openS_img, i.selectedButtonsColor_str).canvas, i.openS_do.setWidth(i.openS_img.width), i.openS_do.setHeight(i.openS_img.height), i.openS_do.screen.appendChild(i.openS_canvas)
            }) : (i.openS_do = new FWDEVPDisplayObject("img"), i.openS_do.setScreen(i.openS_img)), i.openS_do.setWidth(i.openN_do.w), i.openS_do.setHeight(i.openN_do.h), i.openS_do.setAlpha(0), i.useHEXColorsForSkin_bl ? (i.closeN_do = new FWDEVPDisplayObject("div"), i.closeN_canvas = FWDEVPUtils.getCanvasWithModifiedColor(i.closeN_img, i.normalButtonsColor_str).canvas, i.closeN_do.screen.appendChild(i.closeN_canvas)) : (i.closeN_do = new FWDEVPDisplayObject("img"), i.closeN_do.setScreen(i.closeN_img)), i.closeN_do.setWidth(i.closeN_img.width), i.closeN_do.setHeight(i.closeN_img.height), i.closeN_do.hasTransform3d_bl = !1, i.closeN_do.hasTransform2d_bl = !1, i.closeN_do.setBackfaceVisibility(), i.closeS_img = new Image, i.closeS_img.src = i.closeSPath_str, i.useHEXColorsForSkin_bl ? (i.closeS_do = new FWDEVPDisplayObject("div"), i.closeS_img.onload = function() {
                i.closeS_canvas = FWDEVPUtils.getCanvasWithModifiedColor(i.closeS_img, i.selectedButtonsColor_str).canvas, i.closeS_do.setWidth(i.closeN_img.width), i.closeS_do.setHeight(i.closeN_img.height), i.closeS_do.screen.appendChild(i.closeS_canvas)
            }) : (i.closeS_do = new FWDEVPDisplayObject("img"), i.closeS_do.setScreen(i.closeS_img)), i.closeS_do.setWidth(i.closeN_img.width), i.closeS_do.setHeight(i.closeN_img.height), i.closeS_do.setAlpha(0), i.closeS_do.hasTransform3d_bl = !1, i.closeS_do.hasTransform2d_bl = !1, FWDEVPPreloader2.setPrototype(), i.animation_do = new FWDEVPPreloader2(i.animationPath_img, 29, 22, 31, 80, !0), i.animation_do.setY(i.openerEqulizerOffsetTop), i.animation_do.show(!1), i.animation_do.stop(), i.dumy_do = new FWDEVPDisplayObject("div"), i.dumy_do.setWidth(i.totalWidth), i.dumy_do.setHeight(i.totalHeight), i.dumy_do.getStyle().zIndex = 2, i.dumy_do.hasTransform3d_bl = !1, i.dumy_do.hasTransform2d_bl = !1, i.dumy_do.setBackfaceVisibility(), i.dumy_do.setButtonMode(!0), (FWDEVPUtils.isIE || FWDEVPUtils.isAndroid) && (i.dumy_do.setBkColor("#FF0000"), i.dumy_do.setAlpha(.01)), i.hasPointerEvent_bl ? (i.mainHolder_do.screen.addEventListener("pointerup", i.onMouseUp), i.mainHolder_do.screen.addEventListener("pointerover", i.onMouseOver), i.mainHolder_do.screen.addEventListener("pointerout", i.onMouseOut)) : i.screen.addEventListener && (i.isMobile_bl || (i.mainHolder_do.screen.addEventListener("mouseover", i.onMouseOver), i.mainHolder_do.screen.addEventListener("mouseout", i.onMouseOut), i.mainHolder_do.screen.addEventListener("mouseup", i.onMouseUp)), i.screen.addEventListener("touchend", i.onMouseUp)), i.mainHolder_do.addChild(i.openN_do), i.mainHolder_do.addChild(i.openS_do), i.mainHolder_do.addChild(i.closeN_do), i.mainHolder_do.addChild(i.closeS_do), i.mainHolder_do.addChild(i.animation_do), i.mainHolder_do.addChild(i.dumy_do), i.addChild(i.mainHolder_do)
        }, this.onMouseOver = function(e, t) {
            e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || i.setSelectedState()
        }, this.onMouseOut = function(e) {
            e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || i.setNormalState()
        }, this.onMouseUp = function(e) {
            e.preventDefault && e.preventDefault(), i.playerIsShowed_bl ? (i.playerIsShowed_bl = !1, i.dispatchEvent(n.HIDE)) : (i.playerIsShowed_bl = !0, i.dispatchEvent(n.SHOW))
        }, this.setupPlayPauseButton = function() {
            FWDEVPComplexButton.setPrototype(), i.playPauseButton_do = new FWDEVPComplexButton(i.openerPlayN_img, i.openerPlaySPath_str, i.openerPauseN_img, i.openerPauseS_str, !0, i.useHEXColorsForSkin_bl, i.normalButtonsColor_str, i.selectedButtonsColor_str), i.playPauseButton_do.addListener(FWDEVPComplexButton.MOUSE_UP, i.playButtonMouseUpHandler), i.addChild(i.playPauseButton_do)
        }, this.showPlayButton = function() {
            i.playPauseButton_do && i.playPauseButton_do.setButtonState(1), i.animation_do.stop()
        }, this.showPauseButton = function() {
            i.playPauseButton_do && i.playPauseButton_do.setButtonState(0), i.animation_do.start(0)
        }, this.playButtonMouseUpHandler = function() {
            0 == i.playPauseButton_do.currentState ? i.dispatchEvent(FWDEVPController.PAUSE) : i.dispatchEvent(FWDEVPController.PLAY)
        }, this.setNormalState = function() {
            i.isMobile_bl && !i.hasPointerEvent_bl || (FWDAnimation.killTweensOf(i.openS_do), FWDAnimation.killTweensOf(i.closeS_do), FWDAnimation.to(i.openS_do, .5, {
                alpha: 0,
                ease: Expo.easeOut
            }), FWDAnimation.to(i.closeS_do, .5, {
                alpha: 0,
                ease: Expo.easeOut
            }))
        }, this.setSelectedState = function(e) {
            FWDAnimation.killTweensOf(i.openS_do), FWDAnimation.killTweensOf(i.closeS_do), FWDAnimation.to(i.openS_do, .5, {
                alpha: 1,
                ease: Expo.easeOut
            }), FWDAnimation.to(i.closeS_do, .5, {
                alpha: 1,
                ease: Expo.easeOut
            })
        }, this.showOpenButton = function() {
            i.playerIsShowed_bl = !1, i.closeN_do.setX(150), i.closeS_do.setX(150), i.playPauseButton_do ? "right" == i.alignment_str ? (i.playPauseButton_do.setX(0), i.openN_do.setX(i.playPauseButton_do.w + 1), i.openS_do.setX(i.playPauseButton_do.w + 1), i.dumy_do.setX(i.playPauseButton_do.w + 1), i.dumy_do.setWidth(i.totalWidth), i.animation_do.setX(i.playPauseButton_do.w + 1 + i.openerEqulizerOffsetLeft)) : (i.playPauseButton_do.setX(i.openN_do.w + 1), i.openN_do.setX(0), i.openS_do.setX(0), i.dumy_do.setX(0), i.dumy_do.setWidth(i.totalWidth), i.animation_do.setX(i.openerEqulizerOffsetLeft)) : (i.openN_do.setX(0), i.openS_do.setX(0), i.dumy_do.setX(0), i.dumy_do.setWidth(i.totalWidth), i.animation_do.setX(i.openerEqulizerOffsetLeft)), i.animation_do.setVisible(!0)
        }, this.showCloseButton = function() {
            i.playerIsShowed_bl = !0, i.openN_do.setX(150), i.openS_do.setX(150), i.dumy_do.setWidth(i.closeN_do.w), "right" == i.alignment_str ? i.playPauseButton_do ? (i.closeN_do.setX(i.totalWidth + 1), i.closeS_do.setX(i.totalWidth + 1), i.dumy_do.setX(i.totalWidth + 1)) : (i.closeN_do.setX(i.totalWidth - i.closeN_do.w), i.closeS_do.setX(i.totalWidth - i.closeN_do.w), i.dumy_do.setX(i.totalWidth - i.closeN_do.w)) : (i.closeN_do.setX(0), i.closeS_do.setX(0), i.dumy_do.setX(0)), i.playPauseButton_do && i.playPauseButton_do.setX(150), i.animation_do.setX(150), i.animation_do.setVisible(!1)
        }, this.hide = function() {
            i.mainHolder_do.setX(150)
        }, this.show = function() {
            i.mainHolder_do.setX(0)
        }, i.updateHEXColors = function(e, t) {
            i.normalColor_str = e, i.selectedColor_str = t, i.playPauseButton_do.updateHEXColors(e, t), FWDEVPUtils.changeCanvasHEXColor(i.openN_img, i.openN_canvas, e), FWDEVPUtils.changeCanvasHEXColor(i.closeN_img, i.closeN_canvas, e), FWDEVPUtils.changeCanvasHEXColor(i.openS_img, i.openS_canvas, t), FWDEVPUtils.changeCanvasHEXColor(i.closeS_img, i.closeS_canvas, t)
        }, this.init()
    };
    n.setPrototype = function() {
        n.prototype = new FWDEVPDisplayObject("div")
    }, n.SHOW = "show", n.HIDE = "hise", n.PLAY = "play", n.PAUSE = "pause", n.prototype = null, window.FWDEVPOpener = n
}(window),
function(e) {
    var t = function(e, s) {
        var i = this;
        t.prototype;
        this.adHolder_do = null, this.mainHolder_do = null, this.closeButton_do = null, this.buttons_ar = [], this.maxWidth = e.aopwWidth, this.maxHeight = e.aopwHeight + e.popwColseN_img.height + 1, this.stageWidth = 0, this.stageHeight = 0, this.aopwSource = e.aopwSource, this.aopwTitle = e.aopwTitle, this.aopwTitleColor_str = e.aopwTitleColor_str, this.aopwBorderSize = e.aopwBorderSize, this.isShowed_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
            i.setBackfaceVisibility(), i.mainBar_do = new FWDEVPDisplayObject("div"), i.bar_do = new FWDEVPDisplayObject("div"), i.bar_do.getStyle().background = "url('" + e.popwBarBackgroundPath_str + "')", i.adHolder_do = new FWDEVPDisplayObject("div"), i.adBk_do = new FWDEVPDisplayObject("div"), i.adBk_do.getStyle().background = "url('" + e.popwWindowBackgroundPath_str + "')", FWDEVPSimpleButton.setPrototype(), i.closeButton_do = new FWDEVPSimpleButton(e.popwColseN_img, e.popwColseSPath_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str), i.closeButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, i.closeButtonOnMouseUpHandler), i.title_do = new FWDEVPDisplayObject("div"), i.title_do.getStyle().width = "100%", i.title_do.getStyle().textAlign = "left", i.title_do.getStyle().fontFamily = "Arial", i.title_do.getStyle().fontSize = "14px", i.title_do.getStyle().fontWeight = "100", i.title_do.getStyle().color = i.aopwTitleColor_str, i.title_do.setInnerHTML(i.aopwTitle), i.bar_do.addChild(i.title_do), i.addChild(i.adBk_do), i.mainBar_do.addChild(i.bar_do), i.mainBar_do.addChild(i.closeButton_do), i.mainBar_do.setHeight(i.closeButton_do.h), i.addChild(i.mainBar_do), i.addChild(i.adHolder_do), i.bar_do.setHeight(i.mainBar_do.h)
        }, this.closeButtonOnMouseUpHandler = function() {
            i.isShowed_bl && (i.hide(), s.play())
        }, this.positionAndResize = function() {
            i.stageWidth = Math.min(s.stageWidth, i.maxWidth), i.stageHeight = Math.min(s.stageHeight, i.maxHeight);
            var e = 1,
                t = s.stageWidth / i.maxWidth,
                o = s.stageHeight / i.maxHeight;
            t < o ? e = t : o < t && (e = o), 1 < e && (e = 1), i.stageWidth = e * i.maxWidth, i.stageHeight = e * i.maxHeight, i.setWidth(i.stageWidth), i.setHeight(i.stageHeight), i.setHeight(i.stageHeight), i.setX(Math.round((s.stageWidth - i.stageWidth) / 2)), i.setY(Math.round((s.stageHeight - i.stageHeight) / 2)), i.mainBar_do.setWidth(i.stageWidth), i.closeButton_do.setX(i.stageWidth - i.closeButton_do.w), i.bar_do.setWidth(i.stageWidth - i.closeButton_do.w - 1), i.adBk_do.setWidth(i.stageWidth), i.adBk_do.setHeight(i.stageHeight - i.mainBar_do.h - 1), i.adBk_do.setY(i.mainBar_do.h + 1), i.adHolder_do.setWidth(i.stageWidth - 2 * i.aopwBorderSize), i.adHolder_do.setX(i.aopwBorderSize), i.adHolder_do.setY(i.mainBar_do.h + i.aopwBorderSize + 1), i.adHolder_do.setHeight(i.stageHeight - i.mainBar_do.h - 2 * i.aopwBorderSize - 1)
        }, this.show = function(e) {
            i.isShowed_bl || (i.isShowed_bl = !0, s.main_do.addChild(i), i.adHolder_do.setInnerHTML("<iframe width='100%' height='100%' scrolling='no' frameBorder='0' src=" + i.aopwSource + "></iframe>"), i.positionAndResize(), i.title_do.setX(8), i.title_do.setY(Math.round((i.bar_do.h - i.title_do.getHeight()) / 2)))
        }, this.showCompleteHandler = function() {}, this.hide = function() {
            i.isShowed_bl && (i.isShowed_bl = !1, s.main_do.contains(i) && s.main_do.removeChild(i))
        }, this.hideCompleteHandler = function() {
            s.main_do.removeChild(i), i.dispatchEvent(t.HIDE_COMPLETE)
        }, this.updateHEXColors = function(e, t) {
            i.closeButton_do.updateHEXColors(e, t)
        }, this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDEVPDisplayObject("div")
    }, t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDEVPOPWindow = t
}(window),
function(e) {
    var o = function(e, t) {
        var s = this;
        o.prototype;
        this.xhr = null, this.passColoseN_img = e.passColoseN_img, this.privateVideoPassword_str = e.privateVideoPassword_str, this.bk_do = null, this.mainHolder_do = null, this.passMainHolder_do = null, this.passMainHolderBk_do = null, this.passMainLabel_do = null, this.passLabel_do = null, this.passInput_do = null, this.closeButton_do = null, this.embedWindowBackground_str = e.embedWindowBackground_str, this.secondaryLabelsColor_str = e.secondaryLabelsColor_str, this.inputColor_str = e.inputColor_str, this.mainLabelsColor_str = e.mainLabelsColor_str, this.passButtonNPath_str = e.passButtonNPath_str, this.passButtonSPath_str = e.passButtonSPath_str, this.inputBackgroundColor_str = e.inputBackgroundColor_str, this.borderColor_str = e.borderColor_str, this.maxTextWidth = 0, this.totalWidth = 0, this.stageWidth = 0, this.stageHeight = 0, this.buttonWidth = 28, this.buttonHeight = 19, this.embedWindowCloseButtonMargins = e.embedWindowCloseButtonMargins, this.finalEmbedPath_str = null, this.isShowed_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
            s.setBackfaceVisibility(), s.mainHolder_do = new FWDEVPDisplayObject("div"), s.mainHolder_do.hasTransform3d_bl = !1, s.mainHolder_do.hasTransform2d_bl = !1, s.mainHolder_do.setBackfaceVisibility(), s.bk_do = new FWDEVPDisplayObject("div"), s.bk_do.getStyle().width = "100%", s.bk_do.getStyle().height = "100%", s.bk_do.setAlpha(.9), s.bk_do.getStyle().background = "url('" + s.embedWindowBackground_str + "')", s.passMainHolder_do = new FWDEVPDisplayObject("div"), s.passMainHolderBk_do = new FWDEVPDisplayObject("div"), s.passMainHolderBk_do.getStyle().background = "url('" + s.embedWindowBackground_str + "')", s.passMainHolderBk_do.getStyle().borderStyle = "solid", s.passMainHolderBk_do.getStyle().borderWidth = "1px", s.passMainHolderBk_do.getStyle().borderColor = s.borderColor_str, s.passMainLabel_do = new FWDEVPDisplayObject("div"), s.passMainLabel_do.setBackfaceVisibility(), s.passMainLabel_do.getStyle().fontFamily = "Arial", s.passMainLabel_do.getStyle().fontSize = "12px", s.passMainLabel_do.getStyle().color = s.mainLabelsColor_str, s.passMainLabel_do.getStyle().whiteSpace = "nowrap", s.passMainLabel_do.getStyle().fontSmoothing = "antialiased", s.passMainLabel_do.getStyle().webkitFontSmoothing = "antialiased", s.passMainLabel_do.getStyle().textRendering = "optimizeLegibility", s.passMainLabel_do.getStyle().padding = "0px", s.passMainLabel_do.setInnerHTML("PRIVATE VIDEO"), s.passLabel_do = new FWDEVPDisplayObject("div"), s.passLabel_do.setBackfaceVisibility(), s.passLabel_do.getStyle().fontFamily = "Arial", s.passLabel_do.getStyle().fontSize = "12px", s.passLabel_do.getStyle().color = s.secondaryLabelsColor_str, s.passLabel_do.getStyle().whiteSpace = "nowrap", s.passLabel_do.getStyle().fontSmoothing = "antialiased", s.passLabel_do.getStyle().webkitFontSmoothing = "antialiased", s.passLabel_do.getStyle().textRendering = "optimizeLegibility", s.passLabel_do.getStyle().padding = "0px", s.passLabel_do.setInnerHTML("Please enter password:"), s.passInput_do = new FWDEVPDisplayObject("input"), s.passInput_do.setBackfaceVisibility(), s.passInput_do.getStyle().fontFamily = "Arial", s.passInput_do.getStyle().fontSize = "12px", s.passInput_do.getStyle().backgroundColor = s.inputBackgroundColor_str, s.passInput_do.getStyle().color = s.inputColor_str, s.passInput_do.getStyle().outline = 0, s.passInput_do.getStyle().whiteSpace = "nowrap", s.passInput_do.getStyle().fontSmoothing = "antialiased", s.passInput_do.getStyle().webkitFontSmoothing = "antialiased", s.passInput_do.getStyle().textRendering = "optimizeLegibility", s.passInput_do.getStyle().padding = "6px", s.passInput_do.getStyle().paddingTop = "4px", s.passInput_do.getStyle().paddingBottom = "4px", s.passInput_do.screen.setAttribute("type", "password"), FWDEVPSimpleSizeButton.setPrototype(), s.passButton_do = new FWDEVPSimpleSizeButton(s.passButtonNPath_str, s.passButtonSPath_str, s.buttonWidth, s.buttonHeight, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str), s.passButton_do.addListener(FWDEVPSimpleSizeButton.CLICK, s.passClickHandler), FWDEVPSimpleButton.setPrototype(), s.closeButton_do = new FWDEVPSimpleButton(s.passColoseN_img, e.embedWindowClosePathS_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str), s.closeButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, s.closeButtonOnMouseUpHandler), s.addChild(s.mainHolder_do), s.mainHolder_do.addChild(s.bk_do), s.passMainHolder_do.addChild(s.passMainHolderBk_do), s.passMainHolder_do.addChild(s.passMainLabel_do), s.passMainHolder_do.addChild(s.passLabel_do), s.passMainHolder_do.addChild(s.passInput_do), s.passMainHolder_do.addChild(s.passButton_do), s.mainHolder_do.addChild(s.passMainHolder_do), s.mainHolder_do.addChild(s.closeButton_do)
        }, this.closeButtonOnMouseUpHandler = function() {
            s.isShowed_bl && s.hide()
        }, this.positionAndResize = function() {
            s.stageWidth = t.stageWidth, s.stageHeight = t.stageHeight, s.maxTextWidth = Math.min(s.stageWidth - 150, 300), s.totalWidth = s.maxTextWidth + s.buttonWidth, s.positionFinal(), s.closeButton_do.setX(s.stageWidth - s.closeButton_do.w - s.embedWindowCloseButtonMargins), s.closeButton_do.setY(s.embedWindowCloseButtonMargins), s.setWidth(s.stageWidth), s.setHeight(s.stageHeight), s.mainHolder_do.setWidth(s.stageWidth), s.mainHolder_do.setHeight(s.stageHeight)
        }, this.positionFinal = function() {
            var e, t, o = s.passLabel_do.getHeight();
            t = s.passMainLabel_do.getHeight(), s.passMainLabel_do.setX(16), s.passLabel_do.setX(16), s.passLabel_do.setY(t + 14), s.passInput_do.setX(10), s.passInput_do.setWidth(parseInt(s.totalWidth - 40 - s.buttonWidth)), s.passInput_do.setY(s.passLabel_do.y + o + 5), s.passButton_do.setX(10 + s.passInput_do.w + 20), s.passButton_do.setY(s.passLabel_do.y + o + 5), s.passMainHolderBk_do.setY(s.passLabel_do.y - 9), s.passMainHolderBk_do.setWidth(s.totalWidth - 2), s.passMainHolderBk_do.setHeight(s.passButton_do.y + s.passButton_do.h - 9), s.passMainHolder_do.setWidth(s.totalWidth), s.passMainHolder_do.setHeight(s.passButton_do.y + s.passButton_do.h + 14), s.passMainHolder_do.setX(Math.round((s.stageWidth - s.totalWidth) / 2)), e = s.passMainHolderBk_do.getHeight(), s.passMainHolder_do.setY(Math.round((s.stageHeight - e) / 2) - 10)
        }, this.passClickHandler = function() {
            s.privateVideoPassword_str == FWDEVPUtils.MD5(s.passInput_do.screen.value) ? s.dispatchEvent(o.CORRECT) : FWDAnimation.isTweening(s.passInput_do.screen) || FWDAnimation.to(s.passInput_do.screen, .1, {
                css: {
                    backgroundColor: "#FF0000"
                },
                yoyo: !0,
                repeat: 3
            })
        }, this.updateHEXColors = function(e, t) {
            s.passButton_do.updateHEXColors(e, t), s.closeButton_do.updateHEXColors(e, t)
        }, this.showInfo = function(e, t) {
            s.infoText_do.setInnerHTML(e), s.passMainHolder_do.addChild(s.infoText_do), s.infoText_do.setWidth(s.buttonWidth), s.infoText_do.setHeight(s.buttonHeight - 4), s.infoText_do.setX(s.passButton_do.x), s.infoText_do.setY(s.passButton_do.y - 23), s.infoText_do.setAlpha(0), s.infoText_do.getStyle().color = t ? "#FF0000" : s.mainLabelsColor_str, FWDAnimation.killTweensOf(s.infoText_do), FWDAnimation.to(s.infoText_do, .16, {
                alpha: 1,
                yoyo: !0,
                repeat: 7
            })
        }, this.show = function(e) {
            s.isShowed_bl || (s.isShowed_bl = !0, t.main_do.addChild(s), s.passButton_do.setSelectedState(), s.passInput_do.setInnerHTML(""), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && t.main_do.setSelectable(!0), s.positionAndResize(), clearTimeout(s.hideCompleteId_to), clearTimeout(s.showCompleteId_to), s.mainHolder_do.setY(-s.stageHeight), s.showCompleteId_to = setTimeout(s.showCompleteHandler, 900), setTimeout(function() {
                FWDAnimation.to(s.mainHolder_do, .8, {
                    y: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                })
            }, 100))
        }, this.showCompleteHandler = function() {}, this.hide = function() {
            s.isShowed_bl && (s.isShowed_bl = !1, t.customContextMenu_do && t.customContextMenu_do.enable(), s.positionAndResize(), clearTimeout(s.hideCompleteId_to), clearTimeout(s.showCompleteId_to), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && t.main_do.setSelectable(!1), s.hideCompleteId_to = setTimeout(s.hideCompleteHandler, 800), FWDAnimation.killTweensOf(s.mainHolder_do), FWDAnimation.to(s.mainHolder_do, .8, {
                y: -s.stageHeight,
                ease: Expo.easeInOut
            }))
        }, this.hideCompleteHandler = function() {
            t.main_do.removeChild(s), s.dispatchEvent(o.HIDE_COMPLETE)
        }, this.init()
    };
    o.setPrototype = function() {
        o.prototype = new FWDEVPDisplayObject("div")
    }, o.ERROR = "error", o.CORRECT = "correct", o.HIDE_COMPLETE = "hideComplete", o.prototype = null, e.FWDEVPPassword = o
}(window),
function() {
    var p = function(i, e, t, o, s, n, l, r, a, d, u, h, _, c) {
        var f = this;
        p.prototype;
        this.closeButton_do, this.image_do, this.imageSource = e, this.link = s, this.target = n, this.start = t, this.end = o, this.google_ad_client = r, this.google_ad_slot = a, this.originalW = this.google_ad_width = d, this.originalH = this.google_ad_height = u, this.finalW = 0, this.finalH = 0, this.isImage_bl = !Boolean(this.google_ad_client), this.id = l, this.showPopupAdsCloseButton_bl = c, this.popupAddCloseNPath_str = h, this.popupAddCloseSPath_str = _, this.isClosed_bl = !1, this.isLoaded_bl = !1, this.isShowed_bl = !1, this.init = function() {
            f.setBkColor("rgba(0, 0, 0, 0.6)"), f.setX(-5e3), f.showPopupAdsCloseButton_bl && (FWDEVPSimpleSizeButton.setPrototype(), f.closeButton_do = new FWDEVPSimpleSizeButton(f.popupAddCloseNPath_str, f.popupAddCloseSPath_str, 21, 21), f.closeButton_do.addListener(FWDEVPSimpleSizeButton.CLICK, f.closeClickButtonCloseHandler)), f.isImage_bl ? (this.image = new Image, this.image.src = this.imageSource, this.image.onload = this.onLoadHandler) : (f.isLoaded_bl = !0, f.setWidth(f.originalW), f.setHeight(f.originalH)), f.closeButton_do && (f.addChild(f.closeButton_do), f.closeButton_do.setX(-300)), f.link && f.setButtonMode(!0)
        }, this.closeClickButtonCloseHandler = function() {
            f.hide(), f.isClosed_bl = !0
        }, this.clickHandler = function() {
            f.link && (i.parent.pause(), window.open(f.link, f.target))
        }, this.onLoadHandler = function() {
            f.originalW = f.image.width, f.originalH = f.image.height, f.image_do = new FWDEVPDisplayObject("img"), f.image_do.setScreen(f.image), f.image_do.setWidth(f.originalW), f.image_do.setHeight(f.originalH), f.addChild(f.image_do), f.isLoaded_bl = !0, f.closeButton_do && (f.addChild(f.closeButton_do), f.closeButton_do.setX(-300)), f.screen.addEventListener ? f.image_do.screen.addEventListener("click", f.clickHandler) : f.image_do.screen.attachEvent("onclick", f.clickHandler)
        }, this.hide = function(e) {
            if (this.isShowed_bl) {
                this.isShowed_bl = !1;
                var t = Math.min(1, i.parent.tempVidStageWidth / f.originalW);
                parseInt(t * f.originalH);
                finalY = parseInt(i.parent.tempVidStageHeight), i.setY(finalY), f.setX(-5e3), FWDAnimation.killTweensOf(i), e ? (i.removeChild(f), i.setWidth(0), i.setHeight(0)) : (f.setWidth(0), f.setHeight(0), i.setVisible(!1), f.setVisible(!1))
            }
        }, this.show = function() {
            this.isShowed_bl || this.isClosed_bl || !f.isLoaded_bl || (this.isShowed_bl = !0, f.setX(0), setTimeout(function() {
                if (FWDAnimation.killTweensOf(i), i.setVisible(!0), f.setVisible(!0), !f.isImage_bl && !f.isGooglAdCreated_bl) {
                    f.isGooglAdCreated_bl = !0, window.google_ad_client = f.google_ad_client, window.google_ad_slot = f.google_ad_slot, window.google_ad_width = f.originalW, window.google_ad_height = f.originalH, f.container = new FWDEVPTransformDisplayObject("div"), f.container.setWidth(f.originalW), f.container.setHeight(f.originalH), f.addChild(f.container);
                    var t = document.write;
                    document.write = function(e) {
                        f.container.screen.innerHTML = e, document.write = t
                    };
                    var e = document.createElement("script");
                    e.type = "text/javascript", -1 != location.href.indexOf("https") ? e.src = "https://pagead2.googlesyndication.com/pagead/show_ads.js" : e.src = "http://pagead2.googlesyndication.com/pagead/show_ads.js", document.body.appendChild(e), f.closeButton_do && (f.addChild(f.closeButton_do), f.closeButton_do.setX(-300))
                }
                var o = Math.min(1, i.parent.tempVidStageWidth / f.originalW),
                    s = parseInt(o * f.originalH) - 2;
                i.parent.controller_do.isShowed_bl ? finalY = parseInt(i.parent.tempVidStageHeight - i.parent.controller_do.h - f.originalH * o + 2 + s) : finalY = parseInt(i.parent.tempVidStageHeight - f.originalH * o + 2 + s), i.setY(finalY), f.resizeAndPosition(!0)
            }, 100))
        }, this.resizeAndPosition = function(e) {
            if (f.isLoaded_bl && !f.isClosed_bl && f.isShowed_bl) {
                var t, o;
                FWDEVPUtils.isIEAndLessThen9;
                o = Math.min(1, i.parent.tempVidStageWidth / f.originalW), f.finalW = parseInt(o * f.originalW), f.finalH = parseInt(o * f.originalH), f.finalW == f.prevFinalW && f.finalH == f.prevFinalH || (f.setWidth(f.finalW), f.setHeight(f.finalH), f.isImage_bl ? (f.image_do.setWidth(f.finalW), f.image_do.setHeight(f.finalH)) : f.container && (f.container.setScale2(o), f.container.setX((f.finalW - f.originalW) / 2), f.container.setY((f.finalH - f.originalH) / 2)), t = i.parent.controller_do ? i.parent.controller_do.isShowed_bl ? parseInt(i.parent.tempVidStageHeight - i.parent.controller_do.h - f.originalH * o - 10) : parseInt(i.parent.tempVidStageHeight - f.originalH * o - 10) : parseInt(i.parent.tempVidStageHeight - f.originalH * o), i.setX(parseInt((i.parent.tempVidStageWidth - f.finalW) / 2)), FWDAnimation.killTweensOf(i), e ? FWDAnimation.to(i, .8, {
                    y: t,
                    ease: Expo.easeInOut
                }) : i.setY(t), f.closeButton_do && (f.closeButton_do.setY(2), f.closeButton_do.setX(parseInt(f.finalW - 21 - 2))), f.prevFinalW = f.finalW, f.prevFinallH = f.finalH, i.setWidth(f.finalW), i.setHeight(f.finalH))
            }
        }, f.init()
    };
    p.setPrototype = function() {
        p.prototype = new FWDEVPDisplayObject("div", "absolute", "visible")
    }, p.MOUSE_OVER = "onMouseOver", p.MOUSE_OUT = "onMouseOut", p.CLICK = "onClick", p.prototype = null, window.FWDEVPPopupAddButton = p
}(window),
function(e) {
    var t = function(e, s) {
        var i = this;
        t.prototype;
        this.parent = e, this.main_do = null, this.reader = null, this.subtitiles_ar = null, this.totalAds = 0, i.popupAds_ar, i.popupAdsButtons_ar, this.hasText_bl = !1, this.isLoaded_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.showSubtitleByDefault_bl = s.showSubtitleByDefault_bl, this.setSizeOnce_bl = !1, i.init = function() {
            i.setOverflow("visible"), i.getStyle().cursor = "default", i.setVisible(!1)
        }, this.resetPopups = function(e) {
            var t;
            i.hideAllPopupButtons(!0), i.popupAds_ar = e, i.totalAds = i.popupAds_ar.length, i.popupAdsButtons_ar = [];
            for (var o = 0; o < i.totalAds; o++) FWDEVPPopupAddButton.setPrototype(), t = new FWDEVPPopupAddButton(i, i.popupAds_ar[o].imagePath, i.popupAds_ar[o].timeStart, i.popupAds_ar[o].timeEnd, i.popupAds_ar[o].link, i.popupAds_ar[o].trget, o, i.popupAds_ar[o].google_ad_client, i.popupAds_ar[o].google_ad_slot, i.popupAds_ar[o].google_ad_width, i.popupAds_ar[o].google_ad_height, s.popupAddCloseNPath_str, s.popupAddCloseSPath_str, s.showPopupAdsCloseButton_bl), i.popupAdsButtons_ar[o] = t, i.addChild(t)
        }, this.update = function(e) {
            if (0 != i.totalAds)
                for (var t, o = 0; o < i.totalAds; o++) e >= (t = i.popupAdsButtons_ar[o]).start && e <= t.end ? t.show() : t.hide()
        }, this.position = function(e) {
            if (0 != i.totalAds)
                for (var t = 0; t < i.totalAds; t++) i.popupAdsButtons_ar[t].resizeAndPosition(e)
        }, this.hideAllPopupButtons = function(e) {
            if (0 != i.totalAds) {
                for (var t = 0; t < i.totalAds; t++) i.popupAdsButtons_ar[t].hide(e);
                e && (i.popupAdsButtons_ar = null, i.totalAds = 0)
            }
        }, i.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDEVPDisplayObject("div")
    }, t.LOAD_ERROR = "error", t.LOAD_COMPLETE = "complete", t.prototype = null, e.FWDEVPPopupAds = t
}(window),
function(e) {
    var n = function(s, e, t, o) {
        var i = this;
        n.prototype;
        this.img_img = new Image, this.img_do = null, this.imgW = 0, this.imgH = 0, this.finalW = 0, this.finalH = 0, this.finalX = 0, this.finalY = 0, this.curPath_str, this.backgroundColor_str = e, this.fillEntireScreenWithPoster_bl = o, this.isTransparent_bl = !1, this.showPoster_bl = t, this.showOrLoadOnMobile_bl = !1, this.isShowed_bl = !0, this.allowToShow_bl = !0, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
            i.img_img = new Image, i.img_do = new FWDEVPDisplayObject("img"), i.hide(), i.setBkColor(i.backgroundColor_str)
        }, this.positionAndResize = function() {
            if (s.stageWidth && (i.setWidth(s.stageWidth), i.setHeight(s.stageHeight), i.imgW)) {
                var e, t = s.stageWidth / i.imgW,
                    o = s.stageHeight / i.imgH;
                e = i.fillEntireScreenWithPoster_bl ? o <= t ? t : o : t <= o ? t : o, i.finalW = Math.round(e * i.imgW), i.finalH = Math.round(e * i.imgH), i.finalX = parseInt((s.stageWidth - i.finalW) / 2), i.finalY = parseInt((s.stageHeight - i.finalH) / 2), i.img_do.setX(i.finalX), i.img_do.setY(i.finalY), i.img_do.setWidth(i.finalW), i.img_do.setHeight(i.finalH)
            }
        }, this.setPoster = function(e) {
            return e && "" == FWDEVPUtils.trim(e) || "none" == e ? (i.showOrLoadOnMobile_bl = !0, i.isTransparent_bl = !0, void i.show()) : "youtubemobile" == e ? (i.isTransparent_bl = !1, i.showOrLoadOnMobile_bl = !1, i.img_img.src = null, void(i.imgW = 0)) : e == i.curPath_str ? (i.isTransparent_bl = !1, i.showOrLoadOnMobile_bl = !0, void i.show()) : (i.isTransparent_bl = !1, i.showOrLoadOnMobile_bl = !0, i.curPath_str = e, i.allowToShow_bl && (i.isShowed_bl = !1), void(e && (i.img_do && (i.img_do.src = ""), i.img_img.onload = i.posterLoadHandler, i.img_img.src = i.curPath_str)))
        }, this.posterLoadHandler = function(e) {
            i.imgW = i.img_img.width, i.imgH = i.img_img.height, i.img_do.setScreen(i.img_img), i.addChild(i.img_do), i.show(), i.positionAndResize()
        }, this.show = function(e) {
            i.allowToShow_bl && !i.isShowed_bl && i.showOrLoadOnMobile_bl && (i.isShowed_bl = !0, i.isTransparent_bl ? 0 != i.alpha && i.setAlpha(0) : 1 != i.alpha && i.setAlpha(1), i.setVisible(!0), i.isMobile_bl || i.isTransparent_bl || (FWDAnimation.killTweensOf(i), i.setAlpha(0), FWDAnimation.to(i, .6, {
                alpha: 1,
                delay: .4
            })), i.positionAndResize())
        }, this.hide = function() {
            i.isShowed_bl && (i.isShowed_bl = !1, i.setVisible(!1))
        }, this.init()
    };
    n.setPrototype = function() {
        n.prototype = new FWDEVPDisplayObject("div")
    }, n.prototype = null, e.FWDEVPPoster = n
}(window),
function(e) {
    var s = function(e) {
        var t = this;
        s.prototype;

        function o(e) {
            var t, o, s, i, n, l, r = (e = e || {}).parent || document.body,
                a = this.element = document.createElement("div"),
                d = e.radius || 42,
                u = e.dotSize || 15,
                h = e.animationOffset || 1.8,
                _ = e.dotCount || 10,
                c = 360 / _,
                f = e.colors || ["#61AC27", "black"],
                p = new FWDTimelineLite({
                    paused: !0
                }),
                b = [],
                m = !1,
                g = document.createElement("div");
            for (f.push(f.shift()), FWDTweenLite.set(g, {
                    width: 2 * d + 40,
                    height: 2 * d + 40,
                    borderRadius: "60px",
                    backgroundColor: e.boxColor || "white",
                    border: e.boxBorder || "1px solid #AAA",
                    position: "absolute",
                    xPercent: -50,
                    yPercent: -50,
                    opacity: null != e.boxOpacity ? e.boxOpacity : .3
                }), g.className = e.boxClass || "preloader-box", a.appendChild(g), r.appendChild(a), FWDTweenLite.set(a, {
                    position: "absolute",
                    top: "45%",
                    left: "50%",
                    perspective: 600,
                    overflow: "visible",
                    zIndex: 2e3
                }), p.from(g, .1, {
                    opacity: 0,
                    scale: .1,
                    ease: Power1.easeOut
                }, h); - 1 < --_;) {
                for (n = _ * c, l = void 0, l = document.createElement("div"), a.appendChild(l), FWDTweenLite.set(l, {
                        width: u,
                        height: u,
                        transformOrigin: -d + "px 0px",
                        x: d,
                        backgroundColor: f[f.length - 1],
                        borderRadius: "50%",
                        force3D: !0,
                        position: "absolute",
                        rotation: n
                    }), l.className = e.dotClass || "preloader-dot", o = l, b.unshift(o), p.from(o, .1, {
                        scale: .01,
                        opacity: 0,
                        ease: Power1.easeOut
                    }, h), t = new TimelineMax({
                        repeat: -1,
                        repeatDelay: .25
                    }), i = 0; i < f.length; i++) t.to(o, 2.5, {
                    rotation: "-=360",
                    ease: Power2.easeInOut
                }, 2.9 * i).to(o, 1.2, {
                    skewX: "+=360",
                    backgroundColor: f[i],
                    ease: Power2.easeInOut
                }, 1.6 + 2.9 * i);
                p.add(t, .07 * _)
            }
            FWDTweenLite.render && FWDTweenLite.render(), this.active = function(e) {
                return arguments.length ? (m != e && (m = e, s && s.kill(), m ? (a.style.visibility = "visible", FWDTweenLite.set([a, g], {
                    rotation: 0
                }), p.play(h)) : (s = new FWDTimelineLite, p.time() < h + .3 && (p.pause(), s.to(a, 1, {
                    rotation: -360,
                    ease: Power1.easeInOut
                }).to(g, 1, {
                    rotation: 360,
                    ease: Power1.easeInOut
                }, 0)), s.staggerTo(b, .3, {
                    scale: .01,
                    opacity: 0,
                    ease: Power1.easeIn,
                    overwrite: !1
                }, .05, 0).to(g, .4, {
                    opacity: 0,
                    scale: .2,
                    ease: Power2.easeIn,
                    overwrite: !1
                }, 0).call(function() {
                    p.pause(), s = null
                }).set(a, {
                    visibility: "hidden"
                }))), this) : m
            }
        }
        t.radius = 16, this.colors = e, this.isShowed_bl = !1, this.init = function() {
            t.preloader = new o({
                parent: t.screen,
                radius: t.radius,
                dotSize: 8,
                dotCount: 10,
                colors: t.colors,
                boxOpacity: 0,
                boxColor: "#FFFFFF",
                boxBorder: "1px solid #999999",
                animationOffset: 4
            }), t.setWidth(2 * t.radius + 50), t.setHeight(2 * t.radius + 50), t.getStyle().pointerEvents = "none"
        }, this.start = function() {
            null != t && t.preloader.active(!0)
        }, this.stop = function() {
            t.preloader.active(!1)
        }, this.show = function() {
            t.isShowed_bl || (clearTimeout(t.stopId_to), t.start(), t.isShowed_bl = !0)
        }, this.hide = function(e) {
            t.isShowed_bl && (clearTimeout(t.stopId_to), t.stopId_to = setTimeout(function() {
                t.stop()
            }, 400), t.isShowed_bl = !1)
        }, this.onHideComplete = function() {
            t.setVisible(!1), t.stop(), t.dispatchEvent(s.HIDE_COMPLETE)
        }, this.init()
    };
    s.setPrototype = function() {
        s.prototype = new FWDEVPDisplayObject("div")
    }, s.HIDE_COMPLETE = "hideComplete", s.prototype = null, e.FWDEVPPreloader = s
}(window),
function(e) {
    var l = function(e, t, o, s, i) {
        var n = this;
        l.prototype;
        this.imageSource_img = e, this.image_sdo = null, this.segmentWidth = t, this.segmentHeight = o, this.totalSegments = s, this.animDelay = i || 300, this.count = 0, this.delayTimerId_int, this.isShowed_bl = !1, this.init = function() {
            n.setWidth(n.segmentWidth), n.setHeight(n.segmentHeight), n.image_sdo = new FWDEVPDisplayObject("img"), n.image_sdo.setScreen(n.imageSource_img), n.addChild(n.image_sdo), n.hide(!1)
        }, this.start = function() {
            null != n && (clearInterval(n.delayTimerId_int), n.delayTimerId_int = setInterval(n.updatePreloader, n.animDelay))
        }, this.stop = function() {
            clearInterval(n.delayTimerId_int)
        }, this.updatePreloader = function() {
            if (null != n) {
                n.count++, n.count > n.totalSegments - 1 && (n.count = 0);
                var e = n.count * n.segmentWidth;
                n.image_sdo.setX(-e)
            }
        }, this.show = function() {
            n.isShowed_bl || (n.setVisible(!0), n.start(), FWDAnimation.killTweensOf(n), FWDAnimation.to(n, 1, {
                alpha: 1,
                delay: .2
            }), n.isShowed_bl = !0)
        }, this.hide = function(e) {
            n.isShowed_bl && (FWDAnimation.killTweensOf(this), e ? FWDAnimation.to(this, 1, {
                alpha: 0,
                onComplete: n.onHideComplete
            }) : (n.setVisible(!1), n.setAlpha(0)), n.isShowed_bl = !1)
        }, this.onHideComplete = function() {
            n.setVisible(!1), n.stop(), n.dispatchEvent(l.HIDE_COMPLETE)
        }, this.init()
    };
    l.setPrototype = function() {
        l.prototype = new FWDEVPDisplayObject("div")
    }, l.HIDE_COMPLETE = "hideComplete", l.prototype = null, e.FWDEVPPreloader2 = l
}(window),
function(o) {
    var s = function(e, t) {
        var f = this;
        s.prototype;
        this.embedColoseN_img = e.embedColoseN_img, this.bk_do = null, this.mainHolder_do = null, this.closeButton_do = null, this.buttons_ar = [], this.embedWindowBackground_str = e.embedWindowBackground_str, this.embedWindowCloseButtonMargins = e.embedWindowCloseButtonMargins, this.totalWidth = 0, this.stageWidth = 0, this.stageHeight = 0, this.minMarginXSpace = 20, this.hSpace = 20, this.minHSpace = 10, this.vSpace = 15, this.isShowed_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, f.useFontAwesomeIcons_bl = e.useFontAwesomeIcons_bl, this.init = function() {
            f.closeButton_do || (f.setBackfaceVisibility(), f.mainHolder_do = new FWDEVPDisplayObject("div"), f.mainHolder_do.hasTransform3d_bl = !1, f.mainHolder_do.hasTransform2d_bl = !1, f.mainHolder_do.setBackfaceVisibility(), f.bk_do = new FWDEVPDisplayObject("div"), f.bk_do.getStyle().width = "100%", f.bk_do.getStyle().height = "100%", f.bk_do.setAlpha(.9), f.bk_do.getStyle().background = "url('" + f.embedWindowBackground_str + "')", f.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), f.closeButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fas fa-times'></i>", void 0, "EVPCloseButtonNormalState", "EVPCloseButtonSelectedState")) : (FWDEVPSimpleButton.setPrototype(), f.closeButton_do = new FWDEVPSimpleButton(e.shareClooseN_img, e.embedWindowClosePathS_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), f.closeButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.closeButtonOnMouseUpHandler), f.addChild(f.mainHolder_do), f.mainHolder_do.addChild(f.bk_do), f.mainHolder_do.addChild(f.closeButton_do), this.setupButtons())
        }, this.closeButtonOnMouseUpHandler = function() {
            f.isShowed_bl && f.hide()
        }, this.positionAndResize = function() {
            f.stageWidth = t.stageWidth, f.stageHeight = t.stageHeight, f.closeButton_do.setX(f.stageWidth - f.closeButton_do.w - f.embedWindowCloseButtonMargins), f.closeButton_do.setY(f.embedWindowCloseButtonMargins), f.setWidth(f.stageWidth), f.setHeight(f.stageHeight), f.mainHolder_do.setWidth(f.stageWidth), f.mainHolder_do.setHeight(f.stageHeight), f.positionButtons()
        }, this.setupButtons = function() {
            f.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), f.facebookButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fab fa-facebook-f'></i>", void 0, "EVPSocialMediaButtonsNormalState", "EVPSocialMediaButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), f.facebookButton_do = new FWDEVPSimpleButton(e.facebookN_img, e.facebookSPath_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), f.facebookButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.facebookOnMouseUpHandler), this.buttons_ar.push(f.facebookButton_do), f.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), f.googleButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fab fa-google-plus'></i>", void 0, "EVPSocialMediaButtonsNormalState", "EVPSocialMediaButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), f.googleButton_do = new FWDEVPSimpleButton(e.googleN_img, e.googleSPath_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), f.googleButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.googleOnMouseUpHandler), this.buttons_ar.push(f.googleButton_do), f.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), f.twitterButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fab fa-twitter'></i>", void 0, "EVPSocialMediaButtonsNormalState", "EVPSocialMediaButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), f.twitterButton_do = new FWDEVPSimpleButton(e.twitterN_img, e.twitterSPath_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), f.twitterButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.twitterOnMouseUpHandler), this.buttons_ar.push(f.twitterButton_do), f.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), f.likedinButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fab fa-linkedin-in'></i>", void 0, "EVPSocialMediaButtonsNormalState", "EVPSocialMediaButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), f.likedinButton_do = new FWDEVPSimpleButton(e.likedInkN_img, e.likedInSPath_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), f.likedinButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.likedinOnMouseUpHandler), this.buttons_ar.push(f.likedinButton_do), f.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), f.bufferButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='far fa-comment'></i>", void 0, "EVPSocialMediaButtonsNormalState", "EVPSocialMediaButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), f.bufferButton_do = new FWDEVPSimpleButton(e.bufferkN_img, e.bufferSPath_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), f.bufferButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.bufferOnMouseUpHandler), this.buttons_ar.push(f.bufferButton_do), f.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), f.diggButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fab fa-digg'></i>", void 0, "EVPSocialMediaButtonsNormalState", "EVPSocialMediaButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), f.diggButton_do = new FWDEVPSimpleButton(e.diggN_img, e.diggSPath_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), f.diggButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.diggOnMouseUpHandler), this.buttons_ar.push(f.diggButton_do), f.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), f.redditButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fab fa-reddit-alien'></i>", void 0, "EVPSocialMediaButtonsNormalState", "EVPSocialMediaButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), f.redditButton_do = new FWDEVPSimpleButton(e.redditN_img, e.redditSPath_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), f.redditButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.redditOnMouseUpHandler), this.buttons_ar.push(f.redditButton_do), f.useFontAwesomeIcons_bl ? (FWDEVPSimpleButton.setPrototype(), f.thumbrlButton_do = new FWDEVPSimpleButton(void 0, void 0, void 0, !0, void 0, void 0, void 0, "<i class='fab fa-tumblr'></i>", void 0, "EVPSocialMediaButtonsNormalState", "EVPSocialMediaButtonsSelectedState")) : (FWDEVPSimpleButton.setPrototype(), f.thumbrlButton_do = new FWDEVPSimpleButton(e.thumbrlN_img, e.thumbrlSPath_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str)), f.thumbrlButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.thumbrlOnMouseUpHandler), this.buttons_ar.push(f.thumbrlButton_do), f.mainHolder_do.addChild(f.facebookButton_do), f.mainHolder_do.addChild(f.googleButton_do), f.mainHolder_do.addChild(f.twitterButton_do), f.mainHolder_do.addChild(f.likedinButton_do), f.mainHolder_do.addChild(f.bufferButton_do), f.mainHolder_do.addChild(f.diggButton_do), f.mainHolder_do.addChild(f.redditButton_do), f.mainHolder_do.addChild(f.thumbrlButton_do)
        }, this.facebookOnMouseUpHandler = function() {
            var e = "http://www.facebook.com/share.php?u=" + encodeURIComponent(location.href);
            o.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
        }, this.googleOnMouseUpHandler = function() {
            var e = "https://plus.google.com/share?url=" + encodeURIComponent(location.href);
            o.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
        }, this.twitterOnMouseUpHandler = function() {
            var e = "http://twitter.com/home?status=" + encodeURIComponent(location.href);
            o.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
        }, this.likedinOnMouseUpHandler = function() {
            var e = "https://www.linkedin.com/cws/share?url=" + location.href;
            o.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
        }, this.bufferOnMouseUpHandler = function() {
            var e = "https://buffer.com/add?url=" + location.href;
            o.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
        }, this.diggOnMouseUpHandler = function() {
            var e = "http://digg.com/submit?url=" + location.href;
            o.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
        }, this.redditOnMouseUpHandler = function() {
            var e = "https://www.reddit.com/?submit=" + location.href;
            o.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
        }, this.thumbrlOnMouseUpHandler = function() {
            var e = "http://www.tumblr.com/share/link?url=" + location.href;
            o.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
        }, this.positionButtons = function() {
            var e, t, o, s = [],
                i = [],
                n = [],
                l = 0,
                r = 0,
                a = 0;
            s[a] = [0], i[a] = f.buttons_ar[0].totalWidth, n[a] = f.buttons_ar[0].totalWidth, f.totalButtons = f.buttons_ar.length;
            for (var d = 1; d < f.totalButtons; d++) e = f.buttons_ar[d], i[a] + e.totalWidth + f.minHSpace > f.stageWidth - f.minMarginXSpace ? (s[++a] = [], s[a].push(d), i[a] = e.totalWidth, n[a] = e.totalWidth) : (s[a].push(d), i[a] += e.totalWidth + f.minHSpace, n[a] += e.totalWidth);
            l = parseInt((f.stageHeight - ((a + 1) * (e.totalHeight + f.vSpace) - f.vSpace)) / 2);
            for (d = 0; d < a + 1; d++) {
                var u, h = 0;
                if (1 < s[d].length) {
                    u = Math.min((f.stageWidth - f.minMarginXSpace - n[d]) / (s[d].length - 1), f.hSpace);
                    var _ = n[d] + u * (s[d].length - 1);
                    h = parseInt((f.stageWidth - _) / 2)
                } else h = parseInt((f.stageWidth - i[d]) / 2);
                0 < d && (l += e.h + f.vSpace);
                for (var c = 0; c < s[d].length; c++) e = f.buttons_ar[s[d][c]], o = 0 == c ? h : (t = f.buttons_ar[s[d][c] - 1]).finalX + t.totalWidth + u, e.finalX = o, e.finalY = l, r < e.finalY && (r = e.finalY), f.buttonsBarTotalHeight = r + e.totalHeight + f.startY, e.setX(e.finalX), e.setY(e.finalY)
            }
        }, this.show = function(e) {
            f.isShowed_bl || (f.isShowed_bl = !0, t.main_do.addChild(f), f.init(), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && t.main_do.setSelectable(!0), f.useFontAwesomeIcons_bl ? f.checkButtonsId_to = setInterval(function() {
                0 != f.closeButton_do.w && (f.positionAndResize(), clearInterval(f.checkButtonsId_to), clearTimeout(f.hideCompleteId_to), clearTimeout(f.showCompleteId_to), f.mainHolder_do.setY(-f.stageHeight), f.showCompleteId_to = setTimeout(f.showCompleteHandler, 900), FWDAnimation.to(f.mainHolder_do, .8, {
                    y: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                }))
            }, 50) : (f.positionAndResize(), clearTimeout(f.hideCompleteId_to), clearTimeout(f.showCompleteId_to), f.mainHolder_do.setY(-f.stageHeight), f.showCompleteId_to = setTimeout(f.showCompleteHandler, 900), setTimeout(function() {
                FWDAnimation.to(f.mainHolder_do, .8, {
                    y: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                })
            }, 100)))
        }, this.showCompleteHandler = function() {}, this.hide = function() {
            f.isShowed_bl && (f.isShowed_bl = !1, t.customContextMenu_do && t.customContextMenu_do.enable(), f.positionAndResize(), clearTimeout(f.hideCompleteId_to), clearTimeout(f.showCompleteId_to), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && t.main_do.setSelectable(!1), f.hideCompleteId_to = setTimeout(f.hideCompleteHandler, 800), FWDAnimation.killTweensOf(f.mainHolder_do), FWDAnimation.to(f.mainHolder_do, .8, {
                y: -f.stageHeight,
                ease: Expo.easeInOut
            }))
        }, this.hideCompleteHandler = function() {
            t.main_do.removeChild(f), f.dispatchEvent(s.HIDE_COMPLETE)
        }, this.updateHEXColors = function(e, t) {
            f.closeButton_do.updateHEXColors(e, t), f.facebookButton_do.updateHEXColors(e, t), f.googleButton_do.updateHEXColors(e, t), f.twitterButton_do.updateHEXColors(e, t), f.likedinButton_do.updateHEXColors(e, t), f.bufferButton_do.updateHEXColors(e, t), f.diggButton_do.updateHEXColors(e, t), f.redditButton_do.updateHEXColors(e, t), f.thumbrlButton_do.updateHEXColors(e, t)
        }
    };
    s.setPrototype = function() {
        s.prototype = new FWDEVPDisplayObject("div")
    }, s.HIDE_COMPLETE = "hideComplete", s.prototype = null, o.FWDEVPShareWindow = s
}(window),
function(e) {
    var _ = function(e, t, o, s, i, n, l, r, a, d, u) {
        var h = this;
        _.prototype;
        this.iconCSSString = r, this.showHDIcon = a, this.nImg = e, this.sPath_str = t, this.dPath_str = o, h.testButton = Boolean(-1 != String(h.iconCSSString).indexOf("download")), this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.nImg && (this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height), this.normalCalssName = d, this.selectedCalssName = u, this.useHEXColorsForSkin_bl = i, this.normalButtonsColor_str = n, this.selectedButtonsColor_str = l, this.isShowed_bl = !0, this.isSetToDisabledState_bl = !1, this.isDisabled_bl = !1, this.isDisabledForGood_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !h.isMobile_bl || h.hasPointerEvent_bl || s, this.useFontAwesome_bl = Boolean(this.iconCSSString), h.init = function() {
            h.setupMainContainers(), h.setNormalState()
        }, h.setupMainContainers = function() {
            if (h.useFontAwesome_bl) {
                if (h.n_do = new FWDEVPTransformDisplayObject("div"), h.n_do.setInnerHTML(h.iconCSSString), h.addChild(h.n_do), h.showHDIcon) {
                    var e = new Image;
                    e.src = "http://www.webdesign-flash.ro/icons/hd.png", h.hd_do = new FWDEVPDisplayObject("img"), h.hd_do.setScreen(e), h.hd_do.setWidth(7), h.hd_do.setHeight(5), h.setOverflow("visible"), h.addChild(h.hd_do)
                }
                h.setFinalSize()
            } else if (h.useHEXColorsForSkin_bl ? (h.n_sdo = new FWDEVPTransformDisplayObject("div"), h.n_sdo.setWidth(h.totalWidth), h.n_sdo.setHeight(h.totalHeight), h.n_sdo_canvas = FWDEVPUtils.getCanvasWithModifiedColor(h.nImg, h.normalButtonsColor_str).canvas, h.n_sdo.screen.appendChild(h.n_sdo_canvas)) : (h.n_sdo = new FWDEVPTransformDisplayObject("img"), h.n_sdo.setScreen(h.nImg)), h.addChild(h.n_sdo), h.allowToCreateSecondButton_bl) {
                h.img1 = new Image, h.img1.src = h.sPath_str;
                var t = new Image;
                h.sImg = t, h.useHEXColorsForSkin_bl ? (h.s_sdo = new FWDEVPTransformDisplayObject("div"), h.s_sdo.setWidth(h.totalWidth), h.s_sdo.setHeight(h.totalHeight), h.img1.onload = function() {
                    h.s_sdo_canvas = FWDEVPUtils.getCanvasWithModifiedColor(h.img1, h.selectedButtonsColor_str).canvas, h.s_sdo.screen.appendChild(h.s_sdo_canvas)
                }) : (h.s_sdo = new FWDEVPDisplayObject("img"), h.s_sdo.setScreen(h.img1), h.s_sdo.setWidth(h.totalWidth), h.s_sdo.setHeight(h.totalHeight)), h.s_sdo.setAlpha(0), h.addChild(h.s_sdo), h.dPath_str && (t.src = h.dPath_str, h.d_sdo = new FWDEVPDisplayObject("img"), h.d_sdo.setScreen(t), h.d_sdo.setWidth(h.totalWidth), h.d_sdo.setHeight(h.totalHeight), h.d_sdo.setX(-100), h.addChild(h.d_sdo)), h.setWidth(h.totalWidth), h.setHeight(h.totalHeight)
            }
            h.setButtonMode(!0), h.screen.style.yellowOverlayPointerEvents = "none", h.hasPointerEvent_bl ? (h.screen.addEventListener("pointerup", h.onMouseUp), h.screen.addEventListener("pointerover", h.onMouseOver), h.screen.addEventListener("pointerout", h.onMouseOut)) : h.screen.addEventListener && (h.isMobile_bl || (h.screen.addEventListener("mouseover", h.onMouseOver), h.screen.addEventListener("mouseout", h.onMouseOut), h.screen.addEventListener("mouseup", h.onMouseUp)), h.screen.addEventListener("touchend", h.onMouseUp))
        }, h.onMouseOver = function(e) {
            if (h.dispatchEvent(_.SHOW_TOOLTIP, {
                    e: e
                }), !(h.isDisabledForGood_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType)) {
                if (h.isDisabled_bl || h.isSelectedFinal_bl) return;
                h.dispatchEvent(_.MOUSE_OVER, {
                    e: e
                }), h.setSelectedState(!0)
            }
        }, h.onMouseOut = function(e) {
            if (!(h.isDisabledForGood_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType)) {
                if (h.isDisabled_bl || h.isSelectedFinal_bl) return;
                h.dispatchEvent(_.MOUSE_OUT, {
                    e: e
                }), h.setNormalState(!0)
            }
        }, h.onMouseUp = function(e) {
            h.isDisabledForGood_bl || (e.preventDefault && e.preventDefault(), h.isDisabled_bl || 2 == e.button || h.dispatchEvent(_.MOUSE_UP, {
                e: e
            }))
        }, h.checkCount = 0, this.setFinalSize = function() {
            clearInterval(h.checkId_int), 5 < h.checkCount || (h.lastWidth = h.n_do.screen.firstChild.offsetWidth, h.checkCount += 1, h.checkId_int = setInterval(function() {
                h.setFinalSize()
            }, 100), h.prevWidth != h.lastWidth && 0 != h.lastWidth && (h.setWidth(h.n_do.screen.firstChild.offsetWidth), h.setHeight(h.n_do.screen.firstChild.offsetHeight), h.n_do.setWidth(h.w), h.n_do.setHeight(h.h), h.buttonWidth = h.w, h.buttonHeight = h.h, h.totalWidth = h.w, h.totalHeight = h.h, h.hd_do && (h.hd_do.setX(h.w - h.hd_do.w + 2), h.hd_do.setY(-2)), h.prevWidth = h.lastWidth))
        }, h.setSelected = function() {
            h.isSelectedFinal_bl = !0, h.s_sdo && (FWDAnimation.killTweensOf(h.s_sdo), FWDAnimation.to(h.s_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }))
        }, h.setUnselected = function() {
            h.isSelectedFinal_bl = !1, h.s_sdo && FWDAnimation.to(h.s_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            })
        }, this.setNormalState = function(e) {
            h.useFontAwesome_bl ? (FWDAnimation.killTweensOf(h.n_do.screen), e ? FWDAnimation.to(h.n_do.screen, .8, {
                className: h.normalCalssName,
                ease: Expo.easeOut
            }) : h.n_do.screen.className = h.normalCalssName) : (FWDAnimation.killTweensOf(h.s_sdo), FWDAnimation.to(h.s_sdo, .5, {
                alpha: 0,
                ease: Expo.easeOut
            }))
        }, this.setSelectedState = function(e) {
            h.useFontAwesome_bl ? (FWDAnimation.killTweensOf(h.n_do.screen), e ? FWDAnimation.to(h.n_do.screen, .8, {
                className: h.selectedCalssName,
                ease: Expo.easeOut
            }) : h.n_do.screen.className = h.selectedCalssName) : (FWDAnimation.killTweensOf(h.s_sdo), FWDAnimation.to(h.s_sdo, .5, {
                alpha: 1,
                delay: .1,
                ease: Expo.easeOut
            }))
        }, this.setDisabledState = function() {
            h.isSetToDisabledState_bl || (h.isSetToDisabledState_bl = !0, h.d_sdo && h.d_sdo.setX(0), h.hd_do && h.hd_do.setX(h.w - h.hd_do.w))
        }, this.setEnabledState = function() {
            h.isSetToDisabledState_bl && (h.isSetToDisabledState_bl = !1, h.d_sdo && h.d_sdo.setX(-100), h.hd_do && h.hd_do.setX(-1e5))
        }, this.disable = function() {
            h.isDisabledForGood_bl || h.isDisabled_bl || (h.isDisabled_bl = !0, h.setButtonMode(!1), FWDAnimation.killTweensOf(h), FWDAnimation.to(h, .6, {
                alpha: .4
            }), h.setNormalState(!0))
        }, this.enable = function() {
            !h.isDisabledForGood_bl && h.isDisabled_bl && (h.isDisabled_bl = !1, h.setButtonMode(!0), FWDAnimation.killTweensOf(h), FWDAnimation.to(h, .6, {
                alpha: 1
            }))
        }, this.disableForGood = function() {
            h.isDisabledForGood_bl = !0, h.setButtonMode(!1)
        }, this.showDisabledState = function() {
            h.d_sdo && 0 != h.d_sdo.x && h.d_sdo.setX(0), h.hd_do && h.hd_do.setX(h.w - h.hd_do.w + 2)
        }, this.hideDisabledState = function() {
            h.d_sdo && -100 != h.d_sdo.x && h.d_sdo.setX(-100), h.hd_do && h.hd_do.setX(-1e4)
        }, this.show = function() {
            h.isShowed_bl || (h.isShowed_bl = !0, FWDAnimation.killTweensOf(h), FWDEVPUtils.isIEAndLessThen9 ? (FWDEVPUtils.isIEAndLessThen9 || (h.setAlpha(0), FWDAnimation.to(h, .4, {
                alpha: 1,
                delay: .4
            })), h.setVisible(!0)) : FWDEVPUtils.isIEWebKit ? (FWDAnimation.killTweensOf(h.n_sdo), h.n_sdo.setScale2(0), FWDAnimation.to(h.n_sdo, .8, {
                scale: 1,
                delay: .4,
                onStart: function() {
                    h.setVisible(!0)
                },
                ease: Elastic.easeOut
            })) : (h.setScale2(0), FWDAnimation.to(h, .8, {
                scale: 1,
                delay: .4,
                onStart: function() {
                    h.setVisible(!0)
                },
                ease: Elastic.easeOut
            })))
        }, this.hide = function(e) {
            h.isShowed_bl && (h.isShowed_bl = !1, FWDAnimation.killTweensOf(h), FWDAnimation.killTweensOf(h.n_sdo), h.setVisible(!1))
        }, h.updateHEXColors = function(e, t) {
            FWDEVPUtils.changeCanvasHEXColor(h.nImg, h.n_sdo_canvas, e), FWDEVPUtils.changeCanvasHEXColor(h.img1, h.s_sdo_canvas, t)
        }, h.init()
    };
    _.setPrototype = function() {
        _.prototype = null, _.prototype = new FWDEVPTransformDisplayObject("div")
    }, _.CLICK = "onClick", _.MOUSE_OVER = "onMouseOver", _.SHOW_TOOLTIP = "showTooltip", _.MOUSE_OUT = "onMouseOut", _.MOUSE_UP = "onMouseDown", _.prototype = null, e.FWDEVPSimpleButton = _
}(window),
function(e) {
    var a = function(e, t, o, s, i, n, l) {
        var r = this;
        a.prototype;
        this.nImg_img = null, this.sImg_img = null, this.n_do, this.s_do, this.useHEXColorsForSkin_bl = i, this.normalButtonsColor_str = n, this.selectedButtonsColor_str = l, this.nImgPath_str = e, this.sImgPath_str = t, this.buttonWidth = o, this.buttonHeight = s, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.isDisabled_bl = !1, this.init = function() {
            r.setupMainContainers(), r.setWidth(r.buttonWidth), r.setHeight(r.buttonHeight), r.setButtonMode(!0)
        }, this.setupMainContainers = function() {
            r.nImg = new Image, r.nImg.src = r.nImgPath_str, r.useHEXColorsForSkin_bl ? (r.n_do = new FWDEVPTransformDisplayObject("div"), r.n_do.setWidth(r.buttonWidth), r.n_do.setHeight(r.buttonHeight), r.nImg.onload = function() {
                r.n_do_canvas = FWDEVPUtils.getCanvasWithModifiedColor(r.nImg, r.normalButtonsColor_str).canvas, r.n_do.screen.appendChild(r.n_do_canvas)
            }) : (r.n_do = new FWDEVPDisplayObject("img"), r.n_do.setScreen(r.nImg), r.n_do.setWidth(r.buttonWidth), r.n_do.setHeight(r.buttonHeight)), r.addChild(r.n_do), r.sImg = new Image, r.sImg.src = r.sImgPath_str, r.useHEXColorsForSkin_bl ? (r.s_do = new FWDEVPTransformDisplayObject("div"), r.s_do.setWidth(r.buttonWidth), r.s_do.setHeight(r.buttonHeight), r.sImg.onload = function() {
                r.s_do_canvas = FWDEVPUtils.getCanvasWithModifiedColor(r.sImg, r.selectedButtonsColor_str).canvas, r.s_do.screen.appendChild(r.s_do_canvas)
            }) : (r.s_do = new FWDEVPDisplayObject("img"), r.s_do.setScreen(r.sImg), r.s_do.setWidth(r.buttonWidth), r.s_do.setHeight(r.buttonHeight)), r.addChild(r.s_do), r.s_do.setAlpha(0), r.hasPointerEvent_bl ? (r.screen.addEventListener("pointerup", r.onMouseUp), r.screen.addEventListener("pointerover", r.setNormalState), r.screen.addEventListener("pointerout", r.setSelectedState)) : r.screen.addEventListener && (r.isMobile_bl || (r.screen.addEventListener("mouseover", r.setNormalState), r.screen.addEventListener("mouseout", r.setSelectedState), r.screen.addEventListener("mouseup", r.onMouseUp)), r.screen.addEventListener("touchend", r.onMouseUp))
        }, this.setNormalState = function(e) {
            FWDAnimation.killTweensOf(r.s_do), FWDAnimation.to(r.s_do, .5, {
                alpha: 0,
                ease: Expo.easeOut
            })
        }, this.setSelectedState = function(e) {
            FWDAnimation.killTweensOf(r.s_do), FWDAnimation.to(r.s_do, .5, {
                alpha: 1,
                ease: Expo.easeOut
            })
        }, this.onMouseUp = function(e) {
            r.dispatchEvent(a.CLICK)
        }, r.updateHEXColors = function(e, t) {
            FWDEVPUtils.changeCanvasHEXColor(r.nImg, r.n_do_canvas, e), FWDEVPUtils.changeCanvasHEXColor(r.sImg, r.s_do_canvas, t)
        }, this.destroy = function() {
            FWDAnimation.killTweensOf(r.n_do), r.n_do.destroy(), this.s_do.destroy(), r.screen.onmouseover = null, r.screen.onmouseout = null, r.screen.onclick = null, r.nImg_img = null, r.sImg_img = null, r = null, a.prototype = null
        }, r.init()
    };
    a.setPrototype = function() {
        a.prototype = null, a.prototype = new FWDEVPTransformDisplayObject("div", "relative")
    }, a.CLICK = "onClick", a.prototype = null, e.FWDEVPSimpleSizeButton = a
}(window),
function(r) {
    var a = function(l, e) {
        var u = this;
        a.prototype;
        this.main_do = null, this.reader = null, this.subtitiles_ar = null, this.hasText_bl = !1, this.isLoaded_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.showSubtitileByDefault_bl = e.showSubtitileByDefault_bl, u.init = function() {
            u.setOverflow("visible"), u.getStyle().cursor = "default", u.setupTextContainer(), u.setWidth(l.maxWidth), u.getStyle().margin = "auto", u.hide()
        }, u.setupTextContainer = function() {
            this.text_do = new FWDEVPTransformDisplayObject("div"), u.text_do.getStyle().pointerEvents = "none", this.text_do.hasTransform3d_bl = !1, this.text_do.setBackfaceVisibility(), this.text_do.getStyle().transformOrigin = "50% 0%", this.text_do.setWidth(l.maxWidth), this.text_do.getStyle().textAlign = "center", this.text_do.getStyle().fontSmoothing = "antialiased", this.text_do.getStyle().webkitFontSmoothing = "antialiased", this.text_do.getStyle().textRendering = "optimizeLegibility", this.addChild(this.text_do)
        }, u.loadSubtitle = function(e) {
            if (u.text_do.setX(-5e3), -1 == location.protocol.indexOf("file:")) {
                u.subtitiles_ar = [], u.stopToLoadSubtitle(), u.sourceURL_str = e, u.xhr = new XMLHttpRequest, u.xhr.onreadystatechange = u.onLoad, u.xhr.onerror = u.onError;
                try {
                    u.xhr.open("get", u.sourceURL_str + "?rand=" + parseInt(99999999 * Math.random()), !0), u.xhr.send()
                } catch (e) {
                    e && e.message && e.message, u.facebookAPIErrorHandler()
                }
            }
        }, this.onLoad = function(e) {
            4 == u.xhr.readyState && (404 == u.xhr.status ? u.dispatchEvent(FWDEVPData.LOAD_ERROR, {
                text: "Subtitle file path is not found: <font color='#FF0000'>" + u.sourceURL_str + "</font>"
            }) : 408 == u.xhr.status ? u.dispatchEvent(FWDEVPData.LOAD_ERROR, {
                text: "Loadiong subtitle file file request load timeout!"
            }) : 200 == u.xhr.status && (r.JSON, u.subtitle_txt = u.xhr.responseText, u.isShowed_bl && u.show(), u.parseSubtitle(u.subtitle_txt), u.prevText = "none", u.showSubtitileByDefault_bl && setTimeout(function() {
                u.show(), u.text_do.setX(0), u.updateSubtitle(l.currentSecconds)
            }, 400))), u.dispatchEvent(a.LOAD_COMPLETE)
        }, this.onError = function(e) {
            try {
                r.console && console.log(e), r.console && console.log(e.message)
            } catch (e) {}
            u.dispatchEvent(a.LOAD_ERROR, {
                text: "Error loading subtitle file : <font color='#FF0000'>" + u.sourceURL_str + "</font>."
            })
        }, this.stopToLoadSubtitle = function() {
            if (null != u.xhr) {
                try {
                    u.xhr.abort()
                } catch (e) {}
                u.xhr.onreadystatechange = null, u.xhr.onerror = null, u.xhr = null
            }
            this.isLoaded_bl = !1
        }, u.parseSubtitle = function(e) {
            function l(e) {
                return null == e ? "" : e.replace(/^\s+|\s+$/g, "")
            }
            u.isLoaded_bl = !0;
            var r = (e = l(e = e.replace(/\r\n|\r|\n/g, "\n"))).split("\n\n"),
                a = 0;
            for (s in r) {
                var d = r[s].split("\n");
                if (2 <= d.length) {
                    if (n = d[0], i = l(d[1].split(" --\x3e ")[0]), o = l(d[1].split(" --\x3e ")[1]), t = d[2], 2 < d.length)
                        for (j = 3; j < d.length; j++) t += "<br>" + d[j];
                    u.subtitiles_ar[a] = {}, u.subtitiles_ar[a].number = n, u.subtitiles_ar[a].start = i, u.subtitiles_ar[a].end = o, u.subtitiles_ar[a].startDuration = FWDEVPUtils.formatTimeWithMiliseconds(i), u.subtitiles_ar[a].endDuration = FWDEVPUtils.formatTimeWithMiliseconds(o), u.subtitiles_ar[a].text = "<p class='EVPSubtitle'>" + t + "</p>"
                }
                a++
            }
        }, this.updateSubtitle = function(e) {
            if (u.isLoaded_bl) {
                for (var t, o, s = "", i = 0; i < u.subtitiles_ar.length; i++)
                    if (t = u.subtitiles_ar[i].startDuration, o = u.subtitiles_ar[i].endDuration, t < e && e < o) {
                        s = u.subtitiles_ar[i].text;
                        break
                    } if (u.prevText != s) u.text_do.setInnerHTML(s), u.setAlpha(0), setTimeout(function() {
                    u.setAlpha(1), u.position()
                }, 300), u.hasText_bl = !0;
                u.prevText = s
            }
        }, this.position = function(e) {
            if (u.isLoaded_bl) {
                var t;
                u.setX(Math.round((l.tempVidStageWidth - u.w) / 2));
                var o = Math.min(2, l.stageWidth / l.maxWidth);
                u.text_do.setScale2(o);
                var s = u.text_do.getHeight() * o;
                t = l.controller_do ? l.controller_do.isShowed_bl ? parseInt(l.stageHeight - l.controller_do.h - s) : parseInt(l.stageHeight - s - 10) : parseInt(l.stageHeight - s), FWDAnimation.killTweensOf(u.text_do), e ? FWDAnimation.to(u.text_do, .8, {
                    y: t,
                    ease: Expo.easeInOut
                }) : u.text_do.setY(t)
            }
        }, this.show = function() {
            u.setVisible(!0)
        }, this.hide = function() {
            u.setVisible(!1)
        }, u.init()
    };
    a.getDuration = function(e) {
        var t = 0,
            o = 0,
            s = 0;
        return "0" == (t = (e = e.split(":"))[0])[0] && "0" != t[1] && (t = parseInt(t[1])), "00" == t && (t = 0), "0" == (o = e[1])[0] && "0" != o[1] && (o = parseInt(o[1])), "00" == o && (o = 0), secs = parseInt(e[2].replace(/,.*/gi, "")), "0" == secs[0] && "0" != secs[1] && (secs = parseInt(secs[1])), "00" == secs && (secs = 0), 0 != t && (s += 60 * t * 60), 0 != o && (s += 60 * o), s += secs
    }, a.setPrototype = function() {
        a.prototype = null, a.prototype = new FWDEVPTransformDisplayObject("div")
    }, a.LOAD_ERROR = "error", a.LOAD_COMPLETE = "complete", a.prototype = null, r.FWDEVPSubtitle = a
}(window), window.FWDEVPTransformDisplayObject = function(e, t, o, s) {
        this.listeners = {
            events_ar: []
        };
        var i = this;
        if ("div" != e && "img" != e && "canvas" != e) throw Error("Type is not valid! " + e);
        this.type = e, this.children_ar = [], this.style, this.screen, this.numChildren, this.transform, this.position = t || "absolute", this.overflow = o || "hidden", this.display = s || "block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.scale = 1, this.rotation = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform2d_bl = FWDEVPUtils.hasTransform2d, this.init = function() {
            this.setScreen()
        }, this.getTransform = function() {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; e = t.shift();)
                if (void 0 !== this.screen.style[e]) return e;
            return !1
        }, this.getOpacityType = function() {
            return void 0 !== this.screen.style.opacity ? "opacity" : "filter"
        }, this.setScreen = function(e) {
            "img" == this.type && e ? this.screen = e : this.screen = document.createElement(this.type), this.setMainProperties()
        }, this.setMainProperties = function() {
            this.transform = this.getTransform(), this.setPosition(this.position), this.setOverflow(this.overflow), this.opacityType = this.getOpacityType(), "opacity" == this.opacityType && (this.isHtml5_bl = !0), "filter" == i.opacityType && (i.screen.style.filter = "inherit"), this.screen.style.left = "0px", this.screen.style.top = "0px", this.screen.style.margin = "0px", this.screen.style.padding = "0px", this.screen.style.maxWidth = "none", this.screen.style.maxHeight = "none", this.screen.style.border = "none", this.screen.style.lineHeight = "1", this.screen.style.backgroundColor = "transparent", this.screen.style.backfaceVisibility = "hidden", this.screen.style.webkitBackfaceVisibility = "hidden", this.screen.style.MozBackfaceVisibility = "hidden", this.screen.style.MozImageRendering = "optimizeSpeed", this.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == e && (this.setWidth(this.screen.width), this.setHeight(this.screen.height), this.screen.onmousedown = function(e) {
                return !1
            })
        }, i.setBackfaceVisibility = function() {
            i.screen.style.backfaceVisibility = "visible", i.screen.style.webkitBackfaceVisibility = "visible", i.screen.style.MozBackfaceVisibility = "visible"
        }, i.removeBackfaceVisibility = function() {
            i.screen.style.backfaceVisibility = "hidden", i.screen.style.webkitBackfaceVisibility = "hidden", i.screen.style.MozBackfaceVisibility = "hidden"
        }, this.setSelectable = function(e) {
            if (!e) {
                try {
                    this.screen.style.userSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.MozUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.webkitUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.khtmlUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.oUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.msUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.msUserSelect = "none"
                } catch (e) {}
                this.screen.ondragstart = function(e) {
                    return !1
                }, this.screen.onselectstart = function() {
                    return !1
                }, this.screen.style.webkitTouchCallout = "none"
            }
        }, this.getScreen = function() {
            return i.screen
        }, this.setVisible = function(e) {
            this.visible = e, 1 == this.visible ? this.screen.style.visibility = "visible" : this.screen.style.visibility = "hidden"
        }, this.getVisible = function() {
            return this.visible
        }, this.setResizableSizeAfterParent = function() {
            this.screen.style.width = "100%", this.screen.style.height = "100%"
        }, this.getStyle = function() {
            return this.screen.style
        }, this.setOverflow = function(e) {
            i.overflow = e, i.screen.style.overflow = i.overflow
        }, this.setPosition = function(e) {
            i.position = e, i.screen.style.position = i.position
        }, this.setDisplay = function(e) {
            this.display = e, this.screen.style.display = this.display
        }, this.setButtonMode = function(e) {
            this.buttonMode = e, 1 == this.buttonMode ? this.screen.style.cursor = "pointer" : this.screen.style.cursor = "default"
        }, this.setBkColor = function(e) {
            i.screen.style.backgroundColor = e
        }, this.setInnerHTML = function(e) {
            i.innerHTML = e, i.screen.innerHTML = i.innerHTML
        }, this.getInnerHTML = function() {
            return i.innerHTML
        }, this.getRect = function() {
            return i.screen.getBoundingClientRect()
        }, this.setAlpha = function(e) {
            i.alpha = e, "opacity" == i.opacityType ? i.screen.style.opacity = i.alpha : "filter" == i.opacityType && (i.screen.style.filter = "alpha(opacity=" + 100 * i.alpha + ")", i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * i.alpha) + ")")
        }, this.getAlpha = function() {
            return i.alpha
        }, this.getRect = function() {
            return this.screen.getBoundingClientRect()
        }, this.getGlobalX = function() {
            return this.getRect().left
        }, this.getGlobalY = function() {
            return this.getRect().top
        }, this.setX = function(e) {
            i.x = e, i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)" : i.screen.style.left = i.x + "px"
        }, this.getX = function() {
            return i.x
        }, this.setY = function(e) {
            i.y = e, i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)" : i.screen.style.top = i.y + "px"
        }, this.getY = function() {
            return i.y
        }, this.setScale2 = function(e) {
            i.scale = e, i.hasTransform2d_bl && (i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)")
        }, this.getScale = function() {
            return i.scale
        }, this.setRotation = function(e) {
            i.rotation = e, i.hasTransform2d_bl && (i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)")
        }, this.setWidth = function(e) {
            i.w = e, "img" == i.type ? i.screen.width = i.w : i.screen.style.width = i.w + "px"
        }, this.getWidth = function() {
            return "div" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : "img" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : 0 != i.screen.width ? i.screen.width : i._w : "canvas" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : void 0
        }, this.setHeight = function(e) {
            i.h = e, "img" == i.type ? i.screen.height = i.h : i.screen.style.height = i.h + "px"
        }, this.getHeight = function() {
            return "div" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : "img" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : 0 != i.screen.height ? i.screen.height : i.h : "canvas" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : void 0
        }, this.getNumChildren = function() {
            return i.children_ar.length
        }, this.addChild = function(e) {
            this.contains(e) && this.children_ar.splice(FWDEVPUtils.indexOfArray(this.children_ar, e), 1), this.children_ar.push(e), this.screen.appendChild(e.screen)
        }, this.removeChild = function(e) {
            if (!this.contains(e)) throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
            this.children_ar.splice(FWDEVPUtils.indexOfArray(this.children_ar, e), 1), this.screen.removeChild(e.screen)
        }, this.contains = function(e) {
            return -1 != FWDEVPUtils.indexOfArray(this.children_ar, e)
        }, this.addChildAtZero = function(e) {
            0 == this.numChildren ? (this.children_ar.push(e), this.screen.appendChild(e.screen)) : (this.screen.insertBefore(e.screen, this.children_ar[0].screen), this.contains(e) && this.children_ar.splice(FWDEVPUtils.indexOfArray(this.children_ar, e), 1), this.children_ar.unshift(e))
        }, this.getChildAt = function(e) {
            if (e < 0 || e > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == this.numChildren) throw Errror("##getChildAt## Child dose not exist!");
            return this.children_ar[e]
        }, this.removeChildAtZero = function() {
            this.screen.removeChild(this.children_ar[0].screen), this.children_ar.shift()
        }, this.addListener = function(e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
        }, this.dispatchEvent = function(e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                    if (t)
                        for (var i in t) this.listeners.events_ar[o][i] = t[i];
                    this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o]);
                    break
                }
        }, this.removeListener = function(e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                    this.listeners.events_ar.splice(o, 1);
                    break
                }
        }, this.disposeImage = function() {
            "img" == this.type && (this.screen.src = null)
        }, this.destroy = function() {
            try {
                this.screen.parentNode.removeChild(this.screen)
            } catch (e) {}
            this.screen.onselectstart = null, this.screen.ondragstart = null, this.screen.ontouchstart = null, this.screen.ontouchmove = null, this.screen.ontouchend = null, this.screen.onmouseover = null, this.screen.onmouseout = null, this.screen.onmouseup = null, this.screen.onmousedown = null, this.screen.onmousemove = null, this.screen.onclick = null, delete this.screen, delete this.style, delete this.rect, delete this.selectable, delete this.buttonMode, delete this.position, delete this.overflow, delete this.visible, delete this.innerHTML, delete this.numChildren, delete this.x, delete this.y, delete this.w, delete this.h, delete this.opacityType, delete this.isHtml5_bl, delete this.hasTransform2d_bl, this.children_ar = null, this.style = null, this.screen = null, this.numChildren = null, this.transform = null, this.position = null, this.overflow = null, this.display = null, this.visible = null, this.buttonMode = null, this.globalX = null, this.globalY = null, this.x = null, this.y = null, this.w = null, this.h = null, this.rect = null, this.alpha = null, this.innerHTML = null, this.opacityType = null, this.isHtml5_bl = null, this.hasTransform3d_bl = null, this.hasTransform2d_bl = null, i = null
        }, this.init()
    },
    function() {
        for (var n = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
            var o = (new Date).getTime(),
                s = Math.max(0, 16 - (o - n)),
                i = window.setTimeout(function() {
                    e(o + s)
                }, s);
            return n = o + s, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }(),
    function(s) {
        var n = function(o, e, t) {
            var i = this;
            n.prototype;
            this.video_el = null, this.sourcePath_str = null, this.backgroundColor_str = e, this.controllerHeight = o.data.controllerHeight, this.stageWidth = 0, this.stageHeight = 0, this.lastPercentPlayed = 0, this.volume = t, this.curDuration = 0, this.countNormalMp3Errors = 0, this.countShoutCastErrors = 0, this.maxShoutCastCountErrors = 5, this.maxNormalCountErrors = 1, this.disableClickForAWhileId_to, this.greenScreenTolerance = o.data.greenScreenTolerance, this.disableClick_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !0, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.hasPlayedOnce_bl = !1, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.hastStaredToPlayHLS_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
                i.setupVideo(), i.setBkColor(i.backgroundColor_str)
            }, this.setupVideo = function() {
                null == i.video_el && (i.video_el = document.createElement("video"), i.screen.appendChild(i.video_el), i.video_el.controls = !1, i.video_el.volume = i.volume, i.video_el.WebKitPlaysInline = !0, i.video_el.playsinline = !0, o.displayType == FWDEVPlayer.BACKGROUND_VIDEO && (i.video_el.muted = !0), i.video_el.setAttribute("playsinline", ""), i.video_el.setAttribute("webkit-playsinline", ""), i.video_el.style.position = "relative", i.video_el.style.left = "0px", i.video_el.style.top = "0px", i.video_el.style.width = "100%", i.video_el.style.height = "100%", i.video_el.style.margin = "0px", i.video_el.style.padding = "0px", i.video_el.style.maxWidth = "none", i.video_el.style.maxHeight = "none", i.video_el.style.border = "none", i.video_el.style.lineHeight = "0", i.video_el.style.msTouchAction = "none", o.isAdd_bl ? i.setPlaybackRate(1) : i.setPlaybackRate(o.data.defaultPlaybackRate_ar[o.data.startAtPlaybackIndex]), i.screen.appendChild(i.video_el)), i.video_el.addEventListener("error", i.errorHandler), i.video_el.addEventListener("canplay", i.safeToBeControlled), i.video_el.addEventListener("canplaythrough", i.safeToBeControlled), i.video_el.addEventListener("progress", i.updateProgress), i.video_el.addEventListener("timeupdate", i.updateVideo), i.video_el.addEventListener("pause", i.pauseHandler), i.video_el.addEventListener("play", i.playHandler), FWDEVPUtils.isIE || i.video_el.addEventListener("waiting", i.startToBuffer), i.video_el.addEventListener("playing", i.stopToBuffer), i.video_el.addEventListener("ended", i.endedHandler)
            }, this.destroyVideo = function() {
                i.video_el && (i.video_el.removeEventListener("error", i.errorHandler), i.video_el.removeEventListener("canplay", i.safeToBeControlled), i.video_el.removeEventListener("canplaythrough", i.safeToBeControlled), i.video_el.removeEventListener("progress", i.updateProgress), i.video_el.removeEventListener("timeupdate", i.updateVideo), i.stopToUpdateSubtitles(), i.video_el.removeEventListener("pause", i.pauseHandler), i.video_el.removeEventListener("play", i.playHandler), FWDEVPUtils.isIE || i.video_el.removeEventListener("waiting", i.startToBuffer), i.video_el.removeEventListener("playing", i.stopToBuffer), i.video_el.removeEventListener("ended", i.endedHandler), i.isMobile_bl ? (i.screen.removeChild(i.video_el), i.video_el = null) : (i.video_el.style.visibility = "hidden", i.video_el.src = "", i.video_el.load()))
            }, this.startToBuffer = function(e) {
                i.dispatchEvent(n.START_TO_BUFFER)
            }, this.stopToBuffer = function() {
                i.dispatchEvent(n.STOP_TO_BUFFER)
            }, this.errorHandler = function(e) {
                var t;
                o.videoType_str == FWDEVPlayer.VIDEO && (i.hasError_bl = !0, t = 0 == i.video_el.networkState ? "error 'self.video_el.networkState = 0'" : 1 == i.video_el.networkState ? "error 'self.video_el.networkState = 1'" : 2 == i.video_el.networkState ? "'self.video_el.networkState = 2'" : 3 == i.video_el.networkState ? "source not found <font color='#FF0000'>" + i.sourcePath_str + "</font>" : e, s.console && s.console.log(i.video_el.networkState), i.dispatchEvent(n.ERROR, {
                    text: t
                }))
            }, this.resizeAndPosition = function(e, t) {
                e && (i.stageWidth = e, i.stageHeight = t), i.setWidth(i.stageWidth), i.setHeight(i.stageHeight), o.is360 && i.renderer && (i.camera.aspect = i.stageWidth / i.stageHeight, i.camera.updateProjectionMatrix(), i.renderer.setSize(i.stageWidth, i.stageHeight)), i.resizeGR()
            }, this.setSource = function(e) {
                i.stopToUpdateSubtitles(), (o.is360 || o.isGR && i.video_el) && (i.video_el.style.visibility = "hidden"), i.sourcePath_str = e, i.video_el && i.stop(), i.video_el && FWDEVPUtils.isIphone && (i.video_el.src = e)
            }, this.play = function(e, t) {
                if (FWDEVPlayer.curInstance = o, i.isStopped_bl && o.videoType_str != FWDEVPlayer.HLS_JS || t) i.initVideo(), i.play(), i.isPlaying_bl = !0, i.hastStaredToPlayHLS_bl = !0, i.startToBuffer(!0);
                else if (!i.video_el.ended || e) try {
                    i.hasError_bl = !1, i.isStopped_bl = !1, i.isPlaying_bl = !0, i.hasPlayedOnce_bl = !0, i.hastStaredToPlayHLS_bl = !0, i.video_el.play(), i.safeToBeControlled(), FWDEVPUtils.isIE && i.dispatchEvent(n.PLAY)
                } catch (e) {}
                o.is360 ? i.add360Vid() : o.isGR && i.addGreenScreen()
            }, this.initVideo = function() {
                i.isPlaying_bl = !1, i.hasError_bl = !1, i.allowScrubing_bl = !1, i.isStopped_bl = !1, i.setupVideo(), i.setVolume(), i.video_el.src = i.sourcePath_str
            }, this.pause = function() {
                if (null != i && !i.isStopped_bl && !i.hasError_bl && !i.video_el.ended) try {
                    i.video_el.pause(), i.isPlaying_bl = !1, FWDEVPUtils.isIE && i.dispatchEvent(n.PAUSE)
                } catch (e) {}
            }, this.togglePlayPause = function() {
                null != i && i.isSafeToBeControlled_bl && (i.isPlaying_bl ? i.pause() : i.play())
            }, this.pauseHandler = function() {
                i.allowScrubing_bl || (i.stopGRRender(), i.dispatchEvent(n.PAUSE))
            }, this.playHandler = function() {
                i.allowScrubing_bl || (i.startToUpdateSubtitles(), i.isStartEventDispatched_bl || (i.dispatchEvent(n.START), i.isStartEventDispatched_bl = !0), o.is360 ? i.start360Render() : o.isGR && i.startGRRender(), i.dispatchEvent(n.PLAY))
            }, this.endedHandler = function() {
                i.stopToUpdateSubtitles(), i.dispatchEvent(n.PLAY_COMPLETE)
            }, this.resume = function() {
                i.isStopped_bl || i.play()
            }, this.stop = function(e) {
                (null != i && null != i.video_el && !i.isStopped_bl || e) && (i.isPlaying_bl = !1, i.isStopped_bl = !0, i.hastStaredToPlayHLS_bl = !1, i.hasPlayedOnce_bl = !0, i.isSafeToBeControlled_bl = !1, i.isStartEventDispatched_bl = !1, i.stopToUpdateSubtitles(), i.stop360Render(), i.stopGRRender(), i.contextGR2 && (i.contextGR2.save(), i.contextGR2.globalCompositeOperation = "copy", i.contextGR2.fillStyle = "rgba(0,0,0,0)", i.contextGR2.fill(), i.contextGR2.restore()), i.contains(i.canvasGR2) && i.removeChild(i.canvasGR2), i.destroyVideo(), i.dispatchEvent(n.LOAD_PROGRESS, {
                    percent: 0
                }), i.dispatchEvent(n.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00"
                }), i.dispatchEvent(n.STOP), i.stopToBuffer())
            }, this.safeToBeControlled = function() {
                (o.videoType_str != FWDEVPlayer.HLS_JS || i.hastStaredToPlayHLS_bl) && (i.isSafeToBeControlled_bl || (o.resizeHandler(), i.stopToScrub(), i.hasHours_bl = 0 < Math.floor(i.video_el.duration / 3600), i.isPlaying_bl = !0, i.isSafeToBeControlled_bl = !0, o.is360 || o.isGR || (i.video_el.style.visibility = "visible"), i.dispatchEvent(n.SAFE_TO_SCRUBB)))
            }, this.updateProgress = function() {
                if (o.videoType_str != FWDEVPlayer.HLS_JS || i.hastStaredToPlayHLS_bl) {
                    var e = 0;
                    0 < i.video_el.buffered.length && (e = i.video_el.buffered.end(i.video_el.buffered.length - 1).toFixed(1) / i.video_el.duration.toFixed(1), !isNaN(e) && e || (e = 0)), 1 == e && i.video_el.removeEventListener("progress", i.updateProgress), i.dispatchEvent(n.LOAD_PROGRESS, {
                        percent: e
                    })
                }
            }, this.updateVideo = function() {
                var e;
                i.allowScrubing_bl || (e = i.video_el.currentTime / i.video_el.duration, i.dispatchEvent(n.UPDATE, {
                    percent: e
                }));
                var t = n.formatTime(i.video_el.duration),
                    o = n.formatTime(i.video_el.currentTime);
                isNaN(i.video_el.duration) ? i.dispatchEvent(n.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00",
                    seconds: 0
                }) : i.dispatchEvent(n.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t,
                    seconds: parseInt(i.video_el.currentTime),
                    totalTimeInSeconds: i.video_el.duration
                }), i.lastPercentPlayed = e, i.curDuration = o
            }, this.startToScrub = function() {
                i.allowScrubing_bl = !0
            }, this.stopToScrub = function() {
                i.allowScrubing_bl = !1
            }, this.scrubbAtTime = function(e) {
                i.video_el.currentTime = e;
                var t = n.formatTime(i.video_el.duration),
                    o = n.formatTime(i.video_el.currentTime);
                i.dispatchEvent(n.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t
                })
            }, this.scrub = function(e, t) {
                t && i.startToScrub();
                try {
                    i.video_el.currentTime = i.video_el.duration * e;
                    var o = n.formatTime(i.video_el.duration),
                        s = n.formatTime(i.video_el.currentTime);
                    i.dispatchEvent(n.UPDATE_TIME, {
                        curTime: s,
                        totalTime: o
                    })
                } catch (t) {}
            }, this.replay = function() {
                i.scrub(0), i.play()
            }, this.setPlaybackRate = function(e) {
                i.video_el && (i.video_el.defaultPlaybackRate = e, i.video_el.playbackRate = e)
            }, this.setVolume = function(e) {
                null != e && (i.volume = e), i.video_el && (i.video_el.volume = i.volume)
            }, this.stopToUpdateSubtitles = function() {
                clearInterval(i.startToUpdateSubtitleId_int)
            }, this.startToUpdateSubtitles = function() {
                clearInterval(i.startToUpdateSubtitleId_int), i.startToUpdateSubtitleId_int = setInterval(i.updateSubtitleHandler, 10)
            }, this.updateSubtitleHandler = function() {
                i.dispatchEvent(n.UPDATE_SUBTITLE, {
                    curTime: i.video_el.currentTime
                })
            }, this.addGreenScreen = function() {
                i.canvasGR2 || (i.canvasGR1 = new FWDEVPDisplayObject("canvas"), i.contextGR1 = i.canvasGR1.screen.getContext("2d"), i.canvasGR2 = new FWDEVPDisplayObject("canvas"), i.contextGR2 = i.canvasGR2.screen.getContext("2d")), i.video_el.style.visibility = "hidden", i.renderFR()
            }, this.startGRRender = function() {
                i.isGRRendering_bl = !0, FWDEVPUtils.isLocal || (i.contains(i.canvasGR2) || i.addChild(i.canvasGR2), cancelAnimationFrame(i.requestId), i.requestId = requestAnimationFrame(i.renderFR))
            }, this.stopGRRender = function() {
                i.isGRRendering_bl = !1, cancelAnimationFrame(i.requestId)
            }, this.renderFR = function() {
                if (!FWDEVPUtils.isLocal) {
                    if (i.isGRRendering_bl && cancelAnimationFrame(i.requestId), i.contextGR1) {
                        0 != i.video_el.videoWidth && i.prevCurCavasGRWidth != i.video_el.videoWidth && (i.canvasGR1.screen.width = i.video_el.videoWidth, i.canvasGR1.screen.height = i.video_el.videoHeight, i.canvasGR2.screen.width = i.video_el.videoWidth, i.canvasGR2.screen.height = i.video_el.videoHeight), i.prevCurCavasGRWidth = i.video_el.videoWidth, i.contextGR1.drawImage(i.video_el, 0, 0, i.canvasGR1.screen.width, i.canvasGR1.screen.height);
                        for (var e = i.contextGR1.getImageData(0, 0, i.canvasGR1.screen.width, i.canvasGR1.screen.height), t = e.data, o = 0, s = t.length; o < s; o += 4) {
                            Math.abs(t[o] - t[0]) + Math.abs(t[o + 1] - t[1]) + Math.abs(t[o + 2] - t[2]) < i.greenScreenTolerance && (t[o + 3] = 0)
                        }
                        i.contextGR2.putImageData(e, 0, 0)
                    }
                    i.resizeGR(), i.requestId = requestAnimationFrame(i.renderFR)
                }
            }, this.resizeGR = function() {
                o.isGR && i.canvasGR2 && (i.canvasGR2.setWidth(i.stageWidth), i.canvasGR2.setX(Math.round((o.stageWidth - i.stageWidth) / 2)), i.canvasGR2.setY(Math.round((o.stageHeight - i.canvasGR2.getHeight()) / 2)))
            }, this.add360Vid = function() {
                i.renderer ? i.screen.appendChild(i.renderer.domElement) : (i.renderer = new THREE.WebGLRenderer({
                    antialias: !0
                }), i.renderer.setSize(i.stageWidth, i.stageHeight), i.renderer.domElement.style.position = "absolute", i.renderer.domElement.style.left = "0px", i.renderer.domElement.style.top = "0px", i.renderer.domElement.style.margin = "0px", i.renderer.domElement.style.padding = "0px", i.renderer.domElement.style.maxWidth = "none", i.renderer.domElement.style.maxHeight = "none", i.renderer.domElement.style.border = "none", i.renderer.domElement.style.lineHeight = "1", i.renderer.domElement.style.backgroundColor = "transparent", i.renderer.domElement.style.backfaceVisibility = "hidden", i.renderer.domElement.style.webkitBackfaceVisibility = "hidden", i.renderer.domElement.style.MozBackfaceVisibility = "hidden", i.renderer.domElement.style.MozImageRendering = "optimizeSpeed", i.renderer.domElement.style.WebkitImageRendering = "optimizeSpeed", i.screen.appendChild(i.renderer.domElement), i.scene = new THREE.Scene, i.video_el.setAttribute("crossorigin", "anonymous"), i.canvas = document.createElement("canvas"), i.context = i.canvas.getContext("2d"), FWDEVPUtils.isFirefox ? i.videoTexture = new THREE.Texture(i.video_el) : i.videoTexture = new THREE.Texture(i.canvas), i.videoTexture.minFilter = THREE.LinearFilter, i.videoTexture.magFilter = THREE.LinearFilter, i.videoTexture.format = THREE.RGBFormat, i.cubeGeometry = new THREE.SphereGeometry(500, 60, 40), i.sphereMat = new THREE.MeshBasicMaterial({
                    map: i.videoTexture
                }), i.sphereMat.side = THREE.BackSide, i.cube = new THREE.Mesh(i.cubeGeometry, i.sphereMat), i.scene.add(i.cube), i.camera = new THREE.PerspectiveCamera(45, i.stageWidth / i.stageHeight, .1, 1e4), i.camera.position.y = 0, i.camera.position.z = 500, i.camera.position.x = 0, i.scene.add(i.camera), i.controls = new THREE.OrbitControls(i.camera, o.dumyClick_do.screen), i.controls.enableDamping = !0, i.controls.enableZoom = !1, i.controls.dampingFactor = .25, i.controls.maxDistance = 500, i.controls.minDistance = 500, i.controls.rotateLeft(90 * Math.PI / 180), i.controls.enabled = !0, i.render())
            }, this.start360Render = function() {
                i.is360Rendering_bl = !0, cancelAnimationFrame(i.requestId), i.requestId = requestAnimationFrame(i.render)
            }, this.stop360Render = function() {
                if (i.is360Rendering_bl = !1, i.camera) {
                    i.camera.position.y = 0, i.camera.position.z = 500, i.camera.position.x = 0, cancelAnimationFrame(i.requestId);
                    try {
                        i.screen.removeChild(i.renderer.domElement)
                    } catch (e) {}
                }
            }, this.render = function() {
                i.camera && (i.is360Rendering_bl && cancelAnimationFrame(i.requestId), i.video_el.readyState === i.video_el.HAVE_ENOUGH_DATA && (i.videoTexture.needsUpdate = !0), !FWDEVPUtils.isFirefox && i.context && (0 != i.video_el.videoWidth && (i.canvas.width = i.video_el.videoWidth, i.canvas.height = i.video_el.videoHeight), i.context.save(), i.context.scale(-1, 1), i.context.drawImage(i.video_el, 0, 0, -1 * i.canvas.width, i.canvas.height), i.context.restore()), i.controls.update(), i.renderer.render(i.scene, i.camera), i.requestId = requestAnimationFrame(i.render))
            }, n.formatTime = function(e) {
                var t = Math.floor(e / 3600),
                    o = e % 3600,
                    s = Math.floor(o / 60),
                    i = o % 60,
                    n = Math.ceil(i);
                return s = 10 <= s ? s : "0" + s, n = 10 <= n ? n : "0" + n, isNaN(n) ? "00:00" : 0 < t ? "0" + t + ":" + s + ":" + n : s + ":" + n
            }, this.init()
        };
        n.setPrototype = function() {
            n.prototype = new FWDEVPDisplayObject("div")
        }, n.UPDATE_SUBTITLE = "updateSubtitle", n.ERROR = "error", n.UPDATE = "update", n.UPDATE_TIME = "updateTime", n.SAFE_TO_SCRUBB = "safeToControll", n.LOAD_PROGRESS = "loadProgress", n.START = "start", n.PLAY = "play", n.PAUSE = "pause", n.STOP = "stop", n.PLAY_COMPLETE = "playCompvare", n.START_TO_BUFFER = "startToBuffer", n.STOP_TO_BUFFER = "stopToBuffer", s.FWDEVPVideoScreen = n
    }(window),
    function(e) {
        var i = function(o, e) {
            var s = this;
            i.prototype;
            this.iframe_do = null, this.vimeoPlayer = null, this.lastQuality_str = "auto", this.volume = e, this.updateVideoId_int, this.updatePreloadId_int, this.controllerHeight = o.data.controllerHeight, this.hasBeenCreatedOnce_bl = !0, this.hasHours_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !1, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isPausedInEvent_bl = !0, this.isShowed_bl = !0, this.isCued_bl = !1, this.isVideoLoaded_bl = !1, this.isReady_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
                s.hasTransform3d_bl = !1, s.hasTransform2d_bl = !1, s.setBackfaceVisibility(), o.main_do.addChildAt(s, 1), s.resizeAndPosition(), s.setupVideo(), s.setupDisableClick(), s.setBkColor("#000000")
            }, this.setupDisableClick = function() {
                s.disableClick_do = new FWDEVPDisplayObject("div"), s.disableClick_do.setBkColor(o.backgroundColor_str), s.disableClick_do.setAlpha(1e-8), s.addChild(s.disableClick_do)
            }, this.showDisable = function() {
                o.tempVidStageWidth && s.disableClick_do.w != s.stageWidth && (s.disableClick_do.setWidth(o.tempVidStageWidth), FWDEVPUtils.isIphone ? s.disableClick_do.setHeight(o.tempVidStageHeight - s.controllerHeight) : s.disableClick_do.setHeight(o.tempVidStageHeight))
            }, this.hideDisable = function() {
                0 != s.disableClick_do.w && (s.disableClick_do.setWidth(0), s.disableClick_do.setHeight(0))
            }, this.setupVideo = function() {
                s.vimeoPlayer || (s.iframe_do = new FWDEVPDisplayObject("iframe"), s.iframe_do.hasTransform3d_bl = !1, s.iframe_do.hasTransform2d_bl = !1, s.iframe_do.screen.setAttribute("id", o.instanceName_str + "vimeo"), s.isMobile_bl && (s.iframe_do.screen.setAttribute("webkitallowfullscreen", "1"), s.iframe_do.screen.setAttribute("mozallowfullscreen", "1"), s.iframe_do.screen.setAttribute("allowfullscreen", "1")), s.iframe_do.screen.setAttribute("src", "https://player.vimeo.com/video/76979871?player_id=" + o.instanceName_str + "vimeo&autoplay=0"), s.iframe_do.getStyle().width = "100%", s.iframe_do.getStyle().height = "100%", s.iframe_do.setBackfaceVisibility(), s.addChild(s.iframe_do), s.vimeoPlayer = new Vimeo.Player(s.iframe_do.screen), s.vimeoPlayer.on("play", function(e) {
                    s.playHandler()
                }), s.vimeoPlayer.on("pause", function(e) {
                    s.pauseHandler()
                }), s.vimeoPlayer.on("loadProgress", function(e) {
                    s.loadProgressHandler()
                }), s.vimeoPlayer.on("ended", function(e) {
                    s.finishHandler()
                }), s.vimeoPlayer.on("loaded", function(e) {
                    s.loadedHandler()
                }), s.vimeoPlayer.ready().then(function() {
                    s.readyHandler()
                }), s.blackOverlay_do = new FWDEVPDisplayObject("div"), s.blackOverlay_do.getStyle().backgroundColor = "#000000", s.blackOverlay_do.getStyle().width = "100%", s.blackOverlay_do.getStyle().height = "100%", s.addChild(s.blackOverlay_do))
            }, this.resizeAndPosition = function() {
                o.tempVidStageWidth && (s.setWidth(o.tempVidStageWidth), s.setHeight(o.tempVidStageHeight))
            }, this.setSource = function(e) {
                e && (s.sourcePath_str = e), s.stopToUpdateSubtitles(), s.stop();
                var t = s.sourcePath_str.match(/[^\/]+$/i);
                s.vimeoPlayer.loadVideo(t).then(function(e) {
                    (!o.isMobile_bl && (o.data.autoPlay_bl || o.isThumbClick_bl) || o.isAdd_bl || o.wasAdd_bl) && o.play(), s.setVolume(o.volume)
                }).catch(function(e) {
                    console && console.log(e), s.displayErrorId_to = setTimeout(function() {
                        s.dispatchEvent(i.ERROR, {
                            error: e.name
                        })
                    }, 2e3), console && console.log(e)
                })
            }, this.readyHandler = function() {
                if (clearTimeout(s.intitErrorId_to), s.contains(s.blackOverlay_do) && (clearTimeout(s.removeChildWithDelayId_to), s.removeChildWithDelayId_to = setTimeout(function() {
                        s.removeChild(s.blackOverlay_do)
                    }, 1500)), s.resizeAndPosition(), s.isReady_bl) {
                    try {
                        s.vimeoPlayer.api("setColor", "#FFFFFF")
                    } catch (e) {}
                    return o.videoType_str == FWDEVPlayer.VIMEO && s.setX(0), void(o.data.autoPlay_bl && o.play())
                }
                s.isReady_bl = !0, s.dispatchEvent(i.READY)
            }, this.loadedHandler = function() {
                s.isVideoLoaded_bl = !0
            }, this.playHandler = function() {
                clearInterval(s.startToPlayWithDelayId_to), clearTimeout(s.displayErrorId_to), s.isStopped_bl = !1, s.isSafeToBeControlled_bl = !0, s.isPlaying_bl = !0, s.startToUpdateSubtitles(), s.startToUpdate(), s.dispatchEvent(i.SAFE_TO_SCRUBB), s.dispatchEvent(i.PLAY), s.hasHours_bl = 0 < Math.floor(s.getDuration() / 3600)
            }, this.loadProgressHandler = function(e) {
                s.isShowed_bl || s.dispatchEvent(i.LOAD_PROGRESS, {
                    percent: e.percent
                })
            }, this.pauseHandler = function() {
                s.isPlaying_bl && (s.isPlaying_bl = !1, clearInterval(s.startToPlayWithDelayId_to), s.dispatchEvent(i.PAUSE), s.stopToUpdate())
            }, this.finishHandler = function() {
                o.data.loop_bl && (s.stop(), setTimeout(s.play, 200)), s.dispatchEvent(i.PLAY_COMPLETE)
            }, this.play = function(e) {
                FWDEVPlayer.curInstance = o;
                s.hasError_bl = !1, o.prevVideoType_str, FWDEVPlayer.VIMEO, s.vimeoPlayer.play(), s.isMobile_bl || (s.isStopped_bl = !1)
            }, this.pause = function() {
                s.isStopped_bl || s.hasError_bl || (clearInterval(s.startToPlayWithDelayId_to), s.vimeoPlayer.pause(), s.stopToUpdate())
            }, this.togglePlayPause = function() {
                s.isPlaying_bl ? s.pause() : s.play()
            }, this.resume = function() {
                s.isStopped_bl || s.play()
            }, this.startToUpdate = function() {
                clearInterval(s.updateVideoId_int), s.updateVideoId_int = setInterval(s.updateVideo, 500)
            }, this.stopToUpdate = function() {
                clearInterval(s.updateVideoId_int)
            }, this.updateVideo = function() {
                var e;
                if (s.vimeoPlayer) {
                    var t = s.formatTime(s.getDuration()),
                        o = s.formatTime(s.getCurrentTime());
                    e = s.getCurrentTime() / s.getDuration(), isNaN(e) && (e = 0), s.dispatchEvent(FWDEVPYoutubeScreen.UPDATE, {
                        percent: e
                    }), s.dispatchEvent(i.UPDATE_TIME, {
                        curTime: o,
                        totalTime: t,
                        seconds: parseInt(s.getCurrentTime()),
                        totalTimeInSeconds: s.getCurrentTime()
                    })
                } else stopToUpdate()
            }, this.stop = function(e) {
                s.isVideoLoaded_bl = !1, s.isStopped_bl || (clearInterval(s.startToPlayWithDelayId_to), clearTimeout(s.displayErrorId_to), s.stopVideo(), s.stopToUpdateSubtitles(), s.isPlaying_bl = !1, s.isStopped_bl = !0, s.isCued_bl = !1, s.allowScrubing_bl = !1, s.isSafeToBeControlled_bl = !1, s.isPausedInEvent_bl = !0, s.stopToUpdate(), e || (s.stopVideo(), s.dispatchEvent(i.STOP)))
            }, this.destroy = function() {
                s.iframe_do && (s.iframe_do.screen.removeAttribute("id", o.instanceName_str + "vimeo"), s.removeChild(s.iframe_do), s.iframe_do.destroy(), s.iframe_do = null), s.vimeoPlayer = null
            }, this.stopVideo = function() {
                s.vimeoPlayer.unload().then(function() {}).catch(function(e) {})
            }, this.startToScrub = function() {
                s.isSafeToBeControlled_bl && (s.allowScrubing_bl = !0)
            }, this.stopToScrub = function() {
                s.isSafeToBeControlled_bl && (s.allowScrubing_bl = !1)
            }, this.scrubbAtTime = function(e) {
                s.vimeoPlayer.setCurrentTime(e).then(function(e) {})
            }, this.scrub = function(e) {
                s.isSafeToBeControlled_bl && s.vimeoPlayer.setCurrentTime(e * s.getDuration()).then(function(e) {})
            }, this.setVolume = function(e) {
                null != e && (s.volume = e), s.vimeoPlayer && s.vimeoPlayer.setVolume(e)
            }, this.getDuration = function() {
                if (s.isSafeToBeControlled_bl) return s.vimeoPlayer.getDuration().then(function(e) {
                    s.duration = Math.round(e)
                }), s.duration
            }, this.getCurrentTime = function() {
                if (s.isSafeToBeControlled_bl) return s.vimeoPlayer.getCurrentTime().then(function(e) {
                    s.currentTime = Math.round(e)
                }), s.currentTime
            }, this.formatTime = function(e) {
                var t = Math.floor(e / 3600),
                    o = e % 3600,
                    s = Math.floor(o / 60),
                    i = o % 60,
                    n = Math.ceil(i);
                return s = 10 <= s ? s : "0" + s, n = 10 <= n ? n : "0" + n, isNaN(n) ? "00:00" : t ? 10 <= t ? t + ":" + s + ":" + n : "0" + t + ":" + s + ":" + n : s + ":" + n
            }, this.stopToUpdateSubtitles = function() {
                clearInterval(s.startToUpdateSubtitleId_int)
            }, this.startToUpdateSubtitles = function() {
                clearInterval(s.startToUpdateSubtitleId_int), s.startToUpdateSubtitleId_int = setInterval(s.updateSubtitleHandler, 10)
            }, this.updateSubtitleHandler = function() {
                s.getCurrentTime() && s.dispatchEvent(i.UPDATE_SUBTITLE, {
                    curTime: s.getCurrentTime()
                })
            }, this.init()
        };
        i.setPrototype = function() {
            i.prototype = new FWDEVPDisplayObject("div")
        }, i.UPDATE_SUBTITLE = "updateSubtitle", i.SAFE_TO_SCRUBB = "safeToScrub", i.READY = "ready", i.ERROR = "initError", i.UPDATE = "update", i.UPDATE_TIME = "updateTime", i.LOAD_PROGRESS = "loadProgress", i.PLAY = "play", i.PAUSE = "pause", i.STOP = "stop", i.PLAY_COMPLETE = "playComplete", i.CUED = "cued", i.QUALITY_CHANGE = "qualityChange", e.FWDEVPVimeoScreen = i
    }(window),
    function(e) {
        var _ = function(e, t, o, s, i, n, l, r, a, d) {
            var u = this,
                h = _.prototype;
            this.iconCSSString1 = l, this.iconCSSString2 = r, this.nImg = e, this.sPath_str = t, this.dPath_str = o, this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.nImg && (this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height), this.normalCalssName = a, this.selectedCalssName = d, this.useHEXColorsForSkin_bl = s, this.normalButtonsColor_str = i, this.selectedButtonsColor_str = n, this.isSetToDisabledState_bl = !1, this.isDisabled_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !0, this.useFontAwesome_bl = Boolean(this.iconCSSString1), u.init = function() {
                u.setupMainContainers(), u.setNormalState(!1)
            }, u.setupMainContainers = function() {
                if (u.useFontAwesome_bl) u.n_sdo = new FWDEVPTransformDisplayObject("div"), u.n_sdo.setInnerHTML(u.iconCSSString1), u.addChild(u.n_sdo), u.d_sdo = new FWDEVPTransformDisplayObject("div"), u.d_sdo.setInnerHTML(u.iconCSSString2), u.addChild(u.d_sdo), u.setFinalSize();
                else if (u.useHEXColorsForSkin_bl ? (u.n_sdo = new FWDEVPTransformDisplayObject("div"), u.n_sdo.setWidth(u.totalWidth), u.n_sdo.setHeight(u.totalHeight), u.n_sdo_canvas = FWDEVPUtils.getCanvasWithModifiedColor(u.nImg, u.normalButtonsColor_str).canvas, u.n_sdo.screen.appendChild(u.n_sdo_canvas)) : (u.n_sdo = new FWDEVPTransformDisplayObject("img"), u.n_sdo.setScreen(u.nImg)), u.addChild(u.n_sdo), u.allowToCreateSecondButton_bl) {
                    u.img1 = new Image, u.img1.src = u.sPath_str;
                    var e = new Image;
                    u.sImg = e, u.useHEXColorsForSkin_bl ? (u.s_sdo = new FWDEVPTransformDisplayObject("div"), u.s_sdo.setWidth(u.totalWidth), u.s_sdo.setHeight(u.totalHeight), u.img1.onload = function() {
                        u.s_sdo_canvas = FWDEVPUtils.getCanvasWithModifiedColor(u.img1, u.selectedButtonsColor_str).canvas, u.s_sdo.screen.appendChild(u.s_sdo_canvas)
                    }) : (u.s_sdo = new FWDEVPDisplayObject("img"), u.s_sdo.setScreen(u.img1), u.s_sdo.setWidth(u.totalWidth), u.s_sdo.setHeight(u.totalHeight)), u.s_sdo.setAlpha(0), u.addChild(u.s_sdo), u.dPath_str && (e.src = u.dPath_str, u.d_sdo = new FWDEVPDisplayObject("img"), u.d_sdo.setScreen(e), u.d_sdo.setWidth(u.totalWidth), u.d_sdo.setHeight(u.totalHeight), u.d_sdo.setX(-100), u.addChild(u.d_sdo))
                }
                u.setWidth(u.totalWidth), u.setHeight(u.totalHeight), u.setButtonMode(!0), u.hasPointerEvent_bl ? (u.screen.addEventListener("pointerup", u.onMouseUp), u.screen.addEventListener("pointerover", u.onMouseOver), u.screen.addEventListener("pointerout", u.onMouseOut)) : u.screen.addEventListener && (u.screen.addEventListener("mouseover", u.onMouseOver), u.screen.addEventListener("mouseout", u.onMouseOut), u.screen.addEventListener("mouseup", u.onMouseUp), u.screen.addEventListener("touchend", u.onMouseUp))
            }, this.setFinalSize = function() {
                u.setWidth(u.n_sdo.getWidth()), u.setHeight(u.n_sdo.getHeight()), 0 == u.w && setTimeout(function() {
                    u.setFinalSize()
                }, 200)
            }, this.setNormalState = function(e) {
                u.useFontAwesome_bl ? (FWDAnimation.killTweensOf(u.n_sdo.screen), FWDAnimation.killTweensOf(u.d_sdo.screen), e ? (FWDAnimation.to(u.n_sdo.screen, .8, {
                    className: u.normalCalssName,
                    ease: Expo.easeOut
                }), FWDAnimation.to(u.d_sdo.screen, .8, {
                    className: u.normalCalssName,
                    ease: Expo.easeOut
                })) : (u.n_sdo.screen.className = u.normalCalssName, u.d_sdo.screen.className = u.normalCalssName)) : (FWDAnimation.killTweensOf(u.s_sdo), FWDAnimation.to(u.s_sdo, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, this.setSelectedState = function(e) {
                u.useFontAwesome_bl ? (FWDAnimation.killTweensOf(u.n_sdo.screen), FWDAnimation.killTweensOf(u.d_sdo.screen), e ? (FWDAnimation.to(u.n_sdo.screen, .8, {
                    className: u.selectedCalssName,
                    ease: Expo.easeOut
                }), FWDAnimation.to(u.d_sdo.screen, .8, {
                    className: u.selectedCalssName,
                    ease: Expo.easeOut
                })) : (u.n_sdo.screen.className = u.selectedCalssName, u.d_sdo.screen.className = u.selectedCalssName)) : (FWDAnimation.killTweensOf(u.s_sdo), FWDAnimation.to(u.s_sdo, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                }))
            }, u.onMouseOver = function(e) {
                if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                    if (u.isDisabled_bl || u.isSelectedFinal_bl) return;
                    u.dispatchEvent(_.MOUSE_OVER, {
                        e: e
                    }), u.setSelectedState(!0)
                }
            }, u.onMouseOut = function(e) {
                if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                    if (u.isDisabled_bl || u.isSelectedFinal_bl) return;
                    u.dispatchEvent(_.MOUSE_OUT, {
                        e: e
                    }), u.setNormalState(!0)
                }
            }, u.onMouseUp = function(e) {
                e.preventDefault && e.preventDefault(), u.isDisabled_bl || 2 == e.button || u.isSelectedFinal_bl || u.dispatchEvent(_.MOUSE_UP, {
                    e: e
                })
            }, u.setSelctedFinal = function() {
                u.isSelectedFinal_bl = !0, FWDAnimation.killTweensOf(u.s_sdo), FWDAnimation.to(u.s_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), u.setButtonMode(!1)
            }, u.setUnselctedFinal = function() {
                u.isSelectedFinal_bl = !1, FWDAnimation.to(u.s_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut
                }), u.setButtonMode(!0)
            }, this.setDisabledState = function() {
                u.isSetToDisabledState_bl || (u.isSetToDisabledState_bl = !0, u.useFontAwesome_bl ? u.n_sdo.setX(-1e4) : (u.d_sdo.setX(0), FWDAnimation.killTweensOf(u.d_sdo), FWDAnimation.to(u.d_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })))
            }, this.setEnabledState = function() {
                u.isSetToDisabledState_bl && (u.isSetToDisabledState_bl = !1, u.useFontAwesome_bl ? u.n_sdo.setX(0) : (u.d_sdo.setX(-100), FWDAnimation.killTweensOf(u.d_sdo), FWDAnimation.to(u.d_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut
                })))
            }, this.disable = function() {
                u.isDisabled_bl = !0, u.setButtonMode(!1)
            }, this.enable = function() {
                u.isDisabled_bl = !1, u.setButtonMode(!0)
            }, u.updateHEXColors = function(e, t) {
                FWDEVPUtils.changeCanvasHEXColor(u.nImg, u.n_sdo_canvas, e), FWDEVPUtils.changeCanvasHEXColor(u.img1, u.s_sdo_canvas, t)
            }, u.destroy = function() {
                u.isMobile_bl ? u.hasPointerEvent_bl ? (u.screen.removeEventListener("pointerdown", u.onMouseUp), u.screen.removeEventListener("pointerover", u.onMouseOver), u.screen.removeEventListener("pointerout", u.onMouseOut)) : u.screen.removeEventListener("touchend", u.onMouseUp) : u.screen.removeEventListener ? (u.screen.removeEventListener("mouseover", u.onMouseOver), u.screen.removeEventListener("mouseout", u.onMouseOut), u.screen.removeEventListener("mousedown", u.onMouseUp)) : u.screen.detachEvent && (u.screen.detachEvent("onmouseover", u.onMouseOver), u.screen.detachEvent("onmouseout", u.onMouseOut), u.screen.detachEvent("onmousedown", u.onMouseUp)), FWDAnimation.killTweensOf(u.s_sdo), u.n_sdo.destroy(), u.s_sdo.destroy(), u.d_sdo && (FWDAnimation.killTweensOf(u.d_sdo), u.d_sdo.destroy()), u.nImg = null, u.sImg = null, u.dImg = null, u.n_sdo = null, u.s_sdo = null, u.d_sdo = null, sImg = e = null, dImg = null, u.toolTipLabel_str = null, u.init = null, u.setupMainContainers = null, u.onMouseOver = null, u.onMouseOut = null, u.onClick = null, u.onMouseDown = null, u.setSelctedFinal = null, u.setUnselctedFinal = null, u.setInnerHTML(""), h.destroy(), h = u = null, _.prototype = null
            }, u.init()
        };
        _.setPrototype = function() {
            _.prototype = null, _.prototype = new FWDEVPDisplayObject("div")
        }, _.CLICK = "onClick", _.MOUSE_OVER = "onMouseOver", _.MOUSE_OUT = "onMouseOut", _.MOUSE_UP = "onMouseDown", _.prototype = null, e.FWDEVPVolumeButton = _
    }(window),
    function(e) {
        var s = function(t, e) {
            var l = this;
            s.prototype;
            this.main_do = null, this.ytb = null, this.lastQuality_str = "auto", this.volume = e, this.updateVideoId_int, this.updatePreloadId_int, this.controllerHeight = t.data.controllerHeight, this.hasHours_bl = !1, this.hasBeenCreatedOnce_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !1, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isPausedInEvent_bl = !0, this.isShowed_bl = !0, this.isCued_bl = !1, this.isQualityArrayDisapatched_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
                l.hasTransform3d_bl = !1, l.hasTransform2d_bl = !1, l.setBackfaceVisibility(), t.main_do.addChildAt(l, 0), l.resizeAndPosition(), l.setupVideo(), l.setupDisableClick(), l.setWidth(1), l.setHeight(1)
            }, this.setupDisableClick = function() {
                l.disableClick_do = new FWDEVPDisplayObject("div"), l.disableClick_do.setBkColor(t.backgroundColor_str), l.addChild(l.disableClick_do)
            }, this.showDisable = function() {
                t.tempVidStageWidth && l.disableClick_do.w != l.stageWidth && (l.disableClick_do.setWidth(t.tempVidStageWidth), FWDEVPUtils.isIphone ? l.disableClick_do.setHeight(t.tempVidStageHeight - l.controllerHeight) : l.disableClick_do.setHeight(t.tempVidStageHeight))
            }, this.hideDisable = function() {
                0 != l.disableClick_do.w && (l.disableClick_do.setWidth(0), l.disableClick_do.setHeight(0))
            }, this.setupVideo = function() {
                l.ytb || (l.main_do = new FWDEVPDisplayObject("div"), l.main_do.hasTransform3d_bl = !1, l.main_do.hasTransform2d_bl = !1, l.main_do.screen.setAttribute("id", t.instanceName_str + "youtube"), l.main_do.getStyle().width = "100%", l.main_do.getStyle().height = "100%", l.main_do.setBackfaceVisibility(), l.addChild(l.main_do), l.ytb = new YT.Player(t.instanceName_str + "youtube", {
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        controls: 0,
                        disablekb: 0,
                        loop: 0,
                        autoplay: 0,
                        wmode: "opaque",
                        showinfo: 0,
                        rel: 0,
                        modestbranding: 1,
                        iv_load_policy: 3,
                        cc_load_policy: 0,
                        fs: 0,
                        html5: 0,
                        playsinline: 1
                    },
                    events: {
                        onReady: l.playerReadyHandler,
                        onError: l.playerErrorHandler,
                        onStateChange: l.stateChangeHandler,
                        onPlaybackQualityChange: l.qualityChangeHandler
                    }
                }))
            }, this.playerReadyHandler = function() {
                !l.ytb || l.ytb.playVideo || l.ytb.cueVideoById ? (clearInterval(l.updateReadyId_int), l.resizeAndPosition(), l.dispatchEvent(s.READY), l.hasBeenCreatedOnce_bl = !0) : l.updateReadyId_int = setInterval(function() {
                    l.playerReadyHandler()
                }, 50)
            }, this.stateChangeHandler = function(e) {
                if (e.data == YT.PlayerState.PLAYING) l.isSafeToBeControlled_bl || (l.isStopped_bl = !1, l.isSafeToBeControlled_bl = !0, l.isPlaying_bl = !0, l.hasHours_bl = 0 < Math.floor(l.ytb.getDuration() / 3600), l.setVolume(t.volume), l.startToUpdate(), l.startToPreload(), l.isMobile_bl || l.ytb.seekTo(1e-6), l.isMobile_bl || l.setQuality(l.lastQuality_str), l.ytb.getAvailableQualityLevels() && 0 != l.ytb.getAvailableQualityLevels().length && l.dispatchEvent(s.QUALITY_CHANGE, {
                    qualityLevel: l.ytb.getPlaybackQuality(),
                    levels: l.ytb.getAvailableQualityLevels()
                }), l.setPlaybackRate(), l.dispatchEvent(s.SAFE_TO_SCRUBB)), l.startToUpdateSubtitles(), l.isPausedInEvent_bl && l.dispatchEvent(s.PLAY), l.isPausedInEvent_bl = !1, l.hasError_bl = !1;
                else if (e.data == YT.PlayerState.PAUSED) {
                    if (!l.isSafeToBeControlled_bl) return;
                    l.isPausedInEvent_bl || l.dispatchEvent(s.PAUSE), l.isPausedInEvent_bl = !0
                } else e.data == YT.PlayerState.ENDED ? l.ytb.getCurrentTime() && 0 < l.ytb.getCurrentTime() && l.isSafeToBeControlled_bl && (l.stopToUpdateSubtitles(), setTimeout(function() {
                    l.dispatchEvent(s.PLAY_COMPLETE)
                }, 100)) : e.data == YT.PlayerState.CUED && (l.isStopped_bl || l.dispatchEvent(s.CUED), l.isCued_bl = !0)
            }, this.qualityChangeHandler = function(e) {
                l.ytb.getAvailableQualityLevels() && 0 != l.ytb.getAvailableQualityLevels().length && l.dispatchEvent(s.QUALITY_CHANGE, {
                    qualityLevel: l.ytb.getPlaybackQuality()
                })
            }, this.playerErrorHandler = function(e) {
                if (l.isPausedInEvent_bl = !0, !l.isStopped_bl && !l.hasError_bl && l.sourcePath_str) {
                    var t = "";
                    l.hasError_bl = !0, 2 == e.data ? t = "The youtube id is not well formatted, make sure it has exactly 11 characters and that it dosn't contain invalid characters such as exclamation points or asterisks." : 5 == e.data ? t = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred." : 100 == e.data ? t = "The youtube video request was not found, probably the video ID is incorrect." : 101 != e.data && 150 != e.data || (t = "The owner of the requested video does not allow it to be played in embedded players."), l.dispatchEvent(s.ERROR, {
                        text: t
                    })
                }
            }, this.resizeAndPosition = function() {
                t.tempVidStageWidth && (l.setX(-1), l.setY(-1), l.setWidth(t.tempVidStageWidth + 2), l.setHeight(t.tempVidStageHeight + 2))
            }, this.setSource = function(e) {
                e && (l.sourcePath_str = e), l.ytb.cueVideoById(l.sourcePath_str), l.isMobile_bl || (l.isStopped_bl = !1)
            }, this.play = function(e) {
                FWDEVPlayer.curInstance = t, l.isPlaying_bl = !0, l.hasError_bl = !1, l.ytb.playVideo(), l.startToUpdate(), l.isMobile_bl || (l.isStopped_bl = !1)
            }, this.pause = function() {
                if (!l.isStopped_bl && !l.hasError_bl) {
                    l.isPlaying_bl = !1;
                    try {
                        l.ytb.pauseVideo()
                    } catch (e) {}
                    l.stopToUpdate()
                }
            }, this.togglePlayPause = function() {
                l.isPlaying_bl ? l.pause() : l.play()
            }, this.resume = function() {
                l.isStopped_bl || l.play()
            }, this.startToUpdate = function() {
                clearInterval(l.updateVideoId_int), l.updateVideoId_int = setInterval(l.updateVideo, 500)
            }, this.stopToUpdate = function() {
                clearInterval(l.updateVideoId_int)
            }, this.updateVideo = function() {
                var e;
                if (l.ytb) {
                    l.allowScrubing_bl || (e = l.ytb.getCurrentTime() / l.ytb.getDuration(), l.dispatchEvent(s.UPDATE, {
                        percent: e
                    }));
                    var t = l.formatTime(l.ytb.getDuration()),
                        o = l.formatTime(l.ytb.getCurrentTime());
                    l.dispatchEvent(s.UPDATE_TIME, {
                        curTime: o,
                        totalTime: t,
                        seconds: parseInt(l.ytb.getCurrentTime())
                    })
                } else stopToUpdate()
            }, this.startToPreload = function() {
                clearInterval(l.preloadVideoId_int), l.updatePreloadId_int = setInterval(l.updateProgress, 500)
            }, this.stopToPreload = function() {
                clearInterval(l.updatePreloadId_int)
            }, this.updateProgress = function() {
                if (l.ytb) {
                    var e = l.ytb.getVideoLoadedFraction();
                    l.dispatchEvent(s.LOAD_PROGRESS, {
                        percent: e
                    })
                } else stopToPreload()
            }, this.stop = function() {
                l.isStopped_bl || (l.isPlaying_bl = !1, l.isStopped_bl = !0, l.isCued_bl = !1, l.allowScrubing_bl = !1, l.isSafeToBeControlled_bl = !1, l.isQualityArrayDisapatched_bl = !1, l.isPausedInEvent_bl = !0, clearInterval(l.updateReadyId_int), l.stopToUpdateSubtitles(), l.stopToUpdate(), l.stopToPreload(), l.stopVideo(), l.dispatchEvent(s.STOP), l.dispatchEvent(s.LOAD_PROGRESS, {
                    percent: 0
                }), l.dispatchEvent(s.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00"
                }))
            }, this.destroyYoutube = function() {
                l.main_do && (l.main_do.screen.removeAttribute("id", t.instanceName_str + "youtube"), l.main_do.destroy(), l.main_do = null), l.ytb && l.ytb.destroy(), l.ytb = null
            }, this.stopVideo = function() {
                l.ytb && l.ytb.cueVideoById && l.ytb.cueVideoById(l.sourcePath_str)
            }, this.startToScrub = function() {
                l.isSafeToBeControlled_bl && (l.allowScrubing_bl = !0)
            }, this.scrubbAtTime = function(e) {
                l.isSafeToBeControlled_bl && l.ytb.seekTo(e)
            }, this.stopToScrub = function() {
                l.isSafeToBeControlled_bl && (l.allowScrubing_bl = !1)
            }, this.scrub = function(e) {
                l.isSafeToBeControlled_bl && l.ytb.seekTo(e * l.ytb.getDuration())
            }, this.setPlaybackRate = function(e) {
                l.ytb && !l.isMobile_bl && (e && (l.rate = e), l.ytb && l.ytb.setPlaybackRate && l.ytb.setPlaybackRate(l.rate))
            }, this.setVolume = function(e) {
                null != e && (l.volume = e), l.ytb && l.ytb.setVolume(100 * e)
            }, this.stopToUpdateSubtitles = function() {
                clearInterval(l.startToUpdateSubtitleId_int)
            }, this.startToUpdateSubtitles = function() {
                clearInterval(l.startToUpdateSubtitleId_int), l.startToUpdateSubtitleId_int = setInterval(l.updateSubtitleHandler, 10)
            }, this.updateSubtitleHandler = function() {
                l.dispatchEvent(s.UPDATE_SUBTITLE, {
                    curTime: l.ytb.getCurrentTime()
                })
            }, this.setQuality = function(e) {
                l.lastQuality_str = e, l.ytb.setPlaybackQuality(e)
            }, this.formatTime = function(e) {
                var t = Math.floor(e / 3600),
                    o = e % 3600,
                    s = Math.floor(o / 60),
                    i = o % 60,
                    n = Math.ceil(i);
                return s = 10 <= s ? s : "0" + s, n = 10 <= n ? n : "0" + n, isNaN(n) ? "00:00" : l.hasHours_bl ? t + ":" + s + ":" + n : s + ":" + n
            }, this.init()
        };
        s.setPrototype = function() {
            s.prototype = new FWDEVPDisplayObject("div")
        }, s.UPDATE_SUBTITLE = "updateSubtitle", s.READY = "ready", s.ERROR = "error", s.UPDATE = "update", s.UPDATE_TIME = "updateTime", s.SAFE_TO_SCRUBB = "safeToControll", s.LOAD_PROGRESS = "loadProgress", s.PLAY = "play", s.PAUSE = "pause", s.STOP = "stop", s.PLAY_COMPLETE = "playComplete", s.CUED = "cued", s.QUALITY_CHANGE = "qualityChange", e.FWDEVPYoutubeScreen = s
    }(window),
    function() {
        var l = function(e, t, o, s, i) {
            var n = this;
            l.prototype;
            this.text_do = null, this.hd_do = null, this.dumy_do = null, this.label_str = e, this.normalColor_str = t, this.selectedColor_str = o, this.hdPath_str = s, this.id = i, this.totalWidth = 0, this.totalHeight = 23, this.hdWidth = 7, this.hdHeight = 5, this.hasHd_bl = n.hdPath_str, this.isMobile_bl = FWDEVPUtils.isMobile, this.isDisabled_bl = !1, this.init = function() {
                n.setBackfaceVisibility(), n.setupMainContainers(), n.setHeight(n.totalHeight)
            }, this.setupMainContainers = function() {
                if (n.text_do = new FWDEVPDisplayObject("div"), n.text_do.setBackfaceVisibility(), n.text_do.hasTransform3d_bl = !1, n.text_do.hasTransform2d_bl = !1, n.text_do.getStyle().display = "inline-block", n.text_do.getStyle().whiteSpace = "nowrap", n.text_do.getStyle().fontFamily = "Arial", n.text_do.getStyle().fontSize = "12px", n.text_do.getStyle().color = n.normalColor_str, n.text_do.getStyle().fontSmoothing = "antialiased", n.text_do.getStyle().webkitFontSmoothing = "antialiased", n.text_do.getStyle().textRendering = "optimizeLegibility", n.text_do.setInnerHTML(n.label_str), n.addChild(n.text_do), n.hasHd_bl) {
                    var e = new Image;
                    e.src = n.hdPath_str, n.hd_do = new FWDEVPDisplayObject("img"), n.hd_do.setScreen(e), n.hd_do.setWidth(n.hdWidth), n.hd_do.setHeight(n.hdHeight), n.addChild(n.hd_do)
                }
                n.dumy_do = new FWDEVPDisplayObject("div"), FWDEVPUtils.isIE && (n.dumy_do.setBkColor("#FF0000"), n.dumy_do.setAlpha(1e-4)), n.dumy_do.setButtonMode(!0), n.dumy_do.setHeight(n.totalHeight), n.addChild(n.dumy_do), n.hasPointerEvent_bl ? (n.screen.addEventListener("pointerup", n.onMouseUp), n.screen.addEventListener("pointerover", n.onMouseOver), n.screen.addEventListener("pointerout", n.onMouseOut)) : n.screen.addEventListener && (n.isMobile_bl || (n.screen.addEventListener("mouseover", n.onMouseOver), n.screen.addEventListener("mouseout", n.onMouseOut), n.screen.addEventListener("mouseup", n.onMouseUp)), n.screen.addEventListener("touchend", n.onMouseUp))
            }, this.onMouseOver = function(e) {
                n.isDisabled_bl || (n.setSelectedState(!0), n.dispatchEvent(l.MOUSE_OVER, {
                    e: e,
                    id: n.id
                }))
            }, this.onMouseOut = function(e) {
                n.isDisabled_bl || (n.setNormalState(!0), n.dispatchEvent(l.MOUSE_OUT, {
                    e: e,
                    id: n.id
                }))
            }, this.onMouseUp = function(e) {
                n.isDisabled_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), n.dispatchEvent(l.CLICK, {
                    e: e,
                    id: n.id
                }))
            }, this.setFinalSize = function() {
                if (0 == n.text_do.x) {
                    var e = n.text_do.getWidth() + 34,
                        t = n.text_do.getHeight();
                    n.text_do.setX(18), n.text_do.setY(parseInt((n.totalHeight - t) / 2)), n.hd_do && (n.hd_do.setX(e - 12), n.hd_do.setY(n.text_do.y + 1)), n.dumy_do.setWidth(e), n.setWidth(e)
                }
            }, this.updateText = function(e) {
                this.label_str = e, this.text_do.setInnerHTML(n.label_str), n.hd_do && ("highres" == n.label_str || "hd1080" == n.label_str || "hd720" == n.label_str || "hd1440" == n.label_str || "hd2160" == n.label_str ? n.hd_do.setVisible(!0) : n.hd_do.setVisible(!1))
            }, this.setSelectedState = function(e) {
                this.isSelected_bl = !0, FWDAnimation.killTweensOf(n.text_do), e ? FWDAnimation.to(n.text_do.screen, .5, {
                    css: {
                        color: n.selectedColor_str
                    },
                    ease: Expo.easeOut
                }) : n.text_do.getStyle().color = n.selectedColor_str
            }, this.setNormalState = function(e) {
                this.isSelected_bl = !1, FWDAnimation.killTweensOf(n.text_do), e ? FWDAnimation.to(n.text_do.screen, .5, {
                    css: {
                        color: n.normalColor_str
                    },
                    ease: Expo.easeOut
                }) : n.text_do.getStyle().color = n.normalColor_str
            }, this.disable = function() {
                n.isDisabled_bl = !0, FWDAnimation.killTweensOf(n.text_do), n.setSelectedState(!0), n.dumy_do.setButtonMode(!1)
            }, this.enable = function() {
                n.isDisabled_bl = !1, FWDAnimation.killTweensOf(n.text_do), n.setNormalState(!0), n.dumy_do.setButtonMode(!0)
            }, n.init()
        };
        l.setPrototype = function() {
            l.prototype = new FWDEVPDisplayObject("div")
        }, l.MOUSE_OVER = "onMouseOver", l.MOUSE_OUT = "onMouseOut", l.CLICK = "onClick", l.prototype = null, window.FWDEVPYTBQButton = l
    }(window),
    function(d) {
        var e = navigator.platform,
            t = !1;
        if ("iPad" != e && "iPhone" != e || (t = !0), t) {
            var o = !1;
            if (-1 != navigator.userAgent.indexOf("6") && (o = !0), o) {
                var s = {},
                    i = {},
                    n = d.setTimeout,
                    u = d.setInterval,
                    l = d.clearTimeout,
                    r = d.clearInterval;
                d.setTimeout = function() {
                    return a(n, s, arguments)
                }, d.setInterval = function() {
                    return a(u, i, arguments)
                }, d.clearTimeout = function(e) {
                    var t = s[e];
                    t && (delete s[e], l(t.id))
                }, d.clearInterval = function(e) {
                    var t = i[e];
                    t && (delete i[e], r(t.id))
                }, d.addEventListener("scroll", function() {
                    var e;
                    for (e in s) h(n, l, s, e);
                    for (e in i) h(u, r, i, e)
                })
            }
        }

        function a(e, t, o) {
            var s, i = o[0],
                n = e === u;
            return o[0] = function() {
                i && (i.apply(d, arguments), n || (delete t[s], i = null))
            }, s = e.apply(d, o), t[s] = {
                args: o,
                created: Date.now(),
                cb: i,
                id: s
            }, s
        }

        function h(e, t, o, s, i) {
            var n = o[s];
            if (n) {
                var l = e === u;
                if (t(n.id), !l) {
                    var r = n.args[1],
                        a = Date.now() - n.created;
                    a < 0 && (a = 0), (r -= a) < 0 && (r = 0), n.args[1] = r
                }
                n.args[0] = function() {
                    n.cb && (n.cb.apply(d, arguments), l || (delete o[s], n.cb = null))
                }, n.created = Date.now(), n.id = e.apply(d, n.args)
            }
        }
    }(window);
