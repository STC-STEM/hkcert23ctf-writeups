(function() {
    var e = {
            6990: function(e, t, r) {
                "use strict";
                var i = r(1987),
                    s = r(6882);
                const c = e => ((0, i.pushScopeId)("data-v-24108266"), e = e(), (0, i.popScopeId)(), e),
                    o = c((() => (0, i.createElementVNode)("div", {
                        style: {
                            "font-size": "35px",
                            "font-family": "'Satisfy', cursive"
                        }
                    }, [(0, i.createElementVNode)("img", {
                        src: "/flag.png",
                        style: {
                            height: "30px",
                            width: "30px"
                        }
                    }), (0, i.createTextVNode)(" The Flag Game ")], -1)));

                function n(e, t, r, s, c, n) {
                    const l = (0, i.resolveComponent)("b-col"),
                        a = (0, i.resolveComponent)("b-row"),
                        u = (0, i.resolveComponent)("b-container"),
                        d = (0, i.resolveComponent)("b-form-input"),
                        h = (0, i.resolveComponent)("rule-item");
                    return (0, i.openBlock)(), (0, i.createElementBlock)(i.Fragment, null, [(0, i.createVNode)(u, {
                        fluid: ""
                    }, {
                        default: (0, i.withCtx)((() => [(0, i.createVNode)(a, {
                            style: {
                                "font-size": "35px",
                                "font-family": "'Satisfy', cursive"
                            }
                        }, {
                            default: (0, i.withCtx)((() => [(0, i.createVNode)(l, {
                                class: "mt-1",
                                cols: "12"
                            }, {
                                default: (0, i.withCtx)((() => [(0, i.createTextVNode)(" pwnable.hk ")]), void 0, !0),
                                _: 1
                            })]), void 0, !0),
                            _: 1
                        })]), void 0, !0),
                        _: 1
                    }), (0, i.createVNode)(u, null, {
                        default: (0, i.withCtx)((() => [(0, i.createVNode)(a, {
                            "align-h": "center",
                            class: "text-center"
                        }, {
                            default: (0, i.withCtx)((() => [(0, i.createVNode)(l, {
                                cols: "5"
                            }, {
                                default: (0, i.withCtx)((() => [o]), void 0, !0),
                                _: 1
                            })]), void 0, !0),
                            _: 1
                        }), (0, i.createVNode)(a, {
                            "align-h": "center",
                            class: "pt-5"
                        }, {
                            default: (0, i.withCtx)((() => [(0, i.createVNode)(l, {
                                cols: "5"
                            }, {
                                default: (0, i.withCtx)((() => [(0, i.createTextVNode)(" Please choose a flag "), (0, i.createVNode)(d, {
                                    modelValue: c.flag,
                                    "onUpdate:modelValue": t[0] || (t[0] = e => c.flag = e),
                                    disabled: c.finished,
                                    size: "lg",
                                    class: "mt-1 border border-dark text-dark",
                                    style: {
                                        "font-family": "monospace"
                                    }
                                }, null, 8, ["modelValue", "disabled"])]), void 0, !0),
                                _: 1
                            })]), void 0, !0),
                            _: 1
                        }), (0, i.createVNode)(a, {
                            "align-h": "center"
                        }, {
                            default: (0, i.withCtx)((() => [(0, i.createVNode)(l, {
                                cols: "5"
                            }, {
                                default: (0, i.withCtx)((() => [(0, i.createVNode)(i.TransitionGroup, null, {
                                    default: (0, i.withCtx)((() => [((0, i.openBlock)(!0), (0, i.createElementBlock)(i.Fragment, null, (0, i.renderList)(n.displayingRules, (e => ((0, i.openBlock)(), (0, i.createBlock)(h, {
                                        key: `rule-${e.id}`,
                                        id: e.id,
                                        description: e.description,
                                        "is-correct": e.isCorrect
                                    }, null, 8, ["id", "description", "is-correct"])))), 128))]), void 0, !0),
                                    _: 1
                                })]), void 0, !0),
                                _: 1
                            })]), void 0, !0),
                            _: 1
                        })]), void 0, !0),
                        _: 1
                    })], 64)
                }

                function l(e, t, r, s, c, o) {
                    const n = (0, i.resolveComponent)("b-card-text"),
                        l = (0, i.resolveComponent)("b-card");
                    return (0, i.openBlock)(), (0, i.createBlock)(l, {
                        class: (0, i.normalizeClass)([r.isCorrect ? "correct" : "incorrect", "shadow my-4"])
                    }, {
                        header: (0, i.withCtx)((() => [(0, i.createTextVNode)((0, i.toDisplayString)(r.isCorrect ? "" : "") + " Rule " + (0, i.toDisplayString)(r.id), 1)])),
                        default: (0, i.withCtx)((() => [(0, i.createVNode)(n, {
                            innerHTML: r.description
                        }, null, 8, ["innerHTML"])]), void 0, !0),
                        _: 1
                    }, 8, ["class"])
                }
                var a = {
                        name: "RuleX",
                        props: {
                            id: {
                                type: Number,
                                required: !0
                            },
                            description: {
                                type: String,
                                required: !0
                            },
                            isCorrect: {
                                type: Boolean,
                                default: !1
                            }
                        }
                    },
                    u = r(89);
                const d = (0, u.Z)(a, [
                    ["render", l]
                ]);
                var h = d;
                const {
                    sha224: f,
                    sha256: p
                } = r(9946), g = r(9820), m = e => {
                    for (let t = 2, r = Math.sqrt(e); t <= r; t++)
                        if (e % t === 0) return !1;
                    return e > 1
                }, b = [{
                    description: "Your flag must be at least 6 characters.",
                    checker: e => e.length >= 6
                }, {
                    description: "Your flag must start with <code>hkcert23</code>.",
                    checker: e => e.startsWith("hkcert23")
                }, {
                    description: "Your flag must include exactly one <code>{</code> and one <code>}</code>.",
                    checker: e => 1 === e.split("").filter((e => "{" === e)).length && 1 === e.split("").filter((e => "}" === e)).length
                }, {
                    description: "The length of your flag must be a prime.",
                    checker: e => m(e.length)
                }, {
                    description: "The digits in your flag must add up to 26.",
                    checker: e => 26 === e.split("").filter((e => "0123456789".includes(e))).map((e => parseInt(e))).reduce(((e, t) => e + t), 0)
                }, {
                    description: "The length of your flag must not be greater than the answer to the ultimate question of life, the universe, and everything.",
                    checker: e => e.length <= 42
                }, {
                    description: "Your flag must contain at least three underscores.",
                    checker: e => e.split("").filter((e => "_" === e)).length >= 3
                }, {
                    description: "Your flag must not contain the substring <code>flag</code>.",
                    checker: e => !e.includes("flag")
                }, {
                    description: "Your flag must fulfil the flag format.",
                    checker: e => e.match(/^hkcert23{.*}$/)
                }, {
                    description: "The number of digits in your flag must be a prime.",
                    checker: e => m(e.split("").filter((e => "0123456789".includes(e))).length)
                }, {
                    description: "The number of <code>1</code>'s in your flag must be thrice the number of <code>6</code>'s in your flag.",
                    checker: e => e.split("").filter((e => "1" === e)).length === 3 * e.split("").filter((e => "6" === e)).length
                }, {
                    description: "At most 30% of your flag are digits.",
                    checker: e => e.split("").filter((e => "0123456789".includes(e))).length / e.length <= .3
                }, {
                    description: "Your flag must not contain any characters from <code>fail</code>.",
                    checker: e => 0 === e.split("").filter((e => "fail".includes(e))).length
                }, {
                    description: "Your flag must include at most two distinct vowels.",
                    checker: e => e.split("").filter((e => "aeiou".includes(e.toLowerCase()))).filter(((e, t, r) => r.indexOf(e) === t)).length <= 2
                }, {
                    description: "Your flag must include five characters, not necessarily distinct, from <code>mystiz</code>.",
                    checker: e => 5 === e.split("").filter((e => "mystiz".includes(e))).length
                }, {
                    description: "Your flag must contain exactly 20 distinct characters.",
                    checker: e => 20 === e.split("").filter(((e, t, r) => r.indexOf(e) === t)).length
                }, {
                    description: "Your flag must not contain upper-case characters.",
                    checker: e => 0 === e.split("").filter((e => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(e))).length
                }, {
                    description: "Your flag must contain the substring <code>y0u</code>.",
                    checker: e => e.includes("y0u")
                }, {
                    description: "Your flag must not contain consecutive double letters.",
                    checker: e => e.length > 1 && [...Array(e.length - 1).keys()].every(((t, r) => e[r] !== e[r + 1]))
                }, {
                    description: "At least 40% of your flag are hexadecimal digits.",
                    checker: e => e.split("").filter((e => "0123456789abcdefABCDEF".includes(e))).length / e.length >= .4
                }, {
                    description: "Your flag must match the REGEX <code>/[A-Za-z0-9]{9}/</code>.",
                    checker: e => e.match(/[A-Za-z0-9]{9}/)
                }, {
                    description: "The ASCII values of the characters in your flag must sum up to a multiple of 65.",
                    checker: e => e.split("").map((e => e.charCodeAt(0))).reduce(((e, t) => e + t), 0) % 65 === 0
                }, {
                    description: "Every occurrance of <code>n</code> in your flag must immediately followed by a digit.",
                    checker: e => e.split("").map(((t, r) => "n" !== t || "0123456789".includes(e[r + 1]))).every((e => e))
                }, {
                    description: "No characters in your flag can occur more than 6 times.",
                    checker: e => 0 === e.length || e.split("").map((t => [e.split("").filter((e => t == e)).length, t])).sort().pop()[0] <= 6
                }, {
                    description: "Rule 22 should still be satisfied if each of the <code>3</code>s in your flag have been replaced by a <code>@</code>.",
                    checker: e => e.replace(/3/g, "@").split("").map((e => e.charCodeAt(0))).reduce(((e, t) => e + t), 0) % 65 === 0
                }, {
                    description: 'Your flag must reach a strength 4 in <a href="https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation" target="_blank" ref="nofollow">zxcvbn password test</a>.',
                    checker: e => 4 === g(e).score
                }, {
                    description: "Rule 20 should no longer be satisfied if all of the <code>d</code>s in your flag are removed.",
                    checker: e => e.replace(/d/g, "").split("").filter((e => "0123456789abcdefABCDEF".includes(e))).length / e.replace(/d/g, "").length < .4
                }, {
                    description: "Your flag must be .",
                    checker: e => f(e.substr(0, 8)).startsWith("b08c89")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 14)).startsWith("d0687a")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 12)).startsWith("87b3c7")
                }, {
                    description: "Your flag must be .",
                    checker: e => f(e.substr(0, 22)).startsWith("8b035b")
                }, {
                    description: "Your flag must be .",
                    checker: e => f(e.substr(0, 40)).startsWith("8a9de8")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 26)).startsWith("7be965")
                }, {
                    description: "Your flag must be .",
                    checker: e => f(e.substr(0, 30)).startsWith("bf7eeb")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 36)).startsWith("7ef31a")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 24)).startsWith("40f34c")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 20)).startsWith("b72709")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 38)).startsWith("e3c817")
                }, {
                    description: "Your flag must be .",
                    checker: e => f(e.substr(0, 28)).startsWith("0b67cb")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 32)).startsWith("f9f48b")
                }, {
                    description: "Your flag must be .",
                    checker: e => f(e.substr(0, 34)).startsWith("69260f")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 18)).startsWith("c25dd2")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 16)).startsWith("cbe2c9")
                }, {
                    description: "Your flag must be .",
                    checker: e => f(e.substr(0, 10)).startsWith("ce45fd")
                }, {
                    description: "Your flag must be .",
                    checker: e => p(e.substr(0, 42)).startsWith("e3c817")
                }];

                function k(e, t) {
                    return e.isCorrect && !t.isCorrect ? 1 : !e.isCorrect && t.isCorrect ? -1 : t.id - e.id
                }
                var v = {
                    name: "App",
                    components: {
                        RuleItem: h
                    },
                    data() {
                        return {
                            flag: "",
                            rulesReleased: 0,
                            finished: !1
                        }
                    },
                    computed: {
                        formattedRules() {
                            return b.map(((e, t) => ({
                                id: t + 1,
                                description: e.description,
                                isCorrect: e.checker(this.flag)
                            })))
                        },
                        releasedRules() {
                            return this.formattedRules.filter(((e, t) => t < this.rulesReleased))
                        },
                        displayingRules() {
                            return this.releasedRules.map((e => e)).sort(k)
                        }
                    },
                    watch: {
                        flag() {
                            this.checkReleaseRule()
                        },
                        releasedRules() {
                            this.checkReleaseRule()
                        }
                    },
                    methods: {
                        checkReleaseRule() {
                            this.releasedRules.every((e => e.isCorrect)) && (this.rulesReleased < b.length ? this.rulesReleased += 1 : this.finished = !0)
                        }
                    }
                };
                const y = (0, u.Z)(v, [
                    ["render", n],
                    ["__scopeId", "data-v-24108266"]
                ]);
                var C = y;
                r(7024);
                (0, i.createApp)(C).use(s.XG7).mount("#app")
            },
            1581: function() {},
            2040: function() {}
        },
        t = {};

    function r(i) {
        var s = t[i];
        if (void 0 !== s) return s.exports;
        var c = t[i] = {
            exports: {}
        };
        return e[i].call(c.exports, c, c.exports, r), c.exports
    }
    r.m = e,
        function() {
            r.amdO = {}
        }(),
        function() {
            var e = [];
            r.O = function(t, i, s, c) {
                if (!i) {
                    var o = 1 / 0;
                    for (u = 0; u < e.length; u++) {
                        i = e[u][0], s = e[u][1], c = e[u][2];
                        for (var n = !0, l = 0; l < i.length; l++)(!1 & c || o >= c) && Object.keys(r.O).every((function(e) {
                            return r.O[e](i[l])
                        })) ? i.splice(l--, 1) : (n = !1, c < o && (o = c));
                        if (n) {
                            e.splice(u--, 1);
                            var a = s();
                            void 0 !== a && (t = a)
                        }
                    }
                    return t
                }
                c = c || 0;
                for (var u = e.length; u > 0 && e[u - 1][2] > c; u--) e[u] = e[u - 1];
                e[u] = [i, s, c]
            }
        }(),
        function() {
            r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return r.d(t, {
                    a: t
                }), t
            }
        }(),
        function() {
            r.d = function(e, t) {
                for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
            }
        }(),
        function() {
            r.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        }(),
        function() {
            r.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            var e = {
                143: 0
            };
            r.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, i) {
                    var s, c, o = i[0],
                        n = i[1],
                        l = i[2],
                        a = 0;
                    if (o.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (s in n) r.o(n, s) && (r.m[s] = n[s]);
                        if (l) var u = l(r)
                    }
                    for (t && t(i); a < o.length; a++) c = o[a], r.o(e, c) && e[c] && e[c][0](), e[c] = 0;
                    return r.O(u)
                },
                i = self["webpackChunkthe_flag_game"] = self["webpackChunkthe_flag_game"] || [];
            i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i))
        }();
    var i = r.O(void 0, [998], (function() {
        return r(6990)
    }));
    i = r.O(i)
})();
//# sourceMappingURL=app.38bf3c86.js.map