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
    function o(u, a) { if (!n[u]) { if (!t[u]) { var s = "function" == typeof require && require; if (!a && s) return s(u, !0); if (i) return i(u, !0); var c = new Error("Cannot find module '" + u + "'"); throw c.code = "MODULE_NOT_FOUND", c } var l = n[u] = { exports: {} };
            t[u][0].call(l.exports, function(e) { var n = t[u][1][e]; return o(n ? n : e) }, l, l.exports, e, t, n, r) } return n[u].exports } for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) o(r[u]); return o }({ 1: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } } var o = e("./controller/ListController"),
            i = r(o);
        new i["default"] }, { "./controller/ListController": 4 }], 2: [function(e, t, n) { "use strict";
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
                    r = !1, null === o && (o = Function.prototype); var a = Object.getOwnPropertyDescriptor(o, i); if (void 0 !== a) { if ("value" in a) return a.value; var s = a.get; if (void 0 === s) return; return s.call(u) } var c = Object.getPrototypeOf(o); if (null === c) return;
                    e = c, t = i, n = u, r = !0, a = c = void 0 } },
            s = e("./Controller"),
            c = r(s),
            l = e("../model/MemoModel"),
            f = r(l),
            d = e("../libs/Router"),
            v = r(d),
            p = e("../libs/PubSub"),
            h = r(p),
            m = function(e) {
                function t() { var e = this;
                    o(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.memos = null, this.ctaView = document.querySelector(".js-cta"), this.view = document.querySelector(".js-list-view"), Promise.all([this.loadCSS("/styles/voicememo-list.css"), this.loadScript("/third_party/moment.min.js")]).then(function() { e.getMemosAndPopulate(), (0, h["default"])().then(function(t) { t.sub(f["default"].UPDATED, function() { e.getMemosAndPopulate() }) }), (0, h["default"])().then(function(t) { t.sub("list-covered", function() { e.view.classList.add("list-view--shrunk"), e.unsetTabIndexes() }) }), (0, h["default"])().then(function(t) { t.sub("list-uncovered", function() { e.view.classList.remove("list-view--shrunk"), e.setTabIndexes() }) }), (0, h["default"])().then(function(t) { t.sub("list-locked", function() { e.view.classList.add("list-view--locked"), e.unsetTabIndexes() }) }), (0, h["default"])().then(function(t) { t.sub("list-unlocked", function() { e.view.classList.remove("list-view--locked"), e.unsetTabIndexes() }) }) }) } return i(t, e), u(t, [{ key: "getMemosAndPopulate", value: function() { var e = this;
                        f["default"].getAll("time", f["default"].DESCENDING).then(function(t) { e.memos = t, e.populate(), e.setTabIndexes() }) } }, { key: "escapeHTML", value: function(e) { return null === e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") } }, { key: "populate", value: function() { var e = this; if (!this.memos.length) return void this.ctaView.classList.add("empty-set-cta--visible");
                        this.ctaView.classList.remove("empty-set-cta--visible"), this.removeEventListeners(); var t = '<ol class="list-view__contents">';
                        this.memos.forEach(function(n) { var r = moment(n.time).fromNow(),
                                o = e.escapeHTML(n.title),
                                i = e.escapeHTML(n.description);
                            t += '<li class="list-view__item" id="vm-' + n.url + '" data-url="' + n.url + '">\n                <div class="list-view__item-details">\n                  <div class="list-view__item-date">' + r + '</div>\n                  <div class="list-view__item-title">' + o + "</div>", null !== n.description && (t += '<div class="list-view__item-description">\n                  ' + i + "\n                </div>"), t += "</div></li>" }), t += "</ol>", this.view.innerHTML = t, this.addEventListeners() } }, { key: "setTabIndexes", value: function() { if (!this.view.classList.contains("list-view--locked") && !this.view.classList.contains("list-view--shrunk"))
                            for (var e = document.querySelectorAll(".list-view__item"), t = 0; t < e.length; t++) e[t].tabIndex = t + 2 } }, { key: "unsetTabIndexes", value: function() { for (var e = document.querySelectorAll(".list-view__item"), t = 0; t < e.length; t++) e[t].removeAttribute("tabindex") } }, { key: "addEventListeners", value: function() { for (var e = (document.querySelectorAll(".list-view__item-preview-toggle"), document.querySelectorAll(".list-view__item")), t = 0; t < e.length; t++) e[t].addEventListener("keyup", this.onListItemClick), e[t].addEventListener("click", this.onListItemClick) } }, { key: "removeEventListeners", value: function() { for (var e = document.querySelectorAll(".list-view__item"), t = 0; t < e.length; t++) e[t].removeEventListener("keyup", this.onListItemClick), e[t].removeEventListener("click", this.onListItemClick) } }, { key: "onListItemClick", value: function(e) { var t = this; "keyup" == e.type && 13 !== e.keyCode || (e.target.classList.add("active"), (0, v["default"])().then(function(e) { e.go("/details/" + t.dataset.url) })) } }, { key: "onToggleButtonPress", value: function() {} }]), t }(c["default"]);
        n["default"] = m, t.exports = n["default"] }, { "../libs/PubSub": 7, "../libs/Router": 8, "../model/MemoModel": 9, "./Controller": 3 }], 5: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i() { return "undefined" != typeof window.ConfigManagerInstance_ ? Promise.resolve(window.ConfigManagerInstance_) : (window.ConfigManagerInstance_ = new c, Promise.resolve(window.ConfigManagerInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var u = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        n["default"] = i; var a = e("../config/Config"),
            s = r(a),
            c = function() {
                function e() { o(this, e), this.config = s["default"] } return u(e, [{ key: "getStore", value: function(e) { return this.config_.stores[e] } }, { key: "config", set: function(e) { this.config_ = e }, get: function() { return this.config_ } }]), e }();
        t.exports = n["default"] }, { "../config/Config": 2 }], 6: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i() { return "undefined" != typeof window.DatabaseInstance_ ? Promise.resolve(window.DatabaseInstance_) : (window.DatabaseInstance_ = new c, Promise.resolve(window.DatabaseInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var u = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        n["default"] = i; var a = e("./ConfigManager"),
            s = r(a),
            c = function() {
                function e() { var t = this;
                    o(this, e), (0, s["default"])().then(function(e) { var n = e.config;
                        t.db_ = null, t.name_ = n.name, t.version_ = n.version, t.stores_ = n.stores }) } return u(e, [{ key: "getStore", value: function(e) { if (!this.stores_[e]) throw 'There is no store with name "' + e + '"'; return this.stores_[e] } }, { key: "open", value: function() { var e = this; return this.db_ ? Promise.resolve(this.db_) : new Promise(function(t, n) { var r = indexedDB.open(e.name_, e.version_);
                            r.onupgradeneeded = function(t) { e.db_ = t.target.result; for (var n, r = Object.keys(e.stores_), o = 0; o < r.length; o++) { if (n = r[o], e.db_.objectStoreNames.contains(n)) { if (!e.stores_[n].deleteOnUpgrade) continue;
                                        e.db_.deleteObjectStore(n) } var i = e.db_.createObjectStore(n, e.stores_[n].properties); if ("undefined" != typeof e.stores_[n].indexes)
                                        for (var u, a = e.stores_[n].indexes, s = Object.keys(a), c = 0; c < s.length; c++) u = s[c], i.createIndex(u, u, a[u]) } }, r.onsuccess = function(n) { e.db_ = n.target.result, t(e.db_) }, r.onerror = function(e) { n(e) } }) } }, { key: "close", value: function() { var e = this; return new Promise(function(t, n) { e.db_ || n("No database connection"), e.db_.close(), t(e.db_) }) } }, { key: "nuke", value: function() { var e = this; return new Promise(function(t, n) { console.log("Nuking... " + e.name_), e.close(); var r = indexedDB.deleteDatabase(e.name_);
                            r.onsuccess = function(e) { console.log("Nuked..."), t(e) }, r.onerror = function(e) { n(e) } }) } }, { key: "put", value: function(e, t, n) { return this.open().then(function(r) { return new Promise(function(o, i) { var u = r.transaction(e, "readwrite"),
                                    a = u.objectStore(e),
                                    s = a.put(t, n);
                                u.oncomplete = function(e) { o(s.result) }, u.onabort = u.onerror = function(e) { i(e) } }) }) } }, { key: "get", value: function(e, t) { return this.open().then(function(n) { return new Promise(function(r, o) { var i, u = n.transaction(e, "readonly"),
                                    a = u.objectStore(e);
                                u.oncomplete = function(e) { r(i.result) }, u.onabort = u.onerror = function(e) { o(e) }, i = a.get(t) }) }) } }, { key: "getAll", value: function(e, t, n) { return this.open().then(function(r) { return new Promise(function(o, i) { var u, a = r.transaction(e, "readonly"),
                                    s = a.objectStore(e); "string" != typeof n && (n = "next"), u = "string" == typeof t ? s.index(t).openCursor(null, n) : s.openCursor(); var c = [];
                                u.onsuccess = function(e) { var t = e.target.result;
                                    t ? (c.push({ key: t.key, value: t.value }), t["continue"]()) : o(c) }, u.onerror = function(e) { i(e) } }) }) } }, { key: "delete", value: function(e, t) { return this.open().then(function(n) { return new Promise(function(r, o) { var i = n.transaction(e, "readwrite"),
                                    u = i.objectStore(e);
                                i.oncomplete = function(e) { r(e) }, i.onabort = i.onerror = function(e) { o(e) }, u["delete"](t) }) }) } }, { key: "deleteAll", value: function(e) { return this.open().then(function(t) { return new Promise(function(n, r) { var o = t.transaction(e, "readwrite"),
                                    i = o.objectStore(e),
                                    u = i.clear();
                                u.onsuccess = function(e) { n(e) }, u.onerror = function(e) { r(e) } }) }) } }]), e }();
        t.exports = n["default"] }, { "./ConfigManager": 5 }], 7: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o() { return "undefined" != typeof window.PubSubInstance_ ? Promise.resolve(window.PubSubInstance_) : (window.PubSubInstance_ = new u, Promise.resolve(window.PubSubInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }();
        n["default"] = o; var u = function() {
            function e() { r(this, e), this.subs = {} } return i(e, [{ key: "sub", value: function(e, t) { this.subs[e] || (this.subs[e] = []), this.subs[e].push(t) } }, { key: "unsub", value: function(e, t) { if (this.subs[e]) { var n = this.subs.indexOf(t);
                        n !== -1 && this.subs.splice(n, 1) } } }, { key: "pub", value: function(e, t) { this.subs[e] && this.subs[e].forEach(function(e) { e(t) }) } }]), e }();
        t.exports = n["default"] }, {}], 8: [function(e, t, n) { "use strict";

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
        t.exports = n["default"] }, {}], 9: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) } Object.defineProperty(n, "__esModule", { value: !0 }); var u = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            a = function(e, t, n) { for (var r = !0; r;) { var o = e,
                        i = t,
                        u = n;
                    r = !1, null === o && (o = Function.prototype); var a = Object.getOwnPropertyDescriptor(o, i); if (void 0 !== a) { if ("value" in a) return a.value; var s = a.get; if (void 0 === s) return; return s.call(u) } var c = Object.getPrototypeOf(o); if (null === c) return;
                    e = c, t = i, n = u, r = !0, a = c = void 0 } },
            s = e("./Model"),
            c = r(s),
            l = function(e) {
                function t(e, n) { o(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, n), this.title = e.title || "Untitled Audio", this.description = e.description || null, this.url = e.url || t.makeURL(), this.audio = e.audio || null, this.volumeData = e.volumeData || null, this.time = e.time || Date.now(), this.transcript = e.transcript || null } return i(t, e), u(t, null, [{ key: "makeURL", value: function() { for (var e = "", t = 0; t < 16; t++) e += Number(Math.floor(16 * Math.random())).toString(16); return e } }, { key: "UPDATED", get: function() { return "MemoModel-updated" } }, { key: "storeName", get: function() { return "MemoModel" } }]), t }(c["default"]);
        n["default"] = l, t.exports = n["default"] }, { "./Model": 10 }], 10: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { "default": e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 }); var i = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
            u = e("../libs/Database"),
            a = r(u),
            s = e("../libs/ConfigManager"),
            c = r(s),
            l = function() {
                function e(t) { o(this, e), this.key = t } return i(e, [{ key: "put", value: function() { return this.constructor.put(this) } }, { key: "delete", value: function() { return this.constructor["delete"](this) } }], [{ key: "nuke", value: function() { return (0, a["default"])().then(function(e) { return e.close() }).then(function(e) { return e.nuke() }) } }, { key: "get", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call get on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.get(n.storeName, t) }).then(function(e) { return (0, c["default"])().then(function(r) { var o = r.getStore(n.storeName); if (e) { var i = t; return o.properties.keyPath && (i = void 0), new n(e, i) } }) }) } }, { key: "getAll", value: function(t, n) { var r = this; return this instanceof e && Promise.reject("Can't call getAll on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.getAll(r.storeName, t, n) }).then(function(e) { return (0, c["default"])().then(function(t) { var n = t.getStore(r.storeName),
                                    o = [],
                                    i = !0,
                                    u = !1,
                                    a = void 0; try { for (var s, c = e[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) { var l = s.value,
                                            f = l.key;
                                        n.properties.keyPath && (f = void 0), o.push(new r(l.value, f)) } } catch (d) { u = !0, a = d } finally { try {!i && c["return"] && c["return"]() } finally { if (u) throw a } } return o }) }) } }, { key: "put", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call put on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.put(n.storeName, t, t.key) }).then(function(e) { return (0, c["default"])().then(function(r) { var o = r.getStore(n.storeName),
                                    i = o.properties.keyPath; return i || (t.key = e), t }) }) } }, { key: "deleteAll", value: function() { var t = this; return this instanceof e && Promise.reject("Can't call deleteAll on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.deleteAll(t.storeName) })["catch"](function(e) { if ("NotFoundError" !== e.name) throw e }) } }, { key: "delete", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call delete on Model directly. Inherit first."), (0, c["default"])().then(function(e) { if (t instanceof n) { var r = e.getStore(n.storeName),
                                    o = r.properties.keyPath;
                                t = o ? t[o] : t.key } return (0, a["default"])().then(function(e) { return e["delete"](n.storeName, t) }) }) } }, { key: "ASCENDING", get: function() { return "next" } }, { key: "DESCENDING", get: function() { return "prev" } }, { key: "UPDATED", get: function() { return "Model-updated" } }, { key: "storeName", get: function() { return "Model" } }]), e }();
        n["default"] = l, t.exports = n["default"] }, { "../libs/ConfigManager": 5, "../libs/Database": 6 }] }, {}, [1]);