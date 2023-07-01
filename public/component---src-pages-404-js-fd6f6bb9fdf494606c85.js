(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    w2l6: function(e, t, n) {
      'use strict';
      n.r(t);
      let o;
      let c;
      let a;
      let i;
      const l = n('MUpH');
      const s = n('q1tI');
      const m = n.n(s);
      const p = n('Wbzz');
      const f = n('VeD8');
      const r = n('pQ8y');
      const u = n('Kvkj');
      const d = n('vOnD');
      const w = n('InJ6');
      const { colors: b, fonts: h } = w.h;
      const g = Object(d.c)(w.d).withConfig({
        displayName: 'sc-404__StyledMainContainer',
        componentId: 'sc-1mtm1cw-0',
      })(['', ';flex-direction:column;height:100vh !important;'], w.g.flexCenter);
      const y = d.c.h1.withConfig({ displayName: 'sc-404__StyledTitle', componentId: 'sc-1mtm1cw-1' })(
        ['color:', ';font-family:', ';font-size:12vw;line-height:1;', ' ', ';'],
        b.green,
        h.SFMono,
        w.f.bigDesktop(o || (o = Object(l.a)(['font-size: 200px;']))),
        w.f.phablet(c || (c = Object(l.a)(['font-size: 120px;']))),
      );
      const j = d.c.h2.withConfig({
        displayName: 'sc-404__StyledSubtitle',
        componentId: 'sc-1mtm1cw-2',
      })(
        ['font-size:3vw;font-weight:400;', ';', ';'],
        w.f.bigDesktop(a || (a = Object(l.a)(['font-size: 50px;']))),
        w.f.phablet(i || (i = Object(l.a)(['font-size: 30px;']))),
      );
      const O = Object(d.c)(p.Link).withConfig({
        displayName: 'sc-404__StyledHomeButton',
        componentId: 'sc-1mtm1cw-3',
      })(['', ';margin-top:40px;'], w.g.bigButton);
      t.default = e => {
        const { location: t } = e;
        const { 0: n, 1: o } = Object(s.useState)(!1);
        return (
          Object(s.useEffect)(() => {
            const e = setTimeout(() => o(!0), 1e3);
            return () => clearTimeout(e);
          }, []),
          m.a.createElement(
            u.h,
            { location: t },
            m.a.createElement(
              f.a,
              { component: null },
              n &&
                m.a.createElement(
                  r.a,
                  { timeout: 500, classNames: 'fade' },
                  m.a.createElement(
                    g,
                    null,
                    m.a.createElement(y, null, '404'),
                    m.a.createElement(j, null, 'Page Not Found'),
                    m.a.createElement(O, { to: '/' }, 'Go Home'),
                  ),
                ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-fd6f6bb9fdf494606c85.js.map
