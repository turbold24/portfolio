/*! For license information please see app-663183bacaf3c63b9306.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    '+ZDr': function(e, t, n) {
      'use strict';
      const r = n('TqRt');
      (t.__esModule = !0),
      (t.withPrefix = f),
      (t.withAssetPrefix = function(e) {
        return f(e, m());
      }),
      (t.navigateTo = t.replace = t.push = t.navigate = t.default = void 0);
      const o = r(n('8OQS'));
      const a = r(n('PJYZ'));
      const i = r(n('VbXa'));
      const s = r(n('pVnL'));
      const c = r(n('17x9'));
      const u = r(n('q1tI'));
      const l = n('YwZP');
      const p = n('LYrO');
      const d = n('cu4x');
      t.parsePath = d.parsePath;
      const h = function(e) {
        return null == e ? void 0 : e.startsWith('/');
      };
      function f(e, t) {
        let n; let r;
        if ((void 0 === t && (t = v()), !g(e))) {return e;}
        if (e.startsWith('./') || e.startsWith('../')) {return e;}
        const o = null !== (n = null !== (r = t) && void 0 !== r ? r : m()) && void 0 !== n ? n : '/';
        return (
          `${ 
            (null == o ? void 0 : o.endsWith('/')) ? o.slice(0, -1) : o 
          }${e.startsWith('/') ? e : `/${  e}`}`
        );
      }
      var m = function() {
        return '';
      };
      var v = function() {
        return '';
      };
      var g = function(e) {
        return e && !e.startsWith('http://') && !e.startsWith('https://') && !e.startsWith('//');
      };
      const y = function(e, t) {
        return 'number' === typeof e
          ? e
          : g(e)
            ? h(e)
              ? f(e)
              : (function(e, t) {
                return h(e) ? e : (0, p.resolve)(e, t);
              })(e, t)
            : e;
      };
      const b = {
        activeClassName: c.default.string,
        activeStyle: c.default.object,
        partiallyActive: c.default.bool,
      };
      function w(e) {
        return u.default.createElement(l.Location, null, function(t) {
          const n = t.location;
          return u.default.createElement(P, (0, s.default)({}, e, { _location: n }));
        });
      }
      var P = (function(e) {
        function t(t) {
          let n;
          (n = e.call(this, t) || this).defaultGetProps = function(e) {
            const t = e.isPartiallyCurrent;
            const r = e.isCurrent;
            return (n.props.partiallyActive
              ? t
              : r)
              ? {
                className: [n.props.className, n.props.activeClassName].filter(Boolean).join(' '),
                style: (0, s.default)({}, n.props.style, n.props.activeStyle),
              }
              : null;
          };
          let r = !1;
          return (
            'undefined' !== typeof window && window.IntersectionObserver && (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          );
        }
        (0, i.default)(t, e);
        const n = t.prototype;
        return (
          (n._prefetch = function() {
            let e = window.location.pathname;
            this.props._location &&
              this.props._location.pathname &&
              (e = this.props._location.pathname);
            const t = y(this.props.to, e);
            const n = (0, d.parsePath)(t).pathname;
            e !== n && ___loader.enqueue(n);
          }),
          (n.componentDidUpdate = function(e, t) {
            this.props.to === e.to || this.state.IOSupported || this._prefetch();
          }),
          (n.componentDidMount = function() {
            this.state.IOSupported || this._prefetch();
          }),
          (n.componentWillUnmount = function() {
            if (this.io) {
              const e = this.io;
              const t = e.instance;
              const n = e.el;
              t.unobserve(n), t.disconnect();
            }
          }),
          (n.handleRef = function(e) {
            let t;
            let n;
            let r;
            const o = this;
            this.props.innerRef && this.props.innerRef.hasOwnProperty('current')
              ? (this.props.innerRef.current = e)
              : this.props.innerRef && this.props.innerRef(e),
            this.state.IOSupported &&
                e &&
                (this.io =
                  ((t = e),
                  (n = function() {
                    o._prefetch();
                  }),
                  (r = new window.IntersectionObserver(function(e) {
                    e.forEach(function(e) {
                      t === e.target &&
                        (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(t), r.disconnect(), n());
                    });
                  })).observe(t),
                  { instance: r, el: t }));
          }),
          (n.render = function() {
            const e = this;
            const t = this.props;
            const n = t.to;
            const r = t.getProps;
            const a = void 0 === r ? this.defaultGetProps : r;
            const i = t.onClick;
            const c = t.onMouseEnter;
            const p = (t.activeClassName, t.activeStyle, t.innerRef, t.partiallyActive, t.state);
            const h = t.replace;
            const f = t._location;
            const m = (0, o.default)(t, [
              'to',
              'getProps',
              'onClick',
              'onMouseEnter',
              'activeClassName',
              'activeStyle',
              'innerRef',
              'partiallyActive',
              'state',
              'replace',
              '_location',
            ]);
            const v = y(n, f.pathname);
            return g(v)
              ? u.default.createElement(
                l.Link,
                (0, s.default)(
                  {
                    to: v,
                    state: p,
                    getProps: a,
                    innerRef: this.handleRef,
                    onMouseEnter: function(e) {
                      c && c(e), ___loader.hovering((0, d.parsePath)(v).pathname);
                    },
                    onClick: function(t) {
                      if (
                        (i && i(t),
                        !(
                          0 !== t.button ||
                            e.props.target ||
                            t.defaultPrevented ||
                            t.metaKey ||
                            t.altKey ||
                            t.ctrlKey ||
                            t.shiftKey
                        ))
                      ) {
                        t.preventDefault();
                        let n = h;
                        const r = encodeURI(v) === f.pathname;
                        'boolean' !== typeof h && r && (n = !0),
                        window.___navigate(v, { state: p, replace: n });
                      }
                      return !0;
                    },
                  },
                  m,
                ),
              )
              : u.default.createElement('a', (0, s.default)({ href: v }, m));
          }),
          t
        );
      })(u.default.Component);
      P.propTypes = (0, s.default)({}, b, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
        state: c.default.object,
      });
      const R = function(e, t, n) {
        return console.warn(
          `The "${ 
            e 
          }" method is now deprecated and will be removed in Gatsby v${ 
            n 
          }. Please use "${ 
            t 
          }" instead.`,
        );
      };
      const _ = u.default.forwardRef(function(e, t) {
        return u.default.createElement(w, (0, s.default)({ innerRef: t }, e));
      });
      t.default = _;
      t.navigate = function(e, t) {
        window.___navigate(y(e, window.location.pathname), t);
      };
      const S = function(e) {
        R('push', 'navigate', 3), window.___push(y(e, window.location.pathname));
      };
      t.push = S;
      t.replace = function(e) {
        R('replace', 'navigate', 3), window.___replace(y(e, window.location.pathname));
      };
      t.navigateTo = function(e) {
        return R('navigateTo', 'navigate', 3), S(e);
      };
    },
    '/hTd': function(e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.SessionStorage = void 0);
      const r = (function() {
        function e() {}
        const t = e.prototype;
        return (
          (t.read = function(e, t) {
            const n = this.getStateKey(e, t);
            try {
              const r = window.sessionStorage.getItem(n);
              return r ? JSON.parse(r) : 0;
            } catch (o) {
              return window &&
                window.___GATSBY_REACT_ROUTER_SCROLL &&
                window.___GATSBY_REACT_ROUTER_SCROLL[n]
                ? window.___GATSBY_REACT_ROUTER_SCROLL[n]
                : 0;
            }
          }),
          (t.save = function(e, t, n) {
            const r = this.getStateKey(e, t);
            const o = JSON.stringify(n);
            try {
              window.sessionStorage.setItem(r, o);
            } catch (a) {
              (window && window.___GATSBY_REACT_ROUTER_SCROLL) ||
                (window.___GATSBY_REACT_ROUTER_SCROLL = {}),
              (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(o));
            }
          }),
          (t.getStateKey = function(e, t) {
            const n = `@@scroll|${  e.pathname}`;
            return null == t ? n : `${n  }|${  t}`;
          }),
          e
        );
      })();
      t.SessionStorage = r;
    },
    '284h': function(e, t, n) {
      const r = n('cDf5').default;
      function o(e) {
        if ('function' !== typeof WeakMap) {return null;}
        const t = new WeakMap();
        const n = new WeakMap();
        return (o = function(e) {
          return e ? n : t;
        })(e);
      }
      (e.exports = function(e, t) {
        if (!t && e && e.__esModule) {return e;}
        if (null === e || ('object' !== r(e) && 'function' !== typeof e)) {return { default: e };}
        const n = o(t);
        if (n && n.has(e)) {return n.get(e);}
        const a = {};
        const i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (const s in e) {
          if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
            const c = i ? Object.getOwnPropertyDescriptor(e, s) : null;
            c && (c.get || c.set) ? Object.defineProperty(a, s, c) : (a[s] = e[s]);
          }
        }
        return (a.default = e), n && n.set(e, a), a;
      }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
    },
    '30RF': function(e, t, n) {
      'use strict';
      n.d(t, 'd', function() {
        return l;
      }),
      n.d(t, 'a', function() {
        return p;
      }),
      n.d(t, 'c', function() {
        return d;
      }),
      n.d(t, 'b', function() {
        return h;
      });
      const r = n('LYrO');
      const o = n('cSJ8');
      const a = e =>
        void 0 === e ? e : '/' === e ? '/' : '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      const i = new Map();
      let s = [];
      const c = e => {
        const t = decodeURIComponent(e);
        return Object(o.a)(t, '')
          .split('#')[0]
          .split('?')[0];
      };
      function u(e) {
        return e.startsWith('/') || e.startsWith('https://') || e.startsWith('http://')
          ? e
          : new URL(e, window.location.href + (window.location.href.endsWith('/') ? '' : '/'))
            .pathname;
      }
      const l = e => {
        s = e;
      };
      const p = e => {
        const t = f(e);
        const n = s.map(e => {
          const { path: t, matchPath: n } = e;
          return { path: n, originalPath: t };
        });
        const o = Object(r.pick)(n, t);
        return o ? a(o.route.originalPath) : null;
      };
      const d = e => {
        const t = f(e);
        const n = s.map(e => {
          const { path: t, matchPath: n } = e;
          return { path: n, originalPath: t };
        });
        const o = Object(r.pick)(n, t);
        return o ? o.params : {};
      };
      const h = e => {
        const t = c(u(e));
        if (i.has(t)) {return i.get(t);}
        let n = p(t);
        return n || (n = f(e)), i.set(t, n), n;
      };
      const f = e => {
        let t = c(u(e));
        return '/index.html' === t && (t = '/'), (t = a(t)), t;
      };
    },
    '3uz+': function(e, t, n) {
      'use strict';
      (t.__esModule = !0),
      (t.useScrollRestoration = function(e) {
        const t = (0, a.useLocation)();
        const n = (0, o.useContext)(r.ScrollContext);
        const i = (0, o.useRef)();
        return (
          (0, o.useLayoutEffect)(function() {
            if (i.current) {
              const r = n.read(t, e);
              i.current.scrollTo(0, r || 0);
            }
          }, []),
          {
            ref: i,
            onScroll: function() {
              i.current && n.save(t, e, i.current.scrollTop);
            },
          }
        );
      });
      var r = n('Enzk');
      var o = n('q1tI');
      var a = n('YwZP');
    },
    '5yr3': function(e, t, n) {
      'use strict';
      const r = (function(e) {
        return (
          (e = e || Object.create(null)),
          {
            on: function(t, n) {
              (e[t] || (e[t] = [])).push(n);
            },
            off: function(t, n) {
              e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
            },
            emit: function(t, n) {
              (e[t] || []).slice().map(function(e) {
                e(n);
              }),
              (e['*'] || []).slice().map(function(e) {
                e(t, n);
              });
            },
          }
        );
      })();
      t.a = r;
    },
    '7hJ6': function(e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.useScrollRestoration = t.ScrollContainer = t.ScrollContext = void 0);
      const r = n('Enzk');
      t.ScrollContext = r.ScrollHandler;
      const o = n('hd9s');
      t.ScrollContainer = o.ScrollContainer;
      const a = n('3uz+');
      t.useScrollRestoration = a.useScrollRestoration;
    },
    '8OQS': function(e, t) {
      (e.exports = function(e, t) {
        if (null == e) {return {};}
        let n;
        let r;
        const o = {};
        const a = Object.keys(e);
        for (r = 0; r < a.length; r++) {(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);}
        return o;
      }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
    },
    '94VI': function(e, t) {
      t.polyfill = e => e;
    },
    '9Xx/': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return c;
      }),
      n.d(t, 'd', function() {
        return u;
      }),
      n.d(t, 'a', function() {
        return a;
      }),
      n.d(t, 'b', function() {
        return i;
      });
      const r =
          Object.assign ||
          function(e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t];
              for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);}
            }
            return e;
          };
      const o = function(e) {
        const t = e.location;
        const n = t.search;
        const r = t.hash;
        const o = t.href;
        const a = t.origin;
        const i = t.protocol;
        const c = t.host;
        const u = t.hostname;
        const l = t.port;
        let p = e.location.pathname;
        !p && o && s && (p = new URL(o).pathname);
        return {
          pathname: encodeURI(decodeURI(p)),
          search: n,
          hash: r,
          href: o,
          origin: a,
          protocol: i,
          host: c,
          hostname: u,
          port: l,
          state: e.history.state,
          key: (e.history.state && e.history.state.key) || 'initial',
        };
      };
      var a = function(e, t) {
        let n = [];
        let a = o(e);
        let i = !1;
        let s = function() {};
        return {
          get location() {
            return a;
          },
          get transitioning() {
            return i;
          },
          _onTransitionComplete: function() {
            (i = !1), s();
          },
          listen: function(t) {
            n.push(t);
            const r = function() {
              (a = o(e)), t({ location: a, action: 'POP' });
            };
            return (
              e.addEventListener('popstate', r),
              function() {
                e.removeEventListener('popstate', r),
                (n = n.filter(function(e) {
                  return e !== t;
                }));
              }
            );
          },
          navigate: function(t) {
            const c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            let u = c.state;
            const l = c.replace;
            const p = void 0 !== l && l;
            if ('number' === typeof t) {e.history.go(t);} else {
              u = r({}, u, { key: `${Date.now()  }` });
              try {
                i || p ? e.history.replaceState(u, null, t) : e.history.pushState(u, null, t);
              } catch (h) {
                e.location[p ? 'replace' : 'assign'](t);
              }
            }
            (a = o(e)), (i = !0);
            const d = new Promise(function(e) {
              return (s = e);
            });
            return (
              n.forEach(function(e) {
                return e({ location: a, action: 'PUSH' });
              }),
              d
            );
          },
        };
      };
      var i = function() {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/';
        const t = e.indexOf('?');
        const n = { pathname: t > -1 ? e.substr(0, t) : e, search: t > -1 ? e.substr(t) : '' };
        let r = 0;
        const o = [n];
        const a = [null];
        return {
          get location() {
            return o[r];
          },
          addEventListener: function(e, t) {},
          removeEventListener: function(e, t) {},
          history: {
            get entries() {
              return o;
            },
            get index() {
              return r;
            },
            get state() {
              return a[r];
            },
            pushState: function(e, t, n) {
              const i = n.split('?');
              const s = i[0];
              const c = i[1];
              const u = void 0 === c ? '' : c;
              r++, o.push({ pathname: s, search: u.length ? `?${  u}` : u }), a.push(e);
            },
            replaceState: function(e, t, n) {
              const i = n.split('?');
              const s = i[0];
              const c = i[1];
              const u = void 0 === c ? '' : c;
              (o[r] = { pathname: s, search: u }), (a[r] = e);
            },
            go: function(e) {
              const t = r + e;
              t < 0 || t > a.length - 1 || (r = t);
            },
          },
        };
      };
      var s = !('undefined' === typeof window || !window.document || !window.document.createElement);
      var c = a(s ? window : i());
      var u = c.navigate;
    },
    '9hXx': function(e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      t.default = function(e, t) {
        if (!Array.isArray(t)) {return 'manifest.webmanifest';}
        const n = t.find(function(t) {
          return e.startsWith(t.start_url);
        });
        return n ? `manifest_${  n.lang  }.webmanifest` : 'manifest.webmanifest';
      };
    },
    Enzk: function(e, t, n) {
      'use strict';
      const r = n('284h');
      const o = n('TqRt');
      (t.__esModule = !0), (t.ScrollHandler = t.ScrollContext = void 0);
      const a = o(n('PJYZ'));
      const i = o(n('VbXa'));
      const s = r(n('q1tI'));
      const c = o(n('17x9'));
      const u = n('/hTd');
      const l = s.createContext(new u.SessionStorage());
      (t.ScrollContext = l), (l.displayName = 'GatsbyScrollContext');
      const p = (function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) {r[o] = arguments[o];}
          return (
            ((t =
              e.call.apply(e, [this].concat(r)) || this)._stateStorage = new u.SessionStorage()),
            (t.scrollListener = function() {
              const e = t.props.location.key;
              e && t._stateStorage.save(t.props.location, e, window.scrollY);
            }),
            (t.windowScroll = function(e, n) {
              t.shouldUpdateScroll(n, t.props) && window.scrollTo(0, e);
            }),
            (t.scrollToHash = function(e, n) {
              const r = document.getElementById(e.substring(1));
              r && t.shouldUpdateScroll(n, t.props) && r.scrollIntoView();
            }),
            (t.shouldUpdateScroll = function(e, n) {
              const r = t.props.shouldUpdateScroll;
              return !r || r.call((0, a.default)(t), e, n);
            }),
            t
          );
        }
        (0, i.default)(t, e);
        const n = t.prototype;
        return (
          (n.componentDidMount = function() {
            let e;
            window.addEventListener('scroll', this.scrollListener);
            const t = this.props.location;
            const n = t.key;
            const r = t.hash;
            n && (e = this._stateStorage.read(this.props.location, n)),
            e ? this.windowScroll(e, void 0) : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function() {
            window.removeEventListener('scroll', this.scrollListener);
          }),
          (n.componentDidUpdate = function(e) {
            let t;
            const n = this.props.location;
            const r = n.hash;
            const o = n.key;
            o && (t = this._stateStorage.read(this.props.location, o)),
            r ? this.scrollToHash(decodeURI(r), e) : this.windowScroll(t, e);
          }),
          (n.render = function() {
            return s.createElement(l.Provider, { value: this._stateStorage }, this.props.children);
          }),
          t
        );
      })(s.Component);
      (t.ScrollHandler = p),
      (p.propTypes = {
        shouldUpdateScroll: c.default.func,
        children: c.default.element.isRequired,
        location: c.default.object.isRequired,
      });
    },
    GddB: function(e, t) {},
    IOVJ: function(e, t, n) {
      'use strict';
      const r = n('dI71');
      const o = n('q1tI');
      const a = n.n(o);
      const i = n('emEt');
      const s = n('xtsi');
      const c = n('30RF');
      const u = (function(e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          Object(r.a)(t, e),
          (t.prototype.render = function() {
            const e = {
              ...this.props,
              params: {
                ...Object(c.c)(this.props.location.pathname),
                ...this.props.pageResources.json.pageContext.__params,
              },
              pathContext: this.props.pageContext,
            };
            const [t] = Object(s.apiRunner)('replaceComponentRenderer', {
              props: this.props,
              loader: i.publicLoader,
            });
            const n =
                t ||
                Object(o.createElement)(this.props.pageResources.component, {
                  ...e,
                  key: this.props.path || this.props.pageResources.page.path,
                });
            return Object(s.apiRunner)('wrapPageElement', { element: n, props: e }, n, t => {
              const { result: n } = t;
              return { element: n, props: e };
            }).pop();
          }),
          t
        );
      })(a.a.Component);
      t.a = u;
    },
    JeVI: function(e) {
      e.exports = JSON.parse('[]');
    },
    LYrO: function(e, t, n) {
      'use strict';
      n.r(t),
      n.d(t, 'startsWith', function() {
        return a;
      }),
      n.d(t, 'pick', function() {
        return i;
      }),
      n.d(t, 'match', function() {
        return s;
      }),
      n.d(t, 'resolve', function() {
        return c;
      }),
      n.d(t, 'insertParams', function() {
        return u;
      }),
      n.d(t, 'validateRedirect', function() {
        return l;
      }),
      n.d(t, 'shallowCompare', function() {
        return b;
      });
      const r = n('QLaP');
      const o = n.n(r);
      var a = function(e, t) {
        return e.substr(0, t.length) === t;
      };
      var i = function(e, t) {
        for (
          var n = void 0,
            r = void 0,
            a = t.split('?')[0],
            i = v(a),
            s = '' === i[0],
            c = m(e),
            u = 0,
            l = c.length;
          u < l;
          u++
        ) {
          let d = !1;
          const f = c[u].route;
          if (f.default) {r = { route: f, params: {}, uri: t };} else {
            for (var g = v(f.path), b = {}, w = Math.max(i.length, g.length), P = 0; P < w; P++) {
              const R = g[P];
              const _ = i[P];
              if (h(R)) {
                b[R.slice(1) || '*'] = i
                  .slice(P)
                  .map(decodeURIComponent)
                  .join('/');
                break;
              }
              if (void 0 === _) {
                d = !0;
                break;
              }
              const S = p.exec(R);
              if (S && !s) {
                -1 === y.indexOf(S[1]) || o()(!1);
                const O = decodeURIComponent(_);
                b[S[1]] = O;
              } else if (R !== _) {
                d = !0;
                break;
              }
            }
            if (!d) {
              n = { route: f, params: b, uri: `/${  i.slice(0, P).join('/')}` };
              break;
            }
          }
        }
        return n || r || null;
      };
      var s = function(e, t) {
        return i([{ path: e }], t);
      };
      var c = function(e, t) {
        if (a(e, '/')) {return e;}
        const n = e.split('?');
        const r = n[0];
        const o = n[1];
        const i = t.split('?')[0];
        const s = v(r);
        const c = v(i);
        if ('' === s[0]) {return g(i, o);}
        if (!a(s[0], '.')) {
          const u = c.concat(s).join('/');
          return g(('/' === i ? '' : '/') + u, o);
        }
        for (var l = c.concat(s), p = [], d = 0, h = l.length; d < h; d++) {
          const f = l[d];
          '..' === f ? p.pop() : '.' !== f && p.push(f);
        }
        return g(`/${  p.join('/')}`, o);
      };
      var u = function(e, t) {
        const n = e.split('?');
        const r = n[0];
        const o = n[1];
        const a = void 0 === o ? '' : o;
        let i =
              `/${ 
                v(r)
                  .map(function(e) {
                    const n = p.exec(e);
                    return n ? t[n[1]] : e;
                  })
                  .join('/')}`;
        let s = t.location;
        const c = (s = void 0 === s ? {} : s).search;
        const u = (void 0 === c ? '' : c).split('?')[1] || '';
        return (i = g(i, a, u));
      };
      var l = function(e, t) {
        const n = function(e) {
          return d(e);
        };
        return (
          v(e)
            .filter(n)
            .sort()
            .join('/') ===
            v(t)
              .filter(n)
              .sort()
              .join('/')
        );
      };
      var p = /^:(.+)/;
      var d = function(e) {
        return p.test(e);
      };
      var h = function(e) {
        return e && '*' === e[0];
      };
      const f = function(e, t) {
        return {
          route: e,
          score: e.default
            ? 0
            : v(e.path).reduce(function(e, t) {
              return (
                (e += 4),
                !(function(e) {
                  return '' === e;
                })(t)
                  ? d(t)
                    ? (e += 2)
                    : h(t)
                      ? (e -= 5)
                      : (e += 3)
                  : (e += 1),
                e
              );
            }, 0),
          index: t,
        };
      };
      var m = function(e) {
        return e.map(f).sort(function(e, t) {
          return e.score < t.score ? 1 : e.score > t.score ? -1 : e.index - t.index;
        });
      };
      var v = function(e) {
        return e.replace(/(^\/+|\/+$)/g, '').split('/');
      };
      var g = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {n[r - 1] = arguments[r];}
        return (
          e +
            ((n = n.filter(function(e) {
              return e && e.length > 0;
            })) && n.length > 0
              ? `?${  n.join('&')}`
              : '')
        );
      };
      var y = ['uri', 'path'];
      var b = function(e, t) {
        const n = Object.keys(e);
        return (
          n.length === Object.keys(t).length &&
            n.every(function(n) {
              return t.hasOwnProperty(n) && e[n] === t[n];
            })
        );
      };
    },
    LeKB: function(e, t, n) {
      e.exports = [
        {
          plugin: n('npZl'),
          options: {
            plugins: [],
            name: 'Turbold Amar',
            short_name: 'Turbold',
            start_url: '/',
            display: 'minimal-ui',
            icon: 'src/images/logo.png',
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: 'query',
            crossOrigin: 'anonymous',
            include_favicon: !0,
            cacheDigest: '016733400a04b92a3ecc0eaf8f728171',
          },
        },
        { plugin: n('e/UW'), options: { plugins: [] } },
        {
          plugin: n('q9nr'),
          options: {
            plugins: [],
            maxWidth: 1100,
            quality: 90,
            linkImagesToOriginal: !0,
            showCaptions: !1,
            markdownCaptions: !1,
            sizeByPixelDensity: !1,
            backgroundColor: 'white',
            withWebp: !1,
            tracedSVG: !1,
            loading: 'lazy',
            disableBgImageOnAlpha: !1,
            disableBgImage: !1,
          },
        },
        {
          plugin: n('pWkz'),
          options: {
            plugins: [],
            trackingId: 'UA-111541437-2',
            head: !1,
            anonymize: !1,
            respectDNT: !1,
            exclude: [],
            pageTransitionDelay: 0,
          },
        },
        { plugin: n('GddB'), options: { plugins: [] } },
      ];
    },
    MMVs: function(e, t, n) {
      e.exports = (function() {
        let e = !1;
        -1 !== navigator.appVersion.indexOf('MSIE 10') && (e = !0);
        let t;
        const n = [];
        const r = 'object' === typeof document && document;
        const o = e ? r.documentElement.doScroll('left') : r.documentElement.doScroll;
        let a = r && (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        return (
          !a &&
            r &&
            r.addEventListener(
              'DOMContentLoaded',
              (t = function() {
                for (r.removeEventListener('DOMContentLoaded', t), a = 1; (t = n.shift()); ) {t();}
              }),
            ),
          function(e) {
            a ? setTimeout(e, 0) : n.push(e);
          }
        );
      })();
    },
    NSX3: function(e, t, n) {
      'use strict';
      n.r(t);
      const r = n('xtsi');
      'https:' !== window.location.protocol && 'localhost' !== window.location.hostname
        ? console.error(
          'Service workers can only be used over HTTPS, or on localhost for development',
        )
        : 'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/sw.js')
            .then(function(e) {
              e.addEventListener('updatefound', () => {
                Object(r.apiRunner)('onServiceWorkerUpdateFound', { serviceWorker: e });
                const t = e.installing;
                console.log('installingWorker', t),
                t.addEventListener('statechange', () => {
                  switch (t.state) {
                    case 'installed':
                      navigator.serviceWorker.controller
                        ? ((window.___swUpdated = !0),
                        Object(r.apiRunner)('onServiceWorkerUpdateReady', { serviceWorker: e }),
                        window.___failedResources &&
                              (console.log('resources failed, SW updated - reloading'),
                              window.location.reload()))
                        : (console.log('Content is now available offline!'),
                        Object(r.apiRunner)('onServiceWorkerInstalled', { serviceWorker: e }));
                      break;
                    case 'redundant':
                      console.error('The installing service worker became redundant.'),
                      Object(r.apiRunner)('onServiceWorkerRedundant', { serviceWorker: e });
                      break;
                    case 'activated':
                      Object(r.apiRunner)('onServiceWorkerActive', { serviceWorker: e });
                  }
                });
              });
            })
            .catch(function(e) {
              console.error('Error during service worker registration:', e);
            });
    },
    NsGk: function(e, t, n) {
      t.components = {
        'component---cache-caches-gatsby-plugin-offline-app-shell-js': () =>
          n.e(3).then(n.t.bind(null, 'zXQ9', 7)),
        'component---src-pages-404-js': () =>
          Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 'w2l6')),
        'component---src-pages-archive-js': () =>
          Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 'nRki')),
        'component---src-pages-index-js': () =>
          Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 'RXBc')),
      };
    },
    PJYZ: function(e, t) {
      (e.exports = function(e) {
        if (void 0 === e) {throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');}
        return e;
      }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
    },
    QLaP: function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n, r, o, a, i, s) {
        if (!e) {
          let c;
          if (void 0 === t) {
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          } else {
            const u = [n, r, o, a, i, s];
            let l = 0;
            (c = new Error(
              t.replace(/%s/g, function() {
                return u[l++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    SksO: function(e, t) {
      function n(t, r) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function(e, t) {
              return (e.__proto__ = t), e;
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t, r)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    TqRt: function(e, t) {
      (e.exports = function(e) {
        return e && e.__esModule ? e : { default: e };
      }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
    },
    UxWs: function(e, t, n) {
      'use strict';
      n.r(t);
      const r = n('dI71');
      const o = n('xtsi');
      const a = n('q1tI');
      const i = n.n(a);
      const s = n('i8i4');
      const c = n.n(s);
      const u = n('YwZP');
      const l = n('7hJ6');
      const p = n('MMVs');
      const d = n.n(p);
      const h = n('Wbzz');
      const f = n('emEt');
      const m = n('YLt+');
      const v = n('5yr3');
      const g = {
        id: 'gatsby-announcer',
        style: {
          position: 'absolute',
          top: 0,
          width: 1,
          height: 1,
          padding: 0,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        },
        'aria-live': 'assertive',
        'aria-atomic': 'true',
      };
      const y = n('9Xx/');
      const b = n('+ZDr');
      const w = new Map();
      const P = new Map();
      function R(e) {
        let t = w.get(e);
        return t || (t = P.get(e.toLowerCase())), null != t && (window.___replace(t.toPath), !0);
      }
      m.forEach(e => {
        e.ignoreCase ? P.set(e.fromPath, e) : w.set(e.fromPath, e);
      });
      const _ = (e, t) => {
        R(e.pathname) ||
            Object(o.apiRunner)('onPreRouteUpdate', { location: e, prevLocation: t });
      };
      const S = (e, t) => {
        R(e.pathname) || Object(o.apiRunner)('onRouteUpdate', { location: e, prevLocation: t });
      };
      const O = function(e, t) {
        if ((void 0 === t && (t = {}), 'number' === typeof e)) {return void y.c.navigate(e);}
        let { pathname: n } = Object(b.parsePath)(e);
        let r = w.get(n);
        if (
          (r || (r = P.get(n.toLowerCase())),
          r && ((e = r.toPath), (n = Object(b.parsePath)(e).pathname)),
          window.___swUpdated)
        ) {return void (window.location = n);}
        const a = setTimeout(() => {
          v.a.emit('onDelayedLoadPageResources', { pathname: n }),
          Object(o.apiRunner)('onRouteUpdateDelayed', { location: window.location });
        }, 1e3);
        f.default.loadPage(n).then(r => {
          if (!r || r.status === f.PageResourceStatus.Error) {
            return (
              window.history.replaceState({}, '', location.href),
              (window.location = n),
              void clearTimeout(a)
            );
          }
          r &&
              r.page.webpackCompilationHash !== window.___webpackCompilationHash &&
              ('serviceWorker' in navigator &&
                null !== navigator.serviceWorker.controller &&
                'activated' === navigator.serviceWorker.controller.state &&
                navigator.serviceWorker.controller.postMessage({ gatsbyApi: 'clearPathResources' }),
              (window.location = n)),
          Object(u.navigate)(e, t),
          clearTimeout(a);
        });
      };
      function x(e, t) {
        const { location: n } = t;
        const { pathname: r, hash: a } = n;
        const i = Object(o.apiRunner)('shouldUpdateScroll', {
          prevRouterProps: e,
          pathname: r,
          routerProps: { location: n },
          getSavedScrollPosition: e => [0, this._stateStorage.read(e, e.key)],
        });
        if (i.length > 0) {return i[i.length - 1];}
        if (e) {
          const {
            location: { pathname: t },
          } = e;
          if (t === r) {return a ? decodeURI(a.slice(1)) : [0, 0];}
        }
        return !0;
      }
      const E = (function(e) {
        function t(t) {
          let n;
          return ((n = e.call(this, t) || this).announcementRef = i.a.createRef()), n;
        }
        Object(r.a)(t, e);
        const n = t.prototype;
        return (
          (n.componentDidUpdate = function(e, t) {
            requestAnimationFrame(() => {
              let e = `new page at ${  this.props.location.pathname}`;
              document.title && (e = document.title);
              const t = document.querySelectorAll('#gatsby-focus-wrapper h1');
              t && t.length && (e = t[0].textContent);
              const n = `Navigated to ${  e}`;
              if (this.announcementRef.current) {
                this.announcementRef.current.innerText !== n &&
                  (this.announcementRef.current.innerText = n);
              }
            });
          }),
          (n.render = function() {
            return i.a.createElement('div', Object.assign({}, g, { ref: this.announcementRef }));
          }),
          t
        );
      })(i.a.Component);
      const C = (e, t) => {
        let n; let r;
        return (
          e.href !== t.href ||
          (null == e || null === (n = e.state) || void 0 === n ? void 0 : n.key) !==
            (null == t || null === (r = t.state) || void 0 === r ? void 0 : r.key)
        );
      };
      const j = (function(e) {
        function t(t) {
          let n;
          return (n = e.call(this, t) || this), _(t.location, null), n;
        }
        Object(r.a)(t, e);
        const n = t.prototype;
        return (
          (n.componentDidMount = function() {
            S(this.props.location, null);
          }),
          (n.shouldComponentUpdate = function(e) {
            return !!C(e.location, this.props.location) && (_(this.props.location, e.location), !0);
          }),
          (n.componentDidUpdate = function(e) {
            C(e.location, this.props.location) && S(this.props.location, e.location);
          }),
          (n.render = function() {
            return i.a.createElement(
              i.a.Fragment,
              null,
              this.props.children,
              i.a.createElement(E, { location: location }),
            );
          }),
          t
        );
      })(i.a.Component);
      const k = n('IOVJ');
      const L = n('NsGk');
      const T = n.n(L);
      function D(e, t) {
        for (const n in e) {if (!(n in t)) {return !0;}}
        for (const r in t) {if (e[r] !== t[r]) {return !0;}}
        return !1;
      }
      const M = (function(e) {
        function t(t) {
          let n;
          n = e.call(this) || this;
          const { location: r, pageResources: o } = t;
          return (
            (n.state = {
              location: { ...r },
              pageResources: o || f.default.loadPageSync(r.pathname),
            }),
            n
          );
        }
        Object(r.a)(t, e),
        (t.getDerivedStateFromProps = function(e, t) {
          const { location: n } = e;
          if (t.location.href !== n.href) {
            return { pageResources: f.default.loadPageSync(n.pathname), location: { ...n } };
          }
          return { location: { ...n } };
        });
        const n = t.prototype;
        return (
          (n.loadResources = function(e) {
            f.default.loadPage(e).then(t => {
              t && t.status !== f.PageResourceStatus.Error
                ? this.setState({ location: { ...window.location }, pageResources: t })
                : (window.history.replaceState({}, '', location.href), (window.location = e));
            });
          }),
          (n.shouldComponentUpdate = function(e, t) {
            return t.pageResources
              ? this.state.pageResources !== t.pageResources ||
                    this.state.pageResources.component !== t.pageResources.component ||
                      this.state.pageResources.json !== t.pageResources.json ||
                        !(
                          this.state.location.key === t.location.key ||
                          !t.pageResources.page ||
                          (!t.pageResources.page.matchPath && !t.pageResources.page.path)
                        ) ||
                          (function(e, t, n) {
                            return D(e.props, t) || D(e.state, n);
                          })(this, e, t)
              : (this.loadResources(e.location.pathname), !1);
          }),
          (n.render = function() {
            return this.props.children(this.state);
          }),
          t
        );
      })(i.a.Component);
      const A = n('cSJ8');
      const U = n('JeVI');
      const W = new f.ProdLoader(T.a, U);
      Object(f.setLoader)(W),
      W.setApiRunner(o.apiRunner),
      (window.asyncRequires = T.a),
      (window.___emitter = v.a),
      (window.___loader = f.publicLoader),
      y.c.listen(e => {
        e.location.action = e.action;
      }),
      (window.___push = e => O(e, { replace: !1 })),
      (window.___replace = e => O(e, { replace: !0 })),
      (window.___navigate = (e, t) => O(e, t)),
      R(window.location.pathname),
      Object(o.apiRunnerAsync)('onClientEntry').then(() => {
        Object(o.apiRunner)('registerServiceWorker').length > 0 && n('NSX3');
        const e = e =>
          i.a.createElement(
            u.BaseContext.Provider,
            { value: { baseuri: '/', basepath: '/' } },
            i.a.createElement(k.a, e),
          );
        const t = i.a.createContext({});
        const a = (function(e) {
          function n() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(n, e),
            (n.prototype.render = function() {
              const { children: e } = this.props;
              return i.a.createElement(u.Location, null, n => {
                const { location: r } = n;
                return i.a.createElement(M, { location: r }, n => {
                  const { pageResources: r, location: o } = n;
                  const a = Object(f.getStaticQueryResults)();
                  return i.a.createElement(
                    h.StaticQueryContext.Provider,
                    { value: a },
                    i.a.createElement(
                      t.Provider,
                      { value: { pageResources: r, location: o } },
                      e,
                    ),
                  );
                });
              });
            }),
            n
          );
        })(i.a.Component);
        const s = (function(n) {
          function o() {
            return n.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(o, n),
            (o.prototype.render = function() {
              return i.a.createElement(t.Consumer, null, t => {
                const { pageResources: n, location: r } = t;
                return i.a.createElement(
                  j,
                  { location: r },
                  i.a.createElement(
                    l.ScrollContext,
                    { location: r, shouldUpdateScroll: x },
                    i.a.createElement(
                      u.Router,
                      { basepath: '', location: r, id: 'gatsby-focus-wrapper' },
                      i.a.createElement(
                        e,
                        Object.assign(
                          {
                            path:
                                  '/404.html' === n.page.path
                                    ? Object(A.a)(r.pathname, '')
                                    : encodeURI(n.page.matchPath || n.page.path),
                          },
                          this.props,
                          { location: r, pageResources: n },
                          n.json,
                        ),
                      ),
                    ),
                  ),
                );
              });
            }),
            o
          );
        })(i.a.Component);
        const { pagePath: p, location: m } = window;
        p &&
            `${  p}` !== m.pathname &&
            !(
              W.findMatchPath(Object(A.a)(m.pathname, '')) ||
              '/404.html' === p ||
              p.match(/^\/404\/?$/) ||
              p.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(u.navigate)(`${  p  }${m.search  }${m.hash}`, { replace: !0 }),
        f.publicLoader.loadPage(m.pathname).then(e => {
          if (!e || e.status === f.PageResourceStatus.Error) {
            throw new Error(
              `page resources for ${  m.pathname  } not found. Not rendering React`,
            );
          }
          window.___webpackCompilationHash = e.page.webpackCompilationHash;
          const t = Object(o.apiRunner)(
            'wrapRootElement',
            { element: i.a.createElement(s, null) },
            i.a.createElement(s, null),
            e => {
              const { result: t } = e;
              return { element: t };
            },
          ).pop();
          const n = () => i.a.createElement(a, null, t);
          const r = Object(o.apiRunner)('replaceHydrateFunction', void 0, c.a.hydrate)[0];
          d()(() => {
            r(
              i.a.createElement(n, null),
              'undefined' !== typeof window ? document.getElementById('___gatsby') : void 0,
              () => {
                Object(o.apiRunner)('onInitialClientRender');
              },
            );
          });
        });
      });
    },
    VbXa: function(e, t, n) {
      const r = n('SksO');
      (e.exports = function(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
      }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
    },
    Wbzz: function(e, t, n) {
      'use strict';
      n.r(t),
      n.d(t, 'graphql', function() {
        return m;
      }),
      n.d(t, 'StaticQueryContext', function() {
        return p;
      }),
      n.d(t, 'StaticQuery', function() {
        return h;
      }),
      n.d(t, 'useStaticQuery', function() {
        return f;
      }),
      n.d(t, 'prefetchPathname', function() {
        return l;
      });
      const r = n('q1tI');
      const o = n.n(r);
      const a = n('+ZDr');
      const i = n.n(a);
      n.d(t, 'Link', function() {
        return i.a;
      }),
      n.d(t, 'withAssetPrefix', function() {
        return a.withAssetPrefix;
      }),
      n.d(t, 'withPrefix', function() {
        return a.withPrefix;
      }),
      n.d(t, 'parsePath', function() {
        return a.parsePath;
      }),
      n.d(t, 'navigate', function() {
        return a.navigate;
      }),
      n.d(t, 'push', function() {
        return a.push;
      }),
      n.d(t, 'replace', function() {
        return a.replace;
      }),
      n.d(t, 'navigateTo', function() {
        return a.navigateTo;
      });
      const s = n('7hJ6');
      n.d(t, 'useScrollRestoration', function() {
        return s.useScrollRestoration;
      });
      const c = n('lw3w');
      const u = n.n(c);
      n.d(t, 'PageRenderer', function() {
        return u.a;
      });
      const l = n('emEt').default.enqueue;
      const p = o.a.createContext({});
      function d(e) {
        const { staticQueryData: t, data: n, query: r, render: a } = e;
        const i = n ? n.data : t[r] && t[r].data;
        return o.a.createElement(
          o.a.Fragment,
          null,
          i && a(i),
          !i && o.a.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }
      const h = e => {
        const { data: t, query: n, render: r, children: a } = e;
        return o.a.createElement(p.Consumer, null, e =>
          o.a.createElement(d, { data: t, query: n, render: r || a, staticQueryData: e }),
        );
      };
      const f = e => {
        let t;
        o.a.useContext;
        const n = o.a.useContext(p);
        if (isNaN(Number(e))) {
          throw new Error(
            `useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql\`${ 
              e 
            }\`);\n`,
          );
        }
        if (null !== (t = n[e]) && void 0 !== t && t.data) {return n[e].data;}
        throw new Error(
          'The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues',
        );
      };
      function m() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.',
        );
      }
    },
    'YLt+': function(e) {
      e.exports = JSON.parse('[]');
    },
    YVoz: function(e, t, n) {
      'use strict';
      e.exports = Object.assign;
    },
    YwZP: function(e, t, n) {
      'use strict';
      n.r(t),
      n.d(t, 'Link', function() {
        return T;
      }),
      n.d(t, 'Location', function() {
        return b;
      }),
      n.d(t, 'LocationProvider', function() {
        return w;
      }),
      n.d(t, 'Match', function() {
        return I;
      }),
      n.d(t, 'Redirect', function() {
        return W;
      }),
      n.d(t, 'Router', function() {
        return _;
      }),
      n.d(t, 'ServerLocation', function() {
        return P;
      }),
      n.d(t, 'isRedirect', function() {
        return M;
      }),
      n.d(t, 'redirectTo', function() {
        return A;
      }),
      n.d(t, 'useLocation', function() {
        return q;
      }),
      n.d(t, 'useNavigate', function() {
        return F;
      }),
      n.d(t, 'useParams', function() {
        return N;
      }),
      n.d(t, 'useMatch', function() {
        return J;
      }),
      n.d(t, 'BaseContext', function() {
        return R;
      });
      const r = n('q1tI');
      const o = n.n(r);
      const a = n('QLaP');
      const i = n.n(a);
      const s = n('nqlD');
      const c = n.n(s);
      const u = n('94VI');
      const l = n('LYrO');
      n.d(t, 'matchPath', function() {
        return l.match;
      });
      const p = n('9Xx/');
      n.d(t, 'createHistory', function() {
        return p.a;
      }),
      n.d(t, 'createMemorySource', function() {
        return p.b;
      }),
      n.d(t, 'navigate', function() {
        return p.d;
      }),
      n.d(t, 'globalHistory', function() {
        return p.c;
      });
      const d =
        Object.assign ||
        function(e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);}
          }
          return e;
        };
      function h(e, t) {
        const n = {};
        for (const r in e) {t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));}
        return n;
      }
      function f(e, t) {
        if (!(e instanceof t)) {throw new TypeError('Cannot call a class as a function');}
      }
      function m(e, t) {
        if (!e) {throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');}
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function v(e, t) {
        if ('function' !== typeof t && null !== t) {
          throw new TypeError(
            `Super expression must either be null or a function, not ${  typeof t}`,
          );
        }
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      const g = function(e, t) {
        const n = c()(t);
        return (n.displayName = e), n;
      };
      const y = g('Location');
      var b = function(e) {
        const t = e.children;
        return o.a.createElement(y.Consumer, null, function(e) {
          return e ? t(e) : o.a.createElement(w, null, t);
        });
      };
      var w = (function(e) {
        function t() {
          let n; let r;
          f(this, t);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) {a[i] = arguments[i];}
          return (
            (n = r = m(this, e.call.apply(e, [this].concat(a)))),
            (r.state = { context: r.getContext(), refs: { unlisten: null } }),
            m(r, n)
          );
        }
        return (
          v(t, e),
          (t.prototype.getContext = function() {
            const e = this.props.history;
            return { navigate: e.navigate, location: e.location };
          }),
          (t.prototype.componentDidCatch = function(e, t) {
            if (!M(e)) {throw e;}
            (0, this.props.history.navigate)(e.uri, { replace: !0 });
          }),
          (t.prototype.componentDidUpdate = function(e, t) {
            t.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
          }),
          (t.prototype.componentDidMount = function() {
            const e = this;
            const t = this.state.refs;
            const n = this.props.history;
            n._onTransitionComplete(),
            (t.unlisten = n.listen(function() {
              Promise.resolve().then(function() {
                requestAnimationFrame(function() {
                  e.unmounted ||
                        e.setState(function() {
                          return { context: e.getContext() };
                        });
                });
              });
            }));
          }),
          (t.prototype.componentWillUnmount = function() {
            const e = this.state.refs;
            (this.unmounted = !0), e.unlisten();
          }),
          (t.prototype.render = function() {
            const e = this.state.context;
            const t = this.props.children;
            return o.a.createElement(
              y.Provider,
              { value: e },
              'function' === typeof t ? t(e) : t || null,
            );
          }),
          t
        );
      })(o.a.Component);
      w.defaultProps = { history: p.c };
      var P = function(e) {
        const t = e.url;
        const n = e.children;
        const r = t.indexOf('?');
        let a = void 0;
        let i = '';
        return (
          r > -1 ? ((a = t.substring(0, r)), (i = t.substring(r))) : (a = t),
          o.a.createElement(
            y.Provider,
            {
              value: {
                location: { pathname: a, search: i, hash: '' },
                navigate: function() {
                  throw new Error('You can\'t call navigate on the server.');
                },
              },
            },
            n,
          )
        );
      };
      var R = g('Base', { baseuri: '/', basepath: '/' });
      var _ = function(e) {
        return o.a.createElement(R.Consumer, null, function(t) {
          return o.a.createElement(b, null, function(n) {
            return o.a.createElement(S, d({}, t, n, e));
          });
        });
      };
      var S = (function(e) {
        function t() {
          return f(this, t), m(this, e.apply(this, arguments));
        }
        return (
          v(t, e),
          (t.prototype.render = function() {
            const e = this.props;
            const t = e.location;
            const n = e.navigate;
            let r = e.basepath;
            const a = e.primary;
            const i = e.children;
            const s = (e.baseuri, e.component);
            const c = void 0 === s ? 'div' : s;
            const u = h(e, [
              'location',
              'navigate',
              'basepath',
              'primary',
              'children',
              'baseuri',
              'component',
            ]);
            const p = o.a.Children.toArray(i).reduce(function(e, t) {
              const n = Q(r)(t);
              return e.concat(n);
            }, []);
            const f = t.pathname;
            const m = Object(l.pick)(p, f);
            if (m) {
              const v = m.params;
              const g = m.uri;
              const y = m.route;
              const b = m.route.value;
              r = y.default ? r : y.path.replace(/\*$/, '');
              const w = d({}, v, {
                uri: g,
                location: t,
                navigate: function(e, t) {
                  return n(Object(l.resolve)(e, g), t);
                },
              });
              const P = o.a.cloneElement(
                b,
                w,
                b.props.children
                  ? o.a.createElement(_, { location: t, primary: a }, b.props.children)
                  : void 0,
              );
              const S = a ? x : c;
              const O = a ? d({ uri: g, location: t, component: c }, u) : u;
              return o.a.createElement(
                R.Provider,
                { value: { baseuri: g, basepath: r } },
                o.a.createElement(S, O, P),
              );
            }
            return null;
          }),
          t
        );
      })(o.a.PureComponent);
      S.defaultProps = { primary: !0 };
      const O = g('Focus');
      var x = function(e) {
        const t = e.uri;
        const n = e.location;
        const r = e.component;
        const a = h(e, ['uri', 'location', 'component']);
        return o.a.createElement(O.Consumer, null, function(e) {
          return o.a.createElement(
            j,
            d({}, a, { component: r, requestFocus: e, uri: t, location: n }),
          );
        });
      };
      let E = !0;
      let C = 0;
      var j = (function(e) {
        function t() {
          let n; let r;
          f(this, t);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) {a[i] = arguments[i];}
          return (
            (n = r = m(this, e.call.apply(e, [this].concat(a)))),
            (r.state = {}),
            (r.requestFocus = function(e) {
              !r.state.shouldFocus && e && e.focus();
            }),
            m(r, n)
          );
        }
        return (
          v(t, e),
          (t.getDerivedStateFromProps = function(e, t) {
            if (null == t.uri) {return d({ shouldFocus: !0 }, e);}
            const n = e.uri !== t.uri;
            const r = t.location.pathname !== e.location.pathname && e.location.pathname === e.uri;
            return d({ shouldFocus: n || r }, e);
          }),
          (t.prototype.componentDidMount = function() {
            C++, this.focus();
          }),
          (t.prototype.componentWillUnmount = function() {
            0 === --C && (E = !0);
          }),
          (t.prototype.componentDidUpdate = function(e, t) {
            e.location !== this.props.location && this.state.shouldFocus && this.focus();
          }),
          (t.prototype.focus = function() {
            const e = this.props.requestFocus;
            e
              ? e(this.node)
              : E
                ? (E = !1)
                : this.node && (this.node.contains(document.activeElement) || this.node.focus());
          }),
          (t.prototype.render = function() {
            const e = this;
            const t = this.props;
            const n = (t.children, t.style);
            const r = (t.requestFocus, t.component);
            const a = void 0 === r ? 'div' : r;
            const i =
                  (t.uri,
                  t.location,
                  h(t, ['children', 'style', 'requestFocus', 'component', 'uri', 'location']));
            return o.a.createElement(
              a,
              d(
                {
                  style: d({ outline: 'none' }, n),
                  tabIndex: '-1',
                  ref: function(t) {
                    return (e.node = t);
                  },
                },
                i,
              ),
              o.a.createElement(O.Provider, { value: this.requestFocus }, this.props.children),
            );
          }),
          t
        );
      })(o.a.Component);
      Object(u.polyfill)(j);
      const k = function() {};
      let L = o.a.forwardRef;
      void 0 === L &&
        (L = function(e) {
          return e;
        });
      var T = L(function(e, t) {
        const n = e.innerRef;
        const r = h(e, ['innerRef']);
        return o.a.createElement(R.Consumer, null, function(e) {
          e.basepath;
          const a = e.baseuri;
          return o.a.createElement(b, null, function(e) {
            const i = e.location;
            const s = e.navigate;
            const c = r.to;
            const u = r.state;
            const p = r.replace;
            const f = r.getProps;
            const m = void 0 === f ? k : f;
            const v = h(r, ['to', 'state', 'replace', 'getProps']);
            const g = Object(l.resolve)(c, a);
            const y = encodeURI(g);
            const b = i.pathname === y;
            const w = Object(l.startsWith)(i.pathname, y);
            return o.a.createElement(
              'a',
              d(
                { ref: t || n, 'aria-current': b ? 'page' : void 0 },
                v,
                m({ isCurrent: b, isPartiallyCurrent: w, href: g, location: i }),
                {
                  href: g,
                  onClick: function(e) {
                    if ((v.onClick && v.onClick(e), H(e))) {
                      e.preventDefault();
                      let t = p;
                      if ('boolean' !== typeof p && b) {
                        const n = d({}, i.state);
                        const r = (n.key, h(n, ['key']));
                        t = Object(l.shallowCompare)(d({}, u), r);
                      }
                      s(g, { state: u, replace: t });
                    }
                  },
                },
              ),
            );
          });
        });
      });
      function D(e) {
        this.uri = e;
      }
      T.displayName = 'Link';
      var M = function(e) {
        return e instanceof D;
      };
      var A = function(e) {
        throw new D(e);
      };
      const U = (function(e) {
        function t() {
          return f(this, t), m(this, e.apply(this, arguments));
        }
        return (
          v(t, e),
          (t.prototype.componentDidMount = function() {
            const e = this.props;
            const t = e.navigate;
            const n = e.to;
            const r = (e.from, e.replace);
            const o = void 0 === r || r;
            const a = e.state;
            const i = (e.noThrow, e.baseuri);
            const s = h(e, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']);
            Promise.resolve().then(function() {
              const e = Object(l.resolve)(n, i);
              t(Object(l.insertParams)(e, s), { replace: o, state: a });
            });
          }),
          (t.prototype.render = function() {
            const e = this.props;
            const t = (e.navigate, e.to);
            const n = (e.from, e.replace, e.state, e.noThrow);
            const r = e.baseuri;
            const o = h(e, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']);
            const a = Object(l.resolve)(t, r);
            return n || A(Object(l.insertParams)(a, o)), null;
          }),
          t
        );
      })(o.a.Component);
      var W = function(e) {
        return o.a.createElement(R.Consumer, null, function(t) {
          const n = t.baseuri;
          return o.a.createElement(b, null, function(t) {
            return o.a.createElement(U, d({}, t, { baseuri: n }, e));
          });
        });
      };
      var I = function(e) {
        const t = e.path;
        const n = e.children;
        return o.a.createElement(R.Consumer, null, function(e) {
          const r = e.baseuri;
          return o.a.createElement(b, null, function(e) {
            const o = e.navigate;
            const a = e.location;
            const i = Object(l.resolve)(t, r);
            const s = Object(l.match)(i, a.pathname);
            return n({
              navigate: o,
              location: a,
              match: s ? d({}, s.params, { uri: s.uri, path: t }) : null,
            });
          });
        });
      };
      var q = function() {
        const e = Object(r.useContext)(y);
        if (!e) {
          throw new Error(
            'useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
          );
        }
        return e.location;
      };
      var F = function() {
        const e = Object(r.useContext)(y);
        if (!e) {
          throw new Error(
            'useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
          );
        }
        return e.navigate;
      };
      var N = function() {
        const e = Object(r.useContext)(R);
        if (!e) {
          throw new Error(
            'useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
          );
        }
        const t = q();
        const n = Object(l.match)(e.basepath, t.pathname);
        return n ? n.params : null;
      };
      var J = function(e) {
        if (!e) {
          throw new Error(
            'useMatch(path: string) requires an argument of a string to match against',
          );
        }
        const t = Object(r.useContext)(R);
        if (!t) {
          throw new Error(
            'useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
          );
        }
        const n = q();
        const o = Object(l.resolve)(e, t.baseuri);
        const a = Object(l.match)(o, n.pathname);
        return a ? d({}, a.params, { uri: a.uri, path: e }) : null;
      };
      const G = function(e) {
        return e.replace(/(^\/+|\/+$)/g, '');
      };
      var Q = function e(t) {
        return function(n) {
          if (!n) {return null;}
          if (n.type === o.a.Fragment && n.props.children) {return o.a.Children.map(n.props.children, e(t));}
          if (
            (n.props.path || n.props.default || n.type === W || i()(!1),
            n.type !== W || (n.props.from && n.props.to) || i()(!1),
            n.type !== W || Object(l.validateRedirect)(n.props.from, n.props.to) || i()(!1),
            n.props.default)
          ) {return { value: n, default: !0 };}
          const r = n.type === W ? n.props.from : n.props.path;
          const a = '/' === r ? t : `${G(t)  }/${  G(r)}`;
          return { value: n, default: n.props.default, path: n.props.children ? `${G(a)  }/*` : a };
        };
      };
      var H = function(e) {
        return (
          !e.defaultPrevented &&
            0 === e.button &&
            !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        );
      };
    },
    cDf5: function(e, t) {
      function n(t) {
        return (
          (e.exports = n =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                return typeof e;
              }
              : function(e) {
                return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    cSJ8: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          void 0 === t && (t = ''),
          t ? (e === t ? '/' : e.startsWith(`${t  }/`) ? e.slice(t.length) : e) : e
        );
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    cu4x: function(e, t, n) {
      'use strict';
      (t.__esModule = !0),
      (t.parsePath = function(e) {
        let t = e || '/';
        let n = '';
        let r = '';
        const o = t.indexOf('#');
        -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
        const a = t.indexOf('?');
        -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a)));
        return { pathname: t, search: '?' === n ? '' : n, hash: '#' === r ? '' : r };
      });
    },
    dI71: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function o(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
      }
      n.d(t, 'a', function() {
        return o;
      });
    },
    'e/UW': function(e, t, n) {
      'use strict';
      t.registerServiceWorker = function() {
        return !0;
      };
      const r = /^(stylesheet|preload)$/;
      const o = [];
      function a(e, t) {
        if (!window.___swUpdated && 'serviceWorker' in navigator) {
          const n = navigator.serviceWorker;
          if (null === n.controller) {o.push(e);} else {
            const r = t(e);
            n.controller.postMessage({ gatsbyApi: 'setPathResources', path: e, resources: r });
          }
        }
      }
      (t.onServiceWorkerActive = function(e) {
        const t = e.getResourceURLsForPathname;
        const n = e.serviceWorker;
        if (window.___swUpdated) {n.active.postMessage({ gatsbyApi: 'clearPathResources' });} else {
          const a = document.querySelectorAll(
            '\n    head > script[src],\n    head > link[href],\n    head > style[data-href]\n  ',
          );
          const i = [].slice
            .call(a)
            .filter(function(e) {
              return 'LINK' !== e.tagName || r.test(e.getAttribute('rel'));
            })
            .map(function(e) {
              return e.src || e.href || e.getAttribute('data-href');
            });
          const s = [];
          o.forEach(function(e) {
            const r = t(e);
            s.push.apply(s, r),
            n.active.postMessage({ gatsbyApi: 'setPathResources', path: e, resources: r });
          }),
          [].concat(i, s).forEach(function(e) {
            const t = document.createElement('link');
            (t.rel = 'prefetch'),
            (t.href = e),
            (t.onload = t.remove),
            (t.onerror = t.remove),
            document.head.appendChild(t);
          });
        }
      }),
      (t.onRouteUpdate = function(e) {
        const t = e.location;
        const n = e.getResourceURLsForPathname;
        a(t.pathname.replace('', ''), n),
        'serviceWorker' in navigator &&
              null !== navigator.serviceWorker.controller &&
              navigator.serviceWorker.controller.postMessage({ gatsbyApi: 'enableOfflineShell' });
      }),
      (t.onPostPrefetchPathname = function(e) {
        a(e.pathname, e.getResourceURLsForPathname);
      });
    },
    emEt: function(e, t, n) {
      'use strict';
      n.r(t),
      n.d(t, 'PageResourceStatus', function() {
        return p;
      }),
      n.d(t, 'BaseLoader', function() {
        return v;
      }),
      n.d(t, 'ProdLoader', function() {
        return b;
      }),
      n.d(t, 'setLoader', function() {
        return w;
      }),
      n.d(t, 'publicLoader', function() {
        return P;
      }),
      n.d(t, 'getStaticQueryResults', function() {
        return R;
      });
      const r = n('dI71');
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) {r[n] = e[n];}
        return r;
      }
      function a(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {return o(e);}
          })(e) ||
          (function(e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            ) {return Array.from(e);}
          })(e) ||
          (function(e, t) {
            if (e) {
              if ('string' === typeof e) {return o(e, t);}
              let n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? o(e, t)
                    : void 0
              );
            }
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      const i = (function(e) {
        if ('undefined' === typeof document) {return !1;}
        const t = document.createElement('link');
        try {
          if (t.relList && 'function' === typeof t.relList.supports) {return t.relList.supports(e);}
        } catch (n) {
          return !1;
        }
        return !1;
      })('prefetch')
        ? function(e, t) {
          return new Promise((n, r) => {
            if ('undefined' === typeof document) {return void r();}
            const o = document.createElement('link');
            o.setAttribute('rel', 'prefetch'),
            o.setAttribute('href', e),
            Object.keys(t).forEach(e => {
              o.setAttribute(e, t[e]);
            }),
            (o.onload = n),
            (o.onerror = r);
            (
              document.getElementsByTagName('head')[0] ||
                  document.getElementsByName('script')[0].parentNode
            ).appendChild(o);
          });
        }
        : function(e) {
          return new Promise((t, n) => {
            const r = new XMLHttpRequest();
            r.open('GET', e, !0),
            (r.onload = () => {
              200 === r.status ? t() : n();
            }),
            r.send(null);
          });
        };
      const s = {};
      const c = function(e, t) {
        return new Promise(n => {
          s[e]
            ? n()
            : i(e, t)
              .then(() => {
                n(), (s[e] = !0);
              })
              .catch(() => {});
        });
      };
      const u = n('5yr3');
      const l = n('30RF');
      const p = { Error: 'error', Success: 'success' };
      const d = e => (e && e.default) || e;
      const h = e => {
        let t;
        return (
          `/page-data/${ 
            '/' === e
              ? 'index'
              : (t = (t = '/' === (t = e)[0] ? t.slice(1) : t).endsWith('/')
                ? t.slice(0, -1)
                : t) 
          }/page-data.json`
        );
      };
      function f(e, t) {
        return (
          void 0 === t && (t = 'GET'),
          new Promise((n, r) => {
            const o = new XMLHttpRequest();
            o.open(t, e, !0),
            (o.onreadystatechange = () => {
              4 == o.readyState && n(o);
            }),
            o.send(null);
          })
        );
      }
      const m = function(e, t) {
        void 0 === t && (t = null);
        const n = {
          componentChunkName: e.componentChunkName,
          path: e.path,
          webpackCompilationHash: e.webpackCompilationHash,
          matchPath: e.matchPath,
          staticQueryHashes: e.staticQueryHashes,
        };
        return { component: t, json: e.result, page: n };
      };
      const v = (function() {
        function e(e, t) {
          (this.inFlightNetworkRequests = new Map()),
          (this.pageDb = new Map()),
          (this.inFlightDb = new Map()),
          (this.staticQueryDb = {}),
          (this.pageDataDb = new Map()),
          (this.prefetchTriggered = new Set()),
          (this.prefetchCompleted = new Set()),
          (this.loadComponent = e),
          Object(l.d)(t);
        }
        const t = e.prototype;
        return (
          (t.memoizedGet = function(e) {
            let t = this.inFlightNetworkRequests.get(e);
            return (
              t || ((t = f(e, 'GET')), this.inFlightNetworkRequests.set(e, t)),
              t
                .then(t => (this.inFlightNetworkRequests.delete(e), t))
                .catch(t => {
                  throw (this.inFlightNetworkRequests.delete(e), t);
                })
            );
          }),
          (t.setApiRunner = function(e) {
            (this.apiRunner = e),
            (this.prefetchDisabled = e('disableCorePrefetching').some(e => e));
          }),
          (t.fetchPageDataJson = function(e) {
            const { pagePath: t, retries: n = 0 } = e;
            const r = h(t);
            return this.memoizedGet(r).then(r => {
              const { status: o, responseText: a } = r;
              if (200 === o) {
                try {
                  const t = JSON.parse(a);
                  if (void 0 === t.path) {throw new Error('not a valid pageData response');}
                  return Object.assign(e, { status: p.Success, payload: t });
                } catch (i) {}
              }
              return 404 === o || 200 === o
                ? '/404.html' === t
                  ? Object.assign(e, { status: p.Error })
                  : this.fetchPageDataJson(
                    Object.assign(e, { pagePath: '/404.html', notFound: !0 }),
                  )
                : 500 === o
                  ? Object.assign(e, { status: p.Error })
                  : n < 3
                    ? this.fetchPageDataJson(Object.assign(e, { retries: n + 1 }))
                    : Object.assign(e, { status: p.Error });
            });
          }),
          (t.loadPageDataJson = function(e) {
            const t = Object(l.b)(e);
            if (this.pageDataDb.has(t)) {
              const e = this.pageDataDb.get(t);
              return Promise.resolve(e);
            }
            return this.fetchPageDataJson({ pagePath: t }).then(
              e => (this.pageDataDb.set(t, e), e),
            );
          }),
          (t.findMatchPath = function(e) {
            return Object(l.a)(e);
          }),
          (t.loadPage = function(e) {
            const t = Object(l.b)(e);
            if (this.pageDb.has(t)) {
              const e = this.pageDb.get(t);
              return Promise.resolve(e.payload);
            }
            if (this.inFlightDb.has(t)) {return this.inFlightDb.get(t);}
            const n = Promise.all([this.loadAppData(), this.loadPageDataJson(t)]).then(e => {
              const n = e[1];
              if (n.status === p.Error) {return { status: p.Error };}
              let r = n.payload;
              const { componentChunkName: o, staticQueryHashes: a = [] } = r;
              const i = {};
              const s = this.loadComponent(o).then(t => {
                let o;
                return (
                  (i.createdAt = new Date()),
                  t
                    ? ((i.status = p.Success),
                    !0 === n.notFound && (i.notFound = !0),
                    (r = Object.assign(r, {
                      webpackCompilationHash: e[0] ? e[0].webpackCompilationHash : '',
                    })),
                    (o = m(r, t)))
                    : (i.status = p.Error),
                  o
                );
              });
              const c = Promise.all(
                a.map(e => {
                  if (this.staticQueryDb[e]) {
                    const t = this.staticQueryDb[e];
                    return { staticQueryHash: e, jsonPayload: t };
                  }
                  return this.memoizedGet(`/page-data/sq/d/${  e  }.json`).then(t => {
                    const n = JSON.parse(t.responseText);
                    return { staticQueryHash: e, jsonPayload: n };
                  });
                }),
              ).then(e => {
                const t = {};
                return (
                  e.forEach(e => {
                    const { staticQueryHash: n, jsonPayload: r } = e;
                    (t[n] = r), (this.staticQueryDb[n] = r);
                  }),
                  t
                );
              });
              return Promise.all([s, c]).then(e => {
                let n;
                const [r, o] = e;
                return (
                  r &&
                    ((n = { ...r, staticQueryResults: o }),
                    (i.payload = n),
                    u.a.emit('onPostLoadPageResources', { page: n, pageResources: n })),
                  this.pageDb.set(t, i),
                  n
                );
              });
            });
            return (
              n
                .then(e => {
                  this.inFlightDb.delete(t);
                })
                .catch(e => {
                  throw (this.inFlightDb.delete(t), e);
                }),
              this.inFlightDb.set(t, n),
              n
            );
          }),
          (t.loadPageSync = function(e) {
            const t = Object(l.b)(e);
            if (this.pageDb.has(t)) {
              return this.pageDb.get(t).payload;
            }
          }),
          (t.shouldPrefetch = function(e) {
            return (
              !!(() => {
                if ('connection' in navigator && void 0 !== navigator.connection) {
                  if ((navigator.connection.effectiveType || '').includes('2g')) {return !1;}
                  if (navigator.connection.saveData) {return !1;}
                }
                return !0;
              })() && !this.pageDb.has(e)
            );
          }),
          (t.prefetch = function(e) {
            if (!this.shouldPrefetch(e)) {return !1;}
            if (
              (this.prefetchTriggered.has(e) ||
                (this.apiRunner('onPrefetchPathname', { pathname: e }),
                this.prefetchTriggered.add(e)),
              this.prefetchDisabled)
            ) {return !1;}
            const t = Object(l.b)(e);
            return (
              this.doPrefetch(t).then(() => {
                this.prefetchCompleted.has(e) ||
                  (this.apiRunner('onPostPrefetchPathname', { pathname: e }),
                  this.prefetchCompleted.add(e));
              }),
              !0
            );
          }),
          (t.doPrefetch = function(e) {
            const t = h(e);
            return c(t, { crossOrigin: 'anonymous', as: 'fetch' }).then(() =>
              this.loadPageDataJson(e),
            );
          }),
          (t.hovering = function(e) {
            this.loadPage(e);
          }),
          (t.getResourceURLsForPathname = function(e) {
            const t = Object(l.b)(e);
            const n = this.pageDataDb.get(t);
            if (n) {
              const e = m(n.payload);
              return [].concat(a(g(e.page.componentChunkName)), [h(t)]);
            }
            return null;
          }),
          (t.isPageNotFound = function(e) {
            const t = Object(l.b)(e);
            const n = this.pageDb.get(t);
            return !n || n.notFound;
          }),
          (t.loadAppData = function(e) {
            return (
              void 0 === e && (e = 0),
              this.memoizedGet('/page-data/app-data.json').then(t => {
                const { status: n, responseText: r } = t;
                let o;
                if (200 !== n && e < 3) {return this.loadAppData(e + 1);}
                if (200 === n) {
                  try {
                    const e = JSON.parse(r);
                    if (void 0 === e.webpackCompilationHash) {throw new Error('not a valid app-data response');}
                    o = e;
                  } catch (a) {}
                }
                return o;
              })
            );
          }),
          e
        );
      })();
      const g = e => (window.___chunkMapping[e] || []).map(e => `${  e}`);
      let y;
      const b = (function(e) {
        function t(t, n) {
          return (
            e.call(
              this,
              e =>
                t.components[e]
                  ? t.components[e]()
                    .then(d)
                    .catch(() => null)
                  : Promise.resolve(),
              n,
            ) || this
          );
        }
        Object(r.a)(t, e);
        const n = t.prototype;
        return (
          (n.doPrefetch = function(t) {
            return e.prototype.doPrefetch.call(this, t).then(e => {
              if (e.status !== p.Success) {return Promise.resolve();}
              const t = e.payload;
              const n = t.componentChunkName;
              const r = g(n);
              return Promise.all(r.map(c)).then(() => t);
            });
          }),
          (n.loadPageDataJson = function(t) {
            return e.prototype.loadPageDataJson
              .call(this, t)
              .then(e =>
                e.notFound
                  ? f(t, 'HEAD').then(t => (200 === t.status ? { status: p.Error } : e))
                  : e,
              );
          }),
          t
        );
      })(v);
      const w = e => {
        y = e;
      };
      const P = {
        getResourcesForPathname: e => (
          console.warn('Warning: getResourcesForPathname is deprecated. Use loadPage instead'),
          y.i.loadPage(e)
        ),
        getResourcesForPathnameSync: e => (
          console.warn(
            'Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead',
          ),
          y.i.loadPageSync(e)
        ),
        enqueue: e => y.prefetch(e),
        getResourceURLsForPathname: e => y.getResourceURLsForPathname(e),
        loadPage: e => y.loadPage(e),
        loadPageSync: e => y.loadPageSync(e),
        prefetch: e => y.prefetch(e),
        isPageNotFound: e => y.isPageNotFound(e),
        hovering: e => y.hovering(e),
        loadAppData: () => y.loadAppData(),
      };
      t.default = P;
      function R() {
        return y ? y.staticQueryDb : {};
      }
    },
    hd9s: function(e, t, n) {
      'use strict';
      const r = n('284h');
      const o = n('TqRt');
      (t.__esModule = !0), (t.ScrollContainer = void 0);
      const a = o(n('pVnL'));
      const i = o(n('VbXa'));
      const s = r(n('q1tI'));
      const c = o(n('i8i4'));
      const u = o(n('17x9'));
      const l = n('Enzk');
      const p = n('YwZP');
      const d = {
        scrollKey: u.default.string.isRequired,
        shouldUpdateScroll: u.default.func,
        children: u.default.element.isRequired,
      };
      const h = (function(e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        (0, i.default)(t, e);
        const n = t.prototype;
        return (
          (n.componentDidMount = function() {
            const e = this;
            const t = c.default.findDOMNode(this);
            const n = this.props;
            const r = n.location;
            const o = n.scrollKey;
            if (t) {
              t.addEventListener('scroll', function() {
                e.props.context.save(r, o, t.scrollTop);
              });
              const a = this.props.context.read(r, o);
              t.scrollTo(0, a || 0);
            }
          }),
          (n.render = function() {
            return this.props.children;
          }),
          t
        );
      })(s.Component);
      const f = function(e) {
        return s.createElement(p.Location, null, function(t) {
          const n = t.location;
          return s.createElement(l.ScrollContext.Consumer, null, function(t) {
            return s.createElement(h, (0, a.default)({}, e, { context: t, location: n }));
          });
        });
      };
      (t.ScrollContainer = f), (f.propTypes = d);
    },
    lw3w: function(e, t, n) {
      let r;
      e.exports = ((r = n('rzlk')) && r.default) || r;
    },
    npZl: function(e, t, n) {
      'use strict';
      const r = n('TqRt');
      n('Wbzz'), r(n('9hXx'));
    },
    nqlD: function(e, t, n) {
      const { createContext: r } = n('q1tI');
      (e.exports = r), (e.exports.default = r);
    },
    nwwn: function(e, t, n) {
      'use strict';
      (t.DEFAULT_OPTIONS = {
        maxWidth: 650,
        wrapperStyle: '',
        backgroundColor: 'white',
        linkImagesToOriginal: !0,
        showCaptions: !1,
        markdownCaptions: !1,
        withWebp: !1,
        withAvif: !1,
        tracedSVG: !1,
        loading: 'lazy',
        disableBgImageOnAlpha: !1,
        disableBgImage: !1,
      }),
      (t.EMPTY_ALT = 'GATSBY_EMPTY_ALT'),
      (t.imageClass = 'gatsby-resp-image-image'),
      (t.imageWrapperClass = 'gatsby-resp-image-wrapper'),
      (t.imageBackgroundClass = 'gatsby-resp-image-background-image');
    },
    pVnL: function(e, t) {
      function n() {
        return (
          (e.exports = n = Object.assign
            ? Object.assign.bind()
            : function(e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);}
              }
              return e;
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n.apply(this, arguments)
        );
      }
      (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    pWkz: function(e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.onRouteUpdate = void 0);
      t.onRouteUpdate = function(e, t) {
        const n = e.location;
        if ((void 0 === t && (t = {}), 'function' !== typeof ga)) {return null;}
        if (
          n &&
          void 0 !== window.excludeGAPaths &&
          window.excludeGAPaths.some(function(e) {
            return e.test(n.pathname);
          })
        ) {return null;}
        const r = Math.max(32, t.pageTransitionDelay || 0);
        return (
          setTimeout(function() {
            const e = n ? n.pathname + n.search + n.hash : void 0;
            window.ga('set', 'page', e), window.ga('send', 'pageview');
          }, r),
          null
        );
      };
    },
    q9nr: function(e, t, n) {
      'use strict';
      const r = n('nwwn');
      const o = r.DEFAULT_OPTIONS;
      const a = r.imageClass;
      const i = r.imageBackgroundClass;
      const s = r.imageWrapperClass;
      t.onRouteUpdate = function(e, t) {
        for (
          var n = Object.assign({}, o, t),
            r = document.querySelectorAll(`.${  s}`),
            c = function(e) {
              const t = r[e];
              const o = t.querySelector(`.${  i}`);
              const s = t.querySelector(`.${  a}`);
              const c = function() {
                (o.style.transition = 'opacity 0.5s 0.5s'),
                (s.style.transition = 'opacity 0.5s'),
                u();
              };
              var u = function e() {
                (o.style.opacity = 0),
                (s.style.opacity = 1),
                (s.style.color = 'inherit'),
                (s.style.boxShadow = `inset 0px 0px 0px 400px ${  n.backgroundColor}`),
                s.removeEventListener('load', c),
                s.removeEventListener('error', e);
              };
              (s.style.opacity = 0),
              s.addEventListener('load', c),
              s.addEventListener('error', u),
              s.complete && u();
            },
            u = 0;
          u < r.length;
          u++
        ) {c(u);}
      };
    },
    rzlk: function(e, t, n) {
      'use strict';
      n.r(t);
      const r = n('q1tI');
      const o = n.n(r);
      const a = n('emEt');
      const i = n('IOVJ');
      t.default = e => {
        const { location: t } = e;
        const n = a.default.loadPageSync(t.pathname);
        return n ? o.a.createElement(i.a, { location: t, pageResources: n, ...n.json }) : null;
      };
    },
    xtsi: function(e, t, n) {
      const r = n('LeKB');
      const {
        getResourcesForPathname: o,
        getResourcesForPathnameSync: a,
        getResourceURLsForPathname: i,
        loadPage: s,
        loadPageSync: c,
      } = n('emEt').publicLoader;
      (t.apiRunner = function(e, t, n, u) {
        void 0 === t && (t = {});
        let l = r.map(n => {
          if (!n.plugin[e]) {return;}
          (t.getResourcesForPathnameSync = a),
          (t.getResourcesForPathname = o),
          (t.getResourceURLsForPathname = i),
          (t.loadPage = s),
          (t.loadPageSync = c);
          const r = n.plugin[e](t, n.options);
          return r && u && (t = u({ args: t, result: r, plugin: n })), r;
        });
        return (l = l.filter(e => void 0 !== e)), l.length > 0 ? l : n ? [n] : [];
      }),
      (t.apiRunnerAsync = (e, t, n) =>
        r.reduce(
          (n, r) => (r.plugin[e] ? n.then(() => r.plugin[e](t, r.options)) : n),
          Promise.resolve(),
        ));
    },
  },
  [['UxWs', 1, 7]],
]);
//# sourceMappingURL=app-663183bacaf3c63b9306.js.map
