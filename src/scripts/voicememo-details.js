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
! function e(t, n, i) {
    function o(a, s) { if (!n[a]) { if (!t[a]) { var l = "function" == typeof require && require; if (!s && l) return l(a, !0); if (r) return r(a, !0); var u = new Error("Cannot find module '" + a + "'"); throw u.code = "MODULE_NOT_FOUND", u } var c = n[a] = { exports: {} };
            t[a][0].call(c.exports, function(e) { var n = t[a][1][e]; return o(n ? n : e) }, c, c.exports, e, t, n, i) } return n[a].exports } for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]); return o }({
    1: [function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { "default": e } } var o = e("./controller/DetailsController"),
            r = i(o),
            a = e("./controller/EditController"),
            s = i(a);
        new r["default"], new s["default"] }, { "./controller/DetailsController": 4, "./controller/EditController": 5 }],
    2: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = { name: "voicememo", version: 1, stores: { MemoModel: { properties: { autoIncrement: !0, keyPath: "url" }, indexes: { time: { unique: !0 } } }, AppModel: { deleteOnUpgrade: !0, properties: { autoIncrement: !0 } } } };
        n["default"] = i, t.exports = n["default"] }, {}],
    3: [function(e, t, n) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
            r = function() {
                function e() { i(this, e) } return o(e, [{ key: "loadScript", value: function(e) { return new Promise(function(t, n) { var i = document.createElement("script");
                            i.async = !0, i.src = e, i.onload = t, i.onerror = n, document.head.appendChild(i) }) } }, { key: "loadCSS", value: function(e) { return new Promise(function(t, n) { var i = new XMLHttpRequest;
                            i.open("GET", e), i.responseType = "text", i.onload = function(e) { if (200 == this.status) { var o = document.createElement("style");
                                    o.textContent = i.response, document.head.appendChild(o), t() } else n() }, i.send() }) } }]), e }();
        n["default"] = r, t.exports = n["default"] }, {}],
    4: [function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var a = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
            s = function(e, t, n) { for (var i = !0; i;) { var o = e,
                        r = t,
                        a = n;
                    i = !1, null === o && (o = Function.prototype); var s = Object.getOwnPropertyDescriptor(o, r); if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(a) } var u = Object.getPrototypeOf(o); if (null === u) return;
                    e = u, t = r, n = a, i = !0, s = u = void 0 } },
            l = e("./Controller"),
            u = i(l),
            c = e("../model/MemoModel"),
            d = i(c),
            h = e("../libs/Router"),
            v = i(h),
            f = e("../libs/PubSub"),
            p = i(f),
            m = e("../libs/Dialog"),
            b = i(m),
            y = e("../libs/Toaster"),
            w = i(y),
            g = function(e) {
                function t() { var e = this;
                    o(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.memos = null, this.header = document.querySelector(".header"), this.view = document.querySelector(".js-details-view"), this.reveal = this.view.querySelector(".js-box-reveal"), this.panel = this.view.querySelector(".js-details-panel"), this.panelHeader = this.view.querySelector(".js-details-panel-header"), this.underPanel = document.querySelector(".js-underpanel"), this.backButton = this.view.querySelector(".js-back"), this.downloadButton = this.view.querySelector(".js-download"), this.editButton = this.view.querySelector(".js-edit"), this.deleteButton = this.view.querySelector(".js-delete"), this.title = this.view.querySelector(".js-title"), this.audioPlaybackButton = this.view.querySelector(".js-playback-toggle"), this.description = this.view.querySelector(".js-description"), this.audio = document.createElement("audio"), this.audioPlaying = !1, this.memoId = null, this.volumeData = null, this.progressCanvas = this.view.querySelector(".js-playback-progress"), this.progressCtx = this.progressCanvas.getContext("2d"), this.progressWidth = 0, this.progressHeight = 0, this.waveCanvas = this.view.querySelector(".js-wave"), this.waveCtx = this.waveCanvas.getContext("2d"), this.waveWidth = 0, this.waveHeight = 0, this.playbackStarted = 0, this.renderPlaybackCanvasBound = this.renderPlaybackCanvas.bind(this), this.loadCSS("/styles/voicememo-details.css").then(function() { e.view.classList.remove("hidden"), (0, v["default"])().then(function(t) { e.configureWaveCanvas(), window.addEventListener("resize", function() { e.configureWaveCanvas(), e.renderWaveCanvas() }), t.add("details", function(t) { return e.show(t) }, function() { return e.hide() }, function(t) { return e.update(t) }) }) }), this.onAudioEndedBound = this.onAudioEnded.bind(this), this.onAudioPlaybackButtonClickBound = this.onAudioPlaybackButtonClick.bind(this), this.onEditButtonClickBound = this.onEditButtonClick.bind(this), this.onBackButtonClickBound = this.onBackButtonClick.bind(this), this.onDeleteButtonClickBound = this.onDeleteButtonClick.bind(this) } return r(t, e), a(t, [{ key: "releaseAudioURL", value: function() { this.audio && (URL.revokeObjectURL(this.audio.src), this.audio.removeAttribute("src"), this.downloadButton.removeAttribute("href")) } }, { key: "update", value: function(e) { this.releaseAudioURL(), this.memoId = e, this.populateDetails(e) } }, { key: "show", value: function(e) { var t = this,
                            n = window.matchMedia("(min-width: 600px)").matches,
                            i = window.matchMedia("(min-width: 960px)").matches,
                            o = document.querySelector(".edit-view__panel--visible");
                        this.addEventListeners(), this.setTabIndexes(), this.view.classList.add("details-view--visible"), (0, p["default"])().then(function(e) { e.pub("list-covered") }), this.populateDetails(e).then(function() { t.memoId = e; var r = document.querySelector("#vm-" + e); if (t.reveal.classList.add("details-view__box-reveal--visible"), null === r || null !== o) return t.panel.style.transform = "", t.reveal.classList.add("details-view__box-reveal--expanded"), t.panel.classList.add("details-view__panel--visible"), t.underPanel.classList.add("view-underpanel--visible"), void t.renderWaveCanvas(); var a = document.querySelectorAll(".list-view__item"),
                                s = r.getBoundingClientRect(),
                                l = t.reveal.getBoundingClientRect();
                            i ? (t.panel.style.transform = "translateY(50px)", t.reveal.style.transform = "translateY(50px)") : n ? (t.panel.style.transform = "translateX(105%)", t.reveal.style.transform = "translateX(105%)") : (t.panel.style.transform = "translateY(" + s.top + "px)", t.reveal.style.transform = "translateY(" + s.top + "px) scale(1, " + s.height / l.height), setTimeout(function() { requestAnimationFrame(function() { var e = function d(e) { t.renderWaveCanvas(), t.reveal.removeEventListener("transitionend", d) }; if (t.reveal.addEventListener("transitionend", e), t.header.classList.add("header--collapsed"), t.reveal.classList.add("details-view__box-reveal--animatable"), t.reveal.classList.add("details-view__box-reveal--expanded"), t.reveal.style.transform = "", t.panel.classList.add("details-view__panel--visible"), t.panel.classList.add("details-view__panel--animatable"), t.panel.style.transform = "", t.underPanel.classList.add("view-underpanel--visible"), !n)
                                        for (var i = !0, o = s.top, u = l.height - s.top - s.height, c = 0; c < a.length; c++) a[c].classList.add("list-view__item--animatable"), a[c] !== r ? i ? a[c].style.transform = "translateY(-" + o + "px)" : a[c].style.transform = "translateY(" + u + "px)" : i = !1 }) }, 5) }) } }, { key: "hide", value: function() { var e = this,
                            t = window.matchMedia("(min-width: 600px)").matches,
                            n = window.matchMedia("(min-width: 960px)").matches;
                        this.view.classList.remove("details-view--visible"), this.removeEventListeners(), this.unsetTabIndexes(), this.releaseAudioURL(), this.header.classList.remove("header--collapsed"), this.panel.classList.remove("details-view__panel--visible"), this.reveal.classList.remove("details-view__box-reveal--expanded"), this.reveal.classList.add("details-view__box-reveal--animatable"), requestAnimationFrame(function() { var i = e.memoId,
                                o = document.querySelector("#vm-" + i),
                                r = e.reveal.getBoundingClientRect(),
                                a = document.querySelectorAll(".list-view__item"),
                                s = null;
                            s = o ? o.getBoundingClientRect() : r, n ? (e.panel.style.transform = "translateY(50px)", e.reveal.style.transform = "translateY(50px)") : t ? (e.panel.style.transform = "translateX(105%)", e.reveal.style.transform = "translateX(105%)") : (e.panel.style.transform = "translateY(" + s.top + "px)", e.reveal.style.transform = "translateY(" + s.top + "px) scale(1, " + s.height / r.height); var l = function d(t) { e.reveal.removeEventListener("transitionend", d), e.reveal.addEventListener("transitionend", u), e.reveal.classList.remove("details-view__box-reveal--visible"), e.waveCanvas.classList.remove("details-view__wave--visible") },
                                u = function h(t) { e.panel.classList.remove("details-view__panel--animatable"), e.reveal.removeEventListener("transitionend", h), e.reveal.classList.remove("details-view__box-reveal--animatable"), e.reveal.style.transform = "", e.panel.style.transform = "", (0, p["default"])().then(function(e) { e.pub("list-uncovered") }) }; if (e.underPanel.classList.remove("view-underpanel--visible"), e.reveal.addEventListener("transitionend", l), e.memoId = null, n && e.reveal.classList.remove("details-view__box-reveal--visible"), !t)
                                for (var c = 0; c < a.length; c++) a[c].classList.add("list-view__item--animatable"), a[c].style.transform = "" }) } }, { key: "configureWaveCanvas", value: function() { var e = window.devicePixelRatio || 1;
                        this.waveWidth = this.waveCanvas.parentElement.offsetWidth, this.waveHeight = this.waveCanvas.parentElement.offsetHeight, this.waveCanvas.width = this.waveWidth * e, this.waveCanvas.height = this.waveHeight * e, this.waveCanvas.style.width = this.waveWidth + "px", this.waveCanvas.style.height = this.waveHeight + "px", this.waveCtx.scale(e, e) } }, { key: "configurePlaybackCanvas", value: function() { var e = window.devicePixelRatio || 1;
                        this.progressWidth = this.progressCanvas.parentElement.offsetWidth, this.progressHeight = this.progressCanvas.parentElement.offsetHeight, this.progressCanvas.width = this.progressWidth * e, this.progressCanvas.height = this.progressHeight * e, this.progressCanvas.style.width = this.progressWidth + "px", this.progressCanvas.style.height = this.progressHeight + "px", this.progressCtx.scale(e, e) } }, { key: "renderWaveCanvas", value: function() { if (this.volumeData) { this.waveCanvas.classList.add("details-view__wave--visible"); var e = 50,
                                t = this.waveHeight - 2 * e;
                            this.waveCtx.clearRect(0, 0, this.waveWidth, this.waveHeight), this.waveCtx.save(), this.waveCtx.translate(0, .5 * this.waveHeight), this.waveCtx.beginPath(), this.waveCtx.globalAlpha = .2; for (var n = 0; n < this.volumeData.length; n++) { var i = n / this.volumeData.length * this.waveWidth,
                                    o = this.volumeData[n] * t * .5;
                                o = Math.max(1, o), this.waveCtx.lineTo(i, -o) } for (n = this.volumeData.length - 1; n >= 0; n--) { var i = n / this.volumeData.length * this.waveWidth,
                                    o = this.volumeData[n] * t * .5;
                                o = Math.max(1, o), this.waveCtx.lineTo(i, o) } this.waveCtx.closePath(), this.waveCtx.fill(), this.waveCtx.restore() } } }, { key: "renderPlaybackCanvas", value: function() { var e = 1e3 * this.audio.duration,
                            t = (Date.now() - this.playbackStarted) / e,
                            n = .5 * -Math.PI;
                        this.progressCtx.clearRect(0, 0, this.progressWidth, this.progressHeight), this.progressCtx.fillStyle = "#F8BBD0", this.progressCtx.save(), this.progressCtx.translate(.5 * this.progressWidth, .5 * this.progressHeight), this.progressCtx.beginPath(), this.progressCtx.arc(0, 0, .502 * this.progressWidth, n, n + t * Math.PI * 2), this.progressCtx.lineTo(0, 0), this.progressCtx.closePath(), this.progressCtx.fill(), this.progressCtx.globalCompositeOperation = "destination-out", this.progressCtx.beginPath(), this.progressCtx.arc(0, 0, .43 * this.progressWidth, 0, 2 * Math.PI), this.progressCtx.closePath(), this.progressCtx.fill(), this.progressCtx.restore(), this.audioPlaying && requestAnimationFrame(this.renderPlaybackCanvasBound) } }, { key: "populateDetails", value: function(e) { var t = this; return d["default"].get(e).then(function(e) { t.title.textContent = e.title, t.description.textContent = e.description || "No description", t.volumeData = e.volumeData, t.audio.src = URL.createObjectURL(e.audio), t.downloadButton.href = t.audio.src, t.downloadButton.download = e.title, t.configurePlaybackCanvas(), t.panel.appendChild(t.audio) })["catch"](function(e) {
                            (0, v["default"])().then(function(e) { e.go("/") }) }) } }, { key: "onAudioEnded", value: function() { this.audio.currentTime = 0, this.audio.pause(), this.audioPlaying = !1, this.playbackStarted = Date.now(), this.renderPlaybackCanvas() } }, { key: "onAudioPlaybackButtonClick", value: function(e) { this.audio && (this.audioPlaying ? (this.audio.pause(), this.audio.currentTime = 0) : this.audio.play(), this.audioPlaying = !this.audioPlaying, this.playbackStarted = Date.now(), this.renderPlaybackCanvasBound()) } }, { key: "onEditButtonClick", value: function(e) { var t = this;
                        (0, v["default"])().then(function(e) { e.go("/edit/" + t.memoId) }) } }, { key: "onBackButtonClick", value: function(e) {
                        (0, v["default"])().then(function(e) { e.go("/") }) } }, { key: "onDeleteButtonClick", value: function() { var e = this;
                        (0, b["default"])().then(function(e) { return e.show("Delete this audio?", "Are u sure sweety?") }).then(function() { d["default"]["delete"](e.memoId).then(function() {
                                (0, p["default"])().then(function(e) { e.pub(d["default"].UPDATED) }), (0, v["default"])().then(function(e) { e.go("/") }), (0, w["default"])().then(function(e) { e.toast("Memo deleted.") }) }) })["catch"](function(e) { console.warn(e) }) } }, { key: "addEventListeners", value: function() { this.audio.addEventListener("ended", this.onAudioEndedBound), this.audioPlaybackButton.addEventListener("click", this.onAudioPlaybackButtonClickBound), this.editButton.addEventListener("click", this.onEditButtonClickBound), this.backButton.addEventListener("click", this.onBackButtonClickBound), this.deleteButton.addEventListener("click", this.onDeleteButtonClickBound) } }, { key: "removeEventListeners", value: function() { this.audio.removeEventListener("ended", this.onAudioEndedBound), this.audioPlaybackButton.removeEventListener("click", this.onAudioPlaybackButtonClickBound), this.editButton.removeEventListener("click", this.onEditButtonClickBound), this.backButton.removeEventListener("click", this.onBackButtonClickBound), this.deleteButton.removeEventListener("click", this.onDeleteButtonClickBound) } }, { key: "setTabIndexes", value: function() { this.audioPlaybackButton.tabIndex = 1, this.backButton.tabIndex = 2, this.deleteButton.tabIndex = 3, this.editButton.tabIndex = 4, this.downloadButton.tabIndex = 5, this.audioPlaybackButton.focus() } }, { key: "unsetTabIndexes", value: function() { this.audioPlaybackButton.tabIndex = -1, this.backButton.tabIndex = -1, this.deleteButton.tabIndex = -1, this.editButton.tabIndex = -1, this.downloadButton.tabIndex = -1 } }]), t }(u["default"]);
        n["default"] = g, t.exports = n["default"] }, { "../libs/Dialog": 8, "../libs/PubSub": 9, "../libs/Router": 10, "../libs/Toaster": 11, "../model/MemoModel": 12, "./Controller": 3 }],
    5: [function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var a = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
            s = function(e, t, n) { for (var i = !0; i;) { var o = e,
                        r = t,
                        a = n;
                    i = !1, null === o && (o = Function.prototype); var s = Object.getOwnPropertyDescriptor(o, r); if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(a) } var u = Object.getPrototypeOf(o); if (null === u) return;
                    e = u, t = r, n = a, i = !0, s = u = void 0 } },
            l = e("./Controller"),
            u = i(l),
            c = e("../model/MemoModel"),
            d = i(c),
            h = e("../libs/Router"),
            v = i(h),
            f = e("../libs/PubSub"),
            p = i(f),
            m = e("../libs/Toaster"),
            b = i(m),
            y = function(e) {
                function t() { var e = this;
                    o(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.memo = null, this.header = document.querySelector(".header"), this.view = document.querySelector(".js-edit-view"), this.reveal = document.querySelector(".js-circular-reveal"), this.panel = this.view.querySelector(".js-edit-panel"), this.underPanel = document.querySelector(".js-underpanel"), this.backButton = this.view.querySelector(".js-back"), this.submitButton = this.view.querySelector(".js-done"), this.form = this.view.querySelector(".js-edit-view__edit-form"), this.formTitle = this.form.querySelector("#edit-view__edit-form-title"), this.formTitleLabel = this.form.querySelector(".edit-view__edit-form-title-label"), this.formDescription = this.form.querySelector("#edit-view__edit-form-description"), this.formDescriptionLabel = this.form.querySelector(".edit-view__edit-form-description-label"), this.loadCSS("/styles/voicememo-edit.css").then(function() { e.view.classList.remove("hidden"), (0, v["default"])().then(function(t) { t.add("edit", function(t) { return e.show(t) }, function() { return e.hide() }) }) }), this.saveAndCloseBound = this.saveAndClose.bind(this), this.cancelAndCloseBound = this.cancelAndClose.bind(this), this.onFormTitleInputBound = this.onFormTitleInput.bind(this), this.onFormDescriptionInputBound = this.onFormDescriptionInput.bind(this) } return r(t, e), a(t, [{ key: "show", value: function(e) { var t = this,
                            n = window.matchMedia("(min-width: 600px)").matches; if (this.addEventListeners(), this.setTabIndexes(), !e) return void(0, v["default"])().then(function(e) { e.go("/") });
                        (0, p["default"])().then(function(e) { e.pub("list-locked") }), this.underPanel.classList.add("view-underpanel--locked"); var i = 420,
                            o = null,
                            r = null,
                            a = null,
                            s = document.querySelector(".details-view__panel--visible .js-edit"),
                            l = document.querySelector(".record-view--visible .js-record-stop-btn");
                        s ? (r = document.querySelector(".details-view__panel").getBoundingClientRect(), o = s.getBoundingClientRect()) : !n && l && (o = l.getBoundingClientRect()); var a = this.reveal.getBoundingClientRect(),
                            u = Math.sqrt(a.width * a.width + a.height * a.height),
                            c = .5 * a.width,
                            h = .5 * a.height; return o || (this.reveal.style.transform = "translate(-50%, -50%)\n              translate(" + c + "px, " + h + "px) scale(1)", i = 0), setTimeout(function() { t.header.classList.add("header--collapsed") }, i + 50), d["default"].get(e).then(function(e) { if (t.memo = e, t.formTitle.value = e.title, t.formDescription.textContent = e.description, t.onFormTitleInput(), t.onFormDescriptionInput(), o) { var n = o.left + .5 * o.width,
                                    i = o.top + .5 * o.height;
                                r && (n -= r.left, i -= r.top), t.reveal.classList.add("edit-view__circular-reveal--visible"), t.reveal.style.width = t.reveal.style.height = u + "px", t.reveal.style.transform = "translate(-50%, -50%)\n            translate(" + n + "px, " + i + "px) scale(0.001)"; var a = function s(e) { t.reveal.classList.remove("edit-view__circular-reveal--visible"), t.reveal.removeEventListener("transitionend", s) };
                                setTimeout(function() { requestAnimationFrame(function() { t.reveal.classList.add("edit-view__circular-reveal--animatable"), t.reveal.style.transform = "translate(-50%, -50%)\n              translate(" + c + "px, " + h + "px) scale(1)", t.reveal.addEventListener("transitionend", a) }) }, 200) } "Untitled Audio" === t.memo.title && (t.formTitle.focus(), t.formTitle.select()), t.showPanelAndForm() }), i } }, { key: "showPanelAndForm", value: function() { this.panel.classList.add("edit-view__panel--visible"), this.form.classList.add("edit-view__edit-form--animatable"), this.form.classList.add("edit-view__edit-form--visible") } }, { key: "hide", value: function() { var e = this;
                        (0, p["default"])().then(function(e) { e.pub("list-unlocked") }), this.underPanel.classList.remove("view-underpanel--locked"), this.removeEventListeners(), this.unsetTabIndexes(); var t = document.querySelector(".details-view__panel"),
                            n = t.querySelector(".js-edit"),
                            i = t.getBoundingClientRect(),
                            o = n.getBoundingClientRect(),
                            r = this.reveal.getBoundingClientRect(),
                            a = Math.sqrt(r.width * r.width + r.height * r.height),
                            s = o.left + .5 * o.width,
                            l = o.top + .5 * o.height;
                        s -= i.left, l -= i.top; var u = function c() { e.reveal.removeEventListener("transitionend", c), e.header.classList.remove("header--collapsed"), e.reveal.style.transform = "", e.reveal.classList.remove("edit-view__circular-reveal--visible"), e.reveal.classList.remove("edit-view__circular-reveal--animatable"), e.reveal.style.width = "100%", e.reveal.style.height = "100%", e.memo = null };
                        this.reveal.style.width = this.reveal.style.height = a + "px", this.reveal.classList.remove("edit-view__circular-reveal--animatable"), this.reveal.classList.add("edit-view__circular-reveal--visible"), this.form.classList.remove("edit-view__edit-form--animatable"), this.form.classList.remove("edit-view__edit-form--visible"), this.panel.classList.remove("edit-view__panel--animatable"), this.panel.classList.remove("edit-view__panel--visible"), setTimeout(function() { e.reveal.classList.add("edit-view__circular-reveal--animatable"), e.reveal.style.transform = "translate(-50%, -50%)\n        translate(" + s + "px, " + l + "px) scale(0.001)" }, 300), this.reveal.addEventListener("transitionend", u) } }, { key: "saveAndClose", value: function(e) { var t = this;
                        e && e.preventDefault(), this.memo.title = this.formTitle.value, this.memo.description = this.formDescription.textContent, "" === this.memo.title.trim() && (this.memo.title = "Untitled Audio"), this.memo.put().then(function() {
                            (0, p["default"])().then(function(e) { e.pub(d["default"].UPDATED) }), (0, v["default"])().then(function(e) { e.go("/details/" + t.memo.url) }), (0, b["default"])().then(function(e) { e.toast("audio saved.") }) }) } }, { key: "cancelAndClose", value: function(e) { var t = this;
                        e.preventDefault(), (0, v["default"])().then(function(e) { e.go("/details/" + t.memo.url) }) } }, { key: "onFormTitleInput", value: function() { 0 === this.formTitle.value.length ? this.formTitleLabel.classList.remove("edit-view__edit-form-title-label--collapsed") : this.formTitleLabel.classList.add("edit-view__edit-form-title-label--collapsed") } }, { key: "onFormDescriptionInput", value: function() { 0 === this.formDescription.textContent.length ? this.formDescriptionLabel.classList.remove("edit-view__edit-form-description-label--collapsed") : this.formDescriptionLabel.classList.add("edit-view__edit-form-description-label--collapsed") } }, { key: "addEventListeners", value: function() { this.form.addEventListener("submit", this.saveAndCloseBound), this.backButton.addEventListener("click", this.cancelAndCloseBound), this.formTitle.addEventListener("input", this.onFormTitleInputBound), this.formDescription.addEventListener("input", this.onFormDescriptionInputBound) } }, { key: "removeEventListeners", value: function() { this.form.removeEventListener("submit", this.saveAndCloseBound), this.backButton.removeEventListener("click", this.cancelAndCloseBound), this.formTitle.removeEventListener("input", this.onFormTitleInputBound), this.formDescription.removeEventListener("input", this.onFormDescriptionInputBound) } }, { key: "setTabIndexes", value: function() { this.formTitle.focus(), this.formTitle.tabIndex = 1, this.formDescription.tabIndex = 2, this.submitButton.tabIndex = 3, this.backButton.tabIndex = 4 } }, { key: "unsetTabIndexes", value: function() { this.formTitle.tabIndex = -1, this.formDescription.tabIndex = -1, this.submitButton.tabIndex = -1, this.backButton.tabIndex = -1 } }]), t }(u["default"]);
        n["default"] = y, t.exports = n["default"] }, { "../libs/PubSub": 9, "../libs/Router": 10, "../libs/Toaster": 11, "../model/MemoModel": 12, "./Controller": 3 }],
    6: [function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r() { return "undefined" != typeof window.ConfigManagerInstance_ ? Promise.resolve(window.ConfigManagerInstance_) : (window.ConfigManagerInstance_ = new u, Promise.resolve(window.ConfigManagerInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
        n["default"] = r; var s = e("../config/Config"),
            l = i(s),
            u = function() {
                function e() { o(this, e), this.config = l["default"] } return a(e, [{ key: "getStore", value: function(e) { return this.config_.stores[e] } }, { key: "config", set: function(e) { this.config_ = e }, get: function() { return this.config_ } }]), e }();
        t.exports = n["default"] }, { "../config/Config": 2 }],
    7: [function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r() { return "undefined" != typeof window.DatabaseInstance_ ? Promise.resolve(window.DatabaseInstance_) : (window.DatabaseInstance_ = new u, Promise.resolve(window.DatabaseInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var a = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
        n["default"] = r; var s = e("./ConfigManager"),
            l = i(s),
            u = function() {
                function e() { var t = this;
                    o(this, e), (0, l["default"])().then(function(e) { var n = e.config;
                        t.db_ = null, t.name_ = n.name, t.version_ = n.version, t.stores_ = n.stores }) } return a(e, [{ key: "getStore", value: function(e) { if (!this.stores_[e]) throw 'There is no store with name "' + e + '"'; return this.stores_[e] } }, { key: "open", value: function() { var e = this; return this.db_ ? Promise.resolve(this.db_) : new Promise(function(t, n) { var i = indexedDB.open(e.name_, e.version_);
                            i.onupgradeneeded = function(t) { e.db_ = t.target.result; for (var n, i = Object.keys(e.stores_), o = 0; o < i.length; o++) { if (n = i[o], e.db_.objectStoreNames.contains(n)) { if (!e.stores_[n].deleteOnUpgrade) continue;
                                        e.db_.deleteObjectStore(n) } var r = e.db_.createObjectStore(n, e.stores_[n].properties); if ("undefined" != typeof e.stores_[n].indexes)
                                        for (var a, s = e.stores_[n].indexes, l = Object.keys(s), u = 0; u < l.length; u++) a = l[u], r.createIndex(a, a, s[a]) } }, i.onsuccess = function(n) { e.db_ = n.target.result, t(e.db_) }, i.onerror = function(e) { n(e) } }) } }, { key: "close", value: function() { var e = this; return new Promise(function(t, n) { e.db_ || n("No database connection"), e.db_.close(), t(e.db_) }) } }, { key: "nuke", value: function() { var e = this; return new Promise(function(t, n) { console.log("Nuking... " + e.name_), e.close(); var i = indexedDB.deleteDatabase(e.name_);
                            i.onsuccess = function(e) { console.log("Nuked..."), t(e) }, i.onerror = function(e) { n(e) } }) } }, { key: "put", value: function(e, t, n) { return this.open().then(function(i) { return new Promise(function(o, r) { var a = i.transaction(e, "readwrite"),
                                    s = a.objectStore(e),
                                    l = s.put(t, n);
                                a.oncomplete = function(e) { o(l.result) }, a.onabort = a.onerror = function(e) { r(e) } }) }) } }, { key: "get", value: function(e, t) { return this.open().then(function(n) { return new Promise(function(i, o) { var r, a = n.transaction(e, "readonly"),
                                    s = a.objectStore(e);
                                a.oncomplete = function(e) { i(r.result) }, a.onabort = a.onerror = function(e) { o(e) }, r = s.get(t) }) }) } }, { key: "getAll", value: function(e, t, n) { return this.open().then(function(i) { return new Promise(function(o, r) { var a, s = i.transaction(e, "readonly"),
                                    l = s.objectStore(e); "string" != typeof n && (n = "next"), a = "string" == typeof t ? l.index(t).openCursor(null, n) : l.openCursor(); var u = [];
                                a.onsuccess = function(e) { var t = e.target.result;
                                    t ? (u.push({ key: t.key, value: t.value }), t["continue"]()) : o(u) }, a.onerror = function(e) { r(e) } }) }) } }, { key: "delete", value: function(e, t) { return this.open().then(function(n) { return new Promise(function(i, o) { var r = n.transaction(e, "readwrite"),
                                    a = r.objectStore(e);
                                r.oncomplete = function(e) { i(e) }, r.onabort = r.onerror = function(e) { o(e) }, a["delete"](t) }) }) } }, { key: "deleteAll", value: function(e) { return this.open().then(function(t) { return new Promise(function(n, i) { var o = t.transaction(e, "readwrite"),
                                    r = o.objectStore(e),
                                    a = r.clear();
                                a.onsuccess = function(e) { n(e) }, a.onerror = function(e) { i(e) } }) }) } }]), e }();
        t.exports = n["default"] }, { "./ConfigManager": 6 }],
    8: [function(e, t, n) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o() { return "undefined" != typeof window.DialogInstance_ ? Promise.resolve(window.DialogInstance_) : (window.DialogInstance_ = new a, Promise.resolve(window.DialogInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
        n["default"] = o; var a = function() {
            function e() { i(this, e), this.view = document.querySelector(".js-dialog"), this.title = this.view.querySelector(".js-title"), this.message = this.view.querySelector(".js-message"), this.cancelButton = this.view.querySelector(".js-cancel"), this.okayButton = this.view.querySelector(".js-okay") } return r(e, [{ key: "show", value: function(e, t, n) { var i = this; return this.title.textContent = e, this.message.textContent = t, this.view.classList.add("dialog-view--visible"), n ? this.cancelButton.classList.add("hidden") : this.cancelButton.classList.remove("hidden"), new Promise(function(e, t) { var n = function() { i.cancelButton.removeEventListener("click", o), i.okayButton.removeEventListener("click", r), i.view.classList.remove("dialog-view--visible") },
                            o = function(e) { n(), t() },
                            r = function(t) { n(), e() };
                        i.cancelButton.addEventListener("click", o), i.okayButton.addEventListener("click", r) }) } }]), e }();
        t.exports = n["default"] }, {}],
    9: [function(e, t, n) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o() { return "undefined" != typeof window.PubSubInstance_ ? Promise.resolve(window.PubSubInstance_) : (window.PubSubInstance_ = new a, Promise.resolve(window.PubSubInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
        n["default"] = o; var a = function() {
            function e() { i(this, e), this.subs = {} } return r(e, [{ key: "sub", value: function(e, t) { this.subs[e] || (this.subs[e] = []), this.subs[e].push(t) } }, { key: "unsub", value: function(e, t) { if (this.subs[e]) { var n = this.subs.indexOf(t);
                        n !== -1 && this.subs.splice(n, 1) } } }, { key: "pub", value: function(e, t) { this.subs[e] && this.subs[e].forEach(function(e) { e(t) }) } }]), e }();
        t.exports = n["default"] }, {}],
    10: [function(e, t, n) {
        "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o() { return "undefined" != typeof window.RouterInstance_ ? Promise.resolve(window.RouterInstance_) : (window.RouterInstance_ = new a, Promise.resolve(window.RouterInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 });
        var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
        n["default"] = o;
        var a = function() {
            function e() { var t = this;
                i(this, e), this.routes = {}, this.currentAction = null, this.loader = document.querySelector(".loader"), window.addEventListener("popstate", function(e) { t.onPopState(e) }), this.manageState() }
            return r(e, [{ key: "add", value: function(e, t, n, i) { var o = this,
                        r = e.split("/"),
                        a = r.shift(); if (this.routes[a]) throw "A handler already exists for this action: " + a;
                    this.routes[a] = { "in": t, out: n, update: i }, requestAnimationFrame(function() { o.manageState() && document.body.classList.remove("deeplink") }) } }, { key: "remove", value: function(e) { var t = e.split("/"),
                        n = t.shift();
                    this.routes[n] && delete this.routes[n] } }, {
                key: "manageState",
                value: function() {
                    var e = document.location.pathname.replace(/^\//, ""),
                        t = e.split("/"),
                        n = t.shift(),
                        i = t.join("/");
                    if ("" === n && (n = "_root"), document.body.classList.contains("app-deeplink") && document.body.classList.remove("app-deeplink"), this.loader.classList.add("hidden"), this.currentAction === this.routes[n]) return "function" == typeof this.currentAction.update && (this.currentAction.update(i), !0);
                    if (!this.routes[n]) return this.currentAction && this.currentAction.out(),
                        this.currentAction = null, document.body.focus(), !1;
                    var o = this.routes[n]["in"](i) || 0;
                    return this.currentAction && (0 === o ? this.currentAction.out() : setTimeout(this.currentAction.out, o)), this.currentAction = this.routes[n], !0
                }
            }, { key: "go", value: function(e) { var t = this;
                    e !== window.location.pathname && (history.pushState(void 0, "", e), requestAnimationFrame(function() { t.manageState() })) } }, { key: "onPopState", value: function(e) { var t = this;
                    e.preventDefault(), requestAnimationFrame(function() { t.manageState() }) } }]), e
        }();
        t.exports = n["default"]
    }, {}],
    11: [function(e, t, n) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o() { return "undefined" != typeof window.ToasterInstance_ ? Promise.resolve(window.ToasterInstance_) : (window.ToasterInstance_ = new a, Promise.resolve(window.ToasterInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
        n["default"] = o; var a = function() {
            function e() { i(this, e), this.view = document.querySelector(".toast-view"), this.hideTimeout = 0, this.hideBound = this.hide.bind(this) } return r(e, [{ key: "toast", value: function(e) { this.view.textContent = e, this.view.classList.add("toast-view--visible"), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(this.hideBound, 3e3) } }, { key: "hide", value: function() { this.view.classList.remove("toast-view--visible") } }]), e }();
        t.exports = n["default"] }, {}],
    12: [function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var a = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
            s = function(e, t, n) { for (var i = !0; i;) { var o = e,
                        r = t,
                        a = n;
                    i = !1, null === o && (o = Function.prototype); var s = Object.getOwnPropertyDescriptor(o, r); if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(a) } var u = Object.getPrototypeOf(o); if (null === u) return;
                    e = u, t = r, n = a, i = !0, s = u = void 0 } },
            l = e("./Model"),
            u = i(l),
            c = function(e) {
                function t(e, n) { o(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, n), this.title = e.title || "Untitled Audio", this.description = e.description || null, this.url = e.url || t.makeURL(), this.audio = e.audio || null, this.volumeData = e.volumeData || null, this.time = e.time || Date.now(), this.transcript = e.transcript || null } return r(t, e), a(t, null, [{ key: "makeURL", value: function() { for (var e = "", t = 0; t < 16; t++) e += Number(Math.floor(16 * Math.random())).toString(16); return e } }, { key: "UPDATED", get: function() { return "MemoModel-updated" } }, { key: "storeName", get: function() { return "MemoModel" } }]), t }(u["default"]);
        n["default"] = c, t.exports = n["default"] }, { "./Model": 13 }],
    13: [function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var r = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
            a = e("../libs/Database"),
            s = i(a),
            l = e("../libs/ConfigManager"),
            u = i(l),
            c = function() {
                function e(t) { o(this, e), this.key = t } return r(e, [{ key: "put", value: function() { return this.constructor.put(this) } }, { key: "delete", value: function() { return this.constructor["delete"](this) } }], [{ key: "nuke", value: function() { return (0, s["default"])().then(function(e) { return e.close() }).then(function(e) { return e.nuke() }) } }, { key: "get", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call get on Model directly. Inherit first."), (0, s["default"])().then(function(e) { return e.get(n.storeName, t) }).then(function(e) { return (0, u["default"])().then(function(i) { var o = i.getStore(n.storeName); if (e) { var r = t; return o.properties.keyPath && (r = void 0), new n(e, r) } }) }) } }, { key: "getAll", value: function(t, n) { var i = this; return this instanceof e && Promise.reject("Can't call getAll on Model directly. Inherit first."), (0, s["default"])().then(function(e) { return e.getAll(i.storeName, t, n) }).then(function(e) { return (0, u["default"])().then(function(t) { var n = t.getStore(i.storeName),
                                    o = [],
                                    r = !0,
                                    a = !1,
                                    s = void 0; try { for (var l, u = e[Symbol.iterator](); !(r = (l = u.next()).done); r = !0) { var c = l.value,
                                            d = c.key;
                                        n.properties.keyPath && (d = void 0), o.push(new i(c.value, d)) } } catch (h) { a = !0, s = h } finally { try {!r && u["return"] && u["return"]() } finally { if (a) throw s } } return o }) }) } }, { key: "put", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call put on Model directly. Inherit first."), (0, s["default"])().then(function(e) { return e.put(n.storeName, t, t.key) }).then(function(e) { return (0, u["default"])().then(function(i) { var o = i.getStore(n.storeName),
                                    r = o.properties.keyPath; return r || (t.key = e), t }) }) } }, { key: "deleteAll", value: function() { var t = this; return this instanceof e && Promise.reject("Can't call deleteAll on Model directly. Inherit first."), (0, s["default"])().then(function(e) { return e.deleteAll(t.storeName) })["catch"](function(e) { if ("NotFoundError" !== e.name) throw e }) } }, { key: "delete", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call delete on Model directly. Inherit first."), (0, u["default"])().then(function(e) { if (t instanceof n) { var i = e.getStore(n.storeName),
                                    o = i.properties.keyPath;
                                t = o ? t[o] : t.key } return (0, s["default"])().then(function(e) { return e["delete"](n.storeName, t) }) }) } }, { key: "ASCENDING", get: function() { return "next" } }, { key: "DESCENDING", get: function() { return "prev" } }, { key: "UPDATED", get: function() { return "Model-updated" } }, { key: "storeName", get: function() { return "Model" } }]), e }();
        n["default"] = c, t.exports = n["default"] }, { "../libs/ConfigManager": 6, "../libs/Database": 7 }]
}, {}, [1]);