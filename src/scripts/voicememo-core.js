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
! function e(t, n, o) {
    function r(u, a) {
        if (!n[u]) {
            if (!t[u]) { var s = "function" == typeof require && require; if (!a && s) return s(u, !0); if (i) return i(u, !0); var c = new Error("Cannot find module '" + u + "'"); throw c.code = "MODULE_NOT_FOUND", c }
            var l = n[u] = { exports: {} };
            t[u][0].call(l.exports, function(e) { var n = t[u][1][e]; return r(n ? n : e) }, l, l.exports, e, t, n, o)
        }
        return n[u].exports
    }
    for (var i = "function" == typeof require && require, u = 0; u < o.length; u++) r(o[u]);
    return r
}({
    1: [function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { "default": e } }
        var r = e("./controller/AppController"),
            i = o(r);
        new i["default"]
    }, { "./controller/AppController": 3 }],
    2: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o = { name: "voicememo", version: 1, stores: { MemoModel: { properties: { autoIncrement: !0, keyPath: "url" }, indexes: { time: { unique: !0 } } }, AppModel: { deleteOnUpgrade: !0, properties: { autoIncrement: !0 } } } };
        n["default"] = o, t.exports = n["default"]
    }, {}],
    3: [function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { "default": e } }

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
            }(),
            a = function(e, t, n) {
                for (var o = !0; o;) {
                    var r = e,
                        i = t,
                        u = n;
                    o = !1, null === r && (r = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(r, i);
                    if (void 0 !== a) { if ("value" in a) return a.value; var s = a.get; if (void 0 === s) return; return s.call(u) }
                    var c = Object.getPrototypeOf(r);
                    if (null === c) return;
                    e = c, t = i, n = u, o = !0, a = c = void 0
                }
            },
            s = e("./Controller"),
            c = o(s),
            l = e("../model/AppModel"),
            f = o(l),
            d = e("../model/MemoModel"),
            v = o(d),
            h = e("../libs/PubSub"),
            p = o(h),
            y = e("../libs/Toaster"),
            b = o(y),
            m = e("../libs/Dialog"),
            w = o(m),
            g = e("../libs/Router"),
            _ = o(g),
            k = function(e) {
                function t() {
                    var e = this;
                    r(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.appModel = null, this.sideNavToggleButton = document.querySelector(".js-toggle-menu"), this.sideNav = document.querySelector(".js-side-nav"), this.sideNavContent = this.sideNav.querySelector(".js-side-nav-content"), this.newRecordingButton = document.querySelector(".js-new-recording-btn"), this.deleteMemos = this.sideNav.querySelector(".js-delete-memos"), this.deleteMemos.addEventListener("click", this.deleteAllMemos), f["default"].get(1).then(function(t) {
                        (0, _["default"])().then(function(t) { t.add("_root", function(t) { return e.show(t) }, function() { return e.hide() }) }), e.appModel = t, void 0 === t && (e.appModel = new f["default"], e.appModel.put()), e.appModel.firstRun;
                        var n, o, r = function(e) { n = e.touches[0].pageX },
                            i = function(t) {
                                var r = t.touches[0].pageX;
                                o = Math.min(0, r - n), o < 0 && t.preventDefault(), e.sideNavContent.style.transform = "translateX(" + o + "px)"
                            },
                            u = function(t) { o < -1 && e.closeSideNav() };
                        return e.sideNav.addEventListener("click", function() { e.closeSideNav() }), e.sideNavContent.addEventListener("click", function(e) { e.stopPropagation() }), e.sideNavContent.addEventListener("touchstart", r), e.sideNavContent.addEventListener("touchmove", i), e.sideNavContent.addEventListener("touchend", u), e.supportsGUMandWebAudio() ? (requestAnimationFrame(function() {
                            function t(e) { e.target.classList.add("pending") } e.newRecordingButton.addEventListener("click", t), e.loadScript("/scripts/voicememo-list.js"), e.loadScript("/scripts/voicememo-details.js"), e.loadScript("/scripts/voicememo-record.js").then(function() { e.newRecordingButton.removeEventListener("click", t) }), e.sideNavToggleButton.addEventListener("click", function() { e.toggleSideNav() })
                        }), void("serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(function(e) {
                            var t = !1;
                            e.active && (t = !0), e.onupdatefound = function(n) { console.log("A new Service Worker version has been found..."), e.installing.onstatechange = function(e) { "installed" === this.state ? (console.log("Service Worker Installed."), t ? (0, b["default"])().then(function(e) { e.toast("App updated. Restart for the new version.") }) : (0, b["default"])().then(function(e) { e.toast("App ready for offline use.") })) : console.log("New Service Worker state: ", this.state) } }
                        }, function(e) { console.log(e) }))) : (document.body.classList.add("superfail"), void e.newRecordingButton.classList.add("hidden"))
                    })
                }
                return i(t, e), u(t, [{ key: "supportsGUMandWebAudio", value: function() { return (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia) && (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext) } }, { key: "show", value: function() { this.sideNavToggleButton.tabIndex = 1, this.newRecordingButton.tabIndex = 2 } }, { key: "hide", value: function() { this.sideNavToggleButton.tabIndex = -1, this.newRecordingButton.tabIndex = -1, (0, p["default"])().then(function(e) { e.pub("list-covered") }) } }, { key: "toggleSideNav", value: function() { this.sideNav.classList.contains("side-nav--visible") ? this.closeSideNav() : this.openSideNav() } }, {
                    key: "openSideNav",
                    value: function() {
                        var e = this;
                        this.sideNav.classList.add("side-nav--visible"), this.sideNavToggleButton.focus();
                        var t = function n(t) { e.sideNavContent.tabIndex = 0, e.sideNavContent.focus(), e.sideNavContent.removeAttribute("tabIndex"), e.sideNavContent.classList.remove("side-nav__content--animatable"), e.sideNavContent.removeEventListener("transitionend", n) };
                        this.sideNavContent.classList.add("side-nav__content--animatable"), this.sideNavContent.addEventListener("transitionend", t), requestAnimationFrame(function() { e.sideNavContent.style.transform = "translateX(0px)" })
                    }
                }, {
                    key: "closeSideNav",
                    value: function() {
                        var e = this;
                        this.sideNav.classList.remove("side-nav--visible"), this.sideNavContent.classList.add("side-nav__content--animatable"), this.sideNavContent.style.transform = "translateX(-102%)";
                        var t = function n() { e.sideNav.removeEventListener("transitionend", n) };
                        this.sideNav.addEventListener("transitionend", t)
                    }
                }, {
                    key: "resetAllData",
                    value: function() {
                        (0, w["default"])().then(function(e) { return e.show("Delete all the things?", "Are you sure you want to remove all data?") }).then(function() { f["default"].nuke(), window.location = "/" })["catch"](function() {})
                    }
                }, {
                    key: "deleteAllMemos",
                    value: function() {
                        (0, w["default"])().then(function(e) { return e.show("Delete all audios?", "Are you sure you want to remove all audios?") }).then(function() {
                            v["default"].deleteAll().then(function() {
                                (0, p["default"])().then(function(e) { e.pub(v["default"].UPDATED) }), (0, b["default"])().then(function(e) { e.toast("All audios deleted.") }), (0, _["default"])().then(function(e) { e.go("/") })
                            })
                        })["catch"](function() {})
                    }
                }]), t
            }(c["default"]);
        n["default"] = k, t.exports = n["default"]
    }, { "../libs/Dialog": 7, "../libs/PubSub": 8, "../libs/Router": 9, "../libs/Toaster": 10, "../model/AppModel": 11, "../model/MemoModel": 12, "./Controller": 4 }],
    4: [function(e, t, n) {
        "use strict";

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
            }(),
            i = function() {
                function e() { o(this, e) }
                return r(e, [{
                    key: "loadScript",
                    value: function(e) {
                        return new Promise(function(t, n) {
                            var o = document.createElement("script");
                            o.async = !0, o.src = e, o.onload = t, o.onerror = n, document.head.appendChild(o)
                        })
                    }
                }, {
                    key: "loadCSS",
                    value: function(e) {
                        return new Promise(function(t, n) {
                            var o = new XMLHttpRequest;
                            o.open("GET", e), o.responseType = "text", o.onload = function(e) {
                                if (200 == this.status) {
                                    var r = document.createElement("style");
                                    r.textContent = o.response, document.head.appendChild(r), t()
                                } else n()
                            }, o.send()
                        })
                    }
                }]), e
            }();
        n["default"] = i, t.exports = n["default"]
    }, {}],
    5: [function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { "default": e } }

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i() { return "undefined" != typeof window.ConfigManagerInstance_ ? Promise.resolve(window.ConfigManagerInstance_) : (window.ConfigManagerInstance_ = new c, Promise.resolve(window.ConfigManagerInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 });
        var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
        }();
        n["default"] = i;
        var a = e("../config/Config"),
            s = o(a),
            c = function() {
                function e() { r(this, e), this.config = s["default"] }
                return u(e, [{ key: "getStore", value: function(e) { return this.config_.stores[e] } }, { key: "config", set: function(e) { this.config_ = e }, get: function() { return this.config_ } }]), e
            }();
        t.exports = n["default"]
    }, { "../config/Config": 2 }],
    6: [function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { "default": e } }

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i() { return "undefined" != typeof window.DatabaseInstance_ ? Promise.resolve(window.DatabaseInstance_) : (window.DatabaseInstance_ = new c, Promise.resolve(window.DatabaseInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 });
        var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
        }();
        n["default"] = i;
        var a = e("./ConfigManager"),
            s = o(a),
            c = function() {
                function e() {
                    var t = this;
                    r(this, e), (0, s["default"])().then(function(e) {
                        var n = e.config;
                        t.db_ = null, t.name_ = n.name, t.version_ = n.version, t.stores_ = n.stores
                    })
                }
                return u(e, [{ key: "getStore", value: function(e) { if (!this.stores_[e]) throw 'There is no store with name "' + e + '"'; return this.stores_[e] } }, {
                    key: "open",
                    value: function() {
                        var e = this;
                        return this.db_ ? Promise.resolve(this.db_) : new Promise(function(t, n) {
                            var o = indexedDB.open(e.name_, e.version_);
                            o.onupgradeneeded = function(t) {
                                e.db_ = t.target.result;
                                for (var n, o = Object.keys(e.stores_), r = 0; r < o.length; r++) {
                                    if (n = o[r], e.db_.objectStoreNames.contains(n)) {
                                        if (!e.stores_[n].deleteOnUpgrade) continue;
                                        e.db_.deleteObjectStore(n)
                                    }
                                    var i = e.db_.createObjectStore(n, e.stores_[n].properties);
                                    if ("undefined" != typeof e.stores_[n].indexes)
                                        for (var u, a = e.stores_[n].indexes, s = Object.keys(a), c = 0; c < s.length; c++) u = s[c], i.createIndex(u, u, a[u])
                                }
                            }, o.onsuccess = function(n) { e.db_ = n.target.result, t(e.db_) }, o.onerror = function(e) { n(e) }
                        })
                    }
                }, { key: "close", value: function() { var e = this; return new Promise(function(t, n) { e.db_ || n("No database connection"), e.db_.close(), t(e.db_) }) } }, {
                    key: "nuke",
                    value: function() {
                        var e = this;
                        return new Promise(function(t, n) {
                            console.log("Nuking... " + e.name_), e.close();
                            var o = indexedDB.deleteDatabase(e.name_);
                            o.onsuccess = function(e) { console.log("Nuked..."), t(e) }, o.onerror = function(e) { n(e) }
                        })
                    }
                }, {
                    key: "put",
                    value: function(e, t, n) {
                        return this.open().then(function(o) {
                            return new Promise(function(r, i) {
                                var u = o.transaction(e, "readwrite"),
                                    a = u.objectStore(e),
                                    s = a.put(t, n);
                                u.oncomplete = function(e) { r(s.result) }, u.onabort = u.onerror = function(e) { i(e) }
                            })
                        })
                    }
                }, {
                    key: "get",
                    value: function(e, t) {
                        return this.open().then(function(n) {
                            return new Promise(function(o, r) {
                                var i, u = n.transaction(e, "readonly"),
                                    a = u.objectStore(e);
                                u.oncomplete = function(e) { o(i.result) }, u.onabort = u.onerror = function(e) { r(e) }, i = a.get(t)
                            })
                        })
                    }
                }, {
                    key: "getAll",
                    value: function(e, t, n) {
                        return this.open().then(function(o) {
                            return new Promise(function(r, i) {
                                var u, a = o.transaction(e, "readonly"),
                                    s = a.objectStore(e);
                                "string" != typeof n && (n = "next"), u = "string" == typeof t ? s.index(t).openCursor(null, n) : s.openCursor();
                                var c = [];
                                u.onsuccess = function(e) {
                                    var t = e.target.result;
                                    t ? (c.push({ key: t.key, value: t.value }), t["continue"]()) : r(c)
                                }, u.onerror = function(e) { i(e) }
                            })
                        })
                    }
                }, {
                    key: "delete",
                    value: function(e, t) {
                        return this.open().then(function(n) {
                            return new Promise(function(o, r) {
                                var i = n.transaction(e, "readwrite"),
                                    u = i.objectStore(e);
                                i.oncomplete = function(e) { o(e) }, i.onabort = i.onerror = function(e) { r(e) }, u["delete"](t)
                            })
                        })
                    }
                }, {
                    key: "deleteAll",
                    value: function(e) {
                        return this.open().then(function(t) {
                            return new Promise(function(n, o) {
                                var r = t.transaction(e, "readwrite"),
                                    i = r.objectStore(e),
                                    u = i.clear();
                                u.onsuccess = function(e) { n(e) }, u.onerror = function(e) { o(e) }
                            })
                        })
                    }
                }]), e
            }();
        t.exports = n["default"]
    }, { "./ConfigManager": 5 }],
    7: [function(e, t, n) {
        "use strict";

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r() { return "undefined" != typeof window.DialogInstance_ ? Promise.resolve(window.DialogInstance_) : (window.DialogInstance_ = new u, Promise.resolve(window.DialogInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
        }();
        n["default"] = r;
        var u = function() {
            function e() { o(this, e), this.view = document.querySelector(".js-dialog"), this.title = this.view.querySelector(".js-title"), this.message = this.view.querySelector(".js-message"), this.cancelButton = this.view.querySelector(".js-cancel"), this.okayButton = this.view.querySelector(".js-okay") }
            return i(e, [{
                key: "show",
                value: function(e, t, n) {
                    var o = this;
                    return this.title.textContent = e, this.message.textContent = t, this.view.classList.add("dialog-view--visible"), n ? this.cancelButton.classList.add("hidden") : this.cancelButton.classList.remove("hidden"), new Promise(function(e, t) {
                        var n = function() { o.cancelButton.removeEventListener("click", r), o.okayButton.removeEventListener("click", i), o.view.classList.remove("dialog-view--visible") },
                            r = function(e) { n(), t() },
                            i = function(t) { n(), e() };
                        o.cancelButton.addEventListener("click", r), o.okayButton.addEventListener("click", i)
                    })
                }
            }]), e
        }();
        t.exports = n["default"]
    }, {}],
    8: [function(e, t, n) {
        "use strict";

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r() { return "undefined" != typeof window.PubSubInstance_ ? Promise.resolve(window.PubSubInstance_) : (window.PubSubInstance_ = new u, Promise.resolve(window.PubSubInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
        }();
        n["default"] = r;
        var u = function() {
            function e() { o(this, e), this.subs = {} }
            return i(e, [{ key: "sub", value: function(e, t) { this.subs[e] || (this.subs[e] = []), this.subs[e].push(t) } }, {
                key: "unsub",
                value: function(e, t) {
                    if (this.subs[e]) {
                        var n = this.subs.indexOf(t);
                        n !== -1 && this.subs.splice(n, 1)
                    }
                }
            }, { key: "pub", value: function(e, t) { this.subs[e] && this.subs[e].forEach(function(e) { e(t) }) } }]), e
        }();
        t.exports = n["default"]
    }, {}],
    9: [function(e, t, n) {
        "use strict";

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r() { return "undefined" != typeof window.RouterInstance_ ? Promise.resolve(window.RouterInstance_) : (window.RouterInstance_ = new u, Promise.resolve(window.RouterInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
        }();
        n["default"] = r;
        var u = function() {
            function e() {
                var t = this;
                o(this, e), this.routes = {}, this.currentAction = null, this.loader = document.querySelector(".loader"), window.addEventListener("popstate", function(e) { t.onPopState(e) }), this.manageState()
            }
            return i(e, [{
                key: "add",
                value: function(e, t, n, o) {
                    var r = this,
                        i = e.split("/"),
                        u = i.shift();
                    if (this.routes[u]) throw "A handler already exists for this action: " + u;
                    this.routes[u] = { "in": t, out: n, update: o }, requestAnimationFrame(function() { r.manageState() && document.body.classList.remove("deeplink") })
                }
            }, {
                key: "remove",
                value: function(e) {
                    var t = e.split("/"),
                        n = t.shift();
                    this.routes[n] && delete this.routes[n]
                }
            }, {
                key: "manageState",
                value: function() {
                    var e = document.location.pathname.replace(/^\//, ""),
                        t = e.split("/"),
                        n = t.shift(),
                        o = t.join("/");
                    if ("" === n && (n = "_root"), document.body.classList.contains("app-deeplink") && document.body.classList.remove("app-deeplink"), this.loader.classList.add("hidden"), this.currentAction === this.routes[n]) return "function" == typeof this.currentAction.update && (this.currentAction.update(o), !0);
                    if (!this.routes[n]) return this.currentAction && this.currentAction.out(), this.currentAction = null, document.body.focus(), !1;
                    var r = this.routes[n]["in"](o) || 0;
                    return this.currentAction && (0 === r ? this.currentAction.out() : setTimeout(this.currentAction.out, r)), this.currentAction = this.routes[n], !0
                }
            }, {
                key: "go",
                value: function(e) {
                    var t = this;
                    e !== window.location.pathname && (history.pushState(void 0, "", e), requestAnimationFrame(function() { t.manageState() }))
                }
            }, {
                key: "onPopState",
                value: function(e) {
                    var t = this;
                    e.preventDefault(), requestAnimationFrame(function() { t.manageState() })
                }
            }]), e
        }();
        t.exports = n["default"]
    }, {}],
    10: [function(e, t, n) {
        "use strict";

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function r() { return "undefined" != typeof window.ToasterInstance_ ? Promise.resolve(window.ToasterInstance_) : (window.ToasterInstance_ = new u, Promise.resolve(window.ToasterInstance_)) } Object.defineProperty(n, "__esModule", { value: !0 });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
        }();
        n["default"] = r;
        var u = function() {
            function e() { o(this, e), this.view = document.querySelector(".toast-view"), this.hideTimeout = 0, this.hideBound = this.hide.bind(this) }
            return i(e, [{ key: "toast", value: function(e) { this.view.textContent = e, this.view.classList.add("toast-view--visible"), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(this.hideBound, 3e3) } }, { key: "hide", value: function() { this.view.classList.remove("toast-view--visible") } }]), e
        }();
        t.exports = n["default"]
    }, {}],
    11: [function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { "default": e } }

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
            }(),
            a = function(e, t, n) {
                for (var o = !0; o;) {
                    var r = e,
                        i = t,
                        u = n;
                    o = !1, null === r && (r = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(r, i);
                    if (void 0 !== a) { if ("value" in a) return a.value; var s = a.get; if (void 0 === s) return; return s.call(u) }
                    var c = Object.getPrototypeOf(r);
                    if (null === c) return;
                    e = c, t = i, n = u, o = !0, a = c = void 0
                }
            },
            s = e("./Model"),
            c = o(s),
            l = function(e) {
                function t(e, n) { r(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, n), this.firstRun = !0, this.preferences = {} }
                return i(t, e), u(t, null, [{ key: "UPDATED", get: function() { return "AppModel-updated" } }, { key: "storeName", get: function() { return "AppModel" } }]), t
            }(c["default"]);
        n["default"] = l, t.exports = n["default"]
    }, { "./Model": 13 }],
    12: [function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { "default": e } }

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
            }(),
            a = function(e, t, n) {
                for (var o = !0; o;) {
                    var r = e,
                        i = t,
                        u = n;
                    o = !1, null === r && (r = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(r, i);
                    if (void 0 !== a) { if ("value" in a) return a.value; var s = a.get; if (void 0 === s) return; return s.call(u) }
                    var c = Object.getPrototypeOf(r);
                    if (null === c) return;
                    e = c, t = i, n = u, o = !0, a = c = void 0
                }
            },
            s = e("./Model"),
            c = o(s),
            l = function(e) {
                function t(e, n) { r(this, t), a(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, n), this.title = e.title || "Untitled Audio", this.description = e.description || null, this.url = e.url || t.makeURL(), this.audio = e.audio || null, this.volumeData = e.volumeData || null, this.time = e.time || Date.now(), this.transcript = e.transcript || null }
                return i(t, e), u(t, null, [{ key: "makeURL", value: function() { for (var e = "", t = 0; t < 16; t++) e += Number(Math.floor(16 * Math.random())).toString(16); return e } }, { key: "UPDATED", get: function() { return "MemoModel-updated" } }, { key: "storeName", get: function() { return "MemoModel" } }]), t
            }(c["default"]);
        n["default"] = l, t.exports = n["default"]
    }, { "./Model": 13 }],
    13: [function(e, t, n) {
        "use strict";

        function o(e) { return e && e.__esModule ? e : { "default": e } }

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(n, "__esModule", { value: !0 });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
            }(),
            u = e("../libs/Database"),
            a = o(u),
            s = e("../libs/ConfigManager"),
            c = o(s),
            l = function() {
                function e(t) { r(this, e), this.key = t }
                return i(e, [{ key: "put", value: function() { return this.constructor.put(this) } }, { key: "delete", value: function() { return this.constructor["delete"](this) } }], [{ key: "nuke", value: function() { return (0, a["default"])().then(function(e) { return e.close() }).then(function(e) { return e.nuke() }) } }, { key: "get", value: function(t) { var n = this; return this instanceof e && Promise.reject("Can't call get on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.get(n.storeName, t) }).then(function(e) { return (0, c["default"])().then(function(o) { var r = o.getStore(n.storeName); if (e) { var i = t; return r.properties.keyPath && (i = void 0), new n(e, i) } }) }) } }, {
                    key: "getAll",
                    value: function(t, n) {
                        var o = this;
                        return this instanceof e && Promise.reject("Can't call getAll on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.getAll(o.storeName, t, n) }).then(function(e) {
                            return (0, c["default"])().then(function(t) {
                                var n = t.getStore(o.storeName),
                                    r = [],
                                    i = !0,
                                    u = !1,
                                    a = void 0;
                                try {
                                    for (var s, c = e[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                        var l = s.value,
                                            f = l.key;
                                        n.properties.keyPath && (f = void 0), r.push(new o(l.value, f))
                                    }
                                } catch (d) { u = !0, a = d } finally { try {!i && c["return"] && c["return"]() } finally { if (u) throw a } }
                                return r
                            })
                        })
                    }
                }, {
                    key: "put",
                    value: function(t) {
                        var n = this;
                        return this instanceof e && Promise.reject("Can't call put on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.put(n.storeName, t, t.key) }).then(function(e) {
                            return (0, c["default"])().then(function(o) {
                                var r = o.getStore(n.storeName),
                                    i = r.properties.keyPath;
                                return i || (t.key = e), t
                            })
                        })
                    }
                }, { key: "deleteAll", value: function() { var t = this; return this instanceof e && Promise.reject("Can't call deleteAll on Model directly. Inherit first."), (0, a["default"])().then(function(e) { return e.deleteAll(t.storeName) })["catch"](function(e) { if ("NotFoundError" !== e.name) throw e }) } }, {
                    key: "delete",
                    value: function(t) {
                        var n = this;
                        return this instanceof e && Promise.reject("Can't call delete on Model directly. Inherit first."), (0, c["default"])().then(function(e) {
                            if (t instanceof n) {
                                var o = e.getStore(n.storeName),
                                    r = o.properties.keyPath;
                                t = r ? t[r] : t.key
                            }
                            return (0, a["default"])().then(function(e) { return e["delete"](n.storeName, t) })
                        })
                    }
                }, { key: "ASCENDING", get: function() { return "next" } }, { key: "DESCENDING", get: function() { return "prev" } }, { key: "UPDATED", get: function() { return "Model-updated" } }, { key: "storeName", get: function() { return "Model" } }]), e
            }();
        n["default"] = l, t.exports = n["default"]
    }, { "../libs/ConfigManager": 5, "../libs/Database": 6 }]
}, {}, [1]);