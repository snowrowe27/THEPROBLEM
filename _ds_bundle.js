/* @ds-bundle: {"format":3,"namespace":"THEPROBLEMFilmDesignSystem_e8d583","components":[{"name":"MoneyCounter","sourcePath":"components/brand/MoneyCounter.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/MoneyCounter.jsx":"42f46543b327","components/brand/Wordmark.jsx":"3c7fc2f08d04","components/core/Badge.jsx":"460bd4328809","components/core/Button.jsx":"6be7b35f1d37","components/core/Card.jsx":"6f788f048d41","components/forms/Input.jsx":"5d08b328adf8","ui_kits/site/App.jsx":"1bee0b9acf63","ui_kits/site/Capture.jsx":"20620e8a2c8b","ui_kits/site/Hero.jsx":"0ab0550326a1","ui_kits/site/Nav.jsx":"e4b8f02b0506","ui_kits/site/SiteFooter.jsx":"783180b56901","ui_kits/site/TrailerModal.jsx":"cf9eb7c5127b","ui_kits/site/Turn.jsx":"fcb6410e312e","ui_kits/site/icons.jsx":"56483ef83218"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.THEPROBLEMFilmDesignSystem_e8d583 = window.THEPROBLEMFilmDesignSystem_e8d583 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/MoneyCounter.jsx
try { (() => {
/**
 * THE PROBLEM — MoneyCounter
 * The signature device for howtoblow40million.com: a large dollar figure
 * that animates DOWN from a fortune toward zero when scrolled into view.
 * Gold, tabular, with a thin "ticking" feel. Tie copy to the $40M motif.
 */
function MoneyCounter({
  from = 40000000,
  to = 0,
  duration = 2600,
  delay = 0,
  // ms to hold the starting figure before counting
  prefix = '$',
  label = 'Career earnings, gone',
  size = 'lg',
  // 'sm' | 'md' | 'lg'
  autoStart = true,
  // start when scrolled into view
  style = {}
}) {
  const [value, setValue] = React.useState(from);
  const ref = React.useRef(null);
  const startedRef = React.useRef(false);
  const run = React.useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (typeof window === 'undefined' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }
    const animate = () => {
      const t0 = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - t0) / duration);
        // ease-out cubic
        const e = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(from + (to - from) * e));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (delay > 0) setTimeout(animate, delay);else animate();
  }, [from, to, duration, delay]);
  React.useEffect(() => {
    if (!autoStart) return;
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) run();
      });
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [autoStart, run]);
  const sizes = {
    sm: {
      fig: 'clamp(2rem,5vw,3rem)',
      label: 'var(--text-2xs)'
    },
    md: {
      fig: 'clamp(3rem,8vw,5rem)',
      label: 'var(--text-xs)'
    },
    lg: {
      fig: 'clamp(4rem,12vw,9rem)',
      label: 'var(--text-sm)'
    }
  };
  const s = sizes[size] || sizes.lg;
  const formatted = prefix + value.toLocaleString('en-US');
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: s.fig,
      lineHeight: 0.9,
      letterSpacing: '0.01em',
      color: 'var(--gold-500)',
      fontVariantNumeric: 'tabular-nums',
      textShadow: '0 0 38px rgba(199,162,76,0.28)',
      fontFeatureSettings: '"tnum" 1'
    }
  }, formatted), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.7em',
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      fontSize: s.label,
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { MoneyCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MoneyCounter.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * THE PROBLEM — Wordmark
 * The film's logo: "THE" in light condensed caps over "PROBLEM" in heavy
 * Anton with a brushed-metal fill. Scales by `size` (font-size of PROBLEM).
 */
function Wordmark({
  size = 64,
  // px number, or any CSS length (e.g. 'clamp(64px,13vw,168px)')
  showThe = true,
  align = 'left',
  // 'left' | 'center'
  tone = 'metal',
  // 'metal' | 'bone' | 'blood'
  style = {},
  ...rest
}) {
  const root = typeof size === 'number' ? `${size}px` : size;
  const fills = {
    metal: {
      backgroundImage: 'var(--metal-fill)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      filter: 'drop-shadow(0 1px 0 rgba(255,255,255,0.18)) drop-shadow(0 3px 16px rgba(0,0,0,0.55))'
    },
    bone: {
      color: 'var(--bone-50)'
    },
    blood: {
      color: 'var(--blood-500)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-block',
      textAlign: align,
      lineHeight: 'var(--leading-none)',
      fontSize: root,
      /* drives em-based children */
      ...style
    },
    "aria-label": "The Problem"
  }, rest), showThe && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-light)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      fontSize: '0.26em',
      color: 'var(--bone-200)',
      marginBottom: '0.04em',
      marginLeft: '0.12em'
    }
  }, "The"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.005em',
      paddingRight: '0.14em',
      fontSize: '1em',
      ...fills[tone]
    }
  }, "Problem"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * THE PROBLEM — Badge
 * Small condensed-caps label: act numbers, "Q2 2025", "NR", theme tags,
 * status flags. Square by default; pill optional.
 */
function Badge({
  children,
  variant = 'outline',
  // 'outline' | 'solid' | 'blood' | 'gold' | 'steel' | 'ghost'
  size = 'md',
  // 'sm' | 'md'
  pill = false,
  dot = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '3px 7px',
      fontSize: '0.625rem',
      gap: 5
    },
    md: {
      padding: '5px 10px',
      fontSize: 'var(--text-2xs)',
      gap: 6
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    outline: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-soft)'
    },
    solid: {
      background: 'var(--bone-50)',
      color: 'var(--ink-900)',
      border: '1px solid var(--bone-50)'
    },
    blood: {
      background: 'var(--blood-tint)',
      color: 'var(--blood-300)',
      border: '1px solid rgba(200,32,31,0.4)'
    },
    gold: {
      background: 'var(--gold-tint)',
      color: 'var(--gold-400)',
      border: '1px solid rgba(199,162,76,0.4)'
    },
    steel: {
      background: 'var(--steel-tint)',
      color: 'var(--steel-400)',
      border: '1px solid rgba(53,124,140,0.4)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    }
  };
  const dotColor = {
    outline: 'var(--text-muted)',
    solid: 'var(--ink-900)',
    blood: 'var(--blood-400)',
    gold: 'var(--gold-500)',
    steel: 'var(--steel-400)',
    ghost: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: s.fontSize,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      lineHeight: 1,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dotColor[variant],
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * THE PROBLEM — Button
 * Hard-edged, poster-grade. Primary = boxing red, condensed uppercase label.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost' | 'metal'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-xs)',
      height: 36,
      gap: 8
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--text-sm)',
      height: 46,
      gap: 10
    },
    lg: {
      padding: '16px 34px',
      fontSize: 'var(--text-base)',
      height: 58,
      gap: 12
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-condensed)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: s.fontSize,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wider)',
    lineHeight: 1,
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--blood-500)',
      color: 'var(--bone-50)',
      borderColor: 'var(--blood-500)',
      boxShadow: '0 8px 24px -10px rgba(200,32,31,0.6)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--bone-50)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      borderColor: 'transparent'
    },
    metal: {
      background: 'linear-gradient(180deg,#F4F4F6 0%,#C7CAD0 52%,#9A9EA6 100%)',
      color: 'var(--ink-900)',
      borderColor: 'rgba(255,255,255,0.4)',
      boxShadow: '0 8px 24px -12px rgba(0,0,0,0.8)'
    }
  };
  const hoverHandlers = disabled ? {} : {
    onMouseEnter: e => {
      const el = e.currentTarget;
      if (variant === 'primary') el.style.background = 'var(--blood-400)';else if (variant === 'secondary') {
        el.style.borderColor = 'var(--bone-50)';
      } else if (variant === 'ghost') el.style.color = 'var(--bone-50)';else if (variant === 'metal') el.style.filter = 'brightness(1.06)';
    },
    onMouseLeave: e => {
      const el = e.currentTarget;
      el.style.background = variants[variant].background;
      el.style.borderColor = variants[variant].borderColor || 'transparent';
      el.style.color = variants[variant].color;
      el.style.filter = 'none';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'translateY(1px) scale(0.99)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, hoverHandlers, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * THE PROBLEM — Card
 * Hard-edged content tile. A story/act card, interview card, or media tile.
 * Optional full-bleed image with bottom scrim + grain. Square corners,
 * hairline border, deep cinematic shadow on hover.
 */
function Card({
  children,
  image = null,
  // url for full-bleed media header
  imageHeight = 220,
  ratio = null,
  // e.g. '3 / 4' overrides imageHeight
  eyebrow = null,
  title = null,
  hover = true,
  accent = false,
  // blood top-rule
  as = 'article',
  style = {},
  bodyStyle = {},
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderTop: accent ? '2px solid var(--blood-500)' : '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover && h ? 'var(--shadow-pop)' : 'var(--shadow-card)',
      transform: hover && h ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: ratio ? 'auto' : imageHeight,
      aspectRatio: ratio || 'auto',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'saturate(0.92) contrast(1.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--grain-url)',
      backgroundSize: '160px 160px',
      opacity: 0.32,
      mixBlendMode: 'overlay'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 'var(--space-5)',
      ...bodyStyle
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--blood-400)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-tight)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-primary)'
    }
  }, title), children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * THE PROBLEM — Input
 * Dark, hairline-bordered text field. Used for the notify-me email capture.
 * Square corners, condensed-caps label, blood focus ring.
 */
function Input({
  label,
  hint,
  error,
  type = 'text',
  size = 'md',
  // 'md' | 'lg'
  iconLeft = null,
  id,
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const autoId = React.useId();
  const inputId = id || autoId;
  const heights = {
    md: 46,
    lg: 56
  };
  const h = heights[size] || heights.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: '0 14px',
      background: 'var(--surface-input)',
      border: `1px solid ${error ? 'var(--blood-500)' : focused ? 'var(--bone-200)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-xs)',
      boxShadow: focused ? '0 0 0 3px rgba(200,32,31,0.18)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      letterSpacing: '0.01em',
      ...inputStyle
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--blood-300)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/App.jsx
try { (() => {
/* THE PROBLEM — howtoblow40million.com — app shell */

// ▶ PASTE YOUR TRAILER EMBED URL HERE (YouTube/Vimeo "embed" form). Leave '' for the placeholder.
const TRAILER_URL = '';
function App() {
  const {
    Nav,
    Hero,
    Turn,
    Capture,
    SiteFooter,
    TrailerModal
  } = window;
  const [trailer, setTrailer] = React.useState(false);
  const openTrailer = () => setTrailer(true);
  const goNotify = () => {
    const el = document.getElementById('notify');
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 40,
      behavior: 'smooth'
    });
  };

  // scroll-reveal
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(ents => {
      ents.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.18
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    onTrailer: openTrailer,
    onNotify: goNotify
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onTrailer: openTrailer,
    onNotify: goNotify
  }), /*#__PURE__*/React.createElement(Turn, null), /*#__PURE__*/React.createElement(Capture, {
    onNotify: goNotify
  })), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(TrailerModal, {
    open: trailer,
    onClose: () => setTrailer(false),
    url: TRAILER_URL
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Capture.jsx
try { (() => {
/* THE PROBLEM — Email capture. The close, over the seated portrait. */
function Capture({
  onNotify
}) {
  const {
    Input,
    Button,
    Badge
  } = window.THEPROBLEMFilmDesignSystem_e8d583;
  const {
    Mail,
    ArrowRight
  } = window;
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "notify",
    style: {
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/broner-seated-throne.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 22%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(5,5,7,0.9) 0%, rgba(5,5,7,0.35) 50%, rgba(5,5,7,0.65) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--vignette)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tp-grain",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tp-container",
    style: {
      position: 'relative',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    },
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "blood",
    dot: true,
    size: "md",
    style: {
      marginBottom: 22
    }
  }, "Now in production"), /*#__PURE__*/React.createElement("h2", {
    className: "tp-heading",
    style: {
      fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 18px'
    }
  }, "The cameras", /*#__PURE__*/React.createElement("br", null), "kept rolling."), /*#__PURE__*/React.createElement("p", {
    className: "tp-editorial",
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--bone-200)',
      margin: '0 0 32px',
      maxWidth: 440
    }
  }, "Be there when it drops. One email \u2014 the day the film is released. Nothing else."), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '18px 22px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-sm)',
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement(Mail, {
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 'var(--text-sm)',
      color: 'var(--bone-100)'
    }
  }, "You're on the list. We'll be in touch.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "your@email.com",
    "aria-label": "Email address",
    iconLeft: /*#__PURE__*/React.createElement(Mail, {
      size: 18
    }),
    size: "lg",
    value: email,
    onChange: e => setEmail(e.target.value),
    style: {
      flex: '1 1 240px'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 16
    })
  }, "Notify Me")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "No spam. Unsubscribe anytime."))));
}
Object.assign(window, {
  Capture
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Capture.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Hero.jsx
try { (() => {
/* THE PROBLEM — Hero. The loud gear: wordmark + the $40M hook + count-down. */
function Hero({
  onTrailer,
  onNotify
}) {
  const {
    Wordmark,
    MoneyCounter,
    Button
  } = window.THEPROBLEMFilmDesignSystem_e8d583;
  const {
    PlaySolid,
    ArrowDown
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100svh',
      overflow: 'hidden',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/broner-glove-face.jpg",
    alt: "Adrien Broner, head bowed",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '78% 42%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--vignette)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tp-grain",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tp-container",
    style: {
      position: 'relative',
      zIndex: 3,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100svh',
      paddingTop: 72,
      paddingBottom: 60,
      maxWidth: 'var(--container-max)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    },
    className: "hero-rise"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tp-eyebrow",
    style: {
      marginBottom: 20,
      color: 'var(--bone-200)'
    }
  }, "Fordom Studio Presents"), /*#__PURE__*/React.createElement("div", {
    className: "hero-mark",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 118,
    showThe: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 4,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-light)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      fontSize: 'clamp(0.9rem, 2vw, 1.25rem)',
      color: 'var(--bone-100)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, "How to blow"), /*#__PURE__*/React.createElement(MoneyCounter, {
    from: 40000000,
    to: 0,
    size: "md",
    label: null,
    duration: 2800,
    delay: 9000
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)',
      margin: '0 0 36px'
    }
  }, "Four world titles. Forty million dollars. Gone on camera."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(PlaySolid, {
      size: 15
    }),
    onClick: onTrailer
  }, "Watch the Trailer"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onNotify
  }, "Get Notified")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--gutter) 22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, "NR \xA0\xB7\xA0 Documentary Feature \xA0\xB7\xA0 Q2 2025"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-muted)'
    },
    className: "scroll-cue"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      fontSize: 'var(--text-2xs)'
    }
  }, "Scroll"), /*#__PURE__*/React.createElement(ArrowDown, {
    size: 15
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Nav.jsx
try { (() => {
/* THE PROBLEM — sticky site header */
function Nav({
  onTrailer,
  onNotify
}) {
  const {
    Button
  } = window.THEPROBLEMFilmDesignSystem_e8d583;
  const {
    PlaySolid
  } = window;
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToId = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 56,
      behavior: 'smooth'
    });
  };
  const link = {
    fontFamily: 'var(--font-condensed)',
    fontWeight: 'var(--fw-medium)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wider)',
    fontSize: 'var(--text-2xs)',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    transition: 'color var(--dur-fast) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 'var(--z-sticky)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--gutter)',
      height: 64,
      background: solid ? 'rgba(8,9,11,0.72)' : 'transparent',
      backdropFilter: solid ? 'var(--blur-glass)' : 'none',
      WebkitBackdropFilter: solid ? 'var(--blur-glass)' : 'none',
      borderBottom: `1px solid ${solid ? 'var(--border-hairline)' : 'transparent'}`,
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 7,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 300,
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--bone-200)',
      textTransform: 'uppercase'
    }
  }, "The"), /*#__PURE__*/React.createElement("span", {
    className: "tp-wordmark",
    style: {
      fontSize: 22
    }
  }, "Problem")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: link,
    className: "nav-link",
    onClick: () => scrollToId('story')
  }, "The Story"), /*#__PURE__*/React.createElement("span", {
    style: link,
    className: "nav-link",
    onClick: onTrailer
  }, "Trailer"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(window.ArrowRight, {
      size: 14
    }),
    onClick: onNotify
  }, "Get Notified")));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteFooter.jsx
try { (() => {
/* THE PROBLEM — site footer */
function SiteFooter() {
  const {
    Instagram,
    XSocial,
    Youtube
  } = window;
  const socials = [{
    Icon: Instagram,
    label: 'Instagram'
  }, {
    Icon: XSocial,
    label: 'X'
  }, {
    Icon: Youtube,
    label: 'YouTube'
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-letterbox)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tp-container",
    style: {
      paddingTop: 56,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tp-wordmark",
    style: {
      fontSize: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tp-the"
  }, "The"), "Problem"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-light)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      marginTop: 14
    }
  }, "A Fordom Studio Production \xA0\xB7\xA0 The story of Adrien Broner")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, socials.map(({
    Icon,
    label
  }) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    "aria-label": label,
    className: "social-btn",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-xs)',
      border: '1px solid var(--border-soft)',
      color: 'var(--text-secondary)',
      transition: 'color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 18
  }))))), /*#__PURE__*/React.createElement("hr", {
    className: "tp-rule",
    style: {
      margin: '32px 0 22px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, "NR \xA0\xB7\xA0 Documentary Feature \xA0\xB7\xA0 Q2 2025"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--ink-500)'
    }
  }, "\xA9 2026 Fordom Studio. All rights reserved."))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/TrailerModal.jsx
try { (() => {
/* THE PROBLEM — trailer lightbox. Drop a YouTube/Vimeo embed URL in TRAILER_URL. */
function TrailerModal({
  open,
  onClose,
  url
}) {
  const {
    X,
    PlaySolid
  } = window;
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-modal)',
      background: 'rgba(3,3,4,0.92)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--gutter)',
      animation: 'tp-fade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 22,
      right: 24,
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-xs)',
      background: 'transparent',
      border: '1px solid var(--border-soft)',
      color: 'var(--bone-100)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(X, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(1120px, 100%)',
      aspectRatio: '16 / 9',
      background: '#000',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      position: 'relative'
    }
  }, url ? /*#__PURE__*/React.createElement("iframe", {
    src: url,
    title: "THE PROBLEM \u2014 Trailer",
    allow: "autoplay; fullscreen; picture-in-picture",
    allowFullScreen: true,
    style: {
      width: '100%',
      height: '100%',
      border: 0
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/broner-glove-face.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tp-grain",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 78,
      height: 78,
      borderRadius: '50%',
      border: '1.5px solid var(--border-strong)',
      color: 'var(--bone-50)'
    }
  }, /*#__PURE__*/React.createElement(PlaySolid, {
    size: 30
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, "Trailer dropping soon")))));
}
Object.assign(window, {
  TrailerModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/TrailerModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Turn.jsx
try { (() => {
/* THE PROBLEM — The Turn. Spectacle cools into the human story. */
function Turn() {
  const {
    Badge
  } = window.THEPROBLEMFilmDesignSystem_e8d583;
  const frames = [{
    src: '../../assets/imagery/victory-belt-crowd.jpg',
    cap: 'The lights',
    sub: 'Four divisions. A title in each.'
  }, {
    src: '../../assets/imagery/mri-cold.jpg',
    cap: 'The scans',
    sub: 'What the cameras never showed.'
  }, {
    src: '../../assets/imagery/funeral-church.jpg',
    cap: 'The cost',
    sub: 'The people the spotlight burned.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "story",
    style: {
      position: 'relative',
      background: 'var(--bg-page)',
      backgroundImage: 'var(--gradient-charcoal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tp-grain",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tp-container",
    style: {
      position: 'relative',
      zIndex: 2,
      paddingTop: 'clamp(80px,12vh,160px)',
      paddingBottom: 'clamp(72px,10vh,140px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tp-eyebrow tp-eyebrow--blood reveal"
  }, "The turn"), /*#__PURE__*/React.createElement("p", {
    className: "tp-editorial reveal",
    style: {
      fontSize: 'clamp(1.6rem, 3.6vw, 2.9rem)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--bone-100)',
      margin: '24px 0 0',
      textWrap: 'balance'
    }
  }, "Born into chaos and crowned in lights \u2014", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--bone-50)'
    }
  }, " only to unravel in front of the same cameras that once made him a star."))), /*#__PURE__*/React.createElement("div", {
    className: "turn-strip",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'clamp(10px,1.4vw,20px)',
      marginTop: 'clamp(48px,7vh,88px)'
    }
  }, frames.map((f, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    className: "reveal",
    style: {
      margin: 0,
      position: 'relative',
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: f.src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: i === 0 ? 'none' : i === 1 ? 'saturate(1.1)' : 'saturate(0.85)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: 16,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 'var(--text-lg)',
      color: 'var(--bone-50)'
    }
  }, f.cap), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 'var(--text-sm)',
      color: 'var(--bone-200)',
      marginTop: 4
    }
  }, f.sub))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      marginTop: 'clamp(48px,7vh,88px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'clamp(16px,3vw,40px)',
      flexWrap: 'wrap',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "gold",
    size: "md"
  }, "4-Division World Champion"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 'var(--fw-light)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 'clamp(0.8rem,1.5vw,1rem)',
      color: 'var(--text-secondary)',
      maxWidth: 520
    }
  }, "One of only four fighters to win titles at 130, 135, 140 & 147 lbs."))));
}
Object.assign(window, {
  Turn
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Turn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* THE PROBLEM — site icon set (Lucide-style, 1.75px stroke, currentColor) */
const Icon = ({
  d,
  size = 18,
  fill = 'none',
  stroke = 'currentColor',
  sw = 1.75,
  children,
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: stroke,
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rest), d ? /*#__PURE__*/React.createElement("path", {
  d: d
}) : children);
const PlaySolid = ({
  size = 16,
  ...r
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, r), /*#__PURE__*/React.createElement("path", {
  d: "M7 4.5v15l13-7.5z"
}));
const Mail = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3.5 6.5 8.5 6 8.5-6"
}));
const ArrowRight = p => /*#__PURE__*/React.createElement(Icon, _extends({
  d: "M5 12h14M13 6l6 6-6 6"
}, p));
const ArrowDown = p => /*#__PURE__*/React.createElement(Icon, _extends({
  d: "M12 5v14M6 13l6 6 6-6"
}, p));
const Volume = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M11 5 6 9H3v6h3l5 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 9a4 4 0 0 1 0 6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6a8 8 0 0 1 0 12"
}));
const X = p => /*#__PURE__*/React.createElement(Icon, _extends({
  d: "M6 6l12 12M18 6L6 18"
}, p));
const Instagram = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.5",
  cy: "6.5",
  r: "0.5",
  fill: "currentColor"
}));
const XSocial = p => /*#__PURE__*/React.createElement(Icon, _extends({
  d: "M4 4l16 16M20 4 4 20"
}, p));
const Youtube = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "2.5",
  y: "6",
  width: "19",
  height: "12",
  rx: "3.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 9.5v5l4.5-2.5z",
  fill: "currentColor",
  stroke: "none"
}));
Object.assign(window, {
  Icon,
  PlaySolid,
  Mail,
  ArrowRight,
  ArrowDown,
  Volume,
  X,
  Instagram,
  XSocial,
  Youtube
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MoneyCounter = __ds_scope.MoneyCounter;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
