! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Hls = e() : t.Hls = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (r[i]) return r[i].exports;
            var a = r[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(a.exports, a, a.exports, e), a.l = !0, a.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.d = function(t, r, i) {
            e.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, e.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "/dist/", e(e.s = 8)
    }([function(t, e, r) {
        "use strict";

        function i() {}

        function a(t, e) {
            return e = "[" + t + "] > " + e
        }

        function n(t) {
            var e = self.console[t];
            return e ? function() {
                for (var r = arguments.length, i = Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                i[0] && (i[0] = a(t, i[0])), e.apply(self.console, i)
            } : i
        }

        function o(t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
            r.forEach(function(e) {
                u[e] = t[e] ? t[e].bind(t) : n(e)
            })
        }
        r.d(e, "a", function() {
            return d
        }), r.d(e, "b", function() {
            return h
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            l = {
                trace: i,
                debug: i,
                log: i,
                warn: i,
                info: i,
                error: i
            },
            u = l,
            d = function(t) {
                if (!0 === t || "object" === (void 0 === t ? "undefined" : s(t))) {
                    o(t, "debug", "log", "info", "warn", "error");
                    try {
                        u.log()
                    } catch (t) {
                        u = l
                    }
                } else u = l
            },
            h = u
    }, function(t, e, r) {
        "use strict";
        e.a = {
            MEDIA_ATTACHING: "hlsMediaAttaching",
            MEDIA_ATTACHED: "hlsMediaAttached",
            MEDIA_DETACHING: "hlsMediaDetaching",
            MEDIA_DETACHED: "hlsMediaDetached",
            BUFFER_RESET: "hlsBufferReset",
            BUFFER_CODECS: "hlsBufferCodecs",
            BUFFER_CREATED: "hlsBufferCreated",
            BUFFER_APPENDING: "hlsBufferAppending",
            BUFFER_APPENDED: "hlsBufferAppended",
            BUFFER_EOS: "hlsBufferEos",
            BUFFER_FLUSHING: "hlsBufferFlushing",
            BUFFER_FLUSHED: "hlsBufferFlushed",
            MANIFEST_LOADING: "hlsManifestLoading",
            MANIFEST_LOADED: "hlsManifestLoaded",
            MANIFEST_PARSED: "hlsManifestParsed",
            LEVEL_SWITCH: "hlsLevelSwitch",
            LEVEL_SWITCHING: "hlsLevelSwitching",
            LEVEL_SWITCHED: "hlsLevelSwitched",
            LEVEL_LOADING: "hlsLevelLoading",
            LEVEL_LOADED: "hlsLevelLoaded",
            LEVEL_UPDATED: "hlsLevelUpdated",
            LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
            AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
            AUDIO_TRACK_SWITCH: "hlsAudioTrackSwitch",
            AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
            AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
            AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
            AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
            SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
            SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
            SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
            SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
            SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
            INIT_PTS_FOUND: "hlsInitPtsFound",
            FRAG_LOADING: "hlsFragLoading",
            FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
            FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
            FRAG_LOADED: "hlsFragLoaded",
            FRAG_DECRYPTED: "hlsFragDecrypted",
            FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
            FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
            FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
            FRAG_PARSING_DATA: "hlsFragParsingData",
            FRAG_PARSED: "hlsFragParsed",
            FRAG_BUFFERED: "hlsFragBuffered",
            FRAG_CHANGED: "hlsFragChanged",
            FPS_DROP: "hlsFpsDrop",
            FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
            ERROR: "hlsError",
            DESTROYING: "hlsDestroying",
            KEY_LOADING: "hlsKeyLoading",
            KEY_LOADED: "hlsKeyLoaded",
            STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
        }
    }, function(t, e, r) {
        "use strict";
        r.d(e, "b", function() {
            return i
        }), r.d(e, "a", function() {
            return a
        });
        var i = {
                NETWORK_ERROR: "networkError",
                MEDIA_ERROR: "mediaError",
                MUX_ERROR: "muxError",
                OTHER_ERROR: "otherError"
            },
            a = {
                MANIFEST_LOAD_ERROR: "manifestLoadError",
                MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
                MANIFEST_PARSING_ERROR: "manifestParsingError",
                MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
                LEVEL_LOAD_ERROR: "levelLoadError",
                LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
                LEVEL_SWITCH_ERROR: "levelSwitchError",
                AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
                AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
                FRAG_LOAD_ERROR: "fragLoadError",
                FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError",
                FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
                FRAG_DECRYPT_ERROR: "fragDecryptError",
                FRAG_PARSING_ERROR: "fragParsingError",
                REMUX_ALLOC_ERROR: "remuxAllocError",
                KEY_LOAD_ERROR: "keyLoadError",
                KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
                BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
                BUFFER_APPEND_ERROR: "bufferAppendError",
                BUFFER_APPENDING_ERROR: "bufferAppendingError",
                BUFFER_STALLED_ERROR: "bufferStalledError",
                BUFFER_FULL_ERROR: "bufferFullError",
                BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
                BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
                INTERNAL_EXCEPTION: "internalException"
            }
    }, function(t, e, r) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        r.d(e, "b", function() {
            return n
        });
        var a = function() {
                function t() {
                    i(this, t)
                }
                return t.isHeader = function(t, e) {
                    return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                }, t.isFooter = function(t, e) {
                    return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                }, t.getID3Data = function(e, r) {
                    for (var i = r, a = 0; t.isHeader(e, r);) {
                        a += 10;
                        a += t._readSize(e, r + 6), t.isFooter(e, r + 10) && (a += 10), r += a
                    }
                    if (a > 0) return e.subarray(i, i + a)
                }, t._readSize = function(t, e) {
                    var r = 0;
                    return r = (127 & t[e]) << 21, r |= (127 & t[e + 1]) << 14, r |= (127 & t[e + 2]) << 7, r |= 127 & t[e + 3]
                }, t.getTimeStamp = function(e) {
                    for (var r = t.getID3Frames(e), i = 0; i < r.length; i++) {
                        var a = r[i];
                        if (t.isTimeStampFrame(a)) return t._readTimeStamp(a)
                    }
                }, t.isTimeStampFrame = function(t) {
                    return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
                }, t._getFrameData = function(e) {
                    var r = String.fromCharCode(e[0], e[1], e[2], e[3]),
                        i = t._readSize(e, 4);
                    return {
                        type: r,
                        size: i,
                        data: e.subarray(10, 10 + i)
                    }
                }, t.getID3Frames = function(e) {
                    for (var r = 0, i = []; t.isHeader(e, r);) {
                        var a = t._readSize(e, r + 6);
                        r += 10;
                        for (var n = r + a; r + 8 < n;) {
                            var o = t._getFrameData(e.subarray(r)),
                                s = t._decodeFrame(o);
                            s && i.push(s), r += o.size + 10
                        }
                        t.isFooter(e, r) && (r += 10)
                    }
                    return i
                }, t._decodeFrame = function(e) {
                    return "PRIV" === e.type ? t._decodePrivFrame(e) : "T" === e.type[0] ? t._decodeTextFrame(e) : "W" === e.type[0] ? t._decodeURLFrame(e) : void 0
                }, t._readTimeStamp = function(t) {
                    if (8 === t.data.byteLength) {
                        var e = new Uint8Array(t.data),
                            r = 1 & e[3],
                            i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                        return i /= 45, r && (i += 47721858.84), Math.round(i)
                    }
                }, t._decodePrivFrame = function(e) {
                    if (!(e.size < 2)) {
                        var r = t._utf8ArrayToStr(e.data),
                            i = new Uint8Array(e.data.subarray(r.length + 1));
                        return {
                            key: e.type,
                            info: r,
                            data: i.buffer
                        }
                    }
                }, t._decodeTextFrame = function(e) {
                    if (!(e.size < 2)) {
                        if ("TXXX" === e.type) {
                            var r = 1,
                                i = t._utf8ArrayToStr(e.data.subarray(r));
                            r += i.length + 1;
                            var a = t._utf8ArrayToStr(e.data.subarray(r));
                            return {
                                key: e.type,
                                info: i,
                                data: a
                            }
                        }
                        var n = t._utf8ArrayToStr(e.data.subarray(1));
                        return {
                            key: e.type,
                            data: n
                        }
                    }
                }, t._decodeURLFrame = function(e) {
                    if ("WXXX" === e.type) {
                        if (e.size < 2) return;
                        var r = 1,
                            i = t._utf8ArrayToStr(e.data.subarray(r));
                        r += i.length + 1;
                        var a = t._utf8ArrayToStr(e.data.subarray(r));
                        return {
                            key: e.type,
                            info: i,
                            data: a
                        }
                    }
                    var n = t._utf8ArrayToStr(e.data);
                    return {
                        key: e.type,
                        data: n
                    }
                }, t._utf8ArrayToStr = function(t) {
                    for (var e = t.length, r = void 0, i = void 0, a = void 0, n = "", o = 0; o < e;)
                        if (0 !== (r = t[o++]) && 3 !== r) switch (r >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                n += String.fromCharCode(r);
                                break;
                            case 12:
                            case 13:
                                i = t[o++], n += String.fromCharCode((31 & r) << 6 | 63 & i);
                                break;
                            case 14:
                                i = t[o++], a = t[o++], n += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | (63 & a) << 0)
                        }
                    return n
                }, t
            }(),
            n = a._utf8ArrayToStr;
        e.a = a
    }, function(t, e, r) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var s = function() {
                function t(e, r) {
                    i(this, t), this.subtle = e, this.aesIV = r
                }
                return t.prototype.decrypt = function(t, e) {
                    return this.subtle.decrypt({
                        name: "AES-CBC",
                        iv: this.aesIV
                    }, e, t)
                }, t
            }(),
            l = s,
            u = function() {
                function t(e, r) {
                    a(this, t), this.subtle = e, this.key = r
                }
                return t.prototype.expandKey = function() {
                    return this.subtle.importKey("raw", this.key, {
                        name: "AES-CBC"
                    }, !1, ["encrypt", "decrypt"])
                }, t
            }(),
            d = u,
            h = function() {
                function t() {
                    n(this, t), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
                }
                return t.prototype.uint8ArrayToUint32Array_ = function(t) {
                    for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = e.getUint32(4 * i);
                    return r
                }, t.prototype.initTable = function() {
                    var t = this.sBox,
                        e = this.invSBox,
                        r = this.subMix,
                        i = r[0],
                        a = r[1],
                        n = r[2],
                        o = r[3],
                        s = this.invSubMix,
                        l = s[0],
                        u = s[1],
                        d = s[2],
                        h = s[3],
                        c = new Uint32Array(256),
                        f = 0,
                        p = 0,
                        g = 0;
                    for (g = 0; g < 256; g++) c[g] = g < 128 ? g << 1 : g << 1 ^ 283;
                    for (g = 0; g < 256; g++) {
                        var v = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                        v = v >>> 8 ^ 255 & v ^ 99, t[f] = v, e[v] = f;
                        var y = c[f],
                            m = c[y],
                            b = c[m],
                            E = 257 * c[v] ^ 16843008 * v;
                        i[f] = E << 24 | E >>> 8, a[f] = E << 16 | E >>> 16, n[f] = E << 8 | E >>> 24, o[f] = E, E = 16843009 * b ^ 65537 * m ^ 257 * y ^ 16843008 * f, l[v] = E << 24 | E >>> 8, u[v] = E << 16 | E >>> 16, d[v] = E << 8 | E >>> 24, h[v] = E, f ? (f = y ^ c[c[c[b ^ y]]], p ^= c[c[p]]) : f = p = 1
                    }
                }, t.prototype.expandKey = function(t) {
                    for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0; i < e.length && r;) r = e[i] === this.key[i], i++;
                    if (!r) {
                        this.key = e;
                        var a = this.keySize = e.length;
                        if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size=" + a);
                        var n = this.ksRows = 4 * (a + 6 + 1),
                            o = void 0,
                            s = void 0,
                            l = this.keySchedule = new Uint32Array(n),
                            u = this.invKeySchedule = new Uint32Array(n),
                            d = this.sBox,
                            h = this.rcon,
                            c = this.invSubMix,
                            f = c[0],
                            p = c[1],
                            g = c[2],
                            v = c[3],
                            y = void 0,
                            m = void 0;
                        for (o = 0; o < n; o++) o < a ? y = l[o] = e[o] : (m = y, o % a == 0 ? (m = m << 8 | m >>> 24, m = d[m >>> 24] << 24 | d[m >>> 16 & 255] << 16 | d[m >>> 8 & 255] << 8 | d[255 & m], m ^= h[o / a | 0] << 24) : a > 6 && o % a == 4 && (m = d[m >>> 24] << 24 | d[m >>> 16 & 255] << 16 | d[m >>> 8 & 255] << 8 | d[255 & m]), l[o] = y = (l[o - a] ^ m) >>> 0);
                        for (s = 0; s < n; s++) o = n - s, m = 3 & s ? l[o] : l[o - 4], u[s] = s < 4 || o <= 4 ? m : f[d[m >>> 24]] ^ p[d[m >>> 16 & 255]] ^ g[d[m >>> 8 & 255]] ^ v[d[255 & m]], u[s] = u[s] >>> 0
                    }
                }, t.prototype.networkToHostOrderSwap = function(t) {
                    return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
                }, t.prototype.decrypt = function(t, e, r) {
                    for (var i, a, n = this.keySize + 6, o = this.invKeySchedule, s = this.invSBox, l = this.invSubMix, u = l[0], d = l[1], h = l[2], c = l[3], f = this.uint8ArrayToUint32Array_(r), p = f[0], g = f[1], v = f[2], y = f[3], m = new Int32Array(t), b = new Int32Array(m.length), E = void 0, T = void 0, R = void 0, A = void 0, S = void 0, _ = void 0, L = void 0, w = void 0, D = void 0, k = void 0, I = void 0, O = void 0, C = this.networkToHostOrderSwap; e < m.length;) {
                        for (D = C(m[e]), k = C(m[e + 1]), I = C(m[e + 2]), O = C(m[e + 3]), S = D ^ o[0], _ = O ^ o[1], L = I ^ o[2], w = k ^ o[3], i = 4, a = 1; a < n; a++) E = u[S >>> 24] ^ d[_ >> 16 & 255] ^ h[L >> 8 & 255] ^ c[255 & w] ^ o[i], T = u[_ >>> 24] ^ d[L >> 16 & 255] ^ h[w >> 8 & 255] ^ c[255 & S] ^ o[i + 1], R = u[L >>> 24] ^ d[w >> 16 & 255] ^ h[S >> 8 & 255] ^ c[255 & _] ^ o[i + 2], A = u[w >>> 24] ^ d[S >> 16 & 255] ^ h[_ >> 8 & 255] ^ c[255 & L] ^ o[i + 3], S = E, _ = T, L = R, w = A, i += 4;
                        E = s[S >>> 24] << 24 ^ s[_ >> 16 & 255] << 16 ^ s[L >> 8 & 255] << 8 ^ s[255 & w] ^ o[i], T = s[_ >>> 24] << 24 ^ s[L >> 16 & 255] << 16 ^ s[w >> 8 & 255] << 8 ^ s[255 & S] ^ o[i + 1], R = s[L >>> 24] << 24 ^ s[w >> 16 & 255] << 16 ^ s[S >> 8 & 255] << 8 ^ s[255 & _] ^ o[i + 2], A = s[w >>> 24] << 24 ^ s[S >> 16 & 255] << 16 ^ s[_ >> 8 & 255] << 8 ^ s[255 & L] ^ o[i + 3], i += 3, b[e] = C(E ^ p), b[e + 1] = C(A ^ g), b[e + 2] = C(R ^ v), b[e + 3] = C(T ^ y), p = D, g = k, v = I, y = O, e += 4
                    }
                    return b.buffer
                }, t.prototype.destroy = function() {
                    this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
                }, t
            }(),
            c = h,
            f = r(2),
            p = r(0),
            g = function() {
                function t(e, r) {
                    o(this, t), this.observer = e, this.config = r, this.logEnabled = !0;
                    try {
                        var i = crypto || self.crypto;
                        this.subtle = i.subtle || i.webkitSubtle
                    } catch (t) {}
                    this.disableWebCrypto = !this.subtle
                }
                return t.prototype.isSync = function() {
                    return this.disableWebCrypto && this.config.enableSoftwareAES
                }, t.prototype.decrypt = function(t, e, r, i) {
                    var a = this;
                    if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                        this.logEnabled && (p.b.log("JS AES decrypt"), this.logEnabled = !1);
                        var n = this.decryptor;
                        n || (this.decryptor = n = new c), n.expandKey(e), i(n.decrypt(t, 0, r))
                    } else {
                        this.logEnabled && (p.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                        var o = this.subtle;
                        this.key !== e && (this.key = e, this.fastAesKey = new d(o, e)), this.fastAesKey.expandKey().then(function(n) {
                            new l(o, r).decrypt(t, n).catch(function(n) {
                                a.onWebCryptoError(n, t, e, r, i)
                            }).then(function(t) {
                                i(t)
                            })
                        }).catch(function(n) {
                            a.onWebCryptoError(n, t, e, r, i)
                        })
                    }
                }, t.prototype.onWebCryptoError = function(t, e, r, i, a) {
                    this.config.enableSoftwareAES ? (p.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(e, r, i, a)) : (p.b.error("decrypting error : " + t.message), this.observer.trigger(Event.ERROR, {
                        type: f.b.MEDIA_ERROR,
                        details: f.a.FRAG_DECRYPT_ERROR,
                        fatal: !0,
                        reason: t.message
                    }))
                }, t.prototype.destroy = function() {
                    var t = this.decryptor;
                    t && (t.destroy(), this.decryptor = void 0)
                }, t
            }();
        e.a = g
    }, function(t, e) {
        function r() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function i(t) {
            return "function" == typeof t
        }

        function a(t) {
            return "number" == typeof t
        }

        function n(t) {
            return "object" == typeof t && null !== t
        }

        function o(t) {
            return void 0 === t
        }
        t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(t) {
            if (!a(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
            return this._maxListeners = t, this
        }, r.prototype.emit = function(t) {
            var e, r, a, s, l, u;
            if (this._events || (this._events = {}), "error" === t && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
                if ((e = arguments[1]) instanceof Error) throw e;
                var d = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                throw d.context = e, d
            }
            if (r = this._events[t], o(r)) return !1;
            if (i(r)) switch (arguments.length) {
                case 1:
                    r.call(this);
                    break;
                case 2:
                    r.call(this, arguments[1]);
                    break;
                case 3:
                    r.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), r.apply(this, s)
            } else if (n(r))
                for (s = Array.prototype.slice.call(arguments, 1), u = r.slice(), a = u.length, l = 0; l < a; l++) u[l].apply(this, s);
            return !0
        }, r.prototype.addListener = function(t, e) {
            var a;
            if (!i(e)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e), this._events[t] ? n(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, n(this._events[t]) && !this._events[t].warned && (a = o(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[t].length > a && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(t, e) {
            function r() {
                this.removeListener(t, r), a || (a = !0, e.apply(this, arguments))
            }
            if (!i(e)) throw TypeError("listener must be a function");
            var a = !1;
            return r.listener = e, this.on(t, r), this
        }, r.prototype.removeListener = function(t, e) {
            var r, a, o, s;
            if (!i(e)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[t]) return this;
            if (r = this._events[t], o = r.length, a = -1, r === e || i(r.listener) && r.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
            else if (n(r)) {
                for (s = o; s-- > 0;)
                    if (r[s] === e || r[s].listener && r[s].listener === e) {
                        a = s;
                        break
                    }
                if (a < 0) return this;
                1 === r.length ? (r.length = 0, delete this._events[t]) : r.splice(a, 1), this._events.removeListener && this.emit("removeListener", t, e)
            }
            return this
        }, r.prototype.removeAllListeners = function(t) {
            var e, r;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
            if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (r = this._events[t], i(r)) this.removeListener(t, r);
            else if (r)
                for (; r.length;) this.removeListener(t, r[r.length - 1]);
            return delete this._events[t], this
        }, r.prototype.listeners = function(t) {
            return this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
        }, r.prototype.listenerCount = function(t) {
            if (this._events) {
                var e = this._events[t];
                if (i(e)) return 1;
                if (e) return e.length
            }
            return 0
        }, r.listenerCount = function(t, e) {
            return t.listenerCount(e)
        }
    }, function(t, e, r) {
        ! function(e) {
            var r = /^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
                i = /^([^\/;?#]*)(.*)$/,
                a = /(?:\/|^)\.(?=\/)/g,
                n = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
                o = {
                    buildAbsoluteURL: function(t, e, r) {
                        if (r = r || {}, t = t.trim(), !(e = e.trim())) {
                            if (!r.alwaysNormalize) return t;
                            var a = this.parseURL(t);
                            if (!s) throw new Error("Error trying to parse base URL.");
                            return a.path = o.normalizePath(a.path), o.buildURLFromParts(a)
                        }
                        var n = this.parseURL(e);
                        if (!n) throw new Error("Error trying to parse relative URL.");
                        if (n.scheme) return r.alwaysNormalize ? (n.path = o.normalizePath(n.path), o.buildURLFromParts(n)) : e;
                        var s = this.parseURL(t);
                        if (!s) throw new Error("Error trying to parse base URL.");
                        if (!s.netLoc && s.path && "/" !== s.path[0]) {
                            var l = i.exec(s.path);
                            s.netLoc = l[1], s.path = l[2]
                        }
                        s.netLoc && !s.path && (s.path = "/");
                        var u = {
                            scheme: s.scheme,
                            netLoc: n.netLoc,
                            path: null,
                            params: n.params,
                            query: n.query,
                            fragment: n.fragment
                        };
                        if (!n.netLoc && (u.netLoc = s.netLoc, "/" !== n.path[0]))
                            if (n.path) {
                                var d = s.path,
                                    h = d.substring(0, d.lastIndexOf("/") + 1) + n.path;
                                u.path = o.normalizePath(h)
                            } else u.path = s.path, n.params || (u.params = s.params, n.query || (u.query = s.query));
                        return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(n.path) : n.path), o.buildURLFromParts(u)
                    },
                    parseURL: function(t) {
                        var e = r.exec(t);
                        return e ? {
                            scheme: e[1] || "",
                            netLoc: e[2] || "",
                            path: e[3] || "",
                            params: e[4] || "",
                            query: e[5] || "",
                            fragment: e[6] || ""
                        } : null
                    },
                    normalizePath: function(t) {
                        for (t = t.split("").reverse().join("").replace(a, ""); t.length !== (t = t.replace(n, "")).length;);
                        return t.split("").reverse().join("")
                    },
                    buildURLFromParts: function(t) {
                        return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                    }
                };
            t.exports = o
        }()
    }, function(t, e, r) {
        "use strict";

        function i(t, e, r, i) {
            var a, n, o, s, l, u = navigator.userAgent.toLowerCase(),
                d = i,
                h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
            return a = 1 + ((192 & e[r + 2]) >>> 6), (n = (60 & e[r + 2]) >>> 2) > h.length - 1 ? void t.trigger(Event.ERROR, {
                type: _.b.MEDIA_ERROR,
                details: _.a.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: "invalid ADTS sampling index:" + n
            }) : (s = (1 & e[r + 2]) << 2, s |= (192 & e[r + 3]) >>> 6, w.b.log("manifest codec:" + i + ",ADTS data:type:" + a + ",sampleingIndex:" + n + "[" + h[n] + "Hz],channelConfig:" + s), /firefox/i.test(u) ? n >= 6 ? (a = 5, l = new Array(4), o = n - 3) : (a = 2, l = new Array(2), o = n) : -1 !== u.indexOf("android") ? (a = 2, l = new Array(2), o = n) : (a = 5, l = new Array(4), i && (-1 !== i.indexOf("mp4a.40.29") || -1 !== i.indexOf("mp4a.40.5")) || !i && n >= 6 ? o = n - 3 : ((i && -1 !== i.indexOf("mp4a.40.2") && (n >= 6 && 1 === s || /vivaldi/i.test(u)) || !i && 1 === s) && (a = 2, l = new Array(2)), o = n)), l[0] = a << 3, l[0] |= (14 & n) >> 1, l[1] |= (1 & n) << 7, l[1] |= s << 3, 5 === a && (l[1] |= (14 & o) >> 1, l[2] = (1 & o) << 7, l[2] |= 8, l[3] = 0), {
                config: l,
                samplerate: h[n],
                channelCount: s,
                codec: "mp4a.40." + a,
                manifestCodec: d
            })
        }

        function a(t, e) {
            return 255 === t[e] && 240 == (246 & t[e + 1])
        }

        function n(t, e) {
            return 1 & t[e + 1] ? 7 : 9
        }

        function o(t, e) {
            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
        }

        function s(t, e) {
            return !!(e + 1 < t.length && a(t, e))
        }

        function l(t, e) {
            if (e + 1 < t.length && a(t, e)) {
                var r = n(t, e),
                    i = r;
                e + 5 < t.length && (i = o(t, e));
                var s = e + i;
                if (s === t.length || s + 1 < t.length && a(t, s)) return !0
            }
            return !1
        }

        function u(t, e, r, a, n) {
            if (!t.samplerate) {
                var o = i(e, r, a, n);
                t.config = o.config, t.samplerate = o.samplerate, t.channelCount = o.channelCount, t.codec = o.codec, t.manifestCodec = o.manifestCodec, w.b.log("parsed codec:" + t.codec + ",rate:" + o.samplerate + ",nb channel:" + o.channelCount)
            }
        }

        function d(t) {
            return 9216e4 / t
        }

        function h(t, e, r, i, a) {
            var s, l, u, d = t.length;
            if (s = n(t, e), l = o(t, e), (l -= s) > 0 && e + s + l <= d) return u = r + i * a, {
                headerLength: s,
                frameLength: l,
                stamp: u
            }
        }

        function c(t, e, r, i, a) {
            var n = d(t.samplerate),
                o = h(e, r, i, a, n);
            if (o) {
                var s = o.stamp,
                    l = o.headerLength,
                    u = o.frameLength,
                    c = {
                        unit: e.subarray(r + l, r + l + u),
                        pts: s,
                        dts: s
                    };
                return t.samples.push(c), t.len += u, {
                    sample: c,
                    length: u + l
                }
            }
        }

        function f(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function p(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function g(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function v(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function y(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function m(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function b(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function E(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function T(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function R(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function A(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var S = r(1),
            _ = r(2),
            L = r(4),
            w = r(0),
            D = r(3),
            k = function() {
                function t(e, r, i) {
                    f(this, t), this.observer = e, this.config = i, this.remuxer = r
                }
                return t.prototype.resetInitSegment = function(t, e, r, i) {
                    this._audioTrack = {
                        container: "audio/adts",
                        type: "audio",
                        id: 0,
                        sequenceNumber: 0,
                        isAAC: !0,
                        samples: [],
                        len: 0,
                        manifestCodec: e,
                        duration: i,
                        inputTimeScale: 9e4
                    }
                }, t.prototype.resetTimeStamp = function() {}, t.probe = function(t) {
                    if (!t) return !1;
                    for (var e = D.a.getID3Data(t, 0) || [], r = e.length, i = t.length; r < i; r++)
                        if (l(t, r)) return w.b.log("ADTS sync word found !"), !0;
                    return !1
                }, t.prototype.append = function(t, e, r, i) {
                    for (var a = this._audioTrack, n = D.a.getID3Data(t, 0) || [], o = D.a.getTimeStamp(n), l = o ? 90 * o : 9e4 * e, d = 0, h = l, f = t.length, p = n.length, g = [{
                            pts: h,
                            dts: h,
                            data: n
                        }]; p < f - 1;)
                        if (s(t, p) && p + 5 < f) {
                            u(a, this.observer, t, p, a.manifestCodec);
                            var v = c(a, t, p, l, d);
                            if (!v) {
                                w.b.log("Unable to parse AAC frame");
                                break
                            }
                            p += v.length, h = v.sample.pts, d++
                        } else D.a.isHeader(t, p) ? (n = D.a.getID3Data(t, p), g.push({
                            pts: h,
                            dts: h,
                            data: n
                        }), p += n.length) : p++;
                    this.remuxer.remux(a, {
                        samples: []
                    }, {
                        samples: g,
                        inputTimeScale: 9e4
                    }, {
                        samples: []
                    }, e, r, i)
                }, t.prototype.destroy = function() {}, t
            }(),
            I = k,
            O = Math.pow(2, 32) - 1,
            C = function() {
                function t(e, r) {
                    p(this, t), this.observer = e, this.remuxer = r
                }
                return t.prototype.resetTimeStamp = function(t) {
                    this.initPTS = t
                }, t.prototype.resetInitSegment = function(e, r, i, a) {
                    if (e && e.byteLength) {
                        var n = this.initData = t.parseInitSegment(e);
                        null == r && (r = "mp4a.40.5"), null == i && (i = "avc1.42e01e");
                        var o = {};
                        n.audio && n.video ? o.audiovideo = {
                            container: "video/mp4",
                            codec: r + "," + i,
                            initSegment: a ? e : null
                        } : (n.audio && (o.audio = {
                            container: "audio/mp4",
                            codec: r,
                            initSegment: a ? e : null
                        }), n.video && (o.video = {
                            container: "video/mp4",
                            codec: i,
                            initSegment: a ? e : null
                        })), this.observer.trigger(S.a.FRAG_PARSING_INIT_SEGMENT, {
                            tracks: o
                        })
                    } else r && (this.audioCodec = r), i && (this.videoCodec = i)
                }, t.probe = function(e) {
                    return t.findBox({
                        data: e,
                        start: 0,
                        end: Math.min(e.length, 16384)
                    }, ["moof"]).length > 0
                }, t.bin2str = function(t) {
                    return String.fromCharCode.apply(null, t)
                }, t.readUint32 = function(t, e) {
                    t.data && (e += t.start, t = t.data);
                    var r = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
                    return r < 0 ? 4294967296 + r : r
                }, t.writeUint32 = function(t, e, r) {
                    t.data && (e += t.start, t = t.data), t[e] = r >> 24, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r
                }, t.findBox = function(e, r) {
                    var i, a, n, o, s, l, u, d = [];
                    if (e.data ? (l = e.start, o = e.end, e = e.data) : (l = 0, o = e.byteLength), !r.length) return null;
                    for (i = l; i < o;) a = t.readUint32(e, i), n = t.bin2str(e.subarray(i + 4, i + 8)), u = a > 1 ? i + a : o, n === r[0] && (1 === r.length ? d.push({
                        data: e,
                        start: i + 8,
                        end: u
                    }) : (s = t.findBox({
                        data: e,
                        start: i + 8,
                        end: u
                    }, r.slice(1)), s.length && (d = d.concat(s)))), i = u;
                    return d
                }, t.parseInitSegment = function(e) {
                    var r = [];
                    return t.findBox(e, ["moov", "trak"]).forEach(function(e) {
                        var i = t.findBox(e, ["tkhd"])[0];
                        if (i) {
                            var a = i.data[i.start],
                                n = 0 === a ? 12 : 20,
                                o = t.readUint32(i, n),
                                s = t.findBox(e, ["mdia", "mdhd"])[0];
                            if (s) {
                                a = s.data[s.start], n = 0 === a ? 12 : 20;
                                var l = t.readUint32(s, n),
                                    u = t.findBox(e, ["mdia", "hdlr"])[0];
                                if (u) {
                                    var d = t.bin2str(u.data.subarray(u.start + 8, u.start + 12)),
                                        h = {
                                            soun: "audio",
                                            vide: "video"
                                        }[d];
                                    if (h) {
                                        var c = t.findBox(e, ["mdia", "minf", "stbl", "stsd"]);
                                        if (c.length) {
                                            c = c[0];
                                            var f = t.bin2str(c.data.subarray(c.start + 12, c.start + 16));
                                            w.b.log("MP4Demuxer:" + h + ":" + f + " found")
                                        }
                                        r[o] = {
                                            timescale: l,
                                            type: h
                                        }, r[h] = {
                                            timescale: l,
                                            id: o
                                        }
                                    }
                                }
                            }
                        }
                    }), r
                }, t.getStartDTS = function(e, r) {
                    var i, a, n;
                    return i = t.findBox(r, ["moof", "traf"]), a = [].concat.apply([], i.map(function(r) {
                        return t.findBox(r, ["tfhd"]).map(function(i) {
                            var a, n;
                            return a = t.readUint32(i, 4), n = e[a].timescale || 9e4, t.findBox(r, ["tfdt"]).map(function(e) {
                                var r, i;
                                return r = e.data[e.start], i = t.readUint32(e, 4), 1 === r && (i *= Math.pow(2, 32), i += t.readUint32(e, 8)), i
                            })[0] / n
                        })
                    })), n = Math.min.apply(null, a), isFinite(n) ? n : 0
                }, t.offsetStartDTS = function(e, r, i) {
                    t.findBox(r, ["moof", "traf"]).map(function(r) {
                        return t.findBox(r, ["tfhd"]).map(function(a) {
                            var n = t.readUint32(a, 4),
                                o = e[n].timescale || 9e4;
                            t.findBox(r, ["tfdt"]).map(function(e) {
                                var r = e.data[e.start],
                                    a = t.readUint32(e, 4);
                                if (0 === r) t.writeUint32(e, 4, a - i * o);
                                else {
                                    a *= Math.pow(2, 32), a += t.readUint32(e, 8), a -= i * o, a = Math.max(a, 0);
                                    var n = Math.floor(a / (O + 1)),
                                        s = Math.floor(a % (O + 1));
                                    t.writeUint32(e, 4, n), t.writeUint32(e, 8, s)
                                }
                            })
                        })
                    })
                }, t.prototype.append = function(e, r, i, a) {
                    var n = this.initData;
                    n || (this.resetInitSegment(e, this.audioCodec, this.videoCodec), n = this.initData);
                    var o = void 0,
                        s = this.initPTS;
                    if (void 0 === s) {
                        var l = t.getStartDTS(n, e);
                        this.initPTS = s = l - r, this.observer.trigger(S.a.INIT_PTS_FOUND, {
                            initPTS: s
                        })
                    }
                    t.offsetStartDTS(n, e, s), o = t.getStartDTS(n, e), this.remuxer.remux(n.audio, n.video, null, null, o, i, a, e)
                }, t.prototype.destroy = function() {}, t
            }(),
            P = C,
            x = {
                BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                appendFrame: function(t, e, r, i, a) {
                    if (!(r + 24 > e.length)) {
                        var n = this.parseHeader(e, r);
                        if (n && r + n.frameLength <= e.length) {
                            var o = 10368e4 / n.sampleRate,
                                s = i + a * o,
                                l = {
                                    unit: e.subarray(r, r + n.frameLength),
                                    pts: s,
                                    dts: s
                                };
                            return t.config = [], t.channelCount = n.channelCount, t.samplerate = n.sampleRate, t.samples.push(l), t.len += n.frameLength, {
                                sample: l,
                                length: n.frameLength
                            }
                        }
                    }
                },
                parseHeader: function(t, e) {
                    var r = t[e + 1] >> 3 & 3,
                        i = t[e + 1] >> 1 & 3,
                        a = t[e + 2] >> 4 & 15,
                        n = t[e + 2] >> 2 & 3,
                        o = !!(2 & t[e + 2]);
                    if (1 !== r && 0 !== a && 15 !== a && 3 !== n) {
                        var s = 3 === r ? 3 - i : 3 === i ? 3 : 4,
                            l = 1e3 * x.BitratesMap[14 * s + a - 1],
                            u = 3 === r ? 0 : 2 === r ? 1 : 2,
                            d = x.SamplingRateMap[3 * u + n],
                            h = o ? 1 : 0;
                        return {
                            sampleRate: d,
                            channelCount: t[e + 3] >> 6 == 3 ? 1 : 2,
                            frameLength: 3 === i ? (3 === r ? 12 : 6) * l / d + h << 2 : (3 === r ? 144 : 72) * l / d + h | 0
                        }
                    }
                },
                isHeaderPattern: function(t, e) {
                    return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
                },
                isHeader: function(t, e) {
                    return !!(e + 1 < t.length && this.isHeaderPattern(t, e))
                },
                probe: function(t, e) {
                    if (e + 1 < t.length && this.isHeaderPattern(t, e)) {
                        var r = this.parseHeader(t, e),
                            i = 4;
                        r && r.frameLength && (i = r.frameLength);
                        var a = e + i;
                        if (a === t.length || a + 1 < t.length && this.isHeaderPattern(t, a)) return !0
                    }
                    return !1
                }
            },
            F = x,
            N = function() {
                function t(e) {
                    g(this, t), this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
                }
                return t.prototype.loadWord = function() {
                    var t = this.data,
                        e = this.bytesAvailable,
                        r = t.byteLength - e,
                        i = new Uint8Array(4),
                        a = Math.min(4, e);
                    if (0 === a) throw new Error("no bytes available");
                    i.set(t.subarray(r, r + a)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * a, this.bytesAvailable -= a
                }, t.prototype.skipBits = function(t) {
                    var e;
                    this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, e = t >> 3, t -= e >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
                }, t.prototype.readBits = function(t) {
                    var e = Math.min(this.bitsAvailable, t),
                        r = this.word >>> 32 - e;
                    return t > 32 && w.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), e = t - e, e > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
                }, t.prototype.skipLZ = function() {
                    var t;
                    for (t = 0; t < this.bitsAvailable; ++t)
                        if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
                    return this.loadWord(), t + this.skipLZ()
                }, t.prototype.skipUEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, t.prototype.skipEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, t.prototype.readUEG = function() {
                    var t = this.skipLZ();
                    return this.readBits(t + 1) - 1
                }, t.prototype.readEG = function() {
                    var t = this.readUEG();
                    return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                }, t.prototype.readBoolean = function() {
                    return 1 === this.readBits(1)
                }, t.prototype.readUByte = function() {
                    return this.readBits(8)
                }, t.prototype.readUShort = function() {
                    return this.readBits(16)
                }, t.prototype.readUInt = function() {
                    return this.readBits(32)
                }, t.prototype.skipScalingList = function(t) {
                    var e, r, i = 8,
                        a = 8;
                    for (e = 0; e < t; e++) 0 !== a && (r = this.readEG(), a = (i + r + 256) % 256), i = 0 === a ? i : a
                }, t.prototype.readSPS = function() {
                    var t, e, r, i, a, n, o, s = 0,
                        l = 0,
                        u = 0,
                        d = 0,
                        h = this.readUByte.bind(this),
                        c = this.readBits.bind(this),
                        f = this.readUEG.bind(this),
                        p = this.readBoolean.bind(this),
                        g = this.skipBits.bind(this),
                        v = this.skipEG.bind(this),
                        y = this.skipUEG.bind(this),
                        m = this.skipScalingList.bind(this);
                    if (h(), t = h(), c(5), g(3), h(), y(), 100 === t || 110 === t || 122 === t || 244 === t || 44 === t || 83 === t || 86 === t || 118 === t || 128 === t) {
                        var b = f();
                        if (3 === b && g(1), y(), y(), g(1), p())
                            for (n = 3 !== b ? 8 : 12, o = 0; o < n; o++) p() && m(o < 6 ? 16 : 64)
                    }
                    y();
                    var E = f();
                    if (0 === E) f();
                    else if (1 === E)
                        for (g(1), v(), v(), e = f(), o = 0; o < e; o++) v();
                    y(), g(1), r = f(), i = f(), a = c(1), 0 === a && g(1), g(1), p() && (s = f(), l = f(), u = f(), d = f());
                    var T = [1, 1];
                    if (p() && p()) {
                        switch (h()) {
                            case 1:
                                T = [1, 1];
                                break;
                            case 2:
                                T = [12, 11];
                                break;
                            case 3:
                                T = [10, 11];
                                break;
                            case 4:
                                T = [16, 11];
                                break;
                            case 5:
                                T = [40, 33];
                                break;
                            case 6:
                                T = [24, 11];
                                break;
                            case 7:
                                T = [20, 11];
                                break;
                            case 8:
                                T = [32, 11];
                                break;
                            case 9:
                                T = [80, 33];
                                break;
                            case 10:
                                T = [18, 11];
                                break;
                            case 11:
                                T = [15, 11];
                                break;
                            case 12:
                                T = [64, 33];
                                break;
                            case 13:
                                T = [160, 99];
                                break;
                            case 14:
                                T = [4, 3];
                                break;
                            case 15:
                                T = [3, 2];
                                break;
                            case 16:
                                T = [2, 1];
                                break;
                            case 255:
                                T = [h() << 8 | h(), h() << 8 | h()]
                        }
                    }
                    return {
                        width: Math.ceil(16 * (r + 1) - 2 * s - 2 * l),
                        height: (2 - a) * (i + 1) * 16 - (a ? 2 : 4) * (u + d),
                        pixelRatio: T
                    }
                }, t.prototype.readSliceType = function() {
                    return this.readUByte(), this.readUEG(), this.readUEG()
                }, t
            }(),
            M = N,
            U = function() {
                function t(e, r, i, a) {
                    v(this, t), this.decryptdata = i, this.discardEPB = a, this.decrypter = new L.a(e, r)
                }
                return t.prototype.decryptBuffer = function(t, e) {
                    this.decrypter.decrypt(t, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, e)
                }, t.prototype.decryptAacSample = function(t, e, r, i) {
                    var a = t[e].unit,
                        n = a.subarray(16, a.length - a.length % 16),
                        o = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
                        s = this;
                    this.decryptBuffer(o, function(n) {
                        n = new Uint8Array(n), a.set(n, 16), i || s.decryptAacSamples(t, e + 1, r)
                    })
                }, t.prototype.decryptAacSamples = function(t, e, r) {
                    for (;; e++) {
                        if (e >= t.length) return void r();
                        if (!(t[e].unit.length < 32)) {
                            var i = this.decrypter.isSync();
                            if (this.decryptAacSample(t, e, r, i), !i) return
                        }
                    }
                }, t.prototype.getAvcEncryptedData = function(t) {
                    for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, a = 32; a <= t.length - 16; a += 160, i += 16) r.set(t.subarray(a, a + 16), i);
                    return r
                }, t.prototype.getAvcDecryptedUnit = function(t, e) {
                    e = new Uint8Array(e);
                    for (var r = 0, i = 32; i <= t.length - 16; i += 160, r += 16) t.set(e.subarray(r, r + 16), i);
                    return t
                }, t.prototype.decryptAvcSample = function(t, e, r, i, a, n) {
                    var o = this.discardEPB(a.data),
                        s = this.getAvcEncryptedData(o),
                        l = this;
                    this.decryptBuffer(s.buffer, function(s) {
                        a.data = l.getAvcDecryptedUnit(o, s), n || l.decryptAvcSamples(t, e, r + 1, i)
                    })
                }, t.prototype.decryptAvcSamples = function(t, e, r, i) {
                    for (;; e++, r = 0) {
                        if (e >= t.length) return void i();
                        for (var a = t[e].units; !(r >= a.length); r++) {
                            var n = a[r];
                            if (!(n.length <= 48 || 1 !== n.type && 5 !== n.type)) {
                                var o = this.decrypter.isSync();
                                if (this.decryptAvcSample(t, e, r, i, n, o), !o) return
                            }
                        }
                    }
                }, t
            }(),
            B = U,
            G = {
                video: 0,
                audio: 1,
                id3: 2,
                text: 3
            },
            H = function() {
                function t(e, r, i, a) {
                    y(this, t), this.observer = e, this.config = i, this.typeSupported = a, this.remuxer = r, this.sampleAes = null
                }
                return t.prototype.setDecryptData = function(t) {
                    null != t && null != t.key && "SAMPLE-AES" === t.method ? this.sampleAes = new B(this.observer, this.config, t, this.discardEPB) : this.sampleAes = null
                }, t.probe = function(e) {
                    var r = t._syncOffset(e);
                    return !(r < 0) && (r && w.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0)
                }, t._syncOffset = function(t) {
                    for (var e = Math.min(1e3, t.length - 564), r = 0; r < e;) {
                        if (71 === t[r] && 71 === t[r + 188] && 71 === t[r + 376]) return r;
                        r++
                    }
                    return -1
                }, t.createTrack = function(t, e) {
                    return {
                        container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                        type: t,
                        id: G[t],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        len: 0,
                        dropped: "video" === t ? 0 : void 0,
                        isAAC: "audio" === t || void 0,
                        duration: "audio" === t ? e : void 0
                    }
                }, t.prototype.resetInitSegment = function(e, r, i, a) {
                    this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video", a), this._audioTrack = t.createTrack("audio", a), this._id3Track = t.createTrack("id3", a), this._txtTrack = t.createTrack("text", a), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = i, this._duration = a
                }, t.prototype.resetTimeStamp = function() {}, t.prototype.append = function(e, r, i, a) {
                    var n, o, s, l, u, d = e.length,
                        h = !1;
                    this.contiguous = i;
                    var c = this.pmtParsed,
                        f = this._avcTrack,
                        p = this._audioTrack,
                        g = this._id3Track,
                        v = f.pid,
                        y = p.pid,
                        m = g.pid,
                        b = this._pmtId,
                        E = f.pesData,
                        T = p.pesData,
                        R = g.pesData,
                        A = this._parsePAT,
                        L = this._parsePMT,
                        D = this._parsePES,
                        k = this._parseAVCPES.bind(this),
                        I = this._parseAACPES.bind(this),
                        O = this._parseMPEGPES.bind(this),
                        C = this._parseID3PES.bind(this),
                        P = t._syncOffset(e);
                    for (d -= (d + P) % 188, n = P; n < d; n += 188)
                        if (71 === e[n]) {
                            if (o = !!(64 & e[n + 1]), s = ((31 & e[n + 1]) << 8) + e[n + 2], (48 & e[n + 3]) >> 4 > 1) {
                                if ((l = n + 5 + e[n + 4]) === n + 188) continue
                            } else l = n + 4;
                            switch (s) {
                                case v:
                                    o && (E && (u = D(E)) && k(u, !1), E = {
                                        data: [],
                                        size: 0
                                    }), E && (E.data.push(e.subarray(l, n + 188)), E.size += n + 188 - l);
                                    break;
                                case y:
                                    o && (T && (u = D(T)) && (p.isAAC ? I(u) : O(u)), T = {
                                        data: [],
                                        size: 0
                                    }), T && (T.data.push(e.subarray(l, n + 188)), T.size += n + 188 - l);
                                    break;
                                case m:
                                    o && (R && (u = D(R)) && C(u), R = {
                                        data: [],
                                        size: 0
                                    }), R && (R.data.push(e.subarray(l, n + 188)), R.size += n + 188 - l);
                                    break;
                                case 0:
                                    o && (l += e[l] + 1), b = this._pmtId = A(e, l);
                                    break;
                                case b:
                                    o && (l += e[l] + 1);
                                    var x = L(e, l, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                    v = x.avc, v > 0 && (f.pid = v), y = x.audio, y > 0 && (p.pid = y, p.isAAC = x.isAAC), m = x.id3, m > 0 && (g.pid = m), h && !c && (w.b.log("reparse from beginning"), h = !1, n = P - 188), c = this.pmtParsed = !0;
                                    break;
                                case 17:
                                case 8191:
                                    break;
                                default:
                                    h = !0
                            }
                        } else this.observer.trigger(S.a.ERROR, {
                            type: _.b.MEDIA_ERROR,
                            details: _.a.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "TS packet did not start with 0x47"
                        });
                    E && (u = D(E)) ? (k(u, !0), f.pesData = null) : f.pesData = E, T && (u = D(T)) ? (p.isAAC ? I(u) : O(u), p.pesData = null) : (T && T.size && w.b.log("last AAC PES packet truncated,might overlap between fragments"), p.pesData = T), R && (u = D(R)) ? (C(u), g.pesData = null) : g.pesData = R, null == this.sampleAes ? this.remuxer.remux(p, f, g, this._txtTrack, r, i, a) : this.decryptAndRemux(p, f, g, this._txtTrack, r, i, a)
                }, t.prototype.decryptAndRemux = function(t, e, r, i, a, n, o) {
                    if (t.samples && t.isAAC) {
                        var s = this;
                        this.sampleAes.decryptAacSamples(t.samples, 0, function() {
                            s.decryptAndRemuxAvc(t, e, r, i, a, n, o)
                        })
                    } else this.decryptAndRemuxAvc(t, e, r, i, a, n, o)
                }, t.prototype.decryptAndRemuxAvc = function(t, e, r, i, a, n, o) {
                    if (e.samples) {
                        var s = this;
                        this.sampleAes.decryptAvcSamples(e.samples, 0, 0, function() {
                            s.remuxer.remux(t, e, r, i, a, n, o)
                        })
                    } else this.remuxer.remux(t, e, r, i, a, n, o)
                }, t.prototype.destroy = function() {
                    this._initPTS = this._initDTS = void 0, this._duration = 0
                }, t.prototype._parsePAT = function(t, e) {
                    return (31 & t[e + 10]) << 8 | t[e + 11]
                }, t.prototype._parsePMT = function(t, e, r, i) {
                    var a, n, o, s, l = {
                        audio: -1,
                        avc: -1,
                        id3: -1,
                        isAAC: !0
                    };
                    for (a = (15 & t[e + 1]) << 8 | t[e + 2], n = e + 3 + a - 4, o = (15 & t[e + 10]) << 8 | t[e + 11], e += 12 + o; e < n;) {
                        switch (s = (31 & t[e + 1]) << 8 | t[e + 2], t[e]) {
                            case 207:
                                if (!i) {
                                    w.b.log("unkown stream type:" + t[e]);
                                    break
                                }
                            case 15:
                                -1 === l.audio && (l.audio = s);
                                break;
                            case 21:
                                -1 === l.id3 && (l.id3 = s);
                                break;
                            case 219:
                                if (!i) {
                                    w.b.log("unkown stream type:" + t[e]);
                                    break
                                }
                            case 27:
                                -1 === l.avc && (l.avc = s);
                                break;
                            case 3:
                            case 4:
                                r ? -1 === l.audio && (l.audio = s, l.isAAC = !1) : w.b.log("MPEG audio found, not supported in this browser for now");
                                break;
                            case 36:
                                w.b.warn("HEVC stream type found, not supported for now");
                                break;
                            default:
                                w.b.log("unkown stream type:" + t[e])
                        }
                        e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
                    }
                    return l
                }, t.prototype._parsePES = function(t) {
                    var e, r, i, a, n, o, s, l, u = 0,
                        d = t.data;
                    if (!t || 0 === t.size) return null;
                    for (; d[0].length < 19 && d.length > 1;) {
                        var h = new Uint8Array(d[0].length + d[1].length);
                        h.set(d[0]), h.set(d[1], d[0].length), d[0] = h, d.splice(1, 1)
                    }
                    if (e = d[0], 1 === (e[0] << 16) + (e[1] << 8) + e[2]) {
                        if ((i = (e[4] << 8) + e[5]) && i > t.size - 6) return null;
                        r = e[7], 192 & r && (o = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, o > 4294967295 && (o -= 8589934592), 64 & r ? (s = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2, s > 4294967295 && (s -= 8589934592), o - s > 54e5 && (w.b.warn(Math.round((o - s) / 9e4) + "s delta between PTS and DTS, align them"), o = s)) : s = o), a = e[8], l = a + 9, t.size -= l, n = new Uint8Array(t.size);
                        for (var c = 0, f = d.length; c < f; c++) {
                            e = d[c];
                            var p = e.byteLength;
                            if (l) {
                                if (l > p) {
                                    l -= p;
                                    continue
                                }
                                e = e.subarray(l), p -= l, l = 0
                            }
                            n.set(e, u), u += p
                        }
                        return i && (i -= a + 3), {
                            data: n,
                            pts: o,
                            dts: s,
                            len: i
                        }
                    }
                    return null
                }, t.prototype.pushAccesUnit = function(t, e) {
                    if (t.units.length && t.frame) {
                        var r = e.samples,
                            i = r.length;
                        !this.config.forceKeyFrameOnDiscontinuity || !0 === t.key || e.sps && (i || this.contiguous) ? (t.id = i, r.push(t)) : e.dropped++
                    }
                    t.debug.length && w.b.log(t.pts + "/" + t.dts + ":" + t.debug)
                }, t.prototype._parseAVCPES = function(t, e) {
                    var r, i, a, n = this,
                        o = this._avcTrack,
                        s = this._parseAVCNALu(t.data),
                        l = this.avcSample,
                        u = !1,
                        d = this.pushAccesUnit.bind(this),
                        h = function(t, e, r, i) {
                            return {
                                key: t,
                                pts: e,
                                dts: r,
                                units: [],
                                debug: i
                            }
                        };
                    t.data = null, l && s.length && !o.audFound && (d(l, o), l = this.avcSample = h(!1, t.pts, t.dts, "")), s.forEach(function(e) {
                        switch (e.type) {
                            case 1:
                                i = !0, l || (l = n.avcSample = h(!0, t.pts, t.dts, "")), l.frame = !0;
                                var s = e.data;
                                if (u && s.length > 4) {
                                    var c = new M(s).readSliceType();
                                    2 !== c && 4 !== c && 7 !== c && 9 !== c || (l.key = !0)
                                }
                                break;
                            case 5:
                                i = !0, l || (l = n.avcSample = h(!0, t.pts, t.dts, "")), l.key = !0, l.frame = !0;
                                break;
                            case 6:
                                i = !0, r = new M(n.discardEPB(e.data)), r.readUByte();
                                for (var f = 0, p = 0, g = !1, v = 0; !g && r.bytesAvailable > 1;) {
                                    f = 0;
                                    do {
                                        v = r.readUByte(), f += v
                                    } while (255 === v);
                                    p = 0;
                                    do {
                                        v = r.readUByte(), p += v
                                    } while (255 === v);
                                    if (4 === f && 0 !== r.bytesAvailable) {
                                        g = !0;
                                        if (181 === r.readUByte()) {
                                            if (49 === r.readUShort()) {
                                                if (1195456820 === r.readUInt()) {
                                                    if (3 === r.readUByte()) {
                                                        var y = r.readUByte(),
                                                            m = r.readUByte(),
                                                            b = 31 & y,
                                                            E = [y, m];
                                                        for (a = 0; a < b; a++) E.push(r.readUByte()), E.push(r.readUByte()), E.push(r.readUByte());
                                                        n._insertSampleInOrder(n._txtTrack.samples, {
                                                            type: 3,
                                                            pts: t.pts,
                                                            bytes: E
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    } else if (p < r.bytesAvailable)
                                        for (a = 0; a < p; a++) r.readUByte()
                                }
                                break;
                            case 7:
                                if (i = !0, u = !0, !o.sps) {
                                    r = new M(e.data);
                                    var T = r.readSPS();
                                    o.width = T.width, o.height = T.height, o.pixelRatio = T.pixelRatio, o.sps = [e.data], o.duration = n._duration;
                                    var R = e.data.subarray(1, 4),
                                        A = "avc1.";
                                    for (a = 0; a < 3; a++) {
                                        var S = R[a].toString(16);
                                        S.length < 2 && (S = "0" + S), A += S
                                    }
                                    o.codec = A
                                }
                                break;
                            case 8:
                                i = !0, o.pps || (o.pps = [e.data]);
                                break;
                            case 9:
                                i = !1, o.audFound = !0, l && d(l, o), l = n.avcSample = h(!1, t.pts, t.dts, "");
                                break;
                            case 12:
                                i = !1;
                                break;
                            default:
                                i = !1, l && (l.debug += "unknown NAL " + e.type + " ")
                        }
                        if (l && i) {
                            l.units.push(e)
                        }
                    }), e && l && (d(l, o), this.avcSample = null)
                }, t.prototype._insertSampleInOrder = function(t, e) {
                    var r = t.length;
                    if (r > 0) {
                        if (e.pts >= t[r - 1].pts) t.push(e);
                        else
                            for (var i = r - 1; i >= 0; i--)
                                if (e.pts < t[i].pts) {
                                    t.splice(i, 0, e);
                                    break
                                }
                    } else t.push(e)
                }, t.prototype._getLastNalUnit = function() {
                    var t = this.avcSample,
                        e = void 0;
                    if (!t || 0 === t.units.length) {
                        var r = this._avcTrack,
                            i = r.samples;
                        t = i[i.length - 1]
                    }
                    if (t) {
                        var a = t.units;
                        e = a[a.length - 1]
                    }
                    return e
                }, t.prototype._parseAVCNALu = function(t) {
                    var e, r, i, a, n, o = 0,
                        s = t.byteLength,
                        l = this._avcTrack,
                        u = l.naluState || 0,
                        d = u,
                        h = [],
                        c = -1;
                    for (-1 === u && (c = 0, n = 31 & t[0], u = 0, o = 1); o < s;)
                        if (e = t[o++], u)
                            if (1 !== u)
                                if (e)
                                    if (1 === e) {
                                        if (c >= 0) i = {
                                            data: t.subarray(c, o - u - 1),
                                            type: n
                                        }, h.push(i);
                                        else {
                                            var f = this._getLastNalUnit();
                                            if (f && (d && o <= 4 - d && f.state && (f.data = f.data.subarray(0, f.data.byteLength - d)), (r = o - u - 1) > 0)) {
                                                var p = new Uint8Array(f.data.byteLength + r);
                                                p.set(f.data, 0), p.set(t.subarray(0, r), f.data.byteLength), f.data = p
                                            }
                                        }
                                        o < s ? (a = 31 & t[o], c = o, n = a, u = 0) : u = -1
                                    } else u = 0;
                    else u = 3;
                    else u = e ? 0 : 2;
                    else u = e ? 0 : 1;
                    if (c >= 0 && u >= 0 && (i = {
                            data: t.subarray(c, s),
                            type: n,
                            state: u
                        }, h.push(i)), 0 === h.length) {
                        var g = this._getLastNalUnit();
                        if (g) {
                            var v = new Uint8Array(g.data.byteLength + t.byteLength);
                            v.set(g.data, 0), v.set(t, g.data.byteLength), g.data = v
                        }
                    }
                    return l.naluState = u, h
                }, t.prototype.discardEPB = function(t) {
                    for (var e, r, i = t.byteLength, a = [], n = 1; n < i - 2;) 0 === t[n] && 0 === t[n + 1] && 3 === t[n + 2] ? (a.push(n + 2), n += 2) : n++;
                    if (0 === a.length) return t;
                    e = i - a.length, r = new Uint8Array(e);
                    var o = 0;
                    for (n = 0; n < e; o++, n++) o === a[0] && (o++, a.shift()), r[n] = t[o];
                    return r
                }, t.prototype._parseAACPES = function(t) {
                    var e, r, i, a, n, o = this._audioTrack,
                        l = t.data,
                        h = t.pts,
                        f = this.aacOverFlow,
                        p = this.aacLastPTS;
                    if (f) {
                        var g = new Uint8Array(f.byteLength + l.byteLength);
                        g.set(f, 0), g.set(l, f.byteLength), l = g
                    }
                    for (i = 0, n = l.length; i < n - 1 && !s(l, i); i++);
                    if (i) {
                        var v, y;
                        if (i < n - 1 ? (v = "AAC PES did not start with ADTS header,offset:" + i, y = !1) : (v = "no ADTS header found in AAC PES", y = !0), w.b.warn("parsing error:" + v), this.observer.trigger(S.a.ERROR, {
                                type: _.b.MEDIA_ERROR,
                                details: _.a.FRAG_PARSING_ERROR,
                                fatal: y,
                                reason: v
                            }), y) return
                    }
                    if (u(o, this.observer, l, i, this.audioCodec), r = 0, e = d(o.samplerate), f && p) {
                        var m = p + e;
                        Math.abs(m - h) > 1 && (w.b.log("AAC: align PTS for overlapping frames by " + Math.round((m - h) / 90)), h = m)
                    }
                    for (; i < n;)
                        if (s(l, i) && i + 5 < n) {
                            var b = c(o, l, i, h, r);
                            if (!b) break;
                            i += b.length, a = b.sample.pts, r++
                        } else i++;
                    f = i < n ? l.subarray(i, n) : null, this.aacOverFlow = f, this.aacLastPTS = a
                }, t.prototype._parseMPEGPES = function(t) {
                    for (var e = t.data, r = e.length, i = 0, a = 0, n = t.pts; a < r;)
                        if (F.isHeader(e, a)) {
                            var o = F.appendFrame(this._audioTrack, e, a, n, i);
                            if (!o) break;
                            a += o.length, i++
                        } else a++
                }, t.prototype._parseID3PES = function(t) {
                    this._id3Track.samples.push(t)
                }, t
            }(),
            j = H,
            K = function() {
                function t(e, r, i) {
                    m(this, t), this.observer = e, this.config = i, this.remuxer = r
                }
                return t.prototype.resetInitSegment = function(t, e, r, i) {
                    this._audioTrack = {
                        container: "audio/mpeg",
                        type: "audio",
                        id: -1,
                        sequenceNumber: 0,
                        isAAC: !1,
                        samples: [],
                        len: 0,
                        manifestCodec: e,
                        duration: i,
                        inputTimeScale: 9e4
                    }
                }, t.prototype.resetTimeStamp = function() {}, t.probe = function(t) {
                    var e, r, i = D.a.getID3Data(t, 0);
                    if (i && void 0 !== D.a.getTimeStamp(i))
                        for (e = i.length, r = Math.min(t.length - 1, e + 100); e < r; e++)
                            if (F.probe(t, e)) return w.b.log("MPEG Audio sync word found !"), !0;
                    return !1
                }, t.prototype.append = function(t, e, r, i) {
                    for (var a = D.a.getID3Data(t, 0), n = 90 * D.a.getTimeStamp(a), o = a.length, s = t.length, l = 0, u = 0, d = this._audioTrack, h = [{
                            pts: n,
                            dts: n,
                            data: a
                        }]; o < s;)
                        if (F.isHeader(t, o)) {
                            var c = F.appendFrame(d, t, o, n, l);
                            if (!c) break;
                            o += c.length, u = c.sample.pts, l++
                        } else D.a.isHeader(t, o) ? (a = D.a.getID3Data(t, o), h.push({
                            pts: u,
                            dts: u,
                            data: a
                        }), o += a.length) : o++;
                    this.remuxer.remux(d, {
                        samples: []
                    }, {
                        samples: h,
                        inputTimeScale: 9e4
                    }, {
                        samples: []
                    }, e, r, i)
                }, t.prototype.destroy = function() {}, t
            }(),
            W = K,
            V = function() {
                function t() {
                    b(this, t)
                }
                return t.getSilentFrame = function(t, e) {
                    switch (t) {
                        case "mp4a.40.2":
                            if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                            if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                            if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                            if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                            if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                            if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                            break;
                        default:
                            if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                            if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                            if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                    }
                    return null
                }, t
            }(),
            Y = V,
            z = Math.pow(2, 32) - 1,
            X = function() {
                function t() {
                    E(this, t)
                }
                return t.init = function() {
                    t.types = {
                        avc1: [],
                        avcC: [],
                        btrt: [],
                        dinf: [],
                        dref: [],
                        esds: [],
                        ftyp: [],
                        hdlr: [],
                        mdat: [],
                        mdhd: [],
                        mdia: [],
                        mfhd: [],
                        minf: [],
                        moof: [],
                        moov: [],
                        mp4a: [],
                        ".mp3": [],
                        mvex: [],
                        mvhd: [],
                        pasp: [],
                        sdtp: [],
                        stbl: [],
                        stco: [],
                        stsc: [],
                        stsd: [],
                        stsz: [],
                        stts: [],
                        tfdt: [],
                        tfhd: [],
                        traf: [],
                        trak: [],
                        trun: [],
                        trex: [],
                        tkhd: [],
                        vmhd: [],
                        smhd: []
                    };
                    var e;
                    for (e in t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                    var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                        i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                    t.HDLR_TYPES = {
                        video: r,
                        audio: i
                    };
                    var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                        n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    t.STTS = t.STSC = t.STCO = n, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                    var o = new Uint8Array([105, 115, 111, 109]),
                        s = new Uint8Array([97, 118, 99, 49]),
                        l = new Uint8Array([0, 0, 0, 1]);
                    t.FTYP = t.box(t.types.ftyp, o, l, o, s), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, a))
                }, t.box = function(t) {
                    for (var e, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--;) i += r[a].byteLength;
                    for (e = new Uint8Array(i), e[0] = i >> 24 & 255, e[1] = i >> 16 & 255, e[2] = i >> 8 & 255, e[3] = 255 & i, e.set(t, 4), a = 0, i = 8; a < n; a++) e.set(r[a], i), i += r[a].byteLength;
                    return e
                }, t.hdlr = function(e) {
                    return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                }, t.mdat = function(e) {
                    return t.box(t.types.mdat, e)
                }, t.mdhd = function(e, r) {
                    r *= e;
                    var i = Math.floor(r / (z + 1)),
                        a = Math.floor(r % (z + 1));
                    return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
                }, t.mdia = function(e) {
                    return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                }, t.mfhd = function(e) {
                    return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                }, t.minf = function(e) {
                    return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                }, t.moof = function(e, r, i) {
                    return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
                }, t.moov = function(e) {
                    for (var r = e.length, i = []; r--;) i[r] = t.trak(e[r]);
                    return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)))
                }, t.mvex = function(e) {
                    for (var r = e.length, i = []; r--;) i[r] = t.trex(e[r]);
                    return t.box.apply(null, [t.types.mvex].concat(i))
                }, t.mvhd = function(e, r) {
                    r *= e;
                    var i = Math.floor(r / (z + 1)),
                        a = Math.floor(r % (z + 1)),
                        n = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return t.box(t.types.mvhd, n)
                }, t.sdtp = function(e) {
                    var r, i, a = e.samples || [],
                        n = new Uint8Array(4 + a.length);
                    for (i = 0; i < a.length; i++) r = a[i].flags, n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                    return t.box(t.types.sdtp, n)
                }, t.stbl = function(e) {
                    return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                }, t.avc1 = function(e) {
                    var r, i, a, n = [],
                        o = [];
                    for (r = 0; r < e.sps.length; r++) i = e.sps[r], a = i.byteLength, n.push(a >>> 8 & 255), n.push(255 & a), n = n.concat(Array.prototype.slice.call(i));
                    for (r = 0; r < e.pps.length; r++) i = e.pps[r], a = i.byteLength, o.push(a >>> 8 & 255), o.push(255 & a), o = o.concat(Array.prototype.slice.call(i));
                    var s = t.box(t.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | e.sps.length].concat(n).concat([e.pps.length]).concat(o))),
                        l = e.width,
                        u = e.height,
                        d = e.pixelRatio[0],
                        h = e.pixelRatio[1];
                    return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h])))
                }, t.esds = function(t) {
                    var e = t.config.length;
                    return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                }, t.mp4a = function(e) {
                    var r = e.samplerate;
                    return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
                }, t.mp3 = function(e) {
                    var r = e.samplerate;
                    return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                }, t.stsd = function(e) {
                    return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
                }, t.tkhd = function(e) {
                    var r = e.id,
                        i = e.duration * e.timescale,
                        a = e.width,
                        n = e.height,
                        o = Math.floor(i / (z + 1)),
                        s = Math.floor(i % (z + 1));
                    return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, n >> 8 & 255, 255 & n, 0, 0]))
                }, t.traf = function(e, r) {
                    var i = t.sdtp(e),
                        a = e.id,
                        n = Math.floor(r / (z + 1)),
                        o = Math.floor(r % (z + 1));
                    return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
                }, t.trak = function(e) {
                    return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                }, t.trex = function(e) {
                    var r = e.id;
                    return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                }, t.trun = function(e, r) {
                    var i, a, n, o, s, l, u = e.samples || [],
                        d = u.length,
                        h = 12 + 16 * d,
                        c = new Uint8Array(h);
                    for (r += 8 + h, c.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < d; i++) a = u[i], n = a.duration, o = a.size, s = a.flags, l = a.cts, c.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 & s.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                    return t.box(t.types.trun, c)
                }, t.initSegment = function(e) {
                    t.types || t.init();
                    var r, i = t.moov(e);
                    return r = new Uint8Array(t.FTYP.byteLength + i.byteLength), r.set(t.FTYP), r.set(i, t.FTYP.byteLength), r
                }, t
            }(),
            q = X,
            Q = function() {
                function t(e, r, i, a) {
                    T(this, t), this.observer = e, this.config = r, this.typeSupported = i;
                    var n = navigator.userAgent;
                    this.isSafari = a && a.indexOf("Apple") > -1 && n && !n.match("CriOS"), this.ISGenerated = !1
                }
                return t.prototype.destroy = function() {}, t.prototype.resetTimeStamp = function(t) {
                    this._initPTS = this._initDTS = t
                }, t.prototype.resetInitSegment = function() {
                    this.ISGenerated = !1
                }, t.prototype.remux = function(t, e, r, i, a, n, o) {
                    if (this.ISGenerated || this.generateIS(t, e, a), this.ISGenerated) {
                        var s = t.samples.length,
                            l = e.samples.length,
                            u = a,
                            d = a;
                        if (s && l) {
                            var h = (t.samples[0].dts - e.samples[0].dts) / e.inputTimeScale;
                            u += Math.max(0, h), d += Math.max(0, -h)
                        }
                        if (s) {
                            t.timescale || (w.b.warn("regenerate InitSegment as audio detected"), this.generateIS(t, e, a));
                            var c = this.remuxAudio(t, u, n, o);
                            if (l) {
                                var f = void 0;
                                c && (f = c.endPTS - c.startPTS), e.timescale || (w.b.warn("regenerate InitSegment as video detected"), this.generateIS(t, e, a)), this.remuxVideo(e, d, n, f, o)
                            }
                        } else {
                            var p = void 0;
                            l && (p = this.remuxVideo(e, d, n, o)), p && t.codec && this.remuxEmptyAudio(t, u, n, p)
                        }
                    }
                    r.samples.length && this.remuxID3(r, a), i.samples.length && this.remuxText(i, a), this.observer.trigger(S.a.FRAG_PARSED)
                }, t.prototype.generateIS = function(t, e, r) {
                    var i, a, n = this.observer,
                        o = t.samples,
                        s = e.samples,
                        l = this.typeSupported,
                        u = "audio/mp4",
                        d = {},
                        h = {
                            tracks: d
                        },
                        c = void 0 === this._initPTS;
                    if (c && (i = a = 1 / 0), t.config && o.length && (t.timescale = t.samplerate, w.b.log("audio sampling rate : " + t.samplerate), t.isAAC || (l.mpeg ? (u = "audio/mpeg", t.codec = "") : l.mp3 && (t.codec = "mp3")), d.audio = {
                            container: u,
                            codec: t.codec,
                            initSegment: !t.isAAC && l.mpeg ? new Uint8Array : q.initSegment([t]),
                            metadata: {
                                channelCount: t.channelCount
                            }
                        }, c && (i = a = o[0].pts - t.inputTimeScale * r)), e.sps && e.pps && s.length) {
                        var f = e.inputTimeScale;
                        e.timescale = f, d.video = {
                            container: "video/mp4",
                            codec: e.codec,
                            initSegment: q.initSegment([e]),
                            metadata: {
                                width: e.width,
                                height: e.height
                            }
                        }, c && (i = Math.min(i, s[0].pts - f * r), a = Math.min(a, s[0].dts - f * r), this.observer.trigger(S.a.INIT_PTS_FOUND, {
                            initPTS: i
                        }))
                    }
                    Object.keys(d).length ? (n.trigger(S.a.FRAG_PARSING_INIT_SEGMENT, h), this.ISGenerated = !0, c && (this._initPTS = i, this._initDTS = a)) : n.trigger(S.a.ERROR, {
                        type: _.b.MEDIA_ERROR,
                        details: _.a.FRAG_PARSING_ERROR,
                        fatal: !1,
                        reason: "no audio/video samples found"
                    })
                }, t.prototype.remuxVideo = function(t, e, r, i, a) {
                    var n, o, s, l, u, d, h, c = 8,
                        f = t.timescale,
                        p = t.samples,
                        g = [],
                        v = p.length,
                        y = this._PTSNormalize,
                        m = this._initDTS,
                        b = this.nextAvcDts,
                        E = this.isSafari;
                    E && (r |= p.length && b && (a && Math.abs(e - b / f) < .1 || Math.abs(p[0].pts - b - m) < f / 5)), r || (b = e * f), p.forEach(function(t) {
                        t.pts = y(t.pts - m, b), t.dts = y(t.dts - m, b)
                    }), p.sort(function(t, e) {
                        var r = t.dts - e.dts,
                            i = t.pts - e.pts;
                        return r || (i || t.id - e.id)
                    });
                    var T = p.reduce(function(t, e) {
                        return Math.max(Math.min(t, e.pts - e.dts), -18e3)
                    }, 0);
                    if (T < 0) {
                        w.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(T / 90) + " ms to overcome this issue");
                        for (var R = 0; R < p.length; R++) p[R].dts += T
                    }
                    var A = p[0];
                    u = Math.max(A.dts, 0), l = Math.max(A.pts, 0);
                    var L = Math.round((u - b) / 90);
                    r && L && (L > 1 ? w.b.log("AVC:" + L + " ms hole between fragments detected,filling it") : L < -1 && w.b.log("AVC:" + -L + " ms overlapping between fragments detected"), u = b, p[0].dts = u, l = Math.max(l - L, b), p[0].pts = l, w.b.log("Video/PTS/DTS adjusted: " + Math.round(l / 90) + "/" + Math.round(u / 90) + ",delta:" + L + " ms")), A = p[p.length - 1], h = Math.max(A.dts, 0), d = Math.max(A.pts, 0, h), E && (n = Math.round((h - u) / (p.length - 1)));
                    for (var D = 0, k = 0, I = 0; I < v; I++) {
                        for (var O = p[I], C = O.units, P = C.length, x = 0, F = 0; F < P; F++) x += C[F].data.length;
                        k += x, D += P, O.length = x, O.dts = E ? u + I * n : Math.max(O.dts, u), O.pts = Math.max(O.pts, O.dts)
                    }
                    var N = k + 4 * D + 8;
                    try {
                        o = new Uint8Array(N)
                    } catch (t) {
                        return void this.observer.trigger(S.a.ERROR, {
                            type: _.b.MUX_ERROR,
                            details: _.a.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            bytes: N,
                            reason: "fail allocating video mdat " + N
                        })
                    }
                    var M = new DataView(o.buffer);
                    M.setUint32(0, N), o.set(q.types.mdat, 4);
                    for (var U = 0; U < v; U++) {
                        for (var B = p[U], G = B.units, H = 0, j = void 0, K = 0, W = G.length; K < W; K++) {
                            var V = G[K],
                                Y = V.data,
                                z = V.data.byteLength;
                            M.setUint32(c, z), c += 4, o.set(Y, c), c += z, H += 4 + z
                        }
                        if (E) j = Math.max(0, n * Math.round((B.pts - B.dts) / n));
                        else {
                            if (U < v - 1) n = p[U + 1].dts - B.dts;
                            else {
                                var X = this.config,
                                    Q = B.dts - p[U > 0 ? U - 1 : U].dts;
                                if (X.stretchShortVideoTrack) {
                                    var J = X.maxBufferHole,
                                        $ = X.maxSeekHole,
                                        Z = Math.floor(Math.min(J, $) * f),
                                        tt = (i ? l + i * f : this.nextAudioPts) - B.pts;
                                    tt > Z ? (n = tt - Q, n < 0 && (n = Q), w.b.log("It is approximately " + tt / 90 + " ms to the next segment; using duration " + n / 90 + " ms for the last video frame.")) : n = Q
                                } else n = Q
                            }
                            j = Math.round(B.pts - B.dts)
                        }
                        g.push({
                            size: H,
                            duration: n,
                            cts: j,
                            flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: B.key ? 2 : 1,
                                isNonSync: B.key ? 0 : 1
                            }
                        })
                    }
                    this.nextAvcDts = h + n;
                    var et = t.dropped;
                    if (t.len = 0, t.nbNalu = 0, t.dropped = 0, g.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                        var rt = g[0].flags;
                        rt.dependsOn = 2, rt.isNonSync = 0
                    }
                    t.samples = g, s = q.moof(t.sequenceNumber++, u, t), t.samples = [];
                    var it = {
                        data1: s,
                        data2: o,
                        startPTS: l / f,
                        endPTS: (d + n) / f,
                        startDTS: u / f,
                        endDTS: this.nextAvcDts / f,
                        type: "video",
                        nb: g.length,
                        dropped: et
                    };
                    return this.observer.trigger(S.a.FRAG_PARSING_DATA, it), it
                }, t.prototype.remuxAudio = function(t, e, r, i) {
                    var a, n, o, s, l, u, d, h = t.inputTimeScale,
                        c = t.timescale,
                        f = h / c,
                        p = t.isAAC ? 1024 : 1152,
                        g = p * f,
                        v = this._PTSNormalize,
                        y = this._initDTS,
                        m = !t.isAAC && this.typeSupported.mpeg,
                        b = t.samples,
                        E = [],
                        T = this.nextAudioPts;
                    if (r |= b.length && T && (i && Math.abs(e - T / h) < .1 || Math.abs(b[0].pts - T - y) < 20 * g), r || (T = e * h), b.forEach(function(t) {
                            t.pts = t.dts = v(t.pts - y, T)
                        }), b.sort(function(t, e) {
                            return t.pts - e.pts
                        }), i && t.isAAC)
                        for (var R = this.config.maxAudioFramesDrift, A = 0, L = T; A < b.length;) {
                            var D, k = b[A],
                                I = k.pts;
                            D = I - L;
                            var O = Math.abs(1e3 * D / h);
                            if (D <= -R * g) w.b.warn("Dropping 1 audio frame @ " + (L / h).toFixed(3) + "s due to " + Math.round(O) + " ms overlap."), b.splice(A, 1), t.len -= k.unit.length;
                            else if (D >= R * g && O < 1e4 && L) {
                                var C = Math.round(D / g);
                                w.b.warn("Injecting " + C + " audio frame @ " + (L / h).toFixed(3) + "s due to " + Math.round(1e3 * D / h) + " ms gap.");
                                for (var P = 0; P < C; P++) {
                                    var x = Math.max(L, 0);
                                    o = Y.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), o || (w.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), o = k.unit.subarray()), b.splice(A, 0, {
                                        unit: o,
                                        pts: x,
                                        dts: x
                                    }), t.len += o.length, L += g, A++
                                }
                                k.pts = k.dts = L, L += g, A++
                            } else Math.abs(D), k.pts = k.dts = L, L += g, A++
                        }
                    for (var F = 0, N = b.length; F < N; F++) {
                        var M = b[F],
                            U = M.unit,
                            B = M.pts;
                        if (void 0 !== d) n.duration = Math.round((B - d) / f);
                        else {
                            var G = Math.round(1e3 * (B - T) / h),
                                H = 0;
                            if (r && t.isAAC && G) {
                                if (G > 0 && G < 1e4) H = Math.round((B - T) / g), w.b.log(G + " ms hole between AAC samples detected,filling it"), H > 0 && (o = Y.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), o || (o = U.subarray()), t.len += H * o.length);
                                else if (G < -12) {
                                    w.b.log("drop overlapping AAC sample, expected/parsed/delta:" + (T / h).toFixed(3) + "s/" + (B / h).toFixed(3) + "s/" + -G + "ms"), t.len -= U.byteLength;
                                    continue
                                }
                                B = T
                            }
                            if (u = Math.max(0, B), !(t.len > 0)) return;
                            var j = m ? t.len : t.len + 8;
                            a = m ? 0 : 8;
                            try {
                                s = new Uint8Array(j)
                            } catch (t) {
                                return void this.observer.trigger(S.a.ERROR, {
                                    type: _.b.MUX_ERROR,
                                    details: _.a.REMUX_ALLOC_ERROR,
                                    fatal: !1,
                                    bytes: j,
                                    reason: "fail allocating audio mdat " + j
                                })
                            }
                            if (!m) {
                                new DataView(s.buffer).setUint32(0, j), s.set(q.types.mdat, 4)
                            }
                            for (var K = 0; K < H; K++) o = Y.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), o || (w.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), o = U.subarray()), s.set(o, a), a += o.byteLength, n = {
                                size: o.byteLength,
                                cts: 0,
                                duration: 1024,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: 1
                                }
                            }, E.push(n)
                        }
                        s.set(U, a);
                        var W = U.byteLength;
                        a += W, n = {
                            size: W,
                            cts: 0,
                            duration: 0,
                            flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: 1
                            }
                        }, E.push(n), d = B
                    }
                    var V = 0,
                        z = E.length;
                    if (z >= 2 && (V = E[z - 2].duration, n.duration = V), z) {
                        this.nextAudioPts = T = d + f * V, t.len = 0, t.samples = E, l = m ? new Uint8Array : q.moof(t.sequenceNumber++, u / f, t), t.samples = [];
                        var X = u / h,
                            Q = T / h,
                            J = {
                                data1: l,
                                data2: s,
                                startPTS: X,
                                endPTS: Q,
                                startDTS: X,
                                endDTS: Q,
                                type: "audio",
                                nb: z
                            };
                        return this.observer.trigger(S.a.FRAG_PARSING_DATA, J), J
                    }
                    return null
                }, t.prototype.remuxEmptyAudio = function(t, e, r, i) {
                    var a = t.inputTimeScale,
                        n = t.samplerate ? t.samplerate : a,
                        o = a / n,
                        s = this.nextAudioPts,
                        l = (void 0 !== s ? s : i.startDTS * a) + this._initDTS,
                        u = i.endDTS * a + this._initDTS,
                        d = 1024 * o,
                        h = Math.ceil((u - l) / d),
                        c = Y.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                    if (w.b.warn("remux empty Audio"), !c) return void w.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                    for (var f = [], p = 0; p < h; p++) {
                        var g = l + p * d;
                        f.push({
                            unit: c,
                            pts: g,
                            dts: g
                        }), t.len += c.length
                    }
                    t.samples = f, this.remuxAudio(t, e, r)
                }, t.prototype.remuxID3 = function(t, e) {
                    var r, i = t.samples.length,
                        a = t.inputTimeScale,
                        n = this._initPTS,
                        o = this._initDTS;
                    if (i) {
                        for (var s = 0; s < i; s++) r = t.samples[s], r.pts = (r.pts - n) / a, r.dts = (r.dts - o) / a;
                        this.observer.trigger(S.a.FRAG_PARSING_METADATA, {
                            samples: t.samples
                        })
                    }
                    t.samples = [], e = e
                }, t.prototype.remuxText = function(t, e) {
                    t.samples.sort(function(t, e) {
                        return t.pts - e.pts
                    });
                    var r, i = t.samples.length,
                        a = t.inputTimeScale,
                        n = this._initPTS;
                    if (i) {
                        for (var o = 0; o < i; o++) r = t.samples[o], r.pts = (r.pts - n) / a;
                        this.observer.trigger(S.a.FRAG_PARSING_USERDATA, {
                            samples: t.samples
                        })
                    }
                    t.samples = [], e = e
                }, t.prototype._PTSNormalize = function(t, e) {
                    var r;
                    if (void 0 === e) return t;
                    for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += r;
                    return t
                }, t
            }(),
            J = Q,
            $ = function() {
                function t(e) {
                    R(this, t), this.observer = e
                }
                return t.prototype.destroy = function() {}, t.prototype.resetTimeStamp = function() {}, t.prototype.resetInitSegment = function() {}, t.prototype.remux = function(t, e, r, i, a, n, o, s) {
                    var l = this.observer,
                        u = "";
                    t && (u += "audio"), e && (u += "video"), l.trigger(S.a.FRAG_PARSING_DATA, {
                        data1: s,
                        startPTS: a,
                        startDTS: a,
                        type: u,
                        nb: 1,
                        dropped: 0
                    }), l.trigger(S.a.FRAG_PARSED)
                }, t
            }(),
            Z = $,
            tt = function() {
                function t(e, r, i, a) {
                    A(this, t), this.observer = e, this.typeSupported = r, this.config = i, this.vendor = a
                }
                return t.prototype.destroy = function() {
                    var t = this.demuxer;
                    t && t.destroy()
                }, t.prototype.push = function(t, e, r, i, a, n, o, s, l, u, d, h) {
                    if (t.byteLength > 0 && null != e && null != e.key && "AES-128" === e.method) {
                        var c = this.decrypter;
                        null == c && (c = this.decrypter = new L.a(this.observer, this.config));
                        var f, p = this;
                        try {
                            f = performance.now()
                        } catch (t) {
                            f = Date.now()
                        }
                        c.decrypt(t, e.key.buffer, e.iv.buffer, function(t) {
                            var c;
                            try {
                                c = performance.now()
                            } catch (t) {
                                c = Date.now()
                            }
                            p.observer.trigger(S.a.FRAG_DECRYPTED, {
                                stats: {
                                    tstart: f,
                                    tdecrypt: c
                                }
                            }), p.pushDecrypted(new Uint8Array(t), e, new Uint8Array(r), i, a, n, o, s, l, u, d, h)
                        })
                    } else this.pushDecrypted(new Uint8Array(t), e, new Uint8Array(r), i, a, n, o, s, l, u, d, h)
                }, t.prototype.pushDecrypted = function(t, e, r, i, a, n, o, s, l, u, d, h) {
                    var c = this.demuxer;
                    if (!c || o && !this.probe(t)) {
                        for (var f = this.observer, p = this.typeSupported, g = this.config, v = [{
                                demux: j,
                                remux: J
                            }, {
                                demux: I,
                                remux: J
                            }, {
                                demux: W,
                                remux: J
                            }, {
                                demux: P,
                                remux: Z
                            }], y = 0, m = v.length; y < m; y++) {
                            var b = v[y],
                                E = b.demux.probe;
                            if (E(t)) {
                                var T = this.remuxer = new b.remux(f, g, p, this.vendor);
                                c = new b.demux(f, T, g, p), this.probe = E;
                                break
                            }
                        }
                        if (!c) return void f.trigger(S.a.ERROR, {
                            type: _.b.MEDIA_ERROR,
                            details: _.a.FRAG_PARSING_ERROR,
                            fatal: !0,
                            reason: "no demux matching with content found"
                        });
                        this.demuxer = c
                    }
                    var R = this.remuxer;
                    (o || s) && (c.resetInitSegment(r, i, a, u), R.resetInitSegment()), o && (c.resetTimeStamp(h), R.resetTimeStamp(h)), "function" == typeof c.setDecryptData && c.setDecryptData(e), c.append(t, n, l, d)
                }, t
            }();
        e.a = tt
    }, function(t, e, r) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function n(t, e) {
            var r = Gt[e];
            return !!r && !0 === r[t.slice(0, 4)]
        }

        function o(t, e) {
            return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
        }

        function s(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function l(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function u(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function d(t, e) {
            if (!t) return null;
            for (var r = null, i = 0; i < t.length; i++) {
                var a = t[i];
                a.id === e && (r = a)
            }
            return r
        }

        function h(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function c(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function f(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function p(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function g(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function v(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function y() {
            if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
        }

        function m(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function b(t, e, r) {
            var i = t[e],
                a = t[r],
                n = a.startPTS;
            isNaN(n) ? a.start = r > e ? i.start + i.duration : Math.max(i.start - a.duration, 0) : r > e ? (i.duration = n - i.start, i.duration < 0 && Ct.b.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (a.duration = i.start - n, a.duration < 0 && Ct.b.warn("negative duration computed for frag " + a.sn + ",level " + a.level + ", there should be some duration drift between playlist and fragment!"))
        }

        function E(t, e, r, i, a, n) {
            var o = r;
            if (!isNaN(e.startPTS)) {
                var s = Math.abs(e.startPTS - r);
                isNaN(e.deltaPTS) ? e.deltaPTS = s : e.deltaPTS = Math.max(s, e.deltaPTS), o = Math.max(r, e.startPTS), r = Math.min(r, e.startPTS), i = Math.max(i, e.endPTS), a = Math.min(a, e.startDTS), n = Math.max(n, e.endDTS)
            }
            var l = r - e.start;
            e.start = e.startPTS = r, e.maxStartPTS = o, e.endPTS = i, e.startDTS = a, e.endDTS = n, e.duration = i - r;
            var u = e.sn;
            if (!t || u < t.startSN || u > t.endSN) return 0;
            var d, h, c;
            for (d = u - t.startSN, h = t.fragments, h[d] = e, c = d; c > 0; c--) b(h, c, c - 1);
            for (c = d; c < h.length - 1; c++) b(h, c, c + 1);
            return t.PTSKnown = !0, l
        }

        function T(t, e) {
            var r, i = Math.max(t.startSN, e.startSN) - e.startSN,
                a = Math.min(t.endSN, e.endSN) - e.startSN,
                n = e.startSN - t.startSN,
                o = t.fragments,
                s = e.fragments,
                l = 0;
            if (a < i) return void(e.PTSKnown = !1);
            for (var u = i; u <= a; u++) {
                var d = o[n + u],
                    h = s[u];
                h && d && (l = d.cc - h.cc, isNaN(d.startPTS) || (h.start = h.startPTS = d.startPTS, h.endPTS = d.endPTS, h.duration = d.duration, h.backtracked = d.backtracked, h.dropped = d.dropped, r = h))
            }
            if (l)
                for (Ct.b.log("discontinuity sliding from playlist, take drift into account"), u = 0; u < s.length; u++) s[u].cc += l;
            if (r) E(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS);
            else if (n >= 0 && n < o.length) {
                var c = o[n].start;
                for (u = 0; u < s.length; u++) s[u].start += c
            }
            e.PTSKnown = t.PTSKnown
        }

        function R(t, e) {
            for (var r = null, i = 0; i < t.length; i += 1) {
                var a = t[i];
                if (a && a.cc === e) {
                    r = a;
                    break
                }
            }
            return r
        }

        function A(t, e) {
            return ee.search(t, function(t) {
                return t.cc < e ? 1 : t.cc > e ? -1 : 0
            })
        }

        function S(t, e, r) {
            var i = !1;
            return e && e.details && r && (r.endCC > r.startCC || t && t.cc < r.startCC) && (i = !0), i
        }

        function _(t, e) {
            var r = t.fragments,
                i = e.fragments;
            if (!i.length || !r.length) return void Ct.b.log("No fragments to align");
            var a = R(r, i[0].cc);
            return !a || a && !a.startPTS ? void Ct.b.log("No frag in previous level to align on") : a
        }

        function L(t, e) {
            e.fragments.forEach(function(e) {
                if (e) {
                    var r = e.start + t;
                    e.start = e.startPTS = r, e.endPTS = r + e.duration
                }
            }), e.PTSKnown = !0
        }

        function w(t, e, r) {
            if (S(t, e, r)) {
                var i = _(e.details, r);
                i && (Ct.b.log("Adjusting PTS using last level due to CC increase within current level"), L(i.start, r))
            }
            if (!1 === r.PTSKnown && e && e.details) {
                var a = e.details.programDateTime,
                    n = r.programDateTime,
                    o = (n - a) / 1e3 + e.details.fragments[0].start;
                isNaN(o) || (Ct.b.log("adjusting PTS using programDateTime delta, sliding:" + o.toFixed(3)), L(o, r))
            }
        }

        function D(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function k(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function I(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function O(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function C(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function P(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function x(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function F(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function N(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function M(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function U(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function B(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function G(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function H(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function j(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function K(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function W(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function V(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function Y(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function z(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function X(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function q(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function Q(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function J(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function $(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function Z(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function tt(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function et(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function rt(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function it(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function at() {
            this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new qe, this.regionList = []
        }

        function nt(t) {
            function e(t, e, r, i) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + (0 | i) / 1e3
            }
            var r = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return r ? r[3] ? e(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? e(r[1], r[2], 0, r[4]) : e(0, r[1], r[2], r[4]) : null
        }

        function ot() {
            this.values = Object.create(null)
        }

        function st(t, e, r, i) {
            var a = i ? t.split(i) : [t];
            for (var n in a)
                if ("string" == typeof a[n]) {
                    var o = a[n].split(r);
                    if (2 === o.length) {
                        var s = o[0],
                            l = o[1];
                        e(s, l)
                    }
                }
        }

        function lt(t, e, r) {
            function i() {
                var e = nt(t);
                if (null === e) throw new Error("Malformed timestamp: " + n);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
            }

            function a() {
                t = t.replace(/^\s+/, "")
            }
            var n = t;
            if (a(), e.startTime = i(), a(), "--\x3e" !== t.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
            t = t.substr(3), a(), e.endTime = i(), a(),
                function(t, e) {
                    var i = new ot;
                    st(t, function(t, e) {
                        switch (t) {
                            case "region":
                                for (var a = r.length - 1; a >= 0; a--)
                                    if (r[a].id === e) {
                                        i.set(t, r[a].region);
                                        break
                                    }
                                break;
                            case "vertical":
                                i.alt(t, e, ["rl", "lr"]);
                                break;
                            case "line":
                                var n = e.split(","),
                                    o = n[0];
                                i.integer(t, o), i.percent(t, o) && i.set("snapToLines", !1), i.alt(t, o, ["auto"]), 2 === n.length && i.alt("lineAlign", n[1], ["start", Je, "end"]);
                                break;
                            case "position":
                                n = e.split(","), i.percent(t, n[0]), 2 === n.length && i.alt("positionAlign", n[1], ["start", Je, "end", "line-left", "line-right", "auto"]);
                                break;
                            case "size":
                                i.percent(t, e);
                                break;
                            case "align":
                                i.alt(t, e, ["start", Je, "end", "left", "right"])
                        }
                    }, /:/, /\s/), e.region = i.get("region", null), e.vertical = i.get("vertical", "");
                    var a = i.get("line", "auto");
                    "auto" === a && -1 === Qe.line && (a = -1), e.line = a, e.lineAlign = i.get("lineAlign", "start"), e.snapToLines = i.get("snapToLines", !0), e.size = i.get("size", 100), e.align = i.get("align", Je);
                    var n = i.get("position", "auto");
                    "auto" === n && 50 === Qe.position && (n = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = n
                }(t, e)
        }

        function ut(t) {
            return t.replace(/<br(?: \/)?>/gi, "\n")
        }

        function dt(t, e, r, i) {
            for (var a, n, o, s, l, u = window.VTTCue || window.TextTrackCue, d = 0; d < i.rows.length; d++)
                if (a = i.rows[d], o = !0, s = 0, l = "", !a.isEmpty()) {
                    for (var h = 0; h < a.chars.length; h++) a.chars[h].uchar.match(/\s/) && o ? s++ : (l += a.chars[h].uchar, o = !1);
                    a.cueStartTime = e, e === r && (r += 1e-4), n = new u(e, r, ut(l.trim())), s >= 16 ? s-- : s++, navigator.userAgent.match(/Firefox\//) ? n.line = d + 1 : n.line = d > 7 ? d - 2 : d + 1, n.align = "left", n.position = Math.max(0, Math.min(100, s / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), t.addCue(n)
                }
        }

        function ht(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function ct(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function ft(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function pt(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function gt(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function vt(t) {
            if (t && t.cues)
                for (; t.cues.length > 0;) t.removeCue(t.cues[0])
        }

        function yt(t, e) {
            return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
        }

        function mt(t, e, r, i) {
            return Math.min(e, i) - Math.max(t, r)
        }

        function bt(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function Et(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function Tt(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function Rt(t) {
            for (var e = [], r = 0; r < t.length; r++) "subtitles" === t[r].kind && e.push(t[r]);
            return e
        }

        function At(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function St(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function _t(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function Lt(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var wt = {};
        r.d(wt, "newCue", function() {
            return dt
        });
        var Dt = r(6),
            kt = r.n(Dt),
            It = r(1),
            Ot = r(2),
            Ct = r(0),
            Pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            xt = function() {
                function t(e) {
                    i(this, t), this.hls = e, this.onEvent = this.onEvent.bind(this);
                    for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) a[n - 1] = arguments[n];
                    this.handledEvents = a, this.useGenericHandler = !0, this.registerListeners()
                }
                return t.prototype.destroy = function() {
                    this.unregisterListeners()
                }, t.prototype.isEventHandler = function() {
                    return "object" === Pt(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
                }, t.prototype.registerListeners = function() {
                    this.isEventHandler() && this.handledEvents.forEach(function(t) {
                        if ("hlsEventGeneric" === t) throw new Error("Forbidden event name: " + t);
                        this.hls.on(t, this.onEvent)
                    }, this)
                }, t.prototype.unregisterListeners = function() {
                    this.isEventHandler() && this.handledEvents.forEach(function(t) {
                        this.hls.off(t, this.onEvent)
                    }, this)
                }, t.prototype.onEvent = function(t, e) {
                    this.onEventGeneric(t, e)
                }, t.prototype.onEventGeneric = function(t, e) {
                    var r = function(t, e) {
                        var r = "on" + t.replace("hls", "");
                        if ("function" != typeof this[r]) throw new Error("Event " + t + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
                        return this[r].bind(this, e)
                    };
                    try {
                        r.call(this, t, e).call()
                    } catch (e) {
                        Ct.b.error("internal error happened while processing " + t + ":" + e.message), this.hls.trigger(It.a.ERROR, {
                            type: Ot.b.OTHER_ERROR,
                            details: Ot.a.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: t,
                            err: e
                        })
                    }
                }, t
            }(),
            Ft = xt,
            Nt = /^(\d+)x(\d+)$/,
            Mt = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
            Ut = function() {
                function t(e) {
                    a(this, t), "string" == typeof e && (e = t.parseAttrList(e));
                    for (var r in e) e.hasOwnProperty(r) && (this[r] = e[r])
                }
                return t.prototype.decimalInteger = function(t) {
                    var e = parseInt(this[t], 10);
                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                }, t.prototype.hexadecimalInteger = function(t) {
                    if (this[t]) {
                        var e = (this[t] || "0x").slice(2);
                        e = (1 & e.length ? "0" : "") + e;
                        for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++) r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                        return r
                    }
                    return null
                }, t.prototype.hexadecimalIntegerAsNumber = function(t) {
                    var e = parseInt(this[t], 16);
                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                }, t.prototype.decimalFloatingPoint = function(t) {
                    return parseFloat(this[t])
                }, t.prototype.enumeratedString = function(t) {
                    return this[t]
                }, t.prototype.decimalResolution = function(t) {
                    var e = Nt.exec(this[t]);
                    if (null !== e) return {
                        width: parseInt(e[1], 10),
                        height: parseInt(e[2], 10)
                    }
                }, t.parseAttrList = function(t) {
                    var e, r = {};
                    for (Mt.lastIndex = 0; null !== (e = Mt.exec(t));) {
                        var i = e[2];
                        0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[e[1]] = i
                    }
                    return r
                }, t
            }(),
            Bt = Ut,
            Gt = {
                audio: {
                    a3ds: !0,
                    "ac-3": !0,
                    "ac-4": !0,
                    alac: !0,
                    alaw: !0,
                    dra1: !0,
                    "dts+": !0,
                    "dts-": !0,
                    dtsc: !0,
                    dtse: !0,
                    dtsh: !0,
                    "ec-3": !0,
                    enca: !0,
                    g719: !0,
                    g726: !0,
                    m4ae: !0,
                    mha1: !0,
                    mha2: !0,
                    mhm1: !0,
                    mhm2: !0,
                    mlpa: !0,
                    mp4a: !0,
                    "raw ": !0,
                    Opus: !0,
                    samr: !0,
                    sawb: !0,
                    sawp: !0,
                    sevc: !0,
                    sqcp: !0,
                    ssmv: !0,
                    twos: !0,
                    ulaw: !0
                },
                video: {
                    avc1: !0,
                    avc2: !0,
                    avc3: !0,
                    avc4: !0,
                    avcp: !0,
                    drac: !0,
                    dvav: !0,
                    dvhe: !0,
                    encv: !0,
                    hev1: !0,
                    hvc1: !0,
                    mjp2: !0,
                    mp4v: !0,
                    mvc1: !0,
                    mvc2: !0,
                    mvc3: !0,
                    mvc4: !0,
                    resv: !0,
                    rv60: !0,
                    s263: !0,
                    svc1: !0,
                    svc2: !0,
                    "vc-1": !0,
                    vp08: !0,
                    vp09: !0
                }
            },
            Ht = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            jt = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
            Kt = /#EXT-X-MEDIA:(.*)/g,
            Wt = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
            Vt = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
            Yt = function() {
                function t() {
                    u(this, t), this.method = null, this.key = null, this.iv = null, this._uri = null
                }
                return Ht(t, [{
                    key: "uri",
                    get: function() {
                        return !this._uri && this.reluri && (this._uri = kt.a.buildAbsoluteURL(this.baseuri, this.reluri, {
                            alwaysNormalize: !0
                        })), this._uri
                    }
                }]), t
            }(),
            zt = function() {
                function t() {
                    u(this, t), this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = []
                }
                return t.prototype.createInitializationVector = function(t) {
                    for (var e = new Uint8Array(16), r = 12; r < 16; r++) e[r] = t >> 8 * (15 - r) & 255;
                    return e
                }, t.prototype.fragmentDecryptdataFromLevelkey = function(t, e) {
                    var r = t;
                    return t && t.method && t.uri && !t.iv && (r = new Yt, r.method = t.method, r.baseuri = t.baseuri, r.reluri = t.reluri, r.iv = this.createInitializationVector(e)), r
                }, t.prototype.cloneObj = function(t) {
                    return JSON.parse(JSON.stringify(t))
                }, Ht(t, [{
                    key: "url",
                    get: function() {
                        return !this._url && this.relurl && (this._url = kt.a.buildAbsoluteURL(this.baseurl, this.relurl, {
                            alwaysNormalize: !0
                        })), this._url
                    },
                    set: function(t) {
                        this._url = t
                    }
                }, {
                    key: "programDateTime",
                    get: function() {
                        return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), this._programDateTime
                    }
                }, {
                    key: "byteRange",
                    get: function() {
                        if (!this._byteRange) {
                            var t = this._byteRange = [];
                            if (this.rawByteRange) {
                                var e = this.rawByteRange.split("@", 2);
                                if (1 === e.length) {
                                    var r = this.lastByteRangeEndOffset;
                                    t[0] = r || 0
                                } else t[0] = parseInt(e[1]);
                                t[1] = parseInt(e[0]) + t[0]
                            }
                        }
                        return this._byteRange
                    }
                }, {
                    key: "byteRangeStartOffset",
                    get: function() {
                        return this.byteRange[0]
                    }
                }, {
                    key: "byteRangeEndOffset",
                    get: function() {
                        return this.byteRange[1]
                    }
                }, {
                    key: "decryptdata",
                    get: function() {
                        return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
                    }
                }]), t
            }(),
            Xt = function(t) {
                function e(r) {
                    u(this, e);
                    var i = s(this, t.call(this, r, It.a.MANIFEST_LOADING, It.a.LEVEL_LOADING, It.a.AUDIO_TRACK_LOADING, It.a.SUBTITLE_TRACK_LOADING));
                    return i.loaders = {}, i
                }
                return l(e, t), e.prototype.destroy = function() {
                    for (var t in this.loaders) {
                        var e = this.loaders[t];
                        e && e.destroy()
                    }
                    this.loaders = {}, Ft.prototype.destroy.call(this)
                }, e.prototype.onManifestLoading = function(t) {
                    this.load(t.url, {
                        type: "manifest"
                    })
                }, e.prototype.onLevelLoading = function(t) {
                    this.load(t.url, {
                        type: "level",
                        level: t.level,
                        id: t.id
                    })
                }, e.prototype.onAudioTrackLoading = function(t) {
                    this.load(t.url, {
                        type: "audioTrack",
                        id: t.id
                    })
                }, e.prototype.onSubtitleTrackLoading = function(t) {
                    this.load(t.url, {
                        type: "subtitleTrack",
                        id: t.id
                    })
                }, e.prototype.load = function(t, e) {
                    var r = this.loaders[e.type];
                    if (r) {
                        var i = r.context;
                        if (i && i.url === t) return void Ct.b.trace("playlist request ongoing");
                        Ct.b.warn("abort previous loader for type:" + e.type), r.abort()
                    }
                    var a = this.hls.config,
                        n = void 0,
                        o = void 0,
                        s = void 0,
                        l = void 0;
                    "manifest" === e.type ? (n = a.manifestLoadingMaxRetry, o = a.manifestLoadingTimeOut, s = a.manifestLoadingRetryDelay, l = a.manifestLoadingMaxRetryTimeout) : (n = a.levelLoadingMaxRetry, o = a.levelLoadingTimeOut, s = a.levelLoadingRetryDelay, l = a.levelLoadingMaxRetryTimeout, Ct.b.log("loading playlist for " + e.type + " " + (e.level || e.id))), r = this.loaders[e.type] = e.loader = void 0 !== a.pLoader ? new a.pLoader(a) : new a.loader(a), e.url = t, e.responseType = "";
                    var u = void 0,
                        d = void 0;
                    u = {
                        timeout: o,
                        maxRetry: n,
                        retryDelay: s,
                        maxRetryDelay: l
                    }, d = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this)
                    }, r.load(e, u, d)
                }, e.prototype.resolve = function(t, e) {
                    return kt.a.buildAbsoluteURL(e, t, {
                        alwaysNormalize: !0
                    })
                }, e.prototype.parseMasterPlaylist = function(t, e) {
                    var r = [],
                        i = void 0;
                    for (jt.lastIndex = 0; null != (i = jt.exec(t));) {
                        var a = {},
                            o = a.attrs = new Bt(i[1]);
                        a.url = this.resolve(i[2], e);
                        var s = o.decimalResolution("RESOLUTION");
                        s && (a.width = s.width, a.height = s.height), a.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"), a.name = o.NAME,
                            function(t, e) {
                                ["video", "audio"].forEach(function(r) {
                                    var i = t.filter(function(t) {
                                        return n(t, r)
                                    });
                                    if (i.length) {
                                        var a = i.filter(function(t) {
                                            return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                                        });
                                        e[r + "Codec"] = a.length > 0 ? a[0] : i[0], t = t.filter(function(t) {
                                            return -1 === i.indexOf(t)
                                        })
                                    }
                                }), e.unknownCodecs = t
                            }([].concat((o.CODECS || "").split(/[ ,]+/)), a), a.videoCodec && -1 !== a.videoCodec.indexOf("avc1") && (a.videoCodec = this.avc1toavcoti(a.videoCodec)), r.push(a)
                    }
                    return r
                }, e.prototype.parseMasterPlaylistMedia = function(t, e, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                        a = void 0,
                        n = [],
                        o = 0;
                    for (Kt.lastIndex = 0; null !== (a = Kt.exec(t));) {
                        var s = {},
                            l = new Bt(a[1]);
                        if (l.TYPE === r) {
                            if (s.groupId = l["GROUP-ID"], s.name = l.NAME, s.type = r, s.default = "YES" === l.DEFAULT, s.autoselect = "YES" === l.AUTOSELECT, s.forced = "YES" === l.FORCED, l.URI && (s.url = this.resolve(l.URI, e)), s.lang = l.LANGUAGE, s.name || (s.name = s.lang), i.length) {
                                var u = d(i, s.groupId);
                                s.audioCodec = u ? u.codec : i[0].codec
                            }
                            s.id = o++, n.push(s)
                        }
                    }
                    return n
                }, e.prototype.avc1toavcoti = function(t) {
                    var e, r = t.split(".");
                    return r.length > 2 ? (e = r.shift() + ".", e += parseInt(r.shift()).toString(16), e += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : e = t, e
                }, e.prototype.parseLevelPlaylist = function(t, e, r, i) {
                    var a, n, o = 0,
                        s = 0,
                        l = {
                            type: null,
                            version: null,
                            url: e,
                            fragments: [],
                            live: !0,
                            startSN: 0
                        },
                        u = new Yt,
                        d = 0,
                        h = null,
                        c = new zt;
                    for (Wt.lastIndex = 0; null !== (a = Wt.exec(t));) {
                        var f = a[1];
                        if (f) {
                            c.duration = parseFloat(f);
                            var p = (" " + a[2]).slice(1);
                            c.title = p || null, c.tagList.push(p ? ["INF", f, p] : ["INF", f])
                        } else if (a[3]) {
                            if (!isNaN(c.duration)) {
                                var g = o++;
                                c.type = i, c.start = s, c.levelkey = u, c.sn = g, c.level = r, c.cc = d, c.baseurl = e, c.relurl = (" " + a[3]).slice(1), l.fragments.push(c), h = c, s += c.duration, c = new zt
                            }
                        } else if (a[4]) {
                            if (c.rawByteRange = (" " + a[4]).slice(1), h) {
                                var v = h.byteRangeEndOffset;
                                v && (c.lastByteRangeEndOffset = v)
                            }
                        } else if (a[5]) c.rawProgramDateTime = (" " + a[5]).slice(1), c.tagList.push(["PROGRAM-DATE-TIME", c.rawProgramDateTime]), void 0 === l.programDateTime && (l.programDateTime = new Date(new Date(Date.parse(a[5])) - 1e3 * s));
                        else {
                            for (a = a[0].match(Vt), n = 1; n < a.length && void 0 === a[n]; n++);
                            var y = (" " + a[n + 1]).slice(1),
                                m = (" " + a[n + 2]).slice(1);
                            switch (a[n]) {
                                case "#":
                                    c.tagList.push(m ? [y, m] : [y]);
                                    break;
                                case "PLAYLIST-TYPE":
                                    l.type = y.toUpperCase();
                                    break;
                                case "MEDIA-SEQUENCE":
                                    o = l.startSN = parseInt(y);
                                    break;
                                case "TARGETDURATION":
                                    l.targetduration = parseFloat(y);
                                    break;
                                case "VERSION":
                                    l.version = parseInt(y);
                                    break;
                                case "EXTM3U":
                                    break;
                                case "ENDLIST":
                                    l.live = !1;
                                    break;
                                case "DIS":
                                    d++, c.tagList.push(["DIS"]);
                                    break;
                                case "DISCONTINUITY-SEQ":
                                    d = parseInt(y);
                                    break;
                                case "KEY":
                                    var b = y,
                                        E = new Bt(b),
                                        T = E.enumeratedString("METHOD"),
                                        R = E.URI,
                                        A = E.hexadecimalInteger("IV");
                                    T && (u = new Yt, R && ["AES-128", "SAMPLE-AES"].indexOf(T) >= 0 && (u.method = T, u.baseuri = e, u.reluri = R, u.key = null, u.iv = A));
                                    break;
                                case "START":
                                    var S = y,
                                        _ = new Bt(S),
                                        L = _.decimalFloatingPoint("TIME-OFFSET");
                                    isNaN(L) || (l.startTimeOffset = L);
                                    break;
                                case "MAP":
                                    var w = new Bt(y);
                                    c.relurl = w.URI, c.rawByteRange = w.BYTERANGE, c.baseurl = e, c.level = r, c.type = i, c.sn = "initSegment", l.initSegment = c, c = new zt;
                                    break;
                                default:
                                    Ct.b.warn("line parsed but not handled: " + a)
                            }
                        }
                    }
                    return c = h, c && !c.relurl && (l.fragments.pop(), s -= c.duration), l.totalduration = s, l.averagetargetduration = s / l.fragments.length, l.endSN = o - 1, l.startCC = l.fragments[0] ? l.fragments[0].cc : 0, l.endCC = d, l
                }, e.prototype.loadsuccess = function(t, e, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = t.data,
                        n = t.url,
                        o = r.type,
                        s = r.id,
                        l = r.level,
                        u = this.hls;
                    if (this.loaders[o] = void 0, void 0 !== n && 0 !== n.indexOf("data:") || (n = r.url), e.tload = performance.now(), 0 === a.indexOf("#EXTM3U"))
                        if (a.indexOf("#EXTINF:") > 0) {
                            var d = "audioTrack" !== o && "subtitleTrack" !== o,
                                h = isNaN(l) ? isNaN(s) ? 0 : s : l,
                                c = this.parseLevelPlaylist(a, n, h, "audioTrack" === o ? "audio" : "subtitleTrack" === o ? "subtitle" : "main");
                            c.tload = e.tload, "manifest" === o && u.trigger(It.a.MANIFEST_LOADED, {
                                levels: [{
                                    url: n,
                                    details: c
                                }],
                                audioTracks: [],
                                url: n,
                                stats: e,
                                networkDetails: i
                            }), e.tparsed = performance.now(), c.targetduration ? d ? u.trigger(It.a.LEVEL_LOADED, {
                                details: c,
                                level: l || 0,
                                id: s || 0,
                                stats: e,
                                networkDetails: i
                            }) : "audioTrack" === o ? u.trigger(It.a.AUDIO_TRACK_LOADED, {
                                details: c,
                                id: s,
                                stats: e,
                                networkDetails: i
                            }) : "subtitleTrack" === o && u.trigger(It.a.SUBTITLE_TRACK_LOADED, {
                                details: c,
                                id: s,
                                stats: e,
                                networkDetails: i
                            }) : u.trigger(It.a.ERROR, {
                                type: Ot.b.NETWORK_ERROR,
                                details: Ot.a.MANIFEST_PARSING_ERROR,
                                fatal: !0,
                                url: n,
                                reason: "invalid targetduration",
                                networkDetails: i
                            })
                        } else {
                            var f = this.parseMasterPlaylist(a, n);
                            if (f.length) {
                                var p = f.map(function(t) {
                                        return {
                                            id: t.attrs.AUDIO,
                                            codec: t.audioCodec
                                        }
                                    }),
                                    g = this.parseMasterPlaylistMedia(a, n, "AUDIO", p),
                                    v = this.parseMasterPlaylistMedia(a, n, "SUBTITLES");
                                if (g.length) {
                                    var y = !1;
                                    g.forEach(function(t) {
                                        t.url || (y = !0)
                                    }), !1 === y && f[0].audioCodec && !f[0].attrs.AUDIO && (Ct.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), g.unshift({
                                        type: "main",
                                        name: "main"
                                    }))
                                }
                                u.trigger(It.a.MANIFEST_LOADED, {
                                    levels: f,
                                    audioTracks: g,
                                    subtitles: v,
                                    url: n,
                                    stats: e,
                                    networkDetails: i
                                })
                            } else u.trigger(It.a.ERROR, {
                                type: Ot.b.NETWORK_ERROR,
                                details: Ot.a.MANIFEST_PARSING_ERROR,
                                fatal: !0,
                                url: n,
                                reason: "no level found in manifest",
                                networkDetails: i
                            })
                        }
                    else u.trigger(It.a.ERROR, {
                        type: Ot.b.NETWORK_ERROR,
                        details: Ot.a.MANIFEST_PARSING_ERROR,
                        fatal: !0,
                        url: n,
                        reason: "no EXTM3U delimiter",
                        networkDetails: i
                    })
                }, e.prototype.loaderror = function(t, e) {
                    var r, i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = e.loader;
                    switch (e.type) {
                        case "manifest":
                            r = Ot.a.MANIFEST_LOAD_ERROR, i = !0;
                            break;
                        case "level":
                            r = Ot.a.LEVEL_LOAD_ERROR, i = !1;
                            break;
                        case "audioTrack":
                            r = Ot.a.AUDIO_TRACK_LOAD_ERROR, i = !1
                    }
                    n && (n.abort(), this.loaders[e.type] = void 0), this.hls.trigger(It.a.ERROR, {
                        type: Ot.b.NETWORK_ERROR,
                        details: r,
                        fatal: i,
                        url: n.url,
                        loader: n,
                        response: t,
                        context: e,
                        networkDetails: a
                    })
                }, e.prototype.loadtimeout = function(t, e) {
                    var r, i, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = e.loader;
                    switch (e.type) {
                        case "manifest":
                            r = Ot.a.MANIFEST_LOAD_TIMEOUT, i = !0;
                            break;
                        case "level":
                            r = Ot.a.LEVEL_LOAD_TIMEOUT, i = !1;
                            break;
                        case "audioTrack":
                            r = Ot.a.AUDIO_TRACK_LOAD_TIMEOUT, i = !1
                    }
                    n && (n.abort(), this.loaders[e.type] = void 0), this.hls.trigger(It.a.ERROR, {
                        type: Ot.b.NETWORK_ERROR,
                        details: r,
                        fatal: i,
                        url: n.url,
                        loader: n,
                        context: e,
                        networkDetails: a
                    })
                }, e
            }(Ft),
            qt = Xt,
            Qt = function(t) {
                function e(r) {
                    h(this, e);
                    var i = c(this, t.call(this, r, It.a.FRAG_LOADING));
                    return i.loaders = {}, i
                }
                return f(e, t), e.prototype.destroy = function() {
                    var t = this.loaders;
                    for (var e in t) {
                        var r = t[e];
                        r && r.destroy()
                    }
                    this.loaders = {}, Ft.prototype.destroy.call(this)
                }, e.prototype.onFragLoading = function(t) {
                    var e = t.frag,
                        r = e.type,
                        i = this.loaders[r],
                        a = this.hls.config;
                    e.loaded = 0, i && (Ct.b.warn("abort previous fragment loader for type:" + r), i.abort()), i = this.loaders[r] = e.loader = void 0 !== a.fLoader ? new a.fLoader(a) : new a.loader(a);
                    var n = void 0,
                        o = void 0,
                        s = void 0;
                    n = {
                        url: e.url,
                        frag: e,
                        responseType: "arraybuffer",
                        progressData: !1
                    };
                    var l = e.byteRangeStartOffset,
                        u = e.byteRangeEndOffset;
                    isNaN(l) || isNaN(u) || (n.rangeStart = l, n.rangeEnd = u), o = {
                        timeout: a.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: a.fragLoadingMaxRetryTimeout
                    }, s = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this),
                        onProgress: this.loadprogress.bind(this)
                    }, i.load(n, o, s)
                }, e.prototype.loadsuccess = function(t, e, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = t.data,
                        n = r.frag;
                    n.loader = void 0, this.loaders[n.type] = void 0, this.hls.trigger(It.a.FRAG_LOADED, {
                        payload: a,
                        frag: n,
                        stats: e,
                        networkDetails: i
                    })
                }, e.prototype.loaderror = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        i = e.loader;
                    i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(It.a.ERROR, {
                        type: Ot.b.NETWORK_ERROR,
                        details: Ot.a.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: e.frag,
                        response: t,
                        networkDetails: r
                    })
                }, e.prototype.loadtimeout = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        i = e.loader;
                    i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(It.a.ERROR, {
                        type: Ot.b.NETWORK_ERROR,
                        details: Ot.a.FRAG_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: e.frag,
                        networkDetails: r
                    })
                }, e.prototype.loadprogress = function(t, e, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = e.frag;
                    a.loaded = t.loaded, this.hls.trigger(It.a.FRAG_LOAD_PROGRESS, {
                        frag: a,
                        stats: t,
                        networkDetails: i
                    })
                }, e
            }(Ft),
            Jt = Qt,
            $t = function(t) {
                function e(r) {
                    p(this, e);
                    var i = g(this, t.call(this, r, It.a.KEY_LOADING));
                    return i.loaders = {}, i.decryptkey = null, i.decrypturl = null, i
                }
                return v(e, t), e.prototype.destroy = function() {
                    for (var t in this.loaders) {
                        var e = this.loaders[t];
                        e && e.destroy()
                    }
                    this.loaders = {}, Ft.prototype.destroy.call(this)
                }, e.prototype.onKeyLoading = function(t) {
                    var e = t.frag,
                        r = e.type,
                        i = this.loaders[r],
                        a = e.decryptdata,
                        n = a.uri;
                    if (n !== this.decrypturl || null === this.decryptkey) {
                        var o = this.hls.config;
                        i && (Ct.b.warn("abort previous key loader for type:" + r), i.abort()), e.loader = this.loaders[r] = new o.loader(o), this.decrypturl = n, this.decryptkey = null;
                        var s = void 0,
                            l = void 0,
                            u = void 0;
                        s = {
                            url: n,
                            frag: e,
                            responseType: "arraybuffer"
                        }, l = {
                            timeout: o.fragLoadingTimeOut,
                            maxRetry: o.fragLoadingMaxRetry,
                            retryDelay: o.fragLoadingRetryDelay,
                            maxRetryDelay: o.fragLoadingMaxRetryTimeout
                        }, u = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        }, e.loader.load(s, l, u)
                    } else this.decryptkey && (a.key = this.decryptkey, this.hls.trigger(It.a.KEY_LOADED, {
                        frag: e
                    }))
                }, e.prototype.loadsuccess = function(t, e, r) {
                    var i = r.frag;
                    this.decryptkey = i.decryptdata.key = new Uint8Array(t.data), i.loader = void 0, this.loaders[i.type] = void 0, this.hls.trigger(It.a.KEY_LOADED, {
                        frag: i
                    })
                }, e.prototype.loaderror = function(t, e) {
                    var r = e.frag,
                        i = r.loader;
                    i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(It.a.ERROR, {
                        type: Ot.b.NETWORK_ERROR,
                        details: Ot.a.KEY_LOAD_ERROR,
                        fatal: !1,
                        frag: r,
                        response: t
                    })
                }, e.prototype.loadtimeout = function(t, e) {
                    var r = e.frag,
                        i = r.loader;
                    i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(It.a.ERROR, {
                        type: Ot.b.NETWORK_ERROR,
                        details: Ot.a.KEY_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: r
                    })
                }, e
            }(Ft),
            Zt = $t,
            te = {
                search: function(t, e) {
                    for (var r = 0, i = t.length - 1, a = null, n = null; r <= i;) {
                        a = (r + i) / 2 | 0, n = t[a];
                        var o = e(n);
                        if (o > 0) r = a + 1;
                        else {
                            if (!(o < 0)) return n;
                            i = a - 1
                        }
                    }
                    return null
                }
            },
            ee = te,
            re = {
                isBuffered: function(t, e) {
                    if (t)
                        for (var r = t.buffered, i = 0; i < r.length; i++)
                            if (e >= r.start(i) && e <= r.end(i)) return !0;
                    return !1
                },
                bufferInfo: function(t, e, r) {
                    if (t) {
                        var i, a = t.buffered,
                            n = [];
                        for (i = 0; i < a.length; i++) n.push({
                            start: a.start(i),
                            end: a.end(i)
                        });
                        return this.bufferedInfo(n, e, r)
                    }
                    return {
                        len: 0,
                        start: e,
                        end: e,
                        nextStart: void 0
                    }
                },
                bufferedInfo: function(t, e, r) {
                    var i, a, n, o, s, l = [];
                    for (t.sort(function(t, e) {
                            var r = t.start - e.start;
                            return r || e.end - t.end
                        }), s = 0; s < t.length; s++) {
                        var u = l.length;
                        if (u) {
                            var d = l[u - 1].end;
                            t[s].start - d < r ? t[s].end > d && (l[u - 1].end = t[s].end) : l.push(t[s])
                        } else l.push(t[s])
                    }
                    for (s = 0, i = 0, a = n = e; s < l.length; s++) {
                        var h = l[s].start,
                            c = l[s].end;
                        if (e + r >= h && e < c) a = h, n = c, i = n - e;
                        else if (e + r < h) {
                            o = h;
                            break
                        }
                    }
                    return {
                        len: i,
                        start: a,
                        end: n,
                        nextStart: o
                    }
                }
            },
            ie = re,
            ae = r(7),
            ne = r(5),
            oe = r.n(ne),
            se = r(9),
            le = r.n(se),
            ue = y(),
            de = function() {
                function t(e, r) {
                    m(this, t), this.hls = e, this.id = r;
                    var i = this.observer = new oe.a,
                        a = e.config;
                    i.trigger = function(t) {
                        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) r[a - 1] = arguments[a];
                        i.emit.apply(i, [t, t].concat(r))
                    }, i.off = function(t) {
                        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) r[a - 1] = arguments[a];
                        i.removeListener.apply(i, [t].concat(r))
                    };
                    var n = function(t, r) {
                        r = r || {}, r.frag = this.frag, r.id = this.id, e.trigger(t, r)
                    }.bind(this);
                    i.on(It.a.FRAG_DECRYPTED, n), i.on(It.a.FRAG_PARSING_INIT_SEGMENT, n), i.on(It.a.FRAG_PARSING_DATA, n), i.on(It.a.FRAG_PARSED, n), i.on(It.a.ERROR, n), i.on(It.a.FRAG_PARSING_METADATA, n), i.on(It.a.FRAG_PARSING_USERDATA, n), i.on(It.a.INIT_PTS_FOUND, n);
                    var o = {
                            mp4: ue.isTypeSupported("video/mp4"),
                            mpeg: ue.isTypeSupported("audio/mpeg"),
                            mp3: ue.isTypeSupported('audio/mp4; codecs="mp3"')
                        },
                        s = navigator.vendor;
                    if (a.enableWorker && "undefined" != typeof Worker) {
                        Ct.b.log("demuxing in webworker");
                        var l = void 0;
                        try {
                            l = this.w = le()(10), this.onwmsg = this.onWorkerMessage.bind(this), l.addEventListener("message", this.onwmsg), l.onerror = function(t) {
                                e.trigger(It.a.ERROR, {
                                    type: Ot.b.OTHER_ERROR,
                                    details: Ot.a.INTERNAL_EXCEPTION,
                                    fatal: !0,
                                    event: "demuxerWorker",
                                    err: {
                                        message: t.message + " (" + t.filename + ":" + t.lineno + ")"
                                    }
                                })
                            }, l.postMessage({
                                cmd: "init",
                                typeSupported: o,
                                vendor: s,
                                id: r,
                                config: JSON.stringify(a)
                            })
                        } catch (t) {
                            Ct.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), l && URL.revokeObjectURL(l.objectURL), this.demuxer = new ae.a(i, o, a, s), this.w = void 0
                        }
                    } else this.demuxer = new ae.a(i, o, a, s)
                }
                return t.prototype.destroy = function() {
                    var t = this.w;
                    if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.w = null;
                    else {
                        var e = this.demuxer;
                        e && (e.destroy(), this.demuxer = null)
                    }
                    var r = this.observer;
                    r && (r.removeAllListeners(), this.observer = null)
                }, t.prototype.push = function(t, e, r, i, a, n, o, s) {
                    var l = this.w,
                        u = isNaN(a.startDTS) ? a.start : a.startDTS,
                        d = a.decryptdata,
                        h = this.frag,
                        c = !(h && a.cc === h.cc),
                        f = !(h && a.level === h.level),
                        p = h && a.sn === h.sn + 1,
                        g = !f && p;
                    if (c && Ct.b.log(this.id + ":discontinuity detected"), f && Ct.b.log(this.id + ":switch detected"), this.frag = a, l) l.postMessage({
                        cmd: "demux",
                        data: t,
                        decryptdata: d,
                        initSegment: e,
                        audioCodec: r,
                        videoCodec: i,
                        timeOffset: u,
                        discontinuity: c,
                        trackSwitch: f,
                        contiguous: g,
                        duration: n,
                        accurateTimeOffset: o,
                        defaultInitPTS: s
                    }, t instanceof ArrayBuffer ? [t] : []);
                    else {
                        var v = this.demuxer;
                        v && v.push(t, d, e, r, i, u, c, f, g, n, o, s)
                    }
                }, t.prototype.onWorkerMessage = function(t) {
                    var e = t.data,
                        r = this.hls;
                    switch (e.event) {
                        case "init":
                            URL.revokeObjectURL(this.w.objectURL);
                            break;
                        case It.a.FRAG_PARSING_DATA:
                            e.data.data1 = new Uint8Array(e.data1), e.data2 && (e.data.data2 = new Uint8Array(e.data2));
                        default:
                            e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, r.trigger(e.event, e.data)
                    }
                }, t
            }(),
            he = de,
            ce = {
                toString: function(t) {
                    for (var e = "", r = t.length, i = 0; i < r; i++) e += "[" + t.start(i).toFixed(3) + "," + t.end(i).toFixed(3) + "]";
                    return e
                }
            },
            fe = ce,
            pe = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            ge = {
                STOPPED: "STOPPED",
                IDLE: "IDLE",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING",
                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                WAITING_LEVEL: "WAITING_LEVEL",
                PARSING: "PARSING",
                PARSED: "PARSED",
                BUFFER_FLUSHING: "BUFFER_FLUSHING",
                ENDED: "ENDED",
                ERROR: "ERROR"
            },
            ve = function(t) {
                function e(r) {
                    D(this, e);
                    var i = k(this, t.call(this, r, It.a.MEDIA_ATTACHED, It.a.MEDIA_DETACHING, It.a.MANIFEST_LOADING, It.a.MANIFEST_PARSED, It.a.LEVEL_LOADED, It.a.KEY_LOADED, It.a.FRAG_LOADED, It.a.FRAG_LOAD_EMERGENCY_ABORTED, It.a.FRAG_PARSING_INIT_SEGMENT, It.a.FRAG_PARSING_DATA, It.a.FRAG_PARSED, It.a.ERROR, It.a.AUDIO_TRACK_SWITCHING, It.a.AUDIO_TRACK_SWITCHED, It.a.BUFFER_CREATED, It.a.BUFFER_APPENDED, It.a.BUFFER_FLUSHED));
                    return i.config = r.config, i.audioCodecSwap = !1, i.ticks = 0, i._state = ge.STOPPED, i.ontick = i.tick.bind(i), i
                }
                return I(e, t), e.prototype.destroy = function() {
                    this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), Ft.prototype.destroy.call(this), this.state = ge.STOPPED
                }, e.prototype.startLoad = function(t) {
                    if (this.levels) {
                        var e = this.lastCurrentTime,
                            r = this.hls;
                        if (this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                            var i = r.startLevel; - 1 === i && (i = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1
                        }
                        e > 0 && -1 === t && (Ct.b.log("override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = ge.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                    } else this.forceStartLoad = !0, this.state = ge.STOPPED
                }, e.prototype.stopLoad = function() {
                    var t = this.fragCurrent;
                    t && (t.loader && t.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = ge.STOPPED, this.forceStartLoad = !1
                }, e.prototype.tick = function() {
                    1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                }, e.prototype.doTick = function() {
                    switch (this.state) {
                        case ge.ERROR:
                            break;
                        case ge.BUFFER_FLUSHING:
                            this.fragLoadError = 0;
                            break;
                        case ge.IDLE:
                            this._doTickIdle();
                            break;
                        case ge.WAITING_LEVEL:
                            var t = this.levels[this.level];
                            t && t.details && (this.state = ge.IDLE);
                            break;
                        case ge.FRAG_LOADING_WAITING_RETRY:
                            var e = performance.now(),
                                r = this.retryDate;
                            (!r || e >= r || this.media && this.media.seeking) && (Ct.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = ge.IDLE);
                            break;
                        case ge.ERROR:
                        case ge.STOPPED:
                        case ge.FRAG_LOADING:
                        case ge.PARSING:
                        case ge.PARSED:
                        case ge.ENDED:
                    }
                    this._checkBuffer(), this._checkFragmentChanged()
                }, e.prototype._doTickIdle = function() {
                    var t = this.hls,
                        e = t.config,
                        r = this.media;
                    if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && e.startFragPrefetch)) {
                        var i = void 0;
                        i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                        var a = t.nextLoadLevel,
                            n = this.levels[a];
                        if (n) {
                            var o = n.bitrate,
                                s = void 0;
                            s = o ? Math.max(8 * e.maxBufferSize / o, e.maxBufferLength) : e.maxBufferLength, s = Math.min(s, e.maxMaxBufferLength);
                            var l = ie.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, e.maxBufferHole),
                                u = l.len;
                            if (!(u >= s)) {
                                Ct.b.trace("buffer length of " + u.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."), this.level = t.nextLoadLevel = a;
                                var d = n.details;
                                if (void 0 === d || d.live && this.levelLastLoaded !== a) return void(this.state = ge.WAITING_LEVEL);
                                var h = this.fragPrevious;
                                if (!d.live && h && !h.backtracked && h.sn === d.endSN && !l.nextStart) {
                                    if (Math.min(r.duration, h.start + h.duration) - Math.max(l.end, h.start) <= Math.max(.2, h.duration)) {
                                        var c = {};
                                        return this.altAudio && (c.type = "video"), this.hls.trigger(It.a.BUFFER_EOS, c), void(this.state = ge.ENDED)
                                    }
                                }
                                this._fetchPayloadOrEos(i, l, d)
                            }
                        }
                    }
                }, e.prototype._fetchPayloadOrEos = function(t, e, r) {
                    var i = this.fragPrevious,
                        a = this.level,
                        n = r.fragments,
                        o = n.length;
                    if (0 !== o) {
                        var s = n[0].start,
                            l = n[o - 1].start + n[o - 1].duration,
                            u = e.end,
                            d = void 0;
                        if (r.initSegment && !r.initSegment.data) d = r.initSegment;
                        else if (r.live) {
                            var h = this.config.initialLiveManifestSize;
                            if (o < h) return void Ct.b.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + h);
                            if (null === (d = this._ensureFragmentAtLivePoint(r, u, s, l, i, n, o))) return
                        } else u < s && (d = n[0]);
                        d || (d = this._findFragment(s, i, o, n, u, l, r)), d && this._loadFragmentOrKey(d, a, r, t, u)
                    }
                }, e.prototype._ensureFragmentAtLivePoint = function(t, e, r, i, a, n, o) {
                    var s = this.hls.config,
                        l = this.media,
                        u = void 0,
                        d = void 0 !== s.liveMaxLatencyDuration ? s.liveMaxLatencyDuration : s.liveMaxLatencyDurationCount * t.targetduration;
                    if (e < Math.max(r - s.maxFragLookUpTolerance, i - d)) {
                        var h = this.liveSyncPosition = this.computeLivePosition(r, t);
                        Ct.b.log("buffer end: " + e.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), e = h, l && l.readyState && l.duration > h && (l.currentTime = h), this.nextLoadPosition = h
                    }
                    if (t.PTSKnown && e > i && l && l.readyState) return null;
                    if (this.startFragRequested && !t.PTSKnown) {
                        if (a) {
                            var c = a.sn + 1;
                            if (c >= t.startSN && c <= t.endSN) {
                                var f = n[c - t.startSN];
                                a.cc === f.cc && (u = f, Ct.b.log("live playlist, switching playlist, load frag with next SN: " + u.sn))
                            }
                            u || (u = ee.search(n, function(t) {
                                return a.cc - t.cc
                            })) && Ct.b.log("live playlist, switching playlist, load frag with same CC: " + u.sn)
                        }
                        u || (u = n[Math.min(o - 1, Math.round(o / 2))], Ct.b.log("live playlist, switching playlist, unknown, load middle frag : " + u.sn))
                    }
                    return u
                }, e.prototype._findFragment = function(t, e, r, i, a, n, o) {
                    var s = this.hls.config,
                        l = void 0,
                        u = void 0,
                        d = s.maxFragLookUpTolerance,
                        h = e ? i[e.sn - i[0].sn + 1] : void 0,
                        c = function(t) {
                            var e = Math.min(d, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
                            return t.start + t.duration - e <= a ? 1 : t.start - e > a && t.start ? -1 : 0
                        };
                    if (a < n ? (a > n - d && (d = 0), u = h && !c(h) ? h : ee.search(i, c)) : u = i[r - 1], u) {
                        l = u;
                        var f = l.sn - o.startSN,
                            p = e && l.level === e.level,
                            g = i[f - 1],
                            v = i[f + 1];
                        if (e && l.sn === e.sn)
                            if (p && !l.backtracked)
                                if (l.sn < o.endSN) {
                                    var y = e.deltaPTS;
                                    y && y > s.maxBufferHole && e.dropped && f ? (l = g, Ct.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"), e.loadCounter--) : (l = v, Ct.b.log("SN just loaded, load next one: " + l.sn))
                                } else l = null;
                        else l.backtracked && (v && v.backtracked ? (Ct.b.warn("Already backtracked from fragment " + v.sn + ", will not backtrack to fragment " + l.sn + ". Loading fragment " + v.sn), l = v) : (Ct.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), l.dropped = 0, g ? (g.loadCounter && g.loadCounter--, l = g, l.backtracked = !0) : f && (l = null)))
                    }
                    return l
                }, e.prototype._loadFragmentOrKey = function(t, e, r, i, a) {
                    var n = this.hls,
                        o = n.config;
                    if (!t.decryptdata || null == t.decryptdata.uri || null != t.decryptdata.key) {
                        if (Ct.b.log("Loading " + t.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + e + ", currentTime:" + i.toFixed(3) + ",bufferEnd:" + a.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, t.loadCounter) {
                            t.loadCounter++;
                            var s = o.fragLoadingLoopThreshold;
                            if (t.loadCounter > s && Math.abs(this.fragLoadIdx - t.loadIdx) < s) return void n.trigger(It.a.ERROR, {
                                type: Ot.b.MEDIA_ERROR,
                                details: Ot.a.FRAG_LOOP_LOADING_ERROR,
                                fatal: !1,
                                frag: t
                            })
                        } else t.loadCounter = 1;
                        return t.loadIdx = this.fragLoadIdx, t.autoLevel = n.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.fragCurrent = t, this.startFragRequested = !0, isNaN(t.sn) || t.bitrateTest || (this.nextLoadPosition = t.start + t.duration), n.trigger(It.a.FRAG_LOADING, {
                            frag: t
                        }), this.demuxer || (this.demuxer = new he(n, "main")), void(this.state = ge.FRAG_LOADING)
                    }
                    Ct.b.log("Loading key for " + t.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + e), this.state = ge.KEY_LOADING, n.trigger(It.a.KEY_LOADING, {
                        frag: t
                    })
                }, e.prototype.getBufferedFrag = function(t) {
                    return ee.search(this._bufferedFrags, function(e) {
                        return t < e.startPTS ? -1 : t > e.endPTS ? 1 : 0
                    })
                }, e.prototype.followingBufferedFrag = function(t) {
                    return t ? this.getBufferedFrag(t.endPTS + .5) : null
                }, e.prototype._checkFragmentChanged = function() {
                    var t, e, r = this.media;
                    if (r && r.readyState && !1 === r.seeking && (e = r.currentTime, e > r.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = e), ie.isBuffered(r, e) ? t = this.getBufferedFrag(e) : ie.isBuffered(r, e + .1) && (t = this.getBufferedFrag(e + .1)), t)) {
                        var i = t;
                        if (i !== this.fragPlaying) {
                            this.hls.trigger(It.a.FRAG_CHANGED, {
                                frag: i
                            });
                            var a = i.level;
                            this.fragPlaying && this.fragPlaying.level === a || this.hls.trigger(It.a.LEVEL_SWITCHED, {
                                level: a
                            }), this.fragPlaying = i
                        }
                    }
                }, e.prototype.immediateLevelSwitch = function() {
                    if (Ct.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
                        this.immediateSwitch = !0;
                        var t = this.media,
                            e = void 0;
                        t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
                    }
                    var r = this.fragCurrent;
                    r && r.loader && r.loader.abort(), this.fragCurrent = null, void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                }, e.prototype.immediateLevelSwitchEnd = function() {
                    var t = this.media;
                    t && t.buffered.length && (this.immediateSwitch = !1, ie.isBuffered(t, t.currentTime) && (t.currentTime -= 1e-4), this.previouslyPaused || t.play())
                }, e.prototype.nextLevelSwitch = function() {
                    var t = this.media;
                    if (t && t.readyState) {
                        var e = void 0,
                            r = void 0,
                            i = void 0;
                        if (void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), r = this.getBufferedFrag(t.currentTime), r && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), t.paused) e = 0;
                        else {
                            var a = this.hls.nextLoadLevel,
                                n = this.levels[a],
                                o = this.fragLastKbps;
                            e = o && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * o) + 1 : 0
                        }
                        if ((i = this.getBufferedFrag(t.currentTime + e)) && (i = this.followingBufferedFrag(i))) {
                            var s = this.fragCurrent;
                            s && s.loader && s.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(i.maxStartPTS, Number.POSITIVE_INFINITY)
                        }
                    }
                }, e.prototype.flushMainBuffer = function(t, e) {
                    this.state = ge.BUFFER_FLUSHING;
                    var r = {
                        startOffset: t,
                        endOffset: e
                    };
                    this.altAudio && (r.type = "video"), this.hls.trigger(It.a.BUFFER_FLUSHING, r)
                }, e.prototype.onMediaAttached = function(t) {
                    var e = this.media = this.mediaBuffer = t.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("seeked", this.onvseeked), e.addEventListener("ended", this.onvended);
                    var r = this.config;
                    this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition)
                }, e.prototype.onMediaDetaching = function() {
                    var t = this.media;
                    t && t.ended && (Ct.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                    var e = this.levels;
                    e && e.forEach(function(t) {
                        t.details && t.details.fragments.forEach(function(t) {
                            t.loadCounter = void 0, t.backtracked = void 0
                        })
                    }), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("seeked", this.onvseeked), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                }, e.prototype.onMediaSeeking = function() {
                    var t = this.media,
                        e = t ? t.currentTime : void 0,
                        r = this.config;
                    isNaN(e) || Ct.b.log("media seeking to " + e.toFixed(3));
                    var i = this.mediaBuffer ? this.mediaBuffer : t,
                        a = ie.bufferInfo(i, e, this.config.maxBufferHole);
                    if (this.state === ge.FRAG_LOADING) {
                        var n = this.fragCurrent;
                        if (0 === a.len && n) {
                            var o = r.maxFragLookUpTolerance,
                                s = n.start - o,
                                l = n.start + n.duration + o;
                            e < s || e > l ? (n.loader && (Ct.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = ge.IDLE) : Ct.b.log("seeking outside of buffer but within currently loaded fragment range")
                        }
                    } else this.state === ge.ENDED && (0 === a.len && (this.fragPrevious = 0), this.state = ge.IDLE);
                    t && (this.lastCurrentTime = e), this.state !== ge.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * r.fragLoadingLoopThreshold), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = e), this.tick()
                }, e.prototype.onMediaSeeked = function() {
                    var t = this.media,
                        e = t ? t.currentTime : void 0;
                    isNaN(e) || Ct.b.log("media seeked to " + e.toFixed(3)), this.tick()
                }, e.prototype.onMediaEnded = function() {
                    Ct.b.log("media ended"), this.startPosition = this.lastCurrentTime = 0
                }, e.prototype.onManifestLoading = function() {
                    Ct.b.log("trigger BUFFER_RESET"), this.hls.trigger(It.a.BUFFER_RESET), this._bufferedFrags = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                }, e.prototype.onManifestParsed = function(t) {
                    var e, r = !1,
                        i = !1;
                    t.levels.forEach(function(t) {
                        (e = t.audioCodec) && (-1 !== e.indexOf("mp4a.40.2") && (r = !0), -1 !== e.indexOf("mp4a.40.5") && (i = !0))
                    }), this.audioCodecSwitch = r && i, this.audioCodecSwitch && Ct.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
                    var a = this.config;
                    (a.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(a.startPosition)
                }, e.prototype.onLevelLoaded = function(t) {
                    var e = t.details,
                        r = t.level,
                        i = this.levels[this.levelLastLoaded],
                        a = this.levels[r],
                        n = e.totalduration,
                        o = 0;
                    if (Ct.b.log("level " + r + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + n), e.live) {
                        var s = a.details;
                        s && e.fragments.length > 0 ? (T(s, e), o = e.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, s), e.PTSKnown && !isNaN(o) ? Ct.b.log("live playlist sliding:" + o.toFixed(3)) : (Ct.b.log("live playlist - outdated PTS, unknown sliding"), w(this.fragPrevious, i, e))) : (Ct.b.log("live playlist - first load, unknown sliding"), e.PTSKnown = !1, w(this.fragPrevious, i, e))
                    } else e.PTSKnown = !1;
                    if (a.details = e, this.levelLastLoaded = r, this.hls.trigger(It.a.LEVEL_UPDATED, {
                            details: e,
                            level: r
                        }), !1 === this.startFragRequested) {
                        if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                            var l = e.startTimeOffset;
                            isNaN(l) ? e.live ? (this.startPosition = this.computeLivePosition(o, e), Ct.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (l < 0 && (Ct.b.log("negative start time offset " + l + ", count from end of last fragment"), l = o + n + l), Ct.b.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l), this.lastCurrentTime = this.startPosition
                        }
                        this.nextLoadPosition = this.startPosition
                    }
                    this.state === ge.WAITING_LEVEL && (this.state = ge.IDLE), this.tick()
                }, e.prototype.onKeyLoaded = function() {
                    this.state === ge.KEY_LOADING && (this.state = ge.IDLE, this.tick())
                }, e.prototype.onFragLoaded = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    if (this.state === ge.FRAG_LOADING && e && "main" === r.type && r.level === e.level && r.sn === e.sn) {
                        var i = t.stats,
                            a = this.levels[e.level],
                            n = a.details;
                        if (Ct.b.log("Loaded  " + e.sn + " of [" + n.startSN + " ," + n.endSN + "],level " + e.level), this.bitrateTest = !1, this.stats = i, !0 === r.bitrateTest && this.hls.nextLoadLevel) this.state = ge.IDLE, this.startFragRequested = !1, i.tparsed = i.tbuffered = performance.now(), this.hls.trigger(It.a.FRAG_BUFFERED, {
                            stats: i,
                            frag: e,
                            id: "main"
                        }), this.tick();
                        else if ("initSegment" === r.sn) this.state = ge.IDLE, i.tparsed = i.tbuffered = performance.now(), n.initSegment.data = t.payload, this.hls.trigger(It.a.FRAG_BUFFERED, {
                            stats: i,
                            frag: e,
                            id: "main"
                        }), this.tick();
                        else {
                            this.state = ge.PARSING;
                            var o = n.totalduration,
                                s = e.level,
                                l = e.sn,
                                u = this.config.defaultAudioCodec || a.audioCodec;
                            this.audioCodecSwap && (Ct.b.log("swapping playlist audio codec"), void 0 === u && (u = this.lastAudioCodec), u && (u = -1 !== u.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), this.pendingBuffering = !0, this.appended = !1, Ct.b.log("Parsing " + l + " of [" + n.startSN + " ," + n.endSN + "],level " + s + ", cc " + e.cc);
                            var d = this.demuxer;
                            d || (d = this.demuxer = new he(this.hls, "main"));
                            var h = this.media,
                                c = h && h.seeking,
                                f = !c && (n.PTSKnown || !n.live),
                                p = n.initSegment ? n.initSegment.data : [];
                            d.push(t.payload, p, u, a.videoCodec, e, o, f, void 0)
                        }
                    }
                    this.fragLoadError = 0
                }, e.prototype.onFragParsingInitSegment = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    if (e && "main" === t.id && r.sn === e.sn && r.level === e.level && this.state === ge.PARSING) {
                        var i, a, n = t.tracks;
                        if (n.audio && this.altAudio && delete n.audio, a = n.audio) {
                            var o = this.levels[this.level].audioCodec,
                                s = navigator.userAgent.toLowerCase();
                            o && this.audioCodecSwap && (Ct.b.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== a.metadata.channelCount && -1 === s.indexOf("firefox") && (o = "mp4a.40.5"), -1 !== s.indexOf("android") && "audio/mpeg" !== a.container && (o = "mp4a.40.2", Ct.b.log("Android: force audio codec to " + o)), a.levelCodec = o, a.id = t.id
                        }
                        a = n.video, a && (a.levelCodec = this.levels[this.level].videoCodec, a.id = t.id), this.hls.trigger(It.a.BUFFER_CODECS, n);
                        for (i in n) {
                            a = n[i], Ct.b.log("main track:" + i + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
                            var l = a.initSegment;
                            l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(It.a.BUFFER_APPENDING, {
                                type: i,
                                data: l,
                                parent: "main",
                                content: "initSegment"
                            }))
                        }
                        this.tick()
                    }
                }, e.prototype.onFragParsingData = function(t) {
                    var e = this,
                        r = this.fragCurrent,
                        i = t.frag;
                    if (r && "main" === t.id && i.sn === r.sn && i.level === r.level && ("audio" !== t.type || !this.altAudio) && this.state === ge.PARSING) {
                        var a = this.levels[this.level],
                            n = r;
                        if (isNaN(t.endPTS) && (t.endPTS = t.startPTS + r.duration, t.endDTS = t.startDTS + r.duration), Ct.b.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0)), "video" === t.type)
                            if (n.dropped = t.dropped, n.dropped)
                                if (n.backtracked) Ct.b.warn("Already backtracked on this fragment, appending with the gap");
                                else {
                                    var o = a.details;
                                    if (!o || n.sn !== o.startSN) return Ct.b.warn("missing video frame(s), backtracking fragment"), n.backtracked = !0, this.nextLoadPosition = t.startPTS, this.state = ge.IDLE, this.fragPrevious = n, void this.tick();
                                    Ct.b.warn("missing video frame(s) on first frag, appending with gap")
                                }
                        else n.backtracked = !1;
                        var s = E(a.details, n, t.startPTS, t.endPTS, t.startDTS, t.endDTS),
                            l = this.hls;
                        l.trigger(It.a.LEVEL_PTS_UPDATED, {
                            details: a.details,
                            level: this.level,
                            drift: s,
                            type: t.type,
                            start: t.startPTS,
                            end: t.endPTS
                        }), [t.data1, t.data2].forEach(function(r) {
                            r && r.length && e.state === ge.PARSING && (e.appended = !0, e.pendingBuffering = !0, l.trigger(It.a.BUFFER_APPENDING, {
                                type: t.type,
                                data: r,
                                parent: "main",
                                content: "data"
                            }))
                        }), this.tick()
                    }
                }, e.prototype.onFragParsed = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    e && "main" === t.id && r.sn === e.sn && r.level === e.level && this.state === ge.PARSING && (this.stats.tparsed = performance.now(), this.state = ge.PARSED, this._checkAppendedParsed())
                }, e.prototype.onAudioTrackSwitching = function(t) {
                    var e = !!t.url,
                        r = t.id;
                    if (!e) {
                        if (this.mediaBuffer !== this.media) {
                            Ct.b.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                            var i = this.fragCurrent;
                            i.loader && (Ct.b.log("switching to main audio track, cancel main fragment load"), i.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = ge.IDLE
                        }
                        var a = this.hls;
                        a.trigger(It.a.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: "audio"
                        }), a.trigger(It.a.AUDIO_TRACK_SWITCHED, {
                            id: r
                        }), this.altAudio = !1
                    }
                }, e.prototype.onAudioTrackSwitched = function(t) {
                    var e = t.id,
                        r = !!this.hls.audioTracks[e].url;
                    if (r) {
                        var i = this.videoBuffer;
                        i && this.mediaBuffer !== i && (Ct.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i)
                    }
                    this.altAudio = r, this.tick()
                }, e.prototype.onBufferCreated = function(t) {
                    var e = t.tracks,
                        r = void 0,
                        i = void 0,
                        a = !1;
                    for (var n in e) {
                        var o = e[n];
                        "main" === o.id ? (i = n, r = o, "video" === n && (this.videoBuffer = e[n].buffer)) : a = !0
                    }
                    a && r ? (Ct.b.log("alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
                }, e.prototype.onBufferAppended = function(t) {
                    if ("main" === t.parent) {
                        var e = this.state;
                        e !== ge.PARSING && e !== ge.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
                    }
                }, e.prototype._checkAppendedParsed = function() {
                    if (!(this.state !== ge.PARSED || this.appended && this.pendingBuffering)) {
                        var t = this.fragCurrent;
                        if (t) {
                            var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                            Ct.b.log("main buffered : " + fe.toString(e.buffered));
                            var r = this._bufferedFrags.filter(function(t) {
                                return ie.isBuffered(e, (t.startPTS + t.endPTS) / 2)
                            });
                            r.push(t), this._bufferedFrags = r.sort(function(t, e) {
                                return t.startPTS - e.startPTS
                            }), this.fragPrevious = t;
                            var i = this.stats;
                            i.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * i.total / (i.tbuffered - i.tfirst)), this.hls.trigger(It.a.FRAG_BUFFERED, {
                                stats: i,
                                frag: t,
                                id: "main"
                            }), this.state = ge.IDLE
                        }
                        this.tick()
                    }
                }, e.prototype.onError = function(t) {
                    var e = t.frag || this.fragCurrent;
                    if (!e || "main" === e.type) {
                        var r = !!this.media && ie.isBuffered(this.media, this.media.currentTime) && ie.isBuffered(this.media, this.media.currentTime + .5);
                        switch (t.details) {
                            case Ot.a.FRAG_LOAD_ERROR:
                            case Ot.a.FRAG_LOAD_TIMEOUT:
                            case Ot.a.KEY_LOAD_ERROR:
                            case Ot.a.KEY_LOAD_TIMEOUT:
                                if (!t.fatal)
                                    if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                        var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                        e.loadCounter = 0, Ct.b.warn("mediaController: frag loading failed, retry in " + i + " ms"), this.retryDate = performance.now() + i, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = ge.FRAG_LOADING_WAITING_RETRY
                                    } else Ct.b.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = ge.ERROR;
                                break;
                            case Ot.a.FRAG_LOOP_LOADING_ERROR:
                                t.fatal || (r ? (this._reduceMaxBufferLength(e.duration), this.state = ge.IDLE) : e.autoLevel && 0 !== e.level || (t.fatal = !0, this.state = ge.ERROR));
                                break;
                            case Ot.a.LEVEL_LOAD_ERROR:
                            case Ot.a.LEVEL_LOAD_TIMEOUT:
                                this.state !== ge.ERROR && (t.fatal ? (this.state = ge.ERROR, Ct.b.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== ge.WAITING_LEVEL || (this.state = ge.IDLE));
                                break;
                            case Ot.a.BUFFER_FULL_ERROR:
                                "main" !== t.parent || this.state !== ge.PARSING && this.state !== ge.PARSED || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = ge.IDLE) : (Ct.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                        }
                    }
                }, e.prototype._reduceMaxBufferLength = function(t) {
                    var e = this.config;
                    e.maxMaxBufferLength >= t && (e.maxMaxBufferLength /= 2, Ct.b.warn("main:reduce max buffer length to " + e.maxMaxBufferLength + "s"), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * e.fragLoadingLoopThreshold))
                }, e.prototype._checkBuffer = function() {
                    var t = this.media,
                        e = this.config;
                    if (t && t.readyState) {
                        var r = t.currentTime,
                            i = this.mediaBuffer ? this.mediaBuffer : t,
                            a = i.buffered;
                        if (!this.loadedmetadata && a.length) {
                            this.loadedmetadata = !0;
                            var n = t.seeking ? r : this.startPosition,
                                o = ie.isBuffered(i, n),
                                s = a.start(0),
                                l = !o && Math.abs(n - s) < e.maxSeekHole;
                            (r !== n || l) && (Ct.b.log("target start position:" + n), l && (n = s, Ct.b.log("target start position not buffered, seek to buffered.start(0) " + n)), Ct.b.log("adjust currentTime from " + r + " to " + n), t.currentTime = n)
                        } else if (this.immediateSwitch) this.immediateLevelSwitchEnd();
                        else {
                            var u = ie.bufferInfo(t, r, 0),
                                d = !(t.paused || t.ended || 0 === t.buffered.length),
                                h = r !== this.lastCurrentTime;
                            if (h) this.stallReported && (Ct.b.warn("playback not stuck anymore @" + r + ", after " + Math.round(performance.now() - this.stalled) + "ms"), this.stallReported = !1), this.stalled = void 0, this.nudgeRetry = 0;
                            else if (d) {
                                var c = performance.now(),
                                    f = this.hls;
                                if (this.stalled) {
                                    var p = c - this.stalled,
                                        g = u.len,
                                        v = this.nudgeRetry || 0;
                                    if (g <= .5 && p > 1e3 * e.lowBufferWatchdogPeriod) {
                                        this.stallReported || (this.stallReported = !0, Ct.b.warn("playback stalling in low buffer @" + r), f.trigger(It.a.ERROR, {
                                            type: Ot.b.MEDIA_ERROR,
                                            details: Ot.a.BUFFER_STALLED_ERROR,
                                            fatal: !1,
                                            buffer: g
                                        }));
                                        var y = u.nextStart,
                                            m = y - r;
                                        if (y && m < e.maxSeekHole && m > 0) {
                                            this.nudgeRetry = ++v;
                                            var b = v * e.nudgeOffset;
                                            Ct.b.log("adjust currentTime from " + t.currentTime + " to next buffered @ " + y + " + nudge " + b), t.currentTime = y + b, this.stalled = void 0, f.trigger(It.a.ERROR, {
                                                type: Ot.b.MEDIA_ERROR,
                                                details: Ot.a.BUFFER_SEEK_OVER_HOLE,
                                                fatal: !1,
                                                hole: y + b - r
                                            })
                                        }
                                    } else if (g > .5 && p > 1e3 * e.highBufferWatchdogPeriod)
                                        if (this.stallReported || (this.stallReported = !0, Ct.b.warn("playback stalling in high buffer @" + r), f.trigger(It.a.ERROR, {
                                                type: Ot.b.MEDIA_ERROR,
                                                details: Ot.a.BUFFER_STALLED_ERROR,
                                                fatal: !1,
                                                buffer: g
                                            })), this.stalled = void 0, this.nudgeRetry = ++v, v < e.nudgeMaxRetry) {
                                            var E = t.currentTime,
                                                T = E + v * e.nudgeOffset;
                                            Ct.b.log("adjust currentTime from " + E + " to " + T), t.currentTime = T, f.trigger(It.a.ERROR, {
                                                type: Ot.b.MEDIA_ERROR,
                                                details: Ot.a.BUFFER_NUDGE_ON_STALL,
                                                fatal: !1
                                            })
                                        } else Ct.b.error("still stuck in high buffer @" + r + " after " + e.nudgeMaxRetry + ", raise fatal error"), f.trigger(It.a.ERROR, {
                                            type: Ot.b.MEDIA_ERROR,
                                            details: Ot.a.BUFFER_STALLED_ERROR,
                                            fatal: !0
                                        })
                                } else this.stalled = c, this.stallReported = !1
                            }
                        }
                    }
                }, e.prototype.onFragLoadEmergencyAborted = function() {
                    this.state = ge.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
                }, e.prototype.onBufferFlushed = function() {
                    var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                    this._bufferedFrags = this._bufferedFrags.filter(function(e) {
                        return ie.isBuffered(t, (e.startPTS + e.endPTS) / 2)
                    }), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.state = ge.IDLE, this.fragPrevious = null
                }, e.prototype.swapAudioCodec = function() {
                    this.audioCodecSwap = !this.audioCodecSwap
                }, e.prototype.computeLivePosition = function(t, e) {
                    var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * e.targetduration;
                    return t + Math.max(0, e.totalduration - r)
                }, pe(e, [{
                    key: "state",
                    set: function(t) {
                        if (this.state !== t) {
                            var e = this.state;
                            this._state = t, Ct.b.log("main stream:" + e + "->" + t), this.hls.trigger(It.a.STREAM_STATE_TRANSITION, {
                                previousState: e,
                                nextState: t
                            })
                        }
                    },
                    get: function() {
                        return this._state
                    }
                }, {
                    key: "currentLevel",
                    get: function() {
                        var t = this.media;
                        if (t) {
                            var e = this.getBufferedFrag(t.currentTime);
                            if (e) return e.level
                        }
                        return -1
                    }
                }, {
                    key: "nextBufferedFrag",
                    get: function() {
                        var t = this.media;
                        return t ? this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)) : null
                    }
                }, {
                    key: "nextLevel",
                    get: function() {
                        var t = this.nextBufferedFrag;
                        return t ? t.level : -1
                    }
                }, {
                    key: "liveSyncPosition",
                    get: function() {
                        return this._liveSyncPosition
                    },
                    set: function(t) {
                        this._liveSyncPosition = t
                    }
                }]), e
            }(Ft),
            ye = ve,
            me = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            be = function(t) {
                function e(r) {
                    O(this, e);
                    var i = C(this, t.call(this, r, It.a.MANIFEST_LOADED, It.a.LEVEL_LOADED, It.a.FRAG_LOADED, It.a.ERROR));
                    return i._manualLevel = -1, i.timer = null, i
                }
                return P(e, t), e.prototype.destroy = function() {
                    this.cleanTimer(), this._manualLevel = -1
                }, e.prototype.cleanTimer = function() {
                    null !== this.timer && (clearTimeout(this.timer), this.timer = null)
                }, e.prototype.startLoad = function() {
                    var t = this._levels;
                    this.canload = !0, this.levelRetryCount = 0, t && t.forEach(function(t) {
                        t.loadError = 0;
                        var e = t.details;
                        e && e.live && (t.details = void 0)
                    }), this.timer && this.tick()
                }, e.prototype.stopLoad = function() {
                    this.canload = !1
                }, e.prototype.onManifestLoaded = function(t) {
                    var e = [],
                        r = void 0,
                        i = {},
                        a = null,
                        n = !1,
                        s = !1,
                        l = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                        u = [];
                    if (t.levels.forEach(function(t) {
                            t.loadError = 0, t.fragmentError = !1, n = n || !!t.videoCodec, s = s || !!t.audioCodec || !(!t.attrs || !t.attrs.AUDIO), !0 === l && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0), a = i[t.bitrate], void 0 === a ? (t.url = [t.url], t.urlId = 0, i[t.bitrate] = t, e.push(t)) : a.url.push(t.url)
                        }), !0 === n && !0 === s && (e = e.filter(function(t) {
                            return !!t.videoCodec
                        })), e = e.filter(function(t) {
                            var e = t.audioCodec,
                                r = t.videoCodec;
                            return (!e || o(e)) && (!r || o(r))
                        }), t.audioTracks && (u = t.audioTracks.filter(function(t) {
                            return !t.audioCodec || o(t.audioCodec, "audio")
                        })), e.length) {
                        r = e[0].bitrate, e.sort(function(t, e) {
                            return t.bitrate - e.bitrate
                        }), this._levels = e;
                        for (var d = 0; d < e.length; d++)
                            if (e[d].bitrate === r) {
                                this._firstLevel = d, Ct.b.log("manifest loaded," + e.length + " level(s) found, first bitrate:" + r);
                                break
                            }
                        this.hls.trigger(It.a.MANIFEST_PARSED, {
                            levels: e,
                            audioTracks: u,
                            firstLevel: this._firstLevel,
                            stats: t.stats,
                            audio: s,
                            video: n,
                            altAudio: u.length > 0
                        })
                    } else this.hls.trigger(It.a.ERROR, {
                        type: Ot.b.MEDIA_ERROR,
                        details: Ot.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: this.hls.url,
                        reason: "no level with compatible codecs found in manifest"
                    })
                }, e.prototype.setLevelInternal = function(t) {
                    var e = this._levels,
                        r = this.hls;
                    if (t >= 0 && t < e.length) {
                        if (this.cleanTimer(), this._level !== t) {
                            Ct.b.log("switching to level " + t), this._level = t;
                            var i = e[t];
                            i.level = t, r.trigger(It.a.LEVEL_SWITCH, i), r.trigger(It.a.LEVEL_SWITCHING, i)
                        }
                        var a = e[t],
                            n = a.details;
                        if (!n || !0 === n.live) {
                            var o = a.urlId;
                            r.trigger(It.a.LEVEL_LOADING, {
                                url: a.url[o],
                                level: t,
                                id: o
                            })
                        }
                    } else r.trigger(It.a.ERROR, {
                        type: Ot.b.OTHER_ERROR,
                        details: Ot.a.LEVEL_SWITCH_ERROR,
                        level: t,
                        fatal: !1,
                        reason: "invalid level idx"
                    })
                }, e.prototype.onError = function(t) {
                    var e = this;
                    if (!0 === t.fatal) return void(t.type === Ot.b.NETWORK_ERROR && this.cleanTimer());
                    var r = t.details,
                        i = !1,
                        a = !1,
                        n = void 0,
                        o = void 0,
                        s = this.hls.config;
                    switch (r) {
                        case Ot.a.FRAG_LOAD_ERROR:
                        case Ot.a.FRAG_LOAD_TIMEOUT:
                        case Ot.a.FRAG_LOOP_LOADING_ERROR:
                        case Ot.a.KEY_LOAD_ERROR:
                        case Ot.a.KEY_LOAD_TIMEOUT:
                            n = t.frag.level, a = !0;
                            break;
                        case Ot.a.LEVEL_LOAD_ERROR:
                        case Ot.a.LEVEL_LOAD_TIMEOUT:
                            n = t.context.level, i = !0;
                            break;
                        case Ot.a.REMUX_ALLOC_ERROR:
                            n = t.level
                    }
                    if (void 0 !== n)
                        if (o = this._levels[n], o.loadError++, o.fragmentError = a, !0 === a) {
                            var l = o.url.length;
                            l > 1 && o.loadError < l ? (o.urlId = (o.urlId + 1) % l, o.details = void 0, Ct.b.warn("level controller," + r + " for level " + n + ": switching to redundant stream id " + o.urlId)) : -1 === this._manualLevel && 0 !== n ? (Ct.b.warn("level controller," + r + ": switch-down for next fragment"), this.hls.nextAutoLevel = n - 1) : (Ct.b.warn("level controller, " + r + ": reload a fragment"), this._level = void 0)
                        } else if (!0 === i)
                        if (this.levelRetryCount + 1 <= s.levelLoadingMaxRetry) {
                            var u = Math.min(Math.pow(2, this.levelRetryCount) * s.levelLoadingRetryDelay, s.levelLoadingMaxRetryTimeout);
                            this.timer = setTimeout(function() {
                                return e.tick()
                            }, u), t.levelRetry = !0, this.levelRetryCount++, Ct.b.warn("level controller," + r + ", retry in " + u + " ms, current retry count is " + this.levelRetryCount)
                        } else Ct.b.error("cannot recover " + r + " error"), this._level = void 0, this.cleanTimer(), t.fatal = !0
                }, e.prototype.onFragLoaded = function(t) {
                    var e = t.frag;
                    if (void 0 !== e && "main" === e.type) {
                        var r = this._levels[e.level];
                        void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
                    }
                }, e.prototype.onLevelLoaded = function(t) {
                    var e = this,
                        r = t.level;
                    if (r === this._level) {
                        var i = this._levels[r];
                        !1 === i.fragmentError && (i.loadError = 0, this.levelRetryCount = 0);
                        var a = t.details;
                        if (a.live) {
                            var n = 1e3 * (a.averagetargetduration ? a.averagetargetduration : a.targetduration),
                                o = i.details;
                            o && a.endSN === o.endSN && (n /= 2, Ct.b.log("same live playlist, reload twice faster")), n -= performance.now() - t.stats.trequest, n = Math.max(1e3, Math.round(n)), Ct.b.log("live playlist, reload in " + n + " ms"), this.timer = setTimeout(function() {
                                return e.tick()
                            }, n)
                        } else this.cleanTimer()
                    }
                }, e.prototype.tick = function() {
                    var t = this._level;
                    if (void 0 !== t && this.canload) {
                        var e = this._levels[t];
                        if (e && e.url) {
                            var r = e.urlId;
                            this.hls.trigger(It.a.LEVEL_LOADING, {
                                url: e.url[r],
                                level: t,
                                id: r
                            })
                        }
                    }
                }, me(e, [{
                    key: "levels",
                    get: function() {
                        return this._levels
                    }
                }, {
                    key: "level",
                    get: function() {
                        return this._level
                    },
                    set: function(t) {
                        var e = this._levels;
                        e && (t = Math.min(t, e.length - 1), this._level === t && void 0 !== e[t].details || this.setLevelInternal(t))
                    }
                }, {
                    key: "manualLevel",
                    get: function() {
                        return this._manualLevel
                    },
                    set: function(t) {
                        this._manualLevel = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
                    }
                }, {
                    key: "firstLevel",
                    get: function() {
                        return this._firstLevel
                    },
                    set: function(t) {
                        this._firstLevel = t
                    }
                }, {
                    key: "startLevel",
                    get: function() {
                        if (void 0 === this._startLevel) {
                            var t = this.hls.config.startLevel;
                            return void 0 !== t ? t : this._firstLevel
                        }
                        return this._startLevel
                    },
                    set: function(t) {
                        this._startLevel = t
                    }
                }, {
                    key: "nextLoadLevel",
                    get: function() {
                        return -1 !== this._manualLevel ? this._manualLevel : this.hls.nextAutoLevel
                    },
                    set: function(t) {
                        this.level = t, -1 === this._manualLevel && (this.hls.nextAutoLevel = t)
                    }
                }]), e
            }(Ft),
            Ee = be,
            Te = r(3),
            Re = function(t) {
                function e(r) {
                    x(this, e);
                    var i = F(this, t.call(this, r, It.a.MEDIA_ATTACHED, It.a.MEDIA_DETACHING, It.a.FRAG_PARSING_METADATA));
                    return i.id3Track = void 0, i.media = void 0, i
                }
                return N(e, t), e.prototype.destroy = function() {
                    Ft.prototype.destroy.call(this)
                }, e.prototype.onMediaAttached = function(t) {
                    this.media = t.media, this.media
                }, e.prototype.onMediaDetaching = function() {
                    this.media = void 0
                }, e.prototype.onFragParsingMetadata = function(t) {
                    var e = t.frag,
                        r = t.samples;
                    this.id3Track || (this.id3Track = this.media.addTextTrack("metadata", "id3"), this.id3Track.mode = "hidden");
                    for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, a = 0; a < r.length; a++) {
                        var n = Te.a.getID3Frames(r[a].data);
                        if (n) {
                            var o = r[a].pts,
                                s = a < r.length - 1 ? r[a + 1].pts : e.endPTS;
                            o === s && (s += 1e-4);
                            for (var l = 0; l < n.length; l++) {
                                var u = n[l];
                                if (!Te.a.isTimeStampFrame(u)) {
                                    var d = new i(o, s, "");
                                    d.value = u, this.id3Track.addCue(d)
                                }
                            }
                        }
                    }
                }, e
            }(Ft),
            Ae = Re,
            Se = function() {
                function t(e) {
                    M(this, t), this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
                }
                return t.prototype.sample = function(t, e) {
                    var r = Math.pow(this.alpha_, t);
                    this.estimate_ = e * (1 - r) + r * this.estimate_, this.totalWeight_ += t
                }, t.prototype.getTotalWeight = function() {
                    return this.totalWeight_
                }, t.prototype.getEstimate = function() {
                    if (this.alpha_) {
                        var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                        return this.estimate_ / t
                    }
                    return this.estimate_
                }, t
            }(),
            _e = Se,
            Le = function() {
                function t(e, r, i, a) {
                    U(this, t), this.hls = e, this.defaultEstimate_ = a, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new _e(r), this.fast_ = new _e(i)
                }
                return t.prototype.sample = function(t, e) {
                    t = Math.max(t, this.minDelayMs_);
                    var r = 8e3 * e / t,
                        i = t / 1e3;
                    this.fast_.sample(i, r), this.slow_.sample(i, r)
                }, t.prototype.canEstimate = function() {
                    var t = this.fast_;
                    return t && t.getTotalWeight() >= this.minWeight_
                }, t.prototype.getEstimate = function() {
                    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                }, t.prototype.destroy = function() {}, t
            }(),
            we = Le,
            De = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            ke = function(t) {
                function e(r) {
                    B(this, e);
                    var i = G(this, t.call(this, r, It.a.FRAG_LOADING, It.a.FRAG_LOADED, It.a.FRAG_BUFFERED, It.a.ERROR));
                    return i.lastLoadedFragLevel = 0, i._nextAutoLevel = -1, i.hls = r, i.timer = null, i._bwEstimator = null, i.onCheck = i._abandonRulesCheck.bind(i), i
                }
                return H(e, t), e.prototype.destroy = function() {
                    this.clearTimer(), Ft.prototype.destroy.call(this)
                }, e.prototype.onFragLoading = function(t) {
                    var e = t.frag;
                    if ("main" === e.type) {
                        if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator) {
                            var r = this.hls,
                                i = t.frag.level,
                                a = r.levels[i].details.live,
                                n = r.config,
                                o = void 0,
                                s = void 0;
                            a ? (o = n.abrEwmaFastLive, s = n.abrEwmaSlowLive) : (o = n.abrEwmaFastVoD, s = n.abrEwmaSlowVoD), this._bwEstimator = new we(r, s, o, n.abrEwmaDefaultEstimate)
                        }
                        this.fragCurrent = e
                    }
                }, e.prototype._abandonRulesCheck = function() {
                    var t = this.hls,
                        e = t.media,
                        r = this.fragCurrent,
                        i = r.loader,
                        a = t.minAutoLevel;
                    if (!i || i.stats && i.stats.aborted) return Ct.b.warn("frag loader destroy or aborted, disarm abandonRules"), void this.clearTimer();
                    var n = i.stats;
                    if (e && n && (!e.paused && 0 !== e.playbackRate || !e.readyState) && r.autoLevel && r.level) {
                        var o = performance.now() - n.trequest,
                            s = Math.abs(e.playbackRate);
                        if (o > 500 * r.duration / s) {
                            var l = t.levels,
                                u = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / o),
                                d = l[r.level],
                                h = d.realBitrate ? Math.max(d.realBitrate, d.bitrate) : d.bitrate,
                                c = n.total ? n.total : Math.max(n.loaded, Math.round(r.duration * h / 8)),
                                f = e.currentTime,
                                p = (c - n.loaded) / u,
                                g = (ie.bufferInfo(e, f, t.config.maxBufferHole).end - f) / s;
                            if (g < 2 * r.duration / s && p > g) {
                                var v = void 0,
                                    y = void 0;
                                for (y = r.level - 1; y > a; y--) {
                                    var m = l[y].realBitrate ? Math.max(l[y].realBitrate, l[y].bitrate) : l[y].bitrate;
                                    if ((v = r.duration * m / (6.4 * u)) < g) break
                                }
                                v < p && (Ct.b.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + v.toFixed(1) + "<" + p.toFixed(1) + ":" + g.toFixed(1)), t.nextLoadLevel = y, this._bwEstimator.sample(o, n.loaded), i.abort(), this.clearTimer(), t.trigger(It.a.FRAG_LOAD_EMERGENCY_ABORTED, {
                                    frag: r,
                                    stats: n
                                }))
                            }
                        }
                    }
                }, e.prototype.onFragLoaded = function(t) {
                    var e = t.frag;
                    if ("main" === e.type && !isNaN(e.sn)) {
                        if (this.clearTimer(), this.lastLoadedFragLevel = e.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                            var r = this.hls.levels[e.level],
                                i = (r.loaded ? r.loaded.bytes : 0) + t.stats.loaded,
                                a = (r.loaded ? r.loaded.duration : 0) + t.frag.duration;
                            r.loaded = {
                                bytes: i,
                                duration: a
                            }, r.realBitrate = Math.round(8 * i / a)
                        }
                        if (t.frag.bitrateTest) {
                            var n = t.stats;
                            n.tparsed = n.tbuffered = n.tload, this.onFragBuffered(t)
                        }
                    }
                }, e.prototype.onFragBuffered = function(t) {
                    var e = t.stats,
                        r = t.frag;
                    if (!(!0 === e.aborted || 1 !== r.loadCounter || "main" !== r.type || isNaN(r.sn) || r.bitrateTest && e.tload !== e.tbuffered)) {
                        var i = e.tparsed - e.trequest;
                        Ct.b.log("latency/loading/parsing/append/kbps:" + Math.round(e.tfirst - e.trequest) + "/" + Math.round(e.tload - e.tfirst) + "/" + Math.round(e.tparsed - e.tload) + "/" + Math.round(e.tbuffered - e.tparsed) + "/" + Math.round(8 * e.loaded / (e.tbuffered - e.trequest))), this._bwEstimator.sample(i, e.loaded), e.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
                    }
                }, e.prototype.onError = function(t) {
                    switch (t.details) {
                        case Ot.a.FRAG_LOAD_ERROR:
                        case Ot.a.FRAG_LOAD_TIMEOUT:
                            this.clearTimer()
                    }
                }, e.prototype.clearTimer = function() {
                    clearInterval(this.timer), this.timer = null
                }, e.prototype._findBestLevel = function(t, e, r, i, a, n, o, s, l) {
                    for (var u = a; u >= i; u--) {
                        var d = l[u],
                            h = d.details,
                            c = h ? h.totalduration / h.fragments.length : e,
                            f = !!h && h.live,
                            p = void 0;
                        p = u <= t ? o * r : s * r;
                        var g = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,
                            v = g * c / p;
                        if (Ct.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(p) + "/" + g + "/" + c + "/" + n + "/" + v), p > g && (!v || f && !this.bitrateTestDelay || v < n)) return u
                    }
                    return -1
                }, De(e, [{
                    key: "nextAutoLevel",
                    get: function() {
                        var t = this._nextAutoLevel,
                            e = this._bwEstimator;
                        if (!(-1 === t || e && e.canEstimate())) return t;
                        var r = this._nextABRAutoLevel;
                        return -1 !== t && (r = Math.min(t, r)), r
                    },
                    set: function(t) {
                        this._nextAutoLevel = t
                    }
                }, {
                    key: "_nextABRAutoLevel",
                    get: function() {
                        var t = this.hls,
                            e = t.maxAutoLevel,
                            r = t.levels,
                            i = t.config,
                            a = t.minAutoLevel,
                            n = t.media,
                            o = this.lastLoadedFragLevel,
                            s = this.fragCurrent ? this.fragCurrent.duration : 0,
                            l = n ? n.currentTime : 0,
                            u = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1,
                            d = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
                            h = (ie.bufferInfo(n, l, i.maxBufferHole).end - l) / u,
                            c = this._findBestLevel(o, s, d, a, e, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);
                        if (c >= 0) return c;
                        Ct.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                        var f = s ? Math.min(s, i.maxStarvationDelay) : i.maxStarvationDelay,
                            p = i.abrBandWidthFactor,
                            g = i.abrBandWidthUpFactor;
                        if (0 === h) {
                            var v = this.bitrateTestDelay;
                            if (v) {
                                f = (s ? Math.min(s, i.maxLoadingDelay) : i.maxLoadingDelay) - v, Ct.b.trace("bitrate test took " + Math.round(1e3 * v) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * f) + " ms"), p = g = 1
                            }
                        }
                        return c = this._findBestLevel(o, s, d, a, e, h + f, p, g, r), Math.max(c, 0)
                    }
                }]), e
            }(Ft),
            Ie = ke,
            Oe = y(),
            Ce = function(t) {
                function e(r) {
                    j(this, e);
                    var i = K(this, t.call(this, r, It.a.MEDIA_ATTACHING, It.a.MEDIA_DETACHING, It.a.MANIFEST_PARSED, It.a.BUFFER_RESET, It.a.BUFFER_APPENDING, It.a.BUFFER_CODECS, It.a.BUFFER_EOS, It.a.BUFFER_FLUSHING, It.a.LEVEL_PTS_UPDATED, It.a.LEVEL_UPDATED));
                    return i._msDuration = null, i._levelDuration = null, i.onsbue = i.onSBUpdateEnd.bind(i), i.onsbe = i.onSBUpdateError.bind(i), i.pendingTracks = {}, i.tracks = {}, i
                }
                return W(e, t), e.prototype.destroy = function() {
                    Ft.prototype.destroy.call(this)
                }, e.prototype.onLevelPtsUpdated = function(t) {
                    var e = t.type,
                        r = this.tracks.audio;
                    if ("audio" === e && r && "audio/mpeg" === r.container) {
                        var i = this.sourceBuffer.audio;
                        if (Math.abs(i.timestampOffset - t.start) > .1) {
                            var a = i.updating;
                            try {
                                i.abort()
                            } catch (t) {
                                a = !0, Ct.b.warn("can not abort audio buffer: " + t)
                            }
                            a ? this.audioTimestampOffset = t.start : (Ct.b.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + t.start), i.timestampOffset = t.start)
                        }
                    }
                }, e.prototype.onManifestParsed = function(t) {
                    var e = t.audio,
                        r = t.video || t.levels.length && t.audio,
                        i = 0;
                    t.altAudio && (e || r) && (i = (e ? 1 : 0) + (r ? 1 : 0), Ct.b.log(i + " sourceBuffer(s) expected")), this.sourceBufferNb = i
                }, e.prototype.onMediaAttaching = function(t) {
                    var e = this.media = t.media;
                    if (e) {
                        var r = this.mediaSource = new Oe;
                        this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), r.addEventListener("sourceopen", this.onmso), r.addEventListener("sourceended", this.onmse), r.addEventListener("sourceclose", this.onmsc), e.src = URL.createObjectURL(r)
                    }
                }, e.prototype.onMediaDetaching = function() {
                    Ct.b.log("media source detaching");
                    var t = this.mediaSource;
                    if (t) {
                        if ("open" === t.readyState) try {
                            t.endOfStream()
                        } catch (t) {
                            Ct.b.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
                        }
                        t.removeEventListener("sourceopen", this.onmso), t.removeEventListener("sourceended", this.onmse), t.removeEventListener("sourceclose", this.onmsc), this.media && (URL.revokeObjectURL(this.media.src), this.media.removeAttribute("src"), this.media.load()), this.mediaSource = null, this.media = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                    }
                    this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(It.a.MEDIA_DETACHED)
                }, e.prototype.onMediaSourceOpen = function() {
                    Ct.b.log("media source opened"), this.hls.trigger(It.a.MEDIA_ATTACHED, {
                        media: this.media
                    });
                    var t = this.mediaSource;
                    t && t.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
                }, e.prototype.checkPendingTracks = function() {
                    var t = this.pendingTracks,
                        e = Object.keys(t).length;
                    e && (this.sourceBufferNb <= e || 0 === this.sourceBufferNb) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
                }, e.prototype.onMediaSourceClose = function() {
                    Ct.b.log("media source closed")
                }, e.prototype.onMediaSourceEnded = function() {
                    Ct.b.log("media source ended")
                }, e.prototype.onSBUpdateEnd = function() {
                    if (this.audioTimestampOffset) {
                        var t = this.sourceBuffer.audio;
                        Ct.b.warn("change mpeg audio timestamp offset from " + t.timestampOffset + " to " + this.audioTimestampOffset), t.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
                    }
                    this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
                    var e = this.parent,
                        r = this.segments.reduce(function(t, r) {
                            return r.parent === e ? t + 1 : t
                        }, 0);
                    this.hls.trigger(It.a.BUFFER_APPENDED, {
                        parent: e,
                        pending: r
                    }), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
                }, e.prototype.onSBUpdateError = function(t) {
                    Ct.b.error("sourceBuffer error:", t), this.hls.trigger(It.a.ERROR, {
                        type: Ot.b.MEDIA_ERROR,
                        details: Ot.a.BUFFER_APPENDING_ERROR,
                        fatal: !1
                    })
                }, e.prototype.onBufferReset = function() {
                    var t = this.sourceBuffer;
                    for (var e in t) {
                        var r = t[e];
                        try {
                            this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this.onsbue), r.removeEventListener("error", this.onsbe)
                        } catch (t) {}
                    }
                    this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                }, e.prototype.onBufferCodecs = function(t) {
                    if (0 === Object.keys(this.sourceBuffer).length) {
                        for (var e in t) this.pendingTracks[e] = t[e];
                        var r = this.mediaSource;
                        r && "open" === r.readyState && this.checkPendingTracks()
                    }
                }, e.prototype.createSourceBuffers = function(t) {
                    var e = this.sourceBuffer,
                        r = this.mediaSource;
                    for (var i in t)
                        if (!e[i]) {
                            var a = t[i],
                                n = a.levelCodec || a.codec,
                                o = a.container + ";codecs=" + n;
                            Ct.b.log("creating sourceBuffer(" + o + ")");
                            try {
                                var s = e[i] = r.addSourceBuffer(o);
                                s.addEventListener("updateend", this.onsbue), s.addEventListener("error", this.onsbe), this.tracks[i] = {
                                    codec: n,
                                    container: a.container
                                }, a.buffer = s
                            } catch (t) {
                                Ct.b.error("error while trying to add sourceBuffer:" + t.message), this.hls.trigger(It.a.ERROR, {
                                    type: Ot.b.MEDIA_ERROR,
                                    details: Ot.a.BUFFER_ADD_CODEC_ERROR,
                                    fatal: !1,
                                    err: t,
                                    mimeType: o
                                })
                            }
                        }
                    this.hls.trigger(It.a.BUFFER_CREATED, {
                        tracks: t
                    })
                }, e.prototype.onBufferAppending = function(t) {
                    this._needsFlush || (this.segments ? this.segments.push(t) : this.segments = [t], this.doAppending())
                }, e.prototype.onBufferAppendFail = function(t) {
                    Ct.b.error("sourceBuffer error:", t.event), this.hls.trigger(It.a.ERROR, {
                        type: Ot.b.MEDIA_ERROR,
                        details: Ot.a.BUFFER_APPENDING_ERROR,
                        fatal: !1
                    })
                }, e.prototype.onBufferEos = function(t) {
                    var e = this.sourceBuffer,
                        r = t.type;
                    for (var i in e) r && i !== r || e[i].ended || (e[i].ended = !0, Ct.b.log(i + " sourceBuffer now EOS"));
                    this.checkEos()
                }, e.prototype.checkEos = function() {
                    var t = this.sourceBuffer,
                        e = this.mediaSource;
                    if (!e || "open" !== e.readyState) return void(this._needsEos = !1);
                    for (var r in t) {
                        var i = t[r];
                        if (!i.ended) return;
                        if (i.updating) return void(this._needsEos = !0)
                    }
                    Ct.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
                    try {
                        e.endOfStream()
                    } catch (t) {
                        Ct.b.warn("exception while calling mediaSource.endOfStream()")
                    }
                    this._needsEos = !1
                }, e.prototype.onBufferFlushing = function(t) {
                    this.flushRange.push({
                        start: t.startOffset,
                        end: t.endOffset,
                        type: t.type
                    }), this.flushBufferCounter = 0, this.doFlush()
                }, e.prototype.onLevelUpdated = function(t) {
                    var e = t.details;
                    0 !== e.fragments.length && (this._levelDuration = e.totalduration + e.fragments[0].start, this.updateMediaElementDuration())
                }, e.prototype.updateMediaElementDuration = function() {
                    var t = this.media,
                        e = this.mediaSource,
                        r = this.sourceBuffer,
                        i = this._levelDuration;
                    if (null !== i && t && e && r && 0 !== t.readyState && "open" === e.readyState) {
                        for (var a in r)
                            if (r[a].updating) return;
                        null === this._msDuration && (this._msDuration = e.duration);
                        var n = t.duration;
                        (i > this._msDuration && i > n || n === 1 / 0 || isNaN(n)) && (Ct.b.log("Updating mediasource duration to " + i.toFixed(3)), this._msDuration = e.duration = i)
                    }
                }, e.prototype.doFlush = function() {
                    for (; this.flushRange.length;) {
                        var t = this.flushRange[0];
                        if (!this.flushBuffer(t.start, t.end, t.type)) return void(this._needsFlush = !0);
                        this.flushRange.shift(), this.flushBufferCounter = 0
                    }
                    if (0 === this.flushRange.length) {
                        this._needsFlush = !1;
                        var e = 0,
                            r = this.sourceBuffer;
                        try {
                            for (var i in r) e += r[i].buffered.length
                        } catch (t) {
                            Ct.b.error("error while accessing sourceBuffer.buffered")
                        }
                        this.appended = e, this.hls.trigger(It.a.BUFFER_FLUSHED)
                    }
                }, e.prototype.doAppending = function() {
                    var t = this.hls,
                        e = this.sourceBuffer,
                        r = this.segments;
                    if (Object.keys(e).length) {
                        if (this.media.error) return this.segments = [], void Ct.b.error("trying to append although a media error occured, flush segment and abort");
                        if (this.appending) return;
                        if (r && r.length) {
                            var i = r.shift();
                            try {
                                var a = i.type,
                                    n = e[a];
                                n ? n.updating ? r.unshift(i) : (n.ended = !1, this.parent = i.parent, n.appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
                            } catch (e) {
                                Ct.b.error("error while trying to append buffer:" + e.message), r.unshift(i);
                                var o = {
                                    type: Ot.b.MEDIA_ERROR,
                                    parent: i.parent
                                };
                                if (22 === e.code) return this.segments = [], o.details = Ot.a.BUFFER_FULL_ERROR, o.fatal = !1, void t.trigger(It.a.ERROR, o);
                                if (this.appendError ? this.appendError++ : this.appendError = 1, o.details = Ot.a.BUFFER_APPEND_ERROR, this.appendError > t.config.appendErrorMaxRetry) return Ct.b.log("fail " + t.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), r = [], o.fatal = !0, void t.trigger(It.a.ERROR, o);
                                o.fatal = !1, t.trigger(It.a.ERROR, o)
                            }
                        }
                    }
                }, e.prototype.flushBuffer = function(t, e, r) {
                    var i, a, n, o, s, l, u = this.sourceBuffer;
                    if (Object.keys(u).length) {
                        if (Ct.b.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + t + "/" + e), this.flushBufferCounter < this.appended) {
                            for (var d in u)
                                if (!r || d === r) {
                                    if (i = u[d], i.ended = !1, i.updating) return Ct.b.warn("cannot flush, sb updating in progress"), !1;
                                    try {
                                        for (a = 0; a < i.buffered.length; a++)
                                            if (n = i.buffered.start(a), o = i.buffered.end(a), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && e === Number.POSITIVE_INFINITY ? (s = t, l = e) : (s = Math.max(n, t), l = Math.min(o, e)), Math.min(l, o) - s > .5) return this.flushBufferCounter++, Ct.b.log("flush " + d + " [" + s + "," + l + "], of [" + n + "," + o + "], pos:" + this.media.currentTime), i.remove(s, l), !1
                                    } catch (t) {
                                        Ct.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
                                    }
                                }
                        } else Ct.b.warn("abort flushing too many retries");
                        Ct.b.log("buffer flushed")
                    }
                    return !0
                }, e
            }(Ft),
            Pe = Ce,
            xe = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            Fe = function(t) {
                function e(r) {
                    return V(this, e), Y(this, t.call(this, r, It.a.FPS_DROP_LEVEL_CAPPING, It.a.MEDIA_ATTACHING, It.a.MANIFEST_PARSED))
                }
                return z(e, t), e.prototype.destroy = function() {
                    this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)))
                }, e.prototype.onFpsDropLevelCapping = function(t) {
                    e.isLevelAllowed(t.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(t.droppedLevel)
                }, e.prototype.onMediaAttaching = function(t) {
                    this.media = t.media instanceof HTMLVideoElement ? t.media : null
                }, e.prototype.onManifestParsed = function(t) {
                    var e = this.hls;
                    this.restrictedLevels = [], e.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = t.levels, e.firstLevel = this.getMaxLevel(t.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                }, e.prototype.detectPlayerSize = function() {
                    if (this.media) {
                        var t = this.levels ? this.levels.length : 0;
                        if (t) {
                            var e = this.hls;
                            e.autoLevelCapping = this.getMaxLevel(t - 1), e.autoLevelCapping > this.autoLevelCapping && e.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                        }
                    }
                }, e.prototype.getMaxLevel = function(t) {
                    var r = this;
                    if (!this.levels) return -1;
                    var i = this.levels.filter(function(i, a) {
                        return e.isLevelAllowed(a, r.restrictedLevels) && a <= t
                    });
                    return e.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight)
                }, e.isLevelAllowed = function(t) {
                    return -1 === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).indexOf(t)
                }, e.getMaxLevelByMediaSize = function(t, e, r) {
                    if (!t || t && !t.length) return -1;
                    for (var i = t.length - 1, a = 0; a < t.length; a += 1) {
                        var n = t[a];
                        if ((n.width >= e || n.height >= r) && function(t, e) {
                                return !e || (t.width !== e.width || t.height !== e.height)
                            }(n, t[a + 1])) {
                            i = a;
                            break
                        }
                    }
                    return i
                }, xe(e, [{
                    key: "mediaWidth",
                    get: function() {
                        var t = void 0,
                            r = this.media;
                        return r && (t = r.width || r.clientWidth || r.offsetWidth, t *= e.contentScaleFactor), t
                    }
                }, {
                    key: "mediaHeight",
                    get: function() {
                        var t = void 0,
                            r = this.media;
                        return r && (t = r.height || r.clientHeight || r.offsetHeight, t *= e.contentScaleFactor), t
                    }
                }], [{
                    key: "contentScaleFactor",
                    get: function() {
                        var t = 1;
                        try {
                            t = window.devicePixelRatio
                        } catch (t) {}
                        return t
                    }
                }]), e
            }(Ft),
            Ne = Fe,
            Me = function(t) {
                function e(r) {
                    return X(this, e), q(this, t.call(this, r, It.a.MEDIA_ATTACHING))
                }
                return Q(e, t), e.prototype.destroy = function() {
                    this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
                }, e.prototype.onMediaAttaching = function(t) {
                    var e = this.hls.config;
                    if (e.capLevelOnFPSDrop) {
                        "function" == typeof(this.video = t.media instanceof HTMLVideoElement ? t.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), e.fpsDroppedMonitoringPeriod)
                    }
                }, e.prototype.checkFPS = function(t, e, r) {
                    var i = performance.now();
                    if (e) {
                        if (this.lastTime) {
                            var a = i - this.lastTime,
                                n = r - this.lastDroppedFrames,
                                o = e - this.lastDecodedFrames,
                                s = 1e3 * n / a,
                                l = this.hls;
                            if (l.trigger(It.a.FPS_DROP, {
                                    currentDropped: n,
                                    currentDecoded: o,
                                    totalDroppedFrames: r
                                }), s > 0 && n > l.config.fpsDroppedMonitoringThreshold * o) {
                                var u = l.currentLevel;
                                Ct.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), u > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= u) && (u -= 1, l.trigger(It.a.FPS_DROP_LEVEL_CAPPING, {
                                    level: u,
                                    droppedLevel: l.currentLevel
                                }), l.autoLevelCapping = u, l.streamController.nextLevelSwitch())
                            }
                        }
                        this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = e
                    }
                }, e.prototype.checkFPSInterval = function() {
                    var t = this.video;
                    if (t)
                        if (this.isVideoPlaybackQualityAvailable) {
                            var e = t.getVideoPlaybackQuality();
                            this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                        } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                }, e
            }(Ft),
            Ue = Me,
            Be = function() {
                function t(e) {
                    J(this, t), e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                }
                return t.prototype.destroy = function() {
                    this.abort(), this.loader = null
                }, t.prototype.abort = function() {
                    var t = this.loader;
                    t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                }, t.prototype.load = function(t, e, r) {
                    this.context = t, this.config = e, this.callbacks = r, this.stats = {
                        trequest: performance.now(),
                        retry: 0
                    }, this.retryDelay = e.retryDelay, this.loadInternal()
                }, t.prototype.loadInternal = function() {
                    var t, e = this.context;
                    t = this.loader = new XMLHttpRequest;
                    var r = this.stats;
                    r.tfirst = 0, r.loaded = 0;
                    var i = this.xhrSetup;
                    try {
                        if (i) try {
                            i(t, e.url)
                        } catch (r) {
                            t.open("GET", e.url, !0), i(t, e.url)
                        }
                        t.readyState || t.open("GET", e.url, !0)
                    } catch (r) {
                        return void this.callbacks.onError({
                            code: t.status,
                            text: r.message
                        }, e, t)
                    }
                    e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), t.send()
                }, t.prototype.readystatechange = function(t) {
                    var e = t.currentTarget,
                        r = e.readyState,
                        i = this.stats,
                        a = this.context,
                        n = this.config;
                    if (!i.aborted && r >= 2)
                        if (window.clearTimeout(this.requestTimeout), 0 === i.tfirst && (i.tfirst = Math.max(performance.now(), i.trequest)), 4 === r) {
                            var o = e.status;
                            if (o >= 200 && o < 300) {
                                i.tload = Math.max(i.tfirst, performance.now());
                                var s = void 0,
                                    l = void 0;
                                "arraybuffer" === a.responseType ? (s = e.response, l = s.byteLength) : (s = e.responseText, l = s.length), i.loaded = i.total = l;
                                var u = {
                                    url: e.responseURL,
                                    data: s
                                };
                                this.callbacks.onSuccess(u, i, a, e)
                            } else i.retry >= n.maxRetry || o >= 400 && o < 499 ? (Ct.b.error(o + " while loading " + a.url), this.callbacks.onError({
                                code: o,
                                text: e.statusText
                            }, a, e)) : (Ct.b.warn(o + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay), i.retry++)
                        } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), n.timeout)
                }, t.prototype.loadtimeout = function() {
                    Ct.b.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
                }, t.prototype.loadprogress = function(t) {
                    var e = t.currentTarget,
                        r = this.stats;
                    r.loaded = t.loaded, t.lengthComputable && (r.total = t.total);
                    var i = this.callbacks.onProgress;
                    i && i(r, this.context, null, e)
                }, t
            }(),
            Ge = Be,
            He = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            je = function(t) {
                function e(r) {
                    $(this, e);
                    var i = Z(this, t.call(this, r, It.a.MANIFEST_LOADING, It.a.MANIFEST_PARSED, It.a.AUDIO_TRACK_LOADED, It.a.ERROR));
                    return i.ticks = 0, i.ontick = i.tick.bind(i), i
                }
                return tt(e, t), e.prototype.destroy = function() {
                    this.cleanTimer(), Ft.prototype.destroy.call(this)
                }, e.prototype.cleanTimer = function() {
                    this.timer && (clearTimeout(this.timer), this.timer = null)
                }, e.prototype.tick = function() {
                    1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                }, e.prototype.doTick = function() {
                    this.updateTrack(this.trackId)
                }, e.prototype.onError = function(t) {
                    t.fatal && t.type === Ot.b.NETWORK_ERROR && this.cleanTimer()
                }, e.prototype.onManifestLoading = function() {
                    this.tracks = [], this.trackId = -1
                }, e.prototype.onManifestParsed = function(t) {
                    var e = this,
                        r = t.audioTracks || [],
                        i = !1;
                    this.tracks = r, this.hls.trigger(It.a.AUDIO_TRACKS_UPDATED, {
                        audioTracks: r
                    });
                    var a = 0;
                    r.forEach(function(t) {
                        if (t.default && !i) return e.audioTrack = a, void(i = !0);
                        a++
                    }), !1 === i && r.length && (Ct.b.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0)
                }, e.prototype.onAudioTrackLoaded = function(t) {
                    t.id < this.tracks.length && (Ct.b.log("audioTrack " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * t.details.targetduration)), !t.details.live && this.timer && this.cleanTimer())
                }, e.prototype.setAudioTrackInternal = function(t) {
                    if (t >= 0 && t < this.tracks.length) {
                        this.cleanTimer(), this.trackId = t, Ct.b.log("switching to audioTrack " + t);
                        var e = this.tracks[t],
                            r = this.hls,
                            i = e.type,
                            a = e.url,
                            n = {
                                id: t,
                                type: i,
                                url: a
                            };
                        r.trigger(It.a.AUDIO_TRACK_SWITCH, n), r.trigger(It.a.AUDIO_TRACK_SWITCHING, n);
                        var o = e.details;
                        !a || void 0 !== o && !0 !== o.live || (Ct.b.log("(re)loading playlist for audioTrack " + t), r.trigger(It.a.AUDIO_TRACK_LOADING, {
                            url: a,
                            id: t
                        }))
                    }
                }, e.prototype.updateTrack = function(t) {
                    if (t >= 0 && t < this.tracks.length) {
                        this.cleanTimer(), this.trackId = t, Ct.b.log("updating audioTrack " + t);
                        var e = this.tracks[t],
                            r = e.url,
                            i = e.details;
                        !r || void 0 !== i && !0 !== i.live || (Ct.b.log("(re)loading playlist for audioTrack " + t), this.hls.trigger(It.a.AUDIO_TRACK_LOADING, {
                            url: r,
                            id: t
                        }))
                    }
                }, He(e, [{
                    key: "audioTracks",
                    get: function() {
                        return this.tracks
                    }
                }, {
                    key: "audioTrack",
                    get: function() {
                        return this.trackId
                    },
                    set: function(t) {
                        this.trackId === t && void 0 !== this.tracks[t].details || this.setAudioTrackInternal(t)
                    }
                }]), e
            }(Ft),
            Ke = je,
            We = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            Ve = {
                STOPPED: "STOPPED",
                STARTING: "STARTING",
                IDLE: "IDLE",
                PAUSED: "PAUSED",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING",
                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                WAITING_TRACK: "WAITING_TRACK",
                PARSING: "PARSING",
                PARSED: "PARSED",
                BUFFER_FLUSHING: "BUFFER_FLUSHING",
                ENDED: "ENDED",
                ERROR: "ERROR",
                WAITING_INIT_PTS: "WAITING_INIT_PTS"
            },
            Ye = function(t) {
                function e(r) {
                    et(this, e);
                    var i = rt(this, t.call(this, r, It.a.MEDIA_ATTACHED, It.a.MEDIA_DETACHING, It.a.AUDIO_TRACKS_UPDATED, It.a.AUDIO_TRACK_SWITCHING, It.a.AUDIO_TRACK_LOADED, It.a.KEY_LOADED, It.a.FRAG_LOADED, It.a.FRAG_PARSING_INIT_SEGMENT, It.a.FRAG_PARSING_DATA, It.a.FRAG_PARSED, It.a.ERROR, It.a.BUFFER_CREATED, It.a.BUFFER_APPENDED, It.a.BUFFER_FLUSHED, It.a.INIT_PTS_FOUND));
                    return i.config = r.config, i.audioCodecSwap = !1, i.ticks = 0, i._state = Ve.STOPPED, i.ontick = i.tick.bind(i), i.initPTS = [], i.waitingFragment = null, i.videoTrackCC = null, i
                }
                return it(e, t), e.prototype.destroy = function() {
                    this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), Ft.prototype.destroy.call(this), this.state = Ve.STOPPED
                }, e.prototype.onInitPtsFound = function(t) {
                    var e = t.id,
                        r = t.frag.cc,
                        i = t.initPTS;
                    "main" === e && (this.initPTS[r] = i, this.videoTrackCC = r, Ct.b.log("InitPTS for cc:" + r + " found from video track:" + i), this.state === Ve.WAITING_INIT_PTS && this.tick())
                }, e.prototype.startLoad = function(t) {
                    if (this.tracks) {
                        var e = this.lastCurrentTime;
                        this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.fragLoadError = 0, e > 0 && -1 === t ? (Ct.b.log("audio:override startPosition with lastCurrentTime @" + e.toFixed(3)), this.state = Ve.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : t, this.state = Ve.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                    } else this.startPosition = t, this.state = Ve.STOPPED
                }, e.prototype.stopLoad = function() {
                    var t = this.fragCurrent;
                    t && (t.loader && t.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = Ve.STOPPED
                }, e.prototype.tick = function() {
                    1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                }, e.prototype.doTick = function() {
                    var t, e, r, i = this.hls,
                        a = i.config;
                    switch (this.state) {
                        case Ve.ERROR:
                        case Ve.PAUSED:
                        case Ve.BUFFER_FLUSHING:
                            break;
                        case Ve.STARTING:
                            this.state = Ve.WAITING_TRACK, this.loadedmetadata = !1;
                            break;
                        case Ve.IDLE:
                            var n = this.tracks;
                            if (!n) break;
                            if (!this.media && (this.startFragRequested || !a.startFragPrefetch)) break;
                            if (this.loadedmetadata) t = this.media.currentTime;
                            else if (void 0 === (t = this.nextLoadPosition)) break;
                            var o = this.mediaBuffer ? this.mediaBuffer : this.media,
                                s = this.videoBuffer ? this.videoBuffer : this.media,
                                l = ie.bufferInfo(o, t, a.maxBufferHole),
                                u = ie.bufferInfo(s, t, a.maxBufferHole),
                                d = l.len,
                                h = l.end,
                                c = this.fragPrevious,
                                f = Math.max(a.maxBufferLength, u.len),
                                p = this.audioSwitch,
                                g = this.trackId;
                            if ((d < f || p) && g < n.length) {
                                if (void 0 === (r = n[g].details)) {
                                    this.state = Ve.WAITING_TRACK;
                                    break
                                }
                                if (!p && !r.live && c && c.sn === r.endSN && (!this.media.seeking || this.media.duration - h < c.duration / 2)) {
                                    this.hls.trigger(It.a.BUFFER_EOS, {
                                        type: "audio"
                                    }), this.state = Ve.ENDED;
                                    break
                                }
                                var v = r.fragments,
                                    y = v.length,
                                    m = v[0].start,
                                    b = v[y - 1].start + v[y - 1].duration,
                                    E = void 0;
                                if (p)
                                    if (r.live && !r.PTSKnown) Ct.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"), h = 0;
                                    else if (h = t, r.PTSKnown && t < m) {
                                    if (!(l.end > m || l.nextStart)) return;
                                    Ct.b.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = m + .05
                                }
                                if (r.initSegment && !r.initSegment.data) E = r.initSegment;
                                else if (h <= m) {
                                    if (E = v[0], null !== this.videoTrackCC && E.cc !== this.videoTrackCC && (E = A(v, this.videoTrackCC)), r.live && E.loadIdx && E.loadIdx === this.fragLoadIdx) {
                                        var T = l.nextStart ? l.nextStart : m;
                                        return Ct.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (T + .05)), void(this.media.currentTime = T + .05)
                                    }
                                } else {
                                    var R = void 0,
                                        S = a.maxFragLookUpTolerance,
                                        _ = c ? v[c.sn - v[0].sn + 1] : void 0,
                                        L = function(t) {
                                            var e = Math.min(S, t.duration);
                                            return t.start + t.duration - e <= h ? 1 : t.start - e > h && t.start ? -1 : 0
                                        };
                                    h < b ? (h > b - S && (S = 0), R = _ && !L(_) ? _ : ee.search(v, L)) : R = v[y - 1], R && (E = R, m = R.start, c && E.level === c.level && E.sn === c.sn && (E.sn < r.endSN ? (E = v[E.sn + 1 - r.startSN], Ct.b.log("SN just loaded, load next one: " + E.sn)) : E = null))
                                }
                                if (E)
                                    if (E.decryptdata && null != E.decryptdata.uri && null == E.decryptdata.key) Ct.b.log("Loading key for " + E.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + g), this.state = Ve.KEY_LOADING, i.trigger(It.a.KEY_LOADING, {
                                        frag: E
                                    });
                                    else {
                                        if (Ct.b.log("Loading " + E.sn + ", cc: " + E.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + g + ", currentTime:" + t + ",bufferEnd:" + h.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, E.loadCounter) {
                                            E.loadCounter++;
                                            var w = a.fragLoadingLoopThreshold;
                                            if (E.loadCounter > w && Math.abs(this.fragLoadIdx - E.loadIdx) < w) return void i.trigger(It.a.ERROR, {
                                                type: Ot.b.MEDIA_ERROR,
                                                details: Ot.a.FRAG_LOOP_LOADING_ERROR,
                                                fatal: !1,
                                                frag: E
                                            })
                                        } else E.loadCounter = 1;
                                        E.loadIdx = this.fragLoadIdx, this.fragCurrent = E, this.startFragRequested = !0, isNaN(E.sn) || (this.nextLoadPosition = E.start + E.duration), i.trigger(It.a.FRAG_LOADING, {
                                            frag: E
                                        }), this.state = Ve.FRAG_LOADING
                                    }
                            }
                            break;
                        case Ve.WAITING_TRACK:
                            e = this.tracks[this.trackId], e && e.details && (this.state = Ve.IDLE);
                            break;
                        case Ve.FRAG_LOADING_WAITING_RETRY:
                            var D = performance.now(),
                                k = this.retryDate;
                            o = this.media;
                            var I = o && o.seeking;
                            (!k || D >= k || I) && (Ct.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = Ve.IDLE);
                            break;
                        case Ve.WAITING_INIT_PTS:
                            var O = this.videoTrackCC;
                            if (void 0 === this.initPTS[O]) break;
                            var C = this.waitingFragment;
                            if (C) {
                                var P = C.frag.cc;
                                O !== P ? (e = this.tracks[this.trackId], e.details && e.details.live && (Ct.b.warn("Waiting fragment CC (" + P + ") does not match video track CC (" + O + ")"), this.waitingFragment = null, this.state = Ve.IDLE)) : (this.state = Ve.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
                            } else this.state = Ve.IDLE;
                            break;
                        case Ve.STOPPED:
                        case Ve.FRAG_LOADING:
                        case Ve.PARSING:
                        case Ve.PARSED:
                        case Ve.ENDED:
                    }
                }, e.prototype.onMediaAttached = function(t) {
                    var e = this.media = this.mediaBuffer = t.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("ended", this.onvended);
                    var r = this.config;
                    this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
                }, e.prototype.onMediaDetaching = function() {
                    var t = this.media;
                    t && t.ended && (Ct.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                    var e = this.tracks;
                    e && e.forEach(function(t) {
                        t.details && t.details.fragments.forEach(function(t) {
                            t.loadCounter = void 0
                        })
                    }), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                }, e.prototype.onMediaSeeking = function() {
                    this.state === Ve.ENDED && (this.state = Ve.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.tick()
                }, e.prototype.onMediaEnded = function() {
                    this.startPosition = this.lastCurrentTime = 0
                }, e.prototype.onAudioTracksUpdated = function(t) {
                    Ct.b.log("audio tracks updated"), this.tracks = t.audioTracks
                }, e.prototype.onAudioTrackSwitching = function(t) {
                    var e = !!t.url;
                    this.trackId = t.id, this.fragCurrent = null, this.state = Ve.PAUSED, this.waitingFragment = null, e ? this.timer || (this.timer = setInterval(this.ontick, 100)) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), e && (this.audioSwitch = !0, this.state = Ve.IDLE, void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold)), this.tick()
                }, e.prototype.onAudioTrackLoaded = function(t) {
                    var e = t.details,
                        r = t.id,
                        i = this.tracks[r],
                        a = e.totalduration,
                        n = 0;
                    if (Ct.b.log("track " + r + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + a), e.live) {
                        var o = i.details;
                        o && e.fragments.length > 0 ? (T(o, e), n = e.fragments[0].start, e.PTSKnown ? Ct.b.log("live audio playlist sliding:" + n.toFixed(3)) : Ct.b.log("live audio playlist - outdated PTS, unknown sliding")) : (e.PTSKnown = !1, Ct.b.log("live audio playlist - first load, unknown sliding"))
                    } else e.PTSKnown = !1;
                    if (i.details = e, !this.startFragRequested) {
                        if (-1 === this.startPosition) {
                            var s = e.startTimeOffset;
                            isNaN(s) ? this.startPosition = 0 : (Ct.b.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s)
                        }
                        this.nextLoadPosition = this.startPosition
                    }
                    this.state === Ve.WAITING_TRACK && (this.state = Ve.IDLE), this.tick()
                }, e.prototype.onKeyLoaded = function() {
                    this.state === Ve.KEY_LOADING && (this.state = Ve.IDLE, this.tick())
                }, e.prototype.onFragLoaded = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    if (this.state === Ve.FRAG_LOADING && e && "audio" === r.type && r.level === e.level && r.sn === e.sn) {
                        var i = this.tracks[this.trackId],
                            a = i.details,
                            n = a.totalduration,
                            o = e.level,
                            s = e.sn,
                            l = e.cc,
                            u = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2",
                            d = this.stats = t.stats;
                        if ("initSegment" === s) this.state = Ve.IDLE, d.tparsed = d.tbuffered = performance.now(), a.initSegment.data = t.payload, this.hls.trigger(It.a.FRAG_BUFFERED, {
                            stats: d,
                            frag: e,
                            id: "audio"
                        }), this.tick();
                        else {
                            this.state = Ve.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new he(this.hls, "audio"));
                            var h = this.initPTS[l],
                                c = a.initSegment ? a.initSegment.data : [];
                            if (a.initSegment || void 0 !== h) {
                                this.pendingBuffering = !0, Ct.b.log("Demuxing " + s + " of [" + a.startSN + " ," + a.endSN + "],track " + o);
                                this.demuxer.push(t.payload, c, u, null, e, n, !1, h)
                            } else Ct.b.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + s + " of [" + a.startSN + " ," + a.endSN + "],track " + o), this.waitingFragment = t, this.state = Ve.WAITING_INIT_PTS
                        }
                    }
                    this.fragLoadError = 0
                }, e.prototype.onFragParsingInitSegment = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    if (e && "audio" === t.id && r.sn === e.sn && r.level === e.level && this.state === Ve.PARSING) {
                        var i = t.tracks,
                            a = void 0;
                        if (i.video && delete i.video, a = i.audio) {
                            a.levelCodec = a.codec, a.id = t.id, this.hls.trigger(It.a.BUFFER_CODECS, i), Ct.b.log("audio track:audio,container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
                            var n = a.initSegment;
                            if (n) {
                                var o = {
                                    type: "audio",
                                    data: n,
                                    parent: "audio",
                                    content: "initSegment"
                                };
                                this.audioSwitch ? this.pendingData = [o] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(It.a.BUFFER_APPENDING, o))
                            }
                            this.tick()
                        }
                    }
                }, e.prototype.onFragParsingData = function(t) {
                    var e = this,
                        r = this.fragCurrent,
                        i = t.frag;
                    if (r && "audio" === t.id && "audio" === t.type && i.sn === r.sn && i.level === r.level && this.state === Ve.PARSING) {
                        var a = this.trackId,
                            n = this.tracks[a],
                            o = this.hls;
                        isNaN(t.endPTS) && (t.endPTS = t.startPTS + r.duration, t.endDTS = t.startDTS + r.duration), Ct.b.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb), E(n.details, r, t.startPTS, t.endPTS);
                        var s = this.audioSwitch,
                            l = this.media,
                            u = !1;
                        if (s && l)
                            if (l.readyState) {
                                var d = l.currentTime;
                                Ct.b.log("switching audio track : currentTime:" + d), d >= t.startPTS && (Ct.b.log("switching audio track : flushing all audio"), this.state = Ve.BUFFER_FLUSHING, o.trigger(It.a.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: "audio"
                                }), u = !0, this.audioSwitch = !1, o.trigger(It.a.AUDIO_TRACK_SWITCHED, {
                                    id: a
                                }))
                            } else this.audioSwitch = !1, o.trigger(It.a.AUDIO_TRACK_SWITCHED, {
                                id: a
                            });
                        var h = this.pendingData;
                        this.audioSwitch || ([t.data1, t.data2].forEach(function(e) {
                            e && e.length && h.push({
                                type: t.type,
                                data: e,
                                parent: "audio",
                                content: "data"
                            })
                        }), !u && h.length && (h.forEach(function(t) {
                            e.state === Ve.PARSING && (e.pendingBuffering = !0, e.hls.trigger(It.a.BUFFER_APPENDING, t))
                        }), this.pendingData = [], this.appended = !0)), this.tick()
                    }
                }, e.prototype.onFragParsed = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    e && "audio" === t.id && r.sn === e.sn && r.level === e.level && this.state === Ve.PARSING && (this.stats.tparsed = performance.now(), this.state = Ve.PARSED, this._checkAppendedParsed())
                }, e.prototype.onBufferCreated = function(t) {
                    var e = t.tracks.audio;
                    e && (this.mediaBuffer = e.buffer, this.loadedmetadata = !0), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer)
                }, e.prototype.onBufferAppended = function(t) {
                    if ("audio" === t.parent) {
                        var e = this.state;
                        e !== Ve.PARSING && e !== Ve.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
                    }
                }, e.prototype._checkAppendedParsed = function() {
                    if (!(this.state !== Ve.PARSED || this.appended && this.pendingBuffering)) {
                        var t = this.fragCurrent,
                            e = this.stats,
                            r = this.hls;
                        if (t) {
                            this.fragPrevious = t, e.tbuffered = performance.now(), r.trigger(It.a.FRAG_BUFFERED, {
                                stats: e,
                                frag: t,
                                id: "audio"
                            });
                            var i = this.mediaBuffer ? this.mediaBuffer : this.media;
                            Ct.b.log("audio buffered : " + fe.toString(i.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(It.a.AUDIO_TRACK_SWITCHED, {
                                id: this.trackId
                            })), this.state = Ve.IDLE
                        }
                        this.tick()
                    }
                }, e.prototype.onError = function(t) {
                    var e = t.frag;
                    if (!e || "audio" === e.type) switch (t.details) {
                        case Ot.a.FRAG_LOAD_ERROR:
                        case Ot.a.FRAG_LOAD_TIMEOUT:
                            if (!t.fatal) {
                                var r = this.fragLoadError;
                                r ? r++ : r = 1;
                                var i = this.config;
                                if (r <= i.fragLoadingMaxRetry) {
                                    this.fragLoadError = r, e.loadCounter = 0;
                                    var a = Math.min(Math.pow(2, r - 1) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
                                    Ct.b.warn("audioStreamController: frag loading failed, retry in " + a + " ms"), this.retryDate = performance.now() + a, this.state = Ve.FRAG_LOADING_WAITING_RETRY
                                } else Ct.b.error("audioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = Ve.ERROR
                            }
                            break;
                        case Ot.a.FRAG_LOOP_LOADING_ERROR:
                        case Ot.a.AUDIO_TRACK_LOAD_ERROR:
                        case Ot.a.AUDIO_TRACK_LOAD_TIMEOUT:
                        case Ot.a.KEY_LOAD_ERROR:
                        case Ot.a.KEY_LOAD_TIMEOUT:
                            this.state !== Ve.ERROR && (this.state = t.fatal ? Ve.ERROR : Ve.IDLE, Ct.b.warn("audioStreamController: " + t.details + " while loading frag,switch to " + this.state + " state ..."));
                            break;
                        case Ot.a.BUFFER_FULL_ERROR:
                            if ("audio" === t.parent && (this.state === Ve.PARSING || this.state === Ve.PARSED)) {
                                var n = this.mediaBuffer,
                                    o = this.media.currentTime;
                                if (n && ie.isBuffered(n, o) && ie.isBuffered(n, o + .5)) {
                                    var s = this.config;
                                    s.maxMaxBufferLength >= s.maxBufferLength && (s.maxMaxBufferLength /= 2, Ct.b.warn("audio:reduce max buffer length to " + s.maxMaxBufferLength + "s"), this.fragLoadIdx += 2 * s.fragLoadingLoopThreshold), this.state = Ve.IDLE
                                } else Ct.b.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = Ve.BUFFER_FLUSHING, this.hls.trigger(It.a.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: "audio"
                                })
                            }
                    }
                }, e.prototype.onBufferFlushed = function() {
                    var t = this,
                        e = this.pendingData;
                    e && e.length ? (Ct.b.log("appending pending audio data on Buffer Flushed"), e.forEach(function(e) {
                        t.hls.trigger(It.a.BUFFER_APPENDING, e)
                    }), this.appended = !0, this.pendingData = [], this.state = Ve.PARSED) : (this.state = Ve.IDLE, this.fragPrevious = null, this.tick())
                }, We(e, [{
                    key: "state",
                    set: function(t) {
                        if (this.state !== t) {
                            var e = this.state;
                            this._state = t, Ct.b.log("audio stream:" + e + "->" + t)
                        }
                    },
                    get: function() {
                        return this._state
                    }
                }]), e
            }(Ft),
            ze = Ye,
            Xe = function() {
                function t(t) {
                    return "string" == typeof t && (!!n[t.toLowerCase()] && t.toLowerCase())
                }

                function e(t) {
                    return "string" == typeof t && (!!o[t.toLowerCase()] && t.toLowerCase())
                }

                function r(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var i in r) t[i] = r[i]
                    }
                    return t
                }

                function i(i, n, o) {
                    var s = this,
                        l = function() {
                            if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
                        }(),
                        u = {};
                    l ? s = document.createElement("custom") : u.enumerable = !0, s.hasBeenReset = !1;
                    var d = "",
                        h = !1,
                        c = i,
                        f = n,
                        p = o,
                        g = null,
                        v = "",
                        y = !0,
                        m = "auto",
                        b = "start",
                        E = 50,
                        T = "middle",
                        R = 50,
                        A = "middle";
                    if (Object.defineProperty(s, "id", r({}, u, {
                            get: function() {
                                return d
                            },
                            set: function(t) {
                                d = "" + t
                            }
                        })), Object.defineProperty(s, "pauseOnExit", r({}, u, {
                            get: function() {
                                return h
                            },
                            set: function(t) {
                                h = !!t
                            }
                        })), Object.defineProperty(s, "startTime", r({}, u, {
                            get: function() {
                                return c
                            },
                            set: function(t) {
                                if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                                c = t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "endTime", r({}, u, {
                            get: function() {
                                return f
                            },
                            set: function(t) {
                                if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                                f = t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "text", r({}, u, {
                            get: function() {
                                return p
                            },
                            set: function(t) {
                                p = "" + t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "region", r({}, u, {
                            get: function() {
                                return g
                            },
                            set: function(t) {
                                g = t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "vertical", r({}, u, {
                            get: function() {
                                return v
                            },
                            set: function(e) {
                                var r = t(e);
                                if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
                                v = r, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "snapToLines", r({}, u, {
                            get: function() {
                                return y
                            },
                            set: function(t) {
                                y = !!t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "line", r({}, u, {
                            get: function() {
                                return m
                            },
                            set: function(t) {
                                if ("number" != typeof t && t !== a) throw new SyntaxError("An invalid number or illegal string was specified.");
                                m = t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "lineAlign", r({}, u, {
                            get: function() {
                                return b
                            },
                            set: function(t) {
                                var r = e(t);
                                if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                                b = r, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "position", r({}, u, {
                            get: function() {
                                return E
                            },
                            set: function(t) {
                                if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                                E = t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "positionAlign", r({}, u, {
                            get: function() {
                                return T
                            },
                            set: function(t) {
                                var r = e(t);
                                if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                                T = r, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "size", r({}, u, {
                            get: function() {
                                return R
                            },
                            set: function(t) {
                                if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                                R = t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "align", r({}, u, {
                            get: function() {
                                return A
                            },
                            set: function(t) {
                                var r = e(t);
                                if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                                A = r, this.hasBeenReset = !0
                            }
                        })), s.displayState = void 0, l) return s
                }
                if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
                var a = "auto",
                    n = {
                        "": !0,
                        lr: !0,
                        rl: !0
                    },
                    o = {
                        start: !0,
                        middle: !0,
                        end: !0,
                        left: !0,
                        right: !0
                    };
                return i.prototype.getCueAsHTML = function() {
                    return window.WebVTT.convertCueToDOMTree(window, this.text)
                }, i
            }(),
            qe = function() {
                return {
                    decode: function(t) {
                        if (!t) return "";
                        if ("string" != typeof t) throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(t))
                    }
                }
            };
        ot.prototype = {
            set: function(t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            },
            get: function(t, e, r) {
                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
            },
            has: function(t) {
                return t in this.values
            },
            alt: function(t, e, r) {
                for (var i = 0; i < r.length; ++i)
                    if (e === r[i]) {
                        this.set(t, e);
                        break
                    }
            },
            integer: function(t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            },
            percent: function(t, e) {
                return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
            }
        };
        var Qe = new Xe(0, 0, 0),
            Je = "middle" === Qe.align ? "middle" : "center";
        at.prototype = {
            parse: function(t) {
                function e() {
                    var t = r.buffer,
                        e = 0;
                    for (t = ut(t); e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                    var i = t.substr(0, e);
                    return "\r" === t[e] && ++e, "\n" === t[e] && ++e, r.buffer = t.substr(e), i
                }
                var r = this;
                t && (r.buffer += r.decoder.decode(t, {
                    stream: !0
                }));
                try {
                    var i;
                    if ("INITIAL" === r.state) {
                        if (!/\r\n|\n/.test(r.buffer)) return this;
                        i = e();
                        var a = i.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                        if (!a || !a[0]) throw new Error("Malformed WebVTT signature.");
                        r.state = "HEADER"
                    }
                    for (var n = !1; r.buffer;) {
                        if (!/\r\n|\n/.test(r.buffer)) return this;
                        switch (n ? n = !1 : i = e(), r.state) {
                            case "HEADER":
                                /:/.test(i) ? function(t) {
                                    st(t, function(t, e) {
                                        switch (t) {
                                            case "Region":
                                                console.log("parse region", e)
                                        }
                                    }, /:/)
                                }(i) : i || (r.state = "ID");
                                continue;
                            case "NOTE":
                                i || (r.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(i)) {
                                    r.state = "NOTE";
                                    break
                                }
                                if (!i) continue;
                                if (r.cue = new Xe(0, 0, ""), r.state = "CUE", -1 === i.indexOf("--\x3e")) {
                                    r.cue.id = i;
                                    continue
                                }
                            case "CUE":
                                try {
                                    lt(i, r.cue, r.regionList)
                                } catch (t) {
                                    r.cue = null, r.state = "BADCUE";
                                    continue
                                }
                                r.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var o = -1 !== i.indexOf("--\x3e");
                                if (!i || o && (n = !0)) {
                                    r.oncue && r.oncue(r.cue), r.cue = null, r.state = "ID";
                                    continue
                                }
                                r.cue.text && (r.cue.text += "\n"), r.cue.text += i;
                                continue;
                            case "BADCUE":
                                i || (r.state = "ID");
                                continue
                        }
                    }
                } catch (t) {
                    "CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue), r.cue = null, r.state = "INITIAL" === r.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            },
            flush: function() {
                var t = this;
                try {
                    if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new Error("Malformed WebVTT signature.")
                } catch (t) {
                    throw t
                }
                return t.onflush && t.onflush(), this
            }
        };
        var $e = at,
            Ze = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            },
            tr = function(t) {
                var e = t;
                return Ze.hasOwnProperty(t) && (e = Ze[t]), String.fromCharCode(e)
            },
            er = 15,
            rr = 100,
            ir = {
                17: 1,
                18: 3,
                21: 5,
                22: 7,
                23: 9,
                16: 11,
                19: 12,
                20: 14
            },
            ar = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            },
            nr = {
                25: 1,
                26: 3,
                29: 5,
                30: 7,
                31: 9,
                24: 11,
                27: 12,
                28: 14
            },
            or = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            },
            sr = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
            lr = {
                verboseFilter: {
                    DATA: 3,
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 2,
                    TEXT: 1,
                    ERROR: 0
                },
                time: null,
                verboseLevel: 0,
                setTime: function(t) {
                    this.time = t
                },
                log: function(t, e) {
                    var r = this.verboseFilter[t];
                    this.verboseLevel >= r && console.log(this.time + " [" + t + "] " + e)
                }
            },
            ur = function(t) {
                for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16));
                return e
            },
            dr = function() {
                function t(e, r, i, a, n) {
                    ht(this, t), this.foreground = e || "white", this.underline = r || !1, this.italics = i || !1, this.background = a || "black", this.flash = n || !1
                }
                return t.prototype.reset = function() {
                    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                }, t.prototype.setStyles = function(t) {
                    for (var e = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < e.length; r++) {
                        var i = e[r];
                        t.hasOwnProperty(i) && (this[i] = t[i])
                    }
                }, t.prototype.isDefault = function() {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }, t.prototype.equals = function(t) {
                    return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                }, t.prototype.copy = function(t) {
                    this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
                }, t.prototype.toString = function() {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }, t
            }(),
            hr = function() {
                function t(e, r, i, a, n, o) {
                    ht(this, t), this.uchar = e || " ", this.penState = new dr(r, i, a, n, o)
                }
                return t.prototype.reset = function() {
                    this.uchar = " ", this.penState.reset()
                }, t.prototype.setChar = function(t, e) {
                    this.uchar = t, this.penState.copy(e)
                }, t.prototype.setPenState = function(t) {
                    this.penState.copy(t)
                }, t.prototype.equals = function(t) {
                    return this.uchar === t.uchar && this.penState.equals(t.penState)
                }, t.prototype.copy = function(t) {
                    this.uchar = t.uchar, this.penState.copy(t.penState)
                }, t.prototype.isEmpty = function() {
                    return " " === this.uchar && this.penState.isDefault()
                }, t
            }(),
            cr = function() {
                function t() {
                    ht(this, t), this.chars = [];
                    for (var e = 0; e < rr; e++) this.chars.push(new hr);
                    this.pos = 0, this.currPenState = new dr
                }
                return t.prototype.equals = function(t) {
                    for (var e = !0, r = 0; r < rr; r++)
                        if (!this.chars[r].equals(t.chars[r])) {
                            e = !1;
                            break
                        }
                    return e
                }, t.prototype.copy = function(t) {
                    for (var e = 0; e < rr; e++) this.chars[e].copy(t.chars[e])
                }, t.prototype.isEmpty = function() {
                    for (var t = !0, e = 0; e < rr; e++)
                        if (!this.chars[e].isEmpty()) {
                            t = !1;
                            break
                        }
                    return t
                }, t.prototype.setCursor = function(t) {
                    this.pos !== t && (this.pos = t), this.pos < 0 ? (lr.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > rr && (lr.log("ERROR", "Too large cursor position " + this.pos), this.pos = rr)
                }, t.prototype.moveCursor = function(t) {
                    var e = this.pos + t;
                    if (t > 1)
                        for (var r = this.pos + 1; r < e + 1; r++) this.chars[r].setPenState(this.currPenState);
                    this.setCursor(e)
                }, t.prototype.backSpace = function() {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                }, t.prototype.insertChar = function(t) {
                    t >= 144 && this.backSpace();
                    var e = tr(t);
                    if (this.pos >= rr) return void lr.log("ERROR", "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!");
                    this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1)
                }, t.prototype.clearFromPos = function(t) {
                    var e;
                    for (e = t; e < rr; e++) this.chars[e].reset()
                }, t.prototype.clear = function() {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                }, t.prototype.clearToEndOfRow = function() {
                    this.clearFromPos(this.pos)
                }, t.prototype.getTextString = function() {
                    for (var t = [], e = !0, r = 0; r < rr; r++) {
                        var i = this.chars[r].uchar;
                        " " !== i && (e = !1), t.push(i)
                    }
                    return e ? "" : t.join("")
                }, t.prototype.setPenStyles = function(t) {
                    this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                }, t
            }(),
            fr = function() {
                function t() {
                    ht(this, t), this.rows = [];
                    for (var e = 0; e < er; e++) this.rows.push(new cr);
                    this.currRow = er - 1, this.nrRollUpRows = null, this.reset()
                }
                return t.prototype.reset = function() {
                    for (var t = 0; t < er; t++) this.rows[t].clear();
                    this.currRow = er - 1
                }, t.prototype.equals = function(t) {
                    for (var e = !0, r = 0; r < er; r++)
                        if (!this.rows[r].equals(t.rows[r])) {
                            e = !1;
                            break
                        }
                    return e
                }, t.prototype.copy = function(t) {
                    for (var e = 0; e < er; e++) this.rows[e].copy(t.rows[e])
                }, t.prototype.isEmpty = function() {
                    for (var t = !0, e = 0; e < er; e++)
                        if (!this.rows[e].isEmpty()) {
                            t = !1;
                            break
                        }
                    return t
                }, t.prototype.backSpace = function() {
                    this.rows[this.currRow].backSpace()
                }, t.prototype.clearToEndOfRow = function() {
                    this.rows[this.currRow].clearToEndOfRow()
                }, t.prototype.insertChar = function(t) {
                    this.rows[this.currRow].insertChar(t)
                }, t.prototype.setPen = function(t) {
                    this.rows[this.currRow].setPenStyles(t)
                }, t.prototype.moveCursor = function(t) {
                    this.rows[this.currRow].moveCursor(t)
                }, t.prototype.setCursor = function(t) {
                    lr.log("INFO", "setCursor: " + t), this.rows[this.currRow].setCursor(t)
                }, t.prototype.setPAC = function(t) {
                    lr.log("INFO", "pacData = " + JSON.stringify(t));
                    var e = t.row - 1;
                    if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                        for (var r = 0; r < er; r++) this.rows[r].clear();
                        var i = this.currRow + 1 - this.nrRollUpRows,
                            a = this.lastOutputScreen;
                        if (a) {
                            var n = a.rows[i].cueStartTime;
                            if (n && n < lr.time)
                                for (var o = 0; o < this.nrRollUpRows; o++) this.rows[e - this.nrRollUpRows + o + 1].copy(a.rows[i + o])
                        }
                    }
                    this.currRow = e;
                    var s = this.rows[this.currRow];
                    if (null !== t.indent) {
                        var l = t.indent,
                            u = Math.max(l - 1, 0);
                        s.setCursor(t.indent), t.color = s.chars[u].penState.foreground
                    }
                    var d = {
                        foreground: t.color,
                        underline: t.underline,
                        italics: t.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(d)
                }, t.prototype.setBkgData = function(t) {
                    lr.log("INFO", "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
                }, t.prototype.setRollUpRows = function(t) {
                    this.nrRollUpRows = t
                }, t.prototype.rollUp = function() {
                    if (null === this.nrRollUpRows) return void lr.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                    lr.log("TEXT", this.getDisplayText());
                    var t = this.currRow + 1 - this.nrRollUpRows,
                        e = this.rows.splice(t, 1)[0];
                    e.clear(), this.rows.splice(this.currRow, 0, e), lr.log("INFO", "Rolling up")
                }, t.prototype.getDisplayText = function(t) {
                    t = t || !1;
                    for (var e = [], r = "", i = -1, a = 0; a < er; a++) {
                        var n = this.rows[a].getTextString();
                        n && (i = a + 1, t ? e.push("Row " + i + ": '" + n + "'") : e.push(n.trim()))
                    }
                    return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")), r
                }, t.prototype.getTextAndFormat = function() {
                    return this.rows
                }, t
            }(),
            pr = function() {
                function t(e, r) {
                    ht(this, t), this.chNr = e, this.outputFilter = r, this.mode = null, this.verbose = 0, this.displayedMemory = new fr, this.nonDisplayedMemory = new fr, this.lastOutputScreen = new fr, this.currRollUpRow = this.displayedMemory.rows[er - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                }
                return t.prototype.reset = function() {
                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[er - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                }, t.prototype.getHandler = function() {
                    return this.outputFilter
                }, t.prototype.setHandler = function(t) {
                    this.outputFilter = t
                }, t.prototype.setPAC = function(t) {
                    this.writeScreen.setPAC(t)
                }, t.prototype.setBkgData = function(t) {
                    this.writeScreen.setBkgData(t)
                }, t.prototype.setMode = function(t) {
                    t !== this.mode && (this.mode = t, lr.log("INFO", "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                }, t.prototype.insertChars = function(t) {
                    for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
                    var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    lr.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (lr.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                }, t.prototype.ccRCL = function() {
                    lr.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                }, t.prototype.ccBS = function() {
                    lr.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }, t.prototype.ccAOF = function() {}, t.prototype.ccAON = function() {}, t.prototype.ccDER = function() {
                    lr.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                }, t.prototype.ccRU = function(t) {
                    lr.log("INFO", "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                }, t.prototype.ccFON = function() {
                    lr.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
                        flash: !0
                    })
                }, t.prototype.ccRDC = function() {
                    lr.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                }, t.prototype.ccTR = function() {
                    lr.log("INFO", "TR"), this.setMode("MODE_TEXT")
                }, t.prototype.ccRTD = function() {
                    lr.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                }, t.prototype.ccEDM = function() {
                    lr.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                }, t.prototype.ccCR = function() {
                    lr.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                }, t.prototype.ccENM = function() {
                    lr.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                }, t.prototype.ccEOC = function() {
                    if (lr.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        var t = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, lr.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate(!0)
                }, t.prototype.ccTO = function(t) {
                    lr.log("INFO", "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                }, t.prototype.ccMIDROW = function(t) {
                    var e = {
                        flash: !1
                    };
                    if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = "white";
                    else {
                        var r = Math.floor(t / 2) - 16,
                            i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                        e.foreground = i[r]
                    }
                    lr.log("INFO", "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
                }, t.prototype.outputDataUpdate = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = lr.time;
                    null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), !0 === t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                }, t.prototype.cueSplitAtTime = function(t) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
                }, t
            }(),
            gr = function() {
                function t(e, r, i) {
                    ht(this, t), this.field = e || 1, this.outputs = [r, i], this.channels = [new pr(1, r), new pr(2, i)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                        padding: 0,
                        char: 0,
                        cmd: 0,
                        other: 0
                    }
                }
                return t.prototype.getHandler = function(t) {
                    return this.channels[t].getHandler()
                }, t.prototype.setHandler = function(t, e) {
                    this.channels[t].setHandler(e)
                }, t.prototype.addData = function(t, e) {
                    var r, i, a, n = !1;
                    this.lastTime = t, lr.setTime(t);
                    for (var o = 0; o < e.length; o += 2)
                        if (i = 127 & e[o], a = 127 & e[o + 1], 0 !== i || 0 !== a) {
                            if (lr.log("DATA", "[" + ur([e[o], e[o + 1]]) + "] -> (" + ur([i, a]) + ")"), r = this.parseCmd(i, a), r || (r = this.parseMidrow(i, a)), r || (r = this.parsePAC(i, a)), r || (r = this.parseBackgroundAttributes(i, a)), !r && (n = this.parseChars(i, a)))
                                if (this.currChNr && this.currChNr >= 0) {
                                    var s = this.channels[this.currChNr - 1];
                                    s.insertChars(n)
                                } else lr.log("WARNING", "No channel found yet. TEXT-MODE?");
                            r ? this.dataCounters.cmd += 2 : n ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, lr.log("WARNING", "Couldn't parse cleaned data " + ur([i, a]) + " orig: " + ur([e[o], e[o + 1]])))
                        } else this.dataCounters.padding += 2
                }, t.prototype.parseCmd = function(t, e) {
                    var r = null,
                        i = (20 === t || 28 === t) && 32 <= e && e <= 47,
                        a = (23 === t || 31 === t) && 33 <= e && e <= 35;
                    if (!i && !a) return !1;
                    if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, lr.log("DEBUG", "Repeated command (" + ur([t, e]) + ") is dropped"), !0;
                    r = 20 === t || 23 === t ? 1 : 2;
                    var n = this.channels[r - 1];
                    return 20 === t || 28 === t ? 32 === e ? n.ccRCL() : 33 === e ? n.ccBS() : 34 === e ? n.ccAOF() : 35 === e ? n.ccAON() : 36 === e ? n.ccDER() : 37 === e ? n.ccRU(2) : 38 === e ? n.ccRU(3) : 39 === e ? n.ccRU(4) : 40 === e ? n.ccFON() : 41 === e ? n.ccRDC() : 42 === e ? n.ccTR() : 43 === e ? n.ccRTD() : 44 === e ? n.ccEDM() : 45 === e ? n.ccCR() : 46 === e ? n.ccENM() : 47 === e && n.ccEOC() : n.ccTO(e - 32), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = r, !0
                }, t.prototype.parseMidrow = function(t, e) {
                    var r = null;
                    if ((17 === t || 25 === t) && 32 <= e && e <= 47) {
                        if ((r = 17 === t ? 1 : 2) !== this.currChNr) return lr.log("ERROR", "Mismatch channel in midrow parsing"), !1;
                        return this.channels[r - 1].ccMIDROW(e), lr.log("DEBUG", "MIDROW (" + ur([t, e]) + ")"), !0
                    }
                    return !1
                }, t.prototype.parsePAC = function(t, e) {
                    var r = null,
                        i = null,
                        a = (17 <= t && t <= 23 || 25 <= t && t <= 31) && 64 <= e && e <= 127,
                        n = (16 === t || 24 === t) && 64 <= e && e <= 95;
                    if (!a && !n) return !1;
                    if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
                    r = t <= 23 ? 1 : 2, i = 64 <= e && e <= 95 ? 1 === r ? ir[t] : nr[t] : 1 === r ? ar[t] : or[t];
                    var o = this.interpretPAC(i, e);
                    return this.channels[r - 1].setPAC(o), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = r, !0
                }, t.prototype.interpretPAC = function(t, e) {
                    var r = e,
                        i = {
                            color: null,
                            italics: !1,
                            indent: null,
                            underline: !1,
                            row: t
                        };
                    return r = e > 95 ? e - 96 : e - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                }, t.prototype.parseChars = function(t, e) {
                    var r = null,
                        i = null,
                        a = null;
                    if (t >= 25 ? (r = 2, a = t - 8) : (r = 1, a = t), 17 <= a && a <= 19) {
                        var n = e;
                        n = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144, lr.log("INFO", "Special char '" + tr(n) + "' in channel " + r), i = [n]
                    } else 32 <= t && t <= 127 && (i = 0 === e ? [t] : [t, e]);
                    if (i) {
                        var o = ur(i);
                        lr.log("DEBUG", "Char codes =  " + o.join(",")), this.lastCmdA = null, this.lastCmdB = null
                    }
                    return i
                }, t.prototype.parseBackgroundAttributes = function(t, e) {
                    var r, i, a, n, o = (16 === t || 24 === t) && 32 <= e && e <= 47,
                        s = (23 === t || 31 === t) && 45 <= e && e <= 47;
                    return !(!o && !s) && (r = {}, 16 === t || 24 === t ? (i = Math.floor((e - 32) / 2), r.background = sr[i], e % 2 == 1 && (r.background = r.background + "_semi")) : 45 === e ? r.background = "transparent" : (r.foreground = "black", 47 === e && (r.underline = !0)), a = t < 24 ? 1 : 2, n = this.channels[a - 1], n.setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0)
                }, t.prototype.reset = function() {
                    for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].reset();
                    this.lastCmdA = null, this.lastCmdB = null
                }, t.prototype.cueSplitAtTime = function(t) {
                    for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].cueSplitAtTime(t)
                }, t
            }(),
            vr = gr,
            yr = function() {
                function t(e, r) {
                    ct(this, t), this.timelineController = e, this.track = r, this.startTime = null, this.endTime = null, this.screen = null
                }
                return t.prototype.dispatchCue = function() {
                    null !== this.startTime && (this.timelineController.addCues("textTrack" + this.track, this.startTime, this.endTime, this.screen), this.startTime = null)
                }, t.prototype.newCue = function(t, e, r) {
                    (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = r, this.timelineController.createCaptionsTrack(this.track)
                }, t
            }(),
            mr = yr,
            br = function(t, e, r) {
                return t.substr(r || 0, e.length) === e
            },
            Er = function(t) {
                var e = parseInt(t.substr(-3)),
                    r = parseInt(t.substr(-6, 2)),
                    i = parseInt(t.substr(-9, 2)),
                    a = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                return isNaN(e) || isNaN(r) || isNaN(i) || isNaN(a) ? -1 : (e += 1e3 * r, e += 6e4 * i, e += 36e5 * a)
            },
            Tr = function(t) {
                for (var e = 5381, r = t.length; r;) e = 33 * e ^ t.charCodeAt(--r);
                return (e >>> 0).toString()
            },
            Rr = function(t, e, r) {
                var i = t[e],
                    a = t[i.prevCC];
                if (!a || !a.new && i.new) return t.ccOffset = t.presentationOffset = i.start, void(i.new = !1);
                for (; a && a.new;) t.ccOffset += i.start - a.start, i.new = !1, i = a, a = t[i.prevCC];
                t.presentationOffset = r
            },
            Ar = {
                parse: function(t, e, r, i, a, n) {
                    var o = /\r\n|\n\r|\n|\r/g,
                        s = Object(Te.b)(new Uint8Array(t)).trim().replace(o, "\n").split("\n"),
                        l = "00:00.000",
                        u = 0,
                        d = 0,
                        h = 0,
                        c = [],
                        f = void 0,
                        p = !0,
                        g = new $e;
                    g.oncue = function(t) {
                        var e = r[i],
                            a = r.ccOffset;
                        e && e.new && (void 0 !== d ? a = r.ccOffset = e.start : Rr(r, i, h)), h && (a = h + r.ccOffset - r.presentationOffset), t.startTime += a - d, t.endTime += a - d, t.id = Tr(t.startTime.toString()) + Tr(t.endTime.toString()) + Tr(t.text), t.text = decodeURIComponent(encodeURIComponent(t.text)), t.endTime > 0 && c.push(t)
                    }, g.onparsingerror = function(t) {
                        f = t
                    }, g.onflush = function() {
                        if (f && n) return void n(f);
                        a(c)
                    }, s.forEach(function(t) {
                        if (p) {
                            if (br(t, "X-TIMESTAMP-MAP=")) {
                                p = !1, t.substr(16).split(",").forEach(function(t) {
                                    br(t, "LOCAL:") ? l = t.substr(6) : br(t, "MPEGTS:") && (u = parseInt(t.substr(7)))
                                });
                                try {
                                    e = e < 0 ? e + 8589934592 : e, u -= e, d = Er(l) / 1e3, h = u / 9e4, -1 === d && (f = new Error("Malformed X-TIMESTAMP-MAP: " + t))
                                } catch (e) {
                                    f = new Error("Malformed X-TIMESTAMP-MAP: " + t)
                                }
                                return
                            }
                            "" === t && (p = !1)
                        }
                        g.parse(t + "\n")
                    }), g.flush()
                }
            },
            Sr = Ar,
            _r = function(t) {
                function e(r) {
                    ft(this, e);
                    var i = pt(this, t.call(this, r, It.a.MEDIA_ATTACHING, It.a.MEDIA_DETACHING, It.a.FRAG_PARSING_USERDATA, It.a.FRAG_DECRYPTED, It.a.MANIFEST_LOADING, It.a.MANIFEST_LOADED, It.a.FRAG_LOADED, It.a.LEVEL_SWITCHING, It.a.INIT_PTS_FOUND));
                    if (i.hls = r, i.config = r.config, i.enabled = !0, i.Cues = r.config.cueHandler, i.textTracks = [], i.tracks = [], i.unparsedVttFrags = [], i.initPTS = void 0, i.cueRanges = [], i.config.enableCEA708Captions) {
                        var a = new mr(i, 1),
                            n = new mr(i, 2);
                        i.cea608Parser = new vr(0, a, n)
                    }
                    return i
                }
                return gt(e, t), e.prototype.addCues = function(t, e, r, i) {
                    for (var a = this.cueRanges, n = !1, o = a.length; o--;) {
                        var s = a[o],
                            l = mt(s[0], s[1], e, r);
                        if (l >= 0 && (s[0] = Math.min(s[0], e), s[1] = Math.max(s[1], r), n = !0, l / (r - e) > .5)) return
                    }
                    n || a.push([e, r]), this.Cues.newCue(this[t], e, r, i)
                }, e.prototype.onInitPtsFound = function(t) {
                    var e = this;
                    void 0 === this.initPTS && (this.initPTS = t.initPTS), this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function(t) {
                        e.onFragLoaded(t)
                    }), this.unparsedVttFrags = [])
                }, e.prototype.getExistingTrack = function(t) {
                    var e = this.media;
                    if (e)
                        for (var r = 0; r < e.textTracks.length; r++) {
                            var i = e.textTracks[r],
                                a = "textTrack" + t;
                            if (!0 === i[a]) return i
                        }
                    return null
                }, e.prototype.sendAddTrackEvent = function(t, e) {
                    var r = null;
                    try {
                        r = new window.Event("addtrack")
                    } catch (t) {
                        r = document.createEvent("Event"), r.initEvent("addtrack", !1, !1)
                    }
                    r.track = t, e.dispatchEvent(r)
                }, e.prototype.createCaptionsTrack = function(t) {
                    var e = "textTrack" + t;
                    if (!this[e]) {
                        var r = this.getExistingTrack(t);
                        if (r) this[e] = r, vt(this[e]), this.sendAddTrackEvent(this[e], this.media);
                        else {
                            var i = this.createTextTrack("captions", this.config["captionsTextTrack" + t + "Label"], this.config.captionsTextTrack1LanguageCode);
                            i && (i[e] = !0, this[e] = i)
                        }
                    }
                }, e.prototype.createTextTrack = function(t, e, r) {
                    var i = this.media;
                    if (i) return i.addTextTrack(t, e, r)
                }, e.prototype.destroy = function() {
                    Ft.prototype.destroy.call(this)
                }, e.prototype.onMediaAttaching = function(t) {
                    this.media = t.media, this._cleanTracks()
                }, e.prototype.onMediaDetaching = function() {
                    vt(this.textTrack1), vt(this.textTrack2)
                }, e.prototype.onManifestLoading = function() {
                    this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
                        ccOffset: 0,
                        presentationOffset: 0
                    }, this._cleanTracks()
                }, e.prototype._cleanTracks = function() {
                    var t = this.media;
                    if (t) {
                        var e = t.textTracks;
                        if (e)
                            for (var r = 0; r < e.length; r++) vt(e[r])
                    }
                }, e.prototype.onManifestLoaded = function(t) {
                    var e = this;
                    if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, this.cueRanges = [], this.config.enableWebVTT) {
                        this.tracks = t.subtitles || [];
                        var r = this.media ? this.media.textTracks : [];
                        this.tracks.forEach(function(t, i) {
                            var a = void 0;
                            if (i < r.length) {
                                var n = r[i];
                                yt(n, t) && (a = n)
                            }
                            a || (a = e.createTextTrack("subtitles", t.name, t.lang)), a.mode = t.default ? "showing" : "hidden", e.textTracks.push(a)
                        })
                    }
                }, e.prototype.onLevelSwitching = function() {
                    this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
                }, e.prototype.onFragLoaded = function(t) {
                    var e = t.frag,
                        r = t.payload;
                    if ("main" === e.type) {
                        var i = e.sn;
                        if (i !== this.lastSn + 1) {
                            var a = this.cea608Parser;
                            a && a.reset()
                        }
                        this.lastSn = i
                    } else if ("subtitle" === e.type)
                        if (r.byteLength) {
                            if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
                            var n = e.decryptdata;
                            null != n && null != n.key && "AES-128" === n.method || this._parseVTTs(e, r)
                        } else this.hls.trigger(It.a.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: e
                        })
                }, e.prototype._parseVTTs = function(t, e) {
                    var r = this.vttCCs;
                    r[t.cc] || (r[t.cc] = {
                        start: t.start,
                        prevCC: this.prevCC,
                        new: !0
                    }, this.prevCC = t.cc);
                    var i = this.textTracks,
                        a = this.hls;
                    Sr.parse(e, this.initPTS, r, t.cc, function(e) {
                        var r = i[t.trackId];
                        e.forEach(function(t) {
                            if (!r.cues.getCueById(t.id)) try {
                                r.addCue(t)
                            } catch (i) {
                                var e = new window.TextTrackCue(t.startTime, t.endTime, t.text);
                                e.id = t.id, r.addCue(e)
                            }
                        }), a.trigger(It.a.SUBTITLE_FRAG_PROCESSED, {
                            success: !0,
                            frag: t
                        })
                    }, function(e) {
                        Ct.b.log("Failed to parse VTT cue: " + e), a.trigger(It.a.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: t
                        })
                    })
                }, e.prototype.onFragDecrypted = function(t) {
                    var e = t.payload,
                        r = t.frag;
                    if ("subtitle" === r.type) {
                        if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
                        this._parseVTTs(r, e)
                    }
                }, e.prototype.onFragParsingUserdata = function(t) {
                    if (this.enabled && this.config.enableCEA708Captions)
                        for (var e = 0; e < t.samples.length; e++) {
                            var r = this.extractCea608Data(t.samples[e].bytes);
                            this.cea608Parser.addData(t.samples[e].pts, r)
                        }
                }, e.prototype.extractCea608Data = function(t) {
                    for (var e, r, i, a, n, o = 31 & t[0], s = 2, l = [], u = 0; u < o; u++) e = t[s++], r = 127 & t[s++], i = 127 & t[s++], a = 0 != (4 & e), n = 3 & e, 0 === r && 0 === i || a && 0 === n && (l.push(r), l.push(i));
                    return l
                }, e
            }(Ft),
            Lr = _r,
            wr = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            Dr = function(t) {
                function e(r) {
                    bt(this, e);
                    var i = Et(this, t.call(this, r, It.a.MEDIA_ATTACHED, It.a.MEDIA_DETACHING, It.a.MANIFEST_LOADING, It.a.MANIFEST_LOADED, It.a.SUBTITLE_TRACK_LOADED));
                    return i.tracks = [], i.trackId = -1, i.media = void 0, i.subtitleDisplay = !1, i
                }
                return Tt(e, t), e.prototype._onTextTracksChanged = function() {
                    if (this.media) {
                        for (var t = -1, e = Rt(this.media.textTracks), r = 0; r < e.length; r++) "showing" === e[r].mode && (t = r);
                        this.subtitleTrack = t
                    }
                }, e.prototype.destroy = function() {
                    Ft.prototype.destroy.call(this)
                }, e.prototype.onMediaAttached = function(t) {
                    var e = this;
                    this.media = t.media, this.media && (void 0 !== this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
                        e.trackChangeListener()
                    }, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                }, e.prototype.onMediaDetaching = function() {
                    this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = void 0)
                }, e.prototype.onManifestLoading = function() {
                    this.tracks = [], this.trackId = -1
                }, e.prototype.onManifestLoaded = function(t) {
                    var e = this,
                        r = t.subtitles || [];
                    this.tracks = r, this.trackId = -1, this.hls.trigger(It.a.SUBTITLE_TRACKS_UPDATED, {
                        subtitleTracks: r
                    }), r.forEach(function(t) {
                        t.default && (e.media ? e.subtitleTrack = t.id : e.queuedDefaultTrack = t.id)
                    })
                }, e.prototype.onTick = function() {
                    var t = this.trackId,
                        e = this.tracks[t];
                    if (e) {
                        var r = e.details;
                        void 0 !== r && !0 !== r.live || (Ct.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(It.a.SUBTITLE_TRACK_LOADING, {
                            url: e.url,
                            id: t
                        }))
                    }
                }, e.prototype.onSubtitleTrackLoaded = function(t) {
                    var e = this;
                    t.id < this.tracks.length && (Ct.b.log("subtitle track " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(function() {
                        e.onTick()
                    }, 1e3 * t.details.targetduration, this)), !t.details.live && this.timer && (clearInterval(this.timer), this.timer = null))
                }, e.prototype.setSubtitleTrackInternal = function(t) {
                    if (!(t < -1 || t >= this.tracks.length)) {
                        this.timer && (clearInterval(this.timer), this.timer = null);
                        var e = Rt(this.media.textTracks);
                        if (-1 !== this.trackId && this.subtitleDisplay && (e[this.trackId].mode = "hidden"), this.trackId = t, Ct.b.log("switching to subtitle track " + t), this.hls.trigger(It.a.SUBTITLE_TRACK_SWITCH, {
                                id: t
                            }), -1 !== t) {
                            var r = this.tracks[t];
                            this.subtitleDisplay && (e[t].mode = "showing");
                            var i = r.details;
                            void 0 !== i && !0 !== i.live || (Ct.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(It.a.SUBTITLE_TRACK_LOADING, {
                                url: r.url,
                                id: t
                            }))
                        }
                    }
                }, wr(e, [{
                    key: "subtitleTracks",
                    get: function() {
                        return this.tracks
                    }
                }, {
                    key: "subtitleTrack",
                    get: function() {
                        return this.trackId
                    },
                    set: function(t) {
                        this.trackId !== t && this.setSubtitleTrackInternal(t)
                    }
                }]), e
            }(Ft),
            kr = Dr,
            Ir = r(4),
            Or = {
                STOPPED: "STOPPED",
                IDLE: "IDLE",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING"
            },
            Cr = function(t) {
                function e(r) {
                    At(this, e);
                    var i = St(this, t.call(this, r, It.a.MEDIA_ATTACHED, It.a.ERROR, It.a.KEY_LOADED, It.a.FRAG_LOADED, It.a.SUBTITLE_TRACKS_UPDATED, It.a.SUBTITLE_TRACK_SWITCH, It.a.SUBTITLE_TRACK_LOADED, It.a.SUBTITLE_FRAG_PROCESSED));
                    return i.config = r.config, i.vttFragSNsProcessed = {}, i.vttFragQueues = void 0, i.currentlyProcessing = null, i.state = Or.STOPPED, i.currentTrackId = -1, i.ticks = 0, i.decrypter = new Ir.a(r.observer, r.config), i
                }
                return _t(e, t), e.prototype.destroy = function() {
                    Ft.prototype.destroy.call(this), this.state = Or.STOPPED
                }, e.prototype.clearVttFragQueues = function() {
                    var t = this;
                    this.vttFragQueues = {}, this.tracks.forEach(function(e) {
                        t.vttFragQueues[e.id] = []
                    })
                }, e.prototype.nextFrag = function() {
                    if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
                        var t = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
                        this.fragCurrent = t, this.hls.trigger(It.a.FRAG_LOADING, {
                            frag: t
                        }), this.state = Or.FRAG_LOADING
                    }
                }, e.prototype.onSubtitleFragProcessed = function(t) {
                    t.success && this.vttFragSNsProcessed[t.frag.trackId].push(t.frag.sn), this.currentlyProcessing = null, this.state = Or.IDLE, this.nextFrag()
                }, e.prototype.onMediaAttached = function() {
                    this.state = Or.IDLE
                }, e.prototype.onError = function(t) {
                    var e = t.frag;
                    e && "subtitle" !== e.type || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag())
                }, e.prototype.tick = function() {
                    var t = this;
                    1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(function() {
                        t.tick()
                    }, 1), this.ticks = 0)
                }, e.prototype.doTick = function() {
                    var t = this;
                    switch (this.state) {
                        case Or.IDLE:
                            var e = this.tracks,
                                r = this.currentTrackId,
                                i = this.vttFragSNsProcessed[r],
                                a = this.vttFragQueues[r],
                                n = this.currentlyProcessing ? this.currentlyProcessing.sn : -1,
                                o = function(t) {
                                    return i.indexOf(t.sn) > -1
                                },
                                s = function(t) {
                                    return a.some(function(e) {
                                        return e.sn === t.sn
                                    })
                                };
                            if (!e) break;
                            var l;
                            if (r < e.length && (l = e[r].details), void 0 === l) break;
                            l.fragments.forEach(function(e) {
                                o(e) || e.sn === n || s(e) || (e.decryptdata && null != e.decryptdata.uri && null == e.decryptdata.key ? (Ct.b.log("Loading key for " + e.sn), t.state = Or.KEY_LOADING, t.hls.trigger(It.a.KEY_LOADING, {
                                    frag: e
                                })) : (e.trackId = r, a.push(e), t.nextFrag()))
                            })
                    }
                }, e.prototype.onSubtitleTracksUpdated = function(t) {
                    var e = this;
                    Ct.b.log("subtitle tracks updated"), this.tracks = t.subtitleTracks, this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach(function(t) {
                        e.vttFragSNsProcessed[t.id] = []
                    })
                }, e.prototype.onSubtitleTrackSwitch = function(t) {
                    this.currentTrackId = t.id, this.clearVttFragQueues()
                }, e.prototype.onSubtitleTrackLoaded = function() {
                    this.tick()
                }, e.prototype.onKeyLoaded = function() {
                    this.state === Or.KEY_LOADING && (this.state = Or.IDLE, this.tick())
                }, e.prototype.onFragLoaded = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag.decryptdata,
                        i = t.frag,
                        a = this.hls;
                    if (this.state === Or.FRAG_LOADING && e && "subtitle" === t.frag.type && e.sn === t.frag.sn && t.payload.byteLength > 0 && null != r && null != r.key && "AES-128" === r.method) {
                        var n;
                        try {
                            n = performance.now()
                        } catch (t) {
                            n = Date.now()
                        }
                        this.decrypter.decrypt(t.payload, r.key.buffer, r.iv.buffer, function(t) {
                            var e;
                            try {
                                e = performance.now()
                            } catch (t) {
                                e = Date.now()
                            }
                            a.trigger(It.a.FRAG_DECRYPTED, {
                                frag: i,
                                payload: t,
                                stats: {
                                    tstart: n,
                                    tdecrypt: e
                                }
                            })
                        })
                    }
                }, e
            }(Ft),
            Pr = Cr,
            xr = {
                autoStartLoad: !0,
                startPosition: -1,
                defaultAudioCodec: void 0,
                debug: !1,
                capLevelOnFPSDrop: !1,
                capLevelToPlayerSize: !1,
                initialLiveManifestSize: 1,
                maxBufferLength: 30,
                maxBufferSize: 6e7,
                maxBufferHole: .5,
                maxSeekHole: 2,
                lowBufferWatchdogPeriod: .5,
                highBufferWatchdogPeriod: 3,
                nudgeOffset: .1,
                nudgeMaxRetry: 3,
                maxFragLookUpTolerance: .25,
                liveSyncDurationCount: 3,
                liveMaxLatencyDurationCount: 1 / 0,
                liveSyncDuration: void 0,
                liveMaxLatencyDuration: void 0,
                maxMaxBufferLength: 600,
                enableWorker: !0,
                enableSoftwareAES: !0,
                manifestLoadingTimeOut: 1e4,
                manifestLoadingMaxRetry: 1,
                manifestLoadingRetryDelay: 1e3,
                manifestLoadingMaxRetryTimeout: 64e3,
                startLevel: void 0,
                levelLoadingTimeOut: 1e4,
                levelLoadingMaxRetry: 4,
                levelLoadingRetryDelay: 1e3,
                levelLoadingMaxRetryTimeout: 64e3,
                fragLoadingTimeOut: 2e4,
                fragLoadingMaxRetry: 6,
                fragLoadingRetryDelay: 1e3,
                fragLoadingMaxRetryTimeout: 64e3,
                fragLoadingLoopThreshold: 3,
                startFragPrefetch: !1,
                fpsDroppedMonitoringPeriod: 5e3,
                fpsDroppedMonitoringThreshold: .2,
                appendErrorMaxRetry: 3,
                loader: Ge,
                fLoader: void 0,
                pLoader: void 0,
                xhrSetup: void 0,
                fetchSetup: void 0,
                abrController: Ie,
                bufferController: Pe,
                capLevelController: Ne,
                fpsController: Ue,
                stretchShortVideoTrack: !1,
                maxAudioFramesDrift: 1,
                forceKeyFrameOnDiscontinuity: !0,
                abrEwmaFastLive: 3,
                abrEwmaSlowLive: 9,
                abrEwmaFastVoD: 3,
                abrEwmaSlowVoD: 9,
                abrEwmaDefaultEstimate: 5e5,
                abrBandWidthFactor: .95,
                abrBandWidthUpFactor: .7,
                abrMaxWithRealBitrate: !1,
                maxStarvationDelay: 4,
                maxLoadingDelay: 4,
                minAutoBitrate: 0
            };
        xr.subtitleStreamController = Pr, xr.subtitleTrackController = kr, xr.timelineController = Lr, xr.cueHandler = wt, xr.enableCEA708Captions = !0, xr.enableWebVTT = !0, xr.captionsTextTrack1Label = "English", xr.captionsTextTrack1LanguageCode = "en", xr.captionsTextTrack2Label = "Spanish", xr.captionsTextTrack2LanguageCode = "es", xr.audioStreamController = ze, xr.audioTrackController = Ke;
        var Fr = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            Nr = function() {
                function t() {
                    var e = this,
                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Lt(this, t);
                    var i = t.DefaultConfig;
                    if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    for (var a in i) a in r || (r[a] = i[a]);
                    if (void 0 !== r.liveMaxLatencyDurationCount && r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                    if (void 0 !== r.liveMaxLatencyDuration && (r.liveMaxLatencyDuration <= r.liveSyncDuration || void 0 === r.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                    Object(Ct.a)(r.debug), this.config = r, this._autoLevelCapping = -1;
                    var n = this.observer = new oe.a;
                    n.trigger = function(t) {
                        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                        n.emit.apply(n, [t, t].concat(r))
                    }, n.off = function(t) {
                        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                        n.removeListener.apply(n, [t].concat(r))
                    }, this.on = n.on.bind(n), this.off = n.off.bind(n), this.trigger = n.trigger.bind(n);
                    var o = this.abrController = new r.abrController(this),
                        s = new r.bufferController(this),
                        l = new r.capLevelController(this),
                        u = new r.fpsController(this),
                        d = new qt(this),
                        h = new Jt(this),
                        c = new Zt(this),
                        f = new Ae(this),
                        p = this.levelController = new Ee(this),
                        g = this.streamController = new ye(this),
                        v = [p, g],
                        y = r.audioStreamController;
                    y && v.push(new y(this)), this.networkControllers = v;
                    var m = [d, h, c, o, s, l, u, f];
                    if (y = r.audioTrackController) {
                        var b = new y(this);
                        this.audioTrackController = b, m.push(b)
                    }
                    if (y = r.subtitleTrackController) {
                        var E = new y(this);
                        this.subtitleTrackController = E, m.push(E)
                    }[r.subtitleStreamController, r.timelineController].forEach(function(t) {
                        t && m.push(new t(e))
                    }), this.coreComponents = m
                }
                return t.isSupported = function() {
                    var t = y(),
                        e = window.SourceBuffer || window.WebKitSourceBuffer,
                        r = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                        i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                    return r && i
                }, Fr(t, null, [{
                    key: "version",
                    get: function() {
                        return "0.8.7"
                    }
                }, {
                    key: "Events",
                    get: function() {
                        return It.a
                    }
                }, {
                    key: "ErrorTypes",
                    get: function() {
                        return Ot.b
                    }
                }, {
                    key: "ErrorDetails",
                    get: function() {
                        return Ot.a
                    }
                }, {
                    key: "DefaultConfig",
                    get: function() {
                        return t.defaultConfig ? t.defaultConfig : xr
                    },
                    set: function(e) {
                        t.defaultConfig = e
                    }
                }]), t.prototype.destroy = function() {
                    Ct.b.log("destroy"), this.trigger(It.a.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function(t) {
                        t.destroy()
                    }), this.url = null, this.observer.removeAllListeners(), this._autoLevelCapping = -1
                }, t.prototype.attachMedia = function(t) {
                    Ct.b.log("attachMedia"), this.media = t, this.trigger(It.a.MEDIA_ATTACHING, {
                        media: t
                    })
                }, t.prototype.detachMedia = function() {
                    Ct.b.log("detachMedia"), this.trigger(It.a.MEDIA_DETACHING), this.media = null
                }, t.prototype.loadSource = function(t) {
                    t = kt.a.buildAbsoluteURL(window.location.href, t, {
                        alwaysNormalize: !0
                    }), Ct.b.log("loadSource:" + t), this.url = t, this.trigger(It.a.MANIFEST_LOADING, {
                        url: t
                    })
                }, t.prototype.startLoad = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    Ct.b.log("startLoad(" + t + ")"), this.networkControllers.forEach(function(e) {
                        e.startLoad(t)
                    })
                }, t.prototype.stopLoad = function() {
                    Ct.b.log("stopLoad"), this.networkControllers.forEach(function(t) {
                        t.stopLoad()
                    })
                }, t.prototype.swapAudioCodec = function() {
                    Ct.b.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                }, t.prototype.recoverMediaError = function() {
                    Ct.b.log("recoverMediaError");
                    var t = this.media;
                    this.detachMedia(), this.attachMedia(t)
                }, Fr(t, [{
                    key: "levels",
                    get: function() {
                        return this.levelController.levels
                    }
                }, {
                    key: "currentLevel",
                    get: function() {
                        return this.streamController.currentLevel
                    },
                    set: function(t) {
                        Ct.b.log("set currentLevel:" + t), this.loadLevel = t, this.streamController.immediateLevelSwitch()
                    }
                }, {
                    key: "nextLevel",
                    get: function() {
                        return this.streamController.nextLevel
                    },
                    set: function(t) {
                        Ct.b.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
                    }
                }, {
                    key: "loadLevel",
                    get: function() {
                        return this.levelController.level
                    },
                    set: function(t) {
                        Ct.b.log("set loadLevel:" + t), this.levelController.manualLevel = t
                    }
                }, {
                    key: "nextLoadLevel",
                    get: function() {
                        return this.levelController.nextLoadLevel
                    },
                    set: function(t) {
                        this.levelController.nextLoadLevel = t
                    }
                }, {
                    key: "firstLevel",
                    get: function() {
                        return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                    },
                    set: function(t) {
                        Ct.b.log("set firstLevel:" + t), this.levelController.firstLevel = t
                    }
                }, {
                    key: "startLevel",
                    get: function() {
                        return this.levelController.startLevel
                    },
                    set: function(t) {
                        Ct.b.log("set startLevel:" + t);
                        var e = this; - 1 !== t && (t = Math.max(t, e.minAutoLevel)), e.levelController.startLevel = t
                    }
                }, {
                    key: "autoLevelCapping",
                    get: function() {
                        return this._autoLevelCapping
                    },
                    set: function(t) {
                        Ct.b.log("set autoLevelCapping:" + t), this._autoLevelCapping = t
                    }
                }, {
                    key: "autoLevelEnabled",
                    get: function() {
                        return -1 === this.levelController.manualLevel
                    }
                }, {
                    key: "manualLevel",
                    get: function() {
                        return this.levelController.manualLevel
                    }
                }, {
                    key: "minAutoLevel",
                    get: function() {
                        for (var t = this, e = t.levels, r = t.config.minAutoBitrate, i = e ? e.length : 0, a = 0; a < i; a++) {
                            if ((e[a].realBitrate ? Math.max(e[a].realBitrate, e[a].bitrate) : e[a].bitrate) > r) return a
                        }
                        return 0
                    }
                }, {
                    key: "maxAutoLevel",
                    get: function() {
                        var t = this,
                            e = t.levels,
                            r = t.autoLevelCapping;
                        return -1 === r && e && e.length ? e.length - 1 : r
                    }
                }, {
                    key: "nextAutoLevel",
                    get: function() {
                        var t = this;
                        return Math.min(Math.max(t.abrController.nextAutoLevel, t.minAutoLevel), t.maxAutoLevel)
                    },
                    set: function(t) {
                        var e = this;
                        e.abrController.nextAutoLevel = Math.max(e.minAutoLevel, t)
                    }
                }, {
                    key: "audioTracks",
                    get: function() {
                        var t = this.audioTrackController;
                        return t ? t.audioTracks : []
                    }
                }, {
                    key: "audioTrack",
                    get: function() {
                        var t = this.audioTrackController;
                        return t ? t.audioTrack : -1
                    },
                    set: function(t) {
                        var e = this.audioTrackController;
                        e && (e.audioTrack = t)
                    }
                }, {
                    key: "liveSyncPosition",
                    get: function() {
                        return this.streamController.liveSyncPosition
                    }
                }, {
                    key: "subtitleTracks",
                    get: function() {
                        var t = this.subtitleTrackController;
                        return t ? t.subtitleTracks : []
                    }
                }, {
                    key: "subtitleTrack",
                    get: function() {
                        var t = this.subtitleTrackController;
                        return t ? t.subtitleTrack : -1
                    },
                    set: function(t) {
                        var e = this.subtitleTrackController;
                        e && (e.subtitleTrack = t)
                    }
                }, {
                    key: "subtitleDisplay",
                    get: function() {
                        var t = this.subtitleTrackController;
                        return !!t && t.subtitleDisplay
                    },
                    set: function(t) {
                        var e = this.subtitleTrackController;
                        e && (e.subtitleDisplay = t)
                    }
                }]), t
            }();
        e.default = Nr
    }, function(t, e, r) {
        function i(t) {
            function e(i) {
                if (r[i]) return r[i].exports;
                var a = r[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return t[i].call(a.exports, a, a.exports, e), a.l = !0, a.exports
            }
            var r = {};
            e.m = t, e.c = r, e.i = function(t) {
                return t
            }, e.d = function(t, r, i) {
                e.o(t, r) || Object.defineProperty(t, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, e.n = function(t) {
                var r = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return e.d(r, "a", r), r
            }, e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, e.p = "/", e.oe = function(t) {
                throw console.error(t), t
            };
            var i = e(e.s = ENTRY_MODULE);
            return i.default || i
        }

        function a(t) {
            return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }

        function n(t) {
            var e = [],
                r = t.toString(),
                i = r.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
            if (!i) return e;
            for (var n, o = i[1], s = new RegExp("(\\\\n|\\W)" + a(o) + "\\((/\\*.*?\\*/)?s?.*?([\\.|\\-|\\w|/|@]+).*?\\)", "g"); n = s.exec(r);) e.push(n[3]);
            return e
        }

        function o(t, e) {
            for (var r = [e], i = [], a = {}; r.length;) {
                var o = r.pop();
                if (!a[o] && t[o]) {
                    a[o] = !0, i.push(o);
                    var s = n(t[o]);
                    r = r.concat(s)
                }
            }
            return i
        }
        t.exports = function(t, e) {
            e = e || {};
            var a = r.m,
                n = e.all ? Object.keys(a) : o(a, t),
                s = "(" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + n.map(function(t) {
                    return JSON.stringify(t) + ": " + a[t].toString()
                }).join(",") + "})(self);",
                l = new window.Blob([s], {
                    type: "text/javascript"
                });
            if (e.bare) return l;
            var u = window.URL || window.webkitURL || window.mozURL || window.msURL,
                d = u.createObjectURL(l),
                h = new window.Worker(d);
            return h.objectURL = d, h
        }
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(7),
            a = r(1),
            n = r(0),
            o = r(5),
            s = r.n(o),
            l = function(t) {
                var e = new s.a;
                e.trigger = function(t) {
                    for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                    e.emit.apply(e, [t, t].concat(i))
                }, e.off = function(t) {
                    for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                    e.removeListener.apply(e, [t].concat(i))
                };
                var r = function(e, r) {
                    t.postMessage({
                        event: e,
                        data: r
                    })
                };
                t.addEventListener("message", function(a) {
                    var o = a.data;
                    switch (o.cmd) {
                        case "init":
                            var s = JSON.parse(o.config);
                            t.demuxer = new i.a(e, o.typeSupported, s, o.vendor);
                            try {
                                Object(n.a)(!0 === s.debug)
                            } catch (t) {
                                console.warn("demuxerWorker: unable to enable logs")
                            }
                            r("init", null);
                            break;
                        case "demux":
                            t.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS)
                    }
                }), e.on(a.a.FRAG_DECRYPTED, r), e.on(a.a.FRAG_PARSING_INIT_SEGMENT, r), e.on(a.a.FRAG_PARSED, r), e.on(a.a.ERROR, r), e.on(a.a.FRAG_PARSING_METADATA, r), e.on(a.a.FRAG_PARSING_USERDATA, r), e.on(a.a.INIT_PTS_FOUND, r), e.on(a.a.FRAG_PARSING_DATA, function(e, r) {
                    var i = [],
                        a = {
                            event: e,
                            data: r
                        };
                    r.data1 && (a.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1), r.data2 && (a.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2), t.postMessage(a, i)
                })
            };
        e.default = l
    }]).default
});
