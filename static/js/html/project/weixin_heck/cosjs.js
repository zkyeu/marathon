/*!
 * jQuery JavaScript Library v1.11.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-deprecated,-event-alias,-wrap
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-09-28T01:23Z
 */
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length
          , n = L.type(e);
        return "function" !== n && !L.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function r(e) {
        var t = R[e] = {};
        return L.each(e.match(W) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        F.addEventListener ? (F.removeEventListener("DOMContentLoaded", i, !1),
        e.removeEventListener("load", i, !1)) : (F.detachEvent("onreadystatechange", i),
        e.detachEvent("onload", i))
    }
    function i() {
        (F.addEventListener || "load" === event.type || "complete" === F.readyState) && (a(),
        L.ready())
    }
    function o(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(J, "-$1").toLowerCase();
            if (n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? L.parseJSON(n) : n)
                } catch (a) {}
                L.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !L.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c(e, t, n, r) {
        if (L.acceptData(e)) {
            var a, i, o = L.expando, s = e.nodeType, c = s ? L.cache : e, u = s ? e[o] : e[o] && o;
            if (u && c[u] && (r || c[u].data) || void 0 !== n || "string" != typeof t)
                return u || (u = s ? e[o] = b.pop() || L.guid++ : o),
                c[u] || (c[u] = s ? {} : {
                    toJSON: L.noop
                }),
                "object" != typeof t && "function" != typeof t || (r ? c[u] = L.extend(c[u], t) : c[u].data = L.extend(c[u].data, t)),
                i = c[u],
                r || (i.data || (i.data = {}),
                i = i.data),
                void 0 !== n && (i[L.camelCase(t)] = n),
                "string" == typeof t ? (a = i[t],
                null == a && (a = i[L.camelCase(t)])) : a = i,
                a
        }
    }
    function u(e, t, n) {
        if (L.acceptData(e)) {
            var r, a, i = e.nodeType, o = i ? L.cache : e, c = i ? e[L.expando] : L.expando;
            if (o[c]) {
                if (t && (r = n ? o[c] : o[c].data)) {
                    L.isArray(t) ? t = t.concat(L.map(t, L.camelCase)) : t in r ? t = [t] : (t = L.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    a = t.length;
                    for (; a--; )
                        delete r[t[a]];
                    if (n ? !s(r) : !L.isEmptyObject(r))
                        return
                }
                (n || (delete o[c].data,
                s(o[c]))) && (i ? L.cleanData([e], !0) : D.deleteExpando || o != o.window ? delete o[c] : o[c] = null)
            }
        }
    }
    function l() {
        return !0
    }
    function d() {
        return !1
    }
    function f(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, a = 0, i = t.toLowerCase().match(W) || [];
            if (L.isFunction(n))
                for (; r = i[a++]; )
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function p(e, t, n, r) {
        function a(s) {
            var c;
            return i[s] = !0,
            L.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || o || i[u] ? o ? !(c = u) : void 0 : (t.dataTypes.unshift(u),
                a(u),
                !1)
            }),
            c
        }
        var i = {}
          , o = e === le;
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function h(e, t) {
        var n, r, a = L.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((a[r] ? e : n || (n = {}))[r] = t[r]);
        return n && L.extend(!0, e, n),
        e
    }
    function v(e, t, n) {
        for (var r, a, i, o, s = e.contents, c = e.dataTypes; "*" === c[0]; )
            c.shift(),
            void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
        if (a)
            for (o in s)
                if (s[o] && s[o].test(a)) {
                    c.unshift(o);
                    break
                }
        if (c[0]in n)
            i = c[0];
        else {
            for (o in n) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    i = o;
                    break
                }
                r || (r = o)
            }
            i = i || r
        }
        if (i)
            return i !== c[0] && c.unshift(i),
            n[i]
    }
    function y(e, t, n, r) {
        var a, i, o, s, c, u = {}, l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters)
                u[o.toLowerCase()] = e.converters[o];
        for (i = l.shift(); i; )
            if (e.responseFields[i] && (n[e.responseFields[i]] = t),
            !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            c = i,
            i = l.shift())
                if ("*" === i)
                    i = c;
                else if ("*" !== c && c !== i) {
                    if (o = u[c + " " + i] || u["* " + i],
                    !o)
                        for (a in u)
                            if (s = a.split(" "),
                            s[1] === i && (o = u[c + " " + s[0]] || u["* " + s[0]])) {
                                o === !0 ? o = u[a] : u[a] !== !0 && (i = s[0],
                                l.unshift(s[1]));
                                break
                            }
                    if (o !== !0)
                        if (o && e["throws"])
                            t = o(t);
                        else
                            try {
                                t = o(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: o ? d : "No conversion from " + c + " to " + i
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function m(e, t, n, r) {
        var a;
        if (L.isArray(t))
            L.each(t, function(t, a) {
                n || he.test(e) ? r(e, a) : m(e + "[" + ("object" == typeof a ? t : "") + "]", a, n, r)
            });
        else if (n || "object" !== L.type(t))
            r(e, t);
        else
            for (a in t)
                m(e + "[" + a + "]", t[a], n, r)
    }
    function g() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function x() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    var b = []
      , j = b.slice
      , T = b.concat
      , w = b.push
      , E = b.indexOf
      , S = {}
      , C = S.toString
      , k = S.hasOwnProperty
      , D = {}
      , _ = "1.11.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-deprecated,-event-alias,-wrap"
      , L = function(e, t) {
        return new L.fn.init(e,t)
    }
      , A = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , N = /^-ms-/
      , O = /-([\da-z])/gi
      , q = function(e, t) {
        return t.toUpperCase()
    };
    L.fn = L.prototype = {
        jquery: _,
        constructor: L,
        selector: "",
        length: 0,
        toArray: function() {
            return j.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : j.call(this)
        },
        pushStack: function(e) {
            var t = L.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return L.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(L.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(j.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: w,
        sort: b.sort,
        splice: b.splice
    },
    L.extend = L.fn.extend = function() {
        var e, t, n, r, a, i, o = arguments[0] || {}, s = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o,
        o = arguments[s] || {},
        s++),
        "object" == typeof o || L.isFunction(o) || (o = {}),
        s === c && (o = this,
        s--); s < c; s++)
            if (null != (a = arguments[s]))
                for (r in a)
                    e = o[r],
                    n = a[r],
                    o !== n && (u && n && (L.isPlainObject(n) || (t = L.isArray(n))) ? (t ? (t = !1,
                    i = e && L.isArray(e) ? e : []) : i = e && L.isPlainObject(e) ? e : {},
                    o[r] = L.extend(u, i, n)) : void 0 !== n && (o[r] = n));
        return o
    }
    ,
    L.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === L.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === L.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !L.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== L.type(e) || e.nodeType || L.isWindow(e))
                return !1;
            try {
                if (e.constructor && !k.call(e, "constructor") && !k.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (D.ownLast)
                for (t in e)
                    return k.call(e, t);
            for (t in e)
                ;
            return void 0 === t || k.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? S[C.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && L.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(N, "ms-").replace(O, q)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var a, i = 0, o = e.length, s = n(e);
            if (r) {
                if (s)
                    for (; i < o && (a = t.apply(e[i], r),
                    a !== !1); i++)
                        ;
                else
                    for (i in e)
                        if (a = t.apply(e[i], r),
                        a === !1)
                            break
            } else if (s)
                for (; i < o && (a = t.call(e[i], i, e[i]),
                a !== !1); i++)
                    ;
            else
                for (i in e)
                    if (a = t.call(e[i], i, e[i]),
                    a === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(A, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? L.merge(r, "string" == typeof e ? [e] : e) : w.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (E)
                    return E.call(t, e, n);
                for (r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, a = e.length; r < n; )
                e[a++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r]; )
                    e[a++] = t[r++];
            return e.length = a,
            e
        },
        grep: function(e, t, n) {
            for (var r, a = [], i = 0, o = e.length, s = !n; i < o; i++)
                r = !t(e[i], i),
                r !== s && a.push(e[i]);
            return a
        },
        map: function(e, t, r) {
            var a, i = 0, o = e.length, s = n(e), c = [];
            if (s)
                for (; i < o; i++)
                    a = t(e[i], i, r),
                    null != a && c.push(a);
            else
                for (i in e)
                    a = t(e[i], i, r),
                    null != a && c.push(a);
            return T.apply([], c)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, a;
            if ("string" == typeof t && (a = e[t],
            t = e,
            e = a),
            L.isFunction(e))
                return n = j.call(arguments, 2),
                r = function() {
                    return e.apply(t || this, n.concat(j.call(arguments)))
                }
                ,
                r.guid = e.guid = e.guid || L.guid++,
                r
        },
        now: function() {
            return +new Date
        },
        support: D
    }),
    L.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        S["[object " + t + "]"] = t.toLowerCase()
    });
    var H, F = e.document, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, M = L.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : P.exec(e),
            !n || !n[1] && t)
                return !t || t.jquery ? (t || H).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof L ? t[0] : t,
                L.merge(this, L.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : F, !0)),
                rsingleTag.test(n[1]) && L.isPlainObject(t))
                    for (n in t)
                        L.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (r = F.getElementById(n[2]),
            r && r.parentNode) {
                if (r.id !== n[2])
                    return H.find(e);
                this.length = 1,
                this[0] = r
            }
            return this.context = F,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : L.isFunction(e) ? "undefined" != typeof H.ready ? H.ready(e) : e(L) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        L.makeArray(e, this))
    }
    ;
    M.prototype = L.fn,
    H = L(F);
    var W = /\S+/g
      , R = {};
    L.Callbacks = function(e) {
        e = "string" == typeof e ? R[e] || r(e) : L.extend({}, e);
        var t, n, a, i, o, s, c = [], u = !e.once && [], l = function(r) {
            for (n = e.memory && r,
            a = !0,
            o = s || 0,
            s = 0,
            i = c.length,
            t = !0; c && o < i; o++)
                if (c[o].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            t = !1,
            c && (u ? u.length && l(u.shift()) : n ? c = [] : d.disable())
        }, d = {
            add: function() {
                if (c) {
                    var r = c.length;
                    !function a(t) {
                        L.each(t, function(t, n) {
                            var r = L.type(n);
                            "function" === r ? e.unique && d.has(n) || c.push(n) : n && n.length && "string" !== r && a(n)
                        })
                    }(arguments),
                    t ? i = c.length : n && (s = r,
                    l(n))
                }
                return this
            },
            remove: function() {
                return c && L.each(arguments, function(e, n) {
                    for (var r; (r = L.inArray(n, c, r)) > -1; )
                        c.splice(r, 1),
                        t && (r <= i && i--,
                        r <= o && o--)
                }),
                this
            },
            has: function(e) {
                return e ? L.inArray(e, c) > -1 : !(!c || !c.length)
            },
            empty: function() {
                return c = [],
                i = 0,
                this
            },
            disable: function() {
                return c = u = n = void 0,
                this
            },
            disabled: function() {
                return !c
            },
            lock: function() {
                return u = void 0,
                n || d.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, n) {
                return !c || a && !u || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                t ? u.push(n) : l(n)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return d
    }
    ,
    L.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", L.Callbacks("once memory"), "resolved"], ["reject", "fail", L.Callbacks("once memory"), "rejected"], ["notify", "progress", L.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return L.Deferred(function(n) {
                        L.each(t, function(t, i) {
                            var o = L.isFunction(e[t]) && e[t];
                            a[i[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && L.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? L.extend(e, r) : r
                }
            }
              , a = {};
            return r.pipe = r.then,
            L.each(t, function(e, i) {
                var o = i[2]
                  , s = i[3];
                r[i[1]] = o.add,
                s && o.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                a[i[0]] = function() {
                    return a[i[0] + "With"](this === a ? r : this, arguments),
                    this
                }
                ,
                a[i[0] + "With"] = o.fireWith
            }),
            r.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            var t, n, r, a = 0, i = j.call(arguments), o = i.length, s = 1 !== o || e && L.isFunction(e.promise) ? o : 0, c = 1 === s ? e : L.Deferred(), u = function(e, n, r) {
                return function(a) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? j.call(arguments) : a,
                    r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
                }
            };
            if (o > 1)
                for (t = new Array(o),
                n = new Array(o),
                r = new Array(o); a < o; a++)
                    i[a] && L.isFunction(i[a].promise) ? i[a].promise().done(u(a, r, i)).fail(c.reject).progress(u(a, n, t)) : --s;
            return s || c.resolveWith(r, i),
            c.promise()
        }
    });
    var X;
    L.fn.ready = function(e) {
        return L.ready.promise().done(e),
        this
    }
    ,
    L.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? L.readyWait++ : L.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--L.readyWait : !L.isReady) {
                if (!F.body)
                    return setTimeout(L.ready);
                L.isReady = !0,
                e !== !0 && --L.readyWait > 0 || (X.resolveWith(F, [L]),
                L.fn.triggerHandler && (L(F).triggerHandler("ready"),
                L(F).off("ready")))
            }
        }
    }),
    L.ready.promise = function(t) {
        if (!X)
            if (X = L.Deferred(),
            "complete" === F.readyState)
                setTimeout(L.ready);
            else if (F.addEventListener)
                F.addEventListener("DOMContentLoaded", i, !1),
                e.addEventListener("load", i, !1);
            else {
                F.attachEvent("onreadystatechange", i),
                e.attachEvent("onload", i);
                var n = !1;
                try {
                    n = null == e.frameElement && F.documentElement
                } catch (r) {}
                n && n.doScroll && !function o() {
                    if (!L.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        a(),
                        L.ready()
                    }
                }()
            }
        return X.promise(t)
    }
    ;
    var $, B = "undefined";
    for ($ in L(D))
        break;
    D.ownLast = "0" !== $,
    D.inlineBlockNeedsLayout = !1,
    L(function() {
        var e, t, n, r;
        n = F.getElementsByTagName("body")[0],
        n && n.style && (t = F.createElement("div"),
        r = F.createElement("div"),
        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(r).appendChild(t),
        typeof t.style.zoom !== B && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        D.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(r))
    }),
    function() {
        var e = F.createElement("div");
        if (null == D.deleteExpando) {
            D.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                D.deleteExpando = !1
            }
        }
        e = null
    }(),
    L.acceptData = function(e) {
        var t = L.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
    }
    ;
    var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , J = /([A-Z])/g;
    L.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? L.cache[e[L.expando]] : e[L.expando],
            !!e && !s(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }),
    L.fn.extend({
        data: function(e, t) {
            var n, r, a, i = this[0], s = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (a = L.data(i),
                1 === i.nodeType && !L._data(i, "parsedAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (r = s[n].name,
                        0 === r.indexOf("data-") && (r = L.camelCase(r.slice(5)),
                        o(i, r, a[r])));
                    L._data(i, "parsedAttrs", !0)
                }
                return a
            }
            return "object" == typeof e ? this.each(function() {
                L.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                L.data(this, e, t)
            }) : i ? o(i, e, L.data(i, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                L.removeData(this, e)
            })
        }
    }),
    L.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = L._data(e, t),
                n && (!r || L.isArray(n) ? r = L._data(e, t, L.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = L.queue(e, t)
              , r = n.length
              , a = n.shift()
              , i = L._queueHooks(e, t)
              , o = function() {
                L.dequeue(e, t)
            };
            "inprogress" === a && (a = n.shift(),
            r--),
            a && ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            a.call(e, o, i)),
            !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return L._data(e, n) || L._data(e, n, {
                empty: L.Callbacks("once memory").add(function() {
                    L._removeData(e, t + "queue"),
                    L._removeData(e, n)
                })
            })
        }
    }),
    L.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? L.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = L.queue(this, e, t);
                L._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && L.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                L.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, a = L.Deferred(), i = this, o = this.length, s = function() {
                --r || a.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; o--; )
                n = L._data(i[o], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(s));
            return s(),
            a.promise(t)
        }
    }),
    L.event = {
        global: {},
        add: function(e, t, n, r, a) {
            var i, o, s, c, u, l, d, f, p, h, v, y = L._data(e);
            if (y) {
                for (n.handler && (c = n,
                n = c.handler,
                a = c.selector),
                n.guid || (n.guid = L.guid++),
                (o = y.events) || (o = y.events = {}),
                (l = y.handle) || (l = y.handle = function(e) {
                    return typeof L === B || e && L.event.triggered === e.type ? void 0 : L.event.dispatch.apply(l.elem, arguments)
                }
                ,
                l.elem = e),
                t = (t || "").match(W) || [""],
                s = t.length; s--; )
                    i = Y.exec(t[s]) || [],
                    p = v = i[1],
                    h = (i[2] || "").split(".").sort(),
                    p && (u = L.event.special[p] || {},
                    p = (a ? u.delegateType : u.bindType) || p,
                    u = L.event.special[p] || {},
                    d = L.extend({
                        type: p,
                        origType: v,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && L.expr.match.needsContext.test(a),
                        namespace: h.join(".")
                    }, c),
                    (f = o[p]) || (f = o[p] = [],
                    f.delegateCount = 0,
                    u.setup && u.setup.call(e, r, h, l) !== !1 || (e.addEventListener ? e.addEventListener(p, l, !1) : e.attachEvent && e.attachEvent("on" + p, l))),
                    u.add && (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    a ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    L.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, a) {
            var i, o, s, c, u, l, d, f, p, h, v, y = L.hasData(e) && L._data(e);
            if (y && (l = y.events)) {
                for (t = (t || "").match(W) || [""],
                u = t.length; u--; )
                    if (s = Y.exec(t[u]) || [],
                    p = v = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = L.event.special[p] || {},
                        p = (r ? d.delegateType : d.bindType) || p,
                        f = l[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        c = i = f.length; i--; )
                            o = f[i],
                            !a && v !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (f.splice(i, 1),
                            o.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, o));
                        c && !f.length && (d.teardown && d.teardown.call(e, h, y.handle) !== !1 || L.removeEvent(e, p, y.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            L.event.remove(e, p + t[u], n, r, !0);
                L.isEmptyObject(l) && (delete y.handle,
                L._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, a) {
            var i, o, s, c, u, l, d, f = [r || F], p = k.call(t, "type") ? t.type : t, h = k.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = l = r = r || F,
            3 !== r.nodeType && 8 !== r.nodeType && !U.test(p + L.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            o = p.indexOf(":") < 0 && "on" + p,
            t = t[L.expando] ? t : new L.Event(p,"object" == typeof t && t),
            t.isTrigger = a ? 2 : 3,
            t.namespace = h.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : L.makeArray(n, [t]),
            u = L.event.special[p] || {},
            a || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!a && !u.noBubble && !L.isWindow(r)) {
                    for (c = u.delegateType || p,
                    U.test(c + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        l = s;
                    l === (r.ownerDocument || F) && f.push(l.defaultView || l.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? c : u.bindType || p,
                    i = (L._data(s, "events") || {})[t.type] && L._data(s, "handle"),
                    i && i.apply(s, n),
                    i = o && s[o],
                    i && i.apply && L.acceptData(s) && (t.result = i.apply(s, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = p,
                !a && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && L.acceptData(r) && o && r[p] && !L.isWindow(r)) {
                    l = r[o],
                    l && (r[o] = null),
                    L.event.triggered = p;
                    try {
                        r[p]()
                    } catch (v) {}
                    L.event.triggered = void 0,
                    l && (r[o] = l)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = L.event.fix(e);
            var t, n, r, a, i, o = [], s = j.call(arguments), c = (L._data(this, "events") || {})[e.type] || [], u = L.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (o = L.event.handlers.call(this, e, c),
                t = 0; (a = o[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = a.elem,
                    i = 0; (r = a.handlers[i++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r,
                        e.data = r.data,
                        n = ((L.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, s),
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, a, i, o = [], s = t.delegateCount, c = e.target;
            if (s && c.nodeType && (!e.button || "click" !== e.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (a = [],
                        i = 0; i < s; i++)
                            r = t[i],
                            n = r.selector + " ",
                            void 0 === a[n] && (a[n] = r.needsContext ? L(n, this).index(c) >= 0 : L.find(n, this, null, [c]).length),
                            a[n] && a.push(r);
                        a.length && o.push({
                            elem: c,
                            handlers: a
                        })
                    }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }),
            o
        },
        fix: function(e) {
            if (e[L.expando])
                return e;
            var t, n, r, a = e.type, i = e, o = this.fixHooks[a];
            for (o || (this.fixHooks[a] = o = K.test(a) ? this.mouseHooks : Q.test(a) ? this.keyHooks : {}),
            r = o.props ? this.props.concat(o.props) : this.props,
            e = new L.Event(i),
            t = r.length; t--; )
                n = r[t],
                e[n] = i[n];
            return e.target || (e.target = i.srcElement || F),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            o.filter ? o.filter(e, i) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, a, i = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || F,
                a = r.documentElement,
                n = r.body,
                e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
                e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (L.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return L.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var a = L.extend(new L.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? L.event.trigger(a, null, t) : L.event.dispatch.call(t, a),
            a.isDefaultPrevented() && n.preventDefault()
        }
    },
    L.removeEvent = F.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === B && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    L.Event = function(e, t) {
        return this instanceof L.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : d) : this.type = e,
        t && L.extend(this, t),
        this.timeStamp = e && e.timeStamp || L.now(),
        void (this[L.expando] = !0)) : new L.Event(e,t)
    }
    ;
    var z = /^(?:input|select|textarea)$/i
      , Q = /^key/
      , K = /^(?:mouse|pointer|contextmenu)|click/
      , U = /^(?:focusinfocus|focusoutblur)$/
      , Y = /^([^.]*)(?:\.(.+)|)$/;
    L.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    D.submitBubbles || (L.event.special.submit = {
        setup: function() {
            return !L.nodeName(this, "form") && void L.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = L.nodeName(t, "input") || L.nodeName(t, "button") ? t.form : void 0;
                n && !L._data(n, "submitBubbles") && (L.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                L._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && L.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !L.nodeName(this, "form") && void L.event.remove(this, "._submit")
        }
    }),
    D.changeBubbles || (L.event.special.change = {
        setup: function() {
            return z.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (L.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            L.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                L.event.simulate("change", this, e, !0)
            })),
            !1) : void L.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                z.test(t.nodeName) && !L._data(t, "changeBubbles") && (L.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || L.event.simulate("change", this.parentNode, e, !0)
                }),
                L._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return L.event.remove(this, "._change"),
            !z.test(this.nodeName)
        }
    }),
    D.focusinBubbles || L.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            L.event.simulate(t, e.target, L.event.fix(e), !0)
        };
        L.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , a = L._data(r, t);
                a || r.addEventListener(e, n, !0),
                L._data(r, t, (a || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , a = L._data(r, t) - 1;
                a ? L._data(r, t, a) : (r.removeEventListener(e, n, !0),
                L._removeData(r, t))
            }
        }
    }),
    L.fn.extend({
        on: function(e, t, n, r, a) {
            var i, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = void 0);
                for (i in e)
                    this.on(i, t, n, e[i], a);
                return this
            }
            if (null == n && null == r ? (r = t,
            n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
            n = void 0) : (r = n,
            n = t,
            t = void 0)),
            r === !1)
                r = d;
            else if (!r)
                return this;
            return 1 === a && (o = r,
            r = function(e) {
                return L().off(e),
                o.apply(this, arguments)
            }
            ,
            r.guid = o.guid || (o.guid = L.guid++)),
            this.each(function() {
                L.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, a;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                L(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (a in e)
                    this.off(a, t, e[a]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t,
            t = void 0),
            n === !1 && (n = d),
            this.each(function() {
                L.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                L.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return L.event.trigger(e, t, n, !0)
        }
    }),
    L.fn.delay = function(e, t) {
        return e = L.fx ? L.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ;
    var G = L.now()
      , V = /\?/
      , Z = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    L.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, r = null, a = L.trim(t + "");
        return a && !L.trim(a.replace(Z, function(e, t, a, i) {
            return n && t && (r = 0),
            0 === r ? e : (n = a || t,
            r += !i - !a,
            "")
        })) ? Function("return " + a)() : L.error("Invalid JSON: " + t)
    }
    ,
    L.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (r = new DOMParser,
            n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (a) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || L.error("Invalid XML: " + t),
        n
    }
    ;
    var ee, te, ne = /#.*$/, re = /([?&])_=[^&]*/, ae = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, oe = /^(?:GET|HEAD)$/, se = /^\/\//, ce = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ue = {}, le = {}, de = "*/".concat("*");
    try {
        te = location.href
    } catch (fe) {
        te = F.createElement("a"),
        te.href = "",
        te = te.href
    }
    ee = ce.exec(te.toLowerCase()) || [],
    L.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: te,
            type: "GET",
            isLocal: ie.test(ee[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": de,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": L.parseJSON,
                "text xml": L.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? h(h(e, L.ajaxSettings), t) : h(L.ajaxSettings, e)
        },
        ajaxPrefilter: f(ue),
        ajaxTransport: f(le),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var a, l, p, b, j, w = t;
                2 !== T && (T = 2,
                s && clearTimeout(s),
                u = void 0,
                o = r || "",
                E.readyState = e > 0 ? 4 : 0,
                a = e >= 200 && e < 300 || 304 === e,
                n && (b = v(d, E, n)),
                b = y(d, b, E, a),
                a ? (d.ifModified && (j = E.getResponseHeader("Last-Modified"),
                j && (L.lastModified[i] = j),
                j = E.getResponseHeader("etag"),
                j && (L.etag[i] = j)),
                204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state,
                l = b.data,
                p = b.error,
                a = !p)) : (p = w,
                !e && w || (w = "error",
                e < 0 && (e = 0))),
                E.status = e,
                E.statusText = (t || w) + "",
                a ? m.resolveWith(f, [l, w, E]) : m.rejectWith(f, [E, w, p]),
                E.statusCode(x),
                x = void 0,
                c && h.trigger(a ? "ajaxSuccess" : "ajaxError", [E, d, a ? l : p]),
                g.fireWith(f, [E, w]),
                c && (h.trigger("ajaxComplete", [E, d]),
                --L.active || L.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var r, a, i, o, s, c, u, l, d = L.ajaxSetup({}, t), f = d.context || d, h = d.context && (f.nodeType || f.jquery) ? L(f) : L.event, m = L.Deferred(), g = L.Callbacks("once memory"), x = d.statusCode || {}, b = {}, j = {}, T = 0, w = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === T) {
                        if (!l)
                            for (l = {}; t = ae.exec(o); )
                                l[t[1].toLowerCase()] = t[2];
                        t = l[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === T ? o : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return T || (e = j[n] = j[n] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return T || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (T < 2)
                            for (t in e)
                                x[t] = [x[t], e[t]];
                        else
                            E.always(e[E.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return u && u.abort(t),
                    n(0, t),
                    this
                }
            };
            if (m.promise(E).complete = g.add,
            E.success = E.done,
            E.error = E.fail,
            d.url = ((e || d.url || te) + "").replace(ne, "").replace(se, ee[1] + "//"),
            d.type = t.method || t.type || d.method || d.type,
            d.dataTypes = L.trim(d.dataType || "*").toLowerCase().match(W) || [""],
            null == d.crossDomain && (r = ce.exec(d.url.toLowerCase()),
            d.crossDomain = !(!r || r[1] === ee[1] && r[2] === ee[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (ee[3] || ("http:" === ee[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = L.param(d.data, d.traditional)),
            p(ue, d, t, E),
            2 === T)
                return E;
            c = d.global,
            c && 0 === L.active++ && L.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !oe.test(d.type),
            i = d.url,
            d.hasContent || (d.data && (i = d.url += (V.test(i) ? "&" : "?") + d.data,
            delete d.data),
            d.cache === !1 && (d.url = re.test(i) ? i.replace(re, "$1_=" + G++) : i + (V.test(i) ? "&" : "?") + "_=" + G++)),
            d.ifModified && (L.lastModified[i] && E.setRequestHeader("If-Modified-Since", L.lastModified[i]),
            L.etag[i] && E.setRequestHeader("If-None-Match", L.etag[i])),
            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", d.contentType),
            E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + de + "; q=0.01" : "") : d.accepts["*"]);
            for (a in d.headers)
                E.setRequestHeader(a, d.headers[a]);
            if (d.beforeSend && (d.beforeSend.call(f, E, d) === !1 || 2 === T))
                return E.abort();
            w = "abort";
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            })
                E[a](d[a]);
            if (u = p(le, d, t, E)) {
                E.readyState = 1,
                c && h.trigger("ajaxSend", [E, d]),
                d.async && d.timeout > 0 && (s = setTimeout(function() {
                    E.abort("timeout")
                }, d.timeout));
                try {
                    T = 1,
                    u.send(b, n)
                } catch (S) {
                    if (!(T < 2))
                        throw S;
                    n(-1, S)
                }
            } else
                n(-1, "No Transport");
            return E
        },
        getJSON: function(e, t, n) {
            return L.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return L.get(e, void 0, t, "script")
        }
    }),
    L.each(["get", "post"], function(e, t) {
        L[t] = function(e, n, r, a) {
            return L.isFunction(n) && (a = a || r,
            r = n,
            n = void 0),
            L.ajax({
                url: e,
                type: t,
                dataType: a,
                data: n,
                success: r
            })
        }
    }),
    L.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        L.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    L._evalUrl = function(e) {
        return L.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ;
    var pe = /%20/g
      , he = /\[\]$/
      , ve = /\r?\n/g
      , ye = /^(?:submit|button|image|reset|file)$/i
      , me = /^(?:input|select|textarea|keygen)/i;
    L.param = function(e, t) {
        var n, r = [], a = function(e, t) {
            t = L.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = L.ajaxSettings && L.ajaxSettings.traditional),
        L.isArray(e) || e.jquery && !L.isPlainObject(e))
            L.each(e, function() {
                a(this.name, this.value)
            });
        else
            for (n in e)
                m(n, e[n], t, a);
        return r.join("&").replace(pe, "+")
    }
    ,
    L.fn.extend({
        serialize: function() {
            return L.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = L.prop(this, "elements");
                return e ? L.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !L(this).is(":disabled") && me.test(this.nodeName) && !ye.test(e) && (this.checked || !rcheckableType.test(e))
            }).map(function(e, t) {
                var n = L(this).val();
                return null == n ? null : L.isArray(n) ? L.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(ve, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(ve, "\r\n")
                }
            }).get()
        }
    }),
    L.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && g() || x()
    }
    : g;
    var ge = 0
      , xe = {}
      , be = L.ajaxSettings.xhr();
    e.ActiveXObject && L(e).on("unload", function() {
        for (var e in xe)
            xe[e](void 0, !0)
    }),
    D.cors = !!be && "withCredentials"in be,
    be = D.ajax = !!be,
    be && L.ajaxTransport(function(e) {
        if (!e.crossDomain || D.cors) {
            var t;
            return {
                send: function(n, r) {
                    var a, i = e.xhr(), o = ++ge;
                    if (i.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (a in e.xhrFields)
                            i[a] = e.xhrFields[a];
                    e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (a in n)
                        void 0 !== n[a] && i.setRequestHeader(a, n[a] + "");
                    i.send(e.hasContent && e.data || null),
                    t = function(n, a) {
                        var s, c, u;
                        if (t && (a || 4 === i.readyState))
                            if (delete xe[o],
                            t = void 0,
                            i.onreadystatechange = L.noop,
                            a)
                                4 !== i.readyState && i.abort();
                            else {
                                u = {},
                                s = i.status,
                                "string" == typeof i.responseText && (u.text = i.responseText);
                                try {
                                    c = i.statusText
                                } catch (l) {
                                    c = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && r(s, c, u, i.getAllResponseHeaders())
                    }
                    ,
                    e.async ? 4 === i.readyState ? setTimeout(t) : i.onreadystatechange = xe[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    L.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return L.globalEval(e),
                e
            }
        }
    }),
    L.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    L.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = F.head || L("head")[0] || F.documentElement;
            return {
                send: function(r, a) {
                    t = F.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        n || a(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var je = []
      , Te = /(=)\?(?=&|$)|\?\?/;
    L.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = je.pop() || L.expando + "_" + G++;
            return this[e] = !0,
            e
        }
    }),
    L.ajaxPrefilter("json jsonp", function(t, n, r) {
        var a, i, o, s = t.jsonp !== !1 && (Te.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Te.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return a = t.jsonpCallback = L.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Te, "$1" + a) : t.jsonp !== !1 && (t.url += (V.test(t.url) ? "&" : "?") + t.jsonp + "=" + a),
            t.converters["script json"] = function() {
                return o || L.error(a + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            i = e[a],
            e[a] = function() {
                o = arguments
            }
            ,
            r.always(function() {
                e[a] = i,
                t[a] && (t.jsonpCallback = n.jsonpCallback,
                je.push(a)),
                o && L.isFunction(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    L.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || F;
        var r = rsingleTag.exec(e)
          , a = !n && [];
        return r ? [t.createElement(r[1])] : (r = L.buildFragment([e], t, a),
        a && a.length && L(a).remove(),
        L.merge([], r.childNodes))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return L
    });
    var we = e.jQuery
      , Ee = e.$;
    return L.noConflict = function(t) {
        return e.$ === L && (e.$ = Ee),
        t && e.jQuery === L && (e.jQuery = we),
        L
    }
    ,
    typeof t === B && (e.jQuery = e.$ = L),
    L
});
/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a
 Copyright Brian Turek 2008-2016
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information
 Several functions taken from Paul Johnston
 */
"use strict";
!function(r) {
    function t(r, t, f) {
        var s, c, E, d, b, g, v, A, F, w = 0, R = [], B = 0, U = !1, y = [], m = [], H = !1;
        if (f = f || {},
        s = f.encoding || "UTF8",
        F = f.numRounds || 1,
        F !== parseInt(F, 10) || 1 > F)
            throw Error("numRounds must a integer >= 1");
        if ("SHA-1" !== r)
            throw Error("Chosen SHA variant is not supported");
        b = 512,
        g = p,
        v = l,
        d = 160,
        A = function(r) {
            return r.slice()
        }
        ,
        E = i(t, s),
        c = h(r),
        this.setHMACKey = function(t, e, n) {
            var o;
            if (!0 === U)
                throw Error("HMAC key already set");
            if (!0 === H)
                throw Error("Cannot set HMAC key after calling update");
            if (s = (n || {}).encoding || "UTF8",
            e = i(e, s)(t),
            t = e.binLen,
            e = e.value,
            o = b >>> 3,
            n = o / 4 - 1,
            o < t / 8) {
                for (e = v(e, t, 0, h(r), d); e.length <= n; )
                    e.push(0);
                e[n] &= 4294967040
            } else if (o > t / 8) {
                for (; e.length <= n; )
                    e.push(0);
                e[n] &= 4294967040
            }
            for (t = 0; t <= n; t += 1)
                y[t] = 909522486 ^ e[t],
                m[t] = 1549556828 ^ e[t];
            c = g(y, c),
            w = b,
            U = !0
        }
        ,
        this.update = function(r) {
            var t, e, n, o = 0, a = b >>> 5;
            for (t = E(r, R, B),
            r = t.binLen,
            e = t.value,
            t = r >>> 5,
            n = 0; n < t; n += a)
                o + b <= r && (c = g(e.slice(n, n + a), c),
                o += b);
            w += o,
            R = e.slice(o >>> 5),
            B = r % b,
            H = !0;
            var u = function(r) {
                for (var t = "", e = 0; e < 5; e++)
                    for (var n = 0; n < 4; n++) {
                        var o = r[e] >>> 8 * n;
                        o = 255 & o;
                        var a = Number(o).toString(16);
                        a = a.length < 2 ? "0" + a : a,
                        t += a
                    }
                return t
            };
            return u(c)
        }
        ,
        this.getHash = function(t, i) {
            var f, s, p, l;
            if (!0 === U)
                throw Error("Cannot call getHash after setting HMAC key");
            switch (p = u(i),
            t) {
            case "HEX":
                f = function(r) {
                    return e(r, d, p)
                }
                ;
                break;
            case "B64":
                f = function(r) {
                    return n(r, d, p)
                }
                ;
                break;
            case "BYTES":
                f = function(r) {
                    return o(r, d)
                }
                ;
                break;
            case "ARRAYBUFFER":
                try {
                    s = new ArrayBuffer(0)
                } catch (E) {
                    throw Error("ARRAYBUFFER not supported by this environment")
                }
                f = function(r) {
                    return a(r, d)
                }
                ;
                break;
            default:
                throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER")
            }
            for (l = v(R.slice(), B, w, A(c), d),
            s = 1; s < F; s += 1)
                l = v(l, d, 0, h(r), d);
            return f(l)
        }
        ,
        this.getHMAC = function(t, i) {
            var f, s, p, l;
            if (!1 === U)
                throw Error("Cannot call getHMAC without first setting HMAC key");
            switch (p = u(i),
            t) {
            case "HEX":
                f = function(r) {
                    return e(r, d, p)
                }
                ;
                break;
            case "B64":
                f = function(r) {
                    return n(r, d, p)
                }
                ;
                break;
            case "BYTES":
                f = function(r) {
                    return o(r, d)
                }
                ;
                break;
            case "ARRAYBUFFER":
                try {
                    f = new ArrayBuffer(0)
                } catch (E) {
                    throw Error("ARRAYBUFFER not supported by this environment")
                }
                f = function(r) {
                    return a(r, d)
                }
                ;
                break;
            default:
                throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER")
            }
            return s = v(R.slice(), B, w, A(c), d),
            l = g(m, h(r)),
            l = v(s, d, b, l, d),
            f(l)
        }
    }
    function e(r, t, e) {
        var n = "";
        t /= 8;
        var o, a;
        for (o = 0; o < t; o += 1)
            a = r[o >>> 2] >>> 8 * (3 + o % 4 * -1),
            n += "0123456789abcdef".charAt(a >>> 4 & 15) + "0123456789abcdef".charAt(15 & a);
        return e.outputUpper ? n.toUpperCase() : n
    }
    function n(r, t, e) {
        var n, o, a, u = "", i = t / 8;
        for (n = 0; n < i; n += 3)
            for (o = n + 1 < i ? r[n + 1 >>> 2] : 0,
            a = n + 2 < i ? r[n + 2 >>> 2] : 0,
            a = (r[n >>> 2] >>> 8 * (3 + n % 4 * -1) & 255) << 16 | (o >>> 8 * (3 + (n + 1) % 4 * -1) & 255) << 8 | a >>> 8 * (3 + (n + 2) % 4 * -1) & 255,
            o = 0; 4 > o; o += 1)
                u += 8 * n + 6 * o <= t ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 6 * (3 - o) & 63) : e.b64Pad;
        return u
    }
    function o(r, t) {
        var e, n, o = "", a = t / 8;
        for (e = 0; e < a; e += 1)
            n = r[e >>> 2] >>> 8 * (3 + e % 4 * -1) & 255,
            o += String.fromCharCode(n);
        return o
    }
    function a(r, t) {
        var e, n = t / 8, o = new ArrayBuffer(n);
        for (e = 0; e < n; e += 1)
            o[e] = r[e >>> 2] >>> 8 * (3 + e % 4 * -1) & 255;
        return o
    }
    function u(r) {
        var t = {
            outputUpper: !1,
            b64Pad: "=",
            shakeLen: -1
        };
        if (r = r || {},
        t.outputUpper = r.outputUpper || !1,
        !0 === r.hasOwnProperty("b64Pad") && (t.b64Pad = r.b64Pad),
        "boolean" != typeof t.outputUpper)
            throw Error("Invalid outputUpper formatting option");
        if ("string" != typeof t.b64Pad)
            throw Error("Invalid b64Pad formatting option");
        return t
    }
    function i(r, t) {
        var e;
        switch (t) {
        case "UTF8":
        case "UTF16BE":
        case "UTF16LE":
            break;
        default:
            throw Error("encoding must be UTF8, UTF16BE, or UTF16LE")
        }
        switch (r) {
        case "HEX":
            e = function(r, t, e) {
                var n, o, a, u, i, f = r.length;
                if (0 !== f % 2)
                    throw Error("String of HEX type must be in byte increments");
                for (t = t || [0],
                e = e || 0,
                i = e >>> 3,
                n = 0; n < f; n += 2) {
                    if (o = parseInt(r.substr(n, 2), 16),
                    isNaN(o))
                        throw Error("String of HEX type contains invalid characters");
                    for (u = (n >>> 1) + i,
                    a = u >>> 2; t.length <= a; )
                        t.push(0);
                    t[a] |= o << 8 * (3 + u % 4 * -1)
                }
                return {
                    value: t,
                    binLen: 4 * f + e
                }
            }
            ;
            break;
        case "TEXT":
            e = function(r, e, n) {
                var o, a, u, i, f, s, c, h, p = 0;
                if (e = e || [0],
                n = n || 0,
                f = n >>> 3,
                "UTF8" === t)
                    for (h = 3,
                    u = 0; u < r.length; u += 1)
                        for (o = r.charCodeAt(u),
                        a = [],
                        128 > o ? a.push(o) : 2048 > o ? (a.push(192 | o >>> 6),
                        a.push(128 | 63 & o)) : 55296 > o || 57344 <= o ? a.push(224 | o >>> 12, 128 | o >>> 6 & 63, 128 | 63 & o) : (u += 1,
                        o = 65536 + ((1023 & o) << 10 | 1023 & r.charCodeAt(u)),
                        a.push(240 | o >>> 18, 128 | o >>> 12 & 63, 128 | o >>> 6 & 63, 128 | 63 & o)),
                        i = 0; i < a.length; i += 1) {
                            for (c = p + f,
                            s = c >>> 2; e.length <= s; )
                                e.push(0);
                            e[s] |= a[i] << 8 * (h + c % 4 * -1),
                            p += 1
                        }
                else if ("UTF16BE" === t || "UTF16LE" === t)
                    for (h = 2,
                    u = 0; u < r.length; u += 1) {
                        for (o = r.charCodeAt(u),
                        "UTF16LE" === t && (i = 255 & o,
                        o = i << 8 | o >>> 8),
                        c = p + f,
                        s = c >>> 2; e.length <= s; )
                            e.push(0);
                        e[s] |= o << 8 * (h + c % 4 * -1),
                        p += 2
                    }
                return {
                    value: e,
                    binLen: 8 * p + n
                }
            }
            ;
            break;
        case "B64":
            e = function(r, t, e) {
                var n, o, a, u, i, f, s, c = 0;
                if (-1 === r.search(/^[a-zA-Z0-9=+\/]+$/))
                    throw Error("Invalid character in base-64 string");
                if (o = r.indexOf("="),
                r = r.replace(/\=/g, ""),
                -1 !== o && o < r.length)
                    throw Error("Invalid '=' found in base-64 string");
                for (t = t || [0],
                e = e || 0,
                f = e >>> 3,
                o = 0; o < r.length; o += 4) {
                    for (i = r.substr(o, 4),
                    a = u = 0; a < i.length; a += 1)
                        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(i[a]),
                        u |= n << 18 - 6 * a;
                    for (a = 0; a < i.length - 1; a += 1) {
                        for (s = c + f,
                        n = s >>> 2; t.length <= n; )
                            t.push(0);
                        t[n] |= (u >>> 16 - 8 * a & 255) << 8 * (3 + s % 4 * -1),
                        c += 1
                    }
                }
                return {
                    value: t,
                    binLen: 8 * c + e
                }
            }
            ;
            break;
        case "BYTES":
            e = function(r, t, e) {
                var n, o, a, u, i;
                for (t = t || [0],
                e = e || 0,
                a = e >>> 3,
                o = 0; o < r.length; o += 1)
                    n = r.charCodeAt(o),
                    i = o + a,
                    u = i >>> 2,
                    t.length <= u && t.push(0),
                    t[u] |= n << 8 * (3 + i % 4 * -1);
                return {
                    value: t,
                    binLen: 8 * r.length + e
                }
            }
            ;
            break;
        case "ARRAYBUFFER":
            try {
                e = new ArrayBuffer(0)
            } catch (n) {
                throw Error("ARRAYBUFFER not supported by this environment")
            }
            e = function(r, t, e) {
                var n, o, a, u;
                for (t = t || [0],
                e = e || 0,
                o = e >>> 3,
                n = 0; n < r.byteLength; n += 1)
                    u = n + o,
                    a = u >>> 2,
                    t.length <= a && t.push(0),
                    t[a] |= r[n] << 8 * (3 + u % 4 * -1);
                return {
                    value: t,
                    binLen: 8 * r.byteLength + e
                }
            }
            ;
            break;
        default:
            throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER")
        }
        return e
    }
    function f(r, t) {
        return r << t | r >>> 32 - t
    }
    function s(r, t) {
        var e = (65535 & r) + (65535 & t);
        return ((r >>> 16) + (t >>> 16) + (e >>> 16) & 65535) << 16 | 65535 & e
    }
    function c(r, t, e, n, o) {
        var a = (65535 & r) + (65535 & t) + (65535 & e) + (65535 & n) + (65535 & o);
        return ((r >>> 16) + (t >>> 16) + (e >>> 16) + (n >>> 16) + (o >>> 16) + (a >>> 16) & 65535) << 16 | 65535 & a
    }
    function h(r) {
        var t = [];
        if ("SHA-1" !== r)
            throw Error("No SHA variants supported");
        return t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
    }
    function p(r, t) {
        var e, n, o, a, u, i, h, p = [];
        for (e = t[0],
        n = t[1],
        o = t[2],
        a = t[3],
        u = t[4],
        h = 0; 80 > h; h += 1)
            p[h] = 16 > h ? r[h] : f(p[h - 3] ^ p[h - 8] ^ p[h - 14] ^ p[h - 16], 1),
            i = 20 > h ? c(f(e, 5), n & o ^ ~n & a, u, 1518500249, p[h]) : 40 > h ? c(f(e, 5), n ^ o ^ a, u, 1859775393, p[h]) : 60 > h ? c(f(e, 5), n & o ^ n & a ^ o & a, u, 2400959708, p[h]) : c(f(e, 5), n ^ o ^ a, u, 3395469782, p[h]),
            u = a,
            a = o,
            o = f(n, 30),
            n = e,
            e = i;
        return t[0] = s(e, t[0]),
        t[1] = s(n, t[1]),
        t[2] = s(o, t[2]),
        t[3] = s(a, t[3]),
        t[4] = s(u, t[4]),
        t
    }
    function l(r, t, e, n) {
        var o;
        for (o = (t + 65 >>> 9 << 4) + 15; r.length <= o; )
            r.push(0);
        for (r[t >>> 5] |= 128 << 24 - t % 32,
        t += e,
        r[o] = 4294967295 & t,
        r[o - 1] = t / 4294967296 | 0,
        t = r.length,
        o = 0; o < t; o += 16)
            n = p(r.slice(o, o + 16), n);
        return n
    }
    "function" == typeof define && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = t),
    exports = t) : r.jsSHA = t
}(this);
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && (define.amd || define.cmd) ? define(t) : e.CosCloud = t()
}(this, function() {
    "use strict";
    function e(e) {
        this.appid = e.appid,
        this.bucket = e.bucket,
        this.region = e.region,
        e.getAppSign && (this.getAppSign = e.getAppSign),
        e.getAppSignOnce && (this.getAppSignOnce = e.getAppSignOnce)
    }
    function t(e, t) {
        if (!e)
            return "";
        var n = this;
        return e = e.replace(/(^\/*)|(\/*$)/g, ""),
        e = "folder" == t ? encodeURIComponent(e + "/").replace(/%2F/g, "/") : encodeURIComponent(e).replace(/%2F/g, "/"),
        n && (n.path = "/" + n.appid + "/" + n.bucket + "/" + e),
        e
    }
    function n(e) {
        var t = r.Deferred()
          , n = new window.jsSHA("SHA-1","BYTES")
          , i = 0
          , a = e.sliceSize
          , s = new FileReader
          , o = []
          , p = e.file;
        return s.readAsBinaryString(p.slice(i, i + a)),
        s.onload = function(e) {
            if (!(null == p || p.length < 1)) {
                var r = n.update(e.target.result)
                  , c = a;
                if (c + i >= p.size ? c = p.size - i : o.push({
                    offset: i,
                    datalen: c,
                    datasha: r
                }),
                i += a,
                i < p.size) {
                    var l = i + a;
                    l > p.size && (l = p.size),
                    s.readAsBinaryString(p.slice(i, l))
                } else {
                    var d = n.getHash("HEX");
                    o.push({
                        offset: i - a,
                        datalen: c,
                        datasha: d
                    }),
                    t.resolve(o)
                }
            }
        }
        ,
        s.onerror = function() {
            t.reject()
        }
        ,
        t.promise()
    }
    function i(e) {
        var t = r.Deferred()
          , n = e.file
          , i = this
          , s = this.getCgiUrl(e.path, e.sign)
          , o = new FormData
          , p = e.uploadparts;
        return o.append("uploadparts", JSON.stringify(p)),
        o.append("sha", e.sha),
        o.append("op", "upload_slice_init"),
        o.append("filesize", n.size),
        o.append("slice_size", e.sliceSize),
        o.append("biz_attr", e.biz_attr),
        o.append("insertOnly", e.insertOnly),
        r.ajax({
            type: "POST",
            dataType: "JSON",
            url: s,
            data: o,
            success: function(n) {
                if (n = n || {},
                0 == n.code) {
                    if (n.data.access_url)
                        return void t.resolve(n);
                    var s = n.data.session
                      , o = parseInt(n.data.slice_size)
                      , r = n.data.offset || 0;
                    e.session = s,
                    e.slice_size = o,
                    e.offset = r,
                    a.call(i, e).done(function(e) {
                        t.resolve(e)
                    }).fail(function(e) {
                        t.reject(e)
                    })
                } else
                    t.reject(n)
            },
            error: function() {
                t.reject()
            },
            processData: !1,
            contentType: !1
        }),
        t.promise()
    }
    function a(e) {
        var t = this
          , n = r.Deferred()
          , i = new FormData
          , s = e.file
          , o = e.offset || 0
          , p = e.slice_size
          , c = e.session
          , l = s.size
          , d = o + p;
        return i.append("sliceSize", p),
        i.append("op", "upload_slice_data"),
        i.append("session", c),
        i.append("offset", o),
        e.sha && i.append("sha", e.sha),
        i.append("fileContent", t.slice.call(s, o, d)),
        t.getAppSign(function(c) {
            e.sign = c;
            var d = t.getCgiUrl(e.path, e.sign);
            r.ajax({
                type: "POST",
                dataType: "JSON",
                url: d,
                data: i,
                xhr: function() {
                    var t = r.ajaxSettings.xhr();
                    return t.upload.onprogress = function(t) {
                        var n = (o + t.loaded) / s.size;
                        n > 1 && (n = 1),
                        "function" == typeof e.onprogress && e.onprogress(n)
                    }
                    ,
                    t
                },
                success: function(i) {
                    if (i = i || {},
                    0 == i.code) {
                        var s = i.data.offset + p;
                        s < l ? (e.offset = s,
                        a.call(t, e).done(function(e) {
                            n.resolve(e)
                        }).fail(function() {
                            n.reject()
                        })) : ("function" == typeof e.onprogress && e.onprogress(1),
                        n.resolve(i))
                    } else
                        n.reject(i)
                },
                error: function() {
                    n.reject()
                },
                processData: !1,
                contentType: !1
            })
        }),
        n.promise()
    }
    function s(e) {
        var t = this
          , n = r.Deferred()
          , i = e.file;
        return t.getAppSign(function(a) {
            e.sign = a;
            var s = t.getCgiUrl(e.path, e.sign)
              , o = new FormData;
            o.append("op", "upload_slice_list"),
            r.ajax({
                type: "POST",
                dataType: "JSON",
                url: s,
                data: o,
                success: function(t) {
                    if (t = t || {},
                    0 == t.code) {
                        e.session = t.data.session,
                        e.slice_size = t.data.slice_size;
                        var a = t.data.listparts || [];
                        e.listparts = a;
                        var s = a.length;
                        if (s) {
                            var o = e.listparts[s - 1]
                              , r = o.offset;
                            if (r + e.slice_size >= i.size)
                                return n.resolve(),
                                n.promise();
                            e.offset = r
                        }
                        n.resolve(t)
                    } else
                        n.reject(t)
                },
                error: function() {
                    n.reject()
                },
                processData: !1,
                contentType: !1
            })
        }),
        n.promise()
    }
    function o(e) {
        var t = this
          , n = r.Deferred()
          , i = e.file;
        return t.getAppSign(function(a) {
            e.sign = a;
            var s = e.session
              , o = t.getCgiUrl(e.path, e.sign)
              , p = new FormData;
            e.sha && p.append("sha", e.sha),
            p.append("op", "upload_slice_finish"),
            p.append("filesize", i.size),
            p.append("session", s),
            r.ajax({
                type: "POST",
                dataType: "JSON",
                url: o,
                data: p,
                success: function(e) {
                    e = e || {},
                    0 == e.code ? n.resolve(e) : n.reject(e)
                },
                error: function() {
                    n.reject()
                },
                processData: !1,
                contentType: !1
            })
        }),
        n.promise()
    }
    var r = window.jQuery.noConflict(!0)
      , p = 524288
      , c = 1048576
      , l = 20971520;
    return e.prototype.cosapi_cgi_url = "//REGION.file.myqcloud.com/files/v2/",
    e.prototype.slice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
    e.prototype.sliceSize = 3145728,
    e.prototype.getExpired = function(e) {
        return (new Date).getTime() / 1e3 + (e || 60)
    }
    ,
    e.prototype.getSliceSize = function(e) {
        var t = c;
        return t = e <= p ? p : e <= c ? c : c
    }
    ,
    e.prototype.set = function(e) {
        e && (this.appid = e.appid,
        this.bucket = e.bucket,
        this.region = e.region,
        e.getAppSign && (this.getAppSign = e.getAppSign),
        e.getAppSignOnce && (this.getAppSignOnce = e.getAppSignOnce))
    }
    ,
    e.prototype.getCgiUrl = function(e, t) {
        var n = this.region
          , i = this.bucket
          , a = this.cosapi_cgi_url;
        return a = a.replace("REGION", n),
        // 将请求地址改到本地 为反向代理做准备
        "/uploadCos/files/v2/" + this.appid + "/" + i + "/" + e + "?sign=" + t;
        // a + this.appid + "/" + i + "/" + e + "?sign=" + t
    }
    ,
    e.prototype.getAppSign = function(e, t, n) {
        var i = this.getExpired()
          , a = this.sign_url + "?sign_type=appSign&expired=" + i + "&bucketName=" + n;
        r.ajax({
            url: a,
            type: "GET",
            success: e,
            error: t
        })
    }
    ,
    e.prototype.getAppSignOnce = function(e, t, n, i) {
        var a = this.sign_url + "?sign_type=appSign_once&path=" + encodeURIComponent(n) + "&bucketName=" + i;
        r.ajax({
            url: a,
            type: "GET",
            success: e,
            error: t
        })
    }
    ,
    e.prototype.updateFolder = function(e, n, i, a, s) {
        a = t.call(this, a, "folder"),
        this.updateBase(e, n, i, a, s)
    }
    ,
    e.prototype.updateFile = function(e, n, i, a, s) {
        a = t.call(this, a),
        this.updateBase(e, n, i, a, s)
    }
    ,
    e.prototype.updateBase = function(e, t, n, i, a, s, o) {
        var p = this;
        p.getAppSignOnce(function(n) {
            var c = p.getCgiUrl(i, n)
              , l = new FormData;
            l.append("op", "update"),
            a && l.append("biz_attr", a),
            s && l.append("authority", s),
            o && (o = JSON.stringify(o),
            l.append("customHeaders", o)),
            r.ajax({
                type: "POST",
                url: c,
                processData: !1,
                contentType: !1,
                data: l,
                success: e,
                error: t
            })
        })
    }
    ,
    e.prototype.deleteFolder = function(e, n, i, a) {
        a = t.call(this, a, "folder"),
        this.deleteBase(e, n, i, a)
    }
    ,
    e.prototype.deleteFile = function(e, n, i, a) {
        a = t.call(this, a),
        this.deleteBase(e, n, i, a)
    }
    ,
    e.prototype.deleteBase = function(e, t, n, i) {
        if ("/" == i)
            return void t({
                code: 10003,
                message: "不能删除Bucket"
            });
        var a = this;
        this.getAppSignOnce(function(n) {
            var s = a.getCgiUrl(i, n)
              , o = new FormData;
            o.append("op", "delete"),
            r.ajax({
                type: "POST",
                url: s,
                data: o,
                processData: !1,
                contentType: !1,
                success: e,
                error: t
            })
        })
    }
    ,
    e.prototype.getFolderStat = function(e, n, i, a) {
        a = t(a, "folder"),
        this.statBase(e, n, i, a)
    }
    ,
    e.prototype.getFileStat = function(e, n, i, a) {
        a = t(a),
        this.statBase(e, n, i, a)
    }
    ,
    e.prototype.statBase = function(e, t, n, i) {
        var a = this;
        this.getAppSign.call(a, function(n) {
            var s = a.getCgiUrl(i, n)
              , o = {
                op: "stat"
            };
            r.ajax({
                url: s,
                type: "GET",
                data: o,
                success: e,
                error: t
            })
        })
    }
    ,
    e.prototype.createFolder = function(e, n, i, a, s) {
        var o = this;
        this.getAppSign(function(i) {
            a = t(a, "folder");
            var p = o.getCgiUrl(a, i)
              , c = new FormData;
            c.append("op", "create"),
            c.append("biz_attr", s || ""),
            r.ajax({
                type: "POST",
                url: p,
                data: c,
                processData: !1,
                contentType: !1,
                success: e,
                error: n
            })
        })
    }
    ,
    e.prototype.copyFile = function(e, n, i, a, s, o) {
        var p = this;
        this.getAppSign(function(i) {
            a = t(a);
            var c = p.getCgiUrl(a, i)
              , l = new FormData;
            l.append("op", "copy"),
            l.append("dest_fileid", s),
            l.append("to_over_write", o),
            r.ajax({
                type: "POST",
                url: c,
                data: l,
                processData: !1,
                contentType: !1,
                success: e,
                error: n
            })
        })
    }
    ,
    e.prototype.moveFile = function(e, n, i, a, s, o) {
        var p = this;
        this.getAppSign(function(i) {
            a = t(a);
            var c = p.getCgiUrl(a, i)
              , l = new FormData;
            l.append("op", "move"),
            l.append("dest_fileid", s),
            l.append("to_over_write", o),
            r.ajax({
                type: "POST",
                url: c,
                data: l,
                processData: !1,
                contentType: !1,
                success: e,
                error: n
            })
        })
    }
    ,
    e.prototype.getFolderList = function(e, n, i, a, s, o, r, p, c) {
        var l = this;
        a = t(a, "folder"),
        l.listBase(e, n, i, a, s, o, r, p)
    }
    ,
    e.prototype.listBase = function(e, t, n, i, a, s, o, p, c) {
        var l = this;
        l.getAppSign(function(n) {
            var c = l.getCgiUrl(i, n);
            a = a || 20,
            o = o || 0,
            p = p || "eListBoth";
            var d = {
                op: "list",
                num: a,
                context: s,
                order: o,
                pattern: p
            };
            r.ajax({
                url: c,
                type: "GET",
                data: d,
                success: e,
                error: t
            })
        })
    }
    ,
    e.prototype.uploadFile = function(e, n, i, a, s, o, p) {
        var c = this;
        return s = t(s),
        o.size > l ? void c.sliceUploadFile.apply(c, arguments) : void c.getAppSign(function(t) {
            var a = c.getCgiUrl(s, t)
              , l = new FormData;
            l.append("op", "upload"),
            l.append("fileContent", o),
            p >= 0 && l.append("insertOnly", p),
            r.ajax({
                type: "POST",
                url: a,
                data: l,
                processData: !1,
                contentType: !1,
                xhr: function() {
                    var e = r.ajaxSettings.xhr();
                    return e.upload.onprogress = function(e) {
                        var t = e.loaded / e.total;
                        "function" == typeof i && i(t)
                    }
                    ,
                    e
                },
                success: e,
                error: n
            })
        })
    }
    ,
    e.prototype.sliceUploadFile = function(e, r, p, c, l, d, u, f, g) {
        var h = this;
        l = t(l),
        h.getAppSign(function(t) {
            var y = {};
            f = h.getSliceSize(f),
            y.onprogress = p,
            y.bucket = c,
            y.path = l,
            y.file = d,
            y.insertOnly = u,
            y.sliceSize = f || 1048576,
            y.appid = h.appid,
            y.sign = t,
            y.biz_attr = g || "",
            s.call(h, y).always(function(t) {
                t = t || {};
                var s = t.data;
                if (s && s.session) {
                    y.session = s.session;
                    var p = y.listparts;
                    if (p && p.length) {
                        y.listparts = p;
                        var c = p.length;
                        y.offset = p[c - 1].offset
                    }
                    n.call(h, y).done(function(t) {
                        y.uploadparts = t;
                        var n = t.length;
                        y.sha = t[n - 1].datasha,
                        a.call(h, y).done(function() {
                            o.call(h, y).done(function(t) {
                                e(t)
                            }).fail(function(e) {
                                r({
                                    code: -1,
                                    message: e.message || "slice finish error"
                                })
                            })
                        }).fail(function(e) {
                            r({
                                code: -1,
                                message: e.message || "slice upload file error"
                            })
                        })
                    }).fail(function() {
                        r({
                            code: -1,
                            message: "get slice sha1 error"
                        })
                    })
                } else
                    s && s.access_url ? ("function" == typeof y.onprogress && y.onprogress(1),
                    e(t)) : n.call(h, y).done(function(t) {
                        y.uploadparts = t;
                        var n = t.length;
                        y.sha = t[n - 1].datasha,
                        i.call(h, y).done(function(t) {
                            t = t || {};
                            var n = t.data || {};
                            n && n.access_url ? ("function" == typeof y.onprogress && y.onprogress(1),
                            e(t)) : o.call(h, y).done(function(t) {
                                e(t)
                            }).fail(function(e) {
                                r({
                                    code: -1,
                                    message: e.message || "slice finish error"
                                })
                            })
                        }).fail(function(e) {
                            e = e || {},
                            r({
                                code: e.code || -1,
                                message: e.message || "upload slice file error"
                            })
                        })
                    }).fail(function() {
                        r({
                            code: -1,
                            message: "get slice sha1 error"
                        })
                    })
            })
        })
    }
    ,
    e
});
