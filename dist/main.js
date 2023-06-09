(() => {
  "use strict";
  var t = {
      890: (t, e, n) => {
        n.d(e, { Z: () => i });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          s = n.n(a)()(o());
        s.push([
          t.id,
          "@import url(https://fonts.googleapis.com/css2?family=Vollkorn&display=swap);",
        ]),
          s.push([
            t.id,
            ":root {\n    --dark-brown: rgb(63, 38, 14);\n    --light-brown: rgb(116, 65, 18);\n    --cream: rgb(235, 184, 137);\n    --ivory: rgb(240, 225, 211);\n    --hover-color: rgb(196, 120, 49);\n    --padding: 1rem;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Vollkorn', serif;\n    font-size: 1.3rem;\n    color: var(--dark-brown);\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background: var(--ivory);\n}\n\n.container {\n    margin: 0 auto;\n    height: 100vh;\n    width: 70vw;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1fr 5fr;\n}\n\nh1 {\n    grid-row: 1;\n    grid-column: 1 / span 2;\n    font-size: 3rem;\n    text-align: center;\n    padding-top: 8vh;\n}\n\n.board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board-container {\n    grid-column: 1;\n    grid-row: 2;\n}\n\n.board {\n    border: 5px double var(--light-brown);\n    height: 610px;\n    width: 610px;\n}\n\n.row {\n    display: flex;\n    flex-direction: row-reverse;\n}\n\n.square {\n    width: 75px;\n    height: 75px;\n    outline: 1px solid white;\n}\n\n.dark {\n    background: var(--light-brown);\n}\n\n.light {\n    background: var(--cream);\n}\n\n.start-selected {\n    background: rgb(221, 79, 79);\n}\n\n.end-selected {\n    background: rgb(90, 161, 219);\n}\n\n.intermediate-square {\n    background: rgb(132, 112, 187)\n}\n\n.content-container {\n    grid-column: 2;\n    grid-row: 2;\n    padding-top: 10vh;\n}\n\n.content {\n    height: min-content;\n}\n\n.content > * {\n    margin: var(--padding);\n}\n\nul {\n    list-style-type: none;\n    padding-left: calc(var(--padding) * 2);\n}\n\n.btn-container {\n    display: flex;\n    gap: var(--padding);\n}\n\n#get-path,\n#restart {\n    padding: 5px;\n    background: var(--light-brown);\n    border-radius: 2px;\n    border: 2px solid var(--dark-brown);\n    color: var(--ivory);\n}\n\n#get-path:hover,\n#restart:hover {\n    background: var(--hover-color);\n}",
            "",
          ]);
        const i = s;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var s = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (s[c] = !0);
                }
              for (var d = 0; d < t.length; d++) {
                var l = [].concat(t[d]);
                (r && s[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var a = {}, s = [], i = 0; i < t.length; i++) {
            var c = t[i],
              d = r.base ? c[0] + r.base : c[0],
              l = a[d] || 0,
              u = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var p = n(u),
              g = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(g);
            else {
              var h = o(g, r);
              (r.byIndex = i),
                e.splice(i, 0, { identifier: u, updater: h, references: 1 });
            }
            s.push(u);
          }
          return s;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var s = 0; s < a.length; s++) {
              var i = n(a[s]);
              e[i].references--;
            }
            for (var c = r(t, o), d = 0; d < a.length; d++) {
              var l = n(a[d]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = c;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return t[r](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      const t = (() => {
          const t = () => {
              const t = [];
              for (let e = 1; e < 9; e += 1)
                for (let n = 1; n < 9; n += 1) t.push([n, e]);
              return t;
            },
            e = (e) => {
              const n = t();
              for (let t = 0; t < 64; t += 1)
                if (n[t][0] === e[0] && n[t][1] === e[1]) return t;
            };
          let n;
          const r = (t, e) => {
            for (const n of t) return n[0] === e[0] && n[1] === e[1];
          };
          return {
            boardCoordinates: t,
            formatPath: (t) => [
              `You made it in ${t.length - 1} moves! Here's your path:`,
              t.map((t) => `\t[${t}]\n`).join(" ->"),
            ],
            stopHighlights: () => {
              n && n.forEach(clearTimeout);
            },
            highlightPathSquares: (t, r) => {
              n = [];
              for (let o = 0; o < t.length && !r; o += 1)
                n.push(
                  setTimeout(() => {
                    const n = `square${e(t[o])}`;
                    document
                      .getElementById(n)
                      .classList.add("intermediate-square");
                  }, 1e3 * o)
                );
            },
            getShortestPath: (e, n) => {
              const o = [{ square: e, path: [e] }],
                a = [];
              for (; o.length > 0; ) {
                const { square: e, path: s } = o.shift();
                if (e[0] === n[0] && e[1] === n[1]) return s;
                t()
                  .map((t) => ({
                    adjList: [
                      [t[0] - 1, t[1] - 2],
                      [t[0] + 1, t[1] - 2],
                      [t[0] - 2, t[1] - 1],
                      [t[0] + 2, t[1] - 1],
                      [t[0] - 2, t[1] + 1],
                      [t[0] + 2, t[1] + 1],
                      [t[0] - 1, t[1] + 2],
                      [t[0] + 1, t[1] + 2],
                    ].filter(
                      (t) => t[0] > 0 && t[0] < 9 && t[1] > 0 && t[1] < 9
                    ),
                    coordinates: t,
                  }))
                  .find(
                    (t) =>
                      t.coordinates[0] === e[0] && t.coordinates[1] === e[1]
                  )
                  .adjList.forEach((t) => {
                    if (!r(a, t)) {
                      a.push(t);
                      const e = s.concat([t]);
                      o.push({ square: t, path: e });
                    }
                  });
              }
            },
          };
        })(),
        e = (() => {
          const e = document.querySelector(".message-box"),
            n = document.getElementById("start-position"),
            r = document.getElementById("end-position"),
            o = document.querySelector(".path-text"),
            a = document.querySelector(".path");
          let s,
            i,
            c = !1,
            d = !1;
          const l = (t) => {
              switch (t) {
                case 1:
                case 4:
                  e.textContent =
                    "Click on a square to select the knight's ending position or click on the same starting square to reset the starting position.";
                  break;
                case 2:
                default:
                  e.textContent =
                    "Click on a square to select the knight's starting position.";
                  break;
                case 3:
                  e.textContent =
                    "Click the button to find the shortest path or click on the same ending square to reset the ending position.";
              }
            },
            u = (t) => [Number(t.at(1)), Number(t.at(-2))];
          return {
            choosePositionsHandler: (e) => {
              if (c || d || !e.target.classList.contains("square"))
                if (
                  c &&
                  !d &&
                  s === e.target.id.substr(6) &&
                  e.target.classList.contains("square")
                )
                  (c = !1),
                    (s = ""),
                    e.target.classList.toggle("start-selected"),
                    (n.textContent = ""),
                    l(2);
                else if (c && !d && e.target.classList.contains("square")) {
                  (i = e.target.id.substr(6)), (d = !0);
                  const n = t.boardCoordinates()[i];
                  (r.textContent = `[${n}]`),
                    l(3),
                    e.target.classList.toggle("end-selected");
                } else
                  c &&
                    d &&
                    i === e.target.id.substr(6) &&
                    e.target.classList.contains("square") &&
                    ((d = !1),
                    (i = ""),
                    e.target.classList.toggle("end-selected"),
                    (r.textContent = ""),
                    l(4));
              else {
                (s = e.target.id.substr(6)), (c = !0);
                const r = t.boardCoordinates()[s];
                (n.textContent = `[${r}]`),
                  l(1),
                  e.target.classList.toggle("start-selected");
              }
            },
            updatePathBox: (e) => {
              let n = document.getElementById("start-position").textContent,
                r = document.getElementById("end-position").textContent;
              (n = u(n)), (r = u(r));
              const s = t.getShortestPath(n, r);
              t.highlightPathSquares(s, e);
              const [i, c] = t.formatPath(s);
              (o.textContent = i), (a.textContent = c);
            },
            resetSelections: () => {
              (c = !1),
                (d = !1),
                (s = ""),
                (i = ""),
                l(),
                (n.textContent = ""),
                (r.textContent = ""),
                (o.textContent = ""),
                (a.textContent = ""),
                t.stopHighlights(),
                document.body.querySelectorAll(".square").forEach((t) => {
                  t.classList.remove("start-selected"),
                    t.classList.remove("end-selected"),
                    t.classList.remove("intermediate-square");
                });
            },
          };
        })(),
        r = (() => {
          const t = document.querySelector(".board"),
            e = (t, e, n) => {
              (t % 2 == 0 && e % 2 != 0) || (t % 2 != 0 && e % 2 == 0)
                ? n.classList.add("dark")
                : n.classList.add("light");
            };
          return {
            createBoard: () => {
              let n = 63;
              for (let r = 1; r < 9; r += 1) {
                const o = document.createElement("div");
                o.classList.add("row"), t.appendChild(o);
                for (let t = 1; t < 9; t += 1) {
                  const a = document.createElement("div");
                  a.classList.add("square"),
                    a.setAttribute("id", `square${n}`),
                    e(r, t, a),
                    o.appendChild(a),
                    (n -= 1);
                }
              }
            },
          };
        })();
      var o = n(379),
        a = n.n(o),
        s = n(795),
        i = n.n(s),
        c = n(569),
        d = n.n(c),
        l = n(565),
        u = n.n(l),
        p = n(216),
        g = n.n(p),
        h = n(589),
        f = n.n(h),
        m = n(890),
        v = {};
      (v.styleTagTransform = f()),
        (v.setAttributes = u()),
        (v.insert = d().bind(null, "head")),
        (v.domAPI = i()),
        (v.insertStyleElement = g()),
        a()(m.Z, v),
        m.Z && m.Z.locals && m.Z.locals,
        (() => {
          const t = document.getElementById("get-path"),
            n = document.getElementById("restart");
          r.createBoard(),
            document.body.addEventListener("click", (t) => {
              e.choosePositionsHandler(t);
            }),
            t.addEventListener("click", () => {
              e.updatePathBox(!1);
            }),
            n.addEventListener("click", () => {
              e.resetSelections();
            });
        })();
    })();
})();
