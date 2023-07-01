(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    nRki: function(e, t, a) {
      'use strict';
      a.r(t);
      let n;
      let l;
      let r;
      let i;
      let c;
      let o;
      let s;
      let m;
      let p;
      let h;
      let d;
      const f = a('MUpH');
      const b = a('q1tI');
      const u = a.n(b);
      const g = a('TJpk');
      const E = a('nLfd');
      const x = a('20nU');
      const y = a('Kvkj');
      const w = a('g67X');
      const j = a('vOnD');
      const v = a('InJ6');
      const { colors: k, fonts: O, fontSizes: N } = v.h;
      const _ = Object(j.c)(v.d).withConfig({
        displayName: 'archive__StyledMainContainer',
        componentId: 'sc-buq3tp-0',
      })(['min-height:100vh;height:100%;max-width:1600px;']);
      const z = j.c.header.withConfig({
        displayName: 'archive__StyledTitleContainer',
        componentId: 'sc-buq3tp-1',
      })(
        ['margin-top:200px;', ';'],
        v.f.tablet(n || (n = Object(f.a)(['\n    margin-top: 150px;\n  ']))),
      );
      const C = j.c.h1.withConfig({ displayName: 'archive__StyledTitle', componentId: 'sc-buq3tp-2' })(
        ['font-size:80px;line-height:1.1;margin:0;', ';', ';', ';', ';'],
        v.f.desktop(l || (l = Object(f.a)(['font-size: 70px;']))),
        v.f.tablet(r || (r = Object(f.a)(['font-size: 60px;']))),
        v.f.phablet(i || (i = Object(f.a)(['font-size: 50px;']))),
        v.f.phone(c || (c = Object(f.a)(['font-size: 40px;']))),
      );
      const S = j.c.p.withConfig({
        displayName: 'archive__StyledSubtitle',
        componentId: 'sc-buq3tp-3',
      })(
        [
          'color:',
          ';margin:0 0 20px 3px;font-size:',
          ';font-family:',
          ';font-weight:normal;',
          ';',
          ';',
        ],
        k.green,
        N.md,
        O.SFMono,
        v.f.desktop(o || (o = Object(f.a)(['font-size: ', ';'])), N.sm),
        v.f.tablet(s || (s = Object(f.a)(['font-size: ', ';'])), N.smish),
      );
      const I = j.c.div.withConfig({
        displayName: 'archive__StyledTableContainer',
        componentId: 'sc-buq3tp-4',
      })(
        ['margin:100px -20px;', ';'],
        v.f.tablet(m || (m = Object(f.a)(['\n    margin: 100px -10px;\n  ']))),
      );
      const q = j.c.table.withConfig({
        displayName: 'archive__StyledTable',
        componentId: 'sc-buq3tp-5',
      })(
        [
          'width:100%;border-collapse:collapse;.hide-on-mobile{',
          ';}tbody tr{transition:',
          ';&:hover,&:focus{background-color:',
          ';}}th,td{cursor:default;line-height:1.5;padding:10px 20px;',
          ';}th{text-align:left;}td{&.year{width:10%;',
          ';}&.title{padding-top:15px;color:',
          ';font-size:',
          ';font-weight:700;}&.company{width:15%;padding-top:15px;font-size:',
          ';}&.tech{font-size:',
          ';font-family:',
          ';}&.links{span{',
          ';a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}',
        ],
        v.f.tablet(p || (p = Object(f.a)(['\n      display: none;\n    ']))),
        v.h.transition,
        k.lightNavy,
        v.f.tablet(h || (h = Object(f.a)(['\n      padding: 10px;\n    ']))),
        v.f.tablet(d || (d = Object(f.a)(['\n        font-size: ', ';\n      '])), N.sm),
        k.lightestSlate,
        N.xl,
        N.lg,
        N.xs,
        O.SFMono,
        v.g.flexBetween,
      );
      t.default = e => {
        const { location: t, data: a } = e;
        const n = a.projects.edges;
        const l = Object(b.useRef)(null);
        const r = Object(b.useRef)(null);
        const i = Object(b.useRef)([]);
        return (
          Object(b.useEffect)(() => {
            E.a.reveal(l.current, Object(x.srConfig)()),
            E.a.reveal(r.current, Object(x.srConfig)()),
            i.current.forEach((e, t) => E.a.reveal(e, Object(x.srConfig)(10 * t)));
          }, []),
          u.a.createElement(
            y.h,
            { location: t },
            u.a.createElement(
              g.Helmet,
              null,
              u.a.createElement('title', null, 'Archive | Turbold Amar'),
              u.a.createElement('link', { rel: 'canonical', href: 'https://turbold.me/archive' }),
            ),
            u.a.createElement(
              _,
              null,
              u.a.createElement(
                z,
                { ref: l },
                u.a.createElement(C, null, 'Archive'),
                u.a.createElement(
                  S,
                  null,
                  'A big list of projects (',
                  n.length,
                  ') I’ve worked on.',
                ),
              ),
              u.a.createElement(
                I,
                { ref: r },
                u.a.createElement(
                  q,
                  null,
                  u.a.createElement(
                    'thead',
                    null,
                    u.a.createElement(
                      'tr',
                      null,
                      u.a.createElement('th', null, 'Year'),
                      u.a.createElement('th', null, 'Title'),
                      u.a.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      u.a.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      u.a.createElement('th', null, 'Link'),
                    ),
                  ),
                  u.a.createElement(
                    'tbody',
                    null,
                    n.length > 0 &&
                      n.map((e, t) => {
                        const { node: a } = e;
                        const {
                          date: n,
                          github: l,
                          external: r,
                          title: c,
                          tech: o,
                          company: s,
                        } = a.frontmatter;
                        return u.a.createElement(
                          'tr',
                          { key: t, ref: e => (i.current[t] = e) },
                          u.a.createElement(
                            'td',
                            { className: 'overline year' },
                            `${  new Date(n).getFullYear()}`,
                          ),
                          u.a.createElement('td', { className: 'title' }, c),
                          u.a.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            s
                              ? u.a.createElement('span', null, s)
                              : u.a.createElement('span', null, '—'),
                          ),
                          u.a.createElement(
                            'td',
                            { className: 'tech hide-on-mobile' },
                            o.length > 0 &&
                              o.map((e, t) =>
                                u.a.createElement(
                                  'span',
                                  { key: t },
                                  u.a.createElement('span', { key: t }, e),
                                  t !== o.length - 1 && u.a.createElement('span', null, ' · '),
                                ),
                              ),
                          ),
                          u.a.createElement(
                            'td',
                            { className: 'links' },
                            u.a.createElement(
                              'span',
                              null,
                              l
                                ? u.a.createElement(
                                  'a',
                                  {
                                    href: l,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'GitHub Link',
                                  },
                                  u.a.createElement(w.e, null),
                                )
                                : u.a.createElement('span', { 'aria-label': 'Empty' }, '—'),
                              r
                                ? u.a.createElement(
                                  'a',
                                  {
                                    href: r,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'External Link',
                                  },
                                  u.a.createElement(w.b, null),
                                )
                                : u.a.createElement('span', { 'aria-label': 'Empty' }, '—'),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-efde350b897d3f673bdb.js.map
