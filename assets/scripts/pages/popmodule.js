// export function publicFn() {
//   !(function (t, e) {
//     "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = "undefined" != typeof globalThis ? globalThis : t || self).popmotion = {}));
//   })(this, function (t) {
//     "use strict";
//     function e(t, e) {
//       var n = {};
//       for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
//       if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
//         var o = 0;
//         for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
//       }
//       return n;
//     }
//     const n = (t, e, n) => Math.min(Math.max(n, t), e),
//       r = 0.001;
//     function o({ duration: t = 800, bounce: e = 0.25, velocity: o = 0, mass: a = 1 }) {
//       let i,
//         c,
//         u = 1 - e;
//       (u = n(0.05, 1, u)),
//         (t = n(0.01, 10, t / 1e3)),
//         u < 1
//           ? ((i = (e) => {
//               const n = e * u,
//                 a = n * t,
//                 i = n - o,
//                 c = s(e, u),
//                 l = Math.exp(-a);
//               return r - (i / c) * l;
//             }),
//             (c = (e) => {
//               const n = e * u * t,
//                 a = n * o + o,
//                 c = Math.pow(u, 2) * Math.pow(e, 2) * t,
//                 l = Math.exp(-n),
//                 p = s(Math.pow(e, 2), u);
//               return ((-i(e) + r > 0 ? -1 : 1) * ((a - c) * l)) / p;
//             }))
//           : ((i = (e) => Math.exp(-e * t) * ((e - o) * t + 1) - 0.001), (c = (e) => Math.exp(-e * t) * (t * t * (o - e))));
//       const l = (function (t, e, n) {
//         let r = n;
//         for (let n = 1; n < 12; n++) r -= t(r) / e(r);
//         return r;
//       })(i, c, 5 / t);
//       if (((t *= 1e3), isNaN(l))) return { stiffness: 100, damping: 10, duration: t };
//       {
//         const e = Math.pow(l, 2) * a;
//         return { stiffness: e, damping: 2 * u * Math.sqrt(a * e), duration: t };
//       }
//     }
//     function s(t, e) {
//       return t * Math.sqrt(1 - e * e);
//     }
//     const a = ["duration", "bounce"],
//       i = ["stiffness", "damping", "mass"];
//     function c(t, e) {
//       return e.some((e) => void 0 !== t[e]);
//     }
//     function u(t) {
//       var { from: n = 0, to: r = 1, restSpeed: u = 2, restDelta: p } = t,
//         f = e(t, ["from", "to", "restSpeed", "restDelta"]);
//       const d = { done: !1, value: n };
//       let {
//           stiffness: h,
//           damping: m,
//           mass: g,
//           velocity: y,
//           duration: b,
//           isResolvedFromDuration: M,
//         } = (function (t) {
//           let e = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, t);
//           if (!c(t, i) && c(t, a)) {
//             const n = o(t);
//             (e = Object.assign(Object.assign(Object.assign({}, e), n), { velocity: 0, mass: 1 })), (e.isResolvedFromDuration = !0);
//           }
//           return e;
//         })(f),
//         v = l,
//         O = l;
//       function x() {
//         const t = y ? -y / 1e3 : 0,
//           e = r - n,
//           o = m / (2 * Math.sqrt(h * g)),
//           a = Math.sqrt(h / g) / 1e3;
//         if ((void 0 === p && (p = Math.min(Math.abs(r - n) / 100, 0.4)), o < 1)) {
//           const n = s(a, o);
//           (v = (s) => {
//             const i = Math.exp(-o * a * s);
//             return r - i * (((t + o * a * e) / n) * Math.sin(n * s) + e * Math.cos(n * s));
//           }),
//             (O = (r) => {
//               const s = Math.exp(-o * a * r);
//               return o * a * s * ((Math.sin(n * r) * (t + o * a * e)) / n + e * Math.cos(n * r)) - s * (Math.cos(n * r) * (t + o * a * e) - n * e * Math.sin(n * r));
//             });
//         } else if (1 === o) v = (n) => r - Math.exp(-a * n) * (e + (t + a * e) * n);
//         else {
//           const n = a * Math.sqrt(o * o - 1);
//           v = (s) => {
//             const i = Math.exp(-o * a * s),
//               c = Math.min(n * s, 300);
//             return r - (i * ((t + o * a * e) * Math.sinh(c) + n * e * Math.cosh(c))) / n;
//           };
//         }
//       }
//       return (
//         x(),
//         {
//           next: (t) => {
//             const e = v(t);
//             if (M) d.done = t >= b;
//             else {
//               const n = 1e3 * O(t),
//                 o = Math.abs(n) <= u,
//                 s = Math.abs(r - e) <= p;
//               d.done = o && s;
//             }
//             return (d.value = d.done ? r : e), d;
//           },
//           flipTarget: () => {
//             (y = -y), ([n, r] = [r, n]), x();
//           },
//         }
//       );
//     }
//     u.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
//     const l = (t) => 0,
//       p = (t, e, n) => {
//         const r = e - t;
//         return 0 === r ? 1 : (n - t) / r;
//       },
//       f = (t, e, n) => -n * t + n * e + t,
//       d = (t, e) => (n) => Math.max(Math.min(n, e), t),
//       h = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
//       m = /(-)?([\d]*\.?[\d])+/g,
//       g = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
//       y = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
//     function b(t) {
//       return "string" == typeof t;
//     }
//     const M = { test: (t) => "number" == typeof t, parse: parseFloat, transform: (t) => t },
//       v = Object.assign(Object.assign({}, M), { transform: d(0, 1) });
//     Object.assign(Object.assign({}, M), { default: 1 });
//     const O = ((x = "%"), { test: (t) => b(t) && t.endsWith(x) && 1 === t.split(" ").length, parse: parseFloat, transform: (t) => `${t}${x}` });
//     var x;
//     Object.assign(Object.assign({}, O), { parse: (t) => O.parse(t) / 100, transform: (t) => O.transform(100 * t) });
//     const w = (t, e) => (n) => Boolean((b(n) && y.test(n) && n.startsWith(t)) || (e && Object.prototype.hasOwnProperty.call(n, e))),
//       j = (t, e, n) => (r) => {
//         if (!b(r)) return r;
//         const [o, s, a, i] = r.match(m);
//         return { [t]: parseFloat(o), [e]: parseFloat(s), [n]: parseFloat(a), alpha: void 0 !== i ? parseFloat(i) : 1 };
//       },
//       I = { test: w("hsl", "hue"), parse: j("hue", "saturation", "lightness"), transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(t) + ", " + O.transform(h(e)) + ", " + O.transform(h(n)) + ", " + h(v.transform(r)) + ")" },
//       A = d(0, 255),
//       D = Object.assign(Object.assign({}, M), { transform: (t) => Math.round(A(t)) }),
//       P = { test: w("rgb", "red"), parse: j("red", "green", "blue"), transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) => "rgba(" + D.transform(t) + ", " + D.transform(e) + ", " + D.transform(n) + ", " + h(v.transform(r)) + ")" };
//     const S = {
//         test: w("#"),
//         parse: function (t) {
//           let e = "",
//             n = "",
//             r = "",
//             o = "";
//           return (
//             t.length > 5 ? ((e = t.substr(1, 2)), (n = t.substr(3, 2)), (r = t.substr(5, 2)), (o = t.substr(7, 2))) : ((e = t.substr(1, 1)), (n = t.substr(2, 1)), (r = t.substr(3, 1)), (o = t.substr(4, 1)), (e += e), (n += n), (r += r), (o += o)),
//             { red: parseInt(e, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: o ? parseInt(o, 16) / 255 : 1 }
//           );
//         },
//         transform: P.transform,
//       },
//       T = (t) => P.test(t) || S.test(t) || I.test(t),
//       F = (t) => (P.test(t) ? P.parse(t) : I.test(t) ? I.parse(t) : S.parse(t)),
//       R = (t) => (b(t) ? t : t.hasOwnProperty("red") ? P.transform(t) : I.transform(t)),
//       C = "${c}",
//       k = "${n}";
//     function q(t) {
//       "number" == typeof t && (t = `${t}`);
//       const e = [];
//       let n = 0;
//       const r = t.match(g);
//       r && ((n = r.length), (t = t.replace(g, C)), e.push(...r.map(F)));
//       const o = t.match(m);
//       return o && ((t = t.replace(m, k)), e.push(...o.map(M.parse))), { values: e, numColors: n, tokenised: t };
//     }
//     function N(t) {
//       return q(t).values;
//     }
//     function $(t) {
//       const { values: e, numColors: n, tokenised: r } = q(t),
//         o = e.length;
//       return (t) => {
//         let e = r;
//         for (let r = 0; r < o; r++) e = e.replace(r < n ? C : k, r < n ? R(t[r]) : h(t[r]));
//         return e;
//       };
//     }
//     const B = (t) => ("number" == typeof t ? 0 : t);
//     const E = {
//       test: function (t) {
//         var e, n, r, o;
//         return isNaN(t) && b(t) && (null !== (n = null === (e = t.match(m)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = t.match(g)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0;
//       },
//       parse: N,
//       createTransformer: $,
//       getAnimatableNone: function (t) {
//         const e = N(t);
//         return $(t)(e.map(B));
//       },
//     };
//     function U(t, e, n) {
//       return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
//     }
//     function z({ hue: t, saturation: e, lightness: n, alpha: r }) {
//       (t /= 360), (n /= 100);
//       let o = 0,
//         s = 0,
//         a = 0;
//       if ((e /= 100)) {
//         const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
//           i = 2 * n - r;
//         (o = U(i, r, t + 1 / 3)), (s = U(i, r, t)), (a = U(i, r, t - 1 / 3));
//       } else o = s = a = n;
//       return { red: Math.round(255 * o), green: Math.round(255 * s), blue: Math.round(255 * a), alpha: r };
//     }
//     const G = (t, e, n) => {
//         const r = t * t,
//           o = e * e;
//         return Math.sqrt(Math.max(0, n * (o - r) + r));
//       },
//       H = [S, P, I],
//       L = (t) => H.find((e) => e.test(t)),
//       W = (t, e) => {
//         let n = L(t),
//           r = L(e),
//           o = n.parse(t),
//           s = r.parse(e);
//         n === I && ((o = z(o)), (n = P)), r === I && ((s = z(s)), (r = P));
//         const a = Object.assign({}, o);
//         return (t) => {
//           for (const e in a) "alpha" !== e && (a[e] = G(o[e], s[e], t));
//           return (a.alpha = f(o.alpha, s.alpha, t)), n.transform(a);
//         };
//       },
//       _ = { x: 0, y: 0, z: 0 },
//       V = (t) => "number" == typeof t,
//       J = (t, e) => (n) => e(t(n)),
//       K = (...t) => t.reduce(J);
//     function Q(t, e) {
//       return V(t) ? (n) => f(t, e, n) : T(t) ? W(t, e) : tt(t, e);
//     }
//     const X = (t, e) => {
//         const n = [...t],
//           r = n.length,
//           o = t.map((t, n) => Q(t, e[n]));
//         return (t) => {
//           for (let e = 0; e < r; e++) n[e] = o[e](t);
//           return n;
//         };
//       },
//       Y = (t, e) => {
//         const n = Object.assign(Object.assign({}, t), e),
//           r = {};
//         for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = Q(t[o], e[o]));
//         return (t) => {
//           for (const e in r) n[e] = r[e](t);
//           return n;
//         };
//       };
//     function Z(t) {
//       const e = E.parse(t),
//         n = e.length;
//       let r = 0,
//         o = 0,
//         s = 0;
//       for (let t = 0; t < n; t++) r || "number" == typeof e[t] ? r++ : void 0 !== e[t].hue ? s++ : o++;
//       return { parsed: e, numNumbers: r, numRGB: o, numHSL: s };
//     }
//     const tt = (t, e) => {
//         const n = E.createTransformer(e),
//           r = Z(t),
//           o = Z(e);
//         return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? K(X(r.parsed, o.parsed), n) : (n) => `${n > 0 ? e : t}`;
//       },
//       et = (t, e) => (n) => f(t, e, n);
//     function nt(t, e, n) {
//       const r = [],
//         o = n || ("number" == typeof (s = t[0]) ? et : "string" == typeof s ? (T(s) ? W : tt) : Array.isArray(s) ? X : "object" == typeof s ? Y : void 0);
//       var s;
//       const a = t.length - 1;
//       for (let n = 0; n < a; n++) {
//         let s = o(t[n], t[n + 1]);
//         if (e) {
//           const t = Array.isArray(e) ? e[n] : e;
//           s = K(t, s);
//         }
//         r.push(s);
//       }
//       return r;
//     }
//     function rt(t, e, { clamp: r = !0, ease: o, mixer: s } = {}) {
//       const a = t.length;
//       e.length, !o || !Array.isArray(o) || o.length, t[0] > t[a - 1] && ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
//       const i = nt(e, o, s),
//         c =
//           2 === a
//             ? (function ([t, e], [n]) {
//                 return (r) => n(p(t, e, r));
//               })(t, i)
//             : (function (t, e) {
//                 const n = t.length,
//                   r = n - 1;
//                 return (o) => {
//                   let s = 0,
//                     a = !1;
//                   if ((o <= t[0] ? (a = !0) : o >= t[r] && ((s = r - 1), (a = !0)), !a)) {
//                     let e = 1;
//                     for (; e < n && !(t[e] > o || e === r); e++);
//                     s = e - 1;
//                   }
//                   const i = p(t[s], t[s + 1], o);
//                   return e[s](i);
//                 };
//               })(t, i);
//       return r ? (e) => c(n(t[0], t[a - 1], e)) : c;
//     }
//     const ot = (t) => (e) => 1 - t(1 - e),
//       st = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
//       at = (t) => (e) => Math.pow(e, t),
//       it = (t) => (e) => e * e * ((t + 1) * e - t),
//       ct = (t) => {
//         const e = it(t);
//         return (t) => ((t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))));
//       },
//       ut = (t) => t,
//       lt = at(2),
//       pt = ot(lt),
//       ft = st(lt),
//       dt = (t) => 1 - Math.sin(Math.acos(t)),
//       ht = ot(dt),
//       mt = st(ht),
//       gt = it(1.525),
//       yt = ot(gt),
//       bt = st(gt),
//       Mt = ct(1.525),
//       vt = (t) => {
//         if (1 === t || 0 === t) return t;
//         const e = t * t;
//         return t < 0.36363636363636365 ? 7.5625 * e : t < 0.7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < 0.9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72;
//       },
//       Ot = ot(vt);
//     function xt(t, e) {
//       return t.map(() => e || ft).splice(0, t.length - 1);
//     }
//     function wt({ from: t = 0, to: e = 1, ease: n, offset: r, duration: o = 300 }) {
//       const s = { done: !1, value: t },
//         a = Array.isArray(e) ? e : [t, e],
//         i = (function (t, e) {
//           return t.map((t) => t * e);
//         })(
//           r && r.length === a.length
//             ? r
//             : (function (t) {
//                 const e = t.length;
//                 return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
//               })(a),
//           o
//         );
//       function c() {
//         return rt(i, a, { ease: Array.isArray(n) ? n : xt(a, n) });
//       }
//       let u = c();
//       return {
//         next: (t) => ((s.value = u(t)), (s.done = t >= o), s),
//         flipTarget: () => {
//           a.reverse(), (u = c());
//         },
//       };
//     }
//     function jt({ velocity: t = 0, from: e = 0, power: n = 0.8, timeConstant: r = 350, restDelta: o = 0.5, modifyTarget: s }) {
//       const a = { done: !1, value: e };
//       let i = n * t;
//       const c = e + i,
//         u = void 0 === s ? c : s(c);
//       return (
//         u !== c && (i = u - e),
//         {
//           next: (t) => {
//             const e = -i * Math.exp(-t / r);
//             return (a.done = !(e > o || e < -o)), (a.value = a.done ? u : u + e), a;
//           },
//           flipTarget: () => {},
//         }
//       );
//     }
//     const It = { keyframes: wt, spring: u, decay: jt };
//     const At = (1 / 60) * 1e3,
//       Dt = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
//       Pt = "undefined" != typeof window ? (t) => window.requestAnimationFrame(t) : (t) => setTimeout(() => t(Dt()), At);
//     let St = !0,
//       Tt = !1,
//       Ft = !1;
//     const Rt = { delta: 0, timestamp: 0 },
//       Ct = ["read", "update", "preRender", "render", "postRender"],
//       kt = Ct.reduce(
//         (t, e) => (
//           (t[e] = (function (t) {
//             let e = [],
//               n = [],
//               r = 0,
//               o = !1,
//               s = !1;
//             const a = new WeakSet(),
//               i = {
//                 schedule: (t, s = !1, i = !1) => {
//                   const c = i && o,
//                     u = c ? e : n;
//                   return s && a.add(t), -1 === u.indexOf(t) && (u.push(t), c && o && (r = e.length)), t;
//                 },
//                 cancel: (t) => {
//                   const e = n.indexOf(t);
//                   -1 !== e && n.splice(e, 1), a.delete(t);
//                 },
//                 process: (c) => {
//                   if (o) s = !0;
//                   else {
//                     if (((o = !0), ([e, n] = [n, e]), (n.length = 0), (r = e.length), r))
//                       for (let n = 0; n < r; n++) {
//                         const r = e[n];
//                         r(c), a.has(r) && (i.schedule(r), t());
//                       }
//                     (o = !1), s && ((s = !1), i.process(c));
//                   }
//                 },
//               };
//             return i;
//           })(() => (Tt = !0))),
//           t
//         ),
//         {}
//       ),
//       qt = Ct.reduce((t, e) => {
//         const n = kt[e];
//         return (t[e] = (t, e = !1, r = !1) => (Tt || Et(), n.schedule(t, e, r))), t;
//       }, {}),
//       Nt = Ct.reduce((t, e) => ((t[e] = kt[e].cancel), t), {});
//     Ct.reduce((t, e) => ((t[e] = () => kt[e].process(Rt)), t), {});
//     const $t = (t) => kt[t].process(Rt),
//       Bt = (t) => {
//         (Tt = !1), (Rt.delta = St ? At : Math.max(Math.min(t - Rt.timestamp, 40), 1)), (Rt.timestamp = t), (Ft = !0), Ct.forEach($t), (Ft = !1), Tt && ((St = !1), Pt(Bt));
//       },
//       Et = () => {
//         (Tt = !0), (St = !0), Ft || Pt(Bt);
//       },
//       Ut = () => Rt;
//     function zt(t, e, n = 0) {
//       return t - e - n;
//     }
//     const Gt = (t) => {
//       const e = ({ delta: e }) => t(e);
//       return { start: () => qt.update(e, !0), stop: () => Nt.update(e) };
//     };
//     function Ht(t) {
//       var n,
//         r,
//         { from: o, autoplay: s = !0, driver: a = Gt, elapsed: i = 0, repeat: c = 0, repeatType: l = "loop", repeatDelay: p = 0, onPlay: f, onStop: d, onComplete: h, onRepeat: m, onUpdate: g } = t,
//         y = e(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
//       let b,
//         M,
//         v,
//         { to: O } = y,
//         x = 0,
//         w = y.duration,
//         j = !1,
//         I = !0;
//       const A = (function (t) {
//         if (Array.isArray(t.to)) return wt;
//         if (It[t.type]) return It[t.type];
//         const e = new Set(Object.keys(t));
//         return e.has("ease") || (e.has("duration") && !e.has("dampingRatio")) ? wt : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? u : wt;
//       })(y);
//       (null === (r = (n = A).needsInterpolation) || void 0 === r ? void 0 : r.call(n, o, O)) && ((v = rt([0, 100], [o, O], { clamp: !1 })), (o = 0), (O = 100));
//       const D = A(Object.assign(Object.assign({}, y), { from: o, to: O }));
//       function P() {
//         x++,
//           "reverse" === l
//             ? ((I = x % 2 == 0),
//               (i = (function (t, e, n = 0, r = !0) {
//                 return r ? zt(e + -t, e, n) : e - (t - e) + n;
//               })(i, w, p, I)))
//             : ((i = zt(i, w, p)), "mirror" === l && D.flipTarget()),
//           (j = !1),
//           m && m();
//       }
//       function S(t) {
//         if ((I || (t = -t), (i += t), !j)) {
//           const t = D.next(Math.max(0, i));
//           (M = t.value), v && (M = v(M)), (j = I ? t.done : i <= 0);
//         }
//         null == g || g(M),
//           j &&
//             (0 === x && (null != w || (w = i)),
//             x < c
//               ? (function (t, e, n, r) {
//                   return r ? t >= e + n : t <= -n;
//                 })(i, w, p, I) && P()
//               : (b.stop(), h && h()));
//       }
//       return (
//         s && (null == f || f(), (b = a(S)), b.start()),
//         {
//           stop: () => {
//             null == d || d(), b.stop();
//           },
//         }
//       );
//     }
//     function Lt(t, e) {
//       return e ? t * (1e3 / e) : 0;
//     }
//     const Wt = (t) => (180 * t) / Math.PI,
//       _t = (t) => t,
//       Vt =
//         (t = _t) =>
//         (e, n, r) => {
//           const o = n - r,
//             s = -(0 - e + 1) * (0 - t(Math.abs(o)));
//           return o <= 0 ? n + s : n - s;
//         },
//       Jt = Vt(),
//       Kt = Vt(Math.sqrt),
//       Qt = (t) => (t * Math.PI) / 180,
//       Xt = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
//       Yt = (t) => Xt(t) && t.hasOwnProperty("z"),
//       Zt = (t, e) => Math.abs(t - e);
//     const te = (t, e = 2) => ((e = Math.pow(10, e)), Math.round(t * e) / e),
//       ee = (t, e, n, r = 0) => te(t + (n * (e - t)) / Math.max(r, n));
//     const ne = (t, e) => 1 - 3 * e + 3 * t,
//       re = (t, e) => 3 * e - 6 * t,
//       oe = (t) => 3 * t,
//       se = (t, e, n) => ((ne(e, n) * t + re(e, n)) * t + oe(e)) * t,
//       ae = (t, e, n) => 3 * ne(e, n) * t * t + 2 * re(e, n) * t + oe(e);
//     const ie = 0.1;
//     (t.angle = (t, e = _) => Wt(Math.atan2(e.y - t.y, e.x - t.x))),
//       (t.animate = Ht),
//       (t.anticipate = Mt),
//       (t.applyOffset = (t, e) => {
//         let n = !0;
//         return void 0 === e && ((e = t), (n = !1)), (r) => (n ? r - t + e : ((t = r), (n = !0), e));
//       }),
//       (t.attract = Jt),
//       (t.attractExpo = Kt),
//       (t.backIn = gt),
//       (t.backInOut = bt),
//       (t.backOut = yt),
//       (t.bounceIn = Ot),
//       (t.bounceInOut = (t) => (t < 0.5 ? 0.5 * (1 - vt(1 - 2 * t)) : 0.5 * vt(2 * t - 1) + 0.5)),
//       (t.bounceOut = vt),
//       (t.circIn = dt),
//       (t.circInOut = mt),
//       (t.circOut = ht),
//       (t.clamp = n),
//       (t.createAnticipate = ct),
//       (t.createAttractor = Vt),
//       (t.createBackIn = it),
//       (t.createExpoIn = at),
//       (t.cubicBezier = function (t, e, n, r) {
//         if (t === e && n === r) return ut;
//         const o = new Float32Array(11);
//         for (let e = 0; e < 11; ++e) o[e] = se(e * ie, t, n);
//         function s(e) {
//           let r = 0,
//             s = 1;
//           for (; 10 !== s && o[s] <= e; ++s) r += ie;
//           --s;
//           const a = r + ((e - o[s]) / (o[s + 1] - o[s])) * ie,
//             i = ae(a, t, n);
//           return i >= 0.001
//             ? (function (t, e, n, r) {
//                 for (let o = 0; o < 8; ++o) {
//                   const o = ae(e, n, r);
//                   if (0 === o) return e;
//                   e -= (se(e, n, r) - t) / o;
//                 }
//                 return e;
//               })(e, a, t, n)
//             : 0 === i
//             ? a
//             : (function (t, e, n, r, o) {
//                 let s,
//                   a,
//                   i = 0;
//                 do {
//                   (a = e + (n - e) / 2), (s = se(a, r, o) - t), s > 0 ? (n = a) : (e = a);
//                 } while (Math.abs(s) > 1e-7 && ++i < 10);
//                 return a;
//               })(e, r, r + ie, t, n);
//         }
//         return (t) => (0 === t || 1 === t ? t : se(s(t), e, r));
//       }),
//       (t.decay = jt),
//       (t.degreesToRadians = Qt),
//       (t.distance = function (t, e) {
//         if (V(t) && V(e)) return Zt(t, e);
//         if (Xt(t) && Xt(e)) {
//           const n = Zt(t.x, e.x),
//             r = Zt(t.y, e.y),
//             o = Yt(t) && Yt(e) ? Zt(t.z, e.z) : 0;
//           return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2));
//         }
//       }),
//       (t.easeIn = lt),
//       (t.easeInOut = ft),
//       (t.easeOut = pt),
//       (t.inertia = function ({ from: t = 0, velocity: e = 0, min: n, max: r, power: o = 0.8, timeConstant: s = 750, bounceStiffness: a = 500, bounceDamping: i = 10, restDelta: c = 1, modifyTarget: u, driver: l, onUpdate: p, onComplete: f, onStop: d }) {
//         let h;
//         function m(t) {
//           return (void 0 !== n && t < n) || (void 0 !== r && t > r);
//         }
//         function g(t) {
//           return void 0 === n ? r : void 0 === r || Math.abs(n - t) < Math.abs(r - t) ? n : r;
//         }
//         function y(t) {
//           null == h || h.stop(),
//             (h = Ht(
//               Object.assign(Object.assign({}, t), {
//                 driver: l,
//                 onUpdate: (e) => {
//                   var n;
//                   null == p || p(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e);
//                 },
//                 onComplete: f,
//                 onStop: d,
//               })
//             ));
//         }
//         function b(t) {
//           y(Object.assign({ type: "spring", stiffness: a, damping: i, restDelta: c }, t));
//         }
//         if (m(t)) b({ from: t, velocity: e, to: g(t) });
//         else {
//           let r = o * e + t;
//           void 0 !== u && (r = u(r));
//           const a = g(r),
//             i = a === n ? -1 : 1;
//           let l, p;
//           const f = (t) => {
//             (l = p), (p = t), (e = Lt(t - l, Ut().delta)), ((1 === i && t > a) || (-1 === i && t < a)) && b({ from: t, to: a, velocity: e });
//           };
//           y({ type: "decay", from: t, velocity: e, timeConstant: s, power: o, restDelta: c, modifyTarget: u, onUpdate: m(r) ? f : void 0 });
//         }
//         return { stop: () => (null == h ? void 0 : h.stop()) };
//       }),
//       (t.interpolate = rt),
//       (t.isPoint = Xt),
//       (t.isPoint3D = Yt),
//       (t.keyframes = wt),
//       (t.linear = ut),
//       (t.mirrorEasing = st),
//       (t.mix = f),
//       (t.mixColor = W),
//       (t.mixComplex = tt),
//       (t.pipe = K),
//       (t.pointFromVector = (t, e, n) => ((e = Qt(e)), { x: n * Math.cos(e) + t.x, y: n * Math.sin(e) + t.y })),
//       (t.progress = p),
//       (t.radiansToDegrees = Wt),
//       (t.reverseEasing = ot),
//       (t.smooth = (t = 50) => {
//         let e = 0,
//           n = 0;
//         return (r) => {
//           const o = Ut().timestamp,
//             s = o !== n ? o - n : 0,
//             a = s ? ee(e, r, s, t) : e;
//           return (n = o), (e = a), a;
//         };
//       }),
//       (t.smoothFrame = ee),
//       (t.snap = (t) => {
//         if ("number" == typeof t) return (e) => Math.round(e / t) * t;
//         {
//           let e = 0;
//           const n = t.length;
//           return (r) => {
//             let o = Math.abs(t[0] - r);
//             for (e = 1; e < n; e++) {
//               const s = t[e],
//                 a = Math.abs(s - r);
//               if (0 === a) return s;
//               if (a > o) return t[e - 1];
//               if (e === n - 1) return s;
//               o = a;
//             }
//           };
//         }
//       }),
//       (t.spring = u),
//       (t.steps =
//         (t, e = "end") =>
//         (r) => {
//           const o = (r = "end" === e ? Math.min(r, 0.999) : Math.max(r, 0.001)) * t,
//             s = "end" === e ? Math.floor(o) : Math.ceil(o);
//           return n(0, 1, s / t);
//         }),
//       (t.toDecimal = te),
//       (t.velocityPerFrame = function (t, e) {
//         return t / (1e3 / e);
//       }),
//       (t.velocityPerSecond = Lt),
//       (t.wrap = (t, e, n) => {
//         const r = e - t;
//         return ((((n - t) % r) + r) % r) + t;
//       }),
//       Object.defineProperty(t, "__esModule", { value: !0 });
//   });
// }
