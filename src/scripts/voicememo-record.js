/*!
 * Copyright 2018 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
! function e(t, n, r) {
    function o(u, a) { if (!n[u]) { if (!t[u]) { var c = "function" == typeof require && require; if (!a && c) return c(u, !0); if (i) return i(u, !0); var s = new Error("Cannot find module '" + u + "'"); throw s.code = "MODULE_NOT_FOUND", s } var l = n[u] = { exports: {} };
            t[u][0].call(l.exports, function(e) { var n = t[u][1][e]; return o(n ? n : e) }, l, l.exports, e, t, n, r) } return n[u].exports } for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) o(r[u]); return o }({ 1: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } } var o = e("./controller/RecordController"),
            i = r(o);
        new i["default"] }, { "./controller/RecordController": 4 }], 2: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = { name: "voicememo", version: 1, stores: { MemoModel: { properties: { autoIncrement: !0, keyPath: "url" }, indexes: { time: { unique: !0 } } }, AppModel: { deleteOnUpgrade: !0, properties: { autoIncrement: !0 } } } };
        n["default"] = r, t.exports = n["default"] }, {}], 3: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            i = function() {
                function e() { r(this, e) } return o(e, [{ key: "loadScript", value: function(e) { return new Promise(function(t, n) { var r = document.createElement("script");
                            r.async = !0, r.src = e, r.onload = t, r.onerror = n, document.head.appendChild(r) }) } }, { key: "loadCSS", value: function(e) { return new Promise(function(t, n) { var r = new XMLHttpRequest;
                            r.open("GET", e), r.responseType = "text", r.onload = function(e) { if (200 == this.status) { var o = document.createElement("style");
                                    o.textContent = r.response, document.head.appendChild(o), t() } else n() }, r.send() }) } }]), e }();
        n["default"] = i, t.exports = n["default"] }, {}], 4: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var u = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = function(e, t, n) { for (var r = !0; r;) { var o = e,
                        i = t,
                        u = n;
                    r = !1, null === o && (o = Function.prototype); var a = Object.getOwnPropertyDescriptor(o, i); if (void 0 !== a) { if ("value" in a) return a.value; var c = a.get; if (void 0 === c) return; return c.call(u) } var s = Object.getPrototypeOf(o); if (null === s) return;
                    e = s, t = i, n = u, r = !0, a = s = void 0 } },
            c = e("./Controller"),
            s = r(c),
            l = e("../model/MemoModel"),
            d = r(l),
            f = e("../libs/PubSub"),
            h = r(f),
            v = e("../libs/Router"),
            p = r(v),
            y = e("../libs/Dialog"),
            m = r(y),
            g = e("../recording/MediaRecording"),
            b = r(g),
            w = function(e) {
                function t() { var e = this;
                    o(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.usesMediaRecorder = "MediaRecorder" in window, this.deletePendingRecording = !1, this.recording = !1, this.mediaRecording = null, this.analyser = null, this.view = document.querySelector(".js-record-view"), this.showViewButton = document.querySelector(".js-new-recording-btn"), this.volumeReadout = this.view.querySelector(".js-volume-readout"), this.volumeReadoutCtx = this.volumeReadout.getContext("2d"), this.volumeReadout.width = 4, this.volumeReadout.height = 67, this.drawVolumeReadout(), this.recordCancelButton = this.view.querySelector(".js-record-cancel-btn"), this.recordStartButton = this.view.querySelector(".js-record-start-btn"), this.recordStopButton = this.view.querySelector(".js-record-stop-btn"), this.recordStartButton.disabled = !1, this.recordStopButton.disabled = !0, this.recordStartButton.addEventListener("click", function() { e.startRecording() }), this.recordStopButton.addEventListener("click", function() { e.stopRecording() }), this.recordCancelButton.addEventListener("click", function() { e.deletePendingRecording = !0, (0, p["default"])().then(function(e) { e.go("/") }) }), this.loadScript("/third_party/Recorderjs/recorder.js"), this.loadCSS("/styles/voicememo-record.css").then(function() { e.view.classList.remove("hidden"), (0, p["default"])().then(function(t) { t.add("create", function(t) { return e.show(t) }, function() { return e.hide() }) }), e.showViewButton.addEventListener("click", function() {
                            (0, p["default"])().then(function(e) { e.go("/create") }) }), e.showViewButton.classList.contains("pending") && (e.showViewButton.classList.remove("pending"), (0, p["default"])().then(function(e) { e.go("/create") })) }), "MediaRecorder" in window && "undefined" == typeof MediaRecorder.canRecordMimeType && (document.querySelector(".record-view__warning").style.display = "none") } return i(t, e), u(t, [{ key: "show", value: function() { this.view.classList.add("record-view--visible"), this.recordStartButton.tabIndex = 1, this.recordStartButton.focus() } }, { key: "hide", value: function() { this.recordStartButton.tabIndex = -1, this.stopRecording(), this.mediaRecording = null, this.view.classList.remove("record-view--visible") } }, { key: "drawVolumeReadout", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                        this.volumeReadoutCtx.save(), this.volumeReadoutCtx.clearRect(0, 0, 4, 67), this.volumeReadoutCtx.translate(0, 63); for (var t, n = 0; n < 10; n++) t = "#D8D8D8", n < e && (t = "#673AB7"), this.volumeReadoutCtx.fillStyle = t, this.volumeReadoutCtx.beginPath(), this.volumeReadoutCtx.arc(2, 2, 2, 0, 2 * Math.PI), this.volumeReadoutCtx.closePath(), this.volumeReadoutCtx.fill(), this.volumeReadoutCtx.translate(0, -7);
                        this.volumeReadoutCtx.restore() } }, { key: "startRecording", value: function() { var e = this; if (!this.recording) { var t = [],
                                n = 1,
                                r = 0;
                            this.recording = !0, this.mediaRecording = new b["default"], this.mediaRecording.complete.then(function(e) { if (null !== e) { for (var r = 0; r < t.length; r++) t[r] /= n; var o = new d["default"]({ audio: e, volumeData: t });
                                    o.put().then(function() {
                                        (0, h["default"])().then(function(e) { e.pub(d["default"].UPDATED) }), (0, p["default"])().then(function(e) { e.go("/edit/" + o.url) }) }) } }, function(t) {
                                (0, m["default"])().then(function(e) { var t = !0; return e.show("Booooo!", "There is a problem getting access to the microphone.", t) }).then(function() { e.deletePendingRecording = !0, e.stopRecording() })["catch"](function() {}) }), setTimeout(function() { requestAnimationFrame(function() { e.recordStopButton.disabled = !1, e.recordStartButton.disabled = !0, e.recordStopButton.focus() }) }, 80), this.mediaRecording.analyser.then(function(o) { var i = 256,
                                    u = 32,
                                    a = i,
                                    c = a - u,
                                    s = new Uint8Array(i);
                                o.fftSize = i, o.smoothingTimeConstant = .3; var l = function d() { r = 0, o.getByteFrequencyData(s); for (var i = u; i < a; i++) r += s[i]; var l = r / c; return l > n && (n = l), t.push(l), e.drawVolumeReadout(l / 10), e.recording ? void requestAnimationFrame(d) : void e.drawVolumeReadout() };
                                requestAnimationFrame(l) }) } } }, { key: "stopRecording", value: function() { this.recording = !1, this.recordStopButton.disabled = !0, this.recordStartButton.disabled = !1, this.mediaRecording && (this.mediaRecording.stop(this.deletePendingRecording), this.deletePendingRecording = !1) } }]), t }(s["default"]);
        n["default"] = w, t.exports = n["default"] }, { "../libs/Dialog": 7, "../libs/PubSub": 8, "../libs/Router": 9, "../model/MemoModel": 10, "../recording/MediaRecording": 12, "./Controller": 3 }], 5: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i() { return "undefined" != typeof window.ConfigManagerInstance_ ? Promise.resolve(window.ConfigManagerInstance_) : (window.ConfigManagerInstance_ = new s, Promise.resolve(window.ConfigManagerInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var u = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        n["default"] = i; var a = e("../config/Config"),
            c = r(a),
            s = function() {
                function e() { o(this, e), this.config = c["default"] } return u(e, [{ key: "getStore", value: function(e) { return this.config_.stores[e] } }, { key: "config", set: function(e) { this.config_ = e }, get: function() { return this.config_ } }]), e }();
        t.exports = n["default"] }, { "../config/Config": 2 }], 6: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i() { return "undefined" != typeof window.DatabaseInstance_ ? Promise.resolve(window.DatabaseInstance_) : (window.DatabaseInstance_ = new s, Promise.resolve(window.DatabaseInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var u = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        n["default"] = i; var a = e("./ConfigManager"),
            c = r(a),
            s = function() {
                function e() { var t = this;
                    o(this, e), (0, c["default"])().then(function(e) { var n = e.config;
                        t.db_ = null, t.name_ = n.name, t.version_ = n.version, t.stores_ = n.stores }) } return u(e, [{ key: "getStore", value: function(e) { if (!this.stores_[e]) throw 'There is no store with name "' + e + '"'; return this.stores_[e] } }, { key: "open", value: function() { var e = this; return this.db_ ? Promise.resolve(this.db_) : new Promise(function(t, n) { var r = indexedDB.open(e.name_, e.version_);
                            r.onupgradeneeded = function(t) { e.db_ = t.target.result; for (var n, r = Object.keys(e.stores_), o = 0; o < r.length; o++) { if (n = r[o], e.db_.objectStoreNames.contains(n)) { if (!e.stores_[n].deleteOnUpgrade) continue;
                                        e.db_.deleteObjectStore(n) } var i = e.db_.createObjectStore(n, e.stores_[n].properties); if ("undefined" != typeof e.stores_[n].indexes)
                                        for (var u, a = e.stores_[n].indexes, c = Object.keys(a), s = 0; s < c.length; s++) u = c[s], i.createIndex(u, u, a[u]) } }, r.onsuccess = function(n) { e.db_ = n.target.result, t(e.db_) }, r.onerror = function(e) { n(e) } }) } }, { key: "close", value: function() { var e = this; return new Promise(function(t, n) { e.db_ || n("No database connection"), e.db_.close(), t(e.db_) }) } }, { key: "nuke", value: function() { var e = this; return new Promise(function(t, n) { console.log("Nuking... " + e.name_), e.close(); var r = indexedDB.deleteDatabase(e.name_);
                            r.onsuccess = function(e) { console.log("Nuked..."), t(e) }, r.onerror = function(e) { n(e) } }) } }, { key: "put", value: function(e, t, n) { return this.open().then(function(r) { return new Promise(function(o, i) { var u = r.transaction(e, "readwrite"),
                                    a = u.objectStore(e),
                                    c = a.put(t, n);
                                u.oncomplete = function(e) { o(c.result) }, u.onabort = u.onerror = function(e) { i(e) } }) }) } }, { key: "get", value: function(e, t) { return this.open().then(function(n) { return new Promise(function(r, o) { var i, u = n.transaction(e, "readonly"),
                                    a = u.objectStore(e);
                                u.oncomplete = function(e) { r(i.result) }, u.onabort = u.onerror = function(e) { o(e) }, i = a.get(t) }) }) } }, { key: "getAll", value: function(e, t, n) { return this.open().then(function(r) { return new Promise(function(o, i) { var u, a = r.transaction(e, "readonly"),
                                    c = a.objectStore(e); "string" != typeof n && (n = "next"), u = "string" == typeof t ? c.index(t).openCursor(null, n) : c.openCursor(); var s = [];
                                u.onsuccess = function(e) { var t = e.target.result;
                                    t ? (s.push({ key: t.key, value: t.value }), t["continue"]()) : o(s) }, u.onerror = function(e) { i(e) } }) }) } }, { key: "delete", value: function(e, t) { return this.open().then(function(n) { return new Promise(function(r, o) { var i = n.transaction(e, "readwrite"),
                                    u = i.objectStore(e);
                                i.oncomplete = function(e) { r(e) }, i.onabort = i.onerror = function(e) { o(e) }, u["delete"](t) }) }) } }, { key: "deleteAll", value: function(e) { return this.open().then(function(t) { return new Promise(function(n, r) { var o = t.transaction(e, "readwrite"),
                                    i = o.objectStore(e),
                                    u = i.clear();
                                u.onsuccess = function(e) { n(e) }, u.onerror = function(e) { r(e) } }) }) } }]), e }();
        t.exports = n["default"] }, { "./ConfigManager": 5 }], 7: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o() { return "undefined" != typeof window.DialogInstance_ ? Promise.resolve(window.DialogInstance_) : (window.DialogInstance_ = new u, Promise.resolve(window.DialogInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        n["default"] = o; var u = function() {
            function e() { r(this, e), this.view = document.querySelector(".js-dialog"), this.title = this.view.querySelector(".js-title"), this.message = this.view.querySelector(".js-message"), this.cancelButton = this.view.querySelector(".js-cancel"), this.okayButton = this.view.querySelector(".js-okay") } return i(e, [{ key: "show", value: function(e, t, n) { var r = this; return this.title.textContent = e, this.message.textContent = t, this.view.classList.add("dialog-view--visible"), n ? this.cancelButton.classList.add("hidden") : this.cancelButton.classList.remove("hidden"), new Promise(function(e, t) { var n = function() { r.cancelButton.removeEventListener("click", o), r.okayButton.removeEventListener("click", i), r.view.classList.remove("dialog-view--visible") },
                            o = function(e) { n(), t() },
                            i = function(t) { n(), e() };
                        r.cancelButton.addEventListener("click", o), r.okayButton.addEventListener("click", i) }) } }]), e }();
        t.exports = n["default"] }, {}], 8: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o() { return "undefined" != typeof window.PubSubInstance_ ? Promise.resolve(window.PubSubInstance_) : (window.PubSubInstance_ = new u, Promise.resolve(window.PubSubInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        n["default"] = o; var u = function() {
            function e() { r(this, e), this.subs = {} } return i(e, [{ key: "sub", value: function(e, t) { this.subs[e] || (this.subs[e] = []), this.subs[e].push(t) } }, { key: "unsub", value: function(e, t) { if (this.subs[e]) { var n = this.subs.indexOf(t);
                        n !== -1 && this.subs.splice(n, 1) } } }, { key: "pub", value: function(e, t) { this.subs[e] && this.subs[e].forEach(function(e) { e(t) }) } }]), e }();
        t.exports = n["default"] }, {}], 9: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o() { return "undefined" != typeof window.RouterInstance_ ? Promise.resolve(window.RouterInstance_) : (window.RouterInstance_ = new u, Promise.resolve(window.RouterInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        n["default"] = o; var u = function() {
            function e() { var t = this;
                r(this, e), this.routes = {}, this.currentAction = null, this.loader = document.querySelector(".loader"), window.addEventListener("popstate", function(e) { t.onPopState(e) }), this.manageState() } return i(e, [{ key: "add", value: function(e, t, n, r) { var o = this,
                        i = e.split("/"),
                        u = i.shift(); if (this.routes[u]) throw "A handler already exists for this action: " + u;
                    this.routes[u] = { "in": t, out: n, update: r }, requestAnimationFrame(function() { o.manageState() && document.body.classList.remove("deeplink") }) } }, { key: "remove", value: function(e) { var t = e.split("/"),
                        n = t.shift();
                    this.routes[n] && delete this.routes[n] } }, { key: "manageState", value: function() { var e = document.location.pathname.replace(/^\//, ""),
                        t = e.split("/"),
                        n = t.shift(),
                        r = t.join("/"); if ("" === n && (n = "_root"), document.body.classList.contains("app-deeplink") && document.body.classList.remove("app-deeplink"), this.loader.classList.add("hidden"), this.currentAction === this.routes[n]) return "function" == typeof this.currentAction.update && (this.currentAction.update(r), !0); if (!this.routes[n]) return this.currentAction && this.currentAction.out(), this.currentAction = null, document.body.focus(), !1; var o = this.routes[n]["in"](r) || 0; return this.currentAction && (0 === o ? this.currentAction.out() : setTimeout(this.currentAction.out, o)), this.currentAction = this.routes[n], !0 } }, { key: "go", value: function(e) { var t = this;
                    e !== window.location.pathname && (history.pushState(void 0, "", e), requestAnimationFrame(function() { t.manageState() })) } }, { key: "onPopState", value: function(e) { var t = this;
                    e.preventDefault(), requestAnimationFrame(function() { t.manageState() }) } }]), e }();
        t.exports = n["default"] }, {}], 10: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var u = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = function(e, t, n) { for (var r = !0; r;) { var o = e,
                        i = t,
                        u = n;
                    r = !1, null === o && (o = Function.prototype); var a = Object.getOwnPropertyDescriptor(o, i); if (void 0 !== a) { if ("value" in a) return a.value; var c = a.get; if (void 0 === c) return; return c.call(u) } var s = Object.getPrototypeOf(o); if (null === s) return;
                    e = s, t = i, n = u, r = !0, a = s = void 0 } },
            c = e("./Model"),
            s = r(c),
            l = function(e) {
                function t(e, n) { o(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, n), this.title = e.title || "Untitled Audio", this.description = e.description || null, this.url = e.url || t.makeURL(), this.audio = e.audio || null, this.volumeData = e.volumeData || null, this.time = e.time || Date.now(), this.transcript = e.transcript || null } return i(t, e), u(t, null, [{ key: "makeURL", value: function() { for (var e = "", t = 0; t < 16; t++) e += Number(Math.floor(16 * Math.random())).toString(16); return e } }, { key: "UPDATED", get: function() { return "MemoModel-updated" } }, { key: "storeName", get: function() { return "MemoModel" } }]), t }(s["default"]);
        n["default"] = l, t.exports = n["default"] }, { "./Model": 11 }], 11: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            u = e("../libs/Database"),
            a = r(u),
            c = e("../libs/ConfigManager"),
            s = r(c),
            l = function() {
                function e(t) { o(this, e), this.key = t } return i(e, [{ key: "put", value: function() { return this.constructor.put(this) } }, { key: "delete", value: function() { return this.constructor["delete"](this) } }], [{ key: "nuke", value: function() { return (0, a["default"])().then(function(e) { return e.close() }).then(function(e) { return e.nuke() }) } }, { key: "get", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call get on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.get(n.storeName, t) }).then(function(e) { return (0, s["default"])().then(function(r) { var o = r.getStore(n.storeName); if (e) { var i = t; return o.properties.keyPath && (i = void 0), new n(e, i) } }) }) } }, { key: "getAll", value: function(t, n) { var r = this; return this instanceof e && Promise.reject("Can't call getAll on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.getAll(r.storeName, t, n) }).then(function(e) { return (0, s["default"])().then(function(t) { var n = t.getStore(r.storeName),
                                    o = [],
                                    i = !0,
                                    u = !1,
                                    a = void 0; try { for (var c, s = e[Symbol.iterator](); !(i = (c = s.next()).done); i = !0) { var l = c.value,
                                            d = l.key;
                                        n.properties.keyPath && (d = void 0), o.push(new r(l.value, d)) } } catch (f) { u = !0, a = f } finally { try {!i && s["return"] && s["return"]() } finally { if (u) throw a } } return o }) }) } }, { key: "put", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call put on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.put(n.storeName, t, t.key) }).then(function(e) { return (0, s["default"])().then(function(r) { var o = r.getStore(n.storeName),
                                    i = o.properties.keyPath; return i || (t.key = e), t }) }) } }, { key: "deleteAll", value: function() { var t = this; return this instanceof e && Promise.reject("Can't call deleteAll on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.deleteAll(t.storeName) })["catch"](function(e) { if ("NotFoundError" !== e.name) throw e }) } }, { key: "delete", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call delete on Model directly. Inherit first."), (0, s["default"])().then(function(e) { if (t instanceof n) { var r = e.getStore(n.storeName),
                                    o = r.properties.keyPath;
                                t = o ? t[o] : t.key } return (0, a["default"])().then(function(e) { return e["delete"](n.storeName, t) }) }) } }, { key: "ASCENDING", get: function() { return "next" } }, { key: "DESCENDING", get: function() { return "prev" } }, { key: "UPDATED", get: function() { return "Model-updated" } }, { key: "storeName", get: function() { return "Model" } }]), e }();
        n["default"] = l, t.exports = n["default"] }, { "../libs/ConfigManager": 5, "../libs/Database": 6 }], 12: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            i = function() {
                function e() { r(this, e), this.usesMediaRecorder = "MediaRecorder" in window && "undefined" == typeof MediaRecorder.canRecordMimeType, this.recorder = this.usesMediaRecorder ? new u : new a } return o(e, [{ key: "stop", value: function() { var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
                        this.recorder.stop(e) } }, { key: "complete", get: function() { return this.recorder.complete } }, { key: "analyser", get: function() { return this.recorder.analyser } }]), e }();
        n["default"] = i; var u = function() {
                function e() { var t = this;
                    r(this, e), console.log("Using MediaRecorder API."), this.deletePendingRecording = !1, this.recorder = null, this.stream = null, this.recordedData = [], this.audioContext = new AudioContext, this.sourceNode = void 0, this.complete = new Promise(function(e, n) { var r = { video: !1, audio: !0 },
                            o = function(r) { t.stream = r, t.sourceNode = t.audioContext.createMediaStreamSource(r), t.recorder = new MediaRecorder(r, { mimeType: "audio/webm" }), t.recorder.addEventListener("error", function(e) { n(e) }), t.recorder.addEventListener("dataavailable", function(e) { "undefined" != typeof e.data && 0 !== e.data.size && t.recordedData.push(e.data) }), t.recorder.addEventListener("stop", function(n) { var o = r.getTracks();
                                    o.forEach(function(e) { return e.stop() }); var i = new Blob(t.recordedData, { type: "audio/webm" });
                                    t.deletePendingRecording && (t.deletePendingRecording = !1, i = null), e(i) }), t.recorder.start(10) };
                        navigator.getUserMedia(r, o, function(e) { return n(e) }) }) } return o(e, [{ key: "stop", value: function(e) { "recording" === this.recorder.state && (this.deletePendingRecording = e, this.recorder.stop()) } }, { key: "analyser", get: function() { var e = this; return new Promise(function(t, n) { var r = 200,
                                o = function i() { if ("undefined" == typeof e.sourceNode) return r--, 0 === r ? n() : setTimeout(i, 100); var o = e.audioContext.createAnalyser();
                                    e.sourceNode.connect(o), t(o) };
                            o() }) } }]), e }(),
            a = function() {
                function e() { var t = this;
                    r(this, e), console.log("Using legacy recorder."), this.recorder = null, this.deletePendingRecording = !1, this.complete = new Promise(function(e, n) { t.recorder = new Recorder({ workerPath: "third_party/Recorderjs/recorderWorker.js", recordOpus: !1 }), t.recorder.addEventListener("dataAvailable", function(n) { var r = n.detail;
                            t.deletePendingRecording && (t.deletePendingRecording = !1, r = null), t.killStream(), e(r) }), t.recorder.addEventListener("streamReady", function() { t.recorder.start() }), t.recorder.addEventListener("streamError", function(e) { n(e) }) }) } return o(e, [{ key: "stop", value: function(e) { this.deletePendingRecording = e, this.recorder.stop() } }, { key: "killStream", value: function() { if (this.recorder.stream) { var e = this.recorder.stream.getTracks();
                            e.forEach(function(e) { return e.stop() }) } } }, { key: "analyser", get: function() { var e = this; return new Promise(function(t, n) { var r = 200,
                                o = function i() { if ("undefined" == typeof e.recorder.sourceNode) return r--, 0 === r ? n() : setTimeout(i, 100); var o = e.recorder.audioContext.createAnalyser();
                                    e.recorder.sourceNode.connect(o), t(o) };
                            o() }) } }]), e }();
        t.exports = n["default"] }, {}] }, {}, [1]);