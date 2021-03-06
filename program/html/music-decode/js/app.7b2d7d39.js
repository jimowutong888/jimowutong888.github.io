(function(t) {
    function e(e) {
        for (var n, o, s = e[0], c = e[1], l = e[2], f = 0, d = []; f < s.length; f++)
            o = s[f],
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && d.push(i[o][0]),
            i[o] = 0;
        for (n in c)
            Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        u && u(e);
        while (d.length)
            d.shift()();
        return a.push.apply(a, l || []),
        r()
    }
    function r() {
        for (var t, e = 0; e < a.length; e++) {
            for (var r = a[e], n = !0, s = 1; s < r.length; s++) {
                var c = r[s];
                0 !== i[c] && (n = !1)
            }
            n && (a.splice(e--, 1),
            t = o(o.s = r[0]))
        }
        return t
    }
    var n = {}
      , i = {
        app: 0
    }
      , a = [];
    function o(e) {
        if (n[e])
            return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, o),
        r.l = !0,
        r.exports
    }
    o.m = t,
    o.c = n,
    o.d = function(t, e, r) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (o.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                o.d(r, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return r
    }
    ,
    o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return o.d(e, "a", e),
        e
    }
    ,
    o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    o.p = "";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = s.push.bind(s);
    s.push = e,
    s = s.slice();
    for (var l = 0; l < s.length; l++)
        e(s[l]);
    var u = c;
    a.push([0, "chunk-vendors"]),
    r()
}
)({
    0: function(t, e, r) {
        t.exports = r("cd49")
    },
    "0565": function(t, e, r) {
        "use strict";
        (function(t) {
            var n = r("7327")
              , i = r("731b")
              , a = r("25f1")
              , o = r("eaa5")
              , s = r("73ec");
            e["a"] = {
                name: "FileSelector",
                data() {
                    return {
                        task_all: 0,
                        task_finished: 0,
                        queue: new s["a"],
                        parallel: !1
                    }
                },
                computed: {
                    progress_value() {
                        return this.task_all ? this.task_finished / this.task_all * 100 : 0
                    },
                    progress_show() {
                        return this.task_all !== this.task_finished
                    }
                },
                mounted() {
                    window.Worker ? (console.log("Using Worker Pool"),
                    this.queue = Object(n["a"])(()=>Object(i["a"])(new a["a"](t)), navigator.hardwareConcurrency || 1),
                    this.parallel = !0) : console.log("Using Queue in Main Thread")
                },
                methods: {
                    progress_string() {
                        return `${this.task_finished} / ${this.task_all}`
                    },
                    async addFile(t) {
                        this.task_all++,
                        this.queue.queue(async(e=o["a"])=>{
                            console.log("start handling", t.name);
                            try {
                                this.$emit("success", await e(t))
                            } catch (r) {
                                console.error(r),
                                this.$emit("error", r, t.name)
                            } finally {
                                this.task_finished++
                            }
                        }
                        )
                    }
                }
            }
        }
        ).call(this, r("2e83"))
    },
    1: function(t, e) {},
    10: function(t, e) {},
    11: function(t, e) {},
    12: function(t, e) {},
    13: function(t, e) {},
    14: function(t, e) {},
    15: function(t, e) {},
    16: function(t, e) {},
    17: function(t, e) {},
    2: function(t, e) {},
    "2e83": function(t, e, r) {
        t.exports = r.p + "js/0.d5f4549a.worker.js"
    },
    3: function(t, e) {},
    3349: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return f
        }
        )),
        r.d(e, "d", (function() {
            return d
        }
        )),
        r.d(e, "b", (function() {
            return h
        }
        )),
        r.d(e, "c", (function() {
            return m
        }
        ));
        var n = r("cc74")
          , i = [79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 1, 30, 1, 118, 111, 114, 98, 105, 115, 0, 0, 0, 0, 2, 68, 172, 0, 0, 0, 0, 0, 0, 0, 238, 2, 0, 0, 0, 0, 0, 184, 1, 79, 103, 103, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 255, 255, 255, 255]
          , a = [3, 118, 111, 114, 98, 105, 115, 44, 0, 0, 0, 88, 105, 112, 104, 46, 79, 114, 103, 32, 108, 105, 98, 86, 111, 114, 98, 105, 115, 32, 73, 32, 50, 48, 49, 53, 48, 49, 48, 53, 32, 40, 226, 155, 132, 226, 155, 132, 226, 155, 132, 226, 155, 132, 41, 255, 0, 0, 0, 255, 0, 0, 0, 84, 73, 84, 76, 69, 61]
          , o = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0]
          , s = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 3, 3, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3]
          , c = [222, 81, 250, 195, 74, 214, 202, 144, 126, 103, 94, 247, 213, 82, 132, 216, 71, 149, 187, 161, 170, 198, 102, 35, 146, 98, 243, 116, 161, 159, 244, 160, 29, 63, 91, 240, 19, 14, 9, 61, 249, 188, 0, 17]
          , l = []
          , u = [];
        (function() {
            for (var t = 0; t < 128; t++) {
                var e = (t * t + 27) % 256;
                e in l ? l[e].push(t) : l[e] = [t]
            }
            var r = 0;
            l.forEach((function(t) {
                t.forEach((function(t) {
                    u[t] = r
                }
                )),
                r++
            }
            ))
        }
        )();
        var f = function() {
            function t(t) {
                if (t instanceof Uint8Array && (t = Array.from(t)),
                44 === t.length)
                    this.Matrix128 = this._generate128(t);
                else {
                    if (128 !== t.length)
                        throw Error("invalid mask length");
                    this.Matrix128 = t
                }
            }
            return t.prototype.getMatrix128 = function() {
                return this.Matrix128
            }
            ,
            t.prototype.getMatrix44 = function() {
                var t = this
                  , e = []
                  , r = 0;
                return l.forEach((function(n) {
                    for (var i = n.length, a = 1; a < i; a++)
                        if (t.Matrix128[n[0]] !== t.Matrix128[n[a]])
                            throw "decode mask-128 to mask-44 failed";
                    e[r] = t.Matrix128[n[0]],
                    r++
                }
                )),
                e
            }
            ,
            t.prototype.Decrypt = function(t) {
                if (!this.Matrix128)
                    throw Error("bad call sequence");
                for (var e = t.slice(0), r = -1, n = -1, i = 0; i < t.length; i++)
                    r++,
                    n++,
                    (32768 === r || r > 32768 && (r + 1) % 32768 === 0) && (r++,
                    n++),
                    n >= 128 && (n -= 128),
                    e[i] ^= this.Matrix128[n];
                return e
            }
            ,
            t.prototype._generate128 = function(t) {
                var e = []
                  , r = 0;
                return l.forEach((function(n) {
                    n.forEach((function(n) {
                        e[n] = t[r]
                    }
                    )),
                    r++
                }
                )),
                e
            }
            ,
            t
        }();
        function d() {
            return new f(c)
        }
        function h(t) {
            for (var e, r = Math.min(32768, t.length), i = 0; i < r; i += 128)
                try {
                    if (e = new f(t.slice(i, i + 128)),
                    Object(n["b"])(e.Decrypt(t.slice(0, n["c"].length)), n["c"]))
                        break
                } catch (a) {}
            return e
        }
        function m(t) {
            if (!(t.length < 256)) {
                for (var e = {}, r = 0; r < 44; r++)
                    e[r] = {};
                for (var a = t[84] ^ t[12] ^ i[12], o = p(a), s = v(a), c = 0; c < o.length; c++)
                    if (0 !== s[c]) {
                        var l = u[c % 128]
                          , d = t[c] ^ o[c]
                          , h = s[c];
                        d in e[l] ? e[l][d] += h : e[l][d] = h
                    }
                var m = [];
                try {
                    for (r = 0; r < 44; r++)
                        m[r] = b(e[r])
                } catch (g) {
                    return
                }
                var w = new f(m);
                if (Object(n["b"])(w.Decrypt(t.slice(0, n["h"].length)), n["h"]))
                    return w
            }
        }
        function b(t) {
            var e = Object.keys(t).length;
            if (0 === e)
                throw "can not match at least one key";
            e > 1 && console.warn("There are 2 potential value for the mask!");
            var r = ""
              , n = 0;
            for (var i in t)
                t[i] > n && (r = i,
                n = t[i]);
            return Number(r)
        }
        function p(t) {
            for (var e = [t, 255], r = 2; r < t; r++)
                e.push(255);
            return e.push(255),
            i.concat(e, a)
        }
        function v(t) {
            for (var e = [6, 0], r = 2; r < t; r++)
                e.push(4);
            return e.push(0),
            o.concat(e, s)
        }
    },
    4: function(t, e) {},
    5: function(t, e) {},
    "5c0b": function(t, e, r) {
        "use strict";
        r("9c0c")
    },
    6: function(t, e) {},
    "6d95": function(t, e, r) {
        "use strict";
        (function(t) {
            r.d(e, "a", (function() {
                return h
            }
            ));
            var n = r("9ab4")
              , i = r("cc74")
              , a = r("cb96")
              , o = r("ef21")
              , s = r.n(o)
              , c = r("3452")
              , l = r.n(c)
              , u = l.a.enc.Hex.parse("687a4852416d736f356b496e62617857")
              , f = l.a.enc.Hex.parse("2331346C6A6B5F215C5D2630553C2728")
              , d = [67, 84, 69, 78, 70, 68, 65, 77];
            function h(t, e, r) {
                return Object(n["a"])(this, void 0, Promise, (function() {
                    var r;
                    return Object(n["b"])(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return r = m.bind,
                            [4, Object(i["d"])(t)];
                        case 1:
                            return [2, (new (r.apply(m, [void 0, n.sent(), e]))).decrypt()]
                        }
                    }
                    ))
                }
                ))
            }
            var m = function() {
                function e(t, e) {
                    this.offset = 0,
                    this.format = "",
                    this.mime = "";
                    var r = new Uint8Array(t,0,8);
                    if (!Object(i["b"])(r, d))
                        throw Error("???ncm???????????????");
                    this.offset = 10,
                    this.raw = t,
                    this.view = new DataView(t),
                    this.filename = e
                }
                return e.prototype._getKeyData = function() {
                    var t = this.view.getUint32(this.offset, !0);
                    this.offset += 4;
                    var e = new Uint8Array(this.raw,this.offset,t).map((function(t) {
                        return 100 ^ t
                    }
                    ));
                    this.offset += t;
                    for (var r = l.a.AES.decrypt({
                        ciphertext: l.a.lib.WordArray.create(e)
                    }, u, {
                        mode: l.a.mode.ECB,
                        padding: l.a.pad.Pkcs7
                    }), n = new Uint8Array(r.sigBytes), i = r.words, a = r.sigBytes, o = 0; o < a; o++)
                        n[o] = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    return n.slice(17)
                }
                ,
                e.prototype._getKeyBox = function() {
                    for (var t, e = this._getKeyData(), r = new Uint8Array(Array(256).keys()), n = e.length, i = 0, a = 0; a < 256; a++)
                        i = r[a] + i + e[a % n] & 255,
                        t = [r[i], r[a]],
                        r[a] = t[0],
                        r[i] = t[1];
                    return r.map((function(t, e, r) {
                        e = e + 1 & 255;
                        var n = r[e]
                          , i = r[e + n & 255];
                        return r[n + i & 255]
                    }
                    ))
                }
                ,
                e.prototype._getMetaData = function() {
                    var t = this.view.getUint32(this.offset, !0);
                    if (this.offset += 4,
                    0 === t)
                        return {};
                    var e = new Uint8Array(this.raw,this.offset,t).map((function(t) {
                        return 99 ^ t
                    }
                    ));
                    this.offset += t;
                    var r, n = l.a.AES.decrypt({
                        ciphertext: l.a.enc.Base64.parse(l.a.lib.WordArray.create(e.slice(22)).toString(l.a.enc.Utf8))
                    }, f, {
                        mode: l.a.mode.ECB,
                        padding: l.a.pad.Pkcs7
                    }).toString(l.a.enc.Utf8), i = n.indexOf(":");
                    if ("dj" === n.slice(0, i)) {
                        var a = JSON.parse(n.slice(i + 1));
                        r = a.mainMusic
                    } else
                        r = JSON.parse(n.slice(i + 1));
                    return r.albumPic && (r.albumPic = r.albumPic.replace("http://", "https://") + "?param=500y500"),
                    r
                }
                ,
                e.prototype._getAudio = function(t) {
                    this.offset += this.view.getUint32(this.offset + 5, !0) + 13;
                    for (var e = new Uint8Array(this.raw,this.offset), r = e.length, n = 0; n < r; ++n)
                        e[n] ^= t[255 & n];
                    return e
                }
                ,
                e.prototype._buildMeta = function() {
                    var e;
                    return Object(n["a"])(this, void 0, void 0, (function() {
                        var r, a, o, c, l, u;
                        return Object(n["b"])(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                if (!this.oriMeta)
                                    throw Error("invalid sequence");
                                if (r = Object(i["g"])(this.filename, this.oriMeta.musicName),
                                a = [],
                                this.oriMeta.artist && this.oriMeta.artist.forEach((function(t) {
                                    return a.push(t[0])
                                }
                                )),
                                0 === a.length && r.artist && (a = r.artist.split(",").map((function(t) {
                                    return t.trim()
                                }
                                )).filter((function(t) {
                                    return "" != t
                                }
                                ))),
                                !this.oriMeta.albumPic)
                                    return [3, 9];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 8, , 9]),
                                o = this,
                                [4, Object(i["f"])(this.oriMeta.albumPic)];
                            case 2:
                                o.image = n.sent(),
                                n.label = 3;
                            case 3:
                                return this.image && this.image.buffer.byteLength >= 1 << 24 ? [4, s.a.read(t.from(this.image.buffer))] : [3, 7];
                            case 4:
                                return c = n.sent(),
                                [4, c.resize(Math.round(c.getHeight() / 2), s.a.AUTO)];
                            case 5:
                                return n.sent(),
                                l = this.image,
                                [4, c.getBufferAsync("image/jpeg")];
                            case 6:
                                return l.buffer = n.sent(),
                                [3, 3];
                            case 7:
                                return [3, 9];
                            case 8:
                                return u = n.sent(),
                                console.log("get cover image failed", u),
                                [3, 9];
                            case 9:
                                return this.newMeta = {
                                    title: r.title,
                                    artists: a,
                                    album: this.oriMeta.album,
                                    picture: null === (e = this.image) || void 0 === e ? void 0 : e.buffer
                                },
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype._writeMeta = function() {
                    return Object(n["a"])(this, void 0, void 0, (function() {
                        var e, r;
                        return Object(n["b"])(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                if (!this.audio || !this.newMeta)
                                    throw Error("invalid sequence");
                                return this.blob || (this.blob = new Blob([this.audio],{
                                    type: this.mime
                                })),
                                [4, Object(a["parseBlob"])(this.blob)];
                            case 1:
                                if (e = n.sent(),
                                r = !e.common.album && !e.common.artists && !e.common.title,
                                r || this.newMeta.picture) {
                                    if ("mp3" === this.format)
                                        this.audio = Object(i["k"])(t.from(this.audio), this.newMeta, e);
                                    else {
                                        if ("flac" !== this.format)
                                            return console.info("writing meta for " + this.format + " is not being supported for now"),
                                            [2];
                                        this.audio = Object(i["j"])(t.from(this.audio), this.newMeta, e)
                                    }
                                    this.blob = new Blob([this.audio],{
                                        type: this.mime
                                    })
                                }
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.gatherResult = function() {
                    var t, e;
                    if (!this.newMeta)
                        throw Error("bad sequence");
                    return {
                        title: this.newMeta.title,
                        artist: null === (t = this.newMeta.artists) || void 0 === t ? void 0 : t.join("; "),
                        ext: this.format,
                        album: this.newMeta.album,
                        picture: null === (e = this.image) || void 0 === e ? void 0 : e.url,
                        file: URL.createObjectURL(this.blob),
                        blob: this.blob,
                        mime: this.mime
                    }
                }
                ,
                e.prototype.decrypt = function() {
                    return Object(n["a"])(this, void 0, void 0, (function() {
                        var t, e;
                        return Object(n["b"])(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return t = this._getKeyBox(),
                                this.oriMeta = this._getMetaData(),
                                this.audio = this._getAudio(t),
                                this.format = this.oriMeta.format || Object(i["i"])(this.audio),
                                this.mime = i["a"][this.format],
                                [4, this._buildMeta()];
                            case 1:
                                r.sent(),
                                r.label = 2;
                            case 2:
                                return r.trys.push([2, 4, , 5]),
                                [4, this._writeMeta()];
                            case 3:
                                return r.sent(),
                                [3, 5];
                            case 4:
                                return e = r.sent(),
                                console.warn("write meta data failed", e),
                                [3, 5];
                            case 5:
                                return [2, this.gatherResult()]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e
            }()
        }
        ).call(this, r("1c35").Buffer)
    },
    7: function(t, e) {},
    "73ec": function(t, e, r) {
        "use strict";
        r.d(e, "e", (function() {
            return n
        }
        )),
        r.d(e, "d", (function() {
            return a
        }
        )),
        r.d(e, "b", (function() {
            return s
        }
        )),
        r.d(e, "c", (function() {
            return c
        }
        )),
        r.d(e, "f", (function() {
            return l
        }
        )),
        r.d(e, "a", (function() {
            return u
        }
        ));
        var n, i = r("9ab4");
        (function(t) {
            t[t["ArtistAndTitle"] = 0] = "ArtistAndTitle",
            t[t["TitleOnly"] = 1] = "TitleOnly",
            t[t["TitleAndArtist"] = 2] = "TitleAndArtist",
            t[t["SameAsOriginal"] = 3] = "SameAsOriginal"
        }
        )(n || (n = {}));
        var a = [{
            key: n.ArtistAndTitle,
            text: "??????-?????????"
        }, {
            key: n.TitleOnly,
            text: "?????????"
        }, {
            key: n.TitleAndArtist,
            text: "?????????-??????"
        }, {
            key: n.SameAsOriginal,
            text: "???????????????"
        }];
        function o(t, e) {
            switch (e) {
            case n.TitleOnly:
                return t.title + "." + t.ext;
            case n.TitleAndArtist:
                return t.title + " - " + t.artist + "." + t.ext;
            case n.SameAsOriginal:
                return t.rawFilename + "." + t.ext;
            default:
            case n.ArtistAndTitle:
                return t.artist + " - " + t.title + "." + t.ext
            }
        }
        function s(t, e, r) {
            return Object(i["a"])(this, void 0, void 0, (function() {
                var n, a, s;
                return Object(i["b"])(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        n = o(t, e),
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]),
                        [4, r.getFileHandle(n)];
                    case 2:
                        return i.sent(),
                        n = (new Date).getTime() + " - " + n,
                        [3, 4];
                    case 3:
                        return i.sent(),
                        [3, 4];
                    case 4:
                        return [4, r.getFileHandle(n, {
                            create: !0
                        })];
                    case 5:
                        return a = i.sent(),
                        [4, a.createWritable()];
                    case 6:
                        return s = i.sent(),
                        [4, s.write(t.blob)];
                    case 7:
                        return i.sent(),
                        [4, s.close()];
                    case 8:
                        return i.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        function c(t, e) {
            var r = document.createElement("a");
            r.href = t.file,
            r.download = o(t, e),
            document.body.append(r),
            r.click(),
            r.remove()
        }
        function l(t) {
            var e;
            URL.revokeObjectURL(t.file),
            (null === (e = t.picture) || void 0 === e ? void 0 : e.startsWith("blob:")) && URL.revokeObjectURL(t.picture)
        }
        var u = function() {
            function t() {
                this.pending = []
            }
            return t.prototype.queue = function(t) {
                this.pending.push(t),
                this.consume()
            }
            ,
            t.prototype.consume = function() {
                var t = this
                  , e = this.pending.shift();
                e && e().then((function() {
                    return t.consume
                }
                )).catch(console.error)
            }
            ,
            t
        }()
    },
    8: function(t, e) {},
    8850: function(t, e, r) {
        "use strict";
        (function(t) {
            r.d(e, "a", (function() {
                return d
            }
            ));
            var n = r("9ab4")
              , i = r("3349")
              , a = r("1fb5")
              , o = r("cc74")
              , s = r("cb96")
              , c = r("acf9")
              , l = r.n(c)
              , u = r("97e5")
              , f = {
                mgg: {
                    handler: i["c"],
                    ext: "ogg",
                    detect: !0
                },
                mflac: {
                    handler: i["b"],
                    ext: "flac",
                    detect: !0
                },
                qmc0: {
                    handler: i["d"],
                    ext: "mp3",
                    detect: !1
                },
                qmc2: {
                    handler: i["d"],
                    ext: "ogg",
                    detect: !1
                },
                qmc3: {
                    handler: i["d"],
                    ext: "mp3",
                    detect: !1
                },
                qmcogg: {
                    handler: i["d"],
                    ext: "ogg",
                    detect: !1
                },
                qmcflac: {
                    handler: i["d"],
                    ext: "flac",
                    detect: !1
                },
                bkcmp3: {
                    handler: i["d"],
                    ext: "mp3",
                    detect: !1
                },
                bkcflac: {
                    handler: i["d"],
                    ext: "flac",
                    detect: !1
                },
                tkm: {
                    handler: i["d"],
                    ext: "m4a",
                    detect: !1
                },
                "666c6163": {
                    handler: i["d"],
                    ext: "flac",
                    detect: !1
                },
                "6d7033": {
                    handler: i["d"],
                    ext: "mp3",
                    detect: !1
                },
                "6f6767": {
                    handler: i["d"],
                    ext: "ogg",
                    detect: !1
                },
                "6d3461": {
                    handler: i["d"],
                    ext: "m4a",
                    detect: !1
                },
                776176: {
                    handler: i["d"],
                    ext: "wav",
                    detect: !1
                }
            };
            function d(e, r, i) {
                var a, c, d, b;
                return Object(n["a"])(this, void 0, Promise, (function() {
                    var p, v, w, g, y, O, j, _, k, x, A, T, U, M, P, E, S, B;
                    return Object(n["b"])(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            if (!(i in f))
                                throw "File type is incorrect!";
                            return p = f[i],
                            w = Uint8Array.bind,
                            [4, Object(o["d"])(e)];
                        case 1:
                            return v = new (w.apply(Uint8Array, [void 0, n.sent()])),
                            p.detect ? (j = new DataView(v.slice(v.length - 4).buffer).getUint32(0, !0),
                            _ = v.length - 4 - j,
                            g = v.slice(0, _),
                            y = p.handler(g),
                            O = v.slice(_, _ + j),
                            y ? [3, 3] : [4, h(O, r, i)]) : [3, 4];
                        case 2:
                            y = n.sent(),
                            n.label = 3;
                        case 3:
                            if (!y)
                                throw i + "??????????????????????????????";
                            return [3, 5];
                        case 4:
                            g = v,
                            y = p.handler(g),
                            n.label = 5;
                        case 5:
                            return k = y.Decrypt(g),
                            x = Object(o["i"])(k, p.ext),
                            A = o["a"][x],
                            T = new Blob([k],{
                                type: A
                            }),
                            [4, Object(s["parseBlob"])(T)];
                        case 6:
                            for (M in U = n.sent(),
                            U.native)
                                U.native.hasOwnProperty(M) && U.native[M].some((function(t) {
                                    return "TCON" === t.id && "(12)" === t.value
                                }
                                )) && (console.warn("try using gbk encoding to decode meta"),
                                U.common.artist = l.a.decode(new t(null !== (a = U.common.artist) && void 0 !== a ? a : ""), "gbk"),
                                U.common.title = l.a.decode(new t(null !== (c = U.common.title) && void 0 !== c ? c : ""), "gbk"),
                                U.common.album = l.a.decode(new t(null !== (d = U.common.album) && void 0 !== d ? d : ""), "gbk"));
                            return P = Object(o["g"])(r, U.common.title, U.common.artist),
                            O && Object(u["d"])(O, y.getMatrix128(), r, i, P.title, P.artist, U.common.album).then().catch(),
                            E = Object(o["e"])(U),
                            E ? [3, 9] : [4, m(P.title, P.artist, U.common.album)];
                        case 7:
                            return E = n.sent(),
                            E ? [4, Object(o["f"])(E)] : [3, 9];
                        case 8:
                            if (S = n.sent(),
                            S) {
                                E = S.url;
                                try {
                                    B = {
                                        picture: S.buffer,
                                        title: P.title,
                                        artists: null === (b = P.artist) || void 0 === b ? void 0 : b.split(" _ ")
                                    },
                                    "mp3" === x ? (k = Object(o["k"])(t.from(k), B, U),
                                    T = new Blob([k],{
                                        type: A
                                    })) : "flac" === x ? (k = Object(o["j"])(t.from(k), B, U),
                                    T = new Blob([k],{
                                        type: A
                                    })) : console.info("writing metadata for " + x + " is not being supported for now")
                                } catch (D) {
                                    console.warn("Error while appending cover image to file " + D)
                                }
                            }
                            n.label = 9;
                        case 9:
                            return [2, {
                                title: P.title,
                                artist: P.artist,
                                ext: x,
                                album: U.common.album,
                                picture: E,
                                file: URL.createObjectURL(T),
                                blob: T,
                                mime: A
                            }]
                        }
                    }
                    ))
                }
                ))
            }
            function h(t, e, r) {
                return Object(n["a"])(this, void 0, Promise, (function() {
                    var o, s;
                    return Object(n["b"])(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]),
                            [4, Object(u["c"])(t, e, r)];
                        case 1:
                            return o = n.sent(),
                            [2, new i["a"](Object(a["toByteArray"])(o.Matrix44))];
                        case 2:
                            return s = n.sent(),
                            console.warn(s),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function m(t, e, r) {
                return Object(n["a"])(this, void 0, Promise, (function() {
                    var i, a, o;
                    return Object(n["b"])(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            i = "https://stats.ixarea.com/apis/music/qq-cover",
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, , 4]),
                            [4, Object(u["b"])(t, e, r)];
                        case 2:
                            return a = n.sent(),
                            [2, i + "/" + a.Type + "/" + a.Id];
                        case 3:
                            return o = n.sent(),
                            console.warn(o),
                            [3, 4];
                        case 4:
                            return [2, ""]
                        }
                    }
                    ))
                }
                ))
            }
        }
        ).call(this, r("1c35").Buffer)
    },
    9: function(t, e) {},
    9224: function(t) {
        t.exports = JSON.parse('{"name":"unlock-music","version":"v1.9.0-beta","updateInfo":"??????????????????????????????; ??????.kwm??????; ??????.acc??????; ??????Typescript??????","license":"MIT","description":"Unlock encrypted music file in browser.","repository":{"type":"git","url":"https://github.com/ix64/unlock-music"},"private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","fix-compatibility":"node ./src/fix-compatibility.js","make-extension":"node ./make-extension.js"},"dependencies":{"base64-js":"^1.5.1","browser-id3-writer":"^4.4.0","core-js":"^3.12.1","crypto-js":"^4.0.0","element-ui":"^2.15.1","iconv-lite":"^0.6.3","jimp":"^0.16.1","metaflac-js":"^1.0.5","music-metadata-browser":"^2.2.6","register-service-worker":"^1.7.2","threads":"^1.6.4","vue":"^2.6.12"},"devDependencies":{"@types/crypto-js":"^4.0.1","@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-pwa":"^4.5.13","@vue/cli-plugin-typescript":"^4.5.13","@vue/cli-service":"^4.5.13","babel-plugin-component":"^1.1.1","node-sass":"^5.0.0","sass-loader":"^10.2.0","semver":"^7.3.5","threads-plugin":"^1.4.0","typescript":"~4.1.5","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.12"}}')
    },
    "97e5": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        }
        )),
        r.d(e, "d", (function() {
            return s
        }
        )),
        r.d(e, "c", (function() {
            return c
        }
        )),
        r.d(e, "b", (function() {
            return l
        }
        ));
        var n = r("9ab4")
          , i = r("1fb5")
          , a = "https://stats.ixarea.com/apis";
        function o(t) {
            return Object(n["a"])(this, void 0, Promise, (function() {
                var e;
                return Object(n["b"])(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, fetch(a + "/music/app-version", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                Version: t
                            })
                        })];
                    case 1:
                        return e = r.sent(),
                        [4, e.json()];
                    case 2:
                        return [2, r.sent()]
                    }
                }
                ))
            }
            ))
        }
        function s(t, e, r, n, o, s, c) {
            return fetch(a + "/qmcmask/usage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Mask: Object(i["fromByteArray"])(new Uint8Array(e)),
                    Key: Object(i["fromByteArray"])(t),
                    Artist: s,
                    Title: o,
                    Album: c,
                    Filename: r,
                    Format: n
                })
            })
        }
        function c(t, e, r) {
            return Object(n["a"])(this, void 0, Promise, (function() {
                var o;
                return Object(n["b"])(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, fetch(a + "/qmcmask/query", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                Format: r,
                                Key: Object(i["fromByteArray"])(t),
                                Filename: e,
                                Type: 44
                            })
                        })];
                    case 1:
                        return o = n.sent(),
                        [4, o.json()];
                    case 2:
                        return [2, n.sent()]
                    }
                }
                ))
            }
            ))
        }
        function l(t, e, r) {
            return Object(n["a"])(this, void 0, Promise, (function() {
                var i, o, s;
                return Object(n["b"])(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return i = a + "/music/qq-cover",
                        o = new URLSearchParams([["Title", t], ["Artist", null !== e && void 0 !== e ? e : ""], ["Album", null !== r && void 0 !== r ? r : ""]]),
                        [4, fetch(i + "?" + o.toString())];
                    case 1:
                        return s = n.sent(),
                        [4, s.json()];
                    case 2:
                        return [2, n.sent()]
                    }
                }
                ))
            }
            ))
        }
    },
    "9c0c": function(t, e, r) {},
    cc74: function(t, e, r) {
        "use strict";
        (function(t) {
            r.d(e, "c", (function() {
                return c
            }
            )),
            r.d(e, "h", (function() {
                return u
            }
            )),
            r.d(e, "a", (function() {
                return b
            }
            )),
            r.d(e, "b", (function() {
                return p
            }
            )),
            r.d(e, "i", (function() {
                return v
            }
            )),
            r.d(e, "d", (function() {
                return w
            }
            )),
            r.d(e, "e", (function() {
                return g
            }
            )),
            r.d(e, "g", (function() {
                return y
            }
            )),
            r.d(e, "f", (function() {
                return O
            }
            )),
            r.d(e, "k", (function() {
                return j
            }
            )),
            r.d(e, "j", (function() {
                return _
            }
            ));
            var n = r("9ab4")
              , i = r("7907")
              , a = r.n(i)
              , o = r("b686")
              , s = r.n(o)
              , c = [102, 76, 97, 67]
              , l = [73, 68, 51]
              , u = [79, 103, 103, 83]
              , f = [102, 116, 121, 112]
              , d = [48, 38, 178, 117, 142, 102, 207, 17, 166, 217, 0, 170, 0, 98, 206, 108]
              , h = [82, 73, 70, 70]
              , m = [255, 241]
              , b = {
                mp3: "audio/mpeg",
                flac: "audio/flac",
                m4a: "audio/mp4",
                ogg: "audio/ogg",
                wma: "audio/x-ms-wma",
                wav: "audio/x-wav"
            };
            function p(t, e) {
                return !(e.length > t.length) && e.every((function(e, r) {
                    return e === t[r]
                }
                ))
            }
            function v(t, e) {
                return void 0 === e && (e = "mp3"),
                p(t, l) ? "mp3" : p(t, c) ? "flac" : p(t, u) ? "ogg" : t.length >= 4 + f.length && p(t.slice(4), f) ? "m4a" : p(t, h) ? "wav" : p(t, d) ? "wma" : p(t, m) ? "aac" : e
            }
            function w(t) {
                return t.arrayBuffer ? t.arrayBuffer() : new Promise((function(e, r) {
                    var n = new FileReader;
                    n.onload = function(t) {
                        var n, i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                        i ? e(i) : r("read file failed")
                    }
                    ,
                    n.readAsArrayBuffer(t)
                }
                ))
            }
            function g(t) {
                var e;
                return (null === (e = t.common) || void 0 === e ? void 0 : e.picture) && t.common.picture.length > 0 ? URL.createObjectURL(new Blob([t.common.picture[0].data],{
                    type: t.common.picture[0].format
                })) : ""
            }
            function y(t, e, r, n) {
                void 0 === n && (n = "-");
                var i = {
                    title: null !== e && void 0 !== e ? e : "",
                    artist: r
                }
                  , a = t.split(n);
                return a.length > 1 ? (i.artist || (i.artist = a[0].trim()),
                i.title || (i.title = a[1].trim())) : 1 === a.length && (i.title || (i.title = a[0].trim())),
                i
            }
            function O(t) {
                return Object(n["a"])(this, void 0, Promise, (function() {
                    var e, r, i, a, o;
                    return Object(n["b"])(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 4, , 5]),
                            [4, fetch(t)];
                        case 1:
                            return e = n.sent(),
                            r = e.headers.get("Content-Type"),
                            (null === r || void 0 === r ? void 0 : r.startsWith("image/")) ? [4, e.arrayBuffer()] : [3, 3];
                        case 2:
                            return i = n.sent(),
                            a = URL.createObjectURL(new Blob([i],{
                                type: r
                            })),
                            [2, {
                                buffer: i,
                                url: a,
                                mime: r
                            }];
                        case 3:
                            return [3, 5];
                        case 4:
                            return o = n.sent(),
                            console.warn(o),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function j(t, e, r) {
                var n = new a.a(t)
                  , i = r.native["ID3v2.4"] || r.native["ID3v2.3"] || r.native["ID3v2.2"] || [];
                i.forEach((function(t) {
                    if ("TPE1" !== t.id && "TIT2" !== t.id && "TALB" !== t.id)
                        try {
                            n.setFrame(t.id, t.value)
                        } catch (e) {}
                }
                ));
                var o = r.common;
                return n.setFrame("TPE1", (null === o || void 0 === o ? void 0 : o.artists) || e.artists || []).setFrame("TIT2", (null === o || void 0 === o ? void 0 : o.title) || e.title).setFrame("TALB", (null === o || void 0 === o ? void 0 : o.album) || e.album || ""),
                e.picture && n.setFrame("APIC", {
                    type: 3,
                    data: e.picture,
                    description: e.picture_desc || "Cover"
                }),
                n.addTag()
            }
            function _(e, r, n) {
                var i = new s.a(e)
                  , a = n.common;
                return a.title || a.album || !a.artists || (i.setTag("TITLE=" + r.title),
                i.setTag("ALBUM=" + r.album),
                r.artists && (i.removeTag("ARTIST"),
                r.artists.forEach((function(t) {
                    return i.setTag("ARTIST=" + t)
                }
                )))),
                r.picture && i.importPictureFromBuffer(t.from(r.picture)),
                i.save()
            }
        }
        ).call(this, r("1c35").Buffer)
    },
    cd49: function(t, e, r) {
        "use strict";
        r.r(e);
        r("9e1f"),
        r("450d");
        var n = r("6ed5")
          , i = r.n(n)
          , a = (r("46a1"),
        r("e5f2"))
          , o = r.n(a)
          , s = (r("6b30"),
        r("c284"))
          , c = r.n(s)
          , l = (r("0c67"),
        r("299c"))
          , u = r.n(l)
          , f = (r("b5d8"),
        r("f494"))
          , d = r.n(f)
          , h = (r("560b"),
        r("dcdc"))
          , m = r.n(h)
          , b = (r("f225"),
        r("89a9"))
          , p = r.n(b)
          , v = (r("f4f9"),
        r("c2cc"))
          , w = r.n(v)
          , g = (r("7a0f"),
        r("0f6c"))
          , y = r.n(g)
          , O = (r("aaa5"),
        r("a578"))
          , j = r.n(O)
          , _ = (r("adec"),
        r("3d2d"))
          , k = r.n(_)
          , x = (r("bdc7"),
        r("aa2f"))
          , A = r.n(x)
          , T = (r("de31"),
        r("c69e"))
          , U = r.n(T)
          , M = (r("5466"),
        r("ecdf"))
          , P = r.n(M)
          , E = (r("38a0"),
        r("ad41"))
          , S = r.n(E)
          , B = (r("1951"),
        r("eedf"))
          , D = r.n(B)
          , L = (r("acb6"),
        r("c673"))
          , F = r.n(L)
          , q = (r("fd71"),
        r("a447"))
          , C = r.n(q)
          , R = r("2b0e")
          , $ = function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("el-container", {
                attrs: {
                    id: "app"
                }
            }, [r("el-main", [r("Home")], 1), r("el-footer", {
                attrs: {
                    id: "app-footer"
                }
            }, [r("el-row", [r("a", {
                attrs: {
                    href: "https://github.com/ix64/unlock-music",
                    target: "_blank"
                }
            }, [t._v("????????????")]), t._v("(" + t._s(t.version) + ") ??????????????????????????????????????? "), r("a", {
                attrs: {
                    href: "https://github.com/ix64/unlock-music/wiki/????????????",
                    target: "_blank"
                }
            }, [t._v("????????????")])]), r("el-row", [t._v(" ???????????????????????????(ncm), QQ??????(qmc, mflac, mgg), ????????????(kgm), ????????????(xm), ????????????(.kwm) "), r("a", {
                attrs: {
                    href: "https://github.com/ix64/unlock-music/blob/master/README.md",
                    target: "_blank"
                }
            }, [t._v("??????")]), t._v("??? ")]), r("el-row", [r("span", [t._v("Copyright ?? 2019 - " + t._s((new Date).getFullYear()) + " MengYX")]), t._v(" ?????????????????? "), r("a", {
                attrs: {
                    href: "https://github.com/ix64/unlock-music/blob/master/LICENSE",
                    target: "_blank"
                }
            }, [t._v("MIT????????????")]), t._v(" ??????????????? ")])], 1)], 1)
        }
          , I = []
          , N = function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("el-upload", {
                attrs: {
                    "auto-upload": !1,
                    "on-change": t.addFile,
                    "show-file-list": !1,
                    action: "",
                    drag: "",
                    multiple: ""
                }
            }, [r("i", {
                staticClass: "el-icon-upload"
            }), r("div", {
                staticClass: "el-upload__text"
            }, [t._v("???????????????????????????"), r("em", [t._v("????????????")])]), r("div", {
                staticClass: "el-upload__tip",
                attrs: {
                    slot: "tip"
                },
                slot: "tip"
            }, [r("div", [t._v(" ???????????????????????????????????????????????????????????? "), r("el-tooltip", {
                attrs: {
                    effect: "dark",
                    placement: "top-start"
                }
            }, [r("div", {
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [t._v(" ?????????????????????????????????????????????????????????????????? ")]), r("i", {
                staticClass: "el-icon-info",
                staticStyle: {
                    "font-size": "12px"
                }
            })])], 1), r("div", [t._v(" ????????????: " + t._s(t.parallel ? "????????? Worker" : "????????? Queue") + " "), r("el-tooltip", {
                attrs: {
                    effect: "dark",
                    placement: "top-start"
                }
            }, [r("div", {
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [t._v(" ?????????????????????HTTPS????????????????????????Web Worker?????????"), r("br"), t._v(" ????????????????????????????????????????????? ")]), r("i", {
                staticClass: "el-icon-info",
                staticStyle: {
                    "font-size": "12px"
                }
            })])], 1)]), r("transition", {
                attrs: {
                    name: "el-fade-in"
                }
            }, [r("el-progress", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.progress_show,
                    expression: "progress_show"
                }],
                staticStyle: {
                    margin: "16px 6px 0 6px"
                },
                attrs: {
                    format: t.progress_string,
                    percentage: t.progress_value,
                    "stroke-width": 16,
                    "text-inside": !0
                }
            })], 1)], 1)
        }
          , H = []
          , W = r("0565")
          , J = W["a"]
          , V = r("2877")
          , K = Object(V["a"])(J, N, H, !1, null, null, null)
          , Q = K.exports
          , z = function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("el-table", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    data: t.tableData
                }
            }, [r("el-table-column", {
                attrs: {
                    label: "??????"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [r("el-image", {
                            staticStyle: {
                                width: "100px",
                                height: "100px"
                            },
                            attrs: {
                                src: e.row.picture
                            }
                        }, [r("div", {
                            staticClass: "image-slot el-image__error",
                            attrs: {
                                slot: "error"
                            },
                            slot: "error"
                        }, [t._v(" ???????????? ")])])]
                    }
                }])
            }), r("el-table-column", {
                attrs: {
                    label: "??????"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [r("span", [t._v(t._s(e.row.title))])]
                    }
                }])
            }), r("el-table-column", {
                attrs: {
                    label: "??????"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [r("p", [t._v(t._s(e.row.artist))])]
                    }
                }])
            }), r("el-table-column", {
                attrs: {
                    label: "??????"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [r("p", [t._v(t._s(e.row.album))])]
                    }
                }])
            }), r("el-table-column", {
                attrs: {
                    label: "??????"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [r("el-button", {
                            attrs: {
                                circle: "",
                                icon: "el-icon-video-play",
                                type: "success"
                            },
                            on: {
                                click: function(r) {
                                    return t.handlePlay(e.$index, e.row)
                                }
                            }
                        }), r("el-button", {
                            attrs: {
                                circle: "",
                                icon: "el-icon-download"
                            },
                            on: {
                                click: function(r) {
                                    return t.handleDownload(e.row)
                                }
                            }
                        }), r("el-button", {
                            attrs: {
                                circle: "",
                                icon: "el-icon-delete",
                                type: "danger"
                            },
                            on: {
                                click: function(r) {
                                    return t.handleDelete(e.$index, e.row)
                                }
                            }
                        })]
                    }
                }])
            })], 1)
        }
          , G = []
          , Y = r("73ec")
          , X = {
            name: "PreviewTable",
            props: {
                tableData: {
                    type: Array,
                    required: !0
                },
                policy: {
                    type: Number,
                    required: !0
                }
            },
            methods: {
                handlePlay(t, e) {
                    this.$emit("play", e.file)
                },
                handleDelete(t, e) {
                    Object(Y["f"])(e),
                    this.tableData.splice(t, 1)
                },
                handleDownload(t) {
                    this.$emit("download", t)
                }
            }
        }
          , Z = X
          , tt = Object(V["a"])(Z, z, G, !1, null, "1458a804", null)
          , et = tt.exports
          , rt = r("9224")
          , nt = function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", [r("file-selector", {
                on: {
                    error: t.showFail,
                    success: t.showSuccess
                }
            }), r("div", {
                attrs: {
                    id: "app-control"
                }
            }, [r("el-row", {
                staticClass: "mb-3"
            }, [r("span", [t._v("?????????????????????")]), t._l(t.FilenamePolicies, (function(e) {
                return r("el-radio", {
                    key: e.key,
                    attrs: {
                        label: e.key
                    },
                    model: {
                        value: t.filename_policy,
                        callback: function(e) {
                            t.filename_policy = e
                        },
                        expression: "filename_policy"
                    }
                }, [t._v(" " + t._s(e.text) + " ")])
            }
            ))], 2), r("el-row", [r("el-button", {
                attrs: {
                    icon: "el-icon-download",
                    plain: ""
                },
                on: {
                    click: t.handleDownloadAll
                }
            }, [t._v("????????????")]), r("el-button", {
                attrs: {
                    icon: "el-icon-delete",
                    plain: "",
                    type: "danger"
                },
                on: {
                    click: t.handleDeleteAll
                }
            }, [t._v("????????????")]), r("el-tooltip", {
                staticClass: "item",
                attrs: {
                    effect: "dark",
                    placement: "top-start"
                }
            }, [r("div", {
                attrs: {
                    slot: "content"
                },
                slot: "content"
            }, [t.instant_save ? r("span", [t._v("????????????: " + t._s(t.dir ? "????????????????????????" : "?????????????????????"))]) : r("span", [t._v(" ?????????????????????????????????????????????????????????????????????????????????"), r("br"), t._v(" ?????????????????????????????????????????????????????????????????????????????? ")])]), r("el-checkbox", {
                staticClass: "ml-2",
                attrs: {
                    border: ""
                },
                model: {
                    value: t.instant_save,
                    callback: function(e) {
                        t.instant_save = e
                    },
                    expression: "instant_save"
                }
            }, [t._v("????????????")])], 1)], 1)], 1), r("audio", {
                attrs: {
                    autoplay: t.playing_auto,
                    src: t.playing_url,
                    controls: ""
                }
            }), r("PreviewTable", {
                attrs: {
                    policy: t.filename_policy,
                    "table-data": t.tableData
                },
                on: {
                    download: t.saveFile,
                    play: t.changePlaying
                }
            })], 1)
        }
          , it = []
          , at = {
            name: "Home",
            components: {
                FileSelector: Q,
                PreviewTable: et
            },
            data() {
                return {
                    tableData: [],
                    playing_url: "",
                    playing_auto: !1,
                    filename_policy: Y["e"].ArtistAndTitle,
                    instant_save: !1,
                    FilenamePolicies: Y["d"],
                    dir: null
                }
            },
            watch: {
                instant_save(t) {
                    t && this.showDirectlySave()
                }
            },
            methods: {
                async showSuccess(t) {
                    this.instant_save ? (await this.saveFile(t),
                    Object(Y["f"])(t)) : (this.tableData.push(t),
                    this.$notify.success({
                        title: "????????????",
                        message: "???????????? " + t.title,
                        duration: 3e3
                    }));
                    {
                        let e = [t.title, t.artist, t.album];
                        window._paq.push(["trackEvent", "Unlock", t.rawExt + "," + t.mime, JSON.stringify(e)])
                    }
                },
                showFail(t, e) {
                    console.error(t, e),
                    this.$notify.error({
                        title: "????????????",
                        message: t + "???" + e + '?????????<a target="_blank" href="https://github.com/ix64/unlock-music/wiki/????????????">????????????</a>',
                        dangerouslyUseHTMLString: !0,
                        duration: 6e3
                    }),
                    window._paq.push(["trackEvent", "Error", String(t), e])
                },
                changePlaying(t) {
                    this.playing_url = t,
                    this.playing_auto = !0
                },
                handleDeleteAll() {
                    this.tableData.forEach(t=>{
                        Object(Y["f"])(t)
                    }
                    ),
                    this.tableData = []
                },
                handleDownloadAll() {
                    let t = 0
                      , e = setInterval(()=>{
                        t < this.tableData.length ? (this.saveFile(this.tableData[t]),
                        t++) : clearInterval(e)
                    }
                    , 300)
                },
                async saveFile(t) {
                    this.dir ? (await Object(Y["b"])(t, this.filename_policy, this.dir),
                    this.$notify({
                        title: "????????????",
                        message: t.title,
                        position: "top-left",
                        type: "success",
                        duration: 3e3
                    })) : Object(Y["c"])(t, this.filename_policy)
                },
                async showDirectlySave() {
                    if (window.showDirectoryPicker) {
                        try {
                            await this.$confirm("??????????????????????????????????????????????????????????????????", "???????????????", {
                                confirmButtonText: "??????",
                                cancelButtonText: "?????????",
                                type: "warning",
                                center: !0
                            })
                        } catch (t) {
                            return void console.log(t)
                        }
                        try {
                            this.dir = await window.showDirectoryPicker(),
                            window.dir = this.dir,
                            window.f = await this.dir.getFileHandle("write-test.txt", {
                                create: !0
                            })
                        } catch (t) {
                            console.error(t)
                        }
                    }
                }
            }
        }
          , ot = at
          , st = Object(V["a"])(ot, nt, it, !1, null, null, null)
          , ct = st.exports
          , lt = r("97e5")
          , ut = {
            name: "app",
            components: {
                FileSelector: Q,
                PreviewTable: et,
                Home: ct
            },
            data() {
                return {
                    version: rt.version
                }
            },
            created() {
                this.$nextTick(()=>this.finishLoad())
            },
            methods: {
                async finishLoad() {
                    const t = document.getElementById("loader-mask");
                    let e;
                    t && t.remove();
                    try {
                        e = await Object(lt["a"])(this.version)
                    } catch (r) {
                        console.warn("check version info failed", r)
                    }
                    e && (e.HttpsFound || e.Found && "https:" !== window.location.protocol) ? this.$notify.warning({
                        title: "????????????",
                        message: `??????????????? v${e.Version}<br/>???????????????${e.Detail}<br/> <a target="_blank" href="${e.URL}">????????????</a>`,
                        dangerouslyUseHTMLString: !0,
                        duration: 15e3,
                        position: "top-left"
                    }) : this.$notify.info({
                        title: "????????????",
                        message: `????????????PWA??????????????????????????????<br/>???????????????${rt.updateInfo}<br/><a target="_blank" href="https://github.com/ix64/unlock-music/wiki/????????????">????????????</a>`,
                        dangerouslyUseHTMLString: !0,
                        duration: 1e4,
                        position: "top-left"
                    })
                }
            }
        }
          , ft = ut
          , dt = (r("5c0b"),
        Object(V["a"])(ft, $, I, !1, null, null, null))
          , ht = dt.exports
          , mt = r("9483");
        "https:" === window.location.protocol && Object(mt["a"])("service-worker.js", {
            ready() {
                console.log("App is being served from cache by a service worker.")
            },
            registered() {
                console.log("Service worker has been registered.")
            },
            cached() {
                console.log("Content has been cached for offline use.")
            },
            updatefound() {
                console.log("New content is downloading.")
            },
            updated() {
                console.log("New content is available."),
                window.location.reload()
            },
            offline() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error(t) {
                console.error("Error during service worker registration:", t)
            }
        }),
        R["default"].use(C.a),
        R["default"].use(F.a),
        R["default"].use(D.a),
        R["default"].use(S.a),
        R["default"].use(P.a),
        R["default"].use(U.a),
        R["default"].use(A.a),
        R["default"].use(k.a),
        R["default"].use(j.a),
        R["default"].use(y.a),
        R["default"].use(w.a),
        R["default"].use(p.a),
        R["default"].use(m.a),
        R["default"].use(d.a),
        R["default"].use(u.a),
        R["default"].use(c.a),
        R["default"].prototype.$notify = o.a,
        R["default"].prototype.$confirm = i.a.confirm,
        R["default"].config.productionTip = !1,
        new R["default"]({
            render: function(t) {
                return t(ht)
            }
        }).$mount("#app")
    },
    eaa5: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return U
        }
        ));
        var n = r("9ab4")
          , i = r("6d95")
          , a = r("cc74")
          , o = r("cb96");
        function s(t, e, r, i) {
            return void 0 === i && (i = !0),
            Object(n["a"])(this, void 0, Promise, (function() {
                var s, c, l, u, f, d, h;
                return Object(n["b"])(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return s = r,
                        i ? (l = Uint8Array.bind,
                        [4, Object(a["d"])(t)]) : [3, 2];
                    case 1:
                        c = new (l.apply(Uint8Array, [void 0, n.sent()])),
                        s = Object(a["i"])(c, r),
                        s !== r && (t = new Blob([c],{
                            type: a["a"][s]
                        })),
                        n.label = 2;
                    case 2:
                        return [4, Object(o["parseBlob"])(t)];
                    case 3:
                        return u = n.sent(),
                        f = Object(a["g"])(e, u.common.title, u.common.artist),
                        d = f.title,
                        h = f.artist,
                        [2, {
                            title: d,
                            artist: h,
                            ext: s,
                            album: u.common.album,
                            picture: Object(a["e"])(u),
                            file: URL.createObjectURL(t),
                            blob: t,
                            mime: a["a"][s]
                        }]
                    }
                }
                ))
            }
            ))
        }
        var c = [105, 102, 109, 116]
          , l = [254, 254, 254, 254]
          , u = {
            " WAV": ".wav",
            FLAC: ".flac",
            " MP3": ".mp3",
            " A4M": ".m4a"
        };
        function f(t, e, r) {
            return Object(n["a"])(this, void 0, Promise, (function() {
                var i, f, d, h, m, b, p, v, w, g, y, O, j, _, k;
                return Object(n["b"])(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return f = Uint8Array.bind,
                        [4, Object(a["d"])(t)];
                    case 1:
                        if (i = new (f.apply(Uint8Array, [void 0, n.sent()])),
                        Object(a["b"])(i, c) && Object(a["b"])(i.slice(8, 12), l))
                            return [3, 4];
                        if ("xm" !== r)
                            return [3, 2];
                        throw Error("???xm???????????????");
                    case 2:
                        return [4, s(t, e, r, !0)];
                    case 3:
                        return [2, n.sent()];
                    case 4:
                        if (d = (new TextDecoder).decode(i.slice(4, 8)),
                        !u.hasOwnProperty(d))
                            throw Error("?????????.xm????????????");
                        for (h = i[15],
                        m = i[12] | i[13] << 8 | i[14] << 16,
                        b = i.slice(16),
                        p = b.length,
                        v = m; v < p; ++v)
                            b[v] = b[v] - h ^ 255;
                        return w = u[d],
                        g = a["a"][w],
                        y = new Blob([b],{
                            type: g
                        }),
                        [4, Object(o["parseBlob"])(y)];
                    case 5:
                        return O = n.sent(),
                        "wav" === w && (console.info(O.common),
                        O.common.album = "",
                        O.common.artist = "",
                        O.common.title = ""),
                        j = Object(a["g"])(e, O.common.title, O.common.artist, -1 === e.indexOf("_") ? "-" : "_"),
                        _ = j.title,
                        k = j.artist,
                        [2, {
                            title: _,
                            artist: k,
                            ext: w,
                            mime: g,
                            album: O.common.album,
                            picture: Object(a["e"])(O),
                            file: URL.createObjectURL(y),
                            blob: y,
                            rawExt: "xm"
                        }]
                    }
                }
                ))
            }
            ))
        }
        var d = r("8850")
          , h = [5, 40, 188, 150, 233, 228, 90, 67, 145, 170, 189, 208, 122, 245, 54, 49]
          , m = [124, 213, 50, 235, 134, 2, 127, 75, 168, 175, 166, 142, 15, 255, 153, 20]
          , b = [37, 223, 232, 166, 117, 30, 117, 14, 47, 128, 243, 45, 184, 182, 227, 17, 0];
        function p(t, e, r) {
            var i;
            return Object(n["a"])(this, void 0, Promise, (function() {
                var s, c, l, u, f, d, p, y, O, j, _, k, x, A, T, U, M;
                return Object(n["b"])(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        if ("file:" === (null === (i = null === window || void 0 === window ? void 0 : window.location) || void 0 === i ? void 0 : i.protocol))
                            throw Error("????????? <a target='_blank' href='https://github.com/unlock-music/cli'>CLI??????</a> ????????????");
                        return c = Uint8Array.bind,
                        [4, Object(a["d"])(t)];
                    case 1:
                        if (s = new (c.apply(Uint8Array, [void 0, n.sent()])),
                        "vpr" === r) {
                            if (!Object(a["b"])(s, h))
                                throw Error("Not a valid vpr file!")
                        } else if (!Object(a["b"])(s, m))
                            throw Error("Not a valid kgm(a) file!");
                        if (l = new DataView(s.slice(16, 20).buffer),
                        u = l.getUint32(0, !0),
                        f = s.slice(u),
                        d = f.length,
                        f.byteLength > 1 << 26)
                            throw Error("???????????????????????? <a target='_blank' href='https://github.com/unlock-music/cli'>CLI??????</a> ????????????");
                        return p = new Uint8Array(17),
                        p.set(s.slice(28, 44), 0),
                        0 !== w.length ? [3, 3] : [4, g()];
                    case 2:
                        if (!n.sent())
                            throw Error("??????Kgm/Vpr Mask????????????");
                        n.label = 3;
                    case 3:
                        for (j = 0; j < d; j++)
                            y = p[j % 17] ^ f[j],
                            y ^= (15 & y) << 4,
                            O = v(j),
                            O ^= (15 & O) << 4,
                            f[j] = y ^ O;
                        if ("vpr" === r)
                            for (j = 0; j < d; j++)
                                f[j] ^= b[j % 17];
                        return _ = Object(a["i"])(f),
                        k = a["a"][_],
                        x = new Blob([f],{
                            type: k
                        }),
                        [4, Object(o["parseBlob"])(x)];
                    case 4:
                        return A = n.sent(),
                        T = Object(a["g"])(e, A.common.title, A.common.artist),
                        U = T.title,
                        M = T.artist,
                        [2, {
                            album: A.common.album,
                            picture: Object(a["e"])(A),
                            file: URL.createObjectURL(x),
                            blob: x,
                            ext: _,
                            mime: k,
                            title: U,
                            artist: M
                        }]
                    }
                }
                ))
            }
            ))
        }
        function v(t) {
            return y[t % 272] ^ w[t >> 4]
        }
        var w = new Uint8Array(0);
        function g() {
            return Object(n["a"])(this, void 0, Promise, (function() {
                var t, e, r;
                return Object(n["b"])(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return n.trys.push([0, 3, , 4]),
                        [4, fetch("./static/kgm.mask", {
                            method: "GET"
                        })];
                    case 1:
                        return t = n.sent(),
                        e = Uint8Array.bind,
                        [4, t.arrayBuffer()];
                    case 2:
                        return w = new (e.apply(Uint8Array, [void 0, n.sent()])),
                        [2, !0];
                    case 3:
                        return r = n.sent(),
                        console.error(r),
                        [2, !1];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        var y = [184, 213, 61, 178, 233, 175, 120, 140, 131, 51, 113, 81, 118, 160, 205, 55, 47, 62, 53, 141, 169, 190, 152, 183, 231, 140, 34, 206, 90, 97, 223, 104, 105, 137, 254, 165, 182, 222, 169, 119, 252, 200, 189, 189, 229, 109, 62, 90, 54, 239, 105, 78, 190, 225, 233, 102, 28, 243, 217, 2, 182, 242, 18, 155, 68, 208, 111, 185, 53, 137, 182, 70, 109, 115, 130, 6, 105, 193, 237, 215, 133, 194, 48, 223, 162, 98, 190, 121, 45, 98, 98, 61, 13, 126, 190, 72, 137, 35, 2, 160, 228, 213, 117, 81, 50, 2, 83, 253, 22, 58, 33, 59, 22, 15, 195, 178, 187, 179, 226, 186, 58, 61, 19, 236, 246, 1, 69, 132, 165, 112, 15, 147, 73, 12, 100, 205, 49, 213, 204, 76, 7, 1, 158, 0, 26, 35, 144, 191, 136, 30, 59, 171, 166, 62, 196, 115, 71, 16, 126, 59, 94, 188, 227, 0, 132, 255, 9, 212, 224, 137, 15, 91, 88, 112, 79, 251, 101, 216, 92, 83, 27, 211, 200, 198, 191, 239, 152, 176, 80, 79, 15, 234, 229, 131, 88, 140, 40, 44, 132, 103, 205, 208, 158, 71, 219, 39, 80, 202, 244, 99, 99, 232, 151, 127, 27, 75, 12, 194, 193, 33, 76, 204, 88, 245, 148, 82, 163, 243, 211, 224, 104, 244, 0, 35, 243, 94, 10, 123, 147, 221, 171, 18, 178, 19, 232, 132, 215, 167, 159, 15, 50, 76, 85, 29, 4, 54, 82, 220, 3, 243, 249, 78, 66, 233, 61, 97, 239, 124, 182, 179, 147, 80]
          , O = [121, 101, 101, 108, 105, 111, 110, 45, 107, 117, 119, 111, 45, 116, 109, 101]
          , j = "MoOtOiTvINGwd2E6n0E1i7L5t2IoOoNk";
        function _(t, e, r) {
            return Object(n["a"])(this, void 0, Promise, (function() {
                var r, i, c, l, u, f, d, h, m, b, p, v, w, g;
                return Object(n["b"])(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return i = Uint8Array.bind,
                        [4, Object(a["d"])(t)];
                    case 1:
                        return r = new (i.apply(Uint8Array, [void 0, n.sent()])),
                        Object(a["b"])(r, O) ? [3, 4] : "aac" !== Object(a["i"])(r) ? [3, 3] : [4, s(t, e, "aac", !1)];
                    case 2:
                        return [2, n.sent()];
                    case 3:
                        throw Error("not a valid kwm file");
                    case 4:
                        for (c = r.slice(24, 32),
                        l = k(c),
                        u = r.slice(1024),
                        f = u.length,
                        d = 0; d < f; ++d)
                            u[d] ^= l[d % 32];
                        return h = Object(a["i"])(u),
                        m = a["a"][h],
                        b = new Blob([u],{
                            type: m
                        }),
                        [4, Object(o["parseBlob"])(b)];
                    case 5:
                        return p = n.sent(),
                        v = Object(a["g"])(e, p.common.title, p.common.artist),
                        w = v.title,
                        g = v.artist,
                        [2, {
                            album: p.common.album,
                            picture: Object(a["e"])(p),
                            file: URL.createObjectURL(b),
                            blob: b,
                            mime: m,
                            title: w,
                            artist: g,
                            ext: h
                        }]
                    }
                }
                ))
            }
            ))
        }
        function k(t) {
            for (var e = new DataView(t.buffer), r = e.getBigUint64(0, !0).toString(), n = x(r), i = new Uint8Array(32), a = 0; a < 32; a++)
                i[a] = j.charCodeAt(a) ^ n.charCodeAt(a);
            return i
        }
        function x(t) {
            var e = t.length
              , r = t;
            return e > 32 ? r = t.slice(0, 32) : e < 32 && (r = t.padEnd(32, t)),
            r
        }
        var A = [0, 0, 0, 32, 102, 116, 121, 112];
        function T(t, e) {
            return Object(n["a"])(this, void 0, Promise, (function() {
                var r, i, o, c;
                return Object(n["b"])(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return i = Uint8Array.bind,
                        [4, Object(a["d"])(t)];
                    case 1:
                        for (r = new (i.apply(Uint8Array, [void 0, n.sent()])),
                        o = 0; o < 8; ++o)
                            r[o] = A[o];
                        return c = new Blob([r],{
                            type: "audio/mp4"
                        }),
                        [4, s(c, e, "m4a", !1)];
                    case 2:
                        return [2, n.sent()]
                    }
                }
                ))
            }
            ))
        }
        function U(t) {
            return Object(n["a"])(this, void 0, Promise, (function() {
                var e, r, a, o;
                return Object(n["b"])(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        switch (e = t.name.substring(t.name.lastIndexOf(".") + 1, t.name.length).toLowerCase(),
                        r = t.name.substring(0, t.name.lastIndexOf(".")),
                        o = e,
                        o) {
                        case "ncm":
                            return [3, 1];
                        case "kwm":
                            return [3, 3];
                        case "xm":
                            return [3, 5];
                        case "wav":
                            return [3, 5];
                        case "mp3":
                            return [3, 5];
                        case "flac":
                            return [3, 5];
                        case "m4a":
                            return [3, 5];
                        case "ogg":
                            return [3, 7];
                        case "tm0":
                            return [3, 9];
                        case "tm3":
                            return [3, 9];
                        case "qmc3":
                            return [3, 11];
                        case "qmc2":
                            return [3, 11];
                        case "qmc0":
                            return [3, 11];
                        case "qmcflac":
                            return [3, 11];
                        case "qmcogg":
                            return [3, 11];
                        case "tkm":
                            return [3, 11];
                        case "bkcmp3":
                            return [3, 11];
                        case "bkcflac":
                            return [3, 11];
                        case "mflac":
                            return [3, 11];
                        case "mgg":
                            return [3, 11];
                        case "666c6163":
                            return [3, 11];
                        case "6d7033":
                            return [3, 11];
                        case "6f6767":
                            return [3, 11];
                        case "6d3461":
                            return [3, 11];
                        case "776176":
                            return [3, 11];
                        case "tm2":
                            return [3, 13];
                        case "tm6":
                            return [3, 13];
                        case "vpr":
                            return [3, 15];
                        case "kgm":
                            return [3, 15];
                        case "kgma":
                            return [3, 15]
                        }
                        return [3, 17];
                    case 1:
                        return [4, Object(i["a"])(t.raw, r, e)];
                    case 2:
                        return a = n.sent(),
                        [3, 18];
                    case 3:
                        return [4, _(t.raw, r, e)];
                    case 4:
                        return a = n.sent(),
                        [3, 18];
                    case 5:
                        return [4, f(t.raw, r, e)];
                    case 6:
                        return a = n.sent(),
                        [3, 18];
                    case 7:
                        return [4, s(t.raw, r, e)];
                    case 8:
                        return a = n.sent(),
                        [3, 18];
                    case 9:
                        return [4, s(t.raw, r, "mp3")];
                    case 10:
                        return a = n.sent(),
                        [3, 18];
                    case 11:
                        return [4, Object(d["a"])(t.raw, r, e)];
                    case 12:
                        return a = n.sent(),
                        [3, 18];
                    case 13:
                        return [4, T(t.raw, r)];
                    case 14:
                        return a = n.sent(),
                        [3, 18];
                    case 15:
                        return [4, p(t.raw, r, e)];
                    case 16:
                        return a = n.sent(),
                        [3, 18];
                    case 17:
                        throw "????????????????????????";
                    case 18:
                        return a.rawExt || (a.rawExt = e),
                        a.rawFilename || (a.rawFilename = r),
                        console.log(a),
                        [2, a]
                    }
                }
                ))
            }
            ))
        }
    }
});
